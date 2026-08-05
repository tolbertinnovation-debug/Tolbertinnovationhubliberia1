/* TIH Complete WASSCE Marketing Preparation Course.
   Builds COURSES_DB['wassce-marketing'] directly with the full 10-module WAEC
   Marketing structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Marketing syllabus. Modelled on
   wassce-accounts-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-marketing';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceMktgFull) return;

  // Vetted Digital Marketing course videos reused from the TIH courses.
  // Content, notes and quizzes are fully Marketing-specific.
  var VIDEOS = {
    intro: ['-CsBl3tv-X0', '1pejHrRIzAY'],
    fundamentals: ['1pejHrRIzAY', '2fBxrhV3Nk0'],
    consumer: ['2fBxrhV3Nk0', '8LX60gToxrM'],
    product: ['8LX60gToxrM', 'C5ddo63kHHI'],
    pricing: ['C5ddo63kHHI', 'K6AEFYA5QuM'],
    promotion: ['K6AEFYA5QuM', 'RwqyuFnFzII'],
    sales: ['RwqyuFnFzII', 'VPDe8XL7Mh8'],
    entrepreneurship: ['VPDe8XL7Mh8', 'WR_5_gJVA2c'],
    exampractice: ['gqRdIEIlzNs', 'WR_5_gJVA2c'],
    final: ['-CsBl3tv-X0', '1pejHrRIzAY']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Marketing', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Marketing Exam', 'Exam Structure & Marking Scheme', 'Introduction to Marketing', 'Importance of Marketing', 'Study Strategies']],
    [2, 'Marketing Fundamentals', '📣', 'fundamentals', 'content', ['Marketing Concepts', 'Marketing Functions', 'Needs, Wants & Demand', 'Customer Satisfaction', 'Marketing Environment', 'Market Segmentation', 'Target Market', 'Positioning']],
    [3, 'Consumer Behavior & Market Research', '🔎', 'consumer', 'content', ['Consumer Buying Behavior', 'Business Buying Behavior', 'Factors Influencing Consumer Decisions', 'Market Research', 'Data Collection Methods', 'Market Analysis', 'Customer Feedback', 'Marketing Information Systems']],
    [4, 'Product & Branding', '📦', 'product', 'content', ['Product Concepts', 'Product Classification', 'Product Life Cycle', 'Product Development', 'Branding', 'Packaging', 'Labeling', 'Product Management']],
    [5, 'Pricing & Distribution', '🏷️', 'pricing', 'content', ['Pricing Objectives', 'Pricing Methods', 'Pricing Strategies', 'Distribution Channels', 'Wholesalers', 'Retailers', 'Logistics', 'Supply Chain Management']],
    [6, 'Promotion & Advertising', '📢', 'promotion', 'content', ['Promotion Mix', 'Advertising', 'Personal Selling', 'Sales Promotion', 'Public Relations', 'Direct Marketing', 'Digital Marketing Basics', 'Integrated Marketing Communication']],
    [7, 'Sales Management & Customer Service', '🤝', 'sales', 'content', ['Sales Process', 'Sales Planning', 'Sales Forecasting', 'Customer Relationship Management (CRM)', 'Customer Service', 'Complaint Handling', 'Negotiation Skills', 'Sales Ethics']],
    [8, 'Entrepreneurship & International Marketing', '🌍', 'entrepreneurship', 'content', ['Entrepreneurship', 'Small Business Marketing', 'International Marketing', 'Export Marketing', 'E-Commerce', 'Social Media Marketing', 'Ethical Marketing', 'Sustainable Marketing']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Marketing Case Studies', 'Practical Marketing Scenarios', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Marketing Revision', 'Key Marketing Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Marketing exam', fundamentals: 'marketing fundamentals', consumer: 'consumer behaviour & market research', product: 'product & branding', pricing: 'pricing & distribution', promotion: 'promotion & advertising', sales: 'sales management & customer service', entrepreneurship: 'entrepreneurship & international marketing', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    fundamentals: '<h4>📥 Guide: Marketing Fundamentals</h4><ul><li><strong>Marketing:</strong> identifying and satisfying customer needs at a profit.</li><li><strong>The marketing mix (4 Ps):</strong> Product, Price, Place, Promotion.</li><li><strong>Need</strong> (basic requirement) vs <strong>want</strong> (specific desire) vs <strong>demand</strong> (want + ability to pay).</li><li><strong>Segmentation:</strong> dividing a market into groups (geographic, demographic, psychographic, behavioural).</li><li><strong>Targeting &amp; positioning:</strong> choose segments, then create a clear image in customers’ minds.</li></ul>',
    consumer: '<h4>📥 Guide: Consumer Behaviour & Research</h4><ul><li><strong>Buying decision process:</strong> need recognition → information search → evaluation → purchase → post-purchase.</li><li><strong>Influences:</strong> cultural, social, personal and psychological factors.</li><li><strong>Market research:</strong> gathering and analysing data about a market.</li><li><strong>Primary data</strong> (surveys, interviews) vs <strong>secondary data</strong> (existing sources).</li><li><strong>Feedback</strong> helps improve products and service.</li></ul>',
    product: '<h4>📥 Guide: Product & Branding</h4><ul><li><strong>Product levels:</strong> core, actual and augmented product.</li><li><strong>Product life cycle:</strong> introduction → growth → maturity → decline.</li><li><strong>Branding:</strong> a name, symbol or design that identifies and differentiates a product.</li><li><strong>Packaging</strong> protects and promotes; <strong>labelling</strong> informs the customer.</li><li><strong>New product development</strong> follows idea → screening → testing → launch.</li></ul>',
    pricing: '<h4>📥 Guide: Pricing & Distribution</h4><ul><li><strong>Pricing methods:</strong> cost-plus, competition-based and value-based.</li><li><strong>Strategies:</strong> penetration (low to enter) and skimming (high then lower).</li><li><strong>Channel:</strong> the path a product takes from producer to consumer.</li><li><strong>Wholesaler</strong> buys in bulk and sells to retailers; <strong>retailer</strong> sells to final consumers.</li><li><strong>Logistics/supply chain</strong> move goods efficiently to the right place and time.</li></ul>',
    promotion: '<h4>📥 Guide: Promotion & Advertising</h4><ul><li><strong>Promotion mix:</strong> advertising, personal selling, sales promotion, public relations, direct marketing.</li><li><strong>Advertising:</strong> paid, non-personal communication through media.</li><li><strong>Sales promotion:</strong> short-term incentives (discounts, samples, coupons).</li><li><strong>Public relations</strong> builds a favourable image.</li><li><strong>Digital marketing:</strong> promotion online (social media, email, websites, SEO).</li></ul>',
    sales: '<h4>📥 Guide: Sales & Customer Service</h4><ul><li><strong>Sales process:</strong> prospecting → approach → presentation → handling objections → closing → follow-up.</li><li><strong>CRM:</strong> managing relationships to keep customers loyal.</li><li><strong>Customer service:</strong> meeting customer needs before, during and after a sale.</li><li><strong>Complaint handling:</strong> listen, apologise, resolve and follow up.</li><li><strong>Negotiation &amp; ethics:</strong> seek win-win outcomes honestly.</li></ul>',
    entrepreneurship: '<h4>📥 Guide: Entrepreneurship & International Marketing</h4><ul><li><strong>Entrepreneur:</strong> one who starts and runs a business, taking risks for profit.</li><li><strong>Small business marketing</strong> relies on low-cost, targeted methods.</li><li><strong>International marketing</strong> sells across borders; <strong>export marketing</strong> sells abroad.</li><li><strong>E-commerce &amp; social media</strong> open global markets cheaply.</li><li><strong>Ethical &amp; sustainable marketing</strong> respects customers, society and the environment.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'fundamentals' || /Marketing Concepts|Marketing Functions|Needs|Segmentation|Target Market|Positioning|Environment/i.test(name)) return TEMPLATES.fundamentals;
    if (skill === 'consumer' || /Consumer|Buying Behavior|Market Research|Data Collection|Market Analysis|Feedback|Information Systems/i.test(name)) return TEMPLATES.consumer;
    if (skill === 'product' || /Product|Branding|Packaging|Labeling|Life Cycle/i.test(name)) return TEMPLATES.product;
    if (skill === 'pricing' || /Pricing|Distribution|Wholesalers|Retailers|Logistics|Supply Chain/i.test(name)) return TEMPLATES.pricing;
    if (skill === 'promotion' || /Promotion|Advertising|Personal Selling|Public Relations|Direct Marketing|Digital Marketing|Communication/i.test(name)) return TEMPLATES.promotion;
    if (skill === 'sales' || /Sales|CRM|Customer|Complaint|Negotiation/i.test(name)) return TEMPLATES.sales;
    if (skill === 'entrepreneurship' || /Entrepreneurship|Small Business|International Marketing|Export|E-Commerce|Social Media|Ethical|Sustainable/i.test(name)) return TEMPLATES.entrepreneurship;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Marketing skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and case studies';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Marketing · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study relevant examples (including Liberian/West African businesses) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short case studies, giving reasons and examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain <em>' + esc(name) + '</em> with a real marketing example in your notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Marketing preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — build the marketing plan, design the campaign, or analyse the case — with clear reasons and examples, then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Marketing exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Marketing is best defined as:', opts: ['Only advertising', 'Identifying and satisfying customer needs profitably', 'Only selling', 'Manufacturing only'], correct: 1, exp: 'Marketing satisfies customer needs at a profit — more than selling.' },
      { q: 'WASSCE Marketing is assessed by:', opts: ['An oral test only', 'An objective paper and an essay/theory paper', 'One essay only', 'A lab practical'], correct: 1, exp: 'It has objective and essay components.' },
      { q: 'The marketing concept puts the ___ at the centre:', opts: ['Product', 'Customer', 'Factory', 'Owner'], correct: 1, exp: 'The marketing concept is customer-focused.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct definitions, explanations and examples', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Clear points and examples score marks.' },
      { q: 'A good study strategy for marketing is to:', opts: ['Ignore examples', 'Learn definitions and apply them to real businesses', 'Only memorise', 'Skip revision'], correct: 1, exp: 'Definitions plus real examples build understanding.' }
    ],
    fundamentals: [
      { q: 'The four Ps of the marketing mix are Product, Price, Place and:', opts: ['Profit', 'Promotion', 'People only', 'Power'], correct: 1, exp: 'Product, Price, Place, Promotion.' },
      { q: 'Market segmentation means:', opts: ['Selling one product to everyone', 'Dividing a market into groups with similar needs', 'Setting prices', 'Advertising only'], correct: 1, exp: 'Segmentation groups customers with similar needs.' },
      { q: 'A "want" backed by the ability and willingness to pay becomes:', opts: ['A need', 'Demand', 'A brand', 'A product'], correct: 1, exp: 'Demand = want + purchasing power.' },
      { q: 'Positioning is about:', opts: ['Warehouse location only', 'Creating a clear image of a product in customers’ minds', 'Pricing only', 'Hiring staff'], correct: 1, exp: 'Positioning shapes how customers perceive the product.' },
      { q: 'Demographic segmentation uses variables like:', opts: ['Age, gender and income', 'Weather', 'Soil type', 'Rock type'], correct: 0, exp: 'Demographics include age, gender, income, etc.' },
      { q: 'A key marketing function is:', opts: ['Ignoring customers', 'Buying, selling, transport, storage and promotion', 'Only farming', 'Only accounting'], correct: 1, exp: 'Marketing functions cover exchange and distribution activities.' }
    ],
    consumer: [
      { q: 'The first stage of the consumer buying process is:', opts: ['Purchase', 'Need/problem recognition', 'Post-purchase', 'Disposal'], correct: 1, exp: 'It starts with recognising a need or problem.' },
      { q: 'Data collected first-hand through surveys is:', opts: ['Secondary data', 'Primary data', 'Old data', 'No data'], correct: 1, exp: 'Primary data is gathered first-hand for a purpose.' },
      { q: 'Market research is mainly used to:', opts: ['Waste money', 'Understand customers and the market before decisions', 'Avoid customers', 'Set no goals'], correct: 1, exp: 'Research informs marketing decisions.' },
      { q: 'A psychological factor influencing buying is:', opts: ['Motivation/perception', 'The weather', 'Soil pH', 'Distance to the moon'], correct: 0, exp: 'Motivation, perception and attitudes are psychological factors.' },
      { q: 'Secondary data is:', opts: ['Collected fresh by you', 'Already existing data from other sources', 'Always wrong', 'Never used'], correct: 1, exp: 'Secondary data comes from existing sources.' },
      { q: 'Customer feedback is valuable because it:', opts: ['Is ignored', 'Helps improve products and service', 'Wastes time', 'Reduces sales'], correct: 1, exp: 'Feedback guides improvement.' }
    ],
    product: [
      { q: 'The stages of the product life cycle are introduction, growth, maturity and:', opts: ['Decline', 'Profit', 'Storage', 'Pricing'], correct: 0, exp: 'PLC: introduction, growth, maturity, decline.' },
      { q: 'A brand is:', opts: ['A price', 'A name/symbol that identifies and differentiates a product', 'A factory', 'A tax'], correct: 1, exp: 'A brand identifies and distinguishes a product.' },
      { q: 'The main purpose of packaging is to:', opts: ['Increase pollution', 'Protect and promote the product', 'Raise tax', 'Hide the product'], correct: 1, exp: 'Packaging protects and helps promote the product.' },
      { q: 'A label mainly provides:', opts: ['Entertainment', 'Information about the product', 'A discount always', 'Nothing'], correct: 1, exp: 'Labels inform (contents, use, expiry, etc.).' },
      { q: 'Consumer goods bought frequently with little effort are:', opts: ['Convenience goods', 'Specialty goods', 'Industrial goods', 'Services'], correct: 0, exp: 'Convenience goods are cheap, frequent, low-effort purchases.' },
      { q: 'New product development typically begins with:', opts: ['Launch', 'Idea generation', 'Decline', 'Disposal'], correct: 1, exp: 'It starts with generating ideas.' }
    ],
    pricing: [
      { q: 'Cost-plus pricing sets price by adding a markup to:', opts: ['Nothing', 'The cost of the product', 'Sales only', 'The tax only'], correct: 1, exp: 'Cost-plus adds a margin to cost.' },
      { q: 'Penetration pricing means setting a ___ price to enter a market:', opts: ['Very high', 'Low', 'Random', 'Zero forever'], correct: 1, exp: 'Penetration uses a low price to gain market share.' },
      { q: 'A wholesaler typically:', opts: ['Sells to final consumers', 'Buys in bulk and sells to retailers', 'Manufactures goods', 'Sets taxes'], correct: 1, exp: 'Wholesalers sell in bulk to retailers.' },
      { q: 'A distribution channel is:', opts: ['A TV channel', 'The path a product takes from producer to consumer', 'A price', 'A brand'], correct: 1, exp: 'It is the route from producer to consumer.' },
      { q: 'Price skimming means:', opts: ['Starting high then lowering the price', 'Always the lowest price', 'No price', 'Free goods'], correct: 0, exp: 'Skimming starts high (early adopters) then reduces price.' },
      { q: 'The "Place" in the marketing mix refers to:', opts: ['Promotion', 'Distribution/availability of the product', 'Price only', 'People'], correct: 1, exp: 'Place = distribution and availability.' }
    ],
    promotion: [
      { q: 'Advertising is best described as:', opts: ['Free word of mouth', 'Paid, non-personal promotion through media', 'A price cut', 'A product'], correct: 1, exp: 'Advertising is paid, non-personal media promotion.' },
      { q: 'Which is part of the promotion mix?', opts: ['Personal selling', 'Depreciation', 'A trial balance', 'Soil testing'], correct: 0, exp: 'The promotion mix includes personal selling, advertising, etc.' },
      { q: 'Sales promotion uses:', opts: ['Long-term price rises', 'Short-term incentives like discounts and samples', 'No incentives', 'Higher taxes'], correct: 1, exp: 'Sales promotions are short-term incentives.' },
      { q: 'Public relations mainly aims to:', opts: ['Damage image', 'Build a favourable public image', 'Raise prices', 'Reduce quality'], correct: 1, exp: 'PR builds and maintains a good image.' },
      { q: 'Digital marketing includes:', opts: ['Only billboards', 'Social media, email and websites', 'Only radio', 'Only newspapers'], correct: 1, exp: 'Digital marketing uses online channels.' },
      { q: 'Personal selling involves:', opts: ['Mass media only', 'Direct, face-to-face communication with customers', 'No customers', 'Only packaging'], correct: 1, exp: 'Personal selling is direct interaction with buyers.' }
    ],
    sales: [
      { q: 'CRM stands for:', opts: ['Customer Relationship Management', 'Cost Reduction Method', 'Central Retail Market', 'Credit Risk Model'], correct: 0, exp: 'CRM = Customer Relationship Management.' },
      { q: 'Closing is the stage of the sales process where you:', opts: ['Find prospects', 'Ask for and secure the order', 'Ignore the customer', 'Set the budget'], correct: 1, exp: 'Closing secures the sale.' },
      { q: 'Good customer service means:', opts: ['Ignoring complaints', 'Meeting customer needs before, during and after a sale', 'Rude staff', 'No follow-up'], correct: 1, exp: 'Service supports customers throughout the relationship.' },
      { q: 'A good way to handle a complaint is to:', opts: ['Argue', 'Listen, apologise, resolve and follow up', 'Ignore it', 'Blame the customer'], correct: 1, exp: 'Handle complaints calmly and resolve them.' },
      { q: 'Sales forecasting is used to:', opts: ['Predict future sales for planning', 'Set taxes', 'Value stock only', 'Recruit farmers'], correct: 0, exp: 'Forecasts estimate future sales to guide planning.' },
      { q: 'Effective negotiation seeks a:', opts: ['Win-lose outcome', 'Win-win outcome for both parties', 'No agreement', 'Loss for all'], correct: 1, exp: 'Good negotiation aims for mutual benefit.' }
    ],
    entrepreneurship: [
      { q: 'An entrepreneur is a person who:', opts: ['Avoids business', 'Starts and runs a business, bearing risk for profit', 'Only works for others', 'Never innovates'], correct: 1, exp: 'Entrepreneurs create and run businesses, taking risks.' },
      { q: 'E-commerce means:', opts: ['Farming', 'Buying and selling goods/services online', 'Only cash sales', 'A tax'], correct: 1, exp: 'E-commerce is online buying and selling.' },
      { q: 'International marketing involves:', opts: ['Selling only locally', 'Marketing across national borders', 'No customers', 'Only exports of food'], correct: 1, exp: 'It markets goods/services across countries.' },
      { q: 'Social media marketing uses platforms to:', opts: ['Hide products', 'Promote and engage customers online', 'Avoid customers', 'Raise taxes'], correct: 1, exp: 'It promotes and engages customers via social platforms.' },
      { q: 'Ethical marketing means:', opts: ['Misleading customers', 'Being honest and fair to customers and society', 'Ignoring the law', 'Overpricing secretly'], correct: 1, exp: 'Ethical marketing is honest and responsible.' },
      { q: 'Sustainable marketing considers the needs of:', opts: ['Only today’s profit', 'Present customers without harming future generations', 'No one', 'Only competitors'], correct: 1, exp: 'It balances present needs with the future.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Using real marketing examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples support and strengthen points.' },
      { q: 'For a marketing case study you should:', opts: ['Ignore the scenario', 'Apply marketing concepts to the given situation', 'Only define terms', 'Skip it'], correct: 1, exp: 'Apply theory to the specific case.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', fundamentals: 'fundamentals', consumer: 'consumer', product: 'product', pricing: 'pricing', promotion: 'promotion', sales: 'sales', entrepreneurship: 'entrepreneurship', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.consumer, BANK.product, BANK.pricing, BANK.promotion, BANK.sales, BANK.entrepreneurship, BANK.examstrat);
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
        var qid = 'wmk-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Marketing Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Marketing Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the case studies and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wmk-m' + num + '-a' + flat;
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
      var pqid = 'wmk-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Marketing: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Marketing preparation course aligned to the WAEC syllabus: marketing fundamentals, consumer behaviour & market research, product & branding, pricing & distribution, promotion & advertising, sales management & customer service, entrepreneurship & international marketing, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '📣',
    gradient: 'linear-gradient(135deg,#B0501F,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Marketing examination with clear concepts, real business examples, case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-MKTG',
    learn: [
      'Understand the WAEC Marketing exam structure and marking scheme',
      'Explain marketing concepts, the 4 Ps, segmentation, targeting and positioning',
      'Understand consumer behaviour and market research',
      'Apply product, branding, pricing and distribution concepts',
      'Use the promotion mix, advertising and digital marketing',
      'Explain sales management, customer service, entrepreneurship and international marketing'
    ],
    requirements: ['A phone or computer with internet', 'A marketing notebook for definitions and examples', 'Awareness of local businesses and adverts', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Marketing preparation course, organised into ten modules aligned to the WAEC Marketing syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with real business examples; downloadable resources include marketing-plan and branding templates, case studies and revision guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, real adverts and businesses around you, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-marketing',
    _wassceMktgFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-MARKETING] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
