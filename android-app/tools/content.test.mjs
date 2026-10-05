import './video-player.test.mjs';
import '../../tools/projectmgmt-quizzes.test.mjs';
import '../../tools/accounting-bookkeeping-quizzes.test.mjs';
import '../../tools/webdev-quizzes.test.mjs';
import '../../tools/design-quizzes.test.mjs';
import '../../tools/entrepreneurship-quizzes.test.mjs';
import '../../tools/android-kotlin-quizzes.test.mjs';
import '../../tools/office-quizzes.test.mjs';
import '../../tools/leadership-quizzes.test.mjs';
import '../../tools/grant-writing-quizzes.test.mjs';
import '../../tools/english-success-quizzes.test.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {root, noteKey, lookup, extractCourse} from './export-learning.mjs';
const learning = path.join(root, 'android-app/app/src/main/assets/learning');

test('numbering and module-qualified note resolution', () => {
  assert.equal(noteKey('📘 3.1 What Is a Computer?'), 'what is a computer');
  assert.equal(noteKey('1. Armed Forces in Constitutional Service'), 'armed forces in constitutional service');
  assert.equal(lookup({'Setting': 'generic', 'M5:Setting': 'module5'}, '5.2 Setting', 5), 'module5');
  assert.equal(lookup({'Setting': 'generic', 'M5:Setting': 'module5'}, '2.2 Setting', 2), 'generic');
});
test('all imported content has valid identities, source notes and quiz answers', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.equal(catalog.length, 57);
  assert.equal(new Set(catalog.map(c => c.id)).size, catalog.length);
  let total = 0, questions = 0;
  for (const summary of catalog) {
    const course = JSON.parse(fs.readFileSync(path.join(learning, 'courses', summary.id + '.json')));
    const lessons = course.modules.flatMap(m => m.lessons);
    assert.equal(lessons.length, summary.lessonCount, summary.id);
    assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
    assert.ok(course.title && course.description);
    for (const l of lessons) {
      if (l.kind === 'lesson') assert.ok(l.html.length > 40, summary.id + ': ' + l.title);
      if (l.kind === 'quiz') assert.ok(l.questions.length > 0);
      if (l.videoId) assert.match(l.videoId, /^[a-zA-Z0-9_-]{11}$/);
      for (const q of l.questions) { assert.ok(q.question); assert.ok(q.options.length >= 2); assert.ok(q.answer >= 0 && q.answer < q.options.length); }
      questions += l.questions.length;
    }
    total += lessons.length;
  }
  assert.equal(total, 10884); assert.equal(questions, 20003);
});
test('source manifest proves all website inputs remain unchanged', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(learning, 'manifest.json')));
  assert.equal(manifest.missingNotes.length, 0);
  assert.equal(manifest.emptyQuizzes.length, 0);
  assert.equal(Object.keys(manifest.sourceFiles).length, 221);
  for (const [file, hash] of Object.entries(manifest.sourceFiles)) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex'), hash, file);
  }
});
test('TIH identity and policy information come from the website source', () => {
  const info = JSON.parse(fs.readFileSync(path.join(learning, 'organization.json')));
  assert.equal(info.email, 'info@tolbertinnovationhub.org');
  assert.equal(info.phone, '+231880559227');
  assert.ok(info.mission.includes('Liberia and Africa'));
  assert.ok(info.address.includes('Monrovia'));
  assert.equal(info.hours.length, 3);
  assert.ok(info.rights.paragraphs.some(p => p.includes('30 days')));
  assert.ok(info.terms.every(s => s.title && s.paragraphs.length));
});
test('written course information is carried across, and unverifiable figures are not', () => {
  const id = 'computer-literacy';
  const course = JSON.parse(fs.readFileSync(path.join(learning, 'courses', id + '.json')));
  const site = extractCourse(id);

  // Every paragraph, requirement and question comes across unaltered. Compared
  // as JSON: extractCourse builds these inside a VM, so the arrays carry that
  // realm's prototypes and deepStrictEqual would reject identical content.
  const same = (a, b) => assert.equal(JSON.stringify(a), JSON.stringify(b));
  same(course.about, site.about);
  same(course.requirements, site.requirements);
  same(course.faqs, site.faqs);
  same(course.instructor, site.instructor);
  assert.ok(course.about.length >= 3);
  assert.ok(course.requirements.length >= 3);
  assert.ok(course.faqs.length >= 4);
  assert.ok(course.faqs.every(f => f.question && f.answer));
  assert.ok(course.instructor.name && course.instructor.bio);

  // Ratings, review counts, enrolment totals and testimonials stay out: the app
  // does not restate figures a reader cannot check.
  for (const banned of ['rating', 'reviewCount', 'students', 'reviews']) {
    assert.ok(!(banned in course), id + ' must not carry ' + banned);
  }

  // The catalog is read for all 57 courses at startup, so it stays lean.
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  for (const key of ['about', 'requirements', 'faqs', 'instructor']) {
    assert.ok(catalog.every(c => !(key in c)), 'catalog must not carry ' + key);
  }

  // Present across the catalog, not just one course.
  let withAbout = 0, withInstructor = 0;
  for (const summary of catalog) {
    const c = JSON.parse(fs.readFileSync(path.join(learning, 'courses', summary.id + '.json')));
    if (c.about.length) withAbout++;
    if (c.instructor) withInstructor++;
  }
  assert.ok(withAbout >= 50, 'about paragraphs on ' + withAbout + ' courses');
  assert.equal(withInstructor, catalog.length);
});
test('export is deterministic and keeps authored HTML intact', () => {
  const id = 'computer-literacy';
  const a = extractCourse(id), b = extractCourse(id);
  assert.equal(JSON.stringify(a), JSON.stringify(b));
  assert.ok(a.modules[0].lessons[0].html.includes('Computer'));
  assert.equal(a.modules[0].lessons[0].noteSource, 'authored');
});

test('Project Management is complete, source-faithful and beside Computer Literacy', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0, 2).map(c => c.id), ['computer-literacy', 'project-mgmt']);
  const summary = catalog.find(c => c.id === 'project-mgmt');
  const course = JSON.parse(fs.readFileSync(path.join(learning, 'courses/project-mgmt.json')));
  const source = extractCourse('project-mgmt');
  // Verify exact IDs, authored notes, projects, video overrides and answers, not
  // just non-empty files. The corrected source question bank must import exactly.
  assert.equal(JSON.stringify(course.modules), JSON.stringify(source.modules));
  for (const key of ['about', 'requirements', 'faqs', 'instructor', 'outcomes', 'css']) {
    assert.equal(JSON.stringify(course[key]), JSON.stringify(source[key]), key);
  }
  const lessons = course.modules.flatMap(m => m.lessons);
  assert.equal(course.modules.length, 20);
  assert.equal(lessons.length, 314);
  assert.equal(lessons.filter(l => l.kind === 'lesson').length, 143);
  assert.equal(lessons.filter(l => l.kind === 'project').length, 16);
  assert.equal(lessons.filter(l => l.kind === 'quiz').length, 155);
  assert.ok(lessons.filter(l => l.kind !== 'quiz').every(l => l.html.length > 100));
  const videos = lessons.filter(l => l.videoId).map(l => l.videoId);
  assert.equal(videos.length, 158);
  assert.equal(new Set(videos).size, videos.length);
  assert.equal(lessons.reduce((n, l) => n + l.questions.length, 0), 570);
  assert.equal(lessons.find(l => l.final).questions.length, 15);
  const questions = lessons.flatMap(l => l.questions);
  assert.equal(new Set(questions.map(q => q.question.toLowerCase().replace(/[^a-z0-9]/g, ''))).size, 570);
  assert.ok(questions.every(q => q.options.length === 4 && q.explanation.length > 20));
  assert.equal(summary.image, 'images/project-mgmt.jpg');
  assert.ok(fs.statSync(path.join(learning, summary.image)).size > 1000);
});


test('Accounting & Bookkeeping is source-faithful, complete and third in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0, 3).map(c => c.id), ['computer-literacy', 'project-mgmt', 'accounting-bookkeeping']);
  const course = JSON.parse(fs.readFileSync(path.join(learning, 'courses/accounting-bookkeeping.json')));
  const source = extractCourse('accounting-bookkeeping');
  for (const key of ['id', 'title', 'description', 'category', 'about', 'requirements', 'faqs', 'instructor', 'outcomes', 'modules', 'css']) {
    assert.equal(JSON.stringify(course[key]), JSON.stringify(source[key]), key);
  }
  const lessons = course.modules.flatMap(m => m.lessons), questions = lessons.flatMap(l => l.questions);
  assert.equal(course.modules.length, 20); assert.equal(lessons.length, 279);
  assert.equal(lessons.filter(l => l.kind === 'lesson').length, 132);
  assert.equal(lessons.filter(l => l.kind === 'project').length, 9);
  assert.equal(lessons.filter(l => l.kind === 'quiz').length, 138);
  assert.ok(lessons.filter(l => l.kind !== 'quiz').every(l => l.html.length > 100));
  assert.equal(lessons.filter(l => l.noteSource === 'authored').length, 131);
  const videos = lessons.filter(l => l.videoId).map(l => l.videoId);
  assert.equal(videos.length, 140); assert.equal(new Set(videos).size, 140);
  assert.equal(questions.length, 475);
  assert.equal(new Set(questions.map(q => q.question.toLowerCase().replace(/[^a-z0-9]/g, ''))).size, 475);
  assert.equal(lessons.find(l => l.final).questions.length, 15);
  assert.ok(course.about.length >= 3 && course.requirements.length >= 3 && course.instructor.name);
  assert.ok(fs.statSync(path.join(learning, catalog[2].image)).size > 1000);
});

test('Full-Stack is source-faithful, complete and fourth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,4).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/webdev.json'))), source = extractCourse('webdev');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,374);
  assert.equal(lessons.filter(l=>l.kind==='project').length,24);
  assert.equal(lessons.filter(l=>l.videoId).length,194);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,194);
  assert.equal(qs.length,633);assert.equal(new Set(qs.map(q=>q.question)).size,633);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Graphic Design is source-faithful, complete and fifth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,5).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/design.json'))), source = extractCourse('design');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,18);assert.equal(lessons.length,312);
  assert.equal(lessons.filter(l=>l.kind==='project').length,24);
  assert.equal(lessons.filter(l=>l.videoId).length,163);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,163);
  assert.equal(qs.length,542);assert.equal(new Set(qs.map(q=>q.question)).size,542);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Entrepreneurship is source-faithful, complete and sixth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,6).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/entrepreneurship.json'))), source = extractCourse('entrepreneurship');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,351);
  assert.equal(lessons.filter(l=>l.kind==='project').length,11);
  assert.equal(lessons.filter(l=>l.videoId).length,178);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,178);
  assert.equal(qs.length,580);assert.equal(new Set(qs.map(q=>q.question)).size,580);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Kotlin Android is source-faithful, complete and seventh in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,7).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship','android']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/android.json'))), source = extractCourse('android');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,19);assert.equal(lessons.length,304);
  assert.equal(lessons.filter(l=>l.kind==='project').length,21);
  assert.equal(lessons.filter(l=>l.videoId).length,158);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,158);
  assert.equal(qs.length,533);assert.equal(new Set(qs.map(q=>q.question)).size,533);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Microsoft Office is source-faithful, complete and eighth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,8).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship','android','office']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/office.json'))), source = extractCourse('office');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,377);
  assert.equal(lessons.filter(l=>l.kind==='project').length,29);
  assert.equal(lessons.filter(l=>l.videoId).length,198);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,198);
  assert.equal(qs.length,637);assert.equal(new Set(qs.map(q=>q.question)).size,637);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Business Leadership is source-faithful, complete and ninth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,9).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship','android','office','leadership']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/leadership.json'))), source = extractCourse('leadership');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,320);
  assert.equal(lessons.filter(l=>l.kind==='project').length,21);
  assert.equal(lessons.filter(l=>l.videoId).length,165);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,165);
  assert.equal(qs.length,565);assert.equal(new Set(qs.map(q=>q.question)).size,565);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});

test('Grant Writing & Fundraising is source-faithful, complete and tenth in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,10).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship','android','office','leadership','grant-writing']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/grant-writing.json'))), source = extractCourse('grant-writing');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,320);
  assert.equal(lessons.filter(l=>l.kind==='project').length,21);
  assert.equal(lessons.filter(l=>l.videoId).length,166);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,166);
  assert.equal(qs.length,564);assert.equal(new Set(qs.map(q=>q.question)).size,564);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200 && l.noteSource==='authored'));
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});
test('English Success is source-faithful, complete and eleventh in Courses', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(learning, 'catalog.json')));
  assert.deepEqual(catalog.slice(0,11).map(c=>c.id), ['computer-literacy','project-mgmt','accounting-bookkeeping','webdev','design','entrepreneurship','android','office','leadership','grant-writing','english-success']);
  const course = JSON.parse(fs.readFileSync(path.join(learning,'courses/english-success.json'))), source = extractCourse('english-success');
  for (const key of ['title','description','modules','about','requirements','faqs','instructor']) assert.equal(JSON.stringify(course[key]),JSON.stringify(source[key]),key);
  const lessons=course.modules.flatMap(m=>m.lessons), qs=lessons.flatMap(l=>l.questions);
  assert.equal(course.modules.length,20);assert.equal(lessons.length,332);
  assert.equal(lessons.filter(l=>l.kind==='project').length,24);
  assert.equal(lessons.filter(l=>l.videoId).length,170);
  assert.equal(new Set(lessons.filter(l=>l.videoId).map(l=>l.videoId)).size,170);
  assert.equal(qs.length,616);assert.equal(new Set(qs.map(q=>q.question)).size,616);
  assert.ok(lessons.filter(l=>l.kind!=='quiz').every(l=>l.html.length>200 && l.noteSource==='authored'));
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(lessons.map(l=>[l.id,l.title,l.module,l.kind,l.videoId]))).digest('hex'),'f62b595e23cc9f15c090cf1c1761baf7546d1d8210fded8b0d05716ced9541ed');
  assert.ok(fs.existsSync(path.join(learning,course.image)));
});
