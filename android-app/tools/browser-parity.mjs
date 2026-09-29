// Run with Playwright installed: node android-app/tools/browser-parity.mjs
// Uses real browser execution of the existing loaders; never contacts production.
import {createRequire} from 'node:module';
import {createServer} from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {root, lookup} from './export-learning.mjs';
const require = createRequire(import.meta.url);
const {chromium} = require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES ? process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + '/playwright' : 'playwright');
const fixture = `<!doctype html><base href="/"><script src="courses-db.js"></script><script src="tih-course-loader.js"></script><script>
const cid = new URLSearchParams(location.search).get('id');
TihCourseLoader.ensure(cid, () => {
  function load(src) { return new Promise((ok, fail) => { const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=fail;document.head.appendChild(s); }); }
  Promise.all(['tih-notes-runtime.js','tih-video-runtime.js','tih-authored-notes.js'].map(load)).then(()=>window.fixtureReady=true);
});</script>`;
const server = createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (pathname === '/fixture') { res.setHeader('Content-Type','text/html'); res.end(fixture); return; }
  const local = path.resolve(root, '.' + pathname);
  if (!local.startsWith(root + path.sep) || !fs.existsSync(local) || !fs.statSync(local).isFile()) { res.statusCode=404;res.end();return; }
  res.setHeader('Content-Type', pathname.endsWith('.js') ? 'text/javascript' : 'text/plain'); fs.createReadStream(local).pipe(res);
});
await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
const browser = await chromium.launch({headless:true});
try {
  const page=await browser.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const catalog=JSON.parse(fs.readFileSync(path.join(root,'android-app/app/src/main/assets/learning/catalog.json')));
  for(const summary of catalog) {
    await page.goto(`http://127.0.0.1:${server.address().port}/fixture?id=${summary.id}`);
    await page.waitForFunction(()=>window.fixtureReady===true);
    await page.waitForFunction(()=>!Array.from(document.scripts).some(s=>s.src && !performance.getEntriesByName(s.src).length));
    const live=await page.evaluate(id=>({course:COURSES_DB[id],notes:window.TIH_LESSON_NOTES?.[id]||{}}),summary.id);
    const app=JSON.parse(fs.readFileSync(path.join(root,'android-app/app/src/main/assets/learning/courses',summary.id+'.json')));
    assert.equal(live.course.title,app.title,summary.id);
    assert.equal(live.course.modules.flatMap(m=>m.lessons).length,app.modules.flatMap(m=>m.lessons).length,summary.id);
    for (const lesson of app.modules.flatMap(m=>m.lessons)) {
      if(lesson.noteSource==='authored') assert.equal(lesson.html,lookup(live.notes,lesson.title,lesson.module),summary.id+': '+lesson.title);
    }
  }
  assert.deepEqual(errors,[]);
  console.log(`Browser parity passed: ${catalog.length} courses; authored notes and lesson counts match source loaders.`);
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
