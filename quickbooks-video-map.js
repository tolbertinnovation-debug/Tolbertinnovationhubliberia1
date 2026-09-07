/* TIH QuickBooks Accounting course — one distinct educational YouTube video per
   topic (no two topics share a video). Course id: quickbooks.
   Every ID below was sourced from a real web search for that specific topic and
   checked against the search-result title for topical fit; none were written
   from memory. Quizzes, exams, the practical projects and the text-only
   graduation resources intentionally carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['quickbooks'] || !COURSES_DB['quickbooks'].modules) return;
  var MAP = {
    /* Module 1: Getting Started with QuickBooks */
    "Welcome to the QuickBooks Course": "wJ82MXMkERQ",
    "What Is QuickBooks?": "VpU0N3Y6xXs",
    "QuickBooks Online vs QuickBooks Desktop": "9-WCzlug8rk",
    "Choosing the Right QuickBooks Plan": "O2jrER4wI5I",
    "Creating Your QuickBooks Account": "druGYbm6teM",
    "Touring the QuickBooks Dashboard": "2epZ-nvu5s4",
    "Navigating Menus and Settings": "AhyQUeVBpYE",
    "How QuickBooks Uses Double-Entry": "94kObBixgNo",

    /* Module 2: Setting Up Your Company File */
    "Company Settings and Preferences": "Y8IUEsTIwRk",
    "Entering Business Information": "ZHKvnWDr0uY",
    "Setting Your Fiscal Year": "bgwmcgdjC8c",
    "Multi-Currency Setup": "4WZDWj4I_-U",
    "Adding Users and Permissions": "yM3GpH_hOug",
    "Importing Existing Data": "5LUdx8oPFXQ",
    "Connecting Your Bank Account": "YqdfMxZ_ljM",
    "Setup Checklist Before You Start": "nwmNNsPHGHQ",

    /* Module 3: The Chart of Accounts */
    "What Is the Chart of Accounts?": "uQmB23dXtbU",
    "Account Types in QuickBooks": "caviVZlpA6E",
    "Creating a New Account": "0GfHFwTOyfA",
    "Editing and Merging Accounts": "dGjsW6SliJs",
    "Sub-Accounts and Organization": "p8oK1tKZIi0",
    "Opening Balances": "cZb0tRh6t8k",
    "Chart of Accounts Best Practices": "QqQF8ywFMPs",

    /* Module 4: Customers, Sales and Invoicing */
    "Adding Customers": "wrw4ignzwCE",
    "Sub-Customers and Projects": "kCwTtBFbvac",
    "Creating an Invoice": "lTxlTelzw_s",
    "Customizing Invoice Templates": "OLoV6jkzqfA",
    "Recurring Invoices": "EOawyiro_cE",
    "Sales Receipts vs Invoices": "gj8L9_8r_5g",
    "Estimates and Quotes": "sYgx8fBUXrA",
    "Credit Memos and Refunds": "nYiXdV3fu7c",

    /* Module 5: Receiving Payments and Deposits */
    "Receiving Customer Payments": "_kXjsbNuoZI",
    "Undeposited Funds Explained": "maj-wyDt818",
    "Making Bank Deposits": "ZoFfVSsC4B4",
    "Partial Payments and Overpayments": "PYWvEVrvenM",
    "Accounts Receivable Ageing": "HFJ9x1xDlc8",
    "Sending Statements and Reminders": "WDukswKCZEM",
    "Writing Off Bad Debts": "TANIxJPa3n4",

    /* Module 6: Vendors, Bills and Expenses */
    "Adding Vendors": "id3e9dugoDo",
    "Entering Bills": "xbBrBRuIky4",
    "Paying Bills": "R6q3PMJYVlk",
    "Recording Expenses": "mAcr8oFG3u8",
    "Writing Checks": "PT3WBT-Kg3A",
    "Purchase Orders": "Z9omK1SFcVY",
    "Vendor Credits": "tHVLGcjEIgw",
    "Accounts Payable Ageing": "x8qjB-Ps2cM",

    /* Module 7: Banking and Reconciliation */
    "The Banking Centre": "AdzQmzVapZ0",
    "Bank Feeds and Downloaded Transactions": "nZCqEaNy3l8",
    "Categorizing Bank Transactions": "tFsXTj9wWl0",
    "Bank Rules for Automation": "1hhvJ3Z2nms",
    "Matching Transactions": "j8ab5fQ5A9c",
    "Bank Reconciliation Step by Step": "ucDOyAYvtsM",
    "Fixing Reconciliation Discrepancies": "eTG78xrkIqk",
    "Handling Bank Errors and Adjustments": "cG5NMY3b0vI",

    /* Module 8: Products, Services and Inventory */
    "Setting Up Products and Services": "E3s81E7FVR0",
    "Inventory vs Non-Inventory Items": "i-pktuoZgv4",
    "Tracking Inventory Quantities": "6A3FYOpoGe8",
    "Adjusting Inventory": "4UXQHkGmt4c",
    "Inventory Valuation in QuickBooks": "7mvaPd1psD0",
    "Buying and Selling Inventory Items": "KhupybCxKYI",
    "Inventory Reports": "PEaUP7pmz50",

    /* Module 9: Payroll in QuickBooks */
    "Payroll Overview and Setup": "mAfKnzJ8vac",
    "Adding Employees": "Fe1yXY5BU4w",
    "Setting Up Pay Schedules": "4eOTosowf9w",
    "Running Payroll": "o-7jgZovRHo",
    "Payroll Taxes and Deductions": "923SXQkoInk",
    "Payroll Liabilities and Payments": "DUlgDuhEFPo",
    "Payroll Reports": "31g8hDtzLgQ",

    /* Module 10: Sales Tax and VAT */
    "Sales Tax Overview": "TqvKdZTjQas",
    "Setting Up Sales Tax": "OMOJCl2DsUQ",
    "Charging Sales Tax on Sales": "KYyjxRxL4UQ",
    "Sales Tax Reports": "yLMsjeGfT0s",
    "Filing and Recording Sales Tax Payments": "FsF4Bf4WNX8",
    "Common Sales Tax Mistakes": "qG_rXMO8P5E",

    /* Module 11: Reports and Financial Statements */
    "The Reports Centre": "R3KDXf_s_4U",
    "Profit and Loss Report": "ytrSdyhXZTw",
    "Balance Sheet Report": "ptyJvqHQMxs",
    "Cash Flow Statement": "iY_brOc5vkk",
    "Customizing Reports": "66pQ0hfjxZY",
    "Memorizing and Scheduling Reports": "hPOgeVHW_24",
    "Exporting Reports to Excel": "jO2zf0lz7ho",
    "Reading Reports to Make Decisions": "JgfSkM4h9KU",

    /* Module 12: Advanced Features and Closing the Books */
    "Journal Entries in QuickBooks": "jAh5xY5irNE",
    "Budgets in QuickBooks": "3JQfvEZQy88",
    "Class and Location Tracking": "W88_QLEXuc4",
    "Attachments and Document Management": "4-yQlyPVhbg",
    "Apps and Integrations": "Q4Z2Ojxc_HU",
    "Year-End Closing Procedures": "HsCp1RMK5b8",
    "Backing Up and Protecting Your Data": "P1RoOinjZWs"
  };
  // Normalise a title the same way the player does: strip a numeric prefix,
  // lowercase, and collapse punctuation, so "4.3 Creating an Invoice" matches.
  function norm(s) {
    return String(s || '').replace(/^\s*\d+(?:\.\d+)*\s*/, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
  var BY_NORM = {};
  for (var k in MAP) { if (MAP.hasOwnProperty(k)) BY_NORM[norm(k)] = MAP[k]; }
  window.TIH_TOPIC_VIDEOS = window.TIH_TOPIC_VIDEOS || {};
  window.TIH_TOPIC_VIDEOS['quickbooks'] = BY_NORM;
  // Apply straight onto the built course so the player never has to guess.
  COURSES_DB['quickbooks'].modules.forEach(function (m) {
    (m.lessons || []).forEach(function (les) {
      var v = BY_NORM[norm(les.t || les.title || '')];
      if (v) les.v = v;
    });
  });
})();
