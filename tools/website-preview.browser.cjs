'use strict';
// Local mobile smoke test. All API calls are mocked; no external account writes.
const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'../public');
const server=http.createServer((req,res)=>{
  let target;try{target=decodeURIComponent(req.url.split('?')[0]);}catch{res.writeHead(400).end();return;}
  if(target==='/')target='/index.html';if(!path.extname(target))target+='.html';
  const file=path.join(root,target);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404).end();return;}
  res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');fs.createReadStream(file).pipe(res);
});
(async()=>{
  let browser;
  try{
    await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
    browser=await chromium.launch({...(process.env.BROWSER_EXECUTABLE_PATH?{executablePath:process.env.BROWSER_EXECUTABLE_PATH}:{}),headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
    const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[],writes=[];page.on('pageerror',e=>errors.push(e.message));
    let signed=false,offline=false,owner='test-own';
    const bundle=()=>({student:{id:owner,name:'Preview Learner',email:'test@example.test',status:'active',courses:[{id:'computer-literacy'}]},enrollments:[{item_id:'computer-literacy',access_granted:true,payment_status:'paid'}],progress:[{course_id:'computer-literacy',completed_lessons:2,total_lessons:253,pct:1}],certRequests:[],certificates:[{student_id:owner,student_name:'Preview Learner',course_id:'computer-literacy',course_title:'Computer Literacy',cert_id:'TIH-CERT-PREVIEW-TEST',issue_date:'2026-10-17',verified:true}]});
    await page.route('**/api/**',async route=>{
      const url=new URL(route.request().url()),body=route.request().postDataJSON();
      if(url.pathname==='/api/legacy-learner-preview'){signed=true;return route.fulfill({json:{ok:true}});}
      if(url.pathname==='/api/learner-preview'){
        if(!signed)return route.fulfill({status:401,json:{error:'Sign in'}});
        if(body?.action==='progress'){writes.push(body);return route.fulfill({status:offline?503:200,json:offline?{error:'Connection unavailable'}:{progress:{completed_lessons:body.completed}}});}
        return route.fulfill({json:bundle()});
      }
      return route.fulfill({status:404,json:{error:'Not found'}});
    });
    const origin='http://127.0.0.1:'+server.address().port;
    await page.goto(origin+'/hub-dashboard');await page.fill('#loginId','test-own');await page.fill('#loginPass','sample-preview-password');await page.click('#loginBtn');
    await page.waitForFunction(()=>HubDB.studentSession()?.id==='test-own');assert(await page.evaluate(()=>HubDB.hasAccess('computer-literacy')));
    await page.goto(origin+'/course-player?id=computer-literacy');await page.waitForFunction(()=>typeof lessons!=='undefined'&&lessons.length===253);
    offline=true;
    await page.evaluate(async()=>{HubDB.courseProgress=()=>({completed:3});await HubDB.pushProgressSnapshot('computer-literacy');});
    const queueKey='tih_neon_pending_progress_v1:test-own';
    assert(await page.evaluate(k=>!!localStorage.getItem(k),queueKey));
    assert((await page.locator('#tih-preview-save-status').textContent()).includes('has not synced'));
    // A fresh page must recover the queue only after server verification of its owner.
    offline=false;writes.length=0;await page.reload();await page.waitForFunction(k=>!localStorage.getItem(k),queueKey);
    assert.equal(writes.length,1);assert.equal(writes[0].completed,3);assert.equal(writes[0].expectedStudentId,'test-own');
    // Switching the browser cookie/account must never submit the previous learner's queue.
    offline=true;await page.evaluate(async()=>{HubDB.courseProgress=()=>({completed:4});await HubDB.pushProgressSnapshot('computer-literacy');});
    writes.length=0;owner='other-own';offline=false;await page.reload();await page.waitForFunction(()=>HubDB.studentSession()?.id==='other-own');
    assert.equal(writes.length,0);assert(await page.evaluate(k=>!!localStorage.getItem(k),queueKey));
    await page.goto(origin+'/my-certificates');await page.waitForFunction(()=>document.querySelector('#earnedCount')?.textContent==='1');
    assert.equal(await page.evaluate(()=>typeof downloadCert),'function');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    let submissionAttempts=0,trackingCode=null;
    await page.route('**/api/application-preview**',async route=>{
      const request=route.request(),body=request.postDataJSON();
      if(request.method()==='GET')return route.fulfill({json:{courses:{ai:{title:'AI fundamentals',total:343}}}});
      if(body.action==='submit'){
        submissionAttempts++;assert(/^[0-9a-f]{64}$/.test(body.receipt));
        if(submissionAttempts===1){trackingCode=body.receipt;return route.fulfill({status:503,json:{error:'Temporary test outage'}});}
        assert.equal(body.receipt,trackingCode);
        return route.fulfill({json:{application:{id:'TIH-PREVIEW-APP-TEST',status:'pending'},created:false,accountCreated:false}});
      }
      assert.equal(body.receipt,trackingCode);
      return route.fulfill({json:{application:{id:'TIH-PREVIEW-APP-TEST',status:'pending',status_message:'<img src=x onerror="window.injected=true">'}}});
    });
    await page.goto(origin+'/hub-apply');await page.waitForURL('**/migration-application-preview');
    await page.waitForFunction(()=>document.querySelector('#course')?.options.length===2);
    await page.fill('#name','Synthetic applicant');await page.fill('#email','synthetic@example.test');await page.selectOption('#course','ai');
    await page.click('#submit');await page.waitForFunction(()=>document.querySelector('#result')?.dataset.state==='error');
    assert.equal(await page.locator('#receipt').inputValue(),trackingCode);
    await page.click('#submit');await page.waitForFunction(()=>document.querySelector('#result')?.dataset.state==='success');
    assert(await page.locator('#application-form').isHidden());assert((await page.locator('#result').textContent()).includes('existing test application was preserved'));
    await page.click('#track');await page.waitForFunction(()=>document.querySelector('#tracking-result')?.dataset.state==='success');
    assert((await page.locator('#tracking-result').textContent()).includes('<img'));
    assert.equal(await page.evaluate(()=>window.injected),undefined);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.equal(await page.evaluate(()=>Object.keys(localStorage).some(k=>k.includes('application_receipt'))),false);
    let identityVerified=false,activationCount=0,codeRequests=0,managedSigned=false;
    const managedUser=()=>({id:'11111111-2222-4333-8444-555555555555',name:'Synthetic new learner',email:'new@example.invalid',emailVerified:identityVerified});
    await page.route('**/api/signup-preview**',async route=>{
      if(route.request().method()==='GET')return route.fulfill({json:{authUrl:'https://ep-mute-union-zaodwa48.neonauth.c-2.eu-west-2.aws.neon.tech/tih/auth'}});
      assert.deepEqual(route.request().postDataJSON(),{});
      assert(route.request().headers().authorization.startsWith('Bearer '));
      if(!identityVerified)return route.fulfill({status:403,json:{error:'Verify your email before activating a learner profile'}});
      activationCount++;return route.fulfill({json:{student:{id:'TIH-NEON-synthetic'},created:activationCount===1,accessGranted:false,paymentRecorded:false}});
    });
    await page.route('https://ep-mute-union-zaodwa48.neonauth.c-2.eu-west-2.aws.neon.tech/**',async route=>{
      const req=route.request(),url=new URL(req.url()),headers={'access-control-allow-origin':origin,'access-control-allow-credentials':'true','access-control-allow-headers':req.headers()['access-control-request-headers']||'content-type','access-control-allow-methods':'GET,POST,OPTIONS'};
      if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
      let data={};const body=req.postDataJSON();
      if(url.pathname.endsWith('/sign-up/email')||url.pathname.endsWith('/sign-in/email')){managedSigned=true;data={token:'synthetic-session',user:managedUser()};}
      else if(url.pathname.endsWith('/get-session'))data=managedSigned?{session:{id:'synthetic',token:'synthetic-session',expiresAt:'2099-01-01T00:00:00Z'},user:managedUser()}:null;
      else if(url.pathname.endsWith('/token'))data={token:'synthetic-token-kept-only-in-memory'};
      else if(url.pathname.endsWith('/email-otp/send-verification-otp')){assert.equal(body.type,'email-verification');codeRequests++;data={success:true};}
      else if(url.pathname.endsWith('/email-otp/verify-email')){identityVerified=true;data={status:true,user:managedUser()};}
      else if(url.pathname.endsWith('/sign-out')){managedSigned=false;data={success:true};}
      else throw Error('Unexpected managed auth request: '+url.pathname);
      return route.fulfill({headers,json:data});
    });
    await page.goto(origin+'/migration-signup-preview');await page.fill('#name','Synthetic new learner');await page.fill('#email','new@example.invalid');await page.fill('#password','synthetic-password-for-test');await page.click('#create');
    await page.waitForFunction(()=>document.querySelector('#result')?.textContent.includes('Identity created'));
    assert.equal(activationCount,0);assert.equal(await page.locator('#password').inputValue(),'');
    await page.click('#restore');await page.waitForFunction(()=>document.querySelector('#result')?.dataset.state==='error');assert.equal(activationCount,0);
    await page.click('#send-code');await page.waitForFunction(()=>document.querySelector('#result')?.textContent.includes('Verification code requested'));assert.equal(codeRequests,1);
    await page.fill('#otp','123456');await page.click('#verify');await page.waitForFunction(()=>document.querySelector('#result')?.textContent.includes('profile ready'));
    assert.equal(activationCount,1);assert(await page.locator('#workspace-link').isVisible());
    await page.click('#restore');await page.waitForFunction(()=>!document.querySelector('#restore')?.disabled);assert.equal(activationCount,2);
    await page.click('#sign-out');await page.waitForFunction(()=>document.querySelector('#result')?.textContent.includes('Signed out of the new test account'));assert(await page.locator('#workspace-link').isHidden());
    assert.equal(await page.evaluate(()=>Object.values(localStorage).some(v=>/synthetic-password|synthetic-token/.test(v))),false);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.deepEqual(errors,[]);console.log('Mobile preview passed: learner/application flows, new signup verification gate, activation retry, sign-out and layout (mocked auth delivery).');
  }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
