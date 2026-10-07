# TIH Learning Desktop

Independent Windows desktop workspace on `codex/tih-desktop-app`. All desktop code lives in `desktop-app/`; its workflow runs only on this branch. The website and Android workflows retain their existing branches.

## First preview

- Desktop dashboard, searchable 57-course catalog and complete source-derived outlines.
- Saved courses, editable personal notebook, local profile and focus timer.
- Three authored Computer Literacy previews with a wide lesson space, adjustable text, companion notes, online videos and personal reading progress.
- Collapsible navigation, Back/Forward controls, Previous/Next lessons, remembered last lesson, optional lesson list and notes panels, focus view and full screen.
- Local JSON backup and restore; conflicts retain separate notes.
- Electron sandbox, context isolation, narrow validated IPC, local custom protocol, blocked remote navigation and isolated reading/video iframes.

This is the desktop foundation. Full courses, authentication, enrollment, quizzes and official certificates are not implemented in this preview. Course content will be prepared one course at a time. The local profile is not a TIH account. Catalog, reading materials and notes work offline. Videos stream from YouTube after the learner clicks Load lesson video and require internet. TIH includes no analytics; YouTube may collect usage data and display advertising.

## Develop

Node 22+, Python 3 with Pillow, Windows 10/11 x64 for the preview installer.

```
npm ci
npm run content
python tools/icon.py
npm test
npm start
```

The importer reads trusted Learning Hub source files without changing them. It is independent of the Android exporter. Only the catalog, three sample lesson bodies and their existing source-linked YouTube IDs are bundled; videos are streamed rather than downloaded. Generated assets are rebuilt from source and excluded from git.

On Windows, run the native app tests with `TIH_ELECTRON_TEST=1` and `npm run test:ui`. On Linux, `npm run test:ui` runs browser UI checks after Playwright Chromium is installed. `npm run dist:win` generates the Windows installer.

Personal state is saved under Electron's `userData` directory in `study-workspace.json`. Notes are limited to 200 entries and 30,000 characters each. Corrupt state is reported without silently replacing it. Backup restore merges records and retains conflicts. Maintain backups before uninstalling or changing computers.

## Learning space

Use Learning space to reopen your last preview lesson. In a lesson, use Lessons and My notes to open side panels, Focus view to give almost the whole window to the lesson, and Full screen to fill the display. Escape exits focus view or full screen. The Read lesson, Watch video and Resources tabs share the same workspace. Hiding side panels does not reload the lesson or player; switching away from Video stops playback. Previous/Next buttons navigate the available preview lessons. The last lesson is included in workspace backups.

The embedded player uses YouTube privacy-enhanced mode, identifies the installed desktop app in the request header and runs without the desktop bridge. Open on YouTube launches only the video already linked to the current bundled lesson. Camera, microphone and other permissions remain denied.

## Release

The desktop workflow tests the real Windows Electron application, captures screenshots, builds an unsigned per-user NSIS installer, silently installs it, repeats the native UI tests against the installed executable, and publishes the `desktop-v0.1.2-preview` prerelease. Public distribution will need code signing; this preview may show Windows publisher warnings. No signing certificate is embedded or invented.
