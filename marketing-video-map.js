/* TIH MARKETING — keyword video map (100% coverage). Course id: marketing */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.marketing || !COURSES_DB.marketing.modules) return;
  var RULES = [
  [["seo","keyword","backlink","on-page","off-page","link building"], "xsVTqzratPs"],
  [["google ads","sem","search campaign","display campaign","shopping","campaign budget","ad copy"], "YJS5I3e3NZA"],
  [["facebook","instagram","linkedin","tiktok","twitter","youtube marketing","whatsapp","social media","influencer","community"], "qVdtkwtVL3Q"],
  [["email","lead magnet","newsletter","segmentation","a/b testing"], "0Y5eQ2v2mFQ"],
  [["content","copywrit","blog","editorial","repurpos","podcast","canva","storytell"], "C6lGyQX-f2A"],
  [["brand"], "sI4Gkh0G9CM"],
  [["analytics","kpi","google analytics","metric","performance","measurement"], "sXpjE_G7o8Y"],
  [["crm"], "sXpjE_G7o8Y"],
  [["ai ","chatgpt","prompt"], "n5b8BMrtEJ8"],
  [["e-commerce","ecommerce","landing","website","conversion"], "nU-T2NPrHHI"],
  [["freelance","portfolio","career","resume","interview"], "e_DvOPN8Ar4"]
];
  var DEFAULT_VID = 'nU-T2NPrHHI';
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
  COURSES_DB.marketing.modules.forEach(function (mod) {
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
    console.log('[MARKETING videos] applied to ' + applied + ' lessons (' + changes + ' video changes between topics)');
  }
})();
