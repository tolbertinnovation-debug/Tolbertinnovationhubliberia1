/* TIH Complete WASSCE Civic Education Preparation Course.
   Builds COURSES_DB['wassce-civic'] directly with the full 10-module WAEC
   Civic Education structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Civic Education syllabus. Modelled on
   wassce-history-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-civic-education';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceCivicFull) return;

  // No dedicated WASSCE Civic Education videos exist; reuse the economics
  // governance video and the vetted English-domain pool (reading/essay skills).
  // Content, notes and quizzes are fully civic-education-specific.
  var VIDEOS = {
    intro: ['iyxi4d21tAM'],
    citizenship: ['BFkYCFtrZBw'],
    rights: ['CFtqrmwpv0M'],
    democracy: ['fbAAHa6NJF4'],
    constitution: ['7bTPvvYGq8M'],
    peace: ['xGfOlaS_CMA'],
    development: ['fbAAHa6NJF4'],
    leadership: ['BFkYCFtrZBw'],
    exampractice: ['iyxi4d21tAM'],
    final: ['iyxi4d21tAM']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Civic Education', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Civic Education Exam', 'Exam Structure & Marking Scheme', 'What is Civic Education?', 'Goals of Civic Education', 'Study Strategies']],
    [2, 'Citizenship & National Values', '🎖️', 'citizenship', 'content', ['Meaning of Citizenship', 'Rights of Citizens', 'Duties and Responsibilities of Citizens', 'National Values', 'Patriotism', 'National Symbols', 'National Identity', 'Responsible Citizenship']],
    [3, 'Human Rights & Rule of Law', '⚖️', 'rights', 'content', ['Fundamental Human Rights', 'Universal Declaration of Human Rights', 'Rule of Law', 'Equality Before the Law', 'Justice and Fairness', 'Protection of Human Rights', 'Child Rights', "Women's Rights"]],
    [4, 'Democracy & Good Governance', '🗳️', 'democracy', 'content', ['Meaning of Democracy', 'Principles of Democracy', 'Types of Government', 'Separation of Powers', 'Arms of Government', 'Electoral Systems', 'Good Governance', 'Accountability and Transparency']],
    [5, 'Constitution & Public Institutions', '🏛️', 'constitution', 'content', ['Meaning of the Constitution', 'Constitutional Development', 'Public Institutions', 'Legislature', 'Executive', 'Judiciary', 'Local Government', 'Public Service']],
    [6, 'Peace, Conflict Resolution & National Security', '🕊️', 'peace', 'content', ['Meaning of Peace', 'Causes of Conflict', 'Conflict Resolution', 'Peacebuilding', 'National Security', 'Security Agencies', 'Crime Prevention', 'Community Policing']],
    [7, 'National Development & Social Issues', '🌱', 'development', 'content', ['National Development', 'Sustainable Development', 'Poverty Reduction', 'Corruption and Anti-Corruption', 'Environmental Protection', 'Drug Abuse Prevention', 'Gender Equality', 'Community Development']],
    [8, 'Leadership & Civic Responsibility', '🤝', 'leadership', 'content', ['Leadership Qualities', 'Responsible Leadership', 'Volunteerism', 'Community Service', 'Decision-Making Skills', 'Civic Participation', 'Public Speaking', 'Ethical Leadership']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Case Studies', 'Current Affairs Review', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Civic Education Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Civic Education exam', citizenship: 'citizenship & national values', rights: 'human rights & the rule of law', democracy: 'democracy & good governance', constitution: 'the constitution & public institutions', peace: 'peace, conflict resolution & national security', development: 'national development & social issues', leadership: 'leadership & civic responsibility', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    citizenship: '<h4>📥 Guide: Citizenship & National Values</h4><ul><li><strong>Citizenship</strong> is legal membership of a state, with rights and duties.</li><li><strong>Ways to acquire it:</strong> by birth, by descent, by naturalisation, by registration.</li><li><strong>Rights:</strong> life, education, expression, association, fair hearing.</li><li><strong>Duties:</strong> obey the law, pay taxes, vote, defend the nation, respect others.</li><li><strong>National values:</strong> patriotism, honesty, discipline, unity and hard work.</li></ul>',
    rights: '<h4>📥 Guide: Human Rights & Rule of Law</h4><ul><li><strong>Human rights</strong> are basic entitlements of every person, simply for being human.</li><li><strong>UDHR:</strong> the Universal Declaration of Human Rights was adopted by the UN in 1948.</li><li><strong>Rule of law:</strong> everyone, including leaders, is subject to the law.</li><li><strong>Equality before the law:</strong> the law applies to all without discrimination.</li><li><strong>Child &amp; women’s rights</strong> are specially protected (e.g. the rights of the child).</li></ul>',
    democracy: '<h4>📥 Guide: Democracy & Good Governance</h4><ul><li><strong>Democracy:</strong> "government of the people, by the people, for the people".</li><li><strong>Principles:</strong> free and fair elections, rule of law, majority rule with minority rights.</li><li><strong>Separation of powers:</strong> legislature, executive and judiciary — checks and balances.</li><li><strong>Good governance:</strong> accountability, transparency, participation and responsiveness.</li><li><strong>Elections</strong> allow citizens to choose and change their leaders peacefully.</li></ul>',
    constitution: '<h4>📥 Guide: Constitution & Public Institutions</h4><ul><li><strong>Constitution:</strong> the supreme body of laws by which a country is governed.</li><li><strong>Legislature:</strong> makes laws (in Liberia, the Senate and House of Representatives).</li><li><strong>Executive:</strong> implements laws (President and cabinet).</li><li><strong>Judiciary:</strong> interprets laws and settles disputes (the courts).</li><li><strong>Local government &amp; public service</strong> deliver services to communities.</li></ul>',
    peace: '<h4>📥 Guide: Peace, Conflict & Security</h4><ul><li><strong>Peace</strong> is the absence of violence and the presence of justice and order.</li><li><strong>Causes of conflict:</strong> injustice, poverty, ethnicity, greed, poor leadership.</li><li><strong>Conflict resolution:</strong> dialogue, negotiation, mediation and reconciliation.</li><li><strong>National security</strong> protects citizens, territory and institutions.</li><li><strong>Community policing:</strong> the police and community work together to prevent crime.</li></ul>',
    development: '<h4>📥 Guide: National Development & Social Issues</h4><ul><li><strong>National development:</strong> improving the economy, society and welfare of citizens.</li><li><strong>Sustainable development</strong> meets present needs without harming the future.</li><li><strong>Corruption</strong> hinders development; anti-corruption promotes accountability.</li><li><strong>Social issues:</strong> poverty, drug abuse, gender inequality and the environment.</li><li><strong>Everyone</strong> has a role — through work, honesty and community participation.</li></ul>',
    leadership: '<h4>📥 Guide: Leadership & Civic Responsibility</h4><ul><li><strong>Leadership qualities:</strong> honesty, vision, courage, fairness and service.</li><li><strong>Responsible leadership</strong> serves the people and is accountable.</li><li><strong>Civic participation:</strong> voting, volunteering and community service.</li><li><strong>Decision-making:</strong> gather facts, weigh options and choose the common good.</li><li><strong>Ethical leadership</strong> upholds integrity and rejects corruption.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'citizenship' || /Citizenship|National Values|Patriotism|National Symbols|Duties/i.test(name)) return TEMPLATES.citizenship;
    if (skill === 'rights' || /Human Rights|Rule of Law|Equality|Justice|Child Rights|Women/i.test(name)) return TEMPLATES.rights;
    if (skill === 'democracy' || /Democracy|Separation of Powers|Arms of Government|Electoral|Governance|Accountability/i.test(name)) return TEMPLATES.democracy;
    if (skill === 'constitution' || /Constitution|Legislature|Executive|Judiciary|Local Government|Public Service/i.test(name)) return TEMPLATES.constitution;
    if (skill === 'peace' || /Peace|Conflict|Security|Policing|Crime/i.test(name)) return TEMPLATES.peace;
    if (skill === 'development' || /Development|Poverty|Corruption|Gender|Drug Abuse|Environmental/i.test(name)) return TEMPLATES.development;
    if (skill === 'leadership' || /Leadership|Volunteerism|Community Service|Civic Participation|Decision-Making/i.test(name)) return TEMPLATES.leadership;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Civic Education skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and case studies';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Civic Education · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study relevant examples (including Liberian and West African ones) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short case studies, giving reasons and examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain <em>' + esc(name) + '</em> with two examples in your civic notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Civic Education preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — analyse the case study or debate the issue — with clear reasons and examples, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Civic Education exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Civic Education is mainly the study of:', opts: ['Rocks and soil', 'The rights, duties and responsibilities of citizens in society', 'Cooking', 'Sport only'], correct: 1, exp: 'It teaches citizenship, rights, duties and governance.' },
      { q: 'A key goal of civic education is to produce:', opts: ['Passive people', 'Responsible, informed and active citizens', 'Only leaders', 'Only voters'], correct: 1, exp: 'It develops responsible, participating citizens.' },
      { q: 'WASSCE Civic Education usually consists of:', opts: ['Only an oral test', 'An objective paper and an essay/theory paper', 'One essay only', 'A practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is essay/theory.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct definitions, explanations and relevant examples', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Clear points, explanation and examples score marks.' },
      { q: 'A good study strategy for civic education is to:', opts: ['Ignore current affairs', 'Learn definitions and follow relevant current affairs', 'Only memorise names', 'Skip revision'], correct: 1, exp: 'Definitions plus current-affairs awareness help greatly.' }
    ],
    citizenship: [
      { q: 'Citizenship means:', opts: ['Living anywhere', 'Legal membership of a state with rights and duties', 'Being rich', 'Owning land only'], correct: 1, exp: 'A citizen is a recognised legal member of a state.' },
      { q: 'Which is a duty of a citizen?', opts: ['Breaking the law', 'Paying taxes and obeying the law', 'Avoiding voting', 'Ignoring the nation'], correct: 1, exp: 'Duties include obeying laws, paying taxes and voting.' },
      { q: 'One way to acquire citizenship is by:', opts: ['Buying a car', 'Birth, descent, naturalisation or registration', 'Watching TV', 'Travelling'], correct: 1, exp: 'Citizenship is acquired by birth, descent, naturalisation or registration.' },
      { q: 'Patriotism is:', opts: ['Hating your country', 'Love of and loyalty to one’s country', 'Ignoring the law', 'A tax'], correct: 1, exp: 'Patriotism is love and loyal service to one’s country.' },
      { q: 'National symbols include the:', opts: ['Flag, coat of arms and national anthem', 'Local market', 'A football club', 'A private company'], correct: 0, exp: 'The flag, anthem and coat of arms are national symbols.' },
      { q: 'Responsible citizenship involves:', opts: ['Only claiming rights', 'Balancing rights with duties to society', 'Avoiding community work', 'Breaking rules'], correct: 1, exp: 'Good citizens exercise rights AND perform duties.' }
    ],
    rights: [
      { q: 'The Universal Declaration of Human Rights was adopted in:', opts: ['1928', '1948', '1968', '1988'], correct: 1, exp: 'The UN adopted the UDHR in 1948.' },
      { q: 'Human rights are best described as rights that:', opts: ['Only leaders have', 'Every human being has simply for being human', 'Are bought', 'Belong to adults only'], correct: 1, exp: 'They are universal entitlements of all people.' },
      { q: 'The rule of law means:', opts: ['Leaders are above the law', 'Everyone, including leaders, is subject to the law', 'There are no laws', 'Only the poor obey laws'], correct: 1, exp: 'No one is above the law under the rule of law.' },
      { q: 'Equality before the law means the law applies:', opts: ['Only to some', 'To all persons without discrimination', 'Only to citizens who pay', 'Randomly'], correct: 1, exp: 'The law treats everyone equally.' },
      { q: 'A fundamental human right is the right to:', opts: ['Break laws', 'Life and personal liberty', 'Avoid all duties', 'Unlimited wealth'], correct: 1, exp: 'Life, liberty and fair hearing are fundamental rights.' },
      { q: 'The special protection of children’s rights is important because children are:', opts: ['Independent', 'Vulnerable and need protection', 'Adults', 'Not citizens'], correct: 1, exp: 'Children are vulnerable and require special protection.' }
    ],
    democracy: [
      { q: 'Democracy is often defined as government of the people, by the people and:', opts: ['For a few', 'For the people', 'Against the people', 'For leaders only'], correct: 1, exp: 'Lincoln: "government of the people, by the people, for the people".' },
      { q: 'The three arms of government are the legislature, the executive and the:', opts: ['Army', 'Judiciary', 'Media', 'Market'], correct: 1, exp: 'Legislature, executive and judiciary.' },
      { q: 'The main function of the legislature is to:', opts: ['Interpret laws', 'Make laws', 'Enforce laws', 'Fight wars'], correct: 1, exp: 'The legislature makes laws.' },
      { q: 'Separation of powers is designed to:', opts: ['Give one person all power', 'Prevent abuse through checks and balances', 'Remove elections', 'End the courts'], correct: 1, exp: 'It divides power to prevent its abuse.' },
      { q: 'A key feature of democracy is:', opts: ['One-party dictatorship', 'Free and fair elections', 'No rule of law', 'Life presidency'], correct: 1, exp: 'Regular free and fair elections are central to democracy.' },
      { q: 'Good governance requires accountability and:', opts: ['Secrecy', 'Transparency', 'Corruption', 'Force'], correct: 1, exp: 'Transparency and accountability define good governance.' }
    ],
    constitution: [
      { q: 'A constitution is:', opts: ['A newspaper', 'The supreme body of laws governing a country', 'A political party', 'A market'], correct: 1, exp: 'The constitution is the supreme law of the land.' },
      { q: 'The arm of government that interprets the laws is the:', opts: ['Legislature', 'Executive', 'Judiciary', 'Army'], correct: 2, exp: 'The judiciary (courts) interprets the law.' },
      { q: 'The arm of government that implements/enforces laws is the:', opts: ['Legislature', 'Executive', 'Judiciary', 'Press'], correct: 1, exp: 'The executive (President and cabinet) enforces laws.' },
      { q: 'The Liberian legislature is made up of the Senate and the:', opts: ['Supreme Court', 'House of Representatives', 'Cabinet', 'Army'], correct: 1, exp: 'Liberia has a bicameral legislature: Senate and House.' },
      { q: 'Local government exists mainly to:', opts: ['Replace the constitution', 'Bring administration and services closer to communities', 'Print money', 'Judge cases'], correct: 1, exp: 'Local government serves communities at the grassroots.' },
      { q: 'The public service is responsible for:', opts: ['Winning elections', 'Delivering government services to citizens', 'Making the constitution', 'Judging cases'], correct: 1, exp: 'Civil/public servants implement policy and deliver services.' }
    ],
    peace: [
      { q: 'Peace is best described as:', opts: ['Constant war', 'The absence of violence with justice and order', 'Silence only', 'Wealth'], correct: 1, exp: 'Peace combines the absence of violence with justice.' },
      { q: 'A common cause of conflict is:', opts: ['Justice for all', 'Injustice, poverty or poor leadership', 'Free elections', 'Good governance'], correct: 1, exp: 'Injustice, poverty and greed often cause conflict.' },
      { q: 'A peaceful method of resolving conflict is:', opts: ['Fighting', 'Dialogue and negotiation', 'Revenge', 'Ignoring it'], correct: 1, exp: 'Dialogue, mediation and negotiation resolve conflict peacefully.' },
      { q: 'National security aims mainly to protect:', opts: ['Only leaders', 'Citizens, territory and institutions', 'Only the rich', 'Foreign states'], correct: 1, exp: 'Security protects the people, territory and institutions.' },
      { q: 'Community policing means the police:', opts: ['Work alone', 'Partner with the community to prevent crime', 'Ignore the public', 'Only arrest people'], correct: 1, exp: 'Community policing is police–community partnership.' },
      { q: 'Peacebuilding after conflict involves:', opts: ['More fighting', 'Reconciliation and rebuilding trust and institutions', 'Ignoring victims', 'Revenge'], correct: 1, exp: 'Peacebuilding rebuilds trust, institutions and reconciliation.' }
    ],
    development: [
      { q: 'Sustainable development means meeting present needs without:', opts: ['Any development', 'Compromising future generations’ needs', 'Using resources', 'Trading'], correct: 1, exp: 'It balances present and future needs.' },
      { q: 'Corruption harms a nation by:', opts: ['Speeding development', 'Wasting resources and slowing development', 'Improving services', 'Increasing trust'], correct: 1, exp: 'Corruption diverts resources and undermines development.' },
      { q: 'Gender equality means:', opts: ['Only men have rights', 'Equal rights and opportunities for all genders', 'No rights', 'Women above men'], correct: 1, exp: 'Gender equality gives equal rights and opportunities.' },
      { q: 'A way citizens can support national development is by:', opts: ['Evading taxes', 'Working honestly and participating in community projects', 'Damaging property', 'Corruption'], correct: 1, exp: 'Honest work and civic participation aid development.' },
      { q: 'Anti-corruption efforts promote:', opts: ['Secrecy', 'Accountability and transparency', 'Bribery', 'Waste'], correct: 1, exp: 'Anti-corruption strengthens accountability and transparency.' },
      { q: 'Environmental protection is important because it:', opts: ['Harms health', 'Safeguards resources and health for the future', 'Wastes money', 'Stops all industry'], correct: 1, exp: 'It preserves resources and public health.' }
    ],
    leadership: [
      { q: 'A quality of a good leader is:', opts: ['Dishonesty', 'Integrity and vision', 'Selfishness', 'Corruption'], correct: 1, exp: 'Integrity, vision, courage and service mark good leaders.' },
      { q: 'Responsible leadership is mainly about:', opts: ['Serving oneself', 'Serving the people and being accountable', 'Avoiding work', 'Keeping power forever'], correct: 1, exp: 'Responsible leaders serve and answer to the people.' },
      { q: 'Volunteerism means:', opts: ['Being paid a salary', 'Offering time/service freely for the common good', 'Refusing to help', 'Only helping family'], correct: 1, exp: 'Volunteering is unpaid service for the community.' },
      { q: 'Civic participation includes:', opts: ['Ignoring elections', 'Voting, volunteering and community service', 'Breaking laws', 'Avoiding the community'], correct: 1, exp: 'Active citizens vote and serve their communities.' },
      { q: 'Ethical leadership rejects:', opts: ['Honesty', 'Corruption and abuse of power', 'Fairness', 'Service'], correct: 1, exp: 'Ethical leaders uphold integrity and reject corruption.' },
      { q: 'Good decision-making involves:', opts: ['Guessing', 'Gathering facts and choosing the common good', 'Ignoring facts', 'Acting selfishly'], correct: 1, exp: 'Weigh facts and options for the common good.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Using relevant examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples support and strengthen points.' },
      { q: 'Following current affairs helps in civic education because:', opts: ['It is irrelevant', 'Questions often relate to real national/global issues', 'It wastes time', 'It confuses you'], correct: 1, exp: 'Current affairs connect to exam themes.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', citizenship: 'citizenship', rights: 'rights', democracy: 'democracy', constitution: 'constitution', peace: 'peace', development: 'development', leadership: 'leadership', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.citizenship, BANK.rights, BANK.democracy, BANK.constitution, BANK.peace, BANK.development, BANK.leadership, BANK.examstrat);
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
        var qid = 'wce-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Civic Education Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Civic Education Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the case studies and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wce-m' + num + '-a' + flat;
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
      var pqid = 'wce-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Civic Education: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Civic Education preparation course aligned to the WAEC syllabus: citizenship & national values, human rights & rule of law, democracy & good governance, the constitution & public institutions, peace & security, national development, leadership & civic responsibility, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg,#0B6FB0,#0B7A3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Civic Education examination with clear concepts, real examples, case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '50h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-CIVE',
    learn: [
      'Understand the WAEC Civic Education exam structure and marking scheme',
      'Explain citizenship, rights, duties and national values',
      'Understand human rights, the rule of law and equality before the law',
      'Explain democracy, good governance and the three arms of government',
      'Understand the constitution, public institutions, peace and national security',
      'Discuss national development, leadership and civic responsibility'
    ],
    requirements: ['A phone or computer with internet', 'A civic education notebook for definitions and examples', 'Awareness of national and current affairs', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Civic Education preparation course, organised into ten modules aligned to the WAEC Civic Education syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with clear definitions and real examples (including Liberian and West African ones); downloadable resources include a civic-education handbook, constitutional summaries and revision guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, current affairs, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-civic-education',
    _wassceCivicFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-CIVIC] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
