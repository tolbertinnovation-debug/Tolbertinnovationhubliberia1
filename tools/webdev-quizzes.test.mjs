import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={COURSES_DB:{webdev:{}},LESSON_CONTENT:{},console:{log(){}}};c.window=c;vm.createContext(c);for(const f of ['webdev-topic-quizzes.js','webdev-curriculum.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c);return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('Full-Stack has four authored items per teaching topic and 633 distinct delivered questions',()=>{
 const c=load(),bank=c.TIH_WEBDEV_QUESTIONS,course=c.COURSES_DB.webdev;
 assert.equal(Object.keys(bank.topics).length,169);
 const authored=[...Object.values(bank.topics).flat(),...bank.exams];
 assert.equal(authored.length,704);assert.equal(new Set(authored.map(q=>norm(q.q))).size,704);
 const all=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(Object.keys(course.quizzes).length,180);assert.equal(all.length,633);assert.equal(new Set(all.map(q=>norm(q.q))).size,633);
 let practices=0;
 course.modules.forEach((m,mi)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const q=course.quizzes[l.quizId];assert.equal(q.moduleNum,mi+1);
  if(!q.title.startsWith('Practice: '))return;
  practices++;const key='M'+(mi+1)+':'+q.title.slice(10), rows=bank.topics[key];assert.equal(rows.length,4);
  assert.equal(q.questions.length,3);
  assert.equal(JSON.stringify(q.questions.map(q=>q.q)),JSON.stringify(rows.slice(0,3).map(q=>q.q)));
 }));assert.equal(practices,169);
 for(const q of authored){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.exp.length>=20);}
 const practice=new Set(Object.values(bank.topics).flatMap(rows=>rows.slice(0,3).map(q=>q.q)));
 Object.values(course.quizzes).filter(q=>!q.title.startsWith('Practice: ')).forEach(q=>assert.ok(q.questions.every(item=>!practice.has(item.q))));
});
test('Full-Stack assessments cover their subjects and never reissue questions',()=>{
 const c=load(),course=c.COURSES_DB.webdev,bank=c.TIH_WEBDEV_QUESTIONS;
 const metadata=new Map([...Object.values(bank.topics).flat(),...bank.exams].map(q=>[q.q,q]));
 const paper=title=>Object.values(course.quizzes).find(q=>q.title===title).questions;
 for(const [title,num]of Object.entries({'HTML Assessment':3,'CSS Assessment':4,'JavaScript Assessment':5,'React Assessment':8,'Backend Assessment':9,'Database Assessment':10,'API Assessment':12})){
  assert.equal(paper(title).length,8);assert.ok(paper(title).every(q=>metadata.get(q.q).module===num));
 }
 assert.equal(new Set(paper('Midterm Examination').map(q=>metadata.get(q.q).module)).size,10);
 assert.equal(new Set(paper('Final Examination').map(q=>metadata.get(q.q).module)).size,17);
 const projects=new Set(bank.exams.filter(q=>![10,12].includes(q.module)).map(q=>q.q));
 assert.equal(paper('Full-Stack Capstone Evaluation').length,20);assert.ok(paper('Full-Stack Capstone Evaluation').every(q=>projects.has(q.q)));
 const before=JSON.stringify(course.quizzes);c.tihApplyWebdevTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M8:Hooks'];assert.throws(()=>c.tihApplyWebdevTopicQuizzes(),/Incomplete Web topic/);
});
