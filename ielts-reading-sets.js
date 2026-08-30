/* ============================================================
   TIH IELTS READING, PRACTICE SETS
   ------------------------------------------------------------
   Original passages written for Tolbert Innovation Hub. Nothing
   here is taken from a published test or a third-party app.

   This is a SEPARATE bank from ielts-reading-q.js. That one feeds
   the timed mock exam in practice-test.html, which is a paid item.
   These sets feed the free study-mode page, so the two never
   overlap and free practice does not give away paid content.

   Shape:
     { id, title, topic, words, passage,        // passage is trusted HTML
       questions: [
         { kind:'tfng',  q, answer:'TRUE'|'FALSE'|'NOT GIVEN', exp }
         { kind:'mcq',   q, opts:[...], correct:<index>, type, exp }
         { kind:'gap',   q, answer:['accepted','variants'], exp }
       ] }

   'type' on a multiple-choice question names the IELTS question
   type it trains, which the page uses to coach technique.
   ============================================================ */
window.TIH_IELTS_READING_SETS = [

  {
    id: 'cocoa',
    title: 'The Return of the Cocoa Belt',
    topic: 'Agriculture & economics',
    words: 278,
    passage:
      '<p>For most of the twentieth century, West Africa supplied the greater part of the ' +
      'world\'s cocoa. The crop grew well in the humid forest belt running from Sierra Leone ' +
      'to Cameroon, and smallholders, rather than large plantations, did most of the work. ' +
      'A farmer with two or three hectares could send children to school on the proceeds.</p>' +
      '<p>That advantage proved fragile. Cocoa trees are productive for roughly twenty-five ' +
      'years, and much of the region\'s stock was planted in a single wave during the 1970s. ' +
      'As those trees aged, yields fell. Replanting is expensive and slow: a new tree gives ' +
      'nothing for three to five years, which is a long time for a household with no other ' +
      'income. Many farmers responded by clearing fresh forest instead, a cheaper short-term ' +
      'answer that pushed the cocoa frontier deeper into protected land.</p>' +
      '<p>Recent efforts have taken a different line. Rather than subsidising seedlings alone, ' +
      'several programmes now combine improved planting stock with a cash payment covering the ' +
      'unproductive years. Early results are encouraging, though the schemes are costly and ' +
      'reach only a fraction of growers. A second strand focuses on processing. Historically ' +
      'the region exported raw beans and imported finished chocolate, capturing a small share ' +
      'of the final price. Grinding capacity has since expanded in Côte d\'Ivoire and Ghana, ' +
      'and both countries now process a substantial part of their own harvest.</p>' +
      '<p>Whether this amounts to a genuine recovery is disputed. Output has risen, but so has ' +
      'the acreage under cultivation, which suggests that yield per hectare remains the ' +
      'unsolved problem. Analysts who are cautious point out that the region has seen ' +
      'production booms before, each followed by a slump when prices fell.</p>',
    questions: [
      { kind: 'tfng',
        q: 'Cocoa in West Africa has been grown mainly on large plantations.',
        answer: 'FALSE',
        exp: 'The passage says the opposite: "smallholders, rather than large plantations, did most of the work." A statement that contradicts the passage is FALSE. Reserve NOT GIVEN for when the passage is silent.' },
      { kind: 'tfng',
        q: 'A newly planted cocoa tree produces no crop for several years.',
        answer: 'TRUE',
        exp: '"a new tree gives nothing for three to five years" states this directly. The wording differs from the question, but the meaning matches, which is all TRUE requires.' },
      { kind: 'tfng',
        q: 'Cocoa farmers in Cameroon earn more than those in Ghana.',
        answer: 'NOT GIVEN',
        exp: 'Both countries appear in the passage, but it never compares farmer earnings between them. Two facts being present does not mean the comparison is present. This is the commonest NOT GIVEN trap.' },
      { kind: 'mcq',
        q: 'Why did some farmers clear new forest rather than replant?',
        opts: [
          'New land produced a better quality of bean',
          'It avoided the years of no income that replanting brings',
          'Governments paid them to expand the cocoa frontier',
          'Older trees were destroyed by disease'
        ],
        correct: 1, type: 'factual',
        exp: 'The passage calls clearing forest "a cheaper short-term answer" to the problem that replanting leaves a household with no income for years. Options A and D are never stated; C reverses the passage, which describes the expansion as unwanted.' },
      { kind: 'mcq',
        q: 'In the final paragraph, the writer\'s attitude to the recovery is best described as:',
        opts: ['Confident', 'Guarded', 'Dismissive', 'Indifferent'],
        correct: 1, type: 'writer\'s view',
        exp: 'The writer reports the rise in output but immediately qualifies it: "Whether this amounts to a genuine recovery is disputed", and yield per hectare "remains the unsolved problem". That is guarded, not dismissive. Attitude questions turn on the qualifiers, not the facts.' },
      { kind: 'gap',
        q: 'Complete the sentence with ONE WORD from the passage: Because the region exported raw beans, it captured only a small share of the final ________.',
        answer: ['price'],
        exp: '"capturing a small share of the final price". Completion answers must be copied exactly from the passage, in the number of words allowed. Writing "value" or "profit" would be marked wrong even though the sense is close.' }
    ]
  },

  {
    id: 'flood',
    title: 'Why Cities Flood',
    topic: 'Urban planning',
    words: 285,
    passage:
      '<p>When a city floods, the rain is rarely the whole story. Cities flood because water that ' +
      'once soaked into the ground now has nowhere to go. A field absorbs the greater part of a ' +
      'heavy shower; the same ground under concrete absorbs almost none, and what falls must be ' +
      'carried away by drains sized for a smaller city than the one that grew above them.</p>' +
      '<p>Engineers describe this as an increase in runoff, and its effects are not proportional. ' +
      'Doubling the paved area of a catchment can more than double the peak flow reaching a ' +
      'drain, because water moves across a hard surface far faster than through soil. The flood ' +
      'arrives sooner and higher. Where several paved catchments drain into the same channel, ' +
      'their peaks can coincide, producing a surge none of them would generate alone.</p>' +
      '<p>Traditional responses enlarge the channel: wider drains, deeper culverts, concrete ' +
      'linings to speed the flow. These work, in the sense that the water leaves quickly, but ' +
      'they move the problem downstream, where a neighbourhood with no say in the decision ' +
      'receives it. A newer approach reverses the logic and tries to slow water down. Permeable ' +
      'paving, roadside planting strips and small retention ponds hold part of the flow where it ' +
      'falls, releasing it gradually after the peak has passed.</p>' +
      '<p>Such measures are cheaper than major drainage works and can be built incrementally, ' +
      'which suits cities that cannot fund a single large scheme. They are not a complete answer. ' +
      'In an exceptional storm the ponds fill and the paving saturates, and the city is back to ' +
      'depending on its drains. Their value lies in the frequent, moderate floods that do most ' +
      'of the cumulative damage, not the rare catastrophic one.</p>',
    questions: [
      { kind: 'mcq',
        q: 'What is the main idea of the passage?',
        opts: [
          'Rainfall in cities has increased in recent decades',
          'Urban flooding is driven largely by paved surfaces, and slowing water can help',
          'Concrete drainage channels should be banned',
          'Retention ponds solve urban flooding completely'
        ],
        correct: 1, type: 'main idea',
        exp: 'Main-idea answers must cover the whole passage. A is never claimed. C and D are too strong: the passage says enlarging channels "works" and that slowing water is "not a complete answer". B holds across all four paragraphs.' },
      { kind: 'tfng',
        q: 'Doubling the paved area of a catchment exactly doubles the peak flow.',
        answer: 'FALSE',
        exp: 'The passage says it "can more than double the peak flow" and that the effects "are not proportional". Watch words like exactly, only and always: they often turn a TRUE statement into a FALSE one.' },
      { kind: 'tfng',
        q: 'Permeable paving costs less than large drainage works.',
        answer: 'TRUE',
        exp: '"Such measures are cheaper than major drainage works." The question paraphrases cheaper as costs less, which is what these questions test.' },
      { kind: 'mcq',
        q: 'The writer objects to concrete-lined channels mainly because they:',
        opts: [
          'Are too expensive for most cities',
          'Fail to move water quickly',
          'Transfer the flooding to communities downstream',
          'Require frequent maintenance'
        ],
        correct: 2, type: 'rhetorical purpose',
        exp: 'The passage concedes they work, then objects that "they move the problem downstream, where a neighbourhood with no say in the decision receives it." The complaint is about who bears the cost, not the cost itself. B contradicts the text.' },
      { kind: 'gap',
        q: 'Complete with TWO WORDS from the passage: The real value of slow-water measures lies in the frequent, ________ ________ that cause most cumulative damage.',
        answer: ['moderate floods'],
        exp: 'The passage ends "the frequent, moderate floods that do most of the cumulative damage". Take the words in the order they appear and do not change their form.' },
      { kind: 'mcq',
        q: 'What can be inferred about a city that builds only larger drains?',
        opts: [
          'It will never flood again',
          'It may shift the burden onto places further along the watercourse',
          'It will save money over time',
          'Its rainfall will decrease'
        ],
        correct: 1, type: 'inference',
        exp: 'An inference must follow from the text without being stated outright. The passage says enlarging channels moves the problem downstream, so a city relying on that alone is likely to pass the burden on. A and C overreach; D is unrelated.' }
    ]
  },

  {
    id: 'salt',
    title: 'Salt, Ships and the Sahara',
    topic: 'History',
    words: 265,
    passage:
      '<p>Before the Atlantic trade routes opened, the wealth of West Africa moved north across ' +
      'the Sahara. The desert was not a barrier so much as a sea, crossed by caravans that ' +
      'behaved much as ships did: they followed known routes between fixed ports, carried cargo ' +
      'that justified the risk, and depended on a technology most outsiders underestimated.</p>' +
      '<p>That technology was the camel. Introduced to North Africa in the early centuries of ' +
      'the common era, it could carry roughly 150 kilograms and go for days without water. This ' +
      'made a crossing of two months feasible for a well-organised caravan, and unthinkable ' +
      'without one. Yet the animal alone explains little. Equally important were the oases, each ' +
      'a fixed point where water, fodder and guides could be obtained, and the agreements with ' +
      'desert communities that kept those points open.</p>' +
      '<p>The goods themselves are often misremembered. Gold travelled north, and it is gold that ' +
      'fills the popular account. Travelling south, however, the principal cargo was salt, cut ' +
      'in slabs from desert deposits. In the forest belt salt was scarce and physiologically ' +
      'necessary, and at certain periods it exchanged for gold at rates approaching parity by ' +
      'weight. To the merchants involved this was not remarkable. Each side traded a thing it ' +
      'had in quantity for a thing it lacked.</p>' +
      '<p>The routes declined once European ships could reach the coast directly, though decline ' +
      'was gradual rather than sudden, and some caravans ran into the twentieth century. What ' +
      'ended was not the trade but its importance: a journey that had once been the main artery ' +
      'of a continent became a local one.</p>',
    questions: [
      { kind: 'mcq',
        q: 'Why does the writer compare the Sahara to a sea?',
        opts: [
          'To argue that the desert was once covered by water',
          'To convey that it was crossed along fixed routes between established points',
          'To suggest that crossing it was usually safe',
          'To explain why camels were unnecessary'
        ],
        correct: 1, type: 'rhetorical purpose',
        exp: 'The comparison is explained immediately: caravans "followed known routes between fixed ports". A confuses a metaphor with a geological claim, which is the trap this question type usually sets.' },
      { kind: 'tfng',
        q: 'The camel was native to North Africa.',
        answer: 'FALSE',
        exp: 'It was "introduced to North Africa in the early centuries of the common era". Introduced is the opposite of native.' },
      { kind: 'tfng',
        q: 'A Sahara crossing could take around two months.',
        answer: 'TRUE',
        exp: '"a crossing of two months feasible for a well-organised caravan". Around two months matches two months; approximation words do not make a statement NOT GIVEN.' },
      { kind: 'tfng',
        q: 'Most caravans were owned by North African merchants.',
        answer: 'NOT GIVEN',
        exp: 'Ownership is never discussed. The passage names merchants but says nothing about where they came from, so there is no basis in the text either way.' },
      { kind: 'mcq',
        q: 'According to the passage, the popular account of the trade is misleading because it:',
        opts: [
          'Exaggerates the length of the journey',
          'Overlooks salt as the main southbound cargo',
          'Denies that gold was traded',
          'Claims the routes ended suddenly'
        ],
        correct: 1, type: 'factual',
        exp: '"it is gold that fills the popular account", whereas southbound "the principal cargo was salt". D is close but describes the final paragraph, which corrects a different point and is not called part of the popular account.' },
      { kind: 'gap',
        q: 'Complete with ONE WORD: Salt was scarce and physiologically ________ in the forest belt.',
        answer: ['necessary'],
        exp: '"salt was scarce and physiologically necessary". The grammar of the gap tells you an adjective is wanted, which narrows the search before you even read for meaning.' }
    ]
  },

  {
    id: 'sleep',
    title: 'Sleep and the Teenage Brain',
    topic: 'Science',
    words: 246,
    passage:
      '<p>Adolescents are widely believed to sleep late out of indiscipline. The evidence points ' +
      'elsewhere. During puberty the timing of melatonin release shifts by one to two hours, so ' +
      'the signal that produces sleepiness arrives later in the evening. A teenager told to sleep ' +
      'at nine is being asked to sleep at what the body reads as seven.</p>' +
      '<p>The shift would matter little if waking time moved with it, but school start times have ' +
      'largely stayed where they were. The result is a chronic shortfall on weekdays, repaid by ' +
      'long weekend mornings that push the rhythm later still. Researchers call the pattern ' +
      'social jetlag, on the reasoning that the body experiences something close to a weekly ' +
      'flight across time zones.</p>' +
      '<p>Several districts have tested a straightforward response: start school later. Studies ' +
      'of such changes report longer sleep, better attendance and, in some cases, improved ' +
      'grades. The effects on grades are the most contested, partly because the schools that ' +
      'volunteer for the change may differ from those that do not, and partly because the ' +
      'improvements reported are modest.</p>' +
      '<p>Opposition is rarely about the biology, which few now dispute. It concerns everything ' +
      'attached to the timetable. Bus fleets serve several schools in sequence; sports fixtures ' +
      'assume an afternoon; parents leaving for work at seven rely on a child who has already ' +
      'gone. Districts that have made the change describe the obstacle as logistical rather than ' +
      'scientific, and note that the objections raised beforehand were largely resolved within a ' +
      'term.</p>',
    questions: [
      { kind: 'mcq',
        q: 'What does the passage identify as the cause of later sleep in adolescence?',
        opts: [
          'Poor self-discipline',
          'A shift in the timing of melatonin release',
          'Homework loads',
          'The use of screens at night'
        ],
        correct: 1, type: 'factual',
        exp: 'The first paragraph names the melatonin shift and explicitly rejects the indiscipline explanation. C and D are plausible in real life but absent here, and IELTS answers must come from the passage, not from what you already believe.' },
      { kind: 'tfng',
        q: 'The term social jetlag refers to travelling between time zones for school.',
        answer: 'FALSE',
        exp: 'It describes a body that "experiences something close to a weekly flight across time zones" without any travel. The statement takes a metaphor literally.' },
      { kind: 'tfng',
        q: 'Later start times have been shown to improve grades beyond dispute.',
        answer: 'FALSE',
        exp: 'The passage calls the effects on grades "the most contested" and the improvements "modest". Beyond dispute contradicts contested.' },
      { kind: 'tfng',
        q: 'Most parents support later school start times.',
        answer: 'NOT GIVEN',
        exp: 'Parents appear only as one logistical constraint. Their overall level of support is never measured or stated.' },
      { kind: 'mcq',
        q: 'The final paragraph suggests that resistance to later starts is mainly:',
        opts: [
          'Scientific',
          'Financial',
          'Practical and organisational',
          'Political'
        ],
        correct: 2, type: 'writer\'s view',
        exp: 'The objections listed are buses, fixtures and parents\' working hours, and the districts call the obstacle "logistical rather than scientific". Financial is tempting but the passage never mentions cost.' },
      { kind: 'gap',
        q: 'Complete with TWO WORDS: Districts that made the change described the obstacle as ________ ________ scientific.',
        answer: ['logistical rather than', 'logistical rather'],
        exp: 'The passage reads "logistical rather than scientific". Where a gap sits inside a fixed phrase, copy the run of words exactly as printed.' }
    ]
  },

  {
    id: 'secondhand',
    title: 'The Second-Hand Clothes Trade',
    topic: 'Economics',
    words: 263,
    passage:
      '<p>Every week, bales of used clothing arrive at ports across West Africa, sorted and priced ' +
      'in Europe and North America and sold on by traders who cannot see the contents until the ' +
      'bale is opened. The trade employs large numbers of people and clothes many more cheaply ' +
      'than local manufacture could. It is also blamed for the decline of that manufacture, and ' +
      'both claims contain some truth.</p>' +
      '<p>The case against is straightforward. A domestic mill cannot match the price of a garment ' +
      'that has already been paid for once. Several countries that had substantial textile ' +
      'industries in the 1970s have very little now, and the timing of that fall broadly matches ' +
      'the growth of imports. Yet the same period brought currency devaluation, unreliable power ' +
      'and cheap new imports from Asia, and economists disagree about how much weight the ' +
      'second-hand trade should carry among these.</p>' +
      '<p>The case for rests on employment and price. Sorting, transport, repair and resale ' +
      'support livelihoods that are visible in any market, and a household clothes itself for a ' +
      'fraction of what new garments cost. Traders also bear real risk: a bale is bought unseen, ' +
      'and one containing unsellable stock is a straight loss.</p>' +
      '<p>Proposals to ban imports have been made, and in one case implemented and then reversed ' +
      'under trade pressure. The more common view now is that a ban alone changes little, because ' +
      'it removes the cheap supply without creating the power, credit and skills a domestic ' +
      'industry would need. Whether those can be built while the imports continue is the question ' +
      'on which the argument now turns.</p>',
    questions: [
      { kind: 'mcq',
        q: 'What is the writer\'s overall position on the second-hand clothes trade?',
        opts: [
          'It should be banned immediately',
          'It is wholly beneficial',
          'The arguments on both sides have some force',
          'It has no effect on local industry'
        ],
        correct: 2, type: 'writer\'s view',
        exp: 'The first paragraph states that "both claims contain some truth" and the passage then gives each case a paragraph. Whenever a writer sets out two cases evenly, an extreme option is almost never the answer.' },
      { kind: 'tfng',
        q: 'Traders can inspect the contents of a bale before buying it.',
        answer: 'FALSE',
        exp: 'Traders "cannot see the contents until the bale is opened" and "a bale is bought unseen". The passage states this twice, which is often a sign it will be tested.' },
      { kind: 'tfng',
        q: 'Textile industries in some countries were larger in the 1970s than they are today.',
        answer: 'TRUE',
        exp: '"Several countries that had substantial textile industries in the 1970s have very little now."' },
      { kind: 'tfng',
        q: 'Most second-hand clothing sold in West Africa comes from Europe.',
        answer: 'NOT GIVEN',
        exp: 'The passage says bales are sorted in "Europe and North America" but never says which supplies more. A question asking which is larger cannot be answered from a list.' },
      { kind: 'mcq',
        q: 'Why does the passage mention devaluation, power supply and Asian imports?',
        opts: [
          'To prove that second-hand clothing did no harm',
          'To show that other factors may explain the industry\'s decline',
          'To argue for a ban on all imports',
          'To describe conditions in Asia'
        ],
        correct: 1, type: 'rhetorical purpose',
        exp: 'They are introduced with "Yet", signalling a qualification: the decline has several possible causes. A goes too far, since the passage does not clear the trade, only questions how much weight it carries.' },
      { kind: 'gap',
        q: 'Complete with ONE WORD: A ban removes the cheap supply without creating the power, credit and ________ a domestic industry would need.',
        answer: ['skills'],
        exp: '"the power, credit and skills a domestic industry would need". When a gap sits in a list, the missing item is usually the last one before the verb.' }
    ]
  },

  {
    id: 'seafloor',
    title: 'Mapping the Ocean Floor',
    topic: 'Geography & technology',
    words: 252,
    passage:
      '<p>More of the surface of Mars has been mapped in detail than the floor of our own oceans. ' +
      'The reason is not indifference but physics: light and radio waves, which serve so well ' +
      'across space, are absorbed within metres of entering seawater. Sound is the only signal ' +
      'that travels usefully, and sound must be carried to the site.</p>' +
      '<p>Modern survey ships trail a multibeam echo sounder, which fans out a spread of acoustic ' +
      'pulses and times their return. The method is accurate but slow, and covers a strip only a ' +
      'few times as wide as the water is deep. Mapping the world\'s oceans this way has been ' +
      'estimated to require some two hundred ship-years, which no single organisation is going ' +
      'to fund.</p>' +
      '<p>Two developments have changed the arithmetic. The first is satellite altimetry, which ' +
      'measures the height of the sea surface with great precision. A seamount\'s mass pulls water ' +
      'towards it, raising the surface by a few metres, so a map of surface height is a crude map ' +
      'of what lies beneath. The resolution is poor, but the coverage is global. The second is ' +
      'the pooling of data already collected: fishing fleets, cable operators and merchant ' +
      'vessels record depth as a matter of routine, and much of that record was never shared.</p>' +
      '<p>Neither substitutes for a survey ship. Altimetry finds features worth visiting rather ' +
      'than describing them, and volunteered data varies in quality and in the care taken over ' +
      'position. Together, though, they turn an impossible task into a merely difficult one.</p>',
    questions: [
      { kind: 'mcq',
        q: 'Why is the ocean floor harder to map than the surface of Mars?',
        opts: [
          'Nobody has been interested in mapping it',
          'Seawater absorbs light and radio waves',
          'The ocean floor changes too quickly',
          'Sound cannot travel through water'
        ],
        correct: 1, type: 'factual',
        exp: '"light and radio waves ... are absorbed within metres of entering seawater". D reverses the passage, which says sound is the one signal that does travel usefully. Reversal options are common in this question type.' },
      { kind: 'tfng',
        q: 'A multibeam echo sounder surveys a strip whose width depends on the depth of the water.',
        answer: 'TRUE',
        exp: '"covers a strip only a few times as wide as the water is deep" ties width to depth.' },
      { kind: 'tfng',
        q: 'Satellite altimetry produces higher resolution results than ship surveys.',
        answer: 'FALSE',
        exp: 'Altimetry\'s "resolution is poor, but the coverage is global", and it "finds features worth visiting rather than describing them". The statement inverts the trade-off the passage draws.' },
      { kind: 'tfng',
        q: 'Merchant vessels are now required by law to share their depth recordings.',
        answer: 'NOT GIVEN',
        exp: 'The passage says much of the record "was never shared" and that pooling it helps. It says nothing about any legal requirement. Watch for questions that add a mechanism the text never mentions.' },
      { kind: 'mcq',
        q: 'How does a seamount affect the sea surface above it?',
        opts: [
          'It lowers the surface by a few metres',
          'It raises the surface by a few metres',
          'It has no measurable effect',
          'It creates permanent waves'
        ],
        correct: 1, type: 'factual',
        exp: '"A seamount\'s mass pulls water towards it, raising the surface by a few metres." Read the whole clause: the mass attracts water, so the surface rises rather than falls.' },
      { kind: 'gap',
        q: 'Complete with THREE WORDS: Mapping the oceans by ship alone was estimated to need about ________ ________ ________.',
        answer: ['two hundred ship-years', 'two hundred shipyears'],
        exp: '"some two hundred ship-years". Numbers written as words in the passage should be copied as words; changing them to digits risks the mark.' }
    ]
  }

];
