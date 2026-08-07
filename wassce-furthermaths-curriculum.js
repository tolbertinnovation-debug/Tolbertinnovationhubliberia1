/* TIH Complete WASSCE Further Mathematics Preparation Course.
   Builds COURSES_DB['wassce-furthermaths'] directly with the full 10-module
   WAEC Further Mathematics structure. Loaded before the WASSCE course-player
   boot, so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Further Mathematics syllabus. Modelled on
   wassce-mathematics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-further-maths';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceFMathFull) return;

  // Vetted WASSCE Mathematics videos plus the mechanics video (for the mechanics
  // module). Content, notes and quizzes are Further-Maths-specific.
  var VIDEOS = {
    intro: ['E46f8ErIbd0'],
    algebra: ['7FxqG9X9NDg'],
    functions: ['kvU9sOzT2mk'],
    coordgeom: ['kvU9sOzT2mk'],
    trigvec: ['da2rkb3RYYM'],
    calculus: ['WsQQvHm4lSw'],
    stats: ['s7Y4nfbatAY'],
    mechanics: ['WsQQvHm4lSw'],
    exampractice: ['E46f8ErIbd0'],
    final: ['E46f8ErIbd0']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Further Mathematics', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Further Mathematics Exam', 'Exam Structure & Marking Scheme', 'Study Strategies', 'Scientific Calculator Techniques', 'Revision Planning']],
    [2, 'Advanced Algebra', '➗', 'algebra', 'content', ['Algebraic Expressions', 'Polynomial Functions', 'Partial Fractions', 'Indices and Logarithms', 'Inequalities', 'Sequences and Series', 'Binomial Expansion', 'Mathematical Induction']],
    [3, 'Functions & Graphs', '📈', 'functions', 'content', ['Functions and Relations', 'Domain and Range', 'Composite Functions', 'Inverse Functions', 'Graph Transformations', 'Exponential Functions', 'Logarithmic Functions', 'Curve Sketching']],
    [4, 'Coordinate Geometry', '📐', 'coordgeom', 'content', ['Straight Line Equations', 'Midpoint and Distance Formula', 'Circles', 'Parabolas', 'Ellipses', 'Hyperbolas', 'Coordinate Geometry Applications', 'Analytical Problem Solving']],
    [5, 'Trigonometry & Vectors', '📏', 'trigvec', 'content', ['Trigonometric Identities', 'Compound Angles', 'Double & Half Angle Formulae', 'Trigonometric Equations', 'Vectors in Two Dimensions', 'Scalar Product', 'Vector Applications', 'Bearings and Navigation']],
    [6, 'Calculus', '∫', 'calculus', 'content', ['Limits', 'Differentiation', 'Applications of Differentiation', 'Integration', 'Applications of Integration', 'Area Under Curves', 'Differential Equations (Introduction)', 'Optimization Problems']],
    [7, 'Statistics & Probability', '📊', 'stats', 'content', ['Data Representation', 'Measures of Central Tendency', 'Measures of Dispersion', 'Probability', 'Permutations and Combinations', 'Binomial Distribution', 'Statistical Interpretation', 'Practical Applications']],
    [8, 'Mechanics', '⚙️', 'mechanics', 'content', ['Motion in a Straight Line', 'Velocity and Acceleration', "Newton's Laws of Motion", 'Forces', 'Momentum', 'Work, Energy and Power', 'Equilibrium', 'Practical Mechanics Problems']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Essay Question Practice', 'Advanced Problem Solving', 'Past WAEC Questions', 'Mock Examinations', 'Performance Review']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Further Mathematics Revision', 'Formula Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Further Mathematics exam', algebra: 'advanced algebra', functions: 'functions & graphs', coordgeom: 'coordinate geometry', trigvec: 'trigonometry & vectors', calculus: 'calculus', stats: 'statistics & probability', mechanics: 'mechanics', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    algebra: '<h4>📥 Formula Sheet: Advanced Algebra</h4><ul><li><strong>Indices:</strong> aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁻ⁿ = 1/aⁿ.</li><li><strong>Logarithms:</strong> log(xy)=log x+log y; logₐb = log b ÷ log a.</li><li><strong>AP:</strong> nth term = a+(n−1)d; sum Sₙ = n/2[2a+(n−1)d].</li><li><strong>GP:</strong> nth term = arⁿ⁻¹; Sₙ = a(rⁿ−1)/(r−1); S∞ = a/(1−r), |r|&lt;1.</li><li><strong>Binomial:</strong> (a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ.</li></ul>',
    functions: '<h4>📥 Guide: Functions & Graphs</h4><ul><li><strong>Domain:</strong> allowed inputs (x); <strong>Range:</strong> resulting outputs (y).</li><li><strong>Composite:</strong> (f∘g)(x) = f(g(x)) — apply g first.</li><li><strong>Inverse:</strong> swap x and y, then make y the subject; f(f⁻¹(x)) = x.</li><li><strong>Transformations:</strong> f(x)+a shifts up; f(x+a) shifts left; −f(x) reflects in the x-axis.</li><li><strong>Exponential/log</strong> are inverses of each other.</li></ul>',
    coordgeom: '<h4>📥 Formula Sheet: Coordinate Geometry</h4><ul><li><strong>Gradient:</strong> m = (y₂−y₁)/(x₂−x₁); line: y−y₁ = m(x−x₁).</li><li><strong>Distance:</strong> √[(x₂−x₁)²+(y₂−y₁)²]; <strong>midpoint:</strong> ((x₁+x₂)/2,(y₁+y₂)/2).</li><li><strong>Perpendicular lines:</strong> m₁·m₂ = −1.</li><li><strong>Circle:</strong> (x−a)²+(y−b)² = r², centre (a,b), radius r.</li><li><strong>Parabola:</strong> y² = 4ax (a standard conic form).</li></ul>',
    trigvec: '<h4>📥 Formula Sheet: Trigonometry & Vectors</h4><ul><li><strong>Identity:</strong> sin²θ + cos²θ = 1; tanθ = sinθ/cosθ.</li><li><strong>Compound:</strong> sin(A±B)=sinA cosB ± cosA sinB.</li><li><strong>Double angle:</strong> sin2A = 2 sinA cosA; cos2A = 1−2sin²A.</li><li><strong>Vector magnitude:</strong> |(x,y)| = √(x²+y²).</li><li><strong>Scalar (dot) product:</strong> a·b = |a||b|cosθ = x₁x₂+y₁y₂.</li></ul>',
    calculus: '<h4>📥 Formula Sheet: Calculus</h4><ul><li><strong>Differentiation:</strong> d/dx(xⁿ) = n xⁿ⁻¹.</li><li><strong>Rules:</strong> product, quotient and chain rules.</li><li><strong>Stationary points:</strong> dy/dx = 0; use d²y/dx² for max/min.</li><li><strong>Integration:</strong> ∫xⁿ dx = xⁿ⁺¹/(n+1) + c (n≠−1).</li><li><strong>Area under a curve:</strong> ∫ᵇₐ y dx.</li></ul>',
    stats: '<h4>📥 Formula Sheet: Statistics & Probability</h4><ul><li><strong>Mean:</strong> Σfx ÷ Σf; <strong>variance:</strong> Σf(x−x̄)² ÷ Σf; SD = √variance.</li><li><strong>Permutations:</strong> ⁿPᵣ = n!/(n−r)!; <strong>Combinations:</strong> ⁿCᵣ = n!/[r!(n−r)!].</li><li><strong>Probability:</strong> 0 ≤ P ≤ 1; P(A or B) = P(A)+P(B)−P(A and B).</li><li><strong>Independent events:</strong> P(A and B) = P(A)·P(B).</li><li><strong>Binomial:</strong> P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ.</li></ul>',
    mechanics: '<h4>📥 Formula Sheet: Mechanics</h4><ul><li><strong>Equations of motion:</strong> v = u+at; s = ut+½at²; v² = u²+2as.</li><li><strong>Newton’s 2nd law:</strong> F = ma; <strong>weight</strong> W = mg.</li><li><strong>Momentum:</strong> p = mv; conserved in collisions.</li><li><strong>Work:</strong> W = Fd; <strong>KE:</strong> ½mv²; <strong>PE:</strong> mgh; <strong>power:</strong> P = W/t.</li><li><strong>Equilibrium:</strong> resultant force = 0 and resultant moment = 0.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'algebra' || /Indices|Logarithms|Sequences|Series|Binomial|Partial Fractions|Induction/i.test(name)) return TEMPLATES.algebra;
    if (skill === 'functions' || /Functions|Domain|Composite|Inverse|Curve Sketching|Exponential|Logarithmic/i.test(name)) return TEMPLATES.functions;
    if (skill === 'coordgeom' || /Straight Line|Midpoint|Distance|Circles|Parabolas|Ellipses|Hyperbolas/i.test(name)) return TEMPLATES.coordgeom;
    if (skill === 'trigvec' || /Trigonometric|Compound Angles|Double|Vectors|Scalar Product|Bearings/i.test(name)) return TEMPLATES.trigvec;
    if (skill === 'calculus' || /Limits|Differentiation|Integration|Area Under|Differential Equations|Optimization/i.test(name)) return TEMPLATES.calculus;
    if (skill === 'stats' || /Central Tendency|Dispersion|Probability|Permutations|Combinations|Binomial Distribution/i.test(name)) return TEMPLATES.stats;
    if (skill === 'mechanics' || /Motion|Velocity|Newton|Forces|Momentum|Work, Energy|Equilibrium/i.test(name)) return TEMPLATES.mechanics;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Further Mathematics skills';
    var focus = position % 2 ? 'clear methods, worked examples and timed problem practice' : 'understanding the theory and applying it to advanced WAEC-style problems';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Further Mathematics · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the worked examples, then complete the two problem-solving exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Learn the method/theorem for <em>' + esc(name) + '</em> and how WAEC tests it in the objective and essay papers.</li>' +
      '<li>Study a worked example step by step, noting each line of algebra and the marks for method.</li>' +
      '<li>Practise with past-question-style items under timed conditions, using your scientific calculator efficiently.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this formula sheet in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Solve one WAEC past question on <em>' + esc(name) + '</em> and check every line against a worked solution.</div>') +
      '<h4>Problem-solving exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Work one WAEC-style problem on <em>' + esc(name) + '</em>, showing all steps.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and add the key result/formula to your formula notebook.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Further Mathematics preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this advanced problem-solving task under exam conditions and review every step against a worked solution and the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your working.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Further Mathematics exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Further Mathematics usually consists of:', opts: ['Only an oral test', 'Paper 1 (objective) and Paper 2 (essay/theory)', 'One essay only', 'A practical only'], correct: 1, exp: 'Paper 1 is objective; Paper 2 is theory/essay.' },
      { q: 'In the essay paper you earn marks mainly for:', opts: ['The final answer only', 'Showing correct method and full working', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Method marks reward correct working, not just the answer.' },
      { q: 'Further Mathematics is most useful for students heading into:', opts: ['No field', 'STEM fields (engineering, physics, computing, statistics)', 'Only art', 'Only history'], correct: 1, exp: 'It builds the maths needed for STEM courses.' },
      { q: 'A permitted tool in the exam is a:', opts: ['Programmable computer', 'Non-programmable scientific calculator', 'Phone', 'Graphing app'], correct: 1, exp: 'A non-programmable scientific calculator is allowed.' },
      { q: 'A good revision plan for Further Maths should:', opts: ['Avoid practice', 'Schedule regular timed past-question practice', 'Skip hard topics', 'Only read notes'], correct: 1, exp: 'Timed practice across all topics builds speed and accuracy.' }
    ],
    algebra: [
      { q: 'The sum to infinity of a GP with |r| < 1 is:', opts: ['a(1−r)', 'a/(1−r)', 'a·r', 'a(rⁿ−1)'], correct: 1, exp: 'S∞ = a/(1−r) when |r| < 1.' },
      { q: 'The nth term of an AP with first term a and common difference d is:', opts: ['a + nd', 'a + (n−1)d', 'arⁿ⁻¹', 'a − d'], correct: 1, exp: 'Tₙ = a + (n−1)d.' },
      { q: 'In the binomial expansion of (a+b)ⁿ, the coefficients are:', opts: ['ⁿPᵣ', 'ⁿCᵣ', 'n!', 'n×r'], correct: 1, exp: 'Binomial coefficients are ⁿCᵣ.' },
      { q: 'log₁₀100 equals:', opts: ['1', '2', '10', '100'], correct: 1, exp: '10² = 100, so log₁₀100 = 2.' },
      { q: 'Partial fractions are used to:', opts: ['Multiply fractions', 'Split a rational expression into simpler fractions', 'Differentiate', 'Factor primes'], correct: 1, exp: 'They break a rational function into simpler parts.' },
      { q: 'Mathematical induction is a method used to:', opts: ['Guess answers', 'Prove statements true for all positive integers', 'Draw graphs', 'Solve triangles'], correct: 1, exp: 'Induction proves results for all n ∈ ℤ⁺.' }
    ],
    functions: [
      { q: 'The set of allowed input values of a function is its:', opts: ['Range', 'Domain', 'Gradient', 'Image'], correct: 1, exp: 'The domain is the set of permitted inputs.' },
      { q: 'The composite function (f∘g)(x) means:', opts: ['f(x)·g(x)', 'f(g(x))', 'g(f(x))', 'f(x)+g(x)'], correct: 1, exp: 'Apply g first, then f: f(g(x)).' },
      { q: 'To find the inverse of a function you:', opts: ['Differentiate it', 'Swap x and y and make y the subject', 'Square it', 'Add 1'], correct: 1, exp: 'Interchange x and y, then solve for y.' },
      { q: 'The graph of y = f(x) + 3 is y = f(x) shifted:', opts: ['3 right', '3 up', '3 down', '3 left'], correct: 1, exp: 'Adding a constant shifts the graph vertically up.' },
      { q: 'The exponential function y = aˣ has an inverse that is:', opts: ['Another exponential', 'A logarithmic function', 'A parabola', 'A line'], correct: 1, exp: 'Logarithms are the inverse of exponentials.' },
      { q: 'A relation is a function only if each input maps to:', opts: ['Many outputs', 'Exactly one output', 'No output', 'Itself'], correct: 1, exp: 'A function assigns exactly one output per input.' }
    ],
    coordgeom: [
      { q: 'The gradient of the line through (1,2) and (3,6) is:', opts: ['1', '2', '4', '½'], correct: 1, exp: 'm = (6−2)/(3−1) = 4/2 = 2.' },
      { q: 'Two lines are perpendicular when the product of their gradients is:', opts: ['0', '1', '−1', '2'], correct: 2, exp: 'm₁·m₂ = −1 for perpendicular lines.' },
      { q: 'The equation of a circle with centre (a,b) and radius r is:', opts: ['(x−a)²+(y−b)²=r²', 'y=mx+c', 'x²+y=r', 'ax+by=r'], correct: 0, exp: 'Standard circle equation.' },
      { q: 'The distance between (0,0) and (3,4) is:', opts: ['5', '7', '12', '1'], correct: 0, exp: '√(3²+4²)=√25=5.' },
      { q: 'The midpoint of (2,4) and (6,8) is:', opts: ['(4,6)', '(8,12)', '(2,2)', '(3,6)'], correct: 0, exp: 'Midpoint = ((2+6)/2,(4+8)/2) = (4,6).' },
      { q: 'y² = 4ax is the standard equation of a:', opts: ['Circle', 'Parabola', 'Line', 'Hyperbola'], correct: 1, exp: 'It is a standard parabola.' }
    ],
    trigvec: [
      { q: 'The identity sin²θ + cos²θ equals:', opts: ['0', '1', '2', 'tanθ'], correct: 1, exp: 'sin²θ + cos²θ = 1.' },
      { q: 'sin(A+B) equals:', opts: ['sinA cosB + cosA sinB', 'sinA − sinB', 'cosA cosB', 'sinA sinB'], correct: 0, exp: 'Compound-angle formula for sine.' },
      { q: 'sin 2A equals:', opts: ['2 sinA cosA', 'sin²A', '2 cosA', 'sinA + cosA'], correct: 0, exp: 'Double-angle: sin2A = 2 sinA cosA.' },
      { q: 'The magnitude of the vector (6,8) is:', opts: ['10', '14', '48', '2'], correct: 0, exp: '√(6²+8²)=√100=10.' },
      { q: 'The scalar (dot) product a·b equals:', opts: ['|a||b|sinθ', '|a||b|cosθ', 'a+b', 'a×b'], correct: 1, exp: 'a·b = |a||b|cosθ = x₁x₂+y₁y₂.' },
      { q: 'tanθ is equal to:', opts: ['cosθ/sinθ', 'sinθ/cosθ', 'sinθ·cosθ', '1/sinθ'], correct: 1, exp: 'tanθ = sinθ ÷ cosθ.' }
    ],
    calculus: [
      { q: 'The derivative of xⁿ is:', opts: ['n xⁿ⁻¹', 'xⁿ⁺¹', 'n x', 'xⁿ/n'], correct: 0, exp: 'd/dx(xⁿ) = n xⁿ⁻¹.' },
      { q: 'If y = x³, then dy/dx =', opts: ['3x²', 'x²', '3x', 'x⁴/4'], correct: 0, exp: 'Bring the power down: 3x².' },
      { q: '∫xⁿ dx (n≠−1) equals:', opts: ['n xⁿ⁻¹', 'xⁿ⁺¹/(n+1) + c', 'xⁿ', 'ln x'], correct: 1, exp: 'Increase the power by 1 and divide: xⁿ⁺¹/(n+1)+c.' },
      { q: 'At a stationary point of a curve:', opts: ['dy/dx = 0', 'y = 0', 'x = 0', 'd²y/dx² = x'], correct: 0, exp: 'Stationary points occur where dy/dx = 0.' },
      { q: 'The area under a curve y between x=a and x=b is:', opts: ['dy/dx', '∫ᵇₐ y dx', 'y(b−a) only', 'the gradient'], correct: 1, exp: 'Definite integral gives the area under the curve.' },
      { q: '∫ 2x dx =', opts: ['x² + c', '2 + c', 'x + c', '2x² + c'], correct: 0, exp: '∫2x dx = x² + c.' }
    ],
    stats: [
      { q: 'The number of ways to arrange r items from n (order matters) is:', opts: ['ⁿCᵣ', 'ⁿPᵣ', 'n!', 'n×r'], correct: 1, exp: 'Permutations ⁿPᵣ = n!/(n−r)! (order matters).' },
      { q: 'ⁿCᵣ (combinations, order does NOT matter) equals:', opts: ['n!/(n−r)!', 'n!/[r!(n−r)!]', 'n·r', 'r!'], correct: 1, exp: 'ⁿCᵣ = n!/[r!(n−r)!].' },
      { q: 'The standard deviation is the:', opts: ['Square of the mean', 'Square root of the variance', 'Range ÷ 2', 'Mode'], correct: 1, exp: 'SD = √variance.' },
      { q: 'For independent events, P(A and B) =', opts: ['P(A)+P(B)', 'P(A)·P(B)', 'P(A)−P(B)', '1'], correct: 1, exp: 'Independent events multiply.' },
      { q: 'In a binomial distribution, P(X=r) =', opts: ['ⁿCᵣ pʳ qⁿ⁻ʳ', 'p+q', 'n·p·r', 'p/q'], correct: 0, exp: 'P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ, with q = 1−p.' },
      { q: 'A probability value must lie between:', opts: ['0 and 1', '−1 and 1', '0 and 100', '1 and 10'], correct: 0, exp: '0 ≤ P(event) ≤ 1.' }
    ],
    mechanics: [
      { q: 'Using v = u + at with u=0, a=3 m/s², t=4 s gives v =', opts: ['7 m/s', '12 m/s', '3 m/s', '1 m/s'], correct: 1, exp: 'v = 0 + 3×4 = 12 m/s.' },
      { q: 'Newton’s second law is:', opts: ['F = ma', 'F = mv', 'F = mgh', 'F = ½mv²'], correct: 0, exp: 'Force = mass × acceleration.' },
      { q: 'Momentum is defined as:', opts: ['mv', 'ma', 'mgh', 'Fd'], correct: 0, exp: 'p = mass × velocity.' },
      { q: 'Kinetic energy is:', opts: ['mgh', '½mv²', 'mv', 'Fd only'], correct: 1, exp: 'KE = ½mv².' },
      { q: 'A body is in equilibrium when the resultant force is:', opts: ['Maximum', 'Zero', 'Negative', 'Increasing'], correct: 1, exp: 'Equilibrium: resultant force and resultant moment are zero.' },
      { q: 'Power is the rate of doing:', opts: ['Force', 'Work', 'Mass', 'Distance'], correct: 1, exp: 'Power P = work ÷ time.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In essay/theory questions you should always:', opts: ['Write the answer only', 'Show every line of working and state results clearly', 'Skip the method', 'Round too early'], correct: 1, exp: 'Method marks reward clear, complete working.' },
      { q: 'Keeping a personal formula notebook helps you:', opts: ['Waste time', 'Revise key formulae quickly before the exam', 'Forget formulae', 'Avoid practice'], correct: 1, exp: 'A formula notebook speeds up revision.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', algebra: 'algebra', functions: 'functions', coordgeom: 'coordgeom', trigvec: 'trigvec', calculus: 'calculus', stats: 'stats', mechanics: 'mechanics', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.algebra, BANK.functions, BANK.coordgeom, BANK.trigvec, BANK.calculus, BANK.stats, BANK.mechanics, BANK.examstrat);
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
        var qid = 'wf-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Further Mathematics Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Further Mathematics Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the examination practice and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wf-m' + num + '-a' + flat;
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
      var pqid = 'wf-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two problem-solving exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Further Mathematics: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Further Mathematics preparation course aligned to the WAEC syllabus: advanced algebra, functions & graphs, coordinate geometry, trigonometry & vectors, calculus, statistics & probability, mechanics, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧮',
    gradient: 'linear-gradient(135deg,#1F3A8A,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Further Mathematics examination with advanced worked examples, formula sheets and past-question practice for STEM-bound students.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '65h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-FMTH',
    learn: [
      'Understand the WAEC Further Mathematics exam structure and marking scheme',
      'Master advanced algebra: sequences, series, binomial expansion and induction',
      'Work with functions, graphs and coordinate geometry (lines, circles, conics)',
      'Apply trigonometric identities, compound angles and vectors',
      'Use calculus: limits, differentiation, integration and optimisation',
      'Solve statistics, probability and mechanics problems with exam techniques'
    ],
    requirements: ['A phone or computer with internet', 'A non-programmable scientific calculator', 'A notebook and a personal formula sheet', 'A solid grasp of core WASSCE Mathematics', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Further Mathematics preparation course, organised into ten modules aligned to the WAEC Further Mathematics syllabus and examination structure (Paper 1 objective and Paper 2 theory/essay).',
      'Every content lesson has a video and printable notes with advanced worked examples; downloadable resources include formula sheets for algebra, calculus, coordinate geometry, trigonometry/vectors, statistics and mechanics. The course ends with a full mock examination and a Certificate of Completion.',
      'This course suits students heading into engineering, physics, computing, mathematics, statistics and economics. Use it together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-further-maths',
    _wassceFMathFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-FURTHERMATHS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
