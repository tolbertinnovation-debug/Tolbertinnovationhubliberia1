/* TIH Complete Grant Writing & Fundraising Professional Certificate.
   Loader: full curriculum from good build + formal note enhancements
   (Grant Life Cycle + Proposal Writing core topics). */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'grant-writing';
  if (COURSES_DB[CID] && COURSES_DB[CID]._grantFullBuilt && COURSES_DB[CID]._proposalNotesApplied) return;

  function noteShell(moduleTitle, title, bodyHtml) {
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Grant Writing & Fundraising · ' + moduleTitle + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + title + '</h3>' + bodyHtml +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + moduleTitle + '</em>. Use Print → Save as PDF for an offline copy.</p>' +
      '</div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._grantFullBuilt) return;
    if (typeof LESSON_CONTENT === 'undefined' || !LESSON_CONTENT[CID]) return;
    var notes = LESSON_CONTENT[CID];

    var ENHANCED = {};

    /* ========== GRANT LIFE CYCLE (Module 2) ========== */
    ENHANCED['Grant Life Cycle'] = noteShell('Module 2: Introduction to Grants', 'Grant Life Cycle',
      '<h4>1. Definition</h4>' +
      '<p>The grant life cycle is the complete sequence of stages through which a grant passes, from identifying a funding opportunity through proposal preparation, submission, award, implementation, reporting, and formal close-out. Mastering each stage improves both the chance of winning funding and the quality of grant management.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>Professional grant writers treat funding as a managed process, not a single event. Each stage has distinct tasks, risks, and deliverables. Weak early stages (poor eligibility checking or needs assessment) weaken later stages (proposal quality, implementation, reporting).</p>' +
      '<p>The typical stages are:</p>' +
      '<ol>' +
      '<li><strong>Identification / Prospecting</strong> — Find and assess suitable funders and calls.</li>' +
      '<li><strong>Preparation</strong> — Needs assessment, organisational readiness, concept development.</li>' +
      '<li><strong>Proposal Development</strong> — Narrative, budget, logframe, attachments.</li>' +
      '<li><strong>Submission</strong> — Deliver a complete package by the deadline.</li>' +
      '<li><strong>Review & Decision</strong> — Funder evaluation, possible clarification, award or decline.</li>' +
      '<li><strong>Award & Negotiation</strong> — Review and sign the grant agreement; set up systems.</li>' +
      '<li><strong>Implementation</strong> — Deliver activities, manage budget, monitor progress.</li>' +
      '<li><strong>Reporting</strong> — Narrative and financial reports to the funder.</li>' +
      '<li><strong>Close-out</strong> — Final reports, residual funds, record retention, lessons learned.</li>' +
      '</ol>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Funders expect applicants to understand the full cycle, not only writing.</li>' +
      '<li>Strong post-award management protects funding and reputation.</li>' +
      '<li>Close-out lessons improve the next proposal.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Eligibility and fit at prospecting</li>' +
      '<li>Evidence-based needs and SMART objectives</li>' +
      '<li>Complete, guideline-aligned packages</li>' +
      '<li>Grant agreements, allowable costs, restricted funds</li>' +
      '<li>Monitoring, reporting deadlines, close-out</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Map a real or sample opportunity through all nine stages. Note documents, decisions, and risks at each stage.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Outline what you would do at each stage for one funding opportunity relevant to a Liberian NGO, school, or community group.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Treating the proposal as the whole job and neglecting post-award management.</li>' +
      '<li>Applying without checking eligibility or reading full guidelines.</li>' +
      '<li>Missing reporting deadlines or mixing restricted funds.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>Grant Life Cycle</strong> is foundational. A clear grasp of every stage — from prospecting to close-out — is essential for professional practice.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>Watch the video and list the stages in your own words.</li><li>Write a one-page life-cycle map for a sample project.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== ANATOMY OF A GRANT PROPOSAL (Module 6) ========== */
    ENHANCED['Anatomy of a Grant Proposal'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Anatomy of a Grant Proposal',
      '<h4>1. Definition</h4>' +
      '<p>The anatomy of a grant proposal refers to the standard structural sections that most funders expect in a formal funding request. While formats vary by donor, the core architecture remains consistent: a clear statement of who you are, what problem you address, what you propose to do, what it will cost, and how you will measure success.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>A professional proposal is not a free-form essay. It is a structured argument designed for busy reviewers who score applications against published criteria. Each section has a job:</p>' +
      '<ul>' +
      '<li><strong>Executive Summary</strong> — the whole story in one page.</li>' +
      '<li><strong>Organisational Background</strong> — credibility and capacity.</li>' +
      '<li><strong>Statement of Need</strong> — evidence-based problem.</li>' +
      '<li><strong>Goals and Objectives</strong> — what success looks like.</li>' +
      '<li><strong>Project Design / Methodology</strong> — how you will deliver.</li>' +
      '<li><strong>Timeline and Activities</strong> — when and in what sequence.</li>' +
      '<li><strong>Expected Outcomes</strong> — measurable change.</li>' +
      '<li><strong>Budget and Justification</strong> — costs tied to activities.</li>' +
      '<li><strong>Sustainability Plan</strong> — life after the grant.</li>' +
      '<li><strong>Monitoring and Evaluation</strong> — how you will track results.</li>' +
      '<li><strong>Attachments</strong> — legal, financial, and supporting documents.</li>' +
      '</ul>' +
      '<p>Understanding this anatomy helps you map any funder’s guidelines to a complete package and avoid missing required elements.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Reviewers look for specific sections; missing pieces lower scores.</li>' +
      '<li>A clear structure makes your argument easier to follow and trust.</li>' +
      '<li>Mastery of the anatomy speeds up future proposals.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Alignment of narrative, budget, and logframe</li>' +
      '<li>Guideline-driven length and order</li>' +
      '<li>Logical flow from problem → solution → resources → results</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Take one funder’s guidelines and list every required section. Draft a one-page outline that maps your content to each requirement.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Build a proposal outline for a sample education or health project in Liberia, with a heading for every core section above.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Writing a long narrative with no clear sections.</li>' +
      '<li>Budget that does not match the activities described.</li>' +
      '<li>Ignoring the funder’s required order or page limits.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>The anatomy of a grant proposal is the professional blueprint for competitive applications. Learn the standard sections, then adapt them precisely to each funder’s guidelines.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>Memorise the core sections in order.</li><li>Compare two different funder templates.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== EXECUTIVE SUMMARY (Module 6) ========== */
    ENHANCED['Executive Summary'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Executive Summary',
      '<h4>1. Definition</h4>' +
      '<p>An executive summary is a concise overview—usually one page or less—that presents the essential elements of a grant proposal so a reviewer can quickly grasp the request, the need, the approach, the amount sought, and the expected impact.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>Many reviewers read the executive summary first. If it is weak, vague, or incomplete, the rest of the proposal may receive less attention. A strong executive summary typically includes:</p>' +
      '<ul>' +
      '<li>Organisation name and brief credibility statement</li>' +
      '<li>The problem and who is affected (with key data)</li>' +
      '<li>The proposed solution and main activities</li>' +
      '<li>Key objectives or expected results</li>' +
      '<li>Total budget requested and project duration</li>' +
      '<li>Why this organisation is well placed to deliver</li>' +
      '</ul>' +
      '<p>Write it last, after the full proposal is drafted, so it accurately reflects the final content. Use clear, confident language. Avoid jargon and do not introduce information that does not appear later in the proposal.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>It is often the first (and sometimes only) section a busy reviewer reads in depth.</li>' +
      '<li>It sets the frame for how the rest of the proposal is judged.</li>' +
      '<li>A polished summary signals professionalism.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Brevity with completeness</li>' +
      '<li>Consistency with the full narrative and budget</li>' +
      '<li>Funder-focused language (their priorities, not only yours)</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Draft a 250–300 word executive summary for a sample project. Check that a stranger could understand the request without reading anything else.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Write an executive summary for a community education or health project. Include need, solution, amount, duration, and expected result.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Writing it first and never updating it.</li>' +
      '<li>Exceeding the page limit or burying the request amount.</li>' +
      '<li>Using emotional language without evidence.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>The executive summary is the proposal’s front door. Make it clear, complete, and aligned with everything that follows.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>Study 2–3 sample summaries from successful proposals.</li><li>Write and revise your own.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== STATEMENT OF NEED (Module 6) ========== */
    ENHANCED['Statement of Need'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Statement of Need',
      '<h4>1. Definition</h4>' +
      '<p>A statement of need is the section of a grant proposal that presents an evidence-based case for why a particular problem requires funding and why the proposed organisation is well placed to address it. It answers: What is wrong? Who is affected? How do we know? Why does it matter now?</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>Funders do not fund organisations in the abstract; they fund solutions to problems they care about. The statement of need must therefore:</p>' +
      '<ul>' +
      '<li><strong>Define the problem clearly</strong> — specific population, location, and issue.</li>' +
      '<li><strong>Quantify the scale</strong> — numbers, rates, trends (local data preferred).</li>' +
      '<li><strong>Show consequences</strong> — what happens if nothing is done.</li>' +
      '<li><strong>Identify root causes</strong> — not only symptoms.</li>' +
      '<li><strong>Connect to the funder’s priorities</strong> — language and themes they use.</li>' +
      '<li><strong>Position your organisation</strong> — proximity, experience, relationships with the affected community.</li>' +
      '</ul>' +
      '<p>Use credible sources: government statistics, surveys, needs assessments, published studies, and community consultations. Avoid unsupported claims and pure emotion. Data plus human impact is more persuasive than either alone.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Weak need statements are a top reason proposals are declined.</li>' +
      '<li>A strong need statement justifies every later section (objectives, activities, budget).</li>' +
      '<li>It demonstrates that you understand the community you claim to serve.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Evidence vs. anecdote</li>' +
      '<li>Target beneficiaries and geographic focus</li>' +
      '<li>Root cause analysis</li>' +
      '<li>Alignment with donor strategy</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Write a one-page statement of need for a real community issue. Include at least three data points and a short description of who is affected.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Draft a statement of need for a youth skills, maternal health, or primary education gap in a Liberian county. Cite sources.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Talking only about the organisation’s needs (rent, salaries) instead of community needs.</li>' +
      '<li>No numbers, no sources, no clear beneficiaries.</li>' +
      '<li>Problem so broad that no single project could address it.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>The statement of need is the foundation of the proposal. Without a clear, evidenced problem, the rest of the application lacks justification.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>Collect local data for one problem area.</li><li>Write and peer-review a one-page need statement.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== GOALS AND OBJECTIVES (Module 6) ========== */
    ENHANCED['Goals and Objectives'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Goals and Objectives',
      '<h4>1. Definition</h4>' +
      '<p>Goals are broad statements of the long-term change a project seeks to achieve. Objectives are specific, measurable, achievable, relevant, and time-bound (SMART) results that contribute to those goals. Goals describe direction; objectives describe checkpoints.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p><strong>Goals</strong> answer: What lasting change do we want? They are often not fully measurable within one grant period (e.g., “Improved secondary education outcomes for girls in County X”).</p>' +
      '<p><strong>Objectives</strong> answer: What will we achieve by when, for whom, and how will we know? A SMART objective includes:</p>' +
      '<ul>' +
      '<li><strong>Specific</strong> — clear subject and action</li>' +
      '<li><strong>Measurable</strong> — number, percentage, or observable standard</li>' +
      '<li><strong>Achievable</strong> — realistic given time and resources</li>' +
      '<li><strong>Relevant</strong> — linked to the need and the goal</li>' +
      '<li><strong>Time-bound</strong> — deadline or period</li>' +
      '</ul>' +
      '<p>Example: “By month 12, train 120 out-of-school youth (60% female) in market-relevant vocational skills, with at least 70% completing the full course.”</p>' +
      '<p>Objectives drive activities, budget lines, and indicators. If an objective is vague, monitoring and reporting become difficult and funders lose confidence.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Funders score proposals heavily on clarity of results.</li>' +
      '<li>SMART objectives make M&E and reporting possible.</li>' +
      '<li>They keep implementation focused and reduce scope creep.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Goal vs. objective vs. activity</li>' +
      '<li>SMART criteria</li>' +
      '<li>Output vs. outcome language</li>' +
      '<li>Link to indicators and budget</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Turn one project goal into three SMART objectives. Check each against the five SMART criteria.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> For a women’s livelihoods project, write one goal and three SMART objectives with numbers and deadlines.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Writing activities (“conduct training”) instead of results (“youth complete training and gain skills”).</li>' +
      '<li>Objectives with no numbers or dates.</li>' +
      '<li>Goals so ambitious that no grant could achieve them alone.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>Clear goals and SMART objectives turn a good idea into a fundable, manageable project. They are the backbone of design, budget, and evaluation.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>Practise converting vague aims into SMART objectives.</li><li>Align objectives with a sample budget and indicators.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== SUSTAINABILITY PLAN (Module 6) ========== */
    ENHANCED['Sustainability Plan'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Sustainability Plan',
      '<h4>1. Definition</h4>' +
      '<p>A sustainability plan explains how the benefits, activities, or systems created by a project will continue after the grant funding period ends. It addresses financial, institutional, and community continuity.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>Funders want impact that lasts beyond their investment. A credible sustainability plan usually covers:</p>' +
      '<ul>' +
      '<li><strong>Financial sustainability</strong> — other donors, local revenue, cost recovery, government uptake.</li>' +
      '<li><strong>Institutional sustainability</strong> — staff capacity, policies, systems that remain after the project.</li>' +
      '<li><strong>Community ownership</strong> — local leadership, committees, or beneficiaries who continue the work.</li>' +
      '<li><strong>Policy or systems change</strong> — where relevant, integration into public services or regulations.</li>' +
      '</ul>' +
      '<p>Avoid vague promises (“we will find more funding”). Be specific about mechanisms, partners, and timelines. Link sustainability actions to the project design so they start during implementation, not only at the end.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Many funders score sustainability explicitly.</li>' +
      '<li>It shows long-term thinking and responsible use of resources.</li>' +
      '<li>It protects beneficiaries from abrupt service stoppage.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Exit strategy vs. continuation strategy</li>' +
      '<li>Cost recovery and co-financing</li>' +
      '<li>Local ownership and capacity transfer</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>For a sample project, write a half-page sustainability plan with at least one financial and one institutional measure.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Design a sustainability plan for a skills-training project that should continue after 18 months of grant support.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>One sentence: “We will mobilise more resources.”</li>' +
      '<li>No link to activities during the grant period.</li>' +
      '<li>Assuming government will take over without evidence of interest or capacity.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>A sustainability plan assures the funder that their investment will not disappear when the grant ends. Make it concrete, realistic, and built into project design.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>List sustainability risks for a sample project.</li><li>Write specific mitigation measures.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* ========== ORGANIZATIONAL BACKGROUND (Module 6) ========== */
    ENHANCED['Organizational Background'] = noteShell('Module 6: Proposal Writing Fundamentals', 'Organizational Background',
      '<h4>1. Definition</h4>' +
      '<p>Organisational background is the proposal section that presents the applicant’s identity, history, mission, track record, and capacity to deliver the proposed work. It answers: Who are you, and why should the funder trust you with this project?</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>This section builds credibility. Typical content includes:</p>' +
      '<ul>' +
      '<li>Legal name, registration status, and year founded</li>' +
      '<li>Mission and vision</li>' +
      '<li>Geographic and thematic focus</li>' +
      '<li>Key past achievements relevant to the proposed project</li>' +
      '<li>Governance (board) and senior management</li>' +
      '<li>Staff capacity and partnerships</li>' +
      '<li>Financial management systems and previous grant experience</li>' +
      '</ul>' +
      '<p>Keep it relevant. Emphasise experience that matches the proposed activities. Quantify past results where possible (people reached, outcomes achieved, funds managed). Avoid long organisational histories that do not support the current request.</p>' +
      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Funders fund capable organisations, not only good ideas.</li>' +
      '<li>Track record reduces perceived risk.</li>' +
      '<li>Gaps in capacity should be addressed honestly (e.g., via partners or technical assistance).</li>' +
      '</ul>' +
      '<h4>4. Key Concepts</h4>' +
      '<ul>' +
      '<li>Credibility and comparative advantage</li>' +
      '<li>Evidence of past performance</li>' +
      '<li>Governance and financial controls</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Draft a half-page organisational background for a sample NGO, highlighting three achievements relevant to a proposed education or health project.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Write an organisational background that would support a grant application for community-based training in Liberia.</div>' +
      '<h4>6. Common Mistakes</h4>' +
      '<ul>' +
      '<li>Generic copy that could fit any organisation.</li>' +
      '<li>No evidence of past delivery or financial management.</li>' +
      '<li>Overstating capacity or inventing partnerships.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p>Organisational background is your credibility section. Make it factual, relevant to the request, and supported by concrete achievements.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol><li>List your organisation’s strongest proof points.</li><li>Align them to a sample project theme.</li><li>Complete the practice quiz.</li></ol>'
    );

    /* Apply all enhanced notes by matching lesson title in existing notes */
    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n !== 'string') return;
      Object.keys(ENHANCED).forEach(function (title) {
        if (n.indexOf(title) !== -1 && n.indexOf('Formal Study Note') !== -1) {
          // Replace short generated notes with expanded formal notes
          if (n.indexOf('1. Definition') === -1 || n.length < 1200) {
            notes[k] = ENHANCED[title];
          }
        } else if (n.indexOf(title) !== -1 && n.indexOf('<h3>' + title + '</h3>') !== -1) {
          notes[k] = ENHANCED[title];
        } else if (n.indexOf('>' + title + '<') !== -1 || n.indexOf(title + '</h3>') !== -1) {
          notes[k] = ENHANCED[title];
        }
      });
    });

    COURSES_DB[CID]._proposalNotesApplied = true;
    console.log('[GRANT] Proposal writing formal notes applied');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@fa1c1e69d4d1c7c9a945060e3f231a9203613ed6/grantwriting-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[GRANT] enhance', e); }
      console.log('[GRANT] Full curriculum + Life Cycle + Proposal Writing notes ready');
    };
    s.onerror = function () {
      console.error('[GRANT] Could not load full curriculum from CDN');
    };
    document.head.appendChild(s);
  }

  if (COURSES_DB[CID] && COURSES_DB[CID]._grantFullBuilt) {
    try { applyEnhancements(); } catch (e) {}
  } else {
    loadAndEnhance();
  }
})();
