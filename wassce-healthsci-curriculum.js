/* TIH Complete WASSCE Health Science Preparation Course.
   Builds COURSES_DB['wassce-healthsci'] directly with the full 10-module WAEC
   Health Science structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Health Science syllabus. Educational only — not a
   substitute for professional medical care or certified first-aid training.
   Modelled on wassce-biology-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-health-science';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceHSciFull) return;

  // Vetted biology-domain videos (anatomy/physiology/disease overlap) plus the
  // English pool for exam-practice. Content, notes and quizzes are fully
  // Health-Science-specific.
  var VIDEOS = {
    intro: ['snlG7EWds2o'],
    anatomy: ['uBGl2BujkPQ'],
    personal: ['pHZJziziY-I'],
    nutrition: ['2abzaahKreE'],
    disease: ['fk8cqO4meKo'],
    environmental: ['lUfMp91-i48'],
    firstaid: ['snlG7EWds2o'],
    family: ['snlG7EWds2o'],
    exampractice: ['snlG7EWds2o'],
    final: ['snlG7EWds2o']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Health Science', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Health Science Exam', 'Exam Structure & Marking Scheme', 'What is Health Science?', 'Dimensions of Health', 'Study Strategies']],
    [2, 'Human Anatomy & Physiology', '🫀', 'anatomy', 'content', ['Cells and Tissues', 'Skeletal System', 'Muscular System', 'Circulatory System', 'Respiratory System', 'Digestive System', 'Nervous System', 'Endocrine System', 'Reproductive System', 'Excretory System']],
    [3, 'Personal Health & Hygiene', '🧼', 'personal', 'content', ['Personal Hygiene', 'Oral Health', 'Skin Care', 'Healthy Lifestyle', 'Physical Exercise', 'Mental Health', 'Substance Abuse Prevention', 'Healthy Habits']],
    [4, 'Nutrition & Food Science', '🥗', 'nutrition', 'content', ['Nutrients and Their Functions', 'Balanced Diet', 'Meal Planning', 'Food Preservation', 'Food Hygiene', 'Malnutrition', 'Nutritional Deficiency Diseases', 'Healthy Eating']],
    [5, 'Diseases & Disease Prevention', '🦠', 'disease', 'content', ['Communicable Diseases', 'Non-Communicable Diseases', 'Vector-Borne Diseases', 'Immunization', 'Infection Prevention', 'HIV/AIDS', 'Tuberculosis', 'Malaria Prevention']],
    [6, 'Environmental & Community Health', '🌍', 'environmental', 'content', ['Environmental Sanitation', 'Safe Water Supply', 'Waste Management', 'Pollution', 'Community Health Services', 'Public Health Programs', 'Health Education', 'Sustainable Environmental Health']],
    [7, 'First Aid & Emergency Care', '⛑️', 'firstaid', 'content', ['Principles of First Aid', 'Bleeding and Wound Care', 'Fractures and Sprains', 'Burns and Scalds', 'Choking', 'Cardiopulmonary Resuscitation (CPR) Basics', 'Poisoning', 'Emergency Response']],
    [8, 'Family Life & Reproductive Health', '👨‍👩‍👧', 'family', 'content', ['Human Reproduction', 'Family Planning', 'Pregnancy and Childbirth', 'Maternal Health', 'Child Health', 'Adolescent Health', 'Sexual Health', 'Responsible Parenthood']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Case Studies', 'Practical Health Scenarios', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Health Science Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests", "Questions" or "Studies".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Health Science exam', anatomy: 'human anatomy & physiology', personal: 'personal health & hygiene', nutrition: 'nutrition & food science', disease: 'diseases & disease prevention', environmental: 'environmental & community health', firstaid: 'first aid & emergency care', family: 'family life & reproductive health', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    anatomy: '<h4>📥 Guide: Human Body Systems</h4><ul><li><strong>Circulatory:</strong> heart, blood vessels and blood transport oxygen and nutrients.</li><li><strong>Respiratory:</strong> gaseous exchange in the alveoli of the lungs.</li><li><strong>Digestive:</strong> mouth → stomach → small intestine (absorption) → large intestine.</li><li><strong>Nervous:</strong> brain, spinal cord and neurones coordinate the body.</li><li><strong>Excretory:</strong> kidneys remove urea; skin and lungs also excrete waste.</li></ul>',
    personal: '<h4>📥 Guide: Personal Health & Hygiene</h4><ul><li><strong>Personal hygiene:</strong> regular bathing, hand-washing, clean clothes and nails.</li><li><strong>Oral health:</strong> brush twice daily; limit sugary foods.</li><li><strong>Healthy lifestyle:</strong> balanced diet, exercise, rest and no substance abuse.</li><li><strong>Mental health</strong> matters — manage stress and seek help when needed.</li><li><strong>Prevention</strong> of illness is better (and cheaper) than cure.</li></ul>',
    nutrition: '<h4>📥 Nutrition Table: Nutrients &amp; Functions</h4><ul><li><strong>Carbohydrates:</strong> energy (rice, cassava, bread).</li><li><strong>Proteins:</strong> growth and repair (fish, beans, meat, eggs).</li><li><strong>Fats/oils:</strong> concentrated energy and insulation.</li><li><strong>Vitamins &amp; minerals:</strong> protection and body regulation (fruits, vegetables).</li><li><strong>Water &amp; fibre:</strong> hydration and healthy digestion. A <strong>balanced diet</strong> contains all in the right proportions.</li></ul>',
    disease: '<h4>📥 Guide: Diseases & Prevention</h4><ul><li><strong>Communicable diseases</strong> spread from person to person (e.g. TB, cholera, COVID-19).</li><li><strong>Non-communicable diseases</strong> are not spread (e.g. diabetes, hypertension).</li><li><strong>Vector-borne:</strong> spread by carriers — malaria by mosquitoes.</li><li><strong>Prevention:</strong> immunisation, hygiene, safe water, vector control, safe practices.</li><li><strong>Malaria prevention:</strong> insecticide-treated nets, clearing stagnant water, prompt treatment.</li></ul>',
    environmental: '<h4>📥 Guide: Environmental & Community Health</h4><ul><li><strong>Sanitation:</strong> proper toilets, refuse disposal and drainage prevent disease.</li><li><strong>Safe water:</strong> boiling, filtering or treating water prevents water-borne disease.</li><li><strong>Waste management:</strong> reduce, reuse, recycle and dispose of waste safely.</li><li><strong>Community health services</strong> include clinics, immunisation and health education.</li><li><strong>Health education</strong> empowers people to protect their own health.</li></ul>',
    firstaid: '<h4>📥 First Aid Guide (educational)</h4><ul><li><strong>Aims of first aid:</strong> preserve life, prevent worsening, promote recovery.</li><li><strong>Check the scene &amp; casualty:</strong> danger, response, airway, breathing.</li><li><strong>Bleeding:</strong> apply firm direct pressure and raise the part if possible.</li><li><strong>Burns:</strong> cool with clean running water for several minutes; do not apply oil.</li><li><strong>Always seek professional medical help for serious cases.</strong> This is study material, not a substitute for a certified first-aid course.</li></ul>',
    family: '<h4>📥 Guide: Family Life & Reproductive Health</h4><ul><li><strong>Human reproduction:</strong> the male and female reproductive systems and fertilisation.</li><li><strong>Maternal health:</strong> antenatal care, safe delivery and postnatal care.</li><li><strong>Child health:</strong> immunisation, nutrition and growth monitoring.</li><li><strong>Adolescent health:</strong> puberty, hygiene and responsible decisions.</li><li><strong>Responsible parenthood</strong> and family planning support healthy families.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'anatomy' || /Cells|Skeletal|Muscular|Circulatory|Respiratory|Digestive|Nervous|Endocrine|Excretory|Reproductive System/i.test(name)) return TEMPLATES.anatomy;
    if (skill === 'personal' || /Hygiene|Oral Health|Skin|Lifestyle|Exercise|Mental Health|Substance/i.test(name)) return TEMPLATES.personal;
    if (skill === 'nutrition' || /Nutrients|Balanced Diet|Meal|Food|Malnutrition|Deficiency|Eating/i.test(name)) return TEMPLATES.nutrition;
    if (skill === 'disease' || /Communicable|Vector|Immunization|Infection|HIV|Tuberculosis|Malaria/i.test(name)) return TEMPLATES.disease;
    if (skill === 'environmental' || /Sanitation|Water|Waste|Pollution|Community Health|Public Health|Health Education/i.test(name)) return TEMPLATES.environmental;
    if (skill === 'firstaid' || /First Aid|Bleeding|Fractures|Burns|Choking|CPR|Poisoning|Emergency/i.test(name)) return TEMPLATES.firstaid;
    if (skill === 'family' || /Reproduction|Family Planning|Pregnancy|Maternal|Child Health|Adolescent|Sexual Health|Parenthood/i.test(name)) return TEMPLATES.family;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Health Science skills';
    var focus = position % 2 ? 'clear definitions, diagrams and timed practice' : 'understanding the concept and applying it to WAEC-style questions and health scenarios';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Health Science · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and diagrams, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study labelled diagrams/examples and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short health scenarios, giving reasons and examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, with examples, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Draw/label or explain <em>' + esc(name) + '</em> in your health science notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p style="font-size:.9em;opacity:.85"><em>Educational content for exam preparation only — not medical advice or a substitute for professional care or certified first-aid training.</em></p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Health Science preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — analyse the health case/scenario or plan the task — with clear reasons and examples, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Health Science exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Health Science is mainly the study of:', opts: ['Only machines', 'Health, the human body and how to keep it well', 'Farming only', 'Chemistry only'], correct: 1, exp: 'It studies health, the body and health promotion.' },
      { q: 'The World Health Organization defines health as complete physical, mental and ___ well-being:', opts: ['Financial', 'Social', 'Political', 'Legal'], correct: 1, exp: 'Health is physical, mental and social well-being.' },
      { q: 'WASSCE Health Science usually consists of:', opts: ['Only an oral test', 'An objective paper and an essay/theory paper', 'One essay only', 'A practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is essay/theory.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Correct facts, terms and labelled diagrams', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate facts and diagrams score marks.' },
      { q: 'A good study strategy for health science is to:', opts: ['Ignore diagrams', 'Use diagrams, summaries and past-question practice', 'Only memorise names', 'Skip revision'], correct: 1, exp: 'Diagrams and practice greatly aid learning.' }
    ],
    anatomy: [
      { q: 'Gaseous exchange in the lungs occurs in the:', opts: ['Trachea', 'Alveoli', 'Bronchi only', 'Diaphragm'], correct: 1, exp: 'Alveoli are the site of gas exchange.' },
      { q: 'The organ that pumps blood around the body is the:', opts: ['Lung', 'Heart', 'Liver', 'Kidney'], correct: 1, exp: 'The heart pumps blood in the circulatory system.' },
      { q: 'The main organ of excretion of urea is the:', opts: ['Lung', 'Kidney', 'Heart', 'Skin'], correct: 1, exp: 'Kidneys filter blood and excrete urea in urine.' },
      { q: 'The basic unit of the nervous system is the:', opts: ['Neurone', 'Nephron', 'Alveolus', 'Villus'], correct: 0, exp: 'The neurone (nerve cell) transmits impulses.' },
      { q: 'Absorption of digested food occurs mainly in the:', opts: ['Mouth', 'Small intestine', 'Large intestine', 'Stomach'], correct: 1, exp: 'The small intestine absorbs most nutrients.' },
      { q: 'The skeletal system provides:', opts: ['Digestion', 'Support, protection and movement', 'Gas exchange', 'Excretion only'], correct: 1, exp: 'Bones support, protect organs and enable movement.' }
    ],
    personal: [
      { q: 'A basic personal hygiene practice is:', opts: ['Sharing toothbrushes', 'Regular hand-washing with soap', 'Skipping bathing', 'Ignoring nails'], correct: 1, exp: 'Hand-washing prevents the spread of germs.' },
      { q: 'Good oral health includes:', opts: ['Never brushing', 'Brushing at least twice a day', 'Eating only sweets', 'Avoiding dentists always'], correct: 1, exp: 'Brush twice daily and limit sugar.' },
      { q: 'A healthy lifestyle includes a balanced diet, rest and:', opts: ['No exercise', 'Regular physical exercise', 'Substance abuse', 'Poor hygiene'], correct: 1, exp: 'Exercise is part of a healthy lifestyle.' },
      { q: 'Mental health is important because it affects:', opts: ['Nothing', 'How we think, feel and cope with life', 'Only the body', 'Only sleep'], correct: 1, exp: 'Mental health affects thoughts, feelings and coping.' },
      { q: 'Substance abuse (e.g. drugs/alcohol) can lead to:', opts: ['Better health', 'Serious health and social problems', 'Longer life', 'No effect'], correct: 1, exp: 'Substance abuse harms health and society.' },
      { q: 'Prevention of illness is generally:', opts: ['More costly than cure', 'Better and cheaper than cure', 'Impossible', 'Unnecessary'], correct: 1, exp: '"Prevention is better than cure."' }
    ],
    nutrition: [
      { q: 'The nutrient that mainly provides energy is:', opts: ['Protein', 'Carbohydrate', 'Vitamin', 'Water'], correct: 1, exp: 'Carbohydrates are the body’s main energy source.' },
      { q: 'Proteins are needed mainly for:', opts: ['Energy only', 'Growth and repair of tissues', 'Hydration', 'Nothing'], correct: 1, exp: 'Proteins build and repair body tissues.' },
      { q: 'A balanced diet contains:', opts: ['Only carbohydrates', 'All the nutrients in the right proportions', 'Only meat', 'Only fruit'], correct: 1, exp: 'It includes all nutrient groups appropriately.' },
      { q: 'A deficiency of vitamin C can cause:', opts: ['Scurvy', 'Malaria', 'A fracture', 'Deafness'], correct: 0, exp: 'Vitamin C deficiency causes scurvy.' },
      { q: 'Kwashiorkor is caused by a deficiency of:', opts: ['Water', 'Protein', 'Fat', 'Fibre'], correct: 1, exp: 'Kwashiorkor results from severe protein deficiency.' },
      { q: 'Food hygiene helps to prevent:', opts: ['Good health', 'Food-borne illness', 'Digestion', 'Growth'], correct: 1, exp: 'Clean food handling prevents food-borne disease.' }
    ],
    disease: [
      { q: 'A communicable disease is one that:', opts: ['Cannot spread', 'Spreads from person to person', 'Only affects animals', 'Is inherited only'], correct: 1, exp: 'Communicable diseases are transmissible.' },
      { q: 'Malaria is transmitted by the:', opts: ['Housefly', 'Female Anopheles mosquito', 'Cockroach', 'Rat'], correct: 1, exp: 'The female Anopheles mosquito transmits malaria.' },
      { q: 'An example of a non-communicable disease is:', opts: ['Cholera', 'Diabetes', 'Tuberculosis', 'Measles'], correct: 1, exp: 'Diabetes is non-communicable.' },
      { q: 'Immunization protects the body by:', opts: ['Causing disease', 'Stimulating immunity against a disease', 'Weakening the body', 'Doing nothing'], correct: 1, exp: 'Vaccines build active immunity.' },
      { q: 'A key way to prevent malaria is to:', opts: ['Leave stagnant water', 'Use insecticide-treated nets and clear stagnant water', 'Avoid treatment', 'Ignore mosquitoes'], correct: 1, exp: 'Nets and vector control prevent malaria.' },
      { q: 'HIV is spread mainly through:', opts: ['Casual handshakes', 'Unprotected sex, infected blood and mother-to-child', 'Sharing food', 'Mosquito bites'], correct: 1, exp: 'HIV spreads via body fluids, not casual contact.' }
    ],
    environmental: [
      { q: 'Good environmental sanitation helps to:', opts: ['Spread disease', 'Prevent disease', 'Pollute water', 'Increase waste'], correct: 1, exp: 'Sanitation prevents the spread of disease.' },
      { q: 'A way to make water safe for drinking is to:', opts: ['Add refuse', 'Boil, filter or treat it', 'Leave it open', 'Add oil'], correct: 1, exp: 'Boiling/treating water kills pathogens.' },
      { q: 'Proper waste management includes:', opts: ['Dumping anywhere', 'Reduce, reuse, recycle and safe disposal', 'Burning indoors', 'Ignoring waste'], correct: 1, exp: 'The 3 Rs and safe disposal protect health.' },
      { q: 'Community health services include:', opts: ['Only hospitals abroad', 'Clinics, immunisation and health education', 'Markets', 'Banks'], correct: 1, exp: 'They bring basic health care to communities.' },
      { q: 'Health education aims to:', opts: ['Confuse people', 'Help people protect and improve their health', 'Sell drugs', 'Spread disease'], correct: 1, exp: 'It empowers people to make healthy choices.' },
      { q: 'A common water-borne disease is:', opts: ['Cholera', 'A fracture', 'Colour blindness', 'Short-sightedness'], correct: 0, exp: 'Cholera spreads through contaminated water.' }
    ],
    firstaid: [
      { q: 'The main aims of first aid are to preserve life, prevent worsening and:', opts: ['Cause harm', 'Promote recovery', 'Delay help', 'Charge money'], correct: 1, exp: 'First aid preserves life, prevents worsening and promotes recovery.' },
      { q: 'To control severe bleeding you should:', opts: ['Ignore it', 'Apply firm direct pressure to the wound', 'Rub the wound', 'Give food'], correct: 1, exp: 'Direct pressure helps stop bleeding.' },
      { q: 'For a minor burn you should:', opts: ['Apply oil', 'Cool it with clean running water', 'Burst blisters', 'Ignore it'], correct: 1, exp: 'Cool burns with clean running water; do not apply oil.' },
      { q: 'CPR is used when a person is:', opts: ['Sleeping normally', 'Not breathing / has no pulse', 'Eating', 'Walking'], correct: 1, exp: 'CPR is for cardiac/respiratory arrest — then get professional help.' },
      { q: 'After giving first aid for a serious injury you should always:', opts: ['Do nothing else', 'Seek professional medical help', 'Send the person home alone', 'Keep it secret'], correct: 1, exp: 'First aid is initial help; get professional care.' },
      { q: 'When helping a casualty you should FIRST:', opts: ['Rush in', 'Check the scene is safe', 'Move them immediately', 'Give water'], correct: 1, exp: 'Ensure the scene is safe before helping.' }
    ],
    family: [
      { q: 'Antenatal care refers to health care during:', opts: ['Childhood', 'Pregnancy (before birth)', 'Old age', 'Infancy only'], correct: 1, exp: 'Antenatal care is care during pregnancy.' },
      { q: 'Family planning helps couples to:', opts: ['Avoid all children', 'Decide the number and spacing of children', 'Ignore health', 'Increase disease'], correct: 1, exp: 'Family planning supports healthy child spacing.' },
      { q: 'Immunisation of children protects them against:', opts: ['Nothing', 'Preventable diseases (e.g. measles, polio)', 'Fractures', 'Poor eyesight'], correct: 1, exp: 'Childhood vaccines prevent serious diseases.' },
      { q: 'Adolescence is the stage of:', opts: ['Old age', 'Transition from childhood to adulthood (puberty)', 'Infancy', 'Birth'], correct: 1, exp: 'Adolescence includes puberty and rapid change.' },
      { q: 'Maternal health focuses on the health of:', opts: ['Only babies', 'Women during pregnancy, childbirth and after', 'Only men', 'The elderly only'], correct: 1, exp: 'Maternal health covers pregnancy, delivery and postnatal care.' },
      { q: 'Responsible parenthood involves:', opts: ['Neglect', 'Caring for and providing for children’s needs', 'Ignoring health', 'Avoiding education'], correct: 1, exp: 'It means meeting children’s physical, emotional and educational needs.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Labelled diagrams in health science answers:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are decoration'], correct: 1, exp: 'Clear labelled diagrams gain marks.' },
      { q: 'Using relevant examples in an essay:', opts: ['Wastes time', 'Strengthens your answer and earns marks', 'Is banned', 'Is decoration'], correct: 1, exp: 'Concrete examples strengthen your points.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', anatomy: 'anatomy', personal: 'personal', nutrition: 'nutrition', disease: 'disease', environmental: 'environmental', firstaid: 'firstaid', family: 'family', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.anatomy, BANK.personal, BANK.nutrition, BANK.disease, BANK.environmental, BANK.firstaid, BANK.family, BANK.examstrat);
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
        var qid = 'whs-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Health Science Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Health Science Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the case studies and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'whs-m' + num + '-a' + flat;
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
      var pqid = 'whs-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Health Science: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Health Science preparation course aligned to the WAEC syllabus: human anatomy & physiology, personal health & hygiene, nutrition, diseases & prevention, environmental & community health, first aid, family life & reproductive health, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '⚕️',
    gradient: 'linear-gradient(135deg,#0B9488,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Health Science examination with clear anatomy diagrams, health guides, case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-HSCI',
    learn: [
      'Understand the WAEC Health Science exam structure and marking scheme',
      'Explain human anatomy and the major body systems',
      'Apply personal hygiene, nutrition and healthy-lifestyle principles',
      'Understand communicable and non-communicable diseases and their prevention',
      'Explain environmental/community health and basic first-aid principles',
      'Understand family life, reproductive and maternal/child health'
    ],
    requirements: ['A phone or computer with internet', 'A health science notebook for diagrams and notes', 'Awareness of community health issues', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Health Science preparation course, organised into ten modules aligned to the WAEC Health Science syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with anatomy charts, nutrition tables and first-aid guides; downloadable resources support revision. The course ends with a full mock examination and a Certificate of Completion.',
      'This course is for exam preparation and health education only. It is NOT medical advice and NOT a substitute for professional medical care or a certified first-aid course. Use it together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-health-science',
    _wassceHSciFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-HEALTHSCI] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
