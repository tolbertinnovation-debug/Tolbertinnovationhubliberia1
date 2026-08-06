/* TIH Complete AI Fundamentals Professional Certificate curriculum.
   Rebuilds COURSES_DB.ai into the full 20-module program taking a complete
   beginner to an AI-literate professional: AI fundamentals, generative AI,
   prompt engineering, AI productivity tools, AI for writing/creativity, machine
   learning basics, AI for business/education/software/automation, AI ethics,
   AI across industries, data literacy, AI entrepreneurship, career, projects,
   a capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable resources.
   Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'ai';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._aiFullBuilt) return;

  var V = ['Yq0QkCxoTHM', 'xvpeMdAs9pE', '1PaJ28oVOAI', 'mTzZod7cBj4', '89EPPtzZHxE', 'YPOsbQzAPiI', 'V2Gmt1fEue4', 'qDtif1zxbkY', 'REqOxDfw914', 'OA4UP4O1hz0', 'sAhIne0U1Os', 'qpp1G0iEL_c', 'fWuzA77Mvzw', 'p6Z2d3T-fLM', 'MoPIkfscD3A', 'cXnPxN06boY', '-LCkwnpUilI', 'x9Pl1XM4K7A', 'rGSmG7qp2Eg'];
  var VIDEOS = {
    orientation: ['eMhSj4ZRDkg'],
    fundamentals: ['VGFpV3Qj4as'],
    genai: ['VfxTH3U7-ns'],
    prompt: ['dE5isWx82WU'],
    tools: ['tIttdEx_adw'],
    writing: ['fQQzPf2y2l8'],
    creative: ['_VyHeSbTYhQ'],
    ml: ['i_LwzRVP7bg'],
    business: ['Ha4vG0plpUA'],
    education: ['MqffbpjhriQ'],
    dev: ['5yBTxOpT4PE'],
    automation: ['gFSkmD8vbfg'],
    ethics: ['A_QG2L6GS4Q'],
    industries: ['U6ulo3W7K1Q'],
    data: ['QWJ-QYzGeCY'],
    entrepreneur: ['rOUs76wtv60'],
    career: ['4g1n_cuME1w'],
    projects: ['XZdY15sHUa8'],
    capstone: ['d4ug1MfZo1U'],
    assessment: ['XZdY15sHUa8']
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

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'AI foundations', fundamentals: 'AI fundamentals', genai: 'generative AI', prompt: 'prompt engineering', tools: 'AI productivity tools', writing: 'AI for writing & communication', creative: 'AI for creativity & design', ml: 'machine learning basics', business: 'AI for business', education: 'AI for education & research', dev: 'AI for software development', automation: 'AI automation', ethics: 'AI ethics & responsible AI', industries: 'AI across industries', data: 'data literacy for AI', entrepreneur: 'AI entrepreneurship & innovation', career: 'AI careers', projects: 'applied AI projects', capstone: 'your capstone project', assessment: 'your AI knowledge' };

  var TEMPLATES = {
    prompt: '<h4>📥 Resource: Prompt Library</h4><p>Reusable prompt patterns:</p><ul><li><strong>Role:</strong> "Act as a [role]. Help me [task]."</li><li><strong>Context + task:</strong> "Here is [context]. Now [do X] in [format]."</li><li><strong>Few-shot:</strong> give 2–3 examples, then the new input.</li><li><strong>Chain-of-thought:</strong> "Think step by step, then give the answer."</li><li><strong>Refine:</strong> "Improve this by [criteria]: [text]."</li></ul>',
    toolkit: '<h4>📥 Guide: AI Toolkit</h4><ul><li><strong>Chat/reasoning:</strong> ChatGPT, Claude, Gemini, Copilot</li><li><strong>Research:</strong> Perplexity, NotebookLM</li><li><strong>Creativity:</strong> Canva AI, Adobe Firefly</li><li><strong>Coding:</strong> GitHub Copilot</li><li><strong>Automation:</strong> Zapier, Make, Notion AI</li><li>Always check outputs and cite/verify sources.</li></ul>',
    business: '<h4>📥 Template: Business AI Use Case</h4><ul><li>Problem/opportunity</li><li>Where AI helps (task &amp; data)</li><li>Tool/approach chosen</li><li>Expected benefit (time/cost/quality)</li><li>Risks &amp; responsible-use checks</li><li>Success metric</li></ul>',
    ethics: '<h4>📥 Checklist: Responsible AI</h4><ul><li>Is the data/use fair and unbiased?</li><li>Is it transparent (people know AI is used)?</li><li>Is privacy and security protected?</li><li>Do I have rights to inputs/outputs (copyright)?</li><li>Have I verified accuracy (no blind trust)?</li><li>Does it comply with rules/regulations?</li></ul>'
  };
  function templateFor(name) {
    if (/Writing Effective Prompts|Prompt Templates|Prompt Engineering Project|Prompt Optimization/i.test(name)) return TEMPLATES.prompt;
    if (/^ChatGPT$|AI Workflow Automation|AI Search Tools|Productivity Lab/i.test(name)) return TEMPLATES.toolkit;
    if (/AI Strategy|Business AI Project|Business Case Studies|AI Business Models/i.test(name)) return TEMPLATES.business;
    if (/Responsible AI|AI Bias|Ethical AI|AI Regulations|AI Business Ethics|Ethical Academic Use/i.test(name)) return TEMPLATES.ethics;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'AI skills';
    var focus = position % 2 ? 'hands-on practice with real AI tools and responsible use' : 'understanding the concept, applying it with a tool and reviewing the result';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI Fundamentals · ' + esc(moduleTitle) + '</strong><span>Use AI responsibly</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two hands-on exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and where it is useful.</li>' +
      '<li>See how professionals apply it with popular AI tools.</li>' +
      '<li>Try it yourself with a real AI tool — and always check the output.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this resource.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real task in your studies, work or business — and verify the AI’s output.</div>') +
      '<h4>Hands-on exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Use an AI tool to practise <em>' + esc(name) + '</em> on a real example.</li>' +
      '<li><strong>Exercise 2:</strong> Improve the result, then note one strength and one limitation of the AI.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming an AI-literate professional.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on AI project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical AI project. Build it with real AI tools, use AI responsibly, and add it to your AI portfolio.</p>' +
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
    var pool = VIDEOS[skill] || VIDEOS.assessment;
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
      'Every content lesson has a video and printable notes; downloadable resources cover a Prompt Library, AI Toolkit Guide, Business AI templates and an AI Ethics Checklist. Ten practical AI projects and a capstone build your AI portfolio.',
      'Software & tools: ChatGPT, Microsoft Copilot, Google Gemini, Claude AI, Perplexity, NotebookLM, Canva AI, Adobe Firefly, GitHub Copilot, Google Workspace, Microsoft Office, Zapier, Make and Notion AI. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _aiFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[AI] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
