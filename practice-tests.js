/* TIH Practice Tests — assembles modular banks */
(function () {
  var ielts = {
    examId: 'ielts',
    title: 'IELTS Practice Test',
    durationMin: 55,
    scoreType: 'band',
    passMark: 70,
    intro: 'Choose a section or the Full Test. Listening, Reading and Grammar are timed and auto-scored with an estimated band. Passages include tables and charts. Writing and Speaking are self-check with model answers and criteria.',
    sections: [
      { id: 'listening', name: 'Listening', durationMin: 18, questions: window.TIH_IELTS_LISTENING || [] },
      { id: 'reading', name: 'Reading', durationMin: 25, questions: window.TIH_IELTS_READING || [] },
      { id: 'grammar', name: 'Grammar & Vocabulary', durationMin: 15, questions: window.TIH_IELTS_GRAMMAR || [] }
    ],
    writing: window.TIH_IELTS_WRITING || [],
    speaking: window.TIH_IELTS_SPEAKING || []
  };

  var toefl = window.TIH_TOEFL_BANK || {
    examId: 'toefl',
    title: 'TOEFL iBT Practice Test',
    durationMin: 55,
    scoreType: 'toefl120',
    passMark: 70,
    intro: 'Choose a section or the Full Test. Reading, Listening and Academic Language are timed and auto-scored on the 0–120 scale. Writing and Speaking are self-check with model answers.',
    sections: [],
    writing: [],
    speaking: []
  };
  if (window.TIH_TOEFL_BANK && (!toefl.intro || toefl.intro.indexOf('Choose a section') < 0)) {
    toefl.intro = 'Choose a section or the Full Test. Reading, Listening and Academic Language are timed and auto-scored on the 0–120 scale. Writing and Speaking are self-check with model answers.';
  }

  var sat = window.TIH_SAT_BANK || {
    examId: 'sat',
    title: 'Digital SAT Practice Test',
    durationMin: 35,
    scoreType: 'sat1600',
    passMark: 70,
    intro: '',
    sections: [],
    writing: [],
    speaking: []
  };

  window.PRACTICE_TESTS = { ielts: ielts, toefl: toefl, sat: sat };
  if (typeof module !== 'undefined' && module.exports) { module.exports = window.PRACTICE_TESTS; }
})();
