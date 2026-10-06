import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={console:{log(){}},LESSON_CONTENT:{}};c.window=c;vm.createContext(c);for(const f of ['courses-db.js','coursequiz/ielts-coursequiz.js','ielts-topic-quizzes.js','ielts-curriculum.js','ielts-notes.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c,{filename:f});return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('IELTS checks cover the full pathway without repeats or cross-skill topic collisions',()=>{
 const c=load(),course=c.COURSES_DB.ielts,bank=c.TIH_IELTS_QUESTIONS;
 assert.equal(course.modules.length,22);assert.equal(course.modules.flatMap(m=>m.lessons).length,238);
 const qs=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,111);assert.equal(qs.length,376);assert.equal(new Set(qs.map(q=>norm(q.q))).size,376);
 assert.equal(Object.keys(bank.topics).length,106);
 course.modules.forEach((m,i)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,i+1);assert.equal(q.questions.length,q.questionCount);assert.equal(l.d,q.questionCount+' questions');
  if(i>=6&&i<21){assert.equal(q.questions.length,3);assert.ok(q.title.startsWith('Practice: '));}
 }));
 for(const q of qs){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 assert.equal(new Set(qs.map(q=>q.correct)).size,4);
 for(const [a,b]of [['M7:Describing People','M10:Describing People'],['M12:Sentence Completion','M13:Sentence Completion']]){
  assert.notEqual(JSON.stringify(bank.topics[a]),JSON.stringify(bank.topics[b]));assert.notEqual(c.TIH_LESSON_NOTES.ielts[a],c.TIH_LESSON_NOTES.ielts[b]);
 }
 assert.ok(bank.topics['M13:Sentence Completion'].every(q=>q.q.includes('Reading passage:')));
 assert.equal(new Set(bank.papers['M22:🏆 Final Assessment & Certificate'].map(q=>q.module)).size,20);
 const before=JSON.stringify(course.quizzes);c.tihApplyIeltsTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M14:Pie Charts'];assert.throws(()=>c.tihApplyIeltsTopicQuizzes(),/Incomplete IELTS check/);
});
test('IELTS exercises contain evidence, chart scales and current delivery guidance; learning scores are distinguished from bands',()=>{
 const c=load(),bank=c.TIH_IELTS_QUESTIONS,notes=c.TIH_LESSON_NOTES.ielts;
 assert.equal(Object.keys(notes).length,127);assert.ok(Object.values(notes).every(n=>n.length>1800&&n.includes('not official IELTS band scores')));
 for(const key of ['M13:True/False/Not Given','M13:Yes/No/Not Given','M13:Matching Headings','M18:Inference Questions','M14:Line Graphs','M14:Bar Charts','M14:Pie Charts','M14:Tables']){
  assert.ok(bank.topics[key].every(q=>q.skill==='application'),key);assert.ok(notes[key].includes('Model answer:'),key);
 }
 const reading=bank.topics['M13:True/False/Not Given'];assert.deepEqual(Array.from(reading,q=>q.opts[q.correct].split(' —')[0]),['True','False','Not Given']);
 const line=notes['M14:Line Graphs'];assert.ok(line.includes('Users (thousands)'));assert.ok(line.includes('2022 and 2023'));assert.ok(line.includes('20 thousand'));assert.ok(line.includes('<desc'));
 assert.ok(notes['M14:Bar Charts'].includes('Learners'));assert.ok(notes['M14:Maps'].includes('2010'));assert.ok(notes['M14:Maps'].includes('2025'));
 assert.ok(notes['M21:Exam Day Preparation & Computer-Based IELTS'].includes('Writing on Paper'));assert.ok(notes['M21:Exam Day Preparation & Computer-Based IELTS'].includes('selected countries'));
 assert.ok(notes['M1:Understanding the Band Score System (0–9)'].includes('thresholds vary'));
 assert.ok(notes['M4:Project: Write a Full Band 7 Task 2 Essay'].includes('Review rubric'));
 assert.ok(notes['M20:Speaking Like a Native'].includes('IELTS does not require a native accent'));
 const number=bank.topics['M8:Listening for Names and Numbers'][1];assert.equal(number.opts[number.correct],'5531');assert.deepEqual(new Set(number.opts).size,4);
});
