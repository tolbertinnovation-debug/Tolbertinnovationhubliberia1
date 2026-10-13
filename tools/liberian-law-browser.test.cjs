/* Local synthetic learner only. External requests are blocked; no production data is touched.
   NODE_PATH=<playwright modules> PM_CHROMIUM=<chromium> node tools/liberian-law-browser.test.cjs */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const base=process.env.PM_TEST_URL||'http://127.0.0.1:8099';
 assert.ok(['localhost','127.0.0.1'].includes(new URL(base).hostname));
 const browser=await chromium.launch({headless:true,executablePath:process.env.PM_CHROMIUM,args:['--no-sandbox','--disable-dev-shm-usage']});
 const context=await browser.newContext({viewport:{width:390,height:844}});
 await context.route('**/*',r=>{
  const url=new URL(r.request().url());if(url.origin!==new URL(base).origin)return r.abort();
  // Match the site's clean-URL routing while using a plain local HTTP server.
  if(r.request().resourceType()==='document'&&/^\/(course-player|liberian-law|learning-hub|hub-apply|hub-dashboard)$/.test(url.pathname)){
   url.pathname+='.html';return r.continue({url:url.href});
  }
  return r.continue();
 });
 await context.addInitScript(()=>{
  const id='LAW-LOCAL-QA';localStorage.setItem('tih_hub_last_student',id);
  localStorage.setItem('tih_hub_student_session',JSON.stringify({id,at:new Date().toISOString()}));
  localStorage.setItem('tih_hub_students',JSON.stringify([{id,name:'Local Law Learner',status:'active',email:'law@example.invalid',courses:[{id:'liberian-law'}]}]));
  localStorage.setItem('tih_access_liberian-law',JSON.stringify({studentId:id,at:new Date().toISOString()}));
 });
 const page=await context.newPage(),errors=[],missing=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes(new URL(base).host))missing.push(r.status()+' '+r.url());});
 try{
  await page.goto(base+'/liberian-law.html');assert.ok((await page.locator('h1').innerText()).includes('Liberian Law'));
  assert.equal(await page.locator('.module').count(),21);
  for(const size of [{width:390,height:844},{width:1440,height:1000}]){
   await page.setViewportSize(size);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  }
  fs.mkdirSync('/tmp/tih-law-qa',{recursive:true});await page.screenshot({path:'/tmp/tih-law-qa/course-page.png',fullPage:true});
  await page.goto(base+'/learning-hub.html');await page.waitForSelector('.lt-card[href="liberian-law"]');
  assert.match(await page.locator('.lt-card[href="liberian-law"]').innerText(),/106 lessons/);
  await page.goto(base+'/hub-apply.html');await page.waitForFunction(()=>typeof allTrackIds==='function'&&allTrackIds().includes('liberian-law'));
  // The legacy public catalogue runs unrelated builders without all their quiz
  // prerequisites. Keep their warnings visible, and scope the strict assertion
  // to this new course's lazy-loaded player.
  const catalogueWarnings=[...new Set(errors)];errors.length=0;
  await page.goto(base+'/course-player.html?id=liberian-law');
  await page.waitForFunction(()=>typeof lessons!=='undefined'&&lessons.length===106&&window.TIH_LESSON_NOTES?.['liberian-law']);
  assert.equal(await page.evaluate(()=>courseIsComplete()),false);
  assert.equal(await page.evaluate(()=>isLessonLocked(1)),true);
  await page.evaluate(()=>selectLessonByIndex(2));assert.equal(await page.evaluate(()=>currentLessonIndex),0);
  assert.match(await page.locator('#overviewContent').innerText(),/Sources of Liberian Law/);
  const glossary=page.locator('#overviewContent .law-glossary details').first();await glossary.locator('summary').click();assert.equal(await glossary.getAttribute('open'),'');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.evaluate(()=>{closeSidebar();renderLesson(0);document.getElementById('videoScroll').scrollTop=0;});
  await page.screenshot({path:'/tmp/tih-law-qa/mobile-lesson.png'});
  const report=await page.evaluate(()=>({videos:lessons.filter(l=>!l.isQuiz&&!l.isProject).map(l=>l.videoId),quizCount:Object.keys(quizData).length,notes:Object.keys(window.TIH_LESSON_NOTES['liberian-law']).length}));
  assert.equal(report.videos.length,40);assert.equal(new Set(report.videos).size,40);assert.equal(report.notes,44);assert.equal(report.quizCount,62);
  // Verify a failed quiz does not unlock the next step, then finish the real sequence.
  await page.evaluate(()=>markComplete());await page.evaluate(()=>selectLessonByIndex(1));
  let first=await page.evaluate(()=>currentQuizData.questions);
  for(const q of first){const labels=await page.locator('.quiz-option').allTextContents();const idx=labels.findIndex(t=>t.slice(1)!==q.opts[q.correct]);await page.locator('.quiz-option').nth(idx).click();await page.locator('#quizActionBtn').click();await page.locator('#quizActionBtn').click();}
  assert.equal(await page.evaluate(()=>quizLastPassed),false);assert.equal(await page.evaluate(()=>isLessonLocked(2)),true);await page.evaluate(()=>closeQuizModal());
  let answered=0;
  for(let i=0;i<106;i++){
   const step=await page.evaluate(i=>({quiz:lessons[i].isQuiz,title:lessons[i].title}),i);
   await page.evaluate(i=>selectLessonByIndex(i),i);assert.equal(await page.evaluate(()=>currentLessonIndex),i,step.title);
   if(!step.quiz){assert.ok((await page.locator('#overviewContent .law-note').count())===1,step.title);await page.evaluate(()=>markComplete());continue;}
   const qs=await page.evaluate(()=>currentQuizData.questions);
   for(const q of qs){assert.equal(await page.locator('#quizQuestionText').innerText(),q.q);const labels=await page.locator('.quiz-option').allTextContents();const idx=labels.findIndex(t=>t.slice(1)===q.opts[q.correct]);assert.ok(idx>=0);await page.locator('.quiz-option').nth(idx).click();await page.locator('#quizActionBtn').click();assert.match(await page.locator('#quizFeedback').innerText(),/^✓ Correct!/);await page.locator('#quizActionBtn').click();answered++;}
   assert.equal(await page.locator('#quizResultScore').innerText(),`${qs.length}/${qs.length}`);await page.evaluate(()=>closeQuizModal());
  }
  assert.equal(answered,200);assert.equal(await page.evaluate(()=>courseIsComplete()),true);
  assert.equal(await page.evaluate(()=>Object.keys(readScores()).length),62);assert.equal(await page.evaluate(()=>courseScorePct()),100);
  console.log('All 200 quiz questions passed; checking persisted completion.');
  await page.reload();await page.waitForFunction(()=>typeof completedLessons!=='undefined'&&completedLessons.length===106);assert.equal(await page.evaluate(()=>courseIsComplete()),true);
  await page.evaluate(()=>showCompletionModal());assert.match(await page.locator('#certCourseTitle').innerText(),/Liberian Law/);
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
  console.log(JSON.stringify({...report,catalogueWarnings,renderedQuestions:answered,progressPersisted:true,certificateEligible:true,passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
