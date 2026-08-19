/* TIH Complete AI Fundamentals Professional Certificate curriculum.
   Rebuilds COURSES_DB.ai into the full 20-module program taking a complete
   beginner to an AI-literate professional: AI fundamentals, generative AI,
   prompt engineering, AI productivity tools, AI for writing/creativity, machine
   learning basics, AI for business/education/software/automation, AI ethics,
   AI across industries, data literacy, AI entrepreneurship, career, projects,
   a capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable resources.
   Modelled on complit-curriculum.js.

   Updated: Richer teaching content + Liberia/West Africa examples for core Fundamentals.
   Updated: Unique educational YouTube video per topic (expanded pools). */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'ai';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._aiFullBuilt) return;

  /* Large shared pool of quality educational AI videos (YouTube IDs).
     Used as fallback and to fill skill-specific pools. */
  var V = [
    'ad79nYk2keg', 'uMzUB89uSxU', 'VGFpV3Qj4as', 'm8o2GrbR3d8', 'JCtMcVW8v7o',
    'eCU2vQs0Q6s', 'i_LwzRVP7bg', 'G2fqAlgmoPo', '4qVRBYAdLAo', 'zjkBMFhNj_g',
    'dE5isWx82WU', 'YhRfgYH_AoU', 'HLwiKR9wb70', 'tIttdEx_adw', 'fQQzPf2y2l8',
    '_VyHeSbTYhQ', 'Ha4vG0plpUA', 'MqffbpjhriQ', '5yBTxOpT4PE', 'gFSkmD8vbfg',
    'A_QG2L6GS4Q', 'w_3L1Bf2P_g', 'U6ulo3W7K1Q', 'QWJ-QYzGeCY', 'rOUs76wtv60',
    '4g1n_cuME1w', 'XZdY15sHUa8', 'd4ug1MfZo1U', 'VfxTH3U7-ns', 'eMhSj4ZRDkg',
    'Yq0QkCxoTHM', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4', '89EPPtzZHxE',
    'YPOsbQzAPiI', 'V2Gmt1fEue4', 'qDtif1zxbkY', 'REqOxDfw914', 'OA4UP4O1hz0',
    'sAhIne0U1Os', 'qpp1G0iEL_c', 'fWuzA77Mvzw', 'p6Z2d3T-fLM', 'MoPIkfscD3A',
    'cXnPxN06boY', '-LCkwnpUilI', 'x9Pl1XM4K7A', 'rGSmG7qp2Eg', 'E0Hmnixke2g',
    'F2v56M5d-pg', 'Au1OxVSyGas', '9iZvFzaNwwM', 'uh5LCXOBmSI', 'mYNMrpabVHY',
    '4AnYEfwMJrE', 'rqqzwIysWJ0', 'SSE4M0gcmvE', 'OX2pW9n6Q0I', '_ZvnD73m40o'
  ];

  /* Per-skill video pools — enough unique IDs so every topic in a module
     gets a different video when cycling with pool[idx % pool.length]. */
  var VIDEOS = {
    orientation: [
      'eMhSj4ZRDkg', 'ad79nYk2keg', 'uMzUB89uSxU', 'mYNMrpabVHY', '4AnYEfwMJrE',
      'SSE4M0gcmvE', 'rqqzwIysWJ0', '9iZvFzaNwwM', 'VGFpV3Qj4as', 'm8o2GrbR3d8'
    ],
    fundamentals: [
      'VGFpV3Qj4as', 'm8o2GrbR3d8', 'JCtMcVW8v7o', 'eCU2vQs0Q6s', 'i_LwzRVP7bg',
      '4qVRBYAdLAo', 'zjkBMFhNj_g', 'E0Hmnixke2g', 'Au1OxVSyGas', 'F2v56M5d-pg',
      'ad79nYk2keg', 'uMzUB89uSxU'
    ],
    genai: [
      'G2fqAlgmoPo', 'VfxTH3U7-ns', 'zjkBMFhNj_g', 'OX2pW9n6Q0I', '4qVRBYAdLAo',
      'fWuzA77Mvzw', 'p6Z2d3T-fLM', 'MoPIkfscD3A', 'cXnPxN06boY', '-LCkwnpUilI'
    ],
    prompt: [
      'dE5isWx82WU', 'YhRfgYH_AoU', 'HLwiKR9wb70', '_ZvnD73m40o', 'OX2pW9n6Q0I',
      'tIttdEx_adw', 'fQQzPf2y2l8', 'Yq0QkCxoTHM', 'xvpeMdAs9pE', '1PaJ28oVOAI'
    ],
    tools: [
      'tIttdEx_adw', 'fQQzPf2y2l8', 'YPOsbQzAPiI', 'V2Gmt1fEue4', 'qDtif1zxbkY',
      'REqOxDfw914', 'OA4UP4O1hz0', 'sAhIne0U1Os', 'qpp1G0iEL_c', 'mTzZod7cBj4'
    ],
    writing: [
      'fQQzPf2y2l8', 'tIttdEx_adw', '89EPPtzZHxE', 'YPOsbQzAPiI', 'V2Gmt1fEue4',
      'qDtif1zxbkY', 'REqOxDfw914', 'OA4UP4O1hz0', 'sAhIne0U1Os', 'qpp1G0iEL_c'
    ],
    creative: [
      '_VyHeSbTYhQ', 'G2fqAlgmoPo', 'fWuzA77Mvzw', 'p6Z2d3T-fLM', 'MoPIkfscD3A',
      'cXnPxN06boY', '-LCkwnpUilI', 'x9Pl1XM4K7A', 'rGSmG7qp2Eg', 'Yq0QkCxoTHM'
    ],
    ml: [
      'i_LwzRVP7bg', 'E0Hmnixke2g', 'F2v56M5d-pg', 'Au1OxVSyGas', 'JCtMcVW8v7o',
      'eCU2vQs0Q6s', '4qVRBYAdLAo', 'VGFpV3Qj4as', 'm8o2GrbR3d8', 'zjkBMFhNj_g'
    ],
    business: [
      'Ha4vG0plpUA', 'U6ulo3W7K1Q', 'rOUs76wtv60', '4g1n_cuME1w', 'XZdY15sHUa8',
      'd4ug1MfZo1U', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4', '89EPPtzZHxE'
    ],
    education: [
      'MqffbpjhriQ', 'fQQzPf2y2l8', 'tIttdEx_adw', 'dE5isWx82WU', 'YhRfgYH_AoU',
      'OA4UP4O1hz0', 'sAhIne0U1Os', 'qpp1G0iEL_c', 'fWuzA77Mvzw', 'p6Z2d3T-fLM'
    ],
    dev: [
      '5yBTxOpT4PE', 'qpp1G0iEL_c', 'sAhIne0U1Os', 'OA4UP4O1hz0', 'REqOxDfw914',
      'qDtif1zxbkY', 'V2Gmt1fEue4', 'YPOsbQzAPiI', '89EPPtzZHxE', 'mTzZod7cBj4'
    ],
    automation: [
      'gFSkmD8vbfg', 'tIttdEx_adw', '5yBTxOpT4PE', 'qpp1G0iEL_c', 'sAhIne0U1Os',
      'OA4UP4O1hz0', 'REqOxDfw914', 'qDtif1zxbkY', 'V2Gmt1fEue4', 'YPOsbQzAPiI'
    ],
    ethics: [
      'A_QG2L6GS4Q', 'w_3L1Bf2P_g', 'ad79nYk2keg', 'uMzUB89uSxU', '9iZvFzaNwwM',
      'VGFpV3Qj4as', 'm8o2GrbR3d8', 'G2fqAlgmoPo', '4qVRBYAdLAo', 'zjkBMFhNj_g'
    ],
    industries: [
      'U6ulo3W7K1Q', 'Ha4vG0plpUA', 'MqffbpjhriQ', 'rOUs76wtv60', '4g1n_cuME1w',
      'XZdY15sHUa8', 'd4ug1MfZo1U', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4'
    ],
    data: [
      'QWJ-QYzGeCY', 'E0Hmnixke2g', 'Au1OxVSyGas', 'F2v56M5d-pg', 'i_LwzRVP7bg',
      'JCtMcVW8v7o', 'eCU2vQs0Q6s', 'VGFpV3Qj4as', 'm8o2GrbR3d8', '4qVRBYAdLAo'
    ],
    entrepreneur: [
      'rOUs76wtv60', 'Ha4vG0plpUA', 'U6ulo3W7K1Q', '4g1n_cuME1w', 'XZdY15sHUa8',
      'd4ug1MfZo1U', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4', '89EPPtzZHxE'
    ],
    career: [
      '4g1n_cuME1w', 'rOUs76wtv60', 'XZdY15sHUa8', 'd4ug1MfZo1U', 'Ha4vG0plpUA',
      'U6ulo3W7K1Q', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4', '89EPPtzZHxE'
    ],
    projects: [
      'XZdY15sHUa8', 'd4ug1MfZo1U', 'tIttdEx_adw', 'fQQzPf2y2l8', 'dE5isWx82WU',
      'YhRfgYH_AoU', 'G2fqAlgmoPo', '5yBTxOpT4PE', 'gFSkmD8vbfg', 'Ha4vG0plpUA'
    ],
    capstone: [
      'd4ug1MfZo1U', 'XZdY15sHUa8', 'rOUs76wtv60', '4g1n_cuME1w', 'Ha4vG0plpUA',
      'U6ulo3W7K1Q', 'tIttdEx_adw', 'fQQzPf2y2l8', 'dE5isWx82WU', 'YhRfgYH_AoU'
    ],
    assessment: [
      'XZdY15sHUa8', 'd4ug1MfZo1U', 'VGFpV3Qj4as', 'G2fqAlgmoPo', 'dE5isWx82WU',
      'i_LwzRVP7bg', 'A_QG2L6GS4Q', 'Ha4vG0plpUA', 'tIttdEx_adw', '4g1n_cuME1w'
    ]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Artificial Intelligence?', 'History of AI', 'Types of AI', 'AI vs. Machine Learning vs. Deep Learning', 'Careers in AI', 'Course Roadmap', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'AI Fundamentals', '🧠', 'fundamentals', 'content', ['How AI Works', 'AI Terminology', 'Data and AI', 'Algorithms Explained', 'Pattern Recognition', 'Neural Networks', 'Large Language Models (LLMs)', 'AI in Everyday Life', 'AI Myths & Misconceptions', 'AI Fundamentals Assessment']],
    [3, 'Generative AI', '✨', 'genai', 'content', ['What is Generative AI?', 'Text Generation', 'Image Generation', 'Audio Generation', 'Video Generation', 'AI Assistants', 'Multimodal AI', 'Practical Use Cases', 'Generative AI Trends', 'Hands-on Practice']],
    [4, 'Prompt Engineering', '⌨️', 'prompt', 'content', ['What is Prompt Engineering?', 'Writing Effective Prompts', 'Zero-Shot Prompting', 'Few-Shot Prompting', 'Chain-of-Thought Concepts', 'Role-Based Prompting', 'Prompt Optimization', 'Prompt Templates', 'Common Mistakes', 'Prompt Engineering Project']],
    [5, 'AI Productivity Tools', '🛠️', 'tools', 'content', ['ChatGPT', 'Microsoft Copilot', 'Google Gemini', 'Claude AI', 'Perplexity AI', 'NotebookLM', 'AI Note-Taking Tools', 'AI Search Tools', 'AI Workflow Automation', 'Productivity Lab']],
    [6, 'AI for Writing & Communication', '✍️', 'writing', 'content', ['Writing Emails', 'Writing Reports', 'Creating Presentations', 'Resume & Cover Letter Writing', 'Academic Writing Support', 'Translation', 'Summarization', 'Proofreading', 'Business Communication', 'Writing Project']],
    [7, 'AI for Creativity & Design', '🎨', 'creative', 'content', ['AI Image Generation', 'AI Graphic Design', 'AI Logo Creation', 'AI Video Creation', 'AI Music Generation', 'AI Voice Generation', 'AI Presentation Design', 'Canva AI', 'Adobe Firefly', 'Creative Project']],
    [8, 'Machine Learning Basics', '📈', 'ml', 'content', ['Introduction to Machine Learning', 'Types of Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Training Data', 'Model Evaluation', 'Real-World Examples', 'Machine Learning Quiz', 'ML Mini Project']],
    [9, 'AI for Business', '💼', 'business', 'content', ['AI in Marketing', 'AI in Sales', 'AI in Customer Service', 'AI in Human Resources', 'AI in Finance', 'AI in Operations', 'AI for Decision-Making', 'AI Strategy', 'Business Case Studies', 'Business AI Project']],
    [10, 'AI for Education & Research', '🎓', 'education', 'content', ['AI for Students', 'AI for Teachers', 'AI for Researchers', 'AI Study Plans', 'AI Tutoring', 'Literature Reviews', 'Citation Assistance', 'Research Productivity', 'Ethical Academic Use', 'Education Project']],
    [11, 'AI for Software Development', '💻', 'dev', 'content', ['AI Coding Assistants', 'GitHub Copilot', 'AI Code Generation', 'AI Debugging', 'Code Documentation', 'API Assistance', 'Software Testing with AI', 'AI Development Workflows', 'Developer Productivity', 'Coding Project']],
    [12, 'AI Automation', '⚙️', 'automation', 'content', ['Workflow Automation', 'AI Chatbots', 'No-Code AI Tools', 'Low-Code AI Platforms', 'Robotic Process Automation (RPA)', 'AI Agents', 'Business Process Automation', 'Automation Project']],
    [13, 'AI Ethics & Responsible AI', '⚖️', 'ethics', 'content', ['Responsible AI', 'AI Bias', 'Fairness', 'Transparency', 'Privacy', 'Security', 'Intellectual Property', 'Copyright', 'AI Regulations', 'Ethical AI Case Studies']],
    [14, 'AI in Different Industries', '🏭', 'industries', 'content', ['Healthcare', 'Agriculture', 'Banking & Finance', 'Education', 'Manufacturing', 'Retail', 'Government', 'Media & Entertainment', 'Transportation', 'Future of Work']],
    [15, 'Data Literacy for AI', '📊', 'data', 'content', ['What is Data?', 'Data Collection', 'Data Cleaning', 'Data Visualization', 'Spreadsheets', 'Basic Statistics', 'Data Privacy', 'Data Quality', 'Decision-Making with Data', 'Data Project']],
    [16, 'AI Entrepreneurship & Innovation', '🚀', 'entrepreneur', 'content', ['AI Startup Opportunities', 'AI Business Models', 'AI Product Development', 'Market Validation', 'AI Consulting', 'AI Freelancing', 'AI Business Ethics', 'Innovation Strategy']],
    [17, 'Career Development', '📋', 'career', 'content', ['AI Career Paths', 'Building an AI Portfolio', 'Resume Writing', 'LinkedIn Optimization', 'Interview Preparation', 'AI Certifications', 'Continuous Learning', 'Career Roadmap']],
    [18, 'Practical AI Projects', '🏗️', 'projects', 'projects', ['AI-Powered Resume Builder', 'AI Content Creation Workflow', 'AI Customer Support Chatbot', 'AI Marketing Campaign', 'AI Research Assistant', 'AI Business Dashboard', 'AI Productivity System', 'AI Education Assistant', 'AI Presentation Generator', 'AI Innovation Challenge']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Select a Real-World Problem', 'Research AI Solutions', 'Design an AI-Powered Workflow', 'Build a Prototype or Demonstration', 'Evaluate Results', 'Prepare Documentation', 'Present the Project', 'Final Evaluation']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['AI Fundamentals Assessment', 'Prompt Engineering Assessment', 'Generative AI Assessment', 'AI Ethics Assessment', 'AI Productivity Assessment', 'Business AI Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'AI foundations', fundamentals: 'AI fundamentals', genai: 'generative AI', prompt: 'prompt engineering', tools: 'AI productivity tools', writing: 'AI for writing & communication', creative: 'AI for creativity & design', ml: 'machine learning basics', business: 'AI for business', education: 'AI for education & research', dev: 'AI for software development', automation: 'AI automation', ethics: 'AI ethics & responsible AI', industries: 'AI across industries', data: 'data literacy for AI', entrepreneur: 'AI entrepreneurship & innovation', career: 'AI careers', projects: 'applied AI projects', capstone: 'your capstone project', assessment: 'your AI knowledge' };

  var TEMPLATES = {
    prompt: '<h4>📥 Resource: Prompt Library</h4><p>Reusable prompt patterns:</p><ul><li><strong>Role:</strong> "Act as a [role]. Help me [task]."</li><li><strong>Context + task:</strong> "Here is [context]. Now [do X] in [format]."</li><li><strong>Few-shot:</strong> give 2–3 examples, then the new input.</li><li><strong>Chain-of-thought:</strong> "Think step by step, then give the answer."</li><li><strong>Refine:</strong> "Improve this by [criteria]: [text]."</li></ul>',
    toolkit: '<h4>📥 Guide: AI Toolkit</h4><ul><li><strong>Chat/reasoning:</strong> ChatGPT, Claude, Gemini, Copilot</li><li><strong>Research:</strong> Perplexity, NotebookLM</li><li><strong>Creativity:</strong> Canva AI, Adobe Firefly</li><li><strong>Coding:</strong> GitHub Copilot</li><li><strong>Automation:</strong> Zapier, Make, Notion AI</li><li>Always check outputs and cite/verify sources.</li></ul>',
    business: '<h4>📥 Template: Business AI Use Case</h4><ul><li>Problem/opportunity</li><li>Where AI helps (task & data)</li><li>Tool/approach chosen</li><li>Expected benefit (time/cost/quality)</li><li>Risks & responsible-use checks</li><li>Success metric</li></ul>',
    ethics: '<h4>📥 Checklist: Responsible AI</h4><ul><li>Is the data/use fair and unbiased?</li><li>Is it transparent (people know AI is used)?</li><li>Is privacy and security protected?</li><li>Do I have rights to inputs/outputs (copyright)?</li><li>Have I verified accuracy (no blind trust)?</li><li>Does it comply with rules/regulations?</li></ul>'
  };
  function templateFor(name) {
    if (/Writing Effective Prompts|Prompt Templates|Prompt Engineering Project|Prompt Optimization/i.test(name)) return TEMPLATES.prompt;
    if (/^ChatGPT$|AI Workflow Automation|AI Search Tools|Productivity Lab/i.test(name)) return TEMPLATES.toolkit;
    if (/AI Strategy|Business AI Project|Business Case Studies|AI Business Models/i.test(name)) return TEMPLATES.business;
    if (/Responsible AI|AI Bias|Ethical AI|AI Regulations|AI Business Ethics|Ethical Academic Use/i.test(name)) return TEMPLATES.ethics;
    return '';
  }

  /* ========== RICH DETAILED NOTES FOR CORE AI FUNDAMENTALS ==========
     Liberia / West Africa examples included throughout. */
  var RICH_NOTES = {
    'What is Artificial Intelligence?':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 1: Course Orientation</strong><span>Use AI responsibly</span></div>' +
      '<h3>What is Artificial Intelligence?</h3>' +
      '<p><strong>Learning objectives:</strong> By the end of this lesson you will be able to define AI in plain language, distinguish Narrow AI from General AI, and give at least three real examples of AI already used in Liberia and West Africa.</p>' +
      '<h4>1. Simple definition</h4>' +
      '<p>Artificial Intelligence (AI) is the ability of computers and software to perform tasks that normally require human intelligence. These tasks include recognising patterns, understanding language, making recommendations, and solving problems.</p>' +
      '<p>AI is <em>not</em> a robot with feelings. Today’s AI is software that has been trained on large amounts of data so it can make useful predictions or generate content.</p>' +
      '<h4>2. Narrow AI vs General AI</h4>' +
      '<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin:1rem 0">' +
      '<tr><th>Type</th><th>What it means</th><th>Examples</th></tr>' +
      '<tr><td><strong>Narrow AI</strong> (also called Weak AI)</td><td>Designed for one specific job</td><td>Mobile money fraud detection, WhatsApp chatbots, face unlock on phones, Google Maps traffic prediction</td></tr>' +
      '<tr><td><strong>General AI</strong> (also called Strong AI)</td><td>Would match or exceed human intelligence across almost every task</td><td>Does not exist yet</td></tr>' +
      '</table>' +
      '<p>Everything you use today (ChatGPT, Gemini, Copilot, recommendation systems) is Narrow AI.</p>' +
      '<h4>3. AI already present in Liberia & West Africa</h4>' +
      '<ul>' +
      '<li><strong>Mobile money</strong> (Orange Money, Lonestar MTN MoMo): systems detect unusual transactions to reduce fraud.</li>' +
      '<li><strong>Agriculture</strong>: apps that help farmers identify crop diseases from photos and get weather-based advice.</li>' +
      '<li><strong>Healthcare</strong>: AI-supported tools that help diagnose malaria or tuberculosis from images or symptoms in clinics with few specialists.</li>' +
      '<li><strong>Education</strong>: language learning apps and adaptive practice quizzes used by students preparing for WASSCE and university entrance.</li>' +
      '<li><strong>Small business</strong>: inventory and sales prediction tools that help market traders and shop owners plan better.</li>' +
      '</ul>' +
      '<h4>4. AI vs traditional computer programs</h4>' +
      '<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin:1rem 0">' +
      '<tr><th>Traditional program</th><th>AI system</th></tr>' +
      '<tr><td>Follows exact rules written by a programmer</td><td>Learns patterns from data</td></tr>' +
      '<tr><td>Same input always produces the same output</td><td>Can improve as it sees more examples</td></tr>' +
      '<tr><td>Example: a calculator</td><td>Example: a system that predicts which customers might stop using a mobile money service</td></tr>' +
      '</table>' +
      '<h4>5. Practice task (Liberia context)</h4>' +
      '<p>Think of one problem in your community, school, or small business. Write one sentence answering: “How could an AI system help with this problem?” Example: “An AI system could help a clinic in Monrovia prioritise patients who need urgent malaria testing.”</p>' +
      '<h4>6. Quick check</h4>' +
      '<ol>' +
      '<li>What is the difference between Narrow AI and General AI?</li>' +
      '<li>Name two examples of AI already used in West Africa.</li>' +
      '<li>Why is today’s AI not “conscious”?</li>' +
      '</ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>',

    'How AI Works':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 2: AI Fundamentals</strong><span>Use AI responsibly</span></div>' +
      '<h3>How AI Works</h3>' +
      '<p><strong>Learning objectives:</strong> Understand the basic cycle of data → learning → prediction, and see how this cycle appears in everyday Liberian and West African examples.</p>' +
      '<h4>1. The simple cycle</h4>' +
      '<ol>' +
      '<li><strong>Data</strong> – examples the system can learn from (photos of healthy vs diseased cassava leaves, past mobile-money transactions, student quiz results).</li>' +
      '<li><strong>Learning / Training</strong> – the system finds patterns in that data.</li>' +
      '<li><strong>Prediction or Generation</strong> – when given new input, the system uses the patterns to make a useful output (diagnose a leaf, flag a suspicious transfer, suggest the next study topic).</li>' +
      '</ol>' +
      '<h4>2. Liberia examples of the cycle</h4>' +
      '<ul>' +
      '<li><strong>Crop disease app</strong>: thousands of photos of healthy and diseased plants → system learns visual patterns → farmer takes a new photo and receives a diagnosis + treatment advice.</li>' +
      '<li><strong>Mobile money fraud detection</strong>: history of normal and fraudulent transactions → system learns what “unusual” looks like → new transaction is scored as low or high risk.</li>' +
      '<li><strong>School practice app</strong>: records of which questions students get wrong → system learns common weak areas → recommends targeted practice for a WASSCE candidate.</li>' +
      '</ul>' +
      '<h4>3. Why data quality matters</h4>' +
      '<p>“Garbage in, garbage out.” If the training data is incomplete, biased, or wrong, the AI will make poor decisions. Example: an agricultural AI trained only on large commercial farms may give bad advice to smallholder farmers in rural Liberia.</p>' +
      '<h4>4. Practice task</h4>' +
      '<p>Pick one of the three examples above. Write the three steps (Data → Learning → Prediction) in your own words for that example.</p>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>',

    'Types of AI':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 1: Course Orientation</strong><span>Use AI responsibly</span></div>' +
      '<h3>Types of AI</h3>' +
      '<p><strong>Learning objectives:</strong> Be able to name the main types of AI you will meet and match each type to a practical use case relevant to Liberia.</p>' +
      '<h4>1. By capability</h4>' +
      '<ul>' +
      '<li><strong>Narrow (Weak) AI</strong> – specialised systems (all current commercial AI).</li>' +
      '<li><strong>General (Strong) AI</strong> – human-level across many domains (not yet achieved).</li>' +
      '<li><strong>Superintelligence</strong> – far beyond human intelligence (theoretical).</li>' +
      '</ul>' +
      '<h4>2. By technique (what you will actually use)</h4>' +
      '<ul>' +
      '<li><strong>Machine Learning</strong> – systems that improve from data.</li>' +
      '<li><strong>Deep Learning</strong> – machine learning that uses multi-layer neural networks (powers modern image recognition and large language models).</li>' +
      '<li><strong>Generative AI</strong> – creates new content (text, images, audio, code) from prompts.</li>' +
      '<li><strong>Rule-based / Expert systems</strong> – older approach that follows hand-written rules.</li>' +
      '</ul>' +
      '<h4>3. Liberia-relevant mapping</h4>' +
      '<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;margin:1rem 0">' +
      '<tr><th>Technique</th><th>Possible use in Liberia</th></tr>' +
      '<tr><td>Machine Learning</td><td>Predicting which students need extra support before WASSCE</td></tr>' +
      '<tr><td>Deep Learning</td><td>Identifying plant diseases from smartphone photos</td></tr>' +
      '<tr><td>Generative AI</td><td>Drafting business proposals, lesson plans, or customer messages in English or local languages</td></tr>' +
      '</table>' +
      '<h4>4. Practice task</h4>' +
      '<p>Write one sentence for each of the three techniques above, describing a useful application you would like to see in your community or workplace.</p>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>',

    'AI in Everyday Life':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 2: AI Fundamentals</strong><span>Use AI responsibly</span></div>' +
      '<h3>AI in Everyday Life</h3>' +
      '<p><strong>Learning objectives:</strong> Recognise the many places AI already appears in daily life in Liberia and West Africa, and begin to evaluate when its use is helpful or risky.</p>' +
      '<h4>1. Common places you already meet AI</h4>' +
      '<ul>' +
      '<li><strong>Phones</strong> – face unlock, voice assistants, photo organisation, spam call blocking.</li>' +
      '<li><strong>Messaging & social media</strong> – content recommendations, translation, spam filters, auto-captions.</li>' +
      '<li><strong>Mobile money & banking</strong> – fraud detection, credit scoring for small loans, customer chatbots.</li>' +
      '<li><strong>Transport & maps</strong> – traffic prediction, route suggestions, ride-hailing matching.</li>' +
      '<li><strong>Shopping</strong> – product recommendations, price comparison tools.</li>' +
      '<li><strong>Education</strong> – adaptive quizzes, language practice apps, automated essay feedback.</li>' +
      '</ul>' +
      '<h4>2. Liberia-focused examples</h4>' +
      '<ul>' +
      '<li>A market woman in Duala or Red Light Market receiving a mobile-money loan decision that used past transaction patterns.</li>' +
      '<li>A student in Monrovia using an AI writing assistant to improve a scholarship application letter.</li>' +
      '<li>A clinic using an AI tool to help prioritise patients or interpret lab results when a specialist is not available.</li>' +
      '<li>A farmer using a phone app that analyses a photo of cassava leaves and suggests treatment.</li>' +
      '</ul>' +
      '<h4>3. Questions to ask about any AI system</h4>' +
      '<ol>' +
      '<li>What problem is it trying to solve?</li>' +
      '<li>What data was it trained on? Could that data be biased against certain groups?</li>' +
      '<li>Who is responsible if the AI makes a wrong decision?</li>' +
      '<li>Does the user know that AI is being used?</li>' +
      '</ol>' +
      '<h4>4. Practice task</h4>' +
      '<p>List three AI systems you have used in the last week (even if you did not notice them at the time). For one of them, answer the four questions above.</p>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>',

    'AI Myths & Misconceptions':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 2: AI Fundamentals</strong><span>Use AI responsibly</span></div>' +
      '<h3>AI Myths & Misconceptions</h3>' +
      '<p><strong>Learning objectives:</strong> Identify common myths about AI and replace them with accurate, practical understanding so you can use AI confidently and responsibly.</p>' +
      '<h4>Myth 1: “AI is conscious and thinks like a human”</h4>' +
      '<p><strong>Reality:</strong> Current AI systems are statistical pattern-matchers. They do not have feelings, desires, or understanding. They predict the next word or pixel based on patterns in training data.</p>' +
      '<h4>Myth 2: “AI will take all the jobs in Liberia”</h4>' +
      '<p><strong>Reality:</strong> AI will change many jobs and automate some tasks, but it also creates new roles (AI tool users, data preparers, prompt engineers, local AI solution builders). People who learn to use AI well will have an advantage.</p>' +
      '<h4>Myth 3: “AI is always right”</h4>' +
      '<p><strong>Reality:</strong> AI can “hallucinate” (produce confident but wrong answers), reflect bias in its training data, and fail on unusual cases. Always verify important outputs.</p>' +
      '<h4>Myth 4: “Only big companies or rich countries can benefit from AI”</h4>' +
      '<p><strong>Reality:</strong> Many powerful AI tools are free or low-cost and work on ordinary smartphones. Students, teachers, farmers, and small business owners in Liberia can already use them productively.</p>' +
      '<h4>Myth 5: “Using AI is cheating”</h4>' +
      '<p><strong>Reality:</strong> Using AI as a tool (like a calculator or spell-checker) is not cheating when the human remains responsible for the final work and for learning. Hiding AI use when originality is required, or submitting AI work as fully your own without understanding it, is problematic.</p>' +
      '<h4>Practice task</h4>' +
      '<p>Choose one myth above that you or someone you know believed. Write two sentences explaining the corrected understanding in your own words.</p>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>',

    'Large Language Models (LLMs)':
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · Module 2: AI Fundamentals</strong><span>Use AI responsibly</span></div>' +
      '<h3>Large Language Models (LLMs)</h3>' +
      '<p><strong>Learning objectives:</strong> Explain what an LLM is, how it is trained at a high level, and how to use one effectively and responsibly for study and work in Liberia.</p>' +
      '<h4>1. What is an LLM?</h4>' +
      '<p>A Large Language Model is an AI system trained on enormous amounts of text so that it can understand and generate human language. Popular examples include ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), and Microsoft Copilot.</p>' +
      '<h4>2. How it roughly works</h4>' +
      '<p>The model is trained to predict the next word (or token) in a sequence. After seeing billions of examples, it becomes surprisingly good at answering questions, writing drafts, translating, summarising, and more. It does not “know” facts the way a human does; it has learned statistical patterns about language.</p>' +
      '<h4>3. Practical uses for learners and professionals in Liberia</h4>' +
      '<ul>' +
      '<li>Drafting and improving scholarship or job application letters</li>' +
      '<li>Explaining difficult concepts in simpler English or step-by-step</li>' +
      '<li>Practising English writing and receiving feedback</li>' +
      '<li>Brainstorming business ideas or marketing messages for a small shop</li>' +
      '<li>Summarising long articles or reports</li>' +
      '<li>Generating practice questions for WASSCE or other exams (then verifying accuracy)</li>' +
      '</ul>' +
      '<h4>4. Important limitations</h4>' +
      '<ul>' +
      '<li>Can invent plausible-sounding but false information (hallucination)</li>' +
      '<li>Knowledge has a cut-off date and may not include the latest local events</li>' +
      '<li>May reflect biases present in its training data</li>' +
      '<li>Should not be trusted blindly for medical, legal, or financial decisions</li>' +
      '</ul>' +
      '<h4>5. Practice task</h4>' +
      '<p>Open any free LLM (ChatGPT, Gemini, or Copilot). Ask it to explain a topic you are studying in simple English suitable for a Liberian secondary-school student. Then ask it to give two practice questions on the same topic. Check whether the explanation and questions are accurate.</p>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF.</p>' +
      '</div>'
  };

  function note(moduleTitle, skill, name, position) {
    if (RICH_NOTES[name]) {
      return RICH_NOTES[name];
    }

    var label = skillLabel[skill] || 'AI skills';
    var focus = position % 2 ? 'hands-on practice with real AI tools and responsible use' : 'understanding the concept, applying it with a tool and reviewing the result';
    var tpl = templateFor(name);

    var liberiaHint = '';
    if (skill === 'fundamentals' || skill === 'orientation') {
      liberiaHint = '<p><strong>Liberia / West Africa connection:</strong> Think about how this concept could help students, farmers, small businesses, clinics, or mobile-money users in Liberia. Always verify AI outputs before acting on them.</p>';
    }

    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · ' + esc(moduleTitle) + '</strong><span>Use AI responsibly</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two hands-on exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and where it is useful.</li>' +
      '<li>See how professionals apply it with popular AI tools.</li>' +
      '<li>Try it yourself with a real AI tool — and always check the output.</li></ul>' +
      liberiaHint +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this resource.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real task in your studies, work or business in Liberia — and verify the AI’s output.</div>') +
      '<h4>Hands-on exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Use an AI tool to practise <em>' + esc(name) + '</em> on a real example relevant to Liberia or West Africa.</li>' +
      '<li><strong>Exercise 2:</strong> Improve the result, then note one strength and one limitation of the AI.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming an AI-literate professional.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on AI project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical AI project. Build it with real AI tools, use AI responsibly, and add it to your AI portfolio. Prefer examples that could help a student, farmer, small business, clinic, or community in Liberia.</p>' +
      '<h4>What to do</h4><ol><li>Define the goal and choose the right AI tool(s).</li><li>Build the workflow/output, iterating on your prompts.</li><li>Verify accuracy, note ethical considerations, and finalise it for your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A working AI-powered output/workflow (with your prompts) for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and resources offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Artificial Intelligence (AI) is:', opts: ['Only robots', 'Computer systems that perform tasks needing human-like intelligence', 'Only the internet', 'A spreadsheet'], correct: 1, exp: 'AI enables machines to do tasks that normally need human intelligence.' },
      { q: 'The best way to become AI-literate is to:', opts: ['Only read theory', 'Use AI tools hands-on and verify their output', 'Avoid AI', 'Memorise terms'], correct: 1, exp: 'Practice with real tools, plus critical checking, builds AI literacy.' },
      { q: 'A responsible AI user always:', opts: ['Trusts AI blindly', 'Verifies outputs and respects privacy and rights', 'Hides that AI was used', 'Ignores bias'], correct: 1, exp: 'Verification, transparency and respect for rights are essential.' },
      { q: 'AI is best seen as:', opts: ['A replacement for all thinking', 'A powerful assistant that augments human work', 'Useless', 'Only for experts'], correct: 1, exp: 'AI augments human judgement; it does not replace it.' },
      { q: 'The capstone project helps you:', opts: ['Skip learning', 'Apply AI to a real problem end to end', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the whole program into one AI solution.' },
      { q: 'AI outputs should always be:', opts: ['Accepted as fact', 'Checked for accuracy and bias', 'Published without review', 'Ignored'], correct: 1, exp: 'AI can be wrong or biased — always review outputs.' }
    ],
    fundamentals: [
      { q: 'Machine learning is a subset of:', opts: ['Spreadsheets', 'Artificial Intelligence', 'The internet', 'Databases'], correct: 1, exp: 'ML is a branch of AI where systems learn from data.' },
      { q: 'Deep learning uses:', opts: ['Simple rules only', 'Neural networks with many layers', 'No data', 'Only spreadsheets'], correct: 1, exp: 'Deep learning uses multi-layer neural networks.' },
      { q: 'An algorithm is:', opts: ['A robot', 'A step-by-step procedure to solve a problem', 'A type of data', 'A computer'], correct: 1, exp: 'Algorithms are defined procedures for computation.' },
      { q: 'A Large Language Model (LLM) is trained to:', opts: ['Draw only', 'Understand and generate human language', 'Fix hardware', 'Store files'], correct: 1, exp: 'LLMs generate and understand text from patterns in data.' },
      { q: 'AI systems learn patterns from:', opts: ['Nothing', 'Data', 'Only rules written by hand', 'Random guesses'], correct: 1, exp: 'Modern AI learns patterns from large amounts of data.' },
      { q: 'A common AI myth is that AI:', opts: ['Needs data', 'Is conscious/thinks like a human', 'Can make mistakes', 'Uses algorithms'], correct: 1, exp: 'Today’s AI is not conscious; it predicts patterns statistically.' }
    ],
    genai: [
      { q: 'Generative AI is used to:', opts: ['Only classify', 'Create new content (text, images, audio, video)', 'Delete files', 'Only store data'], correct: 1, exp: 'Generative AI produces new content.' },
      { q: 'A text-generation AI produces:', opts: ['Only images', 'Written content from a prompt', 'Only audio', 'Nothing'], correct: 1, exp: 'Text models generate writing from prompts.' },
      { q: 'Multimodal AI can work with:', opts: ['Only text', 'Multiple types (text, image, audio)', 'Only numbers', 'Nothing'], correct: 1, exp: 'Multimodal models handle several data types together.' },
      { q: 'A limitation of generative AI is that it can:', opts: ['Never be wrong', '"Hallucinate" — produce confident but false output', 'Only tell truth', 'Read minds'], correct: 1, exp: 'Generative AI can produce plausible but incorrect content.' },
      { q: 'AI-generated images are created from:', opts: ['Nothing', 'Text prompts describing the image', 'Only photos you upload', 'Random noise only'], correct: 1, exp: 'Image models turn text prompts into images.' },
      { q: 'Before using AI-generated content commercially you should:', opts: ['Ignore rights', 'Check licensing and accuracy', 'Assume it’s free', 'Never credit'], correct: 1, exp: 'Confirm usage rights and verify the content.' }
    ],
    prompt: [
      { q: 'Prompt engineering is:', opts: ['Fixing hardware', 'Crafting inputs that get better AI outputs', 'A coding language', 'A database'], correct: 1, exp: 'It is the skill of writing effective AI prompts.' },
      { q: 'A clear prompt usually includes:', opts: ['Nothing specific', 'Role, task, context and desired format', 'Only one word', 'Random text'], correct: 1, exp: 'Specifying role, task, context and format improves results.' },
      { q: 'Few-shot prompting means:', opts: ['No examples', 'Giving a few examples in the prompt', 'Only one word', 'Ignoring the task'], correct: 1, exp: 'You show the model a few examples of what you want.' },
      { q: 'Chain-of-thought prompting asks the model to:', opts: ['Answer instantly', 'Reason step by step', 'Skip reasoning', 'Only guess'], correct: 1, exp: 'It encourages step-by-step reasoning for complex tasks.' },
      { q: 'If an AI answer is not good enough you should:', opts: ['Give up', 'Refine the prompt and iterate', 'Blame the tool', 'Accept it anyway'], correct: 1, exp: 'Iterating and refining prompts improves results.' },
      { q: 'Role-based prompting means telling the AI to:', opts: ['Do nothing', 'Act as a specific expert/role', 'Only translate', 'Delete data'], correct: 1, exp: 'Assigning a role focuses the response, e.g. "act as a tutor".' }
    ],
    tools: [
      { q: 'ChatGPT, Gemini, Claude and Copilot are:', opts: ['Databases', 'AI assistants/chatbots', 'Spreadsheets', 'Browsers'], correct: 1, exp: 'They are conversational AI assistants.' },
      { q: 'Perplexity AI is especially useful for:', opts: ['Image editing', 'AI-assisted search with sources', 'Coding only', 'Music'], correct: 1, exp: 'Perplexity answers with cited web sources.' },
      { q: 'AI workflow automation tools (e.g. Zapier/Make) let you:', opts: ['Draw', 'Connect apps to automate tasks', 'Only chat', 'Delete data'], correct: 1, exp: 'They automate multi-step tasks across apps.' },
      { q: 'When using an AI assistant for facts you should:', opts: ['Trust everything', 'Verify important claims', 'Never check', 'Assume it is always right'], correct: 1, exp: 'Always verify important AI-provided facts.' },
      { q: 'NotebookLM is designed to:', opts: ['Edit video', 'Help you work with and question your own documents', 'Host websites', 'Send email'], correct: 1, exp: 'It grounds answers in sources you provide.' },
      { q: 'Choosing an AI tool should depend on:', opts: ['The logo', 'The task and its strengths', 'Random choice', 'The colour'], correct: 1, exp: 'Match the tool to the task you need done.' }
    ],
    ml: [
      { q: 'Supervised learning uses data that is:', opts: ['Unlabeled', 'Labeled (with known answers)', 'Random', 'Empty'], correct: 1, exp: 'Supervised learning trains on labeled examples.' },
      { q: 'Unsupervised learning finds:', opts: ['Known answers', 'Patterns/groups in unlabeled data', 'Nothing', 'Only errors'], correct: 1, exp: 'It discovers structure without labels (e.g. clustering).' },
      { q: 'Reinforcement learning learns from:', opts: ['Labels only', 'Rewards and penalties from actions', 'Nothing', 'Only images'], correct: 1, exp: 'An agent learns by trial and error via rewards.' },
      { q: 'Training data quality matters because:', opts: ['It does not', 'Poor data leads to poor models (garbage in, garbage out)', 'More is always fine', 'Data is irrelevant'], correct: 1, exp: 'Model quality depends heavily on data quality.' },
      { q: 'Model evaluation checks:', opts: ['The logo', 'How well the model performs on new data', 'Nothing', 'The colour'], correct: 1, exp: 'Evaluation measures performance/generalisation.' },
      { q: 'Overfitting is when a model:', opts: ['Generalises well', 'Memorises training data but fails on new data', 'Has no data', 'Is too simple'], correct: 1, exp: 'Overfit models do well on training but poorly on new data.' }
    ],
    business: [
      { q: 'AI in marketing can help with:', opts: ['Nothing', 'Content creation, targeting and analytics', 'Only printing', 'Only logos'], correct: 1, exp: 'AI supports content, targeting and campaign analysis.' },
      { q: 'AI in customer service is often used for:', opts: ['Nothing', 'Chatbots and faster support', 'Only phone calls', 'Deleting customers'], correct: 1, exp: 'AI chatbots handle common queries and speed support.' },
      { q: 'An AI strategy should start with:', opts: ['Buying every tool', 'The business problem and where AI adds value', 'The logo', 'Random pilots'], correct: 1, exp: 'Start from the problem and value, not the tool.' },
      { q: 'AI for decision-making works best when:', opts: ['Data is ignored', 'It supports (not replaces) human judgement with data', 'No one reviews it', 'It is hidden'], correct: 1, exp: 'AI informs decisions; humans stay accountable.' },
      { q: 'A risk of AI in business is:', opts: ['None', 'Bias, errors or privacy issues if unmanaged', 'Too much accuracy', 'Nothing at all'], correct: 1, exp: 'Bias, errors and privacy must be managed.' },
      { q: 'Adopting AI in a company should include:', opts: ['No training', 'Training staff and responsible-use policies', 'Ignoring ethics', 'Hiding it'], correct: 1, exp: 'People, training and governance make AI adoption work.' }
    ],
    ethics: [
      { q: 'AI bias happens when:', opts: ['AI is always fair', 'Training data or design favours some groups unfairly', 'AI has no data', 'Users are careful'], correct: 1, exp: 'Biased data/design can produce unfair outcomes.' },
      { q: 'Transparency in AI means:', opts: ['Hiding AI use', 'Being open that AI is used and how', 'Secrecy', 'Ignoring users'], correct: 1, exp: 'People should know when and how AI is used.' },
      { q: 'Using someone’s copyrighted work in AI requires:', opts: ['Nothing', 'Respecting rights and licensing', 'Always allowed', 'Hiding it'], correct: 1, exp: 'Respect copyright and licensing of inputs/outputs.' },
      { q: 'Protecting privacy with AI means:', opts: ['Sharing all data', 'Not feeding sensitive personal data carelessly', 'Ignoring consent', 'Posting data'], correct: 1, exp: 'Handle personal data carefully and lawfully.' },
      { q: 'Responsible AI use includes:', opts: ['Blind trust', 'Verifying outputs and considering impact on people', 'Ignoring harm', 'No accountability'], correct: 1, exp: 'Verify, consider impact and stay accountable.' },
      { q: 'AI regulations aim to:', opts: ['Ban all AI', 'Ensure AI is safe, fair and accountable', 'Remove ethics', 'Hide AI'], correct: 1, exp: 'Regulations promote safe, fair, accountable AI.' }
    ],
    data: [
      { q: 'Data is:', opts: ['Only numbers', 'Facts/values that can be collected and analysed', 'Only images', 'A program'], correct: 1, exp: 'Data are values (numbers, text, etc.) used for analysis.' },
      { q: 'Data cleaning means:', opts: ['Deleting all data', 'Fixing errors, duplicates and missing values', 'Ignoring quality', 'Only formatting colour'], correct: 1, exp: 'Cleaning prepares accurate, usable data.' },
      { q: 'Data visualization helps you:', opts: ['Hide data', 'See trends and patterns clearly', 'Delete data', 'Confuse people'], correct: 1, exp: 'Charts reveal patterns at a glance.' },
      { q: 'Good data quality is important because AI models:', opts: ['Ignore data', 'Are only as good as their data', 'Need no data', 'Prefer errors'], correct: 1, exp: 'Model quality depends on data quality.' },
      { q: 'Basic statistics (mean, median) help you:', opts: ['Nothing', 'Summarise and understand data', 'Only draw', 'Hide data'], correct: 1, exp: 'Summary statistics describe datasets.' },
      { q: 'Data privacy means:', opts: ['Sharing everything', 'Protecting personal/sensitive information', 'Posting data online', 'Ignoring consent'], correct: 1, exp: 'Protect personal data and respect consent.' }
    ],
    dev: [
      { q: 'AI coding assistants (e.g. Copilot) help developers by:', opts: ['Deleting code', 'Suggesting code and speeding up work', 'Only chatting', 'Doing nothing'], correct: 1, exp: 'They suggest code and boost developer productivity.' },
      { q: 'AI-generated code should always be:', opts: ['Trusted blindly', 'Reviewed and tested', 'Shipped instantly', 'Ignored'], correct: 1, exp: 'Always review and test AI-suggested code.' },
      { q: 'AI can help debugging by:', opts: ['Hiding errors', 'Explaining errors and suggesting fixes', 'Deleting the project', 'Nothing'], correct: 1, exp: 'AI can explain error messages and propose fixes.' },
      { q: 'AI is useful for documentation because it can:', opts: ['Nothing', 'Draft clear explanations of code', 'Only delete', 'Hide code'], correct: 1, exp: 'AI can draft and improve documentation.' },
      { q: 'A risk of AI coding tools is:', opts: ['None', 'Insecure or incorrect suggestions if unchecked', 'Too fast', 'Perfect code always'], correct: 1, exp: 'Unchecked suggestions can be insecure or wrong.' },
      { q: 'AI is best used in development as a:', opts: ['Replacement for developers', 'Productivity assistant with human review', 'Random tool', 'Decoration'], correct: 1, exp: 'It assists developers who stay responsible for quality.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', genai: 'genai', prompt: 'prompt', tools: 'tools', writing: 'tools', creative: 'genai', ml: 'ml', business: 'business', education: 'general', dev: 'dev', automation: 'tools', ethics: 'ethics', industries: 'business', data: 'data', entrepreneur: 'business', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.genai, BANK.prompt, BANK.tools, BANK.ml, BANK.business, BANK.ethics, BANK.data, BANK.dev);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Prompt/i.test(name)) return 'prompt';
    if (/Generative/i.test(name)) return 'genai';
    if (/Ethics/i.test(name)) return 'ethics';
    if (/Productivity/i.test(name)) return 'tools';
    if (/Business/i.test(name)) return 'business';
    if (/Fundamentals/i.test(name)) return 'fundamentals';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || V;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'ai-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the practical AI projects in Module 18 (10 projects).</li><li>Complete the capstone in Module 19 and submit your AI portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'ai-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'ai-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(key, name, 8);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Answer this module assessment, then review each explanation to check your understanding.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        /* Unique video per project topic */
        var pv = pool[(idx - 1) % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      idx += 1;
      /* Unique video per content topic — cycle through skill pool */
      var v = pool[(idx - 1) % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'ai-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two hands-on exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete AI Fundamentals Professional Certificate',
    shortDesc: 'A full 20-module program from complete beginner to AI-literate professional: AI & ML fundamentals, generative AI, prompt engineering, AI productivity tools, AI for writing/creativity/business/education/software/automation, AI ethics, AI across industries, data literacy, AI entrepreneurship, 10 practical AI projects, a capstone and a Certificate of Completion.',
    category: 'Artificial Intelligence',
    icon: ex.icon || '🤖',
    gradient: ex.gradient || 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH AI learners',
    duration: '150h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$150',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-AI-0001',
    learn: [
      'Understand AI, machine learning, deep learning and generative AI',
      'Write effective prompts and use ChatGPT, Gemini, Claude and Copilot',
      'Apply AI to writing, creativity, business, education and software',
      'Use AI automation, and understand machine learning and data literacy',
      'Apply AI ethically and responsibly across industries',
      'Build practical AI projects and an AI portfolio for your career'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A device with internet access to use AI tools',
      'A willingness to practise with AI tools and verify their output'
    ],
    about: [
      'This is the complete TIH AI Fundamentals Professional Certificate, rebuilt into twenty modules that take you from complete beginner to AI-literate professional.',
      'Every content lesson has a unique educational video and printable notes; downloadable resources cover a Prompt Library, AI Toolkit Guide, Business AI templates and an AI Ethics Checklist. Ten practical AI projects and a capstone build your AI portfolio.',
      'Software & tools: ChatGPT, Microsoft Copilot, Google Gemini, Claude AI, Perplexity, NotebookLM, Canva AI, Adobe Firefly, GitHub Copilot, Google Workspace, Microsoft Office, Zapier, Make and Notion AI. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _aiFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[AI] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount + ' uniqueVideoPools=yes');
  }
})();
