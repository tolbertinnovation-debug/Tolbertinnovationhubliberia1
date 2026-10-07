const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {FULL_COURSES,canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const {defaults,validate,merge}=require('../model.cjs');
const c=JSON.parse(fs.readFileSync('src/content/courses/sat.json','utf8'));
test('Digital SAT preserves every source reading, question and assessment',async()=>{
 const {extractCourse}=await import('../tools/extract-course.mjs');const source=extractCourse('sat');
 assert.equal(c.title,'Complete Digital SAT Prep: Reading & Writing + Math (400–1600)');assert.equal(c.modules.length,14);assert.equal(c.lessons.length,216);
 assert.equal(c.lessons.filter(l=>l.kind==='lesson').length,102);assert.equal(c.lessons.filter(l=>l.kind==='quiz').length,114);assert.equal(c.lessons.filter(l=>l.kind==='project').length,0);assert.equal(c.lessons.filter(l=>l.videoId).length,102);
 const lessons=source.modules.flatMap(m=>m.lessons);assert.equal(new Set(c.lessons.map(l=>l.id)).size,216);
 for(const [i,l] of lessons.entries()){assert.equal(c.lessons[i].id,l.id);assert.equal(c.lessons[i].html,l.html);assert.deepEqual(c.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));if(l.kind!=='quiz')assert.ok(l.html.length>100);else assert.ok(l.questions.length);if(c.lessons[i].videoId)assert.match(c.lessons[i].videoId,/^[A-Za-z0-9_-]{11}$/);}
 const questions=c.lessons.flatMap(l=>l.questions);assert.equal(questions.length,467);assert.equal(new Set(questions.map(q=>q.question)).size,300);
 assert.equal(c.lessons.filter(l=>l.final).length,1);assert.equal(c.lessons.find(l=>l.final).questions.length,20);
});
test('SAT grading, notes, progress and enrollment remain separate',()=>{
 const quiz=c.lessons.find(l=>l.kind==='quiz'),id=c.lessons.find(l=>l.kind==='lesson').id;assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'sat',courseBookmarks:{sat:id},completed:[id],lessonScrolls:{[id]:700},notes:[{id:'sat-note',title:'Listening strategy',body:'Identify the purpose of the conversation.',lessonId:id,updatedAt:Date.now()}],quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}}});
 const r=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(r.activeCourse,'sat');assert.equal(r.courseBookmarks.sat,id);assert.equal(r.lessonScrolls[id],700);assert.equal(r.quizDrafts[quiz.id][0],0);assert.ok(r.notes.some(n=>n.body.includes('purpose')));const p=progress(c,r);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.total,0);
 const a={studentId:'sat-only',name:'Learner',grants:['sat'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['sat']);for(const id of FULL_COURSES.filter(id=>id!=='sat'))assert.equal(canStudy(a,id),false);assert.equal(canStudy(a,'sat'),true);assert.equal(canStudy(a,'sat',a.verifiedAt+OFFLINE_WINDOW),false);
});
