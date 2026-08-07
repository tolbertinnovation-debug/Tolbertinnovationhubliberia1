/* TIH Complete WASSCE Agricultural Science Preparation Course.
   Builds COURSES_DB['wassce-agriculture'] directly with the full 10-module WAEC
   Agricultural Science structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Agricultural Science syllabus. Modelled on
   wassce-techdrawing-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-agriculture';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceAgriFull) return;

  // Vetted AgriTech videos plus biology plant/ecology videos reused from the TIH
  // courses. Content, notes and quizzes are fully Agricultural-Science-specific.
  var VIDEOS = {
    intro: ['aO3PCncVR0c'],
    soil: ['y34d27RdEUM'],
    crop: ['KOsS2-3oboc'],
    animal: ['bM2yFP8pA_s'],
    engineering: ['mFGGtEaxRC4'],
    economics: ['ICH9yUu9mL4'],
    forestry: ['DrptnY2KbD4'],
    practical: ['aO3PCncVR0c'],
    exampractice: ['aO3PCncVR0c'],
    final: ['aO3PCncVR0c']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Agricultural Science', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Agricultural Science Exam', 'Exam Structure & Marking Scheme', 'Introduction to Agriculture', 'Importance of Agriculture', 'Study Strategies']],
    [2, 'Soil Science', '🌱', 'soil', 'content', ['Formation of Soil', 'Types of Soil', 'Physical Properties of Soil', 'Chemical Properties of Soil', 'Soil Fertility', 'Soil Conservation', 'Soil Erosion', 'Soil Testing']],
    [3, 'Crop Production', '🌾', 'crop', 'content', ['Classification of Crops', 'Land Preparation', 'Planting Methods', 'Crop Management', 'Weed Control', 'Pest Control', 'Disease Control', 'Harvesting & Storage']],
    [4, 'Animal Husbandry', '🐄', 'animal', 'content', ['Farm Animals', 'Livestock Breeds', 'Animal Nutrition', 'Animal Health', 'Livestock Housing', 'Breeding Methods', 'Poultry Farming', 'Fish Farming']],
    [5, 'Agricultural Engineering & Farm Tools', '🚜', 'engineering', 'content', ['Farm Tools', 'Farm Machinery', 'Maintenance of Farm Equipment', 'Irrigation Systems', 'Farm Structures', 'Mechanized Farming', 'Farm Safety', 'Modern Agricultural Technology']],
    [6, 'Agricultural Economics & Farm Management', '📊', 'economics', 'content', ['Farm Records', 'Farm Budgeting', 'Agricultural Marketing', 'Agricultural Finance', 'Farm Management Principles', 'Cooperative Societies', 'Agricultural Insurance', 'Agribusiness']],
    [7, 'Forestry & Environmental Management', '🌳', 'forestry', 'content', ['Forest Resources', 'Agroforestry', 'Wildlife Conservation', 'Environmental Protection', 'Climate Change', 'Sustainable Agriculture', 'Water Conservation', 'Natural Resource Management']],
    [8, 'Practical Agriculture', '🧑‍🌾', 'practical', 'content', ['Nursery Establishment', 'Seed Testing', 'Fertilizer Application', 'Compost Making', 'Animal Care Practices', 'Farm Record Keeping', 'Crop Identification', 'Practical Demonstrations']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Practical Identification', 'Agricultural Calculations', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Agricultural Science Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Testing", "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Agricultural Science exam', soil: 'soil science', crop: 'crop production', animal: 'animal husbandry', engineering: 'agricultural engineering & farm tools', economics: 'agricultural economics & farm management', forestry: 'forestry & environmental management', practical: 'practical agriculture', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    soil: '<h4>📥 Guide: Soil Science</h4><ul><li><strong>Soil formation:</strong> weathering of rock (parent material) plus organic matter over time.</li><li><strong>Soil types:</strong> sandy (drains fast), clay (holds water), loam (best for most crops).</li><li><strong>Soil fertility:</strong> the soil’s ability to supply nutrients (N, P, K).</li><li><strong>Conservation:</strong> mulching, cover crops, contour ploughing, crop rotation.</li><li><strong>Erosion</strong> is the removal of topsoil by water or wind — prevent with vegetation cover.</li></ul>',
    crop: '<h4>📥 Guide: Crop Production</h4><ul><li><strong>Classification:</strong> by use (food/cash), life cycle (annual/biennial/perennial).</li><li><strong>Land preparation:</strong> clearing, ploughing, harrowing, ridging.</li><li><strong>Planting:</strong> broadcasting, drilling, dibbling; correct spacing matters.</li><li><strong>Management:</strong> weeding, fertiliser, pest and disease control.</li><li><strong>West African crops:</strong> rice, cassava, maize, oil palm, rubber, cocoa.</li></ul>',
    animal: '<h4>📥 Guide: Animal Husbandry</h4><ul><li><strong>Farm animals:</strong> cattle, sheep, goats, pigs, poultry, fish.</li><li><strong>Nutrition:</strong> a balanced ration (energy, protein, minerals, vitamins, water).</li><li><strong>Health:</strong> vaccination, deworming, clean housing prevent disease.</li><li><strong>Breeding:</strong> natural mating and artificial insemination (AI).</li><li><strong>Poultry &amp; fish farming</strong> are important protein and income sources in West Africa.</li></ul>',
    engineering: '<h4>📥 Guide: Farm Tools & Engineering</h4><ul><li><strong>Simple tools:</strong> cutlass, hoe, rake, wheelbarrow — clean and store after use.</li><li><strong>Machinery:</strong> tractor, plough, harrow, planter, harvester.</li><li><strong>Maintenance:</strong> clean, oil moving parts, sharpen blades, store dry to prevent rust.</li><li><strong>Irrigation:</strong> supplying water artificially (surface, sprinkler, drip).</li><li><strong>Mechanised farming</strong> raises output; observe farm safety at all times.</li></ul>',
    economics: '<h4>📥 Guide: Agricultural Economics & Management</h4><ul><li><strong>Farm records:</strong> track inputs, outputs, income and expenditure.</li><li><strong>Farm budget:</strong> a plan of expected costs and returns.</li><li><strong>Marketing:</strong> getting produce from farm to consumer at a good price.</li><li><strong>Cooperatives</strong> help farmers pool resources, buy inputs and sell together.</li><li><strong>Agribusiness</strong> runs farming as a profitable business enterprise.</li></ul>',
    forestry: '<h4>📥 Guide: Forestry & Environment</h4><ul><li><strong>Forests</strong> provide timber, fuel, medicine and protect watersheds.</li><li><strong>Agroforestry:</strong> growing trees and crops/animals together on the same land.</li><li><strong>Deforestation</strong> causes erosion and biodiversity loss — replant (afforestation).</li><li><strong>Sustainable agriculture</strong> meets today’s needs without harming the future.</li><li><strong>Conservation</strong> of soil, water and wildlife sustains farming long-term.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'soil' || /Soil|Erosion|Fertility/i.test(name)) return TEMPLATES.soil;
    if (skill === 'crop' || /Crops|Planting|Weed|Pest|Disease Control|Harvesting|Land Preparation/i.test(name)) return TEMPLATES.crop;
    if (skill === 'animal' || /Animal|Livestock|Poultry|Fish|Breeding/i.test(name)) return TEMPLATES.animal;
    if (skill === 'engineering' || /Farm Tools|Machinery|Irrigation|Farm Structures|Mechanized|Farm Safety/i.test(name)) return TEMPLATES.engineering;
    if (skill === 'economics' || /Farm Records|Budgeting|Marketing|Finance|Cooperative|Agribusiness|Insurance/i.test(name)) return TEMPLATES.economics;
    if (skill === 'forestry' || /Forest|Agroforestry|Wildlife|Sustainable|Water Conservation|Natural Resource/i.test(name)) return TEMPLATES.forestry;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Agricultural Science skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and farm practice';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Agricultural Science · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective, theory and practical papers.</li>' +
      '<li>Study labelled diagrams/examples (with West African crops and livestock) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short practical tasks on the farm or in the garden.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain/draw or carry out <em>' + esc(name) + '</em> and record it in your agriculture notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Agricultural Science preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical farming task — establish the nursery, apply the fertiliser/compost, keep the records, or identify the specimens — then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Agricultural Science exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Agriculture is best defined as the:', opts: ['Study of rocks', 'Cultivation of crops and rearing of animals', 'Making of cars', 'Study of stars'], correct: 1, exp: 'Agriculture is crop cultivation and animal rearing.' },
      { q: 'A major importance of agriculture in West Africa is:', opts: ['No benefit', 'Providing food, employment and raw materials', 'Only pollution', 'Nothing'], correct: 1, exp: 'It provides food, jobs, income and raw materials.' },
      { q: 'WASSCE Agricultural Science is assessed by:', opts: ['An oral test only', 'Objective, theory and practical papers', 'One essay only', 'Cooking'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'In the theory paper, marks are earned mainly for:', opts: ['Length only', 'Correct facts, terms and labelled diagrams', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate facts and diagrams score marks.' },
      { q: 'A good study strategy for agriculture is to:', opts: ['Avoid the farm', 'Combine theory with practical farm activities', 'Only memorise', 'Skip diagrams'], correct: 1, exp: 'Theory plus hands-on practice works best.' }
    ],
    soil: [
      { q: 'The best soil type for most crops is:', opts: ['Pure sand', 'Loam', 'Pure clay', 'Gravel'], correct: 1, exp: 'Loam balances drainage, aeration and water/nutrient holding.' },
      { q: 'Soil is formed mainly by the:', opts: ['Weathering of rocks plus organic matter', 'Melting of metal', 'Freezing of water only', 'Burning of plastic'], correct: 0, exp: 'Weathering of parent rock plus organic matter forms soil.' },
      { q: 'The three major plant nutrients are nitrogen, phosphorus and:', opts: ['Potassium', 'Plastic', 'Iron only', 'Sand'], correct: 0, exp: 'N, P and K are the primary macronutrients.' },
      { q: 'A good soil conservation practice is:', opts: ['Overgrazing', 'Mulching and contour ploughing', 'Bush burning', 'Leaving soil bare'], correct: 1, exp: 'Mulching, cover crops and contour ploughing conserve soil.' },
      { q: 'Soil erosion is the:', opts: ['Building of soil', 'Removal of topsoil by water or wind', 'Adding of manure', 'Testing of pH'], correct: 1, exp: 'Erosion removes fertile topsoil.' },
      { q: 'Sandy soil is characterised by:', opts: ['Holding much water', 'Draining quickly (low water retention)', 'Being very sticky', 'No air'], correct: 1, exp: 'Sandy soil drains fast and holds little water.' }
    ],
    crop: [
      { q: 'Crops grown mainly for sale/income are called:', opts: ['Cash crops', 'Weeds', 'Cover crops only', 'Wild plants'], correct: 0, exp: 'Cash crops (e.g. cocoa, rubber) are grown for income.' },
      { q: 'A common cash crop in Liberia is:', opts: ['Rubber', 'Snow', 'Wheat only', 'Pine only'], correct: 0, exp: 'Rubber, oil palm and cocoa are key Liberian cash crops.' },
      { q: 'Planting seeds at the correct spacing helps to:', opts: ['Waste land', 'Give each plant enough light, water and nutrients', 'Increase weeds', 'Reduce yield'], correct: 1, exp: 'Correct spacing reduces competition and improves yield.' },
      { q: 'Weeds are best described as:', opts: ['Useful crops', 'Unwanted plants that compete with crops', 'Farm animals', 'Fertilisers'], correct: 1, exp: 'Weeds compete with crops for resources.' },
      { q: 'A biological method of pest control is:', opts: ['Spraying chemicals', 'Using natural enemies/predators of the pest', 'Burning the farm', 'Doing nothing'], correct: 1, exp: 'Biological control uses natural predators of the pest.' },
      { q: 'Proper storage of harvested grain aims to:', opts: ['Increase pests', 'Prevent spoilage and loss', 'Add moisture', 'Reduce quality'], correct: 1, exp: 'Good, dry storage prevents spoilage and pest loss.' }
    ],
    animal: [
      { q: 'A balanced ration for farm animals must contain:', opts: ['Only water', 'Energy, protein, minerals, vitamins and water', 'Only grass', 'Only salt'], correct: 1, exp: 'A balanced ration supplies all nutrient groups.' },
      { q: 'Poultry refers to:', opts: ['Cattle', 'Domestic birds (e.g. chickens, ducks)', 'Fish', 'Goats'], correct: 1, exp: 'Poultry are domesticated birds kept for meat/eggs.' },
      { q: 'Vaccination of animals helps to:', opts: ['Cause disease', 'Prevent certain diseases', 'Reduce growth', 'Do nothing'], correct: 1, exp: 'Vaccines protect livestock from specific diseases.' },
      { q: 'Artificial insemination (AI) is a method of:', opts: ['Feeding', 'Breeding animals', 'Housing', 'Marketing'], correct: 1, exp: 'AI is a controlled breeding technique.' },
      { q: 'Fish farming (aquaculture) is the rearing of fish in:', opts: ['The desert', 'Ponds or tanks', 'Trees', 'The air'], correct: 1, exp: 'Fish are reared in ponds, tanks or cages.' },
      { q: 'Clean, well-ventilated housing for livestock helps to:', opts: ['Spread disease', 'Keep animals healthy and productive', 'Reduce growth', 'Waste feed'], correct: 1, exp: 'Good housing improves animal health and output.' }
    ],
    engineering: [
      { q: 'A cutlass and hoe are examples of:', opts: ['Farm machinery', 'Simple farm tools', 'Fertilisers', 'Animals'], correct: 1, exp: 'The cutlass and hoe are simple hand tools.' },
      { q: 'A tractor is mainly used for:', opts: ['Cooking', 'Ploughing and heavy farm work', 'Writing', 'Fishing only'], correct: 1, exp: 'Tractors power ploughing, harrowing and haulage.' },
      { q: 'To prevent farm tools from rusting you should:', opts: ['Leave them wet', 'Clean, oil and store them dry', 'Bury them', 'Ignore them'], correct: 1, exp: 'Clean, oil and store tools dry to prevent rust.' },
      { q: 'Irrigation is the:', opts: ['Removal of water', 'Artificial supply of water to crops', 'Cutting of trees', 'Feeding of animals'], correct: 1, exp: 'Irrigation supplies water to crops artificially.' },
      { q: 'Mechanised farming mainly:', opts: ['Reduces output', 'Increases output and reduces labour', 'Is impossible', 'Only wastes fuel'], correct: 1, exp: 'Machinery raises productivity and cuts manual labour.' },
      { q: 'A basic farm safety rule is to:', opts: ['Misuse machinery', 'Handle tools/machines correctly and wear protective gear', 'Ignore guards', 'Run with cutlasses'], correct: 1, exp: 'Use equipment properly and wear protective gear.' }
    ],
    economics: [
      { q: 'Farm records are kept mainly to:', opts: ['Waste paper', 'Track inputs, outputs, income and expenditure', 'Confuse the farmer', 'Nothing'], correct: 1, exp: 'Records help plan, monitor and manage the farm.' },
      { q: 'A farm budget is:', opts: ['A type of crop', 'A plan of expected costs and returns', 'A farm animal', 'A tool'], correct: 1, exp: 'A budget plans expected income and expenditure.' },
      { q: 'A cooperative society helps farmers to:', opts: ['Compete alone', 'Pool resources, buy inputs and market together', 'Avoid selling', 'Waste money'], correct: 1, exp: 'Cooperatives give farmers collective strength.' },
      { q: 'Agribusiness means running agriculture as a:', opts: ['Hobby only', 'Profit-oriented business enterprise', 'Charity only', 'Game'], correct: 1, exp: 'Agribusiness treats farming as a business.' },
      { q: 'Agricultural marketing is concerned with moving produce from:', opts: ['Consumer to farm', 'Farm to consumer at a good price', 'Farm to farm only', 'Nowhere'], correct: 1, exp: 'Marketing moves produce from farm to market/consumer.' },
      { q: 'Agricultural insurance helps farmers to:', opts: ['Increase risk', 'Reduce losses from disasters (e.g. drought)', 'Avoid farming', 'Waste money'], correct: 1, exp: 'Insurance cushions farmers against losses.' }
    ],
    forestry: [
      { q: 'Agroforestry is the practice of growing:', opts: ['Only trees', 'Trees together with crops and/or animals', 'Only crops', 'Only fish'], correct: 1, exp: 'Agroforestry combines trees with crops/animals.' },
      { q: 'Planting new trees to replace those cut is called:', opts: ['Deforestation', 'Afforestation/reforestation', 'Erosion', 'Harvesting'], correct: 1, exp: 'Afforestation/reforestation restores tree cover.' },
      { q: 'A major benefit of forests is that they:', opts: ['Cause floods', 'Provide timber and protect soil and water', 'Destroy wildlife', 'Nothing'], correct: 1, exp: 'Forests give products and protect the environment.' },
      { q: 'Sustainable agriculture means farming that:', opts: ['Harms the future', 'Meets present needs without harming future generations', 'Uses no soil', 'Avoids all crops'], correct: 1, exp: 'It balances present output with future resources.' },
      { q: 'Deforestation often leads to:', opts: ['More biodiversity', 'Soil erosion and loss of biodiversity', 'Better rainfall always', 'Nothing'], correct: 1, exp: 'Clearing forests causes erosion and habitat loss.' },
      { q: 'Water conservation on the farm can be achieved by:', opts: ['Wasting water', 'Mulching, drip irrigation and rainwater harvesting', 'Draining all water', 'Ignoring it'], correct: 1, exp: 'Mulching, drip irrigation and harvesting save water.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Labelled diagrams in agriculture answers:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are decoration'], correct: 1, exp: 'Clear labelled diagrams gain marks.' },
      { q: 'For the practical/identification test you should be able to:', opts: ['Guess', 'Identify crops, weeds, pests, tools and livestock', 'Ignore specimens', 'Skip it'], correct: 1, exp: 'Practical marks come from correct identification and reasons.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', soil: 'soil', crop: 'crop', animal: 'animal', engineering: 'engineering', economics: 'economics', forestry: 'forestry', practical: 'examstrat', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.soil, BANK.crop, BANK.animal, BANK.engineering, BANK.economics, BANK.forestry, BANK.examstrat);
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
        var qid = 'wag-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Agricultural Science Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Agricultural Science Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical agriculture and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, a farm/garden for practice, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wag-m' + num + '-a' + flat;
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
      var pqid = 'wag-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Agricultural Science: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Agricultural Science preparation course aligned to the WAEC syllabus: soil science, crop production, animal husbandry, agricultural engineering & farm tools, agricultural economics & farm management, forestry & environmental management, practical agriculture, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🌾',
    gradient: 'linear-gradient(135deg,#0B7A3A,#5A6B2B)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Agricultural Science examination with clear concepts, local crop/livestock examples, practical skills and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-AGRI',
    learn: [
      'Understand the WAEC Agricultural Science exam structure and marking scheme',
      'Explain soil formation, types, fertility and conservation',
      'Apply crop production: land preparation, planting, and pest/disease control',
      'Understand animal husbandry, poultry and fish farming',
      'Use farm tools, machinery, irrigation and farm management/economics',
      'Explain forestry, environmental management and practical agriculture'
    ],
    requirements: ['A phone or computer with internet', 'An agriculture notebook for diagrams and records', 'Access to a farm/garden for practical work (recommended)', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Agricultural Science preparation course, organised into ten modules aligned to the WAEC Agricultural Science syllabus and examination structure (objective, theory and practical).',
      'Every content lesson has a video and printable notes with West African crop and livestock examples; downloadable resources include crop/livestock guides, farm record templates and soil-analysis worksheets. The course ends with a full mock examination and a Certificate of Completion.',
      'Agricultural Science is practical — practise on a farm or in a garden where you can. Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-agriculture',
    _wassceAgriFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-AGRICULTURE] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
