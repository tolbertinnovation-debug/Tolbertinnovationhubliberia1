const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {defaults,validate,merge}=require('../model.cjs');
const {canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const web=JSON.parse(fs.readFileSync('src/content/courses/office.json','utf8'));
test('Microsoft Office imports every source module, authored reading, unique question and project brief',async()=>{
 const {extractCourse}=await import('../tools/extract-course.mjs');const source=extractCourse('office');
 assert.equal(web.title,'Complete Microsoft Office Mastery Professional Certificate');assert.equal(web.modules.length,20);
 assert.equal(web.lessons.length,377);assert.equal(web.lessons.filter(l=>l.kind==='lesson').length,169);
 assert.equal(web.lessons.filter(l=>l.kind==='quiz').length,179);assert.equal(web.lessons.filter(l=>l.kind==='project').length,29);
 assert.equal(web.lessons.filter(l=>l.videoId).length,198);assert.equal(new Set(web.lessons.map(l=>l.id)).size,377);
 const questions=web.lessons.flatMap(l=>l.questions);assert.equal(questions.length,637);assert.equal(new Set(questions.map(q=>q.question)).size,637);
 assert.equal(web.lessons.find(l=>l.final).questions.length,15);
 for(const [i,l] of source.modules.flatMap(m=>m.lessons).entries()){
   assert.equal(web.lessons[i].id,l.id);assert.equal(web.lessons[i].html,l.html);assert.deepEqual(web.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));
   if(l.kind==='lesson')assert.equal(l.noteSource,'authored');
   if(l.kind==='project'){assert.match(l.html,/source-project-brief/);assert.match(l.html,/Deliverable:/);}
   if(l.videoId)assert.match(l.videoId,/^[A-Za-z0-9_-]{11}$/);
 }
 assert.ok(web.lessons.some(l=>l.html.includes('<table')));assert.ok(web.lessons.some(l=>l.html.includes('<details')));
});
test('Office grading, saved drafts, project records and access remain independent',()=>{
 const quiz=web.lessons.find(l=>l.kind==='quiz'),project=web.lessons.find(l=>l.kind==='project'),id=web.lessons[0].id;
 assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'office',courseBookmarks:{office:id},completed:[id],lessonScrolls:{[id]:700},quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}},projects:{[project.id]:{body:'I created a business report, analyzed spreadsheet data and prepared a presentation.',files:'Office portfolio/business-report.docx',complete:true}}});
 const restored=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(restored.activeCourse,'office');assert.equal(restored.courseBookmarks.office,id);assert.equal(restored.lessonScrolls[id],700);assert.equal(restored.quizDrafts[quiz.id][0],0);
 const p=progress(web,restored);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.done,1);
 const a={studentId:'web-only',name:'Learner',grants:['office'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['office']);
 for(const course of ['computer-literacy','ielts','project-mgmt','webdev'])assert.equal(canStudy(a,course),false);
 assert.equal(canStudy(a,'office'),true);assert.equal(canStudy(a,'office',a.verifiedAt+OFFLINE_WINDOW),false);
});
