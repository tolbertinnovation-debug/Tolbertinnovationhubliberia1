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
  assert.equal(await page.locator('.module').count(),42);
  for(const size of [{width:320,height:740},{width:390,height:844},{width:768,height:1024},{width:1440,height:1000}]){
   await page.setViewportSize(size);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  }
  fs.mkdirSync('/tmp/tih-law-qa',{recursive:true});await page.screenshot({path:'/tmp/tih-law-qa/course-page.png',fullPage:true});
  await page.goto(base+'/learning-hub.html');await page.waitForSelector('#tracksGrid .lt-card');
  await page.locator('#trackSearch').fill('law school');await page.waitForSelector('.lt-card[href="liberian-law"]');
  assert.match(await page.locator('.lt-card[href="liberian-law"]').innerText(),/212 lessons/);
  assert.equal(await page.evaluate(()=>Object.keys(COURSES_DB).length),33);
  assert.equal(await page.locator('#bibleCoursesGrid .lt-card').count()>0||await page.evaluate(()=>!!COURSES_DB['bible-foundations']),true);
  await page.goto(base+'/hub-apply.html');await page.waitForFunction(()=>typeof allTrackIds==='function'&&allTrackIds().includes('liberian-law'));
  const catalogueWarnings=[...new Set(errors)];errors.length=0;
  assert.deepEqual(catalogueWarnings,[],'Public catalogue and registration must load without builder errors');
  await page.goto(base+'/course-player.html?id=liberian-law');
  await page.waitForFunction(()=>typeof lessons!=='undefined'&&lessons.length===212&&window.TIH_LESSON_NOTES?.['liberian-law']);
  assert.equal(await page.evaluate(()=>courseIsComplete()),false);
  await page.evaluate(()=>{window.__alerts=[];window.alert=message=>window.__alerts.push(message);window.print=()=>{};printCertificate();});
  assert.match(await page.evaluate(()=>window.__alerts[0]),/finish all lessons/);
  assert.equal(await page.evaluate(()=>localStorage.getItem('tih_cert_liberian-law')),null);
  assert.equal(await page.evaluate(()=>isLessonLocked(1)),true);
  await page.evaluate(()=>selectLessonByIndex(2));assert.equal(await page.evaluate(()=>currentLessonIndex),0);
  assert.match(await page.locator('#overviewContent').innerText(),/Sources of Liberian Law/);
  const glossary=page.locator('#overviewContent .law-glossary details').first();await glossary.locator('summary').click();assert.equal(await glossary.getAttribute('open'),'');
  await page.setViewportSize({width:390,height:844});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.evaluate(()=>{closeSidebar();renderLesson(0);document.getElementById('videoScroll').scrollTop=0;});
  await page.waitForFunction(()=>document.querySelector('.sidebar').getBoundingClientRect().right<=1);
  await page.waitForFunction(()=>!document.getElementById('lockToast').classList.contains('show'));
  await page.screenshot({path:'/tmp/tih-law-qa/mobile-lesson.png'});
  const report=await page.evaluate(()=>({videos:lessons.filter(l=>!l.isQuiz&&!l.isProject).map(l=>l.videoId),quizCount:Object.keys(quizData).length,notes:Object.keys(window.TIH_LESSON_NOTES['liberian-law']).length}));
  assert.equal(report.videos.length,80);assert.equal(new Set(report.videos).size,80);assert.equal(report.notes,88);assert.equal(report.quizCount,124);
  // Verify a failed quiz does not unlock the next step, then finish the real sequence.
  await page.evaluate(()=>markComplete());await page.evaluate(()=>selectLessonByIndex(1));
  let first=await page.evaluate(()=>currentQuizData.questions);
  for(const q of first){const labels=await page.locator('.quiz-option').allTextContents();const idx=labels.findIndex(t=>t.slice(1)!==q.opts[q.correct]);await page.locator('.quiz-option').nth(idx).click();await page.locator('#quizActionBtn').click();await page.locator('#quizActionBtn').click();}
  assert.equal(await page.evaluate(()=>quizLastPassed),false);assert.equal(await page.evaluate(()=>isLessonLocked(2)),true);await page.evaluate(()=>closeQuizModal());
  let answered=0;
  for(let i=0;i<212;i++){
   const step=await page.evaluate(i=>({quiz:lessons[i].isQuiz,title:lessons[i].title}),i);
   await page.evaluate(i=>selectLessonByIndex(i),i);assert.equal(await page.evaluate(()=>currentLessonIndex),i,step.title);
   if(!step.quiz){assert.ok((await page.locator('#overviewContent .law-note').count())===1,step.title);await page.evaluate(()=>markComplete());continue;}
   const qs=await page.evaluate(()=>currentQuizData.questions);
   for(const q of qs){assert.equal(await page.locator('#quizQuestionText').innerText(),q.q);const labels=await page.locator('.quiz-option').allTextContents();const idx=labels.findIndex(t=>t.slice(1)===q.opts[q.correct]);assert.ok(idx>=0);await page.locator('.quiz-option').nth(idx).click();await page.locator('#quizActionBtn').click();assert.match(await page.locator('#quizFeedback').innerText(),/^✓ Correct!/);await page.locator('#quizActionBtn').click();answered++;}
   assert.equal(await page.locator('#quizResultScore').innerText(),`${qs.length}/${qs.length}`);await page.evaluate(()=>closeQuizModal());
   if(i===105){assert.equal(await page.evaluate(()=>courseIsComplete()),false);assert.equal(await page.evaluate(()=>localStorage.getItem('tih_cert_liberian-law')),null);}
  }
  assert.equal(answered,460);assert.equal(await page.evaluate(()=>courseIsComplete()),true);
  assert.equal(await page.evaluate(()=>Object.keys(readScores()).length),124);assert.equal(await page.evaluate(()=>courseScorePct()),100);
  console.log('All 460 quiz questions passed; checking persisted completion.');
  await page.reload();await page.waitForFunction(()=>typeof completedLessons!=='undefined'&&completedLessons.length===212);assert.equal(await page.evaluate(()=>courseIsComplete()),true);
  await page.evaluate(()=>showCompletionModal());assert.match(await page.locator('#certCourseTitle').innerText(),/Liberian Law/);
  await page.evaluate(()=>{
   localStorage.setItem('tih_cert_liberian-law',JSON.stringify({certId:'TIH-2026-LAW-OLDQA',courseTitle:course.legacyTitle,studentId:'LAW-LOCAL-QA',studentName:'Local Law Learner'}));
   saveCertificate('Local Law Learner');
  });
  const savedCertificate=await page.evaluate(()=>JSON.parse(localStorage.getItem('tih_cert_liberian-law')));
  assert.equal(savedCertificate.courseTitle,'Complete Liberian Law Programme');assert.equal(savedCertificate.courseRevision,2);
  assert.notEqual(savedCertificate.certId,'TIH-2026-LAW-OLDQA');
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('tih_cert_previous_liberian-law')).certId),'TIH-2026-LAW-OLDQA');
  const certificate=await page.evaluate(()=>buildCertHTML('Local Law Learner',course.title,getCredentialId(),'October 14, 2026',course));
  assert.match(certificate,/not a law degree or authority to practise law/);
  assert.match(certificate,/Portfolio completion is self-recorded/);
  assert.ok(!certificate.includes('only after completion and administrator approval'));
  assert.match(certificate,/Local Law Learner/);
  const certPage=await context.newPage();
  await certPage.goto(base+'/liberian-law.html');
  await certPage.setViewportSize({width:1200,height:900});
  await certPage.emulateMedia({media:'print'});
  await certPage.setContent(certificate.replace(/<script>[\s\S]*?<\/script>/g,''));
  await certPage.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.onload=resolve;img.onerror=resolve;})));});
  assert.equal(await certPage.evaluate(()=>[...document.images].every(img=>img.complete&&img.naturalWidth>0)),true);
  assert.equal(await certPage.evaluate(()=>{
   const fine=document.querySelector('.fineprint'),sheet=document.querySelector('.cert');
   const range=document.createRange();range.selectNodeContents(fine);
   return parseFloat(getComputedStyle(fine).fontSize)>=10&&range.getBoundingClientRect().bottom<sheet.getBoundingClientRect().bottom-30;
  }),true,'Course scope must remain legible inside the printed certificate frame');
  await certPage.screenshot({path:'/tmp/tih-law-qa/law-certificate.png',fullPage:true});await certPage.close();
  // A returning foundation graduate resumes at the first added lesson, with
  // their old score and credential preserved, rather than gaining new credit.
  const returning=await browser.newContext();
  await returning.route('**/*',r=>{
   const url=new URL(r.request().url());if(url.origin!==new URL(base).origin)return r.abort();
   if(r.request().resourceType()==='document'&&url.pathname==='/course-player'){url.pathname+='.html';return r.continue({url:url.href});}
   return r.continue();
  });
  await returning.addInitScript(()=>{
   const id='LAW-FOUNDATION-QA';localStorage.setItem('tih_hub_last_student',id);
   localStorage.setItem('tih_hub_student_session',JSON.stringify({id,at:new Date().toISOString()}));
   localStorage.setItem('tih_hub_students',JSON.stringify([{id,name:'Foundation Learner',status:'active',courses:[{id:'liberian-law'}]}]));
   localStorage.setItem('tih_access_liberian-law',JSON.stringify({studentId:id,at:new Date().toISOString()}));
   localStorage.setItem('tih_progress_liberian-law',JSON.stringify(Array.from({length:106},(_,i)=>i)));
   localStorage.setItem('tih_scores_liberian-law',JSON.stringify({'law-final':{score:30,total:30}}));
   localStorage.setItem('tih_certid_liberian-law','TIH-2026-LAW-FOUNDQA');
   localStorage.setItem('tih_cert_liberian-law',JSON.stringify({certId:'TIH-2026-LAW-FOUNDQA',courseTitle:'Liberian Law: Law School Preparation',studentId:id,studentName:'Foundation Learner'}));
  });
  const former=await returning.newPage();await former.goto(base+'/course-player.html?id=liberian-law');
  await former.waitForFunction(()=>typeof lessons!=='undefined'&&lessons.length===212&&currentLessonIndex===106);
  assert.equal(await former.evaluate(()=>completedLessons.length),106);assert.equal(await former.evaluate(()=>courseIsComplete()),false);
  assert.equal(await former.evaluate(()=>readScores()['law-final'].score),30);
  assert.notEqual(await former.evaluate(()=>getCredentialId()),'TIH-2026-LAW-FOUNDQA');
  const oldCertificate=await former.evaluate(()=>buildCertHTML('Foundation Learner',course.legacyTitle,'TIH-2026-LAW-FOUNDQA','October 13, 2026',course));
  assert.match(oldCertificate,/106 Lessons/);assert.match(oldCertificate,/80h estimated/);assert.ok(!oldCertificate.includes('212 Lessons'));
  assert.equal(await former.evaluate(()=>JSON.parse(localStorage.getItem('tih_cert_liberian-law')).courseTitle),'Liberian Law: Law School Preparation');
  await returning.close();
  // Check access boundaries in fresh sessions, without contacting production services.
  for(const loggedIn of [false,true]){
   const denied=await browser.newContext();
   await denied.route('**/*',r=>{
    const url=new URL(r.request().url());if(url.origin!==new URL(base).origin)return r.abort();
    if(r.request().resourceType()==='document'&&/^\/(course-player|hub-dashboard)$/.test(url.pathname)){url.pathname+='.html';return r.continue({url:url.href});}
    return r.continue();
   });
   if(loggedIn)await denied.addInitScript(()=>{
    const id='LAW-LOCKED-QA';localStorage.setItem('tih_hub_last_student',id);
    localStorage.setItem('tih_hub_student_session',JSON.stringify({id,at:new Date().toISOString()}));
    localStorage.setItem('tih_hub_students',JSON.stringify([{id,name:'Locked Local Learner',status:'active',courses:[{id:'liberian-law'}]}]));
   });
   const locked=await denied.newPage();await locked.goto(base+'/course-player.html?id=liberian-law');
   if(loggedIn){await locked.waitForSelector('#tihPaywall');assert.equal(await locked.evaluate(()=>typeof lessons==='undefined'),true);}
   else await locked.waitForURL(/hub-dashboard/);
   await denied.close();
  }
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
  console.log(JSON.stringify({...report,catalogueWarnings,renderedQuestions:answered,progressPersisted:true,certificateEligible:true,foundationProgressPreserved:true,legacyCertificatePreserved:true,accessGuards:true,passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
