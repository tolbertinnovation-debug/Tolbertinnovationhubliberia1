// Exercise the JavaScript shipped inside the Android WebView, without a live
// YouTube dependency. In particular, ready must not swallow later playback errors.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source = fs.readFileSync(new URL('../app/src/main/java/org/tolbertinnovationhub/learning/ui/LessonVideo.kt', import.meta.url), 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1]
  .replaceAll('${ERROR}', 'tih:error:').replaceAll('$ERROR', 'tih:error:')
  .replaceAll('$READY', 'tih:ready').replaceAll('$videoId', 'kBGcfVwf9aI')
  .replaceAll('$playerOrigin', 'https://org.tolbertinnovationhub.learning.preview');
function player() {
  const timers = new Map();
  let options, loadedScript;
  const context = {
    document: {title: '', createElement: () => ({}), head: {appendChild: s => { loadedScript = s; }}},
    setTimeout: f => { timers.set(1, f); return 1; }, clearTimeout: id => timers.delete(id),
    YT: {Player: function (_, value) { options = value; }}
  };
  vm.createContext(context); vm.runInContext(script, context);
  context.onYouTubeIframeAPIReady();
  return {context, options, timers, loadedScript};
}
test('playback errors after ready reach the Android UI', () => {
  const p = player();
  p.options.events.onReady();
  assert.equal(p.context.document.title, 'tih:ready');
  assert.equal(p.timers.size, 0);
  p.options.events.onError({data: 153});
  assert.equal(p.context.document.title, 'tih:error:153');
  p.options.events.onError({data: 150});
  assert.equal(p.context.document.title, 'tih:error:150');
});
test('timeout and script failure report an error, and late readiness recovers', () => {
  const p = player();
  p.timers.get(1)();
  assert.equal(p.context.document.title, 'tih:error:timeout');
  p.options.events.onReady();
  assert.equal(p.context.document.title, 'tih:ready');
  p.loadedScript.onerror();
  assert.equal(p.context.document.title, 'tih:error:offline');
});
test('player identifies the app and uses the original Computer Literacy video', () => {
  const p = player();
  assert.equal(p.options.playerVars.origin, 'https://org.tolbertinnovationhub.learning.preview');
  assert.equal(p.options.host, 'https://www.youtube-nocookie.com');
  assert.equal(p.options.videoId, 'kBGcfVwf9aI');
  assert.ok(!p.options.playerVars.autoplay);
});
