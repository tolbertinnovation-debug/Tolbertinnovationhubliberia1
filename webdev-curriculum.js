/* TIH Complete Web Development (Full-Stack) Program curriculum.
   Rebuilds COURSES_DB.webdev into the full 20-module program: internet
   fundamentals, HTML5, CSS3, JavaScript, Git, UI/UX, React, Node/Express,
   databases, auth & security, APIs, deployment, testing, AI tools, SEO,
   freelancing, 10 real-world apps, an industry capstone and a graduation
   module with exams and a Certificate of Completion. Every content lesson has
   a video + printable notes (with code snippets); project lessons carry briefs
   and downloadable starter code. Modelled on entrepreneurship-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.webdev || COURSES_DB.webdev._webdevFullBuilt) return;

  var V = ['pfYQz5pnFmo', 'kX3TfdUqpuU', 'AJrkz0pzRV4', 'YhoK5y0HgPk', 'fYq5PXgSsbE', 'dT3aujtzBe4', 'dJvPTRXyc6s', '5fb2aPlgoys', 'RjtarcWFc6A', 'PWqS4NBhEY8', 'H0XScE08hy8', 'e5AwNU3Y2es', 'orAS-MBh5f4', 'ubw2hdQIl4E', 'y71CdVq5SvI', 'Jz_wyVdWKm8', 'AhxvJbG-kSA', 'TCgKGPr0trA'];
  var VIDEOS = {
    orientation: [V[0], V[1]], internet: [V[1], V[2]], html: [V[0], V[3]], css: [V[4], V[5]],
    js: [V[6], V[7]], git: [V[8], V[9]], uiux: [V[10], V[11]], react: [V[12], V[13]],
    node: [V[14], V[15]], db: [V[16], V[17]], auth: [V[6], V[14]], api: [V[15], V[16]],
    deploy: [V[8], V[17]], testing: [V[6], V[7]], ai: [V[0], V[12]], seo: [V[10], V[2]],
    career: [V[1], V[11]], projects: [V[3], V[4]], capstone: [V[12], V[14]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Web Development?', 'Frontend vs Backend vs Full Stack', 'How the Internet Works', 'Setting Up Your Development Environment', 'Installing VS Code', 'Installing Git', 'Installing Node.js', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Internet Fundamentals', '🌐', 'internet', 'content', ['How Websites Work', 'Domain Names', 'Web Hosting', 'HTTP & HTTPS', 'Web Browsers', 'Client-Server Architecture', 'DNS', 'APIs Explained', 'JSON Basics', 'Developer Tools']],
    [3, 'HTML5', '📄', 'html', 'content', ['Introduction to HTML', 'HTML Document Structure', 'Headings & Paragraphs', 'Links', 'Images', 'Lists', 'Tables', 'Forms', 'Input Types', 'Semantic HTML', 'Audio & Video', 'Iframes', 'HTML Best Practices', 'Accessibility Basics', 'HTML Project']],
    [4, 'CSS3', '🎨', 'css', 'content', ['Introduction to CSS', 'Selectors', 'Colors', 'Typography', 'Backgrounds', 'Borders', 'Margins & Padding', 'Box Model', 'Display', 'Positioning', 'Flexbox', 'CSS Grid', 'Animations', 'Transitions', 'Responsive Design', 'Media Queries', 'CSS Variables', 'Bootstrap', 'Tailwind CSS', 'CSS Project']],
    [5, 'JavaScript Fundamentals', '📜', 'js', 'content', ['Introduction to JavaScript', 'Variables', 'Data Types', 'Operators', 'Functions', 'Arrays', 'Objects', 'Loops', 'Conditions', 'Events', 'DOM Manipulation', 'ES6 Features', 'Modules', 'Error Handling', 'Local Storage', 'Fetch API', 'Async & Await', 'Promises', 'JavaScript Project']],
    [6, 'Version Control', '🔀', 'git', 'content', ['Git Basics', 'GitHub', 'Branches', 'Merging', 'Pull Requests', 'Collaboration', 'GitHub Pages']],
    [7, 'UI/UX Design', '🎯', 'uiux', 'content', ['UI Principles', 'UX Basics', 'Wireframing', 'Figma', 'Color Theory', 'Typography', 'Responsive Layouts', 'Accessibility']],
    [8, 'React.js', '⚛️', 'react', 'content', ['Introduction to React', 'JSX', 'Components', 'Props', 'State', 'Events', 'Forms', 'Hooks', 'React Router', 'API Integration', 'Context API', 'Project Structure', 'React Project']],
    [9, 'Backend Development (Node.js)', '🟢', 'node', 'content', ['Introduction to Node.js', 'npm', 'Modules', 'File System', 'HTTP Server', 'Environment Variables', 'Express.js', 'Routing', 'Middleware', 'REST APIs', 'Authentication Basics', 'File Uploads', 'Backend Project']],
    [10, 'Databases', '🗄️', 'db', 'content', ['Database Basics', 'SQL vs NoSQL', 'MongoDB', 'CRUD Operations', 'Mongoose', 'MySQL Basics', 'Database Relationships', 'Database Design', 'Connecting Frontend & Backend']],
    [11, 'Authentication & Security', '🔐', 'auth', 'content', ['User Registration', 'Login System', 'Password Hashing', 'JWT Authentication', 'Session Authentication', 'Authorization', 'Security Best Practices', 'Preventing Common Attacks']],
    [12, 'APIs', '🔌', 'api', 'content', ['REST API', 'CRUD API', 'API Testing', 'Postman', 'Third-Party APIs', 'API Documentation', 'Building Your Own API']],
    [13, 'Deployment', '🚀', 'deploy', 'content', ['Preparing for Production', 'Domain Names', 'Hosting Websites', 'Deploying Frontend', 'Deploying Backend', 'Database Hosting', 'SSL Certificates', 'CI/CD Basics']],
    [14, 'Testing & Debugging', '🧪', 'testing', 'content', ['Browser DevTools', 'Debugging JavaScript', 'Error Logging', 'Unit Testing', 'API Testing', 'Performance Optimization', 'Website Auditing']],
    [15, 'AI Tools for Developers', '🤖', 'ai', 'content', ['Using ChatGPT for Coding', 'GitHub Copilot', 'AI Debugging', 'AI Code Review', 'AI Website Generation', 'AI Productivity Tips']],
    [16, 'SEO & Performance', '⚡', 'seo', 'content', ['SEO Fundamentals', 'Technical SEO', 'Page Speed Optimization', 'Image Optimization', 'Lazy Loading', 'Core Web Vitals', 'Structured Data']],
    [17, 'Freelancing & Career Development', '💼', 'career', 'content', ['Building a Portfolio', 'Creating a Resume', 'GitHub Portfolio', 'LinkedIn Profile', 'Freelancing Platforms', 'Client Communication', 'Pricing Your Services', 'Interview Preparation']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Personal Portfolio Website', 'Business Website', 'School Management System', 'E-commerce Website', 'Blog Website', 'Restaurant Website', 'Hotel Booking Website', 'Learning Management System', 'Chat Application', 'Admin Dashboard']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'UI Design', 'Frontend Development', 'Backend Development', 'Database Integration', 'Testing', 'Deployment', 'Final Presentation']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['HTML Assessment', 'CSS Assessment', 'JavaScript Assessment', 'React Assessment', 'Backend Assessment', 'Database Assessment', 'API Assessment', 'Midterm Examination', 'Final Examination', 'Full-Stack Capstone Evaluation', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment|Evaluation)(?:\s+\d+)?$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'web development foundations', internet: 'how the web works', html: 'HTML5', css: 'CSS3', js: 'JavaScript', git: 'Git & version control', uiux: 'UI/UX design', react: 'React.js', node: 'Node.js & Express backend', db: 'databases', auth: 'authentication & security', api: 'building APIs', deploy: 'deployment', testing: 'testing & debugging', ai: 'AI developer tools', seo: 'SEO & performance', career: 'freelancing & career', projects: 'building real applications', capstone: 'your capstone project', assessment: 'your skills' };

  // Downloadable starter code snippets for representative lessons.
  function codeFor(name) {
    var C = null;
    if (/Introduction to HTML|HTML Document Structure/i.test(name)) C = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>';
    else if (/Box Model|Margins & Padding/i.test(name)) C = '.card {\n  margin: 16px;\n  border: 1px solid #ccc;\n  padding: 16px;\n  box-sizing: border-box;\n}';
    else if (/Flexbox/i.test(name)) C = '.row {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}';
    else if (/^Variables$|Data Types/i.test(name)) C = 'const name = "TIH";\nlet count = 0;\ncount = count + 1;\nconsole.log(name, count);';
    else if (/^Functions$/i.test(name)) C = 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3)); // 5';
    else if (/Fetch API|REST API|CRUD API/i.test(name)) C = "fetch('/api/items')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));";
    else if (/Introduction to React|JSX|Components/i.test(name)) C = 'function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default Welcome;';
    else if (/Express\.js|HTTP Server|Routing/i.test(name)) C = "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);";
    else if (/CRUD Operations|Mongoose/i.test(name)) C = "const Item = mongoose.model('Item', { name: String });\nawait Item.create({ name: 'Book' });\nconst all = await Item.find();";
    if (!C) return '';
    return '<h4>💾 Starter code</h4><pre style="background:#0f172a;color:#e2e8f0;padding:.9rem;border-radius:8px;overflow:auto;font-size:.82rem;line-height:1.5"><code>' + esc(C) + '</code></pre><p>Copy this snippet and Print → Save as PDF to keep it with your notes.</p>';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'web development skills';
    var focus = position % 2 ? 'hands-on coding, real examples and clean, working code' : 'understanding the concept, building it step by step and debugging your result';
    var code = codeFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Web Development · ' + esc(moduleTitle) + '</strong><span>Build real websites</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two coding exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and when developers use it.</li>' +
      '<li>See a working example and the syntax or pattern involved.</li>' +
      '<li>Type it yourself — never just read code — and run it to confirm it works.</li></ul>' +
      (code ? '<div class="study-callout">' + code + '</div>' : '') +
      '<h4>Coding exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Recreate the example for <em>' + esc(name) + '</em> from scratch and run it.</li>' +
      '<li><strong>Exercise 2:</strong> Change one thing (a value, a tag, a function) and predict, then check, the result.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy of these notes and code.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your journey to becoming a full-stack developer.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on build</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical build. Follow the video and notes, then create <em>' + esc(name) + '</em> yourself and push it to GitHub for your portfolio.</p>' +
      '<h4>What to build</h4><ol><li>Plan the pages/features and the data you need.</li><li>Build the frontend, then wire up any backend/data.</li><li>Test on mobile and desktop, then deploy and add the live link to your portfolio.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A working, deployed project with its source code on GitHub — a portfolio-ready application.</div>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep the brief, and commit your source code to your own repository.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'A full-stack developer works on:', opts: ['Only design', 'Both frontend and backend of an application', 'Only databases', 'Only servers'], correct: 1, exp: 'Full-stack means both client-side and server-side.' },
      { q: 'The three core frontend technologies are:', opts: ['Python, Java, C', 'HTML, CSS and JavaScript', 'SQL, PHP, Ruby', 'React, Vue, Angular only'], correct: 1, exp: 'HTML structures, CSS styles, JavaScript adds behaviour.' },
      { q: 'HTTPS is important because it:', opts: ['Loads faster only', 'Encrypts data between browser and server', 'Removes the need for hosting', 'Is only for images'], correct: 1, exp: 'HTTPS encrypts traffic, protecting user data.' },
      { q: 'A good developer always:', opts: ['Copies code without understanding', 'Tests, reads errors and version-controls their work', 'Avoids documentation', 'Never debugs'], correct: 1, exp: 'Testing, reading errors and using Git are core habits.' },
      { q: 'The best way to learn to code is to:', opts: ['Only watch videos', 'Write and run code yourself on real projects', 'Memorise syntax', 'Avoid mistakes'], correct: 1, exp: 'Building projects is how coding skill is built.' },
      { q: 'A client-server model means:', opts: ['One computer does everything', 'A client requests and a server responds', 'There is no network', 'Only servers exist'], correct: 1, exp: 'Clients request resources; servers respond with them.' }
    ],
    html: [
      { q: 'HTML is used to:', opts: ['Style a page', 'Structure the content of a page', 'Query a database', 'Run a server'], correct: 1, exp: 'HTML defines the structure and content.' },
      { q: 'Which tag creates the largest heading?', opts: ['<h6>', '<h1>', '<head>', '<p>'], correct: 1, exp: '<h1> is the top-level, largest heading.' },
      { q: 'Semantic HTML means using tags that:', opts: ['Look nice', 'Describe their meaning (e.g. <nav>, <article>)', 'Are shortest', 'Only use divs'], correct: 1, exp: 'Semantic tags convey meaning for accessibility and SEO.' },
      { q: 'Which attribute makes an image accessible?', opts: ['src', 'alt', 'href', 'class'], correct: 1, exp: 'The alt attribute describes the image for screen readers.' },
      { q: 'A form sends data using the:', opts: ['<img> tag', '<form> tag with an action and method', '<style> tag', '<script> only'], correct: 1, exp: 'Forms use action (where) and method (how) to submit.' },
      { q: 'Which element makes a hyperlink?', opts: ['<link>', '<a>', '<p>', '<span>'], correct: 1, exp: 'The <a> (anchor) tag with href creates a link.' }
    ],
    css: [
      { q: 'CSS is used to:', opts: ['Structure content', 'Style the appearance of a page', 'Store data', 'Handle requests'], correct: 1, exp: 'CSS controls colours, layout and typography.' },
      { q: 'The CSS box model consists of:', opts: ['Only content', 'Content, padding, border and margin', 'Only margins', 'Rows and columns'], correct: 1, exp: 'Every element is content + padding + border + margin.' },
      { q: 'Flexbox is best for:', opts: ['Storing data', 'One-dimensional layouts (row or column)', 'Server routing', 'Databases'], correct: 1, exp: 'Flexbox lays items along a single axis.' },
      { q: 'A media query is used for:', opts: ['Playing audio', 'Responsive design at different screen sizes', 'Fetching data', 'Version control'], correct: 1, exp: 'Media queries apply styles based on viewport size.' },
      { q: 'To select an element by id you write:', opts: ['.name', '#name', 'name', '*name'], correct: 1, exp: '# targets an id; . targets a class.' },
      { q: 'CSS Grid is best for:', opts: ['One-dimensional layout', 'Two-dimensional layouts (rows and columns)', 'Only text', 'Databases'], correct: 1, exp: 'Grid handles rows and columns together.' }
    ],
    js: [
      { q: 'JavaScript mainly adds:', opts: ['Structure', 'Interactivity and behaviour', 'Only colours', 'Hosting'], correct: 1, exp: 'JS makes pages interactive and dynamic.' },
      { q: 'Which keyword declares a block-scoped variable that can change?', opts: ['const', 'let', 'var only', 'function'], correct: 1, exp: 'let is block-scoped and reassignable; const cannot be reassigned.' },
      { q: 'The DOM lets JavaScript:', opts: ['Style with CSS only', 'Read and change page elements', 'Host a site', 'Encrypt data'], correct: 1, exp: 'The DOM is the page structure JS can manipulate.' },
      { q: 'An array is:', opts: ['A single value', 'An ordered list of values', 'A function', 'A style'], correct: 1, exp: 'Arrays store ordered collections of values.' },
      { q: 'async/await is used to:', opts: ['Style pages', 'Work with asynchronous code (like fetch) clearly', 'Create variables', 'Loop forever'], correct: 1, exp: 'await pauses for a promise to resolve, keeping code readable.' },
      { q: 'The fetch() function is used to:', opts: ['Style elements', 'Make network requests to APIs', 'Declare variables', 'Loop arrays'], correct: 1, exp: 'fetch() requests data from a server/API.' }
    ],
    git: [
      { q: 'Git is a:', opts: ['Programming language', 'Version-control system', 'Database', 'Browser'], correct: 1, exp: 'Git tracks changes to your code over time.' },
      { q: 'A branch lets you:', opts: ['Delete history', 'Work on a feature separately from main', 'Host a site', 'Style a page'], correct: 1, exp: 'Branches isolate work before merging.' },
      { q: 'A pull request is used to:', opts: ['Delete a repo', 'Propose and review changes before merging', 'Deploy automatically', 'Write CSS'], correct: 1, exp: 'PRs let teammates review changes before they merge.' },
      { q: 'git commit does what?', opts: ['Uploads to a server', 'Saves a snapshot of changes locally', 'Deletes files', 'Runs tests'], correct: 1, exp: 'A commit records a snapshot in the local repo.' },
      { q: 'GitHub Pages lets you:', opts: ['Run a database', 'Host a static website for free', 'Write backend code', 'Encrypt data'], correct: 1, exp: 'GitHub Pages serves static sites from a repo.' },
      { q: 'Merging combines:', opts: ['Two databases', 'Changes from one branch into another', 'Two servers', 'CSS files only'], correct: 1, exp: 'Merge integrates branch changes together.' }
    ],
    react: [
      { q: 'React is a:', opts: ['Database', 'JavaScript library for building UIs', 'Server language', 'CSS framework'], correct: 1, exp: 'React builds component-based user interfaces.' },
      { q: 'JSX lets you:', opts: ['Write SQL', 'Write HTML-like syntax inside JavaScript', 'Style with CSS only', 'Host a site'], correct: 1, exp: 'JSX mixes markup with JS in components.' },
      { q: 'Props are:', opts: ['Internal changing data', 'Read-only data passed into a component', 'A database', 'A router'], correct: 1, exp: 'Props are inputs passed from parent to child.' },
      { q: 'State is:', opts: ['Read-only', 'Data a component manages and can change over time', 'A CSS rule', 'A server'], correct: 1, exp: 'State holds changing data that re-renders the UI.' },
      { q: 'The useState hook returns:', opts: ['A single number', 'A state value and a setter function', 'A CSS class', 'A route'], correct: 1, exp: 'const [x, setX] = useState(initial).' },
      { q: 'React Router is used for:', opts: ['Styling', 'Client-side navigation between views', 'Database queries', 'Testing'], correct: 1, exp: 'It handles routing/navigation in single-page apps.' }
    ],
    node: [
      { q: 'Node.js lets you run JavaScript:', opts: ['Only in the browser', 'On the server', 'Only in Excel', 'Nowhere'], correct: 1, exp: 'Node runs JS outside the browser, on the server.' },
      { q: 'npm is the:', opts: ['Node package manager', 'A database', 'A browser', 'A CSS tool'], correct: 0, exp: 'npm installs and manages packages/dependencies.' },
      { q: 'Express.js is a:', opts: ['Database', 'Web framework for Node', 'CSS framework', 'Testing tool'], correct: 1, exp: 'Express simplifies building servers and APIs in Node.' },
      { q: 'Middleware in Express runs:', opts: ['Never', 'Between the request and the response', 'Only on errors', 'In the browser'], correct: 1, exp: 'Middleware processes requests before the handler responds.' },
      { q: 'A REST API typically returns data as:', opts: ['HTML only', 'JSON', 'CSS', 'Images only'], correct: 1, exp: 'REST APIs commonly exchange JSON.' },
      { q: 'Environment variables are used to:', opts: ['Style pages', 'Store config/secrets outside the code', 'Write HTML', 'Route pages'], correct: 1, exp: 'They keep secrets and config out of source code.' }
    ],
    db: [
      { q: 'A database is used to:', opts: ['Style pages', 'Store and retrieve data persistently', 'Route requests', 'Compile code'], correct: 1, exp: 'Databases persist application data.' },
      { q: 'MongoDB is a:', opts: ['Relational (SQL) database', 'NoSQL document database', 'CSS framework', 'Browser'], correct: 1, exp: 'MongoDB stores JSON-like documents (NoSQL).' },
      { q: 'CRUD stands for:', opts: ['Create, Read, Update, Delete', 'Copy, Run, Undo, Deploy', 'Cache, Route, Use, Debug', 'Compile, Read, Upload, Delete'], correct: 0, exp: 'The four basic data operations.' },
      { q: 'SQL databases store data in:', opts: ['Documents', 'Tables with rows and columns', 'Files only', 'Images'], correct: 1, exp: 'Relational databases use structured tables.' },
      { q: 'Mongoose is used with:', opts: ['MySQL', 'MongoDB in Node.js', 'CSS', 'React only'], correct: 1, exp: 'Mongoose models MongoDB data in Node.' },
      { q: 'A relationship links:', opts: ['Two CSS files', 'Records across tables/collections', 'Two servers', 'Two browsers'], correct: 1, exp: 'Relationships connect related data.' }
    ],
    auth: [
      { q: 'Passwords should be stored:', opts: ['In plain text', 'Hashed (e.g. with bcrypt)', 'In the URL', 'In CSS'], correct: 1, exp: 'Never store plain passwords; hash them.' },
      { q: 'JWT is used for:', opts: ['Styling', 'Stateless authentication tokens', 'Database queries', 'Routing CSS'], correct: 1, exp: 'JWTs carry signed auth claims between client and server.' },
      { q: 'Authorization decides:', opts: ['Who you are', 'What an authenticated user is allowed to do', 'Page colours', 'The database engine'], correct: 1, exp: 'Authentication = who you are; authorization = what you can do.' },
      { q: 'To prevent SQL injection you should:', opts: ['Trust all input', 'Use parameterised queries / validation', 'Disable the database', 'Hardcode passwords'], correct: 1, exp: 'Never trust input; use parameterised queries.' },
      { q: 'HTTPS protects login data by:', opts: ['Making it public', 'Encrypting it in transit', 'Deleting it', 'Caching it'], correct: 1, exp: 'TLS/HTTPS encrypts data between client and server.' },
      { q: 'A session keeps a user logged in by:', opts: ['Doing nothing', 'Storing a server-side session id (often in a cookie)', 'Saving the password in JS', 'Reloading the page'], correct: 1, exp: 'Sessions track logged-in users server-side.' }
    ],
    api: [
      { q: 'An API is:', opts: ['A styling tool', 'A way for programs to talk to each other', 'A database engine', 'A browser'], correct: 1, exp: 'APIs let software request and exchange data.' },
      { q: 'REST uses HTTP methods like:', opts: ['GET, POST, PUT, DELETE', 'ADD, SUB, MUL', 'RED, GREEN, BLUE', 'ONE, TWO, THREE'], correct: 0, exp: 'REST maps CRUD to HTTP verbs.' },
      { q: 'Postman is used to:', opts: ['Deliver mail', 'Test and send API requests', 'Style pages', 'Host sites'], correct: 1, exp: 'Postman tests API endpoints.' },
      { q: 'An API endpoint that returns one item usually uses:', opts: ['GET /items/:id', 'DELETE all', 'POST nothing', 'PUT /styles'], correct: 0, exp: 'GET /items/:id fetches a single resource.' },
      { q: 'Good API documentation describes:', opts: ['Nothing', 'Endpoints, methods, parameters and responses', 'Only colours', 'Only the database'], correct: 1, exp: 'Docs tell consumers how to use each endpoint.' },
      { q: 'A 404 status code means:', opts: ['Success', 'Resource not found', 'Server error', 'Redirect'], correct: 1, exp: '404 = the requested resource was not found.' }
    ]
  };

  function pickQuestions(skill, count) {
    var pool = BANK[skill] || BANK.general;
    var mixed = BANK.general.concat(BANK.html, BANK.css, BANK.js, BANK.git, BANK.react, BANK.node, BANK.db, BANK.auth, BANK.api);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(skill, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(skill, 3).map(cloneQ) }; }
  function assessmentQuiz(skill, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(skill, count).map(cloneQ) }; }
  function assessmentSkill(name) {
    if (/HTML/i.test(name)) return 'html';
    if (/CSS/i.test(name)) return 'css';
    if (/JavaScript/i.test(name)) return 'js';
    if (/React/i.test(name)) return 'react';
    if (/Backend/i.test(name)) return 'node';
    if (/Database/i.test(name)) return 'db';
    if (/API/i.test(name)) return 'api';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'web-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Build the projects in Module 18 (10 portfolio-ready applications).</li><li>Complete the industry capstone in Module 19 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations and the Full-Stack Capstone Evaluation.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment' && isAssessment(name)) {
        var askill = assessmentSkill(name);
        var big = /Examination|Exam|Evaluation/i.test(name);
        var count = big ? (/Final|Capstone/i.test(name) ? 20 : 15) : 8;
        var aid = 'web-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(askill, name, count);
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
      // Content lesson: video + note + paired practice quiz.
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'web-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(skill, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes, type out the code and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.webdev;
  COURSES_DB.webdev = {
    id: 'webdev',
    title: 'Complete Full-Stack Web Development Program',
    shortDesc: 'A full 20-module program from beginner to job-ready full-stack developer: HTML5, CSS3, JavaScript, Git, UI/UX, React, Node/Express, databases, auth & security, APIs, deployment, testing, AI tools, SEO, freelancing, 10 real-world apps, an industry capstone and a Certificate of Completion.',
    category: 'Web Development',
    icon: ex.icon || '🌐',
    gradient: ex.gradient || 'linear-gradient(135deg,#0284c7,#0ea5e9)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH developers',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$200',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-WEB-0001',
    learn: [
      'Build responsive websites with HTML5, CSS3 and modern JavaScript',
      'Use Git/GitHub and apply UI/UX design principles',
      'Build interactive frontends with React (components, hooks, routing)',
      'Build backends and REST APIs with Node.js, Express and databases',
      'Add authentication, security, testing, deployment and CI/CD',
      'Use AI dev tools, apply SEO, and build a portfolio to get hired or freelance'
    ],
    requirements: [
      'A computer with internet access',
      'No prior coding experience required — we start from the basics',
      'Willingness to type out and run the code in every lesson'
    ],
    about: [
      'This is the complete TIH Full-Stack Web Development Program, rebuilt into twenty modules that take you from your first line of HTML to deploying full-stack applications.',
      'Every content lesson has a video and printable notes with code snippets; ten real-world applications and an industry-level capstone build your portfolio, and you learn Git, testing, deployment, security, AI tools and SEO along the way.',
      'You finish with a portfolio of deployed projects and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _webdevFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.webdev = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WEB] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
