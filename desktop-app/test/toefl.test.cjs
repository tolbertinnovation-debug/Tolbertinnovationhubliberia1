const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {FULL_COURSES,canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const {defaults,validate,merge}=require('../model.cjs');
const c=JSON.parse(fs.readFileSync('src/content/courses/toefl.json','utf8'));
test('TOEFL iBT preserves every source reading, question and assessment',async()=>{
 const {extractCourse}=await import('../tools/extract-course.mjs');const source=extractCourse('toefl');
 assert.equal(c.title,'Complete TOEFL iBT Course: Grammar, Vocabulary & All Four Sections');assert.equal(c.modules.length,10);assert.equal(c.lessons.length,184);
 assert.equal(c.lessons.filter(l=>l.kind==='lesson').length,84);assert.equal(c.lessons.filter(l=>l.kind==='quiz').length,100);assert.equal(c.lessons.filter(l=>l.kind==='project').length,0);assert.equal(c.lessons.filter(l=>l.videoId).length,84);
 const lessons=source.modules.flatMap(m=>m.lessons);assert.equal(new Set(c.lessons.map(l=>l.id)).size,184);
 for(const [i,l] of lessons.entries()){assert.equal(c.lessons[i].id,l.id);assert.equal(c.lessons[i].html,l.html);assert.deepEqual(c.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));if(l.kind!=='quiz')assert.ok(l.html.length>100);else assert.ok(l.questions.length);if(c.lessons[i].videoId)assert.match(c.lessons[i].videoId,/^[A-Za-z0-9_-]{11}$/);}
 const questions=c.lessons.flatMap(l=>l.questions);assert.equal(questions.length,263);assert.equal(new Set(questions.map(q=>q.question)).size,263);
 assert.equal(c.lessons.filter(l=>l.final).length,1);assert.equal(c.lessons.find(l=>l.final).questions.length,20);
 for(const section of ['Reading','Listening','Speaking','Writing'])assert.ok(c.lessons.some(l=>l.kind==='quiz'&&l.title.includes(section+' Mock Test')));
});
test('TOEFL grading, notes, progress and enrollment remain separate',()=>{
 const quiz=c.lessons.find(l=>l.kind==='quiz'),id=c.lessons.find(l=>l.kind==='lesson').id;assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'toefl',courseBookmarks:{toefl:id},completed:[id],lessonScrolls:{[id]:700},notes:[{id:'toefl-note',title:'Listening strategy',body:'Identify the purpose of the conversation.',lessonId:id,updatedAt:Date.now()}],quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}}});
 const r=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(r.activeCourse,'toefl');assert.equal(r.courseBookmarks.toefl,id);assert.equal(r.lessonScrolls[id],700);assert.equal(r.quizDrafts[quiz.id][0],0);assert.ok(r.notes.some(n=>n.body.includes('purpose')));const p=progress(c,r);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.total,0);
 const a={studentId:'toefl-only',name:'Learner',grants:['toefl'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['toefl']);for(const id of FULL_COURSES.filter(id=>id!=='toefl'))assert.equal(canStudy(a,id),false);assert.equal(canStudy(a,'toefl'),true);assert.equal(canStudy(a,'toefl',a.verifiedAt+OFFLINE_WINDOW),false);
});
