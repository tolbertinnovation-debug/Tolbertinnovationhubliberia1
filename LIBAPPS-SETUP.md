# LibApps — setup

LibApps is the APK store inside the Tolbert Innovation Hub site. It runs on the
Supabase project the Learning Hub already uses, and on the same learner
accounts, so anyone who signed up at `hub-apply.html` can use it with that
login. There is no second account and no second database.

**Publishing is administrator-only.** Members browse, download, like and
comment; only an administrator can put an app in the store. See
[Who can publish](#5-who-can-publish) for how that is enforced and how to open
it up later.

Pages:

| Page | What it is |
|---|---|
| `libapps.html` | Landing page for signed-out visitors, the store for members |
| `libapps-app.html?id=…` | One app: download, likes, comments |
| `libapps-upload.html` | Publish a new app, or `?edit=<id>` to change one (administrators only) |
| `libapps-dashboard.html` | A member's own apps and how they are doing |
| `libapps-profile.html?id=…` | A builder's public profile |
| `libapps-admin.html` | Moderation: reports, take-downs, comments |

---

## 1. Run the database script

This is the only setup step. Nothing needs to be installed and no keys need to
change: `hub-config.js` already points at your Supabase project.

1. Open <https://supabase.com/dashboard> and pick the TIH project
   (`oracluubhmxobcnsvcxz`).
2. Go to **SQL Editor → New query**.
3. Open `libapps-schema.sql` from this repository, copy all of it, paste it in.
4. Click **Run**.

It is safe to run more than once. Nothing in `supabase-schema.sql` is touched.

You should see, under **Table Editor**, four new tables: `libapps_apps`,
`libapps_likes`, `libapps_comments` and `libapps_reports`.

### If the storage part fails

The script creates two storage buckets. Some Supabase versions will not let SQL
write to `storage.buckets`. If those statements error, make the buckets by hand
under **Storage → New bucket**:

| Bucket | Public? | File size limit | Allowed types |
|---|---|---|---|
| `libapps-apks` | **No** | 50 MB | `application/vnd.android.package-archive`, `application/octet-stream`, `application/zip` |
| `libapps-images` | **Yes** | 3 MB | `image/png`, `image/jpeg`, `image/webp`, `image/gif` |

Then re-run just the four `create policy` statements at the end of the script.

---

## 2. Check it works

1. Push to `main`. GitHub Pages redeploys on its own.
2. Open `https://tolbertinnovationhub.org/libapps` while signed out. You should
   see the landing page with the store's totals and no app names.
3. Sign in at `hub-dashboard`, come back, and the store should appear.
4. Upload something small to `libapps-upload` and check it appears.

To publish an app you need **both** sessions on the same browser: sign in as a
learner at `hub-dashboard` (that account owns the listing) and as an
administrator at `hub-admin` (that is what grants permission). Then open
`libapps-upload`. To moderate, the admin sign-in alone is enough: open
`libapps-admin`.

---

## 3. The free-tier limits, and what happens when you hit them

These are the real numbers on the Supabase free plan. They matter sooner than
you would expect for a store that serves APK files.

| | Free plan | What that means here |
|---|---|---|
| File storage | 1 GB | About **20 apps** at 50 MB, or 100 at 10 MB |
| Egress (downloads) | 5 GB / month | About **100 downloads/month** of a 50 MB app, or 500 of a 10 MB one |
| Database | 500 MB | Thousands of listings and comments — not the constraint |
| Single upload | 50 MB | Enforced in the browser, in the database, and by the bucket |

**Egress is the wall you hit first.** Storage fills slowly; bandwidth is spent
every single time somebody downloads. A single popular 40 MB app can use the
whole month's allowance in 125 downloads, and when it runs out downloads stop
working until the month rolls over.

Three ways to deal with it, cheapest first:

1. **Ask for smaller APKs.** Most useful Liberian-market apps fit in 10–15 MB.
   Dropping the cap from 50 MB to 15 MB multiplies both limits by three. Change
   `MAX_APK_MB` in `libapps-db.js` and the two `50` checks in
   `libapps-schema.sql`.
2. **Host the files on GitHub Releases** instead of Supabase Storage. Public
   repositories have no bandwidth cap and allow 2 GB per file. Supabase would
   keep only the listing, and `apk_path` would hold the release URL.
3. **Upgrade the Supabase plan** ($25/month at the time of writing) for 100 GB
   of storage and 250 GB of egress.

The moderation panel shows storage as a percentage and warns at 50% and 80%,
so you get notice before uploads start failing.

### The per-account cap

One account can publish **12 apps**. Without a cap, one uploader could fill the
whole 1 GB. The number is enforced in `libapps_publish()` in
`libapps-schema.sql` — change the `12` there if you upgrade the plan.

---

## 4. How the security works

The site is static, so the Supabase anon key sits in `hub-config.js` where
anybody can read it. The design assumes that:

- Every LibApps table has row level security on **with no policies at all**.
  With the anon key you cannot read or write them — not even a `SELECT`.
- Everything goes through `SECURITY DEFINER` functions that re-check the
  member's id and password hash on every single call, exactly the way
  `student_set_password()` in `supabase-schema.sql` already does. A forged
  student id from the browser console gets `LIBAPPS_AUTH_REQUIRED` back.
- **`apk_path` is never returned by any browse or read function.** The only way
  to find out where a file lives is `libapps_download()`, which authenticates
  first and counts the download in the same statement. "You need an account to
  download" is a database rule, not a screen that can be skipped.
- A member's email, phone and password hash are never returned by the profile
  function.
- Moderation reuses the existing `is_admin_hash()` gate, so the admin password
  that opens `hub-admin.html` is the one that works here.

**What this does not stop.** Anyone holding the anon key can write a file into
the storage buckets directly, because a static site cannot prove who is
uploading. Such a file has no listing pointing at it, so it never appears in
the store, and you can empty the bucket from the Storage dashboard. This is the
same trade-off the Learning Hub already makes for application submissions.

To verify the database rules yourself, against a throwaway Postgres rather than
the live project:

```sh
psql -f tools/libapps-test-stubs.sql
psql -f libapps-schema.sql
psql -f tools/libapps-schema-test.sql   # every line should read PASS
```

---

## 5. Who can publish

Only an administrator can put an app in LibApps. This is enforced in the
database, not just in the page: `libapps_publish()` and `libapps_update()` both
require a valid admin password hash and raise `LIBAPPS_ADMIN_ONLY_UPLOAD`
without one. Calling the function straight from the browser console with a
member's credentials is refused exactly the same way.

The upload page hides its form from anyone without an admin session and points
them at WhatsApp instead, so a member who has built something can send it in
and have it published for them.

**To let members publish later**, delete the `LIBAPPS_ADMIN_ONLY_UPLOAD` check
from `libapps_publish()` and from `libapps_update()` in `libapps-schema.sql`,
re-run the script, and remove the `LibApps.canUpload()` guards in
`libapps-upload.html`, `libapps.html` and `libapps-dashboard.html`. Nothing
else depends on it. If you do that, read the section below first.

## 6. Uploaded APKs, and what you are taking on

Apps go live the moment they are published; there is no approval queue. With
publishing restricted to administrators that is fine, because the only person
who can publish is the person who would have approved it. **If you ever open
publishing up to members, that stops being true** — a malicious APK would be
downloadable under the tolbertinnovationhub.org name until somebody noticed.

What is in place:

- The browser refuses anything that is not really an Android package. It checks
  the ZIP signature and looks for `AndroidManifest.xml` in the archive, so a
  renamed photo or Windows program is stopped before it uploads.
- Every app page carries a plain warning that TIH does not test what members
  upload, and tells the reader to keep Play Protect on.
- Any member can report an app. Reports land in `libapps-admin.html`.
- An administrator can take an app down (reversible, with a reason the uploader
  sees) or delete it outright along with its file.

What is **not** in place: nobody scans the APKs for malware. If you later open
publishing to members, add an approval queue at the same time. The database
already supports it — make `status` default to `'pending'` in `libapps_apps`
and add `'pending'` to the list `libapps_admin_set_status()` accepts.
