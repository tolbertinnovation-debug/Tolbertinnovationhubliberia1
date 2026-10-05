import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
export function loadProjectManagement() {
  const c = {COURSES_DB: {'project-mgmt': {}}, LESSON_CONTENT: {}, console: {log() {}}};
  c.window = c; vm.createContext(c);
  for (const file of ['projectmgmt-topic-quizzes.js', 'projectmgmt-curriculum.js']) {
    vm.runInContext(fs.readFileSync(root + file, 'utf8'), c, {filename: file});
  }
  return {course: c.COURSES_DB['project-mgmt'], bank: c.TIH_PM_QUESTION_BANK};
}
const normal = s => s.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]/g, '');

test('every PM question is valid and every authored stem is distinct', () => {
  const {bank} = loadProjectManagement();
  assert.equal(Object.keys(bank.topics).length, 158);
  const all = [...Object.values(bank.topics).flat(), ...bank.exams, ...bank.comprehensive];
  assert.equal(all.length, 653);
  const stems = new Set(), identities = new Set();
  for (const q of all) {
    assert.ok(!stems.has(normal(q.q)), 'Repeated authored question: ' + q.q);
    assert.ok(!identities.has(q.id), q.id);
    stems.add(normal(q.q)); identities.add(q.id);
    assert.equal(q.opts.length, 4, q.id);
    assert.equal(new Set(q.opts.map(s => s.toLowerCase().replace(/\s+/g, ' ').trim())).size, 4, q.id + ' has duplicate options');
    assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id);
    assert.ok(q.exp.length >= 25, q.id + ' needs an explanation');
    assert.ok(q.q.endsWith('?') || q.q.endsWith(':'), q.id + ' needs a complete prompt');
  }
});

test('all 155 PM quizzes use 570 distinct questions without cross-quiz reuse', () => {
  const {course} = loadProjectManagement();
  const quizzes = Object.values(course.quizzes), all = quizzes.flatMap(q => q.questions);
  assert.equal(quizzes.length, 155); assert.equal(all.length, 570);
  assert.equal(new Set(all.map(q => q.id)).size, all.length);
  assert.equal(new Set(all.map(q => normal(q.q))).size, all.length);
  const sets = quizzes.map(s => s.questions.map(q => normal(q.q)).sort().join('|'));
  assert.equal(new Set(sets).size, sets.length);
  for (const quiz of quizzes) assert.ok(quiz.questions.length > 0, quiz.title);
  for (let answer = 0; answer < 4; answer++) {
    const count = all.filter(q => q.correct === answer).length;
    assert.ok(count >= 100 && count <= 190, 'Biased answer placement: ' + count);
  }
});

test('practice belongs to its exact module-qualified lesson and excludes reserved items', () => {
  const {course, bank} = loadProjectManagement();
  let practices = 0;
  course.modules.forEach((m, index) => m.lessons.forEach(l => {
    if (!l.isQuiz) return;
    const quiz = course.quizzes[l.quizId];
    assert.equal(quiz.moduleNum, index + 1, quiz.title);
    if (!quiz.title.startsWith('Practice: ')) return;
    practices++;
    const topic = `M${index + 1}:` + quiz.title.slice('Practice: '.length);
    assert.equal(JSON.stringify(quiz.questions), JSON.stringify(bank.topics[topic].slice(0, 3)));
    assert.ok(quiz.questions.every(q => q.topic === topic));
  }));
  assert.equal(practices, 142);
});

test('specialist assessments and comprehensive papers have appropriate coverage', () => {
  const {course} = loadProjectManagement(), sets = Object.values(course.quizzes);
  const get = title => { const q = sets.find(q => q.title === title); assert.ok(q, title); return q.questions; };
  const allowed = {
    'Introduction Quiz': [2], 'Project Management Fundamentals Assessment': [1, 2, 3],
    'Planning Assessment': [4, 5, 6], 'Budgeting Assessment': [7],
    'Agile & Scrum Assessment': [12], 'Software Tools Assessment': [15]
  };
  for (const [title, modules] of Object.entries(allowed)) {
    assert.equal(get(title).length, 8);
    assert.ok(get(title).every(q => modules.includes(q.module)), title);
  }
  for (const title of ['Risk Assessment', 'Risk Management Assessment']) {
    assert.ok(get(title).every(q => q.module === 9 || q.topic === 'M19:Risk Assessment Project'));
  }
  assert.equal(new Set(get('Midterm Examination').map(q => q.module)).size, 10);
  assert.equal(new Set(get('Final Examination').map(q => q.module)).size, 18);
  assert.equal(new Set(get('Graduation Assessment').map(q => q.module)).size, 15);
  assert.equal(get('Final Examination').length, 20);
  assert.equal(get('Graduation Assessment').length, 15);
  const projectTopics = new Set();
  course.modules.forEach((m, i) => m.lessons.filter(l => l.isProject).forEach(l => projectTopics.add('M' + (i + 1) + ':' + l.t.replace(/^🛠️\s*/, ''))));
  for (const title of ['Capstone Project Presentation', 'Portfolio Review']) {
    assert.ok(get(title).every(q => projectTopics.has(q.topic)), title);
  }
});

test('allocation is deterministic and refuses missing topic material', () => {
  assert.equal(JSON.stringify(loadProjectManagement().course.quizzes), JSON.stringify(loadProjectManagement().course.quizzes));
  const c = {COURSES_DB: {'project-mgmt': {}}, LESSON_CONTENT: {}}; c.window = c; vm.createContext(c);
  assert.throws(() => vm.runInContext(fs.readFileSync(root + 'projectmgmt-curriculum.js', 'utf8'), c), /question bank did not load/);
  vm.runInContext(fs.readFileSync(root + 'projectmgmt-topic-quizzes.js', 'utf8'), c);
  delete c.TIH_PM_QUESTION_BANK.topics['M7:Earned Value Management (EVM)'];
  assert.throws(() => vm.runInContext(fs.readFileSync(root + 'projectmgmt-curriculum.js', 'utf8'), c), /Missing authored PM topic/);
});
