var COURSES_DB = {};

COURSES_DB['computer-literacy'] = {
  id: 'computer-literacy',
  title: 'Computer Literacy: From Zero to Confident Digital User',
  shortDesc: 'Master computers, the internet, Microsoft Office, and digital safety from absolute scratch.',
  category: 'Computer Fundamentals',
  icon: '💻',
  gradient: 'linear-gradient(135deg,#1e3a5f,#002868)',
  instructor: 'Samuel Tolbert',
  instructorTitle: 'Founder & CEO, Tolbert Innovation Hub',
  instructorBio: 'Samuel Tolbert founded TIH to bring world-class digital education to Liberia and West Africa. He has trained over 10,000 students across the region in foundational technology skills.',
  rating: 4.9, reviews: 1247, students: '8,400+',
  duration: '24h', level: 'Beginner',
  price: 'FREE', origPrice: '$120', isFree: true, badge: 'free',
  certId: 'TIH-2026-CCL-0042',
  learn: [
    'Navigate Windows and macOS with full confidence',
    'Create, save, and organize files and folders efficiently',
    'Use the internet safely for research, email, and communication',
    'Create professional documents using Microsoft Word',
    'Build spreadsheets and track data with Microsoft Excel',
    'Design compelling presentations with Microsoft PowerPoint',
    'Protect yourself from viruses, phishing, and online scams',
    'Use Gmail, Google Drive, and collaboration tools productively'
  ],
  requirements: [
    'No prior computer experience needed — this course starts from zero',
    'Access to a computer or smartphone (Windows, Mac, or Android)',
    'Willingness to practice daily exercises provided in each module'
  ],
  about: [
    'Computer literacy is the foundation of every digital opportunity available today. In Liberia and across West Africa, the ability to confidently use a computer separates those who can access global opportunities from those who cannot. This course was designed specifically for our community — starting from the very basics and building up to professional-level digital skills.',
    'You will learn to use a computer from scratch, master the Microsoft Office suite used in every professional environment, and navigate the internet safely. Each lesson is practical, hands-on, and immediately applicable to real jobs, business, and daily life.',
    'Thousands of Liberians have already completed this course and gone on to secure office jobs, start online businesses, and help their families. Whether you are a student, a job seeker, or a professional wanting to upgrade your skills, this free course is your starting point.'
  ],
  modules: [
    { title: 'Module 1: Getting Started with Computers', icon: '💻', meta: '5 lessons · 45 min',
      lessons: [
        {t:'1.1 What is a Computer? Hardware vs Software', d:'8:30', v:'NARrnGza4kA'},
        {t:'1.2 Navigating Windows: Desktop, Files & Folders', d:'12:00', v:'qIRRiM6Ibno'},
        {t:'1.3 Typing Skills & Keyboard Shortcuts', d:'10:00', v:'QTeX0Za2Ur8'},
        {t:'1.4 Managing Files: Save, Copy, Move & Delete', d:'9:00', v:'k-EID5_2D9U'},
        {t:'📝 Quiz: Computer Basics', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Internet & Digital Communication', icon: '🌐', meta: '5 lessons · 42 min',
      lessons: [
        {t:'2.1 How the Internet Works & Staying Safe Online', d:'10:00', v:'bSBLF66cCN0'},
        {t:'2.2 Effective Google Search & Evaluating Sources', d:'8:00', v:'iLMUrr0C_0c'},
        {t:'2.3 Setting Up & Using Gmail Professionally', d:'9:30', v:'PEB9jEXh0X4'},
        {t:'2.4 Google Drive, Docs & Cloud Storage', d:'9:30', v:'NZlemQPeo0Q'},
        {t:'📝 Quiz: Internet & Digital Safety', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Microsoft Office Productivity', icon: '📄', meta: '5 lessons · 55 min',
      lessons: [
        {t:'3.1 Microsoft Word: Documents, CVs & Letters', d:'12:00', v:'EuWTrvT_YyY'},
        {t:'3.2 Microsoft Excel: Spreadsheets & Basic Formulas', d:'14:00', v:'Vl0H-qTclOg'},
        {t:'3.3 Microsoft PowerPoint: Creating Presentations', d:'10:00', v:'DzPhjLPLLeg'},
        {t:'3.4 Printing, Formatting & Professional Documents', d:'9:00', v:'CBPe_IFxJWc'},
        {t:'🛠️ Project: Create a Professional CV & Cover Letter', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Digital Safety & Career Readiness', icon: '🏆', meta: '4 lessons · 38 min',
      lessons: [
        {t:'4.1 Cybersecurity Basics: Passwords, Viruses & Scams', d:'10:00', v:'ey4dXseAODE'},
        {t:'4.2 Online Job Searching & LinkedIn Basics', d:'9:00', v:'dOZDQpulyCQ'},
        {t:'4.3 Digital Payments & Mobile Money Safety', d:'9:30', v:'CQFXF6bbeI8'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Computer Basics', moduleNum: 1, unlocks: 3, questions: [
      {q:'What does CPU stand for?', opts:['Central Processing Unit','Computer Personal Unit','Central Peripheral Unit','Control Processing Unit'], correct:0, exp:'CPU is the brain of the computer that processes all instructions.'},
      {q:'Which is an INPUT device?', opts:['Monitor','Speaker','Keyboard','Printer'], correct:2, exp:'The keyboard sends data INTO the computer, making it an input device.'},
      {q:'What is an Operating System?', opts:['A website browser','Software managing hardware and software','A storage device','A type of keyboard'], correct:1, exp:'The OS like Windows manages all hardware and software resources.'},
      {q:'RAM stands for:', opts:['Remote Access Memory','Random Access Memory','Read-After Memory','Rapid Access Module'], correct:1, exp:'RAM is your computer\'s temporary working memory used while programs run.'},
      {q:'Which is a permanent storage device?', opts:['RAM','CPU','Hard Drive','Monitor'], correct:2, exp:'Hard drives store data permanently, even when the computer is powered off.'}
    ]},
    mod2: { title: 'Quiz: Internet & Digital Safety', moduleNum: 2, unlocks: 3, questions: [
      {q:'HTTPS means a website is:', opts:['Popular','Fast loading','Secure and encrypted','Free to use'], correct:2, exp:'HTTPS encrypts the connection between your browser and the server.'},
      {q:'A phishing email typically:', opts:['Is from a colleague','Has a professional design','Creates urgency asking for passwords via suspicious links','Has a phone number'], correct:2, exp:'Phishing uses urgency and fake links to steal your personal information.'},
      {q:'A strong password should:', opts:['Be your name','Be short and simple','Mix letters, numbers, and symbols','Be shared with family'], correct:2, exp:'Complex passwords mixing characters are much harder to crack.'},
      {q:'2FA means:', opts:['Two passwords','Two devices','Two verification methods','Two accounts'], correct:2, exp:'2FA requires a second proof of identity beyond just your password.'},
      {q:'Safest for online banking?', opts:['Public café Wi-Fi','Neighbour\'s Wi-Fi','Private home network with HTTPS','Incognito mode anywhere'], correct:2, exp:'A private network combined with HTTPS is the safest combination for banking.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'Microsoft Word is best for:', opts:['Spreadsheets','Slide presentations','Text documents and CVs','Video editing'], correct:2, exp:'Word is the standard application for creating text documents and professional CVs.'},
      {q:'Best way to back up files?', opts:['Desktop only','Email to self','Cloud storage + local copy','Print them'], correct:2, exp:'Multiple backup locations protect against data loss from any single failure.'},
      {q:'NEVER do with cybersecurity:', opts:['Use unique passwords','Enable 2FA','Click unknown links to test them','Update software regularly'], correct:2, exp:'Never click suspicious links to verify them — use official websites instead.'},
      {q:'A verifiable digital certificate means:', opts:['Printed on special paper','Can be confirmed genuine using a verification code','Issued by government','Cost money'], correct:1, exp:'Verification codes let employers instantly confirm your certificate\'s authenticity.'},
      {q:'This course teaches you to:', opts:['Program software','Use computers professionally and stay safe online','Repair hardware','Build websites'], correct:1, exp:'Computer literacy enables professional digital use across all areas of life and work.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Before this course I was afraid to touch a computer. Now I use Excel at work every day and my boss is impressed. Samuel explains everything so clearly — no step is skipped. This free course changed my career completely.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I took this course after losing my job and needed to upgrade my skills. Within 3 weeks I could type fast, use Word and Excel, and send professional emails. I got a new job offer within a month. TIH is a blessing for Liberia.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The module on internet safety alone was worth everything. I had already been scammed once online before. This course taught me exactly how to protect myself. Every Liberian should take this — especially our young people.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Living in Maryland County, I never thought I could access quality tech training. TIH made it possible online. The certificate is verified and I used it on my job application. Very grateful for this free resource.'}
  ],
  faqs: [
    {q:'Is this course really free?', a:'Yes, completely free. TIH believes foundational computer literacy should be accessible to every Liberian regardless of income. No credit card required.'},
    {q:'Do I need any equipment?', a:'You need access to a computer or smartphone. A computer is recommended for the Microsoft Office modules, but most lessons can be followed on any device.'},
    {q:'How long does the certificate take?', a:'Most students complete the course in 3-4 weeks studying 1-2 hours per day. Your certificate is issued immediately upon passing the final assessment.'},
    {q:'Is the certificate recognized by employers?', a:'Yes. TIH certificates include a unique verification code. Over 200 Liberian employers and NGOs recognize TIH certifications for hiring decisions.'}
  ]
};

COURSES_DB['ai'] = {
  id: 'ai',
  title: 'AI Fundamentals: ChatGPT, Gemini & Practical AI Tools',
  shortDesc: 'Learn to use AI tools like ChatGPT and Gemini to supercharge your productivity, creativity, and career.',
  category: 'Artificial Intelligence',
  icon: '🤖',
  gradient: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
  instructor: 'Dr. Mariama Koroma',
  instructorTitle: 'AI Researcher & Digital Education Lead',
  instructorBio: 'Dr. Mariama Koroma holds a PhD in Computer Science with specialization in machine learning and has led AI literacy programs across West Africa. She is passionate about democratizing AI knowledge for African professionals.',
  rating: 4.8, reviews: 832, students: '5,200+',
  duration: '18h', level: 'Beginner',
  price: 'FREE', origPrice: '$150', isFree: true, badge: 'free',
  certId: 'TIH-2026-AI-0088',
  learn: [
    'Understand how AI and machine learning actually work behind the scenes',
    'Write powerful prompts to get professional results from ChatGPT and Gemini',
    'Use AI to write emails, reports, proposals, and marketing content',
    'Generate images and creative content using AI tools like DALL-E and Canva AI',
    'Automate repetitive business tasks using AI workflows',
    'Critically evaluate AI output and identify hallucinations and errors',
    'Apply AI ethically and responsibly in business and personal use',
    'Build an AI-powered productivity system for your work or business'
  ],
  requirements: [
    'Basic computer and internet skills (equivalent to our free Computer Literacy course)',
    'A free ChatGPT or Gemini account (we walk you through setup in lesson 1)',
    'Curiosity and openness to experiment — no coding or technical background needed'
  ],
  about: [
    'Artificial Intelligence is transforming every industry in the world — and Africa is no exception. Businesses across Liberia and the continent are beginning to use AI to write content, analyze data, automate customer service, and compete globally. This course puts you ahead of that curve.',
    'You will learn to use the most powerful and accessible AI tools available today: ChatGPT, Gemini, DALL-E, and more. More importantly, you will learn HOW to think about AI — understanding its capabilities, limitations, and how to integrate it responsibly into your work and business.',
    'No technical background is required. Whether you are a business owner, student, marketer, teacher, or professional, this course gives you the practical AI skills that are rapidly becoming essential in every field. Join over 5,000 students who have already taken this step into the future.'
  ],
  modules: [
    { title: 'Module 1: Understanding AI & Machine Learning', icon: '🤖', meta: '4 lessons · 38 min',
      lessons: [
        {t:'1.1 What is AI? How Machines Learn from Data', d:'10:00', v:'Yq0QkCxoTHM'},
        {t:'1.2 Types of AI: Narrow, Generative & Agentic AI', d:'9:00', v:'xvpeMdAs9pE'},
        {t:'1.3 AI Tools Landscape: ChatGPT, Gemini, Claude & More', d:'10:00', v:'1PaJ28oVOAI'},
        {t:'📝 Quiz: AI Fundamentals', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Working with ChatGPT & Gemini', icon: '💬', meta: '5 lessons · 48 min',
      lessons: [
        {t:'2.1 Prompt Engineering: The Art of Asking AI the Right Way', d:'12:00', v:'mTzZod7cBj4'},
        {t:'2.2 ChatGPT for Writing: Emails, Reports & Proposals', d:'11:00', v:'89EPPtzZHxE'},
        {t:'2.3 Gemini for Research, Analysis & Summaries', d:'10:00', v:'YPOsbQzAPiI'},
        {t:'2.4 Advanced Prompting: Role, Context, Format & Examples', d:'10:00', v:'V2Gmt1fEue4'},
        {t:'📝 Quiz: Prompting & AI Tools', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: AI Creative & Productivity Tools', icon: '🎨', meta: '4 lessons · 42 min',
      lessons: [
        {t:'3.1 AI Image Generation: DALL-E, Midjourney & Canva AI', d:'11:00', v:'qDtif1zxbkY'},
        {t:'3.2 AI for Video, Audio & Content Creation', d:'10:00', v:'REqOxDfw914'},
        {t:'3.3 Building AI Workflows to Automate Your Work', d:'11:00', v:'OA4UP4O1hz0'},
        {t:'🛠️ Project: Build an AI-Powered Content Calendar', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: AI for Business & Ethics', icon: '🏆', meta: '4 lessons · 36 min',
      lessons: [
        {t:'4.1 AI for Small Business: Customer Service & Marketing', d:'10:00', v:'sAhIne0U1Os'},
        {t:'4.2 AI Ethics: Bias, Privacy & Responsible Use', d:'9:00', v:'qpp1G0iEL_c'},
        {t:'4.3 The Future of AI: Careers, Opportunities & Risks', d:'8:00', v:'fWuzA77Mvzw'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: AI Fundamentals', moduleNum: 1, unlocks: 3, questions: [
      {q:'What does AI stand for?', opts:['Automated Input','Artificial Intelligence','Advanced Interface','Automated Integration'], correct:1, exp:'AI refers to computer systems that simulate human intelligence and decision-making.'},
      {q:'Machine Learning is:', opts:['A type of hardware','A programming language','AI that learns patterns from data','A computer operating system'], correct:2, exp:'ML algorithms improve automatically through experience without being explicitly reprogrammed.'},
      {q:'ChatGPT is primarily a:', opts:['Search engine','Image generator','Text-based AI language model','Video editor'], correct:2, exp:'ChatGPT is a large language model that generates and understands human text.'},
      {q:'A "prompt" in AI context is:', opts:['A hardware button','The instruction or question you give the AI','A type of database','An AI error message'], correct:1, exp:'Your prompt shapes the quality and direction of the AI\'s output entirely.'},
      {q:'Which is NOT an AI application?', opts:['Voice assistants','Recommendation algorithms','A manual calculator','Facial recognition'], correct:2, exp:'Manual calculators follow fixed arithmetic rules with no learning or adaptation.'}
    ]},
    mod2: { title: 'Quiz: Prompting & AI Tools', moduleNum: 2, unlocks: 3, questions: [
      {q:'Prompt engineering means:', opts:['Hardware configuration','Writing effective AI instructions to get better results','Designing AI chips','Coding AI from scratch'], correct:1, exp:'Better prompts consistently produce significantly better AI outputs.'},
      {q:'AI "hallucination" means:', opts:['AI seeing images','AI generating false information confidently','AI processing speed','AI memory limitation'], correct:1, exp:'Always verify AI-generated facts before publishing or acting on them.'},
      {q:'Best practice for AI content:', opts:['Publish immediately','Always verify accuracy before using','Trust AI completely','Never use AI'], correct:1, exp:'AI can make convincing mistakes that require human review and verification.'},
      {q:'DALL-E and Midjourney specialize in:', opts:['Text generation','Code writing','AI image generation','Video production'], correct:2, exp:'These tools create realistic images from text descriptions using generative AI.'},
      {q:'"Token" in AI models refers to:', opts:['Digital currency','A unit of text (word/part word) the AI processes','A login credential','A type of AI chip'], correct:1, exp:'AI models process text as tokens to understand and generate language efficiently.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'Which is the safest approach to AI in business?', opts:['Replace all human decisions with AI','Use AI as a tool with human oversight','Share all company data with AI freely','Ignore AI entirely'], correct:1, exp:'AI is most valuable as a tool that augments and supports human judgment.'},
      {q:'What is "generative AI"?', opts:['AI that generates new content (text, images, code)','AI that only categorizes existing data','AI hardware','AI that controls robots'], correct:0, exp:'Generative AI creates new content based on patterns learned from training data.'},
      {q:'AI ethics primarily concerns:', opts:['AI processing speed','Fairness, transparency, privacy, and accountability of AI systems','The cost of AI tools','AI design aesthetics'], correct:1, exp:'Ethical AI ensures systems are fair, transparent, and accountable to all people.'},
      {q:'Which is a real limitation of current AI?', opts:['AI cannot do calculations','AI cannot process images','AI can confidently state incorrect facts (hallucination)','AI cannot speak'], correct:2, exp:'Hallucination is a major current limitation requiring human verification of all AI claims.'},
      {q:'To improve your AI prompts, you should:', opts:['Make them shorter always','Be vague to give AI freedom','Be specific, provide context, and specify the format you want','Never use examples'], correct:2, exp:'Specificity, context, and format guidance dramatically improve AI output quality.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Dr. Koroma explains AI in a way that finally makes sense to me. I now use ChatGPT every day for my marketing work and it has tripled my output. The prompting module alone is worth ten times the course price.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I was skeptical about AI but this course showed me how to use it practically for my business. I now automate my customer emails and social posts with AI. My competitors are still doing everything manually — I have a real advantage.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The section on AI ethics and hallucinations was eye-opening. I used to trust everything AI said. Now I know how to verify and use AI responsibly. This should be required learning for every professional in Liberia.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Excellent course on a topic that is shaping the future. The practical projects made everything real — I built an actual AI content system for my organization. Great value for the price, highly recommended.'}
  ],
  faqs: [
    {q:'Do I need coding skills to use AI tools?', a:'Absolutely not. ChatGPT, Gemini, and all the tools in this course are designed for everyday users. If you can type, you can use AI effectively.'},
    {q:'Are the AI tools covered in this course free?', a:'ChatGPT and Gemini both offer free tiers that are sufficient for this entire course. We will also cover some premium features available at low cost.'},
    {q:'Will AI take my job?', a:'This course addresses this question directly. The evidence shows AI replaces tasks, not entire jobs — and people who know how to use AI will be far more valuable than those who do not.'},
    {q:'Is this course updated for the latest AI tools?', a:'Yes. TIH updates this course quarterly to reflect the rapidly evolving AI landscape. Enrolled students receive all updates at no extra charge.'}
  ]
};

COURSES_DB['data'] = {
  id: 'data',
  title: 'Data Analysis with Excel, Power BI & Google Sheets',
  shortDesc: 'Transform raw data into powerful business insights using Excel, Power BI, and Google Sheets.',
  category: 'Data Analytics',
  icon: '📊',
  gradient: 'linear-gradient(135deg,#0d9488,#065f46)',
  instructor: 'Emmanuel Kamara',
  instructorTitle: 'Senior Data Analyst & Business Intelligence Trainer',
  instructorBio: 'Emmanuel Kamara has over 8 years of experience in business intelligence and data analytics, having worked with NGOs, government agencies, and private firms across West Africa. He specializes in making data analysis accessible to non-technical professionals.',
  rating: 4.7, reviews: 645, students: '3,800+',
  duration: '30h', level: 'Intermediate',
  price: 'FREE', origPrice: '$180', isFree: true, badge: 'free',
  certId: 'TIH-2026-DA-0109',
  learn: [
    'Master essential Excel functions: SUM, VLOOKUP, COUNTIF, SUMIF, and more',
    'Build professional pivot tables to summarize and analyze large datasets',
    'Create stunning interactive dashboards in Power BI from scratch',
    'Use Google Sheets collaboratively for real-time team data analysis',
    'Clean and prepare messy data for accurate analysis',
    'Design charts and visualizations that communicate insights clearly',
    'Apply data storytelling techniques to present findings to stakeholders',
    'Complete real-world business intelligence projects for your portfolio'
  ],
  requirements: [
    'Basic computer literacy and comfort using a computer (keyboard and mouse)',
    'Microsoft Excel installed (2016 or later) or access to Google Sheets (free)',
    'Power BI Desktop installed (free download from Microsoft) for BI modules'
  ],
  about: [
    'Data is the new oil — and Liberia\'s businesses, NGOs, and government agencies are sitting on untapped reserves. The ability to collect, analyze, and present data is one of the most in-demand and highest-paid skills in today\'s job market. This course teaches you that skill from the ground up.',
    'Starting with Excel fundamentals and advancing through pivot tables, dashboards, and Power BI, you will build a complete data analysis toolkit. Every lesson uses real-world African business datasets — sales data, donor reports, health statistics, and more — so you immediately see the practical value.',
    'By the end of this course, you will be able to walk into any organization in Liberia, take their raw spreadsheet data, and transform it into clear, actionable business intelligence. This is a skill that commands respect and higher salaries in every sector.'
  ],
  modules: [
    { title: 'Module 1: Excel Fundamentals', icon: '📊', meta: '5 lessons · 52 min',
      lessons: [
        {t:'1.1 Excel Interface, Navigation & Essential Shortcuts', d:'10:00', v:'Nf6S6tUHOXw'},
        {t:'1.2 Core Functions: SUM, AVERAGE, COUNT, IF, ROUND', d:'12:00', v:'Yov488pacDc'},
        {t:'1.3 Sorting, Filtering & Conditional Formatting', d:'11:00', v:'kIZkNDKllws'},
        {t:'1.4 Charts & Basic Visualizations', d:'9:00', v:'sVZiU9QHdB4'},
        {t:'📝 Quiz: Excel Fundamentals', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Advanced Excel & Pivot Tables', icon: '🔢', meta: '5 lessons · 55 min',
      lessons: [
        {t:'2.1 VLOOKUP, HLOOKUP & the New XLOOKUP', d:'13:00', v:'2s-zPZKERP4'},
        {t:'2.2 Pivot Tables: Summarize Thousands of Rows Instantly', d:'14:00', v:'dvbLrwD2SpA'},
        {t:'2.3 Advanced Formulas: SUMIF, COUNTIF, INDEX-MATCH', d:'12:00', v:'nGQfc0V3NXk'},
        {t:'2.4 Data Validation & Protecting Spreadsheets', d:'9:00', v:'gPHzXAncp5I'},
        {t:'📝 Quiz: Advanced Excel & Data Analysis', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Power BI & Data Visualization', icon: '📈', meta: '4 lessons · 48 min',
      lessons: [
        {t:'3.1 Introduction to Power BI: Interface & Data Import', d:'12:00', v:'VaOhNqNtGGE'},
        {t:'3.2 Building Interactive Dashboards in Power BI', d:'14:00', v:'kp_Mb4E-nig'},
        {t:'3.3 DAX Basics: Writing Measures & Calculated Columns', d:'12:00', v:'lGhxfC0_g9c'},
        {t:'🛠️ Project: NGO Donor Report Dashboard', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Real-World Data Projects', icon: '🏆', meta: '4 lessons · 44 min',
      lessons: [
        {t:'4.1 Google Sheets for Team Collaboration & Analysis', d:'10:00', v:'cjjAJM1o5E8'},
        {t:'4.2 Data Storytelling: Presenting Insights to Decision Makers', d:'11:00', v:'H79S8YDuYUU'},
        {t:'4.3 Building Your Data Analysis Portfolio', d:'12:00', v:'n9LNj8IEyQs'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Excel Fundamentals', moduleNum: 1, unlocks: 3, questions: [
      {q:'What does the SUM function do?', opts:['Counts cells','Adds all numbers in a range','Finds the average','Sorts data'], correct:1, exp:'=SUM(A1:A10) adds all numerical values in that range together.'},
      {q:'Best chart for trends over time?', opts:['Pie chart','Bar chart','Line chart','Scatter plot'], correct:2, exp:'Line charts clearly show how values change over time periods.'},
      {q:'VLOOKUP does what?', opts:['Deletes duplicate rows','Looks up a value in a table column','Creates charts automatically','Sends email reports'], correct:1, exp:'VLOOKUP finds matching data across different tables in your spreadsheet.'},
      {q:'A pivot table:', opts:['Creates presentations','Summarizes and analyzes large datasets','Sends automated reports','Protects cells from editing'], correct:1, exp:'Pivot tables transform thousands of rows of raw data into meaningful summaries.'},
      {q:'=AVERAGE(B2:B20) calculates:', opts:['The sum of B2 to B20','The largest value','The mean (average) of B2 to B20','The count of cells'], correct:2, exp:'AVERAGE divides the total sum by the number of values in the range.'}
    ]},
    mod2: { title: 'Quiz: Advanced Excel & Data Analysis', moduleNum: 2, unlocks: 3, questions: [
      {q:'Power BI is used for:', opts:['Writing documents','Creating interactive business intelligence dashboards','Designing logos','Building websites'], correct:1, exp:'Power BI visualizes complex data with interactive reports and dashboards.'},
      {q:'Data cleaning means:', opts:['Deleting all old data','Removing errors, duplicates, and inconsistencies','Encrypting sensitive data','Formatting cells'], correct:1, exp:'Clean data is the foundation — garbage in, garbage out.'},
      {q:'KPI stands for:', opts:['Key Processing Index','Knowledge Performance Interface','Key Performance Indicator','Keyboard Productivity Input'], correct:2, exp:'KPIs measure progress toward specific business goals and objectives.'},
      {q:'CSV stands for:', opts:['Comma-Separated Values','Computer Standard Version','Chart Summary View','Cell Spreadsheet Variable'], correct:0, exp:'CSV files store tabular data as plain text with commas separating values.'},
      {q:'Best way to share data insights?', opts:['Raw spreadsheet dump','Email with all data','Interactive dashboard with visualizations','Verbal description only'], correct:2, exp:'Visualizations make complex data immediately understandable to any audience.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'Before analyzing data you should:', opts:['Start building charts immediately','Clean and validate the data first','Share raw data with stakeholders','Delete outliers automatically'], correct:1, exp:'Data quality directly determines the reliability and credibility of your analysis.'},
      {q:'What is data storytelling?', opts:['Writing fiction about data','Presenting data with narrative context to drive understanding and action','Encrypting data','Automating data collection'], correct:1, exp:'Good data stories combine visuals, context, and clear recommendations for action.'},
      {q:'An outlier in data is:', opts:['The most common value','A value significantly different from other observations','The average value','A missing data point'], correct:1, exp:'Outliers can indicate data entry errors or genuinely important business insights.'},
      {q:'Which Excel function counts cells meeting a condition?', opts:['SUM','AVERAGE','COUNTIF','VLOOKUP'], correct:2, exp:'COUNTIF(range, criteria) counts only cells that match your specified condition.'},
      {q:'What makes a good data dashboard?', opts:['As many charts as possible','Complex formulas visible','Clear metrics, clean design, and actionable insights','Detailed raw data tables'], correct:2, exp:'Dashboards should enable quick decisions, not overwhelm viewers with complexity.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Emmanuel is a fantastic teacher. I went from knowing only basic Excel to building full Power BI dashboards for my NGO. Our donors are impressed with our reporting. This course paid for itself in the first week of applying the skills.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'The pivot table module alone transformed how I manage our company\'s sales data. What used to take me two days now takes 20 minutes. The Power BI dashboard I built is now used in our weekly management meetings.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'I work in the health sector and the data skills I learned here have directly improved how we track and report patient outcomes. The course uses real African data examples which makes it immediately relevant to our work.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Solid, comprehensive course covering everything from basic formulas to Power BI. The difficulty level is well-paced — challenging enough to be valuable but clear enough to follow. I now list Data Analysis on my CV with confidence.'}
  ],
  faqs: [
    {q:'Do I need to buy Microsoft Excel?', a:'You can use the free Google Sheets for most modules. Microsoft Excel 2016+ is recommended but the free 30-day Microsoft trial is sufficient to complete the course.'},
    {q:'How is this different from the Office course?', a:'The Office course covers Excel basics for general use. This Data course goes much deeper into analytics, advanced functions, pivot tables, and Power BI for professional data work.'},
    {q:'Will I be able to get a data analyst job after this?', a:'This course builds strong foundational data skills. Combined with practice projects, many graduates have secured data analyst, reporting, and business intelligence roles.'},
    {q:'Are the datasets used in lessons realistic?', a:'Yes. All practice datasets are modeled on real Liberian and West African business scenarios — NGO reports, retail sales, health data, and government statistics.'}
  ]
};

/* ================================================================
   4. WEB DEVELOPMENT
   ================================================================ */
COURSES_DB['webdev'] = {
  id: 'webdev',
  title: 'Web Development: HTML, CSS & JavaScript',
  shortDesc: 'Build real websites from scratch using HTML5, CSS3, and JavaScript — no coding experience needed.',
  category: 'Web Development',
  icon: '🌐',
  gradient: 'linear-gradient(135deg,#0284c7,#0ea5e9)',
  instructor: 'David Weah',
  instructorTitle: 'Full-Stack Web Developer & Tech Lead',
  instructorBio: 'David Weah is a full-stack developer with 9 years building web applications for businesses across Africa and Europe. He has taught web development to over 2,000 students and runs a thriving tech agency in Monrovia.',
  rating: 4.8, reviews: 712, students: '4,300+',
  duration: '32h', level: 'Beginner',
  price: 'FREE', origPrice: '$200', isFree: true, badge: 'free',
  certId: 'TIH-2026-WD-0074',
  learn: [
    'Write clean, semantic HTML5 to structure any web page',
    'Style beautiful websites using CSS3, Flexbox, and Grid',
    'Build fully responsive layouts that work on mobile, tablet, and desktop',
    'Add interactivity with JavaScript and DOM manipulation',
    'Work with HTML forms, inputs, and data validation',
    'Debug code using browser developer tools',
    'Deploy your website live using GitHub Pages for free',
    'Build a professional portfolio of 3 complete web projects'
  ],
  requirements: [
    'No coding or programming experience needed — completely beginner-friendly',
    'A computer with a modern browser (Chrome recommended) and internet connection',
    'VS Code code editor (free — setup instructions provided in lesson 1)'
  ],
  about: [
    'Web development is one of the most powerful and portable skills you can learn. Every business, church, school, NGO, and government office needs a website — and people who can build them are always in demand. This course teaches you everything needed to build professional websites from scratch.',
    'You will start from the very basics — how the web works — and progress through HTML structure, CSS styling, responsive design, and JavaScript interactivity. Every lesson builds on the last, and you will be building real projects from lesson one. No reading theory without application.',
    'By the time you earn your certificate, you will have three complete websites in your portfolio: a personal portfolio site, a business landing page, and an interactive web application. Our graduates freelance, join tech companies, and launch their own digital agencies.'
  ],
  modules: [
    { title: 'Module 1: HTML5 — Structure of the Web', icon: '🌐', meta: '4 lessons · 40 min',
      lessons: [
        {t:'1.1 How the Web Works: Browsers, Servers & HTML', d:'9:00', v:'pfYQz5pnFmo'},
        {t:'1.2 HTML Tags, Semantic Structure & Page Layout', d:'11:00', v:'kX3TfdUqpuU'},
        {t:'1.3 Forms, Tables, Links, Images & Multimedia', d:'11:30', v:'AJrkz0pzRV4'},
        {t:'📝 Quiz: HTML5 Fundamentals', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: CSS3 & Responsive Design', icon: '🎨', meta: '4 lessons · 46 min',
      lessons: [
        {t:'2.1 CSS Selectors, the Box Model & Typography', d:'11:00', v:'YhoK5y0HgPk'},
        {t:'2.2 Flexbox Layouts: Build Any UI Component', d:'12:00', v:'fYq5PXgSsbE'},
        {t:'2.3 CSS Grid & Media Queries for Responsive Design', d:'13:00', v:'dT3aujtzBe4'},
        {t:'📝 Quiz: CSS3 & Layouts', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: JavaScript Interactivity', icon: '⚡', meta: '4 lessons · 44 min',
      lessons: [
        {t:'3.1 JavaScript Variables, Functions & Logic', d:'11:00', v:'dJvPTRXyc6s'},
        {t:'3.2 DOM Manipulation: Change Pages Dynamically', d:'11:30', v:'5fb2aPlgoys'},
        {t:'3.3 Events, Forms & Input Validation', d:'11:30', v:'RjtarcWFc6A'},
        {t:'🛠️ Project: Build an Interactive Business Landing Page', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Professional Workflows & Deployment', icon: '🏆', meta: '4 lessons · 38 min',
      lessons: [
        {t:'4.1 Git & GitHub: Version Control for Developers', d:'10:00', v:'PWqS4NBhEY8'},
        {t:'4.2 Browser DevTools: Debugging & Inspecting Code', d:'9:30', v:'H0XScE08hy8'},
        {t:'4.3 Deploy Live with GitHub Pages & Custom Domains', d:'9:00', v:'e5AwNU3Y2es'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: HTML5 Fundamentals', moduleNum: 1, unlocks: 3, questions: [
      {q:'What does HTML stand for?', opts:['HyperText Markup Language','HyperTransfer Machine Language','HighText Making Language','Hyperlink & Text Markup Language'], correct:0, exp:'HTML is the standard language for creating and structuring web pages.'},
      {q:'Which tag creates the largest heading?', opts:['<heading>','<h6>','<h1>','<big>'], correct:2, exp:'<h1> is the most important heading. Headings range from <h1> (largest) to <h6> (smallest).'},
      {q:'What attribute makes a link open in a new tab?', opts:['href="_new"','target="_blank"','rel="new"','open="tab"'], correct:1, exp:'target="_blank" opens the linked page in a new browser tab.'},
      {q:'Which element defines the main content area?', opts:['<div>','<body>','<main>','<content>'], correct:2, exp:'<main> is a semantic HTML element representing the primary content of the page.'},
      {q:'What does the <form> element do?', opts:['Creates a table','Defines a block of text','Creates an interface for user input submission','Adds images'], correct:2, exp:'HTML forms collect user input and can submit data to a server for processing.'}
    ]},
    mod2: { title: 'Quiz: CSS3 & Layouts', moduleNum: 2, unlocks: 3, questions: [
      {q:'What does CSS stand for?', opts:['Computer Style Sheets','Cascading Style Sheets','Creative Styling System','Coded Structure Styles'], correct:1, exp:'CSS (Cascading Style Sheets) controls the visual presentation and layout of HTML pages.'},
      {q:'What is the CSS Box Model?', opts:['A design tool for creating boxes','Every HTML element as a box with content, padding, border, and margin','A CSS framework','A 3D CSS effect'], correct:1, exp:'The box model defines how space is calculated around every HTML element.'},
      {q:'What does display:flex do?', opts:['Hides an element','Enables flexbox layout on a container','Makes text flexible size','Adds animation'], correct:1, exp:'display:flex enables the powerful Flexbox layout model on a container element.'},
      {q:'Media queries are used for:', opts:['Playing audio','Querying databases','Applying different CSS at different screen sizes','Loading media files'], correct:2, exp:'Media queries make websites responsive by applying different styles at different viewports.'},
      {q:'CSS Grid is best for:', opts:['One-dimensional row/column layouts only','Two-dimensional page layouts (rows AND columns)','Adding animations','Setting font sizes'], correct:1, exp:'Grid handles complex 2D layouts with both rows and columns simultaneously.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'JavaScript adds what to a website?', opts:['Page structure','Visual styling','Interactivity and dynamic behavior','Database storage'], correct:2, exp:'JS makes pages interactive — responding to clicks, updating content, validating forms.'},
      {q:'What is the DOM?', opts:['A CSS framework','A JavaScript library','The Document Object Model — a tree of HTML elements JavaScript can modify','A type of database'], correct:2, exp:'The DOM represents the HTML document as an object tree that JS can read and change.'},
      {q:'What does git commit do?', opts:['Uploads code online','Saves a snapshot of changes to the local repository','Deletes old code','Merges two projects'], correct:1, exp:'git commit creates a saved checkpoint of your staged code changes with a message.'},
      {q:'GitHub Pages hosts:', opts:['Only Node.js apps','Any static website (HTML/CSS/JS) directly from a GitHub repo for free','Paid WordPress sites','Databases'], correct:1, exp:'GitHub Pages is a free static site hosting service — perfect for portfolios and web projects.'},
      {q:'Semantic HTML means:', opts:['HTML with animations','Using HTML tags that describe their content\'s meaning','HTML with CSS included','Minimized HTML files'], correct:1, exp:'Semantic elements like <nav>, <article>, <footer> improve accessibility and SEO.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'I built my first website by lesson 3! By the end I had a full portfolio site and 2 paying clients. David makes coding feel natural and achievable. This course is the best investment I have made in my career by far.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I was completely terrified of coding before this. Now I build websites for local businesses in Buchanan. The step-by-step approach is perfect for beginners. The JavaScript module was challenging but David explains everything so well.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The project-based approach made learning stick. By Module 4 I had real work to show employers. I got hired as a junior web developer within 2 months of completing this course. TIH changed my life trajectory completely.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Excellent comprehensive course. The GitHub and deployment section was especially valuable — I can now deliver live websites to clients. The instructor is very responsive in the discussion forum. Highly recommended.'}
  ],
  faqs: [
    {q:'How hard is coding for a complete beginner?', a:'This course is specifically designed for people who have never coded. We start from zero and progress gradually. Most students are surprised by how quickly they pick it up with the right teaching approach.'},
    {q:'What tools do I need?', a:'VS Code (free), Chrome browser, and a free GitHub account. All are free and we provide step-by-step setup instructions in the first lesson.'},
    {q:'Can I get freelance clients after this course?', a:'Many graduates immediately start freelancing. We include a bonus lesson on how to find clients, price your services, and deliver professional websites to Liberian businesses.'},
    {q:'What should I learn after this course?', a:'We recommend our React & Modern JavaScript course for frontend advancement, or our Full-Stack Development course if you want to build databases and server-side applications.'}
  ]
};

/* ================================================================
   5. GRAPHIC DESIGN
   ================================================================ */
COURSES_DB['design'] = {
  id: 'design',
  title: 'Graphic Design with Canva & Adobe Photoshop',
  shortDesc: 'Create stunning designs, brand identities, and visual content using Canva and Photoshop.',
  category: 'Graphic Design',
  icon: '🎨',
  gradient: 'linear-gradient(135deg,#be185d,#ec4899)',
  instructor: 'Patricia Sumo',
  instructorTitle: 'Creative Director & Brand Design Specialist',
  instructorBio: 'Patricia Sumo is a creative director with over 10 years of design experience working with brands across Liberia, Ghana, and Nigeria. She founded Sumo Creative Studio and has trained hundreds of designers at TIH Academy.',
  rating: 4.6, reviews: 634, students: '2,800+',
  duration: '20h', level: 'Beginner',
  price: 'FREE', origPrice: '$150', isFree: true, badge: 'free',
  certId: 'TIH-2026-GD-0062',
  learn: [
    'Apply fundamental design principles: layout, color theory, and typography',
    'Create professional logos, flyers, posters, and brand identities in Canva',
    'Master Canva Pro features for high-quality social media and marketing designs',
    'Retouch photos and create composites in Adobe Photoshop',
    'Design a complete brand identity package for a business',
    'Create social media graphics optimized for every platform',
    'Export designs correctly for print and digital use',
    'Build a professional graphic design portfolio'
  ],
  requirements: [
    'No design experience needed — all creative skill levels welcome',
    'A computer with internet access for Canva (free browser-based)',
    'Adobe Photoshop (30-day free trial sufficient; link provided in course)'
  ],
  about: [
    'Good design is a superpower for business. In Liberia and across Africa, brands that invest in professional visual identity build more trust, attract more customers, and compete more effectively. This course makes professional design accessible to everyone.',
    'Starting with core design principles that never change, you will progress through Canva mastery for everyday design needs, then into Adobe Photoshop for advanced photo editing and creative compositing. Real projects drive every module.',
    'This course is ideal for entrepreneurs building a brand, marketers creating content, professionals wanting to design their own materials, or anyone wanting to start a freelance design career. By graduation you will have a portfolio of 8+ professional design pieces.'
  ],
  modules: [
    { title: 'Module 1: Design Principles & Foundations', icon: '🎨', meta: '4 lessons · 36 min',
      lessons: [
        {t:'1.1 Design Principles: Balance, Contrast & Hierarchy', d:'9:30', v:'FpwZTl3dCZE'},
        {t:'1.2 Color Theory: Psychology & Palette Creation', d:'10:00', v:'BMDDGuUBO94'},
        {t:'1.3 Typography: Fonts, Pairing & Text Design', d:'9:00', v:'HFVTZ7J0W1E'},
        {t:'📝 Quiz: Design Principles', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Canva — Professional Design Made Easy', icon: '✏️', meta: '4 lessons · 44 min',
      lessons: [
        {t:'2.1 Canva Interface, Templates & Brand Kit Setup', d:'10:00', v:'_ApwkN8BVsc'},
        {t:'2.2 Logos, Flyers & Print Materials in Canva', d:'12:00', v:'ZB_LneYCkPU'},
        {t:'2.3 Social Media Graphics & Animated Posts', d:'11:00', v:'DSbGwruIcfc'},
        {t:'📝 Quiz: Canva Design', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Adobe Photoshop Essentials', icon: '🖼️', meta: '4 lessons · 46 min',
      lessons: [
        {t:'3.1 Photoshop Interface & Essential Tools', d:'11:00', v:'OKkWRpoIFuw'},
        {t:'3.2 Photo Retouching, Color Correction & Filters', d:'12:00', v:'0jzrqhsXwLo'},
        {t:'3.3 Creating Composites & Advanced Selections', d:'12:00', v:'2R5fH8iKAXc'},
        {t:'🛠️ Project: Full Brand Identity Package', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Professional Design & Portfolio', icon: '🏆', meta: '4 lessons · 36 min',
      lessons: [
        {t:'4.1 Designing for Print: Resolution, Bleed & CMYK', d:'9:30', v:'A4VePn0CAl4'},
        {t:'4.2 Designing for Digital: Web, Email & Social Media', d:'9:00', v:'9CnrknQsg5E'},
        {t:'4.3 Building & Presenting Your Design Portfolio', d:'9:00', v:'qelg3fYlxAE'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Design Principles', moduleNum: 1, unlocks: 3, questions: [
      {q:'What is "visual hierarchy" in design?', opts:['Using only one font','Arranging elements to guide the viewer\'s eye in order of importance','Using many colors','Making everything the same size'], correct:1, exp:'Visual hierarchy tells viewers what to look at first, second, and third through size, color, and placement.'},
      {q:'Complementary colors are:', opts:['Colors next to each other on the color wheel','Colors opposite each other on the color wheel','Only black and white','Random color combinations'], correct:1, exp:'Complementary colors (like red-green, blue-orange) create strong visual contrast when used together.'},
      {q:'Leading in typography refers to:', opts:['The first letter in a paragraph','The space between lines of text','Bold formatting','Letter spacing'], correct:1, exp:'Leading (line height) is the vertical space between lines of text — critical for readability.'},
      {q:'The rule of thirds in design means:', opts:['Use exactly three colors','Divide space into a 3x3 grid and place elements at intersections','Use three fonts','Create three versions of every design'], correct:1, exp:'The rule of thirds grid guides placement of key elements for natural, balanced compositions.'},
      {q:'What is white space in design?', opts:['Using white color only','Empty space around design elements that improves readability','A background color','An unused part of a canvas'], correct:1, exp:'White space (negative space) gives designs breathing room and improves visual clarity.'}
    ]},
    mod2: { title: 'Quiz: Canva Design', moduleNum: 2, unlocks: 3, questions: [
      {q:'What is Canva primarily used for?', opts:['Video editing','Creating graphic designs with drag-and-drop tools','Coding websites','Photo storage'], correct:1, exp:'Canva is a browser-based design tool for creating professional graphics without technical skills.'},
      {q:'Canva\'s Brand Kit stores:', opts:['Product inventory','Your brand\'s colors, fonts, and logos for consistent use','Social media passwords','Customer contact information'], correct:1, exp:'The Brand Kit ensures every design uses your exact brand colors, fonts, and logo automatically.'},
      {q:'DPI (dots per inch) matters most for:', opts:['Social media posts','Email newsletters','Print materials like flyers and business cards','Video content'], correct:2, exp:'Print requires at least 300 DPI for sharp output. Screen graphics only need 72-96 DPI.'},
      {q:'RGB color mode is used for:', opts:['Print documents','Digital screens (web, social media, video)','Embroidery designs','Newspaper printing'], correct:1, exp:'RGB (Red, Green, Blue) is the color model for digital screens. Print uses CMYK.'},
      {q:'What file format is best for logos with transparent backgrounds?', opts:['JPG','BMP','PNG','PDF'], correct:2, exp:'PNG supports transparency, making it the standard format for logos placed on varied backgrounds.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'What is Photoshop primarily used for?', opts:['Building websites','Creating spreadsheets','Photo editing, retouching, and digital image composition','Writing documents'], correct:2, exp:'Photoshop is the industry standard for photo editing, compositing, and digital artwork creation.'},
      {q:'A "bleed" in print design is:', opts:['A design mistake','Extra artwork beyond the trim edge to prevent white borders','A color gradient','A type of font'], correct:1, exp:'Bleed extends art beyond the cut line so the final printed piece has no white edges after trimming.'},
      {q:'What is a mood board?', opts:['A social media post','A collection of visual references that capture the desired feel and direction of a design project','A type of calendar design','A font catalog'], correct:1, exp:'Mood boards help clients and designers align on visual direction before design work begins.'},
      {q:'Which format preserves layers in Photoshop?', opts:['JPG','PNG','PDF','.PSD (Photoshop native format)'], correct:3, exp:'.PSD files save all Photoshop layers intact for future editing. JPG and PNG flatten the file.'},
      {q:'Kerning in typography is:', opts:['The space between lines','The space between individual letter pairs','Font weight (bold/thin)','Paragraph alignment'], correct:1, exp:'Kerning adjusts space between specific letter pairs for more natural, balanced text appearance.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Patricia is an incredible teacher. I came with no design skills and left with a professional portfolio. I now design all my business\'s social media content myself, saving money on freelancers. This course is worth every penny.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:4, text:'The Canva modules are outstanding — I designed a complete brand identity for my shop in week 2. The Photoshop section is advanced but the pace is manageable. Best graphic design training available in Liberia.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'I started freelancing immediately after Module 2. By the end of the course I had 5 paying clients. The brand identity project module gave me a real product to show clients. Patricia\'s real-world experience shines through every lesson.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:5, text:'The design principles module fundamentally changed how I see the world. I now notice professional vs amateur design everywhere. The skills from this course have directly improved our church\'s marketing and outreach materials.'}
  ],
  faqs: [
    {q:'Do I need artistic talent to take this course?', a:'Not at all. Graphic design is a learnable skill. This course teaches you the principles and tools that make design systematic — not just talent-based.'},
    {q:'Is Canva free?', a:'Canva has a free version that covers most of this course. We also use some Canva Pro features (available free with a 30-day trial). Professional accounts cost about $13/month.'},
    {q:'Do I need to buy Photoshop?', a:'Adobe Photoshop requires a subscription (about $21/month) but Adobe offers a free 7-30 day trial which is sufficient to complete the course modules.'},
    {q:'Can I make money with graphic design in Liberia?', a:'Absolutely. Liberian businesses, churches, NGOs, and political campaigns constantly need flyers, social media graphics, and brand identities. Freelance design income is very achievable.'}
  ]
};

/* ================================================================
   6. ANDROID APP DEVELOPMENT
   ================================================================ */
COURSES_DB['android'] = {
  id: 'android',
  title: 'Android App Development for Beginners',
  shortDesc: 'Build and publish real Android apps using Kotlin and Android Studio — from zero to the Google Play Store.',
  category: 'Mobile Development',
  icon: '📱',
  gradient: 'linear-gradient(135deg,#15803d,#16a34a)',
  instructor: 'Emmanuel Roberts',
  instructorTitle: 'Senior Android Developer & Mobile Tech Educator',
  instructorBio: 'Emmanuel Roberts has 8 years of Android development experience and has published 12 apps on the Google Play Store. He leads TIH\'s mobile development curriculum and has mentored over 800 app developers across West Africa.',
  rating: 4.7, reviews: 421, students: '1,650+',
  duration: '30h', level: 'Intermediate',
  price: 'FREE', origPrice: '$220', isFree: true, badge: 'free',
  certId: 'TIH-2026-AD-0031',
  learn: [
    'Set up Android Studio and understand the Android development environment',
    'Write Kotlin code from scratch — variables, functions, classes, and logic',
    'Build Android UI with XML layouts: buttons, text fields, lists, and navigation',
    'Connect your app to the internet and work with APIs and JSON data',
    'Store data locally using SQLite and SharedPreferences',
    'Implement RecyclerView for smooth list and grid displays',
    'Handle user permissions, notifications, and background tasks',
    'Publish your completed app to the Google Play Store'
  ],
  requirements: [
    'Basic computer skills and comfort using a computer',
    'A computer with at least 8GB RAM to run Android Studio',
    'No prior programming experience needed — Kotlin basics are taught from scratch'
  ],
  about: [
    'Africa has over 600 million smartphone users, and mobile apps are transforming commerce, healthcare, agriculture, and government services across the continent. Learning to build Android apps puts you at the forefront of this transformation.',
    'This course takes a project-first approach — you build a new app in every module, progressively adding features and complexity. By the end, you will have built 3 complete apps and published one live on the Google Play Store.',
    'Whether you want to build apps for your business, start a career as a mobile developer, or create solutions for Liberian communities, this course gives you the complete foundation. No programming experience is required — we start from the absolute beginning with Kotlin.'
  ],
  modules: [
    { title: 'Module 1: Android & Kotlin Foundations', icon: '📱', meta: '4 lessons · 44 min',
      lessons: [
        {t:'1.1 Android Ecosystem & Setting Up Android Studio', d:'11:00', v:'2lwmKjkz-DE'},
        {t:'1.2 Kotlin Basics: Variables, Types, Functions & Logic', d:'12:00', v:'wCwCsJSCy8Y'},
        {t:'1.3 Your First App: Hello Liberia! UI & Activities', d:'12:00', v:'2LWSxWsPUCY'},
        {t:'📝 Quiz: Android & Kotlin Foundations', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Building Android UIs', icon: '🖼️', meta: '4 lessons · 46 min',
      lessons: [
        {t:'2.1 XML Layouts: Views, Buttons, TextViews & EditTexts', d:'12:00', v:'ISbyj5nFIUk'},
        {t:'2.2 Navigation: Multiple Screens & Intent Passing Data', d:'11:30', v:'TwVzuHhQfbk'},
        {t:'2.3 RecyclerView: Lists, Grids & Custom Adapters', d:'13:00', v:'Oc4MDMHRzwY'},
        {t:'📝 Quiz: Android UI Development', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Data, APIs & Functionality', icon: '🔌', meta: '4 lessons · 48 min',
      lessons: [
        {t:'3.1 Local Data Storage with SharedPreferences & SQLite', d:'12:00', v:'l9ui4Lfgr-E'},
        {t:'3.2 Connecting to the Internet: APIs, Retrofit & JSON', d:'13:00', v:'gaPoV4z5wng'},
        {t:'3.3 Permissions, Notifications & Background Tasks', d:'12:00', v:'bHlLYhSrXvc'},
        {t:'🛠️ Project: Build a News Reader App', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Publishing & Professional Android', icon: '🏆', meta: '4 lessons · 42 min',
      lessons: [
        {t:'4.1 Testing, Debugging & Performance Optimization', d:'11:00', v:'_5LgIrd4O5g'},
        {t:'4.2 Material Design: Beautiful, Professional Android UI', d:'10:30', v:'BEvOBTaYUm0'},
        {t:'4.3 Publishing Your App to Google Play Store', d:'11:00', v:'WOKrelHPefc'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Android & Kotlin Foundations', moduleNum: 1, unlocks: 3, questions: [
      {q:'What programming language is recommended for Android development?', opts:['Java only','Swift','Kotlin','Python'], correct:2, exp:'Kotlin is Google\'s officially recommended language for Android development since 2017.'},
      {q:'Android Studio is:', opts:['A type of Android phone','The official IDE for developing Android applications','A Google Play Store feature','An Android game'], correct:1, exp:'Android Studio is the official Integrated Development Environment (IDE) for Android app development.'},
      {q:'An "Activity" in Android is:', opts:['A background service','A database table','A single screen with a user interface','A network request'], correct:2, exp:'An Activity represents a single screen in an Android app — the fundamental UI unit.'},
      {q:'What is an APK file?', opts:['A Kotlin source code file','An Android Package — the installation file for Android apps','An audio file','A project configuration file'], correct:1, exp:'APK (Android Package Kit) is the file format Android uses to distribute and install apps.'},
      {q:'In Kotlin, "val" is used to declare:', opts:['A variable that can change','A function','An immutable (read-only) variable','A class'], correct:2, exp:'val declares an immutable variable in Kotlin — its value cannot be changed after assignment.'}
    ]},
    mod2: { title: 'Quiz: Android UI Development', moduleNum: 2, unlocks: 3, questions: [
      {q:'RecyclerView is used to display:', opts:['A single image','Large scrollable lists of data efficiently','Video content','Web pages'], correct:1, exp:'RecyclerView efficiently displays large lists by recycling view items as they scroll off screen.'},
      {q:'An Intent in Android is used for:', opts:['Storing data','Navigating between activities and passing data','Network requests','Database queries'], correct:1, exp:'Intents are messaging objects used to navigate between screens and pass data in Android.'},
      {q:'XML in Android development is used for:', opts:['Writing Kotlin logic','Defining UI layouts and views','Database configuration','API communication'], correct:1, exp:'XML layout files define the visual structure and attributes of Android UI components.'},
      {q:'What is a ConstraintLayout?', opts:['A database table','A networking library','A flexible Android layout that positions views relative to each other or the parent','A Kotlin function'], correct:2, exp:'ConstraintLayout creates flat, efficient UI layouts by constraining view positions to other views.'},
      {q:'ViewModel in Android architecture is used to:', opts:['Draw the UI','Store and manage UI-related data that survives configuration changes','Handle network requests','Manage app permissions'], correct:1, exp:'ViewModel survives screen rotations and holds UI data so it doesn\'t get lost on configuration changes.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'What does Retrofit do in Android?', opts:['Manages database operations','Creates a type-safe HTTP client for consuming REST APIs','Handles UI animations','Manages app permissions'], correct:1, exp:'Retrofit makes it easy to consume REST APIs by converting HTTP API calls into Kotlin interfaces.'},
      {q:'SharedPreferences is best for storing:', opts:['Large amounts of data','Images','Small key-value data like settings and user preferences','Complex relational data'], correct:1, exp:'SharedPreferences stores small amounts of primitive data as key-value pairs persistently.'},
      {q:'To publish on Google Play, you need:', opts:['A Google Developer account ($25 one-time fee)','A Google Workspace subscription','An Apple developer account','A paid Android Studio license'], correct:0, exp:'A Google Play Developer account costs a one-time $25 fee and lets you publish unlimited apps.'},
      {q:'Material Design is:', opts:['A physical design textbook','Google\'s design system for creating consistent, beautiful Android UIs','A Kotlin library','An app testing framework'], correct:1, exp:'Material Design is Google\'s comprehensive design system with guidelines, components, and patterns.'},
      {q:'What is a Fragment in Android?', opts:['A broken activity','A reusable portion of UI within an activity','A type of intent','A database record'], correct:1, exp:'Fragments are modular, reusable sections of UI that can be combined within activities.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'I built my first Android app in week 1. By the end of the course I published an app to Google Play that helps Monrovia market vendors list their goods. Emmanuel is an excellent teacher — patient and very knowledgeable.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'This course is the real deal. The Kotlin fundamentals are taught so clearly I was writing functions on day 2. The API module opened my eyes to what apps can do. I now have a career roadmap that didn\'t exist before TIH.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:4, text:'The course is excellent though challenging. The project module is outstanding — building a real news reader app forced me to apply everything I learned. I now feel confident calling myself an Android developer.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:5, text:'I took this course wanting to build an app for my church. By Module 3 I had already built it and published it. Over 200 church members now use the app I created. The course ROI is incredible.'}
  ],
  faqs: [
    {q:'Do I need programming experience?', a:'No! We teach Kotlin from absolute scratch. If you completed our Computer Literacy course, you have everything needed to start this course.'},
    {q:'What kind of computer do I need?', a:'Android Studio requires at least 8GB RAM (16GB recommended) and 4GB free disk space. Windows, Mac, and Linux all work. We provide an optimization guide for slower computers.'},
    {q:'Can I publish apps to earn money?', a:'Yes! Google Play allows you to sell apps, use in-app purchases, and run ads. Many graduates earn income through their apps. We cover monetization strategies in the final module.'},
    {q:'What comes after this course?', a:'We recommend our Advanced Android course covering Firebase, Jetpack Compose, and enterprise Android patterns. Or explore our Cross-Platform development course with Flutter.'}
  ]
};

/* ================================================================
   7. DIGITAL MARKETING
   ================================================================ */
COURSES_DB['marketing'] = {
  id: 'marketing',
  title: 'Digital Marketing Professional Certificate',
  shortDesc: 'Master SEO, social media marketing, paid advertising, and analytics to grow any business online.',
  category: 'Digital Marketing',
  icon: '📢',
  gradient: 'linear-gradient(135deg,#b45309,#f59e0b)',
  instructor: 'Grace Johnson',
  instructorTitle: 'Digital Marketing Director & Growth Strategist',
  instructorBio: 'Grace Johnson has led digital marketing for brands in Liberia, Ghana, and Nigeria for over 12 years. She has generated over $5M in client revenue through digital campaigns and trained over 2,100 marketers at TIH Academy.',
  rating: 4.9, reviews: 890, students: '2,100+',
  duration: '24h', level: 'Intermediate',
  price: 'FREE', origPrice: '$180', isFree: true, badge: 'free',
  certId: 'TIH-2026-DM-0095',
  learn: [
    'Develop a comprehensive digital marketing strategy for any business',
    'Grow organic reach through Search Engine Optimization (SEO)',
    'Build and manage professional social media presence on all major platforms',
    'Run profitable paid advertising on Facebook, Instagram, and Google',
    'Create compelling content that attracts and converts audiences',
    'Use Google Analytics to measure and optimize marketing performance',
    'Build and grow an email marketing list with high open rates',
    'Execute an end-to-end digital marketing campaign with real results'
  ],
  requirements: [
    'Basic computer and internet skills',
    'A business, brand, or personal project to apply marketing skills to (recommended)',
    'No prior marketing experience needed — this course starts with fundamentals'
  ],
  about: [
    'Digital marketing is the most accessible path to growing a business in Africa today. With over 500 million internet users across the continent, digital channels offer unprecedented reach at a fraction of traditional advertising costs — if you know how to use them.',
    'This course covers the complete digital marketing ecosystem: from SEO and content marketing that drives free organic traffic, to paid social media ads that can target any audience, to email marketing and analytics. You will build real campaigns, not just learn theory.',
    'Whether you run a business, work in marketing, or want to start a freelance digital marketing career, this course gives you skills that are immediately applicable and commercially valuable. Our graduates manage marketing for top Liberian businesses and international brands.'
  ],
  modules: [
    { title: 'Module 1: Digital Marketing Strategy & Content', icon: '📢', meta: '4 lessons · 40 min',
      lessons: [
        {t:'1.1 Digital Marketing Fundamentals & the Customer Journey', d:'10:00', v:'iRjXccj4yRo'},
        {t:'1.2 Content Marketing: Creating Content That Converts', d:'11:00', v:'gqRdIEIlzNs'},
        {t:'1.3 Social Media Strategy: Platform Selection & Brand Voice', d:'10:30', v:'8LX60gToxrM'},
        {t:'📝 Quiz: Digital Marketing Strategy', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: SEO & Organic Growth', icon: '🔍', meta: '4 lessons · 42 min',
      lessons: [
        {t:'2.1 SEO Foundations: How Google Ranks Websites', d:'10:30', v:'WR_5_gJVA2c'},
        {t:'2.2 Keyword Research & On-Page SEO', d:'11:30', v:'VPDe8XL7Mh8'},
        {t:'2.3 Link Building & Technical SEO Essentials', d:'10:30', v:'C5ddo63kHHI'},
        {t:'📝 Quiz: SEO & Organic Marketing', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Paid Advertising & Email Marketing', icon: '💰', meta: '4 lessons · 46 min',
      lessons: [
        {t:'3.1 Facebook & Instagram Ads: Audience Targeting & Campaigns', d:'13:00', v:'-CsBl3tv-X0'},
        {t:'3.2 Google Ads: Search, Display & Performance Max', d:'12:00', v:'u0r3y1q0fLQ'},
        {t:'3.3 Email Marketing: List Building, Automation & Sequences', d:'11:30', v:'2fBxrhV3Nk0'},
        {t:'🛠️ Project: Full Digital Marketing Campaign', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Analytics, Optimization & Career', icon: '🏆', meta: '4 lessons · 38 min',
      lessons: [
        {t:'4.1 Google Analytics 4: Measuring What Matters', d:'11:00', v:'mKu6FI53BxE'},
        {t:'4.2 A/B Testing & Conversion Rate Optimization', d:'9:30', v:'xGpwhYiDCSg'},
        {t:'4.3 Digital Marketing Career & Freelancing in Africa', d:'9:00', v:'1pejHrRIzAY'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Digital Marketing Strategy', moduleNum: 1, unlocks: 3, questions: [
      {q:'What is a "target audience" in marketing?', opts:['Everyone in the world','The specific group most likely to buy your product or service','Your competitors','Your existing customers only'], correct:1, exp:'A target audience is the specific demographic and psychographic group your marketing is designed to reach.'},
      {q:'The "marketing funnel" describes:', opts:['A data visualization tool','The stages customers go from awareness to purchase','A social media algorithm','An advertising platform'], correct:1, exp:'The marketing funnel (Awareness → Interest → Decision → Action) models the customer journey.'},
      {q:'Content marketing primarily generates:', opts:['Immediate sales only','Long-term organic traffic and brand authority','Paid ad impressions','Negative feedback'], correct:1, exp:'Content marketing builds trust, drives organic search traffic, and generates leads over time.'},
      {q:'A "call to action" (CTA) in marketing is:', opts:['A customer complaint','Instruction prompting the audience to take a specific next step','A type of advertisement','A marketing analytics report'], correct:1, exp:'CTAs like "Shop Now", "Sign Up Free", or "Learn More" drive measurable audience action.'},
      {q:'What is brand voice?', opts:['A voiceover in ads','The consistent personality, tone, and style a brand uses across all communications','A marketing budget','A social media algorithm'], correct:1, exp:'A consistent brand voice builds recognition and trust across all customer touchpoints.'}
    ]},
    mod2: { title: 'Quiz: SEO & Organic Marketing', moduleNum: 2, unlocks: 3, questions: [
      {q:'SEO stands for:', opts:['Social Engagement Optimization','Search Engine Optimization','Site Experience Overview','Sponsored Engagement Outreach'], correct:1, exp:'SEO improves a website\'s visibility in search engine results pages (SERPs) without paid ads.'},
      {q:'What is a "keyword" in SEO?', opts:['A password for your website','Words or phrases people type into search engines','A type of social media post','A website security feature'], correct:1, exp:'Keywords are search terms you optimize your content for to rank higher in search results.'},
      {q:'Backlinks are:', opts:['Links on your website to other sites','Links from other websites pointing to your site','Broken links','Social media links'], correct:1, exp:'Backlinks from reputable sites signal authority to Google and boost your search rankings.'},
      {q:'Page loading speed affects:', opts:['Only social media performance','SEO rankings and user experience','Only desktop users','Only paid ads'], correct:1, exp:'Google uses page speed as a ranking factor, and slow sites have higher bounce rates.'},
      {q:'"Organic" traffic means:', opts:['Traffic from social media only','Visitors who came from unpaid search results','Paid advertising traffic','Email newsletter traffic'], correct:1, exp:'Organic traffic arrives through unpaid search results — it\'s free once you rank well.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'What is the Facebook Pixel?', opts:['A Facebook design tool','A code snippet tracking website visitor actions to improve ad targeting','A Facebook business account type','A social media scheduling tool'], correct:1, exp:'The Facebook Pixel tracks website behavior so you can retarget visitors and optimize ad delivery.'},
      {q:'Google Analytics is used to:', opts:['Create websites','Measure website traffic, user behavior, and conversion performance','Manage social media','Run Google Ads'], correct:1, exp:'Google Analytics provides detailed data on how visitors find, engage with, and convert on your site.'},
      {q:'Email open rate is:', opts:['The percentage of emails delivered','The percentage of email recipients who opened an email','The number of emails sent','The email click-through rate'], correct:1, exp:'Open rate measures the percentage of delivered emails that recipients actually opened.'},
      {q:'A/B testing in marketing is:', opts:['Testing two versions of a product physically','Comparing two versions of an ad or page to see which performs better','A security testing method','An analytics report type'], correct:1, exp:'A/B testing provides data-driven insights on which marketing elements produce better results.'},
      {q:'ROAS stands for:', opts:['Rate Of Ad Spending','Return On Ad Spend','Reach Of Audience Segment','Revenue Of Advertising System'], correct:1, exp:'ROAS measures how much revenue you earn for every dollar spent on advertising.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Grace Johnson is a phenomenal instructor. I landed a remote digital marketing job within 2 months of completing this course. The Facebook Ads module alone was worth 10 times the course price — I immediately ran profitable campaigns.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I use everything from this course every single day in my business. Organic reach is up 400% and my paid ads now have positive ROAS. Grace teaches with real results and real numbers. Absolutely life-changing course.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The SEO module transformed my blog from zero to 1,000 monthly organic visitors in 3 months. The email marketing section gave me tools to build a subscriber list that is now my most valuable business asset.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Comprehensive coverage of every important digital marketing channel. The campaign project in Module 3 was excellent practical experience. I now manage marketing for two businesses in addition to my own — the skills are immediately monetizable.'}
  ],
  faqs: [
    {q:'Do I need a business to take this course?', a:'No, but having a project to apply your learning to (a business, nonprofit, personal brand, or side project) will dramatically accelerate your results.'},
    {q:'How much do Facebook and Google Ads cost?', a:'You can start with as little as $5/day. This course teaches you to make every dollar count with proper targeting and testing so you don\'t waste budget.'},
    {q:'Will this help me get a marketing job?', a:'Yes. Digital marketing is one of the fastest-growing career fields in Africa. Our certificate plus your campaign portfolio from this course makes you highly competitive for marketing roles.'},
    {q:'Is this course updated for current platforms?', a:'Yes. Digital marketing changes rapidly and TIH updates this course quarterly. Enrolled students get all updates free, including new modules on emerging platforms and AI in marketing.'}
  ]
};

/* ================================================================
   8. CYBERSECURITY
   ================================================================ */
COURSES_DB['cybersecurity'] = {
  id: 'cybersecurity',
  title: 'Cybersecurity Fundamentals & Ethical Hacking',
  shortDesc: 'Protect networks, systems, and data — and learn to think like a hacker to defend against attacks.',
  category: 'Cybersecurity',
  icon: '🔒',
  gradient: 'linear-gradient(135deg,#7f1d1d,#dc2626)',
  instructor: 'Emmanuel Duo',
  instructorTitle: 'Certified Ethical Hacker & Cybersecurity Consultant',
  instructorBio: 'Emmanuel Duo holds a CEH (Certified Ethical Hacker) and CISSP certification with 10 years in cybersecurity consulting for banks, government agencies, and NGOs across West Africa. He has secured over 50 organizations from cyber threats.',
  rating: 4.8, reviews: 389, students: '1,100+',
  duration: '26h', level: 'Intermediate',
  price: 'FREE', origPrice: '$200', isFree: true, badge: 'free',
  certId: 'TIH-2026-CS-0038',
  learn: [
    'Understand the cybersecurity landscape and common threat types',
    'Set up and use Kali Linux for security testing',
    'Perform network scanning and vulnerability assessment',
    'Understand and demonstrate common attack techniques ethically',
    'Implement firewalls, VPNs, and network security controls',
    'Conduct web application security testing',
    'Apply security incident response procedures',
    'Prepare for industry certifications: CompTIA Security+ and CEH'
  ],
  requirements: [
    'Basic networking knowledge (IP addresses, DNS, HTTP) is helpful but not required',
    'Computer with at least 8GB RAM to run virtual machines',
    'Strong ethical commitment — this course is for defensive and educational purposes only'
  ],
  about: [
    'Cybercrime costs African businesses over $3.5 billion annually, and the demand for cybersecurity professionals far exceeds supply across the continent. This course prepares you to fill that gap with practical, hands-on security skills.',
    'Using a learn-by-doing approach with real tools (Kali Linux, Nmap, Wireshark, Metasploit), you will understand how attacks work so you can prevent and detect them. Every technique is taught in controlled environments for ethical, defensive purposes.',
    'This course is designed for IT professionals seeking security specialization, system administrators, developers wanting to build secure software, and anyone seriously considering a cybersecurity career. Our graduates work for banks, telcos, and government agencies across West Africa.'
  ],
  modules: [
    { title: 'Module 1: Cybersecurity Fundamentals', icon: '🔒', meta: '4 lessons · 42 min',
      lessons: [
        {t:'1.1 Cybersecurity Landscape: Threats, Actors & Attack Vectors', d:'11:00', v:'4lwiQ5hXwCo'},
        {t:'1.2 Networking Fundamentals for Security: TCP/IP, DNS & Ports', d:'12:00', v:'ltBWJIhcjpA'},
        {t:'1.3 Cryptography, Passwords & Authentication Security', d:'11:00', v:'kb_scuDUHls'},
        {t:'📝 Quiz: Cybersecurity Fundamentals', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Network & System Security', icon: '🛡️', meta: '4 lessons · 46 min',
      lessons: [
        {t:'2.1 Setting Up Kali Linux & Security Lab Environment', d:'12:00', v:'wX75Z-4MEoM'},
        {t:'2.2 Network Scanning & Reconnaissance with Nmap', d:'12:00', v:'HPDgPg4aWqs'},
        {t:'2.3 Firewalls, IDS/IPS & Network Defense Strategies', d:'12:30', v:'AwEZP2KQPJ8'},
        {t:'📝 Quiz: Network Security', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Ethical Hacking & Penetration Testing', icon: '⚔️', meta: '4 lessons · 48 min',
      lessons: [
        {t:'3.1 Ethical Hacking Methodology & Legal Framework', d:'11:00', v:'9DrnMjs5UVA'},
        {t:'3.2 Vulnerability Assessment & Exploitation Basics', d:'13:00', v:'x43N_p0QGXU'},
        {t:'3.3 Web Application Security: OWASP Top 10', d:'13:00', v:'Jzr0Jdnq_EI'},
        {t:'🛠️ Project: Penetration Test Report on a Lab Environment', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Incident Response & Career', icon: '🏆', meta: '4 lessons · 40 min',
      lessons: [
        {t:'4.1 Security Incident Response & Digital Forensics Basics', d:'11:00', v:'Is2RcF0FJL4'},
        {t:'4.2 Security Compliance: GDPR, ISO 27001 & African Data Laws', d:'10:00', v:'V7qVZD1z9pA'},
        {t:'4.3 Cybersecurity Certifications & Career Pathways (CEH, Security+)', d:'9:30', v:'pOfCmL1YRIQ'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Cybersecurity Fundamentals', moduleNum: 1, unlocks: 3, questions: [
      {q:'What is a "threat actor" in cybersecurity?', opts:['A security software company','An individual or group that carries out malicious cyber activities','A cybersecurity certification','A network monitoring tool'], correct:1, exp:'Threat actors range from individual hackers to organized crime groups and state-sponsored attackers.'},
      {q:'What is phishing?', opts:['A type of network protocol','Fraudulent communications that trick victims into revealing sensitive information','A firewall configuration technique','A type of encryption'], correct:1, exp:'Phishing uses deceptive emails or messages to steal credentials, financial data, or install malware.'},
      {q:'Encryption is used to:', opts:['Speed up data transfer','Convert readable data into an unreadable format to protect it','Compress files','Delete sensitive data'], correct:1, exp:'Encryption converts plaintext into ciphertext, making data unreadable without the decryption key.'},
      {q:'Two-Factor Authentication (2FA) adds security by:', opts:['Requiring two passwords','Requiring a second verification method beyond your password','Encrypting your password','Logging all login attempts'], correct:1, exp:'2FA combines something you know (password) with something you have (phone code) or are (biometrics).'},
      {q:'A VPN primarily does what?', opts:['Speeds up your internet','Blocks all ads','Encrypts your internet connection and hides your IP address','Provides free cloud storage'], correct:2, exp:'A VPN creates an encrypted tunnel for your internet traffic, protecting privacy especially on public Wi-Fi.'}
    ]},
    mod2: { title: 'Quiz: Network Security', moduleNum: 2, unlocks: 3, questions: [
      {q:'What does Nmap do?', opts:['Creates network diagrams','Scans networks to discover hosts, open ports, and services','Encrypts network traffic','Blocks malicious websites'], correct:1, exp:'Nmap is a network exploration tool that discovers devices and services on a network.'},
      {q:'A firewall primarily works by:', opts:['Scanning for viruses','Monitoring and controlling network traffic based on security rules','Encrypting all data','Backing up data automatically'], correct:1, exp:'Firewalls filter network traffic using rules to allow legitimate traffic and block threats.'},
      {q:'What is a DMZ in networking?', opts:['A dangerous military zone','A subnet that exposes internet-facing services while protecting the internal network','A type of encryption','A wireless security protocol'], correct:1, exp:'A DMZ (Demilitarized Zone) isolates public-facing servers from the secure internal network.'},
      {q:'What does IDS stand for?', opts:['Internet Data Service','Intrusion Detection System','Integrated Defense Software','Internet Domain Security'], correct:1, exp:'An IDS monitors network or system activities for malicious behavior and policy violations.'},
      {q:'What is the purpose of penetration testing?', opts:['To destroy a competitor\'s system','To find and fix security vulnerabilities before attackers exploit them','To test internet speed','To monitor employee activity'], correct:1, exp:'Pen testing simulates real attacks to identify vulnerabilities so they can be remediated proactively.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'The OWASP Top 10 refers to:', opts:['The top 10 cybersecurity companies','The top 10 most critical web application security risks','The top 10 hacking tools','The top 10 security certifications'], correct:1, exp:'OWASP Top 10 is the authoritative list of the most critical security vulnerabilities in web applications.'},
      {q:'SQL Injection is:', opts:['Adding SQL data to a spreadsheet','An attack injecting malicious SQL code into a database query to manipulate or steal data','A type of database backup','A SQL optimization technique'], correct:1, exp:'SQL injection exploits insufficient input validation to manipulate database queries and steal data.'},
      {q:'What is digital forensics?', opts:['Designing digital artwork','The process of recovering and analyzing digital evidence for legal proceedings','Deleting digital records','Creating database backups'], correct:1, exp:'Digital forensics involves collecting, preserving, and analyzing digital evidence in support of investigations.'},
      {q:'ISO 27001 is:', opts:['A type of firewall','An international standard for information security management systems','A hacking tool','A type of network protocol'], correct:1, exp:'ISO 27001 specifies requirements for establishing and maintaining an information security management system.'},
      {q:'A "zero-day vulnerability" is:', opts:['A vulnerability that is zero risk','A security flaw unknown to the vendor and with no available patch','A vulnerability patched on day zero','A network configuration error'], correct:1, exp:'Zero-days are especially dangerous because no patch exists — attackers can exploit them freely until disclosed.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Emmanuel Duo is a world-class instructor. The hands-on lab environment made learning to hack (ethically!) completely safe and practical. I passed my CompTIA Security+ exam 2 weeks after finishing this course.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'This course opened my eyes to how vulnerable most systems are. I immediately applied the knowledge to harden my company\'s network. The OWASP module was particularly revelatory. Excellent investment for any IT professional.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:4, text:'Comprehensive and well-structured. The penetration testing project was challenging and rewarding. I now consult for small businesses on cybersecurity. The certificate carries real weight with Liberian organizations taking security seriously.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:5, text:'Best cybersecurity training available in West Africa. Emmanuel teaches with real-world examples that make concepts stick. The course prepared me thoroughly for my CEH certification. Highly recommended for anyone in IT.'}
  ],
  faqs: [
    {q:'Is this course legal and ethical?', a:'Yes. All techniques are taught in controlled lab environments for defensive and educational purposes. We emphasize ethics and legal compliance throughout, and require students to agree to an ethical use pledge.'},
    {q:'What certifications can this help me prepare for?', a:'This course prepares you for CompTIA Security+, CEH (Certified Ethical Hacker), and provides a foundation for CISSP. We recommend these certifications to complement your TIH certificate.'},
    {q:'Do I need cybersecurity experience?', a:'Basic networking knowledge is helpful but not required. We provide a networking primer in Module 1. IT professionals and developers will advance faster, but beginners can succeed with dedication.'},
    {q:'What careers does cybersecurity lead to?', a:'Security Analyst, Penetration Tester, SOC Analyst, Security Engineer, and CISO are all in high demand across Africa. Average salaries are significantly above general IT roles.'}
  ]
};

/* ================================================================
   9. ENTREPRENEURSHIP
   ================================================================ */
COURSES_DB['entrepreneurship'] = {
  id: 'entrepreneurship',
  title: 'Entrepreneurship & Startup Launch Program',
  shortDesc: 'Turn your idea into a real business — from validation to launch, funding, and scaling.',
  category: 'Entrepreneurship',
  icon: '💡',
  gradient: 'linear-gradient(135deg,#92400e,#f59e0b)',
  instructor: 'Thomas Bility',
  instructorTitle: 'Serial Entrepreneur & Startup Mentor',
  instructorBio: 'Thomas Bility has founded 4 businesses in Liberia and trained entrepreneurs across West Africa for over 15 years. He has helped secure over $2M in funding for Liberian startups and is a regular advisor at startup competitions regionally.',
  rating: 4.8, reviews: 598, students: '2,400+',
  duration: '20h', level: 'All Levels',
  price: 'FREE', origPrice: '$150', isFree: true, badge: 'free',
  certId: 'TIH-2026-EP-0083',
  learn: [
    'Validate business ideas quickly and cheaply before investing resources',
    'Develop a comprehensive business plan and model canvas',
    'Conduct market research and competitive analysis in the African market',
    'Build financial projections and understand startup financial statements',
    'Identify and access funding sources: grants, loans, investors, and bootstrapping',
    'Register your business and understand legal structures in Liberia',
    'Build and pitch your business to investors and partners',
    'Implement growth strategies to scale your business sustainably'
  ],
  requirements: [
    'No prior business experience needed — we guide you from the very beginning',
    'A business idea (or willingness to develop one during the course)',
    'Commitment to completing the business plan project in each module'
  ],
  about: [
    'Liberia and West Africa are full of entrepreneurial opportunity — but most business ideas never become businesses because founders lack the knowledge and tools to take them from idea to execution. This course bridges that gap.',
    'Drawing on real Liberian and African business case studies, this course takes you through every stage of the startup journey: idea validation, business modeling, legal setup, financial planning, fundraising, marketing, and scaling. No theory without action.',
    'By the end of this program, you will have a complete, fundable business plan and the confidence to launch and grow your business. Thousands of graduates have used this course to start businesses that now employ people and contribute to Liberia\'s economy.'
  ],
  modules: [
    { title: 'Module 1: Idea to Business Opportunity', icon: '💡', meta: '4 lessons · 38 min',
      lessons: [
        {t:'1.1 Entrepreneurial Mindset & Opportunity Recognition', d:'9:00', v:'4hshq-o0vSI'},
        {t:'1.2 Idea Validation: Testing Before You Invest', d:'10:30', v:'Th8JoIan4dg'},
        {t:'1.3 Market Research & the African Consumer', d:'10:00', v:'KCEWgq8S9gM'},
        {t:'📝 Quiz: Entrepreneurship Foundations', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Business Planning & Legal Setup', icon: '📋', meta: '4 lessons · 42 min',
      lessons: [
        {t:'2.1 Business Model Canvas & Value Proposition', d:'11:00', v:'ReM1uqmVfP0'},
        {t:'2.2 Writing a Compelling Business Plan', d:'12:00', v:'XK9XYa5-MCw'},
        {t:'2.3 Legal Structures & Business Registration in Liberia', d:'11:00', v:'fj6zbwAXpzE'},
        {t:'📝 Quiz: Business Planning & Models', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Funding & Financial Management', icon: '💰', meta: '4 lessons · 44 min',
      lessons: [
        {t:'3.1 Startup Funding Options: Grants, Loans, Angels & VC', d:'11:30', v:'Cw58F0k8BDg'},
        {t:'3.2 Financial Projections, Cash Flow & Break-Even Analysis', d:'12:00', v:'7Ljc6NoNg6M'},
        {t:'3.3 Grant Writing & Investor Pitch Preparation', d:'11:30', v:'Tk-RdCFSrKU'},
        {t:'🛠️ Project: Complete Business Plan & Pitch Deck', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Launch, Growth & Scale', icon: '🏆', meta: '4 lessons · 38 min',
      lessons: [
        {t:'4.1 Go-to-Market Strategy & First Customers', d:'10:00', v:'UWqzT95Lkno'},
        {t:'4.2 Growth Hacking & Scaling Strategies for African Markets', d:'10:00', v:'8_6uU6KgexE'},
        {t:'4.3 Building a Team & Leadership for Entrepreneurs', d:'9:00', v:'HL80lXafRL0'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Entrepreneurship Foundations', moduleNum: 1, unlocks: 3, questions: [
      {q:'What is "idea validation"?', opts:['Legally registering a business idea','Testing whether your business idea solves a real problem people will pay for','Writing a business plan','Registering a trademark'], correct:1, exp:'Validation tests your assumptions cheaply before spending significant time or money on an idea.'},
      {q:'A "minimum viable product" (MVP) is:', opts:['The most expensive version of your product','The smallest version of your product that allows you to test your core assumption','A government business license','Your final product'], correct:1, exp:'An MVP lets you gather real customer feedback with minimal investment before full development.'},
      {q:'Market research helps you understand:', opts:['Only your competitors','Your target customers, market size, competition, and opportunities','Only your product features','Your company\'s financial position'], correct:1, exp:'Market research reveals whether sufficient demand exists and how to position against competition.'},
      {q:'What is the "value proposition" of a business?', opts:['The monetary value of a company','The clear statement of how your product solves customer problems better than alternatives','Your pricing strategy','Your company mission statement'], correct:1, exp:'A strong value proposition clearly answers "Why should customers choose you over every alternative?"'},
      {q:'Bootstrapping a business means:', opts:['Starting with venture capital investment','Funding your business from your own savings and revenue without outside investors','Borrowing money from a bank','Crowdfunding from the public'], correct:1, exp:'Bootstrapping maintains full ownership and control but requires very careful financial management.'}
    ]},
    mod2: { title: 'Quiz: Business Planning & Models', moduleNum: 2, unlocks: 3, questions: [
      {q:'The Business Model Canvas was developed by:', opts:['Peter Drucker','Alex Osterwalder','Steve Jobs','Michael Porter'], correct:1, exp:'Alex Osterwalder created the Business Model Canvas as a strategic template for developing business models.'},
      {q:'A business plan\'s executive summary should be:', opts:['50+ pages long','A brief overview of the entire business plan (1-2 pages)','Only for investors','A list of all products'], correct:1, exp:'The executive summary is the first thing investors read — it must capture the essence concisely.'},
      {q:'What is a "sole proprietorship"?', opts:['A business with multiple owners','The simplest business structure owned and operated by one person','A government enterprise','A non-profit organization'], correct:1, exp:'Sole proprietorships are simplest to set up but offer no personal liability protection.'},
      {q:'A SWOT analysis examines:', opts:['Sales, Wages, Operations, Technology','Strengths, Weaknesses, Opportunities, Threats','Success, Work, Outcomes, Tactics','Strategy, Workforce, Objectives, Timeline'], correct:1, exp:'SWOT helps businesses understand internal capabilities and external market factors.'},
      {q:'What is "cash flow" in business?', opts:['Your bank account balance','The net amount of cash moving in and out of your business over a period','Your total revenue','Your profit margin'], correct:1, exp:'Positive cash flow — more coming in than going out — is essential for business survival.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'Angel investors are:', opts:['Government grant providers','High-net-worth individuals who invest personal funds in early-stage startups','Bank loan officers','Family and friends who help the business'], correct:1, exp:'Angel investors typically invest $25K-$500K in early-stage companies in exchange for equity.'},
      {q:'Break-even analysis shows:', opts:['When your product will launch','The point at which revenue equals total costs and you start making profit','Your maximum possible revenue','Your competition\'s pricing'], correct:1, exp:'Break-even analysis shows how many units or what revenue level is needed to cover all costs.'},
      {q:'A "go-to-market" strategy defines:', opts:['Your company\'s office location','How you will reach your target customers and bring your product to market','Your product development roadmap','Your employee hiring plan'], correct:1, exp:'A go-to-market strategy covers target segments, distribution channels, pricing, and marketing.'},
      {q:'What is "equity" in startup funding?', opts:['A type of business loan','Ownership share in a company given to investors in exchange for capital','A government grant','A type of business license'], correct:1, exp:'Equity funding gives investors ownership stakes — unlike loans, it doesn\'t require repayment.'},
      {q:'Scaling a business means:', opts:['Reducing the business size','Growing revenue significantly without proportional increases in costs','Hiring more employees','Launching in a new location'], correct:1, exp:'True scaling grows revenue while keeping costs relatively fixed, dramatically increasing profitability.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Thomas Bility brings real Liberian business experience to every lesson. After this course I registered my business, secured a $15,000 grant, and now employ 8 people. The business plan project was the foundation for everything.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I had been sitting on my business idea for 3 years. This course gave me the tools, confidence, and roadmap to finally launch. Six months later my business is profitable. The funding module opened doors I didn\'t know existed.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The most practical entrepreneurship training I have ever seen. Thomas doesn\'t teach from textbooks — he teaches from real Liberian business experience. The pitch deck project prepared me perfectly for investor meetings.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Excellent course structure. The MVP validation approach saved me from investing in a business idea that wouldn\'t have worked. The market research tools are invaluable for anyone starting a business in rural Liberia.'}
  ],
  faqs: [
    {q:'Do I need money to start a business before taking this course?', a:'No. One of the core lessons is how to validate and start a business with minimal capital. Many successful Liberian businesses started with under $500.'},
    {q:'Will this help me access grants?', a:'Yes. The grant writing module specifically covers major grants available to Liberian entrepreneurs including USAID, World Bank, and Tony Elumelu Foundation programs.'},
    {q:'Is this course for people with no business experience?', a:'This course is designed for everyone from first-time entrepreneurs to experienced business owners wanting to scale. The content is structured to benefit all levels.'},
    {q:'How practical is this course?', a:'Every module includes a hands-on project. By course end you will have a complete business plan, financial projections, pitch deck, and go-to-market strategy — ready for execution.'}
  ]
};

/* ================================================================
   10. PROJECT MANAGEMENT
   ================================================================ */
COURSES_DB['project-mgmt'] = {
  id: 'project-mgmt',
  title: 'Project Management Professional Certificate',
  shortDesc: 'Plan, execute, and deliver projects on time and within budget using proven PM frameworks.',
  category: 'Project Management',
  icon: '📋',
  /* Issue 28 fix: unique gradient distinguishes project-mgmt from computer-literacy */
  gradient: 'linear-gradient(135deg,#064e3b,#047857)',
  instructor: 'Dr. Mary Weah',
  instructorTitle: 'Certified PMP & Organizational Strategy Consultant',
  instructorBio: 'Dr. Mary Weah holds PMP and PRINCE2 certifications with 18 years managing large-scale projects for UN agencies, World Bank programs, and Liberian government ministries. She is TIH\'s Business & Management curriculum lead.',
  rating: 4.9, reviews: 712, students: '3,200+',
  duration: '22h', level: 'All Levels',
  price: 'FREE', origPrice: '$200', isFree: true, badge: 'free',
  certId: 'TIH-2026-PM-0127',
  learn: [
    'Understand the 5 project management process groups and 10 knowledge areas',
    'Create project charters, scope statements, and work breakdown structures',
    'Build project schedules using Gantt charts and critical path method',
    'Develop and manage project budgets and cost controls',
    'Identify, assess, and manage project risks proactively',
    'Lead project teams and manage stakeholder communication',
    'Apply Agile and Scrum frameworks for flexible project delivery',
    'Prepare effectively for the PMP certification examination'
  ],
  requirements: [
    'No prior project management experience needed',
    'Basic computer and email communication skills',
    'Professional work experience (any field) is helpful but not required'
  ],
  about: [
    'Every organization — businesses, NGOs, government agencies, and international development organizations — needs people who can successfully manage projects. Project management is one of the most transferable and universally valued professional skills.',
    'This course combines the traditional PMBOK framework used in PMP certification preparation with Agile/Scrum methodologies increasingly demanded by modern organizations. Both are taught with real African project examples: infrastructure, health programs, NGO initiatives, and business projects.',
    'Graduates have passed PMP exams, secured project manager roles at major organizations including UN agencies and World Bank-funded programs, and successfully delivered multimillion-dollar projects in Liberia and across Africa.'
  ],
  modules: [
    { title: 'Module 1: PM Fundamentals & Project Initiation', icon: '📋', meta: '4 lessons · 40 min',
      lessons: [
        {t:'1.1 What is Project Management? Processes & Knowledge Areas', d:'10:30', v:'iopMMoHstJM'},
        {t:'1.2 Project Charter & Stakeholder Identification', d:'10:30', v:'SPj-Luod9tI'},
        {t:'1.3 Scope Management: WBS & Requirements', d:'11:00', v:'PyR2VLP3xnA'},
        {t:'📝 Quiz: PM Fundamentals & Initiation', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Planning — Schedule, Budget & Risk', icon: '📅', meta: '4 lessons · 46 min',
      lessons: [
        {t:'2.1 Project Scheduling: Gantt Charts & Critical Path Method', d:'12:00', v:'YDxAKKVdMVM'},
        {t:'2.2 Budget Estimation & Cost Management', d:'11:30', v:'EyPFi0YO32M'},
        {t:'2.3 Risk Management: Identification, Assessment & Response', d:'12:00', v:'r1szmmkUPH8'},
        {t:'📝 Quiz: Project Planning', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Execution, Monitoring & Agile', icon: '⚡', meta: '4 lessons · 44 min',
      lessons: [
        {t:'3.1 Project Execution: Leading Teams & Managing Quality', d:'11:00', v:'1rQT1R3S2BQ'},
        {t:'3.2 Monitoring & Controlling: EVM, KPIs & Status Reporting', d:'12:00', v:'boIRGwGJ-Ds'},
        {t:'3.3 Agile & Scrum: Sprints, Backlogs & Stand-ups', d:'12:00', v:'KmEMtUzMlIk'},
        {t:'🛠️ Project: Full Project Plan for a Real Initiative', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Closure, Communication & PMP Prep', icon: '🏆', meta: '4 lessons · 38 min',
      lessons: [
        {t:'4.1 Project Closure & Lessons Learned', d:'9:30', v:'gSOdc2Y5tTk'},
        {t:'4.2 Stakeholder Communication & Change Management', d:'10:00', v:'bV9yUQV6D60'},
        {t:'4.3 PMP Exam Preparation & Professional Development', d:'10:00', v:'vzqDTSZOTic'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: PM Fundamentals & Initiation', moduleNum: 1, unlocks: 3, questions: [
      {q:'What are the 5 project management process groups?', opts:['Plan, Design, Build, Test, Deploy','Initiating, Planning, Executing, Monitoring & Controlling, Closing','Start, Middle, End, Review, Archive','Scope, Time, Cost, Quality, Risk'], correct:1, exp:'PMBOK defines these 5 process groups as the fundamental lifecycle of any project.'},
      {q:'A project charter does what?', opts:['Defines all project activities in detail','Formally authorizes the project and defines high-level scope, objectives, and stakeholders','Lists every project team member','Contains the detailed budget breakdown'], correct:1, exp:'The project charter is the official authorization document that gives the PM authority to manage the project.'},
      {q:'WBS stands for:', opts:['Work Budget Schedule','Work Breakdown Structure','Weekly Business Summary','Work-Based Specification'], correct:1, exp:'A WBS decomposes the project scope into smaller, manageable deliverables and work packages.'},
      {q:'Who is a "stakeholder" in project management?', opts:['Only the project manager','Only the client','Anyone who has an interest in or is affected by the project outcomes','Only the project team members'], correct:2, exp:'Stakeholders include clients, sponsors, team members, end users, regulators, and the community.'},
      {q:'Project scope creep refers to:', opts:['The project finishing ahead of schedule','Uncontrolled growth of project scope beyond what was originally defined','The project going under budget','Team members leaving the project'], correct:1, exp:'Scope creep is a primary cause of project failure — it must be controlled through formal change management.'}
    ]},
    mod2: { title: 'Quiz: Project Planning', moduleNum: 2, unlocks: 3, questions: [
      {q:'The Critical Path Method (CPM) identifies:', opts:['The most expensive project activities','The longest sequence of dependent activities determining the shortest project duration','The most risky activities','Activities that can be done in parallel'], correct:1, exp:'The critical path is the longest path through the project network — delay any task on it and the whole project is delayed.'},
      {q:'A Gantt chart shows:', opts:['Project budget distribution','Project schedule as a horizontal bar chart showing tasks over time','Risk probability matrix','Stakeholder communication plan'], correct:1, exp:'Gantt charts are the most widely used scheduling tool, showing tasks, durations, and dependencies visually.'},
      {q:'A project risk register contains:', opts:['Financial transactions','Identified risks, their probability, impact, and planned responses','Team member performance reviews','Project change requests'], correct:1, exp:'The risk register is a living document tracking all identified risks and mitigation strategies throughout the project.'},
      {q:'Earned Value Management (EVM) measures:', opts:['Employee satisfaction','Project performance against scope, schedule, and budget simultaneously','Marketing effectiveness','Stakeholder engagement'], correct:1, exp:'EVM provides objective metrics on whether a project is on time, within budget, and delivering planned scope.'},
      {q:'A contingency reserve in project budgeting is:', opts:['The total project budget','Extra budget set aside to address identified risks if they occur','The management fee','Profit margin'], correct:1, exp:'Contingency reserves cover identified risks. Management reserves cover unforeseen risks outside approved scope.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'In Scrum, a "Sprint" is:', opts:['A sprint meeting','A fixed-length iteration (usually 2-4 weeks) in which a usable product increment is delivered','A type of project report','The project kickoff meeting'], correct:1, exp:'Sprints are the heart of Scrum — short, time-boxed cycles delivering working product increments.'},
      {q:'What does a Scrum Master do?', opts:['Manages the project budget','Assigns tasks to developers','Serves the team by removing obstacles and facilitating Scrum processes','Acts as the product owner'], correct:2, exp:'The Scrum Master is a servant-leader who coaches the team, removes impediments, and protects the process.'},
      {q:'Project lessons learned are documented:', opts:['Only when the project fails','At project closure to capture knowledge for future projects','Only by the project manager','During the planning phase'], correct:1, exp:'Lessons learned capture what went well, what went wrong, and recommendations to improve future projects.'},
      {q:'Change management in projects involves:', opts:['Replacing project team members','A formal process for evaluating and approving changes to approved project scope/schedule/budget','Updating the project charter only','Informal verbal approvals'], correct:1, exp:'Formal change control prevents scope creep and ensures all changes are evaluated for impact before approval.'},
      {q:'What is a project closure document?', opts:['The initial project proposal','Formal documentation that the project is complete, deliverables accepted, and resources released','The monthly status report','The risk register update'], correct:1, exp:'The closure document is the formal sign-off that the project is complete and accepted by stakeholders.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Dr. Weah is the best PM instructor I have ever encountered. After this course I passed my PMP exam on the first attempt. I now manage a $3M World Bank project in Liberia. This course was the foundation for my entire career change.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'The combination of PMBOK and Agile in one course is brilliant. The Scrum module prepared me for my tech company role perfectly. Dr. Weah uses real African project examples which make everything immediately relevant and applicable.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'I manage health projects for an international NGO and this course transformed my approach completely. The risk management and EVM modules are outstanding. My project delivery rates improved dramatically after applying these tools.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Excellent comprehensive course. The full project plan assignment pushed me to apply every concept from the course in one integrated deliverable. I showed the plan in a job interview and was hired immediately. Highly recommended.'}
  ],
  faqs: [
    {q:'Will this prepare me for the PMP certification?', a:'Yes! This course aligns with PMBOK Guide 7th edition and covers all major PMP exam domains. We recommend additional practice exams after completing the course.'},
    {q:'Do I need project management experience?', a:'No prior PM experience is required. The course builds your knowledge from the ground up. Having any work experience (in any field) provides helpful context.'},
    {q:'What industries use project management?', a:'Every industry: construction, healthcare, NGOs, government, banking, technology, agriculture, and more. Every organization that runs projects needs project managers.'},
    {q:'How does this course cover Agile and Scrum?', a:'Module 3 covers Agile fundamentals and Scrum in depth — including sprints, backlogs, retrospectives, and roles. This prepares you for both traditional PM and modern agile environments.'}
  ]
};

/* ================================================================
   11. MICROSOFT OFFICE
   ================================================================ */
COURSES_DB['office'] = {
  id: 'office',
  title: 'Microsoft Office Mastery: Word, Excel & PowerPoint',
  shortDesc: 'Master the Microsoft Office suite used in every professional workplace — from basics to advanced features.',
  category: 'Computer Fundamentals',
  icon: '💼',
  gradient: 'linear-gradient(135deg,#d97706,#f59e0b)',
  instructor: 'Samuel Doe',
  instructorTitle: 'Microsoft Certified Trainer & Productivity Expert',
  instructorBio: 'Samuel Doe is a Microsoft Certified Trainer (MCT) with 15 years teaching Office productivity to businesses, government agencies, and NGOs across Liberia. He has helped over 5,000 professionals master the Microsoft Office suite.',
  rating: 4.8, reviews: 943, students: '4,800+',
  duration: '18h', level: 'Beginner',
  price: 'FREE', origPrice: '$120', isFree: true, badge: 'free',
  certId: 'TIH-2026-MO-0156',
  learn: [
    'Create professional documents, reports, and CVs in Microsoft Word',
    'Use advanced Word features: styles, tables of contents, mail merge',
    'Build spreadsheets with essential Excel formulas and functions',
    'Create pivot tables and charts to analyze and visualize data',
    'Design compelling presentations in Microsoft PowerPoint',
    'Use PowerPoint animations, slide masters, and presentation techniques',
    'Collaborate using Microsoft 365 OneDrive, Teams, and SharePoint',
    'Improve productivity with keyboard shortcuts and workflow automation'
  ],
  requirements: [
    'Basic computer skills — ability to use a keyboard and mouse',
    'Microsoft Office 2016 or later (or Microsoft 365 subscription)',
    'No prior Office experience needed — this course covers all three applications completely'
  ],
  about: [
    'Microsoft Office is the most widely used productivity software suite in the world. In Liberia and across Africa, proficiency in Word, Excel, and PowerPoint is required for virtually every office job. This course builds that proficiency comprehensively.',
    'Going beyond basic skills, this course teaches advanced features that separate proficient users from true Office masters — mail merge, pivot tables, data analysis, slide masters, and Microsoft 365 collaboration tools that are increasingly standard in modern workplaces.',
    'Whether you are preparing for a job interview, looking to perform better at work, or wanting to start freelancing as an Office trainer or virtual assistant, this course gives you everything you need. Our graduates consistently report immediate career advancement from these skills.'
  ],
  modules: [
    { title: 'Module 1: Microsoft Word — Professional Documents', icon: '📄', meta: '4 lessons · 42 min',
      lessons: [
        {t:'1.1 Word Interface, Formatting & Document Structure', d:'10:30', v:'EuWTrvT_YyY'},
        {t:'1.2 Professional CVs, Letters & Reports with Styles', d:'12:00', v:'3eIlHtHDGDs'},
        {t:'1.3 Tables, Images, Mail Merge & Advanced Features', d:'12:00', v:'rGG-In7PAEk'},
        {t:'📝 Quiz: Microsoft Word', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Microsoft Excel — Data & Analysis', icon: '📊', meta: '4 lessons · 46 min',
      lessons: [
        {t:'2.1 Excel Essentials: Formulas, Functions & Formatting', d:'12:00', v:'7_vMFvnGTlc'},
        {t:'2.2 VLOOKUP, IF Statements & Essential Data Functions', d:'12:30', v:'bsuP2dD3rec'},
        {t:'2.3 Pivot Tables, Charts & Dashboard Creation', d:'13:00', v:'9NUjHBNWe9M'},
        {t:'📝 Quiz: Microsoft Excel', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Microsoft PowerPoint — Presentations', icon: '📊', meta: '4 lessons · 40 min',
      lessons: [
        {t:'3.1 PowerPoint Fundamentals: Layouts, Themes & Master Slides', d:'10:00', v:'QiVSIvB1xis'},
        {t:'3.2 Advanced Animations, Transitions & Multimedia', d:'11:00', v:'cwPaqUC1jT4'},
        {t:'3.3 Data Visualization & Charts in PowerPoint', d:'10:00', v:'ycyySK5bdRg'},
        {t:'🛠️ Project: Professional Business Presentation', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Microsoft 365 & Productivity Mastery', icon: '🏆', meta: '4 lessons · 36 min',
      lessons: [
        {t:'4.1 Microsoft 365: OneDrive, Teams & SharePoint Collaboration', d:'10:00', v:'nbhZE_mza2g'},
        {t:'4.2 Keyboard Shortcuts & Productivity Optimization', d:'9:00', v:'u0--Ye7bUP4'},
        {t:'4.3 Microsoft Outlook: Professional Email & Calendar Management', d:'9:00', v:'TzNQkMTHKuM'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Microsoft Word', moduleNum: 1, unlocks: 3, questions: [
      {q:'What is the purpose of "Styles" in Microsoft Word?', opts:['To change text color only','To apply consistent formatting throughout a document and enable automatic table of contents','To add animations','To insert images'], correct:1, exp:'Styles ensure consistent formatting and allow Word to automatically generate tables of contents.'},
      {q:'Mail Merge in Word is used to:', opts:['Send emails directly from Word','Create personalized letters or emails from a single template using data from a list','Merge multiple documents into one','Merge comments from multiple reviewers'], correct:1, exp:'Mail Merge creates personalized letters, certificates, or emails for multiple recipients from one template.'},
      {q:'What does Ctrl+Z do in Office applications?', opts:['Save the document','Undo the last action','Close the window','Zoom in'], correct:1, exp:'Ctrl+Z is the universal Undo shortcut across all Microsoft Office applications.'},
      {q:'A "header" in a Word document appears:', opts:['Only on the first page','At the top of every page','Only on odd pages','At the bottom of every page'], correct:1, exp:'Headers appear at the top of every page and typically contain document title, page number, or company name.'},
      {q:'What is a table of contents?', opts:['A list of database tables','An automatically generated navigation list of document headings and page numbers','A spreadsheet in Word','A bibliography list'], correct:1, exp:'Word can auto-generate a table of contents from heading styles, updated with one click.'}
    ]},
    mod2: { title: 'Quiz: Microsoft Excel', moduleNum: 2, unlocks: 3, questions: [
      {q:'Which Excel formula finds the highest value in a range?', opts:['=HIGH(A1:A10)','=LARGEST(A1:A10)','=MAX(A1:A10)','=TOP(A1:A10)'], correct:2, exp:'=MAX(range) returns the largest value in a specified range of cells.'},
      {q:'What does the IF function do?', opts:['Imports files','Returns one value if a condition is TRUE and another if it is FALSE','Counts cells','Filters data'], correct:1, exp:'IF(condition, value_if_true, value_if_false) is one of the most versatile Excel functions.'},
      {q:'A pivot table is primarily used to:', opts:['Create presentations','Summarize, analyze, and explore patterns in large datasets','Format cells with colors','Create data entry forms'], correct:1, exp:'Pivot tables instantly summarize thousands of rows of data with drag-and-drop simplicity.'},
      {q:'Cell referencing in Excel: $A$1 means:', opts:['A relative reference','An absolute reference (always refers to column A, row 1 regardless of where copied)','An invalid reference','A named range'], correct:1, exp:'The $ signs lock the column and row references — essential for formulas that need to stay fixed when copied.'},
      {q:'What is conditional formatting?', opts:['Formatting only the first row','Rules that automatically apply colors or icons to cells based on their values','Manual color coding','A type of Excel chart'], correct:1, exp:'Conditional formatting highlights data patterns, exceptions, and trends automatically based on rules you set.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'In PowerPoint, a "slide master" is:', opts:['The first slide in a presentation','A template controlling the design and layout of all slides for consistent branding','The presenter\'s control panel','The largest slide in a deck'], correct:1, exp:'Slide masters ensure brand consistency across all slides — change the master and every slide updates.'},
      {q:'What is OneDrive in Microsoft 365?', opts:['A USB flash drive','Microsoft\'s cloud storage service for storing and sharing files from anywhere','An email service','A presentation tool'], correct:1, exp:'OneDrive gives every Microsoft 365 user cloud storage accessible from any device for file backup and sharing.'},
      {q:'Microsoft Teams is primarily used for:', opts:['Creating presentations','Team communication, video meetings, and collaboration on Microsoft 365 files','Managing spreadsheets','Website creation'], correct:1, exp:'Microsoft Teams is the hub for modern workplace collaboration — chat, meetings, calls, and file sharing in one place.'},
      {q:'Which keyboard shortcut saves a file in any Office application?', opts:['Ctrl+P','Ctrl+S','Ctrl+W','Ctrl+N'], correct:1, exp:'Ctrl+S instantly saves the current file — a habit all Office users should develop to avoid losing work.'},
      {q:'What does "track changes" in Word allow?', opts:['Saving document history','Showing all edits made to a document so reviewers can accept or reject changes','Tracking file storage size','Comparing two documents automatically'], correct:1, exp:'Track Changes shows all edits visually, enabling collaborative review and approval workflows.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'I knew the basics before this course but Samuel took me to a completely new level. The advanced Excel module specifically — pivot tables and VLOOKUP — got me promoted to a data reporting role. Excellent investment.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'The mail merge module alone saved me 4 hours of work every month. The PowerPoint slide master section transformed my presentations from amateur to professional overnight. My clients now specifically comment on presentation quality.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'Most comprehensive Office training available in Liberia. I learned features in this course that I didn\'t know existed after 5 years using Office. The Microsoft 365 collaboration module is now essential knowledge in every workplace.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:4, text:'Very practical course. The keyboard shortcuts module doubled my productivity. I now teach these skills to junior staff at my organization. The certificate is a strong addition to any CV in the Liberian job market.'}
  ],
  faqs: [
    {q:'Do I need to buy Microsoft Office?', a:'Microsoft 365 Personal costs about $70/year and includes all apps plus 1TB OneDrive storage. A free 30-day trial covers the entire course. Many employers also provide Office licenses.'},
    {q:'Is this different from the Computer Literacy course?', a:'The Computer Literacy course covers Office at a basic introductory level. This course goes into advanced features of each application comprehensively — it\'s the deep-dive version.'},
    {q:'Will Office skills help me get a job?', a:'Almost every office job in Liberia requires Word, Excel, and PowerPoint proficiency. Listing Microsoft Office competency on your CV is table stakes for administrative, finance, and management roles.'},
    {q:'Does this cover Google Workspace too?', a:'This course focuses on Microsoft Office specifically. If you need Google Workspace skills, our Data Analytics course covers Google Sheets in detail.'}
  ]
};

/* ================================================================
   12. LEADERSHIP
   ================================================================ */
COURSES_DB['leadership'] = {
  id: 'leadership',
  title: 'Business Leadership Masterclass',
  shortDesc: 'Develop the leadership skills to inspire teams, lead change, and deliver organizational results.',
  category: 'Leadership',
  icon: '🎯',
  /* Issue 28 fix: unique gradient distinguishes leadership from computer-literacy and project-mgmt */
  gradient: 'linear-gradient(135deg,#78350f,#b45309)',
  instructor: 'Dr. Mary Weah',
  instructorTitle: 'Business Strategy Consultant & Executive Coach',
  instructorBio: 'Dr. Mary Weah holds an MBA and PhD in Organizational Leadership with 20 years advising C-suite executives, government ministers, and NGO directors across West Africa. She is TIH\'s highest-rated instructor and a leading voice on African leadership.',
  rating: 4.9, reviews: 712, students: '3,200+',
  duration: '18h', level: 'All Levels',
  price: 'FREE', origPrice: '$180', isFree: true, badge: 'free',
  certId: 'TIH-2026-LD-0099',
  learn: [
    'Understand your personal leadership style and how to develop it intentionally',
    'Build high-performing teams and motivate people toward shared goals',
    'Communicate with executive presence and influence stakeholders effectively',
    'Lead through change and guide organizations through transformation',
    'Apply strategic thinking and decision-making frameworks',
    'Manage conflict, build consensus, and negotiate effectively',
    'Develop emotional intelligence and self-awareness as a leader',
    'Create a personal leadership development plan for continued growth'
  ],
  requirements: [
    'No formal leadership experience required — this course develops leaders at all levels',
    'An openness to honest self-assessment and personal growth',
    'Some work experience (professional, community, or organizational) is helpful'
  ],
  about: [
    'Leadership is the most critical capability gap in African organizations today. Technical skills get you hired — but leadership skills determine how far you go and how much impact you have. This masterclass develops both the strategic and human dimensions of exceptional leadership.',
    'Drawing on globally proven leadership frameworks (situational leadership, emotional intelligence, transformational leadership) applied to African organizational contexts, this course is both rigorous and immediately practical. Every concept is applied to real leadership situations you face.',
    'Whether you lead 2 people or 2,000 — in business, government, civil society, or your community — this course will transform how you lead. Our graduates hold positions from team leader to CEO and consistently credit this course as a turning point in their leadership journey.'
  ],
  modules: [
    { title: 'Module 1: Leadership Foundations & Self-Awareness', icon: '🎯', meta: '4 lessons · 38 min',
      lessons: [
        {t:'1.1 What is Leadership? Styles, Theories & the African Context', d:'9:30', v:'tYW6X5qwnMw'},
        {t:'1.2 Self-Assessment: Your Leadership Strengths & Gaps', d:'10:00', v:'Q-JClqIR5a4'},
        {t:'1.3 Emotional Intelligence: The Foundation of Effective Leadership', d:'10:00', v:'kKbTi9_1lTg'},
        {t:'📝 Quiz: Leadership Foundations', d:'5 questions', isQuiz:true, quizId:'mod1'}
      ]
    },
    { title: 'Module 2: Team Leadership & People Management', icon: '👥', meta: '4 lessons · 42 min',
      lessons: [
        {t:'2.1 Building High-Performing Teams: Selection, Trust & Culture', d:'11:00', v:'L4UTybPoyn4'},
        {t:'2.2 Motivation, Delegation & Accountability', d:'11:30', v:'SI6cOkDOoyE'},
        {t:'2.3 Managing Conflict & Building Consensus', d:'11:00', v:'o0w1941xkjY'},
        {t:'📝 Quiz: Team Leadership', d:'5 questions', isQuiz:true, quizId:'mod2'}
      ]
    },
    { title: 'Module 3: Strategic Leadership & Communication', icon: '📡', meta: '4 lessons · 44 min',
      lessons: [
        {t:'3.1 Strategic Thinking & Decision-Making Frameworks', d:'11:30', v:'LerIITWNgvI'},
        {t:'3.2 Executive Communication & Stakeholder Influence', d:'11:30', v:'0X1FiNxlHh0'},
        {t:'3.3 Leading Change & Organizational Transformation', d:'12:00', v:'AAZgoKAqGE0'},
        {t:'🛠️ Project: Personal Leadership Development Plan', d:'Project', isProject:true}
      ]
    },
    { title: 'Module 4: Advanced Leadership & Legacy', icon: '🏆', meta: '4 lessons · 36 min',
      lessons: [
        {t:'4.1 Ethical Leadership & Corporate Governance', d:'9:30', v:'XjiRF_6cvcA'},
        {t:'4.2 Leading Across Cultures & Generations', d:'9:00', v:'cyGuic7_ivo'},
        {t:'4.3 Building Leadership Legacy & Developing Future Leaders', d:'9:00', v:'f8uw94S-yc4'},
        {t:'🏆 Final Assessment & Certificate', d:'Assessment', isQuiz:true, quizId:'final', isFinal:true}
      ]
    }
  ],
  quizzes: {
    mod1: { title: 'Quiz: Leadership Foundations', moduleNum: 1, unlocks: 3, questions: [
      {q:'What differentiates a leader from a manager?', opts:['Leaders have higher salaries','Leaders inspire people toward a vision while managers oversee processes and systems','Leaders are more qualified','Leaders only work in large organizations'], correct:1, exp:'Management is about efficiency; leadership is about effectiveness — inspiring people toward meaningful change.'},
      {q:'Emotional Intelligence (EQ) in leadership includes:', opts:['Technical expertise only','Self-awareness, self-regulation, empathy, and social skills','High academic qualifications','Physical fitness'], correct:1, exp:'EQ is widely considered more important than IQ for leadership effectiveness, especially in people management.'},
      {q:'Transformational leadership focuses on:', opts:['Maintaining the status quo through rules','Inspiring followers to exceed expected performance by appealing to higher ideals','Transactional rewards only','Authoritative command and control'], correct:1, exp:'Transformational leaders create vision and inspire intrinsic motivation to achieve extraordinary results.'},
      {q:'What is "servant leadership"?', opts:['Leaders who serve food to their team','A leadership philosophy where the leader\'s primary goal is to serve others and enable their growth','Weak leadership that lacks authority','Leadership only in nonprofit organizations'], correct:1, exp:'Servant leaders put their people first — Robert Greenleaf\'s concept is highly effective in African community contexts.'},
      {q:'Self-awareness in leadership means:', opts:['Knowing all technical skills','Having an accurate understanding of your own strengths, weaknesses, emotions, and impact on others','Being self-centered','Having high confidence regardless of feedback'], correct:1, exp:'Self-aware leaders make better decisions, build stronger relationships, and develop more effectively.'}
    ]},
    mod2: { title: 'Quiz: Team Leadership', moduleNum: 2, unlocks: 3, questions: [
      {q:'Psychological safety in a team means:', opts:['A physically safe workplace','Team members feel safe to take risks, speak up, and be vulnerable without fear of punishment','Having a safe storage room','Using secure communication tools'], correct:1, exp:'Google\'s Project Aristotle found psychological safety to be the #1 factor in high-performing teams.'},
      {q:'Effective delegation requires:', opts:['Doing everything yourself to ensure quality','Assigning tasks with clear expectations, authority, and support for the person to succeed','Only assigning easy tasks','Micromanaging every step'], correct:1, exp:'Delegation develops team members, frees leadership bandwidth, and builds organizational capability.'},
      {q:'The best approach to managing conflict is:', opts:['Ignoring conflicts until they resolve themselves','Addressing conflicts directly, early, and with focus on interests rather than positions','Always siding with the senior person','Letting the team vote on every conflict'], correct:1, exp:'Interest-based conflict resolution finds solutions that address the underlying needs of all parties.'},
      {q:'A high-performing team is characterized by:', opts:['Having the most talented individuals','Clear shared purpose, trust, complementary skills, and mutual accountability','The highest salaries','Working the most hours'], correct:1, exp:'Team performance is about dynamics and synergy — diverse teams with trust and shared purpose outperform collections of stars.'},
      {q:'Accountability in leadership means:', opts:['Blaming others for failures','Taking responsibility for outcomes — yours and your team\'s — and creating a culture of ownership','Punishing poor performance harshly','Setting performance goals only'], correct:1, exp:'Accountable leaders model responsibility, create clarity, and build cultures where people own their commitments.'}
    ]},
    final: { title: 'Final Assessment', moduleNum: 4, unlocks: null, isFinal: true, questions: [
      {q:'Strategic thinking involves:', opts:['Only focusing on today\'s operational problems','Understanding the big picture, anticipating future trends, and making decisions aligned with long-term goals','Making the fastest possible decisions','Following industry best practices exactly'], correct:1, exp:'Strategic leaders balance short-term execution with long-term vision and environmental awareness.'},
      {q:'Change management in organizations requires leaders to:', opts:['Announce changes and expect immediate compliance','Create urgency, build a coalition, communicate a clear vision, and enable quick wins','Implement changes secretly to avoid resistance','Delay change until everyone agrees'], correct:1, exp:'Kotter\'s 8-Step Change Model shows that successful change requires a structured, people-centered approach.'},
      {q:'Executive presence is best described as:', opts:['Physical height and appearance','The combination of gravitas, communication skills, and appearance that conveys confidence and inspires trust','Wearing expensive clothing','Having a corner office'], correct:1, exp:'Executive presence is a learnable skill combining confidence, clarity, decisiveness, and authentic authority.'},
      {q:'Ethical leadership primarily means:', opts:['Following all company rules exactly','Leading with integrity — making decisions based on values, fairness, and transparency regardless of pressure','Only following religious principles','Avoiding all risks'], correct:1, exp:'Ethical leaders build organizations where people trust leadership and take pride in the organization\'s reputation.'},
      {q:'Building leadership legacy means:', opts:['Having the most impressive job title','Developing other leaders who continue and expand your positive impact beyond your tenure','Staying in a position as long as possible','Building personal wealth through leadership positions'], correct:1, exp:'The greatest leaders are judged by the next generation of leaders they develop and the lasting change they create.'}
    ]}
  },
  reviews: [
    {name:'Fatima Kamara', loc:'Monrovia, Liberia', date:'May 2026', bg:'#002868', init:'FK', rating:5, text:'Dr. Weah is simply magnificent. This course fundamentally changed how I lead my team. The emotional intelligence module showed me blind spots I never knew I had. My team\'s performance and morale have both improved dramatically.'},
    {name:'Joseph Blamo', loc:'Buchanan, Liberia', date:'April 2026', bg:'#BF0A30', init:'JB', rating:5, text:'I have taken leadership training from international consultants at 3 times the price of this course — nothing has been as practical and immediately applicable. The African context throughout makes this course uniquely relevant and valuable.'},
    {name:'Mary Kolie', loc:'Gbarnga, Liberia', date:'March 2026', bg:'#10b981', init:'MK', rating:5, text:'The strategic thinking module gave me tools I use in every major decision. The personal leadership development plan was a transformative exercise. I now mentor 5 younger women in leadership because of the inspiration this course gave me.'},
    {name:'Thomas Sirleaf', loc:'Harper, Maryland County', date:'June 2026', bg:'#7c3aed', init:'TS', rating:5, text:'One of the most valuable learning experiences of my career. Dr. Weah combines academic rigor with deep practical wisdom. I was promoted to Regional Director 4 months after completing this course. The timing was not a coincidence.'}
  ],
  faqs: [
    {q:'Is this course only for people who already lead teams?', a:'No. This course is valuable at every career stage. Many of the most impactful leadership skills — like emotional intelligence and strategic thinking — are best developed early in your career.'},
    {q:'How is African leadership different?', a:'African organizations often blend formal authority with community values, elder respect, and Ubuntu philosophy. Dr. Weah addresses these unique dynamics throughout the course rather than simply transplanting Western frameworks.'},
    {q:'What if I lead a small team or community organization?', a:'This course is directly applicable to any group of people — 2 to 2,000. The principles of trust, vision, accountability, and development apply equally to a village committee or a multinational corporation.'},
    {q:'Will this help me get promoted?', a:'Leadership skills are the most commonly cited factor in promotion decisions. This course improves your communication, decision-making, team management, and strategic thinking — all criteria by which advancement is assessed.'}
  ]
};
