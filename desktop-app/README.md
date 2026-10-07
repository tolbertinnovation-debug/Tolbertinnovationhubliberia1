# TIH Learning Desktop

Independent Windows app on `codex/tih-desktop-app`. Desktop code lives in `desktop-app/`; its workflow runs only on this branch. Website and Android branches are separate.

## Ten full desktop courses

- Computer Literacy: all 15 source modules: 123 authored reading lessons, 125 assessments with 404 questions, and five practical projects.
- 128 source-linked videos across lessons and projects. The YouTube player loads above the written lesson with autoplay off. Video playback needs internet; availability is controlled by YouTube.
- Full module navigation, lesson search, Previous/Next, remembered last activity, optional notes, focus view, full screen and adjustable text.
- Saved quiz drafts, automatic grading at 70%, answer explanations, shuffled choice positions, retries and retained best scores.
- Project reflections, file/folder references and self-reported practical completion. The app does not upload or grade project files.
- Module/course progress, backup/restore and an exportable PDF study record. Scores, reading and projects are personal desktop study records; official TIH certification remains in Learning Hub.
- IELTS Masterclass: all 22 sections, 126 authored lessons, 111 assessments with 376 questions, one Task 2 essay project and 127 source-linked videos. Inline charts, model examples and expandable keywords are preserved.
- IELTS essay studio: autosaved draft, word count, optional 40-minute timer and a 250-word minimum before self-reporting completion. Quiz percentages are not IELTS band scores; essays are not graded automatically.
- Each course has separate bookmarks, progress, scores, project records and PDF study records. The Study course selector switches courses without discarding work.
- Project Management Professional Certificate: all 20 modules, 143 reading lessons, 155 assessments with 570 distinct questions, 16 practical projects and 158 source-linked videos. Original delivery models, worked examples, project briefs and expandable keywords are preserved.
- Full-Stack Web Development Program: all 20 modules, 170 authored readings, 180 assessments with 633 distinct questions, 24 projects and 194 source-linked videos. Code examples, expandable keywords and original project deliverables are preserved. Build and run projects with your own development tools; the desktop app records reflections and file references.
- Microsoft Office Mastery Professional Certificate: 20 modules, 169 reading lessons, 179 assessments with 637 distinct questions, 29 projects and 198 video links. Word, Excel, PowerPoint, Outlook, Teams, OneNote, OneDrive, collaboration, Copilot and automation notes include examples, tables and expandable keywords. Original project deliverables are retained. Learners complete practical work using their own Office applications.
- Accounting & Bookkeeping Program: all 20 modules, 132 readings, 138 assessments with 475 distinct questions, nine practical projects and 140 video links. Worked examples, tables, expandable keywords, journal entries, ledgers, cashbooks, reconciliation, payroll and financial-statement projects are preserved.
- Cybersecurity Fundamentals & Ethical Hacking Program: 20 modules, 149 readings, 158 source assessments with 562 question entries, 21 projects and 170 video links. Source quizzes reuse some prompts. Original defensive-security notes, examples and authorized-practice project briefs are preserved.
- Android App Development Program (Kotlin): 19 modules and 304 activities, comprising 137 readings, 146 assessments with 533 distinct questions and 21 projects, plus 158 video links. Kotlin examples, expandable keywords, practical projects and capstone deliverables are preserved. Use Android Studio to build and run apps.
- Graphic Design Program: Canva & Adobe Photoshop: 18 modules, 139 readings, 149 assessments with 542 distinct questions, 24 practical projects and 163 video links. Original notes, examples, expandable keywords and design deliverables are preserved.
- Build Real AI & Cybersecurity Skills: 15 modules, 127 readings, 136 assessments with 477 question entries, six projects and 133 video links. Source assessments reuse some questions.
- 57-course catalog and source-derived outlines. Other courses will be added one by one.

## TIH accounts and access

Full-course access follows the same rules as the APK: sign in using the existing Supabase account, resolve only the authenticated `student_me` profile, require active status, and accept only that student's enrolled course grants or paid/confirmed access. No student roster, payments, certificates or server progress are modified. Approved course access can be used offline for up to seven days after verification. Use TIH account → Refresh course access to reverify. Rejected account verification clears the session; network failures do not extend the cached grant.

Passwords are never saved. Access and refresh credentials are encrypted using Electron safeStorage (Windows DPAPI) in `account-vault.bin`; they are never exposed through the renderer bridge or included in backups. Credential persistence fails closed when secure storage is unavailable. Rotated refresh credentials are saved before a profile reread, without extending the grant verification time.

The welcome and sign-in page appears whenever there is no signed-in account. A saved account opens the course library. Signed-in learners awaiting approval can use the three Computer Literacy previews. Old guest work is kept on disk; export its backup before upgrading, then restore it from Settings into your signed-in workspace. Each signed-in student has a separate workspace under `userData/students/<student-id>/study-workspace.json`. Signing out preserves their work. Backups are checked against the active profile; an old guest backup can be explicitly restored into a signed-in account. Course body files and account configuration are blocked from the local renderer protocol; full material is delivered only by validated IPC after approval. Account expiry removes full-course material and returns the learner to the access screen.

## Learning space

Learning space opens your last available activity. Lessons opens the active course outline; search finds readings, quizzes and projects. My notes opens a companion notebook. Focus view expands the lesson to almost the entire window; Full screen fills the display. Escape exits either view. Video and written material occupy one continuous scrolling lesson page, matching the APK placement. Hide video removes the player and stops playback; opening Resources or leaving the activity also stops playback. Hiding notes or outline panels does not reload the reading or video. Scroll over the text using the mouse wheel or Page Up/Page Down. Read the lesson below jumps past the video; Top returns to the start. Reading positions are saved per lesson and restored on reopening.

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

The read-only importer uses the existing Learning Hub sources and public account configuration without changing them. It bundles ten full courses plus the guest preview and catalog; generated content and build files are excluded from git. Desktop branding copies the APK logo and welcome illustration unchanged and converts the logo to Windows PNG/ICO formats.

On Windows use `TIH_ELECTRON_TEST=1` and `npm run test:ui`. Linux browser UI checks require Playwright Chromium. `npm run dist:win` creates the unsigned Windows installer.

Older backups without reading positions start each lesson at the top. Notes support 500 entries and 30,000 characters each. Course records support up to 5,000 activity IDs; older version-1 backups migrate with empty assessment/project fields. Backups merge best scores and preserve conflicting notes/project reflections. A corrupt workspace is reported without silent replacement. Export backups before uninstalling or changing computers.

## Validation and release

The workflow tests the native Windows app, builds the installer, installs it and repeats UI tests against the installed executable. Tests cover full source completeness, grading, restore, cached-access expiry, active-profile/enrollment rules, rotated credentials, approved/pending accounts, quiz drafts/results, project records, PDF export, per-student isolation, independent course permissions, IELTS charts/keywords, essay drafts/timer/word counts, Project Management quiz uniqueness/portfolio/final assessment, ten-course switching and restart persistence. Account integration tests use controlled responses; they do not authenticate a real student. Video tests verify controlled player loading and isolation, not third-party playback availability.

Release: `desktop-v0.17.0-preview`. The installer is unsigned and may show a Windows publisher warning. Future public distribution needs code signing. No certificate is embedded or invented.



Data Analysis with Excel, Power BI & Google Sheets is the eleventh full desktop course, importing all 20 existing modules, source assessments, original project briefs, notes and video links. Enrollment, progress and saved work are independent. Source assessment repetitions are preserved.

Business Leadership Masterclass is the twelfth full course: 20 modules, 144 readings, 155 assessments with 565 distinct questions, 21 projects and 165 video links. Original practical briefs and authored notes are retained; course access and study progress are independent.

English for Academic & Professional Success is the thirteenth full course: 20 modules, 146 readings, 162 assessments with 616 distinct questions, 24 projects and 170 video links. Original project briefs and notes are retained; enrollment and progress remain independent. Practice percentages are not official exam scores.

TOEFL iBT is the fourteenth full course: 10 modules, 84 reading lessons with video links and 100 assessments with 263 distinct questions. Original notes, exercises and mock assessments are preserved. Desktop practice percentages are not official TOEFL scores; speaking and writing exercises are self-practice.

Digital SAT Prep is the fifteenth full course: 14 modules, 102 lessons with video links and 114 assessments containing 467 question entries (300 distinct prompts). Original notes and short practice assessments are retained. Percentages are not official SAT scores; source question repetitions are preserved.
