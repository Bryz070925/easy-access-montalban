// Supabase Edge Function "staff-admin": lets admins manage staff accounts from
// the app's Desk. Creating login accounts needs the service role key, which
// must never ship inside the app, so it lives here on Supabase's servers.
//
// Deploy: Supabase Dashboard -> Edge Functions -> Deploy a new function ->
// Via Editor -> name it "staff-admin" -> paste this file -> Deploy.
// See SUPABASE-SETUP.md, step 7.
//
// Every request must carry a logged-in staff member's access token, and that
// staff member must have is_admin = true.

import { createClient } from "npm:@supabase/supabase-js@2";

const OFFICES = [
  "mayor", "civil-registrar", "bplo", "treasurer", "assessor", "mswdo", "osca", "pdao",
  "rhu", "engineering", "mpdo", "mdrrmo", "peso", "agri", "menro",
];

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function reply(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

class Fail extends Error {
  constructor(message: string, public status = 400) { super(message); }
}

function cleanName(v: unknown) {
  const s = String(v ?? "").trim();
  if (s.length < 2 || s.length > 80) throw new Fail("Name must be 2 to 80 characters.");
  return s;
}
function cleanOffice(v: unknown) {
  if (v === null || v === "" || v === undefined) return null;
  if (!OFFICES.includes(String(v))) throw new Fail("Unknown office.");
  return String(v);
}
function cleanPassword(v: unknown) {
  const s = String(v ?? "");
  if (s.length < 8 || s.length > 72) throw new Fail("Password must be 8 to 72 characters.");
  return s;
}
function cleanEmail(v: unknown) {
  const s = String(v ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) || s.length > 254) throw new Fail("Invalid email address.");
  return s;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return reply({ error: "Use POST." }, 405);

  const url = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const db = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

  try {
    // Who is calling, and are they an admin?
    const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: auth, error: authErr } = await db.auth.getUser(token);
    if (authErr || !auth?.user) throw new Fail("Please log in again.", 401);
    const me = auth.user;
    const { data: meStaff, error: meErr } = await db.from("staff").select("is_admin").eq("user_id", me.id).maybeSingle();
    if (meErr) throw meErr;
    if (!meStaff?.is_admin) throw new Fail("Only admins can manage staff.", 403);

    const body = await req.json().catch(() => ({}));

    switch (body.action) {
      case "list": {
        const { data: rows, error } = await db.from("staff").select("user_id, display_name, office_id, is_admin, created_at").order("display_name");
        if (error) throw error;
        const emails: Record<string, string> = {};
        for (let page = 1; page < 50; page++) {
          const { data, error: e } = await db.auth.admin.listUsers({ page, perPage: 1000 });
          if (e) throw e;
          for (const u of data.users) emails[u.id] = u.email ?? "";
          if (data.users.length < 1000) break;
        }
        return reply({ staff: rows.map((r) => ({ ...r, email: emails[r.user_id] ?? "", me: r.user_id === me.id })) });
      }

      case "create": {
        const email = cleanEmail(body.email);
        const name = cleanName(body.display_name);
        const office = cleanOffice(body.office_id);
        const password = cleanPassword(body.password);
        const { data: created, error } = await db.auth.admin.createUser({ email, password, email_confirm: true });
        if (error) {
          if (/already|registered|exists/i.test(error.message)) throw new Fail("That email already has an account.", 409);
          throw error;
        }
        const { error: insErr } = await db.from("staff").insert({
          user_id: created.user.id, display_name: name, office_id: office, is_admin: !!body.is_admin,
        });
        if (insErr) {
          await db.auth.admin.deleteUser(created.user.id); // don't leave a login without staff access
          throw insErr;
        }
        return reply({ ok: true, user_id: created.user.id });
      }

      case "update": {
        const id = String(body.user_id ?? "");
        const changes: Record<string, unknown> = {};
        if ("display_name" in body) changes.display_name = cleanName(body.display_name);
        if ("office_id" in body) changes.office_id = cleanOffice(body.office_id);
        if ("is_admin" in body) {
          if (id === me.id && !body.is_admin) throw new Fail("You can't remove your own admin access.");
          changes.is_admin = !!body.is_admin;
        }
        const { data, error } = await db.from("staff").update(changes).eq("user_id", id).select("user_id");
        if (error) throw error;
        if (!data.length) throw new Fail("Staff member not found.", 404);
        return reply({ ok: true });
      }

      case "reset_password": {
        const id = String(body.user_id ?? "");
        const password = cleanPassword(body.password);
        const { data: row } = await db.from("staff").select("user_id").eq("user_id", id).maybeSingle();
        if (!row) throw new Fail("Staff member not found.", 404);
        const { error } = await db.auth.admin.updateUserById(id, { password });
        if (error) throw error;
        return reply({ ok: true });
      }

      case "remove": {
        const id = String(body.user_id ?? "");
        if (id === me.id) throw new Fail("You can't remove yourself.");
        const { data: row } = await db.from("staff").select("user_id").eq("user_id", id).maybeSingle();
        if (!row) throw new Fail("Staff member not found.", 404);
        // Deleting the login also removes the staff row (on delete cascade).
        const { error } = await db.auth.admin.deleteUser(id);
        if (error) throw error;
        return reply({ ok: true });
      }

      default:
        throw new Fail("Unknown action.");
    }
  } catch (e) {
    const status = e instanceof Fail ? e.status : 500;
    const message = e instanceof Fail ? e.message : "Server error: " + ((e as Error)?.message ?? String(e));
    return reply({ error: message }, status);
  }
});
