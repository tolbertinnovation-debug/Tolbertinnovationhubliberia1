// The lesson workspace keeps its reading and video surfaces mounted when panels change.
function currentLesson(){return sample.lessons.find(l=>l.id===route.split('/')[1])||sample.lessons[0];}
function applyWorkspaceLayout(){
  const reading=route.startsWith('reader/');
  document.body.classList.toggle('learning-open',reading);
  document.body.classList.toggle('nav-compact',reading?readerNavCompact:collapsedNav);
  document.body.classList.toggle('focus-view',reading&&readerFocus);
  updateReaderExpansion();
  const toggle=$('[data-action="toggle-nav"]');
  if(toggle){const name=document.body.classList.contains('nav-compact')?'Expand navigation':'Collapse navigation';toggle.setAttribute('aria-label',name);toggle.title=name;}
  const back=$('[data-action="history-back"]'),forward=$('[data-action="history-forward"]');
  if(back)back.disabled=historyIndex===0;if(forward)forward.disabled=historyIndex===routeHistory.length-1;
}
function reader(id){
  const l=currentLesson(),index=sample.lessons.indexOf(l),note=state.notes.find(n=>n.courseId===l.id);
  return `<div class="learning-toolbar">
    <button class="button secondary" data-route="course/${sample.courseId}">${icon('back')}<span>Course overview</span></button>
    <div class="lesson-context"><strong>${esc(courseName())}</strong><span>${sample.full?'Full course · Activity':'Desktop preview · Lesson'} ${index+1} of ${sample.lessons.length}</span></div>
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
      <h2>${esc(courseName())}</h2>${courseSelector()}<p class="outline-progress" id="outline-progress"></p><div class="learning-progress"><i id="learning-progress-bar"></i></div>
      ${moduleNavigation(l)}
      <button class="text-btn" data-route="library">Browse all courses ${icon('arrow')}</button>
    </aside>
    <section class="lesson-stage" aria-label="Lesson workspace">
      <header class="lesson-heading"><div><span class="eyebrow">LEARN AT YOUR OWN PACE</span><h1>${esc(l.final?'Final course assessment':l.title)}</h1></div><span class="lesson-position">${String(index+1).padStart(2,'0')} / ${String(sample.lessons.length).padStart(2,'0')}</span></header>
      <div class="lesson-tabbar"><div class="lesson-tabs" role="tablist" aria-label="Lesson materials">
        ${[['read','book',l.kind==='quiz'?'Assessment':l.kind==='project'?'Project brief':'Lesson'],['resources','download','Resources']].map(([id,ic,label])=>`<button id="tab-${id}" role="tab" aria-controls="pane-${id}" aria-selected="${readerTab===id}" tabindex="${readerTab===id?'0':'-1'}" data-reader-tab="${id}">${icon(ic)}${label}</button>`).join('')}
      </div><button class="reader-controls-return" data-action="reading-top" aria-label="Show course controls">Course controls ↑</button><label class="reader-text-size">Text size <select id="reader-size" aria-label="Reader text size">${[16,18,20,22].map(n=>`<option value="${n}" ${state.fontSize===n?'selected':''}>${n}px</option>`).join('')}</select></label></div>
      <section class="lesson-pane reading-pane" id="pane-read" data-lesson-id="${l.id}" tabindex="0" aria-label="Scroll lesson content" role="tabpanel" aria-labelledby="tab-read">${l.kind==='quiz'?assessmentPane(l):`${lessonVideoSection(l)}<iframe id="lesson-frame" title="${esc(l.title)}" sandbox="allow-scripts" scrolling="no"></iframe>${l.kind==='project'?projectPane(l):''}`}</section>
      <section class="lesson-pane resource-pane" id="pane-resources" role="tabpanel" aria-labelledby="tab-resources" hidden>
        <span class="eyebrow">KEEP EXPLORING</span><h2>Everything for this lesson</h2><p class="muted">Move between the material, your notes, and the course roadmap.</p>
        <div class="resource-grid"><button class="resource-card" data-reader-tab="read">${icon('book')}<strong>Lesson reading</strong><span>Course text, examples and explanations. Available offline.</span></button>${l.videoId?`<button class="resource-card" data-reader-tab="read" data-video-jump="true">${icon('play')}<strong>Companion video</strong><span>The video already linked to this TIH lesson. Streams online.</span></button>`:''}<button class="resource-card" data-action="toggle-notes">${icon('note')}<strong>Your learning notes</strong><span>Keep questions and takeaways beside the lesson. Saved automatically.</span></button><button class="resource-card" data-route="course/${sample.courseId}">${icon('grid')}<strong>Course roadmap</strong><span>Explore the full course outline and learning outcomes.</span></button></div>
        ${sample.courseId==='ielts'?`<div class="ielts-official-resources"><h3>Official IELTS references</h3><p class="muted">Open these source-linked references in your browser. Internet required.</p><div class="button-row"><button class="button secondary" data-hub="ieltsFormat">Test delivery options ↗</button><button class="button secondary" data-hub="ieltsScoring">Band scoring explained ↗</button><button class="button secondary" data-hub="ieltsWriting">Academic Writing format ↗</button></div></div>`:''}
      </section>
      <footer class="lesson-bottom"><button class="button secondary" data-route="reader/${sample.lessons[Math.max(0,index-1)].id}" ${index===0?'disabled':''}>${icon('back')} Previous lesson</button><button class="text-btn" data-action="reading-top" aria-label="Back to lesson top">Top ↑</button>${l.kind==='quiz'?'<span class="activity-status">Pass at 70% · Best score '+(state.quizScores[l.id]?.best??'—')+(state.quizScores[l.id]?'%':'')+'</span>':l.kind==='project'?'<span class="activity-status">Practical project · Record your work above</span>':`<button class="button primary" data-complete="${l.id}">${icon('check')} ${state.completed.includes(l.id)?'Marked as read':'Mark as read'}</button>`}${index<sample.lessons.length-1?`<button class="button secondary" data-route="reader/${sample.lessons[index+1].id}">Next lesson ${icon('arrow')}</button>`:'<button class="button secondary" data-route="course/${sample.courseId}">Course overview '+icon('arrow')+'</button>'}</footer>
    </section>
    <aside class="lesson-notes" id="lesson-notes" aria-label="Lesson notes">
      <div class="panel-heading"><span class="eyebrow">MAKE IT YOURS</span><button class="icon-button" data-action="toggle-notes" aria-label="Close notes">${icon('close')}</button></div><h2>Your learning notes</h2><p>Questions, ideas, and what you want to remember.</p><label class="sr-only" for="reading-note">Notes for this lesson</label><textarea id="reading-note" data-lesson="${l.id}" maxlength="30000" placeholder="An idea worth keeping…">${esc(note?.body||'')}</textarea><small id="note-status">Saved automatically on this computer</small><button class="text-btn" data-route="notes">Open my notebook ${icon('arrow')}</button>
    </aside>
  </div>`;
}
function videoPlaceholder(l){return `<div class="video-welcome"><span class="video-emblem">${icon('play')}</span><span class="eyebrow">YOUR VIDEO CLASSROOM</span><h2>${l.videoId?'See the lesson come to life.':'No video linked yet.'}</h2><p>${l.videoId?'Load the companion video when you’re ready. Videos stream from YouTube; your reading and notes stay available offline.':'You can still read the full preview lesson and keep your own notes.'}</p>${l.videoId?'<button class="button white" data-action="load-video">'+icon('play')+' Load lesson video</button>':''}<small>${l.videoId?'Loading connects to YouTube, which may collect usage data. Playback starts when you press Play.':''}</small></div>`;}
function initReader(){if(currentLesson().kind!=='quiz')mountLessonText();applyReaderLayout();switchReaderTab(readerTab);updateReadingProgress();if(currentLesson().kind!=='quiz'&&currentLesson().videoId)loadLessonVideo();}
function mountLessonText(){const frame=$('#lesson-frame');if(!frame)return;const token=crypto.randomUUID();frame.dataset.readerToken=token;frame.src=(location.protocol==='tih:'?'tih://reader/':'/reader/')+currentLesson().id+'?size='+state.fontSize+'&token='+token;}
function lessonVideoSection(l){if(!l.videoId)return '';return `<section class="inline-video" aria-label="Lesson video"><div class="inline-video-heading"><div><span class="eyebrow">READ + WATCH</span><h2>Lesson video</h2></div><div><button class="button secondary" data-action="toggle-video" aria-expanded="true" aria-controls="inline-video-body">Hide video</button><button class="text-btn" data-action="open-video">YouTube ↗</button></div></div><div id="inline-video-body"><div class="video-surface" id="video-surface">${videoPlaceholder(l)}</div><p class="video-help">${l.sharedVideo?'Shared module video. The written lesson below covers this topic. ':''}Internet required. Use the player controls for captions, speed and full screen.</p></div><div class="reading-jumps"><button class="button secondary" data-action="read-text">${icon('book')} Read the lesson below ${icon('arrow')}</button><span>Scroll up or down to move between the video and written lesson.</span></div></section>`;}
function toggleLessonVideo(){const body=$('#inline-video-body'),button=$('[data-action="toggle-video"]');if(!body)return;body.hidden=!body.hidden;button.textContent=body.hidden?'Show video':'Hide video';button.setAttribute('aria-expanded',String(!body.hidden));if(body.hidden&&$('#lesson-video'))$('#video-surface').innerHTML=videoPlaceholder(currentLesson());else if(!body.hidden)loadLessonVideo();}
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
  if(!['read','resources'].includes(tab))return;readerTab=tab;
  document.querySelectorAll('[role="tab"][data-reader-tab]').forEach(b=>{const active=b.dataset.readerTab===tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  for(const key of ['read','resources'])$('#pane-'+key).hidden=key!==tab;
  $('.reader-text-size').hidden=tab!=='read'||currentLesson().kind==='quiz';
  updateReaderExpansion();
  // Unmount a hidden video to stop playback; opening panels never reloads it.
  if(tab!=='read'&&$('#lesson-video'))$('#video-surface').innerHTML=videoPlaceholder(currentLesson());else if(tab==='read'&&$('#inline-video-body')&&!$('#inline-video-body').hidden&&!$('#lesson-video'))loadLessonVideo();
}
function loadLessonVideo(){
  const l=currentLesson();if(!$('#video-surface')||$('#lesson-video'))return;if(!/^[A-Za-z0-9_-]{11}$/.test(l.videoId||''))return;
  if(!navigator.onLine){$('#video-surface').innerHTML='<div class="video-welcome"><h2>You’re offline.</h2><p>Connect to the internet to watch this video. The lesson reading and your notes are still ready.</p><button class="button white" data-action="load-video">Try again</button></div>';return;}
  const frame=document.createElement('iframe');frame.id='lesson-video';frame.title='Lesson video: '+l.title;frame.src='https://www.youtube-nocookie.com/embed/'+l.videoId+'?autoplay=0&rel=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&fs=1&origin='+encodeURIComponent('https://org.tolbertinnovationhub.desktop');frame.referrerPolicy='strict-origin-when-cross-origin';frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-presentation');frame.setAttribute('allow','encrypted-media; fullscreen; picture-in-picture');frame.allowFullscreen=true;$('#video-surface').replaceChildren(frame);
}
function updateReadingProgress(){
  if(!route.startsWith('reader/'))return;const l=currentLesson(),p=TIHStudy.progress(sample,state);
  const button=$('[data-complete]');if(button){button.innerHTML=icon('check')+' '+(state.completed.includes(l.id)?'Marked as read':'Mark as read');button.setAttribute('aria-pressed',String(state.completed.includes(l.id)));}
  const status=$('.activity-status');if(status){if(l.kind==='quiz')status.textContent='Pass at 70% · Best score '+(state.quizScores[l.id]?.best??'—')+(state.quizScores[l.id]?'%':'');else if(l.kind==='project')status.textContent=state.projects[l.id]?.complete?'Practical project · Completion recorded':'Practical project · Record your work above';}
  $('#outline-progress').textContent=p.completed+' of '+p.total+(sample.full?' activities complete':' preview lessons read');$('#learning-progress-bar').style.width=p.percent+'%';
  document.querySelectorAll('[data-module-progress]').forEach(el=>{const m=sample.modules[Number(el.dataset.moduleProgress)];el.textContent=m.lessons.filter(lessonDone).length+'/'+m.lessons.length;});
  document.querySelectorAll('[data-progress-lesson]').forEach(el=>{const x=sample.lessons.find(l=>l.id===el.dataset.progressLesson);el.innerHTML=lessonDone(x)?icon('check'):icon(x.kind==='quiz'?'check':x.kind==='project'?'note':'book');});
}

function updateFullscreenLabel(){const b=$('[data-action="fullscreen"]');if(b){b.setAttribute('aria-label',document.fullscreenElement?'Exit full screen':'Enter full screen');b.title=document.fullscreenElement?'Exit full screen (Esc)':'Full screen';}}
document.addEventListener('fullscreenchange',updateFullscreenLabel);
document.addEventListener('keydown',e=>{if(!e.target.matches('[role="tab"][data-reader-tab]'))return;const tabs=[...document.querySelectorAll('[role="tab"][data-reader-tab]')];let i=tabs.indexOf(e.target);if(e.key==='ArrowRight')i=(i+1)%tabs.length;else if(e.key==='ArrowLeft')i=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=tabs.length-1;else return;e.preventDefault();tabs[i].focus();switchReaderTab(tabs[i].dataset.readerTab);});

// Keep the video and lesson mounted while giving the scroll surface more vertical room.
function updateReaderExpansion(){const pane=$('#pane-read'),active=document.body.classList.contains('reader-expanded');const reading=route.startsWith('reader/')&&readerTab==='read'&&currentLesson().kind==='lesson'&&pane&&!pane.hidden;document.body.classList.toggle('reader-expanded',!!reading&&(active?pane.scrollTop>20:pane.scrollTop>160));}
