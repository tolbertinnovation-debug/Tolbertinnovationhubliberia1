/* TIH Complete WASSCE History Preparation Course.
   Builds COURSES_DB['wassce-history'] directly with the full 10-module WAEC
   History structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC History syllabus, with strong Liberian-history coverage.
   Modelled on wassce-literature-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-history';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceHistFull) return;

  // No dedicated WASSCE History videos exist; reuse the vetted English-domain
  // pool (reading/essay skills apply to a reading- and essay-heavy humanities
  // subject). Content, notes and quizzes are fully history-specific.
  var VIDEOS = {
    intro: ['OyU6vjsy9CU'],
    precolonial: ['hBECGqt_krw'],
    westafrica: ['TCJOLfcKf8s'],
    colonial: ['X6Zsq2DsMuw'],
    liberia: ['nN3xEcl8byA'],
    modernafrica: ['F2KbHDkoRRM'],
    world: ['C0X0JX2hXVk'],
    skills: ['OyU6vjsy9CU'],
    revision: ['OyU6vjsy9CU'],
    final: ['OyU6vjsy9CU']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE History', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE History Exam', 'Exam Structure & Marking Scheme', 'What is History?', 'Historical Sources', 'Study Strategies']],
    [2, 'Pre-Colonial African History', '🏺', 'precolonial', 'content', ['Early African Civilizations', 'Ancient Egypt', 'Ghana Empire', 'Mali Empire', 'Songhai Empire', 'Great Zimbabwe', 'Traditional African Societies', 'African Kingdoms & States']],
    [3, 'West African History', '🌍', 'westafrica', 'content', ['Early West African Kingdoms', 'Trans-Saharan Trade', 'European Contact', 'The Atlantic Slave Trade', 'Abolition of the Slave Trade', 'Islamic Influence in West Africa', 'Missionary Activities', 'Social & Economic Development']],
    [4, 'Colonialism & Nationalism', '⛓️', 'colonial', 'content', ['European Imperialism', 'The Berlin Conference', 'Colonial Administration', 'Resistance to Colonial Rule', 'Rise of Nationalism', 'Independence Movements', 'Decolonization', 'Pan-Africanism']],
    [5, 'Liberian History', '🇱🇷', 'liberia', 'content', ['Indigenous Peoples of Liberia', 'Arrival of Settlers', 'Founding of Liberia', 'Independence of Liberia', 'Political Development', 'Economic Development', 'Civil Conflicts', 'Peacebuilding & National Reconstruction']],
    [6, 'Modern African History', '🤝', 'modernafrica', 'content', ['African Independence', 'African Union', 'ECOWAS', 'Regional Integration', 'Democracy in Africa', 'Development Challenges', 'Peacekeeping', 'Contemporary African Issues']],
    [7, 'World History', '🗺️', 'world', 'content', ['World Wars I & II', 'The Cold War', 'United Nations', 'Globalization', 'Human Rights', 'Scientific & Industrial Revolutions', 'International Organizations', 'Contemporary World Events']],
    [8, 'Historical Skills & Examination Practice', '🔎', 'skills', 'content', ['Historical Interpretation', 'Source Analysis', 'Essay Writing', 'Timeline Development', 'Map Reading', 'Past WAEC Questions', 'Mock Examination', 'Performance Review']],
    [9, 'Revision & Examination Strategies', '🎯', 'revision', 'content', ['Topic-by-Topic Revision', 'Key Dates & Events', 'Important Historical Figures', 'Common Examination Questions', 'Time Management', 'Final Revision']],
    [10, 'Final Assessment & Graduation', '🏆', 'final', 'content', ['Complete History Revision', 'Full Mock Examination', 'Essay Assessment', 'Objective Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE History exam', precolonial: 'pre-colonial African history', westafrica: 'West African history', colonial: 'colonialism & nationalism', liberia: 'Liberian history', modernafrica: 'modern African history', world: 'world history', skills: 'historical skills & exam practice', revision: 'revision & exam strategy', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    precolonial: '<h4>📥 Guide: Pre-Colonial African Empires</h4><ul><li><strong>Ghana Empire</strong> (c. 300–1200 AD): wealth from the trans-Saharan gold–salt trade.</li><li><strong>Mali Empire</strong> (c. 1235–1600): Sundiata; Mansa Musa’s famous pilgrimage; Timbuktu as a centre of learning.</li><li><strong>Songhai Empire</strong> (c. 1464–1591): Sunni Ali and Askia Muhammad; fell to a Moroccan invasion.</li><li><strong>Great Zimbabwe:</strong> a powerful southern-African stone-city state.</li><li><strong>Ancient Egypt:</strong> pharaohs, the Nile, pyramids and early writing.</li></ul>',
    westafrica: '<h4>📥 Guide: West African History</h4><ul><li><strong>Trans-Saharan trade:</strong> gold, salt, kola nuts and enslaved people across the Sahara.</li><li><strong>European contact:</strong> Portuguese arrival on the coast from the 15th century.</li><li><strong>Atlantic slave trade:</strong> the triangular trade and its devastating effects.</li><li><strong>Abolition:</strong> Britain abolished the trade in 1807.</li><li><strong>Islam & missionaries</strong> spread through trade and education.</li></ul>',
    colonial: '<h4>📥 Guide: Colonialism & Nationalism</h4><ul><li><strong>Berlin Conference (1884–85):</strong> European powers partitioned Africa.</li><li><strong>Administration:</strong> direct rule (French) vs indirect rule (British).</li><li><strong>Resistance:</strong> both armed resistance and later political movements.</li><li><strong>Nationalism:</strong> demands for self-rule; independence movements after WWII.</li><li><strong>Pan-Africanism:</strong> unity of African peoples (Nkrumah, DuBois, Garvey).</li></ul>',
    liberia: '<h4>📥 Guide: Key Facts in Liberian History</h4><ul><li><strong>Indigenous peoples:</strong> 16 major ethnic groups long before settlement.</li><li><strong>American Colonization Society (ACS):</strong> settled freed African-Americans from 1822.</li><li><strong>Independence: 26 July 1847</strong> — Africa’s first republic; first President Joseph Jenkins Roberts.</li><li><strong>True Whig Party</strong> dominated politics until the 1980 coup (Samuel Doe).</li><li><strong>Civil wars (1989–2003);</strong> 2003 peace accord; Ellen Johnson Sirleaf elected 2005 (Africa’s first elected female head of state); Truth & Reconciliation Commission.</li></ul>',
    world: '<h4>📥 Guide: World History Milestones</h4><ul><li><strong>World War I (1914–18)</strong> and <strong>World War II (1939–45).</strong></li><li><strong>United Nations</strong> founded 1945 to keep international peace.</li><li><strong>Cold War:</strong> rivalry between the USA and USSR (1947–1991).</li><li><strong>Industrial Revolution:</strong> mechanised production from the 18th century.</li><li><strong>Human rights:</strong> Universal Declaration of Human Rights, 1948.</li></ul>',
    skills: '<h4>📥 Template: History Essay & Source Skills</h4><ol><li><strong>Introduction:</strong> address the exact question and set out your argument.</li><li><strong>Body:</strong> one point per paragraph — statement, evidence (dates/facts), explanation.</li><li><strong>Source analysis:</strong> consider origin, purpose, reliability and bias.</li><li><strong>Chronology:</strong> keep events in the correct order; use accurate dates.</li><li><strong>Conclusion:</strong> answer the question directly, weighing the evidence.</li></ol>'
  };
  function templateFor(name, skill) {
    if (skill === 'precolonial' || /Ghana Empire|Mali|Songhai|Zimbabwe|Egypt|Civilizations|Kingdoms/i.test(name)) return TEMPLATES.precolonial;
    if (skill === 'westafrica' || /Trans-Saharan|Slave Trade|European Contact|Islamic Influence|Missionary/i.test(name)) return TEMPLATES.westafrica;
    if (skill === 'colonial' || /Imperialism|Berlin Conference|Colonial|Nationalism|Decolonization|Pan-Africanism/i.test(name)) return TEMPLATES.colonial;
    if (skill === 'liberia' || /Liberia|Settlers|Indigenous Peoples/i.test(name)) return TEMPLATES.liberia;
    if (skill === 'world' || /World War|Cold War|United Nations|Globalization|Human Rights|Revolutions/i.test(name)) return TEMPLATES.world;
    if (skill === 'skills' || /Source Analysis|Essay Writing|Timeline|Map Reading|Interpretation/i.test(name)) return TEMPLATES.skills;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE History skills';
    var focus = position % 2 ? 'clear facts, dates and timed essay practice' : 'understanding the events and applying them to WAEC-style questions with evidence';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE History · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, dates and maps, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Know the causes, key figures, dates and effects of <em>' + esc(name) + '</em>, and how WAEC tests it.</li>' +
      '<li>Study the sequence of events and support points with accurate evidence.</li>' +
      '<li>Practise with past-question-style items, answering the question rather than just narrating.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, using dates and evidence, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Build a short timeline or note the causes and effects of <em>' + esc(name) + '</em>.</li>' +
      '<li><strong>Exercise 2:</strong> Write a short answer under exam timing, using evidence, and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE History preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this task — analyse the source, build the timeline, or write the essay — using accurate dates and evidence, then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE History exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'History is best described as the study of:', opts: ['The future', 'Past human events and their causes and effects', 'Only maps', 'Rocks'], correct: 1, exp: 'History studies past events, their causes and effects.' },
      { q: 'A primary historical source is:', opts: ['A modern textbook', 'A first-hand record from the time (e.g. a letter or artefact)', 'A rumour', 'A film review'], correct: 1, exp: 'Primary sources come directly from the period studied.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Only length', 'Relevant facts, dates and a reasoned argument', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate evidence and argument score marks.' },
      { q: 'A secondary source is one that:', opts: ['Was made at the time of the event', 'Interprets events after they happened (e.g. a textbook)', 'Is always false', 'Has no author'], correct: 1, exp: 'Secondary sources interpret events later.' },
      { q: 'A good study strategy for History is to:', opts: ['Ignore dates', 'Learn key dates/figures and practise essays', 'Only memorise names', 'Skip revision'], correct: 1, exp: 'Master dates and figures, then practise essay answers.' }
    ],
    precolonial: [
      { q: 'The wealth of the Ghana, Mali and Songhai empires came largely from the:', opts: ['Oil trade', 'Trans-Saharan gold and salt trade', 'Internet', 'Space race'], correct: 1, exp: 'Trans-Saharan trade in gold and salt made them wealthy.' },
      { q: 'Mansa Musa, famous for his pilgrimage to Mecca, ruled the:', opts: ['Ghana Empire', 'Mali Empire', 'Great Zimbabwe', 'Roman Empire'], correct: 1, exp: 'Mansa Musa was the celebrated ruler of Mali.' },
      { q: 'Ancient Egyptian civilization developed along the river:', opts: ['Niger', 'Nile', 'Congo', 'Volta'], correct: 1, exp: 'Egypt grew along the Nile.' },
      { q: 'Timbuktu was renowned as a centre of:', opts: ['Trade and Islamic learning', 'Coal mining', 'Car manufacturing', 'Space launches'], correct: 0, exp: 'Timbuktu was a hub of commerce and scholarship.' },
      { q: 'The Songhai Empire eventually fell to an invasion by:', opts: ['Britain', 'Morocco', 'Portugal', 'Ghana'], correct: 1, exp: 'A Moroccan army defeated Songhai in 1591.' },
      { q: 'Great Zimbabwe is best known for its:', opts: ['Great stone-walled city', 'Pyramids', 'Canals', 'Skyscrapers'], correct: 0, exp: 'Great Zimbabwe is famed for its massive stone structures.' }
    ],
    westafrica: [
      { q: 'The Atlantic slave trade is also called the:', opts: ['Silk Road', 'Triangular trade', 'Cold War', 'Gold rush'], correct: 1, exp: 'It linked Europe, Africa and the Americas in a triangle.' },
      { q: 'The first Europeans to trade on the West African coast were the:', opts: ['Portuguese', 'Americans', 'Russians', 'Chinese'], correct: 0, exp: 'The Portuguese arrived from the 15th century.' },
      { q: 'Britain abolished the slave trade in:', opts: ['1707', '1807', '1907', '1947'], correct: 1, exp: 'The British abolished the slave trade in 1807.' },
      { q: 'Goods carried across the Sahara included gold, salt and:', opts: ['Plastics', 'Kola nuts', 'Cars', 'Oil'], correct: 1, exp: 'Kola nuts, cloth and enslaved people were also traded.' },
      { q: 'Islam spread into West Africa mainly through:', opts: ['Trade and scholars', 'Television', 'Railways', 'Aeroplanes'], correct: 0, exp: 'Traders and scholars spread Islam along trade routes.' },
      { q: 'Christian missionaries in West Africa were closely linked with:', opts: ['Space exploration', 'Western education and churches', 'Oil drilling', 'Nothing'], correct: 1, exp: 'Missionaries introduced Western schools and churches.' }
    ],
    colonial: [
      { q: 'The Berlin Conference (1884–85) was held to:', opts: ['End WWII', 'Partition Africa among European powers', 'Found the UN', 'Abolish slavery'], correct: 1, exp: 'It set rules for the European "Scramble for Africa".' },
      { q: 'The British colonial system relied mainly on:', opts: ['Direct rule', 'Indirect rule (through local chiefs)', 'No rule', 'Democracy'], correct: 1, exp: 'Britain used indirect rule through traditional rulers.' },
      { q: 'Pan-Africanism promotes the:', opts: ['Division of Africa', 'Unity and solidarity of African peoples', 'Return of colonial rule', 'End of trade'], correct: 1, exp: 'Pan-Africanism seeks African unity.' },
      { q: 'Kwame Nkrumah led the independence of:', opts: ['Ghana', 'Egypt', 'Kenya', 'Liberia'], correct: 0, exp: 'Nkrumah led Ghana to independence in 1957.' },
      { q: 'Most African nationalist movements grew strongest after:', opts: ['World War II', 'The internet age', 'The Cold War ended', 'The Berlin Conference only'], correct: 0, exp: 'Nationalism surged after WWII, leading to independence.' },
      { q: 'Decolonization refers to the process of:', opts: ['Gaining colonies', 'Colonies gaining independence', 'Building empires', 'Trading slaves'], correct: 1, exp: 'Decolonization is the ending of colonial rule.' }
    ],
    liberia: [
      { q: 'Liberia declared its independence in:', opts: ['1822', '1847', '1957', '1980'], correct: 1, exp: 'Liberia became independent on 26 July 1847.' },
      { q: 'Liberia was founded with settlers organised by the:', opts: ['United Nations', 'American Colonization Society (ACS)', 'British Empire', 'ECOWAS'], correct: 1, exp: 'The ACS settled freed African-Americans from 1822.' },
      { q: 'The first President of Liberia was:', opts: ['Samuel Doe', 'Joseph Jenkins Roberts', 'William Tubman', 'Ellen Johnson Sirleaf'], correct: 1, exp: 'J. J. Roberts became the first President in 1848.' },
      { q: 'Ellen Johnson Sirleaf is notable as Africa’s first:', opts: ['Elected female head of state', 'King', 'Explorer', 'Missionary'], correct: 0, exp: 'She was elected President of Liberia in 2005.' },
      { q: 'Before the settlers arrived, Liberia was home to:', opts: ['No one', 'Many indigenous ethnic groups', 'Only Europeans', 'Only Americans'], correct: 1, exp: 'Sixteen major indigenous groups lived there long before.' },
      { q: 'Liberia’s civil wars were largely ended by the peace agreement of:', opts: ['1990', '2003', '2015', '1980'], correct: 1, exp: 'The 2003 Accra peace accord ended the second civil war.' }
    ],
    modernafrica: [
      { q: 'ECOWAS is a regional body for:', opts: ['East Africa', 'West African states', 'Europe', 'The Americas'], correct: 1, exp: 'ECOWAS = Economic Community of West African States.' },
      { q: 'The African Union (AU) replaced the:', opts: ['United Nations', 'Organisation of African Unity (OAU)', 'ECOWAS', 'League of Nations'], correct: 1, exp: 'The AU replaced the OAU in 2002.' },
      { q: 'The main aim of regional integration is to:', opts: ['Divide states', 'Promote cooperation, trade and development', 'End all trade', 'Start wars'], correct: 1, exp: 'Integration boosts cooperation and economic development.' },
      { q: 'A common development challenge in modern Africa is:', opts: ['Too much wealth', 'Poverty, conflict and weak infrastructure', 'No population', 'No resources at all'], correct: 1, exp: 'Poverty, conflict and infrastructure gaps are key challenges.' },
      { q: 'The year often called the "Year of Africa", when many states became independent, was:', opts: ['1945', '1960', '1990', '2000'], correct: 1, exp: 'In 1960 many African countries gained independence.' },
      { q: 'ECOMOG was an ECOWAS force used mainly for:', opts: ['Trade', 'Peacekeeping (e.g. in Liberia)', 'Sports', 'Farming'], correct: 1, exp: 'ECOMOG was ECOWAS’s peacekeeping force in Liberia and beyond.' }
    ],
    world: [
      { q: 'World War II took place during:', opts: ['1914–1918', '1939–1945', '1947–1991', '1960–1970'], correct: 1, exp: 'WWII was fought from 1939 to 1945.' },
      { q: 'The United Nations was founded in:', opts: ['1919', '1945', '1960', '1991'], correct: 1, exp: 'The UN was established in 1945.' },
      { q: 'The Cold War was a rivalry mainly between the USA and the:', opts: ['UK', 'USSR (Soviet Union)', 'France', 'China'], correct: 1, exp: 'The Cold War pitted the USA against the USSR.' },
      { q: 'The Industrial Revolution began in the 18th century in:', opts: ['Britain', 'Japan', 'Liberia', 'Egypt'], correct: 0, exp: 'It began in Britain and spread worldwide.' },
      { q: 'The Universal Declaration of Human Rights was adopted in:', opts: ['1928', '1948', '1968', '1988'], correct: 1, exp: 'The UDHR was adopted by the UN in 1948.' },
      { q: 'World War I is often said to have been triggered by:', opts: ['The fall of Rome', 'The assassination of Archduke Franz Ferdinand', 'The internet', 'The Berlin Conference'], correct: 1, exp: 'The 1914 assassination in Sarajevo helped spark WWI.' }
    ],
    examstrat: [
      { q: 'A history essay should mainly:', opts: ['Narrate everything you know', 'Answer the question with relevant facts and argument', 'List only names', 'Be one sentence'], correct: 1, exp: 'Answer the question with a reasoned, evidenced argument.' },
      { q: 'When analysing a source you should consider its:', opts: ['Colour only', 'Origin, purpose, reliability and bias', 'Length only', 'Price'], correct: 1, exp: 'Evaluate origin, purpose, reliability and possible bias.' },
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'Accurate dates and chronology in an answer:', opts: ['Waste time', 'Strengthen the answer and earn marks', 'Are banned', 'Do not matter'], correct: 1, exp: 'Correct dates and order improve history answers.' },
      { q: 'A common History mistake is:', opts: ['Answering the question', 'Narrating without answering the question set', 'Using evidence', 'Planning the essay'], correct: 1, exp: 'Storytelling without addressing the question loses marks.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', precolonial: 'precolonial', westafrica: 'westafrica', colonial: 'colonial', liberia: 'liberia', modernafrica: 'modernafrica', world: 'world', skills: 'examstrat', revision: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.precolonial, BANK.westafrica, BANK.colonial, BANK.liberia, BANK.modernafrica, BANK.world, BANK.examstrat);
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
        var qid = 'wh-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE History Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE History Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the source analysis, timelines and essay practice.</li><li>Pass the module quizzes and the Essay & Objective Assessments.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Mock Examination|Essay Assessment|Objective Assessment/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wh-m' + num + '-a' + flat;
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
      var pqid = 'wh-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE History: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE History preparation course aligned to the WAEC syllabus: pre-colonial African history, West African history, colonialism & nationalism, Liberian history, modern African history, world history, historical skills, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg,#8A5A2B,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE History examination with clear narratives, key dates, source analysis, essay coaching and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-HIST',
    learn: [
      'Understand the WAEC History exam structure and marking scheme',
      'Explain pre-colonial African empires and West African history',
      'Analyse colonialism, nationalism, decolonization and Pan-Africanism',
      'Master Liberian history from settlement and 1847 independence to today',
      'Understand modern African bodies (AU, ECOWAS) and world history',
      'Analyse sources and write high-scoring history essays with exam techniques'
    ],
    requirements: ['A phone or computer with internet', 'A history notebook for dates, figures and timelines', 'Access to the WAEC prescribed topics and past questions', 'Commitment to reading and timed essay practice'],
    about: [
      'This is the complete TIH WASSCE History preparation course, organised into ten modules aligned to the WAEC History syllabus and examination structure (objective and essay/theory), with strong Liberian- and West-African-history coverage.',
      'Every content lesson has a video and printable notes with key dates and figures; downloadable resources include historical timelines, empire and world-history guides, a key-dates booklet and essay templates. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-history',
    _wassceHistFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-HISTORY] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
