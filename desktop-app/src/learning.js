// The lesson workspace keeps its reading and video surfaces mounted when panels change.
function currentLesson(){return sample.lessons.find(l=>l.id===route.split('/')[1])||sample.lessons[0];}
function applyWorkspaceLayout(){
  const reading=route.startsWith('reader/');
  document.body.classList.toggle('learning-open',reading);
  document.body.classList.toggle('nav-compact',reading?readerNavCompact:collapsedNav);
  document.body.classList.toggle('focus-view',reading&&readerFocus);
  const toggle=$('[data-action="toggle-nav"]');
  if(toggle){const name=document.body.classList.contains('nav-compact')?'Expand navigation':'Collapse navigation';toggle.setAttribute('aria-label',name);toggle.title=name;}
  const back=$('[data-action="history-back"]'),forward=$('[data-action="history-forward"]');
  if(back)back.disabled=historyIndex===0;if(forward)forward.disabled=historyIndex===routeHistory.length-1;
}
function reader(id){
  const l=currentLesson(),index=sample.lessons.indexOf(l),note=state.notes.find(n=>n.courseId===l.id);
  return `<div class="learning-toolbar">
    <button class="button secondary" data-route="course/computer-literacy">${icon('back')}<span>Course overview</span></button>
    <div class="lesson-context"><strong>Computer Literacy</strong><span>Desktop preview · Lesson ${index+1} of ${sample.lessons.length}</span></div>
    <div class="learning-actions">
      <button class="button secondary" data-action="toggle-outline" aria-controls="lesson-outline" aria-expanded="${readerOutline}">${icon('grid')} Lessons</button>
      <button class="button secondary" data-action="toggle-notes" aria-controls="lesson-notes" aria-expanded="${readerNotes}">${icon('note')} My notes</button>
      <button class="button secondary" data-action="focus-view" aria-pressed="${readerFocus}">${icon('expand')} <span>${readerFocus?'Exit focus view':'Focus view'}</span></button>
      <button class="icon-button" data-action="fullscreen" aria-label="Enter full screen" title="Full screen">${icon('expand')}</button>
    </div>
  </div>
  <div class="learning-grid" id="learning-grid">
    <aside class="lesson-outline" id="lesson-outline" aria-label="Course lessons">
      <div class="panel-heading"><span class="eyebrow">YOUR COURSE</span><button class="icon-button" data-action="toggle-outline" aria-label="Close lesson list">${icon('close')}</button></div>
      <h2>Computer Literacy</h2><p class="outline-progress" id="outline-progress"></p><div class="learning-progress"><i id="learning-progress-bar"></i></div>
      <h3>${esc(l.moduleTitle||'Getting started')}</h3>
      <nav aria-label="Lesson navigation">${sample.lessons.map((x,i)=>`<button data-route="reader/${x.id}" class="lesson-link ${x.id===l.id?'active':''}" ${x.id===l.id?'aria-current="step"':''}><span class="lesson-number" data-progress-lesson="${x.id}">${state.completed.includes(x.id)?icon('check'):String(i+1).padStart(2,'0')}</span><span><strong>${esc(x.title)}</strong><small>Reading${x.videoId?' · Video':''}</small></span></button>`).join('')}</nav>
      <p class="preview-explanation">Three lessons are available in this preview. More course lessons and assessments will be added next.</p>
      <button class="text-btn" data-route="library">Browse all courses ${icon('arrow')}</button>
    </aside>
    <section class="lesson-stage" aria-label="Lesson workspace">
      <header class="lesson-heading"><div><span class="eyebrow">LEARN AT YOUR OWN PACE</span><h1>${esc(l.title)}</h1></div><span class="lesson-position">${String(index+1).padStart(2,'0')} / ${String(sample.lessons.length).padStart(2,'0')}</span></header>
      <div class="lesson-tabbar"><div class="lesson-tabs" role="tablist" aria-label="Lesson materials">
        ${[['read','book','Read lesson'],['video','play','Watch video'],['resources','download','Resources']].map(([id,ic,label])=>`<button id="tab-${id}" role="tab" aria-controls="pane-${id}" aria-selected="${readerTab===id}" tabindex="${readerTab===id?'0':'-1'}" data-reader-tab="${id}">${icon(ic)}${label}</button>`).join('')}
      </div><label class="reader-text-size">Text size <select id="reader-size" aria-label="Reader text size">${[16,18,20,22].map(n=>`<option value="${n}" ${state.fontSize===n?'selected':''}>${n}px</option>`).join('')}</select></label></div>
      <section class="lesson-pane reading-pane" id="pane-read" role="tabpanel" aria-labelledby="tab-read"><iframe id="lesson-frame" title="${esc(l.title)}" sandbox=""></iframe></section>
      <section class="lesson-pane video-pane" id="pane-video" role="tabpanel" aria-labelledby="tab-video" hidden>
        <div class="video-surface" id="video-surface">${videoPlaceholder(l)}</div>
        <div class="video-info"><div><h2>${esc(l.title)}</h2><p>Video from the TIH Learning Hub lesson. Internet required. Use the player controls for captions, speed and full screen when available.</p></div>${l.videoId?'<button class="button secondary" data-action="open-video">Open on YouTube ↗</button>':''}</div>
        <p class="video-help">If the video cannot play here, try opening it on YouTube. Some videos may be unavailable or restricted by their owner.</p>
      </section>
      <section class="lesson-pane resource-pane" id="pane-resources" role="tabpanel" aria-labelledby="tab-resources" hidden>
        <span class="eyebrow">KEEP EXPLORING</span><h2>Everything for this lesson</h2><p class="muted">Move between the material, your notes, and the course roadmap.</p>
        <div class="resource-grid"><button class="resource-card" data-reader-tab="read">${icon('book')}<strong>Lesson reading</strong><span>Full preview text, examples and explanations. Available offline.</span></button>${l.videoId?`<button class="resource-card" data-reader-tab="video">${icon('play')}<strong>Companion video</strong><span>The video already linked to this TIH lesson. Streams online.</span></button>`:''}<button class="resource-card" data-action="toggle-notes">${icon('note')}<strong>Your learning notes</strong><span>Keep questions and takeaways beside the lesson. Saved automatically.</span></button><button class="resource-card" data-route="course/computer-literacy">${icon('grid')}<strong>Course roadmap</strong><span>Explore the full course outline and learning outcomes.</span></button></div>
      </section>
      <footer class="lesson-bottom"><button class="button secondary" data-route="reader/${sample.lessons[Math.max(0,index-1)].id}" ${index===0?'disabled':''}>${icon('back')} Previous lesson</button><button class="button primary" data-complete="${l.id}">${icon('check')} ${state.completed.includes(l.id)?'Marked as read':'Mark as read'}</button>${index<sample.lessons.length-1?`<button class="button secondary" data-route="reader/${sample.lessons[index+1].id}">Next lesson ${icon('arrow')}</button>`:'<button class="button secondary" data-route="course/computer-literacy">Course overview '+icon('arrow')+'</button>'}</footer>
    </section>
    <aside class="lesson-notes" id="lesson-notes" aria-label="Lesson notes">
      <div class="panel-heading"><span class="eyebrow">MAKE IT YOURS</span><button class="icon-button" data-action="toggle-notes" aria-label="Close notes">${icon('close')}</button></div><h2>Your learning notes</h2><p>Questions, ideas, and what you want to remember.</p><label class="sr-only" for="reading-note">Notes for this lesson</label><textarea id="reading-note" data-lesson="${l.id}" maxlength="30000" placeholder="An idea worth keeping…">${esc(note?.body||'')}</textarea><small id="note-status">Saved automatically on this computer</small><button class="text-btn" data-route="notes">Open my notebook ${icon('arrow')}</button>
    </aside>
  </div>`;
}
function videoPlaceholder(l){return `<div class="video-welcome"><span class="video-emblem">${icon('play')}</span><span class="eyebrow">YOUR VIDEO CLASSROOM</span><h2>${l.videoId?'See the lesson come to life.':'No video linked yet.'}</h2><p>${l.videoId?'Load the companion video when you’re ready. Videos stream from YouTube; your reading and notes stay available offline.':'You can still read the full preview lesson and keep your own notes.'}</p>${l.videoId?'<button class="button white" data-action="load-video">'+icon('play')+' Load lesson video</button>':''}<small>${l.videoId?'Loading connects to YouTube, which may collect usage data. No video loads automatically.':''}</small></div>`;}
function initReader(){mountLessonText();applyReaderLayout();switchReaderTab(readerTab);updateReadingProgress();}
function mountLessonText(){
  const lesson=currentLesson(),css=sample.css.replace(/@import[^;]+;/gi,'').replace(/url\([^)]*\)/gi,'none').replace(/<\/style/gi,'');
  $('#lesson-frame').srcdoc=`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; form-action 'none'"><style>${css}html{font-size:${state.fontSize}px}body{margin:0;padding:30px clamp(22px,5vw,72px);color:#26364e;background:white;font:1rem/1.85 system-ui;overflow-wrap:anywhere}.overview-text{font-size:inherit;max-width:1100px;margin:auto}.overview-text p,.overview-text li{font-size:inherit}.revision-banner{display:none}.table-wrap{overflow:auto}table{max-width:100%;border-collapse:collapse}td,th{padding:12px;border:1px solid #dae2ed}img,svg{max-width:100%;height:auto}button{display:none}h1,h2,h3{line-height:1.35}details{padding:12px;border:1px solid #dae2ed;border-radius:10px}a{pointer-events:none}</style></head><body><main class="overview-text">${lesson.html}</main></body></html>`;
}
function applyReaderLayout(){
  if(!$('#learning-grid'))return;
  $('#learning-grid').classList.toggle('with-outline',readerOutline&&!readerFocus);
  $('#learning-grid').classList.toggle('with-notes',readerNotes&&!readerFocus);
  $('#lesson-outline').hidden=!readerOutline||readerFocus;$('#lesson-notes').hidden=!readerNotes||readerFocus;
  $('[data-action="toggle-outline"]').setAttribute('aria-expanded',String(readerOutline&&!readerFocus));
  $('[data-action="toggle-notes"]').setAttribute('aria-expanded',String(readerNotes&&!readerFocus));
  const focus=$('[data-action="focus-view"]');focus.setAttribute('aria-pressed',String(readerFocus));focus.querySelector('span').textContent=readerFocus?'Exit focus view':'Focus view';
  updateFullscreenLabel();
}
function switchReaderTab(tab){
  if(!['read','video','resources'].includes(tab))return;readerTab=tab;
  document.querySelectorAll('[role="tab"][data-reader-tab]').forEach(b=>{const active=b.dataset.readerTab===tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  for(const key of ['read','video','resources'])$('#pane-'+key).hidden=key!==tab;
  $('.reader-text-size').hidden=tab!=='read';
  // Unmount a hidden video to stop playback; opening panels never reloads it.
  if(tab!=='video'&&$('#lesson-video'))$('#video-surface').innerHTML=videoPlaceholder(currentLesson());
}
function loadLessonVideo(){
  const l=currentLesson();if(!/^[A-Za-z0-9_-]{11}$/.test(l.videoId||''))return;
  if(!navigator.onLine){$('#video-surface').innerHTML='<div class="video-welcome"><h2>You’re offline.</h2><p>Connect to the internet to watch this video. The lesson reading and your notes are still ready.</p><button class="button white" data-action="load-video">Try again</button></div>';return;}
  const frame=document.createElement('iframe');frame.id='lesson-video';frame.title='Lesson video: '+l.title;frame.src='https://www.youtube-nocookie.com/embed/'+l.videoId+'?rel=0&playsinline=1';frame.referrerPolicy='strict-origin-when-cross-origin';frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-presentation');frame.setAttribute('allow','encrypted-media; fullscreen; picture-in-picture');frame.allowFullscreen=true;$('#video-surface').replaceChildren(frame);
}
function updateReadingProgress(){
  if(!route.startsWith('reader/'))return;const l=currentLesson(),completed=sample.lessons.filter(x=>state.completed.includes(x.id)).length;
  const button=$('[data-complete]');button.innerHTML=icon('check')+' '+(state.completed.includes(l.id)?'Marked as read':'Mark as read');button.setAttribute('aria-pressed',String(state.completed.includes(l.id)));
  $('#outline-progress').textContent=completed+' of '+sample.lessons.length+' preview lessons read';$('#learning-progress-bar').style.width=completed/sample.lessons.length*100+'%';
  document.querySelectorAll('[data-progress-lesson]').forEach((el,i)=>el.innerHTML=state.completed.includes(el.dataset.progressLesson)?icon('check'):String(i+1).padStart(2,'0'));
}
function updateFullscreenLabel(){const b=$('[data-action="fullscreen"]');if(b){b.setAttribute('aria-label',document.fullscreenElement?'Exit full screen':'Enter full screen');b.title=document.fullscreenElement?'Exit full screen (Esc)':'Full screen';}}
document.addEventListener('fullscreenchange',updateFullscreenLabel);
document.addEventListener('keydown',e=>{if(!e.target.matches('[role="tab"][data-reader-tab]'))return;const tabs=[...document.querySelectorAll('[role="tab"][data-reader-tab]')];let i=tabs.indexOf(e.target);if(e.key==='ArrowRight')i=(i+1)%tabs.length;else if(e.key==='ArrowLeft')i=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=tabs.length-1;else return;e.preventDefault();tabs[i].focus();switchReaderTab(tabs[i].dataset.readerTab);});
