/* TIH AgriTech: full curriculum loader + formal notes for ALL modules. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'agritech';
  if (COURSES_DB[CID] && COURSES_DB[CID]._atFullBuilt && COURSES_DB[CID]._atAllModuleNotes) return;

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
    'What is AgriTech?': 'AgriTech is the use of technology and innovation—including sensors, data, software, machinery, and biotechnology—to improve agricultural production, farm management, and food-system performance.',
    'What is Digital Agriculture?': 'Digital agriculture is the application of digital technologies such as data analytics, connectivity, AI, and platforms to collect, analyse, and act on farm and value-chain information.',
    'Careers in AgriTech': 'Careers in AgriTech include precision agriculture specialist, farm data analyst, IoT technician, drone operator, agribusiness advisor, and digital extension officer.',
    'The Future of Agriculture': 'The future of agriculture is shaped by digitalisation, climate adaptation, resource efficiency, and value-chain integration.',
    'Fundamentals of Agriculture': 'Agriculture is the science and practice of cultivating plants and rearing animals for food, fibre, and other products.',
    'Crop Production': 'Crop production is the cultivation of plants for food, feed, fibre, or industrial use, covering land preparation through harvest.',
    'Livestock Production': 'Livestock production is the rearing of animals for meat, milk, eggs, fibre, or draft power.',
    'Agricultural Systems': 'Agricultural systems are organised combinations of crops, livestock, land, labour, and technology under given environmental and market conditions.',
    'Soil Science Basics': 'Soil science studies soil formation, classification, properties, and its role in plant growth and ecosystems.',
    'Plant Biology': 'Plant biology is the study of plant structure, function, growth, and reproduction.',
    'Farm Ecosystems': 'A farm ecosystem is the interacting system of soil, water, plants, animals, and microorganisms on a farm.',
    'Agricultural Terminology': 'Agricultural terminology is the specialised vocabulary used to describe crops, livestock, practices, equipment, and markets.',
    'Food Security': 'Food security exists when all people have physical, social and economic access to sufficient, safe and nutritious food.',
    'Sustainable Agriculture': 'Sustainable agriculture meets present needs for food and fibre while protecting the environment and long-term farm viability.',
    'Digital Agriculture Overview': 'Digital agriculture covers data, sensors, connectivity, software, and analytics that transform farm planning, monitoring, and management.',
    'Smart Farming Concepts': 'Smart farming uses connected devices, data, and automation to manage farm operations in real time.',
    'Digital Farm Management': 'Digital farm management uses software and digital records to plan, track, and analyse production, inputs, labour, and finances.',
    'Agricultural Innovation': 'Agricultural innovation is the adoption of new practices, technologies, or business models that improve productivity, resilience, or profitability.',
    'Data-Driven Farming': 'Data-driven farming bases agronomic and business decisions on measured data rather than guesswork alone.',
    'Farm Automation': 'Farm automation uses machines, controllers, and software to perform or assist irrigation, feeding, climate control, or field operations.',
    'Agricultural Information Systems': 'Agricultural information systems collect, store, process, and share data to support farmer, advisor, and policy decisions.',
    'Emerging Technologies': 'Emerging technologies in agriculture include AI, advanced sensors, robotics, blockchain, and new connectivity options.',
    'AgriTech Trends': 'AgriTech trends include precision tools, digital marketplaces, climate services, and integrated data platforms.',
    'Climate Change and Agriculture': 'Climate change affects crops, livestock, and farming systems through temperature, rainfall, and extremes; agriculture also contributes emissions.',
    'Climate-Smart Farming': 'Climate-smart agriculture sustainably increases productivity, builds resilience, and reduces greenhouse gas emissions where possible.',
    'Water Conservation': 'Water conservation reduces waste and improves efficiency of water use for crops and livestock while protecting water resources.',
    'Soil Conservation': 'Soil conservation protects soil from erosion and degradation and maintains structure, organic matter, and fertility.',
    'Sustainable Irrigation': 'Sustainable irrigation meets crop needs while minimising waste, energy use, and harm to water sources.',
    'Crop Rotation': 'Crop rotation grows different crops in sequence on the same land to improve fertility, break pest cycles, and reduce risk.',
    'Organic Farming': 'Organic farming relies on natural processes, avoids synthetic fertilisers and pesticides, and emphasises soil health and biodiversity.',
    'Carbon Farming': 'Carbon farming increases capture and storage of carbon in soils and biomass while supporting productivity.',
    'Biodiversity Conservation': 'Biodiversity conservation protects the variety of life on farms that supports pollination, pest control, and resilience.',
    'Environmental Stewardship': 'Environmental stewardship is responsible use and protection of natural resources so production continues without degrading ecosystems.',
    'Farm Planning': 'Farm planning sets production and business goals and decides how land, labour, capital, and technology will be used.',
    'Resource Management': 'Resource management is the efficient allocation of land, water, labour, capital, and inputs without unnecessary waste.',
    'Farm Budgeting': 'Farm budgeting estimates expected income, costs, and profit for an enterprise or whole farm over a defined period.',
    'Record Keeping': 'Record keeping systematically stores data on activities, inputs, outputs, costs, and results for better decisions.',
    'Farm Productivity': 'Farm productivity measures output relative to inputs such as land, labour, or capital.',
    'Labor Management': 'Labour management plans, organises, and supervises people so farm tasks are completed safely and productively.',
    'Farm Safety': 'Farm safety protects workers and visitors from injury and health hazards through practices, training, and equipment.',
    'Agricultural Risk Management': 'Agricultural risk management identifies and controls threats such as weather, pests, prices, and disease.',
    'Farm Performance Evaluation': 'Farm performance evaluation reviews production and financial results against targets to guide improvement.',
    'Farm Business Planning': 'Farm business planning produces a written plan covering markets, production, operations, finance, and risks.',
    'GPS in Agriculture': 'GPS provides accurate location data for field mapping, machinery guidance, yield mapping, and variable-rate application.',
    'Geographic Information Systems (GIS)': 'GIS captures, stores, analyses, and displays spatially referenced farm data for mapping and management zones.',
    'Remote Sensing': 'Remote sensing acquires information about land or crops from satellites, aircraft, or drones without physical contact.',
    'Yield Monitoring': 'Yield monitoring measures and maps crop yield during harvest to identify spatial variability.',
    'Variable Rate Technology': 'Variable Rate Technology applies inputs at different rates across a field according to site-specific needs.',
    'Precision Irrigation': 'Precision irrigation applies water at variable rates based on crop need, soil condition, and sensor or map data.',
    'Soil Mapping': 'Soil mapping collects and displays soil types and properties across a farm to support site-specific management.',
    'Precision Crop Management': 'Precision crop management applies agronomic decisions—seeding, nutrients, protection—using spatial data and variability within fields.',
    'Precision Livestock Farming': 'Precision livestock farming uses sensors and data to monitor individual or group animal health, behaviour, and productivity.',
    'Introduction to IoT': 'IoT in agriculture is networks of sensors and devices that collect and exchange farm data to support monitoring and automation.',
    'Smart Sensors': 'Smart sensors measure environmental or biological conditions and transmit data for analysis and decision-making.',
    'Soil Moisture Sensors': 'Soil moisture sensors measure water content in the soil to guide when and how much to irrigate.',
    'Weather Stations': 'Farm weather stations measure local temperature, rainfall, humidity, and wind to support irrigation and risk decisions.',
    'Smart Irrigation Systems': 'Smart irrigation systems use sensor and weather data with controllers to apply water automatically and efficiently.',
    'Livestock Monitoring': 'Livestock monitoring uses sensors or tags to track location, activity, and health for earlier problem detection.',
    'Greenhouse Automation': 'Greenhouse automation uses sensors and controllers to regulate temperature, humidity, ventilation, and irrigation.',
    'IoT Data Collection': 'IoT data collection is the automated gathering of sensor readings into platforms for monitoring, alerts, and analysis.',
    'IoT Farm Management': 'IoT farm management integrates sensor networks with dashboards and controls to manage irrigation, climate, or livestock remotely.',
    'Drone Technology': 'Agricultural drone technology uses unmanned aerial vehicles with cameras or sensors to map fields and monitor crops.',
    'Agricultural Drone Applications': 'Drone applications include field mapping, crop scouting, vegetation indexing, and targeted observation.',
    'Crop Monitoring': 'Crop monitoring is regular observation of growth, health, and stress to detect problems early.',
    'Field Mapping': 'Field mapping creates accurate spatial representations of boundaries and features using GPS, GIS, or drones.',
    'Crop Health Assessment': 'Crop health assessment evaluates plant condition using visual checks, tests, or indices such as NDVI.',
    'Pest Detection': 'Pest detection identifies insects, diseases, or weeds so control can be targeted and timely.',
    'Drone Safety': 'Drone safety covers checks and behaviours that protect people, property, and aircraft during agricultural flights.',
    'Drone Regulations': 'Drone regulations are legal rules on registration, pilot qualification, airspace, and privacy for UAV operations.',
    'Drone Data Analysis': 'Drone data analysis processes imagery into maps and indices that support fertiliser, irrigation, or scouting decisions.',
    'Data Collection': 'Farm data collection systematically gathers weather, soil, crop, livestock, input, and output information.',
    'Farm Management Software': 'Farm management software helps plan, record, track, and analyse operations, finances, and performance.',
    'Spreadsheet Analysis': 'Spreadsheet analysis organises farm data and calculates totals, ratios, and relationships between inputs and outputs.',
    'Agricultural Dashboards': 'Agricultural dashboards display key metrics in one view for quick monitoring and decisions.',
    'Data Visualization': 'Data visualization presents farm data in charts and maps so patterns and problems are easy to see.',
    'Yield Analysis': 'Yield analysis examines output data over time and across fields to find trends and improvement opportunities.',
    'Financial Analysis': 'Financial analysis reviews income, costs, cash flow, and profitability to assess business health.',
    'Decision-Making Using Data': 'Decision-making using data chooses agronomic or business actions based on measured evidence.',
    'Predictive Agriculture': 'Predictive agriculture uses data and models to forecast yields, pests, weather impacts, or demand.',
    'Agribusiness Fundamentals': 'Agribusiness covers businesses involved in producing, processing, distributing, and marketing agricultural products.',
    'Agricultural Value Chains': 'An agricultural value chain is the full sequence of activities from production through processing to the consumer.',
    'Market Research': 'Market research studies customers, demand, prices, and competitors to inform product and sales decisions.',
    'Business Model Development': 'Business model development designs how a farm or agribusiness creates, delivers, and captures value.',
    'Financial Planning': 'Financial planning projects income, expenses, capital needs, and funding sources for sustainable growth.',
    'Agricultural Marketing': 'Agricultural marketing moves products from farm to buyer through grading, packaging, pricing, and distribution.',
    'Branding Farm Products': 'Branding creates a distinct name and reputation that helps customers recognise and prefer farm products.',
    'Accessing Agricultural Finance': 'Accessing agricultural finance means obtaining loans, grants, or capital for operations, equipment, or expansion.',
    'Agribusiness Innovation': 'Agribusiness innovation introduces new products, processes, or models that improve competitiveness.',
    'Business Plan Development': 'Business plan development produces a document describing opportunity, market, operations, and financial projections.',
    'Social Media Marketing': 'Social media marketing uses platforms to promote farm products, build relationships, and generate sales.',
    'Farm Branding': 'Farm branding is consistent presentation of the farm name, story, and values across channels.',
    'E-Commerce for Agriculture': 'E-commerce is buying and selling farm products or inputs through online platforms and digital payments.',
    'Online Marketplaces': 'Online marketplaces are digital platforms where sellers offer agricultural products to buyers.',
    'Customer Relationship Management': 'CRM tracks customer contacts and purchases to improve service and repeat business.',
    'Digital Advertising': 'Digital advertising is paid promotion through social, search, or display channels.',
    'Content Marketing': 'Content marketing shares useful stories and information to attract and retain customers.',
    'Agricultural Storytelling': 'Agricultural storytelling communicates the farm’s people and practices to build trust with buyers.',
    'Sales Strategies': 'Sales strategies are planned approaches for reaching buyers, presenting offers, and closing sales.',
    'Food Safety Principles': 'Food safety principles prevent contamination with hazards from farm through distribution.',
    'Good Agricultural Practices (GAP)': 'GAP are principles for on-farm production and post-harvest processes that yield safe, healthy products.',
    'Post-Harvest Handling': 'Post-harvest handling includes cleaning, sorting, packing, cooling, and transport that preserve quality.',
    'Food Storage': 'Food storage holds products under conditions that limit spoilage, pests, and quality loss.',
    'Food Processing Basics': 'Food processing transforms raw products into more stable or valuable forms through drying, milling, or packaging.',
    'Quality Assurance': 'Quality assurance is systematic checks ensuring products meet standards for safety, grade, and consistency.',
    'Traceability Systems': 'Traceability systems record the path of a product from farm to consumer for origin and safety.',
    'Food Standards & Compliance': 'Food standards and compliance are legal and voluntary requirements for safety, labelling, and quality.',
    'Agricultural Economics': 'Agricultural economics studies resource allocation in farming and food systems, including costs, prices, and policy.',
    'Financial Statements': 'Financial statements include income statement, balance sheet, and cash-flow summary of farm performance.',
    'Investment Planning': 'Investment planning evaluates capital purchases based on returns, risk, and available funds.',
    'Agricultural Loans': 'Agricultural loans are credit products for production, equipment, or land, often matched to seasonal cash flow.',
    'Insurance in Agriculture': 'Insurance provides compensation for specified losses such as crop failure or livestock death.',
    'Grant Opportunities': 'Grant opportunities are non-repayable funds for agricultural projects under defined donor conditions.',
    'Financial Risk Management': 'Financial risk management controls threats to cash flow and solvency including price and credit risk.',
    'Artificial Intelligence in Agriculture': 'AI in agriculture uses systems that learn from data for crop diagnosis, yield prediction, and automation support.',
    'Machine Learning Basics': 'Machine learning enables computer systems to learn patterns from data and improve predictions without explicit programming for every case.',
    'Computer Vision for Farming': 'Computer vision uses cameras and algorithms to interpret images for counting, disease detection, or weed identification.',
    'Predictive Analytics': 'Predictive analytics applies models to farm data to forecast yield, disease risk, or demand.',
    'Robotics in Agriculture': 'Robotics uses automated machines for weeding, harvesting, milking, or material handling.',
    'Blockchain in Agriculture': 'Blockchain uses distributed ledgers to record product history for supply-chain trust and traceability.',
    'AI Farm Management Tools': 'AI farm management tools use artificial intelligence to support planning, diagnostics, and recommendations.',
    'Future Trends in AgriTech': 'Future trends include wider AI, autonomy, climate services, digital marketplaces, and integrated data platforms.',
    'Agricultural Policies': 'Agricultural policies are government rules and programmes that shape production, trade, land use, and farmer support.',
    'Land Use Management': 'Land use management plans allocation of land among farming, forestry, settlement, and conservation.',
    'Sustainable Development Goals (SDGs)': 'The SDGs are a global framework of seventeen goals including zero hunger and climate action.',
    'Environmental Regulations': 'Environmental regulations limit pollution and set standards for practices that affect land, water, and biodiversity.',
    'Agricultural Cooperatives': 'Agricultural cooperatives are member-owned organisations providing inputs, marketing, processing, or credit.',
    'Rural Development': 'Rural development improves economic opportunity, infrastructure, and quality of life in rural areas.',
    'Gender in Agriculture': 'Gender in agriculture examines differences in roles and access to resources and how equality improves food security.',
    'Agricultural Extension Services': 'Extension services provide education and advice to farmers to improve practices and adopt innovations.',
    'Business Communication': 'Business communication is clear professional exchange of information supporting coordination and accountability.',
    'Leadership': 'Leadership sets direction, motivates people, and advances farm or organisational goals while building trust.',
    'Project Management': 'Project management plans and controls resources to deliver agricultural projects on time and on budget.',
    'Proposal Writing': 'Proposal writing prepares structured requests for funding presenting problem, solution, plan, and budget.',
    'Report Writing': 'Report writing produces evidence-based documents recording activities, results, and recommendations.',
    'Teamwork': 'Teamwork is coordinated effort of people with different skills to achieve shared farm or project goals.',
    'Problem Solving': 'Problem solving defines a problem, generates options, chooses action, and reviews results.',
    'Professional Ethics': 'Professional ethics are standards of honesty, fairness, safety, and responsibility in AgriTech and farming.',
    'Building an AgriTech Portfolio': 'An AgriTech portfolio is a collection of projects and analyses that demonstrates practical skill to employers or clients.',
    'Resume Writing': 'Resume writing prepares a concise summary of education, skills, and experience for agricultural roles.',
    'LinkedIn Optimization': 'LinkedIn optimization improves a professional profile to increase visibility to employers in agriculture and technology.',
    'Interview Preparation': 'Interview preparation researches the employer and practises examples that show competence for the role.',
    'Freelancing Opportunities': 'Freelancing includes independent paid work such as mapping, analysis, training, or advisory services.',
    'Consulting Opportunities': 'Consulting provides expert advice on digital agriculture or agribusiness to clients on project or retainer basis.',
    'Professional Certifications': 'Professional certifications verify knowledge in areas such as GIS, drones, or farm software.',
    'Career Growth Plan': 'A career growth plan is a personal roadmap of skills and milestones toward long-term AgriTech goals.'
  };

  var DEEP_BODY = {
    'What is AgriTech?': '<p>AgriTech spans hardware, software, and biological innovation. It amplifies farming knowledge with better measurement and control. Start from a clear problem—water waste, low yields, high labour cost—rather than technology for its own sake.</p>',
    'What is Digital Agriculture?': '<p>Digital agriculture links field, store, and market data into decisions. Connectivity, data quality, and farmer capacity determine impact. Offline-first tools and SMS services remain important where connectivity is limited.</p>',
    'Precision Agriculture': '<p>Precision agriculture treats the field as variable. Measuring variability and responding with the right input at the right place and time raises efficiency and cuts waste. Components include GPS, GIS, sensing, decision support, and variable-rate application.</p>',
    'GPS in Agriculture': '<p>GPS enables guidance, mapping, and geo-referenced sampling. Auto-steer reduces overlap and saves fuel and seed. Higher accuracy (RTK) supports controlled traffic and precise placement.</p>',
    'Geographic Information Systems (GIS)': '<p>GIS stores layers of boundaries, soils, yield, and history for analysis and prescription maps. QGIS and Google Earth support learning; commercial platforms link maps to operations.</p>',
    'Remote Sensing': '<p>Satellites and drones observe crop condition and stress. NDVI and similar indices highlight vigour differences. Always confirm with ground checks before major input decisions.</p>',
    'Variable Rate Technology': '<p>VRT changes input rates across the field from prescription maps or sensors. It needs good data, clear agronomic rules, and accurate equipment—otherwise it wastes money.</p>',
    'Introduction to IoT': '<p>IoT connects sensors and devices so data is collected and actions triggered remotely. A typical stack includes sensors, gateway, connectivity, platform, and dashboard. Power and durability matter outdoors.</p>',
    'Soil Moisture Sensors': '<p>Sensors estimate root-zone water to schedule irrigation and avoid stress or over-watering. Install at relevant depths in representative soils; set crop- and soil-specific thresholds.</p>',
    'Smart Irrigation Systems': '<p>Systems link sensors and weather to valves or pumps. Include fail-safes, filtration, and operator training. Design for realistic power and connectivity.</p>',
    'Drone Technology': '<p>UAVs collect imagery quickly for mapping and scouting. Multirotors suit small fields; fixed-wing cover larger areas. Flight planning, weather, and regulations are essential.</p>',
    'Crop Health Assessment': '<p>Visual checks, tissue tests, and indices such as NDVI judge vigour and stress. Indices show relative difference—they do not diagnose the cause without ground truthing.</p>',
    'Climate-Smart Farming': '<p>Three pillars: productivity, resilience, and mitigation. Practices include improved varieties, water harvesting, agroforestry, and better livestock management. Local context decides fit.</p>',
    'Water Conservation': '<p>Efficient irrigation, mulching, rainwater harvesting, and scheduling by need cut waste. Where water is scarce, conservation is both environmental and economic priority.</p>',
    'Soil Conservation': '<p>Cover crops, reduced tillage, contours, and organic matter protect soil and hold water and nutrients for long-term yields.</p>',
    'Farm Planning': '<p>Plans set realistic production and cash-flow targets, match enterprises to resources, and include contingencies. Written plans help with family, workers, and lenders.</p>',
    'Farm Budgeting': '<p>Budgets estimate income and costs by enterprise and season. They show what makes money, where to cut costs, and capital needed before sales.</p>',
    'Record Keeping': '<p>Consistent records of planting, inputs, labour, yields, and sales turn experience into data. Used paper books beat abandoned sophisticated software.</p>',
    'Data Collection': '<p>Collect only what supports decisions, with clear units, dates, and locations. Training and simple protocols improve quality.</p>',
    'Farm Management Software': '<p>Software centralises plans, inventories, tasks, and finances. Match tools to farm size, connectivity, and language; expand as habits form.</p>',
    'Agribusiness Fundamentals': '<p>Agribusiness spans inputs, production, processing, logistics, and retail. Understanding the chain helps capture more value.</p>',
    'Agricultural Value Chains': '<p>Mapping the chain reveals who captures value and where losses occur. Upgrading often means coordination, standards, or processing.</p>',
    'Food Safety Principles': '<p>Prevent contamination through hygiene, clean water, storage, and hazard separation. One incident can destroy market access.</p>',
    'Good Agricultural Practices (GAP)': '<p>GAP covers site, water, inputs, harvest, and worker hygiene. Certification can open premium markets but needs records and audits.</p>',
    'Artificial Intelligence in Agriculture': '<p>AI learns from images and sensor data for diagnosis and prediction. Human oversight remains essential; models can fail under new conditions.</p>',
    'Agricultural Extension Services': '<p>Extension connects research and farmer experience. Digital channels expand reach; trust still depends on people who know the community.</p>',
    'Building an AgriTech Portfolio': '<p>Show real maps, analyses, and plans—not only certificates. Document problem, method, and result for each piece of work.</p>'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within modern agriculture and digital farm management that every AgriTech practitioner should understand thoroughly.');
    var deep = DEEP_BODY[name] || ('<p>In professional AgriTech practice, <strong>' + esc(name) + '</strong> supports better productivity, resource use, and climate resilience. Apply it with clear objectives, appropriate tools, and local context in mind.</p>');
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AgriTech & Digital Agriculture · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' + deep +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Modern farms compete on efficiency, data, and sustainability.</li>' +
      '<li>Strong performance improves yields, reduces waste, and builds resilience.</li>' +
      '<li>Markets and regulators increasingly expect digital and sustainable practices.</li>' +
      '<li>Skills transfer across smallholder farms, cooperatives, and commercial agribusiness.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Links to other digital agriculture and farm management practices.</li>' +
      '<li>Tools, data sources, and standards used in the field.</li>' +
      '<li>Practical application steps on a real or sample farm.</li>' +
      '<li>Common errors that waste inputs, data, or investment.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> to a real or realistic farm. Document steps, data needed, and one decision this practice would improve.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + esc(name) + '</em> to a Liberian farm, cooperative, or agribusiness and note the expected benefit.</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Adopting tools without a clear problem or management question.</li>' +
      '<li>Collecting data that is never analysed or used.</li>' +
      '<li>Ignoring local context, costs, connectivity, and capacity.</li>' +
      '<li>Skipping calibration, ground-truthing, or safety and legal requirements.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is a core topic for professional AgriTech practice. Mastery of its definition and application supports success in the Complete AgriTech & Digital Agriculture Professional Certificate.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video and note tools, data, and examples.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete practical exercises for a sample or real farm.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>.</p></div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._atFullBuilt) return;
    var course = COURSES_DB[CID];
    var notes = (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[CID]) ? LESSON_CONTENT[CID] : {};
    var skillKeys = ['orientation','agri','digital','climate','farmmgmt','precision','iot','drones','data','agribusiness','marketing','foodsafety','finance','ai','policy','professional','projects','career','capstone','assessment'];

    if (course.modules && course.modules.length) {
      course.modules.forEach(function (mod, mi) {
        var pool = BETTER_VIDEOS[skillKeys[mi] || 'assessment'] || BETTER_VIDEOS.assessment;
        var vi = 0;
        if (!mod.lessons) return;
        mod.lessons.forEach(function (les) {
          if (les.v && !les.isQuiz) { les.v = pool[vi % pool.length]; vi++; }
        });
      });
    }

    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n !== 'string') return;
      var replaced = false;
      Object.keys(TOPIC_DEF).forEach(function (title) {
        if (!replaced && n.indexOf(title) !== -1) {
          var modMatch = n.match(/Module \d+:[^<]+/);
          var modTitle = modMatch ? modMatch[0].replace(/<[^>]+>/g, '').trim() : 'AgriTech Course';
          notes[k] = formalNote(modTitle, title);
          replaced = true;
        }
      });
      // Fallback: any content lesson note without formal structure gets generic formal note from heading
      if (!replaced && n.indexOf('1. Definition') === -1 && n.indexOf('<h3>') !== -1) {
        var hm = n.match(/<h3>([^<]+)<\/h3>/);
        if (hm) {
          var modMatch2 = n.match(/Module \d+:[^<]+/);
          var modTitle2 = modMatch2 ? modMatch2[0].replace(/<[^>]+>/g, '').trim() : 'AgriTech Course';
          notes[k] = formalNote(modTitle2, hm[1].trim());
        }
      }
    });

    course._atEnhanced = true;
    course._atDeepNotes = true;
    course._atAllModuleNotes = true;
    console.log('[AGRITECH] Formal notes applied for ALL modules');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@6358c3b2342ca4e0e91e90170c5a06030cf26967/agritech-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[AGRITECH] enhance', e); }
      console.log('[AGRITECH] Full curriculum + all-module formal notes ready');
    };
    s.onerror = function () { console.error('[AGRITECH] CDN load failed'); };
    document.head.appendChild(s);
  }

  if (COURSES_DB[CID] && COURSES_DB[CID]._atFullBuilt) {
    try { applyEnhancements(); } catch (e) {}
  } else {
    loadAndEnhance();
  }
})();
