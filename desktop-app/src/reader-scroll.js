// Lesson frames have their own document policy and only relay size and scroll messages.
let scrollSaveTimer;
function captureLessonScroll(){const pane=$('#pane-read');if(!pane||!route.startsWith('reader/')||!pane.dataset.restored)return;state.lessonScrolls[pane.dataset.lessonId]=Math.round(pane.scrollTop);}
function readerFrameMessage(e){const frame=$('#lesson-frame'),pane=$('#pane-read'),d=e.data;if(!frame||!pane||e.source!==frame.contentWindow||!d||d.token!==frame.dataset.readerToken)return;if(d.type==='tih-reader-height'&&Number.isFinite(d.height)&&d.height>=50&&d.height<=250000){frame.style.height=d.height+'px';if(!pane.dataset.restored){
  pane.readerWidth=d.width;
  if(!pane.restoreInProgress){pane.restoreInProgress=true;const saved=state.lessonScrolls[pane.dataset.lessonId]||0;let last='',stable=0;const started=performance.now();
    const settle=()=>{if(!pane.isConnected||frame!==$('#lesson-frame'))return;const width=frame.clientWidth,dimensions=[width,frame.clientHeight,pane.clientHeight].join(':');
      stable=width>=150&&pane.clientHeight>100&&(Math.abs(width-pane.readerWidth)<=2||performance.now()-started>=500)&&dimensions===last?stable+1:0;last=dimensions;
      if(stable>=3){pane.scrollTop=saved;pane.dataset.restored='true';pane.restoreInProgress=false;}else pane.restoreFrame=requestAnimationFrame(settle);
    };pane.restoreFrame=requestAnimationFrame(settle);
  }
}}if(d.type==='tih-reader-wheel'&&Number.isFinite(d.delta)&&Math.abs(d.delta)<100000){pane.scrollBy(0,d.delta*(d.mode===1?18:d.mode===2?pane.clientHeight:1));}if(d.type==='tih-reader-key'){if(d.key==='Home')pane.scrollTop=0;else if(d.key==='End')pane.scrollTop=pane.scrollHeight;else if(['PageDown','PageUp'].includes(d.key))pane.scrollBy(0,(d.key==='PageDown'?1:-1)*pane.clientHeight*.85);}}
addEventListener('message',readerFrameMessage);
document.addEventListener('scroll',e=>{if(e.target.id!=='pane-read')return;captureLessonScroll();clearTimeout(scrollSaveTimer);scrollSaveTimer=setTimeout(()=>{if(route.startsWith('reader/'))persist();},400);},{capture:true,passive:true});

