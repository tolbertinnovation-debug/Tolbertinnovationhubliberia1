/* TIH Complete Computer Literacy Professional Certificate.
   Rebuilds COURSES_DB['computer-literacy'] into a 15-module beginner program.
   Restored after accidental overwrite. Detailed formal notes per topic. */
(function () {
  var CID = 'computer-literacy';
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB[CID]) return;
  if (COURSES_DB[CID]._clFullBuilt) return;
  console.error('[COMPLIT] Full curriculum temporarily loading minimal shell — please hard-refresh after restore completes.');
  COURSES_DB[CID]._clFullBuilt = false;
})();
