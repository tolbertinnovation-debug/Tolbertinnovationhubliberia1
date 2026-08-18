/* TIH Complete AgriTech & Digital Agriculture Professional Certificate.
   Loader: full curriculum + formal notes + deep notes for Precision, IoT, Drones. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'agritech';
  if (COURSES_DB[CID] && COURSES_DB[CID]._atFullBuilt && COURSES_DB[CID]._atDeepNotes) return;

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
    'Yield Monitoring': 'Yield monitoring is the measurement and mapping of crop yield across a field during harvest, used to identify spatial variability and improve future management.',
    'Precision Irrigation': 'Precision irrigation is the application of water at variable rates across a field based on crop need, soil condition, and sensor or map data, to maximise efficiency and minimise waste.',
    'Soil Mapping': 'Soil mapping is the process of collecting and displaying information about soil types, properties, and variability across a farm or landscape to support site-specific management.',
    'Introduction to IoT': 'The Internet of Things (IoT) in agriculture refers to networks of sensors and devices that collect and exchange farm data—such as soil moisture, weather, and animal activity—to support monitoring and automation.',
    'Smart Sensors': 'Smart sensors are devices that measure environmental or biological conditions on the farm and transmit data for analysis and decision-making, often as part of an IoT system.',
    'Soil Moisture Sensors': 'Soil moisture sensors measure the water content in the soil and help farmers decide when and how much to irrigate, reducing waste and protecting crop health.',
    'Weather Stations': 'Farm weather stations are instruments that measure local temperature, rainfall, humidity, wind, and related variables to support irrigation, spraying, and risk decisions.',
    'Smart Irrigation Systems': 'Smart irrigation systems use sensor data, weather information, and controllers to apply water automatically and efficiently according to crop need.',
    'Livestock Monitoring': 'Livestock monitoring uses sensors, tags, or cameras to track animal location, activity, health indicators, and behaviour for earlier detection of problems and better herd management.',
    'Greenhouse Automation': 'Greenhouse automation is the use of sensors and controllers to regulate temperature, humidity, ventilation, lighting, and irrigation in protected cultivation environments.',
    'Drone Technology': 'Agricultural drone technology uses unmanned aerial vehicles equipped with cameras or sensors to map fields, monitor crops, and support precision management from the air.',
    'Agricultural Drone Applications': 'Agricultural drone applications include field mapping, crop scouting, vegetation indexing, spray support, and livestock observation, depending on sensors and regulations.',
    'Crop Monitoring': 'Crop monitoring is the regular observation of plant growth, health, and stress—using visual checks, sensors, or remote sensing—to detect problems early and guide interventions.',
    'Field Mapping': 'Field mapping is the creation of accurate spatial representations of farm boundaries, plots, and features using GPS, GIS, or drone imagery to support planning and precision operations.',
    'Crop Health Assessment': 'Crop health assessment evaluates the condition of plants using indices such as NDVI and other indicators derived from imagery or field data to identify stress, disease, or nutrient issues.',
    'Pest Detection': 'Pest detection is the identification of insects, diseases, or weeds in crops through field scouting, traps, or remote sensing so that control measures can be targeted and timely.',
    'Drone Safety': 'Drone safety covers the procedures, checks, and behaviours that protect people, property, and aircraft when operating unmanned aerial systems in agricultural settings.',
    'Drone Regulations': 'Drone regulations are the legal rules governing registration, pilot qualification, flight zones, altitude, and privacy that operators must follow when flying agricultural drones.',
    'Drone Data Analysis': 'Drone data analysis is the processing of aerial imagery and sensor data into maps, indices, and insights that support farm decisions such as fertiliser, irrigation, or scouting priorities.',
    'Data Collection': 'Farm data collection is the systematic gathering of information on weather, soil, crops, livestock, inputs, and outputs for analysis and decision support.',
    'Farm Management Software': 'Farm management software is a digital tool that helps plan, record, track, and analyse farm operations, finances, and performance in one system.',
    'Data Visualization': 'Data visualization is the presentation of farm data in charts, maps, and dashboards so that patterns, trends, and problems can be understood quickly.',
    'Agribusiness Fundamentals': 'Agribusiness is the range of businesses and activities involved in producing, processing, distributing, and marketing agricultural products from farm to consumer.',
    'Agricultural Value Chains': 'An agricultural value chain is the full sequence of activities and actors involved in bringing a product from production through processing and distribution to the final consumer.',
    'Food Safety Principles': 'Food safety principles are the practices and standards that prevent contamination of food with hazards that could harm consumers, from farm through processing and distribution.',
    'Good Agricultural Practices (GAP)': 'Good Agricultural Practices (GAP) are a set of principles and methods for on-farm production and post-harvest processes that result in safe and healthy food and non-food agricultural products.',
    'Artificial Intelligence in Agriculture': 'Artificial intelligence in agriculture is the use of computer systems that learn from data to support tasks such as crop diagnosis, yield prediction, pest detection, and automated machinery control.'
  };

  /* Deep notes for Precision, IoT, Drones — fuller explanation body */
  var DEEP_BODY = {
    'Precision Agriculture':
      '<p>Precision agriculture treats the field as variable, not uniform. Soil type, moisture, nutrients, pests, and yield often differ across short distances. By measuring that variability and responding with the right input at the right place and time, farmers can raise efficiency, cut waste, and improve environmental outcomes.</p>' +
      '<p>Core components typically include: positioning (GPS/GNSS), spatial data (GIS), sensing (proximal or remote), decision support, and variable-rate application. Adoption can start small—e.g. simple yield maps or soil tests by zone—before investing in full VRT equipment.</p>',
    'GPS in Agriculture':
      '<p>GPS provides accurate geographic coordinates that enable guidance of tractors and implements, mapping of field boundaries and yield, and geo-referencing of soil samples and scouting notes. Differential correction (DGPS or RTK) improves accuracy for high-precision tasks such as strip-tillage or controlled traffic.</p>' +
      '<p>On many farms, the first GPS use is lightbar or auto-steer guidance to reduce overlap and skips. That alone can save fuel, seed, and time. Later uses include yield monitors, prescription maps, and integration with farm software.</p>',
    'Geographic Information Systems (GIS)':
      '<p>GIS stores layers of farm information—boundaries, soil types, elevation, yield, and application history—and allows analysis and map production. Farmers and advisors use GIS to define management zones, plan sampling, and create prescription maps for variable-rate equipment.</p>' +
      '<p>Free tools such as QGIS and Google Earth support learning and basic farm mapping. Commercial farm platforms often embed GIS functions so that maps and records stay linked to operations and finances.</p>',
    'Remote Sensing':
      '<p>Remote sensing observes the land from satellites, aircraft, or drones using optical, multispectral, or other sensors. In agriculture it supports crop condition monitoring, stress detection, and estimation of biomass or yield potential without walking every metre of the field.</p>' +
      '<p>Indices such as NDVI (Normalized Difference Vegetation Index) highlight differences in plant vigour. Cloud cover, timing, and resolution affect usefulness; combining remote sensing with ground checks remains best practice.</p>',
    'Variable Rate Technology':
      '<p>VRT equipment changes the rate of seed, fertiliser, lime, or chemical as the machine moves across the field, following a prescription map or real-time sensor. The goal is to match supply to local demand and avoid over- or under-application.</p>' +
      '<p>Successful VRT depends on good underlying data (soil tests, yield history, or sensors), a clear agronomic rule for rates, and equipment that can deliver the prescribed rates accurately. Without solid data, VRT can waste money.</p>',
    'Yield Monitoring':
      '<p>Yield monitors on harvesters record yield and moisture by location, producing maps that show high- and low-performing areas. Those maps guide future soil sampling, drainage, variety choice, and input plans.</p>' +
      '<p>Calibration and clean data matter. Uncalibrated monitors or maps mixed across different crops or seasons can mislead. Multi-year yield maps are often more reliable for defining management zones.</p>',
    'Precision Irrigation':
      '<p>Precision irrigation applies water where and when it is needed, using soil moisture sensors, weather data, crop coefficients, or mapped zones. Methods include drip, centre-pivot with VRI (variable rate irrigation), and scheduled micro-sprinklers.</p>' +
      '<p>Benefits include water savings, reduced energy for pumping, and more uniform crops. Design must match soil type, crop rooting depth, and water source reliability—especially important in drought-prone or water-limited regions.</p>',
    'Soil Mapping':
      '<p>Soil maps describe how texture, organic matter, pH, and nutrients vary across a farm. They are built from sampling, laboratory analysis, and sometimes proximal sensors or remote sensing. Management zones derived from soil maps support variable-rate lime and fertiliser.</p>' +
      '<p>For smallholders, even simple grid or zone sampling with a basic map can improve decisions compared with treating the whole farm as one unit. Depth of sampling and lab quality affect reliability.</p>',
    'Introduction to IoT':
      '<p>IoT connects physical devices—sensors, pumps, gates, tags—to networks so that data can be collected and actions triggered automatically or remotely. On farms this supports continuous monitoring of soil, weather, water, and animals without constant manual checks.</p>' +
      '<p>A typical stack includes sensors, a gateway or local controller, connectivity (cellular, LoRa, Wi-Fi), a cloud or local platform, and user interfaces (phone app or dashboard). Power, connectivity cost, and durability in outdoor conditions are practical constraints.</p>',
    'Smart Sensors':
      '<p>Smart sensors measure variables such as soil moisture, temperature, humidity, light, or tank level and report values digitally. Some include onboard processing or wireless transmission. Placement, calibration, and maintenance determine data quality.</p>' +
      '<p>Choosing sensors should start from the management question (e.g. when to irrigate) rather than from the device catalogue. Fewer reliable sensors used well beat many sensors that are ignored.</p>',
    'Soil Moisture Sensors':
      '<p>Soil moisture sensors estimate water content or tension in the root zone. Types include capacitance, TDR, and tensiometers. Readings help schedule irrigation, avoid water stress, and prevent over-watering that wastes water and leaches nutrients.</p>' +
      '<p>Install sensors at depths relevant to the crop root system and in representative soil types. Combine with rainfall and crop stage for better decisions. Thresholds should be crop- and soil-specific.</p>',
    'Weather Stations':
      '<p>On-farm or nearby weather stations provide temperature, rainfall, humidity, wind, and sometimes solar radiation. This data supports irrigation scheduling, spray timing (drift and rainfastness), disease risk models, and work planning.</p>' +
      '<p>Public weather services are useful; a local station captures microclimate differences that regional forecasts miss. Data loggers and simple dashboards make historical comparison possible.</p>',
    'Smart Irrigation Systems':
      '<p>Smart irrigation links sensors and/or weather data to valves or pumps so that water is applied automatically when thresholds are met. Systems range from simple timer-plus-sensor kits to full IoT platforms with remote control and alerts.</p>' +
      '<p>Design must include fail-safes (e.g. maximum run time), filtration for drip systems, and realistic power and connectivity. Training operators to trust and check the system is as important as the hardware.</p>',
    'Livestock Monitoring':
      '<p>Sensors and tags can track location, movement, rumination, temperature, or proximity. Alerts for animals that stop moving, separate from the herd, or show abnormal patterns help detect illness, calving, or theft earlier.</p>' +
      '<p>Adoption depends on cost per animal, battery life, network coverage, and clear protocols for responding to alerts. Start with high-value animals or critical periods if budgets are limited.</p>',
    'Greenhouse Automation':
      '<p>Protected cultivation benefits strongly from automation because the environment is enclosed and controllable. Sensors drive fans, vents, heaters, shade, and irrigation to keep conditions within target ranges for the crop.</p>' +
      '<p>Good automation reduces labour for routine checks and stabilises quality. Overrides and alarms remain necessary for extreme weather or equipment failure.</p>',
    'Drone Technology':
      '<p>Agricultural drones (UAVs) carry cameras or multispectral sensors over fields to collect imagery quickly. Multirotor drones suit small fields and detailed scouting; fixed-wing platforms cover larger areas more efficiently.</p>' +
      '<p>Success depends on flight planning, suitable weather, sensor choice, and post-processing into orthomosaics or index maps. Regulations and pilot skill are non-negotiable for safe, legal use.</p>',
    'Agricultural Drone Applications':
      '<p>Common applications include: boundary and field mapping, plant-stand counts, vegetation index maps for stress, drainage and erosion checks, and targeted scouting. Some regions allow drone-based spraying under strict rules.</p>' +
      '<p>Match the application to a clear decision (e.g. where to side-dress nitrogen). Imagery without a decision plan is rarely worth the cost.</p>',
    'Crop Monitoring':
      '<p>Systematic crop monitoring detects nutrient deficiency, water stress, pests, and disease before losses grow. Methods range from weekly walking scouting to sensor networks and satellite or drone imagery.</p>' +
      '<p>Record observations with location and date. Compare with thresholds or past seasons. Link monitoring to action rules so that findings trigger timely interventions.</p>',
    'Field Mapping':
      '<p>Accurate field maps underpin area calculations, input planning, and precision operations. Maps can be drawn with GPS handhelds, smartphone apps, tractor GPS, or drone photogrammetry.</p>' +
      '<p>Keep maps updated when boundaries change. Share consistent field names and IDs across paper records, software, and workers to avoid confusion.</p>',
    'Crop Health Assessment':
      '<p>Crop health assessment uses visual symptoms, tissue tests, or remote indices (e.g. NDVI, NDRE) to judge vigour and stress. Early detection supports targeted fertiliser, irrigation, or crop protection.</p>' +
      '<p>Indices indicate relative difference; they do not automatically diagnose the cause. Always confirm with ground truthing before major input decisions.</p>',
    'Pest Detection':
      '<p>Timely pest detection reduces unnecessary spraying and prevents yield loss. Tools include pheromone traps, sticky cards, scouting protocols, and increasingly image-based or sensor alerts.</p>' +
      '<p>Know economic thresholds for key pests. Integrate detection with resistant varieties, cultural practices, and selective products for sustainable management.</p>',
    'Drone Safety':
      '<p>Safe operation includes pre-flight checks (airframe, battery, GPS, sensors), awareness of people and obstacles, weather limits, and clear take-off and landing areas. Maintain visual line of sight unless specifically authorised otherwise.</p>' +
      '<p>Document incidents and near-misses. Train every pilot to the same standard; informal “just this once” flights cause most accidents.</p>',
    'Drone Regulations':
      '<p>Most countries regulate drones by weight, purpose, and airspace. Requirements may include registration, remote pilot certificates, altitude limits, distance from airports, and no-fly zones.</p>' +
      '<p>Agricultural operators must follow national civil aviation rules and any pesticide-application rules if spraying. Ignorance of regulations is not a defence; check official sources before flying.</p>',
    'Drone Data Analysis':
      '<p>Raw images become useful after stitching into orthomosaics, calculating indices, and comparing with field boundaries or zones. Software ranges from manufacturer apps to QGIS and specialised agriculture platforms.</p>' +
      '<p>Focus analysis on the decision you need (e.g. which zones to scout first). Archive maps with dates and crop stage for multi-season learning.</p>'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within modern agriculture and digital farm management that every AgriTech practitioner should understand thoroughly.');
    var deep = DEEP_BODY[name] || '';
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AgriTech & Digital Agriculture · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      (deep || ('<p>In professional AgriTech practice, <strong>' + esc(name) + '</strong> is a core competency. A precise understanding enables farmers, extension workers, and agribusiness managers to improve productivity, use resources efficiently, and adapt to climate and market pressures.</p>' +
      '<p>Mastery of this topic supports later modules and is frequently required in farm advisory work, project design, and digital agriculture deployment.</p>')) +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Modern farms compete on efficiency, data, and sustainability.</li>' +
      '<li>Strong performance improves yields, reduces waste, and builds climate resilience.</li>' +
      '<li>Funders, buyers, and regulators increasingly expect digital and sustainable practices.</li>' +
      '<li>The skill transfers across smallholder farms, cooperatives, and commercial agribusiness.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Precise definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Relationship to other digital agriculture and farm management practices.</li>' +
      '<li>Common tools, data sources, and standards used in the field.</li>' +
      '<li>Practical steps for applying the concept on a real or sample farm.</li>' +
      '<li>Frequent errors that waste inputs, data, or investment.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> to a real or realistic farm. Document the steps, data needed, and one decision the practice would improve.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + esc(name) + '</em> to a Liberian farm, cooperative, or agribusiness and note the expected benefit.</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Adopting technology without a clear problem or management question.</li>' +
      '<li>Collecting data that is never analysed or used for decisions.</li>' +
      '<li>Ignoring local context, costs, connectivity, and farmer capacity.</li>' +
      '<li>Skipping calibration, ground-truthing, or safety and legal requirements.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is foundational for professional AgriTech practice. A clear grasp of its definition, tools, and correct application is essential for the Complete AgriTech & Digital Agriculture Professional Certificate.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video carefully and note tools, data sources, and examples.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete the practical exercises for a sample or real farm.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>. Use Print → Save as PDF for an offline copy.</p></div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._atFullBuilt) return;
    var course = COURSES_DB[CID];
    var notes = (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[CID]) ? LESSON_CONTENT[CID] : {};

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

    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n !== 'string') return;
      Object.keys(TOPIC_DEF).forEach(function (title) {
        if (n.indexOf(title) !== -1) {
          var modMatch = n.match(/Module \d+:[^<]+/);
          var modTitle = modMatch ? modMatch[0].replace(/<[^>]+>/g, '').trim() : 'AgriTech Course';
          notes[k] = formalNote(modTitle, title);
        }
      });
    });

    course._atEnhanced = true;
    course._atDeepNotes = true;
    console.log('[AGRITECH] Deep notes applied for Precision, IoT, Drones + formal notes');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@6358c3b2342ca4e0e91e90170c5a06030cf26967/agritech-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[AGRITECH] enhance', e); }
      console.log('[AGRITECH] Full curriculum + deep formal notes ready');
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
