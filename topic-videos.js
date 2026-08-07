/* ============================================================
   TIH LEARNING HUB — VIDEO OVERRIDES (module + topic)
   ------------------------------------------------------------
   Pin YouTube videos to a course without editing curriculum files.
   MODULES[courseId][moduleNumber] = default video for a whole module.
   TOPICS[courseId]['M<n>:Topic Title'] = a specific topic (wins).
   Accepts full YouTube links OR bare 11-char ids. Playlist links are
   ignored. Title match ignores the '3.1 ' numbering, emojis and case.
   ============================================================ */
(function () {
  function vid(u) {
    u = String(u || '').trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
    var m = u.match(/[?&]v=([A-Za-z0-9_-]{11})/) || u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/embed\/([A-Za-z0-9_-]{11})/) || u.match(/\/shorts\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/live\/([A-Za-z0-9_-]{11})/);
    return m ? m[1] : '';
  }

  // Per-MODULE default videos (fallback for any topic not pinned below).
  var MODULES = {
    'computer-literacy': {
      2: 'Xpk67YzOn5w', 3: '8K7ioTEieps', 4: '8K7ioTEieps', 6: 'k1VUZEVuDJ8',
      7: 'Vl0H-qTclOg', 8: 'u7Tku3_RGPs', 9: 'zh4jY6YJ2Mc', 10: 'l0eM9Vq9GJU',
      12: 'inWWhr5tnEA', 14: '2ePf9rue1Ao', 15: '8K7ioTEieps'
    }
  };

  // Per-TOPIC videos (module-qualified 'M<n>:Title'), one per topic.
  var TOPICS = {
    'computer-literacy': {
      'M2:What is a Computer?': 'WV46mRxdjiE',
      'M2:Types of Computers': '1wHT-dq7SG0',
      'M2:Computer Hardware': 'RzQtbFb0KIk',
      'M2:Input Devices': 'v7f3uG1OMMo',
      'M2:Output Devices': 'yl5Eq1VZa_U',
      'M2:Storage Devices': 'pcKXsXOhjpI',
      'M2:Software vs. Hardware': 'nt6XXaCo3vw',
      'M2:Operating Systems': 'IYj0IeYXtTw',
      'M2:Computer Boot Process': 'kSRg2zArT8o',
      'M2:Computer Terminology': 'SusGmKMuhDM',
      'M3:Introduction to Windows': 'xz8W7yh3BBM',
      'M3:Desktop Navigation': '_MsmnOL8R8Q',
      'M3:Start Menu': 'KB8gZvyfjUE',
      'M3:Taskbar': 'wAP8mP9YqCg',
      'M3:File Explorer': 'dQAagIKmDU0',
      'M3:Control Panel': 'U40Kz0ZZYDA',
      'M3:System Settings': 'FgkOQFvivwk',
      'M3:Installing & Uninstalling Programs': 'FTJHHBrsUtQ',
      'M3:User Accounts': 'qYuY5uEk8Nc',
      'M3:Windows Updates': 'OMn6iEOIR2g',
      'M4:Creating Files': 'a8KyaOy_t-g',
      'M4:Creating Folders': 'A6y6T0w4cVM',
      'M4:Copying Files': 'kUd_haLq-jc',
      'M4:Moving Files': 'r2uQreParFU',
      'M4:Renaming Files': 'K1i9XUv8rnY',
      'M4:Deleting Files': 'Hm5ptmYsYuM',
      'M4:Restoring Deleted Files': 'PRhSkZ8gnJU',
      'M4:Compressing Files (ZIP)': '78dc2qX7GpQ',
      'M4:File Organization': 'gDhhXI7hGoI',
      'M4:Backup Strategies': 'vjMBGtAfVk4',
      'M5:Keyboard Layout': '4SNqgzxWgKM',
      'M5:Home Row Technique': 'gfFHkqJZ7so',
      'M5:Typing Accuracy': 'gXfHIuk4JpY',
      'M5:Typing Speed Improvement': 'tU_AXrvQjpo',
      'M5:Keyboard Shortcuts': 'wIEeMtxh6os',
      'M5:Numeric Keypad': 'b5tSSWgYrQk',
      'M5:Function Keys': '_cetJV6SmBc',
      'M5:Practice Exercises': '6xB7Key3Nys',
      'M6:Introduction to Microsoft Word': '5eTKElZLM9Q',
      'M6:Creating Documents': 'Iwg1VB3IusA',
      'M6:Formatting Text': 'pmAl-8Tf8Pg',
      'M6:Paragraph Formatting': 'cvS4_9u-HnM',
      'M6:Page Layout': '-GaQiukMjbQ',
      'M6:Tables': 'aPlxqYvtpl4',
      'M6:Images': 'dE3UKwIRhuw',
      'M6:Headers & Footers': 'Ry-ft-ARVjk',
      'M6:Page Numbers': 'UTnItJLMvhg',
      'M6:Spell Check': 'toa8WUIUQ_U',
      'M6:Mail Merge': 'rGG-In7PAEk',
      'M6:Printing Documents': 'v5PIRRpt4xc',
      'M7:Introduction to Excel': 'Vl0H-qTclOg',
      'M7:Worksheets & Workbooks': 'I7j-Hf0v3nA',
      'M7:Data Entry': 'qABzZRI4mEY',
      'M7:Cell Formatting': 'OmA6l7xwNHo',
      'M7:Basic Formulas': 'ZwiQ0W5lTEg',
      'M7:Functions (SUM, AVERAGE, MIN, MAX)': 'fFiOC_Dw6cU',
      'M7:Charts': '64DSXejsYbo',
      'M7:Sorting & Filtering': 'O28-xL5YGkE',
      'M7:Printing Worksheets': 'HfwMo6M1XzM',
      'M8:Introduction to PowerPoint': '0M6pJFfS2L4',
      'M8:Creating Presentations': 'l5Ij7nUy9UQ',
      'M8:Slide Layouts': 'am3mkE3z040',
      'M8:Themes': 'HtUyqhOFQRM',
      'M8:Images & Icons': '7vqrNZ5E2IQ',
      'M8:SmartArt': 'F8oZJV1Gjto',
      'M8:Charts': 'F0_qtFoc1G8',
      'M8:Animations': '3uJd-_JpG1w',
      'M8:Transitions': 'kbPybHG2kCk',
      'M8:Presenting Slides': 'DCjPnvNHuIE',
      'M9:What is the Internet?': 'qRZ-970JaLc',
      'M9:Web Browsers': 'ctPiY8uFX6g',
      'M9:Search Engines': 'wn4BUsjJZzo',
      'M9:Effective Online Searching': 'Q2cxHULfQiI',
      'M9:Downloading Files': 'XeYPa7XBrbI',
      'M9:Uploading Files': 'EVXvmsxiHr4',
      'M9:Browser Settings': 'zuRofKQJleA',
      'M9:Bookmarks': 'dNlC2sCreoA',
      'M9:Safe Browsing': 'bglWBr_rbM0',
      'M9:Internet Practice': 'zN8YNNHcaZc',
      'M10:Creating an Email Account': 'FE5sXHNk9dY',
      'M10:Sending Emails': 'BcWHwR8Dg1c',
      'M10:Receiving Emails': '_y5rYTIK4Z4',
      'M10:Attachments': '5IhNy9x5_ec',
      'M10:Email Etiquette': 'fMV7fFh_ZuM',
      'M10:Calendar Basics': '5GdxyXoD1xk',
      'M10:Video Conferencing': 'FnFSBjFvK2o',
      'M10:Online Meetings': 'ZemU4zEmp-I',
      'M10:Instant Messaging': 'UoPrB2qgDSA',
      'M10:Collaboration Tools': '9J5EWiB3z-Q',
      'M11:What is Cloud Computing?': 'RWgW-CgdIk0',
      'M11:Google Drive': 'gdrxAoqfvbA',
      'M11:OneDrive': 'prA75mu3arc',
      'M11:Dropbox': 'Z9XDtosBAm8',
      'M11:Uploading Files': 'Ky-g6Kc_p7I',
      'M11:Sharing Files': 't4kdlE0eFrI',
      'M11:Collaborative Editing': 'Ry-2y4-aYF0',
      'M11:Cloud Storage Security': 'sOTpv3mdsVU',
      'M12:Password Security': 'hXX91VlfbLw',
      'M12:Two-Factor Authentication': 'rq_yYNAUQCg',
      'M12:Malware': 'H0DHSetMhv0',
      'M12:Viruses': 'cFo5D9mFUJQ',
      'M12:Phishing': '88IXY7lI1-0',
      'M12:Safe Downloads': 'GKGzN76lrvo',
      'M12:Data Privacy': 'Oytxdgqr7-g',
      'M12:Device Security': '2D-LuLgW3xw',
      'M12:Antivirus Software': 'jWE-OZjlg4A',
      'M12:Safe Internet Practices': 'HxySrSbSY7o',
      'M13:Time Management Apps': 'v8c8-OjwjF8',
      'M13:Google Workspace': 'jOTQR6Hqjoo',
      'M13:Microsoft 365': '0pYc4kfybs0',
      'M13:Online Collaboration': 'UGowQt4E2PM',
      'M13:Note-Taking Apps': 'JfylhOBqL_4',
      'M13:Task Management': 'gUjsXZN3Wvg',
      'M13:File Sharing': 'h7uViQWhtU8',
      'M13:Digital Organization': 'N8kuCD_81n0',
      'M14:Introduction to Artificial Intelligence': 'VGFpV3Qj4as',
      'M14:Using ChatGPT': 'g5oEAoKdrdw',
      'M14:AI Productivity Tools': 'tIttdEx_adw',
      'M14:AI for Writing': 'fQQzPf2y2l8',
      'M14:AI for Research': 'em39PxLmU-s',
      'M14:AI for Presentations': 'Hjkdlk9NpXs',
      'M14:Responsible AI Use': 'ynskISIOZz4',
      'M14:Future Technology Trends': '7JQV1-CcCms',
      'M15:Cleaning Your Computer': 'FEdC_Np6jUs',
      'M15:Software Updates': 'MuCwrz4Tzhk',
      'M15:Installing Applications': 'ZbLTOPGPjgk',
      'M15:Uninstalling Applications': 'sveWioDniK0',
      'M15:Disk Cleanup': 'dFkqjuxzyWA',
      'M15:Storage Management': 'sQ46jxp2wwo',
      'M15:Basic Troubleshooting': 'gie6tXhTtDk',
      'M15:Computer Performance Optimization': 'tjGfGqVYpFQ',
      'M16:Business Communication': '10YgTqd9M9Y',
      'M16:Resume Writing': 'z9oEbG1GhqM',
      'M16:Job Application Preparation': 'sOaYoqsUs2k',
      'M16:Professional Email Writing': 'VQNK38iKRxk',
      'M16:Office Etiquette': 'PuMX30xZktE',
      'M16:Workplace Collaboration': 'BfnWnFNgCEM',
      'M16:Time Management': 'iONDebHX9qk',
      'M16:Digital Professionalism': '5lSijG6xAOk',
      'M18:Essential Digital Skills for Employment': 'ul0h8uQ0MVM',
      'M18:Freelancing Opportunities': 'KR1WYQEehwc',
      'M18:LinkedIn Basics': 'UCkgBTmAb9E',
      'M18:Building a Professional Portfolio': 'uS6lhmCf1jw',
      'M18:Interview Preparation': 'sQweshdUWdI',
      'M18:Workplace Technology': 'mV3QEqr7Xi0',
      'M18:Continuous Learning': 'JCGTDXEeiNM',
      'M18:Career Planning': 'fCNAubMwHew',
      'M1:What is Computer Literacy?': 'WpUTsnZwd3Q',
      'M1:Importance of Digital Skills': 'edCSAINyDYQ',
      'M1:Careers That Require Computer Skills': 'OjdpJWFP_po'
    }
  };

  function normMap(src){var out={};Object.keys(src||{}).forEach(function(cid){out[cid]={};Object.keys(src[cid]).forEach(function(k){var id=vid(src[cid][k]);if(id)out[cid][k]=id;});});return out;}
  window.TIH_MODULE_VIDEOS = normMap(MODULES);
  window.TIH_TOPIC_VIDEOS = normMap(TOPICS);
})();
