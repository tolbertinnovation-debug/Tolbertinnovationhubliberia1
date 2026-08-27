/* TIH COMPUTER LITERACY — one distinct YouTube video per topic.
   Course id: computer-literacy

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 13 videos across 128 lessons, the worst of them playing on
   nineteen, and five lessons had no video at all.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module -- here just "Windows Updates", taught in
   Module 3 and revisited in Module 13 -- are keyed "M<n>:Title", because a
   plain title key would collapse them onto one video. */
(function () {
  var C = (typeof COURSES_DB === 'undefined') ? null : COURSES_DB['computer-literacy'];
  if (!C || !C.modules) return;
  var MAP = {
    'What Is a Computer?': '3vSnVvtv_PQ',
    'Types of Computers': 'RzQtbFb0KIk',
    'Parts of a Computer': 'nBAhSHgGSM4',
    'Computer Hardware': 'DKGZlaPlVLY',
    'Computer Software': 'hXtVDE2UHKg',
    'Hardware vs. Software': 'EUAt0vL9A48',
    'Input Devices': '1d-1Ei4D7mo',
    'Output Devices': 'BJ-a-MYyfKk',
    'Starting and Shutting Down a Computer': '8Ic2L7ZyFC8',
    'Using the Keyboard': 'SPz9rF5KUcg',
    'Using a Computer Mouse': 'tCmobF1MjfY',
    'Understanding the Desktop': 'vKauB_ui598',
    'Using Windows Icons': 'qYQRWW-1Yxg',
    'Using the Taskbar': '2S3lhm8LaZo',
    'Opening and Closing Programs': 'gfFHkqJZ7so',
    'Using Windows Search': '-7gspNU8Y8k',
    'What Is an Operating System?': 'yyK9ss9Xip8',
    'Introduction to Windows': 'RswaXcWWCo0',
    'Windows Desktop': 'rKW2to13kAk',
    'Windows Settings': '2hdBB_oow9Y',
    'Control Panel': 'PxEIh2G-h4w',
    'Installing Software': 'u1nD5rRf_aU',
    'Uninstalling Software': 'HmEaYI6LsJk',
    'M3:Windows Updates': '9aghGSOYHm0',
    'What Are Files and Folders?': 'VUd49hMV_1g',
    'Creating a Folder': 'HDmwiJxzIrw',
    'Renaming Files and Folders': 'Mlb09xsIDLc',
    'Copying and Moving Files': '8T-CrKO92gY',
    'Deleting Files and Folders': 'NOvFZamGXXo',
    'Using Recycle Bin': '4-MF7t5KGuQ',
    'Searching for Files': 'mhp3oklEBuM',
    'Organizing Your Files': 'ZeOCCkAxIhw',
    'What Is the Internet?': '0OOe18OzSFc',
    'How the Internet Works': '5Vd2GHS7Po8',
    'What Is a Web Browser?': 'zuRofKQJleA',
    'Using Google Chrome': 'UIxJ3aCb25k',
    'Using Search Engines': 'RSSAN3hFr0A',
    'Effective Google Searching': 'MRsX9RjYnnE',
    'Opening and Managing Web Pages': 'UD_3XJRTCAg',
    'Downloading Files From the Internet': 'V277FZFETCQ',
    'Internet Safety Basics': '2I3x12sF6eM',
    'Creating Strong Passwords': '2Iwm0-3JTIw',
    'Two-Factor Authentication': '4FJ3UAQKW8I',
    'Recognizing Phishing Scams': 'aO858HyFbKI',
    'Avoiding Online Scams': '02hnL_OJP24',
    'Protecting Personal Information Online': 'EQaOWEAr_vk',
    'Safe Downloads': '7o6qOTtJhts',
    'Computer Viruses and Malware': 'F_Di6UWgSxs',
    'What Is Email?': 'PEB9jEXh0X4',
    'Creating a Gmail Account': '60-f-XH7m0Y',
    'Understanding the Gmail Interface': 'S4eXQiaRI28',
    'Sending an Email': 'aaQKBYFbxQ0',
    'Replying to an Email': '8Gs6YoxVnBY',
    'Email Attachments': 'gm8jhg8I_Hk',
    'Managing Email': 'l-WyP9iW_qE',
    'Email Etiquette': 'xEWufrOvHiA',
    'Introduction to Microsoft Word': '3cMDOBBjubk',
    'Creating a Word Document': 'wfHJB-DCjBQ',
    'Typing and Editing Text': 'JEsN2PGFQvg',
    'Formatting Text': '9nEPEGu-0q4',
    'Using Styles and Headings': 'Fvrtt0h84Mg',
    'Creating Lists': '2G7lr_7qqkc',
    'Inserting Pictures': '7z6mN_vUYK0',
    'Creating Tables': 'vV8EwtytfEI',
    'Page Layout and Margins': '5c0u3lZKBBQ',
    'Introduction to Microsoft Excel': 'jcb0jmj2AOA',
    'Understanding the Excel Interface': 'uDnigNkvMMw',
    'Workbooks and Worksheets': 'C2dep98PvSM',
    'Rows, Columns and Cells': 'rToJbe2wcnY',
    'Entering Data': 'YP-tKoEY2-0',
    'Formatting Cells': 'Bm_uWOUiUFI',
    'Basic Excel Formulas': 'pTFivyO4Cd4',
    'Excel Functions': 'z2ML5AVy_ys',
    'Sorting Data': '7koe9JLphG8',
    'Filtering Data': 'UR2830RUWmQ',
    'Introduction to Microsoft PowerPoint': 'wFj6QdGqkcw',
    'Understanding the PowerPoint Interface': 'DoyE48W3RUY',
    'Creating a Presentation': 'r81s-Mt93VE',
    'Adding and Editing Slides': 'cDdLZO7ET_I',
    'Adding Text and Images': '3TLjFhv9IRk',
    'Themes and Templates': 'Gjev8RkqO1k',
    'Slide Transitions': 'kbPybHG2kCk',
    'Animations': 'Or_QroSm8PM',
    'Adding Audio and Video': 'X5VKWJg2vSQ',
    'What Is Google Workspace?': 'EkurKCxsb4c',
    'Google Drive': 'jbojo61NLKo',
    'Uploading Files to Google Drive': 'MOPzJWJGVwE',
    'Organizing Google Drive Files': 'h8Hqn-s9ni4',
    'Sharing Files and Folders': '25CtYkqamIA',
    'Google Docs': 'oeSH_aEey3M',
    'Google Sheets': 'UAJg8iW3w-c',
    'Google Slides': '2pR6dtSyDr4',
    'Introduction to Google Meet': 'FiQUkzDJJDY',
    'Joining a Google Meet Meeting': 's3DbYxhowTI',
    'Creating a Google Meet Meeting': '0ZGGzd7hSNM',
    'Using the Camera and Microphone': 'kTy3GhlZhBo',
    'Sharing Your Screen': 'V4vXWjRU8kg',
    'Introduction to Zoom': 'xX8GgFkw7Ls',
    'Joining a Zoom Meeting': 'DwJgHsjIIK4',
    'Using Zoom for Online Classes and Meetings': 'DxIBTi-xxrg',
    'Keeping Your Computer Clean and Organized': 'bxfVPFsvMF0',
    'Installing and Updating Software': '9deRkl9h-rE',
    'M13:Windows Updates': 'sZl6rNUBbAY',
    'Backing Up Important Files': 'VcmVSF1mrt0',
    'Managing Computer Storage': '5CHtHrQeBws',
    'Basic Computer Troubleshooting': '6jLSW_DBy9s',
    'Common Windows Problems': '51GSU8mIv9Y',
    'Safe Computer Maintenance': 'a-xM48CXEWI',
    'Creating a Professional Document': 'i_zMAhm55fU',
    'Creating a Professional Spreadsheet': 'WGXb9RrZ9I8',
    'Creating a Professional Presentation': 'UV46n44jnoA',
    'Professional Email Communication': 'bL8Sc8bApIE',
    'Managing Digital Files': 'edCSAINyDYQ',
    'Online Collaboration': '7TD398YNaHs',
    'Digital Workplace Safety': '9kE22GXJ3_g',
    'Computer Literacy Practical Project': 'G70rJBOIoNU',
    'Microsoft Word Practical Assessment': 'UF2w6zxRypE',
    'Microsoft Excel Practical Assessment': 'wn4BUsjJZzo',
    'Storage Devices': 'TrM_1Gpx-44',
    'Computer Memory: RAM and ROM': 'WmdH_97VL7E',
    'Headers, Footers and Page Numbers': 'HR4eCwYnJd8',
    'Saving a Word Document': '1ZaBdVJ3lnY',
    'Printing and Saving as PDF': 'Uy60wy20ADE',
    'Creating Charts': 'W95mWXAGg4Y',
    'Creating a Simple Spreadsheet Project': '3p0t4dgIhuI',
    'Presenting a Slide Show': 'tSbKPKVu77g',
    'Microsoft PowerPoint Practical Assessment': 'TCrmlsLWGbY',
    'Internet and Email Practical Assessment': 'C4sptqFb0Bk'
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
  C.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[COMPUTER LITERACY videos] distinct video applied to ' + applied + ' lessons');
  }
})();
