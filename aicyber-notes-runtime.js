/* TIH AI & Cybersecurity notes runtime — builds formal HTML from data packs */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['ai-cybersecurity']=window.TIH_TOPIC_NOTES['ai-cybersecurity']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>AI & Cybersecurity · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video. Practise only on systems you own or are authorized to test. Complete the practice quiz.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N['__course_intro__']=build('Course Overview','Build Real AI & Cybersecurity Skills','This programme teaches artificial intelligence concepts and defensive cybersecurity skills together—strictly legal, ethical, and limited to systems you own or are explicitly authorized to test.','<p>You progress from AI and security fundamentals through networking, Linux, ethical assessment practices, web security concepts, Python automation, AI-assisted detection, SOC work, forensics, AI threats, and cloud security.</p><h4>How to study</h4><ol><li>Watch the topic video.</li><li>Read the formal note.</li><li>Practise only in authorised labs.</li><li>Complete the interactive practice quiz.</li></ol>');
function materialize(){
var data=window.TIH_AICYBER_NOTES_DATA||[];
data.forEach(function(row){if(row&&row[0])N[row[0]]=build(row[1],row[0],row[2],row[3]);});
}
materialize();
function tihApplyAicyberNotes(){
try{
var CID='ai-cybersecurity';
var TN=window.TIH_TOPIC_NOTES&&window.TIH_TOPIC_NOTES[CID];
if(!TN||typeof COURSES_DB==='undefined'||!COURSES_DB[CID])return false;
if(typeof LESSON_CONTENT==='undefined')window.LESSON_CONTENT={};
var notes=LESSON_CONTENT[CID]||{};
var course=COURSES_DB[CID];
var flat=0;
function norm(s){return String(s||'').replace(/[^a-z0-9]+/gi,' ').replace(/\s+/g,' ').trim().toLowerCase();}
var byNorm={};Object.keys(TN).forEach(function(k){byNorm[norm(k)]=TN[k];});
(course.modules||[]).forEach(function(mod){(mod.lessons||[]).forEach(function(L){
if(!L.isQuiz&&!L.isProject&&!L.isFinal){
var raw=String(L.t||'');
var name=raw.replace(/^\s*\d+\.\d+\s+/,'').replace(/^[^0-9A-Za-z]+/,'').trim();
var html=TN[name]||byNorm[norm(name)];
if(html)notes[String(flat)]=html;
}
flat+=1;
});});
LESSON_CONTENT[CID]=notes;
if(console&&console.log)console.log('[AICYBER-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyAicyberNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyAicyberNotes()||tries>50)clearInterval(iv);},250);}
})();
