/* Run against a LOCAL checkout only:
 * python3 -m http.server 8099
 * NODE_PATH=/path/to/node_modules node tools/ielts-browser.test.cjs
 * Uses a synthetic local learner; no production login or student data.
 */
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async () => {
  const base = process.env.PM_TEST_URL || 'http://127.0.0.1:8099';
  assert.ok(['localhost', '127.0.0.1'].includes(new URL(base).hostname), 'Local fixture only');
  const browser = await chromium.launch({headless: true, ...(process.env.PM_CHROMIUM ? {executablePath: process.env.PM_CHROMIUM} : {})});
  const context = await browser.newContext({viewport: {width: 412, height: 915}});
  await context.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort());
  await context.addInitScript(() => {
    const id = 'IELTS-LOCAL-TEST';
    localStorage.setItem('tih_hub_last_student', id);
    localStorage.setItem('tih_hub_student_session', JSON.stringify({id, at: new Date().toISOString()}));
    localStorage.setItem('tih_hub_students', JSON.stringify([{id, name: 'Local QA Learner', status: 'active', email: 'qa@example.invalid', courses: [{id: 'ielts'}]}]));
    localStorage.setItem('tih_access_ielts', JSON.stringify({studentId: id, at: new Date().toISOString()}));
  });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  try {
    await page.goto(base + '/course-player.html?id=ielts');
    await page.waitForFunction(() => typeof lessons !== 'undefined' && lessons.length === 238 && !!window.TIH_LESSON_NOTES?.['ielts']);
    const report = await page.evaluate(() => {
      const course = COURSES_DB['ielts'];
      const sets = Object.values(course.quizzes), qs = sets.flatMap(q => q.questions);
      const ids = lessons.filter(l => !l.isQuiz && l.videoId).map(l => l.videoId);
      return {quizzes: sets.length, questions: qs.length, unique: new Set(qs.map(q => q.q)).size,
        notes: Object.keys(window.TIH_LESSON_NOTES['ielts']).length,
        videos: ids.length, uniqueVideos: new Set(ids).size};
    });
    assert.equal(report.quizzes, 111); assert.equal(report.questions, 376); assert.equal(report.unique, 376);
    assert.ok(report.notes === 127); assert.equal(report.videos, 127); assert.equal(report.videos, report.uniqueVideos);
    const notesCheck = await page.evaluate(() => window.TIH_LESSON_NOTES.ielts);
    assert.ok(notesCheck['M14:Line Graphs'].includes('Users (thousands)'));
    assert.notEqual(notesCheck['M7:Describing People'], notesCheck['M10:Describing People']);
    const targets = [
      ['Practice: Describing People',7],['Practice: Describing People',10],
      ['Practice: Sentence Completion',12],['Practice: Sentence Completion',13],
      ['Practice: True/False/Not Given',13],['Practice: Yes/No/Not Given',13],
      ['Practice: Line Graphs',14],['Practice: Bar Charts',14],['Practice: Pie Charts',14],
      ['Practice: Exam Day Preparation & Computer-Based IELTS',21],
      ['IELTS Format & Scoring',1],['Listening',2],['Reading',3],['Vocabulary, Grammar & Strategy',6],
      ['Final Assessment & Certificate',22]
    ];
    const displayed = new Set();
    for (const [title,module] of targets) {
      const questions = await page.evaluate(({title,module}) => {
        const index = lessons.findIndex(l => quizData[l.quizId]?.title === title && quizData[l.quizId]?.moduleNum === module);
        if (index < 0) throw new Error('Missing quiz ' + title);
        openQuizModal(index);
        return quizData[lessons[index].quizId].questions;
      }, {title,module});
      for (const q of questions) {
        assert.equal(await page.locator('#quizQuestionText').innerText(), q.q);
        assert.ok(!displayed.has(q.q)); displayed.add(q.q);
        const options = page.locator('.quiz-option');
        const texts = await options.allTextContents();
        const selected = texts.findIndex(t => t.slice(1) === q.opts[q.correct]);
        assert.ok(selected >= 0, q.q);
        await options.nth(selected).click();
        await page.locator('#quizActionBtn').click();
        assert.match(await page.locator('#quizFeedback').innerText(), /^✓ Correct!/);
        assert.ok((await page.locator('#quizFeedback').innerText()).includes(q.exp));
        await page.locator('#quizActionBtn').click();
      }
      assert.equal(await page.locator('#quizResultScore').innerText(), `${questions.length}/${questions.length}`);
      if (title === 'Final Assessment & Certificate') {
        fs.mkdirSync('test-results/ielts', {recursive: true});
        await page.screenshot({path: 'test-results/ielts/final-result.png'});
      }
      await page.evaluate(() => closeQuizModal());
    }
    // Render a specialist question as a visual review artifact.
    await page.evaluate(() => openQuizModal(lessons.findIndex(l => quizData[l.quizId]?.title === 'Practice: True/False/Not Given')));
    await page.screenshot({path: 'test-results/ielts/reading-practice.png'});
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({...report, renderedQuestions: displayed.size, passed: true}));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
