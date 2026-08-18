/* TIH Complete AgriTech & Digital Agriculture Professional Certificate.
   Loader: full curriculum from good build + formal notes, unique videos, unique quizzes. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'agritech';
  if (COURSES_DB[CID] && COURSES_DB[CID]._atFullBuilt && COURSES_DB[CID]._atEnhanced) return;

  var BETTER_VIDEOS = {
    orientation: ['cGCRrj226aY', 'Ghympu2zFYo', '5y6iu4-xdFc'],
    agri: ['w3ps30chvgQ', 'ICv9o3dexrc', '8P72xIx4teA'],
    digital: ['cGCRrj226aY', 'Ghympu2zFYo', '_egBWcIX964'],
    climate: ['i0V2xzEw44Y', 'YGu_09HH-Xo', 'Ze-knAp93Q4', 'MX97GhUKE_8'],
    farmmgmt: ['cwZXdGPxUmg', 'w3ps30chvgQ'],
    precision: ['uF0I7cPruIc', 'l2dw7HUnedg', '0951MdaqzxI', 'hCW5RWqi9L8'],
    iot: ['OL7TNx9RquE', '73CB-L_KNSw', 'vmSn0s7uivk'],
    drones: ['yIVC-Q0cfHw', 'fhTe1APV0Uw', 'a2-qLUJNG-4'],
    data: ['lt5oNi9gVEs', 'F9ML_BBVIj0', 'cGCRrj226aY'],
    agribusiness: ['Ghympu2zFYo', 'cwZXdGPxUmg'],
    marketing: ['Ghympu2zFYo', 'cGCRrj226aY'],
    foodsafety: ['i0V2xzEw44Y', '8P72xIx4teA'],
    finance: ['cwZXdGPxUmg', 'Ghympu2zFYo'],
    ai: ['cGCRrj226aY', 'EWT2nqpMFNw', 'uF0I7cPruIc'],
    policy: ['i0V2xzEw44Y', 'YGu_09HH-Xo'],
    professional: ['cwZXdGPxUmg', 'Ghympu2zFYo'],
    projects: ['uF0I7cPruIc', 'OL7TNx9RquE', 'yIVC-Q0cfHw'],
    career: ['Ghympu2zFYo', 'cGCRrj226aY'],
    capstone: ['uF0I7cPruIc', 'OL7TNx9RquE', 'i0V2xzEw44Y'],
    assessment: ['cGCRrj226aY']
  };

  var TOPIC_DEF = {
    'Welcome to the Course': 'The Complete AgriTech & Digital Agriculture Professional Certificate is a structured programme that trains learners to apply digital tools, data, and modern practices to improve farm productivity, sustainability, and agribusiness performance.',
    'What is AgriTech?': 'AgriTech (agricultural technology) is the use of technology and innovation—including sensors, data, software, machinery, and biotechnology—to improve agricultural production, farm management, and food-system performance.',
    'What is Digital Agriculture?': 'Digital agriculture is the application of digital technologies such as data analytics, connectivity, artificial intelligence, and digital platforms to collect, analyse, and act on farm and value-chain information for better decisions.',
    'Fundamentals of Agriculture': 'Agriculture is the science and practice of cultivating plants and rearing animals for food, fibre, and other products used to sustain and enhance human life.',
    'Soil Science Basics': 'Soil science is the study of soil as a natural resource, including its formation, classification, physical and chemical properties, and its role in supporting plant growth and ecosystem functions.',
    'Food Security': 'Food security exists when all people, at all times, have physical, social and economic access to sufficient, safe and nutritious food that meets their dietary needs and food preferences for an active and healthy life.',
    'Sustainable Agriculture': 'Sustainable agriculture is farming that meets present needs for food and fibre while protecting the environment, conserving resources, and supporting the long-term viability of farms and rural communities.',
    'Digital Agriculture Overview': 'Digital agriculture overview covers the main digital tools and approaches—data, sensors, connectivity, software, and analytics—that transform how farms are planned, monitored, and managed.',
    'Smart Farming Concepts': 'Smart farming is the use of connected devices, data, and automation to monitor and manage farm operations in real time for higher efficiency, productivity, and sustainability.',
    'Precision Agriculture': 'Precision agriculture is a management approach that uses information technology to observe, measure, and respond to variability within fields so that inputs are applied at the right place, time, and rate.',
    'Climate-Smart Farming': 'Climate-smart agriculture is an approach that sustainably increases productivity, strengthens resilience to climate change, and reduces or removes greenhouse gas emissions where possible.',
    'Water Conservation': 'Water conservation in agriculture is the set of practices that reduce water waste and improve the efficiency of water use for crops and livestock while protecting water resources.',
    'Soil Conservation': 'Soil conservation is the protection of soil from erosion and degradation through practices that maintain soil structure, organic matter, and long-term fertility.',
    'Farm Planning': 'Farm planning is the systematic process of setting production and business goals and deciding how land, labour, capital, and technology will be used to achieve them.',
    'Farm Budgeting': 'Farm budgeting is the preparation of detailed estimates of expected income, costs, and profit for a farm enterprise or the whole farm over a defined period.',
    'Record Keeping': 'Farm record keeping is the systematic collection and storage of data on activities, inputs, outputs, costs, and results so that managers can analyse performance and make better decisions.',
    'GPS in Agriculture': 'GPS (Global Positioning System) in agriculture provides accurate location data used for field mapping, guidance of machinery, yield mapping, and variable-rate application of inputs.',
    'Geographic Information Systems (GIS)': 'A Geographic Information System (GIS) is a computer system for capturing, storing, analysing, and displaying spatially referenced data, widely used to map and analyse farm fields and resources.',
    'Remote Sensing': 'Remote sensing is the acquisition of information about the land or crops from a distance, typically using satellites or aircraft and drones, without physical contact with the target.',
    'Variable Rate Technology': 'Variable Rate Technology (VRT) is equipment and software that apply inputs such as seed, fertiliser, or pesticide at different rates across a field according to site-specific needs.',
    'Introduction to IoT': 'The Internet of Things (IoT) in agriculture refers to networks of sensors and devices that collect and exchange farm data—such as soil moisture, weather, and animal activity—to support monitoring and automation.',
    'Smart Sensors': 'Smart sensors are devices that measure environmental or biological conditions on the farm and transmit data for analysis and decision-making, often as part of an IoT system.',
    'Soil Moisture Sensors': 'Soil moisture sensors measure the water content in the soil and help farmers decide when and how much to irrigate, reducing waste and protecting crop health.',
    'Smart Irrigation Systems': 'Smart irrigation systems use sensor data, weather information, and controllers to apply water automatically and efficiently according to crop need.',
    'Drone Technology': 'Agricultural drone technology uses unmanned aerial vehicles equipped with cameras or sensors to map fields, monitor crops, and support precision management from the air.',
    'Crop Monitoring': 'Crop monitoring is the regular observation of plant growth, health, and stress—using visual checks, sensors, or remote sensing—to detect problems early and guide interventions.',
    'Crop Health Assessment': 'Crop health assessment evaluates the condition of plants using indices such as NDVI and other indicators derived from imagery or field data to identify stress, disease, or nutrient issues.',
    'Data Collection': 'Farm data collection is the systematic gathering of information on weather, soil, crops, livestock, inputs, and outputs for analysis and decision support.',
    'Farm Management Software': 'Farm management software is a digital tool that helps plan, record, track, and analyse farm operations, finances, and performance in one system.',
    'Data Visualization': 'Data visualization is the presentation of farm data in charts, maps, and dashboards so that patterns, trends, and problems can be understood quickly.',
    'Agribusiness Fundamentals': 'Agribusiness is the range of businesses and activities involved in producing, processing, distributing, and marketing agricultural products from farm to consumer.',
    'Agricultural Value Chains': 'An agricultural value chain is the full sequence of activities and actors involved in bringing a product from production through processing and distribution to the final consumer.',
    'Food Safety Principles': 'Food safety principles are the practices and standards that prevent contamination of food with hazards that could harm consumers, from farm through processing and distribution.',
    'Good Agricultural Practices (GAP)': 'Good Agricultural Practices (GAP) are a set of principles and methods for on-farm production and post-harvest processes that result in safe and healthy food and non-food agricultural products.',
    'Artificial Intelligence in Agriculture': 'Artificial intelligence in agriculture is the use of computer systems that learn from data to support tasks such as crop diagnosis, yield prediction, pest detection, and automated machinery control.'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within modern agriculture and digital farm management that every AgriTech practitioner should understand thoroughly.');
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AgriTech & Digital Agriculture · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>In professional AgriTech practice, <strong>' + esc(name) + '</strong> is a core competency. A precise understanding enables farmers, extension workers, and agribusiness managers to improve productivity, use resources efficiently, and adapt to climate and market pressures.</p>' +
      '<p>Mastery of this topic supports later modules and is frequently required in farm advisory work, project design, and digital agriculture deployment.</p>' +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Modern farms compete on efficiency, data, and sustainability.</li>' +
      '<li>Strong performance improves yields, reduces waste, and builds climate resilience.</li>' +
      '<li>Funders, buyers, and regulators increasingly expect digital and sustainable practices.</li>' +
      '<li>The skill transfers across smallholder farms, cooperatives, and commercial agribusiness.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Precise definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Relationship to other digital agriculture and farm management practices.</li>' +
      '<li>Common tools, data sources, and standards.</li>' +
      '<li>Practical application steps on a real or sample farm.</li>' +
      '<li>Frequent errors that waste inputs, data, or investment.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> to a real or realistic farm. Document the steps, data needed, and one decision the practice would improve.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + esc(name) + '</em> to a Liberian farm, cooperative, or agribusiness and note the expected benefit.</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Adopting technology without a clear problem or management question.</li>' +
      '<li>Collecting data that is never analysed or used.</li>' +
      '<li>Ignoring local context, costs, and farmer capacity.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is foundational for AgriTech practice. A clear grasp of its definition and application is essential for the Complete AgriTech & Digital Agriculture Professional Certificate.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video and note tools, data, or examples.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete the practical exercises for a sample or real farm.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>.</p></div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._atFullBuilt) return;
    var course = COURSES_DB[CID];
    var notes = (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[CID]) ? LESSON_CONTENT[CID] : {};

    // Re-assign videos on lessons by cycling better pools per module index
    var skillKeys = ['orientation','agri','digital','climate','farmmgmt','precision','iot','drones','data','agribusiness','marketing','foodsafety','finance','ai','policy','professional','projects','career','capstone','assessment'];
    if (course.modules && course.modules.length) {
      course.modules.forEach(function (mod, mi) {
        var sk = skillKeys[mi] || 'assessment';
        var pool = BETTER_VIDEOS[sk] || BETTER_VIDEOS.assessment;
        var vi = 0;
        if (!mod.lessons) return;
        mod.lessons.forEach(function (les) {
          if (les.v && !les.isQuiz) {
            les.v = pool[vi % pool.length];
            vi++;
          }
        });
      });
    }

    // Replace notes with formal definition-first notes where we have TOPIC_DEF
    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n !== 'string') return;
      Object.keys(TOPIC_DEF).forEach(function (title) {
        if (n.indexOf(title) !== -1 && (n.indexOf('1. Definition') === -1 || n.length < 900)) {
          var modMatch = n.match(/Module \d+:[^<]+/);
          var modTitle = modMatch ? modMatch[0].replace(/<[^>]+>/g, '').trim() : 'AgriTech Course';
          notes[k] = formalNote(modTitle, title);
        }
      });
    });

    course._atEnhanced = true;
    console.log('[AGRITECH] Enhanced: unique videos + formal notes applied');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@6358c3b2342ca4e0e91e90170c5a06030cf26967/agritech-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[AGRITECH] enhance', e); }
      console.log('[AGRITECH] Full curriculum + enhancements ready');
    };
    s.onerror = function () { console.error('[AGRITECH] Could not load full curriculum from CDN'); };
    document.head.appendChild(s);
  }

  if (COURSES_DB[CID] && COURSES_DB[CID]._atFullBuilt) {
    try { applyEnhancements(); } catch (e) {}
  } else {
    loadAndEnhance();
  }
})();
