/* TIH Complete Cybersecurity Fundamentals & Ethical Hacking Program.
   Rebuilds COURSES_DB.cybersecurity into the full 20-module program taking a
   complete beginner to entry-level cybersecurity professional. The course is
   strictly defensive, legal and ethical: it teaches concepts, secure
   configuration and authorized-lab practice — never operational attack
   instructions. Every content lesson has a video + printable notes; project
   lessons carry lab briefs. Modelled on android-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.cybersecurity || COURSES_DB.cybersecurity._cyberFullBuilt) return;

  var V = ['4lwiQ5hXwCo', 'ltBWJIhcjpA', 'kb_scuDUHls', 'wX75Z-4MEoM', 'HPDgPg4aWqs', 'AwEZP2KQPJ8', '9DrnMjs5UVA', 'x43N_p0QGXU', 'Jzr0Jdnq_EI', 'Is2RcF0FJL4', 'V7qVZD1z9pA', 'pOfCmL1YRIQ', 'Qt9lhzFhW_c', '4PJPWC8qWG0', 'cEb79PGWCL8', 'rEnJYNkUde0', 'v7BNtpw53AA', '3Kq1MIfTWCE'];
  var VIDEOS = {
    orientation: ['HZzXbxajz80'],
    netfund: ['k9ZigsW9il0'],
    fundamentals: ['aRbKFCY4tjE'],
    linux: ['IkuPKJmhTi4'],
    netsec: ['k-k1cfIOLnQ'],
    threats: ['gNEmteNwfXc'],
    vuln: ['hIbkwnOteTc'],
    ethical: ['9DrnMjs5UVA'],
    websec: ['pScXZaUnRYA'],
    wireless: ['tyEqHhM1pjQ'],
    crypto: ['2oXKjPwBSUk'],
    cloud: ['lEvKQR1E8IE'],
    forensics: ['X50Qkm9-d8M'],
    secops: ['UdTM8NW9nBI'],
    tools: ['AoFo7wGkEro'],
    seccode: ['p34y1wm4Ul0'],
    career: ['ReU50qbZdfE'],
    projects: ['2pOAzLVtSl8'],
    capstone: ['2pOAzLVtSl8'],
    assessment: ['2pOAzLVtSl8']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Cybersecurity?', 'Career Opportunities in Cybersecurity', 'Types of Cybersecurity Roles', 'Ethical Hacking vs. Malicious Hacking', 'Cybersecurity Ethics and Laws', 'Setting Up a Safe Lab Environment', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Computer & Networking Fundamentals', '🖧', 'netfund', 'content', ['Computer Hardware Basics', 'Operating Systems', 'Windows Fundamentals', 'Linux Fundamentals', 'Networking Basics', 'IP Addresses', 'MAC Addresses', 'DNS', 'Routers and Switches', 'Common Network Services']],
    [3, 'Cybersecurity Fundamentals', '🛡️', 'fundamentals', 'content', ['CIA Triad', 'Authentication', 'Authorization', 'Access Control', 'Security Policies', 'Risk Management', 'Threats and Vulnerabilities', 'Security Controls', 'Cybersecurity Frameworks', 'Security Best Practices']],
    [4, 'Linux for Cybersecurity', '🐧', 'linux', 'content', ['Installing Linux', 'Linux File System', 'Terminal Commands', 'Managing Files', 'User Management', 'Permissions', 'Shell Scripting Basics', 'Package Management', 'Networking Commands', 'Linux Security']],
    [5, 'Network Security', '🌐', 'netsec', 'content', ['Firewalls', 'VPNs', 'Network Segmentation', 'Secure Wi-Fi', 'Intrusion Detection Systems (IDS)', 'Intrusion Prevention Systems (IPS)', 'Packet Analysis', 'Network Monitoring', 'Securing Home and Business Networks', 'Network Security Best Practices']],
    [6, 'Common Cyber Threats', '⚠️', 'threats', 'content', ['Malware', 'Viruses', 'Worms', 'Trojans', 'Ransomware', 'Spyware', 'Phishing', 'Social Engineering', 'Insider Threats', 'Denial-of-Service (DoS) Attacks']],
    [7, 'Vulnerability Assessment', '🔍', 'vuln', 'content', ['Vulnerability Management', 'Security Scanning', 'Identifying Weaknesses', 'Risk Prioritization', 'Reporting Vulnerabilities', 'Patch Management', 'Secure Configurations', 'Lab Exercises']],
    [8, 'Ethical Hacking Fundamentals', '🎯', 'ethical', 'content', ['Ethical Hacking Methodology', 'Reconnaissance', 'Information Gathering', 'Scanning Basics', 'Enumeration', 'Password Security', 'Security Testing Process', 'Documentation and Reporting']],
    [9, 'Web Application Security', '🕸️', 'websec', 'content', ['Website Security Basics', 'Common Web Vulnerabilities', 'SQL Injection (Concepts)', 'Cross-Site Scripting (XSS) (Concepts)', 'Cross-Site Request Forgery (CSRF)', 'Authentication Security', 'Session Security', 'Secure Coding Principles', 'Web Security Testing Basics', 'Web Security Lab']],
    [10, 'Wireless Security', '📶', 'wireless', 'content', ['Wi-Fi Standards', 'Wireless Encryption', 'Wireless Threats', 'Securing Wireless Networks', 'Bluetooth Security', 'Mobile Device Security', 'VPN Configuration', 'Wireless Security Assessment']],
    [11, 'Cryptography', '🔑', 'crypto', 'content', ['Introduction to Cryptography', 'Encryption', 'Decryption', 'Hashing', 'Digital Signatures', 'SSL/TLS', 'Public Key Infrastructure (PKI)', 'Secure Communication']],
    [12, 'Cloud & Endpoint Security', '☁️', 'cloud', 'content', ['Cloud Computing Basics', 'Cloud Security', 'Endpoint Protection', 'Antivirus & EDR', 'Device Hardening', 'Data Backup', 'Disaster Recovery', 'Business Continuity']],
    [13, 'Digital Forensics & Incident Response', '🔬', 'forensics', 'content', ['Introduction to Digital Forensics', 'Evidence Collection', 'Chain of Custody', 'Log Analysis', 'Incident Response Process', 'Containment', 'Recovery', 'Post-Incident Reporting']],
    [14, 'Security Operations', '🖥️', 'secops', 'content', ['Security Monitoring', 'Security Information and Event Management (SIEM)', 'Threat Intelligence', 'Vulnerability Reporting', 'Security Audits', 'Compliance Basics', 'Security Documentation', 'Security Awareness Training']],
    [15, 'Cybersecurity Tools', '🧰', 'tools', 'content', ['Wireshark', 'Nmap', 'Burp Suite (Community Edition)', 'OWASP ZAP', 'Metasploit (Introduction)', 'OpenVAS/Greenbone', 'John the Ripper (Password Auditing)', 'Kali Linux Overview', 'VirtualBox', 'VMware Workstation Player']],
    [16, 'Secure Coding & AI in Cybersecurity', '🤖', 'seccode', 'content', ['Secure Coding Principles', 'Common Coding Vulnerabilities', 'AI for Threat Detection', 'Using AI for Security Analysis', 'Automation in Cybersecurity', 'Responsible AI Use', 'Secure Software Development Lifecycle (SSDLC)', 'DevSecOps Basics']],
    [17, 'Career Development', '💼', 'career', 'content', ['Building a Cybersecurity Portfolio', 'Writing Security Reports', 'Creating a Resume', 'GitHub for Security Projects', 'Preparing for Interviews', 'Freelancing Opportunities', 'Professional Certifications', 'Career Roadmap']],
    [18, 'Hands-On Security Projects', '🏗️', 'projects', 'projects', ['Home Network Security Assessment', 'Firewall Configuration', 'Linux Hardening', 'Website Security Review', 'Vulnerability Assessment Project', 'Phishing Awareness Campaign', 'Security Audit Report', 'Incident Response Simulation', 'Risk Assessment Project', 'Security Dashboard Project']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'Threat Assessment', 'Security Design', 'Vulnerability Assessment', 'Risk Mitigation Plan', 'Documentation', 'Final Presentation', 'Project Review']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Networking Assessment', 'Linux Assessment', 'Cybersecurity Fundamentals Assessment', 'Ethical Hacking Assessment', 'Cryptography Assessment', 'Security Tools Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Campaign|Simulation|Configuration|Hardening|Review|Report)$/.test(name.trim()); }

  var skillLabel = { orientation: 'cybersecurity foundations', netfund: 'computer & networking fundamentals', fundamentals: 'core security principles', linux: 'Linux for security', netsec: 'network security', threats: 'understanding cyber threats', vuln: 'vulnerability assessment', ethical: 'ethical hacking fundamentals', websec: 'web application security', wireless: 'wireless security', crypto: 'cryptography', cloud: 'cloud & endpoint security', forensics: 'digital forensics & incident response', secops: 'security operations', tools: 'cybersecurity tools', seccode: 'secure coding & AI in security', career: 'cybersecurity careers', projects: 'applied security projects', capstone: 'your capstone project', assessment: 'your skills' };

  var ETHICS = '<div class="study-callout"><strong>⚖️ Ethical &amp; legal use:</strong> only ever test systems you own or are explicitly authorized in writing to test. This course is for <strong>defensive, legal and authorized</strong> use in a safe lab. Unauthorized access or attacks are illegal — always follow the law and TIH’s code of ethics.</div>';
  var LAB = '<div class="study-callout"><strong>🧪 Lab guide:</strong> practise this in your isolated lab (VirtualBox/VMware with Kali/Ubuntu). Download the lab guide and practice files, and Print → Save as PDF to keep them offline.</div>';

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'cybersecurity skills';
    var focus = position % 2 ? 'clear concepts, real-world context and safe, hands-on lab practice' : 'understanding the principle, applying secure configuration and documenting your findings';
    var showEthics = /ethical|websec|threats|vuln|tools|wireless|netsec/.test(skill);
    var showLab = /linux|tools|vuln|websec|netsec|forensics|wireless/.test(skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Cybersecurity · ' + esc(moduleTitle) + '</strong><span>Defensive &amp; ethical</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two lab/exercise steps before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means and why it matters for defenders.</li>' +
      '<li>Learn how it is used to <strong>protect</strong> systems, and how attackers abuse the gap it closes.</li>' +
      '<li>Practise safely in your authorized lab and record what you learn.</li></ul>' +
      '<h4>Lab / exercise steps</h4><ol>' +
      '<li><strong>Step 1:</strong> Reproduce the concept for <em>' + esc(name) + '</em> in your isolated lab environment.</li>' +
      '<li><strong>Step 2:</strong> Write a short note on how to detect, prevent or remediate the issue as a defender.</li></ol>' +
      (showEthics ? ETHICS : '') +
      (showLab ? LAB : '') +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy of these notes and lab guide.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to an entry-level cybersecurity role.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on security project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical, defensive project. Complete it only in your own or an explicitly authorized lab environment, then document your work for your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Plan the scope and get/confirm authorization (in the lab this is your own systems).</li><li>Carry out the assessment/configuration using the tools and methods from the course.</li><li>Write a clear report: findings, risk, and how to remediate — this is the real deliverable.</li></ol>' +
      ETHICS + LAB +
      '<p><strong>Deliverable:</strong> A written security report/config added to your portfolio (with the lab evidence).</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The primary aim of cybersecurity is to:', opts: ['Break into systems', 'Protect the confidentiality, integrity and availability of information', 'Sell antivirus', 'Avoid computers'], correct: 1, exp: 'Cybersecurity defends the CIA of information and systems.' },
      { q: 'Ethical hacking must always be:', opts: ['Done on any system', 'Authorized in writing and legal', 'Kept secret from owners', 'Used to cause damage'], correct: 1, exp: 'Ethical hacking requires explicit authorization and legality.' },
      { q: 'A safe way to practise security skills is in:', opts: ['Someone else’s network', 'An isolated lab you own or are authorized to use', 'A bank’s systems', 'A random website'], correct: 1, exp: 'Practise only in isolated, authorized lab environments.' },
      { q: 'The difference between ethical and malicious hacking is mainly:', opts: ['The tools used', 'Authorization, intent and legality', 'The operating system', 'The time of day'], correct: 1, exp: 'Ethical hackers have permission and lawful, defensive intent.' },
      { q: 'A defender’s most valuable habit is to:', opts: ['Ignore updates', 'Patch, monitor and document continuously', 'Disable logging', 'Share passwords'], correct: 1, exp: 'Patching, monitoring and documentation are core defensive practices.' },
      { q: 'Security awareness training reduces risk by:', opts: ['Adding malware', 'Helping people recognise threats like phishing', 'Removing firewalls', 'Sharing credentials'], correct: 1, exp: 'People are a key layer; awareness reduces human-error risk.' }
    ],
    fundamentals: [
      { q: 'The CIA triad stands for:', opts: ['Confidentiality, Integrity, Availability', 'Control, Identity, Access', 'Cipher, Integrity, Auth', 'Cloud, Internet, Apps'], correct: 0, exp: 'CIA = Confidentiality, Integrity, Availability.' },
      { q: 'Authentication answers the question:', opts: ['What can you do?', 'Who are you?', 'Where are you?', 'When is it?'], correct: 1, exp: 'Authentication verifies identity; authorization sets permissions.' },
      { q: 'Authorization determines:', opts: ['Your identity', 'What an authenticated user is allowed to do', 'The network speed', 'The OS version'], correct: 1, exp: 'Authorization controls access rights after authentication.' },
      { q: 'Risk is commonly a function of:', opts: ['Colour and size', 'Threat, vulnerability and impact', 'Only cost', 'Only time'], correct: 1, exp: 'Risk considers threats, vulnerabilities and potential impact.' },
      { q: 'The principle of least privilege means:', opts: ['Everyone is admin', 'Users get only the access they need', 'No access controls', 'All data is public'], correct: 1, exp: 'Least privilege limits access to the minimum required.' },
      { q: 'A security control is:', opts: ['A type of malware', 'A safeguard that reduces risk', 'A password only', 'A network cable'], correct: 1, exp: 'Controls (technical/administrative/physical) reduce risk.' }
    ],
    network: [
      { q: 'An IP address is used to:', opts: ['Style a page', 'Identify a device on a network', 'Store files', 'Encrypt data'], correct: 1, exp: 'IP addresses identify devices for routing traffic.' },
      { q: 'A firewall is used to:', opts: ['Speed up video', 'Filter/control network traffic by rules', 'Store passwords', 'Design UI'], correct: 1, exp: 'Firewalls allow/deny traffic based on rules.' },
      { q: 'DNS translates:', opts: ['IP to MAC', 'Domain names to IP addresses', 'Files to folders', 'Text to images'], correct: 1, exp: 'DNS resolves human names to IP addresses.' },
      { q: 'A VPN provides:', opts: ['Faster CPU', 'An encrypted tunnel for network traffic', 'More storage', 'A logo'], correct: 1, exp: 'VPNs encrypt traffic between endpoints.' },
      { q: 'An IDS is designed to:', opts: ['Block all traffic', 'Detect and alert on suspicious activity', 'Speed up Wi-Fi', 'Store logs only'], correct: 1, exp: 'IDS detects/alerts; IPS can also block.' },
      { q: 'Network segmentation improves security by:', opts: ['Merging all devices', 'Isolating parts of the network to limit spread', 'Removing firewalls', 'Disabling VPNs'], correct: 1, exp: 'Segmentation limits lateral movement and blast radius.' }
    ],
    linux: [
      { q: 'In Linux, file permissions are typically shown as:', opts: ['rwx for user/group/others', 'Only numbers 1-2', 'Colours', 'Fonts'], correct: 0, exp: 'Permissions are read/write/execute for user, group, others.' },
      { q: 'The command to list files is:', opts: ['ls', 'go', 'open', 'run'], correct: 0, exp: 'ls lists directory contents.' },
      { q: 'The Linux superuser is:', opts: ['guest', 'root', 'admin2', 'user0'], correct: 1, exp: 'root is the all-powerful superuser account.' },
      { q: 'chmod is used to:', opts: ['Change file permissions', 'Delete files', 'List processes', 'Reboot'], correct: 0, exp: 'chmod changes permission bits on files.' },
      { q: 'A package manager (e.g. apt) is used to:', opts: ['Edit photos', 'Install/update/remove software', 'Browse the web', 'Encrypt disks'], correct: 1, exp: 'Package managers handle software installation and updates.' },
      { q: 'Running services with least privilege on Linux:', opts: ['Increases risk', 'Reduces the impact if a service is compromised', 'Is impossible', 'Disables the OS'], correct: 1, exp: 'Least privilege limits damage from a compromised service.' }
    ],
    threats: [
      { q: 'Ransomware typically:', opts: ['Speeds up a PC', 'Encrypts files and demands payment', 'Cleans malware', 'Backs up data'], correct: 1, exp: 'Ransomware encrypts data and extorts the victim.' },
      { q: 'Phishing is an attack that:', opts: ['Uses fishing rods', 'Tricks users into revealing info via fake messages', 'Speeds email', 'Encrypts disks'], correct: 1, exp: 'Phishing uses deceptive messages to steal information.' },
      { q: 'Social engineering targets:', opts: ['Only servers', 'People, by manipulation', 'Only routers', 'Only databases'], correct: 1, exp: 'Social engineering exploits human trust and behaviour.' },
      { q: 'A Trojan is malware that:', opts: ['Is always visible', 'Disguises itself as legitimate software', 'Only affects printers', 'Is a firewall'], correct: 1, exp: 'Trojans hide inside seemingly legitimate programs.' },
      { q: 'A DoS attack aims to:', opts: ['Steal passwords', 'Make a service unavailable', 'Encrypt files', 'Patch systems'], correct: 1, exp: 'Denial-of-Service overwhelms a service to disrupt availability.' },
      { q: 'The best defence against phishing is:', opts: ['Click every link', 'User awareness plus email filtering and MFA', 'Disable antivirus', 'Share passwords'], correct: 1, exp: 'Awareness, filtering and MFA reduce phishing success.' }
    ],
    ethical: [
      { q: 'The first phase of ethical hacking methodology is usually:', opts: ['Reporting', 'Reconnaissance/information gathering', 'Cleanup', 'Payment'], correct: 1, exp: 'You gather information before assessing (within authorized scope).' },
      { q: 'Before any security testing you must have:', opts: ['Nothing', 'Written authorization and defined scope', 'A new laptop', 'A password list'], correct: 1, exp: 'Authorization and scope are mandatory and legal requirements.' },
      { q: 'Enumeration in a security test means:', opts: ['Deleting data', 'Identifying systems, services and accounts (in scope)', 'Encrypting files', 'Sending phishing'], correct: 1, exp: 'Enumeration lists in-scope assets to assess.' },
      { q: 'The deliverable of an authorized assessment is:', opts: ['Damage', 'A clear report of findings and remediation', 'Stolen data', 'Nothing'], correct: 1, exp: 'Ethical testing produces a remediation-focused report.' },
      { q: 'Strong password security relies on:', opts: ['Short simple passwords', 'Length, uniqueness, hashing and MFA', 'Sticky notes', 'Sharing them'], correct: 1, exp: 'Long, unique passwords, hashing and MFA protect accounts.' },
      { q: 'If you find a serious vulnerability you should:', opts: ['Exploit it publicly', 'Report it responsibly to the owner', 'Sell it', 'Ignore it'], correct: 1, exp: 'Responsible disclosure to the owner is the ethical path.' }
    ],
    websec: [
      { q: 'SQL injection is prevented mainly by:', opts: ['Trusting all input', 'Parameterised queries and input validation', 'Disabling the database', 'Hiding the URL'], correct: 1, exp: 'Parameterised queries and validation stop SQLi.' },
      { q: 'Cross-Site Scripting (XSS) is mitigated by:', opts: ['Echoing raw input', 'Encoding output and validating input', 'Removing HTTPS', 'Sharing cookies'], correct: 1, exp: 'Output encoding and input validation prevent XSS.' },
      { q: 'CSRF protection commonly uses:', opts: ['No tokens', 'Anti-CSRF tokens and same-site cookies', 'Plain text', 'Open redirects'], correct: 1, exp: 'CSRF tokens and SameSite cookies defend against CSRF.' },
      { q: 'Session security is improved by:', opts: ['Never expiring sessions', 'Secure, HttpOnly cookies and timeouts', 'Sharing session IDs', 'Using HTTP'], correct: 1, exp: 'Secure/HttpOnly cookies and timeouts protect sessions.' },
      { q: 'Secure coding means you should:', opts: ['Trust all input', 'Validate input and follow secure principles', 'Hardcode secrets', 'Skip reviews'], correct: 1, exp: 'Validate input, avoid hardcoded secrets, review code.' },
      { q: 'Web security testing must be done:', opts: ['On any site', 'Only on sites you own or are authorized to test', 'Secretly', 'For profit illegally'], correct: 1, exp: 'Only test authorized targets — it is a legal requirement.' }
    ],
    crypto: [
      { q: 'Encryption is used to:', opts: ['Make data unreadable without a key', 'Speed up disks', 'Delete data', 'Design UI'], correct: 0, exp: 'Encryption protects confidentiality using keys.' },
      { q: 'Hashing is:', opts: ['Reversible encryption', 'A one-way function producing a fixed digest', 'A firewall', 'A backup'], correct: 1, exp: 'Hashing is one-way; used for integrity and password storage.' },
      { q: 'A digital signature provides:', opts: ['Only speed', 'Authenticity and integrity of a message', 'A password', 'A logo'], correct: 1, exp: 'Signatures verify sender authenticity and integrity.' },
      { q: 'SSL/TLS is used to:', opts: ['Slow the web', 'Encrypt data in transit (e.g. HTTPS)', 'Delete cookies', 'Store files'], correct: 1, exp: 'TLS secures data in transit between client and server.' },
      { q: 'PKI relies on:', opts: ['One shared password', 'Public/private key pairs and certificates', 'No keys', 'Plain text'], correct: 1, exp: 'PKI uses key pairs and certificate authorities.' },
      { q: 'Symmetric vs asymmetric: asymmetric uses:', opts: ['One key', 'A public and a private key', 'No keys', 'A hash only'], correct: 1, exp: 'Asymmetric crypto uses a public/private key pair.' }
    ],
    tools: [
      { q: 'Wireshark is used to:', opts: ['Edit videos', 'Capture and analyse network packets', 'Sign apps', 'Host sites'], correct: 1, exp: 'Wireshark is a packet analyser for troubleshooting/analysis.' },
      { q: 'Nmap is primarily a:', opts: ['Word processor', 'Network scanner (host/port discovery)', 'Database', 'Email client'], correct: 1, exp: 'Nmap discovers hosts, ports and services (authorized use).' },
      { q: 'Kali Linux is:', opts: ['A game', 'A Linux distro with security testing tools', 'A firewall only', 'A cloud provider'], correct: 1, exp: 'Kali bundles security/pentesting tools for authorized labs.' },
      { q: 'VirtualBox/VMware are used to:', opts: ['Encrypt files', 'Run isolated virtual machines for safe labs', 'Scan ports', 'Send email'], correct: 1, exp: 'Virtualisation creates safe, isolated lab environments.' },
      { q: 'These tools must be used:', opts: ['On any target', 'Only on systems you own or are authorized to test', 'Anonymously on banks', 'To cause harm'], correct: 1, exp: 'Authorization is mandatory and legally required.' },
      { q: 'John the Ripper is used (in authorized labs) for:', opts: ['Video editing', 'Password strength auditing', 'Hosting websites', 'Designing logos'], correct: 1, exp: 'It audits password strength in authorized assessments.' }
    ],
    forensics: [
      { q: 'Chain of custody ensures:', opts: ['Faster analysis', 'Evidence is documented and unaltered', 'Data is deleted', 'Logs are hidden'], correct: 1, exp: 'It records who handled evidence to keep it admissible.' },
      { q: 'The incident response process generally starts with:', opts: ['Recovery', 'Preparation and identification', 'Payment', 'Deleting logs'], correct: 1, exp: 'IR: preparation, identification, containment, eradication, recovery, lessons.' },
      { q: 'Containment in incident response aims to:', opts: ['Spread the incident', 'Limit the damage and stop the spread', 'Ignore it', 'Publish it'], correct: 1, exp: 'Containment isolates affected systems to limit impact.' },
      { q: 'Log analysis helps responders:', opts: ['Design UI', 'Reconstruct what happened during an incident', 'Encrypt disks', 'Sell data'], correct: 1, exp: 'Logs reveal the timeline and scope of an incident.' },
      { q: 'Evidence should be collected in a way that is:', opts: ['Careless', 'Documented, preserved and unaltered', 'Public', 'Deleted'], correct: 1, exp: 'Proper collection preserves integrity for investigation.' },
      { q: 'A post-incident report should include:', opts: ['Nothing', 'What happened, impact and lessons learned', 'Only blame', 'Only the date'], correct: 1, exp: 'Reports capture cause, impact and improvements.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', netfund: 'network', fundamentals: 'fundamentals', linux: 'linux', netsec: 'network', threats: 'threats', vuln: 'ethical', ethical: 'ethical', websec: 'websec', wireless: 'network', crypto: 'crypto', cloud: 'general', forensics: 'forensics', secops: 'general', tools: 'tools', seccode: 'websec', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.network, BANK.linux, BANK.threats, BANK.ethical, BANK.websec, BANK.crypto, BANK.tools, BANK.forensics);
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
    if (/Ethical Hacking/i.test(name)) return 'ethical';
    if (/Cryptography/i.test(name)) return 'crypto';
    if (/Tools/i.test(name)) return 'tools';
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
        var qid = 'cyb-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the hands-on security projects in Module 18 (10 real-world projects).</li><li>Complete the capstone in Module 19 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations and the Capstone Project Evaluation.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Remember: all practical work must be done legally, ethically, and only in your own or an authorized lab environment.</p></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation/i.test(name);
        var count = big ? (/Final|Capstone/i.test(name) ? 20 : 15) : 8;
        var aid = 'cyb-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
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
      var pqid = 'cyb-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two lab/exercise steps, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.cybersecurity;
  COURSES_DB.cybersecurity = {
    id: 'cybersecurity',
    title: 'Complete Cybersecurity Fundamentals & Ethical Hacking Program',
    shortDesc: 'A full 20-module program from complete beginner to entry-level cybersecurity professional: networking, Linux, security fundamentals, network & web & wireless security, threats, vulnerability assessment, ethical hacking (authorized labs), cryptography, cloud & endpoint, digital forensics & incident response, security operations, tools, secure coding & AI, 10 hands-on projects, a capstone and a Certificate of Completion. Strictly defensive, legal and ethical.',
    category: 'Cybersecurity',
    icon: ex.icon || '🔒',
    gradient: ex.gradient || 'linear-gradient(135deg,#7f1d1d,#e31e24)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH security learners',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$200',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-CYBER-0001',
    learn: [
      'Understand cybersecurity principles, the CIA triad and security controls',
      'Secure computers, networks, web apps and wireless — the defensive core',
      'Identify common threats (malware, phishing, social engineering, DoS)',
      'Perform authorized, ethical assessment and vulnerability management',
      'Apply cryptography, cloud/endpoint security, forensics and incident response',
      'Use industry tools in a safe lab and build a portfolio for entry-level roles'
    ],
    requirements: [
      'A computer able to run virtual machines (VirtualBox/VMware)',
      'No prior security experience required — we start from the basics',
      'A commitment to legal, ethical, authorized-lab-only practice'
    ],
    about: [
      'This is the complete TIH Cybersecurity Fundamentals & Ethical Hacking Program, rebuilt into twenty modules that take a complete beginner to entry-level professional level.',
      'The course is strictly defensive, legal and ethical: it teaches concepts, secure configuration, detection and remediation, with all hands-on work done only in your own or an explicitly authorized lab.',
      'Software & tools: Kali & Ubuntu Linux, Windows 11, VirtualBox/VMware, Wireshark, Nmap, Burp Suite CE, OWASP ZAP, Metasploit (authorized lab use), OpenVAS/Greenbone, John the Ripper, and Git & GitHub. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _cyberFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.cybersecurity = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[CYBER] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
