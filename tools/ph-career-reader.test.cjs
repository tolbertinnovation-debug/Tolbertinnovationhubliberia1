/* Offline phone reading with the CSS shipped by the Android document renderer. */
const {chromium}=require('playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});
 try{
  const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
  const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/ph-career.json'));
  const kotlin=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8');
  const template=kotlin.match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
  const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  fs.mkdirSync('test-results/ph-career',{recursive:true});let checked=0;
  for(const title of ['Writing a Public Health CV','Behavioral (STAR) Interviews','Professional Ethics and Integrity','Monitoring and Evaluation (M&E)','Career Portfolio Project','Mock Interview Simulation'])for(const size of [18,24]){
   const lesson=course.modules.flatMap(m=>m.lessons).find(l=>l.kind!=='quiz'&&l.title.endsWith(title));assert.ok(lesson,title);
   await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="overview-text">'+lesson.html+'</main></body></html>');
   const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,text:document.querySelector('main > p').innerText,font:parseFloat(getComputedStyle(document.querySelector('main > p')).fontSize),labels:[...document.querySelectorAll('.ph-visual .cl-visual-item strong,.ph-visual .cl-visual-item span')].map(el=>parseFloat(getComputedStyle(el).fontSize))}));
   assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.ok(layout.font>=size*.95,'Teaching paragraphs respect the reader font setting');assert.ok(layout.text.length>30);
   for(const font of layout.labels)assert.ok(Math.abs(font-size)<.01,'Career diagram labels retain reading size');
   if(lesson.kind==='lesson'){
    const definition=page.locator('details.lesson-keyword').first();assert.ok(await definition.count());await definition.locator('summary').click();assert.equal(await definition.getAttribute('open'),'');assert.ok((await definition.locator('p').innerText()).length>20);
   }
   if(size===24)await page.screenshot({path:'test-results/ph-career/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});checked++;
  }
  console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
