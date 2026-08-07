/* TIH Complete WASSCE Physics Preparation Course.
   Builds COURSES_DB['wassce-physics'] directly with the full 10-module WAEC
   Physics structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC Physics
   syllabus. Modelled on wassce-chemistry-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-physics';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wasscePhyFull) return;

  // Vetted WASSCE Physics videos (reused from the WASSCE science subjects).
  var VIDEOS = {
    intro: ['W8M1XwwkOXQ'],
    mechanics: ['aD58U3Ib0ng'],
    matter: ['BoNFDjVq0-8'],
    heat: ['bM4ykIumlss'],
    waves: ['Io-HXZTepH4'],
    electricity: ['AJdEjg7ss7o'],
    modern: ['HUz-DGVIMnU'],
    practical: ['W8M1XwwkOXQ'],
    exampractice: ['W8M1XwwkOXQ'],
    final: ['W8M1XwwkOXQ']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Physics', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Physics Exam', 'Exam Structure & Marking Scheme', 'Scientific Method', 'Laboratory Safety', 'Study Strategies']],
    [2, 'Measurement & Mechanics', '⚙️', 'mechanics', 'content', ['Physical Quantities and Units', 'Scalars and Vectors', 'Motion', 'Speed, Velocity & Acceleration', 'Equations of Motion', "Force and Newton's Laws", 'Momentum', 'Work, Energy & Power', 'Machines', 'Mechanics Practice']],
    [3, 'Properties of Matter', '🧱', 'matter', 'content', ['Density', 'Pressure', 'Elasticity', 'Surface Tension', 'Viscosity', 'Fluid Mechanics', 'Simple Harmonic Motion', 'Practical Applications']],
    [4, 'Heat & Thermodynamics', '🔥', 'heat', 'content', ['Temperature', 'Heat Energy', 'Thermal Expansion', 'Specific Heat Capacity', 'Latent Heat', 'Gas Laws', 'Heat Transfer', 'Thermodynamics Practice']],
    [5, 'Waves, Sound & Light', '🌊', 'waves', 'content', ['Wave Motion', 'Sound Waves', 'Reflection of Sound', 'Light Waves', 'Reflection of Light', 'Refraction', 'Lenses', 'Optical Instruments', 'Wave Applications', 'Practical Exercises']],
    [6, 'Electricity & Magnetism', '⚡', 'electricity', 'content', ['Electric Charge', 'Electric Fields', 'Current Electricity', 'Resistance', "Ohm's Law", 'Electrical Circuits', 'Magnetism', 'Electromagnetism', 'Electromagnetic Induction', 'Electrical Safety']],
    [7, 'Modern Physics', '🔬', 'modern', 'content', ['Atomic Structure', 'Radioactivity', 'Nuclear Energy', 'X-rays', 'Electronics Basics', 'Semiconductors', 'Renewable Energy', 'Modern Technology Applications']],
    [8, 'Practical Physics', '🧪', 'practical', 'content', ['Laboratory Apparatus', 'Measurement Techniques', 'Graph Plotting', 'Experimental Errors', 'Data Analysis', 'Practical Investigations', 'Specimen Identification', 'Laboratory Reports']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Numerical Problem Solving', 'Practical Examination Practice', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Physics Revision', 'Formula Review', 'Examination Strategies', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals like "Mock Examinations"); NOT bare "Tests".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Physics exam', mechanics: 'measurement & mechanics', matter: 'the properties of matter', heat: 'heat & thermodynamics', waves: 'waves, sound & light', electricity: 'electricity & magnetism', modern: 'modern physics', practical: 'practical physics', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    mechanics: '<h4>📥 Formula Sheet: Measurement & Mechanics</h4><ul><li><strong>Equations of motion:</strong> v = u + at; s = ut + ½at²; v² = u² + 2as.</li><li><strong>Newton’s 2nd law:</strong> F = ma; <strong>momentum:</strong> p = mv.</li><li><strong>Work:</strong> W = F × d; <strong>power:</strong> P = W ÷ t.</li><li><strong>Kinetic energy:</strong> ½mv²; <strong>potential energy:</strong> mgh.</li><li><strong>Mechanical advantage:</strong> load ÷ effort; efficiency = useful/​input × 100%.</li></ul>',
    matter: '<h4>📥 Formula Sheet: Properties of Matter</h4><ul><li><strong>Density:</strong> ρ = mass ÷ volume (kg/m³).</li><li><strong>Pressure:</strong> P = force ÷ area (Pa); in a liquid P = ρgh.</li><li><strong>Hooke’s law:</strong> F = ke (within the elastic limit).</li><li><strong>Upthrust (Archimedes):</strong> equals the weight of fluid displaced.</li><li><strong>S.H.M:</strong> periodic motion about a fixed point; T = 1 ÷ f.</li></ul>',
    heat: '<h4>📥 Formula Sheet: Heat & Thermodynamics</h4><ul><li><strong>Heat energy:</strong> Q = mcΔθ (c = specific heat capacity).</li><li><strong>Latent heat:</strong> Q = mL (no temperature change during change of state).</li><li><strong>Gas laws:</strong> Boyle P₁V₁ = P₂V₂; Charles V₁/T₁ = V₂/T₂; general P₁V₁/T₁ = P₂V₂/T₂.</li><li><strong>Temperature (K)</strong> = °C + 273.</li><li><strong>Heat transfer:</strong> conduction, convection, radiation.</li></ul>',
    waves: '<h4>📥 Formula Sheet: Waves, Sound & Light</h4><ul><li><strong>Wave equation:</strong> v = fλ (speed = frequency × wavelength).</li><li><strong>Period:</strong> T = 1 ÷ f.</li><li><strong>Reflection:</strong> angle of incidence = angle of reflection.</li><li><strong>Refractive index:</strong> n = sin i ÷ sin r (Snell’s law).</li><li><strong>Lens formula:</strong> 1/f = 1/v + 1/u; magnification m = v ÷ u.</li></ul>',
    electricity: '<h4>📥 Formula Sheet: Electricity & Magnetism</h4><ul><li><strong>Ohm’s law:</strong> V = IR.</li><li><strong>Power:</strong> P = IV = I²R = V²/R.</li><li><strong>Charge:</strong> Q = It; <strong>energy:</strong> E = Pt = IVt.</li><li><strong>Series:</strong> R = R₁ + R₂ …; <strong>Parallel:</strong> 1/R = 1/R₁ + 1/R₂ …</li><li><strong>Induction:</strong> a changing magnetic field induces an e.m.f (Faraday/Lenz).</li></ul>',
    modern: '<h4>📥 Guide: Modern Physics</h4><ul><li><strong>Atom:</strong> nucleus (protons + neutrons) with orbiting electrons.</li><li><strong>Radioactivity:</strong> alpha (α), beta (β) and gamma (γ) emissions.</li><li><strong>Half-life:</strong> time for half the nuclei to decay.</li><li><strong>Semiconductors:</strong> conductivity between conductors and insulators; used in diodes.</li><li><strong>Renewable energy:</strong> solar, wind, hydro — clean, sustainable sources.</li></ul>',
    practical: '<h4>📥 Practical Manual: Physics Lab Skills</h4><ul><li><strong>Instruments:</strong> metre rule, vernier calliper, micrometer, stopwatch, ammeter, voltmeter.</li><li><strong>Graphs:</strong> label axes with units, choose a sensible scale, draw the best-fit line, find the gradient.</li><li><strong>Errors:</strong> reduce parallax; repeat readings and average.</li><li><strong>Reports:</strong> aim, apparatus, method, readings table, graph, conclusion.</li><li><strong>Precision:</strong> record readings to the correct number of decimal places.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'mechanics' || /Motion|Newton|Momentum|Work, Energy|Machines|Velocity|Vectors/i.test(name)) return TEMPLATES.mechanics;
    if (skill === 'matter' || /Density|Pressure|Elasticity|Harmonic|Fluid/i.test(name)) return TEMPLATES.matter;
    if (skill === 'heat' || /Heat|Temperature|Specific Heat|Latent|Thermal|Gas Laws/i.test(name)) return TEMPLATES.heat;
    if (skill === 'waves' || /Wave|Sound|Light|Reflection|Refraction|Lenses|Optical/i.test(name)) return TEMPLATES.waves;
    if (skill === 'electricity' || /Ohm|Resistance|Circuit|Charge|Magnet|Electromagnet|Current/i.test(name)) return TEMPLATES.electricity;
    if (skill === 'modern' || /Radioactivity|Nuclear|X-rays|Semiconductor|Renewable|Atomic Structure|Electronics/i.test(name)) return TEMPLATES.modern;
    if (skill === 'practical' || /Apparatus|Graph|Errors|Measurement|Laboratory Reports/i.test(name)) return TEMPLATES.practical;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Physics skills';
    var focus = position % 2 ? 'clear principles, worked examples and timed practice' : 'understanding the physics and applying it to WAEC-style questions and calculations';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Physics · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and worked examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the concept/formula for <em>' + esc(name) + '</em> and how WAEC tests it in objective, essay and practical papers.</li>' +
      '<li>Study a worked example step by step, noting the formula, substitution, units and significant figures.</li>' +
      '<li>Practise with past-question-style items, showing all working and using your scientific calculator correctly.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this formula sheet in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Solve one WAEC past question on <em>' + esc(name) + '</em> and check every step against a worked solution.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Work/explain one WAEC-style item on <em>' + esc(name) + '</em>, showing formula, substitution and units.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and add the key formula/result to your physics formula notebook.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Physics preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical activity carefully, take accurate readings, plot/analyse where required, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Physics exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Physics usually includes:', opts: ['Only an oral test', 'Objective, essay/theory and a practical (alternative) paper', 'One essay only', 'Practical only'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'A basic laboratory safety rule is to:', opts: ['Touch live wires', 'Follow instructions and handle apparatus carefully', 'Run in the lab', 'Ignore labels'], correct: 1, exp: 'Follow safety rules and handle equipment carefully.' },
      { q: 'The scientific method begins with:', opts: ['A conclusion', 'Observation and a question, then a hypothesis', 'A certificate', 'Guessing'], correct: 1, exp: 'Observe → question → hypothesis → experiment → conclusion.' },
      { q: 'In numerical questions you gain marks mainly for:', opts: ['The final answer only', 'Formula, substitution, working and correct units', 'Neatness only', 'Guessing'], correct: 1, exp: 'Method, substitution and units earn marks, not just the answer.' },
      { q: 'A good study strategy for physics is to:', opts: ['Only read once', 'Practise numerical problems and past questions regularly', 'Skip practicals', 'Memorise nothing'], correct: 1, exp: 'Active practice of problems and past questions works best.' }
    ],
    mechanics: [
      { q: 'A scalar quantity has:', opts: ['Magnitude only', 'Direction only', 'Magnitude and direction', 'Neither'], correct: 0, exp: 'Scalars have magnitude only (e.g. mass, speed).' },
      { q: 'Which is a vector quantity?', opts: ['Speed', 'Distance', 'Velocity', 'Time'], correct: 2, exp: 'Velocity has magnitude and direction.' },
      { q: 'The SI unit of force is the:', opts: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1, exp: 'Force is measured in newtons (N).' },
      { q: 'Using v = u + at, if u = 0, a = 2 m/s², t = 5 s, then v =', opts: ['5 m/s', '10 m/s', '2 m/s', '7 m/s'], correct: 1, exp: 'v = 0 + 2×5 = 10 m/s.' },
      { q: 'Work done is calculated as:', opts: ['Force ÷ distance', 'Force × distance', 'Mass × velocity', 'Force × time'], correct: 1, exp: 'W = F × d, measured in joules.' },
      { q: 'Momentum is given by:', opts: ['mv', 'ma', 'mgh', '½mv²'], correct: 0, exp: 'Momentum p = mass × velocity.' }
    ],
    matter: [
      { q: 'Density is defined as:', opts: ['mass × volume', 'mass ÷ volume', 'volume ÷ mass', 'force ÷ area'], correct: 1, exp: 'Density ρ = mass ÷ volume.' },
      { q: 'Pressure is:', opts: ['force × area', 'force ÷ area', 'mass ÷ volume', 'work ÷ time'], correct: 1, exp: 'Pressure P = force ÷ area (Pa).' },
      { q: 'Hooke’s law (within the elastic limit) states F is proportional to:', opts: ['Mass', 'Extension', 'Time', 'Area'], correct: 1, exp: 'F = ke; force ∝ extension up to the elastic limit.' },
      { q: 'Upthrust on a floating object equals the weight of:', opts: ['The object only', 'The fluid displaced', 'Air above it', 'Nothing'], correct: 1, exp: 'Archimedes’ principle: upthrust = weight of fluid displaced.' },
      { q: 'The pressure in a liquid increases with:', opts: ['Depth', 'Colour', 'Time only', 'Width'], correct: 0, exp: 'P = ρgh, so pressure increases with depth.' },
      { q: 'Simple harmonic motion is periodic motion about a:', opts: ['Random point', 'Fixed equilibrium point', 'Moving point', 'Corner'], correct: 1, exp: 'S.H.M oscillates about a fixed equilibrium position.' }
    ],
    heat: [
      { q: 'Heat energy is calculated using:', opts: ['Q = mcΔθ', 'Q = mv', 'Q = IR', 'Q = fλ'], correct: 0, exp: 'Q = mcΔθ (c = specific heat capacity).' },
      { q: 'During a change of state (e.g. melting), the temperature:', opts: ['Rises', 'Stays constant', 'Falls', 'Doubles'], correct: 1, exp: 'Latent heat causes a state change at constant temperature.' },
      { q: '0 °C in kelvin is:', opts: ['0 K', '100 K', '273 K', '373 K'], correct: 2, exp: 'K = °C + 273, so 0 °C = 273 K.' },
      { q: 'Heat transfer through a solid metal rod is mainly by:', opts: ['Convection', 'Conduction', 'Radiation', 'Evaporation'], correct: 1, exp: 'Conduction transfers heat through solids.' },
      { q: 'Specific heat capacity is the heat needed to raise the temperature of:', opts: ['Any mass by any amount', '1 kg by 1 K (or 1 °C)', '1 litre only', 'Nothing'], correct: 1, exp: 'It is the heat to raise 1 kg by 1 K.' },
      { q: 'Boyle’s law relates pressure and volume at constant:', opts: ['Temperature', 'Mass only', 'Colour', 'Charge'], correct: 0, exp: 'P₁V₁ = P₂V₂ at constant temperature.' }
    ],
    waves: [
      { q: 'The wave equation is:', opts: ['v = fλ', 'v = IR', 'v = mc', 'v = F/a'], correct: 0, exp: 'Speed = frequency × wavelength (v = fλ).' },
      { q: 'The period T of a wave equals:', opts: ['f', '1 ÷ f', 'fλ', 'v ÷ λ'], correct: 1, exp: 'Period T = 1 ÷ frequency.' },
      { q: 'For reflection, the angle of incidence equals the angle of:', opts: ['Refraction', 'Reflection', 'Deviation', 'Elevation'], correct: 1, exp: 'Law of reflection: i = r.' },
      { q: 'The bending of light as it passes between media is called:', opts: ['Reflection', 'Refraction', 'Diffraction only', 'Absorption'], correct: 1, exp: 'Refraction is the change in direction due to speed change.' },
      { q: 'Sound waves are:', opts: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Stationary only'], correct: 1, exp: 'Sound travels as longitudinal (compression) waves.' },
      { q: 'A converging (convex) lens is used in a:', opts: ['Simple camera/magnifying glass', 'Wire', 'Battery', 'Resistor'], correct: 0, exp: 'Convex lenses converge light and form images.' }
    ],
    electricity: [
      { q: 'Ohm’s law states:', opts: ['V = IR', 'P = mgh', 'F = ma', 'Q = mcΔθ'], correct: 0, exp: 'Voltage = current × resistance (V = IR).' },
      { q: 'The SI unit of electric current is the:', opts: ['Volt', 'Ampere', 'Ohm', 'Watt'], correct: 1, exp: 'Current is measured in amperes (A).' },
      { q: 'Electrical power is given by:', opts: ['P = IV', 'P = fλ', 'P = mv', 'P = ρgh'], correct: 0, exp: 'P = IV (also I²R or V²/R).' },
      { q: 'In a series circuit, the total resistance is:', opts: ['R₁ + R₂ + …', '1/R₁ + 1/R₂', 'Always zero', 'R₁ × R₂'], correct: 0, exp: 'Series resistances add directly.' },
      { q: 'If V = 12 V and R = 4 Ω, the current I is:', opts: ['3 A', '48 A', '0.3 A', '16 A'], correct: 0, exp: 'I = V/R = 12/4 = 3 A.' },
      { q: 'A changing magnetic field can induce an:', opts: ['e.m.f (voltage)', 'Increase in mass', 'Colour', 'Chemical bond'], correct: 0, exp: 'Electromagnetic induction produces an induced e.m.f.' }
    ],
    modern: [
      { q: 'The nucleus of an atom contains:', opts: ['Protons and neutrons', 'Electrons only', 'Only protons', 'Only neutrons'], correct: 0, exp: 'The nucleus holds protons and neutrons.' },
      { q: 'Which radiation has the greatest penetrating power?', opts: ['Alpha', 'Beta', 'Gamma', 'None'], correct: 2, exp: 'Gamma (γ) rays are the most penetrating.' },
      { q: 'The half-life is the time for ___ of the nuclei to decay:', opts: ['All', 'Half', 'A quarter', 'None'], correct: 1, exp: 'Half-life = time for half the nuclei to decay.' },
      { q: 'A semiconductor’s conductivity lies between that of a:', opts: ['Conductor and insulator', 'Gas and liquid', 'Metal and metal', 'Acid and base'], correct: 0, exp: 'Semiconductors are between conductors and insulators.' },
      { q: 'An example of a renewable energy source is:', opts: ['Coal', 'Solar', 'Petrol', 'Diesel'], correct: 1, exp: 'Solar, wind and hydro are renewable.' },
      { q: 'Alpha (α) particles are:', opts: ['Helium nuclei', 'Electrons', 'Photons', 'Protons only'], correct: 0, exp: 'An alpha particle is a helium nucleus (2p + 2n).' }
    ],
    practical: [
      { q: 'A vernier calliper is used to measure:', opts: ['Temperature', 'Small lengths accurately', 'Current', 'Time'], correct: 1, exp: 'Vernier callipers measure small lengths precisely.' },
      { q: 'When plotting a graph you should:', opts: ['Leave axes unlabelled', 'Label axes with units, choose a good scale and draw a best-fit line', 'Join dots randomly', 'Use no scale'], correct: 1, exp: 'Good graphs are labelled, scaled and have a best-fit line.' },
      { q: 'The gradient (slope) of a straight-line graph is:', opts: ['change in y ÷ change in x', 'x ÷ y', 'y × x', 'Always 1'], correct: 0, exp: 'Gradient = Δy ÷ Δx.' },
      { q: 'Parallax error is reduced by:', opts: ['Looking from an angle', 'Reading at eye level, perpendicular to the scale', 'Guessing', 'Rounding'], correct: 1, exp: 'Read perpendicular to the scale at eye level.' },
      { q: 'To improve reliability of a reading you should:', opts: ['Take one reading', 'Repeat and average the readings', 'Ignore anomalies silently', 'Change apparatus each time'], correct: 1, exp: 'Repeat measurements and take an average.' },
      { q: 'A physics practical report should include the aim, apparatus, method, readings and:', opts: ['Nothing else', 'A conclusion', 'Only a drawing', 'A price list'], correct: 1, exp: 'A conclusion states what the results show.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In numerical questions you should always:', opts: ['Write the answer only', 'Show formula, substitution, working and units', 'Skip the method', 'Round too early'], correct: 1, exp: 'Method and units earn marks; avoid early rounding.' },
      { q: 'Clearly labelled diagrams and free-body sketches:', opts: ['Waste time', 'Earn marks and clarify your physics', 'Are banned', 'Are optional decoration'], correct: 1, exp: 'Clear diagrams gain marks in physics.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', mechanics: 'mechanics', matter: 'matter', heat: 'heat', waves: 'waves', electricity: 'electricity', modern: 'modern', practical: 'practical', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.mechanics, BANK.matter, BANK.heat, BANK.waves, BANK.electricity, BANK.modern, BANK.practical, BANK.examstrat);
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
        var qid = 'wp-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Physics Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Physics Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical physics and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wp-m' + num + '-a' + flat;
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
      var pqid = 'wp-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Physics: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Physics preparation course aligned to the WAEC syllabus: measurement & mechanics, properties of matter, heat & thermodynamics, waves/sound/light, electricity & magnetism, modern physics, practical physics, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧲',
    gradient: 'linear-gradient(135deg,#0B6FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Physics examination with concise lessons, worked calculations, practical skills and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-PHYS',
    learn: [
      'Understand the WAEC Physics exam structure and marking scheme',
      'Master measurement, mechanics and the equations of motion',
      'Explain the properties of matter, heat and thermodynamics',
      'Solve problems on waves, sound, light and optics',
      'Apply electricity, magnetism, circuits and Ohm’s law',
      'Build practical laboratory and graph skills and apply exam techniques with mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A non-programmable scientific calculator', 'A physics notebook and a personal formula sheet', 'A ruler and graph paper for plotting', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Physics preparation course, organised into ten modules aligned to the WAEC Physics syllabus and examination structure (objective, theory/essay and practical).',
      'Every content lesson has a video and printable notes with worked examples; downloadable resources include formula sheets for each topic area and a practical lab manual on measurement and graph plotting. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-physics',
    _wasscePhyFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-PHYSICS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
