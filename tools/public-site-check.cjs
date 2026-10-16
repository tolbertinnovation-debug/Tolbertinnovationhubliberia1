// Run with Playwright installed: NODE_PATH=/path/to/node_modules node tools/public-site-check.cjs
// Optional: TIH_BROWSER_EXECUTABLE and TIH_CHROMIUM_PACKAGE for a managed browser runtime.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const pages = ['index','services','resources','about','contact','process','projects','events','learning-hub','fully-funded-scholarship','grants','software','study-abroad','healthcare','apply','business-intake','faq','donate','libapps','volunteer','leadership','impact','grandpa-ai','library','news','partner-with-us','404'];
const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
(async () => {
  const server = http.createServer((req, res) => {
    let route = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (route === '/') route = '/index.html';
    let file = path.resolve(root, '.' + route);
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if (!path.extname(file)) file += '.html';
    try { res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream'); res.end(fs.readFileSync(file)); }
    catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const args = process.env.TIH_CHROMIUM_PACKAGE ? require(process.env.TIH_CHROMIUM_PACKAGE).default.args : ['--no-sandbox'];
  const browser = await chromium.launch({headless:true, executablePath:process.env.TIH_BROWSER_EXECUTABLE || undefined,args});
  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(12000);
    let formOutcome = 'success', submissions = 0;
    await page.route('**/*', route => {
      const url = route.request().url();
      if (url.startsWith('https://formsubmit.co/')) {
        submissions++;
        return route.fulfill({status:formOutcome === 'success' ? 200 : 500,contentType:'application/json',body:JSON.stringify({success:formOutcome === 'success'})});
      }
      return url.startsWith(base + '/') && !/\.(mp3|mp4)(\?|$)/.test(url) ? route.continue() : route.abort();
    });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const name of pages) {
      await page.setViewportSize({width:390,height:844});
      await page.goto(base + '/' + name + '.html', {waitUntil:'domcontentloaded'});
      await page.evaluate(() => { try { localStorage.setItem('tih_cookie_consent','declined'); } catch {} });
      const title = page.locator('h1').first();
      assert(await title.isVisible(), name + ': missing visible page title');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ': mobile overflow');
      if (['process','projects'].includes(name)) {
        const layout = await page.evaluate(() => ({title:document.querySelector('h1').getBoundingClientRect().top,hero:document.querySelector('.page-hero').getBoundingClientRect().height,decorations:[...document.querySelectorAll('.page-hero > .hero-net,.page-hero > .hero-fx')].map(e=>getComputedStyle(e).position)}));
        assert(layout.title < 600, name + ': title pushed below viewport');
        assert(layout.hero < 900, name + ': decoration inflates hero');
        assert(layout.decorations.every(p => p === 'absolute'), name + ': decoration in document flow');
      }
      await page.setViewportSize({width:1440,height:900});
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ': desktop overflow');
      console.log('PASS public page mobile/desktop:', name);
    }
    assert.deepEqual(errors, [], 'Uncaught page errors');
    await page.goto(base+'/resources',{waitUntil:'domcontentloaded'});
    assert.equal(await page.locator('.resource-card:visible').count(),28);
    await page.fill('#resource-search','church');
    assert((await page.locator('.resource-card:visible').count()) > 0);
    await page.fill('#resource-search','zznomatch');
    assert(await page.locator('#resource-empty').isVisible());
    await page.click('#resource-reset');
    await page.selectOption('#resource-category','funding');
    assert.equal(await page.locator('.resource-card:visible').count(),9);
    await page.click('#resource-reset');
    assert.equal(await page.locator('.resource-card:visible').count(),28);
    // Each funding deep link must use a real filter and reach matching cards.
    const fundingLinks = await page.locator('.resource-card a[href^="grants?"]').evaluateAll(els=>els.map(e=>e.getAttribute('href')));
    for (const href of fundingLinks) {
      await page.goto(base+'/'+href,{waitUntil:'domcontentloaded'});
      const category=new URL(href,base).searchParams.get('category');
      assert(await page.locator('.filter-btn[data-filter="'+category+'"]').count(),href+': invalid category');
      assert((await page.locator('.grant-card:visible').count())>0,href+': empty category');
    }
    await page.goto(base+'/faq',{waitUntil:'domcontentloaded'});
    const questions = await page.locator('.faq-item:visible').count();
    await page.fill('#faq-search','Grandpa AI');
    assert((await page.locator('.faq-item:visible').count())>0);
    await page.locator('.faq-item:visible summary').first().click();
    assert(await page.locator('.faq-item:visible[open]').count());
    await page.fill('#faq-search','zznomatch');assert(await page.locator('#faq-empty').isVisible());
    await page.click('#faq-reset');assert.equal(await page.locator('.faq-item:visible').count(),questions);
    // Confirm mobile menu and chat keyboard behavior without sending a chat message.
    await page.setViewportSize({width:390,height:844});
    await page.locator('.menu-toggle').click();
    assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
    assert(await page.locator('.nav-links a[href="resources"]').isVisible());
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
    assert.equal(await page.locator('#tih-chat-win').getAttribute('aria-hidden'),'true');
    await page.click('#tih-chat-btn');
    assert.equal(await page.locator('#tih-chat-btn').getAttribute('aria-expanded'),'true');
    await page.locator('#tih-inp').focus();await page.keyboard.press('Escape');
    assert.equal(await page.locator('#tih-chat-btn').getAttribute('aria-expanded'),'false');
    assert.equal(await page.evaluate(()=>document.activeElement.id),'tih-chat-btn');
    // All email requests are intercepted above: exercise both success and failure.
    await page.goto(base+'/contact',{waitUntil:'domcontentloaded'});
    for (const outcome of ['success','failure']) {
      formOutcome=outcome;
      await page.fill('#contact-name','Site verification');await page.fill('#contact-email','test@example.com');
      await page.selectOption('#contact-subject','general');await page.fill('#contact-message','Local verification only.');
      await page.locator('form.form-card button[type="submit"]').click();
      const feedback=page.locator('form.form-card .form-feedback');
      await feedback.waitFor({state:'visible'});
      if(outcome==='success')assert((await feedback.innerText()).includes('Thank you'));
      else {assert((await feedback.innerText()).includes('could not be sent'));assert.equal(await page.locator('#contact-message').inputValue(),'Local verification only.');}
    }
    assert.equal(submissions,2);
    await page.evaluate(()=>localStorage.removeItem('tih_cookie_consent'));
    await page.goto(base+'/services',{waitUntil:'domcontentloaded'});
    assert.equal(await page.locator('#tih-chat-btn').evaluate(e=>getComputedStyle(e).visibility),'hidden');
    await page.click('#cookieReject');
    assert.equal(await page.locator('#tih-chat-btn').evaluate(e=>getComputedStyle(e).visibility),'visible');
    await page.evaluate(()=>scrollTo(0,1000));await page.waitForTimeout(400);
    const audio=await page.locator('.tih-audio-ctl').boundingBox(),top=await page.locator('#back-to-top').boundingBox();
    if(audio&&top) assert(top.y+top.height<=audio.y,'Audio and back-to-top overlap');
    await page.goto(base+'/resources',{waitUntil:'domcontentloaded'});
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:'/tmp/tih-resources-mobile.png'});
    console.log('PASS discovery filters, funding links, FAQ, mobile menu, chat keyboard, consent controls, mocked form outcomes');
    const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});
    await nojs.route('**/*',r=>r.request().url().startsWith(base+'/')?r.continue():r.abort());
    await nojs.goto(base+'/resources',{waitUntil:'domcontentloaded'});
    assert.equal(await nojs.locator('.resource-card:visible').count(),28);
    await nojs.goto(base+'/about',{waitUntil:'domcontentloaded'});
    assert.equal(await nojs.locator('.reveal').first().evaluate(e=>getComputedStyle(e).opacity),'1');
    console.log('PASS directory and reveal content with JavaScript disabled');
    const limited=await browser.newPage({viewport:{width:390,height:844}});
    await limited.route('**/*',r=>r.request().url().startsWith(base+'/')&&!/\.(mp3|mp4)(\?|$)/.test(r.request().url())?r.continue():r.abort());
    await limited.addInitScript(()=>{delete window.IntersectionObserver;Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Storage unavailable','SecurityError');}});});
    await limited.goto(base+'/services',{waitUntil:'domcontentloaded'});
    await limited.locator('.menu-toggle').click();assert.equal(await limited.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
    await limited.keyboard.press('Escape');await limited.click('.dark-mode-toggle');
    assert.equal(await limited.evaluate(()=>document.documentElement.getAttribute('data-theme')),'dark');
    await limited.click('#cookieReject');assert.equal(await limited.locator('body').evaluate(e=>e.classList.contains('consent-open')),false);
    assert.equal(await limited.locator('#service-grid > article:visible').count(),16);
    console.log('PASS navigation, theme and consent without storage or IntersectionObserver');

  } finally { await browser.close();server.close(); }
})().catch(e=>{console.error(e);process.exit(1)});
