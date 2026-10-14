import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
const ctx={COURSES_DB:{}};ctx.window=ctx;vm.createContext(ctx);
for(const name of ['courses-db.js','liberian-law-topic-quizzes.js','liberian-law-curriculum.js','liberian-law-video-map.js','liberian-law-notes.js'])vm.runInContext(fs.readFileSync(new URL('../'+name,import.meta.url),'utf8'),ctx);
const c=ctx.COURSES_DB['liberian-law'];
test('Law course delivers complete, distinct, topic-scoped teaching and assessments',()=>{
 assert.equal(c.modules.length,42);
 const steps=c.modules.flatMap(m=>m.lessons), quizzes=Object.values(c.quizzes);
 assert.equal(steps.length,212);assert.equal(quizzes.length,124);
 const questions=quizzes.flatMap(q=>q.questions);
 assert.equal(questions.length,460);assert.equal(new Set(questions.map(q=>q.q)).size,460);
 assert.equal(new Set(quizzes.map(q=>q.id)).size,124);
 for(const quiz of quizzes){assert.ok(quiz.questions.length);for(const q of quiz.questions){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20,q.q);}}
 const videos=steps.filter(l=>!l.isQuiz&&!l.isProject).map(l=>l.v);
 assert.equal(videos.length,80);assert.equal(new Set(videos).size,80);
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
 assert.equal(c.quizzes['law-midterm'].questions.length,10);assert.equal(c.quizzes['law-final'].questions.length,30);assert.ok(!c.quizzes['law-final'].isFinal);
 assert.equal(c.quizzes['law-applied-midterm'].questions.length,40);
 assert.equal(c.quizzes['law-programme-final'].questions.length,60);assert.ok(c.quizzes['law-programme-final'].isFinal);
 assert.equal(new Set(c.quizzes['law-programme-final'].questions.map(q=>q.sourceModule)).size,20);
 assert.equal(steps.filter(l=>l.isProject).length,8);
 assert.equal(c.reviews.length,0);assert.equal(c.reviewCount,0);assert.equal(c.students,'');
});

test('Expanded course preserves every foundation step and issued question payload',()=>{
 const old=JSON.parse(fs.readFileSync(new URL('../content/liberian-law-foundation-steps.json',import.meta.url),'utf8'));
 const steps=c.modules.flatMap(m=>m.lessons);
 assert.equal(old.steps.length,106);
 for(let i=0;i<106;i++){assert.equal(steps[i].quizId||null,old.steps[i].quizId);assert.equal(steps[i].v||null,old.steps[i].videoId);assert.equal(!!steps[i].isProject,old.steps[i].isProject);}
 for(const [id,hash]of Object.entries(old.quizHashes))assert.equal(crypto.createHash('sha256').update(JSON.stringify(c.quizzes[id].questions)).digest('hex'),hash,id);
 assert.equal(c.certificateRevision,2);assert.equal(c.legacyTitle,old.title);
});

test('Cloud certificate hydration cannot downgrade an expanded Law award to the foundation award',async()=>{
 const rows=[
  {cert_id:'PROGRAMME',course_id:'liberian-law',course_title:'Complete Liberian Law Programme',issue_date:'October 14, 2026'},
  {cert_id:'FOUNDATION',course_id:'liberian-law',course_title:'Liberian Law: Law School Preparation',issue_date:'October 14, 2026'},
  {cert_id:'OTHER-NEW',course_id:'ai',course_title:'AI',issue_date:'October 14, 2026'},
  {cert_id:'OTHER-OLD',course_id:'ai',course_title:'AI',issue_date:'September 14, 2026'}
 ];
 const context={window:{TIH_SUPABASE_CONFIG:{url:'https://example.invalid',anonKey:'local-test'}},fetch:async()=>({ok:true,json:async()=>rows}),console};
 vm.createContext(context);vm.runInContext(fs.readFileSync(new URL('../hub-cloud.js',import.meta.url),'utf8'),context);
 const records=await context.HubCloud.fetchCertificatesFor('LOCAL-QA');
 const cached={};for(const record of records)cached[record.courseId]=record;
 assert.equal(records.length,4);assert.equal(cached['liberian-law'].certId,'PROGRAMME');assert.equal(cached.ai.certId,'OTHER-NEW');
});
