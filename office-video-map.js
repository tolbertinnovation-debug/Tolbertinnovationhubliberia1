/* TIH OFFICE — keyword video map (100% coverage). Course id: office */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.office || !COURSES_DB.office.modules) return;
  var RULES = [
  [["word","document","letter","mail merge","header","paragraph","resume","cover letter","proposal","minutes"], "iBY5tpKXN6g"],
  [["excel","spreadsheet","formula","pivot","chart","dashboard","kpi","data clean","data visual"], "rwbho0CgEAE"],
  [["powerpoint","presentation","slide","animation","transition"], "u7Tku3OBug0"],
  [["outlook","email","calendar"], "Vtr_o5l_O4U"],
  [["teams","meeting","collaboration"], "JJ_L_xWw1Hk"],
  [["onedrive","onenote","cloud"], "Vtr_o5l_O4U"],
  [["copilot","ai ","prompt"], "n5b8BMrtEJ8"],
  [["linkedin","freelance","career","interview","portfolio"], "e_DvOPN8Ar4"]
];
  var DEFAULT_VID = 'j-ZWL594OW8';
  function pick(title) {
    var t = String(title || '').toLowerCase();
    for (var i = 0; i < RULES.length; i++) {
      var keys = RULES[i][0], vid = RULES[i][1];
      for (var j = 0; j < keys.length; j++) {
        if (t.indexOf(keys[j]) !== -1) return vid;
      }
    }
    return DEFAULT_VID;
  }
  var applied = 0, prev = null, changes = 0;
  COURSES_DB.office.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz) return;
      var vid = pick(lesson.t);
      lesson.v = vid;
      applied += 1;
      if (prev && prev !== vid) changes += 1;
      prev = vid;
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[OFFICE videos] applied to ' + applied + ' lessons (' + changes + ' video changes between topics)');
  }
})();
