/* TIH Complete Microsoft Office Mastery Professional Certificate curriculum.
   Rebuilds COURSES_DB.office into the full 20-module program taking a complete
   beginner to an advanced Microsoft Office professional: Windows & files, Word,
   Excel (essentials & advanced), PowerPoint, Outlook, OneNote, Teams, OneDrive,
   Microsoft Copilot, collaboration, business documentation, data analysis,
   productivity, workplace communication, career, real-world projects, a
   capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable templates.
   Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'office';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._officeFullBuilt) return;

  var V = ['EuWTrvT_YyY', '3eIlHtHDGDs', 'rGG-In7PAEk', '7_vMFvnGTlc', 'bsuP2dD3rec', '9NUjHBNWe9M', 'QiVSIvB1xis', 'cwPaqUC1jT4', 'ycyySK5bdRg', 'nbhZE_mza2g', 'u0--Ye7bUP4', 'TzNQkMTHKuM', '4wQ0KmttgcQ', 'oT4emh72fuA', 'DQPHzp2ezpw', 'VFMPLeC7h0I', 'S0i4CdKi1i4', 'Y5waTxDKZ3c'];
  var VIDEOS = {
    orientation: ['IUAq9r5B9Go'],
    windows: ['irk0adNl5c0'],
    word: ['EuWTrvT_YyY'],
    excel: ['Vl0H-qTclOg'],
    advexcel: ['Mkkb5Bk6Z-Y'],
    ppt: ['l5Ij7nUy9UQ'],
    outlook: ['4e_ghbyXcJ0'],
    onenote: ['aSF_QAeMoD8'],
    teams: ['VDDPoYOQYfM'],
    onedrive: ['njJr751_tP4'],
    copilot: ['0_mqsU7yh5Q'],
    collab: ['z2d_qv83kiQ'],
    docs: ['vO2Mbyu4NSM'],
    data: ['iG6lN9aBrcM'],
    productivity: ['CjT6ilNc2BQ'],
    comms: ['CcesWgk_VMc'],
    career: ['xXUwu2MDaV8'],
    projects: ['iUqbhkJWt_4'],
    capstone: ['iUqbhkJWt_4'],
    assessment: ['iUqbhkJWt_4']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Microsoft Office?', 'Microsoft 365 Overview', 'Career Opportunities', 'Installing Microsoft Office', 'Course Roadmap', 'Setting Learning Goals', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Windows & File Management', '🪟', 'windows', 'content', ['Windows Fundamentals', 'File Explorer', 'Folder Organization', 'File Types', 'File Compression (ZIP)', 'Storage Devices', 'Cloud Storage Basics', 'OneDrive Integration', 'Backup & Recovery', 'File Management Assessment']],
    [3, 'Microsoft Word Essentials', '📝', 'word', 'content', ['Introduction to Microsoft Word', 'Creating Documents', 'Text Formatting', 'Paragraph Formatting', 'Page Layout', 'Headers & Footers', 'Tables', 'Images & Shapes', 'SmartArt', 'Styles & Themes', 'Page Numbers', 'References', 'Table of Contents', 'Mail Merge', 'Track Changes', 'Comments', 'Templates', 'Printing & Exporting', 'Word Best Practices', 'Word Project']],
    [4, 'Microsoft Excel Essentials', '📗', 'excel', 'content', ['Introduction to Excel', 'Worksheets & Workbooks', 'Data Entry', 'Formatting', 'Basic Formulas', 'Functions', 'Sorting & Filtering', 'Conditional Formatting', 'Charts', 'Tables', 'Printing Worksheets', 'Excel Project']],
    [5, 'Advanced Microsoft Excel', '📈', 'advexcel', 'content', ['IF Statements', 'VLOOKUP', 'XLOOKUP', 'INDEX & MATCH', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'Data Validation', 'What-If Analysis', 'Goal Seek', 'Solver', 'Dashboard Creation', 'Power Query (Introduction)', 'Power Pivot (Introduction)', 'Excel Automation with Macros (Introduction)', 'Advanced Excel Project']],
    [6, 'Microsoft PowerPoint', '📽️', 'ppt', 'content', ['Introduction to PowerPoint', 'Creating Presentations', 'Themes', 'Slide Layouts', 'Images & Icons', 'SmartArt', 'Charts', 'Audio & Video', 'Animations', 'Transitions', 'Presenter View', 'Presentation Delivery', 'PowerPoint Project']],
    [7, 'Microsoft Outlook', '📧', 'outlook', 'content', ['Setting Up Outlook', 'Sending Emails', 'Email Organization', 'Rules & Filters', 'Calendar Management', 'Scheduling Meetings', 'Contacts', 'Tasks', 'Email Etiquette', 'Outlook Productivity Tips']],
    [8, 'Microsoft OneNote', '🗒️', 'onenote', 'content', ['Introduction to OneNote', 'Creating Notebooks', 'Organizing Notes', 'Multimedia Notes', 'Tags', 'Search Features', 'Collaboration', 'Academic & Business Note-Taking']],
    [9, 'Microsoft Teams', '👥', 'teams', 'content', ['Introduction to Teams', 'Creating Teams', 'Channels', 'Chat', 'Meetings', 'File Sharing', 'Collaboration', 'Teams Integration', 'Recording Meetings', 'Teams Project']],
    [10, 'Microsoft OneDrive', '☁️', 'onedrive', 'content', ['Cloud Storage Basics', 'Uploading Files', 'File Synchronization', 'Sharing Files', 'Permission Management', 'Version History', 'Backup Strategies', 'OneDrive Security']],
    [11, 'Microsoft Copilot & AI Productivity', '🤖', 'copilot', 'content', ['Introduction to Microsoft Copilot', 'AI in Word', 'AI in Excel', 'AI in PowerPoint', 'AI in Outlook', 'AI Prompt Writing', 'Automating Office Tasks', 'Responsible AI Use', 'Copilot Productivity Project', 'AI Best Practices']],
    [12, 'Office Collaboration', '🔗', 'collab', 'content', ['Co-Authoring Documents', 'Sharing Files', 'Comments & Reviews', 'Track Changes', 'Document Approval Workflows', 'Team Collaboration', 'Version Control', 'Cloud Collaboration Project']],
    [13, 'Business Documentation', '📄', 'docs', 'content', ['Business Letters', 'Reports', 'Proposals', 'Meeting Minutes', 'Invoices', 'Resumes & CVs', 'Cover Letters', 'Professional Templates', 'Business Documentation Project', 'Document Standards']],
    [14, 'Data Analysis & Reporting', '📊', 'data', 'content', ['Data Collection', 'Data Cleaning', 'Charts', 'Dashboards', 'Business Reports', 'KPI Tracking', 'Data Visualization', 'Executive Reporting', 'Reporting Project', 'Presentation of Findings']],
    [15, 'Productivity & Time Management', '⚡', 'productivity', 'content', ['Digital Organization', 'Task Management', 'Calendar Planning', 'Workflow Optimization', 'Keyboard Shortcuts', 'Automation Tips', 'Focus Techniques', 'Productivity Systems', 'Time Management Project', 'Personal Productivity Plan']],
    [16, 'Workplace Communication', '💬', 'comms', 'content', ['Professional Email Writing', 'Business Communication', 'Presentation Skills', 'Meeting Management', 'Collaboration Skills', 'Customer Communication', 'Workplace Etiquette', 'Professional Writing']],
    [17, 'Career Development', '📋', 'career', 'content', ['Resume Writing', 'LinkedIn Optimization', 'Portfolio Development', 'Interview Preparation', 'Microsoft Office Certifications', 'Freelancing Opportunities', 'Career Planning', 'Professional Development']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Professional Business Report', 'Financial Analysis Spreadsheet', 'Interactive Excel Dashboard', 'Corporate Presentation', 'Team Collaboration Project', 'Business Proposal', 'Outlook Productivity System', 'OneNote Knowledge Base', 'Office Automation Project', 'Executive Portfolio']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Business Scenario Analysis', 'Word Documentation', 'Excel Analysis', 'PowerPoint Presentation', 'Outlook Communication Plan', 'Teams Collaboration', 'OneDrive File Management', 'Final Project Presentation']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Microsoft Word Assessment', 'Microsoft Excel Assessment', 'Microsoft PowerPoint Assessment', 'Outlook Assessment', 'Teams Assessment', 'Copilot Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'Microsoft Office foundations', windows: 'Windows & file management', word: 'Microsoft Word', excel: 'Microsoft Excel', advexcel: 'advanced Microsoft Excel', ppt: 'Microsoft PowerPoint', outlook: 'Microsoft Outlook', onenote: 'Microsoft OneNote', teams: 'Microsoft Teams', onedrive: 'Microsoft OneDrive', copilot: 'Microsoft Copilot & AI productivity', collab: 'Office collaboration', docs: 'business documentation', data: 'data analysis & reporting', productivity: 'productivity & time management', comms: 'workplace communication', career: 'careers with Microsoft Office', projects: 'real-world Office projects', capstone: 'your capstone project', assessment: 'your skills' };

  var FILES = '<div class="study-callout"><strong>📎 Practice files:</strong> download the Word template, Excel workbook, PowerPoint template or practice file for this lesson, follow along on your own computer, then Print → Save as PDF to keep your notes.</div>';
  var TEMPLATES = {
    resume: '<h4>📥 Template: Resume &amp; Cover Letter</h4><p><strong>Resume:</strong> Contact · Profile · Experience (achievements) · Education · Skills. <strong>Cover letter:</strong> role fit · key achievement · why this employer · call to action. Use Word Styles for a clean, consistent look.</p>',
    minutes: '<h4>📥 Template: Meeting Minutes</h4><ul><li>Date, attendees, agenda</li><li>Decisions made</li><li>Action items (owner + due date)</li><li>Next meeting</li></ul>',
    budget: '<h4>📥 Template: Budget Workbook (Excel)</h4><ul><li>Income &amp; expense lines</li><li>SUM/AVERAGE totals</li><li>Actual vs budget vs variance</li><li>A chart of spending by category</li></ul>',
    dashboard: '<h4>📥 Template: Excel Dashboard</h4><ul><li>Clean data table → PivotTables</li><li>PivotCharts + Slicers for interactivity</li><li>KPI cells (targets vs actuals)</li><li>One-page summary layout</li></ul>',
    letter: '<h4>📥 Template: Business Letter</h4><ul><li>Sender &amp; date</li><li>Recipient &amp; salutation</li><li>Clear purpose &amp; body</li><li>Polite close &amp; signature</li></ul>'
  };
  function templateFor(name) {
    if (/Resumes? & CVs|Cover Letters|Resume Writing/i.test(name)) return TEMPLATES.resume;
    if (/Meeting Minutes/i.test(name)) return TEMPLATES.minutes;
    if (/Invoices|Budget/i.test(name)) return TEMPLATES.budget;
    if (/Dashboard Creation|Dashboards|Interactive Excel Dashboard/i.test(name)) return TEMPLATES.dashboard;
    if (/Business Letters/i.test(name)) return TEMPLATES.letter;
    return '';
  }
  function extraFor(skill, name) {
    var tpl = templateFor(name);
    if (tpl) return '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>';
    if (/word|excel|advexcel|ppt|outlook|onenote|teams|onedrive|copilot|collab|docs|data|projects/.test(skill)) return FILES;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'Microsoft Office skills';
    var focus = position % 2 ? 'hands-on practice in the app and real office examples' : 'understanding the feature, using it step by step and applying it to real work';
    var extra = extraFor(skill, name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Microsoft Office · ' + esc(moduleTitle) + '</strong><span>Office + Copilot</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the steps, then complete the two hands-on exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> does and when to use it.</li>' +
      '<li>Follow the step-by-step method in the Microsoft app.</li>' +
      '<li>Do it yourself on a real document/workbook and save your work.</li></ul>' +
      (extra || '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real task for your school, work or business.</div>') +
      '<h4>Hands-on exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Follow the steps for <em>' + esc(name) + '</em> on your own computer.</li>' +
      '<li><strong>Exercise 2:</strong> Repeat it on a real task and note one shortcut or tip you learned.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to Microsoft Office mastery (and MOS certification).</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on Office project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Build it in the Microsoft apps and save it to your Office portfolio (OneDrive).</p>' +
      '<h4>What to do</h4><ol><li>Plan the document/workbook/presentation and its purpose.</li><li>Build it using the features you have learned (and Copilot where helpful).</li><li>Format it professionally, proofread, and add it to your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : FILES) +
      '<p><strong>Deliverable:</strong> A finished, professional Office file added to your portfolio.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Microsoft 365 is:', opts: ['A single app', 'A suite of Office apps and cloud services', 'A game', 'A browser'], correct: 1, exp: 'Microsoft 365 bundles Word, Excel, PowerPoint, Outlook, Teams, OneDrive and more.' },
      { q: 'The best way to master Office is to:', opts: ['Only watch videos', 'Practise the features hands-on', 'Memorise menus', 'Avoid the apps'], correct: 1, exp: 'Hands-on practice builds real Office skill.' },
      { q: 'This course prepares you for which certification?', opts: ['None', 'Microsoft Office Specialist (MOS)', 'A driving licence', 'A cooking exam'], correct: 1, exp: 'It builds a foundation for MOS certification.' },
      { q: 'Saving your work to OneDrive means it is:', opts: ['Lost if the PC breaks', 'Backed up and accessible from anywhere', 'Only on paper', 'Deleted'], correct: 1, exp: 'Cloud storage backs up and syncs your files.' },
      { q: 'An Office portfolio should contain:', opts: ['Nothing', 'Real documents, spreadsheets and presentations you created', 'Only certificates', 'Only text'], correct: 1, exp: 'Show real work to demonstrate your skills.' },
      { q: 'Keyboard shortcuts help you:', opts: ['Slow down', 'Work faster and more efficiently', 'Break the app', 'Nothing'], correct: 1, exp: 'Shortcuts speed up common tasks (e.g. Ctrl+C/V/S).' }
    ],
    windows: [
      { q: 'File Explorer is used to:', opts: ['Browse the web', 'Manage files and folders', 'Send email', 'Edit photos only'], correct: 1, exp: 'File Explorer browses and organises files/folders.' },
      { q: 'Compressing files (ZIP) helps you:', opts: ['Make them larger', 'Reduce size and bundle files for sharing', 'Delete them', 'Print them'], correct: 1, exp: 'ZIP reduces size and groups files.' },
      { q: 'A backup protects you by:', opts: ['Deleting files', 'Keeping a copy in case of loss', 'Slowing the PC', 'Nothing'], correct: 1, exp: 'Backups guard against data loss.' },
      { q: 'Good folder organization means:', opts: ['Everything on the desktop', 'Clear folders with consistent names', 'Random names', 'No folders'], correct: 1, exp: 'Structured folders make files easy to find.' },
      { q: 'OneDrive integration lets Windows:', opts: ['Work offline only', 'Sync your files to the cloud automatically', 'Delete files', 'Print faster'], correct: 1, exp: 'OneDrive syncs files to the cloud and other devices.' },
      { q: 'A file extension like .docx tells you:', opts: ['Nothing', 'The file type/program (a Word document)', 'The file size', 'The author'], correct: 1, exp: 'Extensions indicate the file type and app.' }
    ],
    word: [
      { q: 'To make text bold in Word you press:', opts: ['Ctrl+B', 'Ctrl+P', 'Ctrl+S', 'Ctrl+Z'], correct: 0, exp: 'Ctrl+B toggles bold.' },
      { q: 'A Table of Contents in Word is built from:', opts: ['Random text', 'Heading styles', 'Images', 'Page colour'], correct: 1, exp: 'Word generates a TOC from Heading 1/2/3 styles.' },
      { q: 'Mail Merge is used to:', opts: ['Delete emails', 'Create many personalised documents from a data list', 'Format one page', 'Add a chart'], correct: 1, exp: 'Mail Merge personalises letters/labels for many recipients.' },
      { q: 'Track Changes lets you:', opts: ['Hide edits', 'See and review edits made to a document', 'Delete the file', 'Print faster'], correct: 1, exp: 'Track Changes records edits for review/approval.' },
      { q: 'Styles & Themes help you:', opts: ['Nothing', 'Apply consistent, professional formatting quickly', 'Only add colour', 'Delete text'], correct: 1, exp: 'Styles keep formatting consistent and easy to update.' },
      { q: 'Headers and footers appear:', opts: ['In the middle', 'At the top and bottom of pages', 'Only page one', 'Never'], correct: 1, exp: 'They repeat at the top/bottom of every page.' }
    ],
    excel: [
      { q: 'Every Excel formula begins with:', opts: ['A letter', 'An equals sign (=)', 'A space', 'A comma'], correct: 1, exp: 'Formulas start with = , e.g. =A1+B1.' },
      { q: 'SUM(A1:A10) does what?', opts: ['Counts words', 'Adds the values in A1 to A10', 'Sorts them', 'Deletes them'], correct: 1, exp: 'SUM adds a range of numbers.' },
      { q: 'Conditional formatting is used to:', opts: ['Delete data', 'Highlight cells based on rules', 'Print faster', 'Send email'], correct: 1, exp: 'It formats cells meeting conditions (e.g. highlight highs).' },
      { q: 'A cell reference like B3 means:', opts: ['Row B, column 3', 'Column B, row 3', 'A formula', 'A chart'], correct: 1, exp: 'Columns are letters, rows are numbers: B3 = column B, row 3.' },
      { q: 'An Excel Table (Ctrl+T) adds:', opts: ['Nothing', 'Structure with filters and dynamic ranges', 'Only colour', 'Errors'], correct: 1, exp: 'Tables add filters and auto-expanding ranges.' },
      { q: 'A chart in Excel is used to:', opts: ['Hide data', 'Visualise data graphically', 'Delete data', 'Print faster'], correct: 1, exp: 'Charts turn numbers into visual insight.' }
    ],
    ppt: [
      { q: 'PowerPoint is used to:', opts: ['Do calculations', 'Create slide presentations', 'Write long documents', 'Send email'], correct: 1, exp: 'PowerPoint builds presentations.' },
      { q: 'To start a slideshow you press:', opts: ['F5', 'Ctrl+B', 'Delete', 'Ctrl+Z'], correct: 0, exp: 'F5 starts the presentation from the beginning.' },
      { q: 'Presenter View lets the speaker see:', opts: ['Only the current slide', 'Notes, next slide and timer while the audience sees slides', 'Nothing', 'Only the timer'], correct: 1, exp: 'Presenter View shows notes/next slide privately.' },
      { q: 'A good slide should be:', opts: ['Full of text', 'Clear and visual with key points', 'All one colour', 'Blank'], correct: 1, exp: 'Concise, visual slides support the speaker.' },
      { q: 'Transitions control:', opts: ['Spelling', 'How one slide changes to the next', 'The file size', 'The printer'], correct: 1, exp: 'Transitions animate the change between slides.' },
      { q: 'SmartArt is used to:', opts: ['Do maths', 'Turn lists into diagrams', 'Send email', 'Sort data'], correct: 1, exp: 'SmartArt visualises processes and lists.' }
    ],
    outlook: [
      { q: 'Outlook is mainly used for:', opts: ['Spreadsheets', 'Email, calendar, contacts and tasks', 'Presentations', 'Coding'], correct: 1, exp: 'Outlook manages email, calendar, contacts and tasks.' },
      { q: 'Rules & Filters in Outlook help you:', opts: ['Delete Outlook', 'Automatically organise incoming email', 'Write faster', 'Add charts'], correct: 1, exp: 'Rules sort/route email automatically.' },
      { q: 'To invite people to a meeting you use the:', opts: ['Notes app', 'Calendar (scheduling a meeting)', 'Spreadsheet', 'Printer'], correct: 1, exp: 'Calendar scheduling sends meeting invites.' },
      { q: 'The CC field is used to:', opts: ['Hide recipients', 'Copy others openly', 'Delete email', 'Attach files'], correct: 1, exp: 'CC copies additional recipients visibly.' },
      { q: 'Good email etiquette includes:', opts: ['No subject', 'A clear subject, greeting and polite tone', 'ALL CAPS', 'No signature'], correct: 1, exp: 'Professional emails are clear and courteous.' },
      { q: 'Flagging an email or adding a task helps you:', opts: ['Lose track', 'Follow up on important items', 'Delete it', 'Hide it'], correct: 1, exp: 'Flags/tasks track follow-ups.' }
    ],
    teams: [
      { q: 'Microsoft Teams is used for:', opts: ['Only email', 'Chat, meetings and team collaboration', 'Only spreadsheets', 'Only printing'], correct: 1, exp: 'Teams enables chat, calls, meetings and file collaboration.' },
      { q: 'A "channel" in Teams is:', opts: ['A TV channel', 'A dedicated space for a topic within a team', 'An email', 'A printer'], correct: 1, exp: 'Channels organise conversations/files by topic.' },
      { q: 'In a Teams meeting you can:', opts: ['Nothing', 'Share your screen and record the meeting', 'Only chat', 'Only listen'], correct: 1, exp: 'Teams supports screen sharing and recording.' },
      { q: 'Files shared in a Teams channel are stored in:', opts: ['Nowhere', 'SharePoint/OneDrive linked to the team', 'Only your PC', 'Email only'], correct: 1, exp: 'Team files live in the cloud, accessible to members.' },
      { q: 'Teams integrates with:', opts: ['Nothing', 'Office apps like Word, Excel and PowerPoint', 'Only games', 'Only browsers'], correct: 1, exp: 'You can co-edit Office files inside Teams.' },
      { q: 'Recording a meeting is useful for:', opts: ['Nothing', 'People who missed it to catch up', 'Deleting content', 'Slowing the PC'], correct: 1, exp: 'Recordings let absentees review the meeting.' }
    ],
    copilot: [
      { q: 'Microsoft Copilot is:', opts: ['A game', 'An AI assistant built into Office apps', 'A printer', 'A browser'], correct: 1, exp: 'Copilot brings AI help into Word, Excel, PowerPoint, etc.' },
      { q: 'Copilot in Word can help you:', opts: ['Only print', 'Draft, rewrite and summarise text', 'Delete Word', 'Send email'], correct: 1, exp: 'It drafts and improves documents from prompts.' },
      { q: 'Copilot in Excel can help you:', opts: ['Nothing', 'Analyse data and suggest formulas/insights', 'Only colour cells', 'Delete data'], correct: 1, exp: 'It analyses data and suggests formulas/charts.' },
      { q: 'A good Copilot prompt is:', opts: ['Vague', 'Clear and specific about the task and format', 'One word', 'Random'], correct: 1, exp: 'Specific prompts give better AI results.' },
      { q: 'You should always ___ Copilot output:', opts: ['Trust blindly', 'Review and verify', 'Ignore', 'Publish instantly'], correct: 1, exp: 'AI can be wrong — always check the output.' },
      { q: 'Responsible AI use in Office means:', opts: ['Sharing private data carelessly', 'Protecting data and verifying results', 'Ignoring accuracy', 'Hiding AI use'], correct: 1, exp: 'Use AI responsibly: protect data and verify output.' }
    ],
    onedrive: [
      { q: 'OneDrive is:', opts: ['A browser', 'Microsoft’s cloud storage service', 'A game', 'A printer'], correct: 1, exp: 'OneDrive stores files in the cloud.' },
      { q: 'File synchronization means files are:', opts: ['Only on one device', 'Kept up to date across your devices', 'Deleted', 'Printed'], correct: 1, exp: 'Sync keeps the same files current everywhere.' },
      { q: 'Sharing a OneDrive file lets others:', opts: ['Nothing', 'View or edit it via a link/permission', 'Delete your PC', 'Print automatically'], correct: 1, exp: 'You control view/edit access when sharing.' },
      { q: 'Version History in OneDrive lets you:', opts: ['Lose work', 'Restore an earlier version of a file', 'Delete the file', 'Print it'], correct: 1, exp: 'You can roll back to a previous version.' },
      { q: 'Permission management controls:', opts: ['Nothing', 'Who can view or edit your files', 'The file colour', 'The printer'], correct: 1, exp: 'Permissions decide who can access files.' },
      { q: 'Storing work in OneDrive protects against:', opts: ['Nothing', 'Losing files if a device is lost or breaks', 'Faster typing', 'Better graphics'], correct: 1, exp: 'Cloud copies survive device loss/failure.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', windows: 'windows', word: 'word', excel: 'excel', advexcel: 'excel', ppt: 'ppt', outlook: 'outlook', onenote: 'general', teams: 'teams', onedrive: 'onedrive', copilot: 'copilot', collab: 'teams', docs: 'word', data: 'excel', productivity: 'general', comms: 'outlook', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.windows, BANK.word, BANK.excel, BANK.ppt, BANK.outlook, BANK.teams, BANK.copilot, BANK.onedrive);
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
    if (/Outlook/i.test(name)) return 'outlook';
    if (/Teams/i.test(name)) return 'teams';
    if (/Copilot/i.test(name)) return 'copilot';
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
        var qid = 'off-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world Office projects in Module 18 (10 projects).</li><li>Complete the capstone in Module 19 and submit your Office portfolio.</li><li>Pass the app assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'off-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'off-m' + num + '-a' + flat;
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
      var pqid = 'off-m' + num + '-q' + flat;
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
    title: 'Complete Microsoft Office Mastery Professional Certificate',
    shortDesc: 'A full 20-module program from complete beginner to advanced Microsoft Office professional: Windows & files, Word, Excel (essentials & advanced), PowerPoint, Outlook, OneNote, Teams, OneDrive, Microsoft Copilot, collaboration, business documentation, data analysis, productivity, workplace communication, 10 real-world projects, a capstone and a Certificate of Completion.',
    category: 'Microsoft Office',
    icon: ex.icon || '💼',
    gradient: ex.gradient || 'linear-gradient(135deg,#d97706,#f59e0b)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$120',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-OFFICE-0001',
    learn: [
      'Manage Windows and files, and use OneDrive cloud storage',
      'Create professional documents in Word and analyse data in Excel',
      'Master advanced Excel: lookups, pivot tables and dashboards',
      'Build presentations in PowerPoint and manage email/calendar in Outlook',
      'Collaborate with OneNote and Teams and use Microsoft Copilot (AI)',
      'Produce business documents and reports, and build an Office portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A computer with Microsoft Office (or Microsoft 365)',
      'Willingness to practise each feature hands-on'
    ],
    about: [
      'This is the complete TIH Microsoft Office Mastery Professional Certificate, rebuilt into twenty modules that take you from complete beginner to advanced Office professional.',
      'Every content lesson has a video and printable notes with downloadable templates and practice files; ten real-world projects and a capstone build an Office portfolio for professional and administrative roles.',
      'Software & tools: Microsoft Windows, Word, Excel, PowerPoint, Outlook, OneNote, Teams, OneDrive, Copilot, Forms, Planner, To Do, Edge and Adobe Acrobat Reader. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion, ready for MOS certification.'
    ],
    modules: modules,
    quizzes: quizzes,
    _officeFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[OFFICE] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
