import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const ctx={COURSES_DB:{}};ctx.window=ctx;vm.createContext(ctx);
for(const name of ['courses-db.js','liberian-law-topic-quizzes.js','liberian-law-curriculum.js','liberian-law-video-map.js','liberian-law-notes.js'])vm.runInContext(fs.readFileSync(new URL('../'+name,import.meta.url),'utf8'),ctx);
const c=ctx.COURSES_DB['liberian-law'];
test('Law course delivers complete, distinct, topic-scoped teaching and assessments',()=>{
 assert.equal(c.modules.length,21);
 const steps=c.modules.flatMap(m=>m.lessons), quizzes=Object.values(c.quizzes);
 assert.equal(steps.length,106);assert.equal(quizzes.length,62);
 const questions=quizzes.flatMap(q=>q.questions);
 assert.equal(questions.length,200);assert.equal(new Set(questions.map(q=>q.q)).size,200);
 assert.equal(new Set(quizzes.map(q=>q.id)).size,62);
 for(const quiz of quizzes){assert.ok(quiz.questions.length);for(const q of quiz.questions){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20,q.q);}}
 const videos=steps.filter(l=>!l.isQuiz&&!l.isProject).map(l=>l.v);
 assert.equal(videos.length,40);assert.equal(new Set(videos).size,40);
 assert.ok(videos.every(v=>/^[\w-]{11}$/.test(v)));
 const practice=new Set(Object.values(ctx.TIH_TOPIC_QUIZZES['liberian-law']).flat().map(q=>q.q));
 for(const [mi,m]of c.modules.entries())for(const step of m.lessons){
  if(step.isQuiz){const quiz=c.quizzes[step.quizId];assert.equal(quiz.moduleNum,mi+1);if(!quiz.title.startsWith('Practice:'))assert.ok(quiz.questions.every(q=>!practice.has(q.q)));continue;}
  const title=step.t.replace(/^\d+\.\d+\s+/,'');const key='M'+(mi+1)+':'+title;
  const note=ctx.TIH_LESSON_NOTES['liberian-law'][key];assert.ok(note,key);
  if(step.isProject){assert.ok(note.includes('Assessment rubric'));continue;}
  assert.ok(note.length>2200,key);
  assert.equal(ctx.TIH_TOPIC_VIDEOS['liberian-law'][key],step.v);
  for(const section of ['LESSON NOTE:','Learning objectives','1. Introduction','2. Meaning','Worked Liberian classroom example','Summary','Key Terms','Review Questions','Class Activity','Assignment','Jurisdiction check:'])assert.ok(note.includes(section),key+' '+section);
 }
 assert.equal(c.quizzes['law-midterm'].questions.length,10);assert.equal(c.quizzes['law-final'].questions.length,30);assert.ok(c.quizzes['law-final'].isFinal);
 assert.equal(steps.filter(l=>l.isProject).length,4);
 assert.equal(c.reviews.length,0);assert.equal(c.reviewCount,0);assert.equal(c.students,'');
});
