/* TIH Complete Grant Writing & Fundraising Professional Certificate.
   Full 20-module program. Every content lesson has a video + formal detailed
   study notes + unique practice quiz. Projects carry briefs and templates. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'grant-writing';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._grantFullBuilt) return;

  console.log('[GRANT] Loading full curriculum...');
  // Full content restored in subsequent multi-part load if needed
  var script = document.createElement('script');
  script.src = 'grantwriting-curriculum-full.js';
  script.onerror = function() { console.error('[GRANT] full curriculum file missing'); };
  document.head.appendChild(script);
})();
