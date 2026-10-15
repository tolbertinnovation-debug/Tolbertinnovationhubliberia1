import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const ctx={COURSES_DB:{}};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['courses-db.js','advanced-liberian-law-topic-quizzes.js','advanced-liberian-law-curriculum.js','advanced-liberian-law-notes.js','advanced-liberian-law-video-map.js','liberian-law-curriculum.js'])vm.runInContext(read(f),ctx);
const id='advanced-liberian-law',c=ctx.COURSES_DB[id];
test('Advanced course delivers all 26 subjects as a separate, complete research programme',()=>{
 assert.equal(c.id,id);assert.equal(c.price,'$100');assert.equal(c.modules.length,27);
 const steps=c.modules.flatMap(m=>m.lessons);assert.equal(steps.length,140);
 const taught=steps.filter(s=>!s.isQuiz&&!s.isProject),projects=steps.filter(s=>s.isProject);
 assert.equal(taught.length,52);assert.equal(projects.length,8);assert.equal(new Set(taught.map(l=>l.v)).size,52);
 assert.equal(c.modules[20].title,'Module 21: Equity and Trusts');assert.equal(c.modules[22].title,'Module 23: Banking and Financial Law');
 assert.equal(ctx.COURSES_DB['liberian-law'].modules.length,42);assert.equal(ctx.COURSES_DB['liberian-law'].price,'$100');
 assert.ok(c.about.join(' ').includes('not a Master of Laws'));assert.ok(c.about.join(' ').includes('self-recorded'));
 const plan=JSON.parse(read('content/advanced-liberian-law-study-plan.json'));assert.equal(plan.subjectBlocks.reduce((n,m)=>n+m.estimatedHours,0)+plan.capstoneHours,240);
 assert.equal(plan.weeks*plan.hoursPerWeek,240);assert.equal(plan.projects.length,8);
});
test('Every taught note, video override and first-use assessment matches its subject',()=>{
 const notes=ctx.TIH_LESSON_NOTES[id],pins=ctx.TIH_TOPIC_VIDEOS[id];assert.equal(Object.keys(notes).length,60);
 for(const [i,m]of c.modules.entries())for(const step of m.lessons){
  if(step.isQuiz){assert.equal(c.quizzes[step.quizId].moduleNum,i+1);continue;}
  const key='M'+(i+1)+':'+step.t.replace(/^\d+\.\d+\s+/,'');assert.ok(notes[key],key);
  if(step.isProject){assert.ok(notes[key].includes('Assessment rubric'));continue;}
  assert.equal(pins[key],step.v);const text=notes[key];
  for(const heading of ['LESSON NOTE:','Learning objectives','1. Introduction','2. Meaning','3. Teaching','4. Worked','5. Primary','6. Answering','Summary','Key Terms','Review Questions','Class Activity','Assignment'])assert.ok(text.includes(heading),key+' '+heading);
  assert.ok(text.includes('Source review: 15 October 2026.'));assert.ok(text.includes('Independent TIH education'));
  assert.ok(text.replace(/<[^>]*>/g,' ').split(/\s+/).length>600,key+' must include substantial teaching and activities');
  assert.equal(ctx.TIH_TOPIC_QUIZZES[id][key].length,3);assert.equal(ctx.TIH_RESERVED_QUIZZES[id][key].length,1);
 }
 const manifest=JSON.parse(read('content/advanced-liberian-law-sources.json'));
 assert.equal(manifest.videos.length,52);assert.equal(new Set(manifest.videos.map(v=>v.url)).size,52);
 assert.ok(manifest.videos.every(v=>v.title&&v.channel&&v.metadataChecked),'Every pin must retain checked metadata');
 assert.equal(Object.keys(manifest.linkChecks).length,Object.keys(manifest.sources).length);
 for(const [key,check]of Object.entries(manifest.linkChecks)){assert.equal(check.httpStatus,200);assert.equal(check.url,manifest.sources[key][1]);}
 assert.ok(manifest.sources.banking[1].includes('cbl.org.lr'));assert.ok(manifest.sources.ul[1].includes('ul.edu.lr'));
});
test('All 273 delivered questions are distinct and the comprehensive final covers every subject',()=>{
 const quizzes=Object.values(c.quizzes),qs=quizzes.flatMap(q=>q.questions);assert.equal(quizzes.length,80);assert.equal(qs.length,273);
 assert.equal(new Set(qs.map(q=>q.q.toLowerCase())).size,273);assert.equal(new Set(quizzes.map(q=>q.id)).size,80);
 for(const q of qs){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.exp.length>25);}
 for(let n=1;n<=26;n++)assert.equal(c.quizzes['als-final'].questions.filter(q=>q.sourceModule===n).length,2);
 assert.equal(c.quizzes['als-midterm'].questions.length,13);assert.deepEqual(Array.from(c.quizzes['als-midterm'].questions,q=>q.sourceModule),Array.from({length:13},(_,i)=>i+1));
 assert.deepEqual(quizzes.filter(q=>q.isFinal).map(q=>q.id),['als-final']);
 const foundation=new Set(Object.values(ctx.COURSES_DB['liberian-law'].quizzes).flatMap(q=>q.questions.map(x=>x.q.toLowerCase())));
 assert.ok(qs.every(q=>!foundation.has(q.q.toLowerCase())),'The new programme must not recycle delivered foundation questions');
});
test('Weekly plan covers the complete course in order and places every portfolio checkpoint once',()=>{
 const plan=JSON.parse(read('content/advanced-liberian-law-study-plan.json')),weeks=plan.weeklySchedule;
 assert.equal(weeks.length,40);assert.deepEqual(weeks.map(w=>w.week),Array.from({length:40},(_,i)=>i+1));
 const hours={};let previous=0;const completed=new Set();const checkpoints=[];
 for(const week of weeks){
  assert.equal(week.hours,6);assert.equal(week.allocations.reduce((n,a)=>n+a.hours,0),6);
  for(const a of week.allocations){assert.ok(a.module>=previous);previous=a.module;hours[a.module]=(hours[a.module]||0)+a.hours;if(a.finishes)completed.add(a.module);}
  for(const m of week.milestones){
   if(m.kind==='portfolio'){checkpoints.push(m.number);assert.ok(m.number>=7||completed.has(plan.projects[m.number-1].module));}
   if(m.kind==='exam'&&m.anchor==='subject-13')assert.ok(completed.has(13));
   if(m.kind==='exam'&&m.anchor==='capstone')assert.equal(completed.size,27);
  }
 }
 assert.deepEqual(checkpoints,[1,2,3,4,5,6,7,8]);
 for(let n=1;n<=26;n++)assert.equal(hours[n],8);assert.equal(hours[27],32);
 const html=read('advanced-liberian-law.html');assert.equal((html.match(/class="study-week"/g)||[]).length,40);
 for(const anchor of ['study-plan','capstone',...Array.from({length:26},(_,i)=>'subject-'+(i+1)),...Array.from({length:8},(_,i)=>'portfolio-'+(i+1))])assert.ok(html.includes('id="'+anchor+'"'),anchor);
});
