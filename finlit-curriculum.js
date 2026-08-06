/* TIH Complete Financial Literacy Professional Certificate curriculum.
   Rebuilds COURSES_DB['financial-literacy'] into the full 10-module program
   taking a beginner to a financially confident individual: financial literacy
   basics, budgeting & money management, banking & saving, credit & debt,
   investing, insurance & risk, taxes & retirement, entrepreneurship & business
   finance, digital finance & AI, and a capstone & graduation module. Every
   content lesson has a video + printable notes; project lessons carry briefs
   and downloadable templates. Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'financial-literacy';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._flFullBuilt) return;

  var V = ['2uNvA48yvv0', 'Pau88PAPD7Q', 'ZmthxqxuFQI', '2C7u8onP7t4', 'nQEEQKgX6hg', 'guAaA1-CxT4', 'wSqtotgaNAc', 'IFxzKqMFeE0', 'qIw-yFC-HNU', 's3v2nNT7Um8', 'USkACkbmRi4', 'LCW387dqgvA', 'CbEeC8xXdZ8', 'i4FAekxeS_o', 'AWof6O0vp3o', 'ZbtgBp4X3ZE'];
  var VIDEOS = {
    intro: ['bWZ1wNsZ6sw'],
    budgeting: ['D9NRbQOQvbk'],
    banking: ['OdYxJBuglhs'],
    credit: ['vdTjK_HE6SI'],
    investing: ['bfENsVP77VQ'],
    insurance: ['dVuduWgOH20'],
    taxes: ['AtqGzVdOWrE'],
    business: ['pBskwj7UJgE'],
    digital: ['yuUheEQbeXo'],
    capstone: ['DTcpqkIAD94']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to Financial Literacy', '🧭', 'intro', 'content', ['What is Financial Literacy?', 'Why Financial Literacy Matters', 'Setting Financial Goals', 'Understanding Income & Expenses', 'Financial Habits', 'Course Overview']],
    [2, 'Budgeting & Money Management', '📊', 'budgeting', 'content', ['Creating a Budget', 'Tracking Expenses', 'Managing Cash Flow', 'Needs vs. Wants', 'Emergency Funds', 'Budgeting Tools']],
    [3, 'Banking & Saving', '🏦', 'banking', 'content', ['Types of Bank Accounts', 'Mobile Banking', 'Saving Strategies', 'Interest Rates', 'Financial Security', 'Practical Banking Skills']],
    [4, 'Credit & Debt Management', '💳', 'credit', 'content', ['Understanding Credit', 'Loans', 'Responsible Borrowing', 'Debt Repayment Strategies', 'Credit Scores', 'Avoiding Debt Traps']],
    [5, 'Investing Basics', '📈', 'investing', 'content', ['Introduction to Investing', 'Stocks', 'Bonds', 'Mutual Funds', 'Real Estate', 'Risk vs. Return']],
    [6, 'Insurance & Risk Management', '🛡️', 'insurance', 'content', ['What is Insurance?', 'Health Insurance', 'Life Insurance', 'Property Insurance', 'Risk Management', 'Choosing Insurance Plans']],
    [7, 'Taxes & Retirement Planning', '🧾', 'taxes', 'content', ['Understanding Taxes', 'Tax Planning', 'Retirement Savings', 'Pension Plans', 'Long-Term Financial Planning', 'Financial Independence']],
    [8, 'Entrepreneurship & Business Finance', '💼', 'business', 'content', ['Personal vs. Business Finance', 'Business Budgeting', 'Pricing', 'Cash Flow Management', 'Record Keeping', 'Financial Planning for Small Businesses']],
    [9, 'Digital Finance & AI', '📱', 'digital', 'content', ['Mobile Money', 'Digital Payments', 'Online Banking', 'Financial Apps', 'AI for Personal Finance', 'Cybersecurity for Financial Transactions']],
    [10, 'Capstone Project & Graduation', '🏆', 'capstone', 'projects', ['Create a Personal Financial Plan', 'Monthly Budget Project', 'Savings Plan', 'Investment Plan', 'Final Assessment', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'financial literacy basics', budgeting: 'budgeting & money management', banking: 'banking & saving', credit: 'credit & debt management', investing: 'investing basics', insurance: 'insurance & risk management', taxes: 'taxes & retirement planning', business: 'business finance', digital: 'digital finance & AI', capstone: 'your capstone financial plan' };

  var TEMPLATES = {
    budget: '<h4>📥 Template: Monthly Budget</h4><ul><li>Income (all sources)</li><li>Fixed expenses (rent, transport, data)</li><li>Variable expenses (food, airtime)</li><li>Savings (pay yourself first)</li><li>Rule of thumb: 50% needs · 30% wants · 20% savings</li><li>Actual vs planned each month</li></ul>',
    savings: '<h4>📥 Tracker: Savings</h4><ul><li>Goal &amp; target amount</li><li>Target date</li><li>Amount saved each week/month</li><li>Running total &amp; % to goal</li><li>Emergency fund: aim for 3–6 months of expenses</li></ul>',
    invest: '<h4>📥 Worksheet: Investment Plan</h4><ul><li>Goal &amp; time horizon</li><li>Risk tolerance (low/medium/high)</li><li>Options: savings, bonds, stocks, mutual funds, real estate</li><li>Diversification &amp; expected return</li><li>Only invest what you can afford; understand before you invest</li></ul>',
    plan: '<h4>📥 Guide: Personal Financial Plan</h4><ol><li>Goals (short, medium, long term)</li><li>Income &amp; budget</li><li>Emergency fund &amp; savings</li><li>Debt repayment plan</li><li>Insurance &amp; risk cover</li><li>Investing &amp; retirement</li><li>Review dates</li></ol>'
  };
  function templateFor(name) {
    if (/Creating a Budget|Budgeting Tools|Monthly Budget Project|Business Budgeting/i.test(name)) return TEMPLATES.budget;
    if (/Saving Strategies|Savings Plan|Emergency Funds/i.test(name)) return TEMPLATES.savings;
    if (/Introduction to Investing|Investment Plan|Risk vs\. Return/i.test(name)) return TEMPLATES.invest;
    if (/Setting Financial Goals|Create a Personal Financial Plan|Long-Term Financial Planning/i.test(name)) return TEMPLATES.plan;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'financial skills';
    var focus = position % 2 ? 'practical money skills and real-life examples' : 'understanding the concept and applying it to your own money';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Financial Literacy · ' + esc(moduleTitle) + '</strong><span>Master your money</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means and why it matters for your money.</li>' +
      '<li>See a simple, real example you can copy.</li>' +
      '<li>Apply it to your own finances and note one action to take.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to your own income, savings or a family/business situation.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Work a simple example of <em>' + esc(name) + '</em> with real numbers.</li>' +
      '<li><strong>Exercise 2:</strong> Decide one change you will make to improve your finances.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to financial confidence and stability.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Complete it for your own real finances (or a realistic scenario) and keep it as your financial toolkit.</p>' +
      '<h4>What to do</h4><ol><li>Gather your real numbers (income, expenses, goals).</li><li>Build <em>' + esc(name) + '</em> using the template and what you learned.</li><li>Review it, set target dates, and update it monthly.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A completed plan/tracker you will actually use.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your plan and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Financial literacy is:', opts: ['Only for the rich', 'The knowledge and skills to manage money well', 'A type of bank', 'A tax'], correct: 1, exp: 'It is the ability to make informed money decisions.' },
      { q: 'A financial goal should be:', opts: ['Vague', 'Specific, measurable and time-bound (SMART)', 'A secret', 'Impossible'], correct: 1, exp: 'SMART goals guide saving and spending decisions.' },
      { q: 'The first step to managing money is to:', opts: ['Borrow more', 'Know your income and expenses', 'Ignore spending', 'Spend freely'], correct: 1, exp: 'You must know what comes in and goes out.' },
      { q: 'Good financial habits include:', opts: ['Spending everything', 'Budgeting, saving and reviewing regularly', 'Avoiding banks', 'Ignoring goals'], correct: 1, exp: 'Consistent habits build long-term stability.' },
      { q: '"Pay yourself first" means:', opts: ['Spend then maybe save', 'Save a set amount before spending', 'Never save', 'Only pay bills'], correct: 1, exp: 'Save first, then spend what remains.' },
      { q: 'A personal financial plan helps you:', opts: ['Nothing', 'Reach goals with budgeting, saving and investing', 'Spend more', 'Avoid decisions'], correct: 1, exp: 'A plan aligns your money with your goals.' }
    ],
    budgeting: [
      { q: 'A budget is:', opts: ['A loan', 'A plan for how you will spend and save your money', 'A bank', 'A tax'], correct: 1, exp: 'A budget plans income against expenses and savings.' },
      { q: 'The 50/30/20 rule suggests:', opts: ['50% wants', '50% needs, 30% wants, 20% savings', '100% spending', '20% needs'], correct: 1, exp: 'A common budgeting guideline for balance.' },
      { q: 'An emergency fund should cover about:', opts: ['One day', '3–6 months of expenses', 'Ten years', 'Nothing'], correct: 1, exp: '3–6 months of expenses cushions emergencies.' },
      { q: 'Needs vs wants: rent is a:', opts: ['Want', 'Need', 'Luxury', 'Tax'], correct: 1, exp: 'Needs are essentials; wants are extras.' },
      { q: 'Tracking expenses helps you:', opts: ['Spend blindly', 'See where your money actually goes', 'Avoid saving', 'Hide spending'], correct: 1, exp: 'Tracking reveals spending to control it.' },
      { q: 'Managing cash flow means:', opts: ['Ignoring timing', 'Ensuring money in covers money out over time', 'Spending first', 'Only saving'], correct: 1, exp: 'Cash flow is money in vs out across time.' }
    ],
    banking: [
      { q: 'A savings account is used to:', opts: ['Spend daily', 'Keep money safe and earn some interest', 'Borrow', 'Pay tax'], correct: 1, exp: 'Savings accounts store money and earn interest.' },
      { q: 'Interest on savings means the bank:', opts: ['Charges you', 'Pays you for keeping money there', 'Takes your money', 'Does nothing'], correct: 1, exp: 'Savings earn interest paid to you.' },
      { q: 'Mobile banking lets you:', opts: ['Only visit a branch', 'Bank from your phone anytime', 'Never check balance', 'Only save cash'], correct: 1, exp: 'Mobile banking gives 24/7 access from your phone.' },
      { q: 'Keeping money in a bank (vs at home) is:', opts: ['Riskier', 'Safer and can earn interest', 'Always worse', 'Illegal'], correct: 1, exp: 'Banks are safer and pay interest.' },
      { q: 'A good saving strategy is to:', opts: ['Save what is left', 'Save automatically and regularly', 'Never save', 'Only save once'], correct: 1, exp: 'Automatic, regular saving builds wealth.' },
      { q: 'Financial security starts with:', opts: ['Debt', 'Savings and an emergency fund', 'Spending', 'Gambling'], correct: 1, exp: 'Savings and a cushion create security.' }
    ],
    credit: [
      { q: 'Credit is:', opts: ['Free money', 'Borrowed money you must repay, usually with interest', 'A gift', 'A savings account'], correct: 1, exp: 'Credit is borrowing that must be repaid with interest.' },
      { q: 'A credit score reflects your:', opts: ['Age', 'Creditworthiness / repayment history', 'Height', 'Location'], correct: 1, exp: 'It signals how reliably you repay debt.' },
      { q: 'Responsible borrowing means:', opts: ['Borrow the maximum', 'Borrow only what you can repay', 'Never repay', 'Ignore interest'], correct: 1, exp: 'Borrow within your ability to repay.' },
      { q: 'A debt trap often comes from:', opts: ['Saving', 'High-interest debt you cannot repay', 'Budgeting', 'Investing wisely'], correct: 1, exp: 'High-interest, unmanageable debt traps borrowers.' },
      { q: 'The avalanche/snowball methods are strategies to:', opts: ['Borrow more', 'Repay debt systematically', 'Avoid saving', 'Hide debt'], correct: 1, exp: 'They are structured debt-repayment approaches.' },
      { q: 'Before taking a loan you should check the:', opts: ['Logo', 'Interest rate and total cost of repayment', 'Colour', 'Nothing'], correct: 1, exp: 'Know the interest and total repayment cost.' }
    ],
    investing: [
      { q: 'Investing means:', opts: ['Spending', 'Putting money to work to grow over time', 'Hiding cash', 'Borrowing'], correct: 1, exp: 'Investing aims to grow money over time.' },
      { q: 'Higher potential return usually comes with:', opts: ['Lower risk', 'Higher risk', 'No risk', 'A guarantee'], correct: 1, exp: 'Risk and return are generally linked.' },
      { q: 'Diversification means:', opts: ['Put all money in one place', 'Spread investments to reduce risk', 'Never invest', 'Only cash'], correct: 1, exp: 'Spreading investments lowers overall risk.' },
      { q: 'A stock represents:', opts: ['A loan to a company', 'Part-ownership of a company', 'A bank account', 'A tax'], correct: 1, exp: 'Stocks are shares of ownership in a company.' },
      { q: 'A bond is essentially:', opts: ['Ownership', 'A loan to a government/company that pays interest', 'A gift', 'A savings tip'], correct: 1, exp: 'Bonds are debt that pays interest.' },
      { q: 'You should only invest money you:', opts: ['Need tomorrow', 'Can afford to leave invested / lose', 'Borrowed', 'Do not have'], correct: 1, exp: 'Invest funds you can leave for the time horizon.' }
    ],
    insurance: [
      { q: 'Insurance is designed to:', opts: ['Make you rich', 'Protect you financially from certain risks/losses', 'Waste money', 'Replace savings'], correct: 1, exp: 'Insurance transfers the risk of large losses.' },
      { q: 'You pay a ___ for insurance cover:', opts: ['Fine', 'Premium', 'Tax only', 'Loan'], correct: 1, exp: 'A premium is the regular payment for cover.' },
      { q: 'Health insurance helps with:', opts: ['Car repairs', 'Medical costs', 'Rent', 'Groceries'], correct: 1, exp: 'It covers medical/health expenses.' },
      { q: 'Life insurance mainly protects:', opts: ['Your car', 'Your dependents financially if you die', 'Your phone', 'Your rent'], correct: 1, exp: 'It provides for dependents after death.' },
      { q: 'Risk management means:', opts: ['Ignoring risks', 'Identifying and reducing/transferring risks', 'Taking every risk', 'Only insurance'], correct: 1, exp: 'Manage risk by avoiding, reducing, transferring or accepting it.' },
      { q: 'When choosing insurance you should compare:', opts: ['Only the logo', 'Cover, premium and exclusions', 'Nothing', 'Only colour'], correct: 1, exp: 'Compare what is covered, cost and exclusions.' }
    ],
    taxes: [
      { q: 'Taxes are:', opts: ['Optional gifts', 'Compulsory payments to government', 'Savings', 'Loans'], correct: 1, exp: 'Taxes fund public services and are compulsory.' },
      { q: 'Tax planning means:', opts: ['Evading tax illegally', 'Legally organising finances to pay the right tax', 'Ignoring tax', 'Hiding income'], correct: 1, exp: 'Legal planning manages tax efficiently (not evasion).' },
      { q: 'Retirement savings should start:', opts: ['Never', 'As early as possible', 'Only at 60', 'After retirement'], correct: 1, exp: 'Starting early benefits from compound growth.' },
      { q: 'Compound growth means:', opts: ['Interest on interest over time', 'Losing money', 'A tax', 'A loan'], correct: 0, exp: 'Earnings generate further earnings over time.' },
      { q: 'Financial independence means:', opts: ['Depending on debt', 'Having enough income/savings to cover your needs', 'No money', 'Only a salary'], correct: 1, exp: 'It is having resources to support yourself.' },
      { q: 'A pension plan is for:', opts: ['Daily spending', 'Income in retirement', 'A holiday', 'A phone'], correct: 1, exp: 'Pensions provide income after you stop working.' }
    ],
    business: [
      { q: 'Personal and business finances should be:', opts: ['Mixed together', 'Kept separate', 'Ignored', 'The same account always'], correct: 1, exp: 'Separating them keeps records clear and accurate.' },
      { q: 'Pricing should cover:', opts: ['Only your mood', 'Costs plus a fair profit and market value', 'Nothing', 'Only competitors'], correct: 1, exp: 'Price on cost, value and the market.' },
      { q: 'Record keeping helps a business:', opts: ['Forget sales', 'Track income, costs and make decisions', 'Avoid tax legally? no', 'Lose money'], correct: 1, exp: 'Records support decisions and compliance.' },
      { q: 'Business cash flow problems happen when:', opts: ['Money in always covers out', 'Money out exceeds money in / bad timing', 'You save', 'You budget'], correct: 1, exp: 'Poor cash flow timing can sink a profitable business.' },
      { q: 'A small business budget helps you:', opts: ['Guess', 'Plan income, costs and profit', 'Ignore costs', 'Spend freely'], correct: 1, exp: 'Budgets plan and control business finances.' },
      { q: 'Reinvesting profit can help a business:', opts: ['Shrink', 'Grow over time', 'Fail', 'Avoid customers'], correct: 1, exp: 'Reinvestment funds growth.' }
    ],
    digital: [
      { q: 'Mobile money lets you:', opts: ['Only use cash', 'Send, receive and store money on your phone', 'Avoid all payments', 'Only save at a bank'], correct: 1, exp: 'Mobile money enables phone-based transactions.' },
      { q: 'When banking online you should:', opts: ['Share your PIN', 'Keep your PIN/password secret and use trusted apps', 'Use public wifi for banking freely', 'Click any link'], correct: 1, exp: 'Protect credentials and use secure, trusted apps.' },
      { q: 'A financial app can help you:', opts: ['Nothing', 'Budget, track spending and save', 'Only play games', 'Lose money'], correct: 1, exp: 'Budgeting apps track and manage money.' },
      { q: 'A common scam sign is:', opts: ['A normal receipt', 'A message asking for your PIN/OTP urgently', 'A budget', 'A savings goal'], correct: 1, exp: 'Never share your PIN/OTP — that is a scam.' },
      { q: 'AI tools for personal finance can:', opts: ['Replace all judgement', 'Help you budget and learn, with your review', 'Guarantee riches', 'Access your bank without permission'], correct: 1, exp: 'AI assists; you stay in control and verify.' },
      { q: 'To stay safe with digital finance you should:', opts: ['Reuse one weak password', 'Use strong passwords and enable 2FA', 'Share OTPs', 'Ignore updates'], correct: 1, exp: 'Strong passwords and 2FA protect your money.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', budgeting: 'budgeting', banking: 'banking', credit: 'credit', investing: 'investing', insurance: 'insurance', taxes: 'taxes', business: 'business', digital: 'digital', capstone: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.budgeting, BANK.banking, BANK.credit, BANK.investing, BANK.insurance, BANK.taxes, BANK.business, BANK.digital);
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
        var qid = 'fl-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Final/i.test(name);
        var aid = 'fl-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, big ? 15 : 8);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: (big ? 15 : 8) + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this assessment, then review every answer explanation to strengthen your weak areas.</p></div>';
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
      var pqid = 'fl-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Financial Literacy Professional Certificate',
    shortDesc: 'A full 10-module program from beginner to financially confident: financial literacy basics, budgeting & money management, banking & saving, credit & debt, investing, insurance & risk, taxes & retirement, business finance, digital finance & AI, and a capstone personal financial plan with a Certificate of Completion.',
    category: 'Business & Finance',
    icon: ex.icon || '🏦',
    gradient: ex.gradient || 'linear-gradient(135deg,#0f766e,#14b8a6)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '60h+',
    level: 'All Levels',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$95',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-FINLIT-0001',
    learn: [
      'Set financial goals and understand income, expenses and habits',
      'Budget, track spending, and build an emergency fund',
      'Use banking and saving wisely and manage credit and debt',
      'Understand investing, insurance, taxes and retirement planning',
      'Apply finance to small business and use digital finance safely',
      'Build a personal financial plan and a real money toolkit'
    ],
    requirements: [
      'No prior finance knowledge required',
      'A notebook or a spreadsheet (Excel/Google Sheets) to practise',
      'Your own real numbers to apply the lessons'
    ],
    about: [
      'This is the complete TIH Financial Literacy Professional Certificate, rebuilt into ten modules that take you from the basics to financial confidence.',
      'Every content lesson has a video and printable notes; downloadable templates cover a Monthly Budget, Savings Tracker, Investment Worksheet and a Personal Financial Plan guide. A capstone builds your own real financial plan.',
      'Software & tools: Microsoft Excel, Google Sheets, ChatGPT, Google Finance, mobile banking and budgeting apps. You finish with a personal financial plan and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _flFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[FINLIT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
