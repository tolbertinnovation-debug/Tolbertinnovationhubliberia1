# TIH Learning Desktop

Independent Windows app on `codex/tih-desktop-app`. Desktop code lives in `desktop-app/`; its workflow runs only on this branch. Website and Android branches are separate.

## Computer Literacy and IELTS Masterclass — full desktop courses

- Computer Literacy: all 15 source modules: 123 authored reading lessons, 125 assessments with 404 questions, and five practical projects.
- 128 source-linked videos across lessons and projects. Videos stream from YouTube after a learner chooses to load them; availability is controlled by YouTube.
- Full module navigation, lesson search, Previous/Next, remembered last activity, optional notes, focus view, full screen and adjustable text.
- Saved quiz drafts, automatic grading at 70%, answer explanations, shuffled choice positions, retries and retained best scores.
- Project reflections, file/folder references and self-reported practical completion. The app does not upload or grade project files.
- Module/course progress, backup/restore and an exportable PDF study record. Scores, reading and projects are personal desktop study records; official TIH certification remains in Learning Hub.
- IELTS Masterclass: all 22 sections, 126 authored lessons, 111 assessments with 376 questions, one Task 2 essay project and 127 source-linked videos. Inline charts, model examples and expandable keywords are preserved.
- IELTS essay studio: autosaved draft, word count, optional 40-minute timer and a 250-word minimum before self-reporting completion. Quiz percentages are not IELTS band scores; essays are not graded automatically.
- Each course has separate bookmarks, progress, scores, project records and PDF study records. The Study course selector switches courses without discarding work.
- 57-course catalog and source-derived outlines. Other courses will be added one by one.

## TIH accounts and access

Full-course access follows the same rules as the APK: sign in using the existing Supabase account, resolve only the authenticated `student_me` profile, require active status, and accept only that student's enrolled course grants or paid/confirmed access. No student roster, payments, certificates or server progress are modified. Approved course access can be used offline for up to seven days after verification. Use TIH account → Refresh course access to reverify. Rejected account verification clears the session; network failures do not extend the cached grant.

Passwords are never saved. Access and refresh credentials are encrypted using Electron safeStorage (Windows DPAPI) in `account-vault.bin`; they are never exposed through the renderer bridge or included in backups. Credential persistence fails closed when secure storage is unavailable. Rotated refresh credentials are saved before a profile reread, without extending the grant verification time.

Guest learners retain the three Computer Literacy previews and their existing local workspace. Each signed-in student has a separate workspace under `userData/students/<student-id>/study-workspace.json`. Signing out preserves their work. Backups are checked against the active profile. Course body files and account configuration are blocked from the local renderer protocol; full material is delivered only by validated IPC after approval. Account expiry removes full-course material and returns the learner to the access screen.

## Learning space

Learning space opens your last available activity. Lessons opens the active course outline; search finds readings, quizzes and projects. My notes opens a companion notebook. Focus view expands the lesson to almost the entire window; Full screen fills the display. Escape exits either view. Hiding panels does not reload the reading or video; switching away from the Video tab stops playback.

Assessments require every answer before grading. Drafts survive navigation/restarts, and failed retries preserve a higher previous score. Approved enrollment is enforced independently for each course. Quiz completion is based on a passing best score, not a manually set completed flag. Projects provide the original brief and fields for a reflection and finished-file references. Completion requires a meaningful reflection and the learner's confirmation; instructor review remains separate.

Course progress shows readings completed, assessments passed, project records and module totals. Export study record produces a PDF clearly labeled as a personal study record, not a certificate. The TIH Learning Hub link opens the existing official website in the default browser.

## Develop

Node 22+, Python 3 with Pillow, Windows 10/11 x64 for the installer.

```
npm ci
npm run content
python tools/icon.py
npm test
npm start
```

The read-only importer uses the existing Learning Hub sources and public account configuration without changing them. It bundles two full courses plus the guest preview and catalog; generated content and build files are excluded from git. Desktop branding copies the APK logo unchanged and converts it to Windows PNG/ICO formats.

On Windows use `TIH_ELECTRON_TEST=1` and `npm run test:ui`. Linux browser UI checks require Playwright Chromium. `npm run dist:win` creates the unsigned Windows installer.

Notes support 500 entries and 30,000 characters each. Course records support up to 5,000 activity IDs; older version-1 backups migrate with empty assessment/project fields. Backups merge best scores and preserve conflicting notes/project reflections. A corrupt workspace is reported without silent replacement. Export backups before uninstalling or changing computers.

## Validation and release

The workflow tests the native Windows app, builds the installer, installs it and repeats UI tests against the installed executable. Tests cover full source completeness, grading, restore, cached-access expiry, active-profile/enrollment rules, rotated credentials, approved/pending accounts, quiz drafts/results, project records, PDF export, per-student isolation, independent course permissions, IELTS charts/keywords, essay drafts/timer/word counts, course switching and restart persistence. Account integration tests use controlled responses; they do not authenticate a real student. Video tests verify controlled player loading and isolation, not third-party playback availability.

Release: `desktop-v0.3.0-preview`. The installer is unsigned and may show a Windows publisher warning. Future public distribution needs code signing. No certificate is embedded or invented.
