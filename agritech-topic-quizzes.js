/* TIH — Authored per-topic quiz questions for the AgriTech certificate.
   agritech-curriculum.js prefers these over its generic skill pools, so every
   topic gets its own three questions rather than the first three of a shared
   bank. Keyed by topic title, matched case- and punctuation-insensitively. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['agritech'] = {
  "Welcome to the Course": [
    {"q": "What is the main aim of this course?", "opts": ["To teach digital tools applied to real farming problems", "To teach farming without any technology", "To teach software development only", "To sell agricultural equipment"], "correct": 0, "exp": "AgriTech is the meeting point of agriculture and digital tools; the course teaches you to apply the tools to real farms."},
    {"q": "What do you need in order to complete the practical work?", "opts": ["A commercial drone and a soil laboratory", "A phone, a notebook and access to one working farm", "A university degree in agriculture", "At least ten hectares of your own land"], "correct": 1, "exp": "Every project is designed to be completed with a phone, a notebook and access to a single working farm."},
    {"q": "What is built in the Module 19 capstone?", "opts": ["A written examination only", "A new tractor design", "A digital farm portfolio", "A company registration certificate"], "correct": 2, "exp": "The capstone asks you to assemble your work into a digital farm portfolio you can show an employer or lender."}
  ],
  "What is AgriTech?": [
    {"q": "What makes a tool count as AgriTech?", "opts": ["It is imported from overseas", "It requires an internet connection", "It is expensive and recently invented", "It changes a farming decision"], "correct": 3, "exp": "The test is whether the tool changes a decision, not how advanced or costly it is."},
    {"q": "Which of these is NOT one of the four problems AgriTech addresses?", "opts": ["Increasing the number of staff a farm employs", "Reducing risk", "Raising yield", "Reducing cost"], "correct": 0, "exp": "The four are yield, cost, risk, and quality/access. Employing more staff is not itself a goal."},
    {"q": "A moisture sensor is installed but its readings are never used. What is it?", "opts": ["Precision agriculture", "Decoration, because no decision changes", "A yield-monitoring system", "Effective AgriTech"], "correct": 1, "exp": "A measurement nobody acts on changes no decision, so it delivers none of the four benefits."}
  ],
  "What is Digital Agriculture?": [
    {"q": "How does digital agriculture differ from AgriTech?", "opts": ["They are exactly the same thing", "AgriTech applies only to livestock", "Digital agriculture is specifically about information and data", "Digital agriculture excludes the use of phones"], "correct": 2, "exp": "AgriTech includes physical innovations; digital agriculture is the information-focused subset."},
    {"q": "Which step in the data cycle do most farms fail at?", "opts": ["Storage", "Visualisation", "Analysis", "Capture"], "correct": 3, "exp": "Getting reliable data recorded consistently is the usual failure point, not the analysis that follows."},
    {"q": "Why does the value of farm records compound over time?", "opts": ["Because several seasons can be compared against each other", "Because software licences get cheaper", "Because files get larger", "Because older data is more accurate"], "correct": 0, "exp": "One season is a snapshot; several seasons allow comparison, which is what turns experience into evidence."}
  ],
  "Careers in AgriTech": [
    {"q": "Which combination is hardest for employers to find?", "opts": ["Someone who can only work in the field", "Someone who can do both field agronomy and data work", "Someone with no agricultural background", "Someone who can only analyse data"], "correct": 1, "exp": "Bridge skills are scarce; most candidates are strong in one family and weak in the other."},
    {"q": "Which of these is a data and technical AgriTech role?", "opts": ["Value-chain officer", "Cooperative chairperson", "GIS technician", "Extension officer"], "correct": 2, "exp": "GIS technician works directly with spatial farm information, placing it in the data and technical family."},
    {"q": "What strengthens an AgriTech application most at interview?", "opts": ["A long list of software names", "Willingness to relocate", "A certificate on its own", "A portfolio of real farm work"], "correct": 3, "exp": "Evidence of real work applied to real farms demonstrates ability in a way a certificate alone cannot."}
  ],
  "The Future of Agriculture": [
    {"q": "Why are traditional fixed planting calendars becoming less reliable?", "opts": ["Because rainfall has become less predictable", "Because calendars are no longer printed", "Because soil no longer holds water", "Because seeds have changed"], "correct": 0, "exp": "Increasing climate variability widens the window in which rains begin, so a fixed date no longer matches conditions."},
    {"q": "What do buyer requirements for proof of origin reward?", "opts": ["Manual harvesting", "Traceability systems", "Larger farm size", "Lower planting density"], "correct": 1, "exp": "Proving where produce came from is exactly what a traceability system provides."},
    {"q": "Why does labour moving to cities push farms towards technology?", "opts": ["Because crops change variety", "Because city workers demand it", "Because fewer hands are available, so each person must cover more ground", "Because land becomes cheaper"], "correct": 2, "exp": "Labour scarcity rewards mechanisation and tools that extend how much one worker can manage."}
  ],
  "Course Roadmap": [
    {"q": "Why do the agricultural foundation modules come first?", "opts": ["Because they are optional", "Because they contain the assessments", "Because they are easier", "Because the technology modules assume that knowledge"], "correct": 3, "exp": "Applying technology requires understanding the system it is applied to, so the foundation must come first."},
    {"q": "Why does the course include six business modules?", "opts": ["Because most AgriTech ventures fail commercially rather than technically", "Because business modules are quicker to teach", "Because farming needs no technical skill", "Because donors require them"], "correct": 0, "exp": "Technical success does not guarantee a viable business, and commercial failure is the more common outcome."},
    {"q": "What is the purpose of the ten projects in Module 17?", "opts": ["To replace the module assessments", "To turn the certificate into a portfolio", "To test typing speed", "To fill time before the capstone"], "correct": 1, "exp": "The projects produce concrete evidence of applied work, which is what a portfolio consists of."}
  ],
  "Learning Resources": [
    {"q": "What is the key question to ask about any agricultural recommendation?", "opts": ["How many people have shared it?", "How much does it cost?", "Under what conditions was it tested?", "Who published it most recently?"], "correct": 2, "exp": "A result only transfers to your farm if the testing conditions resemble yours, so conditions are the first question."},
    {"q": "Why can a yield claim be true and still misleading?", "opts": ["Because advertisements are always false", "Because yield cannot be compared", "Because yields are never measured", "Because the conditions producing it may not match yours"], "correct": 3, "exp": "A genuine result from irrigated loam may not reproduce on rainfed sandy soil, so the context is essential."},
    {"q": "Which source eventually becomes the most trustworthy for your own farm?", "opts": ["Your own farm records", "Advice from another climate zone", "Social media posts", "Product marketing material"], "correct": 0, "exp": "Your own records were produced under exactly the conditions you are making decisions about."}
  ],
  "M1:Certificate Requirements": [
    {"q": "What is the certificate awarded on?", "opts": ["Attendance", "Completed work", "Length of study", "Course fees paid"], "correct": 1, "exp": "The requirements are all outputs: lessons, projects, capstone and assessments."},
    {"q": "When should you choose your capstone farm?", "opts": ["In the final week", "After the examinations", "In the first weeks of the course", "Only if you own land"], "correct": 2, "exp": "Data is gathered throughout the course, so the farm must be selected early."},
    {"q": "What is the most common reason learners fail to graduate?", "opts": ["Lack of internet access", "Choosing a farm that is too small", "The assessments are too difficult", "Leaving project work until after the modules are finished"], "correct": 3, "exp": "The projects and capstone need data gathered along the way, so postponing them creates a shortfall that cannot be closed at the end."}
  ],
  "Fundamentals of Agriculture": [
    {"q": "What are the four things every farming system manages?", "opts": ["Land, water, biology and labour", "Seed, fuel, fertiliser and machinery", "Money, markets, storage and transport", "Sun, wind, rain and soil"], "correct": 0, "exp": "These four cover the physical basis of every farming system regardless of scale."},
    {"q": "Why does adding fertiliser to a water-short crop produce little gain?", "opts": ["Fertiliser is destroyed by drought", "Water is the limiting factor, so nutrients are not the constraint", "Fertiliser only works on large farms", "The crop absorbs fertiliser through leaves"], "correct": 1, "exp": "Improving a factor that is not currently limiting yields little; the binding constraint must be addressed first."},
    {"q": "What distinguishes a farm from a forest?", "opts": ["A farm is smaller", "A farm has no trees", "On a farm somebody decides what grows where and when", "A forest has better soil"], "correct": 2, "exp": "Agriculture is the deliberate management of biological growth, and that deliberate control is the distinction."}
  ],
  "Crop Production": [
    {"q": "Which two decisions usually have the largest effect on yield?", "opts": ["Storage method and transport", "Fertiliser brand and sprayer type", "Weeding frequency and harvest timing", "Variety choice and planting date"], "correct": 3, "exp": "Both are made before planting and set the ceiling for everything that follows."},
    {"q": "Why can good weeding not correct poor land preparation?", "opts": ["Because each stage constrains the ones that follow it", "Because weeding is optional", "Because land preparation only affects soil colour", "Because weeds grow faster on prepared land"], "correct": 0, "exp": "The production sequence is cumulative, so a deficiency at an early stage limits what later stages can achieve."},
    {"q": "At what point should a crop be harvested?", "opts": ["As early as possible", "At physiological maturity", "After the first rain", "When it is convenient"], "correct": 1, "exp": "Harvesting at physiological maturity gives full grain fill without the losses that come from delay."}
  ],
  "Livestock Production": [
    {"q": "What is usually the largest cost in intensive livestock production?", "opts": ["Veterinary medicines", "Transport", "Feed", "Shelter construction"], "correct": 2, "exp": "Feed typically accounts for 60 to 70 percent of production cost in intensive systems."},
    {"q": "Why do records matter more for livestock than for a uniform crop plot?", "opts": ["Because regulations require it", "Because animals cannot be counted", "Because animals are more valuable", "Because individual animals differ and poor performers are otherwise invisible"], "correct": 3, "exp": "Individual variation means that without records the underperforming animals cannot be identified."},
    {"q": "What makes livestock a continuous system unlike crops?", "opts": ["They need feeding, watering and monitoring every day", "They do not need shelter", "They require no health management", "They are harvested once a year"], "correct": 0, "exp": "Daily requirements mean a short lapse can be fatal, unlike a short delay in weeding."}
  ],
  "Agricultural Systems": [
    {"q": "Why do subsistence systems value reliability over maximum yield?", "opts": ["Because they cannot sell surplus", "Because a failed season means the household has no food", "Because yields cannot be measured", "Because they use no inputs"], "correct": 1, "exp": "When the harvest is the household's food supply, avoiding failure matters more than achieving a peak."},
    {"q": "How do mixed crop and livestock systems recycle nutrients?", "opts": ["Livestock produce fertiliser to sell", "Nutrients are imported each season", "Manure fertilises crops and residues feed livestock", "Crops absorb nutrients from the air"], "correct": 2, "exp": "The two enterprises feed each other, which is a central advantage of mixed systems."},
    {"q": "What happens when the fallow period in shifting cultivation is shortened?", "opts": ["Rainfall increases", "Yields improve permanently", "Nothing changes", "The soil degrades because fertility is not restored"], "correct": 3, "exp": "The fallow is what restores fertility, so cutting it short degrades the soil over time."}
  ],
  "Soil Science Basics": [
    {"q": "Which soil property cannot be changed by management?", "opts": ["Texture", "pH", "Structure", "Organic matter"], "correct": 0, "exp": "Texture is the fixed proportion of sand, silt and clay; the others can all be modified."},
    {"q": "What does soil pH control?", "opts": ["How much rain falls", "Which nutrients are chemically available to roots", "How deep the soil is", "The colour of the crop"], "correct": 1, "exp": "pH governs nutrient availability, which is why phosphorus locks up in strongly acidic soil."},
    {"q": "Why do roots need soil structure with air spaces?", "opts": ["To let sunlight reach the roots", "To allow weeds to grow", "Because roots need oxygen as well as water", "To reduce soil weight"], "correct": 2, "exp": "Roots respire, so a soil with no air spaces suffocates them even when water is plentiful."}
  ],
  "Plant Biology": [
    {"q": "When does water stress usually do the most damage?", "opts": ["After harvest", "During land preparation", "Immediately after planting", "During flowering and grain filling"], "correct": 3, "exp": "Flowering and filling are the critical stages when yield is being set, so stress then is disproportionately costly."},
    {"q": "What does nitrogen mainly build in a plant?", "opts": ["Leaves and stems", "Roots only", "Seed coats", "Soil structure"], "correct": 0, "exp": "Nitrogen drives vegetative growth, building the leaf area that powers photosynthesis."},
    {"q": "Why does losing leaf area reduce yield?", "opts": ["Leaves anchor the plant", "Photosynthesis happens in the leaves", "Leaves absorb nutrients from soil", "Leaves store the harvest"], "correct": 1, "exp": "Leaf area drives photosynthesis, so reducing it directly reduces the sugars available for yield."}
  ],
  "Farm Ecosystems": [
    {"q": "Why can pest outbreaks follow spraying rather than precede it?", "opts": ["Because pests become invisible", "Because pesticides feed pests", "Because natural enemies are killed and recover more slowly than pests", "Because spraying attracts pests from other farms"], "correct": 2, "exp": "Broad-spectrum sprays destroy predators and parasitoids, and pests rebound faster than the enemies that controlled them."},
    {"q": "What do mycorrhizal fungi do for a crop?", "opts": ["Kill soil bacteria", "Increase soil acidity", "Provide nitrogen from the air", "Extend root reach for phosphorus and water"], "correct": 3, "exp": "They effectively extend the root system, improving access to phosphorus and water."},
    {"q": "What happens to many fruit and vegetable crops without pollinators?", "opts": ["Flowers set no fruit", "They need less water", "They grow taller", "They ripen early"], "correct": 0, "exp": "Pollination is required for fruit set, so without pollinators the flowers do not produce fruit."}
  ],
  "Agricultural Terminology": [
    {"q": "What is the difference between yield and production?", "opts": ["Production applies only to livestock", "Yield is output per unit area; production is total output", "They mean the same thing", "Yield is measured in money; production in weight"], "correct": 1, "exp": "Yield is per hectare while production is the total, which is why production can rise as yield falls."},
    {"q": "How large is one hectare?", "opts": ["One square kilometre", "1,000 square metres", "10,000 square metres", "100,000 square metres"], "correct": 2, "exp": "A hectare is 10,000 square metres, roughly 2.47 acres."},
    {"q": "What is gross margin?", "opts": ["Yield per hectare", "Total revenue", "Total cost", "Revenue minus variable costs"], "correct": 3, "exp": "Gross margin subtracts variable costs from revenue and is the standard measure of enterprise profitability."}
  ],
  "Food Security": [
    {"q": "What are the four pillars of food security?", "opts": ["Availability, access, utilisation and stability", "Production, storage, transport and sale", "Land, water, seed and labour", "Yield, price, income and trade"], "correct": 0, "exp": "These four together define food security; production alone addresses only availability."},
    {"q": "Why can a country grow enough food and still have hungry people?", "opts": ["Because food is exported by law", "Because households may lack the means to obtain it", "Because yields are never measured", "Because availability is the only pillar"], "correct": 1, "exp": "Access is a separate pillar; food that is present but unaffordable does not deliver food security."},
    {"q": "Which two pillars does post-harvest loss attack directly?", "opts": ["Access and utilisation", "Utilisation and stability", "Availability and stability", "Access and availability"], "correct": 2, "exp": "Spoiled produce reduces the food physically present and undermines supply across the season."}
  ],
  "Sustainable Agriculture": [
    {"q": "What are the three dimensions of sustainable agriculture?", "opts": ["Soil, water and air", "Planting, harvesting and storage", "Local, national and international", "Environmental, economic and social"], "correct": 3, "exp": "All three must hold; failing any one means the practice will not persist."},
    {"q": "Why is an unprofitable farming method not sustainable?", "opts": ["Because the farm cannot continue operating", "Because it uses too much water", "Because it is socially unfair", "Because it damages soil"], "correct": 0, "exp": "Economic viability is one of the three dimensions; a method that bankrupts the farm ends immediately."},
    {"q": "What does crop rotation achieve?", "opts": ["Permanent removal of all pests", "Breaks pest and disease cycles and varies nutrient demand", "Increases soil acidity", "Higher rainfall"], "correct": 1, "exp": "Changing the crop interrupts pest and pathogen life cycles and draws on different nutrients."}
  ],
  "Digital Agriculture Overview": [
    {"q": "What are the four layers of digital agriculture?", "opts": ["Hardware, software, network and cloud", "Soil, water, crop and market", "Sensing, connectivity, analysis and action", "Planting, growing, harvesting and selling"], "correct": 2, "exp": "Each layer feeds the next, and the chain delivers value only if all four function."},
    {"q": "Where do most failed AgriTech projects break?", "opts": ["At the analysis layer", "At the sensing layer", "At the connectivity layer", "At the action layer"], "correct": 3, "exp": "Data is often gathered and analysed successfully but never converted into a change anyone makes."},
    {"q": "How should a digital agriculture system be designed?", "opts": ["Backwards from the decision it should change", "Forwards from the most advanced sensor available", "Around the largest available budget", "Starting with the dashboard"], "correct": 0, "exp": "Beginning from the decision ensures every layer below it exists for a reason."}
  ],
  "Smart Farming Concepts": [
    {"q": "What is the loop at the centre of smart farming?", "opts": ["Buy, install, maintain, replace", "Observe, decide, act, observe the result", "Plant, weed, harvest, store", "Measure, report, file, archive"], "correct": 1, "exp": "Smart farming responds to conditions through a closing feedback loop rather than following a fixed calendar."},
    {"q": "Does smart farming require automation?", "opts": ["Yes, automation is essential", "Only for livestock", "No &mdash; a farmer checking conditions and responding is running the loop", "Only on farms above ten hectares"], "correct": 2, "exp": "What matters is that observation drives the decision, not whether a machine performs it."},
    {"q": "Why does timeliness often beat precision?", "opts": ["Because precision costs nothing", "Because crops grow slowly", "Because precise measurements are illegal", "Because a rough measurement now often supports a better decision than an exact one later"], "correct": 3, "exp": "Decisions have deadlines; an accurate figure that arrives after the moment for action has passed is worth less."}
  ],
  "Precision Agriculture": [
    {"q": "What is precision agriculture fundamentally about?", "opts": ["Managing variation within a field", "Increasing farm size", "Reducing the number of crops grown", "Buying advanced equipment"], "correct": 0, "exp": "The core idea is measuring and responding to within-field variation instead of averaging across it."},
    {"q": "Why does uniform treatment of a variable field waste inputs?", "opts": ["Because machinery cannot travel evenly", "Because the average rate is too much for good areas and too little for poor ones", "Because uniform treatment is slower", "Because inputs expire quickly"], "correct": 1, "exp": "A single rate cannot suit areas with different requirements, so some receives excess and some too little."},
    {"q": "What are management zones?", "opts": ["Areas reserved for storage", "Legal boundaries of a farm", "Groups of similar areas treated differently from each other", "Zones where machinery is prohibited"], "correct": 2, "exp": "Grouping similar areas makes variable treatment practical without managing every square metre separately."}
  ],
  "Digital Farm Management": [
    {"q": "What should every farm record attach to?", "opts": ["A supplier name", "A season only", "A staff member", "A plot and a date"], "correct": 3, "exp": "Attaching records to plot and date is what makes later comparison and explanation possible."},
    {"q": "Why should records not be overwritten?", "opts": ["So that history survives and can be compared", "Because software forbids it", "To reduce typing", "To save storage space"], "correct": 0, "exp": "Keeping one record per event preserves the history that comparison across seasons depends on."},
    {"q": "What can a farmer who records only totals NOT do?", "opts": ["Know total spending", "Compare performance between plots", "Know the season", "Know the supplier"], "correct": 1, "exp": "Without plot-level detail there is no way to attribute inputs to the plots that received them."}
  ],
  "Agricultural Innovation": [
    {"q": "When does an innovation actually count as adopted?", "opts": ["When it is invented", "When it is published", "When farmers take it up", "When it is funded"], "correct": 2, "exp": "Innovation in practice is measured by adoption, not by invention or publication."},
    {"q": "Why do practices that can be tried on a small scale spread faster?", "opts": ["They require government approval", "They produce higher yields automatically", "They cost more", "They allow a farmer to test the risk before committing"], "correct": 3, "exp": "Trialability lets a household limit its exposure while it finds out whether the practice works for them."},
    {"q": "A practice raises average yield but increases variability. Why might a subsistence household reject it?", "opts": ["Because they cannot survive a bad year", "Because it needs no labour", "Because averages are unimportant", "Because they prefer old methods"], "correct": 0, "exp": "When the harvest is the food supply, increased downside risk can outweigh a higher average."}
  ],
  "Data-Driven Farming": [
    {"q": "Why is comparing two different plots often misleading?", "opts": ["Because plots cannot be measured", "Because they differ in more ways than the one you changed", "Because yields are always equal", "Because plots change size"], "correct": 1, "exp": "Confounding factors such as soil depth or water access can explain the difference instead of the treatment."},
    {"q": "How much weight should a single season of results carry?", "opts": ["It is stronger than three seasons", "It is conclusive proof", "It is weak evidence on its own", "It should be ignored entirely"], "correct": 2, "exp": "One season is a sample of one; consistency across seasons is what makes evidence strong."},
    {"q": "What is the better way to test a treatment on one farm?", "opts": ["Compare two distant plots", "Compare with a neighbour's farm", "Compare with last year only", "Split a single plot and treat the halves differently"], "correct": 3, "exp": "Splitting one plot keeps soil and site conditions similar so the treatment is the main difference."}
  ],
  "Farm Automation": [
    {"q": "Which three conditions justify automating a farm task?", "opts": ["The task is repetitive, timing matters, and labour is scarce or costly", "The task is new, seasonal and outdoors", "The farm is large, wealthy and modern", "The task is difficult, dirty and dangerous only"], "correct": 0, "exp": "These three together determine whether automation returns more than it costs."},
    {"q": "Why is sensor-triggered irrigation better than timer-driven?", "opts": ["It uses less electricity", "A timer cannot see actual conditions", "Timers are illegal", "Sensors are cheaper"], "correct": 1, "exp": "A timer irrigates regardless of whether the soil is already wet, so it cannot respond to conditions."},
    {"q": "What does every automated system need?", "opts": ["An internet connection", "A second operator", "A manual override and a failure alarm", "An annual replacement"], "correct": 2, "exp": "Automation fails eventually, and without override and alerting a failure can go unnoticed until damage is done."}
  ],
  "Agricultural Information Systems": [
    {"q": "Why can technically correct advice still produce no change?", "opts": ["Because correct advice is rare", "Because advice must be written", "Because farmers dislike advice", "Because it may arrive in the wrong language, at the wrong time, or from an untrusted source"], "correct": 3, "exp": "The channel determines whether advice is received and acted on, independently of whether it is correct."},
    {"q": "Why is radio effective in rural West Africa?", "opts": ["Because it reaches people in local languages at times they are listening", "Because it is two-way", "Because it is the newest technology", "Because it requires literacy"], "correct": 0, "exp": "It clears the language, timing and access hurdles that block many written channels."},
    {"q": "Why do two-way channels outperform broadcast?", "opts": ["They reach more people", "They surface the questions farmers actually have", "They need no staff", "They cost less"], "correct": 1, "exp": "Feedback reveals real information needs rather than assumed ones."}
  ],
  "Emerging Technologies": [
    {"q": "Which question matters most when judging an emerging technology?", "opts": ["How recently was it released?", "How advanced is it?", "What decision does it change, and at what cost per farm?", "Which company built it?"], "correct": 2, "exp": "Value comes from changed decisions weighed against cost, not from technical sophistication."},
    {"q": "Why did mobile money spread so quickly in rural Africa?", "opts": ["It needed broadband", "It required new devices", "It was heavily regulated", "It worked on phones people already had and solved an immediate problem"], "correct": 3, "exp": "Riding on existing handsets and addressing a real need removed the usual barriers to adoption."},
    {"q": "Why be sceptical of technology demonstrated only on research stations?", "opts": ["Conditions there are not typical of working farms", "Researchers are unreliable", "Stations are always overseas", "Research stations use different crops"], "correct": 0, "exp": "Controlled conditions and expert operation rarely reproduce on a working farm."}
  ],
  "AgriTech Trends": [
    {"q": "Where is value moving in AgriTech?", "opts": ["From data to devices", "From the device to the data and services built on it", "From services to hardware manufacturing", "From farms to laboratories"], "correct": 1, "exp": "Sensing is commoditising while the analysis and services built on the resulting data hold their value."},
    {"q": "Why does prediction depend on record keeping?", "opts": ["Because predictions are stored in records", "Because regulators require records", "Because prediction is only as good as the historical data behind it", "Because records replace sensors"], "correct": 2, "exp": "Forecasting relies on patterns in past data, so without history there is nothing to learn from."},
    {"q": "How can farm records function like collateral?", "opts": ["They guarantee a harvest", "They replace a bank account", "They can be sold", "They let a lender assess risk where there is no physical collateral"], "correct": 3, "exp": "A verifiable yield and repayment history gives the lender a basis for extending credit."}
  ],
  "Climate Change and Agriculture": [
    {"q": "Which rainfall change usually damages West African farming most?", "opts": ["Changes in distribution, such as a shifting onset and dry spells", "More rain at night", "Rain falling more gently", "A small fall in the annual total"], "correct": 0, "exp": "Crops respond to water available at critical stages, so distribution matters more than the annual total."},
    {"q": "Why do higher night temperatures reduce cereal yields?", "opts": ["They damage roots directly", "They reduce grain filling", "They stop photosynthesis entirely", "They increase rainfall"], "correct": 1, "exp": "Warm nights raise respiration and impair grain filling even when daytime conditions appear normal."},
    {"q": "What is the right response to an unpredictable start of the rains?", "opts": ["Build large irrigation dams", "Plant earlier every year", "Flexible planting and shorter-duration varieties", "Abandon the crop"], "correct": 2, "exp": "Flexibility and shorter maturity let the farmer wait for confirmed moisture and still finish before the season ends."}
  ],
  "Climate-Smart Farming": [
    {"q": "What are the three objectives of climate-smart agriculture?", "opts": ["Yield, price and export", "Soil, water and seed", "Training, funding and equipment", "Productivity, resilience and emissions reduction"], "correct": 3, "exp": "All three must be pursued together for a practice to qualify as climate-smart."},
    {"q": "Why does resilience usually matter most for smallholders?", "opts": ["Because a bad season can push a household into a deficit it cannot recover from", "Because donors require it", "Because resilience is cheapest", "Because averages are irrelevant"], "correct": 0, "exp": "When there is no buffer, downside protection matters more than a higher average."},
    {"q": "Why is agroforestry the standard example of climate-smart practice?", "opts": ["It requires no labour", "It serves productivity, resilience and mitigation together", "It eliminates the need for crops", "It is the cheapest option"], "correct": 1, "exp": "Nitrogen fixation, shade, moisture retention and carbon storage address all three objectives at once."}
  ],
  "Water Conservation": [
    {"q": "Why is surface runoff a double loss?", "opts": ["It increases soil acidity", "It attracts pests", "It takes water and topsoil away", "It floods neighbouring farms"], "correct": 2, "exp": "Runoff removes both the water the crop needed and the fertile topsoil it carries."},
    {"q": "What do contour bunds and ridges do?", "opts": ["Increase evaporation", "Deepen the soil", "Direct water off the field quickly", "Run across the slope so water pools and infiltrates"], "correct": 3, "exp": "Running across the slope slows the water and gives it time to soak in."},
    {"q": "What is the cheapest long-term way to increase soil water storage?", "opts": ["Raising soil organic matter", "Deep ploughing every season", "Building a dam", "Installing drip irrigation"], "correct": 0, "exp": "Organic matter increases water-holding capacity and is built from residues, compost and manure."}
  ],
  "Soil Conservation": [
    {"q": "Why is soil loss treated as effectively permanent?", "opts": ["Because soil cannot be moved", "Because soil forms far more slowly than it erodes", "Because replacing soil is illegal", "Because eroded soil is toxic"], "correct": 1, "exp": "Formation takes centuries per centimetre while erosion can remove it in one storm."},
    {"q": "What is the single most effective defence against erosion?", "opts": ["Applying more fertiliser", "Removing all vegetation", "Keeping the soil covered", "Deeper ploughing"], "correct": 2, "exp": "Both water and wind erosion attack bare surface, so cover is the primary protection."},
    {"q": "Why should ploughing follow the contour rather than the slope?", "opts": ["It produces straighter rows", "It is faster", "It uses less fuel", "Furrows running downhill become water channels"], "correct": 3, "exp": "Up-and-down furrows concentrate runoff and develop into rills and then gullies."}
  ],
  "Sustainable Irrigation": [
    {"q": "Roughly what proportion of applied water reaches the crop under drip irrigation?", "opts": ["Over 90 percent", "About 70 percent", "About 50 percent", "About 30 percent"], "correct": 0, "exp": "Drip places water at the root with little evaporation or runoff, exceeding 90 percent efficiency."},
    {"q": "What happens when irrigation exceeds what the root zone can hold?", "opts": ["The crop grows faster", "Water drains past the roots and leaches nutrients", "Salinity decreases permanently", "Infiltration improves"], "correct": 1, "exp": "Water below the root zone is unavailable to the crop and carries nutrients away with it."},
    {"q": "Why does drip irrigation often reduce fungal disease?", "opts": ["It sterilises the soil", "It raises soil temperature", "It keeps the leaves dry", "It applies fungicide"], "correct": 2, "exp": "Many fungal pathogens need leaf wetness, which overhead watering provides and drip avoids."}
  ],
  "Crop Rotation": [
    {"q": "Why does removing a crop for a season reduce its pests?", "opts": ["Pests are killed by sunlight", "Soil becomes toxic to them", "Pests migrate to towns", "Most pests are host-specific and starve without their host"], "correct": 3, "exp": "Host specificity means that removing the host breaks the pest's life cycle."},
    {"q": "Why is a legume commonly followed by a cereal?", "opts": ["Legumes fix nitrogen that the cereal then uses", "Cereals fix nitrogen for legumes", "They are harvested at the same time", "They share the same pests"], "correct": 0, "exp": "Nitrogen fixed by the legume remains in residues and soil for the following cereal."},
    {"q": "Why should a crop not be followed by a close relative?", "opts": ["They ripen at the same time", "They share pests and diseases, so the cycle is not broken", "They have identical prices", "They need the same equipment"], "correct": 1, "exp": "Related crops host the same organisms, so the rotation fails to interrupt them."}
  ],
  "Organic Farming": [
    {"q": "What usually makes organic production economically viable?", "opts": ["Government subsidy alone", "Higher yields than conventional", "Access to a market that pays a premium", "Lower labour requirements"], "correct": 2, "exp": "Yields typically fall and labour rises, so the premium is what makes the economics work."},
    {"q": "What is typically the largest additional cost in organic systems?", "opts": ["Seed", "Transport", "Machinery fuel", "Weeding labour"], "correct": 3, "exp": "Without herbicides, weed control shifts to mechanical and manual methods that demand labour."},
    {"q": "Why does organic certification require a conversion period?", "opts": ["To allow residues to clear and soil biology to establish", "To complete paperwork", "To train the farmer", "To allow prices to rise"], "correct": 0, "exp": "The transition period lets previously applied inputs clear and biological fertility develop."}
  ],
  "Carbon Farming": [
    {"q": "What does additionality mean in carbon credits?", "opts": ["Carbon must be added to the soil by machine", "The carbon must be additional to what would have happened anyway", "Additional farms must join each year", "Extra payment is made for large farms"], "correct": 1, "exp": "Credits pay for sequestration that would not have occurred without the project."},
    {"q": "Why does permanence matter for carbon storage?", "opts": ["Buyers prefer old carbon", "Carbon becomes toxic over time", "Carbon released later cancels the benefit", "Permanent storage is cheaper"], "correct": 2, "exp": "Sequestration only counts if the carbon stays stored; later release undoes it."},
    {"q": "For most smallholders, what is worth more than carbon credit income?", "opts": ["The tree seedlings", "The certification document", "The measurement equipment", "The soil-health benefits of the same practices"], "correct": 3, "exp": "Practices that store carbon also improve fertility and water retention, which usually outweighs modest credit payments."}
  ],
  "Biodiversity Conservation": [
    {"q": "Why is farm biodiversity described as infrastructure?", "opts": ["It provides services the farm would otherwise have to buy", "It is required by law", "It increases land value", "It looks attractive to buyers"], "correct": 0, "exp": "Pollination, pest control and nutrient cycling are productive services supplied by biodiversity."},
    {"q": "What makes monoculture brittle?", "opts": ["It cannot be mechanised", "One resistant pest or price rise leaves no fallback", "It uses no inputs", "It requires more land"], "correct": 1, "exp": "Replacing biological services with purchased inputs removes the redundancy that absorbs shocks."},
    {"q": "Why grow more than one variety of the main crop?", "opts": ["To avoid record keeping", "To confuse buyers", "So a single disease cannot destroy the whole harvest", "To reduce the harvest period"], "correct": 2, "exp": "Different varieties differ in susceptibility, so diversity limits the damage any one pathogen can do."}
  ],
  "Environmental Stewardship": [
    {"q": "Why is losing fertiliser to a stream a double cost?", "opts": ["It reduces rainfall", "It increases the price of fertiliser", "It makes the soil acidic", "It damages the stream and the farm paid for input it did not use"], "correct": 3, "exp": "The nutrients were purchased but never reached the crop, and the loss creates a downstream problem."},
    {"q": "What is the purpose of a buffer strip beside a watercourse?", "opts": ["To trap soil and chemicals before they reach the water", "To provide grazing", "To store equipment", "To mark the boundary"], "correct": 0, "exp": "Vegetated buffers slow runoff and capture sediment and dissolved chemicals before they enter the stream."},
    {"q": "Why should pesticide containers never be reused?", "opts": ["They are needed for returns", "Residues remain and can contaminate food or water", "They are the property of the supplier", "They are difficult to clean"], "correct": 1, "exp": "Residue in the container can contaminate whatever is later stored in it, including food and drinking water."}
  ],
  "Farm Planning": [
    {"q": "What is usually the binding constraint on a smallholding?", "opts": ["Storage space", "Land area", "Peak-period labour or cash at planting", "Seed availability"], "correct": 2, "exp": "Land is often available while labour during peak weeks and cash at planting run out first."},
    {"q": "What does a labour calendar reveal?", "opts": ["Soil fertility by plot", "The market price by month", "Rainfall distribution", "Months where labour demand exceeds what is available"], "correct": 3, "exp": "Laying demand out by month exposes peaks that the household cannot actually staff."},
    {"q": "Why stagger planting dates?", "opts": ["To spread labour demand and market risk", "To confuse pests", "To reduce seed cost", "To simplify record keeping"], "correct": 0, "exp": "Staggering avoids a single labour peak and avoids selling everything into one price."}
  ],
  "Resource Management": [
    {"q": "What question does resource management ask of every resource?", "opts": ["Where was it bought?", "What is the return on the next unit of it?", "How long will it last?", "Who supplied it?"], "correct": 1, "exp": "Comparing marginal returns is what directs each scarce resource to its best use."},
    {"q": "When labour is the binding constraint, returns should be compared per unit of what?", "opts": ["Hectare", "Kilogram", "Labour day", "Litre of fuel"], "correct": 2, "exp": "Returns should be measured against whatever is scarcest, so labour-day is the right denominator."},
    {"q": "Why may hiring equipment beat owning it?", "opts": ["Hiring requires no skill", "Owned equipment cannot be insured", "Hired equipment is newer", "Owned equipment used a few days a year ties up capital"], "correct": 3, "exp": "Low utilisation means the capital locked in ownership earns very little."}
  ],
  "M5:Farm Budgeting": [
    {"q": "What is gross margin?", "opts": ["Revenue minus variable costs", "Revenue minus all costs", "Total revenue", "Yield multiplied by area"], "correct": 0, "exp": "Gross margin subtracts only variable costs, which allows enterprises to be compared fairly."},
    {"q": "Why should unpaid family labour still be valued in a budget?", "opts": ["Tax rules require it", "Otherwise every enterprise appears profitable", "To increase the gross margin", "Because family members demand payment"], "correct": 1, "exp": "Ignoring the cost of labour hides the true return and makes weak enterprises look viable."},
    {"q": "Why test a budget against low yield and low price?", "opts": ["To satisfy lenders only", "To make the budget longer", "To see whether the enterprise survives a poor season", "To reduce variable costs"], "correct": 2, "exp": "An enterprise that only works in the best case is a risk that has not been assessed."}
  ],
  "Record Keeping": [
    {"q": "What four elements does a usable farm record contain?", "opts": ["Who, why, where and when", "Crop, price, buyer and date", "Cost, profit, yield and area", "What, where, when and how much"], "correct": 3, "exp": "Without any one of these the record cannot be linked to a plot, a time or a quantity."},
    {"q": "Why record at the moment rather than at the end of the week?", "opts": ["Because memory reconstructs rather than recalls", "Because weekly records are illegal", "To use more paper", "To keep staff busy"], "correct": 0, "exp": "Delayed recording produces estimates dressed as measurements."},
    {"q": "Why should a record system have few, fixed categories?", "opts": ["Because more categories give better analysis", "Because a complicated system will not be maintained", "Because software limits categories", "To reduce printing cost"], "correct": 1, "exp": "Simplicity is what allows the system to survive a busy period, and a system that lapses is worthless."}
  ],
  "Farm Productivity": [
    {"q": "Why is yield per hectare an incomplete measure of productivity?", "opts": ["It applies only to cereals", "It is difficult to calculate", "It only answers how well land is used", "It cannot be compared over time"], "correct": 2, "exp": "Land is only one input, and often not the scarce one, so it cannot represent overall productivity."},
    {"q": "A change raises yield per hectare but lowers output per labour day. When is this a bad outcome?", "opts": ["When prices are high", "When land is the scarce resource", "Never, since yield rose", "When labour is the scarce resource"], "correct": 3, "exp": "If labour binds, using more of it for a smaller proportional gain reduces overall performance."},
    {"q": "What should a farm compare its productivity against first?", "opts": ["Its own past performance", "National averages", "The largest farm nearby", "Research station results"], "correct": 0, "exp": "Own history holds soil and climate roughly constant, making the comparison meaningful."}
  ],
  "Labor Management": [
    {"q": "Why must labour planning focus on peaks rather than annual totals?", "opts": ["Peaks are cheaper", "Critical tasks must happen in narrow windows or lose their value", "Annual totals cannot be calculated", "Workers prefer peaks"], "correct": 1, "exp": "Timeliness determines value, so a shortfall during the critical weeks cannot be made up later."},
    {"q": "What is a risk of paying task rates for weeding?", "opts": ["Workers refuse the job", "It always costs more", "Speed is rewarded over care, so quality can fall", "It cannot be measured"], "correct": 2, "exp": "A rate paid per row rewards throughput, which can come at the expense of thoroughness."},
    {"q": "How can labour peaks be reduced?", "opts": ["By planting everything on one day", "By reducing plot sizes only", "By harvesting later", "By staggering planting or varying maturity dates"], "correct": 3, "exp": "Separating the timing of operations spreads demand across more weeks."}
  ],
  "Farm Safety": [
    {"q": "Why is controlling a hazard better than relying on care?", "opts": ["Guards protect permanently while attention lapses", "Hazards cannot be controlled", "Care is prohibited", "Care costs more"], "correct": 0, "exp": "Engineering controls work continuously and do not depend on anyone remembering."},
    {"q": "Why must agrochemicals never be decanted into drink bottles?", "opts": ["Bottles are too small", "They may be mistaken for a drink and consumed", "It voids the warranty", "The chemical degrades"], "correct": 1, "exp": "Unlabelled familiar containers are the classic route to accidental poisoning, especially of children."},
    {"q": "How do large livestock most often injure handlers?", "opts": ["By kicking only", "By spreading disease", "By crushing", "By biting"], "correct": 2, "exp": "Being pressed against a wall or gate is the most common serious injury, which is why an escape route matters."}
  ],
  "Agricultural Risk Management": [
    {"q": "What are the four possible responses to a risk?", "opts": ["Ignore, delay, insure or borrow", "Measure, report, file or escalate", "Predict, prevent, punish or recover", "Avoid, reduce, transfer or accept"], "correct": 3, "exp": "Every risk is handled by one of these four, and accepting should be a conscious decision."},
    {"q": "Which risks are the most dangerous to a farm business?", "opts": ["Severe, uninsured risks that have not been identified", "Risks that are already insured", "Risks with low severity", "Frequent minor ones"], "correct": 0, "exp": "An unnamed severe risk has no response planned, so it is met unprepared."},
    {"q": "How does adding a second crop with a different harvest window help?", "opts": ["It removes the need for records", "It reduces production and price risk together", "It guarantees a higher price", "It increases total planted area"], "correct": 1, "exp": "Diversifying across crops and timings spreads exposure to both weather and market movements."}
  ],
  "Farm Performance Evaluation": [
    {"q": "What three causes should an honest evaluation separate?", "opts": ["Past, present and future", "Weather, pests and prices", "Uncontrollable factors, poor execution, and poor planning", "Labour, land and capital"], "correct": 2, "exp": "Distinguishing these is what makes the evaluation actionable rather than an excuse or a self-reproach."},
    {"q": "Why is blaming the weather for everything a problem?", "opts": ["It is difficult to measure", "Weather is never a factor", "It offends farmers", "It prevents identifying what could have been done differently"], "correct": 3, "exp": "If every shortfall is attributed to conditions, no controllable improvement is ever found."},
    {"q": "What should an evaluation produce?", "opts": ["Three specific changes with evidence for each", "A yield figure", "A list of complaints", "A report for the file"], "correct": 0, "exp": "Evaluation is only useful if it results in identified, evidence-backed changes for the next season."}
  ],
  "Farm Business Planning": [
    {"q": "Which section usually decides a funding application?", "opts": ["The summary", "The financial section", "The market section", "The risk section"], "correct": 1, "exp": "Lenders assess whether the numbers hold together and rest on achievable performance."},
    {"q": "What must a monthly cash flow reveal?", "opts": ["The total annual profit only", "The number of employees", "When money is needed and when it arrives", "The soil type of each plot"], "correct": 2, "exp": "Timing gaps between spending and revenue are the central thing a cash flow exposes."},
    {"q": "Why should risks be named explicitly in a business plan?", "opts": ["To lengthen the document", "Because regulations require it", "To discourage lenders", "So the reader can see they are understood and have responses"], "correct": 3, "exp": "A plan that names its risks and responses is more credible than one that appears to have none."}
  ],
  "GPS in Agriculture": [
    {"q": "What accuracy does a typical phone GPS achieve?", "opts": ["About 3 to 10 metres", "About 1 centimetre", "About 100 metres", "About 1 kilometre"], "correct": 0, "exp": "Phone-grade GPS is accurate to a few metres, which is sufficient for mapping plots and marking sample points."},
    {"q": "Why is location described as the key that joins records?", "opts": ["Because it is easy to record", "Because separate datasets can be linked by where they were taken", "Because GPS is free", "Because coordinates never change"], "correct": 1, "exp": "A shared position lets soil results, yields and observations be combined into one picture."},
    {"q": "What degrades GPS accuracy most?", "opts": ["Cold weather", "Low battery", "Obstruction of the sky by canopy or buildings", "Using the device at night"], "correct": 2, "exp": "The receiver needs a clear view of several satellites, so overhead obstruction is the main problem."}
  ],
  "Geographic Information Systems (GIS)": [
    {"q": "What is the central capability of a GIS?", "opts": ["Measuring rainfall", "Printing large maps", "Storing photographs", "Overlaying layers so questions can span several datasets"], "correct": 3, "exp": "Combining layers that share a coordinate system is what allows multi-factor spatial questions."},
    {"q": "Which of these is vector data?", "opts": ["A plot boundary polygon", "A satellite image", "An elevation grid", "A rainfall raster"], "correct": 0, "exp": "Vector data represents discrete features as points, lines and polygons."},
    {"q": "Why must layers share a coordinate reference system?", "opts": ["To reduce file size", "Otherwise they will not align with each other", "To allow printing", "To satisfy software licensing"], "correct": 1, "exp": "Different reference systems place the same ground position at different coordinates, so layers misalign."}
  ],
  "Remote Sensing": [
    {"q": "What does NDVI actually indicate?", "opts": ["The crop variety planted", "The exact cause of crop stress", "Where vegetation differs in vigour from its surroundings", "Soil nutrient content"], "correct": 2, "exp": "It highlights differences in vegetation vigour; identifying the cause needs a field visit."},
    {"q": "What is the main limitation of satellite imagery in humid tropics?", "opts": ["Satellite speed", "Pixel size", "Cost", "Cloud cover"], "correct": 3, "exp": "Persistent cloud blocks optical sensors and can prevent usable images for weeks."},
    {"q": "Why compare imagery across dates rather than using one image?", "opts": ["A single image has little meaning without a baseline", "Single images are illegal", "To reduce file size", "Older images are sharper"], "correct": 0, "exp": "Change over time is what reveals a developing problem; one snapshot has nothing to compare against."}
  ],
  "Yield Monitoring": [
    {"q": "What does yield monitoring add beyond a total harvest figure?", "opts": ["It predicts market prices", "It shows where within the field output varies", "It measures rainfall", "It reduces harvest losses"], "correct": 1, "exp": "Recording output by plot exposes within-field variation that a single total conceals."},
    {"q": "Why must plot areas be accurate?", "opts": ["Because plots must be equal", "To satisfy regulations", "Because yield is weight divided by area", "To calculate rainfall"], "correct": 2, "exp": "An error in area translates directly into an error in the yield figure."},
    {"q": "Which pattern is most worth investigating?", "opts": ["The field average", "An area that varies from season to season", "An area that yields well every year", "An area that yields low consistently"], "correct": 3, "exp": "Consistent underperformance suggests a fixed physical cause that can be found and possibly fixed."}
  ],
  "Variable Rate Technology": [
    {"q": "What determines whether variable rate application pays?", "opts": ["Field variation, input cost, and mapping accuracy", "The size of the farm only", "The crop variety", "The age of the equipment"], "correct": 0, "exp": "Without real variation, an expensive input, and a usable map, the practice returns little."},
    {"q": "What should management zones be built from?", "opts": ["The farmer's preference", "Stable factors such as soil type, depth and historic yield", "Equal-sized squares", "A single season's yield map"], "correct": 1, "exp": "Zones must reflect conditions that persist, or the prescription will be wrong next season."},
    {"q": "Why do two or three zones usually capture most of the benefit?", "opts": ["Because regulations limit zone count", "Because equipment cannot handle more", "Because more zones add complexity faster than value", "Because zones must be equal in area"], "correct": 2, "exp": "Most within-field variation is captured by a few broad zones; finer division yields diminishing returns."}
  ],
  "Precision Irrigation": [
    {"q": "What three things does precision irrigation require knowing?", "opts": ["Rainfall, temperature and wind only", "Crop variety, plot size and price", "Pump size, fuel cost and labour", "Soil moisture, crop water use, and system delivery rate"], "correct": 3, "exp": "Without all three, the amount of water actually needed and delivered cannot be matched."},
    {"q": "What is deficit irrigation?", "opts": ["Applying deliberately less than full demand to save water", "Irrigating twice as much as needed", "Watering only at night", "Irrigating only after a crop wilts"], "correct": 0, "exp": "It trades a small yield reduction for a large saving, which is worthwhile when water is the scarce resource."},
    {"q": "Why must the system's delivery rate be known?", "opts": ["To set the fertiliser rate", "To convert run time into depth of water applied", "To choose the crop", "To calculate the pump's fuel use"], "correct": 1, "exp": "Run time only becomes a meaningful measure of irrigation once the delivery rate is known."}
  ],
  "Soil Mapping": [
    {"q": "What is a composite sample?", "opts": ["A sample split between two laboratories", "One scoop taken from the field centre", "Several sub-samples from across a zone mixed together", "A sample taken at two depths"], "correct": 2, "exp": "Combining sub-samples makes the result represent the zone rather than one arbitrary point."},
    {"q": "Why is a single farm-wide average often misleading?", "opts": ["It costs more to analyse", "Averages cannot be calculated for soil", "Laboratories reject them", "It may describe no part of the farm accurately"], "correct": 3, "exp": "Averaging distinct zones can produce a figure that matches neither, leading to wrong recommendations."},
    {"q": "To what depth are annual crops usually sampled?", "opts": ["0 to 20 centimetres", "0 to 2 centimetres", "1 to 2 metres", "Below the water table"], "correct": 0, "exp": "Sampling should cover the depth the roots actually occupy, which for annual crops is about 20cm."}
  ],
  "Precision Crop Management": [
    {"q": "What makes precision crop management a cycle rather than a purchase?", "opts": ["Equipment must be replaced annually", "Each season's results refine the next season's zones", "Crops are rotated", "Zones must be re-measured monthly"], "correct": 1, "exp": "The yield map produced at harvest becomes the input to the following season's zone definition."},
    {"q": "How many inputs should typically be varied?", "opts": ["Every input available", "None until machinery is bought", "One or two with the largest cost or response", "Only seed"], "correct": 2, "exp": "Concentrating on the highest-value inputs captures most of the benefit without unmanageable complexity."},
    {"q": "What role does field scouting keep?", "opts": ["It is replaced by imagery", "It is only for large farms", "It is needed only at harvest", "It remains essential; imagery directs it"], "correct": 3, "exp": "Imagery shows where something differs, but diagnosis still requires inspection on the ground."}
  ],
  "Precision Livestock Farming": [
    {"q": "What is the foundation of precision livestock farming?", "opts": ["Individual animal identification", "Temperature control", "Herd size expansion", "Automatic feeding"], "correct": 0, "exp": "Nothing can be attributed to an animal until that animal can be reliably identified."},
    {"q": "Why does activity monitoring detect illness early?", "opts": ["Illness always causes lameness", "Sick animals move differently before they look unwell", "Sick animals move faster", "Activity sensors measure temperature"], "correct": 1, "exp": "Behavioural change usually precedes visible symptoms, giving an earlier warning."},
    {"q": "What do herd averages conceal?", "opts": ["Total feed cost", "The number of animals", "Both the best and the worst individual performers", "The breed of the animals"], "correct": 2, "exp": "Averaging masks individual variation, so unprofitable animals remain invisible."}
  ],
  "Introduction to IoT": [
    {"q": "What are the four parts of an IoT device?", "opts": ["Screen, keyboard, battery and case", "Cable, router, server and database", "Solar panel, antenna, memory and clock", "Sensor, processor, radio and power source"], "correct": 3, "exp": "Every such device must measure, format, transmit and be powered."},
    {"q": "What fails most often in rural IoT deployments?", "opts": ["Power and connectivity", "The data format", "The measurement algorithm", "The sensing element"], "correct": 0, "exp": "Practical infrastructure problems dominate; the sensors themselves are usually the reliable part."},
    {"q": "Why must a sensor fail visibly?", "opts": ["To satisfy the manufacturer", "Because decisions continue on stale data if failure is silent", "To reduce power use", "To simplify repairs"], "correct": 1, "exp": "A silently dead sensor is more dangerous than no sensor, because it is still trusted."}
  ],
  "Smart Sensors": [
    {"q": "Why is sensor drift worse than simple inaccuracy?", "opts": ["Drift consumes more power", "Drift damages the sensor", "Because the error changes over time and cannot be corrected once", "Drift is illegal"], "correct": 2, "exp": "A constant offset can be corrected; an error that changes cannot be, without recalibration."},
    {"q": "What does placement determine?", "opts": ["The battery life", "The cost of the sensor", "The transmission range", "What the reading actually means"], "correct": 3, "exp": "A sensor measures its immediate surroundings, so siting defines what the number represents."},
    {"q": "What should be recorded alongside sensor readings?", "opts": ["Location, depth and installation date", "The purchase price", "The manufacturer's address", "The warranty period"], "correct": 0, "exp": "Without this context the readings cannot be interpreted or compared later."}
  ],
  "Soil Moisture Sensors": [
    {"q": "What two reference points give a moisture reading meaning?", "opts": ["Planting and harvest dates", "Field capacity and wilting point", "Maximum and minimum temperature", "Rainfall and evaporation"], "correct": 1, "exp": "Usable water lies between these two points, and both depend on the soil."},
    {"q": "Why does an air gap around a probe cause a false reading?", "opts": ["It drains the battery", "It increases temperature", "It gives a falsely dry reading because contact with soil is lost", "It causes the probe to over-read"], "correct": 2, "exp": "The sensor measures its immediate surroundings, and air reads as very dry."},
    {"q": "Why watch the trend rather than a single value?", "opts": ["Sensors only report trends", "Single values are always wrong", "Trends are easier to store", "The rate of drying indicates when irrigation will be needed"], "correct": 3, "exp": "How fast the soil is drying predicts the timing of the next irrigation, which a single reading cannot."}
  ],
  "Weather Stations": [
    {"q": "Why does on-farm rainfall measurement matter?", "opts": ["Rainfall is intensely local and can differ greatly over a few kilometres", "It is required by law", "Rain gauges are cheap", "Regional stations are inaccurate"], "correct": 0, "exp": "Convective rainfall varies sharply over short distances, so distant figures can be badly wrong."},
    {"q": "What do temperature sensors need to read air temperature correctly?", "opts": ["A metal housing", "A radiation shield", "A power supply", "An internet connection"], "correct": 1, "exp": "Without shielding the sensor is heated by direct sun and reports far above the true air temperature."},
    {"q": "What predicts crop development stage better than calendar days?", "opts": ["Rainfall total", "Wind speed", "Accumulated temperature, or growing degree days", "Humidity"], "correct": 2, "exp": "Crops develop in response to accumulated heat, which varies between seasons at the same calendar date."}
  ],
  "Smart Irrigation Systems": [
    {"q": "What is the main advantage of sensor-linked irrigation over a timer?", "opts": ["It requires no maintenance", "It uses less electricity", "It is cheaper to install", "It knows conditions, so it does not irrigate during rain"], "correct": 3, "exp": "Responding to actual soil and weather conditions is where nearly all the water saving comes from."},
    {"q": "Why should an automated system have a maximum run time?", "opts": ["To limit damage if a valve sticks open", "To comply with regulation", "To save sensor battery", "To reduce pump wear only"], "correct": 0, "exp": "A failure that leaves water running can flood a field, and a run-time cap bounds the damage."},
    {"q": "Why must an automated system log what it applied?", "opts": ["To reduce data storage", "Because a system that keeps no record cannot be evaluated", "To satisfy the manufacturer", "To increase accuracy"], "correct": 1, "exp": "Without a log there is no way to check whether the schedule was appropriate or the saving real."}
  ],
  "Livestock Monitoring": [
    {"q": "What are the two highest-value uses of livestock monitoring?", "opts": ["Milk pricing and transport", "Breeding records and sales", "Oestrus detection and early illness detection", "Feed mixing and water supply"], "correct": 2, "exp": "Both catch changes in activity before they are visible, which is where the economic value lies."},
    {"q": "Why is rumination time a useful health indicator?", "opts": ["It predicts milk price", "It is the same for all animals", "It is easy to measure by eye", "It drops early, before an animal looks unwell"], "correct": 3, "exp": "Reduced rumination is one of the earliest reliable signals of illness in ruminants."},
    {"q": "Why must alert baselines be individual?", "opts": ["Because normal activity differs between animals", "Because regulations require it", "Because devices differ", "To reduce data volume"], "correct": 0, "exp": "A change is only meaningful relative to what is normal for that particular animal."}
  ],
  "Greenhouse Automation": [
    {"q": "Why must temperature and humidity be managed together?", "opts": ["They are measured by the same sensor", "Closing vents to hold temperature raises humidity and disease risk", "They are unrelated", "Humidity controls light levels"], "correct": 1, "exp": "The actions that control one variable directly affect the other, so they cannot be set independently."},
    {"q": "What is the primary temperature control tool in hot climates?", "opts": ["Supplementary lighting", "Carbon dioxide enrichment", "Ventilation", "Heating"], "correct": 2, "exp": "Removing excess heat by air exchange is far cheaper than active cooling."},
    {"q": "Why does an automated greenhouse need a high-temperature alarm?", "opts": ["To alert the supplier", "To record data", "To reduce energy cost", "Because a control failure can kill a crop within hours"], "correct": 3, "exp": "Enclosed structures heat rapidly, so a stuck vent or failed fan is quickly fatal without warning."}
  ],
  "IoT Data Collection": [
    {"q": "What three things must be attached to every reading?", "opts": ["Device, time and unit", "Price, owner and location", "Crop, plot and season", "Battery level, signal and version"], "correct": 0, "exp": "Without these a reading cannot be interpreted or compared."},
    {"q": "Why must a missing value never be recorded as zero?", "opts": ["Zero uses more storage", "They mean completely different things and zero corrupts the analysis", "Zero is harder to type", "Sensors cannot read zero"], "correct": 1, "exp": "A false zero is indistinguishable from a real measurement and produces impossible conclusions."},
    {"q": "What should sampling frequency match?", "opts": ["The storage available", "The battery capacity", "How fast the measured quantity changes", "The network speed"], "correct": 2, "exp": "Sampling far faster than the quantity changes adds volume without adding information."}
  ],
  "IoT Farm Management": [
    {"q": "What is management by exception?", "opts": ["Ignoring alerts until harvest", "Delegating all decisions", "Reviewing every reading daily", "Being alerted only when defined conditions require action"], "correct": 3, "exp": "Defining action thresholds in advance keeps attention on the readings that matter."},
    {"q": "Why is a large number of alerts self-defeating?", "opts": ["People learn to ignore all of them", "They slow the network", "They cost money to send", "They fill storage"], "correct": 0, "exp": "Alert fatigue means genuine alerts are missed among routine ones."},
    {"q": "Why include a sensor-silent alert?", "opts": ["To notify the supplier", "Because a dead sensor is itself an exception requiring action", "To test the network", "To save power"], "correct": 1, "exp": "Silence means decisions are being made without data, which needs to be known immediately."}
  ],
  "IoT Case Studies": [
    {"q": "What characterises successful IoT deployments?", "opts": ["They are entirely donor funded", "They use the newest sensors", "They are narrow: one measurement, one decision, one saving", "They cover every measurable variable"], "correct": 2, "exp": "Focused deployments tied to a specific decision consistently outperform comprehensive ones."},
    {"q": "Why are freely installed project systems often abandoned?", "opts": ["They are difficult to operate", "They measure the wrong things", "They are of poor quality", "Nobody has a reason to maintain or repair them"], "correct": 3, "exp": "Without ownership or visible payback, no one takes responsibility once the project ends."},
    {"q": "What question best predicts long-term success?", "opts": ["What happens in year three?", "Which company supplied it?", "Does it work in month one?", "How many sensors are included?"], "correct": 0, "exp": "Sustainability depends on maintenance, ownership and continuing value, which only appear over time."}
  ],
  "Drone Technology": [
    {"q": "What is the main advantage of a fixed-wing drone?", "opts": ["It can hover in place", "It covers much larger areas per flight", "It is easier to fly", "It needs no launch space"], "correct": 1, "exp": "Fixed-wing aircraft are far more efficient in forward flight, so they survey larger areas per battery."},
    {"q": "Which specification matters most in practice?", "opts": ["Camera resolution", "Maximum altitude", "Area covered per flight", "Top speed"], "correct": 2, "exp": "Endurance determines how much work can be done in a day, which drives the economics."},
    {"q": "Why are manufacturer flight times usually optimistic?", "opts": ["They are measured in a laboratory only", "They assume no camera is fitted", "They are deliberately falsified", "Payload, wind and temperature all reduce endurance"], "correct": 3, "exp": "Real conditions with a working payload cut flight time substantially below the quoted best case."}
  ],
  "Agricultural Drone Applications": [
    {"q": "What is an orthomosaic?", "opts": ["A single geometrically corrected image of a whole field", "A three-dimensional model of a building", "A type of multispectral sensor", "A flight planning method"], "correct": 0, "exp": "Individual overlapping photographs are stitched and corrected into one measurable image."},
    {"q": "Where are spray drones particularly useful?", "opts": ["In greenhouses", "On flooded rice or steep ground machinery cannot reach", "For seed storage", "On large flat mechanised fields"], "correct": 1, "exp": "Their advantage is access to terrain that ground equipment cannot cross."},
    {"q": "Why fly on a consistent schedule?", "opts": ["Because crops only grow on certain days", "To reduce battery use", "Because change over time is what reveals developing problems", "To satisfy regulators"], "correct": 2, "exp": "A single flight has no baseline; comparison across dates is what makes monitoring useful."}
  ],
  "Crop Monitoring": [
    {"q": "What is the economic argument for crop monitoring?", "opts": ["It reduces fertiliser cost directly", "Images can be sold", "It replaces field staff", "Early detection provides days of warning while intervention is still possible"], "correct": 3, "exp": "Finding a problem while it can still be fixed is where the value lies."},
    {"q": "Why fly at a consistent height and time of day?", "opts": ["So that images from different dates are comparable", "To comply with airspace rules", "To improve stitching speed", "To save battery"], "correct": 0, "exp": "Comparison across dates requires that lighting and scale be held constant."},
    {"q": "What advantage do drones have over satellites in humid regions?", "opts": ["They are cheaper to operate", "They are unaffected by cloud and can fly on demand", "They need no operator", "They cover more area"], "correct": 1, "exp": "Flying below cloud removes the main limitation that blocks optical satellite imagery."}
  ],
  "Field Mapping": [
    {"q": "What do ground control points provide?", "opts": ["Faster processing", "Longer flight time", "Anchoring of the map to true real-world positions", "Better image colour"], "correct": 2, "exp": "Without surveyed references the map can be internally consistent yet offset from true position."},
    {"q": "What does a digital elevation model reveal?", "opts": ["Pest populations", "Soil nutrient levels", "Crop variety", "Where water will collect and where it will run off"], "correct": 3, "exp": "Modelling the surface height shows drainage patterns that are often invisible on the ground."},
    {"q": "Why should the accuracy of a map be stated when handing it over?", "opts": ["Because an unqualified map invites misuse", "To justify the price", "To meet software requirements", "To reduce liability for the drone"], "correct": 0, "exp": "A user who does not know the accuracy may rely on it for purposes it cannot support, such as boundaries."}
  ],
  "Crop Health Assessment": [
    {"q": "What does a vegetation index show?", "opts": ["Soil type", "Difference in vegetation vigour, not its cause", "Expected yield in tonnes", "The cause of crop stress"], "correct": 1, "exp": "Indices reveal where vigour differs; determining why requires inspection."},
    {"q": "Why should index values not be compared between different crops?", "opts": ["It is prohibited", "Crops reflect no infrared", "The numbers are not equivalent across crops and growth stages", "Cameras cannot see other crops"], "correct": 2, "exp": "Canopy structure and stage differ, so the same value means different things."},
    {"q": "What should be ruled out before diagnosing disease from an image?", "opts": ["The flight altitude", "The time of year", "The camera model", "Trivial explanations such as planting date differences, gaps and tracks"], "correct": 3, "exp": "Ordinary management explanations account for many apparent anomalies."}
  ],
  "Pest Detection": [
    {"q": "What is the main limitation of aerial pest detection?", "opts": ["It sees damage only after harm has been done, and cannot identify the pest", "It requires satellite access", "It cannot cover large areas", "It only works at night"], "correct": 0, "exp": "Canopy-level symptoms appear after the pest has already caused measurable damage."},
    {"q": "What is an economic threshold?", "opts": ["The cost of a drone flight", "The point where damage exceeds the cost of treating", "The maximum legal pesticide dose", "The price of the crop at harvest"], "correct": 1, "exp": "Treating below this level costs more than the damage prevented."},
    {"q": "How do imagery and ground scouting best work together?", "opts": ["They should not be combined", "Imagery replaces scouting entirely", "Imagery directs scouting to located anomalies", "Scouting is done only after harvest"], "correct": 2, "exp": "Aerial coverage finds patches a walking scout would miss, and the scout then identifies them."}
  ],
  "Drone Safety": [
    {"q": "What prevents most drone incidents?", "opts": ["Newer aircraft", "Flying at higher altitude", "Advanced flying skill", "Procedures: checklists, a defined area and landing rules"], "correct": 3, "exp": "Almost all incidents trace to procedural lapses rather than lack of piloting ability."},
    {"q": "Why land at a set battery reserve rather than at the warning?", "opts": ["Because wind on the return leg can consume more than expected", "Because warnings are inaccurate", "To extend battery life", "To reduce noise"], "correct": 0, "exp": "The return flight may cost far more energy than planned, so the reserve must be conservative."},
    {"q": "Why must a drone never be flown directly over people?", "opts": ["It drains the battery faster", "A failure becomes an injury", "It disturbs them", "It reduces image quality"], "correct": 1, "exp": "Any malfunction results in a fall, and anyone underneath is at risk of serious harm."}
  ],
  "Drone Regulations": [
    {"q": "Who regulates drone operation?", "opts": ["The drone manufacturer", "The ministry of agriculture", "The national civil aviation authority", "The local council"], "correct": 2, "exp": "Drones are aircraft, so aviation authorities set the rules for their operation."},
    {"q": "How does commercial operation usually differ from recreational?", "opts": ["It requires no insurance", "It is unregulated", "It has no altitude limit", "It is regulated more strictly and needs specific authorisation"], "correct": 3, "exp": "Flying for payment typically demands operator authorisation and often insurance."},
    {"q": "What is a typical maximum altitude limit?", "opts": ["Around 120 metres above ground level", "Around 500 metres", "Around 20 metres", "There is no limit"], "correct": 0, "exp": "Most jurisdictions cap small drone operation near 120 metres to keep clear of manned aircraft."}
  ],
  "Drone Data Analysis": [
    {"q": "What is usually the bottleneck in drone surveying?", "opts": ["Flight time", "Processing the imagery", "Battery charging", "Regulatory approval"], "correct": 1, "exp": "Stitching and analysis are computationally heavy and often take longer than the flying."},
    {"q": "What should the deliverable to a farmer normally be?", "opts": ["The raw image folder", "The flight log", "An annotated map with located findings and recommendations", "A video of the flight"], "correct": 2, "exp": "Clients need findings they can act on, not large files they cannot open."},
    {"q": "Why archive the raw imagery?", "opts": ["To prove the flight happened", "Because clients own it", "To reduce storage cost", "Reprocessing later is possible but reflying the same date is not"], "correct": 3, "exp": "The conditions of that day cannot be recreated, so the original data is irreplaceable."}
  ],
  "Data Collection": [
    {"q": "Where should data collection design begin?", "opts": ["With the questions you want to answer", "With the software available", "With the number of staff", "With the harvest"], "correct": 0, "exp": "The questions determine which fields must be recorded, and missing fields cannot be recovered later."},
    {"q": "Why must units be recorded explicitly?", "opts": ["Regulations require it", "Because bags, kilograms and tins are not interchangeable", "To increase file size", "Because software cannot convert"], "correct": 1, "exp": "Without a stated unit the numbers cannot be compared or converted, rendering them useless."},
    {"q": "Why collect the minimum set of fields?", "opts": ["To reduce storage cost", "To speed up analysis", "Because every extra field reduces the chance the system is maintained", "Because more data is inaccurate"], "correct": 2, "exp": "An over-complex collection system lapses during busy periods, and a lapsed system produces nothing."}
  ],
  "Farm Management Software": [
    {"q": "When does dedicated software beat a spreadsheet?", "opts": ["When the crop is high value", "Always", "When the farm is large in area", "When several people record data and reports are needed regularly"], "correct": 3, "exp": "Multi-user entry and repeated reporting are what a spreadsheet handles poorly."},
    {"q": "Why ask whether data can be exported?", "opts": ["Because data you cannot export is data you do not own", "To allow more users", "To reduce subscription cost", "To speed up the software"], "correct": 0, "exp": "Without export the data is trapped if the service ends or the subscription lapses."},
    {"q": "Why does offline capability matter for a field app?", "opts": ["To improve accuracy", "Because an app needing a connection will not be used in a field", "To save battery", "To reduce cost"], "correct": 1, "exp": "Rural fields frequently lack coverage, so entry must work without it or it will not happen."}
  ],
  "Spreadsheet Analysis": [
    {"q": "What structure should farm data be held in?", "opts": ["A merged summary layout", "One row per season", "A flat table with one row per event", "A separate sheet per plot"], "correct": 2, "exp": "Flat tables are what pivot tables, filters and conditional functions require to work."},
    {"q": "Why should raw data and analysis be on separate sheets?", "opts": ["Because software requires it", "To allow printing", "To reduce file size", "So raw data is never edited to make an analysis work"], "correct": 3, "exp": "Keeping the source untouched preserves its integrity and makes analysis reproducible."},
    {"q": "Why use a lookup list for plot names?", "opts": ["To prevent spelling variants being counted as different plots", "To reduce the number of plots", "To speed up typing only", "To satisfy the software"], "correct": 0, "exp": "Freehand entry produces variants that split one plot's data across several apparent plots."}
  ],
  "Agricultural Dashboards": [
    {"q": "What is the purpose of a dashboard?", "opts": ["To display everything that is known", "To answer whether anything is wrong and the season is on track, at a glance", "To replace record keeping", "To archive historical data"], "correct": 1, "exp": "A dashboard is for rapid situational awareness, not comprehensive reporting."},
    {"q": "Why does every figure need a comparison?", "opts": ["To fill space", "To satisfy auditors", "Because a number alone cannot indicate whether it is good or bad", "To allow colour coding"], "correct": 2, "exp": "Without a plan, a previous period or a threshold, a value carries no judgement."},
    {"q": "Why show when the data was last updated?", "opts": ["To credit the person who entered it", "To meet software requirements", "To reduce confusion about time zones", "Because a stale dashboard read as live is dangerous"], "correct": 3, "exp": "Decisions made on out-of-date figures assumed to be current can be seriously wrong."}
  ],
  "Data Visualization": [
    {"q": "Which chart shows the relationship between two measurements?", "opts": ["Scatter plot", "Pie chart", "Bar chart", "Line chart"], "correct": 0, "exp": "Plotting one variable against the other reveals whether and how they relate."},
    {"q": "Why should bar chart axes start at zero?", "opts": ["To use less space", "Because a truncated axis exaggerates differences dishonestly", "Because software requires it", "To allow more bars"], "correct": 1, "exp": "Bar length represents magnitude, so cutting the axis distorts the visual comparison."},
    {"q": "Why are pie charts usually a poor choice?", "opts": ["They cannot show percentages", "They use too much colour", "People judge angles poorly, making them harder to read than bars", "They cannot be printed"], "correct": 2, "exp": "Angle comparison is unreliable, and the problem worsens as the number of slices grows."}
  ],
  "Yield Analysis": [
    {"q": "What are the four sources of yield difference?", "opts": ["Seed, water, labour and machinery", "Price, cost, area and time", "Soil, sun, rain and wind", "Site, season, management and measurement error"], "correct": 3, "exp": "A useful analysis attributes differences among these rather than assuming one cause."},
    {"q": "What should be checked first when a yield looks anomalous?", "opts": ["Measurement, such as plot area and moisture", "The weather record", "The fertiliser brand", "The variety planted"], "correct": 0, "exp": "Measurement errors explain many apparent anomalies and are quick to rule out."},
    {"q": "What does a plot yielding low every season suggest?", "opts": ["A weather problem", "A site cause such as soil or drainage", "A measurement error", "A management problem"], "correct": 1, "exp": "Consistency across differing seasons and management points to a fixed physical characteristic."}
  ],
  "Financial Analysis": [
    {"q": "How is break-even yield calculated?", "opts": ["Revenue minus fixed cost", "Yield divided by cost", "Total variable cost divided by price per unit", "Price multiplied by area"], "correct": 2, "exp": "It is the output needed for revenue to cover the variable costs incurred."},
    {"q": "Why can a profitable farm still run out of money?", "opts": ["Because profit is not real", "Because prices change", "Because profit is taxed", "Because costs and revenue occur at different times"], "correct": 3, "exp": "Cash flow is about timing, and spending can precede revenue by many months."},
    {"q": "Why must costs be attributed to enterprises?", "opts": ["Otherwise it is impossible to see which activity is losing money", "To simplify record keeping", "To reduce total costs", "Because lenders require it"], "correct": 0, "exp": "Pooled costs conceal the performance of individual enterprises."}
  ],
  "Decision-Making Using Data": [
    {"q": "When is it reasonable to act on weak evidence?", "opts": ["Never", "When the decision is cheap and reversible", "When the decision is expensive", "When the decision is irreversible"], "correct": 1, "exp": "Low cost of error and easy reversal make acting and learning cheaper than waiting."},
    {"q": "Why record the reasoning behind a decision?", "opts": ["Because outcomes are unimportant", "To satisfy auditors", "So the decision can be evaluated separately from its outcome", "To lengthen the report"], "correct": 2, "exp": "A good decision can have a bad outcome; only the recorded reasoning lets you tell them apart."},
    {"q": "What should be stated in advance?", "opts": ["The cost of the analysis", "The expected profit", "The name of the decision maker", "What result would change your mind"], "correct": 3, "exp": "Setting the decision rule beforehand prevents interpreting whatever happens as confirmation."}
  ],
  "Predictive Agriculture": [
    {"q": "What makes a forecast actionable?", "opts": ["Being expressed with a probability and a magnitude", "Being issued by a government body", "Covering a long period", "Being free"], "correct": 0, "exp": "A quantified likelihood and amount let the user weigh it against the cost of acting."},
    {"q": "What limits the quality of a predictive model?", "opts": ["The speed of the computer", "The quality of the historical data it was trained on", "The number of users", "The size of the farm"], "correct": 1, "exp": "A model can only learn patterns present in its training data, and poor data yields confident errors."},
    {"q": "Why track forecast accuracy over time?", "opts": ["To satisfy the provider", "To reduce cost", "Because a model that performed well previously may not continue to", "Because forecasts are always accurate"], "correct": 2, "exp": "Conditions change, and a model's performance must be re-verified rather than assumed."}
  ],
  "Agribusiness Fundamentals": [
    {"q": "Why do maximum yield and maximum profit rarely coincide?", "opts": ["Because high yields damage soil", "Because buyers prefer low yields", "Because prices fall as yield rises", "Because extra inputs eventually cost more than the extra output is worth"], "correct": 3, "exp": "Diminishing returns mean the last increments of yield cost more than they earn."},
    {"q": "What must be included in costs even when no money changes hands?", "opts": ["Family labour", "Rainfall", "Sunlight", "Soil nutrients"], "correct": 0, "exp": "Unpaid labour has an opportunity cost, and ignoring it makes weak enterprises look profitable."},
    {"q": "Why is cost of production per unit so important?", "opts": ["It sets the market price", "Without it you cannot judge whether a price offered is acceptable", "It is required for certification", "It determines the yield"], "correct": 1, "exp": "A price can only be evaluated against what it costs you to produce the unit being sold."}
  ],
  "Agricultural Value Chains": [
    {"q": "Why do farmers typically capture a small share of chain value?", "opts": ["Because consumers pay too little", "Because they produce too much", "Because their step has least differentiation, most competition and weakest price information", "Because processing is unprofitable"], "correct": 2, "exp": "Structural position rather than dishonesty explains the small share."},
    {"q": "Where does margin tend to accrue in a value chain?", "opts": ["At the production step", "Wherever labour is cheapest", "At the retail step only", "Where there is scarcity, such as storage or processing capacity"], "correct": 3, "exp": "Scarce capacity gives pricing power, which is where margin concentrates."},
    {"q": "What does moving up the value chain involve?", "opts": ["Adding steps such as drying, grading or packing, with added cost and risk", "Reducing production", "Growing more of the same crop", "Selling earlier in the season"], "correct": 0, "exp": "Capturing later-stage margin means taking on the activities and risks of those stages."}
  ],
  "Market Research": [
    {"q": "What four questions should market research answer?", "opts": ["How much land, labour, cash and time", "Who buys, what quantity and quality, when, and at what price", "Where to plant, when to plant, what to plant, and how much", "Which seed, which fertiliser, which market, which buyer"], "correct": 1, "exp": "These four determine whether a planned crop can be sold profitably."},
    {"q": "Why record prices weekly rather than visiting once?", "opts": ["Because prices are fixed weekly", "To build a relationship with traders", "Because a single visit reveals nothing about seasonal patterns", "To satisfy buyers"], "correct": 2, "exp": "Seasonality is the dominant price effect and only appears in a series of observations."},
    {"q": "How should demand be verified?", "opts": ["By checking last year's price", "By counting people at the market", "By asking neighbours", "With a commitment rather than an expression of interest"], "correct": 3, "exp": "Interest is free to express; a commitment to buy a quantity at a price is evidence."}
  ],
  "Business Model Development": [
    {"q": "What is the weakest competitive position?", "opts": ["Competing only on price", "Competing on quality consistency", "Competing on timing", "Competing on delivery reliability"], "correct": 0, "exp": "Undifferentiated commodity supply leaves price as the only lever, which is a race downwards."},
    {"q": "What does a value proposition state?", "opts": ["Your total costs", "What problem you solve for the buyer", "How much land you farm", "The yield you expect"], "correct": 1, "exp": "It expresses why the customer benefits from choosing you."},
    {"q": "Why is a contract with three restaurants often better than open market sales?", "opts": ["The volume is larger", "It removes all risk", "Revenue, price and payment terms become predictable", "It requires no quality standards"], "correct": 2, "exp": "Predictability of price and payment is worth more than volume for planning and cash flow."}
  ],
  "M10:Financial Planning": [
    {"q": "What is the central output of a financial plan?", "opts": ["The yield forecast", "The list of suppliers", "The annual profit figure", "A monthly cash flow projection"], "correct": 3, "exp": "Monthly cash flow reveals the timing gaps that annual totals conceal."},
    {"q": "What does the point of maximum cash deficit tell you?", "opts": ["How much working capital must be arranged", "The cost of production", "The expected profit", "The break-even yield"], "correct": 0, "exp": "It is the largest amount the business will be short by, and therefore what must be financed."},
    {"q": "Why is the spending-to-revenue gap especially long in agriculture?", "opts": ["Because banks are slow", "Because inputs are bought at planting and revenue arrives only after harvest", "Because prices are fixed", "Because farms are small"], "correct": 1, "exp": "The biological production cycle imposes a delay of many months between outlay and income."}
  ],
  "Agricultural Marketing": [
    {"q": "Why are prices lowest just after harvest?", "opts": ["Buyers are absent", "Quality is worst then", "Because everyone sells at the same time", "Transport is most expensive"], "correct": 2, "exp": "Simultaneous supply from all producers pushes the price down."},
    {"q": "How should the decision to store be evaluated?", "opts": ["By storing whenever space exists", "By selling immediately always", "By asking the buyer", "By comparing storage cost against the expected price rise"], "correct": 3, "exp": "Storage is only worthwhile if the price gain exceeds its cost and losses."},
    {"q": "What advantage does selling collectively give?", "opts": ["Volume, which attracts better buyers and prices", "Immediate payment always", "Lower quality requirements", "No need for grading"], "correct": 0, "exp": "Aggregated volume makes the group worth dealing with for larger, better-paying buyers."}
  ],
  "Branding Farm Products": [
    {"q": "What is a brand, for a farm product?", "opts": ["A logo design", "What a buyer expects from you before inspecting the goods", "A legal registration", "The name of the farm"], "correct": 1, "exp": "It is a promise about what will be delivered, which is why consistency underpins it."},
    {"q": "Why does attractive packaging on inconsistent produce backfire?", "opts": ["It costs too much", "Buyers dislike packaging", "It raises an expectation that is then broken", "It slows down packing"], "correct": 2, "exp": "Breaking a raised expectation damages trust more than never raising it."},
    {"q": "What is a trader actually paying a premium for?", "opts": ["The packaging material", "The farm's location", "The size of the bag", "The reduction in their own risk"], "correct": 3, "exp": "Reliable grading means the buyer need not inspect every unit, which has real value to them."}
  ],
  "Accessing Agricultural Finance": [
    {"q": "What four things do lenders assess?", "opts": ["Capacity, character, collateral and conditions", "Crop, climate, cost and customer", "Land, labour, livestock and location", "Price, profit, period and place"], "correct": 0, "exp": "These four determine whether the loan is likely to be repaid."},
    {"q": "Why must loan term match the production cycle?", "opts": ["To reduce interest", "Because repayments before harvest have no source of funds", "Because lenders prefer long loans", "To simplify paperwork"], "correct": 1, "exp": "Revenue arrives only after harvest, so earlier repayments must come from elsewhere."},
    {"q": "What can substitute for collateral with many lenders?", "opts": ["A larger loan request", "A guarantor's opinion", "Records demonstrating yields, sales and repayment history", "Membership of any group"], "correct": 2, "exp": "Verifiable performance history lets a lender assess risk without physical security."}
  ],
  "Agribusiness Innovation": [
    {"q": "Where do agribusiness opportunities usually cluster?", "opts": ["In entirely new technologies", "In the largest markets only", "Where competition is strongest", "At points where the value chain works badly"], "correct": 3, "exp": "Existing friction points are problems people already recognise and want solved."},
    {"q": "Which assumption should be tested first?", "opts": ["The riskiest one", "The cheapest to fix", "The one investors ask about", "The easiest to test"], "correct": 0, "exp": "Testing the riskiest assumption first avoids spending on a venture whose foundation fails."},
    {"q": "How should a test be designed?", "opts": ["To impress investors", "To prove yourself wrong", "To take as long as possible", "To confirm the idea works"], "correct": 1, "exp": "A test designed to confirm will find confirmation; one designed to disprove yields real information."}
  ],
  "Business Plan Development": [
    {"q": "What should revenue projections be based on?", "opts": ["The amount needed to justify the loan", "The best result achieved regionally", "Achieved performance, with the source stated", "The maximum biologically possible"], "correct": 2, "exp": "Projections grounded in the business's own record are what make a plan credible."},
    {"q": "What evidence of demand strengthens a plan most?", "opts": ["A description of the industry", "A market survey", "An estimate of population", "A contract, letter of intent or recorded sales"], "correct": 3, "exp": "Concrete commitments demonstrate that someone will actually buy."},
    {"q": "Why name the biggest risks explicitly?", "opts": ["Because a plan showing understood risks and responses is more credible", "To lengthen the document", "To lower the amount requested", "To satisfy regulations"], "correct": 0, "exp": "A plan that appears to have no risks signals that they have not been considered."}
  ],
  "Social Media Marketing": [
    {"q": "Which platform matters most for agricultural trade in West Africa?", "opts": ["Pinterest", "WhatsApp", "LinkedIn", "Twitter"], "correct": 1, "exp": "WhatsApp is where buyers, traders and farmers already communicate and transact."},
    {"q": "Why should produce never be misrepresented in a post?", "opts": ["Photographs are expensive", "Platforms will remove the post", "A customer lost over misrepresentation is usually lost permanently", "It takes more time"], "correct": 2, "exp": "Trust is the asset direct selling depends on, and it does not recover easily."},
    {"q": "Why build a broadcast list rather than rely only on platform reach?", "opts": ["Lists allow longer messages", "Broadcast lists are cheaper", "Platforms charge for reach", "It is a customer list you own and can reach directly"], "correct": 3, "exp": "Owning the channel means access to customers does not depend on a platform's changing rules."}
  ],
  "Farm Branding": [
    {"q": "What does farm branding promise, as distinct from product branding?", "opts": ["A relationship, including reliability and responsiveness", "A specific grade only", "A larger quantity", "A lower price"], "correct": 0, "exp": "Buyers of repeat supply are purchasing dependability, which attaches to the farm."},
    {"q": "When does farm branding matter most?", "opts": ["When there is no competition", "When buyers have a choice and cannot verify quality in advance", "When prices are fixed", "When produce is sold once only"], "correct": 1, "exp": "Reputation substitutes for verification the buyer cannot perform beforehand."},
    {"q": "What builds reputation most?", "opts": ["The size of the farm", "The design of the logo", "What you do when something goes wrong", "Advertising spend"], "correct": 2, "exp": "Handling a failure well demonstrates reliability more convincingly than routine success."}
  ],
  "E-Commerce for Agriculture": [
    {"q": "What is the hardest part of agricultural e-commerce?", "opts": ["Taking payment", "Photographing produce", "Building the website", "Fulfilment: picking, packing, freshness and delivery"], "correct": 3, "exp": "Perishable goods make the logistics far harder than the selling."},
    {"q": "Why is a late produce delivery worse than a late delivery of other goods?", "opts": ["The produce may be spoiled rather than merely late", "Payment is delayed", "Customers are less patient", "Delivery costs more"], "correct": 0, "exp": "Perishability turns a delay into a total loss of the goods."},
    {"q": "What should be built before a storefront?", "opts": ["A payment gateway", "A delivery capability that can fulfil orders", "A large product range", "A brand identity"], "correct": 1, "exp": "Orders that cannot be fulfilled damage the business more than having no orders."}
  ],
  "Online Marketplaces": [
    {"q": "What is the real cost of selling through a marketplace?", "opts": ["Photography requirements", "The listing fee", "Commission and control of the customer relationship", "Delivery time"], "correct": 2, "exp": "Losing the direct relationship leaves the business exposed to the platform's decisions."},
    {"q": "Why does slow settlement matter?", "opts": ["It lowers search ranking", "It reduces the price", "It affects product quality", "It creates a cash flow problem"], "correct": 3, "exp": "Money owed but not received still has to be replaced by working capital in the meantime."},
    {"q": "What is the safest way to use a marketplace?", "opts": ["To find customers while building direct relationships and other channels", "For premium products only", "As the only sales channel", "Only during harvest"], "correct": 0, "exp": "Using it as one channel among several avoids dependence on a platform you do not control."}
  ],
  "M11:Customer Relationship Management": [
    {"q": "Why do repeat customers matter more than new ones?", "opts": ["They pay higher prices", "Winning a new customer costs considerably more than keeping an existing one", "They order larger quantities", "They require no delivery"], "correct": 1, "exp": "An established buyer needs no convincing, sampling or renegotiation."},
    {"q": "What should be tracked besides what a customer buys?", "opts": ["Their family size", "Their competitors", "Frequency, price, payment behaviour and preferences", "The weather on delivery day"], "correct": 2, "exp": "These determine both the value of the customer and how to serve them well."},
    {"q": "Why is a good price from a late payer not necessarily a good deal?", "opts": ["The price will fall later", "Late payment reduces quality", "Buyers dislike it", "Delayed payment ties up working capital the business needs"], "correct": 3, "exp": "Cash tied up in receivables must be replaced from somewhere, at a cost."}
  ],
  "Digital Advertising": [
    {"q": "When is digital advertising worth doing?", "opts": ["When the result can be measured", "When competitors are advertising", "When the budget allows", "When the harvest is large"], "correct": 0, "exp": "Without measurement there is no way to distinguish effective spending from waste."},
    {"q": "What is the most valuable targeting control for perishable produce?", "opts": ["Age", "Location, since delivery radius defines the market", "Interests", "Time of day"], "correct": 1, "exp": "Reaching people outside the delivery area cannot produce a sale."},
    {"q": "What should be measured?", "opts": ["Number of views", "Number of likes", "Cost per enquiry and cost per sale", "Number of followers gained"], "correct": 2, "exp": "Only measures tied to actual orders show whether the spending returned more than it cost."}
  ],
  "Content Marketing": [
    {"q": "How does content marketing differ from advertising?", "opts": ["It is always free", "It requires no consistency", "It reaches more people", "It works slowly and compounds, rather than stopping when payment stops"], "correct": 3, "exp": "Published usefulness continues to attract an audience long after it is created."},
    {"q": "What makes content ignored?", "opts": ["Being only promotion rather than useful", "Including prices", "Being too short", "Being published weekly"], "correct": 0, "exp": "An audience gives attention in exchange for value; pure promotion offers none."},
    {"q": "Where should content topics come from?", "opts": ["The largest possible subject", "The questions you are actually asked", "Whatever competitors publish", "Industry news"], "correct": 1, "exp": "Questions you receive are evidence of what your audience genuinely wants answered."}
  ],
  "Agricultural Storytelling": [
    {"q": "Why does storytelling work particularly well for food?", "opts": ["Stories increase shelf life", "Food is cheap", "Buyers care where it came from and who grew it", "Food has no competition"], "correct": 2, "exp": "Provenance carries meaning for food buyers in a way it does not for most products."},
    {"q": "What is the essential requirement of agricultural storytelling?", "opts": ["Frequent posting", "Professional photography", "A large following", "Truthfulness, since claims about origin and practice are checkable"], "correct": 3, "exp": "False claims about practice or certification are discoverable and destroy credibility."},
    {"q": "What makes a farm story credible rather than generic?", "opts": ["Specific names, places and practices", "Words like passion and quality", "A long history", "A large farm size"], "correct": 0, "exp": "Specificity is checkable and distinctive; general claims are indistinguishable from anyone else's."}
  ],
  "Sales Strategies": [
    {"q": "What should come before discussing price?", "opts": ["Agreeing delivery", "Understanding the buyer's requirement", "Naming your costs", "Describing the farm"], "correct": 1, "exp": "Knowing what the buyer needs reveals what else besides price has value to them."},
    {"q": "Why must you know your cost of production before negotiating?", "opts": ["To impress the buyer", "To calculate the yield", "So you know the price below which you should walk away", "Because buyers ask for it"], "correct": 2, "exp": "Without it there is no basis for judging whether an offered price is acceptable."},
    {"q": "What decides the next order?", "opts": ["The advertising", "The price alone", "The size of the farm", "How the last delivery went"], "correct": 3, "exp": "Repeat business follows from the buyer's experience of the previous transaction."}
  ],
  "Food Safety Principles": [
    {"q": "What are the three types of food hazard?", "opts": ["Biological, chemical and physical", "Bacterial, viral and fungal", "Field, storage and transport", "Visible, hidden and delayed"], "correct": 0, "exp": "These three categories cover every way food can become unsafe."},
    {"q": "Where does most produce contamination occur?", "opts": ["In the soil before planting", "After harvest, during handling", "During growth only", "At the point of sale only"], "correct": 1, "exp": "Handling introduces contamination through hands, water, surfaces and containers."},
    {"q": "Why is aflatoxin particularly dangerous?", "opts": ["It is visible on the surface", "It only affects livestock", "It is not removed by cooking", "It develops only in cold storage"], "correct": 2, "exp": "The toxin is heat-stable, so contaminated grain remains hazardous after cooking."}
  ],
  "Good Agricultural Practices (GAP)": [
    {"q": "Where do most farms fail a GAP audit?", "opts": ["Soil quality", "Yield levels", "Farm size", "Record keeping"], "correct": 3, "exp": "Compliance must be demonstrated through documentation, and that is usually what is missing."},
    {"q": "What is a pre-harvest interval?", "opts": ["The required waiting time after pesticide application before harvest", "The gap between two harvests", "The time produce spends in storage", "The time between planting and harvest"], "correct": 0, "exp": "It allows residues to fall below the permitted limit, and it cannot be shortened safely."},
    {"q": "Why must manure be composted before use on crops eaten raw?", "opts": ["To increase nitrogen content", "Composting reduces the pathogens it contains", "To make it easier to spread", "To improve its smell"], "correct": 1, "exp": "Raw manure carries pathogens that can transfer to produce that will not be cooked."}
  ],
  "Post-Harvest Handling": [
    {"q": "What is the dominant factor in fresh produce deterioration?", "opts": ["Light", "Altitude", "Temperature", "Humidity"], "correct": 2, "exp": "Respiration accelerates with temperature, so removing field heat quickly extends shelf life."},
    {"q": "Why sort out damaged units before packing?", "opts": ["To meet transport rules", "To improve appearance only", "To reduce weight", "Because one rotting unit spoils those around it"], "correct": 3, "exp": "Rot spreads by contact and by the ethylene damaged produce releases."},
    {"q": "Why are rigid crates preferred to sacks for soft produce?", "opts": ["They prevent compression damage", "They are easier to label", "They are cheaper", "They hold more"], "correct": 0, "exp": "Sacks allow the weight of the load to crush produce lower down, causing large losses."}
  ],
  "Food Storage": [
    {"q": "What is the critical variable for safe grain storage?", "opts": ["Grain variety", "Moisture content", "Bag colour", "Storage height"], "correct": 1, "exp": "Above roughly 13 to 14 percent moisture, mould develops and can produce aflatoxin."},
    {"q": "Why store bags off the ground and away from walls?", "opts": ["To meet buyer requirements", "To make counting easier", "To allow air movement and prevent moisture uptake", "To reduce theft"], "correct": 2, "exp": "Contact with ground and walls transfers moisture and blocks ventilation."},
    {"q": "Why does condensation matter in a store?", "opts": ["It changes the grain colour", "It damages the building", "It attracts rodents", "It rewets grain and starts mould growth"], "correct": 3, "exp": "Moisture returning to dried grain undoes the drying and creates conditions for mould."}
  ],
  "Food Processing Basics": [
    {"q": "What two things does processing achieve?", "opts": ["Extends shelf life and captures more chain value", "Increases yield and reduces labour", "Improves soil and reduces cost", "Raises volume and lowers risk"], "correct": 0, "exp": "Both preservation and value capture are the reasons to process."},
    {"q": "Why must conversion yield be known?", "opts": ["To satisfy regulators", "Because pricing without it can put the product below cost", "To choose the packaging", "To calculate storage space only"], "correct": 1, "exp": "The raw material used per unit of product is a major cost that must be built into the price."},
    {"q": "Why does processing concentrate risk?", "opts": ["Processing equipment is dangerous", "Processed food spoils faster", "Contamination in one batch affects a large quantity", "Processing requires more workers"], "correct": 2, "exp": "Batching combines many units, so a single failure affects everything in that batch."}
  ],
  "Quality Assurance": [
    {"q": "How does quality assurance differ from quality control?", "opts": ["Assurance is done by buyers; control by farmers", "They are the same thing", "Assurance applies only to processed food", "Assurance designs the process to prevent failures; control inspects and rejects"], "correct": 3, "exp": "Prevention through process design differs fundamentally from detection after the fact."},
    {"q": "Why is prevention commercially better than inspection?", "opts": ["Inspection catches problems only after production cost has been incurred", "Prevention requires no staff", "Inspection is slower", "Inspection is illegal"], "correct": 0, "exp": "A rejected unit has already consumed all its production cost, so preventing the defect saves more."},
    {"q": "What should follow every rejection?", "opts": ["A new supplier", "An investigation into the cause", "A larger inspection team", "A price reduction"], "correct": 1, "exp": "Without understanding the cause, the same failure will happen again."}
  ],
  "Traceability Systems": [
    {"q": "What does traceability rest on?", "opts": ["Certification", "Packaging design", "Lot identification", "Refrigeration"], "correct": 2, "exp": "Grouping produce into identifiable batches is what makes tracking possible."},
    {"q": "What is the usual minimum traceability standard?", "opts": ["Farm records only", "Retail records only", "Full chain to the consumer", "One step back and one step forward"], "correct": 3, "exp": "Knowing the immediate supplier and the immediate customer is the common baseline requirement."},
    {"q": "What is the practical value of traceability during a problem?", "opts": ["It limits a recall to the affected lot rather than all production", "It reduces packaging cost", "It prevents contamination", "It improves shelf life"], "correct": 0, "exp": "Precise identification confines the withdrawal to what is actually implicated."}
  ],
  "Food Standards & Compliance": [
    {"q": "Which standards are often the binding constraint?", "opts": ["National regulations", "Buyer standards, which are frequently stricter than the law", "International trade rules", "Local council rules"], "correct": 1, "exp": "Private buyer requirements commonly exceed legal minimums and determine market access."},
    {"q": "Whose residue limits apply to an exported product?", "opts": ["The producing country's", "An international average", "The destination market's", "The shipping company's"], "correct": 2, "exp": "The market where the product is sold sets the limits it must meet."},
    {"q": "How is compliance demonstrated?", "opts": ["By inspection at sale", "By the producer's assurance", "By the size of the operation", "Through records"], "correct": 3, "exp": "Documentation is what allows an auditor or buyer to verify that requirements were met."}
  ],
  "Agricultural Economics": [
    {"q": "What does inelastic demand mean for staple food?", "opts": ["Consumption changes little when the price changes", "Consumption doubles when prices fall", "Demand is unpredictable", "Demand rises with supply"], "correct": 0, "exp": "People eat roughly the same amount regardless of price, so supply changes hit price hard."},
    {"q": "Why can a bumper harvest leave farmers collectively worse off?", "opts": ["Costs rise with yield", "Prices fall further than output rose, because demand does not expand", "Storage becomes impossible", "Quality declines"], "correct": 1, "exp": "With inelastic demand, the price fall outweighs the extra volume."},
    {"q": "Why is responding to last season's price often a mistake?", "opts": ["Prices are always falling", "Last season's price is never known", "Everyone responds the same way, so the crop that paid well is oversupplied", "Prices are fixed by government"], "correct": 2, "exp": "Production lags mean many farmers plant the same crop in response, creating the next glut."}
  ],
  "M13:Farm Budgeting": [
    {"q": "How is net farm income calculated?", "opts": ["Total revenue minus variable costs", "Yield multiplied by price", "Cash received minus cash paid", "Total gross margin minus fixed costs"], "correct": 3, "exp": "Gross margins cover variable costs, so fixed costs are then deducted to reach net farm income."},
    {"q": "How does loan principal repayment differ from an expense?", "opts": ["It consumes cash but is not a cost of production", "It is optional", "It appears in the gross margin", "It is tax deductible"], "correct": 0, "exp": "Repaying capital reduces a liability rather than paying for something consumed."},
    {"q": "What is depreciation?", "opts": ["A loss of crop value", "Spreading an asset's cost across its useful life", "A reduction in land price", "A cash payment made annually"], "correct": 1, "exp": "It recognises the using-up of an asset as a cost without any cash changing hands."}
  ],
  "Financial Statements": [
    {"q": "Which statement shows what a business owns and owes at a point in time?", "opts": ["The income statement", "The cash flow statement", "The balance sheet", "The gross margin"], "correct": 2, "exp": "A balance sheet is a snapshot of assets, liabilities and the equity between them."},
    {"q": "How can a profitable business run out of money?", "opts": ["Taxes consume all profit", "Profit cannot be spent", "Profit is always false", "Revenue may be recorded before the cash is received"], "correct": 3, "exp": "Credit sales count as revenue immediately while the cash arrives later or not at all."},
    {"q": "What does assets minus liabilities equal?", "opts": ["Equity", "Revenue", "Profit", "Cash flow"], "correct": 0, "exp": "Equity is the residual owner's stake once obligations are subtracted from what is owned."}
  ],
  "Investment Planning": [
    {"q": "How is payback period calculated?", "opts": ["Profit divided by assets", "Investment cost divided by additional annual net income", "Annual revenue divided by cost", "Cost multiplied by useful life"], "correct": 1, "exp": "It measures how long the additional net income takes to recover the outlay."},
    {"q": "What is the main weakness of the payback measure?", "opts": ["It cannot be used for equipment", "It is difficult to calculate", "It ignores everything after payback and the time value of money", "It requires audited accounts"], "correct": 2, "exp": "It says nothing about returns beyond the payback point and treats all years as equivalent."},
    {"q": "What drives the return on a capital item most?", "opts": ["Its size", "Its purchase price alone", "Its brand", "How much it is actually used"], "correct": 3, "exp": "An asset used a few days a year spreads its cost over very little output."}
  ],
  "Agricultural Loans": [
    {"q": "What matters more than the interest rate?", "opts": ["Whether the repayment schedule matches when income arrives", "The loan currency", "The application process", "The lender's size"], "correct": 0, "exp": "A mismatch forces repayment from funds the business does not yet have, causing default."},
    {"q": "What is value chain finance?", "opts": ["A loan for chain infrastructure", "Credit from a buyer or input supplier rather than a bank", "A loan secured against land", "Government subsidy"], "correct": 1, "exp": "It comes from a trading partner with an interest in the production, often without formal collateral."},
    {"q": "Why can a grace period be worth more than a lower rate?", "opts": ["Grace periods reduce total interest", "They extend the loan indefinitely", "They align the first repayment with when income actually arrives", "They remove collateral requirements"], "correct": 2, "exp": "Deferring repayment until after harvest makes the loan serviceable from the enterprise itself."}
  ],
  "Insurance in Agriculture": [
    {"q": "How does index insurance determine payouts?", "opts": ["By the farmer's declaration", "By average regional yield reports", "By assessing each farm's actual loss", "By a measured index crossing a threshold"], "correct": 3, "exp": "Payment follows the index value rather than any individual assessment, which keeps costs low."},
    {"q": "What is basis risk?", "opts": ["The mismatch between the index and a farmer's actual loss", "The risk of crop failure", "The risk that premiums rise", "The risk of insurer insolvency"], "correct": 0, "exp": "An index can fail to trigger despite real loss, or trigger without one."},
    {"q": "What kind of losses is insurance best suited to?", "opts": ["Losses the farmer causes", "Severe and infrequent losses", "Small routine variation", "Predictable seasonal costs"], "correct": 1, "exp": "Insurance is efficient for catastrophic risk; routine variation is cheaper to absorb."}
  ],
  "Grant Opportunities": [
    {"q": "Why do most grant applications fail?", "opts": ["Applications arrive early", "Poor writing", "Eligibility criteria are not met", "Budgets are too small"], "correct": 2, "exp": "Applicants frequently apply for funds they were never qualified to receive."},
    {"q": "What obligations typically come with a grant?", "opts": ["Permanent audit rights over the business", "Repayment with interest", "Transfer of ownership", "Reporting, spending restrictions and timelines"], "correct": 3, "exp": "Funders require accountability for how the money advanced their stated objective."},
    {"q": "What should never be done to obtain a grant?", "opts": ["Reshape a sound business around funding that does not fit it", "Describe existing plans in the funder's language", "Provide a detailed budget", "Co-finance part of the cost"], "correct": 0, "exp": "Distorting a viable plan to match available money usually damages the business."}
  ],
  "Financial Risk Management": [
    {"q": "Which financial risk most often kills sound farm businesses?", "opts": ["Currency risk", "Liquidity risk", "Inflation risk", "Interest rate risk"], "correct": 1, "exp": "Concentrated revenue and spread costs mean businesses fail by being unable to pay on time."},
    {"q": "What should be done before extending credit to a new buyer?", "opts": ["Sell them the entire harvest", "Increase the price", "Check their payment record and start with a small quantity", "Require full prepayment always"], "correct": 2, "exp": "Limiting initial exposure while verifying reliability contains the risk."},
    {"q": "Why arrange a lending relationship before it is needed?", "opts": ["Rates are lower in advance", "It is legally required", "Lenders only lend once", "Credit is hardest to obtain at the moment you are short of cash"], "correct": 3, "exp": "A business in visible difficulty is exactly when lenders become reluctant."}
  ],
  "Artificial Intelligence in Agriculture": [
    {"q": "What does AI in agriculture fundamentally do?", "opts": ["Finds patterns in data to classify or predict", "Understands crops the way an agronomist does", "Replaces field measurement", "Guarantees higher yields"], "correct": 0, "exp": "It is trained pattern-matching applied to classification and prediction tasks."},
    {"q": "Why might a disease identification model fail in Liberia?", "opts": ["Phones are different", "It may have been trained on other crops and regions", "The internet is slower", "Diseases cannot be photographed"], "correct": 1, "exp": "Model performance depends on how closely conditions resemble the training data."},
    {"q": "What does a model's confidence figure describe?", "opts": ["The probability the diagnosis is correct", "The quality of the photograph", "Its certainty about its own pattern match, not correctness", "The severity of the disease"], "correct": 2, "exp": "A model can be highly confident and entirely wrong when shown something outside its training."}
  ],
  "Machine Learning Basics": [
    {"q": "What is overfitting?", "opts": ["Using too many sensors", "Predicting values that are too high", "Training on too little data", "A model memorising training examples and failing on new data"], "correct": 3, "exp": "The model captures noise specific to its training set rather than the general relationship."},
    {"q": "Why must a model be tested on unseen data?", "opts": ["Because performance on training data overstates real performance", "Because regulations require it", "To increase its accuracy", "To reduce training time"], "correct": 0, "exp": "Only data the model has never seen reveals whether it generalises."},
    {"q": "Why can 95 percent accuracy be a poor result?", "opts": ["It depends on the algorithm used", "If disease is rare, always predicting no disease achieves it while detecting nothing", "Accuracy above 90 percent is impossible", "It ignores training time"], "correct": 1, "exp": "With imbalanced classes, high accuracy can coexist with complete failure at the actual task."}
  ],
  "Computer Vision for Farming": [
    {"q": "What most often causes poor computer vision results in the field?", "opts": ["Network speed", "The time of year", "How the photographs were taken", "The phone's processor"], "correct": 2, "exp": "Framing, focus and lighting determine whether the model receives an image it can interpret."},
    {"q": "Why photograph both sides of a leaf?", "opts": ["To reduce file size", "To identify the variety", "To improve focus", "Because symptoms may appear on the underside"], "correct": 3, "exp": "Many pests and diseases show first or only on the lower leaf surface."},
    {"q": "What practical saving does weed and crop discrimination enable?", "opts": ["Targeted spraying, which sharply cuts herbicide use", "Faster ripening", "Reduced seed cost", "Lower labour for harvest"], "correct": 0, "exp": "Spraying only where weeds are found avoids treating the whole field."}
  ],
  "M14:Predictive Analytics": [
    {"q": "What makes a prediction valuable besides accuracy?", "opts": ["The cost of the model", "Lead time, so there is opportunity to act", "The number of users", "The length of the report"], "correct": 1, "exp": "A prediction arriving after the decision window has closed cannot change anything."},
    {"q": "Why is disease risk forecasting particularly valuable?", "opts": ["Disease is rare", "It requires no data", "Spraying is time-critical, and preventive treatment beats curative", "It replaces scouting entirely"], "correct": 2, "exp": "Acting before symptoms appear is cheaper and more effective than treating an established infection."},
    {"q": "What improves predictions more than a more sophisticated model?", "opts": ["Faster computers", "A larger user base", "More frequent reports", "Local historical data"], "correct": 3, "exp": "Models learn from data, and data matching local conditions is what makes predictions transfer."}
  ],
  "Robotics in Agriculture": [
    {"q": "Which tasks suit robotics best?", "opts": ["Repetitive, precisely definable tasks done many times", "Tasks requiring judgement", "Tasks done once a season", "Tasks involving negotiation"], "correct": 0, "exp": "Repetition and precise definition are what make automation feasible and worthwhile."},
    {"q": "What are the binding constraints on agricultural robotics in Africa?", "opts": ["Soil type and rainfall", "Capital cost and local repair access", "Crop variety and planting date", "Regulation and licensing"], "correct": 1, "exp": "High purchase cost and the absence of nearby repair capability prevent adoption."},
    {"q": "Why does robotic milking work particularly well?", "opts": ["Cows are easy to see", "Milk is valuable", "The cow presents herself and the task is identical each time", "Milking is done once a year"], "correct": 2, "exp": "A self-presenting animal and an unchanging task make the operation reliably automatable."}
  ],
  "Blockchain in Agriculture": [
    {"q": "What does a blockchain guarantee?", "opts": ["That participants are honest", "That transactions are fast", "That the recorded data is accurate", "That the record has not been altered after entry"], "correct": 3, "exp": "Immutability protects against later alteration, not against a false original entry."},
    {"q": "When is blockchain genuinely worth considering?", "opts": ["Where several mutually distrustful parties must share one record", "For any farm record system", "Whenever data volume is large", "For all traceability"], "correct": 0, "exp": "Its distinctive benefit only applies when no single trusted record-keeper is acceptable."},
    {"q": "What should a single cooperative usually use instead?", "opts": ["A private blockchain", "An ordinary database", "Paper records only", "A public blockchain"], "correct": 1, "exp": "With one trusted record-keeper, a conventional database is simpler, cheaper and faster."}
  ],
  "AI Farm Management Tools": [
    {"q": "How should an AI tool be tested before it is trusted?", "opts": ["By comparing subscription prices", "By reading its documentation", "On cases where the correct answer is already known", "By counting its users"], "correct": 2, "exp": "Local validation against known answers reveals actual accuracy under your conditions."},
    {"q": "Which question is most often skipped when evaluating a tool?", "opts": ["How fast is it?", "What does it cost?", "Who made it?", "What happens when it is wrong?"], "correct": 3, "exp": "The consequences of an incorrect recommendation determine how much accuracy is required."},
    {"q": "Why prefer tools that explain their reasoning?", "opts": ["An explanation lets a user judge whether the answer is plausible", "They run faster", "They use less data", "They are cheaper"], "correct": 0, "exp": "Reasoning that can be inspected allows the user to catch errors an opaque answer would hide."}
  ],
  "Future Trends in AgriTech": [
    {"q": "Which skills appreciate over time in AgriTech?", "opts": ["Using a specific app", "Record design, data analysis and interpretation", "Operating one particular platform", "Repairing one model of sensor"], "correct": 1, "exp": "Transferable analytical skills survive the replacement of any given tool."},
    {"q": "What is becoming the scarce input for African AgriTech models?", "opts": ["Sensor hardware", "Computing power", "Local data", "Satellite imagery"], "correct": 2, "exp": "Models need locally relevant training data, and good local records are uncommon."},
    {"q": "Why are services bundling advice, inputs, finance and market access?", "opts": ["To reduce competition", "To increase subscription revenue", "Because regulators require it", "Because a farmer's problems are bundled too"], "correct": 3, "exp": "Solving one problem in isolation often fails when the adjacent constraints remain."}
  ],
  "Agricultural Policies": [
    {"q": "What should you ask first about any agricultural policy?", "opts": ["Who benefits and who pays", "When was it written", "Who signed it", "How long is the document"], "correct": 0, "exp": "Every policy transfers value, and identifying the direction reveals its real effect."},
    {"q": "Why can a food price ceiling reduce food availability?", "opts": ["It raises transport costs", "Producers cannot cover costs, so they plant less", "It increases consumption", "It causes hoarding by consumers"], "correct": 1, "exp": "Suppressing the producer price reduces the incentive to produce."},
    {"q": "Why is policy predictability valuable to farmers?", "opts": ["It reduces paperwork", "It lowers taxes", "Long-term investment requires confidence about future conditions", "It guarantees prices"], "correct": 2, "exp": "Farming decisions commit resources for seasons or years, which requires a stable environment."}
  ],
  "Land Use Management": [
    {"q": "What is customary tenure?", "opts": ["A government-issued title deed", "A rental agreement with a bank", "International land law", "Land rights recognised by the community and traditional authorities"], "correct": 3, "exp": "It is community-recognised rights administered outside the statutory titling system."},
    {"q": "Why does insecure tenure degrade soil?", "opts": ["Farmers avoid long-payback investments such as soil improvement and tree planting", "It prevents ploughing", "It reduces rainfall", "It causes erosion directly"], "correct": 0, "exp": "Without confidence of holding the land, only short-term returns are worth pursuing."},
    {"q": "How does weak land tenure limit finance?", "opts": ["It raises interest rates by law", "Land that cannot be used as collateral restricts access to formal credit", "It prevents record keeping", "It reduces yields"], "correct": 1, "exp": "Lenders rely on collateral, and unsecured land rights cannot serve that purpose."}
  ],
  "Sustainable Development Goals (SDGs)": [
    {"q": "Which SDG is the primary agricultural goal?", "opts": ["Goal 15, life on land", "Goal 1, no poverty", "Goal 2, zero hunger", "Goal 13, climate action"], "correct": 2, "exp": "Goal 2 covers hunger, nutrition, agricultural productivity and smallholder incomes directly."},
    {"q": "What matters most in practice when funders assess alignment?", "opts": ["The order goals are listed in", "The number of goals named", "The length of the proposal", "Specific indicators that can be measured"], "correct": 3, "exp": "Funders assess and report against measurable indicators rather than goal statements."},
    {"q": "What should never be done when framing a proposal?", "opts": ["Claiming alignment the project does not genuinely have", "Naming several goals", "Using the funder's terminology", "Including measurable indicators"], "correct": 0, "exp": "Invented alignment is checked during assessment and reporting, and damages credibility."}
  ],
  "Environmental Regulations": [
    {"q": "How is environmental compliance increasingly enforced?", "opts": ["Through insurance companies", "Through the market, by buyers and certification schemes", "By farmer associations", "Only through government inspection"], "correct": 1, "exp": "Buyers audit and withdraw business, which is often a faster and heavier penalty than a fine."},
    {"q": "What must be checked before installing a borehole or river offtake?", "opts": ["The electricity supply", "The pump brand", "Whether a water abstraction permit is required", "The soil type"], "correct": 2, "exp": "Water abstraction is commonly regulated and may require authorisation."},
    {"q": "Why does record keeping matter for environmental compliance?", "opts": ["It speeds up inspection", "It reduces the cost of inputs", "It is required for tax", "Compliance that cannot be evidenced is treated as non-compliance"], "correct": 3, "exp": "Auditors verify through documentation, so unrecorded good practice does not count."}
  ],
  "Agricultural Cooperatives": [
    {"q": "What is the economic case for a cooperative?", "opts": ["Scale, which creates a negotiating position members lack individually", "Government subsidy", "Lower taxes", "Reduced production costs on farm"], "correct": 0, "exp": "Aggregation gives smallholders bargaining power with buyers, suppliers and lenders."},
    {"q": "What is the commonest cause of cooperative failure in marketing?", "opts": ["Poor crop quality", "Side-selling by members", "Excessive membership", "Government interference"], "correct": 1, "exp": "Members selling privately prevents the cooperative from fulfilling the contracts it negotiated."},
    {"q": "What destroys a cooperative faster than financial losses?", "opts": ["Low yields", "Late deliveries", "Opaque accounts", "Small membership"], "correct": 2, "exp": "Loss of trust in how money is handled is more corrosive than a poor trading result."}
  ],
  "Rural Development": [
    {"q": "What is often a bigger constraint on farm income than yield?", "opts": ["Seed quality", "Labour availability", "Soil fertility", "Market access"], "correct": 3, "exp": "Produce that cannot reach a buyer at acceptable cost earns little regardless of how much is grown."},
    {"q": "Why does road quality determine which crops are viable?", "opts": ["Perishable produce needs reliable transport to reach buyers in time", "Roads change crop varieties", "Roads affect soil", "Roads determine rainfall"], "correct": 0, "exp": "Perishables lose value rapidly, so unreliable access rules them out."},
    {"q": "What does mobile coverage enable simultaneously?", "opts": ["Storage and grading", "Price information, mobile money and advisory services", "Higher yields and lower costs", "Irrigation and processing"], "correct": 1, "exp": "A single connection supports market information, payments and extension advice together."}
  ],
  "Gender in Agriculture": [
    {"q": "What explains the yield gap between men and women farmers?", "opts": ["Differences in ability", "Differences in crop choice", "Differences in access to land, credit, inputs and services", "Differences in soil quality"], "correct": 2, "exp": "With equal access, yields are comparable, so the gap reflects access rather than capability."},
    {"q": "What is the foundational constraint for many women farmers?", "opts": ["Seed availability", "Transport", "Storage", "Land rights"], "correct": 3, "exp": "Weak land rights block credit access and discourage long-term investment."},
    {"q": "How can a training programme reach more women?", "opts": ["By scheduling it around when and where women are already present", "By reducing the content", "By requiring registration", "By making it longer"], "correct": 0, "exp": "Practical timing and location decisions determine who is actually able to attend."}
  ],
  "Agricultural Extension Services": [
    {"q": "What is the persistent structural problem in extension?", "opts": ["Lack of technical knowledge", "The ratio of farmers to advisors", "Poor crop varieties", "Excessive funding"], "correct": 1, "exp": "One officer covering thousands of farmers makes individual advice impossible."},
    {"q": "Why do lead-farmer models work well?", "opts": ["They are cheaper to fund", "They require no training", "They multiply reach and carry more trust than an outside officer", "They avoid the need for demonstration"], "correct": 2, "exp": "Advice from a peer facing the same conditions is both scalable and credible."},
    {"q": "What makes extension advice actionable?", "opts": ["Being delivered in writing", "Covering many topics at once", "Being repeated frequently", "Being specific about what to do, when and how much"], "correct": 3, "exp": "Vague recommendations cannot be acted on; specificity is what allows a farmer to follow them."}
  ],
  "M16:Business Communication": [
    {"q": "Where should the conclusion or request appear?", "opts": ["In the opening lines", "After the background", "In an appendix", "In the final paragraph"], "correct": 0, "exp": "A busy reader may stop early, so the essential point must come first."},
    {"q": "Why is technical jargon a problem?", "opts": ["It takes longer to type", "It excludes readers rather than impressing them", "It is always inaccurate", "It cannot be translated"], "correct": 1, "exp": "Language the reader does not share prevents the message from being understood or acted on."},
    {"q": "How should a communication end?", "opts": ["With a summary of the background", "With a list of attachments", "With a specific action, person and date", "With contact details only"], "correct": 2, "exp": "Naming who does what by when is what converts a message into an outcome."}
  ],
  "M16:Leadership": [
    {"q": "What does influence rest on when formal authority is limited?", "opts": ["Seniority and title", "Budget control", "Length of service", "Competence, fairness and reliability"], "correct": 3, "exp": "Without authority, people cooperate because they trust your judgement and your word."},
    {"q": "Why explain the reason behind an instruction?", "opts": ["People execute better when they understand why", "It transfers responsibility", "It avoids the need for deadlines", "It shortens the instruction"], "correct": 0, "exp": "Understanding the purpose allows people to adapt sensibly when conditions differ."},
    {"q": "Why is it particularly damaging to over-promise to farmers?", "opts": ["They record it", "They plan their season around it", "They will demand compensation", "They repeat it to others"], "correct": 1, "exp": "Farmers commit resources based on what they are told, so a broken promise causes real loss."}
  ],
  "M16:Project Management": [
    {"q": "What is distinctive about agricultural project deadlines?", "opts": ["They are always annual", "They are usually flexible", "Many tasks are season-locked and cannot move", "They are set by donors only"], "correct": 2, "exp": "Biological timing fixes certain dates, and everything upstream must fit before them."},
    {"q": "What is the critical path?", "opts": ["The tasks done first", "The most expensive tasks", "The tasks assigned to senior staff", "The sequence where any delay delays the whole project"], "correct": 3, "exp": "Delays on this sequence propagate directly to the completion date."},
    {"q": "Why must one person be accountable for each task?", "opts": ["Because shared accountability means no accountability", "To reduce staff numbers", "To simplify reporting", "To allocate budget"], "correct": 0, "exp": "When responsibility is diffuse, tasks fall between people unnoticed."}
  ],
  "Proposal Writing": [
    {"q": "What is the most common weakness in proposals?", "opts": ["Excessive length", "Describing activities rather than measurable results", "Too much evidence", "Too many partners"], "correct": 1, "exp": "Funders assess the change produced, not the number of activities delivered."},
    {"q": "Why must the funder's format be followed exactly?", "opts": ["It shortens the proposal", "It reduces the budget", "Proposals are rejected on format before the content is read", "It is legally required"], "correct": 2, "exp": "Non-compliant submissions are commonly screened out before assessment."},
    {"q": "What should accompany a target in a proposal?", "opts": ["A list of staff", "A map of the region", "A history of the organisation", "A baseline and how it will be measured"], "correct": 3, "exp": "Without a baseline and a measurement method, a target cannot be assessed or verified."}
  ],
  "M16:Report Writing": [
    {"q": "What should the summary of a report do?", "opts": ["Stand alone, giving findings, meaning and recommendations", "List the annexes", "Describe the method in detail", "Introduce the organisation"], "correct": 0, "exp": "The summary is often all that is read, so it must convey the essentials by itself."},
    {"q": "Why separate observations from conclusions?", "opts": ["To satisfy formatting rules", "So readers can check your reasoning", "To hide weak evidence", "To lengthen the report"], "correct": 1, "exp": "A reader who can see the evidence separately can judge whether the conclusion follows."},
    {"q": "Why acknowledge limitations?", "opts": ["To avoid making recommendations", "Because funders require a limitations section", "A report claiming unwarranted certainty loses credibility", "To reduce the workload"], "correct": 2, "exp": "Overstating confidence undermines trust in the whole report once a reader notices."}
  ],
  "M16:Teamwork": [
    {"q": "What should be assumed first when cross-team work fails?", "opts": ["That someone was negligent", "That the plan was wrong", "That resources were insufficient", "That the problem is structural rather than personal"], "correct": 3, "exp": "Unclear handovers and incompatible schedules cause most such failures."},
    {"q": "What should be agreed explicitly at a handover?", "opts": ["What is passed, in what form, and by when", "Who attended the meeting", "The next meeting date", "The budget"], "correct": 0, "exp": "Specifying the content, format and timing prevents work falling between roles."},
    {"q": "Why circulate written notes after a meeting?", "opts": ["To demonstrate effort", "Because memories of what was agreed diverge", "Because it is required by policy", "To create a record for auditors"], "correct": 1, "exp": "Participants recall different commitments, and a written record settles it early."}
  ],
  "M16:Problem Solving": [
    {"q": "What is the usual error in problem solving?", "opts": ["Waiting too long to act", "Gathering too much evidence", "Treating a symptom rather than finding the cause", "Consulting too many people"], "correct": 2, "exp": "Responding to the visible symptom leaves the underlying cause in place."},
    {"q": "Which explanations should be checked first?", "opts": ["The ones others suggest", "The most technically interesting", "The most expensive to fix", "The cheap and simple ones, such as measurement error or a blockage"], "correct": 3, "exp": "Simple causes are common and quick to rule out, which narrows the search cheaply."},
    {"q": "Which step is most often omitted?", "opts": ["Deciding how you will know whether the response worked", "Defining the problem", "Gathering evidence", "Choosing a response"], "correct": 0, "exp": "Without a check, the same problem recurs and nothing is learned from the attempt."}
  ],
  "Professional Ethics": [
    {"q": "Why does information imbalance create a duty?", "opts": ["Because advisors are paid", "Because those you advise cannot verify your advice yet commit real resources to it", "Because regulations require it", "Because farmers are inexperienced"], "correct": 1, "exp": "When someone relies on advice they cannot check, the advisor carries responsibility for its accuracy."},
    {"q": "What must be disclosed when recommending a product?", "opts": ["Where it is sold", "Its price", "Any interest you have in it, such as a commission", "Its manufacturer"], "correct": 2, "exp": "An undisclosed financial interest compromises the recommendation and misleads the recipient."},
    {"q": "Who does farm data belong to?", "opts": ["The organisation storing it", "The advisor who collected it", "The project funder", "The farmer"], "correct": 3, "exp": "The data describes the farmer's business and remains theirs, whoever gathered or stores it."}
  ],
  "Building an AgriTech Portfolio": [
    {"q": "Why does a portfolio matter more than a certificate?", "opts": ["It shows what you produced rather than what you were taught", "It is quicker to obtain", "It is required by employers", "It replaces an interview"], "correct": 0, "exp": "Evidence of completed work demonstrates capability that a course record cannot."},
    {"q": "What should accompany each portfolio piece?", "opts": ["The date it was completed", "The problem, what you did, what you found and what changed", "The software used", "The name of the course"], "correct": 1, "exp": "This structure lets a reviewer judge both the work and its usefulness quickly."},
    {"q": "Why include limitations?", "opts": ["To shorten the document", "To lower expectations", "They demonstrate judgement rather than weakness", "Because employers require them"], "correct": 2, "exp": "Stating what the work could not establish shows you understand the strength of your own evidence."}
  ],
  "M18:Resume Writing": [
    {"q": "What is the purpose of a resume?", "opts": ["To replace a portfolio", "To list every course taken", "To describe your full history", "To secure an interview"], "correct": 3, "exp": "It is a screening document whose only job is to get you to the next stage."},
    {"q": "What is the recurring weakness in resumes?", "opts": ["Listing duties rather than results", "Including contact details", "Excessive length", "Too many numbers"], "correct": 0, "exp": "Duties describe a role; results demonstrate what you are able to achieve in one."},
    {"q": "How should achievements be written?", "opts": ["With technical jargon", "With numbers showing scale and what changed", "In general terms to avoid overstating", "As a list of responsibilities"], "correct": 1, "exp": "Quantified outcomes let a reader judge the scale and value of what you did."}
  ],
  "LinkedIn Optimization": [
    {"q": "How do recruiters typically find candidates on LinkedIn?", "opts": ["By education alone", "By browsing all profiles", "Through keyword searches", "By connection count"], "correct": 2, "exp": "Search by skill and tool keywords is the standard method, so those words must appear."},
    {"q": "What kind of keywords are useful for agricultural roles?", "opts": ["General personal qualities", "Hobbies and interests", "Long job titles", "Specific skills and tools such as GIS, farm data and value chain"], "correct": 3, "exp": "Recruiters search for capabilities and named tools, not personal descriptions."},
    {"q": "Why share project work publicly?", "opts": ["It demonstrates ability where people can see it", "To replace a resume", "To increase connection count", "Because the platform requires activity"], "correct": 0, "exp": "Visible evidence of real work reaches people who were not searching for you specifically."}
  ],
  "Interview Preparation": [
    {"q": "How are most interview questions best answered?", "opts": ["With general statements about your qualities", "With specific examples including a measurable result", "By describing the course you took", "By asking a question back"], "correct": 1, "exp": "Concrete examples with results are checkable evidence, unlike general claims."},
    {"q": "How many prepared examples usually suffice?", "opts": ["None, since questions vary", "At least twenty", "About five, since the same experiences answer many questions", "One for every possible question"], "correct": 2, "exp": "A small set of well-prepared experiences can be adapted to most question types."},
    {"q": "What should you do when you do not know something?", "opts": ["Claim it was not covered", "Guess confidently", "Change the subject", "Say so plainly and explain how you would find out"], "correct": 3, "exp": "Acknowledging a gap and describing your method is more credible than a confident wrong answer."}
  ],
  "Freelancing Opportunities": [
    {"q": "What kind of service is easiest to sell?", "opts": ["A specific, bounded service with a clear deliverable", "Long-term availability", "Advice by the hour", "General assistance"], "correct": 0, "exp": "A defined deliverable is easy to price, approve and evaluate."},
    {"q": "Why take a deposit?", "opts": ["Because it is legally required", "It filters out clients who were never going to pay", "To reduce the total fee", "To cover materials only"], "correct": 1, "exp": "A client unwilling to commit anything in advance is a poor risk for the full amount."},
    {"q": "What should be put in writing before starting?", "opts": ["The client's history", "Your availability", "The scope: what is included, excluded, and what happens if it changes", "Your qualifications"], "correct": 2, "exp": "Scope disputes are the commonest cause of unpaid freelance work."}
  ],
  "Consulting Opportunities": [
    {"q": "What does a consultant sell that a freelancer does not?", "opts": ["Lower prices", "Faster delivery", "More hours", "Judgement and reduced uncertainty"], "correct": 3, "exp": "Clients pay for an assessment they cannot confidently make themselves."},
    {"q": "Why must a consultant report unwelcome findings?", "opts": ["Because independence is the asset being sold", "To extend the contract", "Because clients expect criticism", "To justify the fee"], "correct": 0, "exp": "A consultant who tells clients what they want to hear provides no reduction in uncertainty."},
    {"q": "What should be defined before agreeing consulting work?", "opts": ["Your availability", "The precise question, deliverable, timeline and payment schedule", "The number of meetings", "The client's budget only"], "correct": 1, "exp": "Vague terms of reference are the main source of disputes and unpaid work."}
  ],
  "Professional Certifications": [
    {"q": "When is a certification worth pursuing?", "opts": ["When it can be completed quickly", "Whenever one is available", "When it is required for roles you want, grants a permission, or teaches a real gap", "When it is the cheapest option"], "correct": 2, "exp": "These three cases produce a concrete return; general credentialing usually does not."},
    {"q": "How should you decide which certification to pursue?", "opts": ["By asking which is most prestigious", "By choosing the longest course", "By following what peers choose", "By checking advertisements for the roles you want"], "correct": 3, "exp": "Actual requirements in real advertisements are direct evidence of what is valued."},
    {"q": "Which type of certification carries more weight?", "opts": ["One with practical assessment", "One awarded internationally", "One with an examination only", "One that is most expensive"], "correct": 0, "exp": "Assessed practical work demonstrates capability rather than recall."}
  ],
  "Career Growth Plan": [
    {"q": "What makes a career destination useful for planning?", "opts": ["Being widely respected", "Being specific enough to identify what it requires", "Being ambitious", "Being achievable within a year"], "correct": 1, "exp": "A specific destination reveals concrete capabilities that can be worked towards."},
    {"q": "Where should the required capabilities come from?", "opts": ["Colleagues' opinions", "General advice", "Real job advertisements for that type of role", "Course syllabuses"], "correct": 2, "exp": "Advertisements state what employers actually require for the role you are targeting."},
    {"q": "Why review the plan every six months?", "opts": ["Because plans expire", "To increase ambition", "To satisfy an employer", "Because destinations change as you learn what the work is really like"], "correct": 3, "exp": "Experience changes what you want, and a plan that is never revised stops matching you."}
  ],
  "M20:Certificate Requirements": [
    {"q": "What is verified in this module?", "opts": ["That every requirement for the certificate is complete", "The time taken to finish", "Fees paid", "Attendance across the course"], "correct": 0, "exp": "This is the checkpoint at which lessons, projects, capstone and assessments are confirmed complete."},
    {"q": "How many real-world projects must be completed in Module 17?", "opts": ["Eight", "Ten", "Twelve", "Five"], "correct": 1, "exp": "Module 17 contains ten real-world AgriTech projects, and all are required."},
    {"q": "What will most directly help you obtain interviews after the course?", "opts": ["The number of modules completed", "The length of study", "The portfolio of real work you built", "The certificate alone"], "correct": 2, "exp": "Employers weigh demonstrated work most heavily, which is what the portfolio provides."}
  ]
  };
})();
