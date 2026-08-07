/* TIH "Build Real AI & Cybersecurity Skills" program.
   Creates COURSES_DB['ai-cybersecurity'] from scratch: a 14-module program
   (plus a graduation module) taking a beginner from AI + cybersecurity
   fundamentals to practical, AI-powered defensive security skills. Strictly
   defensive, legal and ethical — all hands-on work only on systems you own or
   are explicitly authorized to test. Modelled on cybersecurity-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (COURSES_DB['ai-cybersecurity'] && COURSES_DB['ai-cybersecurity']._aicyberBuilt) return;

  // Module-default videos (reused from TIH's vetted cyber/AI libraries). Per-topic
  // videos can be layered later via topic-videos.js without editing this file.
  var VIDEOS = {
    intro: ['HZzXbxajz80'], netfund: ['k9ZigsW9il0'], fundamentals: ['aRbKFCY4tjE'],
    linux: ['IkuPKJmhTi4'], ethical: ['9DrnMjs5UVA'], websec: ['pScXZaUnRYA'],
    python: ['rfscVS0vtbw'], aiintro: ['eMhSj4ZRDkg'], aidetect: ['gNEmteNwfXc'],
    soc: ['UdTM8NW9nBI'], forensics: ['X50Qkm9-d8M'], aisec: ['A_QG2L6GS4Q'],
    cloud: ['lEvKQR1E8IE'], projects: ['2pOAzLVtSl8'], assessment: ['2pOAzLVtSl8']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Introduction to AI and Cybersecurity', '🧠', 'intro', 'content', ['What Is Artificial Intelligence?', 'What Is Cybersecurity?', 'Why AI and Cybersecurity Matter', 'Types of Cyber Threats', 'Cybersecurity Roles and Careers', 'How AI Is Used in Cybersecurity']],
    [2, 'Computer and Networking Fundamentals', '🖧', 'netfund', 'content', ['Computer Hardware and Software', 'Operating Systems', 'Files, Processes, and Services', 'What Is a Computer Network?', 'IP Addresses', 'MAC Addresses', 'DNS and DHCP', 'Ports and Protocols', 'TCP/IP Fundamentals', 'How the Internet Works']],
    [3, 'Cybersecurity Fundamentals', '🛡️', 'fundamentals', 'content', ['CIA Triad: Confidentiality, Integrity and Availability', 'Authentication and Authorization', 'Password Security', 'Multi-Factor Authentication', 'Encryption Basics', 'Firewalls', 'Antivirus and Endpoint Security', 'Security Policies', 'Risk Management', 'Security Awareness']],
    [4, 'Linux for Cybersecurity', '🐧', 'linux', 'content', ['What Is Linux?', 'Installing a Linux Virtual Machine', 'Linux Terminal Basics', 'Linux File System', 'Users and Permissions', 'Managing Processes', 'Installing Software', 'Networking Commands', 'Bash Fundamentals', 'Linux Security Basics']],
    [5, 'Ethical Hacking Fundamentals', '🎯', 'ethical', 'content', ['What Is Ethical Hacking?', 'Legal and Ethical Responsibilities', 'Reconnaissance', 'Information Gathering', 'Vulnerability Scanning', 'Network Scanning', 'Understanding Common Vulnerabilities', 'Web Security Fundamentals', 'Password Security Testing', 'Writing a Security Assessment']],
    [6, 'Web Application Security', '🕸️', 'websec', 'content', ['How Websites Work', 'HTTP and HTTPS', 'Cookies and Sessions', 'Authentication Security', 'Access Control', 'SQL Injection Concepts', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'Secure Web Development', 'OWASP Top 10']],
    [7, 'Python for Cybersecurity', '🐍', 'python', 'content', ['Introduction to Python', 'Installing Python', 'Python Variables and Data Types', 'Conditions and Loops', 'Functions', 'Working With Files', 'Python and Networking', 'Working With APIs', 'Automating Security Tasks', 'Building a Simple Security Tool']],
    [8, 'Introduction to AI for Cybersecurity', '🤖', 'aiintro', 'content', ['AI vs. Machine Learning', 'Generative AI', 'Large Language Models', 'How ChatGPT and Similar AI Systems Work', 'Prompt Engineering', 'AI for Security Research', 'AI for Log Analysis', 'AI for Threat Detection', 'AI-Assisted Security Automation', 'Limitations of AI in Cybersecurity']],
    [9, 'AI-Powered Threat Detection', '🚨', 'aidetect', 'content', ['Understanding Security Logs', 'Identifying Suspicious Activity', 'Detecting Anomalies', 'AI-Based Malware Detection', 'Phishing Detection With AI', 'Threat Intelligence', 'Indicators of Compromise (IOCs)', 'Security Event Analysis', 'Building a Basic Threat Detection Workflow', 'Evaluating AI Security Tools']],
    [10, 'Security Operations Center (SOC)', '🖥️', 'soc', 'content', ['What Is a SOC?', 'SOC Analyst Responsibilities', 'Security Information and Event Management (SIEM)', 'Log Collection', 'Alert Monitoring', 'Alert Triage', 'Incident Investigation', 'Threat Hunting', 'Incident Documentation', 'SOC Automation']],
    [11, 'Digital Forensics and Incident Response', '🔬', 'forensics', 'content', ['Introduction to Digital Forensics', 'Evidence Collection', 'Evidence Preservation', 'File and Disk Analysis', 'Understanding System Logs', 'Investigating Suspicious Activity', 'Malware Incident Response', 'Phishing Incident Response', 'Incident Recovery', 'Writing an Incident Report']],
    [12, 'AI Security and Emerging Threats', '⚠️', 'aisec', 'content', ['AI-Generated Phishing', 'Deepfakes and Identity Fraud', 'AI-Powered Social Engineering', 'Adversarial Machine Learning', 'Prompt Injection', 'AI Data Privacy', 'Securing AI Applications', 'AI Model Security', 'Responsible AI', 'Future of AI and Cybersecurity']],
    [13, 'Cloud and AI Security', '☁️', 'cloud', 'content', ['What Is Cloud Computing?', 'Cloud Security Fundamentals', 'Identity and Access Management', 'Cloud Data Protection', 'Cloud Network Security', 'Securing Cloud Applications', 'AI Services in the Cloud', 'Cloud Security Monitoring', 'Common Cloud Security Risks', 'Cloud Security Best Practices']],
    [14, 'Real-World Cybersecurity Projects', '🏗️', 'projects', 'projects', ['Security Assessment Project', 'Phishing Detection Project', 'Log Analysis Project', 'AI Security Assistant Project', 'Incident Response Project', 'Final Capstone Project']],
    [15, 'Final Assessment & Graduation', '🏆', 'assessment', 'assessment', ['Networking Assessment', 'Cybersecurity Fundamentals Assessment', 'Linux Assessment', 'Ethical Hacking Assessment', 'Python Assessment', 'AI Security Assessment', 'Threat Detection Assessment', 'Incident Response Assessment', 'Final Practical Examination', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Assessment|Report)$/.test(name.trim()); }

  var skillLabel = { intro: 'AI & cybersecurity foundations', netfund: 'computer & networking fundamentals', fundamentals: 'core security principles', linux: 'Linux for security', ethical: 'ethical hacking fundamentals', websec: 'web application security', python: 'Python for security automation', aiintro: 'AI for cybersecurity', aidetect: 'AI-powered threat detection', soc: 'security operations (SOC)', forensics: 'digital forensics & incident response', aisec: 'AI security & emerging threats', cloud: 'cloud & AI security', projects: 'applied AI-security projects', assessment: 'your skills' };

  var ETHICS = '<div class="study-callout"><strong>⚖️ Ethical &amp; legal use:</strong> perform every practical security exercise only on systems you own or are explicitly authorized in writing to test. This course is for <strong>defensive, legal and authorized</strong> use in a safe lab. Unauthorized access is illegal — always follow the law and TIH’s code of ethics.</div>';
  var LAB = '<div class="study-callout"><strong>🧪 Lab guide:</strong> practise this in your isolated lab (VirtualBox/VMware with Kali/Ubuntu, plus Python). Print → Save as PDF to keep the notes and lab guide offline.</div>';

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'AI & cybersecurity skills';
    var focus = position % 2 ? 'clear concepts, real-world context and safe, hands-on practice' : 'understanding the principle, applying it as a defender and documenting your findings';
    var showEthics = /ethical|websec|aidetect|aisec|forensics|soc|python/.test(skill);
    var showLab = /linux|python|websec|ethical|aidetect|forensics|soc/.test(skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>AI &amp; Cybersecurity · ' + esc(moduleTitle) + '</strong><span>Defensive &amp; ethical</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two practice steps before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means and why it matters for defenders.</li>' +
      '<li>See how AI and security tools use it to <strong>protect</strong> systems — and how attackers abuse the gap it closes.</li>' +
      '<li>Practise safely in your authorized lab and record what you learn.</li></ul>' +
      '<h4>Practice steps</h4><ol>' +
      '<li><strong>Step 1:</strong> Reproduce the concept for <em>' + esc(name) + '</em> in your isolated lab or with an AI assistant.</li>' +
      '<li><strong>Step 2:</strong> Write a short note on how to detect, prevent or remediate the issue as a defender.</li></ol>' +
      (showEthics ? ETHICS : '') +
      (showLab ? LAB : '') +
      '<p><strong>Printable notes:</strong> use your browser’s Print → Save as PDF for an offline copy.</p>' +
      '<p><strong>Module connection:</strong> part of <em>' + esc(moduleTitle) + '</em> on your path to AI-powered cybersecurity skills.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on AI-security project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>A practical, defensive project. Complete it only in your own or an explicitly authorized lab environment, then document your work for your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Plan the scope and confirm authorization (in the lab, your own systems).</li><li>Carry out the assessment/workflow using the tools, Python and AI methods from the course.</li><li>Write a clear report: findings, risk and remediation — the real deliverable.</li></ol>' +
      ETHICS + LAB +
      '<p><strong>Deliverable:</strong> a written security report/workflow added to your portfolio (with lab evidence).</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The primary aim of cybersecurity is to:', opts: ['Break into systems', 'Protect the confidentiality, integrity and availability of information', 'Sell antivirus', 'Avoid computers'], correct: 1, exp: 'Cybersecurity defends the CIA of information and systems.' },
      { q: 'AI helps cybersecurity mainly by:', opts: ['Replacing all analysts', 'Detecting patterns, anomalies and threats at scale', 'Deleting logs', 'Ignoring alerts'], correct: 1, exp: 'AI augments defenders by spotting patterns and anomalies fast.' },
      { q: 'Practical security exercises should be performed:', opts: ['On any system', 'Only on systems you own or are authorized to test', 'On a bank', 'On a stranger’s PC'], correct: 1, exp: 'Only test authorized systems — it is a legal requirement.' },
      { q: 'A defender’s most valuable habit is to:', opts: ['Ignore updates', 'Patch, monitor and document continuously', 'Disable logging', 'Share passwords'], correct: 1, exp: 'Patching, monitoring and documentation are core defensive practices.' },
      { q: 'Security awareness reduces risk by:', opts: ['Adding malware', 'Helping people recognise threats like phishing', 'Removing firewalls', 'Sharing credentials'], correct: 1, exp: 'People are a key layer; awareness reduces human-error risk.' },
      { q: 'Responsible AI use in security means:', opts: ['Trusting AI output blindly', 'Verifying AI output and protecting data/privacy', 'Sharing secrets with AI', 'Skipping human review'], correct: 1, exp: 'AI assists, but humans must verify and protect sensitive data.' }
    ],
    fundamentals: [
      { q: 'The CIA triad stands for:', opts: ['Confidentiality, Integrity, Availability', 'Control, Identity, Access', 'Cipher, Integrity, Auth', 'Cloud, Internet, Apps'], correct: 0, exp: 'CIA = Confidentiality, Integrity, Availability.' },
      { q: 'Authentication answers:', opts: ['What can you do?', 'Who are you?', 'Where are you?', 'When is it?'], correct: 1, exp: 'Authentication verifies identity; authorization sets permissions.' },
      { q: 'Multi-factor authentication adds security by:', opts: ['Using one password', 'Requiring more than one type of proof', 'Removing passwords', 'Sharing codes'], correct: 1, exp: 'MFA combines factors (know/have/are) to resist theft.' },
      { q: 'Encryption protects data by:', opts: ['Deleting it', 'Making it unreadable without a key', 'Speeding disks', 'Styling it'], correct: 1, exp: 'Encryption protects confidentiality using keys.' },
      { q: 'Least privilege means:', opts: ['Everyone is admin', 'Users get only the access they need', 'No access controls', 'All data is public'], correct: 1, exp: 'Least privilege limits access to the minimum required.' },
      { q: 'A firewall is used to:', opts: ['Speed up video', 'Filter/control network traffic by rules', 'Store passwords', 'Design UI'], correct: 1, exp: 'Firewalls allow/deny traffic based on rules.' }
    ],
    network: [
      { q: 'An IP address is used to:', opts: ['Style a page', 'Identify a device on a network', 'Store files', 'Encrypt data'], correct: 1, exp: 'IP addresses identify devices for routing traffic.' },
      { q: 'DNS translates:', opts: ['IP to MAC', 'Domain names to IP addresses', 'Files to folders', 'Text to images'], correct: 1, exp: 'DNS resolves human names to IP addresses.' },
      { q: 'A port identifies:', opts: ['A physical cable only', 'A specific service/application on a host', 'A password', 'A user'], correct: 1, exp: 'Ports map traffic to services (e.g. 80/443 for web).' },
      { q: 'TCP/IP is:', opts: ['A word processor', 'The core protocol suite of the internet', 'A firewall brand', 'A database'], correct: 1, exp: 'TCP/IP is the foundational internet protocol suite.' },
      { q: 'A MAC address is:', opts: ['A domain name', 'A hardware address of a network interface', 'An IP', 'A password'], correct: 1, exp: 'MAC addresses identify network hardware on a LAN.' },
      { q: 'DHCP is used to:', opts: ['Encrypt disks', 'Automatically assign IP addresses', 'Host websites', 'Scan ports'], correct: 1, exp: 'DHCP hands out IP configuration to devices automatically.' }
    ],
    linux: [
      { q: 'In Linux, file permissions are shown as:', opts: ['rwx for user/group/others', 'Only numbers 1-2', 'Colours', 'Fonts'], correct: 0, exp: 'Permissions are read/write/execute for user, group, others.' },
      { q: 'The command to list files is:', opts: ['ls', 'go', 'open', 'run'], correct: 0, exp: 'ls lists directory contents.' },
      { q: 'The Linux superuser is:', opts: ['guest', 'root', 'admin2', 'user0'], correct: 1, exp: 'root is the all-powerful superuser account.' },
      { q: 'chmod is used to:', opts: ['Change file permissions', 'Delete files', 'List processes', 'Reboot'], correct: 0, exp: 'chmod changes permission bits on files.' },
      { q: 'A package manager (e.g. apt) is used to:', opts: ['Edit photos', 'Install/update/remove software', 'Browse the web', 'Encrypt disks'], correct: 1, exp: 'Package managers handle software installation and updates.' },
      { q: 'Running a security VM (Kali/Ubuntu) gives you:', opts: ['A risky production box', 'A safe, isolated lab to practise', 'A public server', 'A bank system'], correct: 1, exp: 'VMs create safe, isolated labs for authorized practice.' }
    ],
    ethical: [
      { q: 'The first phase of ethical hacking is usually:', opts: ['Reporting', 'Reconnaissance/information gathering', 'Cleanup', 'Payment'], correct: 1, exp: 'You gather information first, within authorized scope.' },
      { q: 'Before any security testing you must have:', opts: ['Nothing', 'Written authorization and defined scope', 'A new laptop', 'A password list'], correct: 1, exp: 'Authorization and scope are mandatory legal requirements.' },
      { q: 'Vulnerability scanning aims to:', opts: ['Cause damage', 'Identify weaknesses so they can be fixed', 'Steal data', 'Delete logs'], correct: 1, exp: 'Scanning finds weaknesses for remediation.' },
      { q: 'The deliverable of an authorized assessment is:', opts: ['Damage', 'A clear report of findings and remediation', 'Stolen data', 'Nothing'], correct: 1, exp: 'Ethical testing produces a remediation-focused report.' },
      { q: 'If you find a serious vulnerability you should:', opts: ['Exploit it publicly', 'Report it responsibly to the owner', 'Sell it', 'Ignore it'], correct: 1, exp: 'Responsible disclosure to the owner is the ethical path.' },
      { q: 'Password security testing (authorized) checks:', opts: ['Nothing useful', 'Password strength and policy weaknesses', 'The keyboard colour', 'The monitor'], correct: 1, exp: 'It audits password strength in authorized assessments.' }
    ],
    websec: [
      { q: 'SQL injection is prevented mainly by:', opts: ['Trusting all input', 'Parameterised queries and input validation', 'Disabling the database', 'Hiding the URL'], correct: 1, exp: 'Parameterised queries and validation stop SQLi.' },
      { q: 'Cross-Site Scripting (XSS) is mitigated by:', opts: ['Echoing raw input', 'Encoding output and validating input', 'Removing HTTPS', 'Sharing cookies'], correct: 1, exp: 'Output encoding and input validation prevent XSS.' },
      { q: 'HTTPS provides:', opts: ['Slower pages', 'Encrypted, authenticated web traffic', 'Free hosting', 'A logo'], correct: 1, exp: 'HTTPS (TLS) encrypts and authenticates web traffic.' },
      { q: 'The OWASP Top 10 is:', opts: ['A game', 'A list of the most critical web app risks', 'A firewall', 'A browser'], correct: 1, exp: 'OWASP Top 10 catalogues common critical web risks.' },
      { q: 'Session security is improved by:', opts: ['Never expiring sessions', 'Secure, HttpOnly cookies and timeouts', 'Sharing session IDs', 'Using HTTP'], correct: 1, exp: 'Secure/HttpOnly cookies and timeouts protect sessions.' },
      { q: 'Web security testing must be done:', opts: ['On any site', 'Only on sites you own or are authorized to test', 'Secretly', 'For illegal profit'], correct: 1, exp: 'Only test authorized targets — a legal requirement.' }
    ],
    python: [
      { q: 'Python is popular in security because it is:', opts: ['Hard to read', 'Simple and great for automation and scripting', 'Only for games', 'Not usable'], correct: 1, exp: 'Python is readable and excellent for security automation.' },
      { q: 'A Python variable is:', opts: ['A named store for a value', 'A firewall', 'A network cable', 'A password'], correct: 0, exp: 'Variables hold data your program works with.' },
      { q: 'A loop lets you:', opts: ['Run code repeatedly', 'Delete Python', 'Encrypt disks', 'Style pages'], correct: 0, exp: 'Loops repeat actions, e.g. over log lines.' },
      { q: 'A function is used to:', opts: ['Group reusable code', 'Format a disk', 'Send phishing', 'Draw logos'], correct: 0, exp: 'Functions package reusable logic.' },
      { q: 'Working with APIs lets a script:', opts: ['Do nothing', 'Send/receive data from services (e.g. threat feeds)', 'Break the law', 'Delete the OS'], correct: 1, exp: 'APIs let scripts integrate with security services.' },
      { q: 'A simple security tool in Python might:', opts: ['Cause harm', 'Automate a safe, authorized task like log parsing', 'Attack banks', 'Steal data'], correct: 1, exp: 'Build safe, authorized automation like log parsers.' }
    ],
    ai: [
      { q: 'Machine learning is:', opts: ['Hard-coded rules only', 'Systems that learn patterns from data', 'A firewall', 'A cable'], correct: 1, exp: 'ML learns patterns from data rather than fixed rules.' },
      { q: 'Generative AI (e.g. an LLM) can:', opts: ['Only delete files', 'Produce text/code from prompts', 'Replace all humans', 'Encrypt disks only'], correct: 1, exp: 'Generative AI produces content from prompts.' },
      { q: 'Prompt engineering is:', opts: ['Writing malware', 'Crafting effective instructions for an AI model', 'A firewall rule', 'A network scan'], correct: 1, exp: 'Prompt engineering improves the quality of AI output.' },
      { q: 'AI helps threat detection by:', opts: ['Ignoring logs', 'Spotting anomalies and patterns in large data', 'Deleting alerts', 'Disabling SIEM'], correct: 1, exp: 'AI surfaces anomalies/patterns across huge log volumes.' },
      { q: 'A key limitation of AI in security is:', opts: ['It is always right', 'It can be wrong, biased or manipulated (needs human review)', 'It never helps', 'It cannot read text'], correct: 1, exp: 'AI can err or be manipulated; humans must verify.' },
      { q: 'Prompt injection is a risk where:', opts: ['A firewall fails', 'Malicious input manipulates an AI system’s behaviour', 'A disk is full', 'A cable breaks'], correct: 1, exp: 'Prompt injection tricks an LLM via crafted input.' }
    ],
    aisec: [
      { q: 'AI-generated phishing is dangerous because it is:', opts: ['Always obvious', 'More convincing and scalable', 'Harmless', 'Slow'], correct: 1, exp: 'AI can craft convincing, large-scale phishing.' },
      { q: 'A deepfake is:', opts: ['A real photo', 'AI-generated fake media impersonating someone', 'A firewall', 'A password'], correct: 1, exp: 'Deepfakes are AI-synthesised fake audio/video/images.' },
      { q: 'Adversarial machine learning attacks:', opts: ['Help models', 'Manipulate inputs to fool a model', 'Encrypt disks', 'Speed training'], correct: 1, exp: 'Adversarial inputs are crafted to fool ML models.' },
      { q: 'Protecting AI data privacy means:', opts: ['Sharing all data', 'Not exposing sensitive data to/through AI', 'Ignoring policy', 'Public secrets'], correct: 1, exp: 'Guard sensitive data used with AI systems.' },
      { q: 'Securing AI applications includes:', opts: ['No controls', 'Input validation, access control and monitoring', 'Sharing keys', 'Disabling logs'], correct: 1, exp: 'AI apps need the same secure-engineering rigour.' },
      { q: 'Responsible AI requires:', opts: ['Blind trust', 'Human oversight, fairness and transparency', 'Hiding errors', 'No review'], correct: 1, exp: 'Responsible AI needs oversight, fairness, transparency.' }
    ],
    forensics: [
      { q: 'Chain of custody / evidence preservation ensures:', opts: ['Faster analysis', 'Evidence is documented and unaltered', 'Data is deleted', 'Logs are hidden'], correct: 1, exp: 'It keeps evidence admissible and trustworthy.' },
      { q: 'Incident response generally starts with:', opts: ['Recovery', 'Preparation and identification', 'Payment', 'Deleting logs'], correct: 1, exp: 'IR: prepare, identify, contain, eradicate, recover, learn.' },
      { q: 'Containment aims to:', opts: ['Spread the incident', 'Limit damage and stop the spread', 'Ignore it', 'Publish it'], correct: 1, exp: 'Containment isolates affected systems.' },
      { q: 'Security logs help responders:', opts: ['Design UI', 'Reconstruct what happened', 'Encrypt disks', 'Sell data'], correct: 1, exp: 'Logs reveal the timeline and scope of an incident.' },
      { q: 'An indicator of compromise (IOC) is:', opts: ['A UI colour', 'Evidence that a system may be breached', 'A password', 'A font'], correct: 1, exp: 'IOCs are artefacts signalling possible compromise.' },
      { q: 'An incident report should include:', opts: ['Nothing', 'What happened, impact and lessons learned', 'Only blame', 'Only the date'], correct: 1, exp: 'Reports capture cause, impact and improvements.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', netfund: 'network', fundamentals: 'fundamentals', linux: 'linux', ethical: 'ethical', websec: 'websec', python: 'python', aiintro: 'ai', aidetect: 'ai', soc: 'forensics', forensics: 'forensics', aisec: 'aisec', cloud: 'general', projects: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.network, BANK.linux, BANK.ethical, BANK.websec, BANK.python, BANK.ai, BANK.aisec, BANK.forensics);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Networking/i.test(name)) return 'network';
    if (/Linux/i.test(name)) return 'linux';
    if (/Fundamentals/i.test(name)) return 'fundamentals';
    if (/Ethical/i.test(name)) return 'ethical';
    if (/Python/i.test(name)) return 'python';
    if (/AI Security/i.test(name)) return 'aisec';
    if (/Threat Detection/i.test(name)) return 'ai';
    if (/Incident/i.test(name)) return 'forensics';
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
        var qid = 'aic-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your <strong>Build Real AI &amp; Cybersecurity Skills</strong> Certificate.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your certificate you must:</p><ul><li>Complete the lessons in Modules 1–13.</li><li>Complete the six real-world projects in Module 14.</li><li>Pass the skill assessments and the Final Practical Examination.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Remember: all practical work must be legal, ethical, and only on systems you own or are authorized to test.</p></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation/i.test(name);
        var count = big ? 20 : 8;
        var aid = 'aic-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'practical examination' : 'assessment') + ', then review every answer explanation to strengthen weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (type === 'projects') {
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
      var pqid = 'aic-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> review the notes and complete the two practice steps, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var tpl = COURSES_DB.cybersecurity || {};
  COURSES_DB['ai-cybersecurity'] = {
    id: 'ai-cybersecurity',
    title: 'Build Real AI & Cybersecurity Skills',
    shortDesc: 'Learn how Artificial Intelligence and Cybersecurity work together to protect computers, networks, applications, data and organizations. A 14-module program from beginner fundamentals to practical, AI-powered defensive security skills: networking, Linux, security fundamentals, ethical hacking (authorized labs), web app security, Python, AI for cybersecurity, AI-powered threat detection, SOC operations, digital forensics & incident response, AI security & emerging threats, cloud security, six real-world projects and a Certificate. Strictly defensive, legal and ethical.',
    category: 'Cybersecurity',
    icon: '🤖',
    gradient: 'linear-gradient(135deg,#0b3d91,#e31e24)',
    instructor: tpl.instructor || 'Samuel Tolbert',
    instructorTitle: tpl.instructorTitle || 'Founder & CEO, Tolbert Innovation Hub',
    instructorBio: tpl.instructorBio || 'Samuel Tolbert founded TIH to bring world-class digital education to Liberia and West Africa.',
    rating: 4.9,
    reviewCount: 0,
    students: 'TIH security learners',
    duration: '150h+',
    level: 'Beginner → Advanced',
    price: 'FREE',
    origPrice: '$200',
    isFree: true,
    badge: 'new',
    certId: 'TIH-2026-AICYBER-0001',
    learn: [
      'Understand how AI and cybersecurity work together to defend systems',
      'Master computer, networking, Linux and security fundamentals',
      'Practise ethical, authorized security testing and web app security',
      'Use Python to automate safe, authorized security tasks',
      'Apply AI to log analysis, threat detection and phishing detection',
      'Run SOC workflows, digital forensics and incident response',
      'Recognise and defend against AI-powered threats (deepfakes, prompt injection)',
      'Secure cloud and AI applications and build a portfolio for entry-level roles'
    ],
    requirements: [
      'A computer able to run virtual machines (VirtualBox/VMware)',
      'No prior AI or security experience — we start from the basics',
      'A commitment to legal, ethical, authorized-lab-only practice'
    ],
    about: [
      'This program teaches how Artificial Intelligence and Cybersecurity reinforce each other — using AI to detect threats faster, and securing AI systems against new kinds of attack.',
      'It is strictly defensive, legal and ethical: it teaches concepts, secure configuration, detection and remediation, with all hands-on work done only in your own or an explicitly authorized lab.',
      'You will use Linux (Kali/Ubuntu), Python, common security tooling and AI assistants, finishing with six real-world projects, a Final Practical Examination and — on success — a Build Real AI & Cybersecurity Skills Certificate.'
    ],
    modules: modules,
    quizzes: quizzes,
    _aicyberBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT['ai-cybersecurity'] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[AICYBER] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
