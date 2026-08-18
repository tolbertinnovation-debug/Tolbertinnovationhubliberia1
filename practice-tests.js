/* TIH Practice Tests — assembles modular banks */
(function () {
  var ielts = {
    examId: 'ielts',
    title: 'IELTS Practice Test',
    durationMin: 50,
    scoreType: 'band',
    passMark: 70,
    intro: 'Choose a section to practise, or take the Full Test. Listening, Reading, and Grammar are timed and auto-scored with an estimated band. Writing and Speaking are self-check with model answers.',
    sections: [
      { id: 'listening', name: 'Listening', durationMin: 15, questions: window.TIH_IELTS_LISTENING || [] },
      { id: 'reading', name: 'Reading', durationMin: 20, questions: window.TIH_IELTS_READING || [] },
      { id: 'grammar', name: 'Grammar & Vocabulary', durationMin: 12, questions: window.TIH_IELTS_GRAMMAR || [] }
    ],
    writing: window.TIH_IELTS_WRITING || [],
    speaking: window.TIH_IELTS_SPEAKING || []
  };
  var toefl = window.TIH_TOEFL_BANK || { examId: 'toefl', title: 'TOEFL iBT Practice Test', durationMin: 30, scoreType: 'toefl120', passMark: 70, intro: '', sections: [], writing: [], speaking: [] };
  var sat = window.TIH_SAT_BANK || { examId: 'sat', title: 'Digital SAT Practice Test', durationMin: 35, scoreType: 'sat1600', passMark: 70, intro: '', sections: [], writing: [], speaking: [] };
  window.PRACTICE_TESTS = { ielts: ielts, toefl: toefl, sat: sat };
  if (typeof module !== 'undefined' && module.exports) { module.exports = window.PRACTICE_TESTS; }
})();
