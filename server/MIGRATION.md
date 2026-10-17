# TIH database migration status

Updated 2026-10-17. Production cutover is **not complete**.

## Learner workspace added

`migration-learner-preview` supports older learner credentials via
`POST /api/legacy-learner-preview`. The existing Supabase RPC verifies the
SHA-256 proof; its HTTP response is projected to `id,status` only. All 116
unlinked source profiles currently use this supported format. No hashes are
copied, returned to the browser, or persisted by this endpoint. A source outage
fails closed. A database-backed HMAC-keyed limiter allows five attempts per
login label per five-minute bucket; email/Student-ID aliases have separate
buckets. This is not a replacement for platform abuse protection.

On success, a 15-minute signed HttpOnly/Secure/SameSite=Strict preview cookie
is issued. `/api/learner-preview` validates its signature and expiry before
using its subject for RLS. It supports account reads, pending access requests,
granted-course progress saves and pending certificate requests. Browser writes
require same-origin JSON. Logout clears the preview cookie. Sessions remain
valid until expiry if credentials change during that window.

The compatibility role can insert pending enrollments, update its own granted
course progress, append constrained activity entries and submit pending
certificate requests. It cannot edit learner credentials, grant course access,
write payments, approve requests, issue certificates, or access the private
archive. The server uses fixed catalog totals; progress updates are monotonic.
Progress is learner-reported and does not prove completion of lessons or exams.
Certificate requests are not automatic issuance and still require staff review.

Migrations `002` and `003` apply only to `migration-write-tests`. Real database
tests with synthetic learners verified identity isolation, progress persistence
and monotonic updates, incomplete-course refusal, pending request creation,
and duplicate-request preservation. The source login HTTP endpoint was checked
using nonexistent credentials and returned an empty result. A real older
account still needs to verify the complete deployed compatibility flow.

## Verified

- The 2026-10-17 13:54 UTC source snapshot was copied to the Neon project
  `tolbertinnovationhub-migration`, database `tih`, branch `migration-staging`.
  All 15 public application tables matched the snapshot (3,700 rows).
- Nonsecret account profiles and bucket configuration were archived privately.
  Password hashes and authentication/session secrets were excluded.
- The read-only preview authenticates using Supabase and reads identity-scoped
  learner records from Neon. A user verified the deployed flow on their account.
- The separate `migration-write-tests` branch contains synthetic test learners
  and isolated course-request writes. Do not use it as the cutover source.

## Preview endpoints

`GET /api/neon-preview?action=account` requires a Supabase bearer token and an
active linked learner. `status` and public browser `config` are unauthenticated.
`TIH_NEON_PREVIEW_ENABLED` must be `true`; the connection uses the restricted
read-only role via `TIH_PREVIEW_DATABASE_URL`.

`POST /api/access-request-preview` accepts only JSON `{ "courseId": "ai" }`.
It requires a verified Supabase bearer token and active linked learner. Course
titles come from `course-catalog.json`, derived from the 34-course lightweight
catalog. WASSCE and other item catalogs still need separate coverage.
`GET ?action=config` supplies public browser settings and available courses.
The endpoint requires `TIH_NEON_WRITES_PREVIEW_ENABLED=true` and the separate
restricted `TIH_PREVIEW_REQUEST_DATABASE_URL` on the isolated test branch.

The request insert always uses `payment_status='requested'` and
`access_granted=false`. Database column permissions and RLS enforce ownership
and those values. Conflicts leave existing enrollments unchanged. The role has
no UPDATE, DELETE, payment-write, password-column, or private-archive access.
The SQL policy is in `migrations/001-preview-access-requests.sql`.

The browser tests use mock sign-ins; they do not replace real-user deployment
verification. Neither preview test page persists credentials or sessions in
browser storage. Browser password managers are controlled by the user/browser.
All credentials are branch-specific Vercel preview variables, not production
configuration or repository contents.

## Required before production cutover

1. Verify the new compatibility path with an actual older account, then connect
   it to the main learner frontend. Only five of 121 copied profiles are Auth
   linked. Keep Supabase login verification while this transition is underway;
   do not reset passwords automatically.
2. Connect and fully verify progress/activities and certificate requests in the
   main learner frontend. Implement staff certificate review and issuance,
   applications, staff administration, course grants, payment verification,
   LibApps, and all existing public lookup flows. A pending request API does not
   implement payment processing or authorize course access.
3. Connect the actual frontend operations to the new backend in preview and
   verify the complete learner and staff journeys, including retries/offline
   synchronization. Existing frontend operations still target Supabase.
4. Reconcile changes made since the snapshot, with a final consistent sync and
   record verification. Preserve the source and a rollback path. Do not copy
   synthetic test data or private authentication/session secrets.
5. Verify deployment access, production configuration, custom-domain routing,
   write permissions and rollback before enabling production traffic.

Run API checks with:

```sh
node --test tools/neon-preview.test.cjs tools/access-request-preview.test.cjs
```
