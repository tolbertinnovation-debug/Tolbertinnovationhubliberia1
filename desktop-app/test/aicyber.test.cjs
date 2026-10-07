const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {defaults,validate,merge}=require('../model.cjs');
const {canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const web=JSON.parse(fs.readFileSync('src/content/courses/ai-cybersecurity.json','utf8'));
test('AI Cybersecurity imports every source module, authored reading, source question and project brief',async()=>{
 const {extractCourse}=await import('../tools/extract-course.mjs');const source=extractCourse('ai-cybersecurity');
 assert.equal(web.title,'Build Real AI & Cybersecurity Skills');assert.equal(web.modules.length,15);
 assert.equal(web.lessons.length,269);assert.equal(web.lessons.filter(l=>l.kind==='lesson').length,127);
 assert.equal(web.lessons.filter(l=>l.kind==='quiz').length,136);assert.equal(web.lessons.filter(l=>l.kind==='project').length,6);
 assert.equal(web.lessons.filter(l=>l.videoId).length,133);assert.equal(new Set(web.lessons.map(l=>l.id)).size,269);
 const questions=web.lessons.flatMap(l=>l.questions);assert.equal(questions.length,477);assert.equal(new Set(questions.map(q=>q.question)).size,378);
 assert.equal(web.lessons.find(l=>l.final).questions.length,15);
 for(const [i,l] of source.modules.flatMap(m=>m.lessons).entries()){
   assert.equal(web.lessons[i].id,l.id);assert.equal(web.lessons[i].html,l.html);assert.deepEqual(web.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));
   if(l.kind==='lesson')assert.ok(['authored','curriculum'].includes(l.noteSource));
   if(l.kind==='project')assert.ok(l.html.length>100);
   if(l.videoId)assert.match(l.videoId,/^[A-Za-z0-9_-]{11}$/);
 }
 assert.ok(web.lessons.some(l=>l.html.includes('<details')));assert.ok(web.lessons.some(l=>l.html.includes('<details')));
});
test('Design grading, saved drafts, project records and access remain independent',()=>{
 const quiz=web.lessons.find(l=>l.kind==='quiz'),project=web.lessons.find(l=>l.kind==='project'),id=web.lessons[0].id;
 assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'ai-cybersecurity',courseBookmarks:{'ai-cybersecurity':id},completed:[id],lessonScrolls:{[id]:700},quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}},projects:{[project.id]:{body:'I created a business report, analyzed spreadsheet data and prepared a presentation.',files:'Office portfolio/business-report.docx',complete:true}}});
 const restored=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(restored.activeCourse,'ai-cybersecurity');assert.equal(restored.courseBookmarks['ai-cybersecurity'],id);assert.equal(restored.lessonScrolls[id],700);assert.equal(restored.quizDrafts[quiz.id][0],0);
 const p=progress(web,restored);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.done,1);
 const a={studentId:'web-only',name:'Learner',grants:['ai-cybersecurity'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['ai-cybersecurity']);
 for(const course of ['computer-literacy','ielts','project-mgmt','webdev','office','accounting-bookkeeping','cybersecurity','android','design'])assert.equal(canStudy(a,course),false);
 assert.equal(canStudy(a,'ai-cybersecurity'),true);assert.equal(canStudy(a,'ai-cybersecurity',a.verifiedAt+OFFLINE_WINDOW),false);
});
