/* TIH Complete WASSCE Biology Preparation Course.
   Builds COURSES_DB['wassce-biology'] directly with the full 10-module WAEC
   Biology structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC Biology
   syllabus. Modelled on wassce-mathematics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-biology';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceBioFull) return;

  // Vetted WASSCE Biology videos (reused from the WASSCE science subjects).
  var VIDEOS = {
    intro: ['PmmbycoOpdI', '7z4UCQ1FfjY'],
    cell: ['PmmbycoOpdI', 'X60_b2wiGfQ'],
    orglife: ['X60_b2wiGfQ', '7z4UCQ1FfjY'],
    physiology: ['7z4UCQ1FfjY', 'PmmbycoOpdI'],
    plant: ['X60_b2wiGfQ', 'LTXAnxsUYK0'],
    genetics: ['ty-gdbfwqPc', 'PmmbycoOpdI'],
    ecology: ['LTXAnxsUYK0', 'X60_b2wiGfQ'],
    microbes: ['PmmbycoOpdI', '7z4UCQ1FfjY'],
    practical: ['PmmbycoOpdI', 'LTXAnxsUYK0'],
    final: ['ty-gdbfwqPc', '7z4UCQ1FfjY']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Biology', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Biology Exam', 'Exam Structure & Marking Scheme', 'Scientific Method', 'Laboratory Safety', 'Study Strategies']],
    [2, 'Cell Biology', '🔬', 'cell', 'content', ['Characteristics of Living Things', 'Cell Structure', 'Cell Organelles', 'Plant Cells vs. Animal Cells', 'Cell Division (Mitosis & Meiosis)', 'Cell Transport', 'Levels of Organization', 'Cell Biology Practice']],
    [3, 'Organization of Life', '🧫', 'orglife', 'content', ['Tissues', 'Organs', 'Organ Systems', 'Nutrition in Plants', 'Nutrition in Animals', 'Digestion', 'Enzymes', 'Food Tests']],
    [4, 'Human Physiology', '🫀', 'physiology', 'content', ['Circulatory System', 'Respiratory System', 'Excretory System', 'Nervous System', 'Endocrine System', 'Reproductive System', 'Homeostasis', 'Human Health']],
    [5, 'Plant Biology', '🌱', 'plant', 'content', ['Plant Structure', 'Photosynthesis', 'Respiration in Plants', 'Transport in Plants', 'Plant Hormones', 'Plant Reproduction', 'Seed Germination', 'Economic Importance of Plants']],
    [6, 'Genetics & Evolution', '🧬', 'genetics', 'content', ['Introduction to Genetics', 'Chromosomes', 'DNA & Genes', 'Mendelian Inheritance', 'Variation', 'Evolution', 'Natural Selection', 'Biotechnology Basics']],
    [7, 'Ecology & Environment', '🌍', 'ecology', 'content', ['Ecosystems', 'Food Chains & Food Webs', 'Energy Flow', 'Population Ecology', 'Pollution', 'Conservation', 'Natural Resources', 'Climate Change']],
    [8, 'Microorganisms & Diseases', '🦠', 'microbes', 'content', ['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Common Human Diseases', 'Disease Prevention', 'Immunity', 'Vaccination']],
    [9, 'Practical Biology & Examination Practice', '🧪', 'practical', 'content', ['Laboratory Equipment', 'Microscopy', 'Biological Drawings', 'Specimen Identification', 'Practical Experiments', 'Data Interpretation', 'Past Questions', 'Mock Practical Examination']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Biology Revision', 'Objective Test Practice', 'Essay Question Practice', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments only; NOT bare "Tests" (e.g. "Food Tests" is a content lesson).
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Biology exam', cell: 'cell biology', orglife: 'the organization of life', physiology: 'human physiology', plant: 'plant biology', genetics: 'genetics & evolution', ecology: 'ecology & the environment', microbes: 'microorganisms & diseases', practical: 'practical biology', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    cell: '<h4>📥 Diagram Guide: The Cell</h4><ul><li><strong>Animal cell:</strong> cell membrane, cytoplasm, nucleus, mitochondria, ribosomes, ER, Golgi body.</li><li><strong>Plant cell (extra):</strong> cell wall, large vacuole, chloroplasts.</li><li><strong>Mitosis:</strong> produces 2 identical diploid cells (growth/repair).</li><li><strong>Meiosis:</strong> produces 4 non-identical haploid cells (gametes).</li><li><strong>Transport:</strong> diffusion, osmosis (water), active transport (needs energy).</li></ul>',
    orglife: '<h4>📥 Guide: Organization & Nutrition</h4><ul><li><strong>Hierarchy:</strong> cell → tissue → organ → organ system → organism.</li><li><strong>Enzymes:</strong> biological catalysts; affected by temperature and pH.</li><li><strong>Food tests:</strong> starch → iodine (blue-black); reducing sugar → Benedict’s (brick-red); protein → Biuret (purple); fat → emulsion/grease spot.</li><li><strong>Balanced diet:</strong> carbohydrates, proteins, fats, vitamins, minerals, water, fibre.</li></ul>',
    physiology: '<h4>📥 Guide: Human Physiology Systems</h4><ul><li><strong>Circulatory:</strong> heart, arteries, veins, capillaries; transports O₂, CO₂, nutrients.</li><li><strong>Respiratory:</strong> gaseous exchange in the alveoli of the lungs.</li><li><strong>Excretory:</strong> kidneys remove urea; skin and lungs also excrete.</li><li><strong>Nervous:</strong> brain, spinal cord, neurones; the reflex arc.</li><li><strong>Homeostasis:</strong> keeping internal conditions steady (temperature, water, glucose).</li></ul>',
    plant: '<h4>📥 Guide: Plant Biology</h4><ul><li><strong>Photosynthesis:</strong> 6CO₂ + 6H₂O →(light, chlorophyll)→ C₆H₁₂O₆ + 6O₂.</li><li><strong>Respiration:</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy.</li><li><strong>Transport:</strong> xylem carries water/minerals up; phloem carries food (translocation).</li><li><strong>Transpiration:</strong> loss of water vapour from leaves via stomata.</li><li><strong>Germination:</strong> needs water, oxygen and a suitable temperature.</li></ul>',
    genetics: '<h4>📥 Guide: Genetics & Evolution</h4><ul><li><strong>DNA → genes → chromosomes:</strong> genes are units of heredity.</li><li><strong>Alleles:</strong> dominant (capital) and recessive (small) forms of a gene.</li><li><strong>Monohybrid cross:</strong> use a Punnett square; Tt × Tt → 3:1 ratio.</li><li><strong>Variation:</strong> continuous (e.g. height) and discontinuous (e.g. blood group).</li><li><strong>Natural selection:</strong> "survival of the fittest" drives evolution.</li></ul>',
    ecology: '<h4>📥 Guide: Ecology & Environment</h4><ul><li><strong>Food chain:</strong> producer → primary consumer → secondary consumer → decomposer.</li><li><strong>Energy flow:</strong> only ~10% passes to the next trophic level.</li><li><strong>Cycles:</strong> carbon cycle and water cycle recycle materials.</li><li><strong>Pollution:</strong> air, water, land; causes and control measures.</li><li><strong>Conservation:</strong> protecting biodiversity and natural resources.</li></ul>',
    microbes: '<h4>📥 Guide: Microorganisms & Diseases</h4><ul><li><strong>Bacteria:</strong> single-celled; some helpful, some pathogenic.</li><li><strong>Viruses:</strong> non-cellular; reproduce only inside a host cell.</li><li><strong>Fungi & protozoa:</strong> causes of diseases such as ringworm and malaria.</li><li><strong>Prevention:</strong> hygiene, clean water, safe food, vector control.</li><li><strong>Immunity:</strong> the body’s defence; vaccination gives active immunity.</li></ul>',
    practical: '<h4>📥 Practical Manual: Biology Lab Skills</h4><ul><li><strong>Microscope:</strong> know the parts; magnification = eyepiece × objective.</li><li><strong>Biological drawings:</strong> clean lines, no shading, labelled with a ruler, titled, with magnification.</li><li><strong>Specimens:</strong> observe and identify; state visible features.</li><li><strong>Food tests & experiments:</strong> follow the method, record observations, state the conclusion.</li><li><strong>Data interpretation:</strong> read tables/graphs and describe the trend.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'cell' || /Cell|Organelles|Mitosis|Transport/i.test(name)) return TEMPLATES.cell;
    if (skill === 'orglife' || /Enzymes|Food Tests|Digestion|Nutrition/i.test(name)) return TEMPLATES.orglife;
    if (skill === 'physiology' || /Circulatory|Respiratory|Nervous|Homeostasis/i.test(name)) return TEMPLATES.physiology;
    if (skill === 'plant' || /Photosynthesis|Respiration in Plants|Transport in Plants|Germination/i.test(name)) return TEMPLATES.plant;
    if (skill === 'genetics' || /Genetics|DNA|Inheritance|Natural Selection|Evolution/i.test(name)) return TEMPLATES.genetics;
    if (skill === 'ecology' || /Ecosystems|Food Chains|Energy Flow|Pollution|Conservation/i.test(name)) return TEMPLATES.ecology;
    if (skill === 'microbes' || /Bacteria|Viruses|Immunity|Vaccination|Disease/i.test(name)) return TEMPLATES.microbes;
    if (skill === 'practical' || /Microscopy|Biological Drawings|Specimen|Laboratory/i.test(name)) return TEMPLATES.practical;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Biology skills';
    var focus = position % 2 ? 'clear concepts, labelled diagrams and timed practice' : 'understanding the biology and applying it to WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Biology · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and diagrams, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the concept of <em>' + esc(name) + '</em> and how WAEC tests it in objective, essay and practical papers.</li>' +
      '<li>Study a well-labelled diagram and the definitions examiners reward.</li>' +
      '<li>Practise with past-question-style items and describe processes accurately.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em> and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Draw/label or explain <em>' + esc(name) + '</em> in your biology notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Biology preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical activity carefully, record your observations, draw and label where required, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Biology exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'WASSCE Biology usually includes:', opts: ['Only an oral test', 'Objective, essay/theory and a practical (alternative) paper', 'One essay only', 'Practical only'], correct: 1, exp: 'It has objective, theory and practical components.' },
      { q: 'The scientific method begins with:', opts: ['A conclusion', 'Observation and a question, then a hypothesis', 'A certificate', 'Guessing'], correct: 1, exp: 'Observe → question → hypothesis → experiment → conclusion.' },
      { q: 'A basic laboratory safety rule is to:', opts: ['Taste chemicals', 'Wear protective equipment and follow instructions', 'Run in the lab', 'Ignore labels'], correct: 1, exp: 'Follow safety rules and use protective equipment.' },
      { q: 'In the essay paper you gain marks mainly for:', opts: ['Neatness only', 'Correct biological facts, terms and labelled diagrams', 'Length only', 'Guessing'], correct: 1, exp: 'Accurate terminology and clear diagrams earn marks.' },
      { q: 'A good study strategy for biology is to:', opts: ['Only read once', 'Use diagrams, summaries and past-question practice', 'Skip practicals', 'Memorise nothing'], correct: 1, exp: 'Active study with diagrams and practice works best.' }
    ],
    cell: [
      { q: 'A feature found in plant cells but NOT animal cells is the:', opts: ['Nucleus', 'Cell wall', 'Cytoplasm', 'Cell membrane'], correct: 1, exp: 'Plant cells have a cellulose cell wall; animal cells do not.' },
      { q: 'The powerhouse of the cell is the:', opts: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Vacuole'], correct: 1, exp: 'Mitochondria release energy in respiration.' },
      { q: 'Mitosis produces:', opts: ['4 haploid cells', '2 identical diploid cells', '1 cell', 'Gametes only'], correct: 1, exp: 'Mitosis gives two genetically identical diploid cells.' },
      { q: 'Osmosis is the movement of:', opts: ['Solutes', 'Water across a semi-permeable membrane', 'Gases only', 'Proteins'], correct: 1, exp: 'Osmosis is water movement from high to low water potential.' },
      { q: 'The correct order of organization is:', opts: ['Organ → cell → tissue', 'Cell → tissue → organ → system', 'Tissue → cell → organ', 'System → organ → cell → tissue'], correct: 1, exp: 'cell → tissue → organ → organ system → organism.' },
      { q: 'The part that controls cell activities is the:', opts: ['Nucleus', 'Cell wall', 'Vacuole', 'Ribosome'], correct: 0, exp: 'The nucleus controls the cell and contains DNA.' }
    ],
    orglife: [
      { q: 'Enzymes are best described as:', opts: ['Hormones', 'Biological catalysts', 'Vitamins', 'Minerals'], correct: 1, exp: 'Enzymes speed up reactions and are not used up.' },
      { q: 'The food test for starch uses:', opts: ['Benedict’s solution', 'Iodine solution (blue-black)', 'Biuret (purple)', 'Water'], correct: 1, exp: 'Iodine turns blue-black in the presence of starch.' },
      { q: 'Benedict’s solution tests for:', opts: ['Protein', 'Reducing sugar (brick-red)', 'Fat', 'Starch'], correct: 1, exp: 'Reducing sugars give a brick-red precipitate with Benedict’s.' },
      { q: 'A group of similar cells doing the same job is a:', opts: ['Organ', 'Tissue', 'System', 'Cell'], correct: 1, exp: 'A tissue is a group of similar cells with a common function.' },
      { q: 'Digestion in the mouth mainly acts on:', opts: ['Proteins', 'Starch (by amylase)', 'Fats', 'Water'], correct: 1, exp: 'Salivary amylase begins starch digestion in the mouth.' },
      { q: 'The Biuret test detects:', opts: ['Starch', 'Protein (purple/violet)', 'Sugar', 'Fat'], correct: 1, exp: 'Biuret turns purple with protein.' }
    ],
    physiology: [
      { q: 'Gaseous exchange in the lungs occurs in the:', opts: ['Trachea', 'Alveoli', 'Bronchi only', 'Diaphragm'], correct: 1, exp: 'Alveoli are the site of gas exchange.' },
      { q: 'The main organ of excretion of urea is the:', opts: ['Lung', 'Kidney', 'Heart', 'Skin'], correct: 1, exp: 'Kidneys filter blood and excrete urea in urine.' },
      { q: 'Homeostasis means keeping the internal environment:', opts: ['Changing rapidly', 'Relatively constant', 'Empty', 'Cold only'], correct: 1, exp: 'Homeostasis maintains steady internal conditions.' },
      { q: 'Blood is pumped around the body by the:', opts: ['Lungs', 'Heart', 'Liver', 'Kidney'], correct: 1, exp: 'The heart pumps blood through the circulatory system.' },
      { q: 'The basic unit of the nervous system is the:', opts: ['Neurone', 'Nephron', 'Alveolus', 'Villus'], correct: 0, exp: 'The neurone (nerve cell) transmits impulses.' },
      { q: 'Insulin, which lowers blood glucose, is a:', opts: ['Enzyme', 'Hormone', 'Vitamin', 'Gas'], correct: 1, exp: 'Insulin is a hormone from the pancreas.' }
    ],
    plant: [
      { q: 'The word equation for photosynthesis is:', opts: ['glucose + oxygen → CO₂ + water', 'CO₂ + water → glucose + oxygen (light)', 'water → oxygen', 'glucose → starch'], correct: 1, exp: 'CO₂ + water → glucose + oxygen, using light and chlorophyll.' },
      { q: 'Xylem transports mainly:', opts: ['Food', 'Water and mineral salts', 'Oxygen only', 'Hormones'], correct: 1, exp: 'Xylem carries water and minerals upward.' },
      { q: 'Loss of water vapour from leaves is called:', opts: ['Translocation', 'Transpiration', 'Respiration', 'Germination'], correct: 1, exp: 'Transpiration is water loss, mostly through stomata.' },
      { q: 'Seed germination requires water, a suitable temperature and:', opts: ['Light always', 'Oxygen', 'Soil only', 'Fertiliser'], correct: 1, exp: 'Oxygen is needed for respiration during germination.' },
      { q: 'The green pigment that traps light is:', opts: ['Chlorophyll', 'Haemoglobin', 'Melanin', 'Carotene only'], correct: 0, exp: 'Chlorophyll absorbs light for photosynthesis.' },
      { q: 'Phloem is responsible for:', opts: ['Water transport', 'Translocation of food', 'Support only', 'Gas exchange'], correct: 1, exp: 'Phloem translocates sugars made in the leaves.' }
    ],
    genetics: [
      { q: 'The units of heredity are called:', opts: ['Cells', 'Genes', 'Tissues', 'Organs'], correct: 1, exp: 'Genes, carried on chromosomes, are units of inheritance.' },
      { q: 'A cross Tt × Tt gives a phenotypic ratio of about:', opts: ['1:1', '3:1', '9:3:3:1', 'All the same'], correct: 1, exp: 'A monohybrid cross of two heterozygotes gives 3:1.' },
      { q: 'DNA is found mainly in the:', opts: ['Cytoplasm', 'Nucleus', 'Cell wall', 'Vacuole'], correct: 1, exp: 'DNA is located in the nucleus on the chromosomes.' },
      { q: 'A dominant allele is usually written as a:', opts: ['Small letter', 'Capital letter', 'Number', 'Symbol'], correct: 1, exp: 'Dominant alleles are shown with capital letters (e.g. T).' },
      { q: 'Variation that has clear-cut categories (e.g. blood group) is:', opts: ['Continuous', 'Discontinuous', 'None', 'Acquired only'], correct: 1, exp: 'Discontinuous variation has distinct categories.' },
      { q: 'The driving force of evolution described by Darwin is:', opts: ['Random chance only', 'Natural selection', 'Vaccination', 'Photosynthesis'], correct: 1, exp: 'Natural selection favours the better-adapted individuals.' }
    ],
    ecology: [
      { q: 'In a food chain, green plants are the:', opts: ['Consumers', 'Producers', 'Decomposers', 'Predators'], correct: 1, exp: 'Producers make their own food by photosynthesis.' },
      { q: 'Roughly how much energy passes to the next trophic level?', opts: ['100%', 'About 10%', '50%', '0%'], correct: 1, exp: 'Only about 10% of energy is transferred; the rest is lost.' },
      { q: 'Organisms that break down dead matter are:', opts: ['Producers', 'Decomposers', 'Herbivores', 'Carnivores'], correct: 1, exp: 'Decomposers (bacteria, fungi) recycle nutrients.' },
      { q: 'The variety of living organisms in an area is called:', opts: ['Biodiversity', 'Pollution', 'Erosion', 'A niche'], correct: 0, exp: 'Biodiversity is the variety of species present.' },
      { q: 'A major cause of water pollution is:', opts: ['Clean rain', 'Untreated sewage and industrial waste', 'Photosynthesis', 'Conservation'], correct: 1, exp: 'Sewage and waste pollute water bodies.' },
      { q: 'Conservation aims to:', opts: ['Destroy habitats', 'Protect species and natural resources', 'Increase pollution', 'Cut all forests'], correct: 1, exp: 'Conservation protects biodiversity and resources.' }
    ],
    microbes: [
      { q: 'Viruses can only reproduce:', opts: ['On their own', 'Inside a living host cell', 'In soil', 'In water only'], correct: 1, exp: 'Viruses are obligate parasites of host cells.' },
      { q: 'Malaria is caused by a:', opts: ['Bacterium', 'Protozoan (Plasmodium)', 'Fungus', 'Virus'], correct: 1, exp: 'Plasmodium, a protozoan, causes malaria; spread by mosquitoes.' },
      { q: 'Vaccination provides:', opts: ['No protection', 'Active immunity against a disease', 'A cure for all diseases', 'Nutrition'], correct: 1, exp: 'Vaccines stimulate the body to make antibodies (active immunity).' },
      { q: 'A good way to prevent the spread of disease is:', opts: ['Poor hygiene', 'Hand washing and clean water', 'Sharing needles', 'Ignoring symptoms'], correct: 1, exp: 'Hygiene and clean water reduce disease transmission.' },
      { q: 'Ringworm is caused by a:', opts: ['Virus', 'Fungus', 'Bacterium', 'Protozoan'], correct: 1, exp: 'Ringworm is a fungal skin infection.' },
      { q: 'White blood cells help the body by:', opts: ['Carrying oxygen', 'Defending against pathogens', 'Digesting food', 'Making bones'], correct: 1, exp: 'White blood cells provide immunity/defence.' }
    ],
    practical: [
      { q: 'Total magnification of a microscope is:', opts: ['eyepiece + objective', 'eyepiece × objective', 'objective only', 'eyepiece only'], correct: 1, exp: 'Multiply eyepiece and objective magnifications.' },
      { q: 'A good biological drawing should:', opts: ['Be shaded heavily', 'Use clean lines, labels with a ruler, a title and magnification', 'Have no labels', 'Be very small'], correct: 1, exp: 'Clear, labelled, titled line drawings score best.' },
      { q: 'When identifying a specimen you should state:', opts: ['Your opinion', 'Its visible observable features', 'Its price', 'Nothing'], correct: 1, exp: 'Base identification on observable features.' },
      { q: 'When interpreting data in a table you should:', opts: ['Ignore units', 'Describe the trend and use the figures', 'Guess', 'Copy the question'], correct: 1, exp: 'Read the data and describe the trend with evidence.' },
      { q: 'Before a practical you should always:', opts: ['Skip the method', 'Read the method and follow safety rules', 'Taste specimens', 'Rush'], correct: 1, exp: 'Read the instructions and observe safety.' },
      { q: 'In the alternative-to-practical paper, marks are given for:', opts: ['Guesses', 'Accurate observations, drawings and conclusions', 'Long answers only', 'Neat handwriting only'], correct: 1, exp: 'Accurate observation, recording and conclusions earn marks.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Command words like "describe" and "explain":', opts: ['Can be ignored', 'Tell you exactly what the examiner wants', 'Mean the same as "list"', 'Are decoration'], correct: 1, exp: 'Answer according to the command word.' },
      { q: 'Labelled diagrams in biology answers:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are optional decoration'], correct: 1, exp: 'Clear labelled diagrams gain marks.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', cell: 'cell', orglife: 'orglife', physiology: 'physiology', plant: 'plant', genetics: 'genetics', ecology: 'ecology', microbes: 'microbes', practical: 'practical', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.cell, BANK.orglife, BANK.physiology, BANK.plant, BANK.genetics, BANK.ecology, BANK.microbes, BANK.practical, BANK.examstrat);
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
        var qid = 'wb-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Biology Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Biology Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical biology and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Practical Examination/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wb-m' + num + '-a' + flat;
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
      var pqid = 'wb-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Biology: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Biology preparation course aligned to the WAEC syllabus: cell biology, organization of life, human physiology, plant biology, genetics & evolution, ecology, microorganisms & diseases, practical biology, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧬',
    gradient: 'linear-gradient(135deg,#0B7A3A,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Biology examination with concise lessons, labelled diagrams, practical skills and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-BIOL',
    learn: [
      'Understand the WAEC Biology exam structure and marking scheme',
      'Master cell biology, organization of life and human physiology',
      'Explain plant biology, photosynthesis, respiration and transport',
      'Solve genetics problems and explain evolution and natural selection',
      'Understand ecology, microorganisms, diseases and immunity',
      'Build practical laboratory skills and apply exam techniques with mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A biology notebook for diagrams and revision', 'Access to (or simulations of) simple lab activities', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Biology preparation course, organised into ten modules aligned to the WAEC Biology syllabus and examination structure (objective, theory/essay and practical).',
      'Every content lesson has a video and printable notes with labelled diagrams; downloadable resources include diagram guides, a practical lab manual and topic revision sheets. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-biology',
    _wassceBioFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-BIOLOGY] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
