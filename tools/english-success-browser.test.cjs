/* Run against a LOCAL checkout only:
 * python3 -m http.server 8099
 * NODE_PATH=/path/to/node_modules node tools/english-success-browser.test.cjs
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
    const id = 'ENGLISH-LOCAL-TEST';
    localStorage.setItem('tih_hub_last_student', id);
    localStorage.setItem('tih_hub_student_session', JSON.stringify({id, at: new Date().toISOString()}));
    localStorage.setItem('tih_hub_students', JSON.stringify([{id, name: 'Local QA Learner', status: 'active', email: 'qa@example.invalid', courses: [{id: 'english-success'}]}]));
    localStorage.setItem('tih_access_english-success', JSON.stringify({studentId: id, at: new Date().toISOString()}));
  });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  try {
    await page.goto(base + '/course-player.html?id=english-success');
    await page.waitForFunction(() => typeof lessons !== 'undefined' && lessons.length === 332 && !!window.TIH_LESSON_NOTES?.['english-success']);
    const report = await page.evaluate(() => {
      const course = COURSES_DB['english-success'];
      const sets = Object.values(course.quizzes), qs = sets.flatMap(q => q.questions);
      const ids = lessons.filter(l => !l.isQuiz && l.videoId).map(l => l.videoId);
      return {quizzes: sets.length, questions: qs.length, unique: new Set(qs.map(q => q.q)).size,
        notes: Object.keys(window.TIH_LESSON_NOTES['english-success']).length,
        videos: ids.length, uniqueVideos: new Set(ids).size};
    });
    assert.equal(report.quizzes, 162); assert.equal(report.questions, 616); assert.equal(report.unique, 616);
    assert.ok(report.notes >= 144); assert.equal(report.videos, 170); assert.equal(report.videos, report.uniqueVideos);
    const notesCheck = await page.evaluate(() => window.TIH_LESSON_NOTES['english-success']);
    assert.ok(notesCheck['M18:TOEFL Introduction'].includes('1–6 scale'));
    assert.ok(notesCheck['M13:AI Writing Tools'].includes('Permission comes first'));
    assert.notEqual(notesCheck['M8:Reports'], notesCheck['M9:Reports']);
    const targets = [
      ['Practice: Welcome to the Course',1],['Practice: Subject-Verb Agreement',2],
      ['Practice: Reports',8],['Practice: Reports',9],['Practice: AI Writing Tools',13],['Practice: TOEFL Introduction',18],
      ['Grammar Assessment',2],['Reading Assessment',4],['Listening Assessment',5],['Speaking Assessment',6],['Writing Assessment',7],['Presentation Assessment',10],['Exam Readiness Assessment',18],
      ['Grammar Assessment',20],['Vocabulary Assessment',20],['Reading Assessment',20],['Listening Assessment',20],['Speaking Assessment',20],['Writing Assessment',20],
      ['Midterm Examination',20],['Final Examination',20],['Capstone Project Evaluation',20],['Professional Portfolio Review',20],['Graduation Assessment',20]
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
      if (title === 'Final Examination') {
        fs.mkdirSync('test-results/english-success', {recursive: true});
        await page.screenshot({path: 'test-results/english-success/final-result.png'});
      }
      await page.evaluate(() => closeQuizModal());
    }
    // Render a specialist question as a visual review artifact.
    await page.evaluate(() => openQuizModal(lessons.findIndex(l => quizData[l.quizId]?.title === 'Practice: Subject-Verb Agreement')));
    await page.screenshot({path: 'test-results/english-success/grammar-practice.png'});
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({...report, renderedQuestions: displayed.size, passed: true}));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
