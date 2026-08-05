/* TIH Complete WASSCE Chemistry Preparation Course.
   Builds COURSES_DB['wassce-chemistry'] directly with the full 10-module WAEC
   Chemistry structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC Chemistry
   syllabus. Modelled on wassce-biology-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-chemistry';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceChemFull) return;

  // Vetted WASSCE Chemistry videos (reused from the WASSCE science subjects).
  var VIDEOS = {
    intro: ['YuLcbCcy3EM', 'anIXbbZyJ38'],
    atomic: ['YuLcbCcy3EM', 'WqvV8zDRvRw'],
    bonding: ['WqvV8zDRvRw', 'YuLcbCcy3EM'],
    reactions: ['anIXbbZyJ38', 'WqvV8zDRvRw'],
    acids: ['k1NjBnAJHD4', 'anIXbbZyJ38'],
    organic: ['apZKzImLjJg', 'WqvV8zDRvRw'],
    physical: ['anIXbbZyJ38', 'k1NjBnAJHD4'],
    environmental: ['k1NjBnAJHD4', 'apZKzImLjJg'],
    practical: ['k1NjBnAJHD4', 'anIXbbZyJ38'],
    final: ['YuLcbCcy3EM', 'apZKzImLjJg']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Chemistry', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Chemistry Exam', 'Exam Structure & Marking Scheme', 'Laboratory Safety', 'Scientific Method', 'Study Strategies']],
    [2, 'Atomic Structure & Periodic Table', '⚛️', 'atomic', 'content', ['Nature of Matter', 'Atomic Structure', 'Isotopes', 'Electron Configuration', 'Periodic Table', 'Periodic Trends', 'Chemical Symbols', 'Atomic Mass & Mole Concept']],
    [3, 'Chemical Bonding', '🔗', 'bonding', 'content', ['Ionic Bonding', 'Covalent Bonding', 'Metallic Bonding', 'Intermolecular Forces', 'Chemical Formulae', 'Valency', 'Oxidation Numbers', 'Bonding Practice']],
    [4, 'Chemical Reactions & Calculations', '🧮', 'reactions', 'content', ['Writing Chemical Equations', 'Balancing Chemical Equations', 'Types of Chemical Reactions', 'Mole Calculations', 'Empirical & Molecular Formulae', 'Gas Laws', 'Stoichiometry', 'Percentage Yield']],
    [5, 'Acids, Bases & Salts', '🧪', 'acids', 'content', ['Properties of Acids', 'Properties of Bases', 'Indicators', 'pH Scale', 'Neutralization', 'Salt Preparation', 'Titration', 'Practical Applications']],
    [6, 'Organic Chemistry', '🛢️', 'organic', 'content', ['Introduction to Organic Chemistry', 'Hydrocarbons', 'Alkanes', 'Alkenes', 'Alkynes', 'Alcohols', 'Carboxylic Acids', 'Polymers', 'Petroleum & Fuels', 'Organic Chemistry Practice']],
    [7, 'Physical Chemistry', '🌡️', 'physical', 'content', ['States of Matter', 'Gas Laws', 'Solutions', 'Solubility', 'Reaction Rates', 'Chemical Equilibrium', 'Energy Changes', 'Electrolysis']],
    [8, 'Environmental & Industrial Chemistry', '🏭', 'environmental', 'content', ['Air Pollution', 'Water Treatment', 'Corrosion', 'Fertilizers', 'Industrial Processes', 'Alloys', 'Green Chemistry', 'Environmental Conservation']],
    [9, 'Practical Chemistry & Examination Practice', '🔬', 'practical', 'content', ['Laboratory Apparatus', 'Qualitative Analysis', 'Quantitative Analysis', 'Identification of Gases', 'Salt Analysis', 'Practical Experiments', 'Past WAEC Questions', 'Mock Practical Examination']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Chemistry Revision', 'Objective Test Practice', 'Essay Question Practice', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments only; NOT bare "Tests".
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Chemistry exam', atomic: 'atomic structure & the periodic table', bonding: 'chemical bonding', reactions: 'chemical reactions & calculations', acids: 'acids, bases & salts', organic: 'organic chemistry', physical: 'physical chemistry', environmental: 'environmental & industrial chemistry', practical: 'practical chemistry', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    atomic: '<h4>📥 Guide: Atomic Structure & Periodic Table</h4><ul><li><strong>Sub-atomic particles:</strong> proton (+1, mass 1), neutron (0, mass 1), electron (−1, ~0).</li><li><strong>Atomic number (Z):</strong> number of protons; <strong>mass number (A):</strong> protons + neutrons.</li><li><strong>Isotopes:</strong> same Z, different A (e.g. ¹²C and ¹⁴C).</li><li><strong>Electron config:</strong> shells fill 2, 8, 8… (e.g. Na = 2,8,1).</li><li><strong>Periodic trends:</strong> across a period atomic radius decreases; down a group it increases.</li></ul>',
    bonding: '<h4>📥 Guide: Chemical Bonding</h4><ul><li><strong>Ionic:</strong> transfer of electrons (metal + non-metal), e.g. NaCl.</li><li><strong>Covalent:</strong> sharing of electrons (non-metals), e.g. H₂O.</li><li><strong>Metallic:</strong> lattice of ions in a "sea" of delocalised electrons.</li><li><strong>Valency:</strong> combining power; use it to write formulae (e.g. Al³⁺ + O²⁻ → Al₂O₃).</li><li><strong>Oxidation number:</strong> charge if all bonds were ionic; used in redox.</li></ul>',
    reactions: '<h4>📥 Formula Sheet: Reactions & Calculations</h4><ul><li><strong>Mole:</strong> moles = mass ÷ molar mass; number of particles = moles × 6.02×10²³.</li><li><strong>Concentration:</strong> c = moles ÷ volume (mol/dm³).</li><li><strong>Balancing:</strong> equalise atoms of each element on both sides.</li><li><strong>Molar gas volume:</strong> 22.4 dm³ at s.t.p (24 dm³ at r.t.p).</li><li><strong>% yield:</strong> (actual ÷ theoretical) × 100.</li></ul>',
    acids: '<h4>📥 Guide: Acids, Bases & Salts</h4><ul><li><strong>Acids:</strong> pH < 7, turn blue litmus red, release H⁺.</li><li><strong>Bases/alkalis:</strong> pH > 7, turn red litmus blue, release OH⁻.</li><li><strong>Neutralization:</strong> acid + base → salt + water.</li><li><strong>Titration:</strong> use a pipette, burette and indicator to find concentration.</li><li><strong>c₁V₁/n₁ = c₂V₂/n₂</strong> relates the two solutions at the end point.</li></ul>',
    organic: '<h4>📥 Guide: Organic Chemistry</h4><ul><li><strong>Alkanes:</strong> CₙH₂ₙ₊₂ (saturated), e.g. methane CH₄.</li><li><strong>Alkenes:</strong> CₙH₂ₙ (C=C double bond), e.g. ethene C₂H₄.</li><li><strong>Alkynes:</strong> CₙH₂ₙ₋₂ (C≡C triple bond).</li><li><strong>Alcohols:</strong> –OH group; <strong>carboxylic acids:</strong> –COOH.</li><li><strong>Test for unsaturation:</strong> alkenes decolourise bromine water.</li></ul>',
    physical: '<h4>📥 Formula Sheet: Physical Chemistry</h4><ul><li><strong>Boyle’s law:</strong> P₁V₁ = P₂V₂ (constant T).</li><li><strong>Charles’ law:</strong> V₁/T₁ = V₂/T₂ (constant P, T in kelvin).</li><li><strong>General gas equation:</strong> P₁V₁/T₁ = P₂V₂/T₂.</li><li><strong>Rate of reaction</strong> increases with concentration, temperature, surface area and a catalyst.</li><li><strong>Electrolysis:</strong> cations → cathode (reduction); anions → anode (oxidation).</li></ul>',
    environmental: '<h4>📥 Guide: Environmental & Industrial Chemistry</h4><ul><li><strong>Air pollutants:</strong> CO, CO₂, SO₂, NOₓ; causes and effects.</li><li><strong>Water treatment:</strong> sedimentation, filtration, chlorination.</li><li><strong>Corrosion (rusting):</strong> needs oxygen and water; prevent by coating/galvanising.</li><li><strong>Alloys:</strong> mixtures of metals (e.g. steel, brass) with improved properties.</li><li><strong>Green chemistry:</strong> reduce waste, use safer processes, recycle.</li></ul>',
    practical: '<h4>📥 Practical Manual: Chemistry Lab Skills</h4><ul><li><strong>Apparatus:</strong> pipette, burette, conical flask, measuring cylinder — know their uses.</li><li><strong>Qualitative analysis:</strong> test for cations/anions; record observation → inference.</li><li><strong>Gas tests:</strong> O₂ relights a glowing splint; CO₂ turns limewater milky; H₂ gives a "pop".</li><li><strong>Titration:</strong> record readings to 2 d.p; take concordant titres.</li><li><strong>Always</strong> state observation, inference and conclusion clearly.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'atomic' || /Atomic|Isotopes|Electron|Periodic|Mole Concept/i.test(name)) return TEMPLATES.atomic;
    if (skill === 'bonding' || /Ionic|Covalent|Metallic|Valency|Oxidation/i.test(name)) return TEMPLATES.bonding;
    if (skill === 'reactions' || /Equations|Mole Calculations|Stoichiometry|Yield|Empirical/i.test(name)) return TEMPLATES.reactions;
    if (skill === 'acids' || /Acids|Bases|pH|Neutralization|Titration|Indicators/i.test(name)) return TEMPLATES.acids;
    if (skill === 'organic' || /Alkanes|Alkenes|Alkynes|Alcohols|Hydrocarbons|Carboxylic|Polymers/i.test(name)) return TEMPLATES.organic;
    if (skill === 'physical' || /Gas Laws|Reaction Rates|Equilibrium|Electrolysis|States of Matter/i.test(name)) return TEMPLATES.physical;
    if (skill === 'environmental' || /Pollution|Water Treatment|Corrosion|Alloys|Green Chemistry/i.test(name)) return TEMPLATES.environmental;
    if (skill === 'practical' || /Apparatus|Qualitative|Quantitative|Identification of Gases|Salt Analysis/i.test(name)) return TEMPLATES.practical;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Chemistry skills';
    var focus = position % 2 ? 'clear principles, worked examples and timed practice' : 'understanding the chemistry and applying it to WAEC-style questions and calculations';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Chemistry · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and worked examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the concept/calculation for <em>' + esc(name) + '</em> and how WAEC tests it in objective, essay and practical papers.</li>' +
      '<li>Study a worked example step by step, noting equations, units and significant figures.</li>' +
      '<li>Practise with past-question-style items, showing all working and using your scientific calculator correctly.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Solve one WAEC past question on <em>' + esc(name) + '</em> and check every step against a worked solution.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Work/explain one WAEC-style item on <em>' + esc(name) + '</em>, showing all steps.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and add the key equation/result to your chemistry formula notebook.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Chemistry preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical activity carefully, record observation → inference → conclusion, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Chemistry exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Chemistry usually includes:', opts: ['Only an oral test', 'Objective, essay/theory and a practical (alternative) paper', 'One essay only', 'Practical only'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'A basic laboratory safety rule is to:', opts: ['Taste chemicals', 'Wear protective equipment and follow instructions', 'Point test tubes at people', 'Ignore labels'], correct: 1, exp: 'Follow safety rules and use protective equipment.' },
      { q: 'The scientific method begins with:', opts: ['A conclusion', 'Observation and a question, then a hypothesis', 'A certificate', 'Guessing'], correct: 1, exp: 'Observe → question → hypothesis → experiment → conclusion.' },
      { q: 'In the essay paper you gain marks mainly for:', opts: ['Neatness only', 'Correct chemistry, balanced equations and shown working', 'Length only', 'Guessing'], correct: 1, exp: 'Accurate chemistry, equations and working earn marks.' },
      { q: 'A good study strategy for chemistry is to:', opts: ['Only read once', 'Practise calculations and equations with past questions', 'Skip practicals', 'Memorise nothing'], correct: 1, exp: 'Active practice of calculations and equations works best.' }
    ],
    atomic: [
      { q: 'The particle with a negative charge is the:', opts: ['Proton', 'Neutron', 'Electron', 'Nucleus'], correct: 2, exp: 'Electrons carry a −1 charge.' },
      { q: 'The atomic number of an element is the number of:', opts: ['Neutrons', 'Protons', 'Electrons + neutrons', 'Shells'], correct: 1, exp: 'Atomic number (Z) = number of protons.' },
      { q: 'Isotopes are atoms with the same number of protons but different numbers of:', opts: ['Electrons', 'Neutrons', 'Shells', 'Charges'], correct: 1, exp: 'Isotopes differ in neutron number (mass number).' },
      { q: 'The electron configuration of sodium (Na, Z=11) is:', opts: ['2,8,1', '2,8,8', '8,2,1', '2,9'], correct: 0, exp: 'Shells fill 2, 8, 1 for 11 electrons.' },
      { q: 'Across a period (left → right), atomic radius generally:', opts: ['Increases', 'Decreases', 'Stays constant', 'Doubles'], correct: 1, exp: 'Nuclear charge pulls electrons in, so radius decreases.' },
      { q: 'One mole of any substance contains about:', opts: ['6.02 × 10²³ particles', '100 particles', '10 particles', '1 particle'], correct: 0, exp: 'Avogadro’s number is 6.02 × 10²³.' }
    ],
    bonding: [
      { q: 'Ionic bonding involves the:', opts: ['Sharing of electrons', 'Transfer of electrons', 'Sea of electrons', 'No electrons'], correct: 1, exp: 'Ionic bonds form by electron transfer (metal + non-metal).' },
      { q: 'A covalent bond is formed by:', opts: ['Transfer of electrons', 'Sharing of electrons', 'Losing protons', 'Gaining neutrons'], correct: 1, exp: 'Covalent bonds share electron pairs between non-metals.' },
      { q: 'The formula of aluminium oxide (Al³⁺, O²⁻) is:', opts: ['AlO', 'Al₂O₃', 'AlO₂', 'Al₃O₂'], correct: 1, exp: 'Cross the valencies: Al₂O₃.' },
      { q: 'Metallic bonding is best described as:', opts: ['Shared pairs only', 'Positive ions in a sea of delocalised electrons', 'Ionic lattice', 'Single atoms'], correct: 1, exp: 'Delocalised electrons explain conductivity and malleability.' },
      { q: 'The oxidation number of oxygen in most compounds is:', opts: ['+1', '−2', '0', '+2'], correct: 1, exp: 'Oxygen is usually −2 (except peroxides/F compounds).' },
      { q: 'Valency is the:', opts: ['Mass of an atom', 'Combining power of an element', 'Number of neutrons', 'Charge of a neutron'], correct: 1, exp: 'Valency is the combining power used to write formulae.' }
    ],
    reactions: [
      { q: 'Balancing an equation ensures the same number of ___ on both sides:', opts: ['Molecules', 'Atoms of each element', 'Coefficients', 'Charges only'], correct: 1, exp: 'Mass is conserved: atoms balance on both sides.' },
      { q: 'Moles = ', opts: ['mass × molar mass', 'mass ÷ molar mass', 'molar mass ÷ mass', 'mass + molar mass'], correct: 1, exp: 'n = mass ÷ molar mass.' },
      { q: 'How many moles are in 36 g of water (H₂O, molar mass 18)?', opts: ['1', '2', '18', '36'], correct: 1, exp: '36 ÷ 18 = 2 moles.' },
      { q: 'The molar volume of a gas at s.t.p is:', opts: ['22.4 dm³', '1 dm³', '100 dm³', '6.02 dm³'], correct: 0, exp: 'One mole of gas occupies 22.4 dm³ at s.t.p.' },
      { q: 'Percentage yield = (actual ÷ theoretical) × ', opts: ['10', '100', '1000', '1'], correct: 1, exp: '% yield = actual/theoretical × 100.' },
      { q: 'In "2H₂ + O₂ → 2H₂O", the coefficient of water is:', opts: ['1', '2', '3', '4'], correct: 1, exp: 'The balanced equation has 2 H₂O.' }
    ],
    acids: [
      { q: 'An acid has a pH that is:', opts: ['Exactly 7', 'Less than 7', 'Greater than 7', 'Always 14'], correct: 1, exp: 'Acids have pH < 7.' },
      { q: 'Acid + base →', opts: ['Salt + water', 'Gas only', 'Metal', 'Nothing'], correct: 0, exp: 'Neutralization gives a salt and water.' },
      { q: 'Litmus turns ___ in acid:', opts: ['Blue', 'Red', 'Green', 'Colourless'], correct: 1, exp: 'Acids turn blue litmus red.' },
      { q: 'The apparatus used to measure the volume of acid accurately in titration is a:', opts: ['Beaker', 'Burette/pipette', 'Test tube', 'Watch glass'], correct: 1, exp: 'Pipettes and burettes give accurate volumes.' },
      { q: 'A substance that changes colour to show the end point is a(n):', opts: ['Catalyst', 'Indicator', 'Salt', 'Solvent'], correct: 1, exp: 'Indicators signal the end point of a titration.' },
      { q: 'Bases (alkalis) release which ion in water?', opts: ['H⁺', 'OH⁻', 'Cl⁻', 'Na⁺'], correct: 1, exp: 'Alkalis release hydroxide (OH⁻) ions.' }
    ],
    organic: [
      { q: 'The general formula of alkanes is:', opts: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'], correct: 1, exp: 'Alkanes are saturated: CₙH₂ₙ₊₂.' },
      { q: 'Alkenes contain a:', opts: ['Single bond only', 'Carbon–carbon double bond', 'Triple bond', 'No carbon'], correct: 1, exp: 'Alkenes have a C=C double bond (CₙH₂ₙ).' },
      { q: 'The functional group of alcohols is:', opts: ['–COOH', '–OH', '–CHO', '–NH₂'], correct: 1, exp: 'Alcohols contain the hydroxyl (–OH) group.' },
      { q: 'Alkenes decolourise ___ , a test for unsaturation:', opts: ['Water', 'Bromine water', 'Limewater', 'Litmus'], correct: 1, exp: 'C=C bonds add across bromine, decolourising it.' },
      { q: 'The functional group of carboxylic acids is:', opts: ['–OH', '–COOH', '–C=C–', '–O–'], correct: 1, exp: 'Carboxylic acids contain –COOH.' },
      { q: 'Polymers are made from many small units called:', opts: ['Isotopes', 'Monomers', 'Ions', 'Salts'], correct: 1, exp: 'Monomers join to form polymers (polymerisation).' }
    ],
    physical: [
      { q: 'Boyle’s law states that at constant temperature, P is:', opts: ['Directly proportional to V', 'Inversely proportional to V', 'Equal to V', 'Independent of V'], correct: 1, exp: 'P₁V₁ = P₂V₂ at constant T.' },
      { q: 'The rate of a reaction generally increases when you:', opts: ['Lower temperature', 'Increase concentration/temperature or add a catalyst', 'Remove the reactants', 'Cool it'], correct: 1, exp: 'Higher concentration, temperature, surface area and catalysts speed reactions.' },
      { q: 'In electrolysis, cations move to the:', opts: ['Anode', 'Cathode', 'Salt bridge', 'Beaker'], correct: 1, exp: 'Positive cations go to the negative cathode (reduction).' },
      { q: 'A catalyst is a substance that:', opts: ['Is used up', 'Speeds up a reaction without being used up', 'Stops reactions', 'Changes the products'], correct: 1, exp: 'Catalysts lower activation energy and are not consumed.' },
      { q: 'Charles’ law relates volume and temperature at constant:', opts: ['Pressure', 'Mass only', 'Colour', 'Density'], correct: 0, exp: 'V₁/T₁ = V₂/T₂ at constant pressure (T in kelvin).' },
      { q: 'At chemical equilibrium the forward and reverse rates are:', opts: ['Zero', 'Equal', 'Increasing', 'Decreasing'], correct: 1, exp: 'Dynamic equilibrium: forward rate = reverse rate.' }
    ],
    environmental: [
      { q: 'A common gas that causes acid rain is:', opts: ['Oxygen', 'Sulphur dioxide (SO₂)', 'Nitrogen', 'Helium'], correct: 1, exp: 'SO₂ and NOₓ dissolve to form acid rain.' },
      { q: 'A step in water treatment is:', opts: ['Adding pollutants', 'Filtration and chlorination', 'Boiling only', 'Freezing'], correct: 1, exp: 'Sedimentation, filtration and chlorination purify water.' },
      { q: 'Rusting of iron requires:', opts: ['Only heat', 'Oxygen and water', 'Only nitrogen', 'Salt only'], correct: 1, exp: 'Rusting needs oxygen and water; prevent by coating.' },
      { q: 'An alloy is a:', opts: ['Pure metal', 'Mixture of a metal with other elements', 'Non-metal', 'Gas'], correct: 1, exp: 'Alloys (e.g. steel, brass) improve metal properties.' },
      { q: 'Green chemistry aims to:', opts: ['Increase waste', 'Reduce waste and use safer processes', 'Pollute more', 'Waste energy'], correct: 1, exp: 'Green chemistry reduces waste and hazards.' },
      { q: 'Galvanising protects iron by coating it with:', opts: ['Copper', 'Zinc', 'Gold', 'Carbon'], correct: 1, exp: 'A zinc coating protects iron from rusting.' }
    ],
    practical: [
      { q: 'A pipette is used to:', opts: ['Heat solutions', 'Measure a fixed accurate volume of liquid', 'Store gases', 'Weigh solids'], correct: 1, exp: 'Pipettes deliver a fixed, accurate volume.' },
      { q: 'The gas that turns limewater milky is:', opts: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'], correct: 1, exp: 'CO₂ turns limewater milky.' },
      { q: 'Hydrogen gas gives which result with a lighted splint?', opts: ['Relights it', 'A "pop" sound', 'Milky colour', 'No change'], correct: 1, exp: 'Hydrogen burns with a squeaky "pop".' },
      { q: 'In qualitative analysis you record:', opts: ['Only the answer', 'Observation and inference', 'Your opinion', 'Nothing'], correct: 1, exp: 'State observation → inference for each test.' },
      { q: 'Concordant titres are readings that are:', opts: ['Very different', 'Within about 0.1 cm³ of each other', 'Always 10 cm³', 'Ignored'], correct: 1, exp: 'Concordant titres agree closely and are averaged.' },
      { q: 'Oxygen gas relights a:', opts: ['Glowing splint', 'Wet splint', 'Cold rod', 'Piece of paper only'], correct: 0, exp: 'Oxygen relights a glowing splint.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In calculation questions you should always:', opts: ['Write the answer only', 'Show your working and include units', 'Skip the method', 'Round too early'], correct: 1, exp: 'Method and units earn marks; avoid early rounding.' },
      { q: 'Balanced chemical equations in answers:', opts: ['Waste time', 'Earn marks and clarify your chemistry', 'Are banned', 'Are optional decoration'], correct: 1, exp: 'Correct balanced equations gain marks.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', atomic: 'atomic', bonding: 'bonding', reactions: 'reactions', acids: 'acids', organic: 'organic', physical: 'physical', environmental: 'environmental', practical: 'practical', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.atomic, BANK.bonding, BANK.reactions, BANK.acids, BANK.organic, BANK.physical, BANK.environmental, BANK.practical, BANK.examstrat);
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
        var qid = 'wc-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Chemistry Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Chemistry Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical chemistry and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Practical Examination/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wc-m' + num + '-a' + flat;
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
      var pqid = 'wc-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Chemistry: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Chemistry preparation course aligned to the WAEC syllabus: atomic structure & the periodic table, chemical bonding, reactions & calculations, acids/bases/salts, organic chemistry, physical chemistry, environmental & industrial chemistry, practical chemistry, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧪',
    gradient: 'linear-gradient(135deg,#7A2FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Chemistry examination with concise lessons, worked calculations, practical skills and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-CHEM',
    learn: [
      'Understand the WAEC Chemistry exam structure and marking scheme',
      'Master atomic structure, the periodic table and the mole concept',
      'Explain ionic, covalent and metallic bonding and write formulae',
      'Balance equations and solve mole, stoichiometry and gas-law calculations',
      'Work with acids, bases, salts, titration and organic chemistry',
      'Build practical laboratory skills and apply exam techniques with mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A non-programmable scientific calculator', 'A chemistry notebook and a personal formula sheet', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Chemistry preparation course, organised into ten modules aligned to the WAEC Chemistry syllabus and examination structure (objective, theory/essay and practical).',
      'Every content lesson has a video and printable notes with worked examples; downloadable resources include formula sheets, a practical lab manual and topic revision guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-chemistry',
    _wassceChemFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-CHEMISTRY] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
