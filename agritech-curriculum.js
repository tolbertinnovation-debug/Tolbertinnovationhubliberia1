/* TIH Complete AgriTech & Digital Agriculture Professional Certificate.
   Rebuilds COURSES_DB.agritech into the full 20-module program taking a
   beginner to an AgriTech & digital agriculture professional: agriculture
   fundamentals, digital transformation, climate-smart farming, farm
   management, precision agriculture, IoT, drones, farm data & analytics,
   agribusiness, digital marketing, food safety, finance, AI, policy,
   professional skills, real-world projects, a capstone and a graduation module.
   Every content lesson has a video + printable notes; project lessons carry
   briefs and downloadable templates. Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'agritech';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._atFullBuilt) return;

  var V = ['ev-4uQzdTXI', 'QijsZjlvxh4', 'l8nFgIhK7bw', 'yoeVcRlj1WI', 'GcPdvSj6CbE', 'dsYo9rBPQGo', 'gHfEm1z-3iY', 'pun14jec_Xk', 'EEcy1swBlRo', 'qwNVNE83Udo', 'XyGtTvH_NXY', 'sdMZ_HCAGO4', 'niYA0qrUJiE', 'WUvWHlCsDk4', 'BHoG5zhPj7Y', 'WgqAejCz2gM'];
  var VIDEOS = {
    orientation: ['5y6iu4-xdFc'],
    agri: ['8P72xIx4teA'],
    digital: ['_egBWcIX964'],
    climate: ['MX97GhUKE_8'],
    farmmgmt: ['cwZXdGPxUmg'],
    precision: ['hCW5RWqi9L8'],
    iot: ['5y6iu4-xdFc'],
    drones: ['5y6iu4-xdFc'],
    data: ['5y6iu4-xdFc'],
    agribusiness: ['5y6iu4-xdFc'],
    marketing: ['5y6iu4-xdFc'],
    foodsafety: ['5y6iu4-xdFc'],
    finance: ['5y6iu4-xdFc'],
    ai: ['5y6iu4-xdFc'],
    policy: ['5y6iu4-xdFc'],
    professional: ['5y6iu4-xdFc'],
    projects: ['5y6iu4-xdFc'],
    career: ['5y6iu4-xdFc'],
    capstone: ['5y6iu4-xdFc'],
    assessment: ['5y6iu4-xdFc']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is AgriTech?', 'What is Digital Agriculture?', 'Careers in AgriTech', 'The Future of Agriculture', 'Course Roadmap', 'Learning Resources', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Introduction to Agriculture', '🌱', 'agri', 'content', ['Fundamentals of Agriculture', 'Crop Production', 'Livestock Production', 'Agricultural Systems', 'Soil Science Basics', 'Plant Biology', 'Farm Ecosystems', 'Agricultural Terminology', 'Food Security', 'Sustainable Agriculture']],
    [3, 'Digital Transformation in Agriculture', '📡', 'digital', 'content', ['Digital Agriculture Overview', 'Smart Farming Concepts', 'Precision Agriculture', 'Digital Farm Management', 'Agricultural Innovation', 'Data-Driven Farming', 'Farm Automation', 'Agricultural Information Systems', 'Emerging Technologies', 'AgriTech Trends']],
    [4, 'Climate-Smart Agriculture', '🌍', 'climate', 'content', ['Climate Change and Agriculture', 'Climate-Smart Farming', 'Water Conservation', 'Soil Conservation', 'Sustainable Irrigation', 'Crop Rotation', 'Organic Farming', 'Carbon Farming', 'Biodiversity Conservation', 'Environmental Stewardship']],
    [5, 'Farm Management', '📋', 'farmmgmt', 'content', ['Farm Planning', 'Resource Management', 'Farm Budgeting', 'Record Keeping', 'Farm Productivity', 'Labor Management', 'Farm Safety', 'Agricultural Risk Management', 'Farm Performance Evaluation', 'Farm Business Planning']],
    [6, 'Precision Agriculture', '🎯', 'precision', 'content', ['GPS in Agriculture', 'Geographic Information Systems (GIS)', 'Remote Sensing', 'Yield Monitoring', 'Variable Rate Technology', 'Precision Irrigation', 'Soil Mapping', 'Precision Crop Management', 'Precision Livestock Farming', 'Precision Agriculture Project']],
    [7, 'Internet of Things (IoT) in Agriculture', '📶', 'iot', 'content', ['Introduction to IoT', 'Smart Sensors', 'Soil Moisture Sensors', 'Weather Stations', 'Smart Irrigation Systems', 'Livestock Monitoring', 'Greenhouse Automation', 'IoT Data Collection', 'IoT Farm Management', 'IoT Case Studies']],
    [8, 'Drones & Remote Monitoring', '🚁', 'drones', 'content', ['Drone Technology', 'Agricultural Drone Applications', 'Crop Monitoring', 'Field Mapping', 'Crop Health Assessment', 'Pest Detection', 'Drone Safety', 'Drone Regulations', 'Drone Data Analysis', 'Drone Demonstration Project']],
    [9, 'Farm Data & Analytics', '📊', 'data', 'content', ['Data Collection', 'Farm Management Software', 'Spreadsheet Analysis', 'Agricultural Dashboards', 'Data Visualization', 'Yield Analysis', 'Financial Analysis', 'Decision-Making Using Data', 'Predictive Agriculture', 'Data Analytics Project']],
    [10, 'Agribusiness & Entrepreneurship', '💼', 'agribusiness', 'content', ['Agribusiness Fundamentals', 'Agricultural Value Chains', 'Market Research', 'Business Model Development', 'Financial Planning', 'Agricultural Marketing', 'Branding Farm Products', 'Accessing Agricultural Finance', 'Agribusiness Innovation', 'Business Plan Development']],
    [11, 'Digital Marketing for Agriculture', '📣', 'marketing', 'content', ['Social Media Marketing', 'Farm Branding', 'E-Commerce for Agriculture', 'Online Marketplaces', 'Customer Relationship Management', 'Digital Advertising', 'Content Marketing', 'Agricultural Storytelling', 'Sales Strategies', 'Marketing Campaign Project']],
    [12, 'Food Safety & Quality Management', '✅', 'foodsafety', 'content', ['Food Safety Principles', 'Good Agricultural Practices (GAP)', 'Post-Harvest Handling', 'Food Storage', 'Food Processing Basics', 'Quality Assurance', 'Traceability Systems', 'Food Standards & Compliance']],
    [13, 'Agricultural Finance & Investment', '💰', 'finance', 'content', ['Agricultural Economics', 'Farm Budgeting', 'Financial Statements', 'Investment Planning', 'Agricultural Loans', 'Insurance in Agriculture', 'Grant Opportunities', 'Financial Risk Management']],
    [14, 'AI & Emerging Technologies in Agriculture', '🤖', 'ai', 'content', ['Artificial Intelligence in Agriculture', 'Machine Learning Basics', 'Computer Vision for Farming', 'Predictive Analytics', 'Robotics in Agriculture', 'Blockchain in Agriculture', 'AI Farm Management Tools', 'Future Trends in AgriTech']],
    [15, 'Agricultural Policies & Sustainability', '🏛️', 'policy', 'content', ['Agricultural Policies', 'Land Use Management', 'Sustainable Development Goals (SDGs)', 'Environmental Regulations', 'Agricultural Cooperatives', 'Rural Development', 'Gender in Agriculture', 'Agricultural Extension Services']],
    [16, 'Professional Skills', '🌟', 'professional', 'content', ['Business Communication', 'Leadership', 'Project Management', 'Proposal Writing', 'Report Writing', 'Teamwork', 'Problem Solving', 'Professional Ethics']],
    [17, 'Real-World AgriTech Projects', '🏗️', 'projects', 'projects', ['Smart Farm Design', 'Precision Farming Plan', 'Digital Farm Record System', 'Irrigation Management Plan', 'Agribusiness Startup Plan', 'Farm Marketing Campaign', 'Climate-Smart Agriculture Project', 'Data Analytics Project', 'Community Agriculture Initiative', 'Agricultural Innovation Pitch']],
    [18, 'Career Development', '📈', 'career', 'content', ['Building an AgriTech Portfolio', 'Resume Writing', 'LinkedIn Optimization', 'Interview Preparation', 'Freelancing Opportunities', 'Consulting Opportunities', 'Professional Certifications', 'Career Growth Plan']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Identify an Agricultural Challenge', 'Conduct Farm Research', 'Design a Digital Agriculture Solution', 'Develop an Agribusiness Plan', 'Present a Precision Farming Strategy', 'Prepare a Budget', 'Final Presentation', 'Project Evaluation']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Agriculture Fundamentals Assessment', 'Precision Agriculture Assessment', 'IoT & Drone Technology Assessment', 'Farm Management Assessment', 'Agribusiness Assessment', 'Data Analytics Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'AgriTech foundations', agri: 'agriculture fundamentals', digital: 'digital transformation in agriculture', climate: 'climate-smart agriculture', farmmgmt: 'farm management', precision: 'precision agriculture', iot: 'IoT in agriculture', drones: 'drones & remote monitoring', data: 'farm data & analytics', agribusiness: 'agribusiness & entrepreneurship', marketing: 'digital marketing for agriculture', foodsafety: 'food safety & quality', finance: 'agricultural finance & investment', ai: 'AI & emerging technologies', policy: 'agricultural policy & sustainability', professional: 'professional skills', projects: 'applied AgriTech projects', career: 'AgriTech careers', capstone: 'your capstone project', assessment: 'your knowledge' };

  var TEMPLATES = {
    budget: '<h4>📥 Template: Farm Budget</h4><ul><li>Income: crops/livestock (units × price)</li><li>Variable costs: seed, feed, fertiliser, labour, fuel</li><li>Fixed costs: land, equipment, insurance</li><li>Gross margin &amp; net profit</li><li>Cash-flow by season/month</li></ul>',
    record: '<h4>📥 Template: Crop Record Book</h4><ul><li>Field/plot ID &amp; crop</li><li>Planting date, variety, inputs used</li><li>Activities (irrigation, spraying, weeding) &amp; dates</li><li>Pest/disease observations</li><li>Harvest date, yield &amp; sales</li></ul>',
    business: '<h4>📥 Template: Agribusiness Plan</h4><ol><li>Executive summary</li><li>Product/enterprise &amp; value chain</li><li>Market &amp; customers</li><li>Marketing &amp; sales plan</li><li>Operations &amp; production plan</li><li>Financial plan &amp; funding</li><li>Risks &amp; sustainability</li></ol>',
    precision: '<h4>📥 Checklist: Precision Farming</h4><ul><li>Define management zones (soil, yield)</li><li>Collect GPS/GIS &amp; sensor data</li><li>Apply variable-rate inputs</li><li>Monitor with remote sensing/drones</li><li>Analyse yield vs inputs</li><li>Adjust for next season</li></ul>',
    irrigation: '<h4>📥 Tool: Irrigation Planning</h4><ul><li>Crop water requirement (stage-based)</li><li>Soil type &amp; moisture level</li><li>Water source &amp; system (drip/sprinkler)</li><li>Schedule (frequency &amp; volume)</li><li>Monitoring with soil-moisture sensors</li></ul>',
    gis: '<h4>📥 Resource: GIS Practice Data</h4><p>Practise in QGIS/Google Earth with:</p><ul><li>A field boundary map (draw your plot)</li><li>Soil &amp; slope layers</li><li>Yield points to map zones</li><li>Label features and calculate area</li></ul>',
    proposal: '<h4>📥 Template: Proposal</h4><ul><li>Problem/need &amp; evidence</li><li>Objectives &amp; activities</li><li>Timeline &amp; responsibilities</li><li>Budget &amp; justification</li><li>Expected impact &amp; sustainability</li></ul>'
  };
  function templateFor(name) {
    if (/Farm Budget|Farm Budgeting|Prepare a Budget/i.test(name)) return TEMPLATES.budget;
    if (/Record Keeping|Crop Record|Digital Farm Record/i.test(name)) return TEMPLATES.record;
    if (/Business Plan Development|Agribusiness Startup Plan|Develop an Agribusiness Plan|Business Model Development/i.test(name)) return TEMPLATES.business;
    if (/Precision Crop Management|Precision Farming Plan|Precision Agriculture Project|Present a Precision Farming Strategy/i.test(name)) return TEMPLATES.precision;
    if (/Irrigation|Sustainable Irrigation|Precision Irrigation|Irrigation Management Plan/i.test(name)) return TEMPLATES.irrigation;
    if (/Geographic Information Systems|GIS|Soil Mapping|Field Mapping/i.test(name)) return TEMPLATES.gis;
    if (/Proposal Writing/i.test(name)) return TEMPLATES.proposal;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'AgriTech skills';
    var focus = position % 2 ? 'practical technique, real farm examples and hands-on application' : 'understanding the concept, applying it on a farm and reviewing the result';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AgriTech · ' + esc(moduleTitle) + '</strong><span>Digital agriculture</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and why it matters for modern farming.</li>' +
      '<li>See how farmers and agribusinesses apply it in the real world.</li>' +
      '<li>Apply it to a real or sample farm and note one decision it improves.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian farm, cooperative or agribusiness.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Apply <em>' + esc(name) + '</em> to a sample farm or dataset.</li>' +
      '<li><strong>Exercise 2:</strong> Explain how it improves productivity, sustainability or profit.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming an AgriTech professional.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on AgriTech project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Produce the deliverable for a real or realistic farm/agribusiness and add it to your digital farm portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Define the farm/context, the goal and the data you need.</li><li>Build the plan/design/analysis using the tools from the course.</li><li>Review it, quantify the expected benefit, and finalise it professionally.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete farm plan/design/analysis document for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'AgriTech refers to:', opts: ['Only tractors', 'Using technology to improve agriculture', 'Only chemicals', 'Avoiding farming'], correct: 1, exp: 'AgriTech applies technology to make farming more productive and sustainable.' },
      { q: 'Digital agriculture uses tools such as:', opts: ['Only hand tools', 'Data, sensors, GPS, drones and software', 'Only animals', 'None'], correct: 1, exp: 'Digital agriculture combines data and digital tools on the farm.' },
      { q: 'A key benefit of AgriTech is:', opts: ['Lower yields', 'Better decisions, higher yields and less waste', 'More guesswork', 'Higher costs only'], correct: 1, exp: 'Technology improves decisions, efficiency and yields.' },
      { q: 'The best way to learn AgriTech is to:', opts: ['Only read', 'Apply concepts to a real or sample farm', 'Avoid data', 'Memorise terms'], correct: 1, exp: 'Hands-on application builds real AgriTech skill.' },
      { q: 'Sustainable food production aims to:', opts: ['Deplete resources', 'Meet needs today without harming the future', 'Ignore the environment', 'Reduce all output'], correct: 1, exp: 'Sustainability balances production with environmental care.' },
      { q: 'The capstone project helps you:', opts: ['Skip work', 'Apply the whole program to a real agricultural challenge', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates everything into one real solution.' }
    ],
    agri: [
      { q: 'Soil health is important because it:', opts: ['Does not matter', 'Directly affects crop growth and yield', 'Only affects colour', 'Is only for flowers'], correct: 1, exp: 'Healthy soil supports strong, productive crops.' },
      { q: 'Crop rotation helps by:', opts: ['Depleting soil', 'Improving soil fertility and reducing pests', 'Wasting land', 'Doing nothing'], correct: 1, exp: 'Rotation restores nutrients and breaks pest cycles.' },
      { q: 'Food security means people have:', opts: ['No food', 'Reliable access to enough safe, nutritious food', 'Only imported food', 'Only cash crops'], correct: 1, exp: 'Food security is reliable access to adequate, safe food.' },
      { q: 'Livestock production involves:', opts: ['Only crops', 'Raising animals for food and products', 'Only fishing', 'Only trees'], correct: 1, exp: 'Livestock production raises animals for meat, milk, eggs, etc.' },
      { q: 'A farm ecosystem includes:', opts: ['Only crops', 'Soil, water, plants, animals and their interactions', 'Only machines', 'Only the farmer'], correct: 1, exp: 'It is the living and non-living system on the farm.' },
      { q: 'Sustainable agriculture focuses on:', opts: ['Short-term profit only', 'Long-term productivity, environment and community', 'Ignoring soil', 'Maximum chemicals'], correct: 1, exp: 'It balances economic, environmental and social goals.' }
    ],
    digital: [
      { q: 'Smart farming means using:', opts: ['No technology', 'Data and connected devices to manage the farm', 'Only manual labour', 'Guesswork'], correct: 1, exp: 'Smart farming uses data and connected tech to optimise the farm.' },
      { q: 'Data-driven farming makes decisions based on:', opts: ['Feelings', 'Collected farm and environmental data', 'Random choice', 'Tradition only'], correct: 1, exp: 'Decisions come from real data, not guesswork.' },
      { q: 'Farm automation can:', opts: ['Increase manual work', 'Reduce repetitive tasks and improve efficiency', 'Lower yields', 'Do nothing'], correct: 1, exp: 'Automation handles repetitive tasks efficiently.' },
      { q: 'Digital farm management software helps you:', opts: ['Lose records', 'Plan, track and analyse farm operations', 'Avoid planning', 'Only chat'], correct: 1, exp: 'It centralises planning, records and analysis.' },
      { q: 'An emerging AgriTech trend is:', opts: ['Less data', 'AI, IoT sensors and precision agriculture', 'Only hand tools', 'No innovation'], correct: 1, exp: 'AI, IoT and precision ag are key emerging trends.' },
      { q: 'Agricultural information systems store and manage:', opts: ['Only photos', 'Farm data for better decisions', 'Nothing', 'Only music'], correct: 1, exp: 'They manage data to support decision-making.' }
    ],
    climate: [
      { q: 'Climate-smart agriculture aims to:', opts: ['Ignore climate', 'Increase productivity while adapting to and reducing climate impact', 'Waste water', 'Cut all output'], correct: 1, exp: 'CSA boosts yields, builds resilience and cuts emissions.' },
      { q: 'Water conservation on a farm includes:', opts: ['Wasting water', 'Efficient irrigation like drip systems', 'Flooding fields always', 'Ignoring rainfall'], correct: 1, exp: 'Efficient irrigation conserves water.' },
      { q: 'Soil conservation practices include:', opts: ['Bare soil', 'Cover crops, mulching and reduced tillage', 'Constant ploughing', 'Removing all plants'], correct: 1, exp: 'They protect soil from erosion and loss.' },
      { q: 'Organic farming avoids:', opts: ['All plants', 'Synthetic chemicals in favour of natural methods', 'Soil', 'Water'], correct: 1, exp: 'Organic farming relies on natural inputs and methods.' },
      { q: 'Carbon farming helps by:', opts: ['Releasing more carbon', 'Capturing/storing carbon in soil and plants', 'Ignoring emissions', 'Burning fields'], correct: 1, exp: 'It sequesters carbon, aiding climate mitigation.' },
      { q: 'Biodiversity on a farm:', opts: ['Is harmful', 'Supports pollination, pest control and resilience', 'Should be removed', 'Does nothing'], correct: 1, exp: 'Diverse ecosystems make farms more resilient.' }
    ],
    farmmgmt: [
      { q: 'Farm record keeping helps you:', opts: ['Forget everything', 'Track activities, costs and yields for better decisions', 'Avoid planning', 'Only for tax'], correct: 1, exp: 'Records support analysis and better management.' },
      { q: 'A farm budget helps you:', opts: ['Spend randomly', 'Plan income, costs and profit', 'Ignore finances', 'Lose money'], correct: 1, exp: 'Budgets plan and control farm finances.' },
      { q: 'Agricultural risk management addresses risks like:', opts: ['None', 'Weather, pests, price and disease', 'Only theft', 'Only fuel'], correct: 1, exp: 'Farms face weather, pest, market and disease risks.' },
      { q: 'Farm productivity measures:', opts: ['Nothing', 'Output relative to inputs (e.g. yield per hectare)', 'Only rainfall', 'Only labour hours'], correct: 1, exp: 'Productivity relates output to resources used.' },
      { q: 'Good resource management means:', opts: ['Wasting inputs', 'Using land, water, labour and inputs efficiently', 'Ignoring costs', 'Overusing chemicals'], correct: 1, exp: 'Efficient use of resources raises profitability.' },
      { q: 'Farm safety practices protect:', opts: ['Nothing', 'Workers from injury and hazards', 'Only machines', 'Only crops'], correct: 1, exp: 'Safety practices protect people on the farm.' }
    ],
    precision: [
      { q: 'Precision agriculture applies inputs:', opts: ['Uniformly everywhere', 'Where and when they are needed, using data', 'Randomly', 'Never'], correct: 1, exp: 'It targets inputs precisely to save cost and boost yield.' },
      { q: 'GPS in agriculture is used for:', opts: ['Cooking', 'Accurate field mapping and guidance', 'Nothing', 'Only phones'], correct: 1, exp: 'GPS enables precise positioning and mapping.' },
      { q: 'GIS is used to:', opts: ['Play games', 'Map and analyse spatial farm data', 'Send email', 'Cook'], correct: 1, exp: 'GIS maps and analyses geographic farm data.' },
      { q: 'Remote sensing gathers data using:', opts: ['Hand tools', 'Satellites or drones from a distance', 'Only soil tests', 'Guessing'], correct: 1, exp: 'Remote sensing captures field data from above.' },
      { q: 'Variable Rate Technology (VRT) applies inputs:', opts: ['The same everywhere', 'At different rates across the field as needed', 'Never', 'Only once'], correct: 1, exp: 'VRT varies input rates by zone need.' },
      { q: 'Yield monitoring helps farmers:', opts: ['Ignore results', 'See where yields are high/low to improve', 'Waste seed', 'Do nothing'], correct: 1, exp: 'Yield maps reveal where to improve.' }
    ],
    iot: [
      { q: 'IoT in agriculture means:', opts: ['No devices', 'Connected sensors/devices sharing farm data', 'Only tractors', 'Only phones'], correct: 1, exp: 'IoT links sensors and devices to collect and act on data.' },
      { q: 'A soil moisture sensor helps you:', opts: ['Guess watering', 'Know when and how much to irrigate', 'Ignore soil', 'Only measure air'], correct: 1, exp: 'It guides precise, efficient irrigation.' },
      { q: 'A weather station on a farm provides:', opts: ['Nothing', 'Local weather data for decisions', 'Only the time', 'Only photos'], correct: 1, exp: 'Local weather data supports planning and spraying decisions.' },
      { q: 'Smart irrigation systems:', opts: ['Waste water', 'Water crops automatically based on data', 'Never work', 'Only manual'], correct: 1, exp: 'They irrigate based on sensor/weather data.' },
      { q: 'Livestock monitoring devices track:', opts: ['Nothing', 'Animal health, location and activity', 'Only the weather', 'Only crops'], correct: 1, exp: 'They monitor animal health and behaviour.' },
      { q: 'Greenhouse automation controls:', opts: ['Nothing', 'Temperature, humidity and irrigation automatically', 'Only lights outdoors', 'Only doors'], correct: 1, exp: 'Automation maintains ideal growing conditions.' }
    ],
    drones: [
      { q: 'Agricultural drones are used to:', opts: ['Deliver mail only', 'Map fields and monitor crop health', 'Cook', 'Nothing'], correct: 1, exp: 'Drones map fields and assess crop health from above.' },
      { q: 'Drone crop monitoring can detect:', opts: ['Nothing', 'Stress, pests and uneven growth early', 'Only colours', 'Only weather'], correct: 1, exp: 'Drones spot problems early for quick action.' },
      { q: 'Before flying a drone you should:', opts: ['Ignore rules', 'Know and follow local drone regulations', 'Fly anywhere', 'Skip safety'], correct: 1, exp: 'Follow regulations and safety rules when flying.' },
      { q: 'Field mapping with drones produces:', opts: ['Nothing', 'Accurate maps and imagery of the field', 'Only sound', 'Only text'], correct: 1, exp: 'Drones create detailed field maps and orthomosaics.' },
      { q: 'Drone data analysis turns images into:', opts: ['Nothing', 'Useful insights (e.g. vegetation indices like NDVI)', 'Only photos to delete', 'Music'], correct: 1, exp: 'Analysis converts imagery into actionable indices.' },
      { q: 'Drone safety includes:', opts: ['Flying near people carelessly', 'Checking the aircraft, weather and airspace', 'Ignoring battery', 'No planning'], correct: 1, exp: 'Safe operation checks equipment, weather and airspace.' }
    ],
    data: [
      { q: 'Farm data analytics helps you:', opts: ['Guess', 'Turn farm data into better decisions', 'Ignore data', 'Only store files'], correct: 1, exp: 'Analytics converts data into decisions.' },
      { q: 'A spreadsheet is useful for:', opts: ['Only drawing', 'Recording and analysing farm data', 'Playing music', 'Nothing'], correct: 1, exp: 'Spreadsheets record and calculate farm data.' },
      { q: 'Data visualization (charts) helps you:', opts: ['Hide data', 'See trends and patterns quickly', 'Delete data', 'Confuse people'], correct: 1, exp: 'Charts reveal trends at a glance.' },
      { q: 'Predictive agriculture uses data to:', opts: ['Look only at the past', 'Forecast yields, weather or pests', 'Ignore the future', 'Do nothing'], correct: 1, exp: 'It forecasts future outcomes to plan ahead.' },
      { q: 'An agricultural dashboard shows:', opts: ['Nothing', 'Key farm metrics in one view', 'Only photos', 'Only email'], correct: 1, exp: 'Dashboards summarise key metrics for quick decisions.' },
      { q: 'Good decision-making with data requires:', opts: ['Bad data', 'Accurate, relevant data and clear analysis', 'Guessing', 'Ignoring results'], correct: 1, exp: 'Reliable data plus analysis drives good decisions.' }
    ],
    agribusiness: [
      { q: 'An agricultural value chain covers:', opts: ['Only farming', 'All steps from farm to consumer (input, produce, process, market)', 'Only selling', 'Only transport'], correct: 1, exp: 'The value chain spans inputs to the final consumer.' },
      { q: 'Market research helps an agribusiness:', opts: ['Guess demand', 'Understand customers, demand and competition', 'Ignore buyers', 'Set no price'], correct: 1, exp: 'Research reveals what the market needs and pays.' },
      { q: 'Branding farm products helps you:', opts: ['Blend in', 'Stand out and build customer trust', 'Lower quality', 'Hide the product'], correct: 1, exp: 'A brand differentiates and builds trust.' },
      { q: 'Accessing agricultural finance can come from:', opts: ['Nowhere', 'Loans, grants, cooperatives and investors', 'Only cash under the bed', 'Only gifts'], correct: 1, exp: 'Finance sources include loans, grants and investors.' },
      { q: 'A business plan for a farm should include:', opts: ['Nothing', 'Market, operations, finance and risks', 'Only a logo', 'Only the crop'], correct: 1, exp: 'A plan covers market, operations, finance and risk.' },
      { q: 'Adding value (e.g. processing) usually:', opts: ['Lowers income', 'Increases the price/income from produce', 'Wastes crops', 'Does nothing'], correct: 1, exp: 'Processing and packaging raise the value captured.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', agri: 'agri', digital: 'digital', climate: 'climate', farmmgmt: 'farmmgmt', precision: 'precision', iot: 'iot', drones: 'drones', data: 'data', agribusiness: 'agribusiness', marketing: 'agribusiness', foodsafety: 'agri', finance: 'farmmgmt', ai: 'digital', policy: 'general', professional: 'general', projects: 'general', career: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.agri, BANK.digital, BANK.climate, BANK.farmmgmt, BANK.precision, BANK.iot, BANK.drones, BANK.data, BANK.agribusiness);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  /* Authored per-topic questions (agritech-topic-quizzes.js) take priority over
     the shared pools above. pickQuestions() draws the first N of a pool keyed by
     broad skill, so the 162 quizzes in this course held very few distinct
     questions between them and the same question was asked many times over. */
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, TQ_mod = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; TQ_mod = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['agritech']) || {};
    Object.keys(src).forEach(function (k) {
      var m = String(k).match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
      if (m) TQ_mod[m[1] + '|' + normQ(m[2])] = src[k];
      else TQ_plain[normQ(k)] = src[k];
    });
  }
  function topicQuestions(moduleNum, name) {
    buildTopicIndex();
    var arr = TQ_mod[moduleNum + '|' + normQ(name)] || TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};   // quizId -> { module, name }
  var assessIndex = [];     // { quizId, module, count, scope }
  function practiceQuiz(key, name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(moduleNum, name);
    if (authored) return { title: 'Practice: ' + name, moduleNum: 1, questions: authored };
    return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) };
  }
  function assessmentQuiz(key, name, count, moduleNum, quizId) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count,
                                   scope: (moduleNum >= 17 ? 'course' : 'module') });
    return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) };
  }
  function assessmentKey(name) {
    if (/Precision/i.test(name)) return 'precision';
    if (/IoT|Drone/i.test(name)) return 'iot';
    if (/Farm Management/i.test(name)) return 'farmmgmt';
    if (/Agribusiness/i.test(name)) return 'agribusiness';
    if (/Data Analytics/i.test(name)) return 'data';
    if (/Agriculture Fundamentals|Fundamentals/i.test(name)) return 'agri';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'at-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15, num, qid);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–18.</li><li>Complete the real-world AgriTech projects in Module 17 (10 projects).</li><li>Complete the capstone in Module 19 and submit your digital farm portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'at-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count, num, aid);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
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
      var pqid = 'at-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete AgriTech & Digital Agriculture Professional Certificate',
    shortDesc: 'A full 20-module program from beginner to AgriTech professional: agriculture fundamentals, digital transformation, climate-smart farming, farm management, precision agriculture, IoT, drones, farm data & analytics, agribusiness, digital marketing, food safety, finance, AI, policy, 10 real-world projects, a capstone and a Certificate of Completion.',
    category: 'Agriculture & Technology',
    icon: ex.icon || '🌾',
    gradient: ex.gradient || 'linear-gradient(135deg,#3f6212,#84cc16)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH agri-learners',
    duration: '150h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$95',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-AGRITECH-0001',
    learn: [
      'Understand modern farming, digital agriculture and climate-smart practices',
      'Manage farms with planning, budgeting, records and risk management',
      'Apply precision agriculture, IoT sensors and drones for monitoring',
      'Collect and analyse farm data to make better decisions',
      'Build an agribusiness with value chains, marketing and finance',
      'Use AI and emerging AgriTech, and build a digital farm portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A device with a spreadsheet; internet for tools and research',
      'Interest in applying digital skills to farming and agribusiness'
    ],
    about: [
      'This is the complete TIH AgriTech & Digital Agriculture Professional Certificate, rebuilt into twenty modules that take you from the basics to professional practice in modern, digital agriculture.',
      'Every content lesson has a video and printable notes; downloadable resources cover Farm Budget templates, Crop Record Books, Business Plan templates, Precision Farming checklists, Irrigation Planning tools, GIS practice data and Proposal templates. Ten real-world projects and a capstone build your portfolio.',
      'Software & tools: Microsoft Excel, Google Sheets, QGIS, Google Earth, farm management software, ChatGPT, Canva, drone mapping software, weather/climate apps and IoT dashboards. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _atFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  /* agritech-topic-quizzes.js is fetched only when this course is open, so it can
     land after this builder has run. Re-apply then: the player holds a reference
     to this same quizzes object and reads it afresh each time a quiz opens. */
  window.tihApplyAgritechTopicQuizzes = function () {
    TQ_plain = null; TQ_mod = null;
    var applied = 0;
    var byModule = {};
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.module, meta.name);
      if (!authored) return;
      if (quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
      (byModule[meta.module] = byModule[meta.module] || []).push(authored);
    });
    /* Module and course assessments draw from the authored questions rather than
       the shared pools, taking one from each topic in turn so an assessment
       samples across the module instead of exhausting a single topic. */
    function interleave(groups) {
      var out = [], depth = 0, added = true;
      while (added) {
        added = false;
        for (var i = 0; i < groups.length; i++) {
          if (groups[i][depth]) { out.push(groups[i][depth]); added = true; }
        }
        depth += 1;
      }
      return out;
    }
    var moduleQs = {};
    Object.keys(byModule).forEach(function (m) { moduleQs[m] = interleave(byModule[m]); });
    var moduleNums = Object.keys(moduleQs).sort(function (a, b) { return a - b; });
    var coursePool = interleave(moduleNums.map(function (m) { return moduleQs[m]; }));
    var cursor = 0;
    assessIndex.forEach(function (a) {
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = [];
      if (a.scope === 'module' && moduleQs[a.module] && moduleQs[a.module].length >= a.count) {
        picked = moduleQs[a.module].slice(0, a.count);
      } else if (coursePool.length) {
        for (var i = 0; i < a.count; i++) picked.push(coursePool[(cursor + i) % coursePool.length]);
        cursor = (cursor + a.count) % coursePool.length;
      }
      if (picked.length === a.count) { quiz.questions = picked.map(cloneQ); applied += 1; }
    });
    return applied;
  };

  if (typeof console !== 'undefined' && console.log) {
    console.log('[AGRITECH] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
