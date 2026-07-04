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

  // Build a 5-question quiz from a set of topics' MCQs.
  function buildQuiz(topics, title, isFinal, moduleNum) {
    var qs = [];
    for (var i = 0; i < topics.length && qs.length < 5; i++) {
      var mcqs = topics[i].mcq || [];
      for (var j = 0; j < mcqs.length && qs.length < 5; j++) {
        var m = mcqs[j];
        if (!m || !m.options || typeof m.answer !== 'number') continue;
        qs.push({ q: m.q, opts: m.options.map(stripLetter), correct: m.answer, exp: m.explanation || '' });
      }
    }
    return { title: title, moduleNum: moduleNum || 1, unlocks: isFinal ? null : (topics.length + 1), isFinal: !!isFinal, questions: qs };
  }

  // Construct COURSES_DB[courseId] + LESSON_CONTENT[courseId] from a subject.
  function build(courseId) {
    if (typeof WASSCE_SUBJECTS === 'undefined' || typeof COURSES_DB === 'undefined') return null;
    var sub = courseId.replace(/^wassce-/, '');
    var W = WASSCE_SUBJECTS[sub];
    if (!W) return null;
    var topics = W.topics || [];

    var lessons = topics.map(function (t) {
      return { t: t.name, d: 'Lesson', v: t.videoId || 'Tn6-PIqc4UM' };
    });
    // Final assessment closes the course (same convention as other courses).
    lessons.push({ t: '🏆 Final Assessment & Certificate', d: 'Assessment', isQuiz: true, quizId: 'final', isFinal: true });

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
      duration: topics.length + ' lessons', level: 'WASSCE',
      price: '$2', origPrice: '', isFree: false, badge: '',
      certId: 'TIH-2026-WAS-' + sub.replace(/[^a-z0-9]/gi, '').slice(0, 4).toUpperCase(),
      learn: (topics.map(function (t) { return 'Master: ' + t.name; })).slice(0, 8),
      requirements: ['A phone or computer with internet', 'Interest in passing the WASSCE ' + W.name + ' exam'],
      about: [W.description || ('This WASSCE PRO course covers the core ' + W.name + ' topics examined in the WASSCE, with lessons, key points and practice questions.')],
      modules: [{
        title: 'Module 1: ' + W.name,
        icon: W.icon || '📘',
        meta: topics.length + ' lessons · 1 assessment',
        lessons: lessons
      }],
      quizzes: { final: buildQuiz(topics, 'Final Assessment', true, 1) },
      reviews: [],
      faqs: [
        { q: 'What does this WASSCE course include?', a: 'Video lessons and detailed notes for each core topic, key points, formulas, exam tips, common mistakes, and a final assessment. Pass it to earn your TIH certificate.' },
        { q: 'How much does it cost?', a: 'US$2, paid by Mobile Money. After the TIH team confirms your payment you receive an access code to unlock the subject.' }
      ]
    };
    COURSES_DB[courseId] = course;

    if (typeof LESSON_CONTENT !== 'undefined') {
      LESSON_CONTENT[courseId] = {};
      topics.forEach(function (t, i) { LESSON_CONTENT[courseId][String(i)] = notesHtml(t); });
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
