# TOEFL iBT review — Android preview 0.3.17

TOEFL iBT is thirteenth in Courses and included in Today after sign-in. Its source course remains the ten-module program. All 184 lesson and quiz identities, ordering and 84 video assignments are preserved, so existing local study records continue to refer to the same entries.

- 84 authored, module-qualified teaching notes, each with an applied exercise, model answer and explanation.
- 84 topic practices: one original applied question and one concept question each.
- 15 separate five-question knowledge checks and a fresh 20-question final check.
- 263 distinct issued questions, with deterministic answer-position rotation. No assessment reuses a practice question. Reading and Listening inference questions have different evidence and separate teaching notes.

## Current format and practical work

ETS test content and scoring pages were checked on 6 October 2026:

- https://www.ets.org/toefl/test-takers/ibt/about/content.html
- https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html

Current workshops cover incomplete words, daily-life texts and academic reading; conversational replies, conversations, announcements and academic talks; sentence construction, email and academic discussion; repetition and interview speaking. Score guidance describes the current 1–6 scale and comparable overall 0–120 result during the two-year transition. Institution requirements and actual booking details must be checked separately.

The older Independent Speaking, Integrated Speaking and Integrated Writing lessons remain clearly labeled supplemental legacy-format exercises. The original videos are preserved and may teach older formats; current written workshops provide the updated task map. Video-source checks do not establish live playback availability.

Entries titled mock tests retain their identities, but their descriptions and quiz titles explicitly identify them as short TIH knowledge checks. These fixed multiple-choice quizzes are not full-length adaptive TOEFL simulations. Transcript questions do not measure actual listening. Spoken recordings and written drafts, reviewed for relevance, accuracy, intelligibility and development, remain essential. TIH quiz percentages do not award official TOEFL scores, and the TIH completion certificate is not an ETS score report.

## Validation

The shared/export suite has 48 checks, including normalized question uniqueness, subject relevance, separate final items, module-specific inference material, valid answers, current format guidance, deterministic exports and a hash preserving every original lesson identity and video assignment.

Browser checks exercise live quiz feedback and scores through the local course player, using only a synthetic learner. Offline reader checks cover seven representative topics at 360px with 18px and 24px fonts and network requests blocked. These checks run in Android preview CI.

Android device tests cover the TOEFL overview, grammar and reading practice, final submission, saved scores, completion records and an offline reader paint check. The complete native suite now contains 37 tests; its instrumentation allowance is 420 seconds. Build validation also includes unit tests, debug/release lint and release packaging checks.

Preview version code is 22. The existing signing certificate is preserved. Changes remain on `codex/tih-native-android`; the main branch and its website deployment are unchanged.
