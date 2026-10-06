import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
function load(){const c={console:{log(){}},LESSON_CONTENT:{}};c.window=c;vm.createContext(c);for(const f of ['courses-db.js','toefl-topic-quizzes.js','toefl-curriculum.js','toefl-notes.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),c,{filename:f});return c;}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
test('TOEFL topic practice and separate assessments never repeat questions or fall back to shared pools',()=>{
 const c=load(),course=c.COURSES_DB.toefl,bank=c.TIH_TOEFL_QUESTIONS;
 assert.equal(course.modules.length,10);assert.equal(course.modules.flatMap(m=>m.lessons).length,184);
 assert.equal(Object.keys(bank.topics).length,84);assert.equal(Object.keys(bank.papers).length,16);
 const qs=Object.values(course.quizzes).flatMap(q=>q.questions);
 assert.equal(qs.length,263);assert.equal(new Set(qs.map(q=>norm(q.q))).size,263);
 for(const item of qs){assert.equal(item.opts.length,4);assert.equal(new Set(item.opts).size,4);assert.ok(Number.isInteger(item.correct)&&item.correct>=0&&item.correct<4);assert.ok(item.exp.length>=25);}
 assert.equal(new Set(qs.map(q=>q.correct)).size,4);
 course.modules.forEach((m,i)=>m.lessons.filter(l=>l.isQuiz).forEach(l=>{
  const quiz=course.quizzes[l.quizId];assert.equal(quiz.moduleNum,i+1);assert.equal(quiz.questionCount,quiz.questions.length);
  if(l.t.includes('Practice:')){assert.equal(quiz.questions.length,2);assert.ok(quiz.questions.every(q=>q.module===i+1));}
  else {assert.equal(quiz.questions.length,l.isFinal?20:5);assert.ok(quiz.title.includes('TIH knowledge check'));if(i<9)assert.ok(quiz.questions.every(q=>q.module===i+1));}
 }));
 assert.ok(bank.topics['M4:Inference Questions'][0].q.startsWith('Reading passage:'));
 assert.ok(bank.topics['M5:Inference Questions'][0].q.startsWith('Written listening model:'));
 assert.notEqual(c.TIH_LESSON_NOTES.toefl['M4:Inference Questions'],c.TIH_LESSON_NOTES.toefl['M5:Inference Questions']);
 const before=JSON.stringify(course.quizzes);c.tihApplyToeflTopicQuizzes();assert.equal(JSON.stringify(course.quizzes),before);
 delete bank.topics['M2:Nouns'];assert.throws(()=>c.tihApplyToeflTopicQuizzes(),/Incomplete TOEFL check/);
});
test('TOEFL current task workshops, score guidance and performance limitations are explicit',()=>{
 const c=load(),notes=c.TIH_LESSON_NOTES.toefl;
 assert.equal(Object.keys(notes).length,84);
 assert.ok(Object.values(notes).every(n=>n.length>2000&&n.includes('not official TOEFL scores')&&n.includes('Model answer:')));
 const structure=notes['M1:TOEFL Test Structure'];for(const task of ['Complete the Words','Read in Daily Life','Read an Academic Passage','Build a Sentence','Write an Email','Write for an Academic Discussion','Listen and Repeat','Take an Interview'])assert.ok(structure.includes(task),task);
 for(const title of ['Independent Speaking','Integrated Speaking'])assert.ok(notes['M6:'+title].includes('Supplemental legacy-format workshop'));
 assert.ok(notes['M7:Integrated Writing'].includes('Supplemental legacy-format workshop'));
 assert.ok(notes['M6:TOEFL Speaking Overview'].includes('compare your recording'));
 assert.ok(notes['M7:Writing Overview'].includes('Could you send the notes'));
 const qs=Object.values(c.COURSES_DB.toefl.quizzes).flatMap(q=>q.questions);
 assert.ok(!qs.some(q=>/The 0–30 result|sum.*up to 120/.test(q.q)));
 assert.ok(c.COURSES_DB.toefl.about.join(' ').includes('not full-length adaptive TOEFL tests'));
});
