/* TIH Computer Literacy — assign a specific YouTube video to every topic.
   Runs after complit-curriculum.js. Matches lesson titles (ignores numbering and emoji). */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['computer-literacy'] || !COURSES_DB['computer-literacy'].modules) return;

  var MAP = {
    // Module 1 — Introduction to Computers
    'What Is a Computer?': 'Cu3R5it4cQs',
    'Types of Computers': '6LIv2ocJXRk',
    'Parts of a Computer': 'mLgTnkw558w',
    'Computer Hardware': 'HB4I2CgkcCo',
    'Computer Software': '3gMOYZoMtEs',
    'Hardware vs. Software': 'vG_qmtdBPTU',
    'Input Devices': 'yq9qzw8p7FI',
    'Output Devices': 'HB4I2CgkcCo',
    'Storage Devices': 'HB4I2CgkcCo',
    'Computer Memory: RAM and ROM': 'HB4I2CgkcCo',

    // Module 2 — Using a Computer for the First Time
    'Starting and Shutting Down a Computer': '2w5u7eqJpts',
    'Using the Keyboard': '2w5u7eqJpts',
    'Using a Computer Mouse': '2w5u7eqJpts',
    'Understanding the Desktop': 'GDKIxBr6yhI',
    'Using Windows Icons': 'GDKIxBr6yhI',
    'Using the Taskbar': 'z4ZUGOn85MQ',
    'Opening and Closing Programs': '2w5u7eqJpts',
    'Using Windows Search': '2w5u7eqJpts',

    // Module 3 — Windows Operating System
    'What Is an Operating System?': 'fkGCLIQx1MI',
    'Introduction to Windows': '2w5u7eqJpts',
    'Windows Desktop': 'GDKIxBr6yhI',
    'Windows Settings': '2w5u7eqJpts',
    'Control Panel': '2w5u7eqJpts',
    'Installing Software': '2w5u7eqJpts',
    'Uninstalling Software': '2w5u7eqJpts',
    'Windows Updates': '2w5u7eqJpts',

    // Module 4 — Files and Folders
    'What Are Files and Folders?': 'BY1y_RQxIdg',
    'Creating a Folder': 'BY1y_RQxIdg',
    'Renaming Files and Folders': 'BY1y_RQxIdg',
    'Copying and Moving Files': 'BY1y_RQxIdg',
    'Deleting Files and Folders': 'BY1y_RQxIdg',
    'Using Recycle Bin': 'BY1y_RQxIdg',
    'Searching for Files': 'GtGVItw89NM',
    'Organizing Your Files': 'BY1y_RQxIdg',

    // Module 5 — Internet Fundamentals
    'What Is the Internet?': 'jVDBsPZDpMs',
    'How the Internet Works': 'jVDBsPZDpMs',
    'What Is a Web Browser?': '5Jr-_Za5yQM',
    'Using Google Chrome': '5Jr-_Za5yQM',
    'Using Search Engines': '7RlB1CJovTs',
    'Effective Google Searching': '7RlB1CJovTs',
    'Opening and Managing Web Pages': '5Jr-_Za5yQM',
    'Downloading Files From the Internet': 'jVDBsPZDpMs',

    // Module 6 — Internet Safety and Digital Security
    'Internet Safety Basics': 'SPfTXOR_GbI',
    'Creating Strong Passwords': 'SPfTXOR_GbI',
    'Two-Factor Authentication': 'SPfTXOR_GbI',
    'Recognizing Phishing Scams': 'n9Lff-cSxLQ',
    'Avoiding Online Scams': 'n9Lff-cSxLQ',
    'Protecting Personal Information Online': 'SPfTXOR_GbI',
    'Safe Downloads': 'SPfTXOR_GbI',
    'Computer Viruses and Malware': 'SPfTXOR_GbI',

    // Module 7 — Email and Online Communication
    'What Is Email?': 'lIYRFSuBWag',
    'Creating a Gmail Account': 'l-WyP9iW_qE',
    'Understanding the Gmail Interface': 'l-WyP9iW_qE',
    'Sending an Email': 'l-WyP9iW_qE',
    'Replying to an Email': 'a9e7XNo4agE',
    'Email Attachments': 'l-WyP9iW_qE',
    'Managing Email': 'qTeZlPja5N4',
    'Email Etiquette': 'l-WyP9iW_qE',

    // Module 8 — Microsoft Word
    'Introduction to Microsoft Word': 'j-ZAVHk5SaU',
    'Creating a Word Document': 'PafCMUVH_OA',
    'Typing and Editing Text': 'vmEzxQfVj5c',
    'Formatting Text': 'ViGf0RKbCyA',
    'Using Styles and Headings': 'ViGf0RKbCyA',
    'Creating Lists': 'tyXahko-tX8',
    'Inserting Pictures': 'j-ZAVHk5SaU',
    'Creating Tables': 'j-ZAVHk5SaU',
    'Page Layout and Margins': 'j-ZAVHk5SaU',
    'Headers, Footers and Page Numbers': 'j-ZAVHk5SaU',
    'Saving a Word Document': 'iHuFzz7Wvt4',
    'Printing and Saving as PDF': 'iHuFzz7Wvt4',

    // Module 9 — Microsoft Excel
    'Introduction to Microsoft Excel': 'lgIWIPDJuPo',
    'Understanding the Excel Interface': 'lgIWIPDJuPo',
    'Workbooks and Worksheets': 'EBGrJckHadw',
    'Rows, Columns and Cells': '6mSKsaquTAM',
    'Entering Data': '6mSKsaquTAM',
    'Formatting Cells': 'etAMC0KRuBE',
    'Basic Excel Formulas': 'xc14gFFyiTw',
    'Excel Functions': 'xc14gFFyiTw',
    'Sorting Data': 'lgIWIPDJuPo',
    'Filtering Data': 'lgIWIPDJuPo',
    'Creating Charts': 'lgIWIPDJuPo',
    'Creating a Simple Spreadsheet Project': 'lgIWIPDJuPo',

    // Module 10 — Microsoft PowerPoint
    'Introduction to Microsoft PowerPoint': 'u7Tku3_RGPs',
    'Understanding the PowerPoint Interface': 'u7Tku3_RGPs',
    'Creating a Presentation': 'u7Tku3_RGPs',
    'Adding and Editing Slides': 'u7Tku3_RGPs',
    'Adding Text and Images': 'u7Tku3_RGPs',
    'Themes and Templates': 'u7Tku3_RGPs',
    'Slide Transitions': 'u7Tku3_RGPs',
    'Animations': 'u7Tku3_RGPs',
    'Adding Audio and Video': 'u7Tku3_RGPs',
    'Presenting a Slide Show': 'u7Tku3_RGPs',

    // Module 11 — Google Workspace
    'What Is Google Workspace?': 'gs7QvB8m0Ho',
    'Google Drive': 'gs7QvB8m0Ho',
    'Uploading Files to Google Drive': 'gs7QvB8m0Ho',
    'Organizing Google Drive Files': 'gs7QvB8m0Ho',
    'Sharing Files and Folders': 'gs7QvB8m0Ho',
    'Google Docs': 'gs7QvB8m0Ho',
    'Google Sheets': 'gs7QvB8m0Ho',
    'Google Slides': 'gs7QvB8m0Ho',

    // Module 12 — Video Conferencing
    'Introduction to Google Meet': 'ztyHfVLcp24',
    'Joining a Google Meet Meeting': 'X4jAvaX73-U',
    'Creating a Google Meet Meeting': 'ztyHfVLcp24',
    'Using the Camera and Microphone': 'ztyHfVLcp24',
    'Sharing Your Screen': 'ztyHfVLcp24',
    'Introduction to Zoom': 'vaAUsFXDyLI',
    'Joining a Zoom Meeting': 'Wx3kxI6Aieg',
    'Using Zoom for Online Classes and Meetings': 'PQBehKw-NQM',

    // Module 13 — Computer Maintenance
    'Keeping Your Computer Clean and Organized': '8K7ioTEieps',
    'Installing and Updating Software': '8K7ioTEieps',
    'Windows Updates': '8K7ioTEieps',
    'Backing Up Important Files': '8K7ioTEieps',
    'Managing Computer Storage': '8K7ioTEieps',
    'Basic Computer Troubleshooting': '8K7ioTEieps',
    'Common Windows Problems': '8K7ioTEieps',
    'Safe Computer Maintenance': '8K7ioTEieps',

    // Module 14 — Digital Skills for Work
    'Creating a Professional Document': 'j-ZAVHk5SaU',
    'Creating a Professional Spreadsheet': 'lgIWIPDJuPo',
    'Creating a Professional Presentation': 'u7Tku3_RGPs',
    'Professional Email Communication': 'l-WyP9iW_qE',
    'Managing Digital Files': 'BY1y_RQxIdg',
    'Online Collaboration': 'ztyHfVLcp24',
    'Digital Workplace Safety': 'SPfTXOR_GbI'
  };

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var applied = 0;
  COURSES_DB['computer-literacy'].modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isProject) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) {
        lesson.v = MAP[key];
        applied += 1;
      }
    });
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[COMPLIT videos] applied specific video to ' + applied + ' lessons');
  }
})();
