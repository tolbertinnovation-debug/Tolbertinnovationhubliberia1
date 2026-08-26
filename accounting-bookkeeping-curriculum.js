/* TIH Complete Accounting & Bookkeeping course curriculum.
   Rebuilds COURSES_DB['accounting-bookkeeping'] into a full 20-module,
   beginner-to-advanced program: foundations, source documents and the
   accounting cycle, journals and ledgers, cash and bank records, sales and
   purchases, inventory, payroll, fixed assets, financial statements, cash
   flow and budgeting, cost accounting, taxation, organization types,
   internal controls and ethics, financial analysis, digital bookkeeping,
   careers and certification, practical projects, and a final assessments
   and graduation module. Every content lesson pairs a Grade-7-friendly
   authored note with a 3-question practice quiz drawn from
   accounting-bookkeeping-topic-quizzes.js. Video assignment is deferred
   (v: null on every content lesson) pending a future pass with real,
   verified video IDs; lessons render as reading-only until then, exactly
   like the existing "Resource" lesson pattern used elsewhere on the site.
   Modelled on entrepreneurship-curriculum.js / agritech-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB['accounting-bookkeeping'] || COURSES_DB['accounting-bookkeeping']._acbFullBuilt) return;

  // [moduleNum, title, icon, [lesson names]]
  var curriculum = [
    [1, 'Foundations of Accounting', '📘', ['Welcome to the Program', 'What Is Accounting?', 'What Is Bookkeeping?', 'Accounting vs Bookkeeping', 'Users of Financial Information', 'Branches of Accounting', 'The Accounting Equation', 'Course Roadmap']],
    [2, 'Source Documents & The Accounting Cycle', '🧾', ['Source Documents', 'Receipts and Invoices', 'Payment Vouchers', 'The Accounting Cycle', 'Chart of Accounts', 'Double-Entry Bookkeeping', 'Debits and Credits', 'T-Accounts']],
    [3, 'Journals and Ledgers', '📒', ['The General Journal', 'Journalizing Transactions', 'The General Ledger', 'Posting to the Ledger', 'Subsidiary Ledgers', 'The Trial Balance', 'Correcting Errors', 'Suspense Accounts']],
    [4, 'Cash and Bank Records', '💵', ['Cash Receipts', 'Cash Payments', 'The Cashbook', 'Petty Cash', 'The Imprest System', 'Bank Statements', 'Bank Reconciliation', 'Common Reconciliation Errors']],
    [5, 'Sales, Purchases & Trade', '🛒', ['Sales Transactions', 'Purchases Transactions', 'Trade Discounts and Cash Discounts', 'Sales Returns and Purchase Returns', 'Accounts Receivable', 'Accounts Payable', 'Credit Control', 'Bad Debts and Doubtful Debts']],
    [6, 'Inventory Management', '📦', ['What Is Inventory?', 'Inventory Valuation Methods', 'FIFO and Weighted Average', 'Stock Records and Stock Cards', 'Physical Stock Counts', 'Cost of Goods Sold', 'Inventory Control and Loss Prevention']],
    [7, 'Payroll and Staff Records', '👥', ['Payroll Basics', 'Gross Pay and Net Pay', 'Statutory Deductions', 'Payroll Records', 'Employee Benefits', 'Payroll Taxes', 'Payroll Fraud Prevention']],
    [8, 'Fixed Assets and Depreciation', '🏭', ['What Are Fixed Assets?', 'Capital vs Revenue Expenditure', 'Depreciation Methods', 'Straight-Line Depreciation', 'Reducing Balance Depreciation', 'Asset Registers', 'Disposal of Fixed Assets']],
    [9, 'Financial Statements I: Income Statement', '📈', ['Purpose of Financial Statements', 'The Income Statement', 'Gross Profit and Net Profit', 'Operating Expenses', 'Accruals and Prepayments', 'Matching Concept', 'Preparing a Simple Income Statement']],
    [10, 'Financial Statements II: Balance Sheet', '📊', ['The Balance Sheet', "Assets, Liabilities and Equity in Detail", 'Current vs Non-Current Items', "Owner's Equity and Drawings", 'Working Capital', 'Preparing a Simple Balance Sheet', 'Linking the Income Statement and Balance Sheet']],
    [11, 'Cash Flow and Budgeting', '💹', ['Understanding Cash Flow', 'The Cash Flow Statement', 'Operating, Investing and Financing Activities', 'Preparing a Cash Budget', 'Variance Analysis', 'Managing Cash Shortfalls', 'Forecasting for Small Organizations']],
    [12, 'Cost Accounting Basics', '🏷️', ['What Is Cost Accounting?', 'Fixed and Variable Costs', 'Direct and Indirect Costs', 'Break-even Analysis', 'Contribution Margin', 'Costing for Pricing Decisions', 'Budgetary Control']],
    [13, 'Taxation Basics', '🧮', ['Introduction to Taxation', 'Types of Taxes Businesses Pay', 'Income Tax Basics', 'Sales Tax and GST/VAT Concepts', 'Withholding Tax', 'Tax Records and Filing', 'Common Tax Mistakes to Avoid']],
    [14, 'Accounting for Different Organizations', '🏛️', ['Sole Proprietorship Accounting', 'Partnership Accounting Basics', 'Company Accounting Basics', 'Nonprofit and NGO Accounting', 'Church and Religious Organization Accounts', 'Government and Public Sector Accounting Basics', 'Choosing the Right System for Your Organization']],
    [15, 'Internal Controls, Auditing & Ethics', '🛡️', ['What Are Internal Controls?', 'Segregation of Duties', 'Introduction to Auditing', 'Internal vs External Audit', 'Detecting and Preventing Fraud', 'Professional Ethics in Accounting', 'Confidentiality and Data Protection']],
    [16, 'Financial Analysis', '🔍', ['Why Analyze Financial Statements?', 'Liquidity Ratios', 'Profitability Ratios', 'Efficiency Ratios', 'Solvency Ratios', 'Trend Analysis', 'Using Ratios to Make Decisions']],
    [17, 'Digital Bookkeeping & Software', '💻', ['Why Go Digital?', 'Bookkeeping in Excel or Google Sheets', 'Accounting Software Overview', 'Mobile Money and Digital Records', 'Cloud Backups for Financial Records', 'Building a Simple Spreadsheet Bookkeeping Template', 'Data Security for Financial Records']],
    [18, 'Careers, Certification & Capstone Prep', '🎯', ['Career Paths in Accounting and Bookkeeping', 'Professional Certifications', 'Building an Accounting Career in Liberia/West Africa', 'Freelance Bookkeeping Services', 'Preparing Your Portfolio', 'Interview Preparation for Accounting Roles', 'Continuing Education and Staying Current']],
    [19, 'Practical Projects', '🧪', ['Source Documents & Journal Entries Project', 'Ledger and Trial Balance Project', 'Cashbook and Bank Reconciliation Project', 'Sales and Purchases Records Project', 'Payroll Records Project', 'Financial Statements Project', 'Cash Budget Project', 'Digital Bookkeeping Template Project']],
    [20, 'Assessments & Graduation', '🎓', ['Accounting Foundations Quiz', 'Bookkeeping and Ledgers Quiz', 'Financial Statements Quiz', 'Taxation and Ethics Quiz', 'Midterm Examination', 'Final Examination', 'Capstone: Bookkeeping File Presentation', 'Graduation Requirements', 'Certificate of Completion']]
  ];
  // Module number each Module 20 subject quiz draws its authored questions from.
  var SUBJECT_QUIZ_MODULE = { 'Accounting Foundations Quiz': 1, 'Bookkeeping and Ledgers Quiz': 3, 'Financial Statements Quiz': 9, 'Taxation and Ethics Quiz': 13 };

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Presentation)$/.test(name.trim()); }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Use real or sample figures from your own business, NGO, church, or a practice scenario, and complete every step below before moving on.</p>' +
      '<h4>What to do</h4><ol><li>Review the relevant lesson notes and quizzes for this topic area.</li><li>Produce the deliverable for <em>' + esc(name) + '</em> using a notebook, spreadsheet, or the templates from Module 17.</li><li>Check your work against the module\'s key ideas, then correct any errors you find.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A completed, organized set of records or a short written report you can keep as part of your bookkeeping portfolio.</div>' +
      '<p><strong>Printable:</strong> Use your browser\'s Print → Save as PDF to keep an offline copy for revision.</p></div>';
  }

  // Small generic fallback pool, used only if an authored per-topic match is
  // ever missing (should not normally trigger; every content topic below has
  // an authored 3-question entry in accounting-bookkeeping-topic-quizzes.js).
  var BANK_GENERAL = [
    { q: 'Bookkeeping is best described as:', opts: ['Recording financial transactions accurately', 'Only preparing tax returns', 'Only managing bank loans', 'Designing company logos'], correct: 0, exp: 'Bookkeeping is the accurate recording of financial transactions.' },
    { q: 'The accounting equation is:', opts: ['Assets = Liabilities + Equity', 'Assets = Liabilities - Equity', 'Assets + Liabilities = Equity', 'Assets = Revenue - Expenses'], correct: 0, exp: 'Assets always equal liabilities plus owner’s equity.' },
    { q: 'A trial balance is used to:', opts: ['Check that total debits equal total credits', 'Calculate income tax owed', 'Record petty cash only', 'Replace the need for a ledger'], correct: 0, exp: 'A trial balance verifies the ledger is arithmetically balanced.' },
    { q: 'A cashbook records:', opts: ['Cash and bank receipts and payments', 'Only unpaid invoices', 'Only fixed assets', 'Only payroll deductions'], correct: 0, exp: 'The cashbook tracks all cash and bank money in and out.' },
    { q: 'Depreciation spreads the cost of a fixed asset:', opts: ['Over its useful life', 'Entirely in the year of purchase', 'Only when the asset is sold', 'Only for tax purposes, never in the accounts'], correct: 0, exp: 'Depreciation matches an asset’s cost to the periods it is used in.' },
    { q: 'Internal controls exist mainly to:', opts: ['Protect assets and ensure accurate records', 'Increase a business’s tax bill', 'Slow down every transaction unnecessarily', 'Replace the need for any bookkeeping'], correct: 0, exp: 'Internal controls safeguard assets and support accurate, honest records.' }
  ];
  function pickQuestions(count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(BANK_GENERAL[i % BANK_GENERAL.length]);
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  /* Authored per-topic questions (accounting-bookkeeping-topic-quizzes.js) drive
     every practice quiz and the module/course assessments below, the same
     apply-hook pattern used for entrepreneurship-curriculum.js and
     agritech-curriculum.js. */
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, TQ_mod = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; TQ_mod = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['accounting-bookkeeping']) || {};
    Object.keys(src).forEach(function (k) {
      var m = String(k).match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
      if (m) TQ_mod[m[1] + '|' + normQ(m[2])] = src[k];
      else TQ_plain[normQ(k)] = src[k];
    });
  }
  function topicQuestions(moduleNum, name) {
    buildTopicIndex();
    var arr = TQ_mod[moduleNum + '|' + normQ(name)] || TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};   // quizId -> { module, name }
  var assessIndex = [];     // { quizId, module, count, scope }
  function practiceQuiz(name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(moduleNum, name);
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
        var qid = 'acb-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('Graduation Assessment', 15, num, qid, 'course');
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion in Accounting and Bookkeeping.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion in Accounting and Bookkeeping you must:</p><ul><li>Complete the core lessons in Modules 1–18, from foundations through careers and certification.</li><li>Submit the practical projects in Module 19 (journal entries, ledgers and trial balance, cashbook and reconciliation, sales and purchases, payroll, financial statements, cash budget, and a digital bookkeeping template).</li><li>Attempt the subject quizzes and the Midterm and Final Examinations.</li><li>Present your Capstone Bookkeeping File.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Examination/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var scope = (num === 20 && !big && SUBJECT_QUIZ_MODULE[name]) ? 'module' : 'course';
        var srcModule = scope === 'module' ? SUBJECT_QUIZ_MODULE[name] : num;
        var aid = 'acb-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(name, count, srcModule, aid, scope);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'quiz') + ', then review every answer explanation to strengthen your weak areas before moving on.</p></div>';
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
      // Content lesson: authored note (via TIH_LESSON_NOTES) + paired practice quiz. Video deferred.
      idx += 1;
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Reading + Notes', v: null, isQuiz: false });
      flat += 1; lessonCount += 1;
      var pqid = 'acb-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes above, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB['accounting-bookkeeping'];
  COURSES_DB['accounting-bookkeeping'] = {
    id: 'accounting-bookkeeping',
    title: 'Complete Accounting & Bookkeeping Program',
    shortDesc: 'A full 20-module program from beginner to advanced: foundations, source documents, journals and ledgers, cash and bank records, sales and purchases, inventory, payroll, fixed assets, financial statements, cash flow and budgeting, cost accounting, taxation, organization types, internal controls and ethics, financial analysis, digital bookkeeping, careers and certification, hands-on projects, and a Certificate of Completion.',
    category: ex.category || 'Business & Finance',
    icon: ex.icon || '🧾',
    gradient: ex.gradient || 'linear-gradient(135deg,#064e3b,#0f766e)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || '1,200+',
    duration: '110h+',
    level: 'Beginner → Advanced',
    price: ex.price || '$5',
    origPrice: ex.origPrice || '$85',
    isFree: false,
    badge: ex.badge || 'premium',
    certId: ex.certId || 'TIH-2026-ACB-0001',
    learn: [
      'Explain the difference between accounting and bookkeeping and apply the accounting equation',
      'Record transactions using source documents, journals, ledgers and the trial balance',
      'Maintain a cashbook, petty cash, and reconcile cash and bank balances',
      'Handle sales, purchases, inventory, payroll, and fixed assets and depreciation',
      'Prepare an income statement, balance sheet, and cash flow and budget reports',
      'Apply cost accounting, taxation basics, and accounting for different organization types',
      'Use internal controls, auditing awareness, ethics and financial ratio analysis',
      'Keep digital, secure records in a spreadsheet and build a real bookkeeping career path'
    ],
    requirements: [
      'No accounting experience required, this course starts from the basics',
      'A notebook, calculator, and phone or computer for practice',
      'Basic reading and arithmetic skills',
      'Willingness to practice with sample receipts, invoices, ledgers and spreadsheets'
    ],
    about: [
      'This is the complete TIH Accounting & Bookkeeping course, rebuilt into twenty modules that take you from absolute beginner foundations through advanced financial analysis, taxation, internal controls, and digital bookkeeping.',
      'Every content lesson has an authored, easy-to-follow note (hook question, plain-English explanation, real-life relevance, try-it activity, key words and self-check questions) with its own short practice quiz; eight hands-on projects and a Capstone Bookkeeping File turn theory into real, usable records.',
      'You finish with subject quizzes, a Midterm and Final Examination, and — after the graduation assessment — a Certificate of Completion. Designed for entrepreneurs, office assistants, NGO and church administrators, students, and anyone who wants to manage money with confidence.'
    ],
    modules: modules,
    quizzes: quizzes,
    reviews: ex.reviews,
    faqs: ex.faqs,
    _acbFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT['accounting-bookkeeping'] = notes;

  /* accounting-bookkeeping-topic-quizzes.js is fetched only when this course is
     open, so it can land after this builder has run. Re-apply then: the
     player holds a reference to this same quizzes object and reads it afresh
     each time a quiz opens. */
  window.tihApplyAccountingBookkeepingTopicQuizzes = function () {
    TQ_plain = null; TQ_mod = null;
    var applied = 0;
    var byModule = {};
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.module, meta.name);
      if (!authored) return;
      if (quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
      (byModule[meta.module] = byModule[meta.module] || []).push(authored);
    });
    /* Module and course assessments draw from the authored questions rather
       than the generic fallback pool, taking one from each topic in turn so
       an assessment samples across topics instead of exhausting one. */
    function interleave(groups) {
      var out = [], depth = 0, added = true;
      while (added) {
        added = false;
        for (var i = 0; i < groups.length; i++) {
          if (groups[i][depth]) { out.push(groups[i][depth]); added = true; }
        }
        depth += 1;
      }
      return out;
    }
    var moduleQs = {};
    Object.keys(byModule).forEach(function (m) { moduleQs[m] = interleave(byModule[m]); });
    var moduleNums = Object.keys(moduleQs).sort(function (a, b) { return a - b; });
    var coursePool = interleave(moduleNums.map(function (m) { return moduleQs[m]; }));
    var cursor = 0;
    assessIndex.forEach(function (a) {
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = [];
      if (a.scope === 'module' && moduleQs[a.module] && moduleQs[a.module].length >= a.count) {
        picked = moduleQs[a.module].slice(0, a.count);
      } else if (a.scope === 'module' && moduleQs[a.module]) {
        for (var i = 0; i < a.count; i++) picked.push(moduleQs[a.module][i % moduleQs[a.module].length]);
      } else if (coursePool.length) {
        for (var j = 0; j < a.count; j++) picked.push(coursePool[(cursor + j) % coursePool.length]);
        cursor = (cursor + a.count) % coursePool.length;
      }
      if (picked.length === a.count) { quiz.questions = picked.map(cloneQ); applied += 1; }
    });
    return applied;
  };

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ACB] modules=' + modules.length + ' lessons=' + lessonCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
