/* TIH Complete Grant Writing & Fundraising Professional Certificate.
   Loader: pulls the full curriculum build, then applies Grant Life Cycle enhancements. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'grant-writing';
  if (COURSES_DB[CID] && COURSES_DB[CID]._grantFullBuilt) return;

  function applyLifecycleEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._grantFullBuilt) return;
    if (typeof LESSON_CONTENT === 'undefined' || !LESSON_CONTENT[CID]) return;

    var notes = LESSON_CONTENT[CID];
    var enhanced =
      '<div class="study-note">' +
      '<div class="revision-banner"><strong>Grant Writing & Fundraising · Module 2: Introduction to Grants</strong><span>Formal Study Note</span></div>' +
      '<h3>Grant Life Cycle</h3>' +
      '<h4>1. Definition</h4>' +
      '<p>The grant life cycle is the complete sequence of stages through which a grant passes, from identifying a funding opportunity through proposal preparation, submission, award, implementation, reporting, and formal close-out. Mastering each stage improves both the chance of winning funding and the quality of grant management.</p>' +
      '<h4>2. Detailed Explanation</h4>' +
      '<p>Professional grant writers and fundraisers treat funding as a managed process, not a single event. Each stage has distinct tasks, risks, and deliverables. Weak performance in an early stage (for example, poor needs assessment or eligibility checking) usually weakens later stages (proposal quality, implementation, and reporting).</p>' +
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
      '<li>Funders expect applicants to understand the full cycle, not only the writing stage.</li>' +
      '<li>Strong management after the award protects funding and reputation.</li>' +
      '<li>Lessons from close-out improve the next proposal.</li>' +
      '<li>Organisations that manage the cycle well win more repeat funding.</li>' +
      '</ul>' +
      '<h4>4. Key Concepts and Sub-topics</h4>' +
      '<ul>' +
      '<li>Eligibility and fit at the prospecting stage</li>' +
      '<li>Evidence-based needs and SMART objectives in preparation</li>' +
      '<li>Complete, guideline-aligned proposal packages</li>' +
      '<li>Grant agreements, allowable costs, and restricted funds</li>' +
      '<li>Monitoring, reporting deadlines, and close-out requirements</li>' +
      '</ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>Map a real or sample grant opportunity through all nine stages. Note the documents, decisions, and risks at each stage. Identify where your organisation is strongest and where it needs systems or skills.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Choose one funding opportunity relevant to a Liberian NGO, school, or community group and outline what you would do at each stage of the grant life cycle.</div>' +
      '<h4>6. Common Mistakes to Avoid</h4>' +
      '<ul>' +
      '<li>Treating the proposal as the whole job and neglecting post-award management.</li>' +
      '<li>Applying without checking eligibility or reading the full guidelines.</li>' +
      '<li>Missing reporting deadlines or mixing restricted funds with other income.</li>' +
      '<li>Skipping close-out and losing institutional learning.</li>' +
      '</ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>Grant Life Cycle</strong> is a foundational topic within understanding grants and the funding landscape. A clear grasp of every stage — from prospecting to close-out — is essential for professional practice and for producing work that meets donor standards.</p>' +
      '<h4>8. Study Actions</h4>' +
      '<ol>' +
      '<li>Watch the video and list the stages in your own words.</li>' +
      '<li>Write a one-page map of the life cycle for a sample project.</li>' +
      '<li>Complete the practice exercises and the short quiz that follows this lesson.</li>' +
      '</ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>Module 2: Introduction to Grants</em>.</p>' +
      '</div>';

    // Replace any existing Grant Life Cycle note entries that contain the short version
    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n === 'string' && n.indexOf('Grant Life Cycle') !== -1 && n.indexOf('complete sequence of stages') === -1) {
        notes[k] = enhanced;
      }
    });
  }

  // Load the last known good full curriculum from jsDelivr CDN pinned to good commit, then enhance
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@fa1c1e69d4d1c7c9a945060e3f231a9203613ed6/grantwriting-curriculum.js';
  s.onload = function () {
    try { applyLifecycleEnhancements(); } catch (e) { console.warn('[GRANT] enhance', e); }
    console.log('[GRANT] Full curriculum loaded from good build + Life Cycle enhancement applied');
  };
  s.onerror = function () {
    console.error('[GRANT] Could not load full curriculum from CDN');
  };
  document.head.appendChild(s);
})();
