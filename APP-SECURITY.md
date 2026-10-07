# TIH app security review — 2026-10-07

Scope: Android native learning app and Windows Electron learning app. This is a source review and regression check, not a penetration test or a backend/database audit.

## Confirmed issues addressed

- Windows update verification contained an environment-variable test shortcut. Removed it from production; tests now provide their own network fixture.
- LibApps Android downloads were debug builds. The public `store` variant disables debugging, shrinks code/resources, and retains the existing preview application ID and signing certificate for upgrades without erasing learner data. Debug builds remain internal test artifacts.
- Account and update HTTP responses were read without an effective byte limit. Both apps now stop reading decoded responses at 1 MiB for account APIs and 16 KiB for update policies, including chunked responses.
- Android video navigation could open non-HTTPS links without a tap. External navigation now requires HTTPS and a user gesture; in-player navigation requires HTTPS.
- Update policy downloads reject redirects; authentication requests already reject redirects. TLS validation is left enabled.
- Windows build workflow no longer requests repository write permission.

## Existing protections reviewed

Windows uses sandboxed, isolated renderers without Node integration; validates IPC sender/frame; denies new windows and webviews; limits external destinations; encrypts session credentials with OS secure storage; checks authenticated course grants natively; separates student workspaces; blocks direct course/config HTTP paths; bounds backup imports.

Android stores session credentials with Android Keystore AES-GCM authenticated encryption; disables backups and cleartext traffic; separates account workspaces; validates approved course access; renders lessons with scripts, file/content access and networking disabled; isolates the JavaScript video player without a native bridge.

## Limits and release requirements

- These clients cannot prove database row-level security or enrollment expiry enforcement. Those require a separate review of the deployed backend and policies. Cached course access currently expires after seven days without verification.
- Offline course assets can be extracted by a device owner; client-side checks are not DRM.
- Windows installers are not Authenticode-signed. Obtain an owner-controlled code-signing certificate for verified publisher identity. The existing Android signing key is cached by CI; migrate it to a durable owner-controlled secret before cache expiry. Never replace that key silently.
- Mandatory updates use a TLS-delivered policy and local clock/cache; a device owner with filesystem/root access can tamper with a client. This is not a server authorization boundary.
- Publishing requires passing unit, lint, source/installed desktop UI checks, and verifying the public Android APK is non-debuggable and signed with the existing certificate.

Dependency audit: npm reports zero production-package advisories, but eight moderate development/build-package findings all trace to the unpatched sprintf-js precision-specifier denial of service (GHSA-hp3w-g68c-fv3c). This dependency is not shipped as app JavaScript; do not pass untrusted format strings to build logging. No high or critical npm findings were reported. This is not a full Electron/Chromium or Gradle dependency attestation.

Android HTML parser upgraded from jsoup 1.18.3 to patched 1.23.1 following the upstream GHSA-pmhh-3w7g-xqp8 advisory. The existing reader does not use the advisory\'s custom raw-text Safelist configuration, and its script/network restrictions remain enabled.

Video lifecycle follow-up: the Android 16 emulator exposed a Chromium teardown crash. The app now releases video WebViews through AndroidView.onRelease, removes them from their parent before destruction, and does not navigate to about:blank during destruction. The public APK workflow requires all three video lifecycle tests and a minified release welcome-screen launch to pass.

Validation: Windows unit checks and all 23 UI tests passed on both source and installed 0.22.0. Android 0.3.38 unit/lint checks, non-debuggable manifest and existing-certificate assertions passed; course/catalog, information, 29 reader and four quiz checks passed before the video lifecycle correction, and all three targeted video tests plus minified release launch passed after it. A full device suite is also rerunning on the final source.
