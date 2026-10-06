/* Browser layout check using the native reader's CSS, with network disabled. */
const {chromium}=require('playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM}:{})});
 try{
  const page=await browser.newPage({viewport:{width:360,height:800}});await page.route('**/*',r=>r.abort());
  const course=JSON.parse(fs.readFileSync('android-app/app/src/main/assets/learning/courses/ielts.json'));
  const kotlin=fs.readFileSync('android-app/app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonDocument.kt','utf8');
  const template=kotlin.match(/<style>\$safeCss([\s\S]*?)<\/style>/)[1];
  const css=course.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  fs.mkdirSync('test-results/ielts',{recursive:true});
  let checked=0;
  for(const title of ['Line Graphs','Bar Charts','Pie Charts','Tables','Process Diagrams','Maps','True/False/Not Given'])for(const size of [18,24]){
   const lesson=course.modules.flatMap(m=>m.lessons).find(l=>l.kind==='lesson'&&l.title.replace(/^\d+\.\d+ /,'')===title);assert.ok(lesson,title);
   await page.setContent('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+template.replaceAll('${size}',size)+'</style></head><body><main class="overview-text">'+lesson.html+'</main></body></html>');
   const layout=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,text:document.querySelector('p').innerText,font:parseFloat(getComputedStyle(document.querySelector('p')).fontSize),cells:[...document.querySelectorAll('td')].map(el=>parseFloat(getComputedStyle(el).fontSize)),numericLines:[...document.querySelectorAll('.ielts-data td')].filter(el=>/^\d+(%|)$/.test(el.textContent)).map(el=>{const range=document.createRange();range.selectNodeContents(el);return range.getClientRects().length;})}));
   assert.ok(layout.width<=layout.viewport+1,JSON.stringify({title,size,...layout}));assert.equal(layout.font,size);assert.ok(layout.numericLines.every(n=>n===1),title+' numeric values must stay on one line');assert.ok(layout.cells.every(v=>v===size));assert.ok(layout.text.length>20);
   if(size===24){await page.screenshot({path:'test-results/ielts/reader-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});if(await page.locator('figure').count())await page.locator('figure').first().screenshot({path:'test-results/ielts/figure-'+title.toLowerCase().replace(/[^a-z]+/g,'-')+'.png'});}
   checked++;
  }
  console.log(JSON.stringify({readerLayouts:checked,width:360,fontSizes:[18,24],passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
