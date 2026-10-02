/** Read-only bridge from the existing website into the Android asset bundle.
 * No duplicated curricula, no JavaScript executed by the Android app, no network.
 * The VM is a compatibility harness for trusted repository code, NOT a security sandbox.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {organization, organizationSources} from './organization.mjs';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const out = path.join(root, 'android-app/app/src/main/assets/learning');
export function noteKey(s) {
  return String(s || '').replace(/^[^0-9a-zA-Z]+/, '').replace(/^\s*\d+(?:\.\d+)*[.)]?\s+/, '')
    .replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}
export function videoKey(s) {
  return String(s || '').replace(/^[^0-9a-zA-Z]+/, '').replace(/^\s*\d+(?:\.\d+)*[.)]?\s+/, '')
    .replace(/\s+/g, ' ').trim().toLowerCase();
}
export function lookup(bank, title, module, normalize = noteKey) {
  let plain = null;
  for (const [key, value] of Object.entries(bank || {})) {
    const match = key.match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
    if (match && +match[1] === module && normalize(match[2]) === normalize(title)) return value;
    if (!match && normalize(key) === normalize(title) && plain === null) plain = value;
  }
  return plain;
}
export function createContext(id = '') {
  const styles = [], files = new Set();
  let context;
  const run = (name) => {
    const local = name.split('?')[0];
    const resolved = path.resolve(root, local);
    if (!resolved.startsWith(root + path.sep)) throw new Error('Invalid source path');
    files.add(local);
    vm.runInContext(fs.readFileSync(resolved, 'utf8'), context, {filename: local, timeout: 5000});
  };
  const element = () => ({style: {}, dataset: {}, setAttribute() {}, appendChild() {},
    addEventListener() {}, querySelectorAll: () => []});
  const append = el => {
    if (el.src) { run(el.src); if (el.onload) el.onload(); }
    else if (el.textContent) styles.push(el.textContent);
    return el;
  };
  context = { console: {log() {}, warn() {}, error() {}},
    location: {search: id ? '?id=' + encodeURIComponent(id) : '', pathname: '/course-player.html'},
    document: {head: {appendChild: append, insertAdjacentHTML(_where, html) { for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) styles.push(m[1]); }}, documentElement: {appendChild: append},
      readyState: 'complete', createElement: element, getElementById: () => null,
      addEventListener() {}, querySelector: () => null, querySelectorAll: () => []},
    setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {}
  };
  context.window = context;
  context.globalThis = context;
  vm.createContext(context);
  return {context, run, styles, files};
}
export function extractCourse(id) {
  const h = createContext(id), c = h.context;
  h.run('courses-db.js');
  const original = c.COURSES_DB[id] || {};
  h.run('tih-course-loader.js');
  c.TihCourseLoader.ensure(id, () => {});
  if (!c.COURSES_DB[id] && id.startsWith('wassce-')) {
    h.run('wassce-data.js'); h.run('wassce-course.js'); c.WassceCourse.build(id);
  }
  h.run('tih-notes-runtime.js'); h.run('tih-video-runtime.js');
  h.run('tih-authored-notes.js'); h.run('course-images.js');
  const source = c.COURSES_DB[id];
  if (!source?.modules?.length) throw new Error('Course has no curriculum: ' + id);
  let flat = 0;
  const seen = new Set();
  const modules = source.modules.map((mod, mi) => ({title: mod.title, lessons: mod.lessons.map(l => {
    const index = flat++;
    const key = `${id}|${mod.title}|${l.t}`;
    const lessonId = crypto.createHash('sha256').update(key).digest('hex').slice(0, 20);
    if (seen.has(lessonId)) throw new Error('Duplicate lesson identity: ' + key);
    seen.add(lessonId);
    const authored = lookup(c.TIH_LESSON_NOTES?.[id], l.t, mi + 1);
    const body = authored || c.LESSON_CONTENT?.[id]?.[String(index)] || '';
    let video = l.v || '';
    if (!l.isQuiz) {
      if (!l.isProject && c.TIH_MODULE_VIDEOS?.[id]?.[mi + 1]) video = c.TIH_MODULE_VIDEOS[id][mi + 1];
      video = lookup(c.TIH_TOPIC_VIDEOS?.[id], l.t, mi + 1, videoKey) || video;
    } else video = '';
    const questions = (source.quizzes?.[l.quizId]?.questions || []).map(q => {
      if (!q.q || !Array.isArray(q.opts) || !Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.opts.length) {
        throw new Error('Unsupported quiz question in ' + id + ': ' + l.t);
      }
      return {question: q.q, options: q.opts, answer: q.correct, explanation: q.exp || ''};
    });
    return {id: lessonId, sourceIndex: index, title: l.t, duration: l.d || '', module: mi + 1,
      kind: l.isQuiz ? 'quiz' : l.isProject ? 'project' : 'lesson', final: !!l.isFinal,
      videoId: video, sharedVideo: false, html: body, noteSource: authored ? 'authored' : body ? 'curriculum' : 'missing', questions};
  })}));
  const videos = new Map();
  for (const l of modules.flatMap(m => m.lessons)) if (l.videoId) videos.set(l.videoId, (videos.get(l.videoId) || 0) + 1);
  for (const l of modules.flatMap(m => m.lessons)) l.sharedVideo = !!l.videoId && videos.get(l.videoId) > 1;
  const playerCss = fs.readFileSync(path.join(root, 'course-player.html'), 'utf8').match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
  h.files.add('course-player.html');
  // Existing written course information from the website, carried across as-is.
  // Ratings, review counts, enrolment totals and testimonials are deliberately
  // left out: the app does not restate figures it cannot verify offline.
  const pick = key => (Array.isArray(source[key]) ? source[key] : Array.isArray(original[key]) ? original[key] : [])
    .map(s => String(s).trim()).filter(Boolean);
  const faqs = (Array.isArray(source.faqs) ? source.faqs : Array.isArray(original.faqs) ? original.faqs : [])
    .map(f => ({question: String(f?.q || '').trim(), answer: String(f?.a || '').trim()}))
    .filter(f => f.question && f.answer);
  const teacher = source.instructor || original.instructor || '';
  const instructor = teacher ? {name: String(teacher).trim(),
    title: String(source.instructorTitle || original.instructorTitle || '').trim(),
    bio: String(source.instructorBio || original.instructorBio || '').trim()} : null;
  return {id, title: source.title, description: source.shortDesc || source.description || original.shortDesc || '', category: source.category || original.category || 'Learning',
    level: source.level || 'All levels', duration: '3 weeks', image: source.cardImage || '',
    outcomes: source.learn || [], about: pick('about'), requirements: pick('requirements'), faqs, instructor,
    modules, css: playerCss + '\n' + h.styles.join('\n'), sourceFiles: [...h.files].sort()};
}
export function exportAll() {
  fs.mkdirSync(path.join(out, 'courses'), {recursive: true});
  fs.mkdirSync(path.join(out, 'images'), {recursive: true});
  const h = createContext(); h.run('courses-db.js');
  const loader = fs.readFileSync(path.join(root, 'tih-course-loader.js'), 'utf8');
  const entries = [...loader.match(/var CURRICULUM = \{([\s\S]*?)\};/)[1].matchAll(/"([^"]+)":/g)].map(m => m[1]);
  const ids = [...new Set([...Object.keys(h.context.COURSES_DB), ...entries])];
  const report = {courses: 0, lessons: 0, authoredNotes: 0, questions: 0, missingNotes: [], emptyQuizzes: [], sourceFiles: {}};
  const catalog = [];
  for (const id of ids) {
    const course = extractCourse(id);
    const lessons = course.modules.flatMap(m => m.lessons);
    report.courses++; report.lessons += lessons.length;
    for (const lesson of lessons) {
      report.authoredNotes += lesson.noteSource === 'authored' ? 1 : 0;
      report.questions += lesson.questions.length;
      if (lesson.kind === 'lesson' && !lesson.html) report.missingNotes.push({course: id, lesson: lesson.title});
      if (lesson.kind === 'quiz' && !lesson.questions.length) report.emptyQuizzes.push({course: id, lesson: lesson.title});
    }
    for (const file of course.sourceFiles) report.sourceFiles[file] = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
    // Copy existing artwork; never create replacement logos or imaginary content.
    let cover = course.image;
    if (!cover || /^https?:/.test(cover)) {
      const localFallback = id + '-card.jpg';
      if (fs.existsSync(path.join(root, localFallback))) cover = localFallback;
    }
    if (cover && !/^https?:/.test(cover) && fs.existsSync(path.join(root, cover))) {
      const dest = 'images/' + id + path.extname(cover);
      fs.copyFileSync(path.join(root, cover), path.join(out, dest)); course.image = dest;
    } else course.image = ''; // Catalog never fetches third-party images automatically.
    fs.writeFileSync(path.join(out, 'courses', id + '.json'), JSON.stringify(course));
    // The catalog is read for all 57 courses at startup, so the long-form course
    // information stays in the per-course file the course screen already loads.
    const {modules, css, sourceFiles, about, requirements, faqs, instructor, ...summary} = course;
    catalog.push({...summary, lessonCount: lessons.length, moduleCount: modules.length,
      videoCount: lessons.filter(l => l.videoId).length, quizCount: lessons.filter(l => l.kind === 'quiz').length});
  }
  const cfg = createContext(); cfg.run('hub-config.js');
  const config = cfg.context.TIH_SUPABASE_CONFIG;
  if (!config?.url?.startsWith('https://') || !config?.anonKey?.startsWith('sb_publishable_')) throw new Error('Review public Supabase configuration before export');
  fs.writeFileSync(path.join(out, 'config.json'), JSON.stringify(config));
  fs.writeFileSync(path.join(out, 'catalog.json'), JSON.stringify(catalog));
  fs.writeFileSync(path.join(out, 'organization.json'), JSON.stringify(organization(root), null, 2));
  for (const file of organizationSources) report.sourceFiles[file] = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
  report.sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], {cwd: root, encoding: 'utf8'}).trim();
  fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(report, null, 2));
  fs.rmSync(path.join(root, 'android-app/app/src/main/res/drawable/tih_logo.png'), {force: true});
  const drawable = path.join(root, 'android-app/app/src/main/res/drawable-nodpi');
  fs.mkdirSync(drawable, {recursive: true});
  fs.copyFileSync(path.join(root, 'assets/tih-logo.png'), path.join(drawable, 'tih_logo.png'));
  console.log(JSON.stringify({...report, sourceFiles: Object.keys(report.sourceFiles).length}, null, 2));
  return report;
}
if (process.argv[1] === fileURLToPath(import.meta.url)) exportAll();
