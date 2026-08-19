/* TIH LEARNING HUB — per-topic video loader.

   Every content topic in a course gets its own video, keyed by module so a
   title that repeats across modules can still carry a different clip.

   Data lives in videos/<courseId>-videos.js and looks like:

     window.TIH_TOPIC_VIDEOS['computer-literacy'] = {
       'M1:What Is a Computer?': 'kBGcfVwf9aI', ...
     };

   Only the open course's file is fetched, so the player stays light on a slow
   connection. The course player reads TIH_TOPIC_VIDEOS while it builds its
   lesson list and exposes tihApplyVideoOverrides() so a map that arrives after
   that point still takes effect. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_VIDEOS = window.TIH_TOPIC_VIDEOS || {};

  function loadFor(cid) {
    if (!cid) return;
    if (window.TIH_TOPIC_VIDEOS[cid]) { reapply(); return; }
    var s = document.createElement('script');
    s.src = 'videos/' + cid + '-videos.js?v=1';
    s.async = true;
    s.onload = reapply;
    s.onerror = function () { /* no map for this course yet — keep what exists */ };
    document.head.appendChild(s);
  }

  /* The player may still be building its lesson list, so retry briefly. */
  function reapply() {
    var tries = 0;
    var iv = setInterval(function () {
      tries += 1;
      if (typeof window.tihApplyVideoOverrides === 'function') {
        window.tihApplyVideoOverrides();
        clearInterval(iv);
      } else if (tries > 40) {
        clearInterval(iv);
      }
    }, 250);
    if (typeof window.tihApplyVideoOverrides === 'function') window.tihApplyVideoOverrides();
  }

  window.tihLoadVideos = loadFor;

  var m = /[?&]id=([^&]+)/.exec(location.search);
  var cid = m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  if (cid) loadFor(cid);
})();
