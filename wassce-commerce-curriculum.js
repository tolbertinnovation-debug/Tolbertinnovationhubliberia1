/* TIH Complete WASSCE Commerce Preparation Course.
   Builds COURSES_DB['wassce-commerce'] directly with the full 10-module WAEC
   Commerce structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Commerce syllabus. Modelled on
   wassce-marketing-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-commerce';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceCommFull) return;

  // Vetted economics + finance + marketing videos reused from the TIH courses.
  // Content, notes and quizzes are fully Commerce-specific.
  var VIDEOS = {
    intro: ['tjmp7lmX6jU'],
    trade: ['dl61XzFMDos'],
    business: ['gpTTQFZbEds'],
    banking: ['_Re48DtFb3Y'],
    transport: ['qblRohvJkqQ'],
    international: ['DYyc8g6Ol6Q'],
    marketing: ['vIuisH5OtZs'],
    office: ['q9UjYpHp2Vk'],
    exampractice: ['tjmp7lmX6jU'],
    final: ['tjmp7lmX6jU']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Commerce', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Commerce Exam', 'Exam Structure & Marking Scheme', 'Introduction to Commerce', 'Importance of Commerce', 'Study Strategies']],
    [2, 'Trade & Business Activities', '🛍️', 'trade', 'content', ['Meaning of Trade', 'Home Trade', 'Foreign Trade', 'Wholesale Trade', 'Retail Trade', 'Aids to Trade', 'Distribution of Goods', 'Modern Trade Practices']],
    [3, 'Business Organizations', '🏢', 'business', 'content', ['Sole Proprietorship', 'Partnership', 'Cooperative Societies', 'Limited Liability Companies', 'Public Corporations', 'Multinational Companies', 'Business Growth', 'Business Ethics']],
    [4, 'Banking, Finance & Insurance', '🏦', 'banking', 'content', ['Money and Its Functions', 'Commercial Banks', 'Central Bank', 'Financial Institutions', 'Savings and Investments', 'Insurance Principles', 'Types of Insurance', 'Banking Services']],
    [5, 'Transportation, Communication & Warehousing', '🚚', 'transport', 'content', ['Modes of Transportation', 'Transportation Documents', 'Communication Systems', 'Postal Services', 'Electronic Communication', 'Warehousing', 'Inventory Management', 'Logistics']],
    [6, 'International Trade & Business Law', '🌐', 'international', 'content', ['International Trade', 'Import and Export Procedures', 'Balance of Trade', 'Balance of Payments', 'Trade Agreements', 'Commercial Law', 'Consumer Protection', 'Business Regulations']],
    [7, 'Marketing & E-Commerce', '📣', 'marketing', 'content', ['Marketing Fundamentals', 'Advertising', 'Sales Promotion', 'Customer Service', 'E-Commerce', 'Online Business', 'Digital Payment Systems', 'Entrepreneurship']],
    [8, 'Office Practice & Business Communication', '🗂️', 'office', 'content', ['Office Organization', 'Office Equipment', 'Business Documents', 'Filing Systems', 'Business Correspondence', 'Meetings and Minutes', 'Professional Ethics', 'ICT in Commerce']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Business Case Studies', 'Commercial Calculations', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Commerce Revision', 'Key Commerce Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Commerce exam', trade: 'trade & business activities', business: 'business organizations', banking: 'banking, finance & insurance', transport: 'transportation, communication & warehousing', international: 'international trade & business law', marketing: 'marketing & e-commerce', office: 'office practice & business communication', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    trade: '<h4>📥 Guide: Trade & Business Activities</h4><ul><li><strong>Commerce</strong> = trade + the aids to trade (services that help trade happen).</li><li><strong>Home trade:</strong> wholesale and retail within a country; <strong>foreign trade:</strong> import and export.</li><li><strong>Aids to trade:</strong> banking, insurance, transport, warehousing, advertising and communication.</li><li><strong>Wholesaler</strong> buys in bulk from producers and sells to retailers.</li><li><strong>Retailer</strong> sells in small quantities to the final consumer.</li></ul>',
    business: '<h4>📥 Guide: Business Organizations</h4><ul><li><strong>Sole proprietorship:</strong> one owner, unlimited liability, easy to start.</li><li><strong>Partnership:</strong> 2–20 owners sharing capital, profit and liability.</li><li><strong>Limited liability company:</strong> separate legal entity; owners’ liability limited to shares.</li><li><strong>Cooperative:</strong> owned and run by members for their mutual benefit.</li><li><strong>Public corporation:</strong> owned by government to provide public services.</li></ul>',
    banking: '<h4>📥 Guide: Banking, Finance & Insurance</h4><ul><li><strong>Functions of money:</strong> medium of exchange, store of value, unit of account, standard of deferred payment.</li><li><strong>Commercial banks</strong> accept deposits, give loans and offer payment services.</li><li><strong>Central bank</strong> issues currency and controls the money supply.</li><li><strong>Insurance principles:</strong> utmost good faith, insurable interest, indemnity.</li><li><strong>Types of insurance:</strong> life, fire, motor, marine, accident.</li></ul>',
    transport: '<h4>📥 Guide: Transport, Communication & Warehousing</h4><ul><li><strong>Modes of transport:</strong> road, rail, water, air and pipeline — each with pros/cons.</li><li><strong>Transport documents:</strong> waybill, bill of lading, consignment note.</li><li><strong>Communication</strong> can be oral, written or electronic (email, phone, internet).</li><li><strong>Warehousing</strong> stores goods until they are needed (creates time utility).</li><li><strong>Logistics</strong> moves goods efficiently to the right place at the right time.</li></ul>',
    international: '<h4>📥 Guide: International Trade & Business Law</h4><ul><li><strong>International trade:</strong> import (buying from abroad) and export (selling abroad).</li><li><strong>Balance of trade:</strong> visible exports − visible imports.</li><li><strong>Balance of payments:</strong> a record of all transactions with other countries.</li><li><strong>Documents:</strong> invoice, bill of lading, certificate of origin, letter of credit.</li><li><strong>Consumer protection &amp; commercial law</strong> guard buyers and regulate business.</li></ul>',
    marketing: '<h4>📥 Guide: Marketing & E-Commerce</h4><ul><li><strong>Marketing mix (4 Ps):</strong> Product, Price, Place, Promotion.</li><li><strong>Advertising:</strong> paid, non-personal promotion through media.</li><li><strong>Sales promotion:</strong> short-term incentives (discounts, samples).</li><li><strong>E-commerce:</strong> buying and selling online; supported by digital payments.</li><li><strong>Entrepreneurship</strong> combines resources to start and run a business for profit.</li></ul>',
    office: '<h4>📥 Guide: Office Practice & Communication</h4><ul><li><strong>The office</strong> receives, processes, stores and communicates information.</li><li><strong>Business documents:</strong> enquiry, quotation, order, invoice, receipt.</li><li><strong>Filing systems:</strong> alphabetical, numerical, geographical, subject.</li><li><strong>Business correspondence:</strong> clear, courteous, correct letters and emails.</li><li><strong>Meetings</strong> need an agenda; decisions are recorded in the minutes.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'trade' || /Trade|Wholesale|Retail|Aids to Trade|Distribution/i.test(name)) return TEMPLATES.trade;
    if (skill === 'business' || /Proprietorship|Partnership|Cooperative|Liability|Corporations|Multinational|Business Ethics/i.test(name)) return TEMPLATES.business;
    if (skill === 'banking' || /Money|Bank|Financial Institutions|Savings|Insurance|Investments/i.test(name)) return TEMPLATES.banking;
    if (skill === 'transport' || /Transportation|Communication|Postal|Warehousing|Inventory|Logistics/i.test(name)) return TEMPLATES.transport;
    if (skill === 'international' || /International Trade|Import|Export|Balance of|Trade Agreements|Commercial Law|Consumer Protection|Regulations/i.test(name)) return TEMPLATES.international;
    if (skill === 'marketing' || /Marketing|Advertising|Sales Promotion|Customer Service|E-Commerce|Online Business|Digital Payment|Entrepreneurship/i.test(name)) return TEMPLATES.marketing;
    if (skill === 'office' || /Office|Business Documents|Filing|Correspondence|Meetings|Professional Ethics|ICT/i.test(name)) return TEMPLATES.office;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Commerce skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and case studies';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Commerce · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study relevant examples (including Liberian/West African businesses) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short business case studies, giving reasons and examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain <em>' + esc(name) + '</em> with a real business example in your commerce notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Commerce preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — prepare the business document, analyse the case, or work the commercial calculation — then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Commerce exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Commerce is best described as:', opts: ['Only manufacturing', 'Trade together with the aids that facilitate trade', 'Only farming', 'Only banking'], correct: 1, exp: 'Commerce = trade + aids to trade.' },
      { q: 'WASSCE Commerce is assessed by:', opts: ['An oral test only', 'An objective paper and an essay/theory paper', 'One essay only', 'A lab practical'], correct: 1, exp: 'It has objective and essay components.' },
      { q: 'The main purpose of commerce is to:', opts: ['Produce raw materials', 'Move goods and services from producers to consumers', 'Grow crops only', 'Make laws'], correct: 1, exp: 'Commerce distributes goods/services to consumers.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct definitions, explanations and examples', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Clear points and examples score marks.' },
      { q: 'A good study strategy for commerce is to:', opts: ['Ignore examples', 'Learn definitions and apply them to real businesses', 'Only memorise', 'Skip revision'], correct: 1, exp: 'Definitions plus real examples build understanding.' }
    ],
    trade: [
      { q: 'The aids to trade include banking, insurance, transport, advertising and:', opts: ['Warehousing and communication', 'Farming only', 'Cooking', 'Mining only'], correct: 0, exp: 'Aids to trade facilitate exchange (banking, insurance, transport, warehousing, advertising, communication).' },
      { q: 'A wholesaler is a trader who:', opts: ['Sells to final consumers', 'Buys in bulk and sells to retailers', 'Manufactures goods', 'Makes laws'], correct: 1, exp: 'Wholesalers buy in bulk and sell to retailers.' },
      { q: 'Home trade consists of:', opts: ['Import and export', 'Wholesale and retail trade within a country', 'Only foreign trade', 'Only banking'], correct: 1, exp: 'Home trade = internal wholesale and retail.' },
      { q: 'A retailer typically:', opts: ['Sells in bulk to factories', 'Sells in small quantities to final consumers', 'Only exports', 'Prints money'], correct: 1, exp: 'Retailers serve final consumers in small quantities.' },
      { q: 'Foreign trade is trade:', opts: ['Within one town', 'Between different countries', 'Between two shops', 'With no money'], correct: 1, exp: 'Foreign trade is between countries (import/export).' },
      { q: 'The movement of goods from producer to consumer is called:', opts: ['Distribution', 'Manufacturing', 'Farming', 'Banking'], correct: 0, exp: 'Distribution moves goods along the chain to consumers.' }
    ],
    business: [
      { q: 'A key feature of a sole proprietorship is:', opts: ['Limited liability', 'Unlimited liability of the single owner', 'Many shareholders', 'Government ownership'], correct: 1, exp: 'The sole owner bears unlimited liability.' },
      { q: 'Shareholders in a limited liability company are liable only up to:', opts: ['All their assets', 'The amount they invested (their shares)', 'Nothing', 'The company’s total debts'], correct: 1, exp: 'Liability is limited to share capital.' },
      { q: 'A cooperative society is owned and run for the benefit of its:', opts: ['Government', 'Members', 'Competitors', 'Banks'], correct: 1, exp: 'Cooperatives serve their members.' },
      { q: 'A public corporation is owned by:', opts: ['One person', 'The government', 'Foreign banks', 'Cooperatives'], correct: 1, exp: 'Public corporations are state-owned.' },
      { q: 'A partnership typically has:', opts: ['One owner', 'Between 2 and 20 owners', '1000 owners', 'No owners'], correct: 1, exp: 'Partnerships usually have 2–20 partners.' },
      { q: 'A multinational company operates in:', opts: ['One village only', 'More than one country', 'No country', 'Only online'], correct: 1, exp: 'Multinationals operate across several countries.' }
    ],
    banking: [
      { q: 'Which is a function of money?', opts: ['Medium of exchange', 'Cause of scarcity', 'A farm tool', 'A tax'], correct: 0, exp: 'Money is a medium of exchange, store of value, unit of account and standard of deferred payment.' },
      { q: 'The bank that issues a country’s currency is the:', opts: ['Commercial bank', 'Central bank', 'Cooperative', 'World Bank'], correct: 1, exp: 'The central bank issues currency and controls money supply.' },
      { q: 'The principle of insurable interest means the insured must:', opts: ['Own or benefit from the item insured', 'Never see the item', 'Be a bank', 'Pay no premium'], correct: 0, exp: 'You can only insure something you would suffer loss on.' },
      { q: 'The principle of indemnity means insurance:', opts: ['Makes you richer than before', 'Restores you to your position before the loss (no profit)', 'Pays nothing', 'Doubles your money'], correct: 1, exp: 'Indemnity restores, it does not enrich.' },
      { q: 'Motor, fire and marine are types of:', opts: ['Banks', 'Insurance', 'Taxes', 'Shares'], correct: 1, exp: 'These are common types of insurance.' },
      { q: 'A commercial bank service to customers is:', opts: ['Accepting deposits and giving loans', 'Making laws', 'Growing crops', 'Building roads'], correct: 0, exp: 'Banks take deposits, lend and provide payment services.' }
    ],
    transport: [
      { q: 'Which is a mode of transport?', opts: ['Road, rail, water and air', 'Only walking', 'Only email', 'Only banking'], correct: 0, exp: 'Transport modes: road, rail, water, air, pipeline.' },
      { q: 'A document used in the transport of goods by sea is the:', opts: ['Bill of lading', 'Report card', 'Menu', 'Timetable'], correct: 0, exp: 'The bill of lading is a shipping document.' },
      { q: 'Warehousing mainly provides:', opts: ['Time utility (storing goods until needed)', 'Nothing', 'More taxes', 'Manufacturing'], correct: 0, exp: 'Warehousing stores goods, creating time utility.' },
      { q: 'Electronic communication includes:', opts: ['Email and the internet', 'Only letters', 'Only shouting', 'Only drums'], correct: 0, exp: 'Email, phone and internet are electronic communication.' },
      { q: 'Air transport is most suitable for goods that are:', opts: ['Very heavy and cheap', 'Urgent, perishable or high-value', 'Never needed', 'Only local'], correct: 1, exp: 'Air suits urgent, perishable and valuable goods.' },
      { q: 'Logistics is concerned with:', opts: ['Moving and storing goods efficiently', 'Making laws', 'Farming only', 'Nothing'], correct: 0, exp: 'Logistics manages the efficient flow of goods.' }
    ],
    international: [
      { q: 'Importing means:', opts: ['Selling goods abroad', 'Buying goods from other countries', 'Storing goods', 'Making goods'], correct: 1, exp: 'Import = buying from abroad; export = selling abroad.' },
      { q: 'Balance of trade is the difference between a country’s:', opts: ['Taxes and spending', 'Visible exports and visible imports', 'Births and deaths', 'Loans and savings'], correct: 1, exp: 'Balance of trade = visible exports − visible imports.' },
      { q: 'A document showing where goods were produced is the:', opts: ['Certificate of origin', 'Report card', 'Menu', 'Payslip'], correct: 0, exp: 'The certificate of origin states the country of production.' },
      { q: 'Consumer protection laws exist to:', opts: ['Cheat buyers', 'Protect buyers from unfair/unsafe practices', 'Raise prices only', 'Ban trade'], correct: 1, exp: 'They safeguard consumers’ rights and safety.' },
      { q: 'The balance of payments records:', opts: ['Only exports', 'All economic transactions with other countries', 'Only imports', 'Government salaries'], correct: 1, exp: 'BOP records all international transactions.' },
      { q: 'A letter of credit is used mainly in:', opts: ['International trade payments', 'Farming', 'Cooking', 'School exams'], correct: 0, exp: 'It guarantees payment in international trade.' }
    ],
    marketing: [
      { q: 'The four Ps of the marketing mix are Product, Price, Place and:', opts: ['Profit', 'Promotion', 'People only', 'Power'], correct: 1, exp: 'Product, Price, Place, Promotion.' },
      { q: 'Advertising is best described as:', opts: ['Free word of mouth only', 'Paid, non-personal promotion through media', 'A price cut', 'A product'], correct: 1, exp: 'Advertising is paid, non-personal media promotion.' },
      { q: 'E-commerce means:', opts: ['Farming', 'Buying and selling goods/services online', 'Only cash sales', 'A tax'], correct: 1, exp: 'E-commerce is online buying and selling.' },
      { q: 'A digital payment method is:', opts: ['Mobile money / online transfer', 'Barter only', 'Cowries only', 'None'], correct: 0, exp: 'Mobile money and online transfers are digital payments.' },
      { q: 'Sales promotion uses:', opts: ['Long-term price rises', 'Short-term incentives like discounts and samples', 'No incentives', 'Higher taxes'], correct: 1, exp: 'Sales promotions are short-term incentives.' },
      { q: 'An entrepreneur is a person who:', opts: ['Avoids business', 'Starts and runs a business, bearing risk for profit', 'Only works for others', 'Never innovates'], correct: 1, exp: 'Entrepreneurs create and run businesses, taking risks.' }
    ],
    office: [
      { q: 'The main function of an office is to:', opts: ['Grow crops', 'Receive, process, store and communicate information', 'Build roads', 'Make laws'], correct: 1, exp: 'Offices handle information and administration.' },
      { q: 'A document requesting the price of goods is a(n):', opts: ['Enquiry', 'Receipt', 'Invoice', 'Payslip'], correct: 0, exp: 'An enquiry asks about goods/prices; a quotation replies.' },
      { q: 'An invoice is a document that:', opts: ['Shows goods sold and amount owed', 'Grows plants', 'Records the weather', 'Is a share'], correct: 0, exp: 'An invoice details goods sold and the amount due.' },
      { q: 'Arranging files by A, B, C… is ___ filing:', opts: ['Alphabetical', 'Numerical', 'Geographical', 'Random'], correct: 0, exp: 'Alphabetical filing orders by letters of names.' },
      { q: 'The written record of what happened at a meeting is the:', opts: ['Agenda', 'Minutes', 'Invoice', 'Waybill'], correct: 1, exp: 'Minutes record the meeting’s decisions and discussion.' },
      { q: 'A receipt is issued to:', opts: ['Acknowledge payment received', 'Order goods', 'Advertise', 'Hire staff'], correct: 0, exp: 'A receipt confirms that payment has been made.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Using real business examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples support and strengthen points.' },
      { q: 'For commercial calculations you should:', opts: ['Guess', 'Show the formula and your working with units', 'Skip the method', 'Round too early'], correct: 1, exp: 'Shown working earns method marks.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', trade: 'trade', business: 'business', banking: 'banking', transport: 'transport', international: 'international', marketing: 'marketing', office: 'office', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.trade, BANK.business, BANK.banking, BANK.transport, BANK.international, BANK.marketing, BANK.office, BANK.examstrat);
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
        var qid = 'wcm-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Commerce Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Commerce Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the case studies and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wcm-m' + num + '-a' + flat;
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
      var pqid = 'wcm-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Commerce: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Commerce preparation course aligned to the WAEC syllabus: trade & business activities, business organizations, banking/finance & insurance, transportation/communication & warehousing, international trade & business law, marketing & e-commerce, office practice & business communication, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🛍️',
    gradient: 'linear-gradient(135deg,#0B5AA0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Commerce examination with clear concepts, real business examples, case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-COMM',
    learn: [
      'Understand the WAEC Commerce exam structure and marking scheme',
      'Explain trade, the aids to trade, and wholesale/retail distribution',
      'Compare business organizations and understand business ethics',
      'Understand money, banking, finance and insurance',
      'Explain transport, communication, warehousing and international trade',
      'Understand marketing, e-commerce and office practice/communication'
    ],
    requirements: ['A phone or computer with internet', 'A commerce notebook for definitions and business documents', 'Awareness of local businesses and trade', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Commerce preparation course, organised into ten modules aligned to the WAEC Commerce syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with real business examples; downloadable resources include business forms, commercial documents and a business terminology handbook. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, businesses and trade around you, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-commerce',
    _wassceCommFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-COMMERCE] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
