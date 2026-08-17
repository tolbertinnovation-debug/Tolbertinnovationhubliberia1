/* TIH Entrepreneurship notes runtime — builds formal HTML from data packs */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['entrepreneurship']=window.TIH_TOPIC_NOTES['entrepreneurship']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>Entrepreneurship Program · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video. Apply each concept to your own business idea. Complete the practice quiz and the two action steps.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N['__course_intro__']=build('Course Overview','Complete Entrepreneurship & Startup Launch Program','Entrepreneurship is the process of identifying opportunities, gathering resources, accepting calculated risk, and building a venture that creates value for customers—and, when successful, generates sustainable revenue and impact.','<p>This 20-module TIH programme takes you from mindset and idea validation through market research, business models, product, marketing, sales, finance, funding, legal, operations, HR, technology &amp; AI, planning, launch, and growth—ending with practical projects, a business plan, a pitch deck, and a Certificate of Completion.</p><h4>How to study</h4><ol><li>Watch the topic video.</li><li>Read the formal note for definitions and key points.</li><li>Apply the concept to your own idea and take one concrete action.</li><li>Complete the interactive practice quiz.</li></ol>');
function materialize(){
var data=window.TIH_ENT_NOTES_DATA||[];
data.forEach(function(row){if(row&&row[0])N[row[0]]=build(row[1],row[0],row[2],row[3]);});
}
materialize();
function tihApplyEntNotes(){
try{
var CID='entrepreneurship';
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
if(console&&console.log)console.log('[ENT-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyEntNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyEntNotes()||tries>50)clearInterval(iv);},250);}
})();
