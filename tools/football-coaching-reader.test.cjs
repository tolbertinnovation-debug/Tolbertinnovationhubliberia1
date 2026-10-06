/* Browser layout check using the native reader's CSS, with network disabled. */
const {chromium}=require('playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});
 try{
  const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
  const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/football-coaching.json'));
  const kotlin=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8');
  const template=kotlin.match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
  const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  fs.mkdirSync('test-results/football-coaching',{recursive:true});
  let checked=0;
  for(const title of ['Offside Explained','Principles of Session Planning','Safeguarding Children in Sport','Concussion Awareness','Training Session Plan Project','Graduation Requirements'])for(const size of [18,24]){
   const lesson=course.modules.flatMap(m=>m.lessons).find(l=>l.kind!=='quiz'&&l.title.replace(/^(?:\d+\.\d+ |🛠️ )/,'')===title);assert.ok(lesson,title);
   await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="overview-text football-reader">'+lesson.html+'</main></body></html>');
   const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,text:document.querySelector('main .study-note p').innerText,font:parseFloat(getComputedStyle(document.querySelector('main .study-note p')).fontSize),badges:[...document.querySelectorAll('.revision-banner span')].map(el=>({width:el.clientWidth,contentWidth:el.scrollWidth,height:el.clientHeight,contentHeight:el.scrollHeight,whiteSpace:getComputedStyle(el).whiteSpace})),tables:[...document.querySelectorAll('.table-wrap')].map(el=>({width:el.clientWidth,contentWidth:el.scrollWidth})),cells:[...document.querySelectorAll('td,th')].map(el=>({width:el.getBoundingClientRect().width,wrap:getComputedStyle(el).overflowWrap}))}));
   assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.ok(layout.font>=size*.95,'Teaching paragraphs respect the selected reader setting');assert.ok(layout.text.length>20);
   assert.ok(layout.badges.length>0);for(const badge of layout.badges){assert.ok(badge.contentWidth<=badge.width+1&&badge.contentHeight<=badge.height+1,JSON.stringify({title,size,badge}));assert.equal(badge.whiteSpace,'normal');}
   for(const cell of layout.cells){assert.ok(cell.width>=size*8-1,JSON.stringify({title,size,cell}));assert.equal(cell.wrap,'normal');}
   if(layout.tables.length)assert.ok(layout.tables.some(t=>t.contentWidth>t.width),'Wide lesson tables scroll inside their reader container');
   if(size===24){await page.screenshot({path:'test-results/football-coaching/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});if(await page.locator('figure').count())await page.locator('figure').first().screenshot({path:'test-results/football-coaching/figure-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});}
   checked++;
  }
  console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
