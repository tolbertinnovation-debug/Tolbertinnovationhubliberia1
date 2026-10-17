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

New staff credentials have not been configured in Vercel. The following values
belong only in sensitive preview settings for branch `codex/neon-backend`:

| Variable | Type | Purpose |
| --- | --- | --- |
| `TIH_PREVIEW_STAFF_LOGIN_DATABASE_URL` | Sensitive | Restricted login issuer |
| `TIH_PREVIEW_STAFF_DATABASE_URL` | Sensitive | Capability-scoped operational role |
| `TIH_PREVIEW_STAFF_SESSION_KEY` | Sensitive | Staff cookie signing |
| `TIH_STAFF_RATE_KEY` | Sensitive | HMAC login-rate buckets |
| `TIH_PREVIEW_VERIFY_DATABASE_URL` | Sensitive | Single-ID certificate reader |
| `TIH_NEON_STAFF_PREVIEW_ENABLED` | Plain, `true` | Enable isolated staff routes |
| `TIH_NEON_PUBLIC_PREVIEW_ENABLED` | Plain, `true` | Enable isolated lookup route |

Never store credential values in source control, static output or logs. Do not
enable staff routes until the configuration and real-user verification pass.

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
