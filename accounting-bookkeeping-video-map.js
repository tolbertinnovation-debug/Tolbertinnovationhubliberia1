/* TIH Complete Accounting & Bookkeeping course — one educational YouTube video per topic.
   Course id: accounting-bookkeeping. Videos are sourced per module theme (a single,
   reputable, on-topic video reused across the lessons in that module), the same
   pattern used in entrepreneurship-video-map.js and agritech-curriculum.js. Quiz,
   exam and the Graduation Requirements resource lessons intentionally carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['accounting-bookkeeping'] || !COURSES_DB['accounting-bookkeeping'].modules) return;
  var MAP = {
    /* Module 1: Foundations of Accounting */
    "Welcome to the Program": "Gua2Bo_G-J0",
    "What Is Accounting?": "Gua2Bo_G-J0",
    "What Is Bookkeeping?": "Gua2Bo_G-J0",
    "Accounting vs Bookkeeping": "Gua2Bo_G-J0",
    "Users of Financial Information": "Gua2Bo_G-J0",
    "Branches of Accounting": "Gua2Bo_G-J0",
    "The Accounting Equation": "Gua2Bo_G-J0",
    "Course Roadmap": "Gua2Bo_G-J0",

    /* Module 2: Source Documents & The Accounting Cycle */
    "Source Documents": "-mNB34AoMXk",
    "Receipts and Invoices": "-mNB34AoMXk",
    "Payment Vouchers": "-mNB34AoMXk",
    "The Accounting Cycle": "-mNB34AoMXk",
    "Chart of Accounts": "-mNB34AoMXk",
    "Double-Entry Bookkeeping": "-mNB34AoMXk",
    "Debits and Credits": "-mNB34AoMXk",
    "T-Accounts": "-mNB34AoMXk",

    /* Module 3: Journals and Ledgers */
    "The General Journal": "0LfrtsCd5iQ",
    "Journalizing Transactions": "0LfrtsCd5iQ",
    "The General Ledger": "0LfrtsCd5iQ",
    "Posting to the Ledger": "0LfrtsCd5iQ",
    "Subsidiary Ledgers": "0LfrtsCd5iQ",
    "The Trial Balance": "0LfrtsCd5iQ",
    "Correcting Errors": "0LfrtsCd5iQ",
    "Suspense Accounts": "0LfrtsCd5iQ",

    /* Module 4: Cash and Bank Records */
    "Cash Receipts": "3TYJa9D38ds",
    "Cash Payments": "3TYJa9D38ds",
    "The Cashbook": "3TYJa9D38ds",
    "Petty Cash": "3TYJa9D38ds",
    "The Imprest System": "3TYJa9D38ds",
    "Bank Statements": "3TYJa9D38ds",
    "Bank Reconciliation": "3TYJa9D38ds",
    "Common Reconciliation Errors": "3TYJa9D38ds",

    /* Module 5: Sales, Purchases & Trade */
    "Sales Transactions": "976gJNCwpUo",
    "Purchases Transactions": "976gJNCwpUo",
    "Trade Discounts and Cash Discounts": "976gJNCwpUo",
    "Sales Returns and Purchase Returns": "976gJNCwpUo",
    "Accounts Receivable": "976gJNCwpUo",
    "Accounts Payable": "976gJNCwpUo",
    "Credit Control": "976gJNCwpUo",
    "Bad Debts and Doubtful Debts": "976gJNCwpUo",

    /* Module 6: Inventory Management */
    "What Is Inventory?": "53Khorgj_50",
    "Inventory Valuation Methods": "53Khorgj_50",
    "FIFO and Weighted Average": "53Khorgj_50",
    "Stock Records and Stock Cards": "53Khorgj_50",
    "Physical Stock Counts": "53Khorgj_50",
    "Cost of Goods Sold": "53Khorgj_50",
    "Inventory Control and Loss Prevention": "53Khorgj_50",

    /* Module 7: Payroll and Staff Records */
    "Payroll Basics": "d88luxahFgQ",
    "Gross Pay and Net Pay": "d88luxahFgQ",
    "Statutory Deductions": "d88luxahFgQ",
    "Payroll Records": "d88luxahFgQ",
    "Employee Benefits": "d88luxahFgQ",
    "Payroll Taxes": "d88luxahFgQ",
    "Payroll Fraud Prevention": "d88luxahFgQ",

    /* Module 8: Fixed Assets and Depreciation */
    "What Are Fixed Assets?": "sUAZLjxQ1EE",
    "Capital vs Revenue Expenditure": "sUAZLjxQ1EE",
    "Depreciation Methods": "sUAZLjxQ1EE",
    "Straight-Line Depreciation": "sUAZLjxQ1EE",
    "Reducing Balance Depreciation": "sUAZLjxQ1EE",
    "Asset Registers": "sUAZLjxQ1EE",
    "Disposal of Fixed Assets": "sUAZLjxQ1EE",

    /* Module 9: Financial Statements I: Income Statement */
    "Purpose of Financial Statements": "OeR_uRZZw00",
    "The Income Statement": "OeR_uRZZw00",
    "Gross Profit and Net Profit": "OeR_uRZZw00",
    "Operating Expenses": "OeR_uRZZw00",
    "Accruals and Prepayments": "OeR_uRZZw00",
    "Matching Concept": "OeR_uRZZw00",
    "Preparing a Simple Income Statement": "OeR_uRZZw00",

    /* Module 10: Financial Statements II: Balance Sheet */
    "The Balance Sheet": "YiUirHhqBoc",
    "Assets, Liabilities and Equity in Detail": "YiUirHhqBoc",
    "Current vs Non-Current Items": "YiUirHhqBoc",
    "Owner's Equity and Drawings": "YiUirHhqBoc",
    "Working Capital": "YiUirHhqBoc",
    "Preparing a Simple Balance Sheet": "YiUirHhqBoc",
    "Linking the Income Statement and Balance Sheet": "YiUirHhqBoc",

    /* Module 11: Cash Flow and Budgeting */
    "Understanding Cash Flow": "hUYsfrnZyTc",
    "The Cash Flow Statement": "hUYsfrnZyTc",
    "Operating, Investing and Financing Activities": "hUYsfrnZyTc",
    "Preparing a Cash Budget": "hUYsfrnZyTc",
    "Variance Analysis": "hUYsfrnZyTc",
    "Managing Cash Shortfalls": "hUYsfrnZyTc",
    "Forecasting for Small Organizations": "hUYsfrnZyTc",

    /* Module 12: Cost Accounting Basics */
    "What Is Cost Accounting?": "_nUUohpRfPE",
    "Fixed and Variable Costs": "_nUUohpRfPE",
    "Direct and Indirect Costs": "_nUUohpRfPE",
    "Break-even Analysis": "_nUUohpRfPE",
    "Contribution Margin": "_nUUohpRfPE",
    "Costing for Pricing Decisions": "_nUUohpRfPE",
    "Budgetary Control": "_nUUohpRfPE",

    /* Module 13: Taxation Basics */
    "Introduction to Taxation": "j-C12y65NBg",
    "Types of Taxes Businesses Pay": "j-C12y65NBg",
    "Income Tax Basics": "j-C12y65NBg",
    "Sales Tax and GST/VAT Concepts": "j-C12y65NBg",
    "Withholding Tax": "j-C12y65NBg",
    "Tax Records and Filing": "j-C12y65NBg",
    "Common Tax Mistakes to Avoid": "j-C12y65NBg",

    /* Module 14: Accounting for Different Organizations */
    "Sole Proprietorship Accounting": "sGHxNuj-4MA",
    "Partnership Accounting Basics": "sGHxNuj-4MA",
    "Company Accounting Basics": "sGHxNuj-4MA",
    "Nonprofit and NGO Accounting": "sGHxNuj-4MA",
    "Church and Religious Organization Accounts": "sGHxNuj-4MA",
    "Government and Public Sector Accounting Basics": "sGHxNuj-4MA",
    "Choosing the Right System for Your Organization": "sGHxNuj-4MA",

    /* Module 15: Internal Controls, Auditing & Ethics */
    "What Are Internal Controls?": "SKhURiwM0uA",
    "Segregation of Duties": "SKhURiwM0uA",
    "Introduction to Auditing": "SKhURiwM0uA",
    "Internal vs External Audit": "SKhURiwM0uA",
    "Detecting and Preventing Fraud": "SKhURiwM0uA",
    "Professional Ethics in Accounting": "SKhURiwM0uA",
    "Confidentiality and Data Protection": "SKhURiwM0uA",

    /* Module 16: Financial Analysis */
    "Why Analyze Financial Statements?": "tS1beWOP1MU",
    "Liquidity Ratios": "tS1beWOP1MU",
    "Profitability Ratios": "tS1beWOP1MU",
    "Efficiency Ratios": "tS1beWOP1MU",
    "Solvency Ratios": "tS1beWOP1MU",
    "Trend Analysis": "tS1beWOP1MU",
    "Using Ratios to Make Decisions": "tS1beWOP1MU",

    /* Module 17: Digital Bookkeeping & Software */
    "Why Go Digital?": "60iMP5xwvTs",
    "Bookkeeping in Excel or Google Sheets": "60iMP5xwvTs",
    "Accounting Software Overview": "60iMP5xwvTs",
    "Mobile Money and Digital Records": "60iMP5xwvTs",
    "Cloud Backups for Financial Records": "60iMP5xwvTs",
    "Building a Simple Spreadsheet Bookkeeping Template": "60iMP5xwvTs",
    "Data Security for Financial Records": "60iMP5xwvTs",

    /* Module 18: Careers, Certification & Capstone Prep */
    "Career Paths in Accounting and Bookkeeping": "KV06wNC8HuQ",
    "Professional Certifications": "KV06wNC8HuQ",
    "Building an Accounting Career in Liberia/West Africa": "KV06wNC8HuQ",
    "Freelance Bookkeeping Services": "KV06wNC8HuQ",
    "Preparing Your Portfolio": "KV06wNC8HuQ",
    "Interview Preparation for Accounting Roles": "KV06wNC8HuQ",
    "Continuing Education and Staying Current": "KV06wNC8HuQ",

    /* Module 19: Practical Projects */
    "Source Documents & Journal Entries Project": "-mNB34AoMXk",
    "Ledger and Trial Balance Project": "0LfrtsCd5iQ",
    "Cashbook and Bank Reconciliation Project": "3TYJa9D38ds",
    "Sales and Purchases Records Project": "976gJNCwpUo",
    "Payroll Records Project": "d88luxahFgQ",
    "Financial Statements Project": "OeR_uRZZw00",
    "Cash Budget Project": "hUYsfrnZyTc",
    "Digital Bookkeeping Template Project": "60iMP5xwvTs",

    /* Module 20: Assessments & Graduation */
    "Capstone: Bookkeeping File Presentation": "vO09q2V8TGQ",

  };

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project|Presentation):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB['accounting-bookkeeping'].modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[ACB videos] applied specific video to ' + applied + ' lessons');
  }
})();
