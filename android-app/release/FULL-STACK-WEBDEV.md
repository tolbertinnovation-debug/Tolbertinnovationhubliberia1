# Full-Stack Web Development Android review — 0.3.8

The existing `webdev` course is placed fourth in Courses, beside Computer Literacy,
Project Management and Accounting & Bookkeeping, and included in Today suggestions.
Its 20 modules and 374 entries include 169 teaching topics, one graduation resource,
24 project briefs, 180 quizzes and 194 distinct video assignments. Existing source
notes, module order, lesson identities, project briefs and video mappings are retained.
Written lessons work offline under existing approved-access rules; videos require
connectivity. Scores, bookmarks, notes and quiz drafts remain local study records.
The app does not issue official certificates.

## Question correction

The prior builder delivered 633 question entries from just 54 distinct prompts.
The shared authored bank now contains 704 distinct items: four for each of the
169 teaching topics, 24 project evaluation scenarios and four additional database/API
examination scenarios. Each topic's first three questions form its practice quiz;
its fourth is reserved. Seven subject assessments use eight questions each, the
midterm has 15, the final 20, the capstone evaluation 20 and graduation 15.
All 633 delivered questions are distinct, have four options and explanatory feedback.
Assessment items never reuse a practice item or another assessment item.

The midterm covers Modules 1–10; the final covers all 17 teaching modules.
The capstone evaluation uses project-only scenarios. Allocation is deterministic,
idempotent and fails when a topic or sufficient assessment content is absent.
Existing completed records remain; the existing question fingerprint invalidates
outdated quiz drafts. The website loader is versioned to retrieve the correction.

## Reading and validation

Sentence-based Full-Stack visual cards use reading-size text and a single column
on phones, building on the Accounting reader correction. Code examples and tables
remain available offline. No JavaScript or network access is enabled in the reader.

Source tests validate question quality, uniqueness, topic mapping and assessment
coverage. Export tests compare all course modules and supporting information to
source and verify bundled assets and catalog position. The real local website
player checks final-loader counts, registered notes, distinct video links and
rendered answers and explanations. Android device checks exercise overview,
practice, specialist quizzes, final score persistence and the real offline reader.

Video identity checks do not establish current live playback of every external
video. Existing lesson-note content is copied from the Learning Hub; this release
corrects the quiz bank and mobile rendering rather than reauthoring the textbook.
