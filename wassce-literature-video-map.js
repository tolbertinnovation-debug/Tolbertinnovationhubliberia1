/* TIH WASSCE LITERATURE IN ENGLISH — one distinct YouTube video per topic.
   Course id: wassce-literature

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 6 videos across 72 lessons, with a single clip playing on 21
   of them.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module ("Character Analysis, Practice Questions, Setting, Text Analysis, Theme Analysis") are keyed "M<n>:Title",
   because a plain title key would collapse them onto one video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['wassce-literature'] || !COURSES_DB['wassce-literature'].modules) return;
  var MAP = {
    'Course Orientation': 'tO5cDIWkSE0',
    'Exam Structure & Marking Scheme': 'B-iYMa-SaXY',
    'What is Literature?': 'Awc1h20Ja94',
    'Genres of Literature': '6Z5WxTQ3x7g',
    'Study Strategies': 'nUtkWovjZ1g',
    'Theme': 'MAu3e5GZo4k',
    'Plot': 'asjGglR3k7o',
    'M2:Setting': 'Xz5VLSiN5cM',
    'Characterization': 'tW9TG22U3Go',
    'Point of View': 'GGS3NcmAZnw',
    'Mood & Tone': 'XIfYK4tpl2Y',
    'Symbolism': 'gWjY4bmunTU',
    'Imagery': 'x9_F6Ayw8FU',
    'Irony': 'YgV4Bj8U0Mo',
    'Figures of Speech': 'TIVCCxgA2dQ',
    'Introduction to Poetry': '5KHYA0SZD6g',
    'Types of Poetry': 'QUDntbNV9cM',
    'Poetic Devices': '_frEE75cpCk',
    'Rhythm & Rhyme': 'iWxXAbIvkoU',
    'Sound Devices': 'TJf5W1DnQUs',
    'M3:Theme Analysis': 'idiQ6WAOWV0',
    'Poem Interpretation': '99I7m01k4ko',
    'WAEC Poetry Practice': 'PaWYjHHbjwc',
    'Introduction to Drama': 'XJSKHwVYsvk',
    'Elements of Drama': 'O3Vs_Noo7mw',
    'Tragedy': 'T-PKotyoxys',
    'Comedy': 'imlwmNO9xlY',
    'Dramatic Techniques': 'n7gz8OywTmQ',
    'M4:Character Analysis': 'SGmgLVHfaY4',
    'M4:Theme Analysis': 'ht9OYIiW_FE',
    'WAEC Drama Practice': '6uUXPgJJGSI',
    'Introduction to Prose': 'xTaV9k_PG9Y',
    'Types of Prose': 'EYXwpTwP97M',
    'Plot Development': 'omZXlLrbANo',
    'M5:Character Analysis': 'X7UoCVbTJGk',
    'M5:Theme Analysis': 'Oa0u7ZsRhOw',
    'M5:Setting': 'DL3vHVa3OXU',
    'Narrative Techniques': '-Lk9SYjHEb4',
    'WAEC Prose Practice': 'iOnfexXB1sM',
    'Introduction to African Literature': 'llivCHJZFcQ',
    'African Writers': 'WxllOluLlb8',
    'African Themes': 'pAvclHBycWo',
    'Culture & Tradition': 'qrVwO6OeZiQ',
    'Colonial & Post-Colonial Literature': '5jI-TN9F6c0',
    'Contemporary African Literature': '1AoTU2YvOR0',
    'M6:Text Analysis': '9Yvg_WhKIwg',
    'M6:Practice Questions': 'alMRMb6Dk7I',
    'Introduction to World Literature': 'Iqda-Bpvvrs',
    'Shakespeare & Classical Literature': 'I4kz-C7GryY',
    'Modern Literature': 'iuyYaRcQtCo',
    'Comparative Literature': '80MHxn0XQvQ',
    'International Literary Themes': 'gsFcoYaVylw',
    'M7:Text Analysis': 'SsXetDab6_4',
    'M7:Practice Questions': '0e9-UGyZCAw',
    'Literary Comparisons': 'RLdZR9S7kOg',
    'Literary Essay Writing': 'olgDaGLZXx8',
    'Answering WAEC Questions': 'u-oe8bwI5t0',
    'Quoting Effectively': 'FBN0SQrVZcs',
    'Time Management': 's776GKJPqFY',
    'Common Mistakes': 'Tq_BoPJsv-4',
    'Examination Techniques': 'yn1KLNb08E8',
    'Objective Questions Practice': 'WEGVKfmohRE',
    'Theory Questions Practice': 'REN1h5bnFcA',
    'Prescribed Text Revision': '0n6kLPTkMRw',
    'Poetry Revision': 'nWEtiVPRec0',
    'Drama Revision': 'bc2laOC_3m8',
    'Prose Revision': '5_iArLhWMZ8',
    'Literary Terms Review': 'eQ6LefK80FQ',
    'Past WAEC Questions': 'SWZEDLT300Q',
    'Performance Review': 'vKA4zOD-Nts',
    'Complete Literature Revision': 'NzMCIPrjZlo',
    'Certificate Requirements': 'AC94pydCi3Y'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB['wassce-literature'].modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE Literature videos] distinct video applied to ' + applied + ' lessons');
  }
})();
