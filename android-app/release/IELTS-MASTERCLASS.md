# IELTS Masterclass review — Android preview 0.3.16

IELTS Masterclass: Beginner to Band 9 is twelfth in Courses and available in Today after sign-in. The shared website course and native offline bundle use the same reviewed IELTS source files.

- 22 modules, 238 entries: 126 lessons, one essay project and 111 quizzes.
- 127 authored, module-qualified teaching notes and 127 distinct video assignments.
- 106 topic practices (three questions each), four subject checks (10, 10, 10 and eight questions) and a fresh 20-question final readiness assessment: 376 distinct issued questions.
- Existing lesson IDs, titles, ordering, kinds and video assignments are preserved. Local study records continue to use those identities.

The review replaces repeated Describing People questions and incorrect Listening material in the Reading Sentence Completion practice. Twenty topic sets now include applied exercises with self-contained evidence: original reading passages, written listening models, graph data, map changes and writing examples. The final check samples 20 different modules and reuses no practice questions. Answer positions are deterministically shuffled, and missing topic material fails content validation.

Detailed original notes are retained. New worked examples provide model answers and explanations. Line and bar charts now have labelled zero-based scales, explicit units, descriptions and accessible data tables. Process cards wrap on small screens; chart tables can scroll within the reading surface. The essay project includes an original prompt, required drafts, an error log and a review rubric.

IELTS exam facts were checked against IELTS.org on 6 October 2026. Delivery notes cover the selected-country Writing on Paper option and direct learners to confirm their actual booking mode. Raw-score thresholds are described as version-dependent. Task Response terminology is used for Task 2. Native accent imitation is not required.

TIH multiple-choice percentages and the TIH course certificate do not award official IELTS bands or a Test Report Form. Written listening models are not recorded listening tests. Timed listening/reading and actual essay/speaking performance practice remain necessary. Video assignments are preserved; source validation does not establish live YouTube playback availability.

## Validation

- 45 shared/export content checks, including stable lesson identity and video-assignment hashes.
- 25 website question-bank checks and dashboard catalog parity.
- Browser quiz checks: 88 questions answered with the expected feedback and scores.
- Offline reader layouts: seven representative lessons at 360px, fonts 18px and 24px, with network requests blocked.
- Android 16: native course overview, reading/chart practices, final submission and stored study records, plus an offline WebView chart-reader paint check. Full preview CI runs 35 instrumentation tests, unit tests, debug/release lint and release packaging validation.

The preview keeps the existing signing certificate and uses version code 21. The instrumentation allowance is increased from 300 to 360 seconds because two added device tests exceed the narrow margin of the previous 33-test suite.
