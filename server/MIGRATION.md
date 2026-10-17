# TIH database migration status

Updated 2026-10-17. Production cutover is **not complete**.

## Staff preview prepared

`migration-staff-preview` supports administrator sign-in, paginated records,
application decisions, course grant/revoke, certificate review, create-only
issuance and certificate lookup. Every staff mutation needs an audit reason.
Grants preserve payment status and never insert payment records. The payment
ledger is read only. Application approval requires an existing active learner
linked to that application; new-account provisioning is not implemented yet.
Catalog coverage remains the 34 professional courses.

The login issuer verifies the existing Supabase administrator credentials and
can create a 15-minute capability, but cannot read learner/payment data or grant
access. Only the opaque token's hash is stored. The operational role cannot
mint sessions: RLS on every staff data table requires the matching unexpired,
unrevoked capability. A guessed administrator name alone grants no data access.
Staff and learner cookie signatures are separated. Logout revokes the database
session, preventing replay. Runtime audit entries cannot be updated or deleted.

Certificate issuance uses approved requests and stored learner/course data,
serializes operations per learner/course and preserves existing verified
certificates. The public lookup role sees only public fields for the supplied
certificate ID; it cannot list all certificates or read learner IDs/payments.

Migrations `004` and `005` are applied only to `migration-write-tests`. Synthetic
database tests passed for capability isolation, grant/revoke without payment
changes, application approval, certificate review, repeat-safe issuance,
session revocation/replay refusal, and single-ID public lookup. The mobile
staff flow was tested with mock credentials, including safe text rendering.
Real administrator sign-in and deployed staff verification remain pending.

The user authorized the staff credential transfer, and the following variables
were configured on 2026-10-17 in preview settings for `codex/neon-backend` only:

| Variable | Type | Purpose |
| --- | --- | --- |
| `TIH_PREVIEW_STAFF_LOGIN_DATABASE_URL` | Sensitive | Restricted login issuer |
| `TIH_PREVIEW_STAFF_DATABASE_URL` | Sensitive | Capability-scoped operational role |
| `TIH_PREVIEW_STAFF_SESSION_KEY` | Sensitive | Staff cookie signing |
| `TIH_STAFF_RATE_KEY` | Sensitive | HMAC login-rate buckets |
| `TIH_PREVIEW_VERIFY_DATABASE_URL` | Sensitive | Single-ID certificate reader |
| `TIH_NEON_STAFF_PREVIEW_ENABLED` | Plain, `true` | Enable isolated staff routes |
| `TIH_NEON_PUBLIC_PREVIEW_ENABLED` | Plain, `true` | Enable isolated lookup route |

Staff deployment `dpl_52LnLvkK1L7KRU8DA3gb4ZLNRBSt` is Ready, built from
commit `8bc6e3ada7e0b73784635f6a72d88267ccf164b7`. Real administrator sign-in
verification remains pending. Production environment variables are unchanged.
Never store credential values in source control, static output or logs.

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
using nonexistent credentials and returned an empty result. The user verified
the deployed compatibility login, protected session and progress save with a
real learner account in screenshots on 2026-10-17.

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
verification. The first read-only and course-request pages do not persist
credentials or sessions in browser storage. The learner and staff workspaces
use protected short-lived cookies. Browser password managers are controlled
by the user/browser.
All credentials are branch-specific Vercel preview variables, not production
configuration or repository contents.

## Required before production cutover

1. Connect the verified compatibility path to the main learner frontend.
   Only five of 121 copied profiles are Auth
   linked. Keep Supabase login verification while this transition is underway;
   do not reset passwords automatically.
2. Connect and fully verify progress/activities and certificate requests in the
   main learner frontend. Verify and integrate the staff preview workflows.
   Implement new-account provisioning, payment verification,
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
node --test tools/*preview.test.cjs
```


## Normal website preview integration (October 17)

The owner verified administrator login and copied record views in the deployed
staff workspace. The build now activates the compatibility adapter only when
VERCEL_ENV=preview and TIH_NEON_WEBSITE_PREVIEW_ENABLED=true. Production builds
and the GitHub Pages website retain their existing persistence configuration.

The normal learner dashboard, course player and certificate list use the
isolated learner API and protected cookie. Access requires access_granted=true;
a paid status never reverses an explicit revocation. Course boot waits for the
server session. Certificate requests wait for the server response, and local
completion cannot publish an official certificate. Own issued certificates are
read under the new migration 006 policy. The server catalog includes 57 courses
(34 professional and 23 WASSCE); course content is unchanged.

The preview administrator URL opens the verified staff workspace. The preview
guard blocks browser fetch, XHR and realtime requests to Supabase, and replaces
legacy cloud exports so unsupported features cannot write to the live source.
Registration, password changes, profile editing, payment processing and LibApps
writes are unavailable. Existing Supabase authentication verification remains
on the server. Email sign-in now falls back to Supabase Auth if the legacy proof fails.
The verified access token is used only in memory to read student_me; its
auth_user_id must match the authenticated user before a preview session is
issued. Auth tokens, refresh tokens and passwords are not copied to Neon or
returned to the browser. Real Auth-only account sign-in still needs owner
verification on the deployed normal page.

Source password-change enforcement is preserved at login. The source currently
reports 95 accounts requiring a change. A true, null or missing flag prevents
session creation and directs the learner to update the password on the live
site first. This preview does not reset or update live credentials. The source
flag must be included in a future final migration; it was excluded from the
original sanitized snapshot.

Progress is saved through the restricted server API. Failed saves show an
explicit unsynced message and retry every 30 seconds or when connectivity
returns. A minimal local queue (learner ID, course IDs and counts only) now
survives reloads for up to seven days, is loaded only after that same learner
is verified, and is removed on explicit logout. It contains no passwords,
auth tokens, names or email addresses. If device storage is unavailable, the
message explicitly says to keep the page open. Clearing browser data or device
storage still loses unsynced changes. Server-monotonic writes make retries
idempotent. Each adapter mutation also includes expectedStudentId; the server
compares it to the cookie identity before any database access, preventing a
stale tab or queue from writing after another tab changes the signed-in account.

Mobile browser checks with mocked API responses cover dashboard sign-in,
server-session course boot, issued-certificate display and download-handler
initialization. These do not replace real-account checks on the deployed
normal pages. No production cutover, final source reconciliation, domain
change, authentication migration or payment migration has occurred.


The updated automated suite has 63 passing checks. The repeatable local mobile
smoke test in tools/website-preview.browser.cjs verifies failed progress saves,
queue recovery after a fresh page load, retry with the expected identity, no
submission of another learner's queue, issued certificates and mobile layout.
Run after building with the preview flags. It requires Playwright and a
Chromium installation; set BROWSER_EXECUTABLE_PATH when needed. All browser
API responses in this smoke test are mocked. No real-user credentials or
source authentication data are included in the test.
