# TIH Learning Hub — native Android preview

An isolated Kotlin / Jetpack Compose Android application in the existing TIH repository.
The 0.2 build adds Android 16 targeting, native TIH organization/help/privacy/terms screens,
account-deletion email requests, and optimized release bundle validation. See
[publishing handoff](release/PUBLISHING.md) for the completed preparation and owner-only steps.
**This is a review build, not a production or Play Store release.** The Android build does not deploy the website or modify account, payment or domain configuration.
The 0.3.5 Project Management content correction is also published to the website, as requested by the owner.

## What is implemented

- 0.3.17 features TOEFL iBT thirteenth in Courses and in Today: 10 modules,
  184 entries, 84 authored notes/video assignments and 263 distinct questions.
  Current 2026 task workshops and scoring guidance replace outdated orientation;
  legacy exercises are supplemental and named mock tests are TIH knowledge checks.
  See [TOEFL iBT review](release/TOEFL-IBT.md).

- 0.3.16 adds reviewed IELTS Masterclass content in Courses and Today: 22 modules,
  238 entries, 127 authored notes/video links and 376 distinct questions.
  See [IELTS Masterclass review](release/IELTS-MASTERCLASS.md).

- 0.3.15 places English for Academic & Professional Success eleventh in Courses and in Today,
  with 20 modules, 332 entries, 170 authored notes/video links and 616 distinct questions.
  See [English Success review](release/ENGLISH-SUCCESS.md).
- 0.3.14 places Grant Writing & Fundraising tenth in Courses and in Today,
  with 20 modules, 21 specific project briefs, 166 distinct video links and 564
  distinct questions. See [Grant Writing review](release/GRANT-WRITING.md).

- 0.3.13 places Business Leadership Masterclass ninth in Courses and in Today,
  with 20 modules, 21 specific project briefs, 165 distinct video links and 565
  distinct questions. See [Business Leadership review](release/BUSINESS-LEADERSHIP.md).

- 0.3.12 places Microsoft Office Mastery eighth in Courses and in Today, with
  20 modules, 29 project briefs, 198 distinct video links and 637 distinct questions.
  See [Microsoft Office review](release/MICROSOFT-OFFICE.md).

- 0.3.11 places Kotlin Android Development seventh in Courses, with 19 modules,
  21 project briefs, 158 distinct video links and 533 distinct delivered questions.
  See [Kotlin Android review](release/ANDROID-KOTLIN.md).

- 0.3.10 places Entrepreneurship & Startup Launch sixth in Courses and in Today,
  with 20 modules, 11 project briefs and 580 distinct delivered questions shared
  with the website. See [Entrepreneurship review](release/ENTREPRENEURSHIP.md).

- 0.3.9 places Graphic Design fifth in Courses, with 18 modules, 24 project briefs
  and 542 distinct delivered questions shared with the website. See
  [Graphic Design review](release/GRAPHIC-DESIGN.md).

- 0.3.8 places Full-Stack Web Development fourth in Courses, corrects its shared
  quizzes to 633 distinct delivered questions, and validates its offline reader,
  projects and native scores. See [Full-Stack review](release/FULL-STACK-WEBDEV.md).

- 0.3.7 puts Accounting & Bookkeeping beside the first two reviewed courses,
  validates its offline lessons and native assessments, and corrects its shared
  question bank so all 475 delivered questions are distinct. See
  [Accounting & Bookkeeping review](release/ACCOUNTING-BOOKKEEPING.md).

- 0.3.6 adds an illustrated TIH welcome screen and a matching Africa/book launcher
  icon. The welcome screen fits inside the device safe area without cropping,
  works offline, and continues after 1.8 seconds to the existing account flow.
  Its completion survives configuration changes and returning from other apps.

- 0.3.5 replaces repeated Project Management quizzes with 570 distinct questions,
  topic-specific practice, separate assessment items and explanatory feedback.
  A shared source bank and automated checks keep website and app aligned.

- 0.3.4 places Project Management beside Computer Literacy in Courses and adds
  dedicated checks for its imported content, offline reader, and native assessments.
  See [Project Management review](release/PROJECT-MANAGEMENT.md) for coverage and
  the corrected source question bank.

- 0.3.3 opens with native sign-in and a Create account link to TIH’s existing
  registration page. Signed-in learners open directly to Courses. The full catalog
  scrolls together, remembers its position after visiting a course, and offers
  search, filters, and a Back to top button. Light mode is always active.
- 0.3.2 applies the website's navy (`#002868`), red (`#E31E24`), and ice blue
  (`#EAF4FF`) across the native app. The light palette covers every Material
  surface, with branded course labels, clearer answer selection, a red home action,
  and readable system bar icons.
- Native home/dashboard, searchable course catalog, category filters, course roadmap,
  account screen, bookmarks, personal notes, and multiple-choice assessments.
- Existing TIH logo and existing course artwork; a consistent light theme and adjustable
  reading size. No invented course reviews, enrollment totals, or certificates.
- The written course information from each Learning Hub course page: the "about"
  paragraphs, entry requirements, the instructor's name, title and biography, and the
  frequently asked questions, all carried across word for word. Ratings, review counts,
  enrolment totals and testimonials are deliberately left out, so the app never restates
  a figure a reader cannot check. This information lives in the per-course file the
  course screen already loads, keeping the startup catalog unchanged in size.
- 57 existing courses, 10,884 lesson/project/assessment entries, 4,353 authored notes,
  and 20,003 assessment question entries in the initial source snapshot. Counts are
  generated, not manually maintained; repeated questions in the original banks remain
  repeated. These are entries, not a claim of 20,003 unique questions.
- The export runs the website's actual curriculum, quiz, video, and authored-note
  loaders in the proper order. It never rewrites the website's source files.
- All written material, quizzes, and local cover artwork ship with the APK. Approved
  course access remains available offline for seven days after server verification.
- Existing Supabase Auth email/password sign-in and authenticated `student_me` profile
  lookup. The app reads only the signed-in student's enrollment grants. It does not
  create accounts, claim profiles, change passwords, write grants, or write payments.
- Session tokens and verified grants are encrypted using Android Keystore / AES-GCM.
  Passwords are not persisted. Android app backup and cleartext HTTP are disabled.
- Local study records are namespaced by verified student ID. Signing out removes the
  active session. An explicit, confirmed action can delete that account's local study data.

### Native UI, faithful teaching documents

This is **not a WebView wrapper around the website**. Navigation, catalog, course lists,
progress UI, quizzes, notes, bookmarks, and account controls are native Compose screens.
Only the existing authored HTML lesson document uses a narrow, offline WebView renderer
to retain tables, inline SVG diagrams, formatting, and expandable definitions.
That reader has JavaScript, network loading, file access, content access, DOM storage,
and native JavaScript bridges disabled. Active content is removed and a restrictive
Content Security Policy is applied. No production website is loaded inside it.

Remote lesson illustrations are shown with their alternative text rather than downloaded.
A lesson's video plays **inside the app**, built the way the course player builds it on the
website: YouTube's IFrame Player API creates the player in a separate WebView.
The local document's HTTPS base URL uses the installed Android application ID, and
its `origin` parameter matches that identity, following YouTube's WebView requirements.
The player sits above the written lesson and starts only when the learner presses play.
The WebView uses explicit match-parent layout parameters and viewport-based frame height
to prevent a zero-height video inside a scrolling lesson.
Loading and error messages appear below the video without covering YouTube's controls.
Errors after initial readiness are also reported, with retry and an external YouTube link.
Switching lessons creates a fresh player and destroys the old one; hiding it stops playback.
The player
options match the website's, except autoplay: on mobile data a lesson must never start
streaming by itself. Nothing autoplays, nothing is downloaded, and
nothing is re-hosted or relabeled as offline content, so the creator keeps their
attribution and their view count. "Open in the YouTube app instead" stays available.
Shared source videos are labeled as module overviews.

That player is a **separate WebView** from the lesson reader, and deliberately so. The
reader renders authored HTML with scripts, storage, network and file access all off, and
stays that way. The player needs JavaScript, so it gets its own view, is handed nothing
but the embed on the privacy-enhanced `youtube-nocookie.com` host, and never receives
lesson content or a JavaScript bridge. Its video id is checked against YouTube's own
11-character format before it reaches the page. A main-frame navigation out of the embed
is handed to the learner's YouTube app rather than turning the view into a browser.

## Keep the website safe

Development branch: `codex/tih-native-android`.

The `.github/workflows/deploy.yml` deploys only pushes to `main`; the website
branch now validates Project Management content before deployment.
The new `android-preview.yml` builds only this feature branch or an explicit workflow
dispatch. It has read-only repository permissions and never deploys GitHub Pages.
App-only changes remain on this branch. The owner-requested quiz correction is
also committed separately to the website branches without Android source files.

Application source lives in `android-app/`. Shared course content and its checks
live at the repository root; Android CI is separate from Pages deployment. The generated course assets are ignored by git and rebuilt
from the repository when compiling, avoiding a second hand-edited copy of the curricula.

**Do not merge blindly:** the existing Pages workflow publishes the entire repository.
Before any future merge, review excluding Android build/source files from the Pages
artifact as a separate, approved website-deployment change.

## Open in Android Studio

1. Clone this repository and check out `codex/tih-native-android`.
2. Install Node.js 22+ and ensure `node` is available on Android Studio's PATH.
3. Open the **`android-app` folder**, not the website repository root.
4. Use JDK 17, Android SDK Platform 36, and Build Tools 35.0.0 or newer.
5. Allow Gradle sync. The content exporter runs automatically before Android builds.
6. Select an emulator or an Android 8.0+ phone and press Run.

Command line, from `android-app/`:

```sh
./gradlew :app:assembleDebug :app:testDebugUnitTest :app:lintDebug
```

On Windows, use `gradlew.bat`. Set `ANDROID_HOME` or let Android Studio write the ignored
`local.properties` file. Do not commit local SDK paths, signing keys, or account secrets.

APK: `app/build/outputs/apk/debug/app-debug.apk`.

Debug application ID: `org.tolbertinnovationhub.learning.preview`; this intentionally
installs beside an existing TIH app without replacing its data. The production ID is
provisional until the owner's existing Play Console package identity is confirmed.
No release signing key is included, and no Play Store submission is performed.

The feature-branch GitHub Actions run also uploads `TIH-Learning-Android-preview` as an
APK artifact if the build succeeds. Download it from the completed Android workflow run.

## Account and access behavior

The shipped configuration is copied from the existing **public publishable key** in
`hub-config.js`; no service-role secret is used. Auth uses HTTPS REST, not a JavaScript SDK.
Learners sign in with an existing Supabase Auth-linked TIH email account. Legacy accounts
without an Auth linkage should first sign in on the website, or contact TIH support.
The app deliberately does not recreate legacy deterministic access codes.

Enrollment is granted when the existing server record says `access_granted=true`, or
`payment_status` is `paid`/`confirmed`, matching the website's restoration logic. An active
student profile is required. A `wassce-all` grant covers WASSCE subjects only. Signed-out users see sign-in, registration, help, and privacy information. Signed-in
learners can browse the catalog; approved access is required to open lessons or assessments.
Authentication failures invalidate cached access; temporary network outages retain an
already verified grant for up to seven days. Revocation cannot be discovered while offline.

## Progress and certificates: deliberately separate in this preview

The current website cloud `progress` table holds **aggregate counts**, not stable lesson IDs,
personal notes, or the complete per-question attempt history. Guessing which exact lessons
are complete would corrupt a learner's record. Therefore this version records app progress,
quiz scores, notes, and bookmarks locally and does not write those aggregates back.

App assessment attempts are practice records. A 70% score marks the assessment complete
locally, but does **not** issue an official certificate, credit a payment, or modify website
completion. Official certificates, registration, payments, and code redemption remain on
the website. Local notes will be lost if the app is uninstalled or its data is cleared.

## Tests

From the repository root:

```sh
node android-app/tools/export-learning.mjs
node --test android-app/tools/content.test.mjs
node tools/check-courses-lite.js
```

Optional real-browser parity test, after installing Playwright and its Chromium browser:

```sh
node android-app/tools/browser-parity.mjs
```

With an Android emulator/device connected, from `android-app/`:

```sh
./gradlew :app:connectedDebugAndroidTest
```

The generated `assets/learning/manifest.json` records source file hashes, content counts,
empty quiz checks, missing note checks, and the source git commit. Import tests verify
module-qualified note matching, stable lesson IDs, source hashes, all quiz answer indices,
and deterministic exports. JVM tests cover access expiration, account/grant isolation,
quiz scoring, HTML safety, and mocked API authentication. No real student credentials or
production database writes are used by tests.

## Required before public release

See [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md). In particular: the repository's existing
SQL contains broad `authenticated` policies. **Client-side filters do not fix server-side
authorization.** The actual deployed policies and student/admin roles must be audited with
the owner's approval before calling this a secure production app. This implementation
does not claim that the deployed database is hardened or that real-account acceptance
testing has been completed.

Technology references: [Compose compiler setup](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler),
[AGP 8.10 compatibility](https://developer.android.com/build/releases/agp-8-10-0-release-notes),
[Compose BOM](https://developer.android.com/develop/ui/compose/bom).

## Preview 0.3.1: unfinished quizzes and updates

Unsubmitted quiz answers and the current question are saved on the device under
its verified student account. Leaving and reopening a quiz resumes the draft.
Submission and retry clear it; clearing local study data also clears drafts.
Drafts are discarded if the question text, options, answers, or explanations have
changed. Drafts never grant a score, completion, or official certificate.

Validation and publishing now restore `tih-preview-signing-v2` without creating
new keys. Both workflows verify the public certificate digest pinned in
`preview-signing.sha256`. From 0.3.1, builds using this identity can update each other in place.
The workflows fail if the cache is unavailable. GitHub caches can expire or be
evicted: this is a fail-safe preview measure, not durable signing-key storage.
Before long-term distribution, provide a backed-up owner-controlled keystore
through protected CI credentials. Do not regenerate this preview identity to
bypass a missing-key failure. The keys for published 0.3.0 and earlier previews
were discarded; those installations cannot be upgraded with the cached key.

### Cybersecurity Fundamentals & Ethical Hacking — 0.3.18

The complete twenty-module program is fourteenth in Courses and featured in Today. It includes 328 entries, 170 video links, offline authored notes, projects and assessments. Three core practices and the graduation assessment now use 24 fresh applied questions; other existing practices retain shared foundation questions. Device checks cover enrollment access, overview, permissions/web security quizzes, graduation scoring, persisted completion and offline notes.

### Digital Marketing Professional Certificate — 0.3.19

Featured fifteenth in Courses and included in Today: 20 modules, 355 entries and 189 video links. Offline authored notes, projects and assessments retain stable identities. Audience targeting, email testing and ROI practices plus graduation now contain 24 fresh applied questions; other foundation practices retain shared questions. Native tests verify overview, submissions, persisted records and offline rendering.

### Digital SAT Prep — 0.3.20

Featured sixteenth in Courses and included in Today: 14 modules, 216 entries and 102 video links. Topic-specific practice and offline notes retain their lesson IDs. The graduation check has 20 fresh Reading/Writing and Math questions. Fifteen-question mixed checks are labeled short TIH practice, and notes distinguish TIH percentages from official adaptive SAT scores. SAT diagrams now use readable phone layouts.

### Remote Work & Freelancing — 0.3.21

Featured seventeenth in Courses and included in Today: 10 modules, 114 entries and 58 video links, with offline notes and client-project briefs. Three core practices and graduation use 24 fresh applied questions. Other foundation practices retain shared questions. Android checks cover overview, submissions, saved records and offline notes.

Healthcare Technology & Telehealth is featured in preview 0.3.22: see [release notes](release/HEALTHTECH.md).

Preview 0.3.23 replaces shared Healthcare Technology quizzes with independent topic practices and assessments: [assessment update](release/HEALTHTECH-QUIZZES.md).

Data Analysis is featured in preview 0.3.24: [release notes](release/DATA-ANALYSIS.md).

Financial Literacy preview details: [release/FINANCIAL-LITERACY.md](release/FINANCIAL-LITERACY.md).

Bible School preview details: [release/BIBLE-SCHOOL.md](release/BIBLE-SCHOOL.md).

Football Coaching preview details: [release/FOOTBALL-COACHING.md](release/FOOTBALL-COACHING.md).
