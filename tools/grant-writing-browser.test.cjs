/* Run against a LOCAL checkout only:
 * python3 -m http.server 8099
 * NODE_PATH=/path/to/node_modules node tools/grant-writing-browser.test.cjs
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
    const id = 'GRANT-LOCAL-TEST';
    localStorage.setItem('tih_hub_last_student', id);
    localStorage.setItem('tih_hub_student_session', JSON.stringify({id, at: new Date().toISOString()}));
    localStorage.setItem('tih_hub_students', JSON.stringify([{id, name: 'Local QA Learner', status: 'active', email: 'qa@example.invalid', courses: [{id: 'grant-writing'}]}]));
    localStorage.setItem('tih_access_grant-writing', JSON.stringify({studentId: id, at: new Date().toISOString()}));
  });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  try {
    await page.goto(base + '/course-player.html?id=grant-writing');
    await page.waitForFunction(() => typeof lessons !== 'undefined' && lessons.length === 320 && !!window.TIH_LESSON_NOTES?.['grant-writing']);
    const report = await page.evaluate(() => {
      const course = COURSES_DB['grant-writing'];
      const sets = Object.values(course.quizzes), qs = sets.flatMap(q => q.questions);
      const ids = lessons.filter(l => !l.isQuiz && l.videoId).map(l => l.videoId);
      return {quizzes: sets.length, questions: qs.length, unique: new Set(qs.map(q => q.q)).size,
        notes: Object.keys(window.TIH_LESSON_NOTES['grant-writing']).length,
        videos: ids.length, uniqueVideos: new Set(ids).size};
    });
    assert.equal(report.quizzes, 154); assert.equal(report.questions, 564); assert.equal(report.unique, 564);
    assert.ok(report.notes >= 143); assert.equal(report.videos, 166); assert.equal(report.videos, report.uniqueVideos);
    const notesCheck = await page.evaluate(() => window.TIH_LESSON_NOTES['grant-writing']);
    assert.ok(notesCheck['M7:Logical Framework (Logframe)'].includes('assumptions'));
    assert.ok(notesCheck['M8:Indirect Costs'].includes('total is $770'));
    assert.ok(notesCheck['M13:Donor Retention'].includes('80%'));
    assert.ok(notesCheck['M16:AI for Proposal Drafting'].includes('fluent answer can still be wrong'));
    const targets = [
      'Practice: Welcome to the Course','Practice: Logical Framework (Logframe)','Practice: Indirect Costs',
      'Practice: AI for Proposal Drafting','Grant Writing Fundamentals Assessment','Budget Development Assessment',
      'Fundraising Assessment','Donor Relations Assessment','Grant Management Assessment','Monitoring & Evaluation Assessment',
      'Midterm Examination','Final Examination','Capstone Project Evaluation','Portfolio Review','Graduation Assessment'
    ];
    const displayed = new Set();
    for (const title of targets) {
      const questions = await page.evaluate(title => {
        const index = lessons.findIndex(l => quizData[l.quizId]?.title === title);
        if (index < 0) throw new Error('Missing quiz ' + title);
        openQuizModal(index);
        return quizData[lessons[index].quizId].questions;
      }, title);
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
      if (title === 'Final Examination') {
        fs.mkdirSync('test-results/grant-writing', {recursive: true});
        await page.screenshot({path: 'test-results/grant-writing/final-result.png'});
      }
      await page.evaluate(() => closeQuizModal());
    }
    // Render a specialist question as a visual review artifact.
    await page.evaluate(() => openQuizModal(lessons.findIndex(l => quizData[l.quizId]?.title === 'Practice: Logical Framework (Logframe)')));
    await page.screenshot({path: 'test-results/grant-writing/logframe-practice.png'});
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({...report, renderedQuestions: displayed.size, passed: true}));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
