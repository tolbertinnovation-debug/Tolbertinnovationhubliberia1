# Accounting & Bookkeeping Android review — 0.3.7

Accounting & Bookkeeping was already present in the bulk import. This release
places it third in Courses, beside Computer Literacy and Project Management,
and includes it in Today's suggested courses.

The existing Learning Hub material is bundled through the actual website loader:
20 modules, 279 entries, 131 authored content lessons plus one graduation resource,
nine project briefs including the capstone, 138 quizzes, and 140 distinct video
assignments. Course information, instructor, local cover, notes, project briefs
and lesson identities are preserved. Written content works offline under the
existing verified-access rules; videos need a connection. App practice does not
issue an official certificate.

## Quiz readiness correction

The source already had topic-specific practice sets, but assessments drew their
questions from those same sets. One practice question also appeared in two topics.
The shared website source now has one reserved question for each of the 131
content lessons and two separate examination questions. Practice still uses its
three original topic questions, with the duplicate prompt replaced. The seven
assessments use 82 separate questions and never reissue an item. All 475 delivered
questions are distinct, have four options and explanatory feedback.

Subject papers cover foundations, journals/ledgers/cash records, financial
statements, and both taxation and ethics. The midterm covers modules 1–10 and the
final covers all 18 taught modules. Tax questions teach general concepts and
require checking current applicable official guidance rather than asserting
jurisdiction-specific rates or deadlines.

The allocator is deterministic and fails if topic content is missing. The loader
versions are bumped so website users receive the correction. Lesson order,
IDs, counts, notes and videos are unchanged. Existing completed study records
remain; changed quiz drafts are invalidated by the existing question fingerprint.

## Validation

- Source question tests check all practice-topic mappings, no empty or repeated
  questions, relevant assessment coverage, idempotent reapplication and missing-item failure.
- Export tests compare modules, questions, notes and supporting information to
  source, check bundled images and verify third position in the catalog.
- The real local website player checks the final loader result, video identities,
  authored-note registration, and 37 rendered questions including double-entry,
  reconciliation, taxation/ethics and the final examination.
- Android instrumentation checks account-approved access, overview counts,
  practices, graduation scoring, stored completion and cleared drafts.
- A real Android WebView test checks visible offline notes with scripts and
  network access disabled.

Video identity checks do not establish live playback of every external video.
The existing app's video player and online-video behaviour are reused.
