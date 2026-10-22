# Setting up the online database (Supabase)

The **Magtanong / Ask an Office** inquiries, the **Staff Desk**, and
**staff-posted announcements** need a shared online database so that a
resident's question on one phone reaches the staff on another. The app uses
[Supabase](https://supabase.com) for this. The free plan is enough to start.

Until this is set up, the app still works: inquiries are shared or copied
(like problem reports), and the Desk page says it isn't set up yet.

Setup takes about 15 minutes.

## 1. Create the project

1. Go to <https://supabase.com> → **Start your project** → sign in with GitHub.
2. Click **New project**.
   - **Name:** `bayan-ng-montalban`
   - **Database password:** click **Generate a password**, then save it somewhere safe.
   - **Region:** **Southeast Asia (Singapore)**, the closest to Montalban.
3. Click **Create new project** and wait about 2 minutes.

## 2. Create the tables and security rules

1. In the left menu open **SQL Editor** → **New query**.
2. Open [`supabase/schema.sql`](supabase/schema.sql) from this repository, copy
   **everything**, paste it into the editor, and click **Run**.
3. You should see "Success. No rows returned".

This sets up who can do what:

| Who | Can |
| --- | --- |
| Residents (no login) | Send inquiries; see only their **own** inquiries and the answers; read announcements |
| Staff (logged in and listed as staff) | Read and answer inquiries for their office (or all offices); post and delete announcements |
| Anyone else, including a logged-in account that isn't on the staff list | Nothing beyond what residents can do |

## 3. Turn off public sign-ups

Only you should create staff accounts.

**Authentication** → **Sign In / Providers** (or **Providers** → **Email**) →
turn **off** "Allow new users to sign up" → **Save**.

## 4. Add staff accounts

For each staff member:

1. **Authentication** → **Users** → **Add user** → **Create new user**.
   Enter their email and a password, tick **Auto Confirm User**, then **Create user**.
2. **SQL Editor** → **New query**, paste the following, change the name, email
   and office, then **Run**:

   ```sql
   insert into public.staff (user_id, display_name, office_id)
   select id, 'Juan dela Cruz', 'bplo'
   from auth.users where email = 'juan@example.com';
   ```

   Use `null` (without quotes) instead of `'bplo'` for someone who handles
   **all offices**, such as the Public Information Office or an administrator.

Office codes:

| Code | Office | Code | Office |
| --- | --- | --- | --- |
| `mayor` | Office of the Mayor | `osca` | OSCA (Senior Citizens) |
| `civil-registrar` | Municipal Civil Registrar | `pdao` | PDAO (PWD) |
| `bplo` | Business Permits & Licensing | `rhu` | Municipal Health Office |
| `treasurer` | Municipal Treasurer | `engineering` | Municipal Engineering |
| `assessor` | Municipal Assessor | `mpdo` | Planning & Development / Zoning |
| `mswdo` | Social Welfare (MSWDO) | `mdrrmo` | MDRRMO |
| `peso` | PESO | `agri` | Municipal Agriculture |
| `menro` | MENRO | | |

To remove someone's staff access:

```sql
delete from public.staff
where user_id = (select id from auth.users where email = 'juan@example.com');
```

## 5. Connect the app

1. **Project Settings** → **API Keys** (or **Data API**). Copy:
   - the **Project URL**, like `https://abcdxyz.supabase.co`
   - the **anon / publishable** key, which starts with `eyJ…` or `sb_publishable_…`
2. Put them in [`www/config.js`](www/config.js):

   ```js
   window.APP_CONFIG = {
     supabaseUrl: "https://abcdxyz.supabase.co",
     supabaseAnonKey: "eyJ…"
   };
   ```

   Then commit and push. The web app updates by itself, and the next APK
   build includes it. You can also send both values to Claude and ask it to
   do this step.

The anon/publishable key is meant to be public. The security rules from step 2
protect the data. **Never** put the `service_role` or `secret` key in the
app or share it.

## 6. Try it

1. On the app, open **Magtanong**, send a test question, and note the reference number.
2. Go to **Home** → scroll to the bottom → **Para sa staff: mag-login**, then
   log in with a staff account. A **Desk** button appears at the top.
3. Answer the question and **I-save**. On the resident's phone, open **Magtanong** →
   **Aking mga tanong** → **I-refresh** to see the answer.
4. In the Desk, open **Mag-post ng anunsyo** to post an announcement. It appears on Home.

## Good to know

- **Free plan limits:** 500 MB database and 50,000 monthly users, far more than
  this needs. A free project is **paused after 1 week with no activity**; open
  the Supabase dashboard and click **Restore** if that happens. Upgrading to a
  paid plan avoids pauses.
- **Privacy:** residents' names and contact numbers are visible only to staff of
  the office the question was sent to. They are not stored on the resident's phone.
- **Spam protection:** a phone can send at most 10 inquiries per hour.
- **Changing the rules:** edit `supabase/schema.sql` and run it again. It is safe to
  re-run and doesn't delete data.
