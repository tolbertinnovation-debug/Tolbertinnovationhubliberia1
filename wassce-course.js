/* ============================================================
   TIH LEARNING HUB — WASSCE → COURSE ADAPTER
   ------------------------------------------------------------
   Turns a WASSCE subject (from wassce-data.js) into a normal
   COURSES_DB course so it plays through course-player.html exactly
   like every other course: same card, lessons, quiz, certificate,
   and the same US$2 paid-access gate (courseId = "wassce-<subject>").

   The bulky WASSCE data is loaded lazily — only when a WASSCE course
   is actually opened — so catalog pages stay light.
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
    var h = t.lessonNotes || '';
    function list(title, arr) {
      if (!arr || !arr.length) return '';
      return '<h4>' + title + '</h4><ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    }
    h += list('Key Points', t.keyPoints);
    h += list('Formulas', t.formulas);
    h += list('Exam Tips', t.examTips);
    h += list('Common Mistakes to Avoid', t.commonMistakes);
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
      + '<li>Watch out for the listed common mistakes — WASSCE examiners test them</li>'
      + '<li>Read every question carefully before choosing</li></ul><p>Good luck — you are preparing the WAEC way!</p>';
  }

  // Construct COURSES_DB[courseId] + LESSON_CONTENT[courseId] from a subject.
  // Structure: one module per topic (lesson + 10-question quiz), then a final
  // module with a 20-question assessment across all topics.
  function build(courseId) {
    if (typeof WASSCE_SUBJECTS === 'undefined' || typeof COURSES_DB === 'undefined') return null;
    var sub = courseId.replace(/^wassce-/, '');
    var W = WASSCE_SUBJECTS[sub];
    if (!W) return null;
    var topics = W.topics || [];

    var modules = [];
    var quizzes = {};
    var notes = {};
    var flat = 0;
    topics.forEach(function (t, i) {
      var quizId = 'mod' + (i + 1);
      modules.push({
        title: 'Module ' + (i + 1) + ': ' + t.name,
        icon: W.icon || '📘',
        meta: '1 lesson · 10-question quiz',
        lessons: [
          { t: (i + 1) + '.1 ' + t.name, d: 'Lesson', v: t.videoId || 'Tn6-PIqc4UM' },
          { t: '📝 Quiz: ' + t.name, d: '10 questions', isQuiz: true, quizId: quizId }
        ]
      });
      quizzes[quizId] = topicQuiz(t, i + 1);
      notes[String(flat)] = notesHtml(t);
      notes[String(flat + 1)] = quizNote(t.name, 10);
      flat += 2;
    });
    // Final module closes the course (same convention as other courses).
    modules.push({
      title: 'Module ' + (topics.length + 1) + ': Final Assessment',
      icon: '🏆',
      meta: '20-question final · certificate',
      lessons: [
        { t: '🏆 Final Assessment & Certificate', d: '20 questions', isQuiz: true, quizId: 'final', isFinal: true }
      ]
    });
    quizzes.final = finalQuiz(topics, topics.length + 1);
    notes[String(flat)] = quizNote(W.name + ' — the full subject', 20);

    var course = {
      id: courseId,
      title: 'WASSCE ' + W.name,
      shortDesc: W.description || ('Complete WASSCE preparation for ' + W.name + ' — lessons, key points, formulas, exam tips and practice.'),
      category: 'WASSCE Exam Prep',
      icon: W.icon || '🎓',
      gradient: 'linear-gradient(135deg,#1e3a5f,#002868)',
      instructor: 'TIH WASSCE Faculty',
      instructorTitle: 'Tolbert Innovation Hub — WASSCE PRO',
      instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian students for the West African Senior School Certificate Examination with concise lessons, worked examples and past-question practice.',
      rating: 4.8, reviewCount: 0, students: '',
      duration: (topics.length + 1) + ' modules', level: 'WASSCE',
      price: '$2', origPrice: '', isFree: false, badge: '',
      certId: 'TIH-2026-WAS-' + sub.replace(/[^a-z0-9]/gi, '').slice(0, 4).toUpperCase(),
      learn: (topics.map(function (t) { return 'Master: ' + t.name; })).slice(0, 8),
      requirements: ['A phone or computer with internet', 'Interest in passing the WASSCE ' + W.name + ' exam'],
      about: [W.description || ('This WASSCE PRO course covers the core ' + W.name + ' topics examined in the WASSCE, with lessons, key points and practice questions.')],
      modules: modules,
      quizzes: quizzes,
      reviews: [],
      faqs: [
        { q: 'What does this WASSCE course include?', a: 'A full module for every core topic — video lesson, detailed notes, key points, formulas, exam tips, common mistakes and a 10-question topic quiz — plus a 20-question final assessment. Pass it to earn your TIH certificate.' },
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

  return { build: build, ensure: ensure };
})();
