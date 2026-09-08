/* TIH Complete Metaphysics curriculum — 8 modules, 24 content lessons,
   4 applied projects, 8 module assessments and a separate final examination. */
(function () {
  if (typeof window === 'undefined') return;
  window.COURSES_DB = window.COURSES_DB || {};
  if (window.COURSES_DB.metaphysics && window.COURSES_DB.metaphysics._fullBuilt) return;

  var topics = [
    [1,'Foundations and Philosophical Method','🏛️',[
      ['What Is Metaphysics?','Metaphysics is the branch of philosophy that studies the most general structure of reality: what exists, what it is like, and how its basic parts relate.','metaphysics|empirical science','A physicist measures how bodies fall; a metaphysician asks what makes a law of nature a law.','Metaphysics asks foundational questions but must still use clear concepts and reasons.',['reality','existence','metaphysics','ontology','first principles']],
      ['How Metaphysical Arguments Work','A metaphysical argument is a connected set of premises offered as reasons for a conclusion about reality.','validity|soundness','From “every change has an explanation” and “the seed changed,” one may infer that the seed’s change has an explanation.','A valid form is not enough: the premises must also be justified.',['premise','conclusion','validity','soundness','counterexample']],
      ['A Short History of Metaphysics','The history of metaphysics is a continuing debate about being, substance, mind, freedom and the limits of human reason.','rationalism|empiricism','Plato emphasized Forms, Aristotle substances, Descartes mind and matter, and Kant the limits of speculative reason.','Later thinkers often revise earlier questions rather than simply discard them.',['Forms','substance','rationalism','empiricism','transcendental']]
    ]],
    [2,'Being, Existence and Categories','🧩',[
      ['Ontology: What Exists?','Ontology is the study of being and of the categories of things that exist.','ontology|epistemology','A list containing people, numbers, institutions and fictional characters forces us to ask whether all items exist in the same way.','Saying that something exists requires clarity about the category and sense of existence involved.',['ontology','entity','category','existential commitment','abstract object']],
      ['Substance and Properties','A substance is commonly understood as a thing that bears properties, while a property is a way that a thing is.','substance|property','The mango is the bearer; its greenness, sweetness and mass are properties that may change while it remains that mango.','The substance–property distinction explains predication, but philosophers disagree about what substances ultimately are.',['substance','property','bearer','accident','essence']],
      ['Universals and Particulars','A particular is an individual thing; a universal is a repeatable feature that can be exemplified by many particulars.','universal|particular','Two school uniforms are both blue: the shirts are particulars, while blueness is the alleged universal they share.','Realism, nominalism and conceptualism offer different accounts of shared features.',['universal','particular','realism','nominalism','instantiation']]
    ]],
    [3,'Identity, Change and Persistence','🔄',[
      ['Identity and Change','The problem of persistence asks how one thing can remain numerically identical while changing its qualities over time.','numerical identity|qualitative identity','A child and the adult she becomes differ greatly in qualities yet may be numerically one person.','Good accounts specify which changes preserve a thing and which changes destroy it.',['identity','persistence','numerical identity','qualitative identity','continuity']],
      ['The Ship of Theseus','The Ship of Theseus is a thought experiment about whether gradual replacement of every part preserves an object’s identity.','material continuity|structural continuity','If every plank is replaced and the old planks form another ship, competing criteria identify different “originals.”','The puzzle exposes conflict among matter, form, function and history as criteria of identity.',['thought experiment','constitution','continuity','replacement','criterion']],
      ['Personal Identity','Personal identity concerns what makes a person at one time the same person at another time.','bodily continuity|psychological continuity','Memory loss tests Locke’s memory view, while brain transfer cases test bodily accounts.','No simple criterion solves every case; a position should explain ordinary continuity and difficult cases.',['person','memory criterion','psychological continuity','bodily continuity','self']]
    ]],
    [4,'Causation, Laws and Explanation','⚙️',[
      ['What Is Causation?','Causation is the relation in which one event, state or process helps bring about another.','cause|correlation','Rain and open drainage may cause flooding, while umbrella sales merely correlate with rain.','A causal claim needs more than sequence or association; it needs a defensible connection.',['cause','effect','correlation','mechanism','intervention']],
      ['Hume and the Regularity Theory','Hume argued that experience reveals constant conjunction and expectation, not a visible necessary connection between cause and effect.','constant conjunction|necessary connection','Repeatedly seeing flame followed by heat trains expectation, but necessity is not itself observed.','Regularity explains prediction yet faces difficulty distinguishing genuine causes from accidental patterns.',['Hume','regularity','constant conjunction','necessary connection','induction']],
      ['Laws of Nature and Sufficient Reason','Laws of nature describe or govern regularities, while the Principle of Sufficient Reason says facts require an adequate explanation.','descriptive law|governing law','“Metals expand when heated” may summarize a pattern or express a governing necessity, depending on the theory.','Explanation may terminate in basic facts; whether every fact must have a reason remains disputed.',['law of nature','sufficient reason','necessity','explanation','brute fact']]
    ]],
    [5,'Space, Time and Temporal Reality','⏳',[
      ['What Is Time?','Time is the dimension or ordering in which events stand as earlier than, simultaneous with, or later than one another.','clock time|metaphysical time','A clock measures intervals, but measurement alone does not decide whether time flows objectively.','The experience of passage and the ordering of events must be distinguished.',['time','duration','temporal order','passage','simultaneity']],
      ['Presentism, Growing Block and Eternalism','Presentism says only the present exists; growing-block theory includes past and present; eternalism treats all times as equally real.','presentism|eternalism','Dinosaurs no longer exist for a presentist but occupy an earlier temporal location for an eternalist.','Each theory explains ordinary tense and change differently and pays a different philosophical cost.',['presentism','growing block','eternalism','tense','block universe']],
      ['Time Travel and the Grandfather Paradox','The grandfather paradox tests whether travel to the past could permit an action that prevents the traveller’s own existence.','logical possibility|physical possibility','If Ama prevents her grandparent meeting, the condition for Ama’s trip disappears, producing an apparent contradiction.','Consistent-history and branching-timeline theories avoid contradiction in different ways.',['time travel','paradox','consistency','causal loop','branching time']]
    ]],
    [6,'Modality and Possible Worlds','🌐',[
      ['Possibility, Necessity and Contingency','A proposition is possible if it could be true, necessary if it could not be false, and contingent if true in some possibilities and false in others.','necessity|contingency','“2 + 2 = 4” is normally treated as necessary; “Monrovia is Liberia’s capital” is true but plausibly contingent.','Modal status concerns how truth varies across possibilities, not simply confidence or probability.',['modality','possible','necessary','contingent','impossible']],
      ['Possible Worlds and Modal Realism','Possible-world language represents complete ways reality might have been; modal realism says such worlds are as concrete as ours.','actualism|modal realism','A counterfactual election result is evaluated by considering the closest world where voting differed.','Possible worlds are a powerful model even if one rejects their concrete existence.',['possible world','actual world','actualism','modal realism','accessibility']],
      ['Counterfactuals and Essential Properties','A counterfactual says what would happen under a contrary condition; an essential property is one a thing could not lose while remaining that thing.','essential|accidental property','A person could change jobs, but could not cease to be the very individual they are and remain numerically identical.','Counterfactual reasoning requires relevantly similar possibilities, not fantasy without constraints.',['counterfactual','essence','accident','closest world','rigid designation']]
    ]],
    [7,'Mind, Consciousness and Persons','🧠',[
      ['The Mind–Body Problem','The mind–body problem asks how conscious thoughts, feelings and intentions relate to physical brains and bodies.','mental|physical','Pain has a felt quality yet also correlates with neural activity and bodily response.','Any theory must address subjective experience, physical explanation and mental causation.',['mind','body','consciousness','qualia','mental causation']],
      ['Dualism, Physicalism and Functionalism','Dualism treats mind and matter as fundamentally distinct; physicalism identifies reality as physical; functionalism defines mental states by causal roles.','substance dualism|physicalism','A functionalist identifies pain through inputs, internal role and behaviour rather than its material alone.','The views differ over what minds are, not over whether brains matter in ordinary human life.',['dualism','physicalism','functionalism','multiple realization','causal role']],
      ['Consciousness and Other Minds','The problem of other minds asks how we can justify belief that beings other than ourselves have conscious experience.','behaviour|experience','Speech, action and shared biology support belief in another person’s pain, though their feeling is not directly observed.','Inference to the best explanation supports other minds without providing first-person certainty.',['other minds','consciousness','behaviour','analogy','inference']]
    ]],
    [8,'Freedom, God and African Metaphysics','🌍',[
      ['Free Will and Determinism','The free-will debate asks whether human agency can coexist with every event being fixed by prior conditions and laws.','compatibilism|incompatibilism','A compatibilist may call an uncoerced, reason-responsive choice free even if it has prior causes.','Debate depends on defining freedom, responsibility, control and alternative possibilities carefully.',['free will','determinism','compatibilism','libertarianism','responsibility']],
      ['Metaphysical Arguments About God','Metaphysical arguments about God reason from existence, causation, contingency, order or concept to a divine reality, while objections challenge their premises and scope.','faith|philosophical argument','A contingency argument asks why dependent beings exist at all; critics question whether the explanation must be personal or divine.','Academic treatment presents arguments and objections fairly without treating philosophical debate as settled proof.',['theism','cosmological argument','contingency','necessary being','problem of evil']],
      ['African Metaphysics: Personhood and Community','African metaphysics includes diverse accounts of reality, personhood, community, ancestors, life-force and relational existence across many traditions.','individualism|relational personhood','The saying “a person is a person through other persons” highlights relations, yet does not erase individual dignity or diversity.','There is no single African worldview; responsible study names traditions, avoids stereotypes and compares arguments.',['Ubuntu','personhood','community','relationality','ancestor']]
    ]]
  ];

  var videoIds = ['uB4Hc4ImbQQ','rEgKC0npXIg','vZtQXteAE-w','_y_awzmQaqI','w4AHo-EklXQ','XNz110GE-FM','VQtK05q9iug','dYAoiLhOuao','trqDnLNRuSc','piQ0MSbR7G4','3vc5ZggUdYo','t7cfljJ79X0','MAScJvxCy2Y','U0aSP2_IiBs','M8oITAoaCr4','DhGMdrYmHIQ','QlXasO7COh0','HHfbk65PTCI','3SJROTXnmus','AMTMtWHclKo','mQ0DJYJ8USY','iSfXdNIolQA','tROD1NGo1dA','62ZTRvakZjY'];
  var distractDefs = ['It is only a report of personal preference.','It is a scientific instrument used to measure matter.','It is a claim that cannot be discussed with reasons.'];
  function q(topic, n) {
    var title=topic[0], def=topic[1], contrast=topic[2].split('|'), example=topic[3], take=topic[4];
    var bank = [
      {q:'Which statement best defines “'+title+'”?',opts:[def,distractDefs[0],distractDefs[1],distractDefs[2]],correct:0,exp:def},
      {q:'In “'+title+'”, which distinction is central?',opts:[contrast[0]+' and '+contrast[1],'opinion and popularity','speed and distance','grammar and spelling'],correct:0,exp:'The lesson distinguishes '+contrast[0]+' from '+contrast[1]+' so that the argument does not trade on ambiguity.'},
      {q:'Which worked example best applies “'+title+'”?',opts:[example,'A claim repeated without evidence','A definition replaced by a slogan','A conclusion unrelated to its premises'],correct:0,exp:example},
      {q:'Which conclusion best reflects careful reasoning about “'+title+'”?',opts:[take,'Every disagreement is merely verbal.','The oldest answer must be correct.','Evidence and definitions are unnecessary.'],correct:0,exp:take}
    ];
    return bank[n];
  }
  function cloneQ(x){return {q:x.q,opts:x.opts.slice(),correct:x.correct,exp:x.exp};}
  var modules=[], quizzes={}, notes={}, topicBank={}, reserved=[], contentCount=0, flat=0, vid=0;
  topics.forEach(function(mod){
    var num=mod[0], title=mod[1], icon=mod[2], list=mod[3], lessons=[];
    list.forEach(function(topic,i){
      topic.module=num; topic.moduleTitle=title; topic.video=videoIds[vid++];
      var qid='meta-m'+num+'-p'+(i+1);
      topicBank[topic[0]]=[cloneQ(q(topic,0)),cloneQ(q(topic,1)),cloneQ(q(topic,2))];
      quizzes[qid]={title:'Practice: '+topic[0],moduleNum:num,questions:topicBank[topic[0]]};
      lessons.push({t:num+'.'+(i+1)+' '+topic[0],d:'Full lesson · video · explained practice',v:topic.video,quizId:qid});
      reserved.push(cloneQ(q(topic,3))); contentCount++; flat++;
    });
    if ([2,4,6,8].indexOf(num)!==-1) {
      var pname={2:'Build an Ontology Map',4:'Causal Analysis of a Community Problem',6:'Possible-Worlds Case Study',8:'Metaphysics Position Paper'}[num];
      lessons.push({t:'🛠️ '+pname,d:'Applied project',isProject:true,v:null}); flat++;
    }
    var aq='meta-m'+num+'-assessment';
    quizzes[aq]={title:'Module '+num+' Assessment',moduleNum:num,questions:list.map(function(t){return cloneQ(q(t,3));})};
    lessons.push({t:'📝 Module '+num+' Assessment',d:list.length+' new questions',isQuiz:true,quizId:aq}); flat++;
    modules.push({title:'Module '+num+': '+title,icon:icon,lessons:lessons});
  });
  var exam=[];
  topics.slice(0,7).forEach(function(mod){mod[3].forEach(function(t){if(exam.length<20) exam.push({q:'In a comparative essay, what is the strongest treatment of '+t[0]+'?',opts:['Define the issue, compare positions, test them with an example, answer an objection, and justify a conclusion','State one view as fact and ignore objections','List names without explaining ideas','Use a slogan instead of an argument'],correct:0,exp:'A strong philosophical answer combines precise definition, fair comparison, reasoning, objection and justified conclusion.'});});});
  quizzes['meta-final']={title:'Final Examination',moduleNum:8,isFinal:true,questions:exam};
  modules[7].lessons.push({t:'🎓 Final Examination',d:'20 new comprehensive questions',isQuiz:true,quizId:'meta-final',isFinal:true});

  window.TIH_METAPHYSICS_TOPICS=topics;
  window.TIH_TOPIC_QUIZZES=window.TIH_TOPIC_QUIZZES||{};
  window.TIH_TOPIC_QUIZZES.metaphysics=topicBank;
  window.COURSES_DB.metaphysics={
    id:'metaphysics',title:'Complete Metaphysics: Reality, Existence, Mind & Freedom',shortTitle:'Complete Metaphysics',category:'Philosophy & Critical Thinking',icon:'🏛️',
    gradient:'linear-gradient(135deg,#071a4a 0%,#3f197d 58%,#ed1c24 145%)',cardImage:'metaphysics-card.svg',badge:'NEW',price:5,duration:'60+ hours',level:'Beginner to Advanced',instructor:'Tolbert Innovation Hub',certificate:'TIH-2026-META',
    description:'A rigorous, accessible journey through reality, existence, identity, causation, time, possibility, mind, freedom, philosophical theology and African metaphysics.',
    outcomes:['Define and compare the major positions in metaphysics','Reconstruct valid arguments and evaluate their premises','Use thought experiments without confusing imagination with proof','Write balanced philosophical answers with objections and replies','Relate classical debates to African perspectives and everyday problems'],
    requirements:['No previous philosophy study required','A phone or computer with internet access','A notebook for argument maps and reflections','Willingness to question assumptions respectfully'],
    modules:modules,quizzes:quizzes,_t:modules.reduce(function(n,m){return n+m.lessons.length;},0),_v:contentCount,_fullBuilt:true
  };
  console.log('[Metaphysics] modules='+modules.length+' content='+contentCount+' total='+window.COURSES_DB.metaphysics._t+' quizzes='+Object.keys(quizzes).length);
})();
