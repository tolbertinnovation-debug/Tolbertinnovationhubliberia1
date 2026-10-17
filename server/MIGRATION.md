# TIH database migration status

Updated 2026-10-17. Production cutover is **not complete**.

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

1. Preserve login for the 116 of 121 copied learner profiles with no Auth link.
   Only five profiles are currently linked. Legacy login currently relies on
   Supabase RPCs. Keep that compatibility path working until verified replacement
   or account linking is complete; do not reset passwords automatically.
2. Implement and test progress/activities, certificate requests and issuance,
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
