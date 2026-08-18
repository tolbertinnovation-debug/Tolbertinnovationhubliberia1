/* Assembles PRACTICE_TESTS from base64 chunks (pt-data-*.js) */
(function(){
  var parts = window.__TIH_PT_CHUNKS || [];
  if (!parts.length) { console.error('TIH practice test data missing'); return; }
  var b64 = parts.join('');
  try {
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    var text = new TextDecoder('utf-8').decode(bytes);
    (0, eval)(text);
  } catch (e) {
    console.error('TIH practice test assemble failed', e);
  }
})();
