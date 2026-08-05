/* TIH Complete WASSCE Computer Science Preparation Course.
   Builds COURSES_DB['wassce-computer-science'] directly with the full 10-module
   WAEC Computer Science structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Computer Science syllabus. Modelled on
   wassce-mathematics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-computer-science';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceCompFull) return;

  // Vetted computing videos reused from the TIH Computer Literacy / AI /
  // Cybersecurity courses. Content, notes and quizzes are fully
  // Computer-Science-specific.
  var VIDEOS = {
    intro: ['5kedqr2Ds-E', 'CBPe_IFxJWc'],
    systems: ['CBPe_IFxJWc', 'CQFXF6bbeI8'],
    software: ['CQFXF6bbeI8', 'DzPhjLPLLeg'],
    data: ['DzPhjLPLLeg', 'EuWTrvT_YyY'],
    programming: ['EuWTrvT_YyY', 'KR1WYQEehwc'],
    database: ['KR1WYQEehwc', 'CQFXF6bbeI8'],
    networks: ['5kedqr2Ds-E', 'EuWTrvT_YyY'],
    cyber: ['3Kq1MIfTWCE', 'OA4UP4O1hz0'],
    practical: ['CBPe_IFxJWc', 'DzPhjLPLLeg'],
    final: ['5kedqr2Ds-E', 'KR1WYQEehwc']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Computer Science', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Computer Science Exam', 'Exam Structure & Marking Scheme', 'Introduction to Computer Science', 'History of Computers', 'Study Strategies']],
    [2, 'Computer Systems', '🖥️', 'systems', 'content', ['Computer Hardware', 'Input Devices', 'Output Devices', 'Storage Devices', 'Central Processing Unit (CPU)', 'Memory (RAM & ROM)', 'Computer Architecture', 'Computer Maintenance']],
    [3, 'Software & Operating Systems', '💿', 'software', 'content', ['System Software', 'Application Software', 'Operating Systems', 'File Management', 'Software Installation', 'Utility Programs', 'Open Source vs. Proprietary Software', 'Software Updates & Licensing']],
    [4, 'Data Representation & Number Systems', '🔢', 'data', 'content', ['Binary Number System', 'Decimal, Octal & Hexadecimal Systems', 'Binary Arithmetic', 'Data Measurement Units', 'Character Encoding (ASCII & Unicode)', 'Data Representation', 'Logic Gates', 'Boolean Algebra']],
    [5, 'Programming Fundamentals', '⌨️', 'programming', 'content', ['Introduction to Programming', 'Algorithms', 'Flowcharts', 'Pseudocode', 'Variables & Data Types', 'Operators', 'Conditional Statements', 'Loops', 'Functions', 'Debugging Basics']],
    [6, 'Databases & Information Management', '🗄️', 'database', 'content', ['Introduction to Databases', 'Database Concepts', 'Tables, Records & Fields', 'Primary & Foreign Keys', 'Data Entry', 'Queries', 'Data Security', 'Database Applications']],
    [7, 'Computer Networks & Internet', '🌐', 'networks', 'content', ['Networking Fundamentals', 'Types of Networks (LAN, MAN, WAN)', 'Internet Basics', 'Web Browsers', 'Email Communication', 'Cloud Computing', 'Internet Safety', 'Online Collaboration']],
    [8, 'Cybersecurity & Emerging Technologies', '🔐', 'cyber', 'content', ['Cybersecurity Fundamentals', 'Password Security', 'Malware & Viruses', 'Data Privacy', 'Ethical Computing', 'Artificial Intelligence', 'Robotics', 'Internet of Things (IoT)']],
    [9, 'Practical Computing & Examination Practice', '🧪', 'practical', 'content', ['Microsoft Office Applications', 'File & Folder Management', 'Basic Programming Practice', 'Internet Research Skills', 'Past WAEC Questions', 'Mock Practical Examination', 'Objective Test Practice', 'Theory Question Practice']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Computer Science Revision', 'Key Concepts Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Computer Science exam', systems: 'computer systems & hardware', software: 'software & operating systems', data: 'data representation & number systems', programming: 'programming fundamentals', database: 'databases & information management', networks: 'computer networks & the internet', cyber: 'cybersecurity & emerging technologies', practical: 'practical computing', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    systems: '<h4>📥 Guide: Computer Systems</h4><ul><li><strong>Hardware:</strong> the physical parts (system unit, monitor, keyboard, mouse).</li><li><strong>Input devices:</strong> keyboard, mouse, scanner, microphone.</li><li><strong>Output devices:</strong> monitor, printer, speaker.</li><li><strong>CPU</strong> = the "brain": control unit + arithmetic and logic unit (ALU) + registers.</li><li><strong>Memory:</strong> RAM is temporary/volatile; ROM is permanent/non-volatile.</li></ul>',
    software: '<h4>📥 Guide: Software & Operating Systems</h4><ul><li><strong>System software</strong> runs the computer (e.g. the operating system).</li><li><strong>Application software</strong> does user tasks (Word, Excel, browsers).</li><li><strong>Operating system</strong> manages hardware, files, memory and processes.</li><li><strong>Utility programs:</strong> antivirus, backup, disk cleanup.</li><li><strong>Open source</strong> (free to modify, e.g. Linux) vs <strong>proprietary</strong> (licensed, e.g. Windows).</li></ul>',
    data: '<h4>📥 Guide: Data Representation & Number Systems</h4><ul><li><strong>Bases:</strong> binary (2), octal (8), decimal (10), hexadecimal (16).</li><li><strong>Bit</strong> = 1 binary digit; <strong>byte</strong> = 8 bits; KB → MB → GB → TB (×1024).</li><li><strong>Binary → decimal:</strong> add place values (1101 = 8+4+0+1 = 13).</li><li><strong>ASCII/Unicode</strong> encode characters as numbers.</li><li><strong>Logic gates:</strong> AND, OR, NOT; the basis of Boolean algebra.</li></ul>',
    programming: '<h4>📥 Guide: Programming Fundamentals</h4><ul><li><strong>Algorithm:</strong> a step-by-step procedure to solve a problem.</li><li><strong>Flowchart</strong> (diagram) and <strong>pseudocode</strong> (plain-language steps) plan a program.</li><li><strong>Variables &amp; data types:</strong> integer, real/float, character, string, boolean.</li><li><strong>Control:</strong> sequence, selection (if/else) and iteration (loops).</li><li><strong>Debugging</strong> is finding and fixing errors in code.</li></ul>',
    database: '<h4>📥 Guide: Databases</h4><ul><li><strong>Database:</strong> an organised collection of related data.</li><li><strong>Table → records (rows) → fields (columns).</strong></li><li><strong>Primary key:</strong> uniquely identifies each record.</li><li><strong>Foreign key</strong> links one table to another.</li><li><strong>Query:</strong> a request to retrieve or manipulate data (e.g. in SQL).</li></ul>',
    networks: '<h4>📥 Guide: Networks & the Internet</h4><ul><li><strong>Network:</strong> two or more connected computers that share resources.</li><li><strong>LAN</strong> (local, one site), <strong>MAN</strong> (a city) and <strong>WAN</strong> (wide/global, e.g. the internet).</li><li><strong>Internet:</strong> a global network of networks; the <strong>Web</strong> runs on it.</li><li><strong>Browser</strong> displays web pages; <strong>email</strong> sends electronic messages.</li><li><strong>Cloud computing</strong> stores and processes data on remote servers.</li></ul>',
    cyber: '<h4>📥 Guide: Cybersecurity & Emerging Tech</h4><ul><li><strong>Cybersecurity:</strong> protecting systems and data from attack.</li><li><strong>Strong passwords:</strong> long, mixed characters, unique per account.</li><li><strong>Malware:</strong> viruses, worms, trojans, ransomware — use antivirus and updates.</li><li><strong>Data privacy &amp; ethics:</strong> respect others’ data; avoid piracy and cybercrime.</li><li><strong>Emerging tech:</strong> Artificial Intelligence, Robotics and the Internet of Things (IoT).</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'systems' || /Hardware|Input Devices|Output Devices|Storage|CPU|Memory|Architecture/i.test(name)) return TEMPLATES.systems;
    if (skill === 'software' || /System Software|Application Software|Operating Systems|Utility|Open Source|Licensing/i.test(name)) return TEMPLATES.software;
    if (skill === 'data' || /Binary|Hexadecimal|Octal|Measurement Units|ASCII|Logic Gates|Boolean/i.test(name)) return TEMPLATES.data;
    if (skill === 'programming' || /Programming|Algorithms|Flowcharts|Pseudocode|Variables|Operators|Conditional|Loops|Functions|Debugging/i.test(name)) return TEMPLATES.programming;
    if (skill === 'database' || /Database|Tables|Primary|Foreign|Queries|Records/i.test(name)) return TEMPLATES.database;
    if (skill === 'networks' || /Network|LAN|Internet|Browser|Email|Cloud/i.test(name)) return TEMPLATES.networks;
    if (skill === 'cyber' || /Cybersecurity|Password|Malware|Privacy|Ethical|Artificial Intelligence|Robotics|IoT/i.test(name)) return TEMPLATES.cyber;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Computer Science skills';
    var focus = position % 2 ? 'clear definitions, worked examples and timed practice' : 'understanding the concept and applying it to WAEC-style questions and practical tasks';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Computer Science · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective, theory and practical papers.</li>' +
      '<li>Study a labelled diagram/example (or worked conversion/algorithm) and the points examiners reward.</li>' +
      '<li>Practise with past-question-style items and short practical tasks at the computer.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, or try it on a computer, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Explain/draw or work an example of <em>' + esc(name) + '</em> in your computer science notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Attempt one WAEC-style item under exam timing and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Computer Science preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical computing task — build/query the database, write the program, or manage the files — then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Computer Science exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'A computer is best defined as an electronic device that:', opts: ['Only plays games', 'Accepts data, processes it and produces information', 'Only stores files', 'Cannot calculate'], correct: 1, exp: 'A computer inputs data, processes it and outputs information.' },
      { q: 'WASSCE Computer Science usually includes:', opts: ['Only an oral test', 'Objective, theory and a practical component', 'One essay only', 'A lab practical only'], correct: 1, exp: 'It has objective, theory and practical parts.' },
      { q: 'The four basic operations of a computer are input, processing, output and:', opts: ['Cooking', 'Storage', 'Sleeping', 'Printing only'], correct: 1, exp: 'Input, processing, output and storage (IPOS).' },
      { q: 'Data becomes information after it is:', opts: ['Deleted', 'Processed and given meaning', 'Ignored', 'Printed only'], correct: 1, exp: 'Processing turns raw data into meaningful information.' },
      { q: 'A good study strategy for computer science is to:', opts: ['Avoid computers', 'Combine theory with hands-on practice', 'Only memorise', 'Skip past questions'], correct: 1, exp: 'Theory plus practical practice works best.' }
    ],
    systems: [
      { q: 'Which is an input device?', opts: ['Monitor', 'Keyboard', 'Printer', 'Speaker'], correct: 1, exp: 'A keyboard inputs data into the computer.' },
      { q: 'Which is an output device?', opts: ['Mouse', 'Scanner', 'Printer', 'Keyboard'], correct: 2, exp: 'A printer outputs information from the computer.' },
      { q: 'The "brain" of the computer is the:', opts: ['RAM', 'CPU', 'Monitor', 'Hard disk'], correct: 1, exp: 'The CPU (processor) executes instructions.' },
      { q: 'RAM is best described as:', opts: ['Permanent storage', 'Temporary, volatile working memory', 'An input device', 'A printer'], correct: 1, exp: 'RAM is volatile — it loses data when power is off.' },
      { q: 'ROM differs from RAM because ROM is:', opts: ['Volatile', 'Non-volatile (keeps data without power)', 'An output device', 'Larger always'], correct: 1, exp: 'ROM retains its contents when the computer is off.' },
      { q: 'Which is a storage device?', opts: ['Hard disk drive', 'Monitor', 'Mouse', 'Speaker'], correct: 0, exp: 'Hard disks, SSDs and flash drives store data.' }
    ],
    software: [
      { q: 'An example of system software is the:', opts: ['Web browser', 'Operating system', 'Spreadsheet', 'Game'], correct: 1, exp: 'The operating system is system software.' },
      { q: 'Microsoft Word is an example of:', opts: ['System software', 'Application software', 'Hardware', 'An OS'], correct: 1, exp: 'Word is application software.' },
      { q: 'The main job of an operating system is to:', opts: ['Print only', 'Manage hardware, files, memory and processes', 'Play music', 'Draw pictures'], correct: 1, exp: 'The OS manages the computer’s resources.' },
      { q: 'Open-source software is software whose source code is:', opts: ['Secret', 'Freely available to view and modify', 'Illegal', 'Only for sale'], correct: 1, exp: 'Open-source code can be viewed and modified (e.g. Linux).' },
      { q: 'An antivirus program is an example of a:', opts: ['Utility program', 'Game', 'CPU', 'Printer'], correct: 0, exp: 'Antivirus is a utility program.' },
      { q: 'A software licence mainly defines:', opts: ['The colour of the app', 'How the software may legally be used', 'The CPU speed', 'The screen size'], correct: 1, exp: 'A licence sets the terms of legal use.' }
    ],
    data: [
      { q: 'The binary number 1101 equals which decimal number?', opts: ['11', '13', '15', '9'], correct: 1, exp: '8+4+0+1 = 13.' },
      { q: 'How many bits are in one byte?', opts: ['4', '8', '16', '32'], correct: 1, exp: '1 byte = 8 bits.' },
      { q: 'The hexadecimal number system has a base of:', opts: ['2', '8', '10', '16'], correct: 3, exp: 'Hexadecimal is base 16.' },
      { q: 'ASCII and Unicode are used to represent:', opts: ['Images only', 'Characters (letters, digits, symbols)', 'Sound only', 'Video only'], correct: 1, exp: 'They encode characters as numbers.' },
      { q: 'The output of an AND gate is 1 only when:', opts: ['Any input is 1', 'All inputs are 1', 'All inputs are 0', 'Never'], correct: 1, exp: 'AND gives 1 only if every input is 1.' },
      { q: 'Which is the correct ascending order of units?', opts: ['KB, MB, GB, TB', 'TB, GB, MB, KB', 'MB, KB, GB, TB', 'GB, TB, KB, MB'], correct: 0, exp: 'KB < MB < GB < TB.' }
    ],
    programming: [
      { q: 'An algorithm is:', opts: ['A computer part', 'A step-by-step procedure to solve a problem', 'A virus', 'A network'], correct: 1, exp: 'An algorithm is an ordered set of steps.' },
      { q: 'A flowchart is used to:', opts: ['Store data', 'Represent the steps of an algorithm graphically', 'Cool the CPU', 'Print documents'], correct: 1, exp: 'Flowcharts diagram an algorithm’s logic.' },
      { q: 'A variable in programming is:', opts: ['A fixed number', 'A named storage location for a value', 'A printer', 'A cable'], correct: 1, exp: 'A variable stores a value that can change.' },
      { q: 'An "if...else" statement is an example of:', opts: ['A loop', 'Selection (decision)', 'A variable', 'A device'], correct: 1, exp: 'if/else is a selection/decision structure.' },
      { q: 'A structure that repeats instructions is a:', opts: ['Loop', 'Monitor', 'Keyboard', 'Byte'], correct: 0, exp: 'Loops (iteration) repeat a block of code.' },
      { q: 'Debugging means:', opts: ['Writing new features', 'Finding and fixing errors in a program', 'Deleting the program', 'Buying software'], correct: 1, exp: 'Debugging removes errors (bugs) from code.' }
    ],
    database: [
      { q: 'A database is:', opts: ['A single file only', 'An organised collection of related data', 'A printer', 'A CPU'], correct: 1, exp: 'A database organises related data for easy access.' },
      { q: 'In a database table, a row is called a:', opts: ['Field', 'Record', 'Query', 'Key'], correct: 1, exp: 'A row is a record; a column is a field.' },
      { q: 'A primary key is used to:', opts: ['Delete the table', 'Uniquely identify each record', 'Colour the data', 'Encrypt files'], correct: 1, exp: 'The primary key uniquely identifies each record.' },
      { q: 'A field in a database is a:', opts: ['Row', 'Column (attribute)', 'Whole table', 'Query'], correct: 1, exp: 'A field is a column storing one attribute.' },
      { q: 'A query is used to:', opts: ['Retrieve or manipulate data', 'Turn on the computer', 'Print the CPU', 'Encrypt the monitor'], correct: 0, exp: 'Queries retrieve/manipulate data (e.g. SQL SELECT).' },
      { q: 'A foreign key is used to:', opts: ['Link one table to another', 'Delete data', 'Speed up the CPU', 'Change colours'], correct: 0, exp: 'A foreign key references a key in another table.' }
    ],
    networks: [
      { q: 'A network that covers a small area such as one office is a:', opts: ['WAN', 'LAN', 'The internet', 'MAN'], correct: 1, exp: 'A LAN is a Local Area Network.' },
      { q: 'The internet is best described as:', opts: ['One computer', 'A global network of interconnected networks', 'A single website', 'A printer'], correct: 1, exp: 'The internet is a worldwide network of networks.' },
      { q: 'A web browser is used to:', opts: ['Cool the CPU', 'Access and display web pages', 'Store passwords only', 'Print documents'], correct: 1, exp: 'Browsers (e.g. Chrome) display web pages.' },
      { q: 'A WAN covers a:', opts: ['Very small area', 'Wide/large geographical area', 'Single room', 'One device'], correct: 1, exp: 'A WAN spans large areas (e.g. the internet).' },
      { q: 'Cloud computing means storing and processing data on:', opts: ['Your desk only', 'Remote servers accessed over the internet', 'Paper', 'A calculator'], correct: 1, exp: 'The cloud uses remote internet-accessible servers.' },
      { q: 'A good internet-safety practice is to:', opts: ['Share your password', 'Avoid suspicious links and use strong passwords', 'Click every pop-up', 'Ignore updates'], correct: 1, exp: 'Avoid suspicious links; use strong, unique passwords.' }
    ],
    cyber: [
      { q: 'Cybersecurity is mainly about:', opts: ['Selling computers', 'Protecting systems and data from attack', 'Cooling the CPU', 'Printing'], correct: 1, exp: 'It protects systems and data from threats.' },
      { q: 'A strong password should be:', opts: ['Short and simple', 'Long with a mix of letters, numbers and symbols', 'Your name', '1234'], correct: 1, exp: 'Strong passwords are long, mixed and unique.' },
      { q: 'A program that harms a computer is called:', opts: ['Malware', 'Hardware', 'A monitor', 'A cable'], correct: 0, exp: 'Malware = malicious software (viruses, worms, etc.).' },
      { q: 'A computer virus is a type of:', opts: ['Hardware', 'Malware that spreads and damages files', 'Printer', 'Network cable'], correct: 1, exp: 'A virus is malicious code that spreads.' },
      { q: 'IoT stands for:', opts: ['Internet of Things', 'Input of Text', 'Index of Terms', 'Internet of Teachers'], correct: 0, exp: 'IoT = Internet of Things (connected everyday devices).' },
      { q: 'Ethical computing means:', opts: ['Pirating software', 'Using computers responsibly and respecting others’ data', 'Spreading viruses', 'Ignoring privacy'], correct: 1, exp: 'Ethical computing is responsible, lawful, respectful use.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In practical questions you should:', opts: ['Skip the steps', 'Follow the steps carefully and save your work', 'Guess', 'Ignore instructions'], correct: 1, exp: 'Follow instructions precisely and save regularly.' },
      { q: 'Clear, well-drawn flowcharts in answers:', opts: ['Waste time', 'Earn marks and clarify your logic', 'Are banned', 'Are decoration'], correct: 1, exp: 'Correct flowcharts gain marks in programming questions.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', systems: 'systems', software: 'software', data: 'data', programming: 'programming', database: 'database', networks: 'networks', cyber: 'cyber', practical: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.systems, BANK.software, BANK.data, BANK.programming, BANK.database, BANK.networks, BANK.cyber, BANK.examstrat);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'wcs-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Computer Science Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Computer Science Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical computing and the Mock Practical Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, a computer for practice, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Practical Examination/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wcs-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, then review every answer explanation.</p></div>';
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
      var pqid = 'wcs-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Computer Science: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Computer Science preparation course aligned to the WAEC syllabus: computer systems, software & operating systems, data representation & number systems, programming fundamentals, databases, computer networks & the internet, cybersecurity & emerging technologies, practical computing, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '💻',
    gradient: 'linear-gradient(135deg,#1F6FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Computer Science examination with clear concepts, worked examples, hands-on practice and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-COMP',
    learn: [
      'Understand the WAEC Computer Science exam structure and marking scheme',
      'Explain computer systems, hardware, the CPU and memory',
      'Understand software, operating systems and file management',
      'Convert number systems and understand data representation and logic gates',
      'Apply programming fundamentals: algorithms, flowcharts, variables and control',
      'Understand databases, networks, the internet, cybersecurity and emerging tech'
    ],
    requirements: ['A phone or computer with internet', 'Access to a computer for practical practice (recommended)', 'A notebook for algorithms, flowcharts and notes', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Computer Science preparation course, organised into ten modules aligned to the WAEC Computer Science syllabus and examination structure (objective, theory and practical).',
      'Every content lesson has a video and printable notes with worked examples; downloadable resources include flowchart templates, programming exercises and practical lab guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, a computer for hands-on practice, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-computer-science',
    _wassceCompFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-COMPUTER] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
