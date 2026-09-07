/* TIH QuickBooks Accounting course curriculum.
   Rebuilds COURSES_DB['quickbooks'] into a full 14-module, beginner-to-advanced
   program: getting started, company setup, chart of accounts, customers and
   invoicing, payments and deposits, vendors and bills, banking and
   reconciliation, products and inventory, payroll, sales tax, reports and
   financial statements, advanced features and closing the books, practical
   projects, and a final assessments and graduation module.

   Every content lesson pairs an authored teaching note (quickbooks-notes.js,
   rendered through TIH_LESSON_NOTES) with its own distinct educational video
   (quickbooks-video-map.js) and a 3-question practice quiz drawn from
   quickbooks-topic-quizzes.js.

   Assessments deliberately do NOT reuse practice questions. Each content topic
   carries a fourth, reserved question in TIH_RESERVED_QUIZZES; the module
   quizzes, midterm, final and graduation assessment draw only from that
   reserved pool, through a forward-only cursor with a global issued set, so a
   learner meets every assessment question for the first time in the assessment
   and no two assessments in the course ever share an item.
   Modelled on accounting-bookkeeping-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB['quickbooks'] || COURSES_DB['quickbooks']._qbFullBuilt) return;

  // [moduleNum, title, icon, [lesson names]]
  var curriculum = [
    [1, "Getting Started with QuickBooks", "\ud83d\ude80", ["Welcome to the QuickBooks Course", "What Is QuickBooks?", "QuickBooks Online vs QuickBooks Desktop", "Choosing the Right QuickBooks Plan", "Creating Your QuickBooks Account", "Touring the QuickBooks Dashboard", "Navigating Menus and Settings", "How QuickBooks Uses Double-Entry"]],
    [2, "Setting Up Your Company File", "\ud83c\udfe2", ["Company Settings and Preferences", "Entering Business Information", "Setting Your Fiscal Year", "Multi-Currency Setup", "Adding Users and Permissions", "Importing Existing Data", "Connecting Your Bank Account", "Setup Checklist Before You Start"]],
    [3, "The Chart of Accounts", "\ud83d\udcd7", ["What Is the Chart of Accounts?", "Account Types in QuickBooks", "Creating a New Account", "Editing and Merging Accounts", "Sub-Accounts and Organization", "Opening Balances", "Chart of Accounts Best Practices"]],
    [4, "Customers, Sales and Invoicing", "\ud83e\uddfe", ["Adding Customers", "Sub-Customers and Projects", "Creating an Invoice", "Customizing Invoice Templates", "Recurring Invoices", "Sales Receipts vs Invoices", "Estimates and Quotes", "Credit Memos and Refunds"]],
    [5, "Receiving Payments and Deposits", "\ud83d\udcb0", ["Receiving Customer Payments", "Undeposited Funds Explained", "Making Bank Deposits", "Partial Payments and Overpayments", "Accounts Receivable Ageing", "Sending Statements and Reminders", "Writing Off Bad Debts"]],
    [6, "Vendors, Bills and Expenses", "\ud83d\uded2", ["Adding Vendors", "Entering Bills", "Paying Bills", "Recording Expenses", "Writing Checks", "Purchase Orders", "Vendor Credits", "Accounts Payable Ageing"]],
    [7, "Banking and Reconciliation", "\ud83c\udfe6", ["The Banking Centre", "Bank Feeds and Downloaded Transactions", "Categorizing Bank Transactions", "Bank Rules for Automation", "Matching Transactions", "Bank Reconciliation Step by Step", "Fixing Reconciliation Discrepancies", "Handling Bank Errors and Adjustments"]],
    [8, "Products, Services and Inventory", "\ud83d\udce6", ["Setting Up Products and Services", "Inventory vs Non-Inventory Items", "Tracking Inventory Quantities", "Adjusting Inventory", "Inventory Valuation in QuickBooks", "Buying and Selling Inventory Items", "Inventory Reports"]],
    [9, "Payroll in QuickBooks", "\ud83d\udc65", ["Payroll Overview and Setup", "Adding Employees", "Setting Up Pay Schedules", "Running Payroll", "Payroll Taxes and Deductions", "Payroll Liabilities and Payments", "Payroll Reports"]],
    [10, "Sales Tax and VAT", "\ud83e\uddee", ["Sales Tax Overview", "Setting Up Sales Tax", "Charging Sales Tax on Sales", "Sales Tax Reports", "Filing and Recording Sales Tax Payments", "Common Sales Tax Mistakes"]],
    [11, "Reports and Financial Statements", "\ud83d\udcca", ["The Reports Centre", "Profit and Loss Report", "Balance Sheet Report", "Cash Flow Statement", "Customizing Reports", "Memorizing and Scheduling Reports", "Exporting Reports to Excel", "Reading Reports to Make Decisions"]],
    [12, "Advanced Features and Closing the Books", "\u2699\ufe0f", ["Journal Entries in QuickBooks", "Budgets in QuickBooks", "Class and Location Tracking", "Attachments and Document Management", "Apps and Integrations", "Year-End Closing Procedures", "Backing Up and Protecting Your Data"]],
    [13, "Practical Projects", "\ud83e\uddea", ["Company Setup Project", "Sales and Invoicing Project", "Expenses and Bills Project", "Bank Reconciliation Project", "Payroll Records Project", "Month-End Reporting Project"]],
    [14, "Assessments and Graduation", "\ud83c\udf93", ["QuickBooks Setup Quiz", "Sales and Customers Quiz", "Banking and Reconciliation Quiz", "Reports and Payroll Quiz", "Midterm Examination", "Final Examination", "Capstone: Complete QuickBooks File Presentation", "Graduation Requirements", "Certificate of Completion"]]
  ];
  // Which module each Module 14 subject quiz draws its reserved questions from.
  var SUBJECT_QUIZ_MODULE = {
    'QuickBooks Setup Quiz': 2,
    'Sales and Customers Quiz': 4,
    'Banking and Reconciliation Quiz': 7,
    'Reports and Payroll Quiz': 11
  };

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Presentation)$/.test(name.trim()); }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Use a free QuickBooks trial, the Intuit sample company, or real figures from your own business, NGO or church, and complete every step before moving on.</p>' +
      '<h4>What to do</h4><ol><li>Review the lesson notes and practice quizzes for this topic area.</li><li>Build the deliverable for <em>' + esc(name) + '</em> inside QuickBooks, capturing screenshots as evidence.</li><li>Run the reports that prove the work is correct, and correct anything that does not agree.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A completed QuickBooks file section plus the supporting reports, kept as part of your portfolio.</div>' +
      '<p><strong>Printable:</strong> Use your browser\'s Print → Save as PDF to keep an offline copy for revision.</p></div>';
  }

  // Small generic fallback pool, used only if an authored per-topic entry is ever
  // missing. Every content topic below has an authored entry in
  // quickbooks-topic-quizzes.js, so this should not normally be reached.
  var BANK_GENERAL = [
    { q: 'QuickBooks records each transaction as:', opts: ['A double-entry accounting record', 'A plain text note', 'A printed page only', 'A tax return'], correct: 0, exp: 'Every QuickBooks form posts a double-entry journal behind the scenes.' },
    { q: 'An invoice in QuickBooks debits:', opts: ['Accounts Receivable', 'Bank', 'Sales', 'Equity'], correct: 0, exp: 'An invoice creates a receivable; cash moves only when the customer pays.' },
    { q: 'The chart of accounts is:', opts: ['The list of accounts transactions are classified into', 'A list of customers', 'The bank statement', 'A budget'], correct: 0, exp: 'It is the full set of categories every transaction is filed into.' },
    { q: 'Bank reconciliation proves that:', opts: ['Your records and the bank agree, with differences explained', 'Profit is correct', 'Tax has been paid', 'Customers have paid'], correct: 0, exp: 'Reconciliation verifies completeness and accuracy of the bank account.' },
    { q: 'Sales tax collected from customers is:', opts: ['A liability owed to the tax authority', 'Sales income', 'An expense', 'Equity'], correct: 0, exp: 'Tax collected is held on behalf of government and is never revenue.' },
    { q: 'Undeposited Funds holds:', opts: ['Money received but not yet banked', 'Unpaid invoices', 'Fixed assets', 'Payroll liabilities'], correct: 0, exp: 'It groups received payments so they match one bank deposit line.' }
  ];
  function pickQuestions(count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(BANK_GENERAL[i % BANK_GENERAL.length]);
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, RQ_plain = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; RQ_plain = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['quickbooks']) || {};
    Object.keys(src).forEach(function (k) { TQ_plain[normQ(k)] = src[k]; });
    var res = (typeof window !== 'undefined' && window.TIH_RESERVED_QUIZZES && window.TIH_RESERVED_QUIZZES['quickbooks']) || {};
    Object.keys(res).forEach(function (k) { RQ_plain[normQ(k)] = res[k]; });
  }
  function topicQuestions(name) {
    buildTopicIndex();
    var arr = TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }
  function reservedQuestions(name) {
    buildTopicIndex();
    var arr = RQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};        // quizId -> { module, name }
  var assessIndex = [];          // { quizId, module, count, scope }
  var topicsByModule = {};       // moduleNum -> [content topic names]

  function practiceQuiz(name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(name);
    return { title: 'Practice: ' + name, moduleNum: 1, questions: authored || pickQuestions(3).map(cloneQ) };
  }
  function assessmentQuiz(name, count, moduleNum, quizId, scope) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count, scope: scope || 'course' });
    return { title: name, moduleNum: 1, questions: pickQuestions(count).map(cloneQ) };
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0;
  var lessonCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], names = mod[3];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'qb-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('Graduation Assessment', 15, num, qid, 'course');
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion in QuickBooks Accounting.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion in QuickBooks Accounting you must:</p><ul><li>Complete the core lessons in Modules 1–12, from getting started through closing the books.</li><li>Submit the practical projects in Module 13 (company setup, sales and invoicing, expenses and bills, bank reconciliation, payroll records, and month-end reporting).</li><li>Attempt the four subject quizzes and both the Midterm and Final Examinations.</li><li>Present your Capstone: a complete QuickBooks file.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Examination/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var scope = (num === 14 && !big && SUBJECT_QUIZ_MODULE[name]) ? 'module' : 'course';
        var srcModule = scope === 'module' ? SUBJECT_QUIZ_MODULE[name] : num;
        var aid = 'qb-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(name, count, srcModule, aid, scope);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'quiz') + ', then review every answer explanation to strengthen your weak areas before moving on. These questions are new: none of them appeared in the practice quizzes.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isProjectName(name)) {
        idx += 1;
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: null });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: authored note + its own distinct video + paired practice quiz.
      idx += 1;
      (topicsByModule[num] = topicsByModule[num] || []).push(name);
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video + Notes', v: null, isQuiz: false });
      flat += 1; lessonCount += 1;
      var pqid = 'qb-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes above, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB['quickbooks'];
  COURSES_DB['quickbooks'] = {
    id: 'quickbooks',
    title: 'QuickBooks Accounting',
    shortDesc: 'A full 14-module QuickBooks program from beginner to advanced: setting up a company file, the chart of accounts, customers and invoicing, payments and deposits, vendors and bills, bank feeds and reconciliation, inventory, payroll, sales tax, financial statements, budgets, closing the books, hands-on projects and a Certificate of Completion.',
    category: ex.category || 'Business & Finance',
    icon: ex.icon || '📗',
    gradient: ex.gradient || 'linear-gradient(135deg,#0f766e,#065f46)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || '900+',
    duration: '75h+',
    level: 'Beginner → Advanced',
    price: ex.price || '$5',
    origPrice: ex.origPrice || '$85',
    isFree: false,
    badge: ex.badge || 'new',
    certId: ex.certId || 'TIH-2026-QBK-0001',
    learn: [
      'Set up a QuickBooks company file correctly, from settings to opening balances',
      'Build and maintain a chart of accounts that answers real management questions',
      'Raise invoices, receive payments, and manage customers, estimates and credit notes',
      'Record bills, expenses, cheques, purchase orders and vendor credits',
      'Use bank feeds, rules and matching, and reconcile an account to the statement',
      'Track products, services and inventory, and understand FIFO valuation',
      'Run payroll, record deductions as liabilities and remit them on time',
      'Configure and file sales tax, and avoid the errors that cause arrears',
      'Produce and interpret the Profit and Loss, Balance Sheet and cash flow statement',
      'Post journals, build budgets, track by class, and close the books at year end'
    ],
    requirements: ex.requirements || [
      'No QuickBooks experience required, this course starts from account creation',
      'A phone or computer with a browser and an internet connection for the videos',
      'A free QuickBooks trial or the Intuit sample company for practice',
      'Basic arithmetic and a willingness to repeat each lesson in the software'
    ],
    about: ex.about,
    modules: modules,
    quizzes: quizzes,
    reviews: ex.reviews,
    faqs: ex.faqs,
    _qbFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT['quickbooks'] = notes;

  /* quickbooks-topic-quizzes.js is fetched only when this course is open, so it
     can land after this builder has run. Re-apply then: the player holds a
     reference to this same quizzes object and reads it afresh each time a quiz
     opens. Practice quizzes take the three authored questions; assessments take
     ONLY reserved (fourth) questions, issued once each via a global set so no
     question is ever repeated between two assessments. */
  window.__qbRebuildAssessments = function () {
    TQ_plain = null; RQ_plain = null;
    var applied = 0;
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.name);
      if (authored && quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
    });

    // Reserved pool, grouped by module, in curriculum order.
    var reservedByModule = {};
    Object.keys(topicsByModule).forEach(function (m) {
      var bag = [];
      topicsByModule[m].forEach(function (name) {
        var r = reservedQuestions(name);
        if (r) bag.push.apply(bag, r);
      });
      reservedByModule[m] = bag;
    });
    var moduleNums = Object.keys(reservedByModule).sort(function (a, b) { return a - b; });
    var coursePool = [];
    moduleNums.forEach(function (m) { coursePool.push.apply(coursePool, reservedByModule[m]); });

    // Forward-only issue: a question handed to one assessment is never handed to another.
    var issued = {};
    function take(pool, count) {
      var out = [];
      for (var i = 0; i < pool.length && out.length < count; i++) {
        var q = pool[i], key = normQ(q.q);
        if (issued[key]) continue;
        issued[key] = true;
        out.push(cloneQ(q));
      }
      return out;
    }
    // Module-scoped subject quizzes first, so they get their own module's questions.
    assessIndex.forEach(function (a) {
      if (a.scope !== 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = take(reservedByModule[a.module] || [], a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    // Then course-wide exams and the graduation assessment.
    assessIndex.forEach(function (a) {
      if (a.scope === 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = take(coursePool, a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    return applied;
  };
  window.tihApplyQuickbooksTopicQuizzes = window.__qbRebuildAssessments;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[QB] modules=' + modules.length + ' lessons=' + lessonCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
