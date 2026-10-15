/* Local catalogue QA. No remote services, accounts or production writes.
   NODE_PATH=<playwright modules> PM_CHROMIUM=<chromium> node tools/course-catalog-browser.test.cjs */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const base=process.env.PM_TEST_URL||'http://127.0.0.1:8099';
 assert.ok(['127.0.0.1','localhost'].includes(new URL(base).hostname));
 const browser=await chromium.launch({headless:true,executablePath:process.env.PM_CHROMIUM,args:['--no-sandbox','--disable-dev-shm-usage']});
 const context=await browser.newContext({viewport:{width:1440,height:1100},reducedMotion:'reduce'});
 await context.route('**/*',route=>{
  const url=new URL(route.request().url());if(url.origin!==new URL(base).origin)return route.abort();
  if(route.request().resourceType()==='document'&&url.pathname==='/learning-hub'){url.pathname+='.html';return route.continue({url:url.href});}
  return route.continue();
 });
 const page=await context.newPage(),errors=[],missing=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.status()+' '+r.url());});
 const shown=()=>page.locator('#tracksGrid .lt-card:visible');
 const ids=()=>shown().evaluateAll(cards=>cards.map(c=>c.dataset.course));
 const reset=async()=>{if(await page.locator('#trackReset').isEnabled())await page.locator('#trackReset').click();};
 async function allVisiblePages(){
  const found=[];
  for(let n=0;n<10;n++){
   found.push(...await ids());const next=page.getByRole('button',{name:'Next page',exact:true});
   if(!(await next.isVisible())||await next.isDisabled())break;await next.click();
  }
  return found;
 }
 try{
  await page.goto(base+'/learning-hub.html');await page.waitForSelector('#tracksGrid .lt-card');
  assert.equal(await page.locator('#tracksGrid .lt-card').count(),34);assert.equal(await shown().count(),12);
  assert.match(await page.locator('#trackResults').innerText(),/1–12 of 34/);
  assert.equal(await page.locator('[data-course-total]').first().innerText(),'34');
  // Compare public fees to the actual payment data layer, including premium exceptions.
  await page.addScriptTag({url:base+'/hub-db.js'});
  const model=await page.evaluate(()=>Object.fromEntries(Object.entries(COURSES_DB).map(([id,c])=>[id,{title:c.title.replace(/^Complete\s+/i,''),price:HubDB.priceFor(id),hours:parseFloat(c.duration)||0,lessons:c.modules.reduce((sum,m)=>sum+m.lessons.length,0)}])));
  for(const [id,c]of Object.entries(model)){
   const card=page.locator('#tracksGrid .lt-card[data-course="'+id+'"]');
   assert.equal(await card.locator('.lt-title').textContent(),c.title);
   assert.ok((await card.locator('.lt-price').textContent()).startsWith('US$'+c.price+'registration'));
   assert.equal(await card.locator('s').count(),0);
   assert.equal(await card.getAttribute('href'),(id==='liberian-law'||id==='advanced-liberian-law')?id:'course-player?id='+id);
  }
  // Search tokens work in any order and include descriptions, not just course names.
  await page.getByLabel('What would you like to learn?').fill('SCHOOL law');
  assert.deepEqual(await ids(),['liberian-law']);assert.match(await shown().innerText(),/Complete Liberian Law|Liberian Law Programme/);
  await page.reload();assert.equal(await page.locator('#trackSearch').inputValue(),'SCHOOL law');assert.deepEqual(await ids(),['liberian-law']);
  await page.locator('#trackSearch').fill('eXcEl data');assert.ok((await ids()).includes('data'));
  await page.locator('#trackSearch').fill('AI');assert.ok((await ids()).includes('ai'));
  assert.ok(!(await ids()).includes('football-coaching'),'Short acronym searches must not match letters inside unrelated words');
  await page.getByRole('button',{name:'Clear search',exact:true}).click();assert.equal(await shown().count(),12);
  await page.locator('#trackFilters [data-cat="law"]').click();assert.equal(await shown().count(),5);
  assert.equal(await page.locator('#trackFilters [data-cat="law"]').getAttribute('aria-pressed'),'true');
  await page.locator('#trackFee').selectOption('premium');assert.deepEqual(await ids(),['liberian-law','advanced-liberian-law']);await reset();
  assert.equal(await shown().count(),12);assert.equal(await page.locator('#trackSearch').inputValue(),'');
  await page.locator('#trackFee').selectOption('premium');await page.locator('#trackSort').selectOption('price');
  assert.deepEqual(await ids(),['ielts','advanced-liberian-law','ph-career','liberian-law']);
  await reset();await page.locator('#trackSort').selectOption('price');
  const feeOrder=await allVisiblePages();assert.equal(feeOrder.length,34);assert.equal(new Set(feeOrder).size,34);
  assert.deepEqual(feeOrder.map(id=>model[id].price),feeOrder.map(id=>model[id].price).sort((a,b)=>a-b));
  await page.locator('#trackTime').selectOption('short');
  const short=await allVisiblePages();assert.deepEqual([...short].sort(),Object.keys(model).filter(id=>model[id].hours>0&&model[id].hours<100).sort());
  await reset();await page.locator('#trackSort').selectOption('lessons');
  const lessons=await allVisiblePages();assert.deepEqual(lessons.map(id=>model[id].lessons),lessons.map(id=>model[id].lessons).sort((a,b)=>b-a));
  await reset();await page.locator('#trackSort').selectOption('title');
  const alphabet=await allVisiblePages();assert.deepEqual(alphabet.map(id=>model[id].title),alphabet.map(id=>model[id].title).sort((a,b)=>a.localeCompare(b)));
  await reset();await page.locator('#trackSearch').fill('<img src=x onerror=alert(1)>');assert.equal(await shown().count(),0);assert.equal(await page.locator('#trackSearchEmpty img').count(),0);
  await reset();await page.locator('#trackFilters [data-cat="law"]').click();await page.locator('[data-catalog-view="list"]').click();
  assert.equal(await page.locator('#tracksGrid').getAttribute('data-view'),'list');
  await page.goBack();assert.equal(await page.locator('#tracksGrid').getAttribute('data-view'),'grid');assert.equal(await shown().count(),5);
  await page.goForward();assert.equal(await page.locator('#tracksGrid').getAttribute('data-view'),'list');
  await page.reload();assert.equal(await page.locator('#tracksGrid').getAttribute('data-view'),'list');assert.equal(await shown().count(),5);
  await page.goto(base+'/learning-hub.html?category=unknown&fee=zero&sort=fake&view=broken&page=999&utm_source=qa');
  await page.waitForSelector('#tracksGrid .lt-card:visible');assert.equal(await shown().count(),10);assert.match(await page.locator('#trackResults').innerText(),/25–34 of 34/);
  assert.equal(new URL(page.url()).searchParams.get('utm_source'),'qa');
  assert.equal(new URL(page.url()).searchParams.has('category'),false);
  // Keep both display modes usable at the narrowest supported phone width.
  await page.locator('[data-catalog-view="grid"]').click();await page.getByRole('button',{name:'Page 1',exact:true}).click();
  fs.mkdirSync('/tmp/tih-catalog-qa',{recursive:true});
  for(const width of [320,390,768,1110,1440]){
   await page.setViewportSize({width,height:1000});
   if(width>1100)assert.equal(await page.evaluate(()=>document.querySelector('.hub-brand').getBoundingClientRect().right+8<document.getElementById('hubNav').getBoundingClientRect().left),true,'Header brand must not overlap navigation');
   for(const view of ['grid','list']){
    await page.locator('[data-catalog-view="'+view+'"]').click();
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,width+'px '+view+' must not overflow');
    const buttons=await page.locator('#tracks button:visible').evaluateAll(bs=>bs.map(b=>({text:b.textContent,height:b.getBoundingClientRect().height})));
    assert.ok(buttons.every(b=>b.height>=38));
   }
  }
  await page.setViewportSize({width:390,height:1000});await page.locator('#hubMenuBtn').click();
  assert.equal(await page.locator('#hubMenuBtn').getAttribute('aria-expanded'),'true');
  await page.keyboard.press('Escape');assert.equal(await page.locator('#hubMenuBtn').getAttribute('aria-expanded'),'false');
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-catalog-view="grid"]').click();await page.locator('#tracks').scrollIntoViewIfNeeded();
  await page.evaluate(()=>document.getElementById('tracks').scrollIntoView());
  await page.screenshot({path:'/tmp/tih-catalog-qa/desktop-catalogue.png'});
  await page.locator('#trackSearch').fill('law');await page.locator('[data-catalog-view="list"]').click();
  await page.evaluate(()=>document.getElementById('trackResults').scrollIntoView());
  await page.screenshot({path:'/tmp/tih-catalog-qa/desktop-list.png'});
  await reset();await page.setViewportSize({width:390,height:1000});await page.locator('[data-catalog-view="grid"]').click();
  await page.evaluate(()=>document.getElementById('tracks').scrollIntoView());await page.screenshot({path:'/tmp/tih-catalog-qa/mobile-controls.png'});
  await shown().first().scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/tih-catalog-qa/mobile-cards.png'});
  // Missing external cover art has an intentional local fallback.
  assert.equal(await page.locator('#tracksGrid img').evaluateAll(imgs=>imgs.every(img=>!img.complete||img.naturalWidth>0||img.hidden)),true);
  assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
  console.log(JSON.stringify({courses:34,feesMatchPayment:true,search:true,filters:true,sorting:true,pagination:true,urlAndHistory:true,responsiveWidths:[320,390,768,1110,1440],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
