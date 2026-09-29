# Data safety preparation — owner review required

This records observable Android code behavior. It is not a completed or submitted Play form.
TIH must check the deployed Supabase configuration, logs, retention and support handling before
declaring practices for the entire service. Server-to-device responses alone are not assumed
to be new collection; assess each field under Google's current definitions.

| Data / feature | Observed app behavior | Review for Play Console |
| --- | --- | --- |
| Email and password | Sent over HTTPS to Supabase Auth when the learner signs in. Password is not persisted on the phone. | Authentication / account management; check applicable personal-info categories and server retention. |
| Student ID | Retrieved from the authenticated profile; transmitted in the filter for the student's own enrollment lookup. | User IDs, app functionality and account management. |
| Name and account status | Received from TIH's own-profile RPC. The app requests only `id,name,status`. | Confirm service-side collection, purpose and deletion. |
| Course grants and payment status | Read from the existing enrollment record to verify access. The app does not collect card details or process purchases. | Review whether the service's declared purchase-history category applies; do not equate “no checkout” with “no enrollment data.” |
| Session tokens | Stored encrypted with Android Keystore/AES-GCM, sent for authenticated requests and removed on sign-out. | Account security; no ad use. |
| Study records | Notes, bookmarks, progress and quiz scores stay in private local storage. No cloud writes or sync. | Do not claim collection of these local-only records by the Android app. Reassess when adding sync. |
| IP / operational logs | Network provider necessarily sees connection metadata; the app adds no analytics SDK. | Confirm actual Supabase/hosting log fields and retention before answering location, diagnostics or identifiers questions. |
| Support and deletion | User opens email/WhatsApp/dialer, reviews and sends their message in that app. TIH receives messages the user sends. | Account for TIH's support handling and processors; make deletion request channel operational. |
| Videos / resource links | Open externally only on a user tap. No embedded tracking player or automatic media download. | Review third-party behavior and distinguish external activity from app collection. |

The build contains no advertising, analytics or crash-reporting SDK. Android permission:
INTERNET only. No contacts, photos, camera, microphone, location or notification permission.
The app uses HTTPS, rejects cleartext traffic and disables app backup. Study preferences are
private local files; only session credentials/grants are additionally Keystore-encrypted.

The privacy notice and deletion resource are generated from the same app-information file and
published TIH contact information. They are prepared locally and must be reviewed and hosted
at public HTTPS URLs. The deletion workflow is a request to TIH, not instant deletion. TIH's
existing policy says responses within 30 days and allows legally required retention; actual
support processes must honor that statement.

Provide honest reviewer access with a dedicated test account. The app contains no account
registration or checkout navigation, and it does not claim official certificate issuance.

Reference: https://support.google.com/googleplay/android-developer/answer/10787469
