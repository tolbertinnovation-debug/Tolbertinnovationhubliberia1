# Project Management quiz correction — 0.3.5

The original builder restarted a six-question category pool for every practice
and assessment. This release removes that fallback from the PM curriculum.

- 653 authored items: four for each of 158 taught/project topics, five additional
  risk items, and sixteen integrative examination items.
- 142 practices use the first three items of their exact module-qualified topic.
- The fourth item is reserved; project briefs contribute four reserved items.
- 13 assessments use 144 separate items. No item is reused across the 155 quizzes.
- There are 570 distinct delivered questions, each with four choices and a rationale.
- Specialist assessments stay within their subject. The midterm spans modules
  1–10, the final examination spans modules 1–18, and graduation samples 15 core
  modules. Capstone and portfolio quizzes test application of the project briefs.
- Correct answer positions are deterministic and distributed across all four
  choices. Existing player shuffling preserves the corresponding answer key.

The website and APK use the same bank through the same loader. Missing topic
content stops the builder rather than silently substituting generic questions.
The exporter preserves question text, options, answers and explanations exactly.
Lesson identities, order, counts, notes and video assignments remain unchanged:
20 modules, 314 entries, 143 lessons/resources, 16 projects, 155 quizzes and
158 distinct video links. Existing completed progress remains attached to the
same entries. Draft answers for changed quizzes are rejected by the app's existing
question fingerprint check; learners can retake a quiz using the new questions.

## Verification

- `node --test tools/projectmgmt-quizzes.test.mjs`: authored-item validity,
  normalised duplicate detection, topic mapping, reserved-item separation,
  assessment coverage, answer balance, deterministic allocation and missing-bank failure.
- `node tools/check-courses-lite.js`: catalog counts with prerequisite banks loaded.
- `tools/projectmgmt-browser.test.cjs`: real local course-player loader with a
  synthetic learner; all 155 sets inspected, 37 questions answered through the UI,
  including budgeting, Scrum, risk and the final exam; score and feedback checked.
- Android export tests verify exact source equality and all 570 distinct questions.
- Android instrumentation exercises welcome practice, EVM practice, Scrum practice,
  graduation, score storage, completion, cleared drafts and offline notes.

This is original TIH practice material, not official PMI examination questions.
TIH course completion does not automatically award PMP or CAPM. Certification
questions direct learners to current PMI guidance instead of hard-coding changing
eligibility rules or exam-domain weights. Technical reference checks used the
[Scrum Guide](https://scrumguides.org/scrum-guide.html) and
[PMI certification guidance](https://www.pmi.org/certifications).

The browser checks validate existing video assignments, not live playback of
all 158 external videos. No video availability claim is made by this correction.
