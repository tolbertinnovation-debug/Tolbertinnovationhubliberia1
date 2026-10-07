const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {FULL_COURSES,canStudy,publicAccount,OFFLINE_WINDOW}=require('../auth.cjs');
const {grade,progress}=require('../src/study-model.js');
const {defaults,validate,merge}=require('../model.cjs');
const c=JSON.parse(fs.readFileSync('src/content/courses/bible-foundations.json','utf8'));
test('Bible School & Christian Ministry preserves every source lesson, assessment and original project brief',async()=>{
 const {extractCourse,createContext}=await import('../tools/extract-course.mjs');const source=extractCourse('bible-foundations');
 assert.equal(c.title,'Complete Bible School & Christian Ministry Certificate');assert.equal(c.modules.length,10);
 const lessons=source.modules.flatMap(m=>m.lessons);assert.equal(c.lessons.length,lessons.length);assert.equal(new Set(c.lessons.map(l=>l.id)).size,lessons.length);
 for(const [i,l] of lessons.entries()){assert.equal(c.lessons[i].id,l.id);assert.equal(c.lessons[i].html,l.html);assert.deepEqual(c.lessons[i].questions,JSON.parse(JSON.stringify(l.questions)));if(l.kind!=='quiz')assert.ok(l.html.length>100);else assert.ok(l.questions.length);if(c.lessons[i].videoId)assert.match(c.lessons[i].videoId,/^[A-Za-z0-9_-]{11}$/);}
 const h=createContext('bible-foundations');h.run('courses-db.js');h.run('tih-course-loader.js');h.context.TihCourseLoader.ensure('bible-foundations',()=>{});
 for(const l of c.lessons.filter(l=>l.kind==='project')){const brief=h.context.LESSON_CONTENT['bible-foundations'][String(l.sourceIndex)];assert.ok(brief);assert.ok(l.html.includes(brief));}
 const questions=c.lessons.flatMap(l=>l.questions);assert.equal(c.lessons.length,114);assert.equal(questions.length,192);assert.equal(new Set(questions.map(q=>q.question)).size,33);
 console.log(JSON.stringify({course:c.title,modules:c.modules.length,readings:c.lessons.filter(l=>l.kind==='lesson').length,assessments:c.lessons.filter(l=>l.kind==='quiz').length,projects:c.lessons.filter(l=>l.kind==='project').length,videos:c.lessons.filter(l=>l.videoId).length,questions:questions.length,distinctQuestions:new Set(questions.map(q=>q.question)).size}));
});
test('Bible School & Christian Ministry grading, progress and enrollment remain separate',()=>{
 const quiz=c.lessons.find(l=>l.kind==='quiz'),project=c.lessons.find(l=>l.kind==='project'),id=c.lessons.find(l=>l.kind==='lesson').id;
 assert.equal(grade(quiz.questions,quiz.questions.map(q=>q.answer)).score,100);
 const s=validate({...defaults(),activeCourse:'bible-foundations',courseBookmarks:{'bible-foundations':id},completed:[id],lessonScrolls:{[id]:700},quizDrafts:{[quiz.id]:[0]},quizScores:{[quiz.id]:{best:100,last:100,attempts:1}},projects:{[project.id]:{body:'I prepared a ministry plan with Scripture references.',files:'portfolio/ministry-plan.docx',complete:true}}});
 const r=merge(s,JSON.parse(JSON.stringify(s)));assert.equal(r.activeCourse,'bible-foundations');assert.equal(r.courseBookmarks['bible-foundations'],id);assert.equal(r.lessonScrolls[id],700);assert.equal(r.quizDrafts[quiz.id][0],0);const p=progress(c,r);assert.equal(p.read.done,1);assert.equal(p.quizzes.done,1);assert.equal(p.projects.done,1);
 const a={studentId:'bible-only',name:'Learner',grants:['bible-foundations'],verifiedAt:Date.now()};assert.deepEqual(publicAccount(a).approvedCourses,['bible-foundations']);for(const id of FULL_COURSES.filter(id=>id!=='bible-foundations'))assert.equal(canStudy(a,id),false);assert.equal(canStudy(a,'bible-foundations'),true);assert.equal(canStudy(a,'bible-foundations',a.verifiedAt+OFFLINE_WINDOW),false);
});
