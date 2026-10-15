"""Build the independent advanced course without touching the existing Law award.
Run from repository root. Authored source dictionaries are in advanced-law-content.py.
"""
import json
import re
import runpy
from html import escape as e
from pathlib import Path

ID='advanced-liberian-law'
TITLE='Advanced Liberian Legal Studies Programme'
DATE='2026-10-15'
authored=runpy.run_path('tools/advanced-law-content.py')
content=authored['MODULES']
base=runpy.run_path('tools/build-liberian-law.py')
SOURCES={**base['SOURCES'],
 'banking':('Current financial institutions legislation — Central Bank of Liberia','https://www.cbl.org.lr/publications/document-type/regulatory-framework-all-acts'),
 'bank-rules':('Current regulations — Central Bank of Liberia','https://www.cbl.org.lr/publications/document-type/regulations'),
 'ul':('Louis Arthur Grimes School of Law — University of Liberia institutional listing','https://ul.edu.lr/new/louis-arthur-grimes-school-of-law/'),
 'uncitral':('Foreign arbitral awards: convention and source materials — UN legal library (verify status and local application)','https://legal.un.org/avl/ha/crefaa/crefaa.html'),
 'equity-comparison':('Fiduciary duties — Federal Court of Australia judicial lecture (comparative)','https://www.fedcourt.gov.au/digital-law-library/judges-speeches/justice-osullivan/osullivan-j-20260221'),
 'yale-banks':('Banks — Yale conceptual lecture (2011; not current Liberian rules)','https://oyc.yale.edu/economics/econ-252-11/lecture-13')}
PROJECTS=[
 (4,'Public Law and Litigation Research File','A fictional public board cancels a licence and commences proceedings against the provider. Construct a record that separates constitutional review, civil procedure and criminal safeguards.',
  ['A 1,200-word research memorandum with a narrowly framed question, verified primary authorities and one adverse argument per issue','A source-status log, procedural chronology and forum map distinguishing civil and criminal routes','Two alternative relief sections explaining scope, authority and factual assumptions']),
 (8,'Private Rights and Community Land Clinic','A fictional cooperative purchases equipment and proposes a lease over disputed community land. A damaged shipment and overlapping survey create different claims.',
  ['A contract-risk and tort-liability matrix distinguishing parties, conduct and remedies','A land-category, boundary and representation report with a version comparison and participation questions','A 1,400-word balanced opinion and a plain-language 400-word explainer preserving unresolved rights']),
 (12,'Public Procurement and Cross-Border Commerce Dossier','A fictional public tender involves a foreign supplier, a director’s interest and a disputed payment instrument. A later judgment is obtained abroad.',
  ['A procurement criteria audit using current instruments and relevant transition checks','A corporate conflict report and payment-chain diagram identifying each asserted claim','A 1,500-word cross-border strategy separating procurement review, contractual remedies and judgment recognition']),
 (16,'Rights, Family and Evidence Research Portfolio','A fictional family disputes estate administration while a community organisation considers a regional rights complaint. An expert report and privileged email are contested.',
  ['An estate inventory, administration-authority note and confidential-information handling plan','An expert-method review and separate privilege schedule with locally sourced objections','A 1,600-word research memorandum with a domestic-remedies chronology and citation audit']),
 (20,'Employment, Environmental and Tax Compliance Opinion','A fictional training enterprise expands its facility, changes staff arrangements and receives a disputed tax assessment. Residents raise a water-access concern.',
  ['An employment-status and pay reconciliation with auditable assumptions','An environmental authorisation and participation matrix tied to the actual revised design','A 1,600-word integrated opinion with a tax objection schedule, lawful options and source-based procedural questions']),
 (24,'Fiduciary Finance and Intellectual Property Case Study','A fictional education fund finances a startup and licenses course media. Its administrator has an undisclosed business interest and a lender claims the startup’s equipment.',
  ['A trust-classification and fund-reconciliation report distinguishing authority, loss and gain','A current CBL instrument-status table and collateral-priority timeline identifying third-party property','A 1,700-word fiduciary-and-IP opinion with a rights-and-licences register and a reasoned counterargument']),
 (27,'Independent Research Capstone','Choose a narrow Liberian legal question arising from the course. Use published sources and fictional or properly public facts; do not collect private client data or claim to conduct supervised legal practice.',
  ['A 700-word proposal with question, method, scope, ethics and source plan','A 3,500–4,500-word critical research paper using at least twelve checked sources, including relevant primary authorities, and an annotated bibliography','A claim-to-source matrix, adverse-authority discussion, limitations statement and 500-word revision reflection']),
 (27,'Professional Moot and Reasoned Opinion','Use one fictional appellate record about a disputed supply agreement, board authority, community access and evidence. Establish the applicable local review framework; argue both sides before deciding.',
  ['Two opposing 1,500-word memorials with authorities, record pinpoints and precise requested relief','Two eight-minute oral submissions and responses to six bench questions per side; self-record or rehearse privately','A 1,500-word reasoned opinion, twenty-six-subject portfolio index and rubric-based self-assessment'])]

MID_EXTRA={
 7:'A deed is authentic but the grantor’s authority is disputed. Which analysis is required?|Separate document integrity from the interest and authority actually transferable|Treat the stamp as proof of all ownership|Assume possession supplies every missing link|Ignore succession records|Authenticity and substantive entitlement require distinct inquiries.',
 8:'A revised land lease covers an additional water path. What must be checked?|Whether the actual revised transaction received the necessary authority and participation|Whether an earlier meeting occurred at all|Only the developer’s expected profit|Whether one photograph looks official|The relevant consent must relate to the terms actually proposed.',
 9:'A licensing agency uses an undisclosed criterion. What should review investigate?|Its statutory basis, relevance and use through the applicable fair process|Only whether the criterion is efficient|Whether every official approves informally|An assumed right to the licence regardless of safety|The decision must be tested against the governing power and procedure.',
 10:'A transferred cheque and defective goods are disputed together. What is the correct structure?|Separate instrument enforcement from the underlying sale and identify each claimant’s basis|Treat the cheque label as conclusive payment|Assume every transferee has identical rights|Ignore the endorsement chain|The instrument and underlying obligation can raise distinct claims and defences.',
 11:'A departing partner privately agrees to pay all debts. What remains unresolved?|The creditor’s rights and any legally effective release or continuing authority|Automatic extinction of every debt|Only the partners’ preferred profit shares|A presumption that the supplier accepted an unseen email|Internal allocation does not necessarily release external obligations.',
 12:'A treaty record shows signature but the domestic remedy is disputed. What must the opinion separate?|International status and obligation from the local implementation and remedial basis|Signature from every relevant date only|All treaties from any legal effect|The claimant’s preference from all source checking|The two legal levels require distinct authoritative support.',
 13:'A regional complaint alleges delay but has no procedural record. What is needed?|A supported domestic-remedies chronology and the relevant admissibility argument|Automatic access based on frustration alone|A fabricated final order|A guarantee that the regional body will rehear every issue|Admissibility and any exception need evidence and applicable guidance.'}

def balanced(texts,offset=0):
 out=[]
 for i,text in enumerate(texts):
  q=base['q'](text); shift=(offset+i)%4
  if shift:q['opts']=q['opts'][-shift:]+q['opts'][:-shift]
  q['correct']=shift;out.append(q)
 return out

def note_renderer():
 # Reuse the repository's standard full-note renderer with this course's metadata.
 # Only rendering helpers are shared; every teaching dictionary and question is new.
 fn=base['render_note']
 fn.__globals__.update(TITLE=TITLE,ID=ID,SOURCES=SOURCES,MODULES=[m['title'] for m in content])
 return fn

def weekly_schedule(plan):
 """Allocate the stated 240 hours without adding new course requirements.
 Portfolios are integrated into subject blocks and capstone time, not extra fees
 or academic credits. This schedule does not record learner completion.
 """
 blocks=[dict(module=b['module'],title=b['title'],hours=b['estimatedHours']) for b in plan['subjectBlocks']]
 blocks.append(dict(module=27,title='Independent Research and Advocacy Capstone',hours=plan['capstoneHours']))
 remaining=[b['hours'] for b in blocks];index=0;weeks=[]
 for number in range(1,plan['weeks']+1):
  available=plan['hoursPerWeek'];allocations=[];milestones=[]
  while available and index<len(blocks):
   block=blocks[index];before=block['hours']-remaining[index];hours=min(available,remaining[index]);after=before+hours
   allocations.append(dict(module=block['module'],title=block['title'],hours=hours,starts=before==0,finishes=hours==remaining[index]))
   remaining[index]-=hours;available-=hours
   if block['module']==27:
    if before<4<=after:milestones.append(dict(kind='research',title='Finish the research proposal, scope and source plan.',anchor='portfolio-7'))
    if before<20<=after:milestones.append(dict(kind='portfolio',number=7,title=PROJECTS[6][1],anchor='portfolio-7'))
   if remaining[index]==0:
    for p,(mod,title,_,_) in enumerate(PROJECTS,1):
     if mod==block['module'] and p!=7:milestones.append(dict(kind='portfolio',number=p,title=title,anchor=f'portfolio-{p}'))
    if block['module']==13:milestones.append(dict(kind='exam',title='Complete the 13-question advanced midterm after Module 13.',anchor='subject-13'))
    if block['module']==27:milestones.append(dict(kind='exam',title='Complete the 52-question comprehensive final after all portfolio requirements.',anchor='capstone'))
    index+=1
  assert available==0
  weeks.append(dict(week=number,hours=plan['hoursPerWeek'],allocations=allocations,milestones=milestones))
 assert not any(remaining) and sum(w['hours'] for w in weeks)==plan['estimatedHours']
 return weeks

def render_study_plan(plan):
 groups=''
 for offset in range(0,len(plan['weeklySchedule']),5):
  weeks=plan['weeklySchedule'][offset:offset+5];cards=''
  for week in weeks:
   allocations=''
   for a in week['allocations']:
    label='Start' if a['starts'] else 'Continue'
    if a['finishes']:label='Start and finish' if a['starts'] else 'Finish'
    anchor='capstone' if a['module']==27 else 'subject-'+str(a['module'])
    allocations+='<li><a href="#'+anchor+'">Module '+str(a['module'])+': '+e(a['title'])+'</a><span>'+e(label)+' · '+str(a['hours'])+' study hours</span></li>'
   checkpoints=''
   for m in week['milestones']:
    label='Portfolio '+str(m['number'])+': ' if m['kind']=='portfolio' else ''
    checkpoints+='<p class="study-checkpoint'+(' portfolio-checkpoint' if m['kind']=='portfolio' else '')+'"><a href="#'+m['anchor']+'">'+e(label+m['title'])+'</a></p>'
   cards+='<li class="study-week"><h4>Week '+str(week['week'])+' <span>'+str(week['hours'])+' hours</span></h4><ul class="study-allocations">'+allocations+'</ul>'+checkpoints+'</li>'
  groups+='<details class="study-block"'+(' open' if offset==0 else '')+'><summary>Weeks '+str(weeks[0]['week'])+'–'+str(weeks[-1]['week'])+'<span>30 planned hours</span></summary><ol class="study-weeks" start="'+str(weeks[0]['week'])+'">'+cards+'</ol></details>'
 return '''<section class="study-plan" id="study-plan" aria-labelledby="study-plan-heading"><div class="wrap"><p class="eyebrow">A practical route through the course</p><h2 id="study-plan-heading">Your 40-week study plan.</h2><p>Set aside six hours per week. Follow the subjects in order, keep a source-status log and develop your portfolio work as you study. Open a five-week block to see the suggested allocation and checkpoints.</p><div class="study-routine"><h3>Use each subject’s eight hours well.</h3><ol><li><strong>Four hours:</strong> study the two video seminars, full notes and assigned legal sources. Longer lectures or readings may take more time.</li><li><strong>Three hours:</strong> develop the writing assignments, case analysis and any portfolio work due in the block.</li><li><strong>One hour:</strong> complete practice, assessment and revision, including the midterm in its checkpoint block.</li></ol><p>The final 32 hours cover the research capstone, moot, reasoned opinion and final examination. Start longer research tasks early and extend the schedule when needed.</p></div><p class="study-plan-note">This is a suggested pace, not a deadline or academic credit allocation. Portfolio checkpoints identify work to self-assess against the supplied rubric; they do not submit files or record completion. Complete the corresponding steps in the course player. No tutor marking is promised unless separately arranged.</p><div class="study-blocks">'''+groups+'''</div><div class="study-next"><a class="btn btn-red" href="course-player?id=advanced-liberian-law">Open your course →</a><a href="#syllabus">Return to the subject list ↑</a></div></div></section>'''

def build():
 assert len(content)==26 and all(len(m['lessons'])==2 for m in content)
 assert [m['title'] for m in content]==[
  'Constitutional Law','Criminal Law','Criminal Procedure','Civil Procedure','Law of Contracts','Law of Torts','Property Law','Land Law','Administrative Law','Commercial Law','Business and Corporate Law','International Law','Human Rights Law','Family Law','Evidence','Legal Research and Writing','Legal Ethics and Professional Responsibility','Labor and Employment Law','Environmental Law','Taxation Law','Equity and Trusts','Jurisprudence','Banking and Financial Law','Intellectual Property Law','Alternative Dispute Resolution','Trial Advocacy and Moot Court']
 course=dict(id=ID,title=TITLE,shortDesc='Advanced independent study across 26 Liberian law subjects: 52 taught lessons, 80 quizzes and exams, eight research portfolios, a critical research paper and moot court. Master’s-level learning goals; a TIH course certificate, not an LL.M. or university qualification.',
  category='Law & Governance',icon='⚖️',gradient='linear-gradient(135deg,#001d49,#087f9d)',instructor='Tolbert Innovation Hub',instructorTitle='Independent advanced legal studies',
  rating=0,reviewCount=0,students='',duration='240h estimated',level='Advanced · Master’s-level independent study',price='$100',origPrice='$100',isFree=False,badge='new',
  certificateRevision=1,certificateFacts=['26 Law Subjects','52 Taught Lessons','240h estimated'],certId='TIH-2026-ALS-0001',cardImage='advanced-liberian-law-card.svg',
  learn=['Critically analyse all 26 requested subjects through Liberian primary authorities and reasoned comparison','Develop research questions, source-status logs, predictive memoranda and critical legal arguments','Evaluate institutional authority, substantive rights, procedure, evidence and remedial design separately','Analyse current financial regulation, taxation, land, trusts, environmental and commercial problems','Produce eight substantial portfolios, an independent research paper and opposing appellate submissions','Practise ethical file handling, citation integrity and responsive moot-court advocacy'],
  requirements=['Prior foundational legal study, an LL.B. or equivalent knowledge is strongly recommended; beginners should start with the Complete Liberian Law Programme','Advanced English reading, sustained legal research and analytical writing','Internet access for videos and official readings, and a private notebook or digital portfolio','Educational simulations only; no confidential client records or unauthorised legal representation'],
  about=['A separate TIH course with 26 subject modules and a research-and-advocacy capstone. It is designed for advanced independent study using the owner’s requested general subject list, not a verified official university curriculum.',
  'Master’s-level describes the intended depth of critical analysis, research and writing. This is not a Master of Laws (LL.M.), LL.B., university credit, accredited qualification, institutional partnership or permission to practise law. University of Liberia lists the Louis Arthur Grimes School of Law among its professional schools; confirm current degrees and admissions directly with the university.',
  'Complete 140 sequential steps, including 52 taught lessons, 52 practice quizzes, 26 module assessments, a 13-question midterm, eight portfolios and a 52-question comprehensive final. The existing 70% quiz pass threshold applies; coursework is self-recorded using rubrics unless tutor review is separately arranged.',
  'Plan around 240 hours, for example 40 weeks at six hours per week. Eight hours per subject module and 32 hours for the final capstone are planning estimates, not academic credits or a guarantee of mastery. Longer readings and research may require additional time.'],
  modules=[],quizzes={})
 notes={};practice={};reserved={};pins={};videos=[];final=[];mid=[];render=note_renderer()
 old=json.loads(Path('content/liberian-law-sources.json').read_text())
 previous_path=Path('content/advanced-liberian-law-sources.json')
 previous=json.loads(previous_path.read_text()) if previous_path.exists() else {}
 prior={v['url']:v for v in old['videos']+previous.get('videos',[])}
 for n,m in enumerate(content,1):
  entries=[]
  for j,l in enumerate(m['lessons'],1):
   l=dict(l);l['teaching']+='\n\n'+authored['ADVANCED_ANALYSIS'][m['title']][j-1];v=m['videos'][j-1]
   if isinstance(v,int): v=old['videos'][v]['url'].split('v=')[-1]
   l.update(module=n,source=m['source'],reading=m['reading'],level='Advanced independent legal studies',video=v)
   l['questions']=balanced(l['questions'],n+j)
   # Activities remain tied to the authored problem and its specific terminology.
   l['examAdvice']='For “'+l['title']+'”, start by separating '+l['distinction'][0][0].lower()+' from '+l['distinction'][1][0].lower()+'. Apply a verified local rule to the disputed facts, develop the strongest contrary interpretation and justify the scope of the conclusion. A label or foreign quotation alone does not establish the required legal basis.'
   l['activities']=['Using the fictional problem above, prepare opposing analyses of '+l['distinction'][0][0].lower()+' and '+l['distinction'][1][0].lower()+'. Each side must identify a record gap capable of changing the result.', 'Complete the assigned '+m['title'].lower()+' research task: '+l['assignment']+' Exchange a source-and-reasoning audit with a study partner, or perform a written self-audit.']
   l['extraSources']=['courts']
   if n==9:l['extraSources']+=['procurement']
   if n==14:l['extraSources']+=['estates']
   if n==17:l['extraSources']+=['rules']
   if n==21:l['extraSources']+=['equity-comparison']
   if n==23:l['extraSources']+=['bank-rules','security','yale-banks']
   if n==25:l['extraSources']+=['uncitral']
   key=f'M{n}:'+l['title'];qid=f'als-m{n}-topic{j}'
   note=render(0,l).replace('Source review: 14 October 2026.','Source review: 15 October 2026.')
   notes[key]=note;practice[key]=l['questions'][:3];reserved[key]=l['questions'][3:];pins[key]=v
   entries.extend([dict(t=f'{n}.{j} '+l['title'],d='Advanced video seminar + full notes + primary research',v=v),dict(t='Practice: '+l['title'],d='3 authored questions',isQuiz=True,quizId=qid)])
   course['quizzes'][qid]=dict(id=qid,title='Practice: '+l['title'],moduleNum=n,questions=l['questions'][:3])
   url='https://www.youtube.com/watch?v='+v
   videos.append({**prior.get(url,{}),'module':n,'topic':l['title'],'url':url,'role':'Comparative concept illustration. The authored note and verified Liberian primary sources govern local analysis.'})
  qid=f'als-m{n}-assessment';qs=[reserved[f'M{n}:'+l['title']][0] for l in m['lessons']]
  course['quizzes'][qid]=dict(id=qid,title=m['title']+' Assessment',moduleNum=n,questions=qs)
  entries.append(dict(t='Module Assessment: '+m['title'],d='2 reserved questions first delivered here',isQuiz=True,quizId=qid))
  # Only new examination items are used; no practice or module item is reissued.
  ex=balanced(m['exam'][:2],n)
  for q in ex:q['sourceModule']=n
  final+=ex
  if n<=13:
   q=balanced([m['exam'][2] if len(m['exam'])>2 else MID_EXTRA[n]],n)[0];q['sourceModule']=n;mid.append(q)
  if n==13:
   qid='als-midterm';course['quizzes'][qid]=dict(id=qid,title='Advanced Midterm Examination',moduleNum=13,questions=mid)
   entries.append(dict(t='Advanced Midterm Examination',d='13 unseen questions covering subjects 1–13',isQuiz=True,quizId=qid))
  for mod,title,scenario,deliverables in PROJECTS:
   if mod==n:
    entries.append(dict(t=title,d='Research portfolio · keep your deliverables privately',isProject=True))
    notes[f'M{n}:'+title]=base['project_note'](title,scenario,deliverables,n)
  course['modules'].append(dict(title=f'Module {n}: '+m['title'],icon='⚖️',meta='2 taught seminars + practice + assessment'+(' + portfolio' if any(p[0]==n for p in PROJECTS) else ''),lessons=entries))
 last=[]
 for mod,title,scenario,deliverables in PROJECTS:
  if mod==27:
   last.append(dict(t=title,d='Advanced capstone · self-recorded portfolio',isProject=True));notes['M27:'+title]=base['project_note'](title,scenario,deliverables,27)
 qid='als-final';course['quizzes'][qid]=dict(id=qid,title='Advanced Programme Final Examination',moduleNum=27,isFinal=True,questions=final)
 last.append(dict(t='Advanced Programme Final Examination',d='52 unseen questions · all 26 subjects · 70% to pass',isQuiz=True,isFinal=True,quizId=qid))
 course['modules'].append(dict(title='Module 27: Independent Research and Advocacy Capstone',icon='🏛️',meta='Research paper + moot + comprehensive final',lessons=last))
 questions=[q for quiz in course['quizzes'].values() for q in quiz['questions']]
 assert len(questions)==273 and len({q['q'].lower() for q in questions})==273
 assert len(videos)==52 and len({v['url'] for v in videos})==52
 assert sum(len(m['lessons']) for m in course['modules'])==140
 assert len(notes)==60 and len(course['quizzes'])==80
 def js(name,data):return f'window.{name}=window.{name}||{{}};window.{name}[{json.dumps(ID)}]='+json.dumps(data,ensure_ascii=False)+';\n'
 Path(ID+'-curriculum.js').write_text('/* Generated by tools/build-advanced-law.py. */\n(function(){if(typeof COURSES_DB==="undefined")return;COURSES_DB['+json.dumps(ID)+']='+json.dumps(course,ensure_ascii=False)+';})();\n')
 Path(ID+'-topic-quizzes.js').write_text('/* 156 practice + 52 reserved items; no assessment reuse. */\n'+js('TIH_TOPIC_QUIZZES',practice)+js('TIH_RESERVED_QUIZZES',reserved))
 Path(ID+'-video-map.js').write_text('/* Retrieved video references; comparative concepts, not local legal authority. */\n'+js('TIH_TOPIC_VIDEOS',pins))
 # The shared renderer's style is captured from the current generated foundation notes.
 source=Path('liberian-law-notes.js').read_text();style=json.loads(re.search(r's.textContent=(".*?");document.head',source).group(1))
 style+=' .law-note>h3+.law-table-wrap table{min-width:520px}'
 Path(ID+'-notes.js').write_text('/* Original teaching dictionaries: tools/advanced-law-content.py. */\n(function(){'+js('TIH_LESSON_NOTES',notes)+'if(typeof document!=="undefined"&&!document.getElementById("advanced-law-note-style")){var s=document.createElement("style");s.id="advanced-law-note-style";s.textContent='+json.dumps(style)+';document.head.appendChild(s);}})();\n')
 used=set(m['source'] for m in content)|{'courts','procurement','estates','rules','equity-comparison','bank-rules','security','yale-banks','uncitral','ul'}
 source_data=dict(reviewed=DATE,scope='Original TIH advanced independent course; requested 26-subject scope, not an official university curriculum. Videos illustrate concepts; no current-law or full-playback guarantee is inferred from metadata.',sources={k:v for k,v in SOURCES.items() if k in used},videos=videos,linkChecks=previous.get('linkChecks',{}))
 Path('content/advanced-liberian-law-sources.json').write_text(json.dumps(source_data,ensure_ascii=False,indent=2)+'\n')
 path=Path('courses-db.js');text=path.read_text();text=re.sub(r"^COURSES_DB\['advanced-liberian-law'\] = .*;\n?",'',text,flags=re.M)
 summary={k:v for k,v in course.items() if k not in ('modules','quizzes')};summary['modules']=[dict(title='',lessons=[dict(v=1) if i<52 else {} for i in range(140)])]
 path.write_text(text.rstrip()+"\nCOURSES_DB['advanced-liberian-law'] = "+json.dumps(summary,ensure_ascii=False)+";\n")
 path=Path('courses-lite.js');text=path.read_text();match=re.search(r'var LITE = (\{.*?\});',text);lite=json.loads(match.group(1))
 lite[ID]={k:v for k,v in course.items() if k in ('title','shortDesc','category','icon','gradient','instructor','rating','reviewCount','students','duration','level','price','origPrice','isFree','badge','cardImage','certId')};lite[ID].update(_t=140,_v=52)
 path.write_text(text[:match.start(1)]+json.dumps(lite,ensure_ascii=False,separators=(',',':'))+text[match.end(1):])
 plan=dict(courseId=ID,estimatedHours=240,weeks=40,hoursPerWeek=6,subjectBlocks=[dict(module=n,title=m['title'],estimatedHours=8,seminars=[l['title'] for l in m['lessons']],researchTask='Complete both assignments and retain source-status checks and counterarguments.') for n,m in enumerate(content,1)],capstoneHours=32,projects=[dict(module=m,title=t,scenario=s,deliverables=d) for m,t,s,d in PROJECTS])
 plan['weeklySchedule']=weekly_schedule(plan)
 Path('content/advanced-liberian-law-study-plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
 render_page(course,source_data,plan)
 print(f'Built {TITLE}: 26 subjects, 52 taught lessons, 140 steps, 80 quizzes, 273 distinct delivered questions, 8 portfolios.')
 return course

def render_page(course,sources,plan):
 modules=''
 for n,m in enumerate(content,1):
  modules+=f'<details class="module" id="subject-{n}"><summary><span class="num">{n:02d}</span>{e(m["title"])}<span class="plus" aria-hidden="true">+</span></summary><ul>'+''.join('<li>'+e(l['title'])+'</li>' for l in m['lessons'])+'</ul><p class="module-foot">Two taught seminars, full notes, two practice quizzes and a reserved-item assessment. Suggested study: eight hours.</p></details>'
 projects=''.join('<article class="project" id="portfolio-'+str(i)+'"><h3>'+str(i)+'. '+e(t)+'</h3><p>'+e(s)+'</p>'+base['ul'](d)+'</article>' for i,(_,t,s,d) in enumerate(PROJECTS,1))
 readings=''.join('<li><a target="_blank" rel="noopener noreferrer" href="'+e(url,quote=True)+'">'+e(label)+'</a></li>' for label,url in sources['sources'].values())
 html='''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Advanced Liberian Legal Studies Programme | TIH</title><meta name="description" content="Advanced independent legal study across 26 subjects: 52 taught lessons, research portfolios and moot court. TIH certificate, not an LL.M. US$100 registration."><link rel="canonical" href="https://tolbertinnovationhub.org/advanced-liberian-law"><link rel="icon" href="favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="liberian-law-page.css?v=1"><link rel="stylesheet" href="advanced-law-study.css?v=1"></head><body><a class="skip" href="#main">Skip to programme</a><header class="top"><div class="wrap"><a class="brand" href="learning-hub">TIH <span>Learning Hub</span></a><a class="back" href="learning-hub#tracks">← All courses</a></div></header><main id="main"><section class="hero"><div class="wrap"><div><p class="eyebrow">Advanced independent study · Liberia</p><h1>Advanced Liberian<br>Legal Studies Programme</h1><p class="hero-copy">Think critically. Research carefully. Argue with authority. Explore all 26 subjects through 52 taught seminars, detailed notes, fictional case files and substantial writing projects.</p><div class="actions"><a class="btn btn-red" href="hub-apply">Register · US$100</a><a class="btn btn-outline" href="course-player?id=advanced-liberian-law">Open course →</a></div><p class="scope">Master’s-level learning goals. An independent TIH course certificate; not an LL.M., university credit, accredited law degree or permission to practise law.</p></div><img class="hero-art" src="advanced-liberian-law-card.svg" width="960" height="540" alt="Advanced Liberian Legal Studies: 26 subjects, research and advocacy"></div></section><div class="stats"><div class="wrap"><div><strong>26</strong><span>Law subjects</span></div><div><strong>52</strong><span>Taught seminars</span></div><div><strong>8</strong><span>Research portfolios</span></div><div><strong>240h</strong><span>Estimated study</span></div></div></div><section><div class="wrap intro-grid"><div><p class="eyebrow">About this programme</p><h2>Move from knowing the rule to defending the analysis.</h2><p>Each subject pairs two advanced lessons with primary research, a fictional problem, competing arguments and a substantial writing assignment. The 273 delivered questions are distinct across 80 quizzes and examinations.</p><p>Prior foundational legal study, an LL.B. or equivalent knowledge is strongly recommended. New to law? Start with the <a href="liberian-law">Complete Liberian Law Programme</a> before this advanced course.</p></div><div class="notice"><h3>Study level and qualification</h3><p>“Master’s-level” describes the intended depth of research, critical analysis and writing. It does not name a degree awarded by TIH.</p><p>The LL.B. and LL.M. are distinct qualifications. The University of Liberia lists the Louis Arthur Grimes School of Law as a professional school. Confirm its current programmes directly with the university. These 26 subjects are the scope requested for this TIH course, not a verified official university curriculum or a claim of affiliation.</p></div></div></section><section class="syllabus" id="syllabus"><div class="wrap"><p class="eyebrow">The complete subject list</p><h2>26 subjects. One connected research journey.</h2><p>Open a module to see its two seminars. A separate final capstone brings together independent research and advocacy.</p><div class="modules">'''+modules+'''</div></div></section><section class="portfolio"><div class="wrap"><h2 id="capstone">Build an advanced legal portfolio.</h2><p>Six portfolios are placed throughout the subject modules. The final module contains an independent research paper, a professional moot and a comprehensive examination. Deliverables are kept privately and completion is self-recorded against the supplied rubrics; tutor marking is not promised.</p><div class="project-grid">'''+projects+'''</div></div></section><section class="reading"><div class="wrap"><h2>Research from the sources.</h2><p>Read the assigned provisions, check amendments and commencement, and record pinpoint references. Comparative lectures and research guides do not establish local rules. Repository links and video metadata are checked separately; availability is not a guarantee of legal currency.</p><ul>'''+readings+'''</ul><p>Institutional listing checked 15 October 2026. No university endorsement, official syllabus equivalence or academic credit is claimed.</p></div></section><section><div class="wrap"><h2>Plan your advanced study.</h2><details class="faq"><summary>How long does it take?</summary><p>Allow about 240 hours: 208 across the 26 subject modules and 32 for the final research-and-advocacy capstone. One route is 40 weeks at six hours per week. These are flexible planning estimates, not academic credits; extended research and revision may take longer.</p></details><details class="faq"><summary>What must I complete?</summary><p>Complete all 140 steps in order: 52 taught lessons, 52 practice quizzes, 26 module assessments, the 13-question midterm, eight portfolios and the 52-question programme final. Quizzes use the shared 70% pass threshold. Every final question is new, with two questions from each subject.</p></details><details class="faq"><summary>Will this award a master’s degree?</summary><p>No. It awards the TIH course-completion certificate for Advanced Liberian Legal Studies Programme. It is not an LL.M., LL.B., university qualification, professional licence or guarantee of admission or employment.</p></details><details class="faq"><summary>Is this the same as the existing Law programme?</summary><p>No. This is a new course with its own enrolment, progress, lesson sequence and certificate. The existing Complete Liberian Law Programme remains available as foundational preparation.</p></details><details class="faq"><summary>Are projects graded by a tutor?</summary><p>The player records completion and quiz scores. Research and portfolio work uses supplied self-assessment rubrics and private learner files. Tutor grading, dissertation supervision and automatic file submission are not included unless separately arranged with TIH.</p></details><details class="faq"><summary>What is the price?</summary><p>Tuition is free. The one-time registration fee for this advanced programme is US$100. Confirm access through the existing TIH payment and approval process.</p></details></div></section><section class="enrol"><div class="wrap"><div><h2>Begin your advanced legal study.</h2><p>Create your account, select Advanced Liberian Legal Studies Programme and confirm course access.</p></div><div><a class="btn btn-red" href="hub-apply">Register · US$100</a><p><a href="course-player?id=advanced-liberian-law">Already enrolled? Open course →</a></p></div></div></section></main><footer><div class="wrap">© 2026 Tolbert Innovation Hub · <a href="learning-hub">Learning Hub</a> · <a href="liberian-law">Foundation Law programme</a></div></footer></body></html>'''
 html=html.replace('<section><div class="wrap"><h2>Plan your advanced study.</h2>',render_study_plan(plan)+'<section><div class="wrap"><h2>Common questions.</h2>')
 html=html.replace('<a class="btn btn-outline" href="course-player?id=advanced-liberian-law">Open course →</a>','<a class="btn btn-outline" href="course-player?id=advanced-liberian-law">Open course →</a><a class="btn btn-outline" href="#study-plan">View study plan ↓</a>')
 Path(ID+'.html').write_text(html+'\n')

if __name__=='__main__':build()
