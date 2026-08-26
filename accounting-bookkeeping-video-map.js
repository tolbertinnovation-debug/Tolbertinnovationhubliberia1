/* TIH Complete Accounting & Bookkeeping course — one distinct educational YouTube
   video per topic (no two topics share a video). Course id: accounting-bookkeeping.
   Each ID was sourced via a real web search for that specific topic and manually
   reviewed against the search result title/description for topical fit. Quiz, exam,
   and the text-only Graduation Requirements resource intentionally carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['accounting-bookkeeping'] || !COURSES_DB['accounting-bookkeeping'].modules) return;
  var MAP = {
    /* Module 1: Foundations of Accounting */
    "Welcome to the Program": "Z6MzrMtFy_c",
    "What Is Accounting?": "1JfCF69vE3c",
    "What Is Bookkeeping?": "pKpdibyljR4",
    "Accounting vs Bookkeeping": "2HK-YuBpPvM",
    "Users of Financial Information": "yrC6K9iW86Y",
    "Branches of Accounting": "wGBdB0uWe-o",
    "The Accounting Equation": "hNsEdC9EfFw",
    "Course Roadmap": "bG963a00ZvM",

    /* Module 2: Source Documents & The Accounting Cycle */
    "Source Documents": "GPDI1N3U_e8",
    "Receipts and Invoices": "Vw1CBF124Uw",
    "Payment Vouchers": "3XFGwKz2KNs",
    "The Accounting Cycle": "wnJ10GR1fC8",
    "Chart of Accounts": "VPGEsughzgc",
    "Double-Entry Bookkeeping": "RdlXGb1IF0k",
    "Debits and Credits": "C801-yM0Ii8",
    "T-Accounts": "kA9snSvCgW8",

    /* Module 3: Journals and Ledgers */
    "The General Journal": "SMW6vspPnIE",
    "Journalizing Transactions": "VfYKsjvrABE",
    "The General Ledger": "mMAJspUcgrg",
    "Posting to the Ledger": "BhGCdV80i_k",
    "Subsidiary Ledgers": "HuCWjTZ63qI",
    "The Trial Balance": "U7UBOSu0PTM",
    "Correcting Errors": "B4Sn5pc8qj0",
    "Suspense Accounts": "uAqvdklfrGw",

    /* Module 4: Cash and Bank Records */
    "Cash Receipts": "T0OIThv-mkQ",
    "Cash Payments": "9gytAIKNbDY",
    "The Cashbook": "8Dd75VfcCTg",
    "Petty Cash": "wJrTxZJkots",
    "The Imprest System": "fLpRQx0EOpc",
    "Bank Statements": "AIh2MYj_qsM",
    "Bank Reconciliation": "3TYJa9D38ds",
    "Common Reconciliation Errors": "YM1uJ3eoc9c",

    /* Module 5: Sales, Purchases & Trade */
    "Sales Transactions": "BG3JS0IimH0",
    "Purchases Transactions": "2iRx_pFflTM",
    "Trade Discounts and Cash Discounts": "5wwDy_q0DA4",
    "Sales Returns and Purchase Returns": "TzaD5GimsKE",
    "Accounts Receivable": "X_I72BnQde0",
    "Accounts Payable": "rEkrsO_pt80",
    "Credit Control": "yl2jlLyszvc",
    "Bad Debts and Doubtful Debts": "MhpGvi3bA8Q",

    /* Module 6: Inventory Management */
    "What Is Inventory?": "qF4H7f9EvhY",
    "Inventory Valuation Methods": "53Khorgj_50",
    "FIFO and Weighted Average": "WnxqeVazShY",
    "Stock Records and Stock Cards": "UkHXbmFITRY",
    "Physical Stock Counts": "QHk-mqUg40M",
    "Cost of Goods Sold": "jEUnCe_9I-s",
    "Inventory Control and Loss Prevention": "zcgx1GsMjzA",

    /* Module 7: Payroll and Staff Records */
    "Payroll Basics": "d88luxahFgQ",
    "Gross Pay and Net Pay": "JZSrORgPmPY",
    "Statutory Deductions": "1rnt7KsL5jQ",
    "Payroll Records": "DqN-eyI_-_c",
    "Employee Benefits": "mDO5drgyGgM",
    "Payroll Taxes": "hQCyZGu-Vq8",
    "Payroll Fraud Prevention": "Ynx5gcke54U",

    /* Module 8: Fixed Assets and Depreciation */
    "What Are Fixed Assets?": "cbcCXvq6XxY",
    "Capital vs Revenue Expenditure": "hNkZ__afDKE",
    "Depreciation Methods": "sUAZLjxQ1EE",
    "Straight-Line Depreciation": "yYQRiYixoSY",
    "Reducing Balance Depreciation": "JHqsqJPKcgM",
    "Asset Registers": "f4BBYjivdNg",
    "Disposal of Fixed Assets": "M0_Vkr1bS8Q",

    /* Module 9: Financial Statements I: Income Statement */
    "Purpose of Financial Statements": "bK-TM5JBro8",
    "The Income Statement": "OeR_uRZZw00",
    "Gross Profit and Net Profit": "ahBYyfYNVCY",
    "Operating Expenses": "5EuieFYTyjY",
    "Accruals and Prepayments": "KRW6kYsBZFM",
    "Matching Concept": "YkGuSQ2tIBs",
    "Preparing a Simple Income Statement": "SyGDYdjp-nE",

    /* Module 10: Financial Statements II: Balance Sheet */
    "The Balance Sheet": "YiUirHhqBoc",
    "Assets, Liabilities and Equity in Detail": "rzwVmTo53qg",
    "Current vs Non-Current Items": "7FcHMx55RI8",
    "Owner's Equity and Drawings": "SRVIQIPgg2U",
    "Working Capital": "70X7-_oXQhU",
    "Preparing a Simple Balance Sheet": "GcYrZQlCIvE",
    "Linking the Income Statement and Balance Sheet": "5es7fuodvts",

    /* Module 11: Cash Flow and Budgeting */
    "Understanding Cash Flow": "mXarL8HB_1w",
    "The Cash Flow Statement": "hUYsfrnZyTc",
    "Operating, Investing and Financing Activities": "KZfF77auSn4",
    "Preparing a Cash Budget": "ELIDOtMSbBI",
    "Variance Analysis": "a20zuY5D_es",
    "Managing Cash Shortfalls": "UAn-KTzyKzM",
    "Forecasting for Small Organizations": "qqzzsLzElyA",

    /* Module 12: Cost Accounting Basics */
    "What Is Cost Accounting?": "In-ZRKFK0fg",
    "Fixed and Variable Costs": "VNbNYISvFE4",
    "Direct and Indirect Costs": "L3RemBg7hyo",
    "Break-even Analysis": "_nUUohpRfPE",
    "Contribution Margin": "48Xs_U06bHs",
    "Costing for Pricing Decisions": "qH_AIwvADpo",
    "Budgetary Control": "Q6gAd69lR5Y",

    /* Module 13: Taxation Basics */
    "Introduction to Taxation": "AMXGBH7hoJY",
    "Types of Taxes Businesses Pay": "j-C12y65NBg",
    "Income Tax Basics": "g0gdh1-H4gY",
    "Sales Tax and GST/VAT Concepts": "8AEJ0O3HyyQ",
    "Withholding Tax": "d_5zJTh1FLY",
    "Tax Records and Filing": "Ty_vqdCq-kc",
    "Common Tax Mistakes to Avoid": "nj11DeLKL00",

    /* Module 14: Accounting for Different Organizations */
    "Sole Proprietorship Accounting": "En3rOfcUYcc",
    "Partnership Accounting Basics": "pOBqmkXCzYI",
    "Company Accounting Basics": "sGHxNuj-4MA",
    "Nonprofit and NGO Accounting": "f5xs6N68uag",
    "Church and Religious Organization Accounts": "Wfl5qPYO1CQ",
    "Government and Public Sector Accounting Basics": "CH5l1KpnoXI",
    "Choosing the Right System for Your Organization": "TRctPrBzFk0",

    /* Module 15: Internal Controls, Auditing & Ethics */
    "What Are Internal Controls?": "SKhURiwM0uA",
    "Segregation of Duties": "gdReLybtn3s",
    "Introduction to Auditing": "Nwx3FwkvQeI",
    "Internal vs External Audit": "P1VVzshSSig",
    "Detecting and Preventing Fraud": "qPtqrsTaad8",
    "Professional Ethics in Accounting": "BMAkqlepXkE",
    "Confidentiality and Data Protection": "CVurqB4KbK0",

    /* Module 16: Financial Analysis */
    "Why Analyze Financial Statements?": "ISawCCQNKBI",
    "Liquidity Ratios": "9syHImbyuag",
    "Profitability Ratios": "dcDDTkQXt74",
    "Efficiency Ratios": "wQoekXZTeu0",
    "Solvency Ratios": "o_t-wzLCQYg",
    "Trend Analysis": "bPbsJDWegV8",
    "Using Ratios to Make Decisions": "j320_ZGx_b4",

    /* Module 17: Digital Bookkeeping & Software */
    "Why Go Digital?": "HUppeES4Pmw",
    "Bookkeeping in Excel or Google Sheets": "60iMP5xwvTs",
    "Accounting Software Overview": "9a04BsKv26M",
    "Mobile Money and Digital Records": "dKKrKxCKsbQ",
    "Cloud Backups for Financial Records": "iWWt7wiSSVs",
    "Building a Simple Spreadsheet Bookkeeping Template": "SIaWHwWjxp8",
    "Data Security for Financial Records": "iuMDkvxXg9o",

    /* Module 18: Careers, Certification & Capstone Prep */
    "Career Paths in Accounting and Bookkeeping": "KV06wNC8HuQ",
    "Professional Certifications": "W5mlh_vAGLY",
    "Building an Accounting Career in Liberia/West Africa": "ivOAcqMoYwc",
    "Freelance Bookkeeping Services": "euYTQ7Xv4co",
    "Preparing Your Portfolio": "N_FfUgWQ9lg",
    "Interview Preparation for Accounting Roles": "aAYKRz-cWcM",
    "Continuing Education and Staying Current": "QPzs73B-cLw",

    /* Module 19: Practical Projects */
    "Source Documents & Journal Entries Project": "qOOMh9idcGQ",
    "Ledger and Trial Balance Project": "VOB1jeu4Omg",
    "Cashbook and Bank Reconciliation Project": "kjufilAfWoQ",
    "Sales and Purchases Records Project": "U4Y1QpU1zZs",
    "Payroll Records Project": "jfO3ZHmnK6Y",
    "Financial Statements Project": "KKjiM-d2qoc",
    "Cash Budget Project": "5zyJQFY30Q8",
    "Digital Bookkeeping Template Project": "QU9gfAaV4Ks",

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
