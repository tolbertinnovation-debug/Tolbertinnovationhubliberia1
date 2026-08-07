/* TIH Complete WASSCE Financial Accounting Preparation Course.
   Builds COURSES_DB['wassce-accounts'] directly with the full 10-module WAEC
   Financial Accounting structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Financial Accounting syllabus. Modelled on
   wassce-agriculture-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-accounts';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceAcctFull) return;

  // Vetted finance (Financial Literacy) + Excel (MS Office) videos reused from
  // the TIH courses. Content, notes and quizzes are fully accounting-specific.
  var VIDEOS = {
    intro: ['fBTv5wcnIq8'],
    bookkeeping: ['pKpdibyljR4'],
    cashbook: ['3TYJa9D38ds'],
    statements: ['Fi1wkUczuyk'],
    partnership: ['Fi1wkUczuyk'],
    cost: ['Fi1wkUczuyk'],
    publicsector: ['Fi1wkUczuyk'],
    ethics: ['Fi1wkUczuyk'],
    exampractice: ['fBTv5wcnIq8'],
    final: ['fBTv5wcnIq8']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Financial Accounting', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Financial Accounting Exam', 'Exam Structure & Marking Scheme', 'Introduction to Accounting', 'Principles and Concepts of Accounting', 'Study Strategies']],
    [2, 'Bookkeeping Fundamentals', '📒', 'bookkeeping', 'content', ['Source Documents', 'Books of Original Entry', 'Double Entry System', 'Ledger Accounts', 'Trial Balance', 'Correction of Errors', 'Suspense Accounts', 'Practical Bookkeeping Exercises']],
    [3, 'Cash Book & Bank Reconciliation', '💵', 'cashbook', 'content', ['Single Column Cash Book', 'Double Column Cash Book', 'Triple Column Cash Book', 'Petty Cash Book', 'Bank Reconciliation Statement', 'Bank Transactions', 'Cash Control', 'Practical Exercises']],
    [4, 'Financial Statements', '📊', 'statements', 'content', ['Trading Account', 'Profit and Loss Account', 'Statement of Financial Position (Balance Sheet)', 'Adjustments', 'Depreciation', 'Bad Debts and Provisions', 'Accruals and Prepayments', 'Final Accounts Preparation']],
    [5, 'Partnership & Company Accounts', '🤝', 'partnership', 'content', ['Partnership Accounts', 'Admission of Partners', 'Retirement of Partners', 'Dissolution of Partnership', 'Company Formation', 'Share Capital', 'Debentures', 'Company Financial Statements']],
    [6, 'Manufacturing & Cost Accounting', '🏭', 'cost', 'content', ['Manufacturing Accounts', 'Cost Classification', 'Cost Sheets', 'Stock Valuation', 'Inventory Control', 'Marginal Costing (Introduction)', 'Budgeting', 'Cost Accounting Practice']],
    [7, 'Public Sector & Non-Profit Accounting', '🏛️', 'publicsector', 'content', ['Public Sector Accounting', 'Government Accounts', 'Non-Profit Organizations', 'Receipts and Payments Account', 'Income and Expenditure Account', 'Subscription Accounts', 'Public Finance Basics', 'Practical Exercises']],
    [8, 'Accounting Ethics & ICT in Accounting', '💻', 'ethics', 'content', ['Accounting Ethics', 'Professional Conduct', 'Accounting Standards', 'Computerized Accounting Systems', 'Spreadsheet Applications', 'Accounting Software Basics', 'Fraud Prevention', 'Internal Controls']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Practical Accounting Questions', 'Interpretation of Financial Statements', 'Past WAEC Questions', 'Mock Examinations']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Financial Accounting Revision', 'Key Accounting Principles Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Financial Accounting exam', bookkeeping: 'bookkeeping fundamentals', cashbook: 'the cash book & bank reconciliation', statements: 'financial statements', partnership: 'partnership & company accounts', cost: 'manufacturing & cost accounting', publicsector: 'public sector & non-profit accounting', ethics: 'accounting ethics & ICT', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    bookkeeping: '<h4>📥 Guide: Bookkeeping Fundamentals</h4><ul><li><strong>Accounting equation:</strong> Assets = Capital + Liabilities.</li><li><strong>Double entry:</strong> every transaction has a debit and an equal credit.</li><li><strong>Debit</strong> the receiver / what comes in; <strong>credit</strong> the giver / what goes out.</li><li><strong>Books of original entry:</strong> sales, purchases, returns and the journal.</li><li><strong>Trial balance:</strong> a list of ledger balances; total debits = total credits.</li></ul>',
    cashbook: '<h4>📥 Guide: Cash Book & Bank Reconciliation</h4><ul><li><strong>Cash book</strong> records cash and bank transactions (a book of original entry AND a ledger).</li><li><strong>Columns:</strong> single (cash), double (cash + bank), triple (cash + bank + discount).</li><li><strong>Petty cash</strong> uses the imprest system for small payments.</li><li><strong>Bank reconciliation</strong> agrees the cash-book balance with the bank statement.</li><li><strong>Differences:</strong> unpresented cheques, uncredited lodgements, bank charges, direct debits.</li></ul>',
    statements: '<h4>📥 Guide: Financial Statements</h4><ul><li><strong>Trading account</strong> finds gross profit = sales − cost of goods sold.</li><li><strong>Profit &amp; loss account</strong> finds net profit = gross profit + other income − expenses.</li><li><strong>Balance sheet</strong> (statement of financial position) lists assets, liabilities and capital.</li><li><strong>Depreciation:</strong> straight-line = (cost − residual) ÷ useful life.</li><li><strong>Adjustments:</strong> accruals, prepayments, bad debts and provisions.</li></ul>',
    partnership: '<h4>📥 Guide: Partnership & Company Accounts</h4><ul><li><strong>Partnership:</strong> profits shared per the agreement; keep capital and current accounts.</li><li><strong>Appropriation account</strong> shares profit (interest on capital, salaries, share of profit).</li><li><strong>Admission/retirement</strong> involves goodwill and revaluation.</li><li><strong>Company:</strong> a separate legal entity owned by shareholders.</li><li><strong>Share capital &amp; debentures</strong> raise long-term finance (shares = ownership; debentures = loans).</li></ul>',
    cost: '<h4>📥 Guide: Manufacturing & Cost Accounting</h4><ul><li><strong>Prime cost</strong> = direct materials + direct labour + direct expenses.</li><li><strong>Factory/production cost</strong> = prime cost + factory overheads.</li><li><strong>Cost classification:</strong> direct vs indirect; fixed vs variable.</li><li><strong>Stock valuation:</strong> FIFO, LIFO and weighted average methods.</li><li><strong>Marginal costing:</strong> contribution = sales − variable costs.</li></ul>',
    publicsector: '<h4>📥 Guide: Public Sector & Non-Profit Accounting</h4><ul><li><strong>Non-profit bodies</strong> (clubs, associations) do not trade for profit.</li><li><strong>Receipts and payments account</strong> is a summary of the cash book.</li><li><strong>Income and expenditure account</strong> is like a P&amp;L; a surplus/deficit replaces profit/loss.</li><li><strong>Subscriptions</strong> are the main income of clubs (adjust for owing/prepaid).</li><li><strong>Public sector accounting</strong> records government revenue and expenditure.</li></ul>',
    ethics: '<h4>📥 Guide: Accounting Ethics & ICT</h4><ul><li><strong>Ethics:</strong> integrity, objectivity, confidentiality and professional competence.</li><li><strong>Accounting standards</strong> ensure consistent, comparable, reliable reports.</li><li><strong>Computerised accounting</strong> (QuickBooks, Sage, spreadsheets) speeds up and improves accuracy.</li><li><strong>Internal controls</strong> (checks, authorisation, segregation of duties) prevent fraud/error.</li><li><strong>Fraud prevention:</strong> honest records, audits and strong controls.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'bookkeeping' || /Double Entry|Ledger|Trial Balance|Source Documents|Original Entry|Suspense|Errors/i.test(name)) return TEMPLATES.bookkeeping;
    if (skill === 'cashbook' || /Cash Book|Petty Cash|Bank Reconciliation|Bank Transactions|Cash Control/i.test(name)) return TEMPLATES.cashbook;
    if (skill === 'statements' || /Trading Account|Profit and Loss|Balance Sheet|Depreciation|Bad Debts|Accruals|Final Accounts|Adjustments/i.test(name)) return TEMPLATES.statements;
    if (skill === 'partnership' || /Partnership|Partners|Company|Share Capital|Debentures|Dissolution/i.test(name)) return TEMPLATES.partnership;
    if (skill === 'cost' || /Manufacturing|Cost|Stock Valuation|Inventory|Marginal|Budgeting/i.test(name)) return TEMPLATES.cost;
    if (skill === 'publicsector' || /Public Sector|Government Accounts|Non-Profit|Receipts and Payments|Income and Expenditure|Subscription/i.test(name)) return TEMPLATES.publicsector;
    if (skill === 'ethics' || /Ethics|Professional Conduct|Standards|Computerized|Spreadsheet|Software|Fraud|Internal Controls/i.test(name)) return TEMPLATES.ethics;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Financial Accounting skills';
    var focus = position % 2 ? 'clear rules, worked examples and timed practice' : 'understanding the principle and applying it to WAEC-style accounting questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Financial Accounting · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the worked example, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Learn the rule/format for <em>' + esc(name) + '</em> and how WAEC tests it in the objective and essay/practical papers.</li>' +
      '<li>Study a worked layout (proper headings, debit/credit sides, totals) and the marks for method.</li>' +
      '<li>Practise with past-question-style items under timed conditions, ruling accounts neatly and balancing them.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Work one WAEC past question on <em>' + esc(name) + '</em> and check every figure against a worked solution.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Prepare/record <em>' + esc(name) + '</em> in your accounting notebook, showing the full working.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and check that it balances.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Financial Accounting preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this accounting task — record the entries, prepare the account/statement, and balance it — then review your figures against a worked solution and the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Financial Accounting exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Accounting is best described as the process of:', opts: ['Cooking', 'Recording, classifying, summarising and reporting financial transactions', 'Farming', 'Drawing only'], correct: 1, exp: 'Accounting records and reports financial information.' },
      { q: 'The accounting equation is:', opts: ['Assets = Capital + Liabilities', 'Assets = Expenses', 'Capital = Sales', 'Profit = Assets'], correct: 0, exp: 'Assets = Capital (Owner’s Equity) + Liabilities.' },
      { q: 'WASSCE Financial Accounting is assessed by:', opts: ['An oral test only', 'Objective and essay/practical papers', 'One essay only', 'Cooking'], correct: 1, exp: 'It has objective and essay/practical components.' },
      { q: 'In the essay/practical paper you earn marks mainly for:', opts: ['Length only', 'Correct format, method and figures that balance', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Correct layout, method and balanced figures score marks.' },
      { q: 'The "going concern" concept assumes a business will:', opts: ['Close tomorrow', 'Continue operating for the foreseeable future', 'Never trade', 'Only trade once'], correct: 1, exp: 'Going concern assumes continued operation.' }
    ],
    bookkeeping: [
      { q: 'In double-entry bookkeeping every transaction affects:', opts: ['One account', 'At least two accounts (a debit and a credit)', 'No accounts', 'Only cash'], correct: 1, exp: 'Each transaction has equal debit and credit entries.' },
      { q: 'A trial balance is prepared to:', opts: ['Calculate profit', 'Check that total debits equal total credits', 'Pay tax', 'Buy stock'], correct: 1, exp: 'It checks the arithmetical accuracy of the ledger.' },
      { q: 'A source document for a credit sale is the:', opts: ['Invoice', 'Menu', 'Map', 'Timetable'], correct: 0, exp: 'A sales invoice is the source document for a credit sale.' },
      { q: 'The rule "debit the receiver, credit the giver" applies to:', opts: ['Nominal accounts', 'Personal accounts', 'The weather', 'Nothing'], correct: 1, exp: 'It is the rule for personal accounts.' },
      { q: 'A suspense account is used temporarily when:', opts: ['The trial balance does not balance', 'Profit is high', 'Cash is low', 'Sales rise'], correct: 0, exp: 'A suspense account holds a difference until errors are found.' },
      { q: 'Purchases of goods on credit are first recorded in the:', opts: ['Sales day book', 'Purchases day book', 'Cash book', 'Balance sheet'], correct: 1, exp: 'Credit purchases go in the purchases day book.' }
    ],
    cashbook: [
      { q: 'The cash book is both a book of original entry and a:', opts: ['Balance sheet', 'Ledger', 'Invoice', 'Budget'], correct: 1, exp: 'The cash book is also a ledger for cash and bank.' },
      { q: 'A three-column cash book has columns for cash, bank and:', opts: ['Discount', 'Stock', 'Wages', 'Tax'], correct: 0, exp: 'The third column records discounts.' },
      { q: 'The petty cash book commonly uses the:', opts: ['Imprest system', 'FIFO system', 'Straight-line system', 'Barter system'], correct: 0, exp: 'Petty cash is run on the imprest system.' },
      { q: 'A bank reconciliation statement reconciles the cash book with the:', opts: ['Sales ledger', 'Bank statement', 'Trial balance', 'Invoice'], correct: 1, exp: 'It agrees the cash-book balance with the bank statement.' },
      { q: 'An unpresented cheque is one that has been:', opts: ['Paid into the bank', 'Written/issued but not yet cleared by the bank', 'Cancelled', 'Lost'], correct: 1, exp: 'It has been issued but not yet debited by the bank.' },
      { q: 'Bank charges appearing only on the bank statement should be:', opts: ['Ignored', 'Entered in the cash book', 'Added to sales', 'Deleted'], correct: 1, exp: 'Update the cash book for items like bank charges.' }
    ],
    statements: [
      { q: 'Gross profit is calculated as:', opts: ['Sales − cost of goods sold', 'Sales + expenses', 'Assets − liabilities', 'Capital + drawings'], correct: 0, exp: 'Gross profit = net sales − cost of goods sold.' },
      { q: 'Net profit is found in the:', opts: ['Trading account', 'Profit and loss account', 'Trial balance', 'Cash book'], correct: 1, exp: 'The P&L account computes net profit.' },
      { q: 'The statement that lists assets, liabilities and capital is the:', opts: ['Balance sheet (statement of financial position)', 'Trading account', 'Cash book', 'Journal'], correct: 0, exp: 'The balance sheet shows financial position.' },
      { q: 'Straight-line depreciation per year is:', opts: ['(cost − residual value) ÷ useful life', 'cost × 2', 'sales ÷ cost', 'cost + residual'], correct: 0, exp: 'Straight-line = (cost − residual) ÷ useful life.' },
      { q: 'A provision for doubtful debts is created to:', opts: ['Increase sales', 'Allow for debtors who may not pay', 'Pay tax', 'Buy assets'], correct: 1, exp: 'It provides for possible non-payment by debtors.' },
      { q: 'Rent paid in advance at year end is treated as a:', opts: ['Prepayment (current asset)', 'Sale', 'Liability only', 'Expense fully'], correct: 0, exp: 'Prepaid expenses are current assets at year end.' }
    ],
    partnership: [
      { q: 'Partners share profits and losses according to the:', opts: ['Weather', 'Partnership agreement/deed', 'Bank', 'Government'], correct: 1, exp: 'The partnership agreement sets the profit-sharing ratio.' },
      { q: 'A company is best described as:', opts: ['One trader', 'A separate legal entity owned by shareholders', 'A partnership only', 'A club'], correct: 1, exp: 'A company is a separate legal person owned by shareholders.' },
      { q: 'Ordinary shares represent:', opts: ['A loan to the company', 'Ownership (equity) in the company', 'An expense', 'A tax'], correct: 1, exp: 'Shares are ownership; debentures are loans.' },
      { q: 'A debenture is a:', opts: ['Type of share', 'Long-term loan to a company', 'An asset only', 'A dividend'], correct: 1, exp: 'Debentures are loan capital, not ownership.' },
      { q: 'The appropriation account in a partnership shows:', opts: ['Only sales', 'How net profit is shared among partners', 'The bank balance', 'The trial balance'], correct: 1, exp: 'It distributes profit (interest, salaries, shares).' },
      { q: 'On dissolution of a partnership, assets are:', opts: ['Kept forever', 'Realised (sold) and liabilities paid', 'Given free', 'Ignored'], correct: 1, exp: 'Assets are realised and liabilities settled on dissolution.' }
    ],
    cost: [
      { q: 'Prime cost is:', opts: ['Direct materials + direct labour + direct expenses', 'Sales − cost', 'Fixed costs only', 'Overheads only'], correct: 0, exp: 'Prime cost = direct materials + direct labour + direct expenses.' },
      { q: 'A cost that stays the same regardless of output is a:', opts: ['Variable cost', 'Fixed cost', 'Prime cost', 'Direct cost'], correct: 1, exp: 'Fixed costs (e.g. rent) do not change with output.' },
      { q: 'FIFO is a method of:', opts: ['Depreciation', 'Stock (inventory) valuation', 'Budgeting', 'Reconciliation'], correct: 1, exp: 'FIFO values stock: first in, first out.' },
      { q: 'Contribution (in marginal costing) is:', opts: ['Sales − variable costs', 'Sales + fixed costs', 'Profit + tax', 'Cost − sales'], correct: 0, exp: 'Contribution = sales − variable costs.' },
      { q: 'A manufacturing account is used to find the:', opts: ['Bank balance', 'Cost of goods manufactured', 'Sales tax', 'Trial balance'], correct: 1, exp: 'It calculates the cost of production/goods manufactured.' },
      { q: 'A budget is best described as:', opts: ['A past record', 'A financial plan for a future period', 'A source document', 'A share'], correct: 1, exp: 'A budget plans future income and expenditure.' }
    ],
    publicsector: [
      { q: 'A non-profit organisation prepares an income and expenditure account instead of a:', opts: ['Cash book', 'Profit and loss account', 'Trial balance', 'Journal'], correct: 1, exp: 'Non-profits use income & expenditure, not P&L.' },
      { q: 'The receipts and payments account is basically a summary of the:', opts: ['Balance sheet', 'Cash book', 'Trial balance', 'Invoice'], correct: 1, exp: 'It summarises cash receipts and payments.' },
      { q: 'The main source of income for a club is usually:', opts: ['Sales of shares', 'Members’ subscriptions', 'Debentures', 'Dividends'], correct: 1, exp: 'Subscriptions are a club’s main income.' },
      { q: 'An excess of income over expenditure for a club is called a:', opts: ['Net profit', 'Surplus', 'Loss', 'Dividend'], correct: 1, exp: 'Non-profits report a surplus (or deficit).' },
      { q: 'Public sector accounting mainly records:', opts: ['Only club fees', 'Government revenue and expenditure', 'Only company shares', 'Nothing'], correct: 1, exp: 'It accounts for government finances.' },
      { q: 'Subscriptions owing at year end are treated as a(n):', opts: ['Asset (accrued income)', 'Expense', 'Liability only', 'Sale'], correct: 0, exp: 'Subscriptions owing are accrued income (an asset).' }
    ],
    ethics: [
      { q: 'A core accounting ethic is:', opts: ['Dishonesty', 'Integrity and objectivity', 'Fraud', 'Bias'], correct: 1, exp: 'Integrity, objectivity and confidentiality are key ethics.' },
      { q: 'Accounting standards are used to make financial statements:', opts: ['Inconsistent', 'Consistent, comparable and reliable', 'Secret', 'Optional'], correct: 1, exp: 'Standards ensure comparability and reliability.' },
      { q: 'A benefit of computerised accounting is:', opts: ['More errors', 'Speed and accuracy', 'Lost data always', 'No reports'], correct: 1, exp: 'Software improves speed, accuracy and reporting.' },
      { q: 'Segregation of duties is an example of a(n):', opts: ['Internal control', 'Sale', 'Expense', 'Dividend'], correct: 0, exp: 'Separating duties is an internal control against fraud.' },
      { q: 'A common tool for computerised accounting is:', opts: ['A spreadsheet (e.g. Excel) or software like QuickBooks', 'A cutlass', 'A microscope', 'A compass'], correct: 0, exp: 'Spreadsheets and packages like QuickBooks/Sage are used.' },
      { q: 'Fraud is best prevented by:', opts: ['No records', 'Honest records, audits and strong internal controls', 'Ignoring checks', 'Sharing passwords'], correct: 1, exp: 'Controls, audits and honest records prevent fraud.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'In accounting practical questions you should always:', opts: ['Skip the format', 'Use the correct format/headings and show your workings', 'Guess figures', 'Avoid balancing'], correct: 1, exp: 'Correct format and shown workings earn method marks.' },
      { q: 'Neat, ruled accounts that balance:', opts: ['Waste time', 'Earn marks and are easy to follow', 'Are banned', 'Do not matter'], correct: 1, exp: 'Neat, balanced accounts score and communicate clearly.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak topics before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', bookkeeping: 'bookkeeping', cashbook: 'cashbook', statements: 'statements', partnership: 'partnership', cost: 'cost', publicsector: 'publicsector', ethics: 'ethics', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.bookkeeping, BANK.cashbook, BANK.statements, BANK.partnership, BANK.cost, BANK.publicsector, BANK.ethics, BANK.examstrat);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'wac-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Financial Accounting Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Financial Accounting Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the practical accounting and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, a calculator, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wac-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, showing your workings, then review every answer explanation.</p></div>';
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
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'wac-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Financial Accounting: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Financial Accounting preparation course aligned to the WAEC syllabus: bookkeeping fundamentals, cash book & bank reconciliation, financial statements, partnership & company accounts, manufacturing & cost accounting, public sector & non-profit accounting, accounting ethics & ICT, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '🧾',
    gradient: 'linear-gradient(135deg,#0B6B5A,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Financial Accounting examination with clear formats, worked examples and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-ACCT',
    learn: [
      'Understand the WAEC Financial Accounting exam structure and marking scheme',
      'Apply the accounting equation and double-entry bookkeeping',
      'Prepare cash books and bank reconciliation statements',
      'Prepare trading, profit & loss accounts and the balance sheet with adjustments',
      'Handle partnership, company, manufacturing and cost accounts',
      'Understand public-sector/non-profit accounting, ethics and ICT in accounting'
    ],
    requirements: ['A phone or computer with internet', 'A scientific calculator', 'Ledger/columnar paper and a notebook', 'A spreadsheet (e.g. Excel) for the ICT module (optional)', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Financial Accounting preparation course, organised into ten modules aligned to the WAEC Financial Accounting syllabus and examination structure (objective and essay/practical).',
      'Every content lesson has a video and printable notes with worked layouts; downloadable resources include ledger templates, journal worksheets and accounting formula sheets. The course ends with a full mock examination and a Certificate of Completion.',
      'Financial Accounting rewards practice — prepare many accounts by hand. Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-accounts',
    _wassceAcctFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-ACCOUNTS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
