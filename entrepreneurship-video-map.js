/* TIH ENTREPRENEURSHIP — keyword video map (100% coverage). Course id: entrepreneurship */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.entrepreneurship || !COURSES_DB.entrepreneurship.modules) return;
  var RULES = [
  [["customer","validation","interview","persona","discovery","mvp","lean","canvas","prototype"], "sPevHD2Y7xU"],
  [["finance","funding","invest","cash","revenue","cost","pricing","bootstrapp"], "WN9Mks1s4tM"],
  [["pitch","deck"], "HCMVSV_ztl0"],
  [["market","brand","content","social","sales","funnel"], "nU-T2NPrHHI"],
  [["ai ","chatgpt"], "n5b8BMrtEJ8"]
];
  var DEFAULT_VID = 'Zk11nyT3n-M';
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
  COURSES_DB.entrepreneurship.modules.forEach(function (mod) {
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
    console.log('[ENTREPRENEURSHIP videos] applied to ' + applied + ' lessons (' + changes + ' video changes between topics)');
  }
})();
