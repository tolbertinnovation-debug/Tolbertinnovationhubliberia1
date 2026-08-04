/* TIH Complete SAT (Digital SAT) Preparation Course curriculum.
   Rebuilds COURSES_DB.sat into the full 14-module programme: Reading & Writing,
   Math (Algebra, Advanced Math, Problem Solving & Data, Geometry & Trig),
   Digital SAT strategies, a practice & assessments module with full mock exams,
   and a bonus-resources module (planner, formula sheet, cheat sheets, vocab
   list, worksheets). Every content lesson has a video + printable study notes
   with practice questions and a short quiz; the Final Assessment gates the
   Certificate of Completion. Modelled on toefl-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.sat || COURSES_DB.sat._satFullBuilt) return;

  // Vetted SAT videos reused from the core course, grouped by skill area.
  var VIDEOS = {
    orientation: ['2aiVO9FoGg4', 'HXP17Be8TRY', 'MUcULumd2hM'],
    rw: ['Pw5uTD3_FKw', 'POcYofMngBw', '4jgnbFnXiYs', 'lo7LFbac_9o'],
    grammar: ['vrPbC9fao6Y', 'zvczFfWx40k', 'lo7LFbac_9o'],
    math: ['i0bBokmVtWw', 'gMGQHSUFRCU', 'XKu4sgpHWN8', 'yqcyspQ6HSg'],
    adv_math: ['XKu4sgpHWN8', 'yqcyspQ6HSg', 'i0bBokmVtWw'],
    data: ['gMGQHSUFRCU', 'i0bBokmVtWw', 'yqcyspQ6HSg'],
    geometry: ['IhWiMWq3VhE', 'bUVI0iK740o', 'gMGQHSUFRCU'],
    strategy: ['2aiVO9FoGg4', 'MUcULumd2hM', 'HXP17Be8TRY']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]
  // type: 'content' (video lessons) or 'resource' (reading-only bonus material)
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is the SAT?', 'SAT Test Format', 'SAT Scoring System (400–1600)', 'Digital SAT Overview', 'Study Plan', 'Registration Process', 'Test-Day Rules', 'Using the Bluebook Testing App']],
    [2, 'Reading & Writing Foundations', '📖', 'rw', 'content', ['Academic Vocabulary', 'Grammar Basics', 'Sentence Structure', 'Parts of Speech', 'Punctuation Rules', 'Transition Words', 'Context Clues', 'Reading Strategies', 'Critical Thinking Skills', 'Practice Quiz']],
    [3, 'Information and Ideas', '💡', 'rw', 'content', ['Finding Main Ideas', 'Supporting Details', 'Making Inferences', 'Interpreting Data and Graphs', 'Evidence-Based Questions', 'Text Analysis', 'Practice Exercises', 'Timed Practice Test']],
    [4, 'Craft and Structure', '🏗️', 'rw', 'content', ['Vocabulary in Context', "Author's Purpose", 'Tone and Style', 'Comparing Passages', 'Text Structure', 'Analyzing Arguments', 'Practice Exercises', 'Mock Test']],
    [5, 'Expression of Ideas', '✍️', 'grammar', 'content', ['Improving Sentences', 'Organization of Paragraphs', 'Logical Flow', 'Combining Sentences', 'Revising Text', 'Practice Questions', 'Timed Quiz']],
    [6, 'Standard English Conventions', '📐', 'grammar', 'content', ['Subject-Verb Agreement', 'Verb Tenses', 'Pronouns', 'Modifiers', 'Parallel Structure', 'Punctuation', 'Capitalization', 'Word Choice', 'Common Grammar Errors', 'Grammar Practice Test']],
    [7, 'Math Foundations', '🔢', 'math', 'content', ['Numbers and Operations', 'Fractions and Decimals', 'Percentages', 'Ratios', 'Exponents', 'Radicals', 'Scientific Notation', 'Calculator Skills', 'Formula Review', 'Math Practice Quiz']],
    [8, 'Algebra', '📈', 'math', 'content', ['Linear Equations', 'Linear Inequalities', 'Systems of Equations', 'Functions', 'Graphs', 'Quadratic Equations', 'Polynomial Expressions', 'Word Problems', 'Algebra Practice Test']],
    [9, 'Advanced Math', '🧮', 'adv_math', 'content', ['Quadratic Functions', 'Exponential Functions', 'Nonlinear Equations', 'Rational Expressions', 'Radicals', 'Factoring', 'Advanced Word Problems', 'Practice Test']],
    [10, 'Problem Solving & Data Analysis', '📊', 'data', 'content', ['Ratios', 'Proportions', 'Percent Problems', 'Statistics', 'Probability', 'Data Interpretation', 'Tables and Charts', 'Scatterplots', 'Real-Life Applications', 'Practice Test']],
    [11, 'Geometry & Trigonometry', '📏', 'geometry', 'content', ['Lines and Angles', 'Triangles', 'Circles', 'Polygons', 'Coordinate Geometry', 'Area and Volume', 'Right Triangle Trigonometry', 'Geometry Practice Test']],
    [12, 'Digital SAT Strategies', '🎯', 'strategy', 'content', ['Time Management', 'Adaptive Testing Strategy', 'Guessing Techniques', 'Eliminating Wrong Answers', 'Common Mistakes', 'Stress Management', 'Test-Day Checklist']],
    [13, 'Practice & Assessments', '🏆', 'strategy', 'content', ['Reading & Writing Quiz 1', 'Reading & Writing Quiz 2', 'Math Quiz 1', 'Math Quiz 2', 'Midterm Examination', 'Full SAT Mock Test 1', 'Full SAT Mock Test 2', 'Full SAT Mock Test 3', 'Full SAT Mock Test 4', 'Final Assessment']],
    [14, 'Bonus Resources', '🎁', 'resource', 'resource', ['SAT Study Planner', 'Formula Sheet', 'Grammar Cheat Sheet', 'Vocabulary List (1,000+ Words)', 'Practice Worksheets', 'Score Improvement Guide', 'College Admission Tips', 'Certificate Requirements']]
  ];

  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  // A lesson is an assessment when its name ends in Test / Quiz / Exam(ination)
  // / Assessment (optionally followed by a number, e.g. "Mock Test 1").
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)(?:\s+\d+)?$/.test(name.trim()); }
  function isMock(name) { return /Mock Test|Midterm|Timed Practice Test/i.test(name); }
  function isFinalName(name) { return /Final Assessment/i.test(name); }

  var skillLabel = { orientation: 'SAT orientation', rw: 'the Reading & Writing section', grammar: 'Standard English conventions', math: 'SAT Math', adv_math: 'Advanced Math', data: 'Problem Solving & Data Analysis', geometry: 'Geometry & Trigonometry', strategy: 'Digital SAT strategy' };

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'SAT skills';
    var focus = position % 2 ? 'clear method, accuracy and confident timing on the Digital SAT' : 'understanding the question type, working the steps and reviewing your mistakes';
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Digital SAT · ' + escapeHtml(moduleTitle) + '</strong><span>Target 1400+ / 1600</span></div>' +
      '<h3>' + escapeHtml(name) + '</h3>' +
      '<p>This lesson strengthens <strong>' + escapeHtml(label) + '</strong> and builds ' + focus + '. Watch the video, study the notes below, then complete the two practice questions before the short quiz.</p>' +
      '<h4>Key points</h4>' +
      '<ul>' +
      '<li>Learn the exact skill and question pattern taught in <em>' + escapeHtml(name) + '</em>.</li>' +
      '<li>Note the SAT-specific wording, traps and shortcuts used here.</li>' +
      '<li>Time yourself on one item, then review every error and record one fix.</li>' +
      '</ul>' +
      '<h4>Practice questions</h4>' +
      '<ol>' +
      '<li><strong>Question 1:</strong> Work one untimed example of <em>' + escapeHtml(name) + '</em> and check it against the model answer.</li>' +
      '<li><strong>Question 2:</strong> Repeat under real Digital SAT timing, then write one sentence on what to improve next time.</li>' +
      '</ol>' +
      '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + escapeHtml(name) + '</em> to a fresh Bluebook practice item and explain each step in your own words.</div>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF on this page to keep an offline copy of these notes for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + escapeHtml(moduleTitle) + '</em>. A high SAT score comes from combining Reading &amp; Writing with Math through steady, reviewed practice.</p>' +
      '</div>';
  }

  // Rich, printable reading content for the bonus-resource lessons (Module 14).
  var RESOURCES = {
    'SAT Study Planner': '<h4>8-week Digital SAT study planner</h4><ul><li><strong>Weeks 1–2:</strong> Orientation, Reading &amp; Writing foundations, grammar basics. One Bluebook section per week.</li><li><strong>Weeks 3–4:</strong> Information &amp; Ideas, Craft &amp; Structure, Expression of Ideas. Add timed Reading &amp; Writing modules.</li><li><strong>Weeks 5–6:</strong> Math Foundations, Algebra, Advanced Math. Daily 20-minute math sets.</li><li><strong>Week 7:</strong> Problem Solving &amp; Data, Geometry &amp; Trigonometry, full Mock Test 1–2.</li><li><strong>Week 8:</strong> Strategies, Mock Tests 3–4, error review, Final Assessment.</li></ul><p>Print this page and tick each week as you finish it.</p>',
    'Formula Sheet': '<h4>Essential Digital SAT Math formulas</h4><ul><li><strong>Slope:</strong> m = (y₂ − y₁) / (x₂ − x₁)</li><li><strong>Line:</strong> y = mx + b</li><li><strong>Quadratic formula:</strong> x = (−b ± √(b² − 4ac)) / 2a</li><li><strong>Distance:</strong> d = √((x₂ − x₁)² + (y₂ − y₁)²)</li><li><strong>Circle:</strong> Area = πr², Circumference = 2πr</li><li><strong>Triangle:</strong> Area = ½ · base · height</li><li><strong>Pythagoras:</strong> a² + b² = c²</li><li><strong>Percent change:</strong> (new − old) / old × 100</li><li><strong>Probability:</strong> favourable ÷ total outcomes</li></ul><p>Note: the Digital SAT provides a reference sheet, but memorising these saves time.</p>',
    'Grammar Cheat Sheet': '<h4>Standard English conventions quick reference</h4><ul><li><strong>Subject–verb agreement:</strong> singular subject → singular verb.</li><li><strong>Verb tense:</strong> keep tenses consistent within a passage.</li><li><strong>Pronouns:</strong> match number and have a clear antecedent.</li><li><strong>Modifiers:</strong> place next to the word they describe.</li><li><strong>Parallel structure:</strong> items in a list share the same form.</li><li><strong>Punctuation:</strong> use a comma + FANBOYS or a semicolon to join independent clauses.</li><li><strong>Apostrophes:</strong> possession vs contraction (its vs it’s).</li></ul>',
    'Vocabulary List (1,000+ Words)': '<h4>High-frequency SAT vocabulary (sample)</h4><p>The full list contains 1,000+ words. Start with these high-yield academic words and learn them in context:</p><ul><li><strong>Ambiguous</strong> – open to more than one meaning.</li><li><strong>Cogent</strong> – clear, logical and convincing.</li><li><strong>Nuance</strong> – a subtle difference in meaning.</li><li><strong>Undermine</strong> – to weaken.</li><li><strong>Advocate</strong> – to support publicly.</li><li><strong>Empirical</strong> – based on observation or evidence.</li><li><strong>Paradox</strong> – a seemingly contradictory statement.</li><li><strong>Substantiate</strong> – to support with evidence.</li></ul><p>Print and add 10 new words each day, always with an example sentence.</p>',
    'Practice Worksheets': '<h4>Downloadable practice worksheets</h4><p>Use these worksheet routines and Print → Save as PDF for offline practice:</p><ol><li><strong>Reading &amp; Writing set:</strong> 10 mixed questions (main idea, inference, grammar) in 15 minutes.</li><li><strong>Algebra set:</strong> 10 linear/quadratic problems in 15 minutes.</li><li><strong>Data set:</strong> 8 graph, table and statistics questions in 12 minutes.</li><li><strong>Geometry set:</strong> 8 angle, triangle and circle problems in 12 minutes.</li></ol><p>Mark every set, log errors, and repeat your weakest set weekly.</p>',
    'Score Improvement Guide': '<h4>How to raise your SAT score</h4><ul><li>Take a full Bluebook mock, then build an error log by question type.</li><li>Spend 70% of study time on your two weakest areas.</li><li>Re-do missed questions until you can explain why each answer is right.</li><li>Practise under real Digital SAT timing to build stamina.</li><li>Retest every two weeks and track the trend, not single scores.</li></ul>',
    'College Admission Tips': '<h4>Using your SAT score for admission</h4><ul><li>Check each university’s required or recommended SAT range.</li><li>Many US universities superscore — they combine your best section scores.</li><li>Pair a strong SAT with essays, recommendations and activities.</li><li>For scholarships, aim above the median score of admitted students.</li><li>Ask the TIH team about study-abroad and scholarship pathways.</li></ul>',
    'Certificate Requirements': '<h4>Earning your TIH Certificate of Completion</h4><p>To receive your certificate you must:</p><ul><li>Complete all core lessons in Modules 1–12.</li><li>Attempt every module quiz and section mock test.</li><li>Complete the Midterm Examination and at least two Full SAT Mock Tests.</li><li>Pass the <strong>Final Assessment</strong> in Module 13.</li></ul><p>Once the Final Assessment is passed, your Certificate of Completion unlocks automatically in the course player.</p>'
  };

  // Skill-specific question banks used to build quizzes and mock tests.
  var BANK = {
    orientation: [
      { q: 'The Digital SAT is scored on a scale of:', opts: ['0–120', '400–1600', '200–800', '1–36'], correct: 1, exp: 'The SAT total ranges 400–1600 (two 200–800 sections).' },
      { q: 'The SAT has two main sections:', opts: ['Reading and Listening', 'Reading & Writing, and Math', 'Speaking and Writing', 'Essay and Science'], correct: 1, exp: 'Digital SAT = Reading & Writing + Math.' },
      { q: 'The Digital SAT is taken:', opts: ['On paper', 'On a computer using the Bluebook app', 'By phone', 'Orally'], correct: 1, exp: 'It is delivered digitally through the Bluebook testing app.' },
      { q: 'The Digital SAT is "adaptive", which means:', opts: ['It never changes', 'The second module’s difficulty depends on your first-module performance', 'It has no time limit', 'Only Math adapts'], correct: 1, exp: 'Each section has two stages; stage 2 adapts to stage 1.' },
      { q: 'A good SAT study plan should be:', opts: ['Random', 'Regular, with review of mistakes', 'Only the night before', 'Math only'], correct: 1, exp: 'Steady, reviewed practice beats last-minute cramming.' },
      { q: 'To take the SAT you must first:', opts: ['Just show up', 'Register with College Board and pick a date/centre', 'Email a university', 'Take a paper test'], correct: 1, exp: 'You register online and choose a test date and location.' }
    ],
    rw: [
      { q: 'The main idea of a passage is:', opts: ['A small detail', 'The central point the author makes', 'The first word', 'A quotation'], correct: 1, exp: 'The main idea is the overall point, not a single detail.' },
      { q: 'An inference is something that is:', opts: ['Stated directly', 'Strongly implied but not stated', 'In the title', 'A vocabulary word'], correct: 1, exp: 'Inferences are supported by the text but not written word-for-word.' },
      { q: 'A "vocabulary in context" question asks you to pick the word closest in:', opts: ['Spelling', 'Meaning as used in the sentence', 'Length', 'Sound'], correct: 1, exp: 'Choose the option nearest in meaning in that context.' },
      { q: 'Command-of-evidence questions ask you to:', opts: ['Ignore the text', 'Choose the detail that best supports an answer', 'Spell a word', 'Count paragraphs'], correct: 1, exp: 'You select the line or data that backs up a claim.' },
      { q: 'When interpreting a graph in Reading & Writing you should:', opts: ['Guess', 'Read the axes and match the data to the text', 'Skip it', 'Only read the title'], correct: 1, exp: 'Match what the graph shows to the passage’s claim.' },
      { q: 'A "transition" question tests the word that best shows the:', opts: ['Spelling', 'Logical relationship between ideas', 'Font', 'Length'], correct: 1, exp: 'Transitions like "however" and "therefore" signal logic.' }
    ],
    grammar: [
      { q: 'Choose the correct sentence:', opts: ['The data are clear and it support the claim.', 'The data are clear and they support the claim.', 'The data is clear and they supports it.', 'The data clear and support.'], correct: 1, exp: 'Plural subject "data" takes "are" and pronoun "they".' },
      { q: 'A comma splice is fixed by:', opts: ['Nothing', 'A semicolon or a comma + conjunction', 'More commas', 'A dash only'], correct: 1, exp: 'Join two independent clauses with a semicolon or comma + FANBOYS.' },
      { q: 'Parallel structure means list items share the:', opts: ['Same length', 'Same grammatical form', 'Same first letter', 'Same colour'], correct: 1, exp: 'e.g. "reading, writing and speaking" — all -ing forms.' },
      { q: 'A modifier should be placed:', opts: ['Anywhere', 'Next to the word it describes', 'At the end always', 'In brackets'], correct: 1, exp: 'Misplaced modifiers create confusion; keep them adjacent.' },
      { q: 'Its vs It’s: "It’s" means:', opts: ['Belonging to it', 'It is / it has', 'A plural', 'A place'], correct: 1, exp: '"It’s" is a contraction of "it is/has"; "its" shows possession.' },
      { q: 'To improve sentence flow you often:', opts: ['Add filler', 'Combine short choppy sentences logically', 'Repeat words', 'Remove all commas'], correct: 1, exp: 'Combining related sentences improves organisation and flow.' }
    ],
    math: [
      { q: 'Solve for x: 3x + 6 = 18.', opts: ['2', '3', '4', '6'], correct: 2, exp: '3x = 12, so x = 4.' },
      { q: 'What is 25% of 80?', opts: ['15', '20', '25', '40'], correct: 1, exp: '0.25 × 80 = 20.' },
      { q: 'Simplify: 2³ × 2².', opts: ['2⁵', '2⁶', '4⁵', '2¹'], correct: 0, exp: 'Add exponents: 2^(3+2) = 2⁵.' },
      { q: 'The ratio 8:12 simplifies to:', opts: ['4:6', '2:3', '3:2', '1:2'], correct: 1, exp: 'Divide both by 4 → 2:3.' },
      { q: '√144 =', opts: ['11', '12', '13', '14'], correct: 1, exp: '12 × 12 = 144.' },
      { q: 'Convert 0.75 to a fraction:', opts: ['1/2', '2/3', '3/4', '4/5'], correct: 2, exp: '0.75 = 75/100 = 3/4.' }
    ],
    adv_math: [
      { q: 'The solutions of x² − 5x + 6 = 0 are:', opts: ['1 and 6', '2 and 3', '−2 and −3', '5 and 6'], correct: 1, exp: 'Factor: (x−2)(x−3)=0, so x = 2 or 3.' },
      { q: 'An exponential function has the form:', opts: ['y = mx + b', 'y = a·bˣ', 'y = ax² + bx + c', 'y = x'], correct: 1, exp: 'Exponential growth/decay is y = a·bˣ.' },
      { q: 'Factor: x² − 9.', opts: ['(x−3)(x−3)', '(x−3)(x+3)', '(x+9)(x−1)', 'x(x−9)'], correct: 1, exp: 'Difference of squares: (x−3)(x+3).' },
      { q: 'The vertex form of a parabola is:', opts: ['y = a(x−h)² + k', 'y = mx + b', 'y = abˣ', 'y = √x'], correct: 0, exp: 'Vertex form is y = a(x−h)² + k with vertex (h,k).' },
      { q: 'A rational expression is undefined when the denominator equals:', opts: ['1', '0', 'x', 'the numerator'], correct: 1, exp: 'Division by zero is undefined.' },
      { q: 'If f(x)=2x+1, then f(3) =', opts: ['5', '6', '7', '9'], correct: 2, exp: '2·3 + 1 = 7.' }
    ],
    data: [
      { q: 'The mean of 4, 8, 10 is:', opts: ['6', '7.33', '8', '22'], correct: 1, exp: '(4+8+10)/3 = 22/3 ≈ 7.33.' },
      { q: 'The median of 3, 7, 9, 12, 20 is:', opts: ['7', '9', '12', '10.2'], correct: 1, exp: 'The middle value of the ordered list is 9.' },
      { q: 'Probability of rolling a 4 on a fair die is:', opts: ['1/2', '1/4', '1/6', '4/6'], correct: 2, exp: 'One favourable outcome of six equally likely ones.' },
      { q: 'A scatterplot is used to show:', opts: ['One value', 'The relationship between two variables', 'A single ratio', 'A word'], correct: 1, exp: 'Scatterplots reveal correlation between two variables.' },
      { q: 'If 3 pens cost $6, one pen costs:', opts: ['$1', '$2', '$3', '$6'], correct: 1, exp: 'Unit rate: 6 ÷ 3 = $2.' },
      { q: 'A "line of best fit" on a scatterplot models the:', opts: ['Exact points', 'Overall trend', 'Largest point', 'Title'], correct: 1, exp: 'It summarises the general trend of the data.' }
    ],
    geometry: [
      { q: 'Angles on a straight line add up to:', opts: ['90°', '180°', '270°', '360°'], correct: 1, exp: 'A straight angle is 180°.' },
      { q: 'The area of a circle is:', opts: ['2πr', 'πr²', 'πd', 'r²'], correct: 1, exp: 'Area = πr².' },
      { q: 'In a right triangle, a² + b² = ', opts: ['c', 'c²', '2c', 'ab'], correct: 1, exp: 'Pythagoras: a² + b² = c².' },
      { q: 'The sum of interior angles of a triangle is:', opts: ['90°', '180°', '360°', '270°'], correct: 1, exp: 'Triangle angles sum to 180°.' },
      { q: 'sin(θ) in a right triangle equals:', opts: ['adjacent/hypotenuse', 'opposite/hypotenuse', 'opposite/adjacent', 'hypotenuse/opposite'], correct: 1, exp: 'SOH: sin = opposite/hypotenuse.' },
      { q: 'The volume of a rectangular box is:', opts: ['l + w + h', 'l × w × h', '2(lw+lh+wh)', 'lwh/2'], correct: 1, exp: 'Volume = length × width × height.' }
    ],
    strategy: [
      { q: 'Good SAT time management means you:', opts: ['Spend all time on one question', 'Pace yourself and answer every question', 'Skip a whole module', 'Ignore the timer'], correct: 1, exp: 'There is no penalty for guessing, so answer everything.' },
      { q: 'If unsure of an answer you should:', opts: ['Leave it blank', 'Eliminate wrong options and make your best guess', 'Pick the longest option', 'Always choose A'], correct: 1, exp: 'Eliminate, then guess — blanks score zero.' },
      { q: 'On the adaptive SAT, the first module matters because it:', opts: ['Does nothing', 'Sets the difficulty and scoring range of the second module', 'Is not scored', 'Can be skipped'], correct: 1, exp: 'Stage-1 performance routes you to an easier or harder stage 2.' },
      { q: 'A smart use of the Bluebook tools is to:', opts: ['Ignore them', 'Flag and return to hard questions and use the on-screen calculator', 'Close the app', 'Only read questions'], correct: 1, exp: 'Flagging, annotation and the built-in Desmos calculator save time.' },
      { q: 'On test day you should mainly:', opts: ['Learn 200 new words', 'Bring ID, charge your device, arrive early and stay calm', 'Take two mock tests', 'Change all strategies'], correct: 1, exp: 'Logistics and rest protect the score you have built.' },
      { q: 'Managing stress before the SAT is helped by:', opts: ['Cramming all night', 'Sleep, breathing and steady preparation', 'Skipping meals', 'Panicking'], correct: 1, exp: 'Rest and calm routines keep performance steady.' }
    ]
  };

  function pickQuestions(skill, count) {
    var pool = BANK[skill] || BANK.strategy;
    var mixed = BANK.orientation.concat(BANK.rw, BANK.grammar, BANK.math, BANK.adv_math, BANK.data, BANK.geometry, BANK.strategy);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(item) { return { q: item.q, opts: item.opts.slice(), correct: item.correct, exp: item.exp }; }
  function practiceQuiz(skill, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(skill, 3).map(cloneQ) }; }
  function assessmentQuiz(skill, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(skill, count).map(cloneQ) }; }

  var modules = [];
  var quizzes = {};
  var notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, mockCount = 0, resourceCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.strategy;
    var lessons = [];
    var contentIdx = 0;

    names.forEach(function (name) {
      if (type === 'resource') {
        // Bonus reading resource: no video, no paired quiz.
        contentIdx += 1;
        lessons.push({ t: num + '.' + contentIdx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + escapeHtml(moduleTitle) + '</strong><span>Bonus resource</span></div><h3>' + escapeHtml(name) + '</h3>' + (RESOURCES[name] || '<p>Reference material for your SAT preparation.</p>') + '<p><strong>Downloadable:</strong> Use Print → Save as PDF to keep this resource offline.</p></div>';
        flat += 1;
        resourceCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var isFinal = isFinalName(name);
        var mock = isMock(name);
        var count = isFinal ? 20 : mock ? 15 : 5;
        var quizId = 'sat-m' + num + '-a' + flat;
        quizzes[quizId] = assessmentQuiz(skill, name, count);
        if (isFinal) quizzes[quizId].isFinal = true;
        var badge = isFinal ? '🏆 ' : mock ? '🧪 ' : '📝 ';
        var lesson = { t: badge + name, d: count + ' questions', isQuiz: true, quizId: quizId };
        if (isFinal) lesson.isFinal = true;
        lessons.push(lesson);
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + escapeHtml(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + escapeHtml(name) + '</h3><p>' + (isFinal ? 'This is the Final Assessment. Pass it to complete the course and unlock your TIH Certificate of Completion.' : 'Complete this ' + (mock ? 'full-length mock test' : 'assessment') + ' under timed conditions, then review every answer explanation to close your gaps.') + '</p></div>';
        flat += 1;
        quizCount += 1;
        if (mock || isFinal) mockCount += 1;
      } else {
        var video = pool[contentIdx % pool.length];
        contentIdx += 1;
        lessons.push({ t: num + '.' + contentIdx + ' ' + name, d: 'Video Lesson', v: video, isQuiz: false });
        notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
        flat += 1;
        videoCount += 1;
        var pqId = 'sat-m' + num + '-q' + flat;
        quizzes[pqId] = practiceQuiz(skill, name);
        lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqId });
        notes[String(flat)] = '<p><strong>Quick check:</strong> Review the lesson notes and work the two practice questions, then answer these to confirm you understood <em>' + escapeHtml(name) + '</em>.</p>';
        flat += 1;
        quizCount += 1;
      }
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var existing = COURSES_DB.sat;
  COURSES_DB.sat = {
    id: 'sat',
    title: 'Complete Digital SAT Prep: Reading & Writing + Math (400–1600)',
    shortDesc: 'A full 14-module Digital SAT course: Reading & Writing, grammar, all Math domains, Digital SAT strategies, 60+ quizzes, full-length mock exams, bonus resources and a Certificate of Completion.',
    category: 'Exam Preparation',
    icon: '🎓',
    gradient: existing.gradient || 'linear-gradient(135deg,#1e3a8a,#2563eb,#22d3ee)',
    instructor: existing.instructor,
    instructorTitle: existing.instructorTitle,
    instructorBio: existing.instructorBio,
    rating: existing.rating || 4.9,
    reviewCount: existing.reviewCount || 342,
    students: existing.students || '800+',
    duration: '80h+',
    level: 'Beginner → Advanced',
    price: '$25',
    origPrice: '$150',
    isFree: false,
    badge: 'premium',
    certId: 'TIH-2026-SAT-0001',
    learn: [
      'Understand the Digital SAT format, adaptive testing and 400–1600 scoring',
      'Master the Reading & Writing section: ideas, craft, expression and conventions',
      'Cover every Math domain: Algebra, Advanced Math, Data Analysis and Geometry',
      'Use Bluebook tools and proven Digital SAT time-management strategies',
      'Practise with module quizzes, section tests and full-length SAT mock exams',
      'Use bonus resources: planner, formula sheet, cheat sheets and vocabulary list'
    ],
    requirements: [
      'Basic reading and arithmetic to build from',
      'A computer or tablet to practise in the Bluebook style',
      'Consistent weekly practice and review of your mistakes'
    ],
    about: [
      'This is the complete TIH Digital SAT course, rebuilt into fourteen modules that take you from the basics to full test mastery across Reading & Writing and Math.',
      'Every content lesson includes a video, printable notes with practice questions, and a short quiz. Modules end with section tests, and the course includes a Midterm, four full SAT mock exams, and a Final Assessment.',
      'The SAT is accepted for admission and scholarships by universities in the United States and worldwide. Module 14 adds bonus resources you can download and keep.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'sat',
    _satFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.sat = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[SAT] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' mockExams=' + mockCount + ' resources=' + resourceCount);
  }
})();
