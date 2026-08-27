# TIH Course Content Standards

Standing rules for every course in this repository. They were set by the site
owner and apply to any course being edited, not only the one in front of you.

## 1. One topic, one video

Every content lesson must have its own distinct YouTube video, and the video
must actually be about that lesson. No clip is reused anywhere within a
course.

- Source video IDs from real search results only. Never write an ID from
  memory: a fabricated ID is often exactly 11 characters, so a length check
  will not catch it.
- Match the clip to the lesson note, not merely to the module. A
  figures-of-speech video on a lesson about enjambment is a failure even
  though both are "poetry".
- Per-topic pins live in `<course>-video-map.js`, registered in the `EXTRAS`
  map in `tih-course-loader.js`. Bump the `?v=N` query string on every content
  change or browsers serve a stale copy.
- Keys are the lesson title with its numeric prefix stripped. Where a title
  occurs in more than one module, use the module-qualified form
  (`"M5:Setting"`); a plain key collapses the duplicates onto one video.

## 2. Lesson notes

Every content lesson carries a full teaching note in the standard lesson-note
format. The generated template notes some builders emit -- the same "key
points" and two exercises with the topic title substituted -- do not count as
lesson notes and must be replaced.

Required structure, in this order:

1. Banner: course name and module
2. `LESSON NOTE: <TOPIC IN CAPITALS>`
3. Meta table: Subject, Topic, Level, Lesson duration
4. Learning objectives ("By the end of this lesson you should be able to...")
5. Numbered teaching sections, beginning with an Introduction and a Meaning /
   definition section, and including worked examples, comparison tables and
   sub-headings as the topic requires
6. Summary (bulleted)
7. Key Terms (two-column table)
8. Review Questions: multiple choice with the answer and explanation revealed
   on click, then short-answer questions
9. Class Activity (two activities)
10. Assignment

Write real teaching, not description of the topic. Define a term against the
terms students confuse it with, show the same material handled well and
badly, and include a section on how the examiner's question on that topic
should actually be answered.

Notes are authored as structured Python dicts and rendered by
`/tmp/notegen/nb.py` (helpers: `p`, `ul`, `ol`, `sub`, `quote`, `eg`, `defn`,
`note`, `table`, `mcq`, `sa`). Recreate that helper if the scratch copy is
gone.

### Where notes must be written

Into `window.TIH_LESSON_NOTES[courseId]`, keyed by module-qualified title.
**Not** into `LESSON_CONTENT`. The player passes `LESSON_CONTENT` notes
through `generateCourseTopicOverview()`, which prepends its own generic
"Learning objectives" and "Introduction" -- an authored note sent that way
renders with two objective lists and its sections renumbered.
`TIH_LESSON_NOTES` renders as-is.

The note stylesheet is injected by the notes file itself, because the player
inserts authored notes as raw HTML and page-level CSS does not reach them.

## 3. Quizzes and examinations

- Every content lesson gets four authored questions on that lesson's topic.
  The first three form its practice quiz; the fourth is reserved.
- Module assessments draw on the reserved questions, so a learner meets them
  first in the assessment rather than having already answered them.
- Mock and final papers draw on the reserved pool and then on a separate
  course-wide examination pool. Cursors move forward only and an issued
  question is never reissued, so no two assessments in a course share an item.
- No two quizzes in a course may be identical, and no quiz may be empty.

## 4. Verification before commit

Node is not sufficient. The player applies override layers the builders do
not (`TIH_TOPIC_VIDEOS` wins over a curriculum's own `lesson.v`), so a course
can look correct in Node and be wrong in the browser.

1. `node tools/check-courses-lite.js` -- dashboard counts in sync
2. A Node pass over the built course for video and quiz counts
3. A Playwright pass against `course-player.html` on a local server,
   confirming distinct videos, no duplicate or empty quizzes, and notes
   registered
4. Only then commit

Serve locally with `python3 -m http.server 8099`; Playwright needs
`NODE_PATH=/opt/node22/lib/node_modules` and Chromium at
`/opt/pw-browsers/chromium`. Seeding `localStorage` requires
`tih_hub_last_student`, or `switchAccountCleanup` purges the `tih_access_*`
keys and the player locks the course.

## 5. Dashboard counts

`courses-lite.js` carries `_t` (total lessons) and `_v` (video lessons) per
course and is what the dashboard reads, not `courses-db.js`. Reconcile it
after any change to lesson or video counts and bump its `?v=N` in
`hub-dashboard.html`. WASSCE courses are not listed in it.

## 6. Git

Develop on `ccr-18abdbb2-w1rn9d`. Push each finished course to both `main`
and that branch. Never open a pull request unless asked.
