/* Read every written entry offline with the native document stylesheet. */
const {chromium}=require('playwright');const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});
 try{
  const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
  const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/human-rights-ihl.json'));
  const kotlin=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8');const template=kotlin.match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
  const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  fs.mkdirSync('test-results/human-rights-ihl',{recursive:true});let checked=0;
  const captures=['What Are Human Rights?','The Principle of Distinction','The Principle of Proportionality','Interviewing Victims and Witnesses Safely','Human Rights Monitoring Report Project','Graduation Requirements'];
  for(const lesson of course.modules.flatMap(m=>m.lessons).filter(l=>l.kind!=='quiz'))for(const size of [18,24]){
   const title=lesson.title.replace(/^(?:\d+\.\d+ |🛠️ )/,'');const nativeClass=lesson.html.includes('<strong>Human Rights and International Humanitarian Law</strong>')?'overview-text hril-reader':'overview-text';
   await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="'+nativeClass+'">'+lesson.html+'</main></body></html>');await page.evaluate(()=>scrollTo(0,0));
   const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,text:document.querySelector('.study-note p').innerText,font:parseFloat(getComputedStyle(document.querySelector('.study-note p')).fontSize),labels:[...document.querySelectorAll('.hril-learning-path strong,.hril-learning-path small')].map(el=>parseFloat(getComputedStyle(el).fontSize)),badges:[...document.querySelectorAll('.hril-reader .revision-banner span')].map(el=>({w:el.clientWidth,sw:el.scrollWidth,h:el.clientHeight,sh:el.scrollHeight})),cells:[...document.querySelectorAll('.hril-reader td,.hril-reader th')].map(el=>({width:el.getBoundingClientRect().width,wrap:getComputedStyle(el).overflowWrap}))}));
   assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.ok(layout.font>=size*.95,'Written paragraphs respect the reader setting');assert.ok(layout.text.length>15);
   for(const font of layout.labels)assert.ok(font>=size*.95,'Analysis-path labels remain at reading size');for(const badge of layout.badges)assert.ok(badge.sw<=badge.w+1&&badge.sh<=badge.h+1,'Full module badge remains visible');
   for(const cell of layout.cells){assert.ok(cell.width>=size*8-1,'Table columns remain readable');assert.equal(cell.wrap,'normal');}
   if(size===24&&captures.includes(title))await page.screenshot({path:'test-results/human-rights-ihl/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});
   const definition=page.locator('.hril-keyword').first();if(await definition.count()){await definition.locator('summary').click();assert.equal(await definition.getAttribute('open'),'');assert.ok((await definition.locator('p').innerText()).length>15);}
   checked++;
  }
  assert.equal(checked,188);console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
