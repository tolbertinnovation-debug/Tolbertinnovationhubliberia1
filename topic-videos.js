/* ============================================================
   TIH LEARNING HUB — VIDEO OVERRIDES (module + topic)
   ------------------------------------------------------------
   Pin YouTube videos to a course without editing curriculum files.
   Two layers, most-specific wins:

     MODULES[courseId][moduleNumber] = "<link or id>"
        → default video for EVERY content topic in that module.

     TOPICS[courseId]["Exact Topic Title"] = "<link or id>"
        → pins ONE topic; overrides the module default.

   You can paste a FULL YouTube link (watch, youtu.be, embed, mobile,
   shorts) OR a bare 11-character id — both are accepted. Playlist-only
   links are ignored (the player shows one video per lesson).

   Title match ignores the "3.1 " numbering, emojis and case, so
   "Types of Computers" matches the lesson shown as "2.2 Types of
   Computers". Module numbers are the course's REAL module numbers.
   ============================================================ */
(function () {
  function vid(u) {
    u = String(u || '').trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
    var m = u.match(/[?&]v=([A-Za-z0-9_-]{11})/) ||
            u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/embed\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/shorts\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/live\/([A-Za-z0-9_-]{11})/);
    return m ? m[1] : '';
  }

  // ---- Per-MODULE default videos (keyed by real module number) ----
  var MODULES = {
    'computer-literacy': {
      2: 'https://youtu.be/Xpk67YzOn5w',   // Introduction to Computers
      3: 'https://youtu.be/8K7ioTEieps',   // Operating System Basics (Windows)
      4: 'https://youtu.be/8K7ioTEieps',   // File & Folder Management
      6: 'https://youtu.be/k1VUZEVuDJ8',   // Microsoft Word
      7: 'https://youtu.be/Vl0H-qTclOg',   // Microsoft Excel
      8: 'https://youtu.be/u7Tku3_RGPs',   // Microsoft PowerPoint
      9: 'https://youtu.be/zh4jY6YJ2Mc',   // Internet & Web Browsing
      10: 'https://youtu.be/l0eM9Vq9GJU',  // Email & Online Communication
      12: 'https://youtu.be/inWWhr5tnEA',  // Cybersecurity Basics
      14: 'https://youtu.be/2ePf9rue1Ao',  // AI & Emerging Technologies
      15: 'https://youtu.be/8K7ioTEieps'   // Basic Computer Maintenance
    }
  };

  // ---- Per-TOPIC exceptions (override the module default) ----
  var TOPICS = {
    'computer-literacy': {
      'Video Conferencing': 'https://youtu.be/5mN2m5QYSeA', // Google Meet
      'Online Meetings': 'https://youtu.be/hIkCmbvAHQQ',    // Zoom
      'Google Drive': 'https://youtu.be/gs7QvB8m0Ho',
      'Google Workspace': 'https://youtu.be/gs7QvB8m0Ho',
      'Phishing': 'https://youtu.be/XBkzBrXlle0',
      'Using ChatGPT': 'https://youtu.be/T9aRN5JkmL8',
      'AI Productivity Tools': 'https://youtu.be/T9aRN5JkmL8'
    }
  };

  // Normalize all values to bare ids; drop entries with no usable id.
  function normMap(src) {
    var out = {};
    Object.keys(src || {}).forEach(function (cid) {
      out[cid] = {};
      Object.keys(src[cid]).forEach(function (k) {
        var id = vid(src[cid][k]);
        if (id) out[cid][k] = id;
      });
    });
    return out;
  }
  window.TIH_MODULE_VIDEOS = normMap(MODULES);
  window.TIH_TOPIC_VIDEOS = normMap(TOPICS);
})();
