/* TIH Human Rights and International Humanitarian Law — lesson presentation.
   Runs after the authored notes load and upgrades every lesson with a visual
   legal-analysis pathway and an accessible tap-to-open glossary. The authored
   teaching text stays unchanged. */
(function () {
  if (typeof window === 'undefined') return;

  var courseNotes = window.TIH_LESSON_NOTES && window.TIH_LESSON_NOTES['human-rights-ihl'];
  if (!courseNotes) return;

  function glossaryFromRows(rows) {
    var items = [];
    var rowPattern = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g;
    var match;
    while ((match = rowPattern.exec(rows))) {
      items.push(
        '<details class="hril-keyword">' +
          '<summary><span>' + match[1] + '</span><span aria-hidden="true" class="hril-keyword-toggle">+</span></summary>' +
          '<div class="hril-keyword-meaning"><p>' + match[2] + '</p></div>' +
        '</details>'
      );
    }
    if (!items.length) return null;
    return '<section class="hril-keywords" aria-label="Key Words and Meanings">' +
      '<div class="hril-keywords-heading"><span aria-hidden="true">🔑</span><div><h4>Key Words &amp; Meanings</h4><p>Tap a word to open its definition.</p></div></div>' +
      '<div class="hril-keywords-list">' + items.join('') + '</div>' +
    '</section>';
  }

  var learningPath = '<figure class="hril-learning-path" aria-label="Four-step legal analysis method">' +
    '<figcaption>Use this method throughout the lesson</figcaption>' +
    '<ol>' +
      '<li><span>1</span><strong>Understand</strong><small>State the issue clearly</small></li>' +
      '<li><span>2</span><strong>Identify</strong><small>Find the rule or principle</small></li>' +
      '<li><span>3</span><strong>Apply</strong><small>Connect the rule to the facts</small></li>' +
      '<li><span>4</span><strong>Conclude</strong><small>Explain the duty or remedy</small></li>' +
    '</ol>' +
  '</figure>';

  Object.keys(courseNotes).forEach(function (topic) {
    var html = courseNotes[topic];
    if (typeof html !== 'string' || html.indexOf('hril-keywords') !== -1) return;

    html = html.replace(
      /<h4>Key Terms<\/h4><div class="table-wrap"><table class="study-table"><thead>.*?<\/thead><tbody>(.*?)<\/tbody><\/table><\/div>/,
      function (whole, rows) { return glossaryFromRows(rows) || whole; }
    );

    html = html.replace(
      /(<h4>Learning objectives<\/h4><p>.*?<\/p><ul>.*?<\/ul>)/,
      '$1' + learningPath
    );

    courseNotes[topic] = html;
  });

  if (document.getElementById('hril-enhancement-styles')) return;
  var style = document.createElement('style');
  style.id = 'hril-enhancement-styles';
  style.textContent =
    '.hril-learning-path{margin:1.5rem 0 2rem;padding:1.1rem;border:1px solid #cbdbea;border-radius:18px;background:linear-gradient(135deg,#f7fbff,#eef8f6);overflow:hidden}' +
    '.hril-learning-path figcaption{margin-bottom:1rem;color:#173a67;font-size:.875rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em}' +
    '.hril-learning-path ol{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.65rem;margin:0;padding:0;list-style:none}' +
    '.hril-learning-path li{position:relative;display:flex;min-width:0;flex-direction:column;gap:.2rem;padding:.9rem;border-radius:14px;background:#fff;box-shadow:0 8px 22px rgba(20,55,90,.08)}' +
    '.hril-learning-path li span{display:flex;width:1.75rem;height:1.75rem;align-items:center;justify-content:center;margin-bottom:.3rem;border-radius:50%;background:#173a67;color:#fff;font-size:.8rem;font-weight:800}' +
    '.hril-learning-path li strong{color:#173a67;font-size:.9rem}' +
    '.hril-learning-path li small{color:#526579;font-size:.78rem;line-height:1.4}' +
    '.hril-keywords{margin:2rem 0;padding:1rem;border:1px solid #bfd8d3;border-radius:20px;background:linear-gradient(145deg,#f2fbf9,#f8fbff)}' +
    '.hril-keywords-heading{display:flex;align-items:flex-start;gap:.75rem;padding:.25rem .25rem .85rem}' +
    '.hril-keywords-heading>span{display:flex;width:2.4rem;height:2.4rem;flex:0 0 auto;align-items:center;justify-content:center;border-radius:12px;background:#dcefeb;font-size:1.15rem}' +
    '.hril-keywords-heading h4{margin:0;color:#173a67;font-size:1.2rem}' +
    '.hril-keywords-heading p{margin:.25rem 0 0;color:#5d6f81;font-size:.875rem}' +
    '.hril-keywords-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.65rem}' +
    '.hril-keyword{margin:0!important;border:1px solid #cfdee8!important;border-radius:14px!important;background:#fff!important;overflow:hidden}' +
    '.hril-keyword summary{display:flex;min-height:3.1rem;align-items:center;justify-content:space-between;gap:1rem;padding:.8rem 1rem!important;color:#173a67!important;font-size:.9rem;font-weight:800;cursor:pointer;list-style:none}' +
    '.hril-keyword summary::-webkit-details-marker{display:none}' +
    '.hril-keyword-toggle{display:flex;width:1.6rem;height:1.6rem;flex:0 0 auto;align-items:center;justify-content:center;border-radius:50%;background:#e7f3f0;color:#0f766e;font-size:1.1rem;transition:transform .2s ease}' +
    '.hril-keyword[open] .hril-keyword-toggle{transform:rotate(45deg)}' +
    '.hril-keyword-meaning{border-top:1px solid #e2ebf0;background:#f9fcfd}' +
    '.hril-keyword-meaning p{margin:0!important;padding:.85rem 1rem 1rem!important;color:#42576a;font-size:.9rem;line-height:1.65}' +
    '@media(max-width:700px){.hril-learning-path ol,.hril-keywords-list{grid-template-columns:1fr 1fr}.hril-learning-path li{padding:.8rem}}' +
    '@media(max-width:430px){.hril-learning-path ol,.hril-keywords-list{grid-template-columns:1fr}.hril-learning-path{padding:.85rem}}' +
    '@media print{.hril-keyword>*{display:block}.hril-keyword-toggle{display:none}.hril-learning-path,.hril-keyword{break-inside:avoid}}';
  document.head.appendChild(style);
})();
