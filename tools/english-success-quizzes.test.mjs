import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath}from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{'english-success':{}},LESSON_CONTENT:{},console:{log(){}},document:{getElementById(){return null;},createElement(){return{};},head:{appendChild(){}}}};c.window=c;vm.createContext(c);for(const f of ['englishsuccess-topic-quizzes.js','englishsuccess-curriculum.js','eng-notes.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('English topics have distinct practice, complete notes and 616 unique delivered questions',()=>{
 const c=load(),bank=c.TIH_ENGLISH_QUESTIONS,course=c.COURSES_DB['english-success'];
 assert.equal(Object.keys(bank.topics).length,144);
 const authored=Object.values(bank.topics).flat().concat(bank.exams);
 assert.equal(authored.length,645);assert.equal(new Set(authored.map(q=>norm(q.q))).size,645);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,162);assert.equal(all.length,616);assert.equal(new Set(all.map(q=>norm(q.q))).size,616);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);assert.equal(q.questions.length,q.questionCount);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const key='M'+(mi+1)+':'+q.title.slice(10),rows=bank.topics[key];assert.equal(rows.length,4);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
  const note=c.TIH_LESSON_NOTES['english-success'][key];assert.ok(note.length>2000,key);
  for(const part of ['LESSON NOTE','Learning objectives','Meaning and context','Worked example','Summary','Review Questions','Class Activity','Assignment'])assert.ok(note.includes(part),key+' '+part);
 }));assert.equal(practices,144);
 assert.equal(Object.keys(c.TIH_LESSON_NOTES['english-success']).length,170);
 let projects=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isProject).forEach(l=>{
  projects++;const key='M'+(mi+1)+':'+l.t.replace(/^[^a-zA-Z0-9]+/,'');
  const note=c.TIH_LESSON_NOTES['english-success'][key];assert.ok(note,key);
  for(const part of ['PROJECT BRIEF','Required deliverables','Assessment rubric','personal contribution'])assert.ok(note.includes(part),key+' '+part);
 }));assert.equal(projects,24);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 assert.equal(new Set(authored.map(q=>q.correct)).size,4);
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('English subject papers stay relevant and broad exams cover every required module',()=>{
 const c=load(),course=c.COURSES_DB['english-success'],bank=c.TIH_ENGLISH_QUESTIONS;
 const metadata=new Map(Object.values(bank.topics).flat().concat(bank.exams).map(q=>[q.q,q]));
 const paper=(title,module=20)=>Object.values(course.quizzes).find(q=>q.title===title&&q.moduleNum===module).questions;
 const local={'Grammar Assessment':2,'Reading Assessment':4,'Listening Assessment':5,'Speaking Assessment':6,'Writing Assessment':7,'Presentation Assessment':10,'Exam Readiness Assessment':18};
 for(const [title,module]of Object.entries(local)){assert.equal(paper(title,module).length,8);assert.ok(paper(title,module).every(q=>metadata.get(q.q).module===module),title);}
 for(const [title,nums]of Object.entries({'Grammar Assessment':[2],'Vocabulary Assessment':[3],'Reading Assessment':[4],'Listening Assessment':[5],'Speaking Assessment':[6],'Writing Assessment':[7,8,9]})){
  assert.equal(paper(title).length,8);assert.ok(paper(title).every(q=>nums.includes(metadata.get(q.q).module)),title);
 }
 assert.deepEqual([...new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module))].sort((a,b)=>a-b),Array.from({length:10},(_,i)=>i+1));
 assert.deepEqual([...new Set(paper('Final Examination').map(q=>metadata.get(q.q).module))].sort((a,b)=>a-b),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18]);
 for(const title of ['Capstone Project Evaluation','Professional Portfolio Review']){assert.equal(paper(title).length,15);assert.ok(paper(title).every(q=>[17,19].includes(metadata.get(q.q).module)));}
 assert.equal(paper('Graduation Assessment').length,15);
 for(const [title,nums]of [['Reports',[8,9]],['Cover Letters',[9,14]],['Leadership Communication',[11,15]],['Problem Solving',[12,15]]]){
  const keys=nums.map(n=>'M'+n+':'+title);assert.notEqual(JSON.stringify(bank.topics[keys[0]]),JSON.stringify(bank.topics[keys[1]]));
  assert.notEqual(c.TIH_LESSON_NOTES['english-success'][keys[0]],c.TIH_LESSON_NOTES['english-success'][keys[1]]);
 }
 const overview=c.TIH_LESSON_NOTES['english-success']['M18:TOEFL Introduction'];assert.ok(overview.includes('1–6 scale'));assert.ok(overview.includes('21 January 2026'));assert.ok(overview.includes('not an official TOEFL test'));
 const before=JSON.stringify(course.quizzes);c.tihApplyEnglishTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M2:Subject-Verb Agreement'];assert.throws(()=>c.tihApplyEnglishTopicQuizzes(),/Incomplete English topic/);
 const d=load();d.TIH_ENGLISH_QUESTIONS.exams=[];assert.throws(()=>d.tihApplyEnglishTopicQuizzes(),/Exhausted English assessment pool/);
});
