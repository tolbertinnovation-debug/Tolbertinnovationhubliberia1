const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {FULL_COURSES,canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const {defaults,validate,merge}=require('../model.cjs');
const c=JSON.parse(fs.readFileSync('src/content/courses/english-success.json','utf8'));
test('English for Academic & Professional Success preserves every source lesson, assessment and original project brief',async()=>{
 const {extractCourse,createContext}=await import('../tools/extract-course.mjs');const source=extractCourse('english-success');
 assert.equal(c.title,'Complete English for Academic & Professional Success Certificate');assert.equal(c.modules.length,20);
 const lessons=source.modules.flatMap(m=>m.lessons);assert.equal(c.lessons.length,lessons.length);assert.equal(new Set(c.lessons.map(l=>l.id)).size,lessons.length);
 for(const [i,l] of lessons.entries()){assert.equal(c.lessons[i].id,l.id);assert.equal(c.lessons[i].html,l.html);assert.deepEqual(c.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));if(l.kind!=='quiz')assert.ok(l.html.length>100);else assert.ok(l.questions.length);if(c.lessons[i].videoId)assert.match(c.lessons[i].videoId,/^[A-Za-z0-9_-]{11}$/);}
 const h=createContext('english-success');h.run('courses-db.js');h.run('tih-course-loader.js');h.context.TihCourseLoader.ensure('english-success',()=>{});
 for(const l of c.lessons.filter(l=>l.kind==='project')){const brief=h.context.LESSON_CONTENT['english-success'][String(l.sourceIndex)];assert.ok(brief);assert.ok(l.html.includes(brief));}
 const questions=c.lessons.flatMap(l=>l.questions);assert.equal(c.lessons.length,332);assert.equal(questions.length,616);assert.equal(new Set(questions.map(q=>q.question)).size,616);
 console.log(JSON.stringify({course:c.title,modules:c.modules.length,readings:c.lessons.filter(l=>l.kind==='lesson').length,assessments:c.lessons.filter(l=>l.kind==='quiz').length,projects:c.lessons.filter(l=>l.kind==='project').length,videos:c.lessons.filter(l=>l.videoId).length,questions:questions.length,distinctQuestions:new Set(questions.map(q=>q.question)).size}));
});
test('English for Academic & Professional Success grading, progress and enrollment remain separate',()=>{
 const quiz=c.lessons.find(l=>l.kind==='quiz'),project=c.lessons.find(l=>l.kind==='project'),id=c.lessons.find(l=>l.kind==='lesson').id;
 assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'english-success',courseBookmarks:{'english-success':id},completed:[id],lessonScrolls:{[id]:700},quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}},projects:{[project.id]:{body:'I revised an academic essay and prepared a professional presentation.',files:'portfolio/english-portfolio.docx',complete:true}}});
 const r=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(r.activeCourse,'english-success');assert.equal(r.courseBookmarks['english-success'],id);assert.equal(r.lessonScrolls[id],700);assert.equal(r.quizDrafts[quiz.id][0],0);const p=progress(c,r);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.done,1);
 const a={studentId:'english-only',name:'Learner',grants:['english-success'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['english-success']);for(const id of FULL_COURSES.filter(id=>id!=='english-success'))assert.equal(canStudy(a,id),false);assert.equal(canStudy(a,'english-success'),true);assert.equal(canStudy(a,'english-success',a.verifiedAt+OFFLINE_WINDOW),false);
});
