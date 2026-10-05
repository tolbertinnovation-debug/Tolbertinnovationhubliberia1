# Kotlin Android App Development review — 0.3.11

The existing Android program is seventh in Courses and remains available in Today.
Its 19 modules and 304 entries include 136 teaching topics, a graduation resource,
21 project briefs and 146 quizzes. The source's 158 distinct video assignments,
module order, lesson identities and project briefs are retained. The project
entries include the ten real-world apps, eight capstone stages and three starter
projects. Written lessons and quizzes work offline under existing approved-access
rules; videos require connectivity. Scores, drafts, notes and bookmarks are local
study records. Official certificates remain managed by the Learning Hub.

## Assessment correction

The prior source delivered 533 question entries but only 407 distinct prompts.
The corrected bank contains 585 distinct authored items: four per teaching topic
and 41 additional subject/project examination items. Three questions per topic
form its practice; the fourth is reserved for exams. All 533 delivered questions
are now distinct, with four options and explanatory feedback. No assessment
reissues a practice item or another assessment item.

Eight-question skill papers cover Kotlin, UI, databases, Firebase and APIs.
The 15-question midterm covers Modules 1–8; the 20-question final covers every
teaching module, 1–16. Complete App Evaluation and Portfolio Review use 35 separate
project scenarios, and graduation uses 15 further questions. Allocation is
deterministic and idempotent, and fails if topics or examination material are
missing. Existing completed records remain; the current fingerprint invalidates
obsolete unfinished question sets.

Existing practice is retained with targeted corrections for a duplicate login
prompt, IDE hardware assumptions, scoped storage, credential storage, API logging,
password strength and unsupported prevalence claims. Seven technical notes are
updated: Lists, SharedPreferences, Secure Data Storage, External Storage,
API Authentication, Firebase AI Features and Installing Android Studio. Other
existing notes are retained; this is not a full textbook rewrite. The existing
XML/View syllabus is preserved, rather than recast as a Compose curriculum.

Reference foundations checked for these corrections:

- https://kotlinlang.org/docs/collections-overview.html
- https://developer.android.com/training/data-storage/shared-preferences
- https://developer.android.com/training/data-storage/room/async-queries
- https://developer.android.com/training/data-storage
- https://developer.android.com/training/permissions/requesting
- https://developer.android.com/privacy-and-security/cryptography
- https://firebase.google.com/docs/rules/rules-and-auth
- https://firebase.google.com/docs/ai-logic

## Reading and validation

Android teaching visual cards use readable sentence text and a single column on
phones in both the shared player and offline reader. The reader continues to
sanitize HTML and disables JavaScript and network loading. Website loader cache
versions are updated for the changed curriculum, questions and notes.

Source tests check exact topic mapping, unique stems, answer validity, separate
practice/exam items, skill relevance, comprehensive coverage and deterministic
allocation. Export checks compare the complete course against the source,
including artwork and catalog position. The local browser exercises practice,
skill papers, the final, app evaluation, portfolio and graduation, including
rendered choices, answer feedback and results. Android device checks exercise
its overview, Room and AI practice, graduation score persistence, draft clearing
and real offline lesson rendering.

Video identity checks do not prove current playback of every external video.
This APK remains a signed preview, not a Google Play release.
