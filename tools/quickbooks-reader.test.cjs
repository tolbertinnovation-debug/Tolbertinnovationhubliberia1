/* Validate every authored QuickBooks document without network access. */
const {chromium}=require('playwright');const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});try{
const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/quickbooks.json'));
const template=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8').match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');fs.mkdirSync('test-results/quickbooks',{recursive:true});let checked=0;
const captures=['Creating an Invoice','Bank Reconciliation Step by Step','Profit and Loss Report','Bank Reconciliation Project','Payroll Records Project','Graduation Requirements'];
for(const lesson of course.modules.flatMap(m=>m.lessons).filter(l=>l.kind!=='quiz'))for(const size of [18,24]){
const title=lesson.title.replace(/^(?:\d+\.\d+ |🛠️ )/,'');await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="overview-text quickbooks-reader">'+lesson.html+'</main></body></html>');
const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,font:parseFloat(getComputedStyle(document.querySelector('.study-note p')).fontSize),text:document.querySelector('.study-note p').innerText,cells:[...document.querySelectorAll('td,th')].map(el=>({width:el.getBoundingClientRect().width,wrap:getComputedStyle(el).overflowWrap})),banner:[...document.querySelectorAll('.revision-banner span')].map(el=>({font:parseFloat(getComputedStyle(el).fontSize),white:getComputedStyle(el).whiteSpace}))}));
assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.ok(layout.font>=size*.95);assert.ok(layout.text.length>20);for(const c of layout.cells){assert.ok(c.width>=size*8-1);assert.equal(c.wrap,'normal');}for(const b of layout.banner){assert.ok(b.font>=size*.95);assert.equal(b.white,'normal');}
if(size===24&&captures.includes(title))await page.screenshot({path:'test-results/quickbooks/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});
const answer=page.locator('.study-mcq details').first();if(await answer.count()){await answer.locator('summary').click();assert.equal(await answer.getAttribute('open'),'');assert.ok((await answer.locator('p').innerText()).length>20);}checked++;
}assert.equal(checked,194);console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
