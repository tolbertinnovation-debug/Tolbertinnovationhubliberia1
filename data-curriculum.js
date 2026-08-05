/* TIH Complete Data Analysis (Excel, Power BI & Google Sheets) Certificate.
   Rebuilds COURSES_DB.data into the full 20-module program taking a complete
   beginner to a job-ready data analyst: data fundamentals, Excel (essentials,
   formulas, advanced analysis), Google Sheets (basics & advanced), data
   cleaning, visualization, Power BI (fundamentals & advanced), business
   intelligence & reporting, statistics, AI for data, data storytelling, SQL,
   career, real-world dashboards, a capstone and a graduation module. Every
   content lesson has a video + printable notes; project lessons carry briefs
   and downloadable practice files. Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'data';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._dataFullBuilt) return;

  var V = ['Nf6S6tUHOXw', 'Yov488pacDc', 'kIZkNDKllws', 'sVZiU9QHdB4', '2s-zPZKERP4', 'dvbLrwD2SpA', 'nGQfc0V3NXk', 'gPHzXAncp5I', 'VaOhNqNtGGE', 'kp_Mb4E-nig', 'lGhxfC0_g9c', 'cjjAJM1o5E8', 'H79S8YDuYUU', 'n9LNj8IEyQs', 'QXzopqpHlSs', '1gOQYLgGpKA', 'x7mzOYEn0XA', 'EYd36SJrCrg', '9n-_vIAT-GY', 'iNaDxZXc_Ao'];
  var VIDEOS = {
    orientation: [V[0], V[1]], fundamentals: [V[1], V[2]], excel: [V[2], V[3]], formulas: [V[3], V[4]],
    advexcel: [V[4], V[5]], sheets: [V[5], V[6]], advsheets: [V[6], V[7]], cleaning: [V[7], V[8]],
    viz: [V[8], V[9]], powerbi: [V[9], V[10]], advpowerbi: [V[10], V[11]], bi: [V[11], V[12]],
    stats: [V[12], V[13]], ai: [V[13], V[14]], storytelling: [V[14], V[15]], sql: [V[15], V[16]],
    career: [V[16], V[17]], projects: [V[3], V[9]], capstone: [V[0], V[11]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Data Analysis?', 'Careers in Data Analytics', 'Data Analytics Process', 'Types of Data', 'Course Roadmap', 'Setting Up Your Learning Environment', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Data Fundamentals', '🧩', 'fundamentals', 'content', ['Understanding Data', 'Data Types', 'Structured vs. Unstructured Data', 'Databases vs. Spreadsheets', 'Data Collection Methods', 'Data Quality', 'Data Ethics', 'Business Metrics', 'Key Performance Indicators (KPIs)', 'Data Fundamentals Assessment']],
    [3, 'Microsoft Excel Essentials', '📗', 'excel', 'content', ['Introduction to Excel', 'Workbook & Worksheet Management', 'Cell Formatting', 'Data Entry Techniques', 'Tables', 'Sorting & Filtering', 'Conditional Formatting', 'Data Validation', 'Freeze Panes', 'Excel Best Practices']],
    [4, 'Excel Formulas & Functions', '🧮', 'formulas', 'content', ['Arithmetic Formulas', 'SUM, AVERAGE, COUNT', 'IF Statements', 'AND & OR Functions', 'VLOOKUP', 'XLOOKUP', 'INDEX & MATCH', 'Text Functions', 'Date & Time Functions', 'Logical Functions', 'Financial Functions', 'Error Handling', 'Formula Auditing', 'Named Ranges', 'Practice Exercises']],
    [5, 'Advanced Excel Data Analysis', '📈', 'advexcel', 'content', ['Pivot Tables', 'Pivot Charts', 'Slicers & Timelines', 'Advanced Filtering', 'What-If Analysis', 'Goal Seek', 'Scenario Manager', 'Solver (Introduction)', 'Data Consolidation', 'Excel Dashboard Project']],
    [6, 'Google Sheets Fundamentals', '📄', 'sheets', 'content', ['Introduction to Google Sheets', 'Sharing & Collaboration', 'Formatting', 'Formulas', 'Functions', 'Charts', 'Conditional Formatting', 'Data Validation', 'Protected Ranges', 'Google Forms Integration']],
    [7, 'Advanced Google Sheets', '📑', 'advsheets', 'content', ['QUERY Function', 'FILTER Function', 'IMPORTRANGE', 'ARRAYFORMULA', 'Pivot Tables', 'Named Functions', 'Dashboards', 'Automation with Apps Script (Introduction)', 'Connected Sheets', 'Google Sheets Project']],
    [8, 'Data Cleaning & Preparation', '🧼', 'cleaning', 'content', ['Data Cleaning Principles', 'Removing Duplicates', 'Handling Missing Data', 'Correcting Data Errors', 'Standardizing Data', 'Text to Columns', 'Flash Fill', 'Data Transformation', 'Preparing Data for Analysis', 'Data Cleaning Project']],
    [9, 'Data Visualization', '📉', 'viz', 'content', ['Visualization Principles', 'Choosing the Right Chart', 'Column Charts', 'Line Charts', 'Pie Charts', 'Bar Charts', 'Scatter Plots', 'Heat Maps', 'Interactive Dashboards', 'Data Storytelling']],
    [10, 'Microsoft Power BI Fundamentals', '⚡', 'powerbi', 'content', ['Introduction to Power BI', 'Installing Power BI Desktop', 'Connecting Data Sources', 'Data Import', 'Power Query Editor', 'Data Modeling', 'Relationships', 'Creating Reports', 'Publishing Reports', 'Power BI Project']],
    [11, 'Advanced Power BI', '🔷', 'advpowerbi', 'content', ['DAX Fundamentals', 'Measures', 'Calculated Columns', 'Time Intelligence', 'Interactive Dashboards', 'Drill-Down Reports', 'Bookmarks', 'Performance Optimization', 'Power BI Service', 'Power BI Workspace Collaboration']],
    [12, 'Business Intelligence & Reporting', '📊', 'bi', 'content', ['Business Intelligence Concepts', 'KPI Dashboards', 'Executive Reports', 'Financial Dashboards', 'Sales Dashboards', 'Marketing Dashboards', 'HR Dashboards', 'Operations Dashboards', 'Dashboard Design Best Practices', 'Reporting Project']],
    [13, 'Statistics for Data Analysis', '🔢', 'stats', 'content', ['Descriptive Statistics', 'Mean, Median & Mode', 'Standard Deviation', 'Percentages', 'Growth Rates', 'Correlation', 'Trend Analysis', 'Forecasting Basics', 'Sampling', 'Statistical Analysis Project']],
    [14, 'AI for Data Analysis', '🤖', 'ai', 'content', ['ChatGPT for Data Analysis', 'Microsoft Copilot for Excel', 'AI Data Cleaning', 'AI Data Visualization', 'AI Report Generation', 'AI Insights', 'Responsible AI', 'AI Productivity Tools']],
    [15, 'Data Storytelling & Presentation', '🗣️', 'storytelling', 'content', ['Storytelling with Data', 'Executive Communication', 'Report Writing', 'Presentation Design', 'Dashboard Presentations', 'Business Recommendations', 'Stakeholder Communication', 'Presentation Project']],
    [16, 'SQL Fundamentals for Analysts', '🗃️', 'sql', 'content', ['Introduction to Databases', 'SQL Basics', 'SELECT Statements', 'WHERE Clauses', 'Sorting Data', 'Filtering Data', 'Aggregate Functions', 'GROUP BY', 'JOIN Basics', 'SQL Practice Exercises']],
    [17, 'Career Development', '📋', 'career', 'content', ['Building a Data Analytics Portfolio', 'Resume Writing', 'LinkedIn Optimization', 'Interview Preparation', 'Freelancing Opportunities', 'Professional Certifications', 'Career Roadmap', 'Continuous Learning']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Sales Performance Dashboard', 'Financial Analysis Dashboard', 'Marketing Campaign Analysis', 'Human Resources Dashboard', 'Inventory Management Dashboard', 'Customer Satisfaction Analysis', 'NGO Data Reporting', 'Education Data Dashboard', 'Business Performance Dashboard', 'Executive Analytics Presentation']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Collect Real-World Data', 'Clean & Prepare Data', 'Analyze Business Performance', 'Build an Interactive Dashboard', 'Generate Business Insights', 'Present Recommendations', 'Publish Final Report', 'Portfolio Submission']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Excel Assessment', 'Google Sheets Assessment', 'Power BI Assessment', 'Data Cleaning Assessment', 'Statistics Assessment', 'SQL Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'data analysis foundations', fundamentals: 'data fundamentals', excel: 'Microsoft Excel essentials', formulas: 'Excel formulas & functions', advexcel: 'advanced Excel analysis', sheets: 'Google Sheets', advsheets: 'advanced Google Sheets', cleaning: 'data cleaning & preparation', viz: 'data visualization', powerbi: 'Microsoft Power BI', advpowerbi: 'advanced Power BI', bi: 'business intelligence & reporting', stats: 'statistics for data analysis', ai: 'AI for data analysis', storytelling: 'data storytelling & presentation', sql: 'SQL for analysts', career: 'data analytics careers', projects: 'real-world analytics projects', capstone: 'your capstone project', assessment: 'your skills' };

  var FILES = '<div class="study-callout"><strong>📎 Practice files:</strong> download the Excel practice file, Power BI dataset, Google Sheets template or SQL practice database for this lesson, follow along on your own computer, then Print → Save as PDF to keep your notes.</div>';
  var KPI = '<div class="study-callout"><h4>📥 Template: KPI Tracker / Dashboard</h4><ul><li>KPI · Target · Actual · Variance · Trend · Owner</li><li>Group by finance, sales, marketing, operations, people</li><li>Use slicers/filters for interactivity</li><li>Highlight status with Red/Amber/Green</li></ul><p style="margin-top:.4rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>';
  function extraFor(skill, name) {
    if (/KPI|Dashboard/i.test(name)) return KPI;
    if (/excel|formulas|advexcel|sheets|advsheets|cleaning|viz|powerbi|advpowerbi|bi|sql|projects/.test(skill)) return FILES;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'data skills';
    var focus = position % 2 ? 'hands-on practice with real datasets and tools' : 'understanding the concept, applying it to data and reviewing the result';
    var extra = extraFor(skill, name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Data Analysis · ' + esc(moduleTitle) + '</strong><span>Excel · Power BI · Sheets</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two hands-on exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and when analysts use it.</li>' +
      '<li>Follow the step-by-step method in the tool.</li>' +
      '<li>Practise it on a real dataset and check your result.</li></ul>' +
      (extra || '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real dataset — sales, finance, an NGO report or a Kaggle dataset.</div>') +
      '<h4>Hands-on exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Recreate the example for <em>' + esc(name) + '</em> on a sample dataset.</li>' +
      '<li><strong>Exercise 2:</strong> Apply it to your own data and note one insight it reveals.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a job-ready data analyst.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on analytics project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Build it with real or sample data (Excel, Power BI or Google Sheets) and add it to your data analytics portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Get and clean the dataset.</li><li>Analyse it and build the dashboard/report with clear visuals.</li><li>Write the key insights and recommendations, then publish it to your portfolio (e.g. GitHub).</li></ol>' +
      FILES +
      '<p><strong>Deliverable:</strong> A working dashboard/report with insights, added to your portfolio.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Data analysis is the process of:', opts: ['Only storing files', 'Collecting, cleaning, analysing and presenting data to inform decisions', 'Only drawing charts', 'Deleting data'], correct: 1, exp: 'Analysis turns raw data into insight for decisions.' },
      { q: 'The data analytics process typically starts with:', opts: ['Presenting', 'Defining the question and collecting data', 'Deleting data', 'Guessing'], correct: 1, exp: 'Start with the question, then collect and prepare data.' },
      { q: 'A job-ready analyst can use:', opts: ['Only one tool', 'Excel, Power BI, Google Sheets and basic SQL', 'No tools', 'Only email'], correct: 1, exp: 'Analysts work across spreadsheets, BI tools and SQL.' },
      { q: 'The best way to learn analytics is to:', opts: ['Only read', 'Practise on real datasets and build dashboards', 'Avoid data', 'Memorise terms'], correct: 1, exp: 'Hands-on practice on real data builds the skill.' },
      { q: 'A data analytics portfolio should show:', opts: ['Nothing', 'Real projects: cleaned data, dashboards and insights', 'Only certificates', 'Only text'], correct: 1, exp: 'Employers want to see real analysis and dashboards.' },
      { q: 'Good analysis always ends with:', opts: ['Raw numbers only', 'Clear insights and recommendations for decision-makers', 'No conclusion', 'Hidden results'], correct: 1, exp: 'Insight and recommendations make analysis useful.' }
    ],
    fundamentals: [
      { q: 'Structured data is:', opts: ['Random text', 'Organised in rows/columns (e.g. a table)', 'Only images', 'Only audio'], correct: 1, exp: 'Structured data fits neatly into tables.' },
      { q: 'A KPI is a:', opts: ['Random number', 'Key metric that measures performance against a goal', 'A chart type', 'A database'], correct: 1, exp: 'KPIs track progress toward objectives.' },
      { q: 'Data quality matters because:', opts: ['It does not', 'Poor data leads to wrong conclusions', 'More data is always fine', 'Errors help'], correct: 1, exp: 'Garbage in, garbage out — quality drives good analysis.' },
      { q: 'A database differs from a spreadsheet in that it:', opts: ['Is the same', 'Handles large, related data more robustly', 'Cannot store data', 'Is only for charts'], correct: 1, exp: 'Databases scale and enforce structure better than spreadsheets.' },
      { q: 'Data ethics includes:', opts: ['Sharing everything', 'Respecting privacy and using data responsibly', 'Ignoring consent', 'Faking data'], correct: 1, exp: 'Handle data lawfully, fairly and with respect for privacy.' },
      { q: 'Unstructured data includes:', opts: ['Only tables', 'Text, images, audio and video', 'Only numbers', 'Only spreadsheets'], correct: 1, exp: 'Unstructured data has no fixed tabular format.' }
    ],
    excel: [
      { q: 'In Excel, a cell reference like B3 means:', opts: ['Row B, column 3', 'Column B, row 3', 'A formula', 'A chart'], correct: 1, exp: 'Columns are letters, rows are numbers: B3 = column B, row 3.' },
      { q: 'Conditional formatting is used to:', opts: ['Delete data', 'Highlight cells based on rules', 'Print faster', 'Send email'], correct: 1, exp: 'It formats cells that meet conditions (e.g. highlight top values).' },
      { q: 'Sorting data lets you:', opts: ['Hide data', 'Arrange rows by a column’s values', 'Delete rows', 'Add charts'], correct: 1, exp: 'Sorting orders data ascending/descending.' },
      { q: 'A filter lets you:', opts: ['Show only rows meeting criteria', 'Delete all data', 'Change fonts', 'Print'], correct: 0, exp: 'Filters display only rows matching your criteria.' },
      { q: 'Data validation is used to:', opts: ['Allow any input', 'Restrict what can be entered in a cell', 'Delete data', 'Add colour only'], correct: 1, exp: 'Validation controls allowed inputs (e.g. a dropdown list).' },
      { q: 'An Excel Table (Ctrl+T) helps by:', opts: ['Nothing', 'Structuring data with filters and dynamic ranges', 'Only colour', 'Deleting rows'], correct: 1, exp: 'Tables add structure, filters and auto-expanding ranges.' }
    ],
    formulas: [
      { q: 'Every Excel formula begins with:', opts: ['A letter', 'An equals sign (=)', 'A space', 'A comma'], correct: 1, exp: 'Formulas start with = , e.g. =A1+B1.' },
      { q: 'SUM(A1:A10) does what?', opts: ['Counts words', 'Adds the values in A1 to A10', 'Sorts them', 'Deletes them'], correct: 1, exp: 'SUM adds a range of numbers.' },
      { q: 'VLOOKUP is used to:', opts: ['Draw charts', 'Look up a value in a table by its first column', 'Delete data', 'Format cells'], correct: 1, exp: 'VLOOKUP finds a value in the leftmost column and returns a related value.' },
      { q: 'XLOOKUP improves on VLOOKUP because it:', opts: ['Is slower', 'Can look left or right and is more flexible', 'Cannot search', 'Only sums'], correct: 1, exp: 'XLOOKUP searches in any direction and handles more cases.' },
      { q: 'An IF statement returns:', opts: ['Always the same value', 'One value if a condition is true, another if false', 'Only text', 'Nothing'], correct: 1, exp: 'IF(condition, value_if_true, value_if_false).' },
      { q: 'INDEX & MATCH together can:', opts: ['Only add', 'Look up values flexibly, including to the left', 'Delete rows', 'Only format'], correct: 1, exp: 'INDEX/MATCH is a flexible lookup alternative to VLOOKUP.' }
    ],
    sheets: [
      { q: 'Google Sheets’ biggest advantage is:', opts: ['No formulas', 'Real-time online collaboration', 'No sharing', 'Offline only'], correct: 1, exp: 'Multiple people can edit a sheet together online.' },
      { q: 'The QUERY function lets you:', opts: ['Draw only', 'Run SQL-like queries on sheet data', 'Delete sheets', 'Print'], correct: 1, exp: 'QUERY filters/aggregates data using a SQL-like syntax.' },
      { q: 'IMPORTRANGE is used to:', opts: ['Delete data', 'Pull data from another spreadsheet', 'Format cells', 'Send email'], correct: 1, exp: 'IMPORTRANGE imports a range from another sheet.' },
      { q: 'ARRAYFORMULA lets a formula:', opts: ['Work on one cell only', 'Apply across a whole range at once', 'Delete data', 'Do nothing'], correct: 1, exp: 'It applies a formula to an entire array/range.' },
      { q: 'Google Forms can feed data directly into:', opts: ['Nothing', 'A linked Google Sheet', 'A printer', 'An image'], correct: 1, exp: 'Form responses populate a connected sheet automatically.' },
      { q: 'Protected ranges are used to:', opts: ['Delete data', 'Prevent others editing key cells', 'Add charts', 'Change fonts'], correct: 1, exp: 'They lock cells/ranges from unwanted edits.' }
    ],
    cleaning: [
      { q: 'Data cleaning means:', opts: ['Deleting all data', 'Fixing errors, duplicates and missing values', 'Ignoring quality', 'Only formatting colour'], correct: 1, exp: 'Cleaning prepares accurate, usable data.' },
      { q: 'Removing duplicates helps because duplicates:', opts: ['Improve accuracy', 'Distort counts and analysis', 'Are required', 'Do nothing'], correct: 1, exp: 'Duplicate rows skew totals and results.' },
      { q: 'Handling missing data can involve:', opts: ['Ignoring it always', 'Removing, filling or flagging missing values appropriately', 'Faking values', 'Deleting the file'], correct: 1, exp: 'Choose a suitable strategy for missing values.' },
      { q: 'Text to Columns is used to:', opts: ['Merge cells', 'Split one column into several by a delimiter', 'Delete text', 'Add charts'], correct: 1, exp: 'It splits combined text (e.g. "First Last") into columns.' },
      { q: 'Flash Fill helps by:', opts: ['Doing nothing', 'Auto-filling a pattern it detects from your examples', 'Deleting rows', 'Only colouring'], correct: 1, exp: 'Flash Fill detects and completes patterns automatically.' },
      { q: 'Standardizing data means:', opts: ['Random formats', 'Making formats consistent (dates, text case, units)', 'Deleting data', 'Ignoring errors'], correct: 1, exp: 'Consistent formats make data reliable to analyse.' }
    ],
    viz: [
      { q: 'The right chart depends on:', opts: ['Colour preference', 'The data and the message you want to show', 'Random choice', 'The logo'], correct: 1, exp: 'Match the chart type to the data and story.' },
      { q: 'A line chart is best for:', opts: ['Parts of a whole', 'Trends over time', 'A single value', 'Categories only'], correct: 1, exp: 'Line charts show change over time.' },
      { q: 'A pie chart is best for:', opts: ['Trends over time', 'Parts of a whole (few categories)', 'Correlation', 'Large tables'], correct: 1, exp: 'Pie charts show proportions of a whole.' },
      { q: 'A scatter plot shows:', opts: ['One value', 'The relationship between two variables', 'A single category', 'A title only'], correct: 1, exp: 'Scatter plots reveal correlation between two variables.' },
      { q: 'Good data visualization should:', opts: ['Confuse the reader', 'Be clear, honest and easy to understand', 'Use every colour', 'Hide the point'], correct: 1, exp: 'Clarity and honesty are core visualization principles.' },
      { q: 'Data storytelling means:', opts: ['Only showing numbers', 'Guiding the audience to insight with a clear narrative', 'Hiding data', 'Random charts'], correct: 1, exp: 'Storytelling turns charts into a clear, persuasive message.' }
    ],
    powerbi: [
      { q: 'Power BI is used to:', opts: ['Write essays', 'Build interactive reports and dashboards from data', 'Edit photos', 'Send email'], correct: 1, exp: 'Power BI is a business-intelligence/dashboard tool.' },
      { q: 'Power Query Editor is used to:', opts: ['Present slides', 'Import, clean and transform data', 'Draw logos', 'Play music'], correct: 1, exp: 'Power Query shapes and cleans data before modelling.' },
      { q: 'A relationship in Power BI links:', opts: ['Two colours', 'Tables by a common key', 'Two charts', 'Two files randomly'], correct: 1, exp: 'Relationships connect tables via matching keys.' },
      { q: 'DAX is:', opts: ['A chart', 'The formula language for measures/calculations in Power BI', 'A database', 'A file type'], correct: 1, exp: 'DAX creates measures and calculated columns.' },
      { q: 'A measure in Power BI is:', opts: ['A static value', 'A dynamic calculation (e.g. total sales) that responds to filters', 'A colour', 'A table'], correct: 1, exp: 'Measures compute values dynamically as filters change.' },
      { q: 'Publishing to the Power BI Service lets you:', opts: ['Nothing', 'Share dashboards online with others', 'Delete data', 'Only print'], correct: 1, exp: 'The Service shares and collaborates on reports online.' }
    ],
    stats: [
      { q: 'The mean is the:', opts: ['Middle value', 'Average of the numbers', 'Most frequent value', 'Largest value'], correct: 1, exp: 'Mean = sum ÷ count.' },
      { q: 'The median is the:', opts: ['Average', 'Middle value of ordered data', 'Most frequent value', 'Range'], correct: 1, exp: 'Median is the middle of sorted values.' },
      { q: 'Standard deviation measures:', opts: ['The average only', 'How spread out the data is', 'The count', 'The largest value'], correct: 1, exp: 'It quantifies variability/spread.' },
      { q: 'Correlation describes:', opts: ['Cause', 'How two variables move together (not necessarily cause)', 'A single value', 'A chart'], correct: 1, exp: 'Correlation ≠ causation; it measures association.' },
      { q: 'Trend analysis looks at:', opts: ['One point', 'How data changes over time', 'Only colours', 'The logo'], correct: 1, exp: 'Trends reveal direction/patterns over time.' },
      { q: 'The mode is the:', opts: ['Average', 'Most frequently occurring value', 'Middle value', 'Spread'], correct: 1, exp: 'Mode is the most common value.' }
    ],
    sql: [
      { q: 'SQL is used to:', opts: ['Draw charts', 'Query and manage data in databases', 'Edit photos', 'Send email'], correct: 1, exp: 'SQL retrieves and manages relational data.' },
      { q: 'SELECT is used to:', opts: ['Delete rows', 'Retrieve data from a table', 'Create a chart', 'Format cells'], correct: 1, exp: 'SELECT reads/returns data.' },
      { q: 'The WHERE clause is used to:', opts: ['Sort data', 'Filter rows by a condition', 'Join tables', 'Delete a database'], correct: 1, exp: 'WHERE filters rows meeting a condition.' },
      { q: 'GROUP BY is used with aggregate functions to:', opts: ['Delete groups', 'Summarise data by category (e.g. total per region)', 'Sort only', 'Format'], correct: 1, exp: 'GROUP BY aggregates rows into groups.' },
      { q: 'A JOIN is used to:', opts: ['Split a table', 'Combine rows from two related tables', 'Delete data', 'Add a chart'], correct: 1, exp: 'JOINs combine data across related tables.' },
      { q: 'ORDER BY is used to:', opts: ['Filter rows', 'Sort the results', 'Join tables', 'Delete rows'], correct: 1, exp: 'ORDER BY sorts the query output.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', excel: 'excel', formulas: 'formulas', advexcel: 'excel', sheets: 'sheets', advsheets: 'sheets', cleaning: 'cleaning', viz: 'viz', powerbi: 'powerbi', advpowerbi: 'powerbi', bi: 'viz', stats: 'stats', ai: 'general', storytelling: 'viz', sql: 'sql', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.excel, BANK.formulas, BANK.sheets, BANK.cleaning, BANK.viz, BANK.powerbi, BANK.stats, BANK.sql);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Excel/i.test(name)) return 'excel';
    if (/Google Sheets|Sheets/i.test(name)) return 'sheets';
    if (/Power BI/i.test(name)) return 'powerbi';
    if (/Cleaning/i.test(name)) return 'cleaning';
    if (/Statistics/i.test(name)) return 'stats';
    if (/SQL/i.test(name)) return 'sql';
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
        var qid = 'da-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world dashboards/projects in Module 18 (10 projects).</li><li>Complete the capstone in Module 19 and publish your analytics portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'da-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'da-m' + num + '-a' + flat;
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
      var pqid = 'da-m' + num + '-q' + flat;
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
    title: 'Complete Data Analysis with Excel, Power BI & Google Sheets Certificate',
    shortDesc: 'A full 20-module program from complete beginner to job-ready data analyst: data fundamentals, Excel (essentials, formulas, advanced), Google Sheets, data cleaning, visualization, Power BI (fundamentals & advanced), business intelligence & reporting, statistics, AI for data, data storytelling, SQL, 10 real-world dashboards, a capstone and a Certificate of Completion.',
    category: 'Data & Analytics',
    icon: ex.icon || '📊',
    gradient: ex.gradient || 'linear-gradient(135deg,#0d9488,#065f46)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH analysts',
    duration: '160h+',
    level: 'Beginner → Job-Ready',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$180',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-DATA-0001',
    learn: [
      'Collect, clean, analyse, visualise and present data',
      'Master Microsoft Excel: formulas, functions, pivot tables and dashboards',
      'Use Google Sheets (incl. QUERY, FILTER, ARRAYFORMULA) and Power BI',
      'Build interactive dashboards and business intelligence reports',
      'Apply statistics, write basic SQL, and use AI to speed up analysis',
      'Tell data stories and build a job-ready analytics portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A computer with Excel (or Google Sheets) and internet access',
      'Willingness to practise on real datasets'
    ],
    about: [
      'This is the complete TIH Data Analysis Certificate, rebuilt into twenty modules that take you from complete beginner to job-ready data analyst across Excel, Power BI and Google Sheets.',
      'Every content lesson has a video and printable notes with downloadable practice files; ten real-world dashboards and a capstone build a portfolio for roles like Data Analyst, Business Analyst and M&E Officer.',
      'Software & tools: Microsoft Excel, Power BI Desktop & Service, Google Sheets & Forms, Microsoft Copilot, ChatGPT, SQL (MySQL/PostgreSQL), PowerPoint, Google Slides, GitHub and Kaggle datasets. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _dataFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[DATA] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
