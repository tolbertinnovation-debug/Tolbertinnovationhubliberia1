/* TIH Complete WASSCE Home Economics Preparation Course.
   Builds COURSES_DB['wassce-home-economics'] directly with the full 10-module
   WAEC Home Economics structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Home Economics syllabus. Modelled on
   wassce-foodnutrition-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-home-economics';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceHEcoFull) return;

  // Vetted biology (nutrition) + design (textiles/interior) + finance videos
  // reused from the TIH courses. Content, notes and quizzes are fully
  // Home-Economics-specific.
  var VIDEOS = {
    intro: ['7z4UCQ1FfjY', '2C7u8onP7t4'],
    family: ['7z4UCQ1FfjY', 'PmmbycoOpdI'],
    food: ['X60_b2wiGfQ', '7z4UCQ1FfjY'],
    clothing: ['0jzrqhsXwLo', '2R5fH8iKAXc'],
    homemgmt: ['2C7u8onP7t4', 'AWof6O0vp3o'],
    consumer: ['AWof6O0vp3o', '2C7u8onP7t4'],
    housing: ['9CnrknQsg5E', '0jzrqhsXwLo'],
    entrepreneurship: ['-CsBl3tv-X0', '2C7u8onP7t4'],
    exampractice: ['7z4UCQ1FfjY', 'X60_b2wiGfQ'],
    final: ['7z4UCQ1FfjY', '2C7u8onP7t4']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Home Economics', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Home Economics Exam', 'Exam Structure & Marking Scheme', 'Introduction to Home Economics', 'Importance of Home Economics', 'Study Strategies']],
    [2, 'Family Living & Human Development', '👨‍👩‍👧‍👦', 'family', 'content', ['The Family', 'Family Relationships', 'Marriage and Parenthood', 'Child Growth and Development', 'Adolescent Development', 'Family Values', 'Family Resource Management', 'Responsible Parenthood']],
    [3, 'Food & Nutrition', '🥗', 'food', 'content', ['Basic Nutrition', 'Nutrients and Their Functions', 'Balanced Diet', 'Meal Planning', 'Food Preparation', 'Food Hygiene and Safety', 'Food Preservation', 'Nutritional Deficiency Diseases']],
    [4, 'Clothing & Textiles', '🧵', 'clothing', 'content', ['Introduction to Textiles', 'Types of Fabrics', 'Fabric Selection', 'Clothing Construction', 'Sewing Tools and Equipment', 'Garment Care', 'Laundry Techniques', 'Clothing Maintenance']],
    [5, 'Home Management', '🏠', 'homemgmt', 'content', ['Home Management Principles', 'Household Budgeting', 'Time and Energy Management', 'Home Cleaning and Sanitation', 'Household Equipment', 'Safety in the Home', 'Interior Decoration', 'Household Record Keeping']],
    [6, 'Consumer Education', '🛒', 'consumer', 'content', ['Consumer Rights and Responsibilities', 'Smart Shopping', 'Budgeting and Saving', 'Personal Finance Basics', 'Advertising and Consumer Awareness', 'Product Labels', 'Consumer Protection', 'Sustainable Consumption']],
    [7, 'Housing & Environmental Management', '🏡', 'housing', 'content', ['Types of Housing', 'Housing Design', 'Home Furnishing', 'Waste Management', 'Environmental Sanitation', 'Water Supply and Hygiene', 'Energy Conservation', 'Sustainable Living']],
    [8, 'Entrepreneurship & Home-Based Skills', '💡', 'entrepreneurship', 'content', ['Small Home Businesses', 'Catering Basics', 'Tailoring and Fashion', 'Event Decoration', 'Baking and Pastry', 'Craft Production', 'Business Planning', 'Marketing Home-Based Products']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Practical Demonstrations', 'Case Studies', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Home Economics Revision', 'Key Concepts Review', 'Practical Examination Review', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Home Economics exam', family: 'family living & human development', food: 'food & nutrition', clothing: 'clothing & textiles', homemgmt: 'home management', consumer: 'consumer education', housing: 'housing & environmental management', entrepreneurship: 'entrepreneurship & home-based skills', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    family: '<h4>📥 Guide: Family Living & Human Development</h4><ul><li><strong>The family:</strong> the basic social unit — nuclear and extended types.</li><li><strong>Functions:</strong> reproduction, care, socialisation, economic support, and love.</li><li><strong>Child development</strong> covers physical, mental, emotional and social growth.</li><li><strong>Adolescence:</strong> the change from childhood to adulthood (puberty).</li><li><strong>Responsible parenthood</strong> means meeting children’s needs and guiding them well.</li></ul>',
    food: '<h4>📥 Nutrition Table: Food & Nutrition</h4><ul><li><strong>Carbohydrates:</strong> energy (rice, cassava, yam).</li><li><strong>Proteins:</strong> growth and repair (fish, beans, eggs).</li><li><strong>Vitamins &amp; minerals:</strong> protection and regulation (fruits, vegetables).</li><li><strong>Balanced diet:</strong> all nutrients in the right proportions.</li><li><strong>Food hygiene &amp; preservation</strong> keep food safe (cleanliness, refrigeration, drying).</li></ul>',
    clothing: '<h4>📥 Guide: Clothing & Textiles</h4><ul><li><strong>Fibres:</strong> natural (cotton, wool, silk) and synthetic (nylon, polyester).</li><li><strong>Fabric selection</strong> depends on use, climate, cost and care needs.</li><li><strong>Sewing tools:</strong> needle, thread, scissors, tape measure, sewing machine.</li><li><strong>Garment care:</strong> follow the care label; wash, dry, iron and store correctly.</li><li><strong>Laundry:</strong> sort by colour/fabric; use the right water temperature.</li></ul>',
    homemgmt: '<h4>📥 Guide: Home Management</h4><ul><li><strong>Management process:</strong> plan → organise → implement → evaluate.</li><li><strong>Household budget:</strong> plan income and expenditure; save a portion.</li><li><strong>Time &amp; energy management:</strong> schedule tasks to avoid waste and fatigue.</li><li><strong>Home sanitation:</strong> regular cleaning prevents disease and pests.</li><li><strong>Safety in the home:</strong> prevent fire, falls, cuts, burns and poisoning.</li></ul>',
    consumer: '<h4>📥 Guide: Consumer Education</h4><ul><li><strong>Consumer rights:</strong> safety, information, choice and to be heard/redress.</li><li><strong>Smart shopping:</strong> plan, compare prices/quality, avoid impulse buying.</li><li><strong>Budgeting &amp; saving:</strong> spend within income and save for goals/emergencies.</li><li><strong>Product labels</strong> give contents, use, price and expiry — always read them.</li><li><strong>Consumer protection</strong> guards buyers against unfair or unsafe practices.</li></ul>',
    housing: '<h4>📥 Guide: Housing & Environmental Management</h4><ul><li><strong>Types of housing:</strong> traditional and modern; owned or rented.</li><li><strong>Good housing</strong> is safe, well-ventilated, well-lit and sanitary.</li><li><strong>Furnishing</strong> should suit the use, space and budget of a room.</li><li><strong>Waste management:</strong> reduce, reuse, recycle and dispose safely.</li><li><strong>Energy &amp; water conservation</strong> save money and protect the environment.</li></ul>',
    entrepreneurship: '<h4>📥 Guide: Entrepreneurship & Home-Based Skills</h4><ul><li><strong>Entrepreneur:</strong> one who starts and runs a business, taking risks for profit.</li><li><strong>Home-based businesses:</strong> catering, tailoring, baking, event decoration, crafts.</li><li><strong>Business plan:</strong> idea, market, costs, price and expected profit.</li><li><strong>Marketing:</strong> promote products to customers (word of mouth, social media).</li><li><strong>Good records &amp; quality</strong> build a reputation and repeat customers.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'family' || /Family|Marriage|Parenthood|Child Growth|Adolescent|Relationships/i.test(name)) return TEMPLATES.family;
    if (skill === 'food' || /Nutrition|Nutrients|Balanced Diet|Meal Planning|Food Preparation|Food Hygiene|Food Preservation|Deficiency/i.test(name)) return TEMPLATES.food;
    if (skill === 'clothing' || /Textiles|Fabrics|Fabric Selection|Clothing|Sewing|Garment|Laundry/i.test(name)) return TEMPLATES.clothing;
    if (skill === 'homemgmt' || /Home Management|Household Budgeting|Time and Energy|Cleaning|Household Equipment|Safety in the Home|Interior|Record Keeping/i.test(name)) return TEMPLATES.homemgmt;
    if (skill === 'consumer' || /Consumer|Shopping|Budgeting and Saving|Personal Finance|Advertising|Product Labels|Sustainable Consumption/i.test(name)) return TEMPLATES.consumer;
    if (skill === 'housing' || /Housing|Home Furnishing|Waste Management|Sanitation|Water Supply|Energy Conservation|Sustainable Living/i.test(name)) return TEMPLATES.housing;
    if (skill === 'entrepreneurship' || /Home Businesses|Catering|Tailoring|Event Decoration|Baking|Craft|Business Planning|Marketing/i.test(name)) return TEMPLATES.entrepreneurship;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Home Economics skills';
    var focus = position % 2 ? 'clear definitions, examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and practical home skills';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Home Economics · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective, theory and practical papers.</li>' +
      '<li>Study labelled examples (with local, everyday home situations) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short practical tasks around the home where possible.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain or carry out <em>' + esc(name) + '</em> and record it in your home economics notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Home Economics preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical home task — prepare the meal, sew/repair the garment, budget the household, or plan the room — then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Home Economics exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Home Economics is the study of:', opts: ['Only cooking', 'Managing the home and family living for better quality of life', 'Farming only', 'Rocks'], correct: 1, exp: 'It covers home management, family, food, clothing and resources.' },
      { q: 'WASSCE Home Economics is assessed by:', opts: ['An oral test only', 'Objective, theory and a practical paper', 'One essay only', 'A lab practical only'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'A benefit of studying Home Economics is that it:', opts: ['Wastes time', 'Builds practical life and home-management skills', 'Ignores the family', 'Reduces health'], correct: 1, exp: 'It develops useful life and household skills.' },
      { q: 'In the theory paper, marks are earned mainly for:', opts: ['Length only', 'Correct facts, terms and clear explanations', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate facts and clear explanations score marks.' },
      { q: 'A good study strategy is to:', opts: ['Avoid practice', 'Combine theory with practical home activities', 'Only memorise', 'Skip revision'], correct: 1, exp: 'Theory plus practice works best.' }
    ],
    family: [
      { q: 'The basic unit of society is the:', opts: ['School', 'Family', 'Market', 'Bank'], correct: 1, exp: 'The family is the basic social unit.' },
      { q: 'A nuclear family consists of:', opts: ['Parents and their children', 'A whole village', 'Only grandparents', 'Only friends'], correct: 0, exp: 'A nuclear family is parents and their children.' },
      { q: 'Child development includes physical, mental, emotional and ___ growth:', opts: ['Social', 'Financial only', 'No', 'Rock'], correct: 0, exp: 'Development is physical, mental, emotional and social.' },
      { q: 'Adolescence is the stage of:', opts: ['Old age', 'Transition from childhood to adulthood (puberty)', 'Infancy', 'Birth'], correct: 1, exp: 'Adolescence includes puberty and rapid change.' },
      { q: 'Responsible parenthood means:', opts: ['Neglecting children', 'Providing for and guiding children well', 'Ignoring needs', 'Avoiding care'], correct: 1, exp: 'It means meeting children’s needs and guiding them.' },
      { q: 'Family resource management is about using the family’s ___ wisely:', opts: ['Time, money and energy', 'Nothing', 'Only money', 'Only time'], correct: 0, exp: 'It manages time, money, energy and materials to meet goals.' }
    ],
    food: [
      { q: 'The nutrient that mainly provides energy is:', opts: ['Protein', 'Carbohydrate', 'Vitamin', 'Water'], correct: 1, exp: 'Carbohydrates are the main energy source.' },
      { q: 'Proteins are needed mainly for:', opts: ['Energy only', 'Growth and repair of tissues', 'Hydration', 'Nothing'], correct: 1, exp: 'Proteins build and repair body tissues.' },
      { q: 'A balanced diet contains:', opts: ['Only carbohydrates', 'All nutrients in the right proportions', 'Only meat', 'Only fruit'], correct: 1, exp: 'It includes all nutrient groups appropriately.' },
      { q: 'Kwashiorkor is caused by a deficiency of:', opts: ['Water', 'Protein', 'Fat', 'Fibre'], correct: 1, exp: 'Kwashiorkor results from protein deficiency.' },
      { q: 'A good food-hygiene practice is to:', opts: ['Skip washing hands', 'Wash hands and keep surfaces/utensils clean', 'Leave food uncovered', 'Mix raw and cooked food'], correct: 1, exp: 'Cleanliness prevents contamination.' },
      { q: 'Refrigeration preserves food by:', opts: ['Adding germs', 'Slowing the growth of microbes with cold', 'Warming it', 'Adding water'], correct: 1, exp: 'Cold slows microbial growth, preserving food.' }
    ],
    clothing: [
      { q: 'Cotton is an example of a ___ fibre:', opts: ['Natural', 'Synthetic', 'Metal', 'Plastic only'], correct: 0, exp: 'Cotton, wool and silk are natural fibres.' },
      { q: 'Polyester and nylon are examples of ___ fibres:', opts: ['Natural', 'Synthetic (man-made)', 'Food', 'Mineral'], correct: 1, exp: 'They are man-made (synthetic) fibres.' },
      { q: 'A basic sewing tool is a:', opts: ['Needle and thread', 'Frying pan', 'Hammer', 'Tractor'], correct: 0, exp: 'Needle, thread, scissors and tape measure are sewing tools.' },
      { q: 'A care label on a garment tells you:', opts: ['The price only', 'How to wash, dry and iron it', 'The owner’s name', 'Nothing'], correct: 1, exp: 'Care labels give washing/drying/ironing instructions.' },
      { q: 'Before laundering, clothes should be sorted by:', opts: ['Colour and fabric type', 'Owner’s age', 'Alphabet', 'Weight only'], correct: 0, exp: 'Sort by colour and fabric to avoid damage/bleeding.' },
      { q: 'A good reason to select a fabric carefully is to match the:', opts: ['Use, climate, cost and care', 'Weather forecast only', 'Owner’s name', 'Nothing'], correct: 0, exp: 'Fabric choice depends on use, climate, cost and care.' }
    ],
    homemgmt: [
      { q: 'The home-management process is: plan, organise, implement and:', opts: ['Evaluate', 'Ignore', 'Waste', 'Forget'], correct: 0, exp: 'Management = plan → organise → implement → evaluate.' },
      { q: 'A household budget helps a family to:', opts: ['Waste money', 'Plan spending and save', 'Overspend', 'Avoid saving'], correct: 1, exp: 'A budget plans income and expenditure and encourages saving.' },
      { q: 'Good time and energy management helps to:', opts: ['Increase fatigue', 'Get tasks done without waste or stress', 'Waste effort', 'Delay everything'], correct: 1, exp: 'It schedules work to save time and energy.' },
      { q: 'Regular home cleaning and sanitation help to:', opts: ['Spread disease', 'Prevent disease and pests', 'Attract pests', 'Waste water only'], correct: 1, exp: 'Cleanliness prevents disease and pest infestation.' },
      { q: 'A home safety measure is to:', opts: ['Leave wires exposed', 'Keep floors dry and store chemicals safely', 'Play with fire', 'Block exits'], correct: 1, exp: 'Prevent falls, fire, burns and poisoning in the home.' },
      { q: 'Household record keeping helps a family to:', opts: ['Forget spending', 'Track income, expenses and plan better', 'Waste money', 'Avoid budgets'], correct: 1, exp: 'Records help monitor and plan household finances.' }
    ],
    consumer: [
      { q: 'A basic consumer right is the right to:', opts: ['Unsafe goods', 'Safety and accurate information', 'Be cheated', 'No choice'], correct: 1, exp: 'Consumers have rights to safety, information, choice and redress.' },
      { q: 'Smart shopping involves:', opts: ['Impulse buying', 'Planning and comparing price and quality', 'Ignoring prices', 'Buying only brands'], correct: 1, exp: 'Plan and compare before buying.' },
      { q: 'A product label usually shows:', opts: ['Nothing useful', 'Contents, use, price and expiry date', 'The owner’s name', 'A story'], correct: 1, exp: 'Labels give contents, use, price and dates.' },
      { q: 'Saving part of your income is important because it:', opts: ['Wastes money', 'Provides for future needs and emergencies', 'Reduces security', 'Is impossible'], correct: 1, exp: 'Saving builds security for future needs.' },
      { q: 'Consumer protection laws exist to:', opts: ['Cheat buyers', 'Protect buyers from unfair/unsafe practices', 'Raise all prices', 'Ban shopping'], correct: 1, exp: 'They safeguard consumers’ rights and safety.' },
      { q: 'Sustainable consumption means:', opts: ['Wasting resources', 'Using resources wisely without harming the future', 'Buying everything', 'Ignoring the environment'], correct: 1, exp: 'It balances needs today with future resources.' }
    ],
    housing: [
      { q: 'Good housing should be:', opts: ['Dark and unventilated', 'Safe, well-ventilated, well-lit and sanitary', 'Overcrowded', 'Unsafe'], correct: 1, exp: 'Good housing is safe, airy, lit and clean.' },
      { q: 'Proper waste management includes:', opts: ['Dumping anywhere', 'Reduce, reuse, recycle and safe disposal', 'Burning indoors', 'Ignoring waste'], correct: 1, exp: 'The 3 Rs and safe disposal protect health.' },
      { q: 'A way to make water safe for drinking is to:', opts: ['Add refuse', 'Boil, filter or treat it', 'Leave it open', 'Add oil'], correct: 1, exp: 'Boiling/treating water prevents water-borne disease.' },
      { q: 'Home furnishing should suit the room’s:', opts: ['Use, space and budget', 'Owner’s name', 'Weather only', 'Nothing'], correct: 0, exp: 'Furnishing matches use, space and budget.' },
      { q: 'Energy conservation at home can be achieved by:', opts: ['Leaving lights on', 'Switching off unused appliances and lights', 'Wasting power', 'Ignoring bills'], correct: 1, exp: 'Turning off unused devices saves energy and money.' },
      { q: 'Environmental sanitation helps to:', opts: ['Spread disease', 'Prevent disease and keep surroundings clean', 'Pollute water', 'Increase waste'], correct: 1, exp: 'Sanitation keeps the environment healthy.' }
    ],
    entrepreneurship: [
      { q: 'An entrepreneur is a person who:', opts: ['Avoids business', 'Starts and runs a business, bearing risk for profit', 'Only works for others', 'Never innovates'], correct: 1, exp: 'Entrepreneurs create and run businesses, taking risks.' },
      { q: 'A home-based business a student could start is:', opts: ['Baking/catering or tailoring', 'Owning a bank', 'Running an airline', 'Building a hospital'], correct: 0, exp: 'Baking, catering, tailoring and crafts are common home businesses.' },
      { q: 'A business plan should include the idea, market, costs and:', opts: ['Expected profit', 'The weather', 'A story', 'Nothing'], correct: 0, exp: 'A plan covers idea, market, costs, price and expected profit.' },
      { q: 'Marketing a home-based product means:', opts: ['Hiding it', 'Promoting it to potential customers', 'Ignoring customers', 'Raising taxes'], correct: 1, exp: 'Marketing promotes products to customers.' },
      { q: 'Keeping good records in a small business helps to:', opts: ['Confuse the owner', 'Track income, expenses and profit', 'Waste money', 'Avoid customers'], correct: 1, exp: 'Records track performance and guide decisions.' },
      { q: 'Product quality and good service help a business to:', opts: ['Lose customers', 'Build a good reputation and repeat customers', 'Close down', 'Raise no income'], correct: 1, exp: 'Quality and service earn loyalty and repeat sales.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In the practical exam you should:', opts: ['Ignore hygiene and safety', 'Plan, work safely/hygienically and manage time', 'Waste materials', 'Skip presentation'], correct: 1, exp: 'Planning, safety, hygiene and neatness score practical marks.' },
      { q: 'Using real home/family examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples support and strengthen points.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', family: 'family', food: 'food', clothing: 'clothing', homemgmt: 'homemgmt', consumer: 'consumer', housing: 'housing', entrepreneurship: 'entrepreneurship', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.family, BANK.food, BANK.clothing, BANK.homemgmt, BANK.consumer, BANK.housing, BANK.entrepreneurship, BANK.examstrat);
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
        var qid = 'whe-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Home Economics Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Home Economics Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical demonstrations and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, safe practical work at home, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'whe-m' + num + '-a' + flat;
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
      var pqid = 'whe-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Home Economics: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Home Economics preparation course aligned to the WAEC syllabus: family living & human development, food & nutrition, clothing & textiles, home management, consumer education, housing & environmental management, entrepreneurship & home-based skills, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🏠',
    gradient: 'linear-gradient(135deg,#A03A6B,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Home Economics examination with practical life-skills guidance, clear notes, local examples and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-HECO',
    learn: [
      'Understand the WAEC Home Economics exam structure and marking scheme',
      'Explain family living, child development and family resource management',
      'Apply food & nutrition, meal planning and food hygiene/preservation',
      'Understand clothing & textiles, sewing tools and garment care',
      'Apply home management, budgeting, safety and consumer education',
      'Understand housing, environmental management and home-based entrepreneurship'
    ],
    requirements: ['A phone or computer with internet', 'A home economics notebook for notes, budgets and recipes', 'Access to a home/kitchen for safe practical work (recommended)', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Home Economics preparation course, organised into ten modules aligned to the WAEC Home Economics syllabus and examination structure (objective, theory and practical).',
      'Every content lesson has a video and printable notes with local, everyday examples; downloadable resources include meal-planning templates, sewing patterns, household budgeting worksheets and practical guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Home Economics is practical — practise safely at home. Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-home-economics',
    _wassceHEcoFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-HOMEECONOMICS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
