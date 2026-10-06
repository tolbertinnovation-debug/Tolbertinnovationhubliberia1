/* Check every written Business Plan lesson and project at phone reading sizes. */
const {chromium}=require('playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});
 try{
  const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
  const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/business-plan.json'));
  const kotlin=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8');
  const template=kotlin.match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
  const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  fs.mkdirSync('test-results/business-plan',{recursive:true});let checked=0;
  const captures=['What Is a Business Plan?','Market Size: TAM, SAM and SOM','Financial Projections, Cash Flow and Break-Even','Company Foundation Pack','Three-Year Financial Workbook','Investor-Ready Business Plan and Pitch'];
  for(const lesson of course.modules.flatMap(m=>m.lessons).filter(l=>l.kind!=='quiz'))for(const size of [18,24]){
   const title=lesson.title.replace(/^(?:\d+\.\d+ |🛠️ )/,'');
   await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="overview-text">'+lesson.html+'</main></body></html>');
   const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,text:document.querySelector('.bp-note h3 + p').innerText,font:parseFloat(getComputedStyle(document.querySelector('.bp-note h3 + p')).fontSize),labels:[...document.querySelectorAll('.bp-visual-grid strong')].map(el=>parseFloat(getComputedStyle(el).fontSize)),cells:[...document.querySelectorAll('td,th')].map(el=>({width:el.getBoundingClientRect().width,wrap:getComputedStyle(el).overflowWrap}))}));
   assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.ok(layout.font>=size*.95,'Teaching paragraphs respect the reader font setting');assert.ok(layout.text.length>20);
   for(const font of layout.labels)assert.ok(font>=size*.95,'Planning visual labels remain at reading size');
   for(const cell of layout.cells){assert.ok(cell.width>=size*8-1,'Tables retain readable columns');assert.equal(cell.wrap,'normal');}
   if(size===24&&captures.includes(title))await page.screenshot({path:'test-results/business-plan/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});
   if(lesson.kind==='lesson'){
    assert.equal(await page.locator('.bp-visual-grid>div').count(),2);
    const definition=page.locator('.bp-keywords details').first();await definition.locator('summary').click();assert.equal(await definition.getAttribute('open'),'');assert.ok((await definition.locator('p').innerText()).length>15);
    const explanation=page.locator('.bp-mcq details').first();await explanation.locator('summary').click();assert.equal(await explanation.getAttribute('open'),'');assert.ok((await explanation.locator('p').innerText()).length>20);
   }
   checked++;
  }
  assert.equal(checked,70);console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
