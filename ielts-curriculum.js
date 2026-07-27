/* TIH IELTS pathway curriculum: 15 level-based courses and 106 guided lessons. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var levels = [
    { key: 'beginner', label: 'Beginner', band: 'Band 3.0–4.5', color: 'linear-gradient(135deg,#0f766e,#14b8a6)' },
    { key: 'intermediate', label: 'Intermediate', band: 'Band 5.0–6.5', color: 'linear-gradient(135deg,#1e3a8a,#2563eb)' },
    { key: 'advanced', label: 'Advanced', band: 'Band 7.0–9.0', color: 'linear-gradient(135deg,#7c2d12,#ea580c)' }
  ];
  var curriculum = [
    ['beginner', 1, 'English Foundations', ['English Alphabet & Pronunciation','Basic Grammar','Parts of Speech','Common Vocabulary','Sentence Structure','Daily Conversations','Greetings & Introductions','Numbers, Dates & Time','Family & Friends','Describing People']],
    ['beginner', 2, 'Basic Listening', ['Listening for Names and Numbers','Listening for Directions','Everyday Conversations','Understanding Simple Instructions','Note Completion Practice','Form Completion Practice']],
    ['beginner', 3, 'Basic Reading', ['Skimming and Scanning','Finding Main Ideas','Reading Advertisements','Reading Emails and Messages','Reading Short Articles','Vocabulary Building']],
    ['beginner', 4, 'Basic Writing', ['Sentence Writing','Paragraph Writing','Describing People','Describing Places','Writing Informal Emails','Common Grammar Errors']],
    ['beginner', 5, 'Basic Speaking', ['Self-Introduction','Talking About Family','Talking About Hobbies','Talking About School','Talking About Work','Basic Fluency Practice']],
    ['intermediate', 6, 'IELTS Listening Skills', ['Multiple Choice Questions','Map Labelling','Table Completion','Sentence Completion','Summary Completion','Academic Listening']],
    ['intermediate', 7, 'IELTS Reading Skills', ['Matching Headings','True/False/Not Given','Yes/No/Not Given','Matching Information','Sentence Completion','Diagram Labelling','Reading Academic Texts']],
    ['intermediate', 8, 'IELTS Writing Task 1', ['Introduction to Task 1','Charts and Graphs','Tables','Pie Charts','Line Graphs','Bar Charts','Process Diagrams','Maps','Comparing Data','Task 1 Vocabulary']],
    ['intermediate', 9, 'IELTS Writing Task 2', ['Essay Structure','Opinion Essays','Discussion Essays','Problem-Solution Essays','Advantages & Disadvantages Essays','Two-Part Questions','Linking Words','Cohesion & Coherence']],
    ['intermediate', 10, 'IELTS Speaking', ['Speaking Part 1','Speaking Part 2 Cue Cards','Speaking Part 3 Discussions','Expanding Answers','Pronunciation Skills','Fluency Development','Vocabulary for Speaking']],
    ['advanced', 11, 'Advanced Listening', ['Understanding Accents','Predicting Answers','Identifying Opinions','Following Lectures','High-Band Listening Strategies','Advanced Listening Review']],
    ['advanced', 12, 'Advanced Reading', ['Critical Reading','Speed Reading Techniques','Inference Questions','Writer’s Opinion Questions','Complex Academic Passages','Reading Time Management']],
    ['advanced', 13, 'Advanced Writing', ['Band 7+ Essay Structure','Advanced Vocabulary','Academic Writing Style','Complex Sentences','Data Analysis for Task 1','High-Band Sample Essays','Common Writing Mistakes','Task Achievement Strategies']],
    ['advanced', 14, 'Advanced Speaking', ['Speaking Like a Native','Advanced Topic Discussions','Abstract Ideas','Debate and Argument Skills','Idioms and Collocations','Pronunciation for Band 8+','Speaking Confidence Building']],
    ['advanced', 15, 'IELTS Mastery', ['IELTS Exam Strategies','Time Management','Mock Tests','Error Analysis','Band Score Improvement','Exam Day Preparation & Computer-Based IELTS','Academic vs General IELTS']]
  ];
  var topics = ['Family','Friends','Education','Technology','Environment','Travel','Health','Sports','Culture','Music','Movies','Books','Social Media','Shopping','Food','Hobbies','Work','Business','Leadership','Innovation','Artificial Intelligence','Climate Change','Globalization','Tourism','Transportation','Housing','Community Development','Youth Empowerment','Online Learning','Future Careers'];
  var index = 0;
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, function (ch) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]; }); }
  function note(level, moduleName, lessonName, position) {
    var focus = position % 2 ? 'accuracy, vocabulary, and clear organisation' : 'understanding the task, planning, and confident performance';
    return '<div class="study-note"><div class="revision-banner"><strong>IELTS ' + escapeHtml(level.label) + ' pathway</strong><span>' + escapeHtml(level.band) + '</span></div><h3>' + escapeHtml(lessonName) + '</h3><p>This lesson builds ' + escapeHtml(focus) + ' through practical IELTS preparation. Study the model approach, practise with a timer, and record one improvement in your notebook.</p><h4>Study checklist</h4><ul><li>Learn the key language and task pattern for this lesson.</li><li>Complete one untimed example, then repeat it under exam conditions.</li><li>Review your errors and write one action for your next practice session.</li></ul><div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + escapeHtml(lessonName) + '</em> to a Liberia, school, work, family, or community example and explain your answer clearly.</div><p><strong>Module connection:</strong> This lesson is part of <em>' + escapeHtml(moduleName) + '</em>. Strong IELTS performance comes from combining this skill with Listening, Reading, Writing, and Speaking practice.</p></div>';
  }
  function quiz(name, level) {
    return { title: 'Practice Quiz: ' + name, moduleNum: 1, questions: [
      { q: 'What is the main goal when practising ' + name + '?', opts: ['To memorise without understanding','To use the skill accurately under realistic conditions','To avoid reviewing mistakes','To write as much as possible'], correct: 1, exp: 'IELTS practice should develop accurate, timed performance and include error review.' },
      { q: 'Which habit best supports progress at ' + level.label + ' level?', opts: ['Skip difficult tasks','Practise once and never review','Use feedback to improve the next attempt','Only study vocabulary lists'], correct: 2, exp: 'Feedback and targeted revision turn practice into measurable progress.' },
      { q: 'What should a learner do after completing an exercise?', opts: ['Review errors and record an action point','Delete the exercise','Change the answer without checking why','Stop practising the skill'], correct: 0, exp: 'Error analysis identifies the next improvement to make.' }
    ]};
  }
  curriculum.forEach(function (item) {
    var level = levels.filter(function (entry) { return entry.key === item[0]; })[0];
    var id = 'ielts-' + item[0] + '-' + item[1];
    var lessons = item[3].map(function (name, lessonIndex) {
      var quizId = id + '-quiz-' + lessonIndex;
      var lesson = { t: (lessonIndex + 1) + '.1 ' + name, d: 'Lesson', v: null };
      lesson.quizId = quizId;
      return lesson;
    });
    var quizzes = {};
    lessons.forEach(function (lesson, lessonIndex) { quizzes[lesson.quizId] = quiz(lesson.t.replace(/^\d+\.1 /, ''), level.label); });
    var content = {};
    lessons.forEach(function (lesson, lessonIndex) { content[String(lessonIndex)] = note(level, item[2], lesson.t.replace(/^\d+\.1 /, ''), index++); content[String(lessons.length + lessonIndex)] = '<p><strong>Quiz preparation:</strong> Review the lesson notes, complete the practice task, and explain the key technique in your own words before starting the quiz.</p>'; });
    COURSES_DB[id] = {
      id: id, title: 'IELTS ' + level.label + ': ' + item[2], shortDesc: 'A structured TIH IELTS ' + level.label.toLowerCase() + ' course covering ' + item[2] + ' with guided lessons, notes, quizzes, and exam practice.', category: 'IELTS ' + level.label, icon: level.key === 'beginner' ? '🌱' : level.key === 'intermediate' ? '📘' : '🏆', gradient: level.color, instructor: 'TIH English & IELTS Faculty', instructorTitle: 'IELTS Preparation Team', instructorBio: 'TIH instructors help learners build practical English skills and prepare for Academic and General Training IELTS.', rating: 4.9, reviewCount: 0, students: 'TIH learners', duration: (lessons.length * 30) + ' min+', level: level.label, price: 'FREE', origPrice: '$50', isFree: true, badge: 'new', certId: 'TIH-2026-' + item[0].toUpperCase() + '-' + item[1], learn: ['Build confidence in ' + item[2], 'Practise with structured notes and quizzes', 'Track errors and improve under timed conditions', 'Prepare for the full IELTS pathway from Beginner to Exam Ready'], requirements: ['Basic English reading ability', 'A notebook or device for practice', 'Consistent weekly practice'], about: ['This course is one stage in the TIH IELTS pathway. Complete the levels in order or choose the course that matches your current ability.', 'IELTS Academic and General Training share the four skills but differ in some Reading and Writing tasks. Confirm the test format required by your institution or immigration authority.'], modules: [{ title: 'Module ' + item[1] + ': ' + item[2], icon: level.key === 'beginner' ? '🌱' : level.key === 'intermediate' ? '📘' : '🏆', meta: lessons.length + ' lessons · quizzes', lessons: lessons.map(function (lesson, lessonIndex) { return { t: lesson.t, d: lesson.d, v: lesson.v, isQuiz: false }; }).concat(lessons.map(function (lesson, lessonIndex) { return { t: '📝 Quiz: ' + lesson.t.replace(/^\d+\.1 /, ''), d: '3 questions', isQuiz: true, quizId: lesson.quizId }; })) }], quizzes: quizzes, ieltsPathway: true, mockTest: 'ielts', speakingTopics: topics
    };
    if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[id] = content;
  });
  var master = COURSES_DB.ielts;
  if (master && !master._ieltsPathwayMerged) {
    var masterNotes = typeof LESSON_CONTENT !== 'undefined' ? (LESSON_CONTENT.ielts || {}) : {};
    var mergedNotes = {};
    var flatIndex = 0;
    (master.modules || []).forEach(function (module) {
      (module.lessons || []).forEach(function () {
        if (masterNotes[String(flatIndex)] !== undefined) mergedNotes[String(flatIndex)] = masterNotes[String(flatIndex)];
        flatIndex += 1;
      });
    });
    var nextModule = (master.modules || []).length + 1;
    master.quizzes = master.quizzes || {};
    curriculum.forEach(function (item) {
      var id = 'ielts-' + item[0] + '-' + item[1];
      var source = COURSES_DB[id];
      if (!source) return;
      (source.modules || []).forEach(function (module) {
        var copied = { title: 'Module ' + nextModule + ': ' + module.title.replace(/^Module\s+\d+\s*:\s*/i, ''), icon: module.icon, meta: module.meta, lessons: [] };
        var sourceLessonIndex = 0;
        (module.lessons || []).forEach(function (lesson) {
          var copiedLesson = {};
          Object.keys(lesson).forEach(function (key) { copiedLesson[key] = lesson[key]; });
          copied.lessons.push(copiedLesson);
          var sourceKey = String(sourceLessonIndex);
          var sourceNote = LESSON_CONTENT[id] && LESSON_CONTENT[id][sourceKey];
          if (sourceNote !== undefined) mergedNotes[String(flatIndex)] = sourceNote;
          flatIndex += 1;
          sourceLessonIndex += 1;
        });
        master.modules.push(copied);
        nextModule += 1;
      });
      Object.keys(source.quizzes || {}).forEach(function (quizId) { master.quizzes[quizId] = source.quizzes[quizId]; });
      delete COURSES_DB[id];
      if (typeof LESSON_CONTENT !== 'undefined') delete LESSON_CONTENT[id];
    });
    master.title = 'IELTS Masterclass: Beginner to Band 9';
    master.shortDesc = 'One complete IELTS pathway covering Beginner, Intermediate, and Advanced preparation across Listening, Reading, Writing, and Speaking.';
    master.level = 'Intermediate → Advanced';
    master.duration = '60h+';
    master.ieltsPathway = true;
    master._ieltsPathwayMerged = true;
    if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.ielts = mergedNotes;
  }
  if (typeof PRACTICE_TESTS !== 'undefined') {
    curriculum.forEach(function (item) { PRACTICE_TESTS['ielts-' + item[0] + '-' + item[1]] = PRACTICE_TESTS.ielts; });
  }
})();
