import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{office:{}},LESSON_CONTENT:{},console:{log(){}}};c.window=c;vm.createContext(c);for(const f of ['office-topic-quizzes.js','office-curriculum.js','office-notes.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('Office has four authored items per teaching topic, complete notes and 637 distinct delivered questions',()=>{
 const c=load(),bank=c.TIH_OFFICE_QUESTIONS,course=c.COURSES_DB.office;
 assert.equal(Object.keys(bank.topics).length,167);
 const authored=Object.values(bank.topics).flat().concat(bank.exams);
 assert.equal(authored.length,702);assert.equal(new Set(authored.map(q=>norm(q.q))).size,702);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,179);assert.equal(all.length,637);assert.equal(new Set(all.map(q=>norm(q.q))).size,637);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const key='M'+(mi+1)+':'+q.title.slice(10),rows=bank.topics[key];assert.equal(rows.length,4);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
  const note=c.TIH_LESSON_NOTES.office[key];assert.ok(note.length>2000,key);
  for(const part of ['LESSON NOTE:','Learning objectives','1. Introduction','2. Meaning','Worked example','Summary','Key Terms','Review Questions','Class Activity','Assignment'])assert.ok(note.includes(part),key+' '+part);
 }));assert.equal(practices,167);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('Office skill exams stay relevant, broad papers cover teaching modules, project reviews use separate scenarios',()=>{
 const c=load(),course=c.COURSES_DB.office,bank=c.TIH_OFFICE_QUESTIONS;
 const metadata=new Map(Object.values(bank.topics).flat().concat(bank.exams).map(q=>[q.q,q]));
 const paper=title=>Object.values(course.quizzes).find(q=>q.title===title).questions;
 for(const [title,nums]of Object.entries({'File Management Assessment':[2],'Microsoft Word Assessment':[3],'Microsoft Excel Assessment':[4,5],'Microsoft PowerPoint Assessment':[6],'Outlook Assessment':[7],'Teams Assessment':[9],'Copilot Assessment':[11]})){
  assert.equal(paper(title).length,8);assert.ok(paper(title).every(q=>nums.includes(metadata.get(q.q).module)));
 }
 assert.equal(new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module)).size,10);
 assert.equal(new Set(paper('Final Examination').map(q=>metadata.get(q.q).module)).size,17);
 for(const title of ['Capstone Project Evaluation','Portfolio Review']){assert.equal(paper(title).length,15);assert.ok(paper(title).every(q=>metadata.get(q.q).module>=18));}
 assert.equal(paper('Graduation Assessment').length,15);
 const before=JSON.stringify(course.quizzes);c.tihApplyOfficeTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M5:VLOOKUP'];assert.throws(()=>c.tihApplyOfficeTopicQuizzes(),/Incomplete Office topic/);
});
