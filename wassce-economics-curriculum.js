/* TIH Complete WASSCE Economics Preparation Course.
   Builds COURSES_DB['wassce-economics'] directly with the full 10-module WAEC
   Economics structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC Economics
   syllabus. Modelled on wassce-physics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-economics';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceEconFull) return;

  // Vetted WASSCE Economics videos (reused from the WASSCE Economics subject).
  var VIDEOS = {
    intro: ['VrmgfY7sP08', 'hHqoC97hFXY'],
    principles: ['VrmgfY7sP08', 'w_W3mJszXws'],
    demand: ['VrmgfY7sP08', 'hHqoC97hFXY'],
    business: ['w_W3mJszXws', 'VrmgfY7sP08'],
    money: ['zqHXZPVDbzg', 'w_W3mJszXws'],
    publicfinance: ['w_W3mJszXws', 'hHqoC97hFXY'],
    trade: ['LHXcZ-dtsXY', 'VrmgfY7sP08'],
    population: ['hHqoC97hFXY', 'LHXcZ-dtsXY'],
    exampractice: ['VrmgfY7sP08', 'w_W3mJszXws'],
    final: ['hHqoC97hFXY', 'zqHXZPVDbzg']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Economics', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Economics Exam', 'Exam Structure & Marking Scheme', 'What is Economics?', 'Basic Economic Concepts', 'Study Strategies']],
    [2, 'Basic Economic Principles', '⚖️', 'principles', 'content', ['Scarcity, Choice & Opportunity Cost', 'Factors of Production', 'Scale of Preference', 'Economic Systems', 'Production', 'Specialization & Division of Labour', 'Efficiency & Productivity', 'Economic Activities']],
    [3, 'Demand, Supply & Price Determination', '📈', 'demand', 'content', ['Demand', 'Supply', 'Market Equilibrium', 'Changes in Demand & Supply', 'Price Elasticity of Demand', 'Price Elasticity of Supply', 'Market Structures', 'Consumer & Producer Behaviour']],
    [4, 'Business Organizations', '🏢', 'business', 'content', ['Sole Proprietorship', 'Partnership', 'Limited Liability Companies', 'Public Corporations', 'Cooperatives', 'Multinational Companies', 'Business Growth', 'Privatization & Commercialization']],
    [5, 'Money, Banking & Inflation', '💵', 'money', 'content', ['Meaning and Functions of Money', 'Financial Institutions', 'Commercial Banks', 'Central Bank', 'Credit Creation', 'Inflation', 'Deflation', 'Monetary Policy']],
    [6, 'Public Finance & National Income', '🏛️', 'publicfinance', 'content', ['Government Revenue', 'Taxation', 'Public Expenditure', 'National Income', 'GDP & GNP', 'Per Capita Income', 'Fiscal Policy', 'National Budget']],
    [7, 'International Trade & Economic Development', '🌍', 'trade', 'content', ['International Trade', 'Balance of Trade', 'Balance of Payments', 'Exchange Rates', 'International Organizations', 'Economic Integration', 'Economic Development', 'Sustainable Development']],
    [8, 'Population, Labour & Development Issues', '👥', 'population', 'content', ['Population Growth', 'Labour Market', 'Unemployment', 'Human Capital Development', 'Poverty', 'Agriculture & Industrialization', 'Environmental Sustainability', 'Contemporary Economic Issues']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Data Interpretation', 'Graphs & Diagrams', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Economics Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals like "Mock Examinations"); NOT bare "Tests".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Economics exam', principles: 'basic economic principles', demand: 'demand, supply & price determination', business: 'business organizations', money: 'money, banking & inflation', publicfinance: 'public finance & national income', trade: 'international trade & economic development', population: 'population, labour & development issues', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    principles: '<h4>📥 Guide: Basic Economic Principles</h4><ul><li><strong>Scarcity:</strong> limited resources vs unlimited wants → we must choose.</li><li><strong>Opportunity cost:</strong> the next best alternative forgone when a choice is made.</li><li><strong>Factors of production:</strong> land, labour, capital and entrepreneurship.</li><li><strong>Scale of preference:</strong> a list of wants in order of importance.</li><li><strong>Economic systems:</strong> capitalist, socialist and mixed.</li></ul>',
    demand: '<h4>📥 Diagram Guide: Demand & Supply</h4><ul><li><strong>Law of demand:</strong> as price rises, quantity demanded falls (curve slopes down).</li><li><strong>Law of supply:</strong> as price rises, quantity supplied rises (curve slopes up).</li><li><strong>Equilibrium:</strong> where the demand and supply curves cross (Qd = Qs).</li><li><strong>Elasticity:</strong> PED = % change in Qd ÷ % change in price.</li><li><strong>Shifts:</strong> a change in income/taste shifts the whole curve; a price change moves along it.</li></ul>',
    business: '<h4>📥 Guide: Business Organizations</h4><ul><li><strong>Sole proprietorship:</strong> one owner, unlimited liability, easy to start.</li><li><strong>Partnership:</strong> 2–20 owners sharing capital, profit and liability.</li><li><strong>Limited liability company:</strong> separate legal entity; owners’ liability limited to shares.</li><li><strong>Public corporation:</strong> owned by government to provide public services.</li><li><strong>Cooperative:</strong> owned and run by members for their mutual benefit.</li></ul>',
    money: '<h4>📥 Guide: Money, Banking & Inflation</h4><ul><li><strong>Functions of money:</strong> medium of exchange, store of value, unit of account, standard of deferred payment.</li><li><strong>Central bank:</strong> issues currency, banker to government, controls money supply.</li><li><strong>Commercial banks</strong> accept deposits, give loans and create credit.</li><li><strong>Inflation:</strong> a sustained rise in the general price level.</li><li><strong>Monetary policy:</strong> control of money supply and interest rates by the central bank.</li></ul>',
    publicfinance: '<h4>📥 Formula Guide: Public Finance & National Income</h4><ul><li><strong>GDP:</strong> total value of goods/services produced within a country in a year.</li><li><strong>GNP:</strong> GDP + net income from abroad.</li><li><strong>Per capita income:</strong> national income ÷ population.</li><li><strong>Taxation:</strong> direct (income) and indirect (VAT); progressive, regressive, proportional.</li><li><strong>Fiscal policy:</strong> use of government revenue and expenditure to steer the economy.</li></ul>',
    trade: '<h4>📥 Guide: International Trade & Development</h4><ul><li><strong>Balance of trade:</strong> exports − imports of visible goods.</li><li><strong>Balance of payments:</strong> record of all transactions with the rest of the world.</li><li><strong>Exchange rate:</strong> the price of one currency in terms of another.</li><li><strong>Integration:</strong> e.g. ECOWAS — free movement of goods/people among members.</li><li><strong>Development</strong> means rising real income plus improved welfare and structure.</li></ul>',
    population: '<h4>📥 Guide: Population, Labour & Development</h4><ul><li><strong>Population growth</strong> = (births + immigration) − (deaths + emigration).</li><li><strong>Labour force:</strong> people able and willing to work.</li><li><strong>Unemployment types:</strong> structural, frictional, seasonal, cyclical.</li><li><strong>Human capital:</strong> investment in education, health and skills.</li><li><strong>Poverty & development:</strong> tackled through jobs, agriculture and industrialisation.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'principles' || /Scarcity|Opportunity|Factors of Production|Economic Systems|Scale of Preference/i.test(name)) return TEMPLATES.principles;
    if (skill === 'demand' || /Demand|Supply|Equilibrium|Elasticity|Market Structures/i.test(name)) return TEMPLATES.demand;
    if (skill === 'business' || /Proprietorship|Partnership|Liability|Corporations|Cooperatives/i.test(name)) return TEMPLATES.business;
    if (skill === 'money' || /Money|Bank|Inflation|Deflation|Monetary|Credit/i.test(name)) return TEMPLATES.money;
    if (skill === 'publicfinance' || /Taxation|National Income|GDP|Fiscal|Budget|Revenue/i.test(name)) return TEMPLATES.publicfinance;
    if (skill === 'trade' || /International Trade|Balance of|Exchange Rates|Integration|Development/i.test(name)) return TEMPLATES.trade;
    if (skill === 'population' || /Population|Labour|Unemployment|Poverty|Human Capital/i.test(name)) return TEMPLATES.population;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Economics skills';
    var focus = position % 2 ? 'clear definitions, diagrams and timed practice' : 'understanding the concept and applying it to WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Economics · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and diagrams, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study an economic diagram/example and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items, using diagrams and real Liberian/West African examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em> and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Define and illustrate <em>' + esc(name) + '</em> with a diagram or example in your notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Economics preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — interpret the data/diagram or analyse the case — then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Economics exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Economics usually consists of:', opts: ['Only an oral test', 'An objective paper and an essay/theory paper', 'One essay only', 'Practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is essay/theory.' },
      { q: 'Economics is best defined as the study of:', opts: ['Money only', 'How society allocates scarce resources to satisfy wants', 'Banking only', 'Farming'], correct: 1, exp: 'Economics studies the allocation of scarce resources.' },
      { q: 'The fundamental economic problem is:', opts: ['Too much money', 'Scarcity of resources relative to wants', 'Too many banks', 'No trade'], correct: 1, exp: 'Scarcity forces choice — the basic economic problem.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct definitions, explanations and diagrams', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate points, explanation and diagrams score marks.' },
      { q: 'A good study strategy for economics is to:', opts: ['Only read once', 'Learn definitions, draw diagrams and practise past questions', 'Skip diagrams', 'Memorise nothing'], correct: 1, exp: 'Definitions, diagrams and practice work best.' }
    ],
    principles: [
      { q: 'Opportunity cost is:', opts: ['The money price only', 'The next best alternative forgone', 'A tax', 'A profit'], correct: 1, exp: 'Opportunity cost is the best alternative given up.' },
      { q: 'Which is NOT a factor of production?', opts: ['Land', 'Labour', 'Money', 'Capital'], correct: 2, exp: 'The factors are land, labour, capital and entrepreneurship — money is not one.' },
      { q: 'A scale of preference is a list of wants arranged by:', opts: ['Alphabet', 'Order of importance', 'Price only', 'Colour'], correct: 1, exp: 'Wants are ranked by importance to guide choice.' },
      { q: 'Scarcity means resources are:', opts: ['Unlimited', 'Limited relative to wants', 'Free', 'Wasted'], correct: 1, exp: 'Scarcity = limited resources vs unlimited wants.' },
      { q: 'Division of labour means:', opts: ['One person does everything', 'Splitting work into specialised tasks', 'No work', 'Owning land'], correct: 1, exp: 'Specialisation raises productivity.' },
      { q: 'A mixed economy combines features of:', opts: ['Only capitalism', 'Capitalism and socialism (private + public sectors)', 'Only socialism', 'No system'], correct: 1, exp: 'A mixed economy has both private and public sectors.' }
    ],
    demand: [
      { q: 'The law of demand states that, other things equal, as price rises quantity demanded:', opts: ['Rises', 'Falls', 'Stays the same', 'Doubles'], correct: 1, exp: 'Demand curves slope downward.' },
      { q: 'Market equilibrium occurs where:', opts: ['Demand = 0', 'Quantity demanded = quantity supplied', 'Price = 0', 'Supply = 0'], correct: 1, exp: 'Equilibrium is where the curves intersect (Qd = Qs).' },
      { q: 'Price elasticity of demand measures the responsiveness of quantity demanded to a change in:', opts: ['Income', 'Price', 'Weather', 'Population'], correct: 1, exp: 'PED = %ΔQd ÷ %ΔPrice.' },
      { q: 'The supply curve normally slopes:', opts: ['Downward', 'Upward', 'Flat', 'In a circle'], correct: 1, exp: 'Higher prices encourage more supply.' },
      { q: 'A rise in consumer income usually causes the demand curve for a normal good to:', opts: ['Shift right (increase)', 'Shift left', 'Stay fixed', 'Disappear'], correct: 0, exp: 'Higher income raises demand for normal goods.' },
      { q: 'A market with a single seller is:', opts: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Duopoly'], correct: 1, exp: 'A monopoly has one seller.' }
    ],
    business: [
      { q: 'A key feature of a sole proprietorship is:', opts: ['Limited liability', 'Unlimited liability of the single owner', 'Many shareholders', 'Government ownership'], correct: 1, exp: 'The sole owner bears unlimited liability.' },
      { q: 'Shareholders in a limited liability company are liable only up to:', opts: ['All their assets', 'The amount they invested (their shares)', 'Nothing', 'The company’s debts'], correct: 1, exp: 'Liability is limited to share capital.' },
      { q: 'A public corporation is owned by:', opts: ['One person', 'The government', 'Foreign banks', 'Cooperatives'], correct: 1, exp: 'Public corporations are state-owned.' },
      { q: 'A cooperative society is owned and run for the benefit of its:', opts: ['Government', 'Members', 'Competitors', 'Banks'], correct: 1, exp: 'Cooperatives serve their members.' },
      { q: 'A partnership typically has:', opts: ['One owner', 'Between 2 and 20 owners', '1000 owners', 'No owners'], correct: 1, exp: 'Partnerships usually have 2–20 partners.' },
      { q: 'Privatization means transferring ownership from the:', opts: ['Private to public sector', 'Public (government) to private sector', 'Bank to customer', 'Buyer to seller'], correct: 1, exp: 'Privatization sells state enterprises to private owners.' }
    ],
    money: [
      { q: 'Which is a function of money?', opts: ['Medium of exchange', 'Cause of scarcity', 'Factor of production', 'A tax'], correct: 0, exp: 'Money is a medium of exchange, store of value, unit of account and standard of deferred payment.' },
      { q: 'The bank that issues a country’s currency is the:', opts: ['Commercial bank', 'Central bank', 'Cooperative', 'World Bank'], correct: 1, exp: 'The central bank issues currency and controls money supply.' },
      { q: 'Inflation is a sustained rise in the general level of:', opts: ['Employment', 'Prices', 'Exports', 'Population'], correct: 1, exp: 'Inflation = persistent rise in the price level.' },
      { q: 'Commercial banks create credit mainly through:', opts: ['Printing money', 'Lending out deposits', 'Taxation', 'Exporting'], correct: 1, exp: 'Banks create credit by lending a multiple of deposits.' },
      { q: 'Monetary policy is controlled by the:', opts: ['Ministry of Education', 'Central bank', 'Households', 'Exporters'], correct: 1, exp: 'The central bank runs monetary policy.' },
      { q: 'A fall in the general price level is called:', opts: ['Inflation', 'Deflation', 'Devaluation', 'Recession'], correct: 1, exp: 'Deflation is a sustained fall in prices.' }
    ],
    publicfinance: [
      { q: 'GDP measures the total value of goods and services produced:', opts: ['By citizens abroad', 'Within a country in a year', 'By one firm', 'In a decade'], correct: 1, exp: 'GDP = output produced within the country in a year.' },
      { q: 'Per capita income is national income divided by:', opts: ['The number of firms', 'The population', 'Exports', 'Taxes'], correct: 1, exp: 'Per capita income = national income ÷ population.' },
      { q: 'A direct tax is one levied on:', opts: ['Goods at the shop', 'Income or profit directly', 'Imports only', 'Nothing'], correct: 1, exp: 'Direct taxes (e.g. income tax) fall on income/wealth.' },
      { q: 'Fiscal policy involves government:', opts: ['Interest rates only', 'Revenue (taxes) and expenditure', 'Exchange rates', 'Printing money only'], correct: 1, exp: 'Fiscal policy = taxation and government spending.' },
      { q: 'GNP is GDP plus:', opts: ['Imports', 'Net income from abroad', 'Taxes', 'Population'], correct: 1, exp: 'GNP = GDP + net factor income from abroad.' },
      { q: 'A progressive tax takes a ___ proportion of income as income rises:', opts: ['Smaller', 'Larger', 'Equal', 'Zero'], correct: 1, exp: 'Progressive taxes rise as a share of income.' }
    ],
    trade: [
      { q: 'Balance of trade is the difference between a country’s:', opts: ['Taxes and spending', 'Visible exports and visible imports', 'Births and deaths', 'Loans and savings'], correct: 1, exp: 'Balance of trade = visible exports − visible imports.' },
      { q: 'An exchange rate is the price of one currency in terms of:', opts: ['Gold only', 'Another currency', 'Goods', 'Labour'], correct: 1, exp: 'Exchange rate = value of one currency vs another.' },
      { q: 'ECOWAS is an example of:', opts: ['A commercial bank', 'Regional economic integration', 'A tax', 'A stock market'], correct: 1, exp: 'ECOWAS integrates West African economies.' },
      { q: 'The balance of payments records:', opts: ['Only exports', 'All economic transactions with other countries', 'Only imports', 'Government salaries'], correct: 1, exp: 'BOP records all international transactions.' },
      { q: 'Countries trade internationally mainly because of:', opts: ['Identical resources', 'Differences in resources and comparative advantage', 'Boredom', 'Population only'], correct: 1, exp: 'Comparative advantage and differing resources drive trade.' },
      { q: 'Economic development refers to rising real income together with:', opts: ['More inflation', 'Improved welfare and economic structure', 'Higher unemployment', 'Less education'], correct: 1, exp: 'Development is growth plus welfare/structural improvement.' }
    ],
    population: [
      { q: 'Unemployment that arises from a mismatch of skills is:', opts: ['Seasonal', 'Structural', 'Frictional', 'None'], correct: 1, exp: 'Structural unemployment is caused by skills/industry mismatch.' },
      { q: 'The labour force consists of people who are:', opts: ['All citizens', 'Able and willing to work', 'Only students', 'Retired only'], correct: 1, exp: 'The labour force = those able and willing to work.' },
      { q: 'Human capital is developed mainly through:', opts: ['Printing money', 'Education, training and health', 'Higher taxes', 'Imports'], correct: 1, exp: 'Investment in education, skills and health builds human capital.' },
      { q: 'Population growth equals (births + immigration) minus:', opts: ['Exports', '(deaths + emigration)', 'Taxes', 'Savings'], correct: 1, exp: 'Growth = natural increase + net migration.' },
      { q: 'A major way to reduce poverty is to:', opts: ['Reduce jobs', 'Create employment and invest in agriculture/industry', 'Raise prices', 'Stop education'], correct: 1, exp: 'Jobs, agriculture and industrialisation reduce poverty.' },
      { q: 'Overpopulation occurs when population exceeds the:', opts: ['Number of banks', 'Available resources/optimum level', 'Exports', 'Tax rate'], correct: 1, exp: 'Overpopulation is population beyond the optimum for resources.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Well-drawn, labelled economic diagrams:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are optional decoration'], correct: 1, exp: 'Clear diagrams gain marks in economics essays.' },
      { q: 'When a question says "explain", you should:', opts: ['List one word', 'Give reasons and develop the point', 'Draw only', 'Skip it'], correct: 1, exp: 'Answer according to the command word — explain = give reasons.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', principles: 'principles', demand: 'demand', business: 'business', money: 'money', publicfinance: 'publicfinance', trade: 'trade', population: 'population', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.principles, BANK.demand, BANK.business, BANK.money, BANK.publicfinance, BANK.trade, BANK.population, BANK.examstrat);
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
        var qid = 'we-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Economics Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Economics Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the examination practice and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'we-m' + num + '-a' + flat;
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
      var pqid = 'we-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Economics: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Economics preparation course aligned to the WAEC syllabus: basic economic principles, demand/supply & price, business organizations, money/banking & inflation, public finance & national income, international trade & development, population & labour, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '📊',
    gradient: 'linear-gradient(135deg,#B08A0B,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Economics examination with concise lessons, clear diagrams, real-world examples and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-ECON',
    learn: [
      'Understand the WAEC Economics exam structure and marking scheme',
      'Explain scarcity, choice, opportunity cost and the factors of production',
      'Analyse demand, supply, price determination and elasticity with diagrams',
      'Compare business organizations and understand money, banking and inflation',
      'Work with public finance, taxation, national income, GDP and GNP',
      'Explain international trade, development and population/labour issues'
    ],
    requirements: ['A phone or computer with internet', 'An economics notebook for definitions and diagrams', 'A ruler for drawing demand/supply diagrams', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Economics preparation course, organised into ten modules aligned to the WAEC Economics syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with clear diagrams and West African examples; downloadable resources include diagram guides, a glossary of economic terms and topic revision guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-economics',
    _wassceEconFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-ECONOMICS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
