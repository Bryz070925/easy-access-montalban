-- Bayan ng Montalban app: database for inquiries and announcements.
--
-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.
-- It is safe to run again (it drops and recreates the functions and policies,
-- but never deletes data).
--
-- Who can do what:
--   * Residents (no login): send an inquiry and read back THEIR OWN inquiries
--     (by the private token their phone keeps). They can read announcements.
--   * Staff (log in; listed in public.staff): read and answer inquiries for
--     their office (or all offices if office_id is null), post and delete
--     announcements.
--   * Admins (staff with is_admin): also add, change and remove staff from the
--     app's Desk, through the "staff-admin" Edge Function.

create extension if not exists pgcrypto;

-- ---------- Tables ----------

create table if not exists public.staff (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 80),
  office_id    text,                       -- null = can see every office
  created_at   timestamptz not null default now()
);
-- Admins can manage staff from the app (added after the first version).
alter table public.staff add column if not exists is_admin boolean not null default false;
-- First run after upgrading: make the all-offices staff the first admins.
update public.staff set is_admin = true
where office_id is null and not exists (select 1 from public.staff where is_admin);

create table if not exists public.inquiries (
  id           uuid primary key default gen_random_uuid(),
  ref          text not null unique,
  client_token text not null,              -- secret kept on the resident's phone
  office_id    text not null check (char_length(office_id) <= 40),
  topic        text check (char_length(topic) <= 200),
  question     text not null check (char_length(question) between 5 and 2000),
  name         text check (char_length(name) <= 120),
  contact      text check (char_length(contact) <= 120),
  barangay     text check (char_length(barangay) <= 60),
  status       text not null default 'new' check (status in ('new', 'in_progress', 'answered', 'closed')),
  reply        text check (char_length(reply) <= 4000),
  replied_by   text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists inquiries_created_idx on public.inquiries (created_at desc);
create index if not exists inquiries_token_idx on public.inquiries (client_token);

create table if not exists public.announcements (
  id         uuid primary key default gen_random_uuid(),
  title      text not null check (char_length(title) between 3 and 160),
  body       text not null check (char_length(body) between 3 and 4000),
  category   text not null default 'advisory' check (category in ('advisory', 'schedule', 'program', 'emergency')),
  office_id  text check (char_length(office_id) <= 40),
  posted_by  text,
  created_at timestamptz not null default now()
);
create index if not exists announcements_created_idx on public.announcements (created_at desc);

-- ---------- Helpers ----------

-- Is the logged-in user staff, and may they handle this office?
create or replace function public.staff_can(p_office text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.staff s
    where s.user_id = auth.uid() and (s.office_id is null or s.office_id = p_office)
  );
$$;

create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.staff where user_id = auth.uid());
$$;

-- Keep updated_at fresh and record which staff member replied.
create or replace function public.inquiries_touch()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  new.updated_at := now();
  if new.reply is distinct from old.reply then
    new.replied_by := (select display_name from public.staff where user_id = auth.uid());
  end if;
  return new;
end $$;
drop trigger if exists inquiries_touch on public.inquiries;
create trigger inquiries_touch before update on public.inquiries
  for each row execute function public.inquiries_touch();

create or replace function public.announcements_stamp()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  new.posted_by := (select display_name from public.staff where user_id = auth.uid());
  new.created_at := now();
  return new;
end $$;
drop trigger if exists announcements_stamp on public.announcements;
create trigger announcements_stamp before insert on public.announcements
  for each row execute function public.announcements_stamp();

-- ---------- Row level security ----------

alter table public.staff enable row level security;
alter table public.inquiries enable row level security;
alter table public.announcements enable row level security;

drop policy if exists staff_read_self on public.staff;
create policy staff_read_self on public.staff for select to authenticated
  using (user_id = auth.uid());

drop policy if exists inquiries_staff_read on public.inquiries;
create policy inquiries_staff_read on public.inquiries for select to authenticated
  using (public.staff_can(office_id));

drop policy if exists inquiries_staff_update on public.inquiries;
create policy inquiries_staff_update on public.inquiries for update to authenticated
  using (public.staff_can(office_id)) with check (public.staff_can(office_id));

drop policy if exists announcements_read on public.announcements;
create policy announcements_read on public.announcements for select to anon, authenticated
  using (true);

drop policy if exists announcements_staff_insert on public.announcements;
create policy announcements_staff_insert on public.announcements for insert to authenticated
  with check (public.is_staff());

drop policy if exists announcements_staff_delete on public.announcements;
create policy announcements_staff_delete on public.announcements for delete to authenticated
  using (public.is_staff());

-- Table privileges: residents never touch inquiries directly (only through
-- the functions below); staff may only change status and reply.
revoke all on public.staff, public.inquiries, public.announcements from anon, authenticated;
grant select on public.staff to authenticated;
grant select on public.inquiries to authenticated;
grant update (status, reply) on public.inquiries to authenticated;
grant select on public.announcements to anon, authenticated;
grant insert (title, body, category, office_id), delete on public.announcements to authenticated;

-- ---------- Resident functions (no login needed) ----------

create or replace function public.submit_inquiry(
  p_office_id text, p_topic text, p_question text,
  p_name text, p_contact text, p_barangay text, p_client_token text
) returns text
language plpgsql security definer set search_path = public as $$
declare v_ref text;
begin
  if p_client_token is null or char_length(p_client_token) < 32 or char_length(p_client_token) > 100 then
    raise exception 'invalid client token';
  end if;
  -- Flood protection: at most 10 inquiries per phone per hour.
  if (select count(*) from public.inquiries
      where client_token = p_client_token and created_at > now() - interval '1 hour') >= 10 then
    raise exception 'too many inquiries, please try again later';
  end if;
  loop
    v_ref := 'INQ-' || to_char(now() at time zone 'Asia/Manila', 'YYMMDD') || '-' ||
             upper(substr(md5(gen_random_uuid()::text), 1, 5));
    exit when not exists (select 1 from public.inquiries where ref = v_ref);
  end loop;
  insert into public.inquiries (ref, client_token, office_id, topic, question, name, contact, barangay)
  values (v_ref, p_client_token, p_office_id, nullif(trim(p_topic), ''), trim(p_question),
          nullif(trim(p_name), ''), nullif(trim(p_contact), ''), nullif(trim(p_barangay), ''));
  return v_ref;
end $$;

create or replace function public.my_inquiries(p_client_token text)
returns table (ref text, office_id text, topic text, question text, status text,
               reply text, replied_by text, created_at timestamptz, updated_at timestamptz)
language sql stable security definer set search_path = public as $$
  select i.ref, i.office_id, i.topic, i.question, i.status, i.reply, i.replied_by, i.created_at, i.updated_at
  from public.inquiries i
  where p_client_token is not null and char_length(p_client_token) >= 32 and i.client_token = p_client_token
  order by i.created_at desc
  limit 50;
$$;

-- Who am I? (lets the app show the staff Desk only to staff)
drop function if exists public.whoami();
create function public.whoami()
returns table (display_name text, office_id text, is_admin boolean)
language sql stable security definer set search_path = public as $$
  select s.display_name, s.office_id, s.is_admin from public.staff s where s.user_id = auth.uid();
$$;

-- Supabase grants new functions to anon/authenticated by default, so revoke
-- from those roles too, then grant back only what each role needs.
revoke all on function public.submit_inquiry(text, text, text, text, text, text, text) from public, anon, authenticated;
revoke all on function public.my_inquiries(text) from public, anon, authenticated;
revoke all on function public.whoami() from public, anon, authenticated;
revoke all on function public.staff_can(text) from public, anon, authenticated;
revoke all on function public.is_staff() from public, anon, authenticated;
revoke all on function public.inquiries_touch() from public, anon, authenticated;
revoke all on function public.announcements_stamp() from public, anon, authenticated;
grant execute on function public.submit_inquiry(text, text, text, text, text, text, text) to anon, authenticated;
grant execute on function public.my_inquiries(text) to anon, authenticated;
grant execute on function public.whoami() to authenticated;
grant execute on function public.staff_can(text) to authenticated;
grant execute on function public.is_staff() to authenticated;
