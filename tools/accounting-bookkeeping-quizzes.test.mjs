import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
function load() {
  const c = {COURSES_DB: {'accounting-bookkeeping': {}}, LESSON_CONTENT: {}, console: {log() {}}};
  c.window = c; vm.createContext(c);
  for (const f of ['accounting-bookkeeping-topic-quizzes.js','accounting-bookkeeping-reserved-quizzes.js','accounting-bookkeeping-curriculum.js']) vm.runInContext(fs.readFileSync(root + f, 'utf8'), c);
  return c;
}
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
test('Accounting practices match each topic; assessment questions are never reused', () => {
  const c = load(), course = c.COURSES_DB['accounting-bookkeeping'], reserved = c.TIH_ACB_RESERVED_QUESTIONS;
  assert.equal(Object.keys(reserved.topics).length, 131);
  const quizzes = Object.values(course.quizzes), all = quizzes.flatMap(q => q.questions);
  assert.equal(quizzes.length, 138); assert.equal(all.length, 475);
  assert.equal(new Set(all.map(q => norm(q.q))).size, 475);
  let practices = 0;
  course.modules.forEach((m, index) => m.lessons.filter(l => l.isQuiz).forEach(l => {
    const q = course.quizzes[l.quizId]; assert.equal(q.moduleNum, index + 1);
    if (!q.title.startsWith('Practice: ')) return;
    practices++; assert.equal(q.questions.length, 3);
    const title = q.title.slice(10);
    assert.ok(reserved.topics['M' + (index + 1) + ':' + title]);
    assert.equal(JSON.stringify(q.questions), JSON.stringify(c.TIH_TOPIC_QUIZZES['accounting-bookkeeping'][title]));
  }));
  assert.equal(practices, 131);
  for (const q of all) {
    assert.equal(q.opts.length, 4); assert.equal(new Set(q.opts).size, 4);
    assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4);
    assert.ok(q.exp.length >= 20);
  }
});
test('Accounting subject papers stay relevant and comprehensive allocation is deterministic', () => {
  const c = load(), course = c.COURSES_DB['accounting-bookkeeping'], quizzes = Object.values(course.quizzes);
  const items = [...Object.values(c.TIH_ACB_RESERVED_QUESTIONS.topics), ...c.TIH_ACB_RESERVED_QUESTIONS.comprehensive];
  const moduleFor = q => items.find(i => i.q === q.q)?.module;
  const get = title => quizzes.find(q => q.title === title).questions;
  for (const [title, modules] of Object.entries({
    'Accounting Foundations Quiz':[1,2], 'Bookkeeping and Ledgers Quiz':[2,3,4],
    'Financial Statements Quiz':[9,10], 'Taxation and Ethics Quiz':[13,15]
  })) { assert.equal(get(title).length, 8); assert.ok(get(title).every(q => modules.includes(moduleFor(q)))); }
  assert.equal(new Set(get('Midterm Examination').map(moduleFor)).size, 10);
  assert.equal(new Set(get('Final Examination').map(moduleFor)).size, 18);
  assert.equal(get('Graduation Assessment').length, 15);
  const before = JSON.stringify(course.quizzes);
  c.tihApplyAccountingBookkeepingTopicQuizzes();
  assert.equal(JSON.stringify(course.quizzes), before);
  delete c.TIH_ACB_RESERVED_QUESTIONS.topics['M2:Double-Entry Bookkeeping'];
  assert.throws(() => c.tihApplyAccountingBookkeepingTopicQuizzes(), /Incomplete ACB topic/);
});
