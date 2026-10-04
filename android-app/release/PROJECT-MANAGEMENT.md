# Project Management Android review — 0.3.4

Project Management was already present in the bulk Learning Hub import. This
release puts it immediately after Computer Literacy in Courses and includes it
in Today's suggested learning paths, then adds course-specific import and native
Android checks.

The existing source course is copied, not rewritten:

- 20 modules and 314 entries: 143 lessons, 16 projects, 155 quizzes/assessments.
- 158 distinct video links, resolved through the same topic overrides as the site.
- 570 question entries, including the 15-question final assessment.
- Existing teaching HTML, project briefs, local course cover, outcomes, instructor,
  course description, requirements, and FAQs remain attached to the course.
- Source curriculum, notes, question bank, video map, and local cover matched the
  main branch snapshot `3b3a0c8c2065fb1b2c67e095126c28d924b89b6e` when reviewed.

The native course uses the same reading, notes, bookmarks, video player, quiz
review, draft saving, scoring, and progress storage as Computer Literacy.
Approved account access still controls entry to lessons. App practice scores do
not issue official certificates. Written material is bundled offline; videos
require a connection.

## Existing source limitation

The source reuses question sets across multiple practice quizzes and assessments.
The 570 total counts question entries, not 570 unique authored questions. This
release preserves those questions and verifies their import faithfully; rewriting
the source bank is separate work. Video IDs are distinct in the imported course;
that check alone does not establish that every external video remains playable.

## Verification

`content.test.mjs` checks source equality for every module, lesson, project,
question, video assignment, and supporting course field, as well as the bundled
cover and catalog placement. Android instrumentation exercises the course overview,
practice and final assessment through the native reader, stored scores, completed
entries, cleared quiz drafts, and actual offline HTML rendering.
