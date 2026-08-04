/* TIH Complete Computer Literacy Professional Certificate curriculum.
   Rebuilds COURSES_DB['computer-literacy'] into the full 20-module program
   taking a complete beginner to a confident digital user: computer basics,
   operating systems, files, typing, Microsoft Word/Excel/PowerPoint, internet,
   email, cloud, cybersecurity, digital productivity, AI, maintenance,
   workplace skills, practical projects, a capstone and a graduation module.
   Every content lesson has a video + printable notes; project lessons carry
   briefs and downloadable practice files. Modelled on complit builder. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'computer-literacy';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._clFullBuilt) return;

  var V = ['NARrnGza4kA', 'qIRRiM6Ibno', 'QTeX0Za2Ur8', 'k-EID5_2D9U', 'bSBLF66cCN0', 'iLMUrr0C_0c', 'PEB9jEXh0X4', 'NZlemQPeo0Q', 'EuWTrvT_YyY', 'Vl0H-qTclOg', 'DzPhjLPLLeg', 'CBPe_IFxJWc', 'ey4dXseAODE', 'dOZDQpulyCQ', 'CQFXF6bbeI8', '5kedqr2Ds-E', 'ZeY62YV_6rs', 'aEJ7QGrJshA', 'YCb2icQuv8Y', 'KR1WYQEehwc', 'KfScugUnSSM'];
  var VIDEOS = {
    orientation: [V[0], V[1]], hardware: [V[1], V[2]], os: [V[3], V[4]], files: [V[4], V[5]],
    typing: [V[5], V[6]], word: [V[6], V[7]], excel: [V[8], V[9]], ppt: [V[10], V[11]],
    internet: [V[12], V[13]], email: [V[13], V[14]], cloud: [V[15], V[16]], cyber: [V[16], V[17]],
    productivity: [V[17], V[18]], ai: [V[18], V[19]], maintenance: [V[19], V[20]], workplace: [V[0], V[7]],
    projects: [V[6], V[8]], capstone: [V[0], V[10]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Computer Literacy?', 'Importance of Digital Skills', 'Careers That Require Computer Skills', 'Course Roadmap', 'Setting Learning Goals', 'Computer Lab Rules', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Introduction to Computers', '🖥️', 'hardware', 'content', ['What is a Computer?', 'Types of Computers', 'Computer Hardware', 'Input Devices', 'Output Devices', 'Storage Devices', 'Software vs. Hardware', 'Operating Systems', 'Computer Boot Process', 'Computer Terminology']],
    [3, 'Operating System Basics', '🪟', 'os', 'content', ['Introduction to Windows', 'Desktop Navigation', 'Start Menu', 'Taskbar', 'File Explorer', 'Control Panel', 'System Settings', 'Installing & Uninstalling Programs', 'User Accounts', 'Windows Updates']],
    [4, 'File & Folder Management', '🗂️', 'files', 'content', ['Creating Files', 'Creating Folders', 'Copying Files', 'Moving Files', 'Renaming Files', 'Deleting Files', 'Restoring Deleted Files', 'Compressing Files (ZIP)', 'File Organization', 'Backup Strategies']],
    [5, 'Keyboard & Typing Skills', '⌨️', 'typing', 'content', ['Keyboard Layout', 'Home Row Technique', 'Typing Accuracy', 'Typing Speed Improvement', 'Keyboard Shortcuts', 'Numeric Keypad', 'Function Keys', 'Practice Exercises']],
    [6, 'Microsoft Word', '📝', 'word', 'content', ['Introduction to Microsoft Word', 'Creating Documents', 'Formatting Text', 'Paragraph Formatting', 'Page Layout', 'Tables', 'Images', 'Headers & Footers', 'Page Numbers', 'Spell Check', 'Mail Merge', 'Printing Documents', 'Word Project']],
    [7, 'Microsoft Excel', '📊', 'excel', 'content', ['Introduction to Excel', 'Worksheets & Workbooks', 'Data Entry', 'Cell Formatting', 'Basic Formulas', 'Functions (SUM, AVERAGE, MIN, MAX)', 'Charts', 'Sorting & Filtering', 'Printing Worksheets', 'Excel Project']],
    [8, 'Microsoft PowerPoint', '📽️', 'ppt', 'content', ['Introduction to PowerPoint', 'Creating Presentations', 'Slide Layouts', 'Themes', 'Images & Icons', 'SmartArt', 'Charts', 'Animations', 'Transitions', 'Presenting Slides', 'PowerPoint Project']],
    [9, 'Internet & Web Browsing', '🌐', 'internet', 'content', ['What is the Internet?', 'Web Browsers', 'Search Engines', 'Effective Online Searching', 'Downloading Files', 'Uploading Files', 'Browser Settings', 'Bookmarks', 'Safe Browsing', 'Internet Practice']],
    [10, 'Email & Online Communication', '✉️', 'email', 'content', ['Creating an Email Account', 'Sending Emails', 'Receiving Emails', 'Attachments', 'Email Etiquette', 'Calendar Basics', 'Video Conferencing', 'Online Meetings', 'Instant Messaging', 'Collaboration Tools']],
    [11, 'Cloud Computing & Online Storage', '☁️', 'cloud', 'content', ['What is Cloud Computing?', 'Google Drive', 'OneDrive', 'Dropbox', 'Uploading Files', 'Sharing Files', 'Collaborative Editing', 'Cloud Storage Security']],
    [12, 'Cybersecurity Basics', '🔒', 'cyber', 'content', ['Password Security', 'Two-Factor Authentication', 'Malware', 'Viruses', 'Phishing', 'Safe Downloads', 'Data Privacy', 'Device Security', 'Antivirus Software', 'Safe Internet Practices']],
    [13, 'Digital Productivity', '⚡', 'productivity', 'content', ['Time Management Apps', 'Google Workspace', 'Microsoft 365', 'Online Collaboration', 'Note-Taking Apps', 'Task Management', 'File Sharing', 'Digital Organization']],
    [14, 'AI & Emerging Technologies', '🤖', 'ai', 'content', ['Introduction to Artificial Intelligence', 'Using ChatGPT', 'AI Productivity Tools', 'AI for Writing', 'AI for Research', 'AI for Presentations', 'Responsible AI Use', 'Future Technology Trends']],
    [15, 'Basic Computer Maintenance', '🛠️', 'maintenance', 'content', ['Cleaning Your Computer', 'Software Updates', 'Installing Applications', 'Uninstalling Applications', 'Disk Cleanup', 'Storage Management', 'Basic Troubleshooting', 'Computer Performance Optimization']],
    [16, 'Professional Workplace Skills', '💼', 'workplace', 'content', ['Business Communication', 'Resume Writing', 'Job Application Preparation', 'Professional Email Writing', 'Office Etiquette', 'Workplace Collaboration', 'Time Management', 'Digital Professionalism']],
    [17, 'Practical Computer Projects', '🏗️', 'projects', 'projects', ['Create a Professional Letter', 'Build an Excel Budget', 'Design a PowerPoint Presentation', 'Create a Resume', 'Prepare an Invoice', 'Organize Digital Files', 'Research Project', 'Online Collaboration Project', 'Email Communication Exercise', 'Digital Portfolio']],
    [18, 'Career Development', '📈', 'workplace', 'content', ['Essential Digital Skills for Employment', 'Freelancing Opportunities', 'LinkedIn Basics', 'Building a Professional Portfolio', 'Interview Preparation', 'Workplace Technology', 'Continuous Learning', 'Career Planning']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'Word Document Creation', 'Excel Spreadsheet Development', 'PowerPoint Presentation', 'Online Research', 'Cloud File Sharing', 'Final Presentation', 'Portfolio Submission']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Computer Fundamentals Assessment', 'Microsoft Word Assessment', 'Microsoft Excel Assessment', 'Microsoft PowerPoint Assessment', 'Internet & Email Assessment', 'Cybersecurity Assessment', 'Midterm Examination', 'Final Examination', 'Practical Skills Assessment', 'Capstone Project Evaluation', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'computer literacy foundations', hardware: 'computer hardware & basics', os: 'the Windows operating system', files: 'file & folder management', typing: 'keyboard & typing skills', word: 'Microsoft Word', excel: 'Microsoft Excel', ppt: 'Microsoft PowerPoint', internet: 'internet & web browsing', email: 'email & online communication', cloud: 'cloud computing & storage', cyber: 'cybersecurity basics', productivity: 'digital productivity', ai: 'AI & emerging technologies', maintenance: 'computer maintenance', workplace: 'professional workplace skills', projects: 'practical computer projects', capstone: 'your capstone project', assessment: 'your skills' };

  var FILES = '<div class="study-callout"><strong>📎 Practice files:</strong> download the practice file/worksheet for this lesson, follow along on your own computer, then Print → Save as PDF to keep your notes offline.</div>';

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'computer skills';
    var focus = position % 2 ? 'hands-on practice, real examples and doing it yourself' : 'understanding the concept, following the steps and practising on a computer';
    var showFiles = /word|excel|ppt|typing|files|projects/.test(skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Computer Literacy · ' + esc(moduleTitle) + '</strong><span>Zero to confident</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the steps below, then complete the two practice exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and when you use it.</li>' +
      '<li>Follow the step-by-step method shown in the video.</li>' +
      '<li>Do it yourself on a computer — practice builds real confidence.</li></ul>' +
      (showFiles ? FILES : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real task for your school, work, business or home.</div>') +
      '<h4>Practice exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Follow the steps for <em>' + esc(name) + '</em> on your own computer.</li>' +
      '<li><strong>Exercise 2:</strong> Repeat it from memory and note one thing you found tricky.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a confident digital user.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Complete it on a real computer and save your work for your digital portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Open the right program (Word, Excel, PowerPoint, browser or email).</li><li>Create <em>' + esc(name) + '</em> step by step using the skills you have learned.</li><li>Save it, check it, and add the file to your digital portfolio folder.</li></ol>' +
      FILES +
      '<p><strong>Deliverable:</strong> A finished, saved file added to your digital portfolio.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Computer literacy means being able to:', opts: ['Build computers only', 'Use computers and digital tools confidently for real tasks', 'Only play games', 'Repair hardware only'], correct: 1, exp: 'It is the ability to use computers effectively for everyday and work tasks.' },
      { q: 'Digital skills are important because they:', opts: ['Are only for programmers', 'Are needed in education, business and most jobs today', 'Are outdated', 'Only matter for gaming'], correct: 1, exp: 'Digital skills are essential across school, work and daily life.' },
      { q: 'The best way to learn computer skills is to:', opts: ['Only watch videos', 'Practise hands-on on a real computer', 'Memorise menus', 'Avoid mistakes'], correct: 1, exp: 'Hands-on practice builds real confidence and skill.' },
      { q: 'A digital portfolio is:', opts: ['A paper file', 'A collection of your digital work to show your skills', 'A game', 'An email'], correct: 1, exp: 'It showcases the documents and projects you can produce.' },
      { q: 'Saving your work often prevents:', opts: ['Nothing', 'Losing your work if the computer closes or crashes', 'Faster typing', 'Better graphics'], correct: 1, exp: 'Regular saving protects against data loss.' },
      { q: 'The capstone project helps you:', opts: ['Skip learning', 'Apply all your skills to one real task', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone brings together everything you learned.' }
    ],
    hardware: [
      { q: 'A keyboard and mouse are examples of:', opts: ['Output devices', 'Input devices', 'Storage devices', 'Software'], correct: 1, exp: 'Input devices send data into the computer.' },
      { q: 'A monitor and printer are examples of:', opts: ['Input devices', 'Output devices', 'Storage devices', 'Networks'], correct: 1, exp: 'Output devices show or produce results.' },
      { q: 'Hardware refers to:', opts: ['Programs', 'The physical parts of a computer', 'The internet', 'Files'], correct: 1, exp: 'Hardware is the physical equipment; software is the programs.' },
      { q: 'Which is a storage device?', opts: ['Monitor', 'Hard drive / USB flash drive', 'Mouse', 'Speaker'], correct: 1, exp: 'Storage devices keep data (hard drive, SSD, USB).' },
      { q: 'The operating system is:', opts: ['A physical part', 'The main software that runs the computer', 'A printer', 'A website'], correct: 1, exp: 'The OS manages hardware and runs programs (e.g. Windows).' },
      { q: 'The CPU is often called the computer’s:', opts: ['Screen', 'Brain (it processes instructions)', 'Keyboard', 'Speaker'], correct: 1, exp: 'The CPU processes instructions — the "brain".' }
    ],
    os: [
      { q: 'In Windows, the File Explorer is used to:', opts: ['Browse the web', 'Manage files and folders', 'Send email', 'Edit photos only'], correct: 1, exp: 'File Explorer browses and manages files/folders.' },
      { q: 'The Taskbar usually shows:', opts: ['Only the time', 'Open programs and quick access icons', 'Only files', 'The BIOS'], correct: 1, exp: 'The taskbar shows running/pinned apps and the clock.' },
      { q: 'To find programs and settings you often use the:', opts: ['Recycle Bin', 'Start Menu', 'Printer', 'Webcam'], correct: 1, exp: 'The Start Menu launches apps and settings.' },
      { q: 'System settings let you:', opts: ['Only play music', 'Change how the computer works (display, sound, accounts)', 'Write essays', 'Nothing'], correct: 1, exp: 'Settings/Control Panel configure the system.' },
      { q: 'Windows updates are important because they:', opts: ['Slow the PC only', 'Improve security and fix problems', 'Delete files', 'Are optional and useless'], correct: 1, exp: 'Updates patch security holes and fix bugs.' },
      { q: 'A user account helps by:', opts: ['Sharing all data publicly', 'Keeping each person’s files and settings separate', 'Removing the OS', 'Disabling the mouse'], correct: 1, exp: 'Accounts separate users’ files and settings securely.' }
    ],
    files: [
      { q: 'A folder is used to:', opts: ['Delete files', 'Organize and group related files', 'Print', 'Browse the web'], correct: 1, exp: 'Folders organise files so you can find them.' },
      { q: 'Deleted files usually go first to the:', opts: ['Cloud', 'Recycle Bin (can be restored)', 'Printer', 'Internet'], correct: 1, exp: 'The Recycle Bin holds deleted files until emptied.' },
      { q: 'Compressing files (ZIP) is useful to:', opts: ['Make them bigger', 'Reduce size and bundle files together', 'Delete them', 'Print them'], correct: 1, exp: 'ZIP reduces size and groups files for sharing.' },
      { q: 'A backup is:', opts: ['A deleted file', 'A saved copy to protect against loss', 'A virus', 'A printer'], correct: 1, exp: 'Backups protect your data if something goes wrong.' },
      { q: 'Good file organization means:', opts: ['Everything on the desktop', 'Clear folders and consistent names', 'Random names', 'No folders'], correct: 1, exp: 'Structured folders and names make files easy to find.' },
      { q: 'To keep a copy and place a file elsewhere you:', opts: ['Delete it', 'Copy and paste it', 'Rename it only', 'Print it'], correct: 1, exp: 'Copy keeps the original and duplicates it elsewhere.' }
    ],
    word: [
      { q: 'Microsoft Word is used mainly for:', opts: ['Spreadsheets', 'Creating and formatting documents', 'Presentations', 'Databases'], correct: 1, exp: 'Word is a word processor for documents.' },
      { q: 'To make text bold you can press:', opts: ['Ctrl+B', 'Ctrl+P', 'Ctrl+S', 'Ctrl+Z'], correct: 0, exp: 'Ctrl+B toggles bold.' },
      { q: 'Spell check helps you:', opts: ['Print faster', 'Find and fix spelling mistakes', 'Add images', 'Save the file'], correct: 1, exp: 'Spell check flags likely spelling errors.' },
      { q: 'Mail Merge is used to:', opts: ['Delete emails', 'Create many personalised documents/letters from a list', 'Send one email', 'Format a chart'], correct: 1, exp: 'Mail Merge personalises documents for many recipients.' },
      { q: 'Headers and footers appear:', opts: ['In the middle', 'At the top and bottom of every page', 'Only page one', 'Never'], correct: 1, exp: 'They repeat at the top/bottom of pages.' },
      { q: 'To keep your document you should:', opts: ['Close without saving', 'Save it (Ctrl+S)', 'Delete it', 'Print only'], correct: 1, exp: 'Ctrl+S saves your work.' }
    ],
    excel: [
      { q: 'Microsoft Excel is used mainly for:', opts: ['Documents', 'Spreadsheets, data and calculations', 'Slides', 'Email'], correct: 1, exp: 'Excel handles data, tables and calculations.' },
      { q: 'A formula in Excel begins with:', opts: ['A letter', 'An equals sign (=)', 'A space', 'A comma'], correct: 1, exp: 'Formulas start with = , e.g. =A1+B1.' },
      { q: 'The SUM function is used to:', opts: ['Count words', 'Add up a range of numbers', 'Sort text', 'Print'], correct: 1, exp: '=SUM(A1:A10) adds the range.' },
      { q: 'The AVERAGE function returns the:', opts: ['Largest value', 'Mean of the numbers', 'Smallest value', 'Count'], correct: 1, exp: 'AVERAGE gives the arithmetic mean.' },
      { q: 'A cell reference like A1 means:', opts: ['Row A, column 1', 'Column A, row 1', 'A formula', 'A chart'], correct: 1, exp: 'Columns are letters, rows are numbers: A1 = column A, row 1.' },
      { q: 'Charts in Excel are used to:', opts: ['Hide data', 'Visualise data graphically', 'Delete data', 'Print faster'], correct: 1, exp: 'Charts turn numbers into visual insights.' }
    ],
    ppt: [
      { q: 'Microsoft PowerPoint is used to:', opts: ['Do calculations', 'Create presentations/slides', 'Write long documents', 'Send email'], correct: 1, exp: 'PowerPoint builds slide presentations.' },
      { q: 'A good slide should be:', opts: ['Full of text', 'Clear and visual with key points', 'All one colour', 'Blank'], correct: 1, exp: 'Slides work best with concise, visual content.' },
      { q: 'Transitions control:', opts: ['How text is spelled', 'How one slide changes to the next', 'The file size', 'The printer'], correct: 1, exp: 'Transitions animate the change between slides.' },
      { q: 'Animations are used to:', opts: ['Delete slides', 'Add movement to elements on a slide', 'Save the file', 'Print'], correct: 1, exp: 'Animations reveal or emphasise slide elements.' },
      { q: 'To start a slideshow you press:', opts: ['F5 (or Slide Show)', 'Ctrl+B', 'Delete', 'Ctrl+Z'], correct: 0, exp: 'F5 starts the presentation from the beginning.' },
      { q: 'SmartArt helps you:', opts: ['Do maths', 'Show ideas/processes as diagrams', 'Send email', 'Sort data'], correct: 1, exp: 'SmartArt turns lists into visual diagrams.' }
    ],
    internet: [
      { q: 'A web browser is used to:', opts: ['Do spreadsheets', 'Access and view websites', 'Print only', 'Edit photos'], correct: 1, exp: 'Browsers (Chrome, Edge) open websites.' },
      { q: 'A search engine (e.g. Google) helps you:', opts: ['Delete files', 'Find information online', 'Format documents', 'Send email only'], correct: 1, exp: 'Search engines find web pages matching your query.' },
      { q: 'Effective searching uses:', opts: ['Whole paragraphs', 'Specific keywords', 'Random letters', 'Only images'], correct: 1, exp: 'Focused keywords give better results.' },
      { q: 'Bookmarks let you:', opts: ['Delete websites', 'Save and quickly return to web pages', 'Print pages', 'Block sites'], correct: 1, exp: 'Bookmarks save pages for quick access.' },
      { q: 'Safe browsing means you:', opts: ['Click every link', 'Avoid suspicious sites and downloads', 'Share passwords', 'Ignore HTTPS'], correct: 1, exp: 'Be cautious with unknown links and downloads.' },
      { q: 'A secure website address starts with:', opts: ['http://', 'https:// (with a padlock)', 'ftp only', 'www only'], correct: 1, exp: 'HTTPS encrypts the connection (look for the padlock).' }
    ],
    email: [
      { q: 'To send a file with an email you use an:', opts: ['Attachment', 'Animation', 'Formula', 'Bookmark'], correct: 0, exp: 'Attachments send files along with the message.' },
      { q: 'Email etiquette includes:', opts: ['No subject line', 'A clear subject, greeting and polite tone', 'ALL CAPS', 'No signature ever'], correct: 1, exp: 'Clear, polite, well-structured emails are professional.' },
      { q: 'The "CC" field is used to:', opts: ['Hide recipients', 'Copy others on the email openly', 'Delete the email', 'Attach files'], correct: 1, exp: 'CC copies additional recipients visibly.' },
      { q: 'Video conferencing tools include:', opts: ['Excel', 'Zoom and Microsoft Teams', 'Notepad', 'Paint'], correct: 1, exp: 'Zoom/Teams host online meetings.' },
      { q: 'A professional email address looks like:', opts: ['coolguy123@', 'firstname.lastname@…', 'random letters', 'no name'], correct: 1, exp: 'Use your name for a professional impression.' },
      { q: 'Before sending an important email you should:', opts: ['Send immediately', 'Proofread it and check the recipient', 'Delete it', 'Add many colours'], correct: 1, exp: 'Check content and recipient before sending.' }
    ],
    cloud: [
      { q: 'Cloud computing lets you:', opts: ['Only work offline', 'Store and access files over the internet', 'Print only', 'Avoid the internet'], correct: 1, exp: 'The cloud stores data on internet servers you can access anywhere.' },
      { q: 'Google Drive and OneDrive are examples of:', opts: ['Browsers', 'Cloud storage services', 'Printers', 'Antivirus'], correct: 1, exp: 'They store files online.' },
      { q: 'Sharing a cloud file lets others:', opts: ['Nothing', 'View or edit it with a link/permission', 'Delete your PC', 'Print automatically'], correct: 1, exp: 'You control view/edit access via sharing settings.' },
      { q: 'Collaborative editing means:', opts: ['One person only', 'Several people editing the same file together', 'No editing', 'Offline only'], correct: 1, exp: 'Cloud docs allow real-time co-editing.' },
      { q: 'A benefit of the cloud is:', opts: ['Files lost if PC breaks', 'Access from any device and automatic backup', 'No security', 'No sharing'], correct: 1, exp: 'Cloud files are accessible anywhere and backed up.' },
      { q: 'To protect cloud files you should:', opts: ['Share your password', 'Use strong passwords and careful sharing', 'Make everything public', 'Disable login'], correct: 1, exp: 'Strong passwords and careful sharing keep cloud data safe.' }
    ],
    cyber: [
      { q: 'A strong password is:', opts: ['12345', 'Long, unique and hard to guess', 'Your name', 'password'], correct: 1, exp: 'Long, unique passwords resist guessing.' },
      { q: 'Two-factor authentication (2FA):', opts: ['Weakens security', 'Adds a second step to protect your login', 'Removes passwords', 'Is only for banks'], correct: 1, exp: '2FA adds a second verification step.' },
      { q: 'Phishing is:', opts: ['A sport', 'Fake messages trying to steal your information', 'A browser', 'A backup'], correct: 1, exp: 'Phishing tricks you into revealing data.' },
      { q: 'Antivirus software helps by:', opts: ['Deleting all files', 'Detecting and removing malware', 'Slowing the internet', 'Sending spam'], correct: 1, exp: 'Antivirus finds and removes malicious software.' },
      { q: 'You should download software only from:', opts: ['Any pop-up', 'Trusted, official sources', 'Random links', 'Email attachments from strangers'], correct: 1, exp: 'Official sources reduce malware risk.' },
      { q: 'Protecting data privacy means:', opts: ['Sharing everything', 'Being careful what personal info you share online', 'Posting passwords', 'Ignoring settings'], correct: 1, exp: 'Limit and control the personal data you share.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', hardware: 'hardware', os: 'os', files: 'files', typing: 'general', word: 'word', excel: 'excel', ppt: 'ppt', internet: 'internet', email: 'email', cloud: 'cloud', cyber: 'cyber', productivity: 'general', ai: 'general', maintenance: 'os', workplace: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.hardware, BANK.os, BANK.files, BANK.word, BANK.excel, BANK.ppt, BANK.internet, BANK.email, BANK.cloud, BANK.cyber);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Word/i.test(name)) return 'word';
    if (/Excel/i.test(name)) return 'excel';
    if (/PowerPoint/i.test(name)) return 'ppt';
    if (/Internet|Email/i.test(name)) return 'internet';
    if (/Cybersecurity/i.test(name)) return 'cyber';
    if (/Fundamentals|Computer/i.test(name)) return 'hardware';
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
        var qid = 'cl-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–18.</li><li>Complete the practical projects in Module 17 (10 real-world projects).</li><li>Complete the capstone in Module 19 and submit your digital portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Practical Skills Assessment and the Capstone Evaluation.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'cl-m' + num + '-a' + flat;
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
      var pqid = 'cl-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two practice exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Computer Literacy Professional Certificate',
    shortDesc: 'A full 20-module program from complete beginner to confident digital user: computer basics, Windows, files, typing, Microsoft Word/Excel/PowerPoint, internet, email, cloud, cybersecurity, digital productivity, AI, maintenance, workplace skills, 10 real-world projects, a capstone and a Certificate of Completion.',
    category: 'Computer Literacy',
    icon: ex.icon || '💻',
    gradient: ex.gradient || 'linear-gradient(135deg,#1e3a5f,#002868)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '140h+',
    level: 'Beginner → Confident',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$120',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-COMPLIT-0001',
    learn: [
      'Operate a computer and Windows confidently and manage files',
      'Type efficiently and use keyboard shortcuts',
      'Create documents, spreadsheets and presentations in Microsoft Office',
      'Browse the internet safely, use email and online communication tools',
      'Use cloud storage, protect your devices and apply cybersecurity basics',
      'Apply digital and AI tools, and build workplace-ready digital skills'
    ],
    requirements: [
      'No prior experience required — we start from the very basics',
      'Access to a computer (Windows recommended) to practise',
      'Willingness to practise each skill hands-on'
    ],
    about: [
      'This is the complete TIH Computer Literacy Professional Certificate, rebuilt into twenty modules that take you from your first day on a computer to confident digital work.',
      'Every content lesson has a video and printable notes with downloadable practice files; ten real-world projects and a capstone build a digital portfolio you can show employers.',
      'Software & tools: Microsoft Windows, Word, Excel, PowerPoint and Outlook, Google Chrome, Google Workspace, OneDrive, Zoom, Microsoft Teams and ChatGPT. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _clFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[COMPLIT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
