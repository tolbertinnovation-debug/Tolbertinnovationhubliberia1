# Learning Hub — cross-device student login (Supabase Auth bridge)

This documents the "Auth for new users, keep everyone else" login upgrade, so a
student can sign in with the same email and password from **any phone, computer,
browser, or private/incognito window** — while every existing account and all
learning data keep working untouched.

## Root cause it fixes

Student accounts already lived in the `public.students` table and logged in
cross-device through the `student_login` SECURITY DEFINER RPC. But a **new**
account was written to that table best-effort (fire-and-forget, retried only
while a tab stayed open). On the weak connections many learners use, that write
could silently fail, so the account existed **only in the browser that signed
up** and could never log in anywhere else.

## The fix

* **New signups also create a Supabase Auth account** (`supabase.auth.signUp`).
  Auth is a single authoritative write — it either succeeds (durable,
  cross-device by design) or returns an error — so a new account is never
  silently device-only again.
* **Profiles stay in `public.students`, keyed by their `TIH-STU-` id.** A new
  nullable column `students.auth_user_id` links a profile to its Auth user.
  Enrollments, progress, cert requests and certificates stay keyed to the
  `TIH-STU-` id, so **nothing is re-linked or orphaned.**
* **Existing learners are never locked out.** They keep `auth_user_id = NULL`
  and keep logging in through `student_login`. The first time they log in after
  this change, their password is proven and their profile is linked to a fresh
  Auth account automatically (`maybeUpgradeToAuth`), so from then on the same
  credentials work on any device.
* **Login order:** Supabase Auth (`signInWithPassword`) first when the learner
  signs in with an email; on any miss it falls back to the legacy `student_login`
  RPC and then the local cache (offline). Student-ID logins go straight to the
  legacy path (Auth is keyed by email).
* **Sessions:** the dashboard restores a session from Supabase Auth
  (`getUser` / `student_me`) so a brand-new device with empty storage still
  opens the right account; unauthenticated visitors fall through to the login
  view. Logout ends the Auth session (it never deletes the account). Password
  changes are mirrored into Auth so credentials stay in step.

## What you must do in Supabase (one time)

1. **Run the migration.** In the Supabase SQL editor, run
   [`supabase-auth.sql`](supabase-auth.sql) **after** `supabase-schema.sql`. It
   is additive and safe to re-run: it adds `students.auth_user_id`, the
   `student_claim` and `student_me` functions, and a self-read policy. It
   changes no existing data and drops nothing.
2. **Turn OFF email confirmation** for instant cross-device use:
   Dashboard → **Authentication → Providers → Email** → uncheck **"Confirm
   email"**. With it ON, a new learner can still register, but cannot sign in on
   a *second* device until they click a confirmation email. (The account is
   created either way; only the second-device sign-in waits for confirmation.)
3. Nothing else. The site keeps using the existing **anon (publishable) key** in
   `hub-config.js`. **No service-role key is ever placed in frontend code.**

## Environment / config

* `hub-config.js` — `window.TIH_SUPABASE_CONFIG.url` and `.anonKey` (the public
  anon key). Already present; unchanged.
* No new environment variables.

## Files changed

| File | Change |
|------|--------|
| `supabase-auth.sql` | **New.** `auth_user_id` column, `student_claim`, `student_me`, self-read RLS policy. |
| `hub-cloud.js` | New student-auth helpers: `studentAuthSignUp`, `studentAuthSignIn`, `studentAuthSignOut`, `studentAuthUser`, `studentClaim`, `studentMe`, `studentAuthUpdatePassword`, `onStudentAuthChange`. `stuFromRow` now carries `auth_user_id`. |
| `hub-db.js` | `registerStudent` provisions + links an Auth account; `studentLogin` is Auth-first with legacy fallback and auto-upgrade of pre-Auth accounts; `studentLogout` ends the Auth session; new `verifyStudentSession`; `changeStudentPassword` mirrors into Auth. |
| `hub-dashboard.html` | Cross-device session restore via `verifyStudentSession`; `SIGNED_OUT` returns the learner to the login view (guarded so legacy sessions are untouched). |
| `*.html` | `hub-db.js` → `?v=41`, `hub-cloud.js` → `?v=18` cache-busting. |

## Verified

`tools`-style Playwright run with an in-memory Supabase stand-in, exercising the
real `hub-cloud.js` / `hub-db.js` across separate browser contexts ("devices") —
18/18 assertions, zero JS errors:

* register on device A → durable Auth account + linked profile + auto sign-in;
* log in on device B (fresh, cleared storage) via Auth → same account;
* `verifyStudentSession` restores the account on device B;
* wrong password and nonexistent account rejected;
* legacy (pre-Auth) account logs in, auto-upgrades to Auth, then logs in on
  another device via Auth;
* logout clears both sessions but preserves the account; re-login works.
