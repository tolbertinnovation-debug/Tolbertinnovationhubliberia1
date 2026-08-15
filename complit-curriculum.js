/* TIH Complete Computer Literacy Professional Certificate.
   Rebuilds COURSES_DB['computer-literacy'] into a 15-module beginner program:
   computer basics, first-time use, Windows, files & folders, the internet,
   online safety, email, Word, Excel, PowerPoint, Google Workspace, video
   conferencing, maintenance, digital work skills, and a final practical
   project + assessment with a Certificate. Every content lesson has a video +
   printable classroom notes and a short practice quiz. Modelled on
   aicyber-curriculum.js. Per-topic videos are supplied via topic-videos.js. */
(function () {
  var CID = 'computer-literacy';
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB[CID]) return;
  if (COURSES_DB[CID]._clFullBuilt) return;

  // Module-default videos (a strong full tutorial per module). Per-topic
  // exceptions are layered on top from topic-videos.js.
  var VIDEOS = {
    hardware: ['Xpk67YzOn5w'], basics: ['Xpk67YzOn5w'], windows: ['26QPDBe-NB8'],
    files: ['HbgzrKJvDRw'], internet: ['7_LPdttKXPc'], security: ['XBkzBrXlle0'],
    email: ['l0eM9Vq9GJU'], word: ['S-nHYzK-BVg'], excel: ['Vl0H-qTclOg'],
    ppt: ['u7Tku3_RGPs'], gworkspace: ['gs7QvB8m0Ho'], video: ['5mN2m5QYSeA'],
    maintenance: ['8K7ioTEieps'], work: ['S-nHYzK-BVg'], assessment: ['Vl0H-qTclOg']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|assessment
  var curriculum = [
    [1, 'Introduction to Computers', '🖥️', 'hardware', 'content', ['What Is a Computer?', 'Types of Computers', 'Parts of a Computer', 'Computer Hardware', 'Computer Software', 'Hardware vs. Software', 'Input Devices', 'Output Devices', 'Storage Devices', 'Computer Memory: RAM and ROM']],
    [2, 'Using a Computer for the First Time', '🖱️', 'basics', 'content', ['Starting and Shutting Down a Computer', 'Using the Keyboard', 'Using a Computer Mouse', 'Understanding the Desktop', 'Using Windows Icons', 'Using the Taskbar', 'Opening and Closing Programs', 'Using Windows Search']],
    [3, 'Windows Operating System', '🪟', 'windows', 'content', ['What Is an Operating System?', 'Introduction to Windows', 'Windows Desktop', 'Windows Settings', 'Control Panel', 'Installing Software', 'Uninstalling Software', 'Windows Updates']],
    [4, 'Files and Folders', '📁', 'files', 'content', ['What Are Files and Folders?', 'Creating a Folder', 'Renaming Files and Folders', 'Copying and Moving Files', 'Deleting Files and Folders', 'Using Recycle Bin', 'Searching for Files', 'Organizing Your Files']],
    [5, 'Internet Fundamentals', '🌐', 'internet', 'content', ['What Is the Internet?', 'How the Internet Works', 'What Is a Web Browser?', 'Using Google Chrome', 'Using Search Engines', 'Effective Google Searching', 'Opening and Managing Web Pages', 'Downloading Files From the Internet']],
    [6, 'Internet Safety and Digital Security', '🔒', 'security', 'content', ['Internet Safety Basics', 'Creating Strong Passwords', 'Two-Factor Authentication', 'Recognizing Phishing Scams', 'Avoiding Online Scams', 'Protecting Personal Information Online', 'Safe Downloads', 'Computer Viruses and Malware']],
    [7, 'Email and Online Communication', '✉️', 'email', 'content', ['What Is Email?', 'Creating a Gmail Account', 'Understanding the Gmail Interface', 'Sending an Email', 'Replying to an Email', 'Email Attachments', 'Managing Email', 'Email Etiquette']],
    [8, 'Microsoft Word', '📝', 'word', 'content', ['Introduction to Microsoft Word', 'Creating a Word Document', 'Typing and Editing Text', 'Formatting Text', 'Using Styles and Headings', 'Creating Lists', 'Inserting Pictures', 'Creating Tables', 'Page Layout and Margins', 'Headers, Footers and Page Numbers', 'Saving a Word Document', 'Printing and Saving as PDF']],
    [9, 'Microsoft Excel', '📊', 'excel', 'content', ['Introduction to Microsoft Excel', 'Understanding the Excel Interface', 'Workbooks and Worksheets', 'Rows, Columns and Cells', 'Entering Data', 'Formatting Cells', 'Basic Excel Formulas', 'Excel Functions', 'Sorting Data', 'Filtering Data', 'Creating Charts', 'Creating a Simple Spreadsheet Project']],
    [10, 'Microsoft PowerPoint', '📽️', 'ppt', 'content', ['Introduction to Microsoft PowerPoint', 'Understanding the PowerPoint Interface', 'Creating a Presentation', 'Adding and Editing Slides', 'Adding Text and Images', 'Themes and Templates', 'Slide Transitions', 'Animations', 'Adding Audio and Video', 'Presenting a Slide Show']],
    [11, 'Google Workspace', '🗂️', 'gworkspace', 'content', ['What Is Google Workspace?', 'Google Drive', 'Uploading Files to Google Drive', 'Organizing Google Drive Files', 'Sharing Files and Folders', 'Google Docs', 'Google Sheets', 'Google Slides']],
    [12, 'Video Conferencing and Online Collaboration', '🎥', 'video', 'content', ['Introduction to Google Meet', 'Joining a Google Meet Meeting', 'Creating a Google Meet Meeting', 'Using the Camera and Microphone', 'Sharing Your Screen', 'Introduction to Zoom', 'Joining a Zoom Meeting', 'Using Zoom for Online Classes and Meetings']],
    [13, 'Computer Maintenance and Troubleshooting', '🛠️', 'maintenance', 'content', ['Keeping Your Computer Clean and Organized', 'Installing and Updating Software', 'Windows Updates', 'Backing Up Important Files', 'Managing Computer Storage', 'Basic Computer Troubleshooting', 'Common Windows Problems', 'Safe Computer Maintenance']],
    [14, 'Digital Skills for Work', '💼', 'work', 'content', ['Creating a Professional Document', 'Creating a Professional Spreadsheet', 'Creating a Professional Presentation', 'Professional Email Communication', 'Managing Digital Files', 'Online Collaboration', 'Digital Workplace Safety']],
    [15, 'Final Practical Project & Assessment', '🏆', 'assessment', 'assessment', ['Computer Literacy Practical Project', 'Microsoft Word Practical Assessment', 'Microsoft Excel Practical Assessment', 'Microsoft PowerPoint Practical Assessment', 'Internet and Email Practical Assessment', 'Final Computer Literacy Examination', 'Final Certificate']]
  ];

  var PROJECT_DESC = {
    'Computer Literacy Practical Project': 'Create and organize a professional project folder containing documents, spreadsheets and presentation files.',
    'Microsoft Word Practical Assessment': 'Create and format a professional document.',
    'Microsoft Excel Practical Assessment': 'Create a spreadsheet using formulas, formatting and charts.',
    'Microsoft PowerPoint Practical Assessment': 'Create and present a professional presentation.',
    'Internet and Email Practical Assessment': 'Demonstrate safe Internet searching, email communication and file attachments.'
  };

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  var skillLabel = { hardware: 'computer basics', basics: 'using a computer', windows: 'the Windows operating system', files: 'file & folder management', internet: 'using the internet', security: 'online safety & security', email: 'email & communication', word: 'Microsoft Word', excel: 'Microsoft Excel', ppt: 'Microsoft PowerPoint', gworkspace: 'Google Workspace', video: 'video conferencing & collaboration', maintenance: 'computer maintenance', work: 'digital work skills', assessment: 'your skills' };

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'computer skills';
    var focus = position % 2 ? 'clear steps, real examples and hands-on practice' : 'understanding the idea, then doing it yourself on a computer';
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Computer Literacy · ' + esc(moduleTitle) + '</strong><span>Beginner-friendly</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, follow along on your own computer, then complete the two practice steps before the short quiz.</p>' +
      '<h4>Learning objectives</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and why it is useful.</li>' +
      '<li>Do it yourself, step by step, on a real computer.</li>' +
      '<li>Feel confident using it for school, work or daily life.</li></ul>' +
      '<h4>Practice steps</h4><ol>' +
      '<li><strong>Step 1:</strong> Watch the video and repeat each step yourself as you go.</li>' +
      '<li><strong>Step 2:</strong> Do it once more without the video, then write one sentence in the Notes tab about what you learned.</li></ol>' +
      '<p><strong>Printable notes:</strong> use your browser’s Print → Save as PDF to keep an offline copy.</p>' +
      '<p><strong>Module connection:</strong> part of <em>' + esc(moduleTitle) + '</em> on your path to the Computer Literacy Certificate.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name, desc) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Practical project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>' + esc(desc || 'Complete this hands-on task on a real computer and save your work as evidence of your learning.') + '</p>' +
      '<h4>What to do</h4><ol><li>Plan what you will create.</li><li>Do the task step by step using the skills from the course.</li><li>Save your file (and Print → Save as PDF where useful) and add it to your portfolio.</li></ol>' +
      '<p><strong>Deliverable:</strong> your finished file, saved and ready to submit.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Computer literacy means:', opts: ['Building computers', 'Being able to use a computer confidently for everyday tasks', 'Only gaming', 'Fixing hardware'], correct: 1, exp: 'Computer literacy is confidently using a computer for real tasks.' },
      { q: 'To keep your work safe you should:', opts: ['Never save', 'Save your files often', 'Turn off the screen', 'Delete everything'], correct: 1, exp: 'Saving often protects your work from loss.' },
      { q: 'A good habit online is to:', opts: ['Share passwords', 'Use strong passwords and think before you click', 'Click every link', 'Ignore updates'], correct: 1, exp: 'Strong passwords and careful clicking keep you safe.' },
      { q: 'The best way to learn a computer skill is to:', opts: ['Only read', 'Watch, then practise it yourself', 'Memorise without doing', 'Skip practice'], correct: 1, exp: 'Doing it yourself builds real, lasting skill.' },
      { q: 'If something goes wrong you should first:', opts: ['Panic', 'Stay calm and try basic troubleshooting (e.g. restart)', 'Throw the PC away', 'Delete files'], correct: 1, exp: 'Calm, basic troubleshooting solves most small problems.' },
      { q: 'Backing up your files means:', opts: ['Deleting them', 'Keeping a copy somewhere safe', 'Printing them', 'Hiding them'], correct: 1, exp: 'A backup is a safe copy in case the original is lost.' }
    ],
    hardware: [
      { q: 'Hardware is:', opts: ['Programs you run', 'The physical parts of a computer', 'The internet', 'A password'], correct: 1, exp: 'Hardware is the physical equipment; software is the programs.' },
      { q: 'An input device is used to:', opts: ['Show output', 'Put information into the computer (e.g. keyboard)', 'Store files', 'Print'], correct: 1, exp: 'Input devices (keyboard, mouse) send data in.' },
      { q: 'RAM is:', opts: ['Permanent storage', 'Temporary working memory', 'A monitor', 'A network'], correct: 1, exp: 'RAM is fast, temporary memory used while working.' },
      { q: 'A storage device (e.g. hard drive) is used to:', opts: ['Type text', 'Keep files even when the power is off', 'Show the screen', 'Connect to Wi-Fi'], correct: 1, exp: 'Storage keeps data permanently between sessions.' },
      { q: 'A monitor is an example of:', opts: ['An input device', 'An output device', 'Storage', 'A network'], correct: 1, exp: 'A monitor outputs (displays) information to you.' },
      { q: 'Software is:', opts: ['Physical parts', 'The programs and apps that run on a computer', 'A cable', 'A screen'], correct: 1, exp: 'Software is the instructions/programs the computer runs.' }
    ],
    windows: [
      { q: 'An operating system (like Windows) is:', opts: ['A game', 'The software that runs the whole computer', 'A website', 'A printer'], correct: 1, exp: 'The OS manages the computer and runs your programs.' },
      { q: 'The taskbar in Windows is used to:', opts: ['Type essays', 'Open and switch between programs', 'Store files only', 'Encrypt data'], correct: 1, exp: 'The taskbar launches and switches apps.' },
      { q: 'Windows Settings/Control Panel let you:', opts: ['Only play music', 'Change how the computer works and looks', 'Delete Windows', 'Browse the web'], correct: 1, exp: 'Settings control the computer’s configuration.' },
      { q: 'Keeping Windows updated helps to:', opts: ['Slow the PC', 'Fix bugs and improve security', 'Delete files', 'Remove the OS'], correct: 1, exp: 'Updates patch security holes and fix problems.' },
      { q: 'To remove a program you:', opts: ['Delete random files', 'Use uninstall in Settings/Control Panel', 'Turn off the PC', 'Rename it'], correct: 1, exp: 'Uninstalling cleanly removes a program.' },
      { q: 'The desktop is:', opts: ['A type of file', 'The main screen with icons and the taskbar', 'A printer', 'A browser'], correct: 1, exp: 'The desktop is your main working screen.' }
    ],
    files: [
      { q: 'A folder is used to:', opts: ['Print pages', 'Organize and group your files', 'Connect to Wi-Fi', 'Edit photos'], correct: 1, exp: 'Folders keep related files organized together.' },
      { q: 'To keep the same file in two places you can:', opts: ['Delete it', 'Copy it', 'Rename it', 'Hide it'], correct: 1, exp: 'Copying leaves the original and makes a duplicate.' },
      { q: 'The Recycle Bin holds:', opts: ['New files', 'Files you deleted (until emptied)', 'Programs', 'Websites'], correct: 1, exp: 'Deleted files wait in the Recycle Bin so you can restore them.' },
      { q: 'A clear file name helps you:', opts: ['Lose files', 'Find your files again easily', 'Slow the PC', 'Encrypt data'], correct: 1, exp: 'Good names make files easy to find later.' },
      { q: 'Moving a file (cut and paste) means:', opts: ['Two copies exist', 'It goes from one place to another', 'It is deleted', 'It is printed'], correct: 1, exp: 'Moving relocates the file without leaving a copy.' },
      { q: 'Organizing files into folders makes work:', opts: ['Harder', 'Faster and tidier', 'Slower', 'Impossible'], correct: 1, exp: 'Good organization saves time and avoids losing work.' }
    ],
    internet: [
      { q: 'A web browser is used to:', opts: ['Type documents', 'View websites on the internet', 'Store files', 'Print'], correct: 1, exp: 'A browser (e.g. Chrome) opens websites.' },
      { q: 'A search engine (e.g. Google) helps you:', opts: ['Delete files', 'Find information on the internet', 'Edit photos', 'Turn off the PC'], correct: 1, exp: 'Search engines find pages that match your query.' },
      { q: 'A good search uses:', opts: ['One vague word', 'Clear, specific keywords', 'Only punctuation', 'Your password'], correct: 1, exp: 'Specific keywords give better search results.' },
      { q: 'A website address (URL) is:', opts: ['A password', 'The location of a page on the web', 'A file type', 'A printer'], correct: 1, exp: 'A URL is the address you type to reach a site.' },
      { q: 'Downloading a file means:', opts: ['Sending it away', 'Saving it from the internet to your computer', 'Deleting it', 'Printing it'], correct: 1, exp: 'Downloading copies a file from the web to your device.' },
      { q: 'A safe website usually starts with:', opts: ['http://', 'https:// (with a padlock)', 'ftp only', 'nothing'], correct: 1, exp: 'HTTPS with a padlock indicates an encrypted connection.' }
    ],
    security: [
      { q: 'A strong password is:', opts: ['1234', 'Long, unique and hard to guess', 'Your name', 'password'], correct: 1, exp: 'Long, unique passwords resist guessing and cracking.' },
      { q: 'Two-factor authentication adds security by:', opts: ['Using one password', 'Requiring a second proof (e.g. a code)', 'Removing passwords', 'Sharing codes'], correct: 1, exp: '2FA adds a second step so a stolen password is not enough.' },
      { q: 'Phishing is:', opts: ['A safe email', 'A fake message that tricks you into giving information', 'A browser', 'A file type'], correct: 1, exp: 'Phishing uses fake messages to steal your information.' },
      { q: 'You should share your password with:', opts: ['Everyone', 'No one', 'Friends', 'Websites that ask'], correct: 1, exp: 'Never share passwords — keep them private.' },
      { q: 'To protect your information online you should:', opts: ['Click every link', 'Think before you click and share carefully', 'Post your details publicly', 'Disable updates'], correct: 1, exp: 'Careful clicking and sharing protects your data.' },
      { q: 'Malware is:', opts: ['Helpful software', 'Harmful software like viruses', 'A browser', 'A password'], correct: 1, exp: 'Malware is malicious software that can harm your device.' }
    ],
    email: [
      { q: 'Email is used to:', opts: ['Print photos', 'Send and receive messages online', 'Store the OS', 'Scan disks'], correct: 1, exp: 'Email sends and receives digital messages.' },
      { q: 'An attachment is:', opts: ['A password', 'A file sent with an email', 'A website', 'A folder'], correct: 1, exp: 'Attachments are files sent along with a message.' },
      { q: 'Reply All sends the message to:', opts: ['Only the sender', 'Everyone on the message', 'No one', 'Your printer'], correct: 1, exp: 'Reply All messages every recipient — use it carefully.' },
      { q: 'Good email etiquette includes:', opts: ['No subject ever', 'A clear subject and polite, brief message', 'Shouting in capitals', 'Sharing passwords'], correct: 1, exp: 'Clear subjects and polite, concise writing are good practice.' },
      { q: 'A suspicious email asking for your password is likely:', opts: ['Safe', 'Phishing — do not respond', 'From your bank always', 'Helpful'], correct: 1, exp: 'Legitimate services do not ask for your password by email.' },
      { q: 'To keep your inbox tidy you can:', opts: ['Never delete', 'Organize with folders/labels and delete junk', 'Reply to spam', 'Turn off email'], correct: 1, exp: 'Folders/labels and clearing junk keep email manageable.' }
    ],
    word: [
      { q: 'Microsoft Word is used to:', opts: ['Do calculations', 'Create and format documents', 'Edit videos', 'Browse the web'], correct: 1, exp: 'Word is a word processor for documents.' },
      { q: 'To make text bold you:', opts: ['Delete it', 'Select it and click Bold (or Ctrl+B)', 'Print it', 'Rename it'], correct: 1, exp: 'Select text, then apply Bold formatting.' },
      { q: 'Headings and styles help to:', opts: ['Hide text', 'Structure a document clearly', 'Slow typing', 'Encrypt files'], correct: 1, exp: 'Styles/headings give documents clear structure.' },
      { q: 'To keep your document you must:', opts: ['Close without saving', 'Save it (Ctrl+S)', 'Print only', 'Delete it'], correct: 1, exp: 'Saving stores your document to keep your work.' },
      { q: 'To share a document that looks the same everywhere, save as:', opts: ['A photo', 'PDF', 'A password', 'A website'], correct: 1, exp: 'PDF preserves layout across devices.' },
      { q: 'A table in Word is used to:', opts: ['Play audio', 'Organize information in rows and columns', 'Encrypt data', 'Send email'], correct: 1, exp: 'Tables arrange information neatly in a grid.' }
    ],
    excel: [
      { q: 'Microsoft Excel is used to:', opts: ['Write essays', 'Work with data in rows and columns', 'Edit videos', 'Browse the web'], correct: 1, exp: 'Excel is a spreadsheet for data and calculations.' },
      { q: 'A cell is:', opts: ['A whole file', 'A single box where a row and column meet', 'A folder', 'A printer'], correct: 1, exp: 'A cell is one box identified by its column and row.' },
      { q: 'A formula in Excel usually starts with:', opts: ['A letter', 'An equals sign (=)', 'A space', 'A hashtag'], correct: 1, exp: 'Formulas begin with = , e.g. =A1+A2.' },
      { q: 'SUM is a function that:', opts: ['Deletes data', 'Adds up numbers', 'Prints', 'Sorts text'], correct: 1, exp: '=SUM(...) adds a range of numbers.' },
      { q: 'A chart in Excel helps you:', opts: ['Hide data', 'Show data visually', 'Encrypt files', 'Send email'], correct: 1, exp: 'Charts turn numbers into a visual picture.' },
      { q: 'Sorting data lets you:', opts: ['Lose it', 'Arrange it in order (e.g. A–Z)', 'Delete it', 'Print it'], correct: 1, exp: 'Sorting arranges rows in a chosen order.' }
    ],
    ppt: [
      { q: 'PowerPoint is used to:', opts: ['Do accounts', 'Create slide presentations', 'Edit code', 'Browse the web'], correct: 1, exp: 'PowerPoint makes slide-based presentations.' },
      { q: 'A theme in PowerPoint controls:', opts: ['Your password', 'The overall look (colours/fonts) of slides', 'The internet', 'Storage'], correct: 1, exp: 'Themes set a consistent design for all slides.' },
      { q: 'Transitions are:', opts: ['File types', 'Effects between slides', 'Passwords', 'Printers'], correct: 1, exp: 'Transitions animate the move from one slide to the next.' },
      { q: 'Good slides usually have:', opts: ['Lots of tiny text', 'Clear, short points and visuals', 'No titles', 'Only paragraphs'], correct: 1, exp: 'Concise points and visuals communicate best.' },
      { q: 'Slide Show view is used to:', opts: ['Edit only', 'Present the slides full screen', 'Delete slides', 'Print'], correct: 1, exp: 'Slide Show plays the presentation full screen.' },
      { q: 'Adding images to slides helps to:', opts: ['Confuse people', 'Support and illustrate your points', 'Slow the PC', 'Hide content'], correct: 1, exp: 'Relevant images strengthen your message.' }
    ]
  };

  function bankKey(skill) {
    var map = { hardware: 'hardware', basics: 'windows', windows: 'windows', files: 'files', internet: 'internet', security: 'security', email: 'email', word: 'word', excel: 'excel', ppt: 'ppt', gworkspace: 'files', video: 'internet', maintenance: 'windows', work: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.hardware, BANK.windows, BANK.files, BANK.internet, BANK.security, BANK.email, BANK.word, BANK.excel, BANK.ppt);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  // Authored per-topic quiz questions (topic-quizzes.js) take priority so every
  // topic has its OWN distinct questions. Falls back to the module BANK if a
  // topic has no authored set.
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['computer-literacy']) || null;
  var TQ_norm = null;
  function topicQuestions(name) {
    if (!TQ) return null;
    if (!TQ_norm) { TQ_norm = {}; Object.keys(TQ).forEach(function (k) { TQ_norm[normQ(k)] = TQ[k]; }); }
    var arr = TQ_norm[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }
  function allAuthoredQuestions() {
    if (!TQ) return null;
    var out = []; Object.keys(TQ).forEach(function (k) { (TQ[k] || []).forEach(function (q) { out.push(q); }); });
    return out.length ? out : null;
  }
  function spreadPick(pool, count) {
    var out = [], n = pool.length; if (!n) return out;
    var step = Math.max(1, Math.floor(n / count));
    for (var i = 0, idx = 0; i < count; i++, idx += step) { out.push(pool[idx % n]); }
    return out;
  }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: topicQuestions(name) || pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) {
    var pool = allAuthoredQuestions();
    var qs = pool ? spreadPick(pool, count).map(cloneQ) : pickQuestions(key, count).map(cloneQ);
    return { title: name, moduleNum: 1, questions: qs };
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
      if (type === 'assessment') {
        if (/Final Certificate|Certificate of Completion/i.test(name)) {
          var qid = 'cl-m' + num + '-final';
          quizzes[qid] = assessmentQuiz('general', 'Final Certificate Assessment', 15);
          quizzes[qid].isFinal = true;
          lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
          notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final assessment. Pass it, along with the practical projects, to complete the program and earn your <strong>Complete Computer Literacy Professional Certificate</strong>.</p></div>';
          flat += 1; quizCount += 1;
          return;
        }
        if (/Examination|Exam/i.test(name)) {
          var eid = 'cl-m' + num + '-a' + flat;
          quizzes[eid] = assessmentQuiz('general', name, 20);
          lessons.push({ t: '🧪 ' + name, d: '20 questions', isQuiz: true, quizId: eid });
          notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Final examination</span></div><h3>' + esc(name) + '</h3><p>Complete this final examination, then review every answer explanation to strengthen weak areas.</p></div>';
          flat += 1; quizCount += 1; examCount += 1;
          return;
        }
        // Practical project / assessment tasks (hands-on, no quiz)
        lessons.push({ t: '🛠️ ' + name, d: 'Practical project', isProject: true, v: null });
        notes[String(flat)] = projectBrief(moduleTitle, name, PROJECT_DESC[name]);
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
      notes[String(flat)] = '<p><strong>Quick check:</strong> follow the two practice steps, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID] || {};
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Computer Literacy Professional Certificate',
    shortDesc: ex.shortDesc || 'A complete beginner-to-confident computer course: computer basics, Windows, files, the internet, online safety, email, Microsoft Word, Excel & PowerPoint, Google Workspace, video conferencing, maintenance and digital work skills — with hands-on projects, a final practical assessment and a Professional Certificate.',
    category: ex.category || 'Computer Literacy',
    icon: ex.icon || '💻',
    image: ex.image,
    cardImage: ex.cardImage,
    gradient: ex.gradient || 'linear-gradient(135deg,#1e3a5f,#002868)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '80h+',
    level: 'Beginner',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$120',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-COMPLIT-0001',
    learn: [
      'Use a computer and Windows confidently from scratch',
      'Manage files and folders, and stay safe and secure online',
      'Send professional email and communicate online',
      'Create documents, spreadsheets and presentations in Microsoft Office',
      'Use Google Workspace, video conferencing and online collaboration',
      'Maintain and troubleshoot a computer, and apply digital skills at work'
    ],
    requirements: ex.requirements || [
      'No prior experience needed — this course starts from zero',
      'Access to a computer (Windows recommended) and the internet'
    ],
    about: ex.about || [
      'This is the complete TIH Computer Literacy Professional Certificate, rebuilt into fifteen beginner-friendly modules that take you from switching on a computer to confident, employable digital skills.',
      'Every content lesson has a video and printable classroom notes, with a short quiz to check your understanding.',
      'You finish with a hands-on practical project, a final practical assessment and — on success — a Professional Certificate.'
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
