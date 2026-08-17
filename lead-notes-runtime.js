/* TIH Leadership notes runtime — course id: leadership */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['leadership']=window.TIH_TOPIC_NOTES['leadership']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>Business Leadership · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video. Apply the idea to your team or a case study, note one action for this week, then complete the practice quiz.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N['__course_intro__']=build('Course Overview','Complete Business Leadership Masterclass','Business leadership is the practice of setting direction, influencing people, and enabling organisations to achieve goals with integrity—balancing strategy, people, operations, and results.','<p>This 20-module TIH masterclass builds self-leadership, strategy, communication, teams, culture, operations, finance, marketing, change, negotiation, HR, performance, entrepreneurship, technology, ethics, and executive presence—ending with projects, a capstone, and a Certificate of Completion.</p><h4>How to study</h4><ol><li>Watch the topic video.</li><li>Read the formal note and templates.</li><li>Apply one idea to a real leadership context.</li><li>Complete the interactive practice quiz.</li></ol>');
function materialize(){
var data=window.TIH_LEAD_NOTES_DATA||[];
data.forEach(function(row){if(row&&row[0])N[row[0]]=build(row[1],row[0],row[2],row[3]);});
}
materialize();
function tihApplyLeadNotes(){
try{
var CID='leadership';
var TN=window.TIH_TOPIC_NOTES&&window.TIH_TOPIC_NOTES[CID];
if(!TN||typeof COURSES_DB==='undefined'||!COURSES_DB[CID])return false;
if(typeof LESSON_CONTENT==='undefined')window.LESSON_CONTENT={};
var notes=LESSON_CONTENT[CID]||{};
var course=COURSES_DB[CID];
var flat=0;
function norm(s){return String(s||'').replace(/[^a-z0-9]+/gi,' ').replace(/\s+/g,' ').trim().toLowerCase();}
var byNorm={};Object.keys(TN).forEach(function(k){byNorm[norm(k)]=TN[k];});
(course.modules||[]).forEach(function(mod){(mod.lessons||[]).forEach(function(L){
if(!L.isQuiz&&!L.isFinal){
var raw=String(L.t||'');
var name=raw.replace(/^\s*\d+\.\d+\s+/,'').replace(/^[^0-9A-Za-z]+/,'').replace(/^🛠️\s*/,'').trim();
var html=TN[name]||byNorm[norm(name)];
if(html)notes[String(flat)]=html;
}
flat+=1;
});});
LESSON_CONTENT[CID]=notes;
if(console&&console.log)console.log('[LEAD-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyLeadNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyLeadNotes()||tries>50)clearInterval(iv);},250);}
})();
