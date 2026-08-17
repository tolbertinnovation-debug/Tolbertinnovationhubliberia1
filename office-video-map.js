/* TIH OFFICE — specific YouTube video per topic. Course id: office */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.office || !COURSES_DB.office.modules) return;
  var MAP = {
    'Welcome to the Course': 'j-ZWL594OW8',
    'Introduction to Microsoft Office': 'j-ZWL594OW8',
    'Course Roadmap': 'j-ZWL594OW8',
    'Certificate Requirements': 'j-ZWL594OW8',
    'Certificate of Completion': 'j-ZWL594OW8',
    'Introduction to Microsoft Word': 'iBY5tpKXN6g',
    'Word Interface': 'iBY5tpKXN6g',
    'Creating Documents': 'iBY5tpKXN6g',
    'Formatting Text': 'iBY5tpKXN6g',
    'Paragraphs & Styles': 'iBY5tpKXN6g',
    'Headers & Footers': 'iBY5tpKXN6g',
    'Tables in Word': 'iBY5tpKXN6g',
    'Images in Word': 'iBY5tpKXN6g',
    'Mail Merge': 'iBY5tpKXN6g',
    'Business Letters': 'iBY5tpKXN6g',
    'Reports': 'iBY5tpKXN6g',
    'Proposals': 'iBY5tpKXN6g',
    'Meeting Minutes': 'iBY5tpKXN6g',
    'Resumes & CVs': 'HCMVSV_ztl0',
    'Cover Letters': 'HCMVSV_ztl0',
    'Introduction to Microsoft Excel': 'rwbho0CgEAE',
    'Excel Interface': 'rwbho0CgEAE',
    'Formulas': 'rwbho0CgEAE',
    'Functions': 'rwbho0CgEAE',
    'Charts': 'rwbho0CgEAE',
    'Pivot Tables': 'rwbho0CgEAE',
    'Data Cleaning': 'rwbho0CgEAE',
    'Dashboards': 'rwbho0CgEAE',
    'KPI Tracking': 'rwbho0CgEAE',
    'Data Visualization': 'rwbho0CgEAE',
    'Introduction to PowerPoint': 'u7Tku3OBug0',
    'PowerPoint Interface': 'u7Tku3OBug0',
    'Slides & Layouts': 'u7Tku3OBug0',
    'Animations': 'u7Tku3OBug0',
    'Transitions': 'u7Tku3OBug0',
    'Presentation Skills': 'u7Tku3OBug0',
    'Corporate Presentation': 'u7Tku3OBug0',
    'Introduction to Outlook': 'Vtr_o5l_O4U',
    'Email Management': 'Vtr_o5l_O4U',
    'Calendar Planning': 'Vtr_o5l_O4U',
    'Professional Email Writing': 'Vtr_o5l_O4U',
    'Introduction to Microsoft Teams': 'JJ_L_xWw1Hk',
    'Team Collaboration': 'JJ_L_xWw1Hk',
    'Meeting Management': 'JJ_L_xWw1Hk',
    'OneDrive': 'Vtr_o5l_O4U',
    'Cloud Storage Basics': 'Vtr_o5l_O4U',
    'OneNote': 'Vtr_o5l_O4U',
    'Introduction to Microsoft Copilot': 'n5b8BMrtEJ8',
    'AI in Word': 'n5b8BMrtEJ8',
    'AI in Excel': 'n5b8BMrtEJ8',
    'AI in PowerPoint': 'n5b8BMrtEJ8',
    'AI in Outlook': 'n5b8BMrtEJ8',
    'AI Prompt Writing': 'n5b8BMrtEJ8',
    'Resume Writing': 'HCMVSV_ztl0',
    'LinkedIn Optimization': 'e_DvOPN8Ar4',
    'Interview Preparation': 'e_DvOPN8Ar4',
    'Portfolio Development': 'e_DvOPN8Ar4',
    'Freelancing Opportunities': 'e_DvOPN8Ar4',
    'Microsoft Word Assessment': 'iBY5tpKXN6g',
    'Microsoft Excel Assessment': 'rwbho0CgEAE',
    'Microsoft PowerPoint Assessment': 'u7Tku3OBug0',
    'Outlook Assessment': 'Vtr_o5l_O4U',
    'Teams Assessment': 'JJ_L_xWw1Hk',
    'Copilot Assessment': 'n5b8BMrtEJ8',
    'Midterm Examination': 'j-ZWL594OW8',
    'Final Examination': 'j-ZWL594OW8',
    'Capstone Project Evaluation': 'j-ZWL594OW8',
    'Portfolio Review': 'e_DvOPN8Ar4'
  };
  function cleanTitle(t) {
    return String(t || '').replace(/^[^0-9a-zA-Z]+/, '').replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '').replace(/^(Practice|Project):\s*/i, '').replace(/\s+/g, ' ').trim();
  }
  var applied = 0;
  COURSES_DB.office.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) console.log('[OFFICE videos] applied specific video to ' + applied + ' lessons');
})();
