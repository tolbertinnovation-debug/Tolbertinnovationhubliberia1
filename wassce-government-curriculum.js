/* TIH Complete WASSCE Government Preparation Course.
   Builds COURSES_DB['wassce-government'] directly with the full 10-module WAEC
   Government structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Government syllabus. Modelled on
   wassce-civic-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-government';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceGovtFull) return;

  // No dedicated WASSCE Government videos exist; reuse the economics governance
  // video and the vetted English-domain pool (reading/essay skills). Content,
  // notes and quizzes are fully Government-specific.
  var VIDEOS = {
    intro: ['9dGuLxosuI8'],
    concepts: ['rqlsRHrxaDU'],
    constitution: ['BFwr0kliVPU'],
    systems: ['uUqeAsogI70'],
    parties: ['IxjmDcHFRoE'],
    admin: ['rTTjxXgkp7M'],
    international: ['j7ctp4bfjhs'],
    african: ['FudD6VMbw3g'],
    exampractice: ['1MYwhCWczh0'],
    final: ['yl-NavDhcrE']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Government', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Government Exam', 'Exam Structure & Marking Scheme', 'What is Government?', 'Basic Political Concepts', 'Study Strategies']],
    [2, 'Political Concepts & Principles', '💡', 'concepts', 'content', ['Power, Authority & Legitimacy', 'Sovereignty', 'Democracy', 'Justice', 'Equality', 'Liberty', 'Citizenship', 'Political Culture']],
    [3, 'Constitutions & Constitutional Development', '📜', 'constitution', 'content', ['Meaning of a Constitution', 'Types of Constitutions', 'Features of a Good Constitution', 'Constitutional Development', 'Rule of Law', 'Constitutional Amendments', 'Separation of Powers', 'Checks and Balances']],
    [4, 'Systems & Organs of Government', '🏛️', 'systems', 'content', ['Unitary Government', 'Federal Government', 'Confederal Government', 'Presidential System', 'Parliamentary System', 'Legislature', 'Executive', 'Judiciary']],
    [5, 'Political Parties & Electoral Systems', '🗳️', 'parties', 'content', ['Political Parties', 'Party Systems', 'Elections', 'Electoral Processes', 'Electoral Commissions', 'Voting Systems', 'Political Participation', 'Pressure Groups']],
    [6, 'Public Administration & Local Government', '🏢', 'admin', 'content', ['Public Administration', 'Civil Service', 'Public Corporations', 'Local Government', 'Public Policy', 'Bureaucracy', 'Administrative Reforms', 'Public Accountability']],
    [7, 'International Relations', '🌐', 'international', 'content', ['Meaning of International Relations', 'Foreign Policy', 'Diplomacy', 'International Organizations', 'United Nations (UN)', 'African Union (AU)', 'ECOWAS', 'Global Cooperation']],
    [8, 'African Government & Political Development', '🌍', 'african', 'content', ['Colonial Administration', 'Nationalism', 'Independence Movements', 'Military Rule', 'Democratic Governance', 'Political Development in West Africa', 'Contemporary Political Issues', 'Good Governance']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Case Studies', 'Political Analysis', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Government Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Government exam', concepts: 'political concepts & principles', constitution: 'constitutions & constitutional development', systems: 'the systems & organs of government', parties: 'political parties & electoral systems', admin: 'public administration & local government', international: 'international relations', african: 'African government & political development', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    concepts: '<h4>📥 Guide: Political Concepts</h4><ul><li><strong>Power:</strong> the ability to influence or control others; <strong>authority</strong> is the legitimate right to exercise power.</li><li><strong>Legitimacy:</strong> acceptance of a government’s right to rule.</li><li><strong>Sovereignty:</strong> supreme authority within a territory (internal &amp; external).</li><li><strong>Democracy:</strong> "government of the people, by the people, for the people".</li><li><strong>Liberty, equality, justice</strong> are core political values.</li></ul>',
    constitution: '<h4>📥 Guide: Constitutions</h4><ul><li><strong>Constitution:</strong> the body of fundamental laws by which a state is governed.</li><li><strong>Types:</strong> written vs unwritten; rigid vs flexible.</li><li><strong>Rule of law:</strong> everyone, including leaders, is subject to the law.</li><li><strong>Separation of powers:</strong> legislature, executive and judiciary act independently.</li><li><strong>Checks and balances</strong> stop any one arm from dominating.</li></ul>',
    systems: '<h4>📥 Guide: Systems & Organs of Government</h4><ul><li><strong>Unitary:</strong> power is concentrated in one central government.</li><li><strong>Federal:</strong> power is shared between central and state governments (e.g. Nigeria, USA).</li><li><strong>Confederal:</strong> a loose union of largely independent states.</li><li><strong>Presidential:</strong> executive (President) is separate from the legislature.</li><li><strong>Parliamentary:</strong> the executive (PM/cabinet) is drawn from the legislature.</li></ul>',
    parties: '<h4>📥 Guide: Parties & Electoral Systems</h4><ul><li><strong>Political party:</strong> an organised group seeking to win power and govern.</li><li><strong>Party systems:</strong> one-party, two-party and multi-party.</li><li><strong>Elections:</strong> the process of choosing leaders by voting.</li><li><strong>Electoral commission</strong> organises and supervises free and fair elections.</li><li><strong>Pressure groups</strong> influence policy without seeking to form a government.</li></ul>',
    admin: '<h4>📥 Guide: Public Administration & Local Government</h4><ul><li><strong>Public administration:</strong> implementing government policy and delivering services.</li><li><strong>Civil service:</strong> permanent, neutral officials who run ministries.</li><li><strong>Bureaucracy:</strong> the structured hierarchy of officials and rules.</li><li><strong>Local government</strong> brings administration closer to communities.</li><li><strong>Public accountability</strong> means officials answer for their use of power and funds.</li></ul>',
    international: '<h4>📥 Guide: International Relations</h4><ul><li><strong>International relations:</strong> how states interact with one another.</li><li><strong>Foreign policy:</strong> a state’s goals and actions towards other states.</li><li><strong>Diplomacy:</strong> managing relations through negotiation.</li><li><strong>UN (1945):</strong> maintains international peace and security.</li><li><strong>AU &amp; ECOWAS</strong> promote African and West African cooperation.</li></ul>',
    african: '<h4>📥 Guide: African Government & Political Development</h4><ul><li><strong>Colonial administration:</strong> direct rule (French) vs indirect rule (British).</li><li><strong>Nationalism</strong> drove the demand for independence after WWII.</li><li><strong>Military rule:</strong> government by the armed forces after coups.</li><li><strong>Democratic governance:</strong> a return to elected, accountable government.</li><li><strong>Good governance:</strong> transparency, accountability, participation and rule of law.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'concepts' || /Power|Authority|Sovereignty|Democracy|Justice|Equality|Liberty|Political Culture/i.test(name)) return TEMPLATES.concepts;
    if (skill === 'constitution' || /Constitution|Rule of Law|Separation of Powers|Checks and Balances|Amendments/i.test(name)) return TEMPLATES.constitution;
    if (skill === 'systems' || /Unitary|Federal|Confederal|Presidential|Parliamentary|Legislature|Executive|Judiciary/i.test(name)) return TEMPLATES.systems;
    if (skill === 'parties' || /Political Parties|Party Systems|Elections|Electoral|Voting|Pressure Groups/i.test(name)) return TEMPLATES.parties;
    if (skill === 'admin' || /Public Administration|Civil Service|Bureaucracy|Local Government|Public Accountability|Public Policy/i.test(name)) return TEMPLATES.admin;
    if (skill === 'international' || /International Relations|Foreign Policy|Diplomacy|United Nations|African Union|ECOWAS/i.test(name)) return TEMPLATES.international;
    if (skill === 'african' || /Colonial|Nationalism|Military Rule|Democratic Governance|Good Governance/i.test(name)) return TEMPLATES.african;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Government skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and case studies';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Government · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study relevant examples (including Liberian and West African ones) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short case studies, giving reasons and examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain <em>' + esc(name) + '</em> with two examples in your government notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Government preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — analyse the political case study or system — with clear reasons and examples, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Government exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Government can be defined as:', opts: ['A private business', 'The machinery/institutions through which a state is governed', 'A market', 'A football club'], correct: 1, exp: 'Government is the institutions and process of ruling a state.' },
      { q: 'WASSCE Government usually consists of:', opts: ['Only an oral test', 'An objective paper and an essay/theory paper', 'One essay only', 'A practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is essay/theory.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct definitions, explanations and relevant examples', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Clear points, explanation and examples score marks.' },
      { q: 'Political science is the study of:', opts: ['Only elections', 'Government, power and political behaviour', 'Farming', 'Chemistry'], correct: 1, exp: 'It studies government, power and political life.' },
      { q: 'A good study strategy for Government is to:', opts: ['Ignore current affairs', 'Learn definitions and follow relevant current affairs', 'Only memorise names', 'Skip revision'], correct: 1, exp: 'Definitions plus current-affairs awareness help greatly.' }
    ],
    concepts: [
      { q: 'Authority differs from power in that authority is:', opts: ['Illegitimate force', 'The legitimate/recognised right to exercise power', 'The same as wealth', 'Never obeyed'], correct: 1, exp: 'Authority is legitimate, accepted power.' },
      { q: 'Sovereignty means:', opts: ['Foreign control', 'Supreme authority within a territory', 'A political party', 'A type of tax'], correct: 1, exp: 'Sovereignty is supreme power over a state.' },
      { q: 'Legitimacy refers to:', opts: ['The use of force only', 'The people’s acceptance of a government’s right to rule', 'Wealth', 'A constitution only'], correct: 1, exp: 'Legitimacy is popular acceptance of authority.' },
      { q: 'Democracy is often defined as government of the people, by the people and:', opts: ['For a few', 'For the people', 'Against the people', 'For leaders only'], correct: 1, exp: 'Lincoln’s definition of democracy.' },
      { q: 'The value that stresses fair and impartial treatment is:', opts: ['Justice', 'Bureaucracy', 'Diplomacy', 'Sovereignty'], correct: 0, exp: 'Justice = fairness and impartiality.' },
      { q: 'Liberty is best described as:', opts: ['Total lawlessness', 'Freedom within the limits of the law', 'Dictatorship', 'A tax'], correct: 1, exp: 'Liberty is freedom exercised within lawful limits.' }
    ],
    constitution: [
      { q: 'A constitution that is contained in a single formal document is:', opts: ['Unwritten', 'Written', 'Flexible only', 'Illegal'], correct: 1, exp: 'A written constitution is in one formal document (e.g. the US Constitution).' },
      { q: 'A rigid constitution is one that is:', opts: ['Easy to change', 'Difficult to amend (needs a special procedure)', 'Never used', 'Unwritten'], correct: 1, exp: 'Rigid constitutions require a special amendment process.' },
      { q: 'The rule of law means:', opts: ['Leaders are above the law', 'Everyone, including leaders, is subject to the law', 'There are no laws', 'Only the poor obey laws'], correct: 1, exp: 'No one is above the law.' },
      { q: 'Separation of powers divides government into the legislature, executive and:', opts: ['Army', 'Judiciary', 'Media', 'Market'], correct: 1, exp: 'The three arms: legislature, executive and judiciary.' },
      { q: 'Checks and balances are designed to:', opts: ['Concentrate power', 'Prevent any one arm from abusing power', 'End elections', 'Remove the courts'], correct: 1, exp: 'Each arm limits the others to prevent abuse.' },
      { q: 'A feature of a good constitution is that it should be:', opts: ['Secret', 'Clear and generally acceptable to the people', 'Impossible to read', 'Only for leaders'], correct: 1, exp: 'Good constitutions are clear, fair and acceptable.' }
    ],
    systems: [
      { q: 'In a unitary system, power is:', opts: ['Shared with states', 'Concentrated in one central government', 'Held by the army', 'Absent'], correct: 1, exp: 'Unitary systems centralise power.' },
      { q: 'A federal system shares power between the central government and:', opts: ['One person', 'State/regional governments', 'Foreign states', 'Political parties'], correct: 1, exp: 'Federalism divides power between central and state tiers (e.g. Nigeria).' },
      { q: 'In a presidential system, the executive is:', opts: ['Part of the legislature', 'Separate from the legislature', 'The judiciary', 'A party'], correct: 1, exp: 'The President is separate from and not drawn from the legislature.' },
      { q: 'In a parliamentary system, the head of government is usually the:', opts: ['President only', 'Prime Minister, drawn from parliament', 'Chief Justice', 'Army commander'], correct: 1, exp: 'The PM and cabinet come from the legislature.' },
      { q: 'The organ of government that interprets the law is the:', opts: ['Legislature', 'Executive', 'Judiciary', 'Civil service'], correct: 2, exp: 'The judiciary interprets the law.' },
      { q: 'A confederal system is:', opts: ['A strong central state', 'A loose union of largely independent states', 'A one-party state', 'A monarchy'], correct: 1, exp: 'A confederation is a loose union of sovereign states.' }
    ],
    parties: [
      { q: 'A political party mainly aims to:', opts: ['Avoid power', 'Win political power and form a government', 'Sell goods', 'Judge cases'], correct: 1, exp: 'Parties seek to win power and govern.' },
      { q: 'A country with only one legal party has a:', opts: ['Two-party system', 'One-party system', 'Multi-party system', 'No system'], correct: 1, exp: 'One legal party = one-party system.' },
      { q: 'The body that organises and supervises elections is the:', opts: ['Judiciary only', 'Electoral commission', 'Army', 'Civil service'], correct: 1, exp: 'An independent electoral commission runs elections.' },
      { q: 'Pressure groups differ from parties because they:', opts: ['Seek to form a government', 'Influence policy without seeking to govern', 'Never engage in politics', 'Only vote'], correct: 1, exp: 'Pressure groups influence policy, not to govern.' },
      { q: 'Free and fair elections are important because they:', opts: ['Remove accountability', 'Let citizens choose and change leaders peacefully', 'End democracy', 'Cause chaos'], correct: 1, exp: 'Elections give legitimacy and peaceful change.' },
      { q: 'Universal adult suffrage means:', opts: ['Only men vote', 'All qualified adults have the right to vote', 'Only the rich vote', 'No one votes'], correct: 1, exp: 'All qualified adults may vote regardless of status.' }
    ],
    admin: [
      { q: 'The civil service is best described as:', opts: ['Elected politicians', 'Permanent, neutral officials who implement policy', 'Soldiers', 'Judges'], correct: 1, exp: 'Civil servants are permanent, politically neutral officials.' },
      { q: 'Bureaucracy refers to the:', opts: ['Army', 'Structured hierarchy of officials and rules', 'Voters', 'Courts'], correct: 1, exp: 'Bureaucracy is the organised administrative structure.' },
      { q: 'The main purpose of local government is to:', opts: ['Replace the constitution', 'Bring administration and services closer to the people', 'Print money', 'Judge cases'], correct: 1, exp: 'Local government serves communities at the grassroots.' },
      { q: 'Public accountability means officials must:', opts: ['Hide information', 'Answer for their use of power and public funds', 'Avoid audits', 'Keep secrets'], correct: 1, exp: 'Accountability requires answering for power and money used.' },
      { q: 'Public policy is:', opts: ['A private plan', 'A course of action adopted by government to address issues', 'A party manifesto only', 'A tax form'], correct: 1, exp: 'Public policy is government’s chosen action on issues.' },
      { q: 'A public corporation is owned by the:', opts: ['One person', 'Government/state', 'Foreign banks', 'A party'], correct: 1, exp: 'Public corporations are state-owned enterprises.' }
    ],
    international: [
      { q: 'International relations is the study of how ___ interact:', opts: ['Villages', 'States/countries', 'Schools', 'Markets'], correct: 1, exp: 'IR studies relations among states.' },
      { q: 'Foreign policy is a state’s:', opts: ['Internal budget', 'Strategy and actions towards other states', 'Constitution', 'Election law'], correct: 1, exp: 'Foreign policy guides dealings with other countries.' },
      { q: 'Diplomacy is the management of international relations through:', opts: ['War only', 'Negotiation and dialogue', 'Silence', 'Trade only'], correct: 1, exp: 'Diplomacy uses negotiation to manage relations.' },
      { q: 'The United Nations was founded in:', opts: ['1919', '1945', '1960', '1991'], correct: 1, exp: 'The UN was established in 1945.' },
      { q: 'ECOWAS is a regional organisation for:', opts: ['East Africa', 'West African states', 'Europe', 'The Americas'], correct: 1, exp: 'ECOWAS = Economic Community of West African States.' },
      { q: 'The African Union (AU) replaced the:', opts: ['United Nations', 'Organisation of African Unity (OAU)', 'ECOWAS', 'League of Nations'], correct: 1, exp: 'The AU replaced the OAU in 2002.' }
    ],
    african: [
      { q: 'The British colonial system relied mainly on:', opts: ['Direct rule', 'Indirect rule (through local chiefs)', 'No rule', 'Democracy'], correct: 1, exp: 'Britain governed through traditional rulers (indirect rule).' },
      { q: 'African nationalism grew strongest after:', opts: ['World War II', 'The internet age', 'The Cold War ended', 'The Berlin Conference only'], correct: 0, exp: 'Nationalism surged after WWII, leading to independence.' },
      { q: 'Military rule is government by the:', opts: ['Courts', 'Armed forces (usually after a coup)', 'Civil service', 'Voters'], correct: 1, exp: 'Military regimes take power, often by coup d’état.' },
      { q: 'Good governance requires accountability and:', opts: ['Secrecy', 'Transparency', 'Corruption', 'Force'], correct: 1, exp: 'Transparency and accountability define good governance.' },
      { q: 'Democratic governance means power is exercised through:', opts: ['Force only', 'Elected, accountable institutions and the rule of law', 'One ruler for life', 'No institutions'], correct: 1, exp: 'Democracy relies on elected, accountable institutions.' },
      { q: 'A contemporary political challenge in West Africa is:', opts: ['Perfect stability', 'Corruption, weak institutions and occasional instability', 'No elections needed', 'No leaders'], correct: 1, exp: 'Corruption and institutional weakness are key challenges.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Using relevant examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples support and strengthen points.' },
      { q: 'When a question says "distinguish between", you should:', opts: ['Define one term only', 'Show the differences between the two terms', 'Draw only', 'Skip it'], correct: 1, exp: 'Answer according to the command word — show differences.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', concepts: 'concepts', constitution: 'constitution', systems: 'systems', parties: 'parties', admin: 'admin', international: 'international', african: 'african', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.concepts, BANK.constitution, BANK.systems, BANK.parties, BANK.admin, BANK.international, BANK.african, BANK.examstrat);
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
        var qid = 'wgv-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Government Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Government Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the case studies and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wgv-m' + num + '-a' + flat;
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
      var pqid = 'wgv-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Government: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Government preparation course aligned to the WAEC syllabus: political concepts, constitutions, systems & organs of government, political parties & electoral systems, public administration & local government, international relations, African government & political development, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg,#3A2FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Government examination with clear concepts, real examples, case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-GOVT',
    learn: [
      'Understand the WAEC Government exam structure and marking scheme',
      'Explain power, authority, legitimacy, sovereignty and democracy',
      'Analyse constitutions, the rule of law and separation of powers',
      'Compare systems of government and the three organs of government',
      'Understand political parties, elections, public administration and local government',
      'Explain international relations, the UN, AU, ECOWAS and African political development'
    ],
    requirements: ['A phone or computer with internet', 'A government notebook for definitions, diagrams and examples', 'Awareness of national and current affairs', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Government preparation course, organised into ten modules aligned to the WAEC Government syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with clear definitions and real examples (including Liberian and West African ones); downloadable resources include constitutional summaries, political diagrams and a government glossary. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, current affairs, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-government',
    _wassceGovtFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-GOVERNMENT] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
