/* The public catalogue uses lightweight metadata, never lesson builders.
   Registration fees mirror HubDB.priceFor; legacy isFree flags describe tuition. */
(function () {
  'use strict';
  var grid = document.getElementById('tracksGrid');
  if (!grid || typeof COURSES_DB === 'undefined') return;
  var PAGE_SIZE = 12;
  var PRICE_OVERRIDES = {ielts:60, toefl:25, sat:25, 'ph-career':100, webdev:20};
  var GROUPS = [
    ['all','All courses'], ['technology','Technology & design'], ['business','Business & careers'],
    ['exams','Exams & English'], ['law','Law & public service'], ['health','Health & agriculture'],
    ['ministry','Bible & ministry'], ['philosophy','Philosophy'], ['sports','Sports']
  ];
  var GROUP_IDS = {
    technology:['computer-literacy','ai','data','webdev','design','android','cybersecurity','office','ai-cybersecurity'],
    business:['marketing','entrepreneurship','project-mgmt','leadership','grant-writing','financial-literacy','remote-work','quickbooks','accounting-bookkeeping','business-plan'],
    exams:['english-success','ielts','toefl','sat'],
    law:['human-rights-ihl','liberian-law','military-leadership','national-security-fundamentals'],
    health:['agritech','healthtech','ph-career'], ministry:['bible-foundations'],
    philosophy:['metaphysics'], sports:['football-coaching']
  };
  var search = document.getElementById('trackSearch');
  var categoryBox = document.getElementById('trackFilters');
  var fee = document.getElementById('trackFee');
  var time = document.getElementById('trackTime');
  var sort = document.getElementById('trackSort');
  var reset = document.getElementById('trackReset');
  var clear = document.getElementById('trackSearchClear');
  var result = document.getElementById('trackResults');
  var empty = document.getElementById('trackSearchEmpty');
  var pagination = document.getElementById('trackPagination');
  var viewButtons = document.querySelectorAll('[data-catalog-view]');
  var icons = {
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lesson:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    video:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
    technology:'<rect x="4" y="3" width="16" height="13" rx="2"/><path d="m4 16-2 4h20l-2-4M9 8l-2 2 2 2m6-4 2 2-2 2"/>',
    business:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12l9 3 9-3M12 12v5"/>',
    exams:'<path d="m2 8 10-5 10 5-10 5zM6 10v7c3 3 9 3 12 0v-7M22 8v9"/>',
    law:'<path d="M12 3v18M6 21h12M3 7h18M6 7l-4 8h8zm12 0-4 8h8z"/>',
    health:'<path d="M20 3C9 2 3 7 5 14c6 6 15 1 15-11ZM4 21l10-11"/>',
    philosophy:'<path d="M9 18h6M9 21h6M8 15c-5-4-3-12 4-12s9 8 4 12l-1 3H9z"/>',
    sports:'<circle cx="12" cy="12" r="9"/><path d="m12 7 5 4-2 6H9l-2-6zM12 3v4M3 10l4 1m2 6-2 3m8-3 2 3m0-9 4-1"/>'
  };
  function icon(name) { return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + (icons[name] || icons.lesson) + '</svg>'; }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function normalise(value) { return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim(); }
  function groupFor(id) {
    var keys = Object.keys(GROUP_IDS);
    for (var i=0;i<keys.length;i++) if (GROUP_IDS[keys[i]].indexOf(id)!==-1) return keys[i];
    return 'other';
  }
  var courses = Object.keys(COURSES_DB).map(function(id,index) {
    var c = COURSES_DB[id], lessons=0, videos=0;
    (c.modules || []).forEach(function(m){(m.lessons || []).forEach(function(l){lessons++;if(l.v)videos++;});});
    var description = c.shortDesc || c.description || '';
    var keywords=normalise([id,c.title,c.category,description,c.level].join(' '));
    return {id:id, order:index, title:c.title.replace(/^Complete\s+/i,''), category:c.category || 'General',
      description:description, level:c.level || 'All levels', duration:c.duration || 'Self-paced',
      hours:parseFloat(c.duration) || 0, price:PRICE_OVERRIDES[id] || 10, group:groupFor(id),
      lessons:lessons, videos:videos, image:c.cardImage || c.image || '', icon:c.icon || '📘',
      gradient:c.gradient || 'linear-gradient(135deg,#002868,#0e7490)',
      keywords:keywords, tokens:keywords.split(' ')};
  });
  if (courses.some(function(c){return c.group==='other';})) GROUPS.push(['other','More subjects']);
  var state;
  function selected(value, choices, fallback) { return choices.indexOf(value)!==-1 ? value : fallback; }
  function fromURL() {
    var p=new URLSearchParams(location.search);
    return {q:(p.get('q') || '').slice(0,200), category:selected(p.get('category'),GROUPS.map(function(g){return g[0];}),'all'),
      fee:selected(p.get('fee'),['all','standard','up-to-25','premium'],'all'),
      time:selected(p.get('time'),['all','short','long'],'all'),
      sort:selected(p.get('sort'),['default','title','price','duration','lessons'],'default'),
      view:selected(p.get('view'),['grid','list'],'grid'), page:Math.max(1,parseInt(p.get('page'),10)||1)};
  }
  state=fromURL();
  if (!new URLSearchParams(location.search).has('view')) {
    try { state.view=selected(localStorage.getItem('tih_catalog_view'),['grid','list'],'grid'); } catch(e) {}
  }
  function updateURL(mode) {
    if (!mode) return;
    var url=new URL(location.href);
    var defaults={q:'',category:'all',fee:'all',time:'all',sort:'default',view:'grid',page:1};
    Object.keys(defaults).forEach(function(key){if(state[key]===defaults[key])url.searchParams.delete(key);else url.searchParams.set(key,state[key]);});
    if (url.href!==location.href) history[mode==='push'?'pushState':'replaceState'](null,'',url.pathname+url.search+url.hash);
  }
  categoryBox.innerHTML=GROUPS.map(function(g){return '<button type="button" class="lt-fbtn" data-cat="'+g[0]+'" aria-pressed="false">'+esc(g[1])+'<span class="lt-filter-count"></span></button>';}).join('');
  courses.forEach(function(c) {
    var href=c.id==='liberian-law'?'liberian-law':'course-player?id='+encodeURIComponent(c.id);
    var card=document.createElement('a');card.className='lt-card';card.href=href;card.dataset.course=c.id;
    card.innerHTML='<div class="lt-top'+(c.image?' has-img':'')+'" style="background:'+esc(c.gradient)+'">'
      +'<div class="lt-image-fallback" aria-hidden="true"><span>'+icon(c.group)+'</span><small>'+esc(c.category)+'</small></div>'
      +(c.image?'<img class="lt-img" src="'+esc(c.image)+'" alt="" width="680" height="453" loading="lazy" decoding="async">':'')+'</div>'
      +'<div class="lt-body"><span class="lt-cat">'+esc(c.category)+'</span><h3 class="lt-title">'+esc(c.title)+'</h3>'
      +(c.description?'<p class="lt-description">'+esc(c.description)+'</p>':'')
      +'<div class="lt-meta"><span>'+icon('clock')+esc(c.duration)+'</span><span>'+icon('lesson')+c.lessons+' lessons</span><span>'+icon('video')+c.videos+' videos</span></div>'
      +'<p class="lt-level">'+esc(c.level)+'</p><div class="lt-foot"><span class="lt-price">US$'+c.price+'<span class="lt-price-label">registration per course</span></span>'
      +'<span class="lt-go">'+(c.id==='liberian-law'?'View syllabus':'Open course')+' <span aria-hidden="true">→</span></span></div></div>';
    var img=card.querySelector('img');if(img)img.addEventListener('error',function(){img.hidden=true;});
    c.element=card;
  });
  document.querySelectorAll('[data-course-total]').forEach(function(el){el.textContent=courses.length;});
  document.getElementById('trackCountStat').textContent=courses.length;
  function matches(c, ignoreCategory) {
    var words=normalise(state.q).split(' ').filter(Boolean);
    return (ignoreCategory || state.category==='all' || c.group===state.category)
      && words.every(function(w){return w.length<=2?c.tokens.indexOf(w)!==-1:c.keywords.indexOf(w)!==-1;})
      && (state.fee==='all' || (state.fee==='standard'&&c.price===10) || (state.fee==='up-to-25'&&c.price<=25) || (state.fee==='premium'&&c.price>25))
      && (state.time==='all' || (state.time==='short'&&c.hours>0&&c.hours<100) || (state.time==='long'&&c.hours>=100));
  }
  function render(mode) {
    search.value=state.q;fee.value=state.fee;time.value=state.time;sort.value=state.sort;
    clear.hidden=!state.q;
    reset.disabled=!(state.q||state.category!=='all'||state.fee!=='all'||state.time!=='all'||state.sort!=='default');
    var visible=courses.filter(function(c){return matches(c,false);});
    visible.sort(function(a,b){
      if(state.sort==='title')return a.title.localeCompare(b.title);
      if(state.sort==='price')return a.price-b.price||a.title.localeCompare(b.title);
      if(state.sort==='duration')return (a.hours||Infinity)-(b.hours||Infinity)||a.order-b.order;
      if(state.sort==='lessons')return b.lessons-a.lessons||a.order-b.order;
      return a.order-b.order;
    });
    var pages=Math.max(1,Math.ceil(visible.length/PAGE_SIZE));state.page=Math.min(state.page,pages);
    var start=(state.page-1)*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,visible.length);
    courses.forEach(function(c){c.element.hidden=true;});
    var fragment=document.createDocumentFragment();
    visible.forEach(function(c,index){c.element.hidden=index<start||index>=end;fragment.appendChild(c.element);});
    // Keep excluded cards in the DOM for a fast, data-free filter change.
    courses.filter(function(c){return visible.indexOf(c)===-1;}).forEach(function(c){fragment.appendChild(c.element);});
    grid.replaceChildren(fragment);grid.dataset.view=state.view;
    viewButtons.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.catalogView===state.view));});
    categoryBox.querySelectorAll('button').forEach(function(b){
      var cat=b.dataset.cat,active=state.category===cat;
      b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
      b.querySelector('span').textContent=courses.filter(function(c){return matches(c,true)&&(cat==='all'||c.group===cat);}).length;
    });
    result.textContent=visible.length?'Showing '+(start+1)+'–'+end+' of '+visible.length+' course'+(visible.length===1?'':'s')+(visible.length<courses.length?' · '+courses.length+' total':''):'No matching courses · '+courses.length+' available';
    empty.hidden=visible.length!==0;pagination.hidden=pages<=1;
    var nav='<button type="button" data-page="'+(state.page-1)+'"'+(state.page===1?' disabled':'')+' aria-label="Previous page">← Previous</button>';
    for(var p=1;p<=pages;p++)nav+='<button type="button" data-page="'+p+'" aria-label="Page '+p+'"'+(p===state.page?' aria-current="page"':'')+'>'+p+'</button>';
    nav+='<button type="button" data-page="'+(state.page+1)+'"'+(state.page===pages?' disabled':'')+' aria-label="Next page">Next →</button>';
    pagination.innerHTML=nav;updateURL(mode);
  }
  function change(values,mode) { Object.keys(values).forEach(function(k){state[k]=values[k];});if(!('page' in values))state.page=1;render(mode||'push'); }
  function clearFilters() { change({q:'',category:'all',fee:'all',time:'all',sort:'default'});search.focus(); }
  search.addEventListener('input',function(){change({q:search.value.slice(0,200)},'replace');});
  document.getElementById('trackSearchForm').addEventListener('submit',function(e){e.preventDefault();});
  clear.addEventListener('click',function(){change({q:''});search.focus();});
  [fee,time,sort].forEach(function(el){el.addEventListener('change',function(){var v={};v[el===fee?'fee':el===time?'time':'sort']=el.value;change(v);});});
  categoryBox.addEventListener('click',function(e){var b=e.target.closest('button[data-cat]');if(b)change({category:b.dataset.cat});});
  reset.addEventListener('click',clearFilters);document.getElementById('trackResetEmpty').addEventListener('click',clearFilters);
  viewButtons.forEach(function(b){b.addEventListener('click',function(){state.view=b.dataset.catalogView;try{localStorage.setItem('tih_catalog_view',state.view);}catch(e){}render('push');});});
  pagination.addEventListener('click',function(e){var b=e.target.closest('button[data-page]');if(!b||b.disabled)return;change({page:Number(b.dataset.page)});document.getElementById('trackResults').scrollIntoView({block:'start'});var current=pagination.querySelector('[aria-current="page"]');if(current)current.focus({preventScroll:true});});
  window.addEventListener('popstate',function(){state=fromURL();try{localStorage.setItem('tih_catalog_view',state.view);}catch(e){}render(false);});
  render('replace');
})();
