/* ============================================================
   TIH LEARNING HUB — PER-TOPIC VIDEO OVERRIDES
   ------------------------------------------------------------
   Pin a specific YouTube video to an individual TOPIC (lesson) of
   any course, without touching the course curriculum files.

   HOW TO ADD VIDEOS
   -----------------
   Under a course id, list  "Exact Topic Title": "<youtube link or id>".
   You can paste the FULL YouTube link (watch, youtu.be, embed, or
   mobile) OR just the 11-character video id — both work.

     'wassce-government': {
       'Introduction to WASSCE Government': 'https://www.youtube.com/watch?v=9dGuLxosuI8',
       'Sovereignty': '_OLnPbcm0jE',
     },

   Notes:
   • The topic title match ignores the "3.1 " numbering, emojis, and
     upper/lower case — so "How the Internet Works" matches the lesson
     shown as "1.4 How the Internet Works".
   • Playlist-only links (…/playlist?list=…) are skipped automatically,
     because the player embeds ONE video per lesson — give the single
     watch link you want to show.
   • A topic that isn't listed keeps whatever video its module already
     has, so you can add these gradually.
   ============================================================ */
(function () {
  // Extract a bare 11-char video id from a URL or an id. Returns '' if none.
  function vid(u) {
    u = String(u || '').trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;                 // already an id
    var m = u.match(/[?&]v=([A-Za-z0-9_-]{11})/) ||              // watch?v=
            u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||          // youtu.be/
            u.match(/\/embed\/([A-Za-z0-9_-]{11})/) ||            // /embed/
            u.match(/\/shorts\/([A-Za-z0-9_-]{11})/) ||           // /shorts/
            u.match(/\/live\/([A-Za-z0-9_-]{11})/);               // /live/
    return m ? m[1] : '';                                         // playlists → ''
  }

  // ---- Add your per-topic videos below (keyed by course id) ----
  var TOPICS = {
    // 'course-id': {
    //   'Topic Title': 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
    // },
  };

  // Normalize every value to a bare id; drop entries with no usable id.
  var out = {};
  Object.keys(TOPICS).forEach(function (cid) {
    out[cid] = {};
    Object.keys(TOPICS[cid]).forEach(function (topic) {
      var id = vid(TOPICS[cid][topic]);
      if (id) out[cid][topic] = id;
    });
  });
  window.TIH_TOPIC_VIDEOS = out;
})();
