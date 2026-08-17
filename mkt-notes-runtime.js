/* TIH Digital Marketing notes runtime */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['marketing']=window.TIH_TOPIC_NOTES['marketing']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>Digital Marketing · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video. Apply the concept to a real or sample brand, define one KPI, then complete the practice quiz.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N['__course_intro__']=build('Course Overview','Complete Digital Marketing Professional Certificate','Digital marketing is the practice of promoting products, services, and brands through digital channels—search, social media, email, content, websites, and paid advertising—while measuring results and improving performance over time.','<p>This 20-module TIH programme takes you from fundamentals through branding, social, SEO, SEM, email, content, websites, analytics, e-commerce, AI, ads, CRM, strategy, freelancing, and career skills—ending with real campaigns, a capstone, and a Certificate of Completion.</p><h4>How to study</h4><ol><li>Watch the topic video.</li><li>Read the formal note.</li><li>Apply the idea to a brand and note one KPI.</li><li>Complete the interactive practice quiz.</li></ol>');
function materialize(){
var data=window.TIH_MKT_NOTES_DATA||[];
data.forEach(function(row){if(row&&row[0])N[row[0]]=build(row[1],row[0],row[2],row[3]);});
}
materialize();
function tihApplyMktNotes(){
try{
var CID='marketing';
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
if(console&&console.log)console.log('[MKT-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyMktNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyMktNotes()||tries>50)clearInterval(iv);},250);}
})();
