import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{android:{}},LESSON_CONTENT:{},console:{log(){}}};c.window=c;vm.createContext(c);for(const f of ['android-topic-quizzes.js','android-curriculum.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('Kotlin Android has four authored items per teaching topic and 533 distinct delivered questions',()=>{
 const c=load(),bank=c.TIH_ANDROID_QUESTIONS,course=c.COURSES_DB.android;
 assert.equal(Object.keys(bank.topics).length,136);
 const authored=Object.values(bank.topics).flat().concat(bank.exams);
 assert.equal(authored.length,585);assert.equal(new Set(authored.map(q=>norm(q.q))).size,585);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,146);assert.equal(all.length,533);assert.equal(new Set(all.map(q=>norm(q.q))).size,533);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const rows=bank.topics['M'+(mi+1)+':'+q.title.slice(10)];assert.equal(rows.length,4);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
 }));assert.equal(practices,136);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('Kotlin skill papers stay relevant, broad exams cover the syllabus and project reviews use separate scenarios',()=>{
 const c=load(),course=c.COURSES_DB.android,bank=c.TIH_ANDROID_QUESTIONS;
 const metadata=new Map(Object.values(bank.topics).flat().concat(bank.exams).map(q=>[q.q,q]));
 const paper=title=>Object.values(course.quizzes).find(q=>q.title===title).questions;
 for(const [title,num]of Object.entries({'Kotlin Assessment':2,'Android UI Assessment':4,'Database Assessment':7,'Firebase Assessment':8,'API Assessment':9})){
  assert.equal(paper(title).length,8);assert.ok(paper(title).every(q=>metadata.get(q.q).module===num));
 }
 assert.equal(new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module)).size,8);
 assert.equal(new Set(paper('Final Examination').map(q=>metadata.get(q.q).module)).size,16);
 for(const [title,count]of Object.entries({'Complete App Evaluation':20,'Portfolio Review':15})){
  assert.equal(paper(title).length,count);assert.ok(paper(title).every(q=>metadata.get(q.q).module>=17));
 }
 assert.equal(paper('Graduation Assessment').length,15);
 const before=JSON.stringify(course.quizzes);c.tihApplyAndroidTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M7:Room Database'];assert.throws(()=>c.tihApplyAndroidTopicQuizzes(),/Incomplete Kotlin topic/);
});
