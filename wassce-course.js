/* ============================================================
   TIH LEARNING HUB, WASSCE → COURSE ADAPTER
   ------------------------------------------------------------
   Turns a WASSCE subject (from wassce-data.js) into a normal
   COURSES_DB course so it plays through course-player.html exactly
   like every other course: same card, lessons, quiz, certificate,
   and the same US$3 paid-access gate (courseId = "wassce-<subject>").

   The bulky WASSCE data is loaded lazily, only when a WASSCE course
   is actually opened, so catalog pages stay light.
   ============================================================ */
var WassceCourse = (function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // WASSCE MCQ options come prefixed ("A. 9"); the player adds its own letters.
  function stripLetter(opt) {
    return String(opt).replace(/^\s*[A-Da-d][.)]\s*/, '').trim();
  }

  function notesHtml(t) {
    var topic = esc(t.name || 'this WASSCE topic');
    var h = '<div class="wassce-note-header"><span class="wassce-note-kicker">WASSCE PRO · Complete lesson note</span>'
      + '<h3>' + topic + '</h3>'
      + '<p>Use this note as your main study guide for the topic. Read the explanations slowly, work through every example, then use the key points and exam tips to revise before attempting the quiz.</p></div>'
      + '<div class="wassce-note-section wassce-study-plan"><h4>How to study this topic</h4><ol>'
      + '<li>Read the explanation once to understand the main idea and vocabulary.</li>'
      + '<li>Work through each example on paper before checking the answer.</li>'
      + '<li>Write down the rule, formula, or method you would use in an exam.</li>'
      + '<li>Complete the topic quiz without looking back at the note.</li>'
      + '</ol></div>'
      + '<div class="wassce-note-section"><h4>Complete topic explanation</h4>' + (t.lessonNotes || '<p>Study the topic explanation below and connect each idea to a worked example.</p>') + '</div>';
    function list(title, arr) {
      if (!arr || !arr.length) return '';
      return '<div class="wassce-note-section"><h4>' + title + '</h4><ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }
    h += list('Key Points', t.keyPoints);
    h += list('Formulas', t.formulas);
    h += list('Exam Tips', t.examTips);
    h += list('Common Mistakes to Avoid', t.commonMistakes);
    h += '<div class="wassce-note-section wassce-revision-box"><h4>Before you take the quiz</h4><ul>'
      + '<li>Explain the topic aloud without reading the note.</li>'
      + '<li>Redo at least one worked example from memory.</li>'
      + '<li>Check that you understand the units, signs, labels, or steps required in your subject.</li>'
      + '<li>Record one question in the Notes tab if any part is still unclear.</li>'
      + '</ul></div>';
    return h;
  }

  function toQ(m) {
    return { q: m.q, opts: m.options.map(stripLetter), correct: m.answer, exp: m.explanation || '' };
  }
  // Per-topic quiz: up to 10 questions from that topic's MCQ bank.
  function topicQuiz(topic, moduleNum) {
    var qs = (topic.mcq || []).filter(function (m) { return m && m.options && typeof m.answer === 'number'; })
      .slice(0, 10).map(toQ);
    return { title: 'Quiz: ' + topic.name, moduleNum: moduleNum, questions: qs };
  }
  // Final assessment: 20 questions sampled evenly across all topics.
  function finalQuiz(topics, moduleNum) {
    var per = Math.max(1, Math.ceil(20 / Math.max(1, topics.length)));
    var qs = [];
    topics.forEach(function (t) {
      (t.mcq || []).filter(function (m) { return m && m.options && typeof m.answer === 'number'; })
        .slice(0, per).forEach(function (m) { if (qs.length < 20) qs.push(toQ(m)); });
    });
    return { title: 'Final Assessment', moduleNum: moduleNum, isFinal: true, questions: qs };
  }
  function quizNote(name, count) {
    return '<p>This quiz covers <strong>' + esc(name) + '</strong>. You need <strong>70% or higher to pass</strong>'
      + (count === 20 ? ' (14 out of 20)' : ' (7 out of 10)') + ' and you can retake it as many times as you like.</p>'
      + '<h4>Before You Begin</h4><ul><li>Review the lesson notes, key points and exam tips above</li>'
      + '<li>Watch out for the listed common mistakes, WASSCE examiners test them</li>'
      + '<li>Read every question carefully before choosing</li></ul><p>Good luck, you are preparing the WAEC way!</p>';
  }

  var CHIEF_EXAMINERS_REVISION = {
    mathematics: ['Sets', 'Construction', 'Algebraic Expressions', 'Trigonometry', 'Indices and Logarithms', 'Statistics: Pie Charts', 'Plane Geometry', 'Simultaneous Equations', 'Circle Theorems', 'Mensuration', 'Quadratic Graphs', 'Quadratics and Functions'],
    'integrated science': ['Ecosystems', 'Cells and Cell Division', 'Electronics', 'Force and Motion', 'Acids, Bases and Salts', 'Ionic and Covalent Bonding', 'Crop Production', 'Photosynthesis', 'Farming Systems', 'Transport in Plants', 'Chemical Compounds and IUPAC Names', 'Energy'],
    english: ['Essay Writing', 'Comprehension', 'Summary Writing', 'Concord', 'Literature', 'Figurative Usage', 'Oral English', 'Idiomatic Expressions'],
    'social studies': ['Adolescent Health', 'Leadership and Fellowship', 'Self and Personal Development', 'Peacebuilding and Conflict Resolution', 'Sustainable Development', 'Education and Social Change', 'Culture and Environment', 'Marriage', 'National Independence', 'Science and Technology', 'Natural Resources']
  };

  function revisionKey(value) {
    return String(value || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function revisionSubjectKey(subject, courseId) {
    var value = revisionKey((subject && subject.name) || courseId.replace(/^wassce-/, ''));
    if (value.indexOf('math') !== -1) return 'mathematics';
    if (value.indexOf('integrated') !== -1 && value.indexOf('science') !== -1) return 'integrated science';
    if (value === 'english' || value.indexOf('english language') !== -1) return 'english';
    if (value.indexOf('social') !== -1 && value.indexOf('stud') !== -1) return 'social studies';
    return null;
  }

  function revisionLessonNotes(subjectName, topicName) {
    return '<div class="revision-focus-banner"><strong>TIH 2026 WASSCE Revision Focus</strong><p>This lesson focuses on <strong>' + esc(topicName) + '</strong> in ' + esc(subjectName) + '. The topic list was supplied to TIH as examination-preparation guidance. It is not an independent confirmation that WAEC will ask a particular question. Use it together with the official WAEC syllabus, your teacher\'s guidance, and past questions.</p></div>'
      + '<h4>What to revise</h4><p>Build a clear understanding of the definitions, rules, processes, diagrams, examples, and examination vocabulary connected to <strong>' + esc(topicName) + '</strong>. Do not only memorise headings. Practise explaining the topic, applying it to a new question, and showing complete working where required.</p>'
      + '<h4>Study method</h4><ol><li>Write the meaning of the key terms in your own words.</li><li>Review one worked example and solve a similar example without looking.</li><li>List common mistakes and check your answer carefully.</li><li>Attempt past questions related to this topic under timed conditions.</li><li>Ask your teacher or mentor about any point you cannot explain clearly.</li></ol>'
      + '<h4>Revision checkpoint</h4><p>Before leaving this lesson, write a short answer to these questions: What is the main idea? Which rule, process, or structure must I remember? How could the examiner change the wording of the question? What evidence or working would earn full marks?</p>';
  }

  function addRevisionTopics(courseId, subject) {
    var key = revisionSubjectKey(subject, courseId);
    if (!key || !CHIEF_EXAMINERS_REVISION[key]) return subject;
    var existing = (subject.topics || []).map(function (topic) { return revisionKey(topic.name); });
    CHIEF_EXAMINERS_REVISION[key].forEach(function (topicName) {
      if (existing.indexOf(revisionKey(topicName)) !== -1) return;
      subject.topics.push({
        id: 'chief_revision_' + revisionKey(topicName).replace(/ /g, '_'),
        name: topicName,
        icon: '🎯',
        revisionOnly: true,
        lessonNotes: revisionLessonNotes(subject.name, topicName),
        keyPoints: ['Know the definitions and key vocabulary for ' + topicName + '.', 'Practise applying the topic to unfamiliar questions.', 'Show clear working, labels, explanations, and units where appropriate.'],
        examTips: ['Read the command word carefully: define, state, explain, calculate, compare, or discuss.', 'Use a clear answer structure and check every part of the question before submitting.'],
        commonMistakes: ['Memorising a heading without understanding how to apply it.', 'Leaving out working, examples, labels, or explanations required for method marks.'],
        mcq: []
      });
    });
    subject.totalTopics = subject.topics.length;
    return subject;
  }

  function ensureRevisionSubject(courseId) {
    if (typeof WASSCE_SUBJECTS === 'undefined') return null;
    var subject = WASSCE_SUBJECTS[courseId.replace(/^wassce-/, '')];
    if (!subject) {
      var wanted = revisionKey(courseId.replace(/^wassce-/, ''));
      var key = Object.keys(CHIEF_EXAMINERS_REVISION).filter(function (candidate) { return wanted.indexOf(candidate.replace(/ /g, '-')) !== -1 || wanted.indexOf(candidate.replace(/ /g, '')) !== -1; })[0];
      if (!key) return null;
      subject = WASSCE_SUBJECTS[courseId.replace(/^wassce-/, '')] = {
        id: courseId.replace(/^wassce-/, ''), name: key.replace(/\b\w/g, function (letter) { return letter.toUpperCase(); }), icon: '🎯', description: 'TIH WASSCE revision course for ' + key + '.', topics: []
      };
    }
    return addRevisionTopics(courseId, subject);
  }

  function registerRevisionSubjects() {
    if (typeof WASSCE_SUBJECTS === 'undefined') return;
    ['wassce-mathematics', 'wassce-english', 'wassce-integrated-science', 'wassce-social-studies'].forEach(function (courseId) {
      ensureRevisionSubject(courseId);
    });
  }

  // Construct COURSES_DB[courseId] + LESSON_CONTENT[courseId] from a subject.
  // Structure: one module per topic (lesson + 10-question quiz), then a final
  // module with a 20-question assessment across all topics.
  function build(courseId) {
    if (typeof WASSCE_SUBJECTS === 'undefined' || typeof COURSES_DB === 'undefined') return null;
    var sub = courseId.replace(/^wassce-/, '');
    var W = WASSCE_SUBJECTS[sub] || ensureRevisionSubject(courseId);
    if (!W) return null;
    addRevisionTopics(courseId, W);
    var topics = W.topics || [];

    var modules = [];
    var quizzes = {};
    var notes = {};
    var flat = 0;
    var hasQuizTopics = false;
    topics.forEach(function (t, i) {
      var quizId = 'mod' + (i + 1);
      var topicLessons = [{ t: (i + 1) + '.1 ' + t.name, d: 'Lesson', v: t.videoId || null }];
      if (!t.revisionOnly) {
        topicLessons.push({ t: '📝 Quiz: ' + t.name, d: '10 questions', isQuiz: true, quizId: quizId });
        hasQuizTopics = true;
      }
        modules.push({
        title: 'Module ' + (i + 1) + ': ' + t.name,
        icon: W.icon || '📘',
          meta: t.revisionOnly ? '1 detailed revision lesson' : '1 lesson · 10-question quiz',
        lessons: topicLessons
      });
      if (!t.revisionOnly) quizzes[quizId] = topicQuiz(t, i + 1);
      notes[String(flat)] = notesHtml(t);
      if (t.revisionOnly) flat += 1;
      else { notes[String(flat + 1)] = quizNote(t.name, 10); flat += 2; }
    });
    // Existing full subjects retain the final assessment. Revision-only shells
    // remain reading courses until subject-specific question banks are added.
    if (hasQuizTopics) {
      modules.push({
        title: 'Module ' + (topics.length + 1) + ': Final Assessment',
        icon: '🏆',
        meta: '20-question final · certificate',
        lessons: [
          { t: '🏆 Final Assessment & Certificate', d: '20 questions', isQuiz: true, quizId: 'final', isFinal: true }
        ]
      });
      quizzes.final = finalQuiz(topics, topics.length + 1);
      notes[String(flat)] = quizNote(W.name + ', the full subject', 20);
    }

    var course = {
      id: courseId,
      title: 'WASSCE ' + W.name,
      shortDesc: W.description || ('Complete WASSCE preparation for ' + W.name + ', lessons, key points, formulas, exam tips and practice.'),
      category: 'WASSCE Exam Prep',
      icon: W.icon || '🎓',
      gradient: 'linear-gradient(135deg,#1e3a5f,#002868)',
      instructor: 'TIH WASSCE Faculty',
      instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
      instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian students for the West African Senior School Certificate Examination with concise lessons, worked examples and past-question practice.',
      rating: 4.8, reviewCount: 0, students: '',
      duration: (topics.length + 1) + ' modules', level: 'WASSCE',
      price: '$3', origPrice: '', isFree: false, badge: '',
      certId: 'TIH-2026-WAS-' + sub.replace(/[^a-z0-9]/gi, '').slice(0, 4).toUpperCase(),
      learn: (topics.map(function (t) { return 'Master: ' + t.name; })).slice(0, 8),
      requirements: ['A phone or computer with internet', 'Interest in passing the WASSCE ' + W.name + ' exam'],
      about: [W.description || ('This WASSCE PRO course covers the core ' + W.name + ' topics examined in the WASSCE, with lessons, key points and practice questions.')],
      modules: modules,
      quizzes: quizzes,
      reviews: [],
      faqs: [
        { q: 'What does this WASSCE course include?', a: 'A full module for every core topic, video lesson, detailed notes, key points, formulas, exam tips, common mistakes and a 10-question topic quiz, plus a 20-question final assessment. Pass it to earn your TIH certificate.' },
        { q: 'How much does it cost?', a: 'US$2, paid by Mobile Money. After the TIH team confirms your payment you receive an access code to unlock the subject.' }
      ]
    };
    COURSES_DB[courseId] = course;

    if (typeof LESSON_CONTENT !== 'undefined') {
      LESSON_CONTENT[courseId] = notes;
    }
    return course;
  }

  // Ensure COURSES_DB has the course, lazy-loading wassce-data.js if needed,
  // then run the callback. Non-WASSCE ids call back immediately.
  function ensure(courseId, cb) {
    if (typeof COURSES_DB !== 'undefined' && COURSES_DB[courseId]) { cb(); return; }
    if (!courseId || courseId.indexOf('wassce-') !== 0) { cb(); return; }
    if (typeof WASSCE_SUBJECTS !== 'undefined') { build(courseId); cb(); return; }
    var s = document.createElement('script');
    s.src = 'wassce-data.js';
    s.onload = function () { try { build(courseId); } catch (e) {} cb(); };
    s.onerror = function () { cb(); };
    document.head.appendChild(s);
  }

  registerRevisionSubjects();
  return { build: build, ensure: ensure, registerRevisionSubjects: registerRevisionSubjects };
})();
