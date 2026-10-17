# TIH database migration status

Updated October 17, 2026, 21:04 UTC. **Production cutover is not complete.**
The live website and source Supabase application data are unchanged.

## Verified data and branch separation

Project: `tolbertinnovationhub-migration` (`raspy-mud-82524046`), database `tih`.

| Branch | ID | Purpose |
| --- | --- | --- |
| migration-staging | br-falling-block-zau0k2q2 | Original verified snapshot and rollback reference; unchanged |
| migration-write-tests | br-frosty-truth-zavu1ro6 | Active preview APIs, synthetic fixtures, test writes and managed signup |
| migration-candidate-20261017 | br-royal-cherry-zae841g2 | Separate clean data candidate with corrected password-policy flags |

**Never cut over from migration-write-tests.** The data candidate is not connected
to any website and does not yet have the preview runtime migrations or roles.
The original snapshot remains the parent/rollback reference.

At 21:02 UTC, all 15 public application tables still matched the original
snapshot: 3,700 rows, compared by counts and canonical JSONB content checksums.
The original export omitted fields whose names contain password, including
must_change_password. Omitted values took the target default true, so 26 learner
flags differed from the source. On the new candidate only, those 26 were restored
to false. All 121 policies now match the source: 95 require a password change and
26 do not. A second complete comparison retained this nonsecret flag while
excluding password hashes, tokens and secrets; all 15 application tables matched.
No source rows or existing branches were changed by that correction.

| Table | Verified rows |
| --- | ---: |
| activities | 2,181 |
| payments | 691 |
| enrollments | 474 |
| students | 121 |
| applications | 115 |
| progress | 105 |
| certificates | 7 |
| cert_requests | 5 |
| app_admins | 1 |
| hub_courses, topic_videos, four libapps tables | 0 |
| **Total** | **3,700** |

The candidate has zero learner/admin password hashes, test learner profiles,
preview applications, managed-auth tables, or test runtime/session tables. All
public tables have RLS enabled. These are data checks, not proof that the
production runtime permissions and flows are ready.

Source storage remains empty: zero objects in two buckets. Thirty nonsecret
Auth profiles and the two bucket configurations were previously archived under
migration_private. This pass confirmed source counts; it did not repeat full
content comparison of those private archives. Password hashes and authentication
session secrets are excluded from the migration. Authentication is not fully
migrated.

Machine-readable evidence is in migration-readiness.json. Reusable, read-only
checks are in checks/application-fingerprint.sql and
checks/migration-candidate-preflight.sql. Fingerprints deliberately preserve
must_change_password while excluding credential fields. They compare JSONB
content using MD5, not a cryptographic attestation. Recheck against a consistent
source snapshot immediately before any final synchronization or cutover.

## Current Vercel preview

Project: tolbertinnovationhubliberia1 (`prj_l01CHDzoY6JQuXxT1djmI9rUfyXC`).
All migration configuration targets preview branch `codex/neon-backend` only.
Production environment variables, custom domains and the live site have not
switched. The deployed code is commit `875ad3a02791e4181bad2c451465191857f580ee`.
Deployment `dpl_GT4tYwDvvbQuSskyZQFZ7nKDqowR` reached READY.

Owner testing URL:
https://tolbertinnovationhubliberia1-10kkpl6ip-tolbert-innovation-hub.vercel.app/migration-signup-preview

The owner explicitly approved transferring the restricted signup connection to
this Vercel preview branch. Its sensitive connection and public Auth URL/enable
flag were configured and their scope verified. Credential values must never
appear in source, static output, logs or documentation.

Automatic approval review rejected the protected-page fetch because it may mint
a temporary access-bypass link. No alternate bypass or security-setting change
was attempted. READY does not establish real runtime flow verification. As of
21:01 UTC, the test branch has zero verified managed identities and zero newly
activated managed learner profiles. A synthetic unverified example.invalid
identity exists for negative permission checks. Real signup/email delivery,
verified profile insertion and cookie restoration still need owner testing.

## Implemented preview behavior

The public asset build excludes server code, SQL, database files, credentials
and reports. Production-default builds retain the existing persistence behavior.
Only VERCEL_ENV=preview plus TIH_NEON_WEBSITE_PREVIEW_ENABLED=true injects the
compatibility guard/adapter. The guard blocks browser Supabase fetch, XHR and
realtime calls. Replaced cloud exports cannot fall back to source writes.

The normal dashboard, course player and certificate list use restricted APIs.
Course boot waits for server session verification. Access requires
access_granted=true; paid status cannot reverse a revocation. Client completion
cannot publish an official certificate. The server catalog has 57 metadata
records: 34 professional courses and 23 WASSCE subjects. Course content is unchanged.

Failed progress saves have a bounded local retry queue, separate per verified
learner, valid up to seven days and cleared on explicit logout. It contains only
learner ID, course IDs and counts. No passwords, JWTs, names or emails are stored
in that queue. Reloads restore it only after its owner is verified. Writes carry
expectedStudentId, checked against the protected cookie before database access;
a stale tab cannot submit another account's queue. Retried progress is monotonic.
When storage is unavailable, the UI states that the page must remain open.
Progress is learner-reported; it does not prove lesson or exam completion.

Normal hub-admin opens the staff workspace. Normal hub-apply and hub-track open
pending application intake/private tracking. This does not create learner
accounts, grant access or record payments. The browser generates a random
256-bit receipt, sends it only in POST JSON, and stores no receipt in URLs,
cookies or localStorage. The server stores its SHA-256 hash. Submission retries
with the same receipt preserve one application. Tracking returns only status,
status message, ID and timestamps. Copied applications have no receipt and are
not publicly retrievable by ID, email or phone. The dedicated role cannot read
learners or payments, approve applications, create accounts or grant access.
Staff API responses omit the receipt-hash column. Rate limits are five submit
attempts per 15 minutes and 30 tracking attempts per five minutes per hashed IP
bucket; a missing IP shares a restricted unknown bucket. These preview limits
need production traffic evaluation.

LibApps uploads and mutations, account/profile changes and payment processing
remain unavailable in the normal preview. Online payment is also disabled in the
current site configuration; this work has not enabled a processor. The copied
payment ledger is read only. A staff access grant does not record a payment.

## Authentication and authorization

Existing learners keep source verification. The legacy proof is computed only
in server memory and checked using the projected Supabase student_login RPC.
Email logins can fall back to Supabase Auth. A returned token is held only in
memory to read student_me; auth_user_id must match the authenticated user.
Passwords, hashes and source tokens are neither copied nor returned to the
browser. Five failed attempts per login label per five minutes are allowed;
limiter or source outages fail closed. Email and Student-ID aliases have separate
buckets. Source must_change_password must be explicitly false to create a session;
true, null or missing states direct the learner to update the password on the
live website first. The preview does not reset live passwords.

New test identities use managed Better Auth only on migration-write-tests.
Existing copied learners are not linked or replaced by matching email. Activation
verifies Ed25519 signature, fixed branch issuer/audience, expiry, issuance time,
and matching ID/sub. Signed claims and the current scoped identity view must both
show a verified, non-banned identity. A copied-email collision requires existing
learner login. Database insert policy binds ID/name/email to that verified
identity; repeated activation preserves one profile, and a suspended profile
cannot be reactivated. Creating a profile grants no course access or payments.

Provider-level verify-at-signup defaults remain off: the connector exposes a
configuration name update but not the verification settings. Application/API
and database gates independently reject unverified identities. Provider-level
requirements should also be enabled before production. Emails use the development
shared provider; production needs its own delivery configuration. Automated tests
mock email delivery and do not send messages. The browser requests an email only
when the person clicks the explicit email-code button. Managed and local learner
sign-out are both attempted; already-issued JWTs are not instantly revoked.

Learner cookies are signed, HttpOnly, Secure, SameSite=Strict and expire in
15 minutes. Learner identity controls every query. Logout clears the cookie;
a copied cookie may remain valid until expiry. The restricted learner role
cannot grant access, write payments, edit credentials, approve requests, issue
certificates or access private archives. Certificate requests require access and
full server-catalog progress, remain pending, serialize per course/learner and
preserve existing pending/approved requests. All writes require same-origin JSON.

Staff source-login verification uses a separate issuer role that can create only
short-lived opaque capabilities and cannot read operational learner/payment data.
Only the capability hash is stored. The operational role cannot mint sessions;
every table policy requires its matching unexpired, unrevoked capability. A guessed
administrator username has no access. Staff/learner signature domains are separate.
Staff logout revokes the database capability, blocking replay. Every staff mutation
needs a reason and atomic append-only audit. Grants/revocations preserve payment
status and never insert payments. Certificate approval/issuance requires stored
active learner, granted access and complete catalog progress; issuance is
create-only and repeat-safe. Public verification is scoped to one verified
certificate and excludes learner IDs, emails and payment data.

## Validation and remaining cutover requirements

Owner screenshots verified the read-only learner flow, existing-login session,
progress persistence, administrator login, overview and copied record views.
The automated suite has 78 passing checks. Mobile browser tests mock APIs and
cover normal learner pages, issued certificates, queue recovery/account isolation,
application retry/tracking, signup verification gating, activation retry,
sign-out, safe text rendering and layout. Token tests use real Ed25519 signatures
with local test keys. Production dependency audit reported zero vulnerabilities.

Run `node --test tools/*preview.test.cjs`. Build with the two preview flags before
`node tools/website-preview.browser.cjs`; it needs Playwright and Chromium, with
BROWSER_EXECUTABLE_PATH when the binary is not in the default location.

Before production cutover:

1. Complete owner signup, email verification, profile activation, login/logout,
   reload and cookie tests. Verify Auth-only copied accounts and real staff
   write flows on isolated data, including retries and permission failures.
2. Complete the remaining production integrations, including LibApps, application
   approval/linking to new learners, required staff operations and payment
   recording/verification for whichever payment flows will remain enabled.
3. Apply reviewed runtime migrations and provision appropriate restricted roles
   on a clean candidate. Synthetic fixtures and test Auth sessions must not be
   copied. The clean data candidate currently has no runtime migrations applied.
4. Prepare production API/build configuration and routing. The current adapter
   and APIs are preview-gated. Preserve password-change enforcement and a tested
   identity migration/recovery plan; source authentication remains in use.
5. Repeat consistent source reconciliation, public/private verification and file
   inventory. Source edits after this check need another sync. Keep the unchanged
   snapshot and a rollback route. Do not copy credential hashes or session secrets.
6. Verify hosting access, production configuration, domains, permissions and
   rollback; perform a controlled rollout with runtime checks before enabling
   production traffic. Never describe READY or mocked tests as full migration.
