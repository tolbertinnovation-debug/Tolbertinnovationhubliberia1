/* TIH WASSCE FINANCIAL ACCOUNTING — one distinct YouTube video per topic.
   Course id: wassce-accounts

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 4 videos across 70 lessons, one of them playing on 40 --
   the heaviest single reuse anywhere in the catalogue.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module -- here just "Practical Exercises", which
   ends both the Cash Book module and the Public Sector module -- are keyed
   "M<n>:Title", because a plain title key would collapse them onto one
   video. */
(function () {
  var C = (typeof COURSES_DB === 'undefined') ? null : COURSES_DB['wassce-accounts'];
  if (!C || !C.modules) return;
  var MAP = {
    'Course Orientation': 'jgCMronoevw',
    'Exam Structure & Marking Scheme': 'JL4O38UftL4',
    'Introduction to Accounting': 'W-BpX5pv8co',
    'Principles and Concepts of Accounting': '9vJhd8hxvvs',
    'Study Strategies': 'K7L0pReImho',
    'Source Documents': '5j3bTd_43eY',
    'Books of Original Entry': 'fBTv5wcnIq8',
    'Double Entry System': '2ahbhPRAICQ',
    'Ledger Accounts': 'qbgUJNc14Ts',
    'Trial Balance': 'V4g_c-9-wB8',
    'Correction of Errors': '8qB4vcGlEHM',
    'Suspense Accounts': 'Hw78Q1c3QlA',
    'Practical Bookkeeping Exercises': 'wOJoJyhMQWk',
    'Single Column Cash Book': '3MFKDmAiYII',
    'Double Column Cash Book': 'BsSVNms0y7w',
    'Triple Column Cash Book': 'NFvzojorrzU',
    'Petty Cash Book': '6wlSP_bmWhA',
    'Bank Reconciliation Statement': 'fjBlCT-XN1g',
    'Bank Transactions': 'fbraVKo1ank',
    'Cash Control': 'PmsLGuWoAdQ',
    'M3:Practical Exercises': 'z14JNrG3hlA',
    'Trading Account': 'LYcgAUKTmYc',
    'Profit and Loss Account': '18f-zuWQHXc',
    'Statement of Financial Position (Balance Sheet)': 'keRB5pHhvMM',
    'Adjustments': '1PNzpzouil0',
    'Depreciation': 'YvtfQ89mXM0',
    'Bad Debts and Provisions': 'RW8SoIv8VXg',
    'Accruals and Prepayments': 'b0aSL2I1jqg',
    'Final Accounts Preparation': 'F9m0-K_hFPA',
    'Partnership Accounts': 'Rlu82eJv4Y0',
    'Admission of Partners': '1AsruWlKOgg',
    'Retirement of Partners': 'q1OdyCt9Tp4',
    'Dissolution of Partnership': 'LgxLaUhEu-4',
    'Company Formation': '6FAHe21SxsU',
    'Share Capital': 'oEGWyo1SGbs',
    'Debentures': 'cGhTfZGX0Ic',
    'Company Financial Statements': 'DHjS2opV5b8',
    'Manufacturing Accounts': 'Ns6Qgs_lNUU',
    'Cost Classification': 'MAdlwvPsCGE',
    'Cost Sheets': '_zbnGmh-hBU',
    'Stock Valuation': '7dUBuw3CmB4',
    'Inventory Control': 'whH-CVXRhB8',
    'Marginal Costing (Introduction)': 'NWVQgCh_86I',
    'Budgeting': 'VpHvz7DT3-I',
    'Cost Accounting Practice': 'bEEcU22G1fE',
    'Public Sector Accounting': '1AAACIe5V00',
    'Government Accounts': '7dlKUYqU9zk',
    'Non-Profit Organizations': 'LL7IvrVa47A',
    'Receipts and Payments Account': 'UOPtpp_ihV4',
    'Income and Expenditure Account': 'GCzaJa2VorY',
    'Subscription Accounts': 'HBxr3glLoAc',
    'Public Finance Basics': '_tEEwttUKuU',
    'M7:Practical Exercises': 'rKjop2Rwr9I',
    'Accounting Ethics': 'BMAkqlepXkE',
    'Professional Conduct': 'xwL_mkeTWXo',
    'Accounting Standards': 'Ha9rersLZF0',
    'Computerized Accounting Systems': 'lS2qFflrQpA',
    'Spreadsheet Applications': 'lIGg5k8G4UQ',
    'Accounting Software Basics': '578BXgU44SU',
    'Fraud Prevention': 'H1SXPjfjI58',
    'Internal Controls': '7Pbf3WOu5jM',
    'Objective Test Practice': 'tbfDBd49rwY',
    'Theory Question Practice': '1ohfwxldB9Q',
    'Practical Accounting Questions': 'lZVyczKza14',
    'Complete Financial Accounting Revision': '1bd_UkIcuZI',
    'Key Accounting Principles Review': '5GpcV7p40co',
    'Examination Techniques': 'zejhbXEi2v0',
    'Interpretation of Financial Statements': '803CgjhrZ38',
    'Past WAEC Questions': '5xDnmnHjxl0',
    'Certificate Requirements': 'ezyce6aVz2k'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  C.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE ACCOUNTS videos] distinct video applied to ' + applied + ' lessons');
  }
})();
