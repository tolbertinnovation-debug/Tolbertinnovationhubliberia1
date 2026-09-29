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
  assert.equal(Object.keys(manifest.sourceFiles).length, 207);
  for (const [file, hash] of Object.entries(manifest.sourceFiles)) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex'), hash, file);
  }
});
test('export is deterministic and keeps authored HTML intact', () => {
  const id = 'computer-literacy';
  const a = extractCourse(id), b = extractCourse(id);
  assert.equal(JSON.stringify(a), JSON.stringify(b));
  assert.ok(a.modules[0].lessons[0].html.includes('Computer'));
  assert.equal(a.modules[0].lessons[0].noteSource, 'authored');
});
