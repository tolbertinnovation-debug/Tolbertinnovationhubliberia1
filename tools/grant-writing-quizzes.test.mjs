import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath}from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{'grant-writing':{}},LESSON_CONTENT:{},console:{log(){}},document:{getElementById(){return null;},createElement(){return{};},head:{appendChild(){}}}};c.window=c;vm.createContext(c);for(const f of ['grantwriting-topic-quizzes.js','grantwriting-curriculum.js','grant-writing-notes.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('Grant topics have distinct practice, complete notes and 564 unique delivered questions',()=>{
 const c=load(),bank=c.TIH_GRANT_QUESTIONS,course=c.COURSES_DB['grant-writing'];
 assert.equal(Object.keys(bank.topics).length,143);
 const authored=Object.values(bank.topics).flat().concat(bank.exams);
 assert.equal(authored.length,613);assert.equal(new Set(authored.map(q=>norm(q.q))).size,613);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,154);assert.equal(all.length,564);assert.equal(new Set(all.map(q=>norm(q.q))).size,564);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);assert.equal(q.questions.length,q.questionCount);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const key='M'+(mi+1)+':'+q.title.slice(10),rows=bank.topics[key];assert.equal(rows.length,4);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
  const note=c.TIH_LESSON_NOTES['grant-writing'][key];assert.ok(note.length>2000,key);
  for(const part of ['LESSON NOTE','Learning objectives','Meaning and context','Key concepts and distinctions','Worked example','Summary','Review Questions','Class Activity','Assignment'])assert.ok(note.includes(part),key+' '+part);
 }));assert.equal(practices,143);
 assert.equal(Object.keys(c.TIH_LESSON_NOTES['grant-writing']).length,166);
 let projects=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isProject).forEach(l=>{
  projects++;const key='M'+(mi+1)+':'+l.t.replace(/^[^a-zA-Z0-9]+/,'');
  const note=c.TIH_LESSON_NOTES['grant-writing'][key];assert.ok(note,key);
  for(const part of ['PROJECT BRIEF','Required deliverables','Assessment rubric','personal contribution'])assert.ok(note.includes(part),key+' '+part);
 }));assert.equal(projects,21);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 assert.equal(new Set(authored.map(q=>q.correct)).size,4);
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('Grant subject papers stay relevant and broad exams cover every required module',()=>{
 const c=load(),course=c.COURSES_DB['grant-writing'],bank=c.TIH_GRANT_QUESTIONS;
 const metadata=new Map(Object.values(bank.topics).flat().concat(bank.exams).map(q=>[q.q,q]));
 const paper=title=>Object.values(course.quizzes).find(q=>q.title===title).questions;
 for(const [title,nums]of Object.entries({'Grant Writing Fundamentals Assessment':[2,6],'Budget Development Assessment':[8],'Fundraising Assessment':[10,11,12],'Donor Relations Assessment':[13],'Grant Management Assessment':[14],'Monitoring & Evaluation Assessment':[15]})){
  assert.equal(paper(title).length,title==='Monitoring & Evaluation Assessment'?15:8);assert.ok(paper(title).every(q=>nums.includes(metadata.get(q.q).module)),title);
 }
 assert.deepEqual([...new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module))].sort((a,b)=>a-b),Array.from({length:10},(_,i)=>i+1));
 assert.deepEqual([...new Set(paper('Final Examination').map(q=>metadata.get(q.q).module))].sort((a,b)=>a-b),Array.from({length:17},(_,i)=>i+1));
 for(const title of ['Capstone Project Evaluation','Portfolio Review']){assert.equal(paper(title).length,15);assert.ok(paper(title).every(q=>metadata.get(q.q).module>=18));}
 assert.equal(paper('Graduation Assessment').length,15);
 const before=JSON.stringify(course.quizzes);c.tihApplyGrantTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M7:Logical Framework (Logframe)'];assert.throws(()=>c.tihApplyGrantTopicQuizzes(),/Incomplete Grant topic/);
 const d=load();d.TIH_GRANT_QUESTIONS.exams=[];assert.throws(()=>d.tihApplyGrantTopicQuizzes(),/Exhausted Grant assessment pool/);
});
