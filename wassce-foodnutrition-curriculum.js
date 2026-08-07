/* TIH Complete WASSCE Food & Nutrition Preparation Course.
   Builds COURSES_DB['wassce-food-nutrition'] directly with the full 10-module
   WAEC Food & Nutrition structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Food & Nutrition syllabus. Educational content
   for exam preparation. Modelled on wassce-commerce-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-food-nutrition';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceFoodFull) return;

  // Vetted biology (nutrition/physiology) + AgriTech (food) videos reused from
  // the TIH courses. Content, notes and quizzes are fully Food-&-Nutrition-specific.
  var VIDEOS = {
    intro: ['60q6FCx3CH4'],
    nutrients: ['6BZkdRfkUCU'],
    humannutrition: ['N50jLY2JGe0'],
    preparation: ['P6W8kwmwcno'],
    hygiene: ['_S8pQqrpXCc'],
    catering: ['ifv_o6nlENg'],
    family: ['60q6FCx3CH4'],
    practical: ['60q6FCx3CH4'],
    exampractice: ['60q6FCx3CH4'],
    final: ['60q6FCx3CH4']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Food & Nutrition', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Food & Nutrition Exam', 'Exam Structure & Marking Scheme', 'Introduction to Food & Nutrition', 'Importance of Nutrition', 'Study Strategies']],
    [2, 'Food Science & Nutrients', '🥦', 'nutrients', 'content', ['Introduction to Nutrients', 'Carbohydrates', 'Proteins', 'Fats and Oils', 'Vitamins', 'Minerals', 'Water and Dietary Fiber', 'Functions and Sources of Nutrients']],
    [3, 'Human Nutrition', '🍎', 'humannutrition', 'content', ['Digestion and Absorption', 'Balanced Diet', 'Meal Planning', 'Nutritional Requirements Across the Life Cycle', 'Malnutrition', 'Deficiency Diseases', 'Therapeutic Diets', 'Healthy Eating Habits']],
    [4, 'Food Preparation & Cooking Methods', '🍳', 'preparation', 'content', ['Principles of Food Preparation', 'Kitchen Safety', 'Kitchen Equipment and Utensils', 'Methods of Cooking', 'Food Presentation', 'Recipe Interpretation', 'Portion Control', 'Practical Cooking Sessions']],
    [5, 'Food Hygiene & Preservation', '🧼', 'hygiene', 'content', ['Food Hygiene', 'Personal Hygiene in Food Preparation', 'Food Contamination', 'Food Poisoning', 'Food Storage', 'Food Preservation Methods', 'Packaging and Labeling', 'Quality Control']],
    [6, 'Catering & Hospitality', '🍽️', 'catering', 'content', ['Introduction to Catering', 'Table Setting', 'Table Service', 'Menu Planning', 'Event Catering', 'Restaurant Operations', 'Customer Service', 'Hospitality Ethics']],
    [7, 'Family Living & Consumer Education', '👨‍👩‍👧', 'family', 'content', ['Family Nutrition', 'Budgeting for Meals', 'Food Purchasing', 'Consumer Rights', 'Household Management', 'Sustainable Food Choices', 'Waste Reduction', 'Food Security']],
    [8, 'Practical Food & Nutrition Skills', '🍰', 'practical', 'content', ['Preparation of Breakfast Meals', 'Preparation of Lunch Meals', 'Preparation of Dinner Meals', 'Baking Fundamentals', 'Pastry and Desserts', 'Beverage Preparation', 'Practical Food Tests', 'Practical Examination Techniques']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Practical Cooking Assessment', 'Menu Planning Exercises', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Food & Nutrition Revision', 'Key Concepts Review', 'Practical Examination Review', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals and "…Assessment"); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Food & Nutrition exam', nutrients: 'food science & nutrients', humannutrition: 'human nutrition', preparation: 'food preparation & cooking methods', hygiene: 'food hygiene & preservation', catering: 'catering & hospitality', family: 'family living & consumer education', practical: 'practical food & nutrition skills', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    nutrients: '<h4>📥 Nutrition Table: Nutrients &amp; Functions</h4><ul><li><strong>Carbohydrates:</strong> energy (rice, cassava, yam, bread).</li><li><strong>Proteins:</strong> growth and repair (fish, beans, meat, eggs).</li><li><strong>Fats &amp; oils:</strong> concentrated energy and insulation.</li><li><strong>Vitamins &amp; minerals:</strong> protection and regulation (fruits, vegetables).</li><li><strong>Water &amp; fibre:</strong> hydration and healthy digestion.</li></ul>',
    humannutrition: '<h4>📥 Guide: Human Nutrition</h4><ul><li><strong>Digestion</strong> breaks food down for absorption in the small intestine.</li><li><strong>Balanced diet:</strong> all nutrients in the right proportions for the person.</li><li><strong>Life cycle needs</strong> differ (infants, children, adolescents, adults, pregnancy, elderly).</li><li><strong>Malnutrition:</strong> under- or over-nutrition; e.g. kwashiorkor (protein), marasmus (energy).</li><li><strong>Therapeutic diets</strong> are modified for illness (e.g. low-salt, diabetic).</li></ul>',
    preparation: '<h4>📥 Guide: Food Preparation & Cooking</h4><ul><li><strong>Cooking methods:</strong> boiling, steaming, frying, grilling, roasting, baking, stewing.</li><li><strong>Reasons for cooking:</strong> makes food safe, digestible, tasty and appealing.</li><li><strong>Kitchen safety:</strong> handle knives/heat carefully; keep the area clean and dry.</li><li><strong>Recipe interpretation:</strong> read quantities, method and timing before starting.</li><li><strong>Portion control &amp; presentation</strong> reduce waste and make meals appealing.</li></ul>',
    hygiene: '<h4>📥 Guide: Food Hygiene & Preservation</h4><ul><li><strong>Food hygiene:</strong> keep food, hands, utensils and surfaces clean.</li><li><strong>Contamination</strong> can be biological, chemical or physical.</li><li><strong>Food poisoning</strong> is caused by harmful microbes (e.g. Salmonella) — cook and store food properly.</li><li><strong>Preservation methods:</strong> refrigeration, freezing, drying, salting, smoking, canning.</li><li><strong>Preservation</strong> slows spoilage by removing water, heat or acidity.</li></ul>',
    catering: '<h4>📥 Guide: Catering & Hospitality</h4><ul><li><strong>Catering:</strong> providing food and drink service for people/events.</li><li><strong>Menu planning:</strong> balance nutrition, cost, variety, season and the occasion.</li><li><strong>Table setting</strong> arranges cover, cutlery and glassware correctly.</li><li><strong>Customer service:</strong> welcome, serve and satisfy guests courteously.</li><li><strong>Hospitality ethics:</strong> hygiene, honesty and good value for the customer.</li></ul>',
    family: '<h4>📥 Guide: Family Living & Consumer Education</h4><ul><li><strong>Family nutrition:</strong> meeting the differing needs of all family members.</li><li><strong>Meal budgeting:</strong> plan meals to get good nutrition at low cost.</li><li><strong>Wise food purchasing:</strong> compare prices, check quality and expiry.</li><li><strong>Consumer rights:</strong> to safety, information, choice and redress.</li><li><strong>Food security:</strong> everyone having reliable access to enough safe, nutritious food.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'nutrients' || /Nutrients|Carbohydrates|Proteins|Fats|Vitamins|Minerals|Fiber|Water/i.test(name)) return TEMPLATES.nutrients;
    if (skill === 'humannutrition' || /Digestion|Balanced Diet|Meal Planning|Malnutrition|Deficiency|Therapeutic|Life Cycle|Healthy Eating/i.test(name)) return TEMPLATES.humannutrition;
    if (skill === 'preparation' || /Food Preparation|Kitchen|Cooking|Presentation|Recipe|Portion/i.test(name)) return TEMPLATES.preparation;
    if (skill === 'hygiene' || /Hygiene|Contamination|Poisoning|Storage|Preservation|Packaging|Quality Control/i.test(name)) return TEMPLATES.hygiene;
    if (skill === 'catering' || /Catering|Table|Menu Planning|Restaurant|Customer Service|Hospitality/i.test(name)) return TEMPLATES.catering;
    if (skill === 'family' || /Family|Budgeting|Purchasing|Consumer|Household|Sustainable|Waste|Food Security/i.test(name)) return TEMPLATES.family;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Food & Nutrition skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and practical cookery';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Food & Nutrition · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective, theory and practical papers.</li>' +
      '<li>Study labelled examples/charts (with local foods) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short practical/cookery tasks where possible.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain or carry out <em>' + esc(name) + '</em> and record it in your food & nutrition notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Food & Nutrition preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical task — prepare the meal, plan the menu, or carry out the food test — safely and hygienically, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Food & Nutrition exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Nutrition is the study of:', opts: ['Only cooking', 'How the body uses food for growth, energy and health', 'Farming only', 'Rocks'], correct: 1, exp: 'Nutrition studies food and its use by the body.' },
      { q: 'WASSCE Food & Nutrition is assessed by:', opts: ['An oral test only', 'Objective, theory and a practical (cookery) paper', 'One essay only', 'A lab practical only'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'A good reason to study nutrition is to:', opts: ['Eat poorly', 'Make healthy food choices and prevent disease', 'Waste food', 'Ignore hygiene'], correct: 1, exp: 'Good nutrition supports health and prevents disease.' },
      { q: 'In the theory paper, marks are earned mainly for:', opts: ['Length only', 'Correct facts, terms and clear explanations', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate facts and clear explanations score marks.' },
      { q: 'A good study strategy is to:', opts: ['Avoid the kitchen', 'Combine theory with safe practical cooking', 'Only memorise', 'Skip revision'], correct: 1, exp: 'Theory plus practice works best.' }
    ],
    nutrients: [
      { q: 'The nutrient that mainly provides energy is:', opts: ['Protein', 'Carbohydrate', 'Vitamin', 'Water'], correct: 1, exp: 'Carbohydrates are the body’s main energy source.' },
      { q: 'Proteins are needed mainly for:', opts: ['Energy only', 'Growth and repair of tissues', 'Hydration', 'Nothing'], correct: 1, exp: 'Proteins build and repair body tissues.' },
      { q: 'A rich source of protein is:', opts: ['Rice', 'Fish/beans/eggs', 'Sugar', 'Oil'], correct: 1, exp: 'Fish, beans, meat and eggs are protein-rich.' },
      { q: 'Vitamin C is found mainly in:', opts: ['Citrus fruits and vegetables', 'Pure fat', 'Salt', 'Water only'], correct: 0, exp: 'Citrus fruits and fresh vegetables provide vitamin C.' },
      { q: 'Dietary fibre helps mainly with:', opts: ['Healthy digestion (bowel movement)', 'Building bones', 'Energy storage', 'Nothing'], correct: 0, exp: 'Fibre aids digestion and prevents constipation.' },
      { q: 'Calcium (a mineral) is important for:', opts: ['Strong bones and teeth', 'Skin colour only', 'Hair length', 'Nothing'], correct: 0, exp: 'Calcium builds strong bones and teeth.' }
    ],
    humannutrition: [
      { q: 'A balanced diet contains:', opts: ['Only carbohydrates', 'All nutrients in the right proportions', 'Only meat', 'Only fruit'], correct: 1, exp: 'It includes all nutrient groups appropriately.' },
      { q: 'Kwashiorkor is caused by a deficiency of:', opts: ['Water', 'Protein', 'Fat', 'Fibre'], correct: 1, exp: 'Kwashiorkor results from severe protein deficiency.' },
      { q: 'Absorption of digested food occurs mainly in the:', opts: ['Mouth', 'Small intestine', 'Large intestine', 'Stomach'], correct: 1, exp: 'The small intestine absorbs most nutrients.' },
      { q: 'A therapeutic diet is one that is:', opts: ['The same for everyone', 'Modified to help manage an illness', 'Only sweets', 'Never used'], correct: 1, exp: 'Therapeutic diets are modified for medical needs.' },
      { q: 'Nutritional needs are highest (per kg) during:', opts: ['Old age only', 'Growth stages such as infancy, childhood and pregnancy', 'No stage', 'Sleep only'], correct: 1, exp: 'Growth and pregnancy raise nutrient needs.' },
      { q: 'Marasmus is caused mainly by a deficiency of:', opts: ['Energy (and protein) — severe undernutrition', 'Water only', 'Vitamins only', 'Fibre only'], correct: 0, exp: 'Marasmus is severe energy/protein undernutrition.' }
    ],
    preparation: [
      { q: 'Which is a moist method of cooking?', opts: ['Boiling', 'Grilling', 'Roasting', 'Frying'], correct: 0, exp: 'Boiling/steaming are moist methods; grilling/roasting/frying are dry/fat methods.' },
      { q: 'A main reason for cooking food is to:', opts: ['Spoil it', 'Make it safe, digestible and tasty', 'Reduce nutrients only', 'Waste time'], correct: 1, exp: 'Cooking makes food safe, digestible and palatable.' },
      { q: 'A basic kitchen safety rule is to:', opts: ['Leave knives anywhere', 'Handle knives and heat carefully and keep surfaces clean', 'Cook on a wet floor', 'Ignore spills'], correct: 1, exp: 'Careful handling and cleanliness prevent accidents.' },
      { q: 'Before cooking from a recipe you should:', opts: ['Guess quantities', 'Read the ingredients, method and timing', 'Skip the method', 'Start randomly'], correct: 1, exp: 'Read and understand the recipe first.' },
      { q: 'Portion control helps to:', opts: ['Increase waste', 'Serve the right amount and reduce waste', 'Overfeed everyone', 'Lower quality'], correct: 1, exp: 'Portion control manages servings and waste.' },
      { q: 'Steaming is considered healthy because it:', opts: ['Uses much oil', 'Retains nutrients without added fat', 'Burns food', 'Adds sugar'], correct: 1, exp: 'Steaming keeps nutrients and needs no fat.' }
    ],
    hygiene: [
      { q: 'Food hygiene mainly aims to:', opts: ['Spread germs', 'Prevent food contamination and illness', 'Waste food', 'Increase poisoning'], correct: 1, exp: 'Hygiene prevents contamination and food-borne illness.' },
      { q: 'A common cause of food poisoning is:', opts: ['Proper cooking', 'Harmful bacteria (e.g. Salmonella) from poor handling', 'Clean hands', 'Refrigeration'], correct: 1, exp: 'Microbes from poor handling/storage cause food poisoning.' },
      { q: 'Which is a method of food preservation?', opts: ['Refrigeration/freezing', 'Leaving food in the sun to rot', 'Adding dirt', 'Ignoring it'], correct: 0, exp: 'Refrigeration, drying, salting and canning preserve food.' },
      { q: 'Before handling food you should always:', opts: ['Skip washing', 'Wash your hands with soap and water', 'Touch your face', 'Cough on it'], correct: 1, exp: 'Hand-washing prevents contamination.' },
      { q: 'Drying and salting preserve food by:', opts: ['Adding water', 'Removing/limiting the water microbes need', 'Adding germs', 'Warming it'], correct: 1, exp: 'They reduce available water, slowing microbial growth.' },
      { q: 'Raw and cooked foods should be:', opts: ['Stored together', 'Stored separately to avoid cross-contamination', 'Left uncovered', 'Mixed always'], correct: 1, exp: 'Separate raw and cooked foods to prevent cross-contamination.' }
    ],
    catering: [
      { q: 'Catering is the business of:', opts: ['Building houses', 'Providing food and drink service', 'Farming only', 'Banking'], correct: 1, exp: 'Catering provides food/drink services for people/events.' },
      { q: 'When planning a menu you should consider:', opts: ['Only cost', 'Nutrition, cost, variety, season and the occasion', 'Nothing', 'Only colour'], correct: 1, exp: 'Good menus balance nutrition, cost, variety and occasion.' },
      { q: 'Table setting refers to:', opts: ['Cooking the food', 'Arranging cover, cutlery and glassware correctly', 'Washing plates only', 'Buying food'], correct: 1, exp: 'Table setting lays the cover for a meal properly.' },
      { q: 'Good customer service in hospitality means:', opts: ['Ignoring guests', 'Welcoming and satisfying guests courteously', 'Rushing guests out', 'Poor hygiene'], correct: 1, exp: 'Courteous, attentive service satisfies guests.' },
      { q: 'A key hospitality ethic is:', opts: ['Poor hygiene', 'Cleanliness, honesty and value for the customer', 'Overcharging', 'Serving spoiled food'], correct: 1, exp: 'Hygiene, honesty and value are core ethics.' },
      { q: 'Event catering involves:', opts: ['No planning', 'Planning and serving food for functions/events', 'Only home cooking', 'Farming'], correct: 1, exp: 'Event catering serves food at organised functions.' }
    ],
    family: [
      { q: 'Budgeting for meals helps a family to:', opts: ['Waste money', 'Get good nutrition at an affordable cost', 'Eat poorly', 'Skip meals'], correct: 1, exp: 'A meal budget balances nutrition and cost.' },
      { q: 'When buying food, a wise consumer should check:', opts: ['Nothing', 'Price, quality and expiry/best-before date', 'Only the colour', 'Only the brand name'], correct: 1, exp: 'Check price, quality and dates before buying.' },
      { q: 'A basic consumer right is the right to:', opts: ['Unsafe products', 'Safety and accurate information', 'Be cheated', 'No choice'], correct: 1, exp: 'Consumers have rights to safety, information, choice and redress.' },
      { q: 'Food security means:', opts: ['Locking food away', 'Everyone having reliable access to enough safe, nutritious food', 'Wasting food', 'No food'], correct: 1, exp: 'Food security is reliable access to adequate, safe food.' },
      { q: 'A way to reduce household food waste is to:', opts: ['Overbuy and forget food', 'Plan meals, store food well and use leftovers', 'Throw away good food', 'Never plan'], correct: 1, exp: 'Planning, good storage and using leftovers cut waste.' },
      { q: 'Family nutrition should consider:', opts: ['Only adults', 'The differing needs of all family members', 'Only children', 'No one'], correct: 1, exp: 'Different members (age/health) have different needs.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In the practical (cookery) exam you should:', opts: ['Ignore hygiene', 'Plan, work hygienically and manage your time', 'Waste ingredients', 'Skip presentation'], correct: 1, exp: 'Planning, hygiene, time and presentation score practical marks.' },
      { q: 'Labelled diagrams/charts in answers:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are decoration'], correct: 1, exp: 'Clear labelled diagrams gain marks.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', nutrients: 'nutrients', humannutrition: 'humannutrition', preparation: 'preparation', hygiene: 'hygiene', catering: 'catering', family: 'family', practical: 'examstrat', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.nutrients, BANK.humannutrition, BANK.preparation, BANK.hygiene, BANK.catering, BANK.family, BANK.examstrat);
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
        var qid = 'wfn-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Food & Nutrition Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Food & Nutrition Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical cookery and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, a kitchen for safe practice, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wfn-m' + num + '-a' + flat;
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
      var pqid = 'wfn-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Food & Nutrition: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Food & Nutrition preparation course aligned to the WAEC syllabus: food science & nutrients, human nutrition, food preparation & cooking methods, food hygiene & preservation, catering & hospitality, family living & consumer education, practical food skills, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🍲',
    gradient: 'linear-gradient(135deg,#B0741F,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Food & Nutrition examination with clear nutrition charts, safe cookery guidance, meal-planning skills and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-FOOD',
    learn: [
      'Understand the WAEC Food & Nutrition exam structure and marking scheme',
      'Explain the nutrients, their functions and food sources',
      'Apply human nutrition: balanced diet, life-cycle needs and malnutrition',
      'Use safe food preparation, cooking methods and kitchen safety',
      'Apply food hygiene, preservation, catering and menu planning',
      'Understand family nutrition, consumer education and food security'
    ],
    requirements: ['A phone or computer with internet', 'A food & nutrition notebook for charts and recipes', 'Access to a kitchen for safe practical work (recommended)', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Food & Nutrition preparation course, organised into ten modules aligned to the WAEC Food & Nutrition syllabus and examination structure (objective, theory and practical/cookery).',
      'Every content lesson has a video and printable notes with nutrition charts and local food examples; downloadable resources include recipe booklets, meal-planning templates and food-safety guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Food & Nutrition is practical — cook safely and hygienically as you learn. Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-food-nutrition',
    _wassceFoodFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-FOODNUTRITION] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
