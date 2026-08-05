/* TIH Complete WASSCE Geography Preparation Course.
   Builds COURSES_DB['wassce-geography'] directly with the full 10-module WAEC
   Geography structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Geography syllabus, with strong map-reading and
   Liberia/West-Africa regional coverage. Modelled on
   wassce-history-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-geography';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceGeoFull) return;

  // No dedicated WASSCE Geography videos exist; reuse the vetted English-domain
  // pool (reading/map/essay skills) plus economics videos for the human/economic
  // and regional modules. Content, notes and quizzes are fully geography-specific.
  var VIDEOS = {
    intro: ['uINcnwJX2PA', 'Z9AqetXxkRA'],
    maps: ['U_c-ZkV460E', 'uINcnwJX2PA'],
    physical: ['uINcnwJX2PA', 'U_c-ZkV460E'],
    climate: ['Z9AqetXxkRA', 'uINcnwJX2PA'],
    human: ['hHqoC97hFXY', 'VrmgfY7sP08'],
    environmental: ['LHXcZ-dtsXY', 'uINcnwJX2PA'],
    regional: ['LHXcZ-dtsXY', 'hHqoC97hFXY'],
    fieldwork: ['U_c-ZkV460E', 'Z9AqetXxkRA'],
    exampractice: ['Z9AqetXxkRA', 'U_c-ZkV460E'],
    final: ['uINcnwJX2PA', 'Z9AqetXxkRA']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Geography', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Geography Exam', 'Exam Structure & Marking Scheme', 'What is Geography?', 'Branches of Geography', 'Study Strategies']],
    [2, 'Map Reading & Practical Geography', '🗺️', 'maps', 'content', ['Types of Maps', 'Scale and Distance', 'Direction and Bearings', 'Grid References', 'Contour Lines', 'Cross Sections', 'Relief Features', 'Map Interpretation']],
    [3, 'Physical Geography', '🌋', 'physical', 'content', ['The Earth and the Solar System', 'Rocks and Minerals', 'Weathering', 'Erosion and Deposition', 'Landforms', 'Earthquakes and Volcanoes', 'Rivers and Drainage Systems', 'Coastal Features']],
    [4, 'Climate & Vegetation', '🌦️', 'climate', 'content', ['Weather and Climate', 'Elements of Weather', 'Climate Types', 'Climate Change', 'Natural Vegetation', 'Forests', 'Grasslands', 'Desert Vegetation']],
    [5, 'Human & Economic Geography', '🏙️', 'human', 'content', ['Population', 'Settlement Patterns', 'Urbanization', 'Agriculture', 'Mining', 'Manufacturing Industries', 'Trade and Commerce', 'Transportation and Communication']],
    [6, 'Environmental Geography', '♻️', 'environmental', 'content', ['Natural Resources', 'Environmental Pollution', 'Deforestation', 'Desertification', 'Soil Conservation', 'Environmental Protection', 'Sustainable Development', 'Disaster Management']],
    [7, 'Regional Geography', '🌍', 'regional', 'content', ['Geography of West Africa', 'Geography of Liberia', "Africa's Physical Features", "Africa's Population", "Africa's Economy", 'Major World Regions', 'International Trade', 'Global Environmental Issues']],
    [8, 'Fieldwork & Practical Skills', '🧑‍🔬', 'fieldwork', 'content', ['Introduction to Fieldwork', 'Data Collection Methods', 'Observation Techniques', 'Survey Methods', 'Data Presentation', 'Graphs and Charts', 'Fieldwork Report Writing', 'Practical Exercises']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Map Reading Practice', 'Data Interpretation', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Geography Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  // "Presentation" is intentionally excluded so "Data Presentation" (a data-skills
  // topic) stays a content lesson rather than a project brief.
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Geography exam', maps: 'map reading & practical geography', physical: 'physical geography', climate: 'climate & vegetation', human: 'human & economic geography', environmental: 'environmental geography', regional: 'regional geography', fieldwork: 'fieldwork & practical skills', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    maps: '<h4>📥 Guide: Map Reading Essentials</h4><ul><li><strong>Scale:</strong> e.g. 1:50,000 means 1 cm on the map = 50,000 cm (0.5 km) on the ground.</li><li><strong>Distance:</strong> measure with a ruler/string, then convert using the scale.</li><li><strong>Direction:</strong> compass points; bearings measured clockwise from North (000°–360°).</li><li><strong>Grid references:</strong> read EASTINGS first, then NORTHINGS ("along the corridor, up the stairs").</li><li><strong>Contours:</strong> lines joining points of equal height; close contours = steep slope.</li></ul>',
    physical: '<h4>📥 Guide: Physical Geography</h4><ul><li><strong>Rock types:</strong> igneous, sedimentary and metamorphic.</li><li><strong>Weathering:</strong> physical, chemical and biological breakdown of rock in place.</li><li><strong>Erosion</strong> wears away and transports material; <strong>deposition</strong> lays it down.</li><li><strong>Rivers:</strong> source → upper/middle/lower course → mouth; features include V-valleys, meanders, deltas.</li><li><strong>Vulcanicity:</strong> earthquakes and volcanoes occur mainly at plate boundaries.</li></ul>',
    climate: '<h4>📥 Guide: Climate & Vegetation</h4><ul><li><strong>Weather</strong> is day-to-day; <strong>climate</strong> is the average over ~30 years.</li><li><strong>Elements:</strong> temperature, rainfall, humidity, pressure, wind, sunshine.</li><li><strong>Equatorial climate:</strong> hot and wet all year → rainforest.</li><li><strong>Savanna:</strong> wet and dry seasons → grassland with scattered trees.</li><li><strong>Vegetation belts</strong> change with rainfall from forest to grassland to desert.</li></ul>',
    human: '<h4>📥 Guide: Human & Economic Geography</h4><ul><li><strong>Population density</strong> = people ÷ area (persons per km²).</li><li><strong>Settlement patterns:</strong> nucleated, dispersed and linear.</li><li><strong>Urbanization:</strong> the growth of towns/cities and rural–urban migration.</li><li><strong>Economic activities:</strong> primary (farming/mining), secondary (manufacturing), tertiary (services).</li><li><strong>Transport</strong> and trade link producers and markets.</li></ul>',
    environmental: '<h4>📥 Guide: Environmental Geography</h4><ul><li><strong>Deforestation:</strong> clearing forests → erosion, loss of biodiversity, climate impact.</li><li><strong>Desertification:</strong> productive land turning to desert (drought + poor land use).</li><li><strong>Soil conservation:</strong> terracing, contour ploughing, afforestation, crop rotation.</li><li><strong>Sustainable development:</strong> meeting present needs without harming the future.</li><li><strong>Disaster management:</strong> preparedness, response and recovery.</li></ul>',
    regional: '<h4>📥 Guide: Regional Geography (Liberia & West Africa)</h4><ul><li><strong>Liberia:</strong> on the West African coast; capital Monrovia; tropical, high rainfall; rubber, iron ore and timber.</li><li><strong>West Africa</strong> lies mostly within the tropics; the climate belts run east–west.</li><li><strong>Major rivers:</strong> Niger, Senegal, Volta; the Sahara lies to the north.</li><li><strong>Economy:</strong> agriculture, mining and trade dominate; ECOWAS aids regional trade.</li><li><strong>Population</strong> is unevenly distributed, concentrated near coasts and fertile land.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'maps' || /Scale|Bearings|Grid References|Contour|Relief|Map/i.test(name)) return TEMPLATES.maps;
    if (skill === 'physical' || /Rocks|Weathering|Erosion|Landforms|Volcanoes|Rivers|Coastal/i.test(name)) return TEMPLATES.physical;
    if (skill === 'climate' || /Weather|Climate|Vegetation|Forests|Grasslands|Desert/i.test(name)) return TEMPLATES.climate;
    if (skill === 'human' || /Population|Settlement|Urbanization|Agriculture|Mining|Manufacturing|Trade/i.test(name)) return TEMPLATES.human;
    if (skill === 'environmental' || /Deforestation|Desertification|Soil Conservation|Sustainable|Pollution|Disaster/i.test(name)) return TEMPLATES.environmental;
    if (skill === 'regional' || /West Africa|Liberia|Africa's|World Regions/i.test(name)) return TEMPLATES.regional;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Geography skills';
    var focus = position % 2 ? 'clear definitions, diagrams/maps and timed practice' : 'understanding the concept and applying it to WAEC-style questions and map work';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Geography · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, diagrams and maps, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective, theory and practical (map) papers.</li>' +
      '<li>Study a labelled diagram/map and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items, using sketches, maps and real West African examples.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, using a diagram or map where helpful, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Draw and label a diagram/map or define <em>' + esc(name) + '</em> in your geography notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Geography preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this activity — interpret the map, analyse the data, or carry out the fieldwork task — then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Geography exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Geography is best described as the study of:', opts: ['Only rocks', 'The earth’s surface and the relationship between people and their environment', 'Only history', 'Only maths'], correct: 1, exp: 'Geography studies the earth and human–environment interaction.' },
      { q: 'The two main branches of geography are:', opts: ['Physical and human geography', 'Past and present', 'Land and sea only', 'Hot and cold'], correct: 0, exp: 'Geography divides into physical and human geography.' },
      { q: 'WASSCE Geography usually includes:', opts: ['Only an oral test', 'Objective, theory and a practical/map-reading paper', 'One essay only', 'A lab practical only'], correct: 1, exp: 'It has objective, theory and practical (map) components.' },
      { q: 'In the theory paper, marks are earned mainly for:', opts: ['Length only', 'Accurate points, definitions and labelled diagrams', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Clear points and diagrams score marks.' },
      { q: 'A good study strategy for geography is to:', opts: ['Ignore maps', 'Practise map work and draw labelled diagrams', 'Only memorise definitions', 'Skip revision'], correct: 1, exp: 'Map practice and diagrams are essential in geography.' }
    ],
    maps: [
      { q: 'On a 1:50,000 map, 1 cm represents:', opts: ['50 m', '500 m (0.5 km)', '5 km', '50 km'], correct: 1, exp: '50,000 cm = 500 m = 0.5 km.' },
      { q: 'Bearings are measured clockwise from:', opts: ['South', 'North', 'East', 'West'], correct: 1, exp: 'Bearings run clockwise from North (000°–360°).' },
      { q: 'When giving a grid reference you read:', opts: ['Northings then eastings', 'Eastings first, then northings', 'Any order', 'Only eastings'], correct: 1, exp: 'Read eastings (along) before northings (up).' },
      { q: 'Contour lines join points of equal:', opts: ['Temperature', 'Height (elevation)', 'Rainfall', 'Population'], correct: 1, exp: 'Contours join points of equal height.' },
      { q: 'Contour lines that are very close together show:', opts: ['A gentle slope', 'A steep slope', 'Flat land', 'A river'], correct: 1, exp: 'Closely spaced contours indicate a steep gradient.' },
      { q: 'A map’s scale tells you the relationship between map distance and:', opts: ['Time', 'Ground distance', 'Temperature', 'Population'], correct: 1, exp: 'Scale relates map distance to real ground distance.' }
    ],
    physical: [
      { q: 'Rocks formed from cooled molten magma are:', opts: ['Sedimentary', 'Igneous', 'Metamorphic', 'Mineral'], correct: 1, exp: 'Igneous rocks form when magma/lava cools and solidifies.' },
      { q: 'The breakdown of rock in place, without movement, is:', opts: ['Erosion', 'Weathering', 'Deposition', 'Transport'], correct: 1, exp: 'Weathering breaks rock down in situ.' },
      { q: 'Earthquakes and volcanoes occur mainly at:', opts: ['The centre of continents', 'Plate boundaries', 'The equator only', 'River mouths'], correct: 1, exp: 'Most tectonic activity happens at plate margins.' },
      { q: 'A river typically deposits a fan-shaped landform at its mouth called a:', opts: ['Meander', 'Delta', 'Waterfall', 'Plateau'], correct: 1, exp: 'A delta forms where a river deposits sediment at its mouth.' },
      { q: 'Sedimentary rocks are formed by the:', opts: ['Cooling of magma', 'Compaction of layers of sediment', 'Heat and pressure only', 'Wind only'], correct: 1, exp: 'Sediments compact and cement into sedimentary rock.' },
      { q: 'The wearing away and removal of material by water, wind or ice is:', opts: ['Weathering', 'Erosion', 'Deposition', 'Folding'], correct: 1, exp: 'Erosion wears away and transports material.' }
    ],
    climate: [
      { q: 'The difference between weather and climate is that climate is:', opts: ['Day-to-day conditions', 'The average conditions over a long period (~30 years)', 'The same as weather', 'Only rainfall'], correct: 1, exp: 'Climate is the long-term average; weather is short-term.' },
      { q: 'An equatorial climate is typically:', opts: ['Hot and wet all year', 'Cold and dry', 'Hot and dry', 'Cool and wet'], correct: 0, exp: 'Equatorial regions are hot and wet throughout the year.' },
      { q: 'The natural vegetation of a hot, wet equatorial climate is:', opts: ['Desert', 'Tropical rainforest', 'Tundra', 'Grassland only'], correct: 1, exp: 'Rainforest thrives in hot, wet equatorial climates.' },
      { q: 'The savanna is characterised by:', opts: ['Rain all year', 'Distinct wet and dry seasons with grassland', 'No rain ever', 'Ice'], correct: 1, exp: 'Savanna has wet and dry seasons; grassland with scattered trees.' },
      { q: 'Which is an element of weather?', opts: ['Population', 'Temperature', 'Trade', 'Rock type'], correct: 1, exp: 'Temperature, rainfall, humidity, wind and pressure are weather elements.' },
      { q: 'Desert vegetation is adapted to:', opts: ['Very wet conditions', 'Very dry conditions (drought)', 'Cold snow', 'Deep shade'], correct: 1, exp: 'Desert plants are adapted to scarce water.' }
    ],
    human: [
      { q: 'Population density is calculated as:', opts: ['People × area', 'People ÷ area', 'Area ÷ people', 'Births − deaths'], correct: 1, exp: 'Density = number of people ÷ land area (per km²).' },
      { q: 'A nucleated settlement is one where buildings are:', opts: ['Widely scattered', 'Clustered closely together', 'In a straight line only', 'Underground'], correct: 1, exp: 'Nucleated settlements cluster around a central point.' },
      { q: 'Farming and mining are examples of ___ activities:', opts: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], correct: 0, exp: 'Primary activities extract raw materials.' },
      { q: 'Urbanization refers to the:', opts: ['Growth of towns and cities', 'Decline of trade', 'Movement to farms', 'End of population growth'], correct: 0, exp: 'Urbanization is the growth of urban areas.' },
      { q: 'Manufacturing industries are ___ activities:', opts: ['Primary', 'Secondary', 'Tertiary', 'None'], correct: 1, exp: 'Manufacturing (processing raw materials) is secondary.' },
      { q: 'A key factor influencing settlement location is:', opts: ['Water supply', 'The colour of the sky', 'The alphabet', 'Nothing'], correct: 0, exp: 'Water, relief, soil and transport influence settlement.' }
    ],
    environmental: [
      { q: 'Deforestation is the:', opts: ['Planting of forests', 'Large-scale clearing of forests', 'Growth of deserts only', 'Building of dams'], correct: 1, exp: 'Deforestation is clearing/removal of forest cover.' },
      { q: 'Desertification is the process by which land becomes:', opts: ['More fertile', 'Desert-like/degraded', 'Forested', 'Urban'], correct: 1, exp: 'Desertification turns productive land into desert.' },
      { q: 'A method of soil conservation is:', opts: ['Overgrazing', 'Contour ploughing and afforestation', 'Deforestation', 'Bush burning'], correct: 1, exp: 'Terracing, contour ploughing and afforestation conserve soil.' },
      { q: 'Sustainable development means meeting present needs without:', opts: ['Any development', 'Compromising future generations’ needs', 'Using resources', 'Trading'], correct: 1, exp: 'It balances present and future needs.' },
      { q: 'A major cause of environmental pollution is:', opts: ['Clean energy', 'Industrial and domestic waste', 'Afforestation', 'Conservation'], correct: 1, exp: 'Waste from industry and homes pollutes the environment.' },
      { q: 'Disaster management includes preparedness, response and:', opts: ['Ignoring hazards', 'Recovery', 'Pollution', 'Deforestation'], correct: 1, exp: 'It covers preparedness, response and recovery.' }
    ],
    regional: [
      { q: 'The capital city of Liberia is:', opts: ['Accra', 'Monrovia', 'Lagos', 'Dakar'], correct: 1, exp: 'Monrovia is the capital of Liberia.' },
      { q: 'Liberia is located on the ___ of Africa:', opts: ['East coast', 'West coast', 'North', 'Interior only'], correct: 1, exp: 'Liberia lies on the West African coast.' },
      { q: 'A major export resource of Liberia is:', opts: ['Iron ore and rubber', 'Snow', 'Oil sands', 'Diamonds only'], correct: 0, exp: 'Iron ore, rubber and timber are key Liberian resources.' },
      { q: 'A major river of West Africa is the:', opts: ['Thames', 'Niger', 'Amazon', 'Nile only'], correct: 1, exp: 'The Niger is a major West African river.' },
      { q: 'The large desert to the north of West Africa is the:', opts: ['Kalahari', 'Sahara', 'Gobi', 'Namib'], correct: 1, exp: 'The Sahara lies to the north of West Africa.' },
      { q: 'Most of West Africa lies within the:', opts: ['Polar region', 'Tropics', 'Arctic Circle', 'Temperate zone only'], correct: 1, exp: 'West Africa is largely tropical.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Well-drawn, labelled sketch maps and diagrams:', opts: ['Waste time', 'Earn marks and clarify your answer', 'Are banned', 'Are decoration'], correct: 1, exp: 'Clear labelled diagrams/maps gain marks.' },
      { q: 'In map-reading questions you should always:', opts: ['Guess distances', 'Use the scale and correct grid references', 'Ignore the key', 'Skip measuring'], correct: 1, exp: 'Use the scale, key and grid references accurately.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', maps: 'maps', physical: 'physical', climate: 'climate', human: 'human', environmental: 'environmental', regional: 'regional', fieldwork: 'examstrat', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.maps, BANK.physical, BANK.climate, BANK.human, BANK.environmental, BANK.regional, BANK.examstrat);
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
        var qid = 'wg-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Geography Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Geography Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the map-reading, data and fieldwork practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, an atlas, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wg-m' + num + '-a' + flat;
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
      var pqid = 'wg-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Geography: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Geography preparation course aligned to the WAEC syllabus: map reading & practical geography, physical geography, climate & vegetation, human & economic geography, environmental geography, regional geography (Liberia & West Africa), fieldwork skills, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg,#0B7A5A,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Geography examination with map-reading practice, clear diagrams, regional case studies and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-GEOG',
    learn: [
      'Understand the WAEC Geography exam structure and marking scheme',
      'Read and interpret maps: scale, distance, bearings, grid references and contours',
      'Explain physical geography: rocks, weathering, rivers, volcanoes and landforms',
      'Understand climate, vegetation and human/economic geography',
      'Analyse environmental issues and the regional geography of Liberia and West Africa',
      'Carry out fieldwork skills and apply exam techniques with mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A ruler, protractor and pencil for map work', 'An atlas (or Google Maps/Earth) for regional study', 'A geography notebook for diagrams and revision'],
    about: [
      'This is the complete TIH WASSCE Geography preparation course, organised into ten modules aligned to the WAEC Geography syllabus and examination structure (objective, theory and practical/map-reading).',
      'Every content lesson has a video and printable notes with diagrams and maps; downloadable resources include a map-reading guide, physical- and regional-geography guides and fieldwork guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, an atlas, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-geography',
    _wassceGeoFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-GEOGRAPHY] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
