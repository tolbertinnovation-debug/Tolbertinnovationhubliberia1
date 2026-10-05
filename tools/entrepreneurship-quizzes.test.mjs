import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{entrepreneurship:{}},LESSON_CONTENT:{},console:{log(){}}};c.window=c;vm.createContext(c);for(const f of ['entrepreneurship-topic-quizzes.js','entrepreneurship-curriculum.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('Entrepreneurship has four authored items per topic and 580 distinct delivered questions',()=>{
 const c=load(),bank=c.TIH_ENTREPRENEURSHIP_QUESTIONS,course=c.COURSES_DB.entrepreneurship;
 assert.equal(Object.keys(bank.topics).length,166);
 const authored=Object.values(bank.topics).flat();
 assert.equal(authored.length,664);assert.equal(new Set(authored.map(q=>norm(q.q))).size,664);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,173);assert.equal(all.length,580);assert.equal(new Set(all.map(q=>norm(q.q))).size,580);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const rows=bank.topics['M'+(mi+1)+':'+q.title.slice(10)];assert.equal(rows.length,4);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
 }));assert.equal(practices,166);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('Entrepreneurship subject exams stay relevant and comprehensive exams cover teaching modules',()=>{
 const c=load(),course=c.COURSES_DB.entrepreneurship,bank=c.TIH_ENTREPRENEURSHIP_QUESTIONS;
 const metadata=new Map(Object.values(bank.topics).flat().map(q=>[q.q,q]));
 const paper=title=>Object.values(course.quizzes).find(q=>q.title===title).questions;
 for(const [title,nums]of Object.entries({'Entrepreneurship Quiz':[1,2,3],'Marketing Quiz':[7],'Finance Quiz':[9],'Legal Quiz':[11]})){
  assert.equal(paper(title).length,8);assert.ok(paper(title).every(q=>nums.includes(metadata.get(q.q).module)));
 }
 assert.equal(new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module)).size,10);
 assert.equal(new Set(paper('Final Examination').map(q=>metadata.get(q.q).module)).size,18);
 assert.equal(paper('Graduation Assessment').length,15);
 const before=JSON.stringify(course.quizzes);c.tihApplyEntrepreneurshipTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M6:Minimum Viable Product (MVP)'];assert.throws(()=>c.tihApplyEntrepreneurshipTopicQuizzes(),/Incomplete Entrepreneurship topic/);
});
