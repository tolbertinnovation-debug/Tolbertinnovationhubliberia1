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
  ]
  };
})();
