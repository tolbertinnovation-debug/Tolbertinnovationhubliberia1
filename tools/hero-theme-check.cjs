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
    const names=['index','about','contact','study-abroad','healthcare','leadership','resources','services','events','grants','fully-funded-scholarship','software','apply','business-intake','faq','donate','volunteer','impact','grandpa-ai','partner-with-us','projects','process','news','success-stories'];
    await page.addInitScript(()=>{localStorage.setItem('tih_cookie_consent','declined');localStorage.setItem('tih_audio_muted','1');});
    for(const width of [390,1440]){
      await page.setViewportSize({width,height:1000});
      for(const name of names){
        await page.goto(base+'/'+name,{waitUntil:'domcontentloaded'});
        const hero=page.locator('.tih-hero-light,.tih-hero-red');assert.equal(await hero.count(),1,name);
        const details=await hero.evaluate(el=>{const title=el.querySelector('h1');const style=getComputedStyle(el);return {background:style.backgroundImage,color:getComputedStyle(title).color,opacity:getComputedStyle(title).opacity,after:getComputedStyle(el,'::after').position,height:el.offsetHeight,titleY:title.getBoundingClientRect().top,red:el.classList.contains('tih-hero-red')};});
        assert(details.background.includes('gradient'),name+': missing banner background');assert.equal(details.after,'absolute');assert.equal(details.opacity,'1');
        assert.equal(details.color,details.red?'rgb(255, 255, 255)':'rgb(11, 31, 58)',name+': title contrast');
        assert(details.titleY<700,name+': title pushed out of view');
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),name+': overflow '+width);
        const primary=hero.locator('.btn-primary').first();if(await primary.count()){
          const colors=await primary.evaluate(e=>({text:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));assert.notEqual(colors.text,colors.background,name+': invisible button');
        }
        if(['index','services','grandpa-ai'].includes(name))await page.screenshot({path:'/tmp/tih-hero-'+name+'-'+width+'.png'});
      }
      console.log('PASS: 24 hero designs, readable headings/buttons, decorative waves and no overflow at',width);
    }
    await page.goto(base+'/',{waitUntil:'domcontentloaded'});
    assert.equal(await page.locator('[data-hero-title].is-active').count(),1);
    assert((await page.locator('[data-hero-title].is-active').innerText()).startsWith('Welcome to'));
    assert.equal(await page.locator('.hero-rotating-title .hm-red').first().evaluate(e=>getComputedStyle(e).color),'rgb(206, 21, 40)');
    await page.waitForTimeout(10500);assert(!(await page.locator('[data-hero-title].is-active').innerText()).startsWith('Welcome to'));
    console.log('PASS: Welcome remains first and rotation still runs at 10 seconds');
  } finally {await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exit(1)});
