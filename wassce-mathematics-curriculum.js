/* TIH Complete WASSCE Mathematics Preparation Course.
   Builds COURSES_DB['wassce-mathematics'] directly with the full 10-module WAEC
   Mathematics structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC
   Mathematics syllabus. Modelled on wassce-english-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-mathematics';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceMathFull) return;

  // Vetted WASSCE Mathematics videos (reused from the WASSCE Mathematics subject).
  var VIDEOS = {
    intro: ['UcvYa3AXb1w'],
    numeration: ['4githHo8dwg'],
    algebra: ['JucSVDuV0mg'],
    geometry: ['TLjR6uir-5A'],
    trig: ['PUB0TaZ7bhA'],
    stats: ['sQqniayndb4'],
    finance: ['U3vM5_NdfmA'],
    exampractice: ['UcvYa3AXb1w'],
    revision: ['UcvYa3AXb1w'],
    final: ['UcvYa3AXb1w']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Mathematics', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Mathematics Exam', 'Exam Structure & Marking Scheme', 'Study Techniques', 'Calculator Usage', 'Goal Setting']],
    [2, 'Number & Numeration', '🔢', 'numeration', 'content', ['Number Bases', 'Fractions & Decimals', 'Percentages', 'Ratios & Proportion', 'Approximation & Significant Figures', 'Indices', 'Logarithms', 'Surds', 'Standard Form', 'Number Practice']],
    [3, 'Algebra', '➗', 'algebra', 'content', ['Algebraic Expressions', 'Factorization', 'Linear Equations', 'Simultaneous Equations', 'Quadratic Equations', 'Inequalities', 'Variation', 'Functions', 'Graphs', 'Algebra Practice']],
    [4, 'Geometry & Mensuration', '📐', 'geometry', 'content', ['Lines & Angles', 'Triangles', 'Polygons', 'Circles', 'Coordinate Geometry', 'Perimeter', 'Area', 'Surface Area', 'Volume', 'Geometry Practice']],
    [5, 'Trigonometry & Vectors', '📏', 'trig', 'content', ['Trigonometric Ratios', 'Angles of Elevation & Depression', 'Bearings', 'Sine Rule', 'Cosine Rule', 'Vectors', 'Transformations', 'Practical Applications']],
    [6, 'Statistics & Probability', '📊', 'stats', 'content', ['Data Collection', 'Frequency Tables', 'Mean', 'Median', 'Mode', 'Range', 'Probability', 'Statistical Graphs']],
    [7, 'Financial Mathematics', '💰', 'finance', 'content', ['Simple Interest', 'Compound Interest', 'Profit & Loss', 'Discount', 'Hire Purchase', 'Business Mathematics']],
    [8, 'Examination Practice', '🧪', 'exampractice', 'content', ['Solving Past WAEC Questions', 'Objective Test Practice', 'Essay Question Practice', 'Speed & Accuracy', 'Mock Examinations', 'Error Analysis']],
    [9, 'Revision & Exam Strategies', '🎯', 'revision', 'content', ['Topic-by-Topic Revision', 'Formula Review', 'Time Management', 'Common Mistakes', 'Exam Techniques', 'Confidence Building']],
    [10, 'Final Assessment & Graduation', '🏆', 'final', 'content', ['Full Mock Examination', 'Performance Review', 'Personalized Improvement Plan', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Tests?|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Mathematics exam', numeration: 'number & numeration', algebra: 'algebra', geometry: 'geometry & mensuration', trig: 'trigonometry & vectors', stats: 'statistics & probability', finance: 'financial mathematics', exampractice: 'examination practice', revision: 'revision & exam strategy', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    numeration: '<h4>📥 Formula Sheet: Number & Numeration</h4><ul><li><strong>Indices:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.</li><li><strong>Logarithms:</strong> log(xy) = log x + log y; log(x/y) = log x − log y; log(xⁿ) = n log x.</li><li><strong>Standard form:</strong> A × 10ⁿ where 1 ≤ A < 10.</li><li><strong>Percentage:</strong> % = (part ÷ whole) × 100.</li><li><strong>Surds:</strong> √a × √b = √(ab); rationalise by multiplying by the conjugate.</li></ul>',
    algebra: '<h4>📥 Formula Sheet: Algebra</h4><ul><li><strong>Quadratic formula:</strong> x = [−b ± √(b² − 4ac)] ÷ 2a.</li><li><strong>Difference of two squares:</strong> a² − b² = (a − b)(a + b).</li><li><strong>Simultaneous equations:</strong> solve by substitution or elimination.</li><li><strong>Direct variation:</strong> y = kx; <strong>inverse:</strong> y = k/x.</li><li>Change the inequality sign when multiplying/dividing by a negative number.</li></ul>',
    geometry: '<h4>📥 Formula Sheet: Geometry & Mensuration</h4><ul><li><strong>Area:</strong> triangle = ½bh; circle = πr²; trapezium = ½(a+b)h.</li><li><strong>Circumference:</strong> C = 2πr; <strong>arc length</strong> = (θ/360) × 2πr.</li><li><strong>Volume:</strong> cuboid = l×b×h; cylinder = πr²h; cone = ⅓πr²h; sphere = 4/3πr³.</li><li><strong>Surface area (cylinder):</strong> 2πr(r + h).</li><li><strong>Angles:</strong> in a triangle = 180°; on a straight line = 180°; at a point = 360°.</li></ul>',
    trig: '<h4>📥 Formula Sheet: Trigonometry & Vectors</h4><ul><li><strong>SOH-CAH-TOA:</strong> sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</li><li><strong>Sine rule:</strong> a/sin A = b/sin B = c/sin C.</li><li><strong>Cosine rule:</strong> a² = b² + c² − 2bc·cos A.</li><li><strong>Bearings:</strong> measured clockwise from North (000°–360°).</li><li><strong>Vector magnitude:</strong> |(x, y)| = √(x² + y²).</li></ul>',
    stats: '<h4>📥 Formula Sheet: Statistics & Probability</h4><ul><li><strong>Mean:</strong> Σx ÷ n (or Σfx ÷ Σf for grouped data).</li><li><strong>Median:</strong> the middle value when ordered; <strong>Mode:</strong> most frequent.</li><li><strong>Range:</strong> highest − lowest.</li><li><strong>Probability:</strong> P(event) = favourable outcomes ÷ total outcomes (0 ≤ P ≤ 1).</li><li><strong>Pie chart angle:</strong> (frequency ÷ total) × 360°.</li></ul>',
    finance: '<h4>📥 Formula Sheet: Financial Mathematics</h4><ul><li><strong>Simple interest:</strong> I = (P × R × T) ÷ 100.</li><li><strong>Compound amount:</strong> A = P(1 + R/100)ᵀ.</li><li><strong>Profit %:</strong> (profit ÷ cost price) × 100; <strong>Loss %</strong> similar.</li><li><strong>Discount:</strong> reduction on the marked price.</li><li><strong>Hire purchase:</strong> deposit + (instalment × number of instalments).</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'numeration' || /Indices|Logarithms|Surds|Standard Form|Percentages/i.test(name)) return TEMPLATES.numeration;
    if (skill === 'algebra' || /Quadratic|Factorization|Simultaneous|Variation/i.test(name)) return TEMPLATES.algebra;
    if (skill === 'geometry' || /Area|Volume|Surface Area|Circles|Perimeter/i.test(name)) return TEMPLATES.geometry;
    if (skill === 'trig' || /Sine Rule|Cosine Rule|Bearings|Trigonometric|Vectors/i.test(name)) return TEMPLATES.trig;
    if (skill === 'stats' || /Mean|Median|Mode|Probability|Frequency/i.test(name)) return TEMPLATES.stats;
    if (skill === 'finance' || /Interest|Profit|Discount|Hire Purchase/i.test(name)) return TEMPLATES.finance;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Mathematics skills';
    var focus = position % 2 ? 'clear methods, worked examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Mathematics · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the worked examples, then complete the two problem-solving exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Learn the method for <em>' + esc(name) + '</em> and how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study a worked example step by step and note the marks awarded for method vs answer.</li>' +
      '<li>Practise with past-question-style items under timed conditions, using your scientific calculator correctly.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this formula sheet in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Solve one WAEC past question on <em>' + esc(name) + '</em> and check every step against a worked solution.</div>') +
      '<h4>Problem-solving exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Work one WAEC-style problem on <em>' + esc(name) + '</em>, showing all steps.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing, then add the key result to your formula notebook.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Mathematics preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical problem-solving task under exam conditions and review every step against a worked solution and the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your working.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Mathematics exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Mathematics is usually made up of:', opts: ['Only an oral test', 'Paper 1 (objective) and Paper 2 (essay/theory)', 'One essay only', 'Practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is theory/essay.' },
      { q: 'In the essay paper you earn marks mainly for:', opts: ['The final answer only', 'Showing correct method and working', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Method marks are awarded for correct working, not just the answer.' },
      { q: 'A permitted tool in WASSCE Mathematics is a:', opts: ['Programmable computer', 'Non-programmable scientific calculator', 'Phone', 'Graphing app'], correct: 1, exp: 'A non-programmable scientific calculator is allowed.' },
      { q: 'A good exam strategy is to:', opts: ['Answer without reading', 'Read each question and manage your time across all parts', 'Ignore the marking scheme', 'Leave questions blank'], correct: 1, exp: 'Read carefully and pace yourself across the paper.' },
      { q: 'Setting a target grade helps you:', opts: ['Nothing', 'Focus your revision and measure progress', 'Avoid studying', 'Skip topics'], correct: 1, exp: 'Clear goals guide focused revision.' }
    ],
    numeration: [
      { q: 'Convert 1101 (base 2) to base 10:', opts: ['11', '13', '15', '9'], correct: 1, exp: '1×8 + 1×4 + 0×2 + 1×1 = 13.' },
      { q: 'Simplify 2³ × 2⁴:', opts: ['2⁷', '2¹²', '4⁷', '2⁻¹'], correct: 0, exp: 'Add indices with the same base: 3 + 4 = 7, so 2⁷.' },
      { q: '25% as a fraction is:', opts: ['1/2', '1/4', '2/5', '1/5'], correct: 1, exp: '25/100 = 1/4.' },
      { q: 'Express 0.00045 in standard form:', opts: ['4.5 × 10⁻⁴', '4.5 × 10⁴', '45 × 10⁻³', '0.45 × 10⁻³'], correct: 0, exp: 'Move the point 4 places: 4.5 × 10⁻⁴.' },
      { q: 'log 1000 (base 10) equals:', opts: ['2', '3', '10', '1'], correct: 1, exp: '10³ = 1000, so log₁₀1000 = 3.' },
      { q: '√12 simplified is:', opts: ['2√3', '3√2', '4√3', '6'], correct: 0, exp: '√12 = √(4×3) = 2√3.' }
    ],
    algebra: [
      { q: 'Factorize x² − 9:', opts: ['(x − 3)(x + 3)', '(x − 9)(x + 1)', '(x − 3)²', 'x(x − 9)'], correct: 0, exp: 'Difference of two squares: (x−3)(x+3).' },
      { q: 'Solve 2x + 5 = 15:', opts: ['x = 5', 'x = 10', 'x = 7.5', 'x = 20'], correct: 0, exp: '2x = 10, so x = 5.' },
      { q: 'The roots of x² − 5x + 6 = 0 are:', opts: ['2 and 3', '1 and 6', '−2 and −3', '5 and 6'], correct: 0, exp: '(x−2)(x−3)=0 → x = 2 or 3.' },
      { q: 'If y varies directly as x and y = 12 when x = 4, then k =', opts: ['3', '48', '8', '16'], correct: 0, exp: 'y = kx → 12 = 4k → k = 3.' },
      { q: 'When solving inequalities, multiplying by a negative number:', opts: ['Keeps the sign', 'Reverses the inequality sign', 'Removes x', 'Adds 1'], correct: 1, exp: 'Reverse the inequality sign when multiplying/dividing by a negative.' },
      { q: 'The quadratic formula is:', opts: ['x = −b ÷ 2a', 'x = [−b ± √(b² − 4ac)] ÷ 2a', 'x = b² − 4ac', 'x = a + b + c'], correct: 1, exp: 'Standard quadratic formula for ax² + bx + c = 0.' }
    ],
    geometry: [
      { q: 'The sum of angles in a triangle is:', opts: ['90°', '180°', '270°', '360°'], correct: 1, exp: 'Angles in a triangle add up to 180°.' },
      { q: 'Area of a circle of radius r is:', opts: ['2πr', 'πr²', 'πd', '½πr²'], correct: 1, exp: 'Area = πr².' },
      { q: 'The volume of a cylinder is:', opts: ['πr²h', '2πrh', '⅓πr²h', '4/3πr³'], correct: 0, exp: 'Volume of a cylinder = πr²h.' },
      { q: 'Angles on a straight line add up to:', opts: ['90°', '180°', '360°', '45°'], correct: 1, exp: 'They form a straight angle = 180°.' },
      { q: 'The circumference of a circle is:', opts: ['πr²', '2πr', 'πr', 'r²'], correct: 1, exp: 'Circumference = 2πr (or πd).' },
      { q: 'A polygon with 5 sides is a:', opts: ['Hexagon', 'Pentagon', 'Quadrilateral', 'Octagon'], correct: 1, exp: 'Five sides = pentagon.' }
    ],
    trig: [
      { q: 'In SOH-CAH-TOA, tan θ equals:', opts: ['opp/hyp', 'adj/hyp', 'opp/adj', 'hyp/opp'], correct: 2, exp: 'tan = opposite ÷ adjacent.' },
      { q: 'The sine rule states:', opts: ['a² = b² + c² − 2bc cos A', 'a/sin A = b/sin B = c/sin C', 'a + b = c', 'sin A = cos A'], correct: 1, exp: 'a/sin A = b/sin B = c/sin C.' },
      { q: 'Bearings are measured:', opts: ['Anticlockwise from South', 'Clockwise from North', 'From East', 'Randomly'], correct: 1, exp: 'Bearings are measured clockwise from North, as 3 digits.' },
      { q: 'The cosine rule is used when you know:', opts: ['Three angles', 'Two sides and the included angle (or three sides)', 'Nothing', 'Only one side'], correct: 1, exp: 'Cosine rule fits SAS and SSS cases.' },
      { q: 'sin 30° equals:', opts: ['0.5', '1', '0.866', '0'], correct: 0, exp: 'sin 30° = 0.5.' },
      { q: 'The magnitude of vector (3, 4) is:', opts: ['5', '7', '12', '1'], correct: 0, exp: '√(3² + 4²) = √25 = 5.' }
    ],
    stats: [
      { q: 'The mean of 4, 6, 8, 10 is:', opts: ['6', '7', '8', '9'], correct: 1, exp: '(4+6+8+10)/4 = 28/4 = 7.' },
      { q: 'The mode of 2, 3, 3, 5, 7 is:', opts: ['2', '3', '5', '7'], correct: 1, exp: 'The mode is the most frequent value: 3.' },
      { q: 'The median of 5, 2, 9, 4, 7 (ordered) is:', opts: ['4', '5', '7', '9'], correct: 1, exp: 'Ordered: 2,4,5,7,9 → middle is 5.' },
      { q: 'Probability values always lie between:', opts: ['0 and 1', '1 and 10', '−1 and 1', '0 and 100'], correct: 0, exp: '0 ≤ P(event) ≤ 1.' },
      { q: 'The range of 3, 8, 5, 12, 4 is:', opts: ['9', '12', '8', '4'], correct: 0, exp: 'Range = highest − lowest = 12 − 3 = 9.' },
      { q: 'The angle for a sector in a pie chart is:', opts: ['(frequency ÷ total) × 360°', 'frequency × 100', 'total ÷ 360', 'frequency + total'], correct: 0, exp: 'Sector angle = (frequency ÷ total) × 360°.' }
    ],
    finance: [
      { q: 'Simple interest is calculated as:', opts: ['P × R × T', '(P × R × T) ÷ 100', 'P + R + T', 'P ÷ R'], correct: 1, exp: 'I = (P × R × T) ÷ 100.' },
      { q: 'The compound amount formula is:', opts: ['A = P(1 + R/100)ᵀ', 'A = PRT', 'A = P + R', 'A = P/RT'], correct: 0, exp: 'A = P(1 + R/100)ᵀ.' },
      { q: 'If cost price is $200 and selling price is $250, the profit % is:', opts: ['20%', '25%', '50%', '10%'], correct: 1, exp: 'Profit = 50; % = 50/200 × 100 = 25%.' },
      { q: 'A discount is a reduction on the:', opts: ['Cost only', 'Marked (listed) price', 'Interest', 'Tax'], correct: 1, exp: 'Discount reduces the marked/listed price.' },
      { q: 'In hire purchase the total paid is:', opts: ['Only the deposit', 'Deposit + all instalments', 'Only instalments', 'Less than cash price'], correct: 1, exp: 'Total = deposit plus the sum of instalments.' },
      { q: 'Simple interest of $500 at 10% for 2 years is:', opts: ['$50', '$100', '$150', '$1000'], correct: 1, exp: '(500 × 10 × 2) ÷ 100 = $100.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice — there is no negative marking.' },
      { q: 'In the essay paper you should always:', opts: ['Write the answer only', 'Show all steps of your working', 'Skip the method', 'Use no units'], correct: 1, exp: 'Method marks reward clear, correct working.' },
      { q: 'Error analysis after a mock helps you:', opts: ['Waste time', 'Identify and fix your weak topics', 'Ignore mistakes', 'Guess more'], correct: 1, exp: 'Reviewing errors targets your revision where it is needed.' },
      { q: 'Speed and accuracy in mathematics come from:', opts: ['Luck', 'Regular timed practice of past questions', 'Reading only', 'Cramming'], correct: 1, exp: 'Timed practice builds both speed and accuracy.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', numeration: 'numeration', algebra: 'algebra', geometry: 'geometry', trig: 'trig', stats: 'stats', finance: 'finance', exampractice: 'examstrat', revision: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.numeration, BANK.algebra, BANK.geometry, BANK.trig, BANK.stats, BANK.finance, BANK.examstrat);
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
        var qid = 'wm-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Mathematics Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Mathematics Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the examination practice and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wm-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, showing your working, then review every answer explanation.</p></div>';
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
      var pqid = 'wm-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two problem-solving exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Mathematics: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Mathematics preparation course aligned to the WAEC syllabus: number & numeration, algebra, geometry & mensuration, trigonometry & vectors, statistics & probability, financial mathematics, examination practice, revision strategies, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧮',
    gradient: 'linear-gradient(135deg,#0B1F3A,#e31e24)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Mathematics examination with concise lessons, worked examples and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-MATH',
    learn: [
      'Understand the WAEC Mathematics exam structure and marking scheme',
      'Master number bases, indices, logarithms, surds and standard form',
      'Solve algebra: equations, inequalities, variation, functions and graphs',
      'Work geometry, mensuration, trigonometry, bearings and vectors',
      'Handle statistics, probability and financial mathematics',
      'Apply exam techniques with timed past-question and mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A non-programmable scientific calculator', 'A notebook and a personal formula sheet', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Mathematics preparation course, organised into ten modules aligned to the WAEC Mathematics syllabus and examination structure (Paper 1 objective and Paper 2 theory/essay).',
      'Every content lesson has a video and printable notes with worked examples; downloadable resources include formula sheets for every topic area. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-mathematics',
    _wassceMathFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-MATH] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
