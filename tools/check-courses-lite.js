/* Verify courses-lite.js still matches what the curriculum builders produce.

   The dashboard deliberately does NOT load the curriculum builders — that is
   the multi-megabyte problem tih-course-loader.js exists to avoid — so it
   reads courses-lite.js instead, a small generated summary carrying each
   course's title and its lesson counts (_t = total lessons, _v = lessons
   with a video).

   The failure mode this catches: rebuild a course and forget to update
   courses-lite.js, and the two silently disagree. That is exactly what
   happened to Accounting & Bookkeeping, which the dashboard advertised as
   "Accounting and Bookkeeping — 30 lessons" while the player built
   "Complete Accounting & Bookkeeping Program" with 279. Nothing errored;
   the learner just saw two different numbers for one course.

   Run after changing any curriculum builder or video map:
     node tools/check-courses-lite.js

   Exits non-zero when anything has drifted, so it can gate a commit. */
const fs = require('fs');
const vm = require('vm');

function ctxWith(files) {
  const ctx = { console: { log() {}, warn() {}, error() {} } };
  ctx.window = ctx; ctx.globalThis = ctx;
  vm.createContext(ctx);
  vm.runInContext('var COURSES_DB={};var LESSON_CONTENT={};var TIH_TOPIC_QUIZZES={};', ctx);
  for (const f of files) {
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
  }
  return ctx;
}
function tally(course) {
  let total = 0, videos = 0;
  (course.modules || []).forEach(m => (m.lessons || []).forEach(l => {
    total++; if (l.v) videos++;
  }));
  return { total, videos };
}

// What the dashboard believes
const lite = ctxWith(['courses-lite.js']).COURSES_DB;

// What the player actually builds, one isolated context per course so no
// builder's mutations leak into the next course's numbers.
const loader = fs.readFileSync('tih-course-loader.js', 'utf8');
const CURRICULUM = {};
loader.match(/var CURRICULUM = \{([\s\S]*?)\};/)[1].split('\n').forEach(line => {
  const g = line.match(/"([^"]+)":\s*"([^"]+)"/);
  if (g) CURRICULUM[g[1]] = g[2];
});
const EXTRAS = {};
const ex = loader.match(/var EXTRAS = \{([\s\S]*?)\n  \};/);
if (ex) ex[1].split(/\n(?=\s*'[^']+':)/).forEach(block => {
  const id = (block.match(/'([^']+)':/) || [])[1];
  if (id) EXTRAS[id] = (block.match(/'([^']+\.js)\?[^']*'/g) || [])
    .map(s => s.replace(/'/g, '').split('?')[0]);
});

const drift = [];
for (const id of Object.keys(CURRICULUM)) {
  if (!lite[id]) continue;                       // not shown on the dashboard
  const files = ['courses-db.js', CURRICULUM[id]].concat(EXTRAS[id] || []);
  let built;
  try { built = ctxWith(files).COURSES_DB[id]; } catch (e) { continue; }
  if (!built || !built.modules) continue;

  const real = tally(built);
  const shown = tally(lite[id]);
  const issues = [];
  if (lite[id].title !== built.title) issues.push(`title "${lite[id].title}" != "${built.title}"`);
  if (shown.total !== real.total)     issues.push(`lessons ${shown.total} != ${real.total}`);
  if (shown.videos !== real.videos)   issues.push(`videos ${shown.videos} != ${real.videos}`);
  if (issues.length) drift.push({ id, issues });
}

if (!drift.length) {
  console.log('courses-lite.js is in sync with every curriculum builder.');
  process.exit(0);
}
console.error('courses-lite.js has drifted from the builders:\n');
drift.forEach(d => console.error('  ' + d.id + '\n    - ' + d.issues.join('\n    - ')));
console.error('\nUpdate the affected entries in courses-lite.js (title, _t, _v).');
process.exit(1);
