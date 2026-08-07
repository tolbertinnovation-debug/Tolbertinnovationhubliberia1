/* TIH Complete WASSCE Islamic Religious Studies (IRS) Preparation Course.
   Builds COURSES_DB['wassce-irs'] directly with the full 10-module WAEC IRS
   structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Islamic Religious Studies syllabus. Modelled on
   wassce-crs-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-irs';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceIRSFull) return;

  // No dedicated WASSCE IRS videos exist; reuse the vetted, subject-neutral
  // English-domain reading/essay pool (rather than another faith's videos).
  // Content, notes and quizzes are fully IRS-specific.
  var VIDEOS = {
    intro: ['CInpn_K5TvE'],
    quran: ['3p_rQ1z0k1M'],
    hadith: ['FvMKppojw-Q'],
    seerah: ['DW-00ckCAPI'],
    aqidah: ['CM8SOlfd7z8'],
    ibadah: ['OviGlDU34Rw'],
    law: ['O3_XQHz698E'],
    society: ['CInpn_K5TvE'],
    exampractice: ['CInpn_K5TvE'],
    final: ['CInpn_K5TvE']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Islamic Religious Studies', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE IRS Exam', 'Exam Structure & Marking Scheme', 'Introduction to Islamic Religious Studies', 'Importance of Islamic Education', 'Study Strategies']],
    [2, "The Qur'an", '📖', 'quran', 'content', ["Revelation of the Qur'an", "Compilation and Preservation of the Qur'an", "Structure of the Qur'an", 'Selected Surahs', "Qur'anic Teachings", 'Interpretation (Tafsir)', 'Memorization Techniques', "Lessons from the Qur'an"]],
    [3, 'Hadith & Sunnah', '📚', 'hadith', 'content', ['Meaning of Hadith', 'Classification of Hadith', 'Importance of the Sunnah', 'Major Hadith Collections', 'Selected Hadith Studies', 'Authenticity of Hadith', 'Application of Hadith', 'Moral Lessons']],
    [4, 'Life of Prophet Muhammad (Seerah)', '🕌', 'seerah', 'content', ['Arabia Before Islam', 'Birth and Early Life of the Prophet', 'First Revelation', 'The Makkah Period', 'The Hijrah (Migration)', 'The Madinah Period', 'Major Battles', 'Farewell Sermon', 'Death of the Prophet', 'Lessons from the Seerah']],
    [5, 'Islamic Beliefs (Aqidah)', '☪️', 'aqidah', 'content', ['The Six Articles of Faith', 'Tawhid (Oneness of Allah)', 'Angels', 'Divine Books', 'Prophets and Messengers', 'The Day of Judgment', 'Divine Decree (Qadr)', 'Life After Death']],
    [6, 'Acts of Worship (Ibadah)', '🤲', 'ibadah', 'content', ['The Five Pillars of Islam', 'Shahadah', 'Salah (Prayer)', 'Zakah', 'Sawm (Fasting)', 'Hajj (Pilgrimage)', "Du'a and Dhikr", 'Purification (Taharah)']],
    [7, "Islamic Law & Moral Conduct", '⚖️', 'law', 'content', ["Introduction to Shari'ah", 'Sources of Islamic Law', 'Family Life in Islam', 'Marriage and Divorce', 'Business Ethics', 'Justice and Equality', 'Rights and Responsibilities', 'Islamic Moral Values']],
    [8, 'Islam & Society', '🌍', 'society', 'content', ['Islamic Civilization', 'Contributions of Muslim Scholars', 'Leadership in Islam', 'Peace and Conflict Resolution', 'Religious Tolerance', 'Contemporary Issues', 'Community Development', 'Environmental Stewardship']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', "Qur'anic Interpretation", 'Hadith Analysis', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete IRS Revision', "Key Qur'anic Teachings Review", 'Key Hadith Review', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE IRS exam', quran: "the Qur'an", hadith: 'Hadith & Sunnah', seerah: 'the life of Prophet Muhammad (Seerah)', aqidah: 'Islamic beliefs (Aqidah)', ibadah: 'the acts of worship (Ibadah)', law: 'Islamic law & moral conduct', society: 'Islam & society', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    quran: "<h4>📥 Guide: The Qur'an</h4><ul><li><strong>Revelation:</strong> the Qur'an was revealed to Prophet Muhammad over about 23 years through Angel Jibril (Gabriel).</li><li><strong>Structure:</strong> 114 surahs (chapters) made up of ayahs (verses); Makkan and Madinan surahs.</li><li><strong>Compilation:</strong> memorised and written in the Prophet's time; compiled into one text under the early caliphs.</li><li><strong>Tafsir:</strong> the scholarly interpretation/explanation of the Qur'an.</li><li><strong>The Qur'an</strong> is the primary source of Islamic teaching and guidance.</li></ul>",
    hadith: '<h4>📥 Guide: Hadith & Sunnah</h4><ul><li><strong>Hadith:</strong> the recorded sayings, actions and approvals of Prophet Muhammad.</li><li><strong>Sunnah:</strong> the Prophet’s way of life — the second source of Islamic teaching after the Qur’an.</li><li><strong>Classification:</strong> by authenticity — sahih (sound), hasan (good), da’if (weak).</li><li><strong>Major collections:</strong> Sahih al-Bukhari and Sahih Muslim are the most authoritative.</li><li><strong>A hadith</strong> has a chain of narrators (isnad) and a text (matn).</li></ul>',
    seerah: '<h4>📥 Guide: Seerah (Life of the Prophet)</h4><ul><li><strong>Arabia before Islam:</strong> the age of ignorance (Jahiliyyah) — idol worship and injustice.</li><li><strong>The Prophet</strong> was born in Makkah (c. 570 CE); received the first revelation in the cave of Hira.</li><li><strong>Hijrah:</strong> the migration from Makkah to Madinah (marks the start of the Islamic calendar).</li><li><strong>Madinah:</strong> the Prophet built the first Muslim community and state.</li><li><strong>Farewell Sermon:</strong> stressed equality, justice, and the rights of all people.</li></ul>',
    aqidah: '<h4>📥 Guide: Aqidah (Islamic Beliefs)</h4><ul><li><strong>The Six Articles of Faith:</strong> belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree (Qadr).</li><li><strong>Tawhid:</strong> the absolute oneness of Allah — the central belief of Islam.</li><li><strong>Divine books</strong> include the Tawrah, Zabur, Injil and the Qur’an.</li><li><strong>Prophets &amp; messengers</strong> were sent to guide humanity (Adam … Muhammad).</li><li><strong>The Day of Judgment &amp; life after death</strong> — accountability for one’s deeds.</li></ul>',
    ibadah: '<h4>📥 Guide: Ibadah (Acts of Worship)</h4><ul><li><strong>The Five Pillars:</strong> Shahadah (faith), Salah (prayer), Zakah (charity), Sawm (fasting), Hajj (pilgrimage).</li><li><strong>Shahadah:</strong> the declaration that there is no god but Allah and Muhammad is His messenger.</li><li><strong>Salah:</strong> five daily prayers, preceded by purification (wudu/taharah).</li><li><strong>Zakah:</strong> obligatory alms; <strong>Sawm:</strong> fasting in Ramadan.</li><li><strong>Hajj:</strong> pilgrimage to Makkah, obligatory once if able.</li></ul>',
    law: "<h4>📥 Guide: Islamic Law & Moral Conduct</h4><ul><li><strong>Shari'ah:</strong> the moral and legal framework guiding a Muslim's life.</li><li><strong>Sources:</strong> the Qur'an, the Sunnah, ijma (consensus) and qiyas (analogy).</li><li><strong>Family life:</strong> marriage, mutual rights, and kindness within the family.</li><li><strong>Business ethics:</strong> honesty, fair dealing and the prohibition of riba (usury).</li><li><strong>Justice, equality and responsibility</strong> are core Islamic moral values.</li></ul>",
    society: '<h4>📥 Guide: Islam & Society</h4><ul><li><strong>Islamic civilization</strong> advanced learning in science, medicine, mathematics and philosophy.</li><li><strong>Muslim scholars</strong> (e.g. Al-Khwarizmi, Ibn Sina) made major contributions.</li><li><strong>Leadership</strong> in Islam is a trust (amanah) exercised with justice and consultation (shura).</li><li><strong>Peace, tolerance &amp; conflict resolution</strong> are encouraged; coercion in religion is rejected.</li><li><strong>Stewardship:</strong> humans are caretakers of the earth and its resources.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'quran' || /Qur'an|Surahs|Tafsir|Revelation of the Qur/i.test(name)) return TEMPLATES.quran;
    if (skill === 'hadith' || /Hadith|Sunnah/i.test(name)) return TEMPLATES.hadith;
    if (skill === 'seerah' || /Arabia|Prophet|Hijrah|Makkah|Madinah|Battles|Farewell|Seerah/i.test(name)) return TEMPLATES.seerah;
    if (skill === 'aqidah' || /Articles of Faith|Tawhid|Angels|Divine Books|Messengers|Day of Judgment|Qadr|Life After Death/i.test(name)) return TEMPLATES.aqidah;
    if (skill === 'ibadah' || /Pillars|Shahadah|Salah|Zakah|Sawm|Hajj|Du'a|Dhikr|Purification|Taharah/i.test(name)) return TEMPLATES.ibadah;
    if (skill === 'law' || /Shari'ah|Islamic Law|Family Life|Marriage|Business Ethics|Justice|Rights|Moral Values/i.test(name)) return TEMPLATES.law;
    if (skill === 'society' || /Civilization|Muslim Scholars|Leadership|Tolerance|Community|Environmental|Conflict/i.test(name)) return TEMPLATES.society;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE IRS skills';
    var focus = position % 2 ? 'clear teachings, key references and timed practice' : 'understanding the teaching and applying its lessons to life and WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE IRS · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and relevant Qur’an/Hadith references, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Know the teaching/account of <em>' + esc(name) + '</em> accurately, with its Qur’an or Hadith references.</li>' +
      '<li>Draw the lessons/applications examiners reward (WAEC asks for the text AND its application).</li>' +
      '<li>Practise with past-question-style items, stating the teaching then applying it to life today.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Study the teaching on <em>' + esc(name) + '</em> and answer one WAEC past question, checking it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Summarise the teaching of <em>' + esc(name) + '</em> with references in your IRS notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Write a short answer under exam timing (teaching + application) and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE IRS preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this study/essay task — state the teaching accurately and draw its lessons — then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE IRS exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A mosque only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Islamic Religious Studies is based mainly on the:', opts: ['Qur’an and Sunnah', 'A newspaper', 'A textbook only', 'Folk tales'], correct: 0, exp: 'IRS studies the Qur’an, Sunnah and Islamic teaching.' },
      { q: 'The two primary sources of Islamic teaching are the Qur’an and the:', opts: ['Sunnah (Hadith)', 'Weather', 'Constitution', 'Dictionary'], correct: 0, exp: 'The Qur’an and the Sunnah are the primary sources.' },
      { q: 'WAEC IRS questions usually require you to state the teaching AND its:', opts: ['Price', 'Application/lessons for today', 'Length', 'Colour'], correct: 1, exp: 'WAEC rewards accurate teaching plus application.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Accurate teaching, references and clear application', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate content and application score marks.' },
      { q: 'A good study strategy for IRS is to:', opts: ['Never read the Qur’an', 'Study the set passages/teachings and practise past questions', 'Only memorise dates', 'Skip revision'], correct: 1, exp: 'Study the prescribed material and practise answers.' }
    ],
    quran: [
      { q: 'The Qur’an was revealed to Prophet Muhammad through the angel:', opts: ['Mika’il', 'Jibril (Gabriel)', 'Israfil', 'None'], correct: 1, exp: 'Angel Jibril (Gabriel) brought the revelation.' },
      { q: 'The Qur’an contains how many surahs (chapters)?', opts: ['99', '114', '150', '30'], correct: 1, exp: 'The Qur’an has 114 surahs.' },
      { q: 'A chapter of the Qur’an is called a surah; a verse is called a(n):', opts: ['Ayah', 'Hadith', 'Surah', 'Juz only'], correct: 0, exp: 'A verse is an ayah.' },
      { q: 'The scholarly interpretation of the Qur’an is called:', opts: ['Tafsir', 'Tajwid only', 'Isnad', 'Salah'], correct: 0, exp: 'Tafsir is Qur’anic interpretation/exegesis.' },
      { q: 'The Qur’an was revealed over a period of about:', opts: ['1 year', '23 years', '100 years', '1 day'], correct: 1, exp: 'Revelation spanned roughly 23 years.' },
      { q: 'Surahs revealed before the Hijrah are described as:', opts: ['Makkan', 'Madinan', 'Modern', 'None'], correct: 0, exp: 'Makkan surahs were revealed in Makkah before the Hijrah.' }
    ],
    hadith: [
      { q: 'A Hadith is:', opts: ['A chapter of the Qur’an', 'A recorded saying, action or approval of the Prophet', 'A prayer only', 'A pillar'], correct: 1, exp: 'Hadith record the Prophet’s sayings, actions and approvals.' },
      { q: 'The Sunnah is the ___ source of Islamic teaching after the Qur’an:', opts: ['First', 'Second', 'Third', 'No'], correct: 1, exp: 'The Sunnah is the second primary source.' },
      { q: 'The most authoritative Hadith collections include:', opts: ['Sahih al-Bukhari and Sahih Muslim', 'A novel', 'A newspaper', 'A dictionary'], correct: 0, exp: 'Bukhari and Muslim are the most authoritative collections.' },
      { q: 'A sound, reliable Hadith is classified as:', opts: ['Sahih', 'Da’if (weak)', 'False', 'Lost'], correct: 0, exp: 'Sahih means authentic/sound; da’if means weak.' },
      { q: 'The chain of narrators of a Hadith is called the:', opts: ['Matn', 'Isnad (sanad)', 'Surah', 'Ayah'], correct: 1, exp: 'The isnad is the chain of transmission; the matn is the text.' },
      { q: 'Studying Hadith helps Muslims to:', opts: ['Ignore the Prophet', 'Follow the Prophet’s example (Sunnah) in daily life', 'Avoid prayer', 'Reject the Qur’an'], correct: 1, exp: 'Hadith guide practice of the Prophet’s Sunnah.' }
    ],
    seerah: [
      { q: 'Prophet Muhammad was born in the city of:', opts: ['Madinah', 'Makkah', 'Jerusalem', 'Cairo'], correct: 1, exp: 'The Prophet was born in Makkah.' },
      { q: 'The migration of the Prophet from Makkah to Madinah is called the:', opts: ['Hajj', 'Hijrah', 'Salah', 'Zakah'], correct: 1, exp: 'The Hijrah marks the start of the Islamic calendar.' },
      { q: 'The first revelation came to the Prophet in the cave of:', opts: ['Hira', 'Thawr', 'Uhud', 'Badr'], correct: 0, exp: 'The first revelation came in the cave of Hira.' },
      { q: 'The period of ignorance in Arabia before Islam is called:', opts: ['Jahiliyyah', 'Hijrah', 'Sunnah', 'Tafsir'], correct: 0, exp: 'Jahiliyyah = the age of ignorance before Islam.' },
      { q: 'The Prophet’s Farewell Sermon emphasised:', opts: ['Injustice', 'Equality, justice and human rights', 'Idol worship', 'War for its own sake'], correct: 1, exp: 'It stressed equality, justice and the rights of all.' },
      { q: 'In Madinah, the Prophet established the first:', opts: ['University in Europe', 'Muslim community/state', 'Bank', 'Empire in Asia'], correct: 1, exp: 'He built the first Muslim community and state in Madinah.' }
    ],
    aqidah: [
      { q: 'How many Articles of Faith are there in Islam?', opts: ['Five', 'Six', 'Ten', 'Three'], correct: 1, exp: 'There are six Articles of Faith.' },
      { q: 'Tawhid means the:', opts: ['Oneness of Allah', 'Five prayers', 'Fasting', 'Pilgrimage'], correct: 0, exp: 'Tawhid is the absolute oneness of Allah.' },
      { q: 'Which is one of the Articles of Faith?', opts: ['Belief in the angels', 'Belief in idols', 'Belief in luck', 'Belief in nothing'], correct: 0, exp: 'Belief in Allah, angels, books, messengers, the Last Day and Qadr.' },
      { q: 'Divine decree (that Allah knows and wills all things) is called:', opts: ['Qadr', 'Salah', 'Zakah', 'Tafsir'], correct: 0, exp: 'Qadr is belief in divine decree.' },
      { q: 'The final messenger in Islam is:', opts: ['Musa (Moses)', 'Prophet Muhammad', 'Isa (Jesus)', 'Ibrahim'], correct: 1, exp: 'Muhammad is regarded as the last prophet/messenger.' },
      { q: 'Belief in the Last Day means belief in:', opts: ['No accountability', 'Judgment and life after death', 'Reincarnation', 'Nothing'], correct: 1, exp: 'Belief in the Day of Judgment and the afterlife.' }
    ],
    ibadah: [
      { q: 'How many Pillars of Islam are there?', opts: ['Three', 'Five', 'Six', 'Ten'], correct: 1, exp: 'There are Five Pillars of Islam.' },
      { q: 'The declaration of faith is called the:', opts: ['Shahadah', 'Salah', 'Zakah', 'Hajj'], correct: 0, exp: 'The Shahadah is the declaration of faith.' },
      { q: 'How many obligatory daily prayers (Salah) are there?', opts: ['Three', 'Five', 'Seven', 'One'], correct: 1, exp: 'Muslims pray five obligatory prayers daily.' },
      { q: 'Fasting during the month of Ramadan is called:', opts: ['Sawm', 'Zakah', 'Hajj', 'Wudu'], correct: 0, exp: 'Sawm is fasting, obligatory in Ramadan.' },
      { q: 'The pilgrimage to Makkah is called:', opts: ['Hajj', 'Salah', 'Zakah', 'Dhikr'], correct: 0, exp: 'Hajj is the pilgrimage, obligatory once if able.' },
      { q: 'Zakah is best described as:', opts: ['Obligatory almsgiving/charity', 'A prayer', 'A fast', 'A journey'], correct: 0, exp: 'Zakah is obligatory charity to purify wealth.' }
    ],
    law: [
      { q: 'The sources of Islamic law include the Qur’an, the Sunnah, ijma and:', opts: ['Qiyas (analogy)', 'The weather', 'A newspaper', 'Guessing'], correct: 0, exp: 'Qur’an, Sunnah, ijma (consensus) and qiyas (analogy).' },
      { q: 'Shari’ah refers to:', opts: ['A prayer', 'The moral and legal framework guiding a Muslim’s life', 'A pilgrimage', 'A surah'], correct: 1, exp: 'Shari’ah is the Islamic moral/legal framework.' },
      { q: 'Islamic business ethics prohibit:', opts: ['Honest trade', 'Riba (usury/interest) and cheating', 'Fair prices', 'Charity'], correct: 1, exp: 'Riba (usury) and dishonest dealing are prohibited.' },
      { q: 'Ijma means:', opts: ['Personal opinion only', 'Consensus of the scholars', 'A single Hadith', 'A prayer'], correct: 1, exp: 'Ijma is scholarly consensus.' },
      { q: 'A core Islamic moral value is:', opts: ['Injustice', 'Justice, honesty and kindness', 'Dishonesty', 'Oppression'], correct: 1, exp: 'Islam upholds justice, honesty and compassion.' },
      { q: 'Family life in Islam emphasises:', opts: ['Neglect', 'Mutual rights, kindness and responsibility', 'Injustice', 'Isolation'], correct: 1, exp: 'It stresses mutual rights and kindness in the family.' }
    ],
    society: [
      { q: 'Islamic civilization made major contributions to:', opts: ['Science, medicine and mathematics', 'Nothing', 'Only warfare', 'Only trade'], correct: 0, exp: 'Muslim scholars advanced many fields of knowledge.' },
      { q: 'Al-Khwarizmi is remembered as a pioneer of:', opts: ['Algebra/mathematics', 'Football', 'Cooking', 'Music only'], correct: 0, exp: 'Al-Khwarizmi is a founder of algebra.' },
      { q: 'Consultation in Islamic leadership is called:', opts: ['Shura', 'Sawm', 'Hajj', 'Zakah'], correct: 0, exp: 'Shura (consultation) guides just leadership.' },
      { q: 'Islam teaches that there should be no ___ in religion:', opts: ['Compulsion/coercion', 'Prayer', 'Charity', 'Learning'], correct: 0, exp: '"There is no compulsion in religion" (Qur’an 2:256).' },
      { q: 'Environmental stewardship in Islam means humans are:', opts: ['Owners who may destroy nature', 'Caretakers (khalifah) of the earth', 'Unrelated to nature', 'Free to waste'], correct: 1, exp: 'Humans are trustees/caretakers of the earth.' },
      { q: 'Religious tolerance in Islam means:', opts: ['Forcing others to convert', 'Respecting others’ beliefs while practising your own', 'Banning worship', 'Hating others'], correct: 1, exp: 'Tolerance respects others while living one’s faith.' }
    ],
    examstrat: [
      { q: 'An IRS essay should:', opts: ['Ignore the question', 'State the teaching accurately AND apply its lessons', 'Only list names', 'Be one sentence'], correct: 1, exp: 'WAEC wants accurate teaching plus application.' },
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'Qur’an and Hadith references in your answers:', opts: ['Waste time', 'Strengthen the answer and earn marks', 'Are banned', 'Do not matter'], correct: 1, exp: 'Accurate references support and strengthen points.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'A common IRS mistake is:', opts: ['Applying the teaching', 'Stating the teaching but forgetting the application', 'Using references', 'Planning the essay'], correct: 1, exp: 'Missing the application loses marks.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', quran: 'quran', hadith: 'hadith', seerah: 'seerah', aqidah: 'aqidah', ibadah: 'ibadah', law: 'law', society: 'society', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.quran, BANK.hadith, BANK.seerah, BANK.aqidah, BANK.ibadah, BANK.law, BANK.society, BANK.examstrat);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'wir-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE IRS Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE IRS Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the Qur’an/Hadith analysis and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, the Qur’an and Hadith, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wir-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, then review every answer explanation.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        var pv = pool[idx % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'wir-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Islamic Religious Studies (IRS): Complete Preparation',
    shortDesc: "A full 10-module WASSCE Islamic Religious Studies preparation course aligned to the WAEC syllabus: the Qur'an, Hadith & Sunnah, the life of Prophet Muhammad (Seerah), Islamic beliefs (Aqidah), acts of worship (Ibadah), Islamic law & moral conduct, Islam & society, examination practice, revision, and a full mock examination with a Certificate of Completion.",
    category: 'WASSCE Exam Prep',
    icon: '☪️',
    gradient: 'linear-gradient(135deg,#0B7A5A,#0B3A2A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Islamic Religious Studies examination with clear teachings, key Qur’an/Hadith references, application of lessons and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '50h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-IRS',
    learn: [
      'Understand the WAEC IRS exam structure and marking scheme',
      "Know the revelation, structure and teachings of the Qur'an",
      'Understand Hadith, the Sunnah and their authentication',
      'Explain the life of Prophet Muhammad (Seerah) and its lessons',
      'Explain Islamic beliefs (Aqidah) and the acts of worship (Ibadah)',
      "Understand Islamic law (Shari'ah), ethics and Islam in society"
    ],
    requirements: ['A phone or computer with internet', 'A copy of the Qur’an (and Hadith where possible)', 'An IRS notebook for teachings, references and lessons', 'Commitment to study and timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Islamic Religious Studies preparation course, organised into ten modules aligned to the WAEC IRS syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with key Qur’an and Hadith references; downloadable resources include Qur’an study guides, Hadith collections and lesson summaries. The course ends with a full mock examination and a Certificate of Completion.',
      'IRS answers must state the teaching accurately AND apply its lessons. Use this course together with the official WAEC syllabus, the Qur’an and Hadith, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-irs',
    _wassceIRSFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-IRS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
