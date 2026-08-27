/* TIH WASSCE HEALTH SCIENCE — one distinct YouTube video per topic.
   Course id: wassce-health-science

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 6 videos across 72 lessons, one of them playing on 29.

   Keys are the lesson title with its numeric prefix stripped. No title
   repeats across modules in this course, so no module-qualified keys are
   needed; the apply hook still resolves "M<n>:Title" first should one
   appear later. */
(function () {
  var C = (typeof COURSES_DB === 'undefined') ? null : COURSES_DB['wassce-health-science'];
  if (!C || !C.modules) return;
  var MAP = {
    'Course Orientation': 'Cpb0RBBL9Wc',
    'Exam Structure & Marking Scheme': '6pVdzz2_JUw',
    'What is Health Science?': '0JDCViWGn-0',
    'Dimensions of Health': '8Z1C7B98KEY',
    'Study Strategies': '9eu1bbOy5xw',
    'Cells and Tissues': '0ISybDu8tK4',
    'Skeletal System': 'OAe2367z8jU',
    'Muscular System': 'i5aXwiC3wWc',
    'Circulatory System': 'LReJG7PrXFY',
    'Respiratory System': '0GSRbmcNh3A',
    'Digestive System': 'eWHH9je2zG4',
    'Nervous System': 'vLCg_kyuyw4',
    'Endocrine System': '8TveCTps_Xw',
    'Reproductive System': 'emvHaBiRY8Q',
    'Excretory System': 'e7YBQluGxjc',
    'Personal Hygiene': 'PmXTJE0FIoI',
    'Oral Health': 'jQ2e0KH5WrI',
    'Skin Care': '01COSszay_g',
    'Healthy Lifestyle': 'gqROsijqVsw',
    'Physical Exercise': 'RquASwISdDk',
    'Mental Health': 'YFaTGFFKsFg',
    'Substance Abuse Prevention': '0ZPTXQ0KqOQ',
    'Healthy Habits': 'D5BtnvQqbWs',
    'Nutrients and Their Functions': '_z6F1cDF7VY',
    'Balanced Diet': 'dbgSdZFPrz8',
    'Meal Planning': 'WNPXltTID1I',
    'Food Preservation': 'mkD-0rYqSUQ',
    'Food Hygiene': 'VM5fGbCGthA',
    'Malnutrition': 'cZDmpSxXEIg',
    'Nutritional Deficiency Diseases': 'HP5z1-FTH-A',
    'Healthy Eating': 'sokV_z_JL6Q',
    'Communicable Diseases': 'rG4oxslLzsM',
    'Non-Communicable Diseases': 'A_MF7OZ3wv8',
    'Vector-Borne Diseases': 'HkTGbloHQOY',
    'Immunization': '1MR1E9TCEy8',
    'Infection Prevention': 'BTNhUF5SDHw',
    'HIV/AIDS': 'ShDd-kRptfA',
    'Tuberculosis': 'fQfWy4ZNXO8',
    'Malaria Prevention': 'HkmL7A--MKY',
    'Environmental Sanitation': 'gvNJBcvm0pM',
    'Safe Water Supply': 'ePYrp1yvs2o',
    'Waste Management': 'QoXx_uwRDDc',
    'Pollution': 'msRqB3NkCeY',
    'Community Health Services': '0YaIA_x_AfU',
    'Public Health Programs': 'IBH63uXsy8U',
    'Health Education': '5wSsOLEAeNg',
    'Sustainable Environmental Health': 'TDBCq96R9Pc',
    'Principles of First Aid': '4G67yN-7L2Y',
    'Bleeding and Wound Care': 'ExBXCaasqtU',
    'Fractures and Sprains': '5OKFljZ2GQE',
    'Burns and Scalds': '8gdGKvpZago',
    'Choking': '7CXB7yEnt40',
    'Cardiopulmonary Resuscitation (CPR) Basics': 'At9VDNOQRl8',
    'Poisoning': 'zUIkCpceOTQ',
    'Emergency Response': 'NZvyr4PXtCw',
    'Human Reproduction': 'SYhyM4yvkLE',
    'Family Planning': 'ikaogWXgMos',
    'Pregnancy and Childbirth': 'aEQzI2jFtlg',
    'Maternal Health': 'N2G1XWVs69g',
    'Child Health': 'WYr_Bp53PcQ',
    'Adolescent Health': '6Lg1I92x2k8',
    'Sexual Health': '8cWH7pIPYIM',
    'Responsible Parenthood': 'OejdOS4IqeE',
    'Objective Test Practice': 'YwriiCYTIv0',
    'Theory Question Practice': 'hn6YDo39tx4',
    'Case Studies': '72KTCKuwYv8',
    'Practical Health Scenarios': 'ODUuMeAW9TU',
    'Past WAEC Questions': 'pWvaccITJWo',
    'Complete Health Science Revision': 'fmpAdsuavOg',
    'Key Concepts Review': '4plOmiq-SYw',
    'Examination Techniques': 'pOyNZu6JVUc',
    'Certificate Requirements': 'jDDl9u3JcTo'
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
  C.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE HEALTH SCIENCE videos] distinct video applied to ' + applied + ' lessons');
  }
})();
