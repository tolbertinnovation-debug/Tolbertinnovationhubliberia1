/* Local synthetic learners only; external services and all production writes blocked. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const base=process.env.PM_TEST_URL||'http://127.0.0.1:8099',id='advanced-liberian-law';
 assert.ok(['localhost','127.0.0.1'].includes(new URL(base).hostname));
 const browser=await chromium.launch({headless:true,executablePath:process.env.PM_CHROMIUM,args:['--no-sandbox','--disable-dev-shm-usage']});
 const route=async context=>context.route('**/*',r=>{
  const u=new URL(r.request().url());if(u.origin!==new URL(base).origin)return r.abort();
  if(r.request().resourceType()==='document'&&/^\/(course-player|advanced-liberian-law|learning-hub|hub-apply|hub-dashboard)$/.test(u.pathname)){u.pathname+='.html';return r.continue({url:u.href});}return r.continue();
 });
 const context=await browser.newContext({viewport:{width:390,height:844}});await route(context);
 await context.addInitScript(()=>{
  const sid='ADVANCED-LAW-LOCAL-QA';localStorage.setItem('tih_hub_last_student',sid);localStorage.setItem('tih_hub_student_session',JSON.stringify({id:sid,at:new Date().toISOString()}));
  localStorage.setItem('tih_hub_students',JSON.stringify([{id:sid,name:'Advanced Local Learner',status:'active',email:'advanced@example.invalid',courses:[{id:'advanced-liberian-law'},{id:'liberian-law'}]}]));
  localStorage.setItem('tih_access_advanced-liberian-law',JSON.stringify({studentId:sid,at:new Date().toISOString()}));
  localStorage.setItem('tih_progress_liberian-law',JSON.stringify(Array.from({length:212},(_,i)=>i)));
  localStorage.setItem('tih_cert_liberian-law',JSON.stringify({certId:'EXISTING-LAW-CERT',courseTitle:'Complete Liberian Law Programme',studentId:sid}));
 });
 const page=await context.newPage(),errors=[],missing=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.status()+' '+r.url());});
 fs.mkdirSync('/tmp/tih-advanced-law-qa',{recursive:true});
 try{
  await page.goto(base+'/'+id+'.html');assert.match(await page.locator('h1').innerText(),/Advanced Liberian/);assert.equal(await page.locator('.module').count(),26);assert.equal(await page.locator('.project').count(),8);
  assert.equal(await page.locator('.study-week').count(),40);assert.equal(await page.locator('.study-block').count(),8);assert.equal(await page.locator('.portfolio-checkpoint').count(),8);
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:950});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);}
  await page.screenshot({path:'/tmp/tih-advanced-law-qa/course-page.png',fullPage:true});
  await page.goto(base+'/learning-hub.html');await page.waitForSelector('#tracksGrid .lt-card');await page.locator('#trackSearch').fill('advanced legal');
  const card=page.locator('.lt-card[href="advanced-liberian-law"]');assert.match(await card.innerText(),/140 lessons/);assert.match(await card.innerText(),/US\$100/);assert.equal(await card.count(),1);
  await page.goto(base+'/hub-apply.html');await page.waitForFunction(()=>typeof allTrackIds==='function'&&allTrackIds().includes('advanced-liberian-law'));
  await page.goto(base+'/course-player.html?id='+id);await page.waitForFunction(()=>typeof lessons!=='undefined'&&lessons.length===140&&window.TIH_LESSON_NOTES?.['advanced-liberian-law']);
  assert.equal(await page.evaluate(()=>courseIsComplete()),false);assert.equal(await page.evaluate(()=>completedLessons.length),0,'Existing Law progress must not transfer into a new advanced award');
  await page.evaluate(()=>{window.__alerts=[];window.alert=x=>window.__alerts.push(x);window.print=()=>{};printCertificate();});assert.match(await page.evaluate(()=>window.__alerts[0]),/finish all lessons/);
  assert.equal(await page.evaluate(()=>isLessonLocked(1)),true);await page.evaluate(()=>selectLessonByIndex(2));assert.equal(await page.evaluate(()=>currentLessonIndex),0);
  assert.equal(await page.locator('#overviewContent .law-note').count(),1);assert.match(await page.locator('#overviewContent').innerText(),/Separation of Powers and Constitutional Interpretation/);
  const glossary=page.locator('#overviewContent .law-glossary details').first();await glossary.locator('summary').click();assert.equal(await glossary.getAttribute('open'),'');
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await page.evaluate(()=>{closeSidebar();renderLesson(0);});await page.waitForFunction(()=>document.querySelector('.sidebar').getBoundingClientRect().right<=1);await page.waitForFunction(()=>!document.getElementById('lockToast').classList.contains('show'));await page.screenshot({path:'/tmp/tih-advanced-law-qa/mobile-lesson.png'});
  const report=await page.evaluate(()=>({videos:lessons.filter(l=>!l.isQuiz&&!l.isProject).map(l=>l.videoId),notes:Object.keys(TIH_LESSON_NOTES['advanced-liberian-law']).length,quizzes:Object.keys(quizData).length}));
  assert.equal(report.videos.length,52);assert.equal(new Set(report.videos).size,52);assert.equal(report.notes,60);assert.equal(report.quizzes,80);
  await page.evaluate(()=>markComplete());await page.evaluate(()=>selectLessonByIndex(1));
  for(const q of await page.evaluate(()=>currentQuizData.questions)){const labels=await page.locator('.quiz-option').allTextContents();const n=labels.findIndex(t=>t.slice(1)!==q.opts[q.correct]);await page.locator('.quiz-option').nth(n).click();await page.locator('#quizActionBtn').click();await page.locator('#quizActionBtn').click();}
  assert.equal(await page.evaluate(()=>quizLastPassed),false);assert.equal(await page.evaluate(()=>isLessonLocked(2)),true);await page.evaluate(()=>closeQuizModal());
  let answered=0;
  for(let i=0;i<140;i++){
   const step=await page.evaluate(i=>({quiz:lessons[i].isQuiz,title:lessons[i].title}),i);await page.evaluate(i=>selectLessonByIndex(i),i);assert.equal(await page.evaluate(()=>currentLessonIndex),i,step.title);
   if(!step.quiz){assert.equal(await page.locator('#overviewContent .law-note').count(),1,step.title);await page.evaluate(()=>markComplete());continue;}
   const qs=await page.evaluate(()=>currentQuizData.questions);
   for(const q of qs){assert.equal(await page.locator('#quizQuestionText').innerText(),q.q);const labels=await page.locator('.quiz-option').allTextContents();const n=labels.findIndex(t=>t.slice(1)===q.opts[q.correct]);assert.ok(n>=0);await page.locator('.quiz-option').nth(n).click();await page.locator('#quizActionBtn').click();assert.match(await page.locator('#quizFeedback').innerText(),/^✓ Correct!/);await page.locator('#quizActionBtn').click();answered++;}
   assert.equal(await page.locator('#quizResultScore').innerText(),qs.length+'/'+qs.length);await page.evaluate(()=>closeQuizModal());
   if(i<139)assert.equal(await page.evaluate(()=>courseIsComplete()),false);
  }
  assert.equal(answered,273);assert.equal(await page.evaluate(()=>courseIsComplete()),true);assert.equal(await page.evaluate(()=>Object.keys(readScores()).length),80);
  await page.reload();await page.waitForFunction(()=>typeof completedLessons!=='undefined'&&completedLessons.length===140);assert.equal(await page.evaluate(()=>courseIsComplete()),true);
  await page.evaluate(()=>{showCompletionModal();saveCertificate('Advanced Local Learner');});
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('tih_cert_advanced-liberian-law')));assert.equal(saved.courseTitle,'Advanced Liberian Legal Studies Programme');
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('tih_cert_liberian-law')).certId),'EXISTING-LAW-CERT');assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('tih_progress_liberian-law')).length),212);
  const html=await page.evaluate(()=>buildCertHTML('Advanced Local Learner',course.title,getCredentialId(),'October 15, 2026',course));assert.match(html,/Not an LL.M., university degree/);assert.match(html,/Portfolio completion is self-recorded/);assert.match(html,/52 Taught Lessons/);
  const print=await context.newPage();await print.goto(base+'/'+id+'.html');await print.setViewportSize({width:1200,height:900});await print.emulateMedia({media:'print'});await print.setContent(html.replace(/<script>[\s\S]*?<\/script>/g,''));
  await print.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r;})));});
  assert.equal(await print.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)),true);
  assert.equal(await print.evaluate(()=>{const f=document.querySelector('.fineprint'),s=document.querySelector('.cert'),r=document.createRange();r.selectNodeContents(f);return parseFloat(getComputedStyle(f).fontSize)>=10&&r.getBoundingClientRect().bottom<s.getBoundingClientRect().bottom-30;}),true);
  await print.screenshot({path:'/tmp/tih-advanced-law-qa/certificate.png',fullPage:true});await print.close();
  for(const loggedIn of [false,true]){
   const denied=await browser.newContext();await route(denied);
   if(loggedIn)await denied.addInitScript(()=>{const sid='ADVANCED-LOCKED-QA';localStorage.setItem('tih_hub_last_student',sid);localStorage.setItem('tih_hub_student_session',JSON.stringify({id:sid,at:new Date().toISOString()}));localStorage.setItem('tih_hub_students',JSON.stringify([{id:sid,name:'Locked Learner',status:'active',courses:[{id:'advanced-liberian-law'}]}]));});
   const locked=await denied.newPage();await locked.goto(base+'/course-player.html?id='+id);
   if(loggedIn){await locked.waitForSelector('#tihPaywall');assert.match(await locked.locator('#tihPaywall').innerText(),/US\$100/);assert.equal(await locked.evaluate(()=>typeof lessons==='undefined'),true);}else await locked.waitForURL(/hub-dashboard/);
   await denied.close();
  }
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);console.log(JSON.stringify({subjects:26,taughtLessons:52,notes:60,quizzes:80,renderedQuestions:answered,progressPersisted:true,certificateScope:true,existingLawPreserved:true,accessGuards:true,passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
