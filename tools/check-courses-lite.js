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
  vm.runInContext('var COURSES_DB={};var LESSON_CONTENT={};var TIH_TOPIC_QUIZZES={};' +
                  'var TIH_TOPIC_VIDEOS={};var TIH_MODULE_VIDEOS={};', ctx);
  for (const f of files) {
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
  }
  return ctx;
}
/* Title -> lookup key, matching the player: drop leading emoji, drop the
   "3.1 " numbering, fold to lowercase words. */
function nk(s) {
  return String(s || '').replace(/^[^0-9a-zA-Z]+/, '')
    .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
    .replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}

/* Count the lessons that end up with a video ON SCREEN, not just the ones the
   curriculum builder assigns. The player layers two more sources on top of
   lesson.v -- TIH_MODULE_VIDEOS (a module-wide default) and TIH_TOPIC_VIDEOS
   (a per-topic pin, which wins) -- both fed by videos/<id>-videos.js through
   tih-video-runtime.js. Ignoring them made this checker demand 0 videos for
   ph-career while learners were seeing 57, and it hid the AI course's
   duplicates entirely. */
function tally(course, pins, mods) {
  pins = pins || {}; mods = mods || {};
  const pinIdx = {};
  Object.keys(pins).forEach(k => {
    const m = String(k).match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
    pinIdx[m ? (m[1] + '|' + nk(m[2])) : nk(k)] = pins[k];
  });
  let total = 0, videos = 0;
  (course.modules || []).forEach((m, i) => {
    const num = (String(m.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (m.lessons || []).forEach(l => {
      total++;
      if (pinIdx[num + '|' + nk(l.t)] || pinIdx[nk(l.t)] || l.v || mods[num]) videos++;
    });
  });
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
  const files = ['courses-db.js', CURRICULUM[id]]
    .concat(EXTRAS[id] || [])
    .concat(['videos/' + id + '-videos.js']);
  let ctx;
  try { ctx = ctxWith(files); } catch (e) { continue; }
  const built = ctx.COURSES_DB[id];
  if (!built || !built.modules) continue;

  const real = tally(built, (ctx.TIH_TOPIC_VIDEOS || {})[id], (ctx.TIH_MODULE_VIDEOS || {})[id]);
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
