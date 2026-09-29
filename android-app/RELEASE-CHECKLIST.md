# Release gates — TIH Android

This checklist is not permission to change the website, database, or release audience.

## Blocking production gates

- [ ] Use owner-approved test accounts to verify an active, paid/approved learner,
  an active learner without grants, a suspended learner, and a legacy account.
- [ ] Inspect actual deployed Supabase policies; do not assume repository migrations ran.
  Existing SQL treats `authenticated` as admin in several policies. Student Auth sessions
  must never inherit roster, enrollment-write, certificate-approval, or admin privileges.
- [ ] Verify expired/revoked tokens, server denial, logout, shared-device isolation,
  seven-day offline expiry, and enrollment revocation with a real backend test environment.
- [ ] Introduce a reviewed server-authoritative lesson-progress API with stable lesson IDs,
  attempt IDs, per-user row policies, idempotency, and an offline outbox before enabling
  two-way sync. Preserve existing website behavior during any migration.
- [ ] Confirm whether bundling all course material is acceptable. APK assets are extractable;
  the app's access gate is not DRM. The current website source is already public. If paid
  content confidentiality is required, use an authorized content delivery API instead.
- [ ] Review third-party video/image rights and offline distribution rights for all materials.
  Do not download YouTube videos without appropriate rights and provider support.
- [ ] Confirm the production application ID, release signing identity, version strategy,
  and whether this app replaces or coexists with the owner's current TIH Android app.
- [ ] Test on physical low-memory phones, Android 8 and newer target devices, landscape,
  tablets, TalkBack, enlarged fonts, dark theme, poor connectivity, and process recreation.
- [ ] Prepare an accurate privacy policy, data-safety disclosures, account deletion path,
  current Play target-SDK compliance, store screenshots, and release signing.
- [ ] Rebuild against the intended, reviewed source snapshot so course material is current.
- [ ] Review excluding `android-app` from the Pages artifact before merging; the existing
  workflow currently publishes the entire root. Do not change it without approval.

## Follow-up features (not claimed as complete)

- Two-way progress, bookmark, notes, and quiz-attempt synchronization.
- Native account registration/recovery and server-verified access-code redemption.
- Server-verified official assessments, certificate viewing/issuance, and receipt history.
- In-app, provider-compliant video playback and authorized media downloads.
- Selective course-pack updates, content versioning, and storage management.
- Notifications/reminders with explicit opt-in, deep links, and offline download scheduling.

## Acceptance evidence

Record the tested git commit, build output, JVM and device test results, exported content
manifest, screenshots, and the owner-approved account scenarios before each release.
