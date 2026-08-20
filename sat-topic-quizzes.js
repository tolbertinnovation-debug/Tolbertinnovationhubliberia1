/* TIH — Authored per-topic quiz questions for the Digital SAT course.
   sat-curriculum.js prefers these over its generic skill pools, so every
   topic gets its own three questions rather than the first three of a
   shared bank. Keyed by topic title, matched case- and punctuation-
   insensitively; a key may be module-qualified ("M9:Radicals"). */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['sat'] = {
  "Welcome to the Course": [
    {"q": "How long is the Digital SAT testing time?", "opts": ["About 2 hours 14 minutes", "About 4 hours", "About 90 minutes", "About 3 hours 15 minutes"], "correct": 0, "exp": "The Digital SAT runs 2 hours 14 minutes across two sections, much shorter than the retired paper test."},
    {"q": "What happens if you answer a Digital SAT question wrongly?", "opts": ["You lose a full point", "Nothing is subtracted", "The section ends", "You lose a quarter point"], "correct": 1, "exp": "There is no penalty for wrong answers on the SAT, which is why you should never leave a question blank."},
    {"q": "Which study pattern does this course recommend?", "opts": ["Studying whichever section you enjoy most", "One long session the weekend before the test", "Steady daily practice with regular re-testing", "Only reading vocabulary lists"], "correct": 2, "exp": "Steady practice plus regular diagnostic re-testing shows whether your weakest section is actually improving."}
  ],
  "What is the SAT?": [
    {"q": "Who produces and administers the SAT?", "opts": ["The United Nations", "Each individual university", "The US Department of State", "The College Board"], "correct": 3, "exp": "The College Board writes the SAT and runs its administration worldwide."},
    {"q": "What does the SAT primarily measure?", "opts": ["Reading, writing and mathematical reasoning", "General knowledge and current affairs", "Practical laboratory skill", "Memorised national curriculum content"], "correct": 0, "exp": "The SAT is a reasoning test, which is what lets it compare students from different school systems."},
    {"q": "What does it mean when a college is 'test-optional'?", "opts": ["It will not look at a score even if sent", "It will consider your application without a score", "It requires the ACT instead", "It only admits students without scores"], "correct": 1, "exp": "Test-optional colleges consider applications without a score, but a strong score can still strengthen the file."}
  ],
  "SAT Test Format": [
    {"q": "How many modules does each Digital SAT section contain?", "opts": ["Four", "One", "Two", "Three"], "correct": 2, "exp": "Each section &mdash; Reading &amp; Writing and Math &mdash; is delivered as two separately timed modules."},
    {"q": "How are Reading &amp; Writing passages structured on the Digital SAT?", "opts": ["No passages at all", "Two passages compared across the module", "One long passage with about ten questions", "A short passage with a single question attached"], "correct": 3, "exp": "Digital SAT Reading &amp; Writing pairs each short passage with exactly one question."},
    {"q": "How much time do you get for each Math module?", "opts": ["35 minutes", "64 minutes", "22 minutes", "32 minutes"], "correct": 0, "exp": "Each Math module gives 35 minutes for 22 questions."}
  ],
  "SAT Scoring System (400–1600)": [
    {"q": "What is the maximum possible Digital SAT total score?", "opts": ["1200", "1600", "2400", "800"], "correct": 1, "exp": "Two sections scored 200&ndash;800 each give a maximum total of 1600."},
    {"q": "Why can you not calculate your exact score by counting correct answers?", "opts": ["Only the second module counts", "Answers are weighted by question length", "Raw scores are equated to adjust for form difficulty", "Scores are assigned randomly"], "correct": 2, "exp": "Equating converts raw scores to the scale so the same performance earns the same score on every form."},
    {"q": "What is the lowest total score a student can receive?", "opts": ["600", "0", "200", "400"], "correct": 3, "exp": "Each section has a floor of 200, so the lowest possible total is 400."}
  ],
  "Digital SAT Overview": [
    {"q": "When does the Digital SAT adapt to your performance?", "opts": ["Between module 1 and module 2 of a section", "Only at the very end", "It does not adapt", "After every question"], "correct": 0, "exp": "The Digital SAT is multistage adaptive: module 1 performance routes you into an easier or harder module 2."},
    {"q": "Why does module 1 deserve extra care?", "opts": ["It contains more questions", "It determines which module 2 you receive, and so your score ceiling", "It is worth double points", "It cannot be flagged"], "correct": 1, "exp": "Module 1 routes you to the easier or harder module 2, and only the harder route reaches the top of the range."},
    {"q": "Within a single module, can you return to an earlier question?", "opts": ["Only in the last five minutes", "No, questions lock once answered", "Yes, you can flag and revisit freely", "Only in the Math section"], "correct": 2, "exp": "Adaptation happens between modules, so within a module you can move freely and use the flag tool."}
  ],
  "Study Plan": [
    {"q": "What should you do before designing a study plan?", "opts": ["Register for the test", "Buy every available textbook", "Memorise a vocabulary list", "Take a diagnostic test to find your weaker section"], "correct": 3, "exp": "A diagnostic shows your starting score and which section costs you most, so study time goes where it pays."},
    {"q": "How often does this course recommend taking a full timed mock?", "opts": ["About every two weeks", "Once, the day before the test", "Never", "Every day"], "correct": 0, "exp": "A fortnightly mock measures progress without consuming all the time you need for targeted practice."},
    {"q": "What makes an error log useful?", "opts": ["It records the correct letter", "It records why each answer was wrong", "It tracks how long you studied", "It lists topics you enjoy"], "correct": 1, "exp": "Recording the reason for each error is what turns a list of mistakes into a study priority list."}
  ],
  "Registration Process": [
    {"q": "Where should you register for the SAT?", "opts": ["At the test centre on the day", "Through any local agent", "Through your College Board account", "By emailing the university"], "correct": 2, "exp": "Registration is done through your own College Board account, where you choose a date, centre and upload a photo."},
    {"q": "Why must your registration name match your passport exactly?", "opts": ["It determines your seat number", "It sets the fee", "It affects your score report layout", "The centre checks the two match before admitting you"], "correct": 3, "exp": "Test centres verify that the registration name matches the identity document, and a mismatch can mean refused entry."},
    {"q": "Why should international candidates register as early as possible?", "opts": ["Test centre seats are limited and fill before the deadline", "Early registrants get easier questions", "Scores are released sooner", "Fees rise every week"], "correct": 0, "exp": "International centres are fewer, so seats often run out well before the registration deadline."}
  ],
  "Test-Day Rules": [
    {"q": "What identity document should an international candidate bring?", "opts": ["A school report card", "A valid passport", "A photocopy of any ID", "A birth certificate"], "correct": 1, "exp": "International SAT candidates must present a valid passport matching their registration."},
    {"q": "When should Bluebook exam setup be completed?", "opts": ["It is not required", "On the morning of the test", "In the days before the test", "During module 1"], "correct": 2, "exp": "Exam setup should be completed in advance so device or download problems surface before test day."},
    {"q": "Are phones permitted during the 10-minute break?", "opts": ["Only to check the time", "Yes, briefly", "Yes, if kept silent", "No, they must stay off and stored throughout"], "correct": 3, "exp": "Phones and smart watches must remain off and stored for the entire session, break included."}
  ],
  "Using the Bluebook Testing App": [
    {"q": "Which calculator is built into Bluebook for the Math section?", "opts": ["The Desmos graphing calculator", "No calculator is provided", "A scientific calculator, module 2 only", "A basic four-function calculator"], "correct": 0, "exp": "Bluebook includes the Desmos graphing calculator, available for the whole Math section."},
    {"q": "What does the flag tool let you do?", "opts": ["Report a faulty question", "Mark a question to return to before the module ends", "Skip a question permanently", "Request extra time"], "correct": 1, "exp": "Flagging marks a question so you can move on and come back to it within the same module."},
    {"q": "Which geometry information does Bluebook provide during the test?", "opts": ["A list of past questions", "Worked solutions", "A built-in reference sheet of formulas", "Nothing; all formulas must be memorised"], "correct": 2, "exp": "A reference sheet of common geometry formulas is built into the app, so those need not be memorised."}
  ],
  "Academic Vocabulary": [
    {"q": "What kind of vocabulary does the Digital SAT test?", "opts": ["Technical scientific terminology", "Slang and idioms", "Rare and obscure words", "High-utility academic words in context"], "correct": 3, "exp": "The Digital SAT tests common academic vocabulary in context rather than obscure words in isolation."},
    {"q": "In 'The team proposed a novel approach', what does 'novel' mean?", "opts": ["New", "Published", "Fictional", "Lengthy"], "correct": 0, "exp": "Here 'novel' carries its academic meaning, new or original, rather than its common meaning of a book."},
    {"q": "What is the best way to learn a new academic word?", "opts": ["Memorise the definition alone", "Learn it inside an example sentence", "Learn its spelling first", "Learn ten synonyms for it"], "correct": 1, "exp": "Words learned inside a sentence carry their usage and register, which is what context questions test."}
  ],
  "Grammar Basics": [
    {"q": "In 'The list of required documents ___ posted', which verb is correct?", "opts": ["are", "were", "was", "have been"], "correct": 2, "exp": "The subject is the singular noun 'list'; the phrase 'of required documents' does not change agreement."},
    {"q": "What is a comma splice?", "opts": ["A comma before a name", "A comma inside a quotation", "A missing comma in a list", "Two independent clauses joined by only a comma"], "correct": 3, "exp": "Two independent clauses need a semicolon, a period, or a comma plus a coordinating conjunction."},
    {"q": "When two answer choices mean the same thing, which is usually correct on the SAT?", "opts": ["The shorter, more concise one", "The one with more commas", "The first listed", "The longer one"], "correct": 0, "exp": "The SAT rewards concision, so between two grammatically equal options the shorter one is generally right."}
  ],
  "Sentence Structure": [
    {"q": "Which test quickly reveals what punctuation a sentence needs?", "opts": ["Count the words on each side", "Check whether each side could stand alone as a sentence", "Look for the longest option", "Check whether a name appears"], "correct": 1, "exp": "Deciding whether each side is independent tells you which punctuation marks are legal between them."},
    {"q": "Two independent clauses may be joined by:", "opts": ["A colon only", "A comma alone", "A semicolon, or a comma plus a coordinating conjunction", "No punctuation at all"], "correct": 2, "exp": "A comma alone creates a splice; a semicolon or comma + FANBOYS conjunction is required."},
    {"q": "What must come before a colon?", "opts": ["A list", "A conjunction", "Any phrase", "A complete sentence"], "correct": 3, "exp": "On the SAT a colon must be preceded by an independent clause, and it introduces an explanation or list."}
  ],
  "Parts of Speech": [
    {"q": "In 'The engine runs ___', which form is correct?", "opts": ["smoothly", "smoother", "smoothness", "smooth"], "correct": 0, "exp": "The word describes the verb 'runs', so an adverb is required."},
    {"q": "Which is correct: 'fewer' or 'less'?", "opts": ["'fewer rainfall' and 'less farmers'", "'fewer farmers' and 'less rainfall'", "Both words are interchangeable", "'less' is always correct"], "correct": 1, "exp": "'Fewer' is used with countable nouns such as farmers; 'less' is used with uncountable amounts such as rainfall."},
    {"q": "What does an adverb modify?", "opts": ["Only pronouns", "Only nouns", "Verbs, adjectives and other adverbs", "Only prepositions"], "correct": 2, "exp": "Adverbs modify verbs, adjectives and other adverbs, while adjectives modify nouns."}
  ],
  "Punctuation Rules": [
    {"q": "Which mark correctly joins two independent clauses without a conjunction?", "opts": ["A hyphen", "No punctuation", "A comma", "A semicolon"], "correct": 3, "exp": "A semicolon joins two independent clauses; a comma alone would create a comma splice."},
    {"q": "Non-essential information inside a sentence should be:", "opts": ["Enclosed in a matched pair of commas or dashes", "Preceded by a single comma only", "Followed by a colon", "Left unpunctuated"], "correct": 0, "exp": "Non-essential elements need matching punctuation on both sides, either two commas or two dashes."},
    {"q": "Which sentence uses 'its' correctly?", "opts": ["Its going to rain tomorrow.", "The company raised its prices.", "Its been a long term.", "The dog wagged it's tail."], "correct": 1, "exp": "'Its' is the possessive form; 'it's' is a contraction of 'it is' or 'it has'."}
  ],
  "Transition Words": [
    {"q": "'Yields rose in the north. ___, they fell sharply in the south.' Which transition fits?", "opts": ["For example", "Therefore", "However", "Moreover"], "correct": 2, "exp": "The two sentences contrast, so a contrast transition such as 'However' is required."},
    {"q": "What should you do before looking at the four transition choices?", "opts": ["Pick the longest option", "Check the punctuation", "Read the whole passage again", "Name the relationship between the two sentences yourself"], "correct": 3, "exp": "Deciding the logical relationship first prevents you from choosing a transition that merely sounds smooth."},
    {"q": "Which word signals cause and effect?", "opts": ["Consequently", "Similarly", "Admittedly", "Nevertheless"], "correct": 0, "exp": "'Consequently' signals that the second statement results from the first."}
  ],
  "Context Clues": [
    {"q": "In 'Unlike her ebullient brother, Sarah was reserved and quiet', 'ebullient' most nearly means:", "opts": ["Shy", "Lively and enthusiastic", "Careful", "Unfriendly"], "correct": 1, "exp": "'Unlike' signals contrast with 'reserved and quiet', so 'ebullient' must mean lively or enthusiastic."},
    {"q": "Which words signal a contrast context clue?", "opts": ["such as, for instance", "because, therefore", "although, whereas, unlike", "moreover, in addition"], "correct": 2, "exp": "Contrast clues are introduced by words like although, whereas and unlike, which point to an opposite meaning."},
    {"q": "What should you do before reading the answer choices on a vocabulary question?", "opts": ["Eliminate the longest option", "Re-read the whole passage", "Choose the most advanced-sounding word", "Predict a simple word of your own that fits"], "correct": 3, "exp": "Predicting your own word first prevents a familiar but incorrect choice from steering you."}
  ],
  "Reading Strategies": [
    {"q": "How long is a typical Digital SAT Reading & Writing passage?", "opts": ["About 25-150 words", "About 1,000 words", "A full page", "About 500-750 words"], "correct": 0, "exp": "Digital SAT passages are short, roughly 25 to 150 words, each paired with a single question."},
    {"q": "What is the recommended order of work on a Reading & Writing question?", "opts": ["Read the passage, then the choices, then the question", "Read the question, then the passage, then predict an answer", "Read the choices first", "Skim all passages before starting"], "correct": 1, "exp": "Reading the question first tells you what to look for in the short passage, and predicting guards against trap choices."},
    {"q": "Why are choices containing 'always' or 'never' often wrong?", "opts": ["They use difficult vocabulary", "They are too long", "Passages rarely support absolute claims", "They repeat the passage exactly"], "correct": 2, "exp": "Academic passages usually make qualified claims, so absolute wording overstates what the text supports."}
  ],
  "Critical Thinking Skills": [
    {"q": "What is an assumption in an argument?", "opts": ["The first sentence of the passage", "A quotation from a source", "The stated conclusion", "Something that must be true for the evidence to support the claim"], "correct": 3, "exp": "An assumption is the unstated link that the argument depends on, which is why attacking it weakens the argument."},
    {"q": "A study finds breakfast-eaters score higher and concludes breakfast raises scores. Which choice most weakens it?", "opts": ["Breakfast-eaters in the study also slept significantly more", "The study was published recently", "Scores were reported as percentages", "Some students dislike breakfast"], "correct": 0, "exp": "An alternative explanation for the same result undermines the causal conclusion drawn from a correlation."},
    {"q": "Which statement about conclusions is correct?", "opts": ["A conclusion may be broader than its evidence", "A conclusion must not be broader than its evidence", "Conclusions need no evidence", "Evidence and conclusion are the same thing"], "correct": 1, "exp": "Overreaching, drawing a conclusion wider than the evidence supports, is a common SAT trap answer."}
  ],
  "Finding Main Ideas": [
    {"q": "What is the most common trap answer on a main-idea question?", "opts": ["The longest option", "A statement that contradicts the passage", "A true detail from one sentence, too narrow to be the main point", "A grammatically incorrect option"], "correct": 2, "exp": "Trap answers are often accurate details lifted from a single sentence, which are too narrow to be the central claim."},
    {"q": "What should you do before reading the answer choices?", "opts": ["Look for unfamiliar vocabulary", "Read the passage twice", "Count the sentences", "Summarise the passage in one sentence of your own"], "correct": 3, "exp": "Your own one-sentence summary gives you a standard against which to test each choice."},
    {"q": "A passage examines three factors affecting yield and shows pH mattered most. Which is the main idea?", "opts": ["Of the three factors studied, pH proved most influential", "Farmers should test their soil", "Soil pH affects crop yield", "Agriculture depends on soil science"], "correct": 0, "exp": "This covers the whole passage; the first choice is too narrow and the second too broad."}
  ],
  "Supporting Details": [
    {"q": "A claim compares rainfall in two regions. Which evidence supports it?", "opts": ["Precise figures for the northern region only", "Figures for both regions", "A description of northern farming", "The national annual total"], "correct": 1, "exp": "A comparative claim requires comparative evidence; data from one region alone cannot establish it."},
    {"q": "What is the correct order of work on a supporting-detail question?", "opts": ["Eliminate the longest choices", "Read the choices, then find the claim", "Find the claim, then hunt for evidence", "Read the whole passage twice first"], "correct": 2, "exp": "Identifying exactly what must be supported tells you what to look for among the choices."},
    {"q": "Why can correlation evidence fail to support a causal claim?", "opts": ["Causal claims need no evidence", "Correlations only apply to small samples", "Correlation data is usually inaccurate", "A correlation can arise without one thing causing the other"], "correct": 3, "exp": "Two things can move together for other reasons, so correlation alone does not establish causation."}
  ],
  "Making Inferences": [
    {"q": "'Although the clinic opened in 2015, no vaccination records exist before 2018.' What can be inferred?", "opts": ["Records were not kept in the clinic's first years", "Funding was withdrawn in 2015", "Vaccination was not offered before 2018", "The clinic was closed until 2018"], "correct": 0, "exp": "The absence of records is one step from the text; the other choices contradict it or import information."},
    {"q": "How far from the stated text should a correct inference be?", "opts": ["Two or three logical steps", "One short, supported step", "As far as general knowledge allows", "It need not relate to the text"], "correct": 1, "exp": "SAT inferences are always one supported step from the passage, never a chain of assumptions."},
    {"q": "Why are absolute words often wrong in inference choices?", "opts": ["They make the option too long", "They are hard to read", "Passages usually make qualified claims that absolutes overstate", "They appear only in wrong answers by rule"], "correct": 2, "exp": "Overstating a qualified claim into an absolute is a standard trap in inference answer choices."}
  ],
  "Interpreting Data and Graphs": [
    {"q": "What should you read first on a graph question?", "opts": ["The final sentence of the passage", "The largest bar", "The answer choices", "The title, axis labels, units and legend"], "correct": 3, "exp": "Most wrong answers confuse a unit, category or direction, all of which the labels settle immediately."},
    {"q": "A chart shows output in tonnes. A choice describes a change 'by 15 percent'. This choice is:", "opts": ["Unverifiable from the chart, so wrong", "Correct because percentages are always valid", "Correct only in the Math section", "Correct if the arithmetic works"], "correct": 0, "exp": "A claim must be supported by what the graphic actually displays; a tonnage chart does not display percentages."},
    {"q": "Can a percentage rise while the underlying count falls?", "opts": ["No, they always move together", "Yes, if the total also fell", "Only in scatterplots", "Only when data is estimated"], "correct": 1, "exp": "A share of a shrinking total can rise even as the absolute number falls, which is a common trap."}
  ],
  "Evidence-Based Questions": [
    {"q": "A hypothesis says shade increases seedling survival. Which finding best supports it?", "opts": ["More seedlings were planted in shade", "Shaded seedlings grew taller", "Survival was higher among shaded than unshaded seedlings", "Shade lowered soil temperature"], "correct": 2, "exp": "The evidence must test the hypothesis's specific prediction about survival, not a related but different outcome."},
    {"q": "What is the difference between relevant and supporting evidence?", "opts": ["Supporting evidence is always numerical", "Relevant evidence is always longer", "There is none", "Relevant evidence concerns the topic; supporting evidence makes the specific claim more likely"], "correct": 3, "exp": "The SAT frequently offers topically relevant choices that do not address the claim actually being made."},
    {"q": "For a quantitative evidence question, what should you verify?", "opts": ["The numbers against the graphic itself", "That the choice mentions the passage", "The length of the choice", "That the wording sounds authoritative"], "correct": 0, "exp": "Quantitative choices must be checked against the data displayed, since wording alone can misdescribe it."}
  ],
  "Text Analysis": [
    {"q": "A passage argues yields can rise, then says 'Admittedly, three seasons is a short record.' This sentence:", "opts": ["Refutes the earlier claim", "Acknowledges a limitation of the evidence", "Introduces a new argument", "Restates the main idea"], "correct": 1, "exp": "'Admittedly' signals a concession, which acknowledges a weakness without abandoning the argument."},
    {"q": "What does a text-analysis question primarily ask about?", "opts": ["The length of the passage", "The vocabulary used", "The function a sentence or paragraph performs", "The author's biography"], "correct": 2, "exp": "These questions test what a portion of the text is doing within the passage's structure."},
    {"q": "On the SAT, what does an example do for a claim?", "opts": ["Contradicts it", "Replaces the need for evidence", "Proves it conclusively", "Illustrates it"], "correct": 3, "exp": "Examples illustrate claims; choices asserting that an example proves a claim overstate its function."}
  ],
  "M3:Practice Exercises": [
    {"q": "What is the recommended pace for a Reading & Writing question?", "opts": ["About 70 seconds", "About 3 minutes", "As long as needed", "About 30 seconds"], "correct": 0, "exp": "With 27 questions in 32 minutes, roughly 70 seconds per question keeps you on pace."},
    {"q": "How should practice errors be logged?", "opts": ["By question number", "By the reason for the error", "By how long each took", "By the passage topic only"], "correct": 1, "exp": "Grouping errors by reason reveals the habit to fix, which a topic list does not."},
    {"q": "Which is NOT one of the common error reasons in this module?", "opts": ["Imported outside knowledge", "Misread unit on a graphic", "Spelling mistakes in the passage", "Answer too narrow"], "correct": 2, "exp": "The passage's own spelling is never the source of an error; the other three are standard traps."}
  ],
  "Vocabulary in Context": [
    {"q": "'The findings qualify earlier conclusions.' Here 'qualify' most nearly means:", "opts": ["Certify", "Describe", "Make eligible", "Limit or moderate"], "correct": 3, "exp": "In academic writing 'qualify' means to limit or moderate a claim, not the common sense of making eligible."},
    {"q": "What is the first step on a vocabulary-in-context question?", "opts": ["Predict your own word for the blank", "Look up the root of the word", "Choose the most advanced-sounding option", "Read all four choices carefully"], "correct": 0, "exp": "Predicting first gives you a standard to match, which prevents the familiar meaning from misleading you."},
    {"q": "After choosing a word, what should you do?", "opts": ["Move straight on", "Substitute it back and re-read the sentence", "Check its dictionary definition", "Compare its length to the others"], "correct": 1, "exp": "Substituting back confirms the choice fits the sentence's grammar, meaning and tone."}
  ],
  "Author's Purpose": [
    {"q": "A passage lists irrigation methods with costs and yields, using neutral language. Its purpose is to:", "opts": ["Describe a landscape", "Advocate one method", "Inform and compare", "Criticise current practice"], "correct": 2, "exp": "Neutral, factual presentation without evaluative language signals an informing or comparing purpose."},
    {"q": "Which language signals a persuasive purpose?", "opts": ["Sensory description", "Technical terminology", "Dates and measurements", "Words like 'should', 'must' and 'fails to'"], "correct": 3, "exp": "Prescriptive and evaluative wording indicates the author is arguing for a position."},
    {"q": "A purpose answer must account for:", "opts": ["The whole passage", "The most vivid sentence", "The vocabulary level", "The first sentence only"], "correct": 0, "exp": "Like main-idea answers, purpose answers must cover the passage as a whole rather than one part."}
  ],
  "Tone and Style": [
    {"q": "'The results are promising, though the sample was small.' The tone is best described as:", "opts": ["Enthusiastic", "Cautiously optimistic", "Dismissive", "Indifferent"], "correct": 1, "exp": "'Promising' is positive while 'though the sample was small' hedges, giving a cautiously optimistic tone."},
    {"q": "Why are extreme tone words usually wrong?", "opts": ["They are grammatically incorrect", "They are too long", "Academic passages are rarely emotional", "They never appear in answer choices"], "correct": 2, "exp": "SAT passages are measured academic writing, so tone answers are correspondingly moderate."},
    {"q": "Which part of speech most often carries tone?", "opts": ["Prepositions", "Conjunctions", "Nouns", "Adjectives and adverbs"], "correct": 3, "exp": "Modifiers express attitude, which is why scanning adjectives and adverbs settles most tone questions."}
  ],
  "Comparing Passages": [
    {"q": "Text 1 blames drought for a yield fall; Text 2 accepts the fall but blames poor seed. They:", "opts": ["Agree on the fact but differ on the cause", "Agree entirely", "Discuss unrelated subjects", "Disagree about the data"], "correct": 0, "exp": "Both accept the yield fall; only the explanation differs, which is the most common paired-passage relationship."},
    {"q": "Why must you check both halves of a paired-passage answer choice?", "opts": ["Choices are longer than usual", "One half is often correct and the other deliberately wrong", "The second half is always wrong", "Only the first half is scored"], "correct": 1, "exp": "Trap choices typically describe one text accurately and misrepresent the other."},
    {"q": "What should you do before reading the answer choices?", "opts": ["Identify the authors", "Re-read both texts twice", "Summarise each text's position in your own words", "Count the differences"], "correct": 2, "exp": "Fixing each position in your own words makes the relationship obvious and resists trap wording."}
  ],
  "Text Structure": [
    {"q": "A passage opens with falling fish stocks and closes with a proposed quota system. Its structure is:", "opts": ["Comparison of two views", "General then specific", "Chronological narrative", "Problem then solution"], "correct": 3, "exp": "The passage moves from stating a problem to proposing a remedy, the classic problem/solution arrangement."},
    {"q": "A quick way to identify structure is to:", "opts": ["Compare the first and last sentences", "Find the longest sentence", "Look for technical terms", "Count the paragraphs"], "correct": 0, "exp": "The movement between opening and closing sentences reveals how the passage is arranged."},
    {"q": "Recognising structure also helps with which Expression of Ideas task?", "opts": ["Choosing punctuation", "Deciding where to insert a new sentence", "Fixing subject-verb agreement", "Selecting vocabulary"], "correct": 1, "exp": "Knowing the arrangement tells you which position a new sentence logically occupies."}
  ],
  "Analyzing Arguments": [
    {"q": "'Schools with libraries score higher, so building libraries will raise scores.' The assumption is that:", "opts": ["Scores are measured accurately", "Libraries are expensive", "The library, rather than something else, causes the higher scores", "All schools want libraries"], "correct": 2, "exp": "The argument depends on the library being the cause rather than a marker of better funding overall."},
    {"q": "Which most weakens an argument?", "opts": ["Adding a supporting example", "Defining a key term", "Repeating the conclusion", "Offering an alternative explanation for the evidence"], "correct": 3, "exp": "An alternative explanation undermines the causal link the argument depends on."},
    {"q": "Where is a conclusion most often found in a short SAT passage?", "opts": ["The last sentence", "The middle", "In the title", "The first sentence"], "correct": 0, "exp": "Short argumentative passages usually build to the conclusion, placing it in the final sentence."}
  ],
  "M4:Practice Exercises": [
    {"q": "Which habit fixes both tone and purpose errors?", "opts": ["Reading the passage twice", "Checking the modifiers and evaluative language before choosing", "Reading the choices first", "Timing each question"], "correct": 1, "exp": "Adjectives, adverbs and prescriptive wording signal both the author's attitude and their purpose."},
    {"q": "Before choosing on a Craft and Structure question, you should:", "opts": ["Look for repeated words", "Check the passage length", "Name the answer in your own words", "Eliminate the shortest option"], "correct": 2, "exp": "Naming your own answer first gives you a standard to match and resists plausible trap wording."},
    {"q": "How should Module 4 practice errors be reviewed?", "opts": ["By re-reading every passage", "By repeating the same questions immediately", "By counting the total", "By grouping them by reason"], "correct": 3, "exp": "Grouping by reason exposes the recurring habit, which is what the next session should target."}
  ],
  "Improving Sentences": [
    {"q": "Which revision is best: 'Due to the fact that the rains were late, the harvest was, as a result, poor.'?", "opts": ["Because the rains were late, the harvest was poor.", "The rains being late, as a result the harvest was poor.", "The harvest was poor due to the fact of late rains.", "Due to the fact the rains were late, the harvest was poor."], "correct": 0, "exp": "'Because' replaces the wordy phrase and the doubled causal link is removed without changing meaning."},
    {"q": "When two options are both grammatically correct, the SAT prefers:", "opts": ["The longer, more detailed one", "The shorter, clearer one", "The one using passive voice", "The one with more commas"], "correct": 1, "exp": "Concision is an explicit SAT preference, so the shorter correct version is generally the answer."},
    {"q": "Which phrase is redundant?", "opts": ["Local farmers", "Annual report", "Past history", "Recent findings"], "correct": 2, "exp": "History is necessarily past, so 'past history' repeats itself."}
  ],
  "Organization of Paragraphs": [
    {"q": "A paragraph about irrigation costs contains a well-written sentence about pest resistance. It should be:", "opts": ["Moved to the start of the paragraph", "Expanded into two sentences", "Kept, because it adds interest", "Removed, because it does not serve the paragraph's idea"], "correct": 3, "exp": "A paragraph develops a single idea; a sentence on another subject does not belong regardless of quality."},
    {"q": "What does a topic sentence do?", "opts": ["States the single idea the paragraph develops", "Introduces a quotation", "Provides a transition only", "Summarises the whole passage"], "correct": 0, "exp": "The topic sentence names the paragraph's one idea, which every other sentence must serve."},
    {"q": "Which clue helps locate where a sentence belongs?", "opts": ["Its length", "Backward-pointing words such as 'this' and 'these'", "Its vocabulary level", "The presence of numbers"], "correct": 1, "exp": "Reference words point back to what preceded them, which fixes the sentence's position."}
  ],
  "Logical Flow": [
    {"q": "A paragraph's second sentence says 'this technique', but no technique has been named. The missing first sentence should:", "opts": ["Offer a counterargument", "Describe the technique's results", "Introduce and name the technique", "Give a statistic"], "correct": 2, "exp": "A reference word such as 'this' requires its antecedent to have been introduced already."},
    {"q": "Which is the most efficient way to answer a logical-flow question?", "opts": ["Read the last paragraph first", "Count the transitions used", "Re-read the whole passage", "Read only the sentences immediately before and after the blank"], "correct": 3, "exp": "The neighbouring sentences define the gap the answer must bridge."},
    {"q": "A choice that restates the previous sentence is:", "opts": ["Wrong, because it adds nothing", "Correct if it uses different words", "Correct in a conclusion only", "Correct, because it reinforces the idea"], "correct": 0, "exp": "The SAT penalises redundancy; a sentence must advance the paragraph, not repeat it."}
  ],
  "Combining Sentences": [
    {"q": "Which joining method adds descriptive information about a noun?", "opts": ["A coordinating conjunction", "A relative clause", "A semicolon", "A colon"], "correct": 1, "exp": "Relative clauses beginning with 'who' or 'which' attach description to a noun."},
    {"q": "A combined-sentence choice that omits information from one of the originals is:", "opts": ["Correct only in formal writing", "Acceptable if shorter", "Wrong, because information was lost", "Preferred by the SAT"], "correct": 2, "exp": "The combination must preserve all the original information; concision never justifies losing content."},
    {"q": "Which structure renames a noun?", "opts": ["An adverb", "A preposition", "A conjunction", "An appositive"], "correct": 3, "exp": "An appositive is a noun phrase placed beside another noun to rename or identify it."}
  ],
  "Revising Text": [
    {"q": "Goal: emphasise how quickly flooding spread. Which choice meets it?", "opts": ["The water rose across four districts within six hours.", "Flooding is a recurring regional problem.", "Residents described the flooding as severe.", "The flooding caused considerable disruption."], "correct": 0, "exp": "Only this choice conveys speed, which is the goal the question actually states."},
    {"q": "What should you do first on a revision question?", "opts": ["Read all four choices", "Identify the stated goal in the question", "Re-read the paragraph", "Eliminate the longest choice"], "correct": 1, "exp": "The stated goal is the only standard by which the choices are judged."},
    {"q": "A well-written choice that does not meet the stated goal is:", "opts": ["Correct if it is grammatical", "Correct, because style matters most", "Wrong, because it fails the stated goal", "Correct if it is shortest"], "correct": 2, "exp": "Goal-directed questions are scored on whether the choice achieves the named purpose."}
  ],
  "Practice Questions": [
    {"q": "Which error type is unique to Expression of Ideas questions?", "opts": ["Importing outside knowledge", "Overstating a claim", "Misreading a graph", "Choosing a fluent option that misses the stated goal"], "correct": 3, "exp": "Goal-directed revision questions punish choosing on style rather than on the purpose named in the stem."},
    {"q": "What is the recommended pace once you move to timed practice?", "opts": ["About 70 seconds per question", "About two minutes per question", "There is no useful target", "About 30 seconds per question"], "correct": 0, "exp": "Twenty-seven questions in thirty-two minutes works out at roughly seventy seconds each."},
    {"q": "The principle behind most organisation questions is that a paragraph should:", "opts": ["Contain at least five sentences", "Develop a single idea", "End with a quotation", "Begin with a transition"], "correct": 1, "exp": "Paragraph unity decides insert, order and delete questions alike."}
  ],
  "Subject-Verb Agreement": [
    {"q": "'Each of the twelve districts ___ submitted a report.' Which verb is correct?", "opts": ["are", "have", "has", "were"], "correct": 2, "exp": "'Each' is the singular subject; the intervening prepositional phrase does not affect agreement."},
    {"q": "With subjects joined by 'or', the verb agrees with:", "opts": ["Always the plural one", "Always the singular one", "The first subject", "The nearer subject"], "correct": 3, "exp": "With 'or' and 'nor', the verb matches whichever subject is closer to it."},
    {"q": "In 'There ___ several reasons for the delay', which verb is correct?", "opts": ["are", "has been", "was", "is"], "correct": 0, "exp": "In 'there is/are' constructions the subject follows the verb; 'reasons' is plural."}
  ],
  "Verb Tenses": [
    {"q": "'By the time the survey began, the clinic ___ operating for three years.' Which is correct?", "opts": ["has been", "had been", "will be", "is"], "correct": 1, "exp": "The past perfect marks the earlier of two past events, here the operating that preceded the survey."},
    {"q": "What most often decides the correct tense on the SAT?", "opts": ["The subject's number", "The length of the sentence", "The tense already used in surrounding sentences", "The first word of the paragraph"], "correct": 2, "exp": "Tense questions overwhelmingly test consistency with the tense the passage has established."},
    {"q": "Which tense links a past action to the present?", "opts": ["Simple past", "Future", "Past perfect", "Present perfect"], "correct": 3, "exp": "The present perfect, 'has/have done', connects a past action to its present relevance."}
  ],
  "Pronouns": [
    {"q": "'When the committee met the researchers, they presented the findings.' The problem is:", "opts": ["An ambiguous pronoun reference", "Subject-verb disagreement", "A misplaced modifier", "A tense error"], "correct": 0, "exp": "'They' could refer to the committee or the researchers, so the reference is ambiguous."},
    {"q": "How can you test whether 'who' or 'whom' is correct?", "opts": ["Count the syllables", "Substitute 'he' or 'him' and see which fits", "Check the sentence length", "Look for a comma"], "correct": 1, "exp": "If 'him' fits the slot, the object form 'whom' is required; if 'he' fits, use 'who'."},
    {"q": "Which sentence uses pronoun case correctly?", "opts": ["Her and the team arrived late.", "Between you and I, the plan is sound.", "Between you and me, the plan is sound.", "Him and I reviewed the report."], "correct": 2, "exp": "'Between' is a preposition and takes object pronouns, so 'you and me' is correct."}
  ],
  "Modifiers": [
    {"q": "'Walking through the market, the prices seemed high.' What is wrong?", "opts": ["Incorrect tense", "A comma splice", "Subject-verb agreement", "The modifier dangles: the prices are not walking"], "correct": 3, "exp": "The opening phrase must describe the noun after the comma, and prices cannot walk."},
    {"q": "Where should the word 'only' be placed?", "opts": ["Directly before what it limits", "At the end of the sentence", "After the verb always", "At the start of the sentence"], "correct": 0, "exp": "Limiting words change meaning depending on position, so they belong beside the element they limit."},
    {"q": "A sentence opens with a descriptive phrase and a comma. What must follow the comma?", "opts": ["A verb", "The noun that phrase describes", "A conjunction", "A prepositional phrase"], "correct": 1, "exp": "The noun immediately after the comma is what the opening modifier attaches to."}
  ],
  "Parallel Structure": [
    {"q": "Which sentence has correct parallel structure?", "opts": ["She enjoys reading, to write and swimming.", "She enjoys reading, writing and to swim.", "She enjoys reading, writing and swimming.", "She enjoys to read, writing and swimming."], "correct": 2, "exp": "All three list items must share the same form; here all are -ing forms."},
    {"q": "'The climate here is milder than Ghana.' What is wrong?", "opts": ["A missing comma", "A pronoun error", "A tense error", "It compares a climate with a country rather than with Ghana's climate"], "correct": 3, "exp": "Comparisons must compare like with like, so it should read 'than Ghana's'."},
    {"q": "Which construction requires balanced forms on both sides?", "opts": ["not only ... but also", "in addition", "however", "therefore"], "correct": 0, "exp": "Paired constructions such as 'not only ... but also' must be matched grammatically on each side."}
  ],
  "Punctuation": [
    {"q": "'The farmers who attended the training ___ reported higher yields.' What belongs in the blank?", "opts": ["A semicolon", "No punctuation", "A colon", "A comma"], "correct": 1, "exp": "The relative clause is essential and no rule requires a mark; a comma would separate subject from verb."},
    {"q": "A colon must be preceded by:", "opts": ["A conjunction", "Any phrase", "A complete sentence", "A list"], "correct": 2, "exp": "On the SAT a colon follows an independent clause and introduces an explanation or list."},
    {"q": "When dashes enclose an interruption, they must be:", "opts": ["Replaced by commas", "Followed by a semicolon", "Used singly", "Used in a matched pair"], "correct": 3, "exp": "Enclosing punctuation must appear on both sides of the interrupting element."}
  ],
  "Capitalization": [
    {"q": "Which sentence is correctly capitalised?", "opts": ["She studied biology and English in Monrovia.", "She studied Biology and English in monrovia.", "She Studied biology and english in Monrovia.", "She studied Biology and english in Monrovia."], "correct": 0, "exp": "Languages are capitalised, other academic subjects are not, and place names always are."},
    {"q": "Which is capitalised correctly?", "opts": ["The rains came late in Summer.", "The rains came late in summer.", "The Rains came late in summer.", "the rains came late in Summer."], "correct": 1, "exp": "Seasons are common nouns and take lower case."},
    {"q": "When is a job title capitalised?", "opts": ["Never", "Always", "When it appears directly before a person's name", "Only in the plural"], "correct": 2, "exp": "A title is capitalised when used before a name, as in 'President Weah', but not generically."}
  ],
  "Word Choice": [
    {"q": "'The new policy will ___ yields, and its ___ will be measured next season.'", "opts": ["affect ... affect", "effect ... effect", "effect ... affect", "affect ... effect"], "correct": 3, "exp": "'Affect' is the verb meaning to influence; 'effect' is the noun meaning result."},
    {"q": "Which phrase is idiomatically correct?", "opts": ["different from the original", "different to compare", "different against the original", "different than the original"], "correct": 0, "exp": "Standard written English on the SAT uses 'different from'."},
    {"q": "Which sentence uses 'than' correctly?", "opts": ["The yield was higher then last year.", "The yield was higher than last year.", "She finished her work, than left.", "It rained, than the sun came out."], "correct": 1, "exp": "'Than' introduces a comparison; 'then' refers to time or sequence."}
  ],
  "Common Grammar Errors": [
    {"q": "'The report was thorough, it covered every district.' This is an example of:", "opts": ["A pronoun error", "A dangling modifier", "A comma splice", "Faulty parallelism"], "correct": 2, "exp": "Two independent clauses are joined by a comma alone, which requires a semicolon, period, or conjunction."},
    {"q": "Why is 'reading for what sounds wrong' unreliable on the SAT?", "opts": ["The sentences are too short", "Sound is not related to grammar at all", "Passages are read aloud", "Several tested errors sound perfectly natural"], "correct": 3, "exp": "Comma splices, ambiguous pronouns and dangling modifiers all read naturally, so rules beat instinct."},
    {"q": "Which is NOT one of the commonly tested SAT error types?", "opts": ["Incorrect spelling of proper nouns", "Dangling modifiers", "Faulty parallelism", "Subject-verb disagreement"], "correct": 0, "exp": "The SAT does not test spelling; the other three are core Standard English Conventions errors."}
  ],
  "Numbers and Operations": [
    {"q": "Evaluate 8 − 2 × 3².", "opts": ["54", "−10", "18", "−1"], "correct": 1, "exp": "Exponent first (9), then multiply (18), then subtract: 8 − 18 = −10."},
    {"q": "What is 5 − (−3)?", "opts": ["−2", "2", "8", "−8"], "correct": 2, "exp": "Subtracting a negative is equivalent to adding, so 5 − (−3) = 5 + 3 = 8."},
    {"q": "What is (−2)⁴?", "opts": ["−8", "8", "−16", "16"], "correct": 3, "exp": "An even power of a negative number is positive: (−2)⁴ = 16."}
  ],
  "Fractions and Decimals": [
    {"q": "Calculate 2/3 ÷ 4/9.", "opts": ["3/2", "2/3", "27/8", "8/27"], "correct": 0, "exp": "Dividing by a fraction means multiplying by its reciprocal: 2/3 × 9/4 = 3/2."},
    {"q": "Which operation requires a common denominator?", "opts": ["Division", "Addition", "Squaring", "Multiplication"], "correct": 1, "exp": "Addition and subtraction of fractions require a common denominator; multiplication and division do not."},
    {"q": "What is 3/8 as a decimal?", "opts": ["0.83", "0.125", "0.375", "0.38"], "correct": 2, "exp": "3 divided by 8 is exactly 0.375."}
  ],
  "Percentages": [
    {"q": "A price rises 20% then falls 20%. Compared with the original, it is now:", "opts": ["4% higher", "20% lower", "The same", "4% lower"], "correct": 3, "exp": "Successive changes multiply: 1.20 × 0.80 = 0.96, which is 4% below the original."},
    {"q": "A number increased by 25% gives 80. What was the original?", "opts": ["64", "55", "100", "60"], "correct": 0, "exp": "Divide rather than subtracting 25%: 80 ÷ 1.25 = 64."},
    {"q": "What is the percent change from 40 to 50?", "opts": ["20%", "25%", "80%", "10%"], "correct": 1, "exp": "Percent change is (50 − 40) ÷ 40 × 100 = 25%."}
  ],
  "M7:Ratios": [
    {"q": "Rice and beans are planted 3 : 5 across 64 hectares. How much is rice?", "opts": ["40 hectares", "21.3 hectares", "24 hectares", "38.4 hectares"], "correct": 2, "exp": "There are 8 shares; one share is 8 hectares, so rice occupies 3 × 8 = 24 hectares."},
    {"q": "In a ratio of 3 : 5, the first quantity is what fraction of the total?", "opts": ["5/8", "1/3", "3/5", "3/8"], "correct": 3, "exp": "The parts sum to 8 shares, so the first quantity is 3/8 of the whole."},
    {"q": "The ratio 8 : 12 simplifies to:", "opts": ["2 : 3", "3 : 2", "1 : 2", "4 : 6"], "correct": 0, "exp": "Dividing both parts by their common factor 4 gives 2 : 3."}
  ],
  "Exponents": [
    {"q": "Simplify (2³)² ÷ 2⁴.", "opts": ["2", "4", "8", "16"], "correct": 1, "exp": "Power of a power multiplies exponents to give 2⁶, then dividing subtracts: 2² = 4."},
    {"q": "What does x⁻² equal?", "opts": ["2x", "−x²", "1/x²", "x/2"], "correct": 2, "exp": "A negative exponent indicates the reciprocal, so x⁻² = 1/x²."},
    {"q": "What is x⁰ for any non-zero x?", "opts": ["x", "Undefined", "0", "1"], "correct": 3, "exp": "Any non-zero base raised to the power zero equals 1."}
  ],
  "M7:Radicals": [
    {"q": "Simplify √48.", "opts": ["4√3", "6√2", "12", "2√12"], "correct": 0, "exp": "48 = 16 × 3, and √16 = 4, so √48 = 4√3."},
    {"q": "What is √48 + √27?", "opts": ["√75", "7√3", "5√3", "12√3"], "correct": 1, "exp": "√48 = 4√3 and √27 = 3√3, and like radicals add to give 7√3."},
    {"q": "√a + √b equals:", "opts": ["2√(ab)", "√(a+b)", "Neither √(a+b) nor √(ab) in general", "√(ab)"], "correct": 2, "exp": "Square roots do not distribute over addition; only like radicals can be combined."}
  ],
  "Scientific Notation": [
    {"q": "Express (3 × 10⁴)(4 × 10³) in scientific notation.", "opts": ["1.2 × 10⁷", "12 × 10¹²", "12 × 10⁷", "1.2 × 10⁸"], "correct": 3, "exp": "Multiplying gives 12 × 10⁷, which renormalises to 1.2 × 10⁸."},
    {"q": "In standard scientific notation, the coefficient a must satisfy:", "opts": ["1 ≤ a < 10", "1 < a ≤ 100", "a is any integer", "0 < a < 1"], "correct": 0, "exp": "Standard form requires the coefficient to be at least 1 and less than 10."},
    {"q": "What does a negative exponent in scientific notation indicate?", "opts": ["A negative number", "A number smaller than 1", "An error", "A fraction with a negative numerator"], "correct": 1, "exp": "A negative exponent indicates a small positive number, such as 2 × 10⁻³ = 0.002."}
  ],
  "Calculator Skills": [
    {"q": "Which calculator does Bluebook provide for the Math section?", "opts": ["A scientific calculator in module 2 only", "A basic four-function calculator", "The Desmos graphing calculator", "None"], "correct": 2, "exp": "Desmos is built into Bluebook and available for the entire Math section."},
    {"q": "How can Desmos solve 2x + 5 = 3x − 4?", "opts": ["Type the answer and check it", "Use the statistics menu", "It cannot solve equations", "Graph both sides and read the intersection"], "correct": 3, "exp": "Graphing each side as a separate line and reading the intersection gives the solution directly."},
    {"q": "When is using the calculator a poor choice?", "opts": ["On simple arithmetic you can do mentally", "When finding intersections", "When reading a maximum", "On quadratic equations"], "correct": 0, "exp": "Typing simple arithmetic takes longer than doing it, so the calculator should be used selectively."}
  ],
  "Formula Review": [
    {"q": "Which formula is NOT provided on the Digital SAT reference sheet?", "opts": ["Volume of a cylinder", "The slope formula", "The Pythagorean theorem", "Area of a circle"], "correct": 1, "exp": "Geometry formulas are provided; algebra formulas such as slope must be memorised."},
    {"q": "Where can you find the reference sheet during the test?", "opts": ["Only during module 2", "It is printed and handed out", "Built into the Bluebook app", "It is not available"], "correct": 2, "exp": "Bluebook includes a reference sheet of geometry formulas available throughout the Math section."},
    {"q": "Which should a candidate prioritise memorising?", "opts": ["All geometry formulas", "Nothing, everything is provided", "Circle and volume formulas", "The formulas not on the reference sheet, such as slope and the quadratic formula"], "correct": 3, "exp": "Effort is best spent on the short list the app does not supply."}
  ],
  "Linear Equations": [
    {"q": "Solve 3(x − 2) + 4 = 19.", "opts": ["7", "9", "21", "5"], "correct": 0, "exp": "Distributing and collecting gives 3x − 2 = 19, so 3x = 21 and x = 7."},
    {"q": "If an equation reduces to 0 = 5, it has:", "opts": ["One solution", "No solution", "Infinitely many solutions", "Two solutions"], "correct": 1, "exp": "A false numerical statement means no value of the variable satisfies the equation."},
    {"q": "What is the first step in solving 5x + 3 = 23?", "opts": ["Add 3 to both sides", "Divide both sides by 5", "Subtract 3 from both sides", "Multiply both sides by 5"], "correct": 2, "exp": "Undo addition before multiplication, so subtract 3 first to isolate the 5x term."}
  ],
  "Linear Inequalities": [
    {"q": "Solve −2x + 3 > 11.", "opts": ["x > 4", "x < 4", "x > −4", "x < −4"], "correct": 3, "exp": "Dividing both sides by −2 reverses the inequality, giving x < −4."},
    {"q": "Which operation reverses an inequality sign?", "opts": ["Dividing by a negative number", "Subtracting a positive number", "Squaring both sides", "Adding a negative number"], "correct": 0, "exp": "Multiplying or dividing by a negative reverses the direction of the inequality."},
    {"q": "'At most 30 students' translates to:", "opts": ["s ≥ 30", "s ≤ 30", "s < 30", "s > 30"], "correct": 1, "exp": "'At most' sets an upper bound that includes the value itself, so s ≤ 30."}
  ],
  "Systems of Equations": [
    {"q": "Solve the system x + y = 10 and 2x − y = 5.", "opts": ["(7, 3)", "(4, 6)", "(5, 5)", "(3, 7)"], "correct": 2, "exp": "Adding the equations eliminates y to give 3x = 15, so x = 5 and y = 5."},
    {"q": "A system whose lines are parallel has:", "opts": ["Infinitely many solutions", "Two solutions", "One solution", "No solution"], "correct": 3, "exp": "Parallel lines never intersect, so no pair of values satisfies both equations."},
    {"q": "Graphically, the solution to a system of two linear equations is:", "opts": ["The point where the lines intersect", "The slope difference", "The midpoint of the lines", "The y-intercept"], "correct": 0, "exp": "The intersection is the only point lying on both lines, so it satisfies both equations."}
  ],
  "Functions": [
    {"q": "If f(x) = 2x + 1 and g(x) = x², what is f(g(3))?", "opts": ["7", "19", "49", "13"], "correct": 1, "exp": "Work inside out: g(3) = 9, then f(9) = 2(9) + 1 = 19."},
    {"q": "What does the vertical line test determine?", "opts": ["The domain of a graph", "Whether a graph is linear", "Whether a graph represents a function", "The slope of a graph"], "correct": 2, "exp": "If any vertical line meets the graph more than once, one input has two outputs, so it is not a function."},
    {"q": "For f(x) = 1/(x − 4), which value is excluded from the domain?", "opts": ["−4", "0", "1", "4"], "correct": 3, "exp": "x = 4 makes the denominator zero, which is undefined, so it is excluded from the domain."}
  ],
  "Graphs": [
    {"q": "A plan costs $15 plus $0.10 per minute. In y = 0.10x + 15, what does 15 represent?", "opts": ["The fixed monthly charge", "The total minutes used", "The slope", "The cost per minute"], "correct": 0, "exp": "The y-intercept is the value when x = 0, which here is the fixed charge before any minutes."},
    {"q": "What is the slope of the line through (1, 4) and (3, 10)?", "opts": ["2", "3", "6", "1/3"], "correct": 1, "exp": "Slope is (10 − 4)/(3 − 1) = 6/2 = 3."},
    {"q": "Two perpendicular lines have slopes whose product is:", "opts": ["1", "0", "−1", "Undefined"], "correct": 2, "exp": "Perpendicular slopes are negative reciprocals, so their product is −1."}
  ],
  "Quadratic Equations": [
    {"q": "Solve x² − 5x + 6 = 0.", "opts": ["x = −2 or −3", "x = 5 or 6", "x = 1 or 6", "x = 2 or 3"], "correct": 3, "exp": "The expression factors as (x − 2)(x − 3), so the solutions are 2 and 3."},
    {"q": "If the discriminant b² − 4ac is negative, the quadratic has:", "opts": ["No real solutions", "Infinitely many solutions", "Two real solutions", "One real solution"], "correct": 0, "exp": "A negative discriminant means the square root is not real, so there are no real solutions."},
    {"q": "What must you do before applying the quadratic formula?", "opts": ["Factor the expression", "Set the equation equal to zero", "Graph the parabola", "Find the vertex"], "correct": 1, "exp": "The formula applies to ax² + bx + c = 0, so the equation must first be arranged to equal zero."}
  ],
  "Polynomial Expressions": [
    {"q": "Simplify (3x² + 2x) − (x² − 4x).", "opts": ["2x² + 2x", "2x² − 2x", "2x² + 6x", "4x² − 2x"], "correct": 2, "exp": "The minus distributes across both terms: 3x² − x² = 2x², and 2x + 4x = 6x."},
    {"q": "Which pair are like terms?", "opts": ["4x and 4y", "2x³ and 2x²", "3x² and 3x", "5x² and −2x²"], "correct": 3, "exp": "Like terms must share the same variable and the same exponent."},
    {"q": "A quick check on a simplification is to:", "opts": ["Substitute a simple value into both forms", "Graph both expressions", "Reverse the signs", "Count the terms"], "correct": 0, "exp": "If both forms give the same value for a test input, the simplification is very likely correct."}
  ],
  "Word Problems": [
    {"q": "'Seven less than three times a number is 14.' Which equation is correct?", "opts": ["7 − 3x = 14", "3x − 7 = 14", "3(x − 7) = 14", "7x − 3 = 14"], "correct": 1, "exp": "'Seven less than' subtracts 7 from the quantity, giving 3x − 7."},
    {"q": "In a word problem, the word 'of' usually indicates:", "opts": ["Equality", "Addition", "Multiplication", "Subtraction"], "correct": 2, "exp": "'Of' signals multiplication, as in '25% of 80'."},
    {"q": "After solving, what should you always check?", "opts": ["That you used a calculator", "That the answer is a whole number", "That the number is positive", "Whether the question asked for that quantity"], "correct": 3, "exp": "Questions often ask for a different quantity than the variable you solved for."}
  ],
  "Quadratic Functions": [
    {"q": "For y = −2(x − 3)² + 8, the vertex is:", "opts": ["(3, 8)", "(3, −8)", "(2, 8)", "(−3, 8)"], "correct": 0, "exp": "In vertex form y = a(x − h)² + k the vertex is (h, k), so here it is (3, 8)."},
    {"q": "Which form of a quadratic most directly reveals the x-intercepts?", "opts": ["Standard form", "Factored form", "Vertex form", "Slope-intercept form"], "correct": 1, "exp": "Factored form y = a(x − p)(x − q) shows the roots p and q directly."},
    {"q": "If a < 0 in a quadratic function, the vertex is:", "opts": ["Undefined", "A minimum", "A maximum", "The y-intercept"], "correct": 2, "exp": "A negative leading coefficient opens the parabola downward, making the vertex a maximum."}
  ],
  "Exponential Functions": [
    {"q": "A population of 500 grows 8% per year. Which model is correct?", "opts": ["P = 500(0.08)ᵗ", "P = 500 × 1.08 × t", "P = 500 + 0.08t", "P = 500(1.08)ᵗ"], "correct": 3, "exp": "Percentage growth per period is exponential, with growth factor 1 + 0.08 = 1.08."},
    {"q": "In y = a·bˣ, what does a represent?", "opts": ["The initial value at x = 0", "The final value", "The number of periods", "The growth rate"], "correct": 0, "exp": "Setting x = 0 gives y = a, so a is the starting value."},
    {"q": "What distinguishes an exponential model from a linear one?", "opts": ["Exponential adds a constant each period", "Exponential multiplies by a constant factor each period", "Exponential is always increasing", "There is no difference"], "correct": 1, "exp": "Linear models add a fixed amount; exponential models multiply by a fixed factor."}
  ],
  "Nonlinear Equations": [
    {"q": "Solve √(x + 6) = x.", "opts": ["x = 3 or x = −2", "No solution", "x = 3 only", "x = −2 only"], "correct": 2, "exp": "Squaring gives x = 3 or x = −2, but −2 fails the original equation, so only 3 is valid."},
    {"q": "Why must solutions to a radical equation be checked?", "opts": ["Radicals have no solutions", "The calculator is unreliable", "The arithmetic is difficult", "Squaring both sides can introduce extraneous solutions"], "correct": 3, "exp": "Squaring is not reversible, so it can produce values that do not satisfy the original equation."},
    {"q": "A line and a parabola in a system can intersect:", "opts": ["Twice, once, or not at all", "Infinitely often", "Only once", "Only twice"], "correct": 0, "exp": "Depending on position, a line may cut a parabola twice, touch it once, or miss it entirely."}
  ],
  "Rational Expressions": [
    {"q": "Simplify (x² − 9)/(x − 3).", "opts": ["x − 3", "x + 3", "x² − 3", "3"], "correct": 1, "exp": "Factoring the numerator as (x − 3)(x + 3) allows the common factor to cancel, leaving x + 3."},
    {"q": "For (x² − 9)/(x − 3), which value is excluded from the domain?", "opts": ["None", "x = 0", "x = 3", "x = −3"], "correct": 2, "exp": "x = 3 makes the original denominator zero, so it remains excluded even after simplifying."},
    {"q": "In a rational expression, you may cancel:", "opts": ["Only numbers", "Nothing", "Any matching terms", "Only common factors"], "correct": 3, "exp": "Cancelling applies to factors of the whole numerator and denominator, not to individual terms."}
  ],
  "M9:Radicals": [
    {"q": "Solve √(2x + 3) − 1 = 4.", "opts": ["x = 11", "x = 8", "x = 14", "x = 5"], "correct": 0, "exp": "Isolating the radical gives √(2x + 3) = 5, so 2x + 3 = 25 and x = 11."},
    {"q": "What must you do before squaring both sides of a radical equation?", "opts": ["Square each term individually", "Isolate the radical on one side", "Multiply by the reciprocal", "Take the square root again"], "correct": 1, "exp": "Isolating the radical first ensures squaring removes it cleanly rather than creating cross terms."},
    {"q": "Why can a square root never equal a negative number on the SAT?", "opts": ["It can, in some cases", "Negative numbers are excluded from the test", "The radical symbol denotes the non-negative root", "Squaring removes the sign"], "correct": 2, "exp": "The radical symbol denotes the principal, non-negative root, so an equation setting it equal to a negative has no solution."}
  ],
  "Factoring": [
    {"q": "Factor x² − 16.", "opts": ["(x + 4)(x + 4)", "It does not factor", "(x − 4)(x − 4)", "(x − 4)(x + 4)"], "correct": 3, "exp": "This is a difference of squares, which factors as (x − 4)(x + 4)."},
    {"q": "Which expression does NOT factor over the real numbers?", "opts": ["x² + 25", "x² − 5x + 6", "2x² + 6x", "x² − 25"], "correct": 0, "exp": "A sum of squares has no real factorisation, unlike a difference of squares."},
    {"q": "To factor x² + 7x + 12, you need two numbers that:", "opts": ["Add to 12 and multiply to 7", "Multiply to 12 and add to 7", "Both equal 6", "Subtract to 7"], "correct": 1, "exp": "For x² + bx + c you seek two numbers multiplying to c and adding to b: here 3 and 4."}
  ],
  "Advanced Word Problems": [
    {"q": "A plot has perimeter 40 m and area 96 m². Its dimensions are:", "opts": ["4 m by 24 m", "6 m by 16 m", "8 m by 12 m", "10 m by 10 m"], "correct": 2, "exp": "With w(20 − w) = 96, the solutions 8 and 12 give a rectangle of 8 m by 12 m."},
    {"q": "A quantity that increases by a constant percentage each year is modelled by:", "opts": ["A quadratic function", "A rational function", "A linear function", "An exponential function"], "correct": 3, "exp": "Constant percentage change means multiplying by a fixed factor, which is exponential."},
    {"q": "Why might a mathematically valid solution be rejected in a word problem?", "opts": ["It is impossible in context, such as a negative length", "It is too large", "It requires a calculator", "It is not a whole number"], "correct": 0, "exp": "Context constrains the answer, so solutions like negative lengths or times must be discarded."}
  ],
  "M10:Ratios": [
    {"q": "A vehicle uses 6 litres per 100 km. How much fuel for 250 km?", "opts": ["12 L", "15 L", "24 L", "41.7 L"], "correct": 1, "exp": "250 × (6/100) = 15 litres; the kilometres cancel, leaving litres."},
    {"q": "If a length scale factor is 3, the area scale factor is:", "opts": ["3", "6", "9", "27"], "correct": 2, "exp": "Area scales by the square of the length factor, so 3² = 9."},
    {"q": "What indicates that a rate has been set up upside down?", "opts": ["The answer is large", "The answer is negative", "The answer is a decimal", "The units of the answer are wrong"], "correct": 3, "exp": "Cancelling units is the check: if the remaining units are not what the question asks for, the ratio is inverted."}
  ],
  "Proportions": [
    {"q": "If 4 workers build a wall in 9 days, how long will 6 workers take?", "opts": ["6 days", "9 days", "4.5 days", "13.5 days"], "correct": 0, "exp": "This is inverse proportion: 4 × 9 = 36 worker-days, so 36 ÷ 6 = 6 days."},
    {"q": "In a direct proportion y = kx, which stays constant?", "opts": ["The product xy", "The ratio y/x", "The sum x + y", "The difference y − x"], "correct": 1, "exp": "Direct proportion keeps the ratio y/x equal to the constant k."},
    {"q": "Solving a/b = c/d by cross-multiplication gives:", "opts": ["a + d = b + c", "ab = cd", "ad = bc", "ac = bd"], "correct": 2, "exp": "Cross-multiplying equates the products of opposite terms: ad = bc."}
  ],
  "Percent Problems": [
    {"q": "An item costs $200, is discounted 15%, then taxed 8%. What is the final price?", "opts": ["$180.00", "$193.00", "$186.00", "$183.60"], "correct": 3, "exp": "Apply the factors in turn: 200 × 0.85 × 1.08 = $183.60."},
    {"q": "Compound interest is modelled by:", "opts": ["A = P(1 + r)ᵗ", "A = P + rt", "A = Prt", "A = P(1 + rt)"], "correct": 0, "exp": "Compound interest multiplies by (1 + r) each period, which is exponential growth."},
    {"q": "A rate rises from 20% to 25%. This is:", "opts": ["An increase of 25 percentage points", "An increase of 5 percentage points, or 25%", "An increase of 5%", "An increase of 20%"], "correct": 1, "exp": "The absolute change is 5 percentage points, which is a 25% relative increase on the original 20%."}
  ],
  "Statistics": [
    {"q": "For the values 20, 22, 24, 26, 400, which is true?", "opts": ["The mode is 400", "The mean best represents the data", "The median is 24 and better represents the data", "The mean and median are equal"], "correct": 2, "exp": "The extreme value pulls the mean to 98.4 while the median stays at 24, describing the data better."},
    {"q": "Adding 5 to every value in a data set:", "opts": ["Changes the standard deviation but not the mean", "Changes neither", "Changes both equally", "Changes the mean but not the standard deviation"], "correct": 3, "exp": "A constant shift moves the centre but leaves the spread of the values unchanged."},
    {"q": "Which measure is most affected by an outlier?", "opts": ["Mean", "Range of the middle half", "Median", "Mode"], "correct": 0, "exp": "The mean uses every value in its sum, so a single extreme value shifts it substantially."}
  ],
  "Probability": [
    {"q": "Of 40 students, 25 are female and 10 of those study science. P(studies science given female) is:", "opts": ["10/40", "10/25", "25/40", "15/25"], "correct": 1, "exp": "The condition 'given female' restricts the denominator to the 25 female students."},
    {"q": "If P(A) = 0.3, what is P(not A)?", "opts": ["0", "0.3", "0.7", "1.3"], "correct": 2, "exp": "The complement of an event has probability 1 − P(A) = 0.7."},
    {"q": "For two independent events, P(A and B) equals:", "opts": ["P(A) − P(B)", "P(A) ÷ P(B)", "P(A) + P(B)", "P(A) × P(B)"], "correct": 3, "exp": "Independent events combine multiplicatively for the probability that both occur."}
  ],
  "Data Interpretation": [
    {"q": "A bar chart's vertical axis starts at 95, making a bar of 96 look much taller. This is:", "opts": ["A scale artefact; the real difference is about 1%", "An error in the data", "Proof of a trend", "Evidence of a large increase"], "correct": 0, "exp": "A truncated axis exaggerates small differences visually without changing the underlying values."},
    {"q": "A graph shows a rising trend from 2010 to 2020. What can you conclude about 2025?", "opts": ["The trend will continue", "Nothing; the data covers only the shown period", "The trend will reverse", "The values will double"], "correct": 1, "exp": "Data supports conclusions only about the period it covers, not extrapolations beyond it."},
    {"q": "What should you check before comparing two values on a graph?", "opts": ["The chart title only", "The colour of the bars", "The axis labels, units and starting value", "The number of data points"], "correct": 2, "exp": "Units and axis range determine whether an apparent difference is real or a display effect."}
  ],
  "Tables and Charts": [
    {"q": "Of 120 respondents, 70 are rural and 42 of those own a phone. What percentage of rural respondents own a phone?", "opts": ["58%", "42%", "35%", "60%"], "correct": 3, "exp": "The question restricts to rural respondents, so the denominator is 70: 42/70 = 60%."},
    {"q": "Which chart type best shows shares of a single whole?", "opts": ["Pie chart", "Scatterplot", "Histogram", "Line graph"], "correct": 0, "exp": "A pie chart divides one total into parts, with slices summing to 100%."},
    {"q": "In a two-way table, the phrase 'of the men' tells you to use:", "opts": ["The grand total", "That row's or column's total", "The largest total", "The column total only"], "correct": 1, "exp": "The condition restricts the population to that group, making its total the denominator."}
  ],
  "Scatterplots": [
    {"q": "A best-fit line has slope 0.8. This means each one-unit increase in x predicts:", "opts": ["No change in y", "A 0.8 decrease in y", "A 0.8 increase in y", "An 80% increase in y"], "correct": 2, "exp": "The slope of a best-fit line is the predicted change in y for each one-unit increase in x."},
    {"q": "A data point lying above the line of best fit has:", "opts": ["No residual", "A residual of one", "A negative residual", "A positive residual"], "correct": 3, "exp": "The residual is actual minus predicted, which is positive for a point above the line."},
    {"q": "A strong positive correlation between two variables shows that:", "opts": ["They tend to move together", "They are unrelated", "The data is inaccurate", "One causes the other"], "correct": 0, "exp": "Correlation describes association only; it does not establish that one variable causes the other."}
  ],
  "Real-Life Applications": [
    {"q": "In the model C = 45t + 300, where C is cost in dollars and t is hours, the 45 represents:", "opts": ["The fixed hire charge", "The cost per hour of running", "The total cost", "The number of hours"], "correct": 1, "exp": "The coefficient on the variable is the rate of change, here dollars per hour."},
    {"q": "A situation with a fixed fee plus a constant charge per unit is modelled by:", "opts": ["A rational function", "An exponential function", "A linear function", "A quadratic function"], "correct": 2, "exp": "A fixed starting value plus a constant rate per unit is exactly the form y = mx + b."},
    {"q": "How can you tell whether a coefficient is a rate or a starting value?", "opts": ["By its sign", "By its position in the equation", "By its size", "By its units and whether it multiplies the variable"], "correct": 3, "exp": "A coefficient multiplying the variable is a rate; a standalone constant is a starting or fixed value."}
  ],
  "Lines and Angles": [
    {"q": "A transversal crosses parallel lines and one angle is 70°. The co-interior angle is:", "opts": ["110°", "20°", "290°", "70°"], "correct": 0, "exp": "Co-interior angles on the same side of a transversal between parallel lines sum to 180°."},
    {"q": "Vertical angles formed where two lines cross are:", "opts": ["Supplementary", "Equal", "Complementary", "Always right angles"], "correct": 1, "exp": "Opposite angles at an intersection are always equal."},
    {"q": "Angles around a point sum to:", "opts": ["180°", "270°", "360°", "90°"], "correct": 2, "exp": "A full turn about a point measures 360°."}
  ],
  "Triangles": [
    {"q": "A right triangle has legs of 6 and 8. Its hypotenuse is:", "opts": ["12", "14", "√28", "10"], "correct": 3, "exp": "6-8-10 is a multiple of the 3-4-5 triple, so the hypotenuse is 10."},
    {"q": "In a 30-60-90 triangle, the sides are in the ratio:", "opts": ["1 : √3 : 2", "1 : 2 : 3", "3 : 4 : 5", "1 : 1 : √2"], "correct": 0, "exp": "The sides opposite 30°, 60° and 90° are in the ratio 1 : √3 : 2."},
    {"q": "An exterior angle of a triangle equals:", "opts": ["180° minus the largest angle", "The sum of the two remote interior angles", "Half the interior angle sum", "90°"], "correct": 1, "exp": "The exterior angle theorem states it equals the sum of the two non-adjacent interior angles."}
  ],
  "Circles": [
    {"q": "A circle has radius 6. The area of a 60° sector is:", "opts": ["36π", "60π", "6π", "12π"], "correct": 2, "exp": "The sector is 60/360 = 1/6 of the circle, so its area is (1/6)(36π) = 6π."},
    {"q": "The equation of a circle centred at (2, −3) with radius 5 is:", "opts": ["(x − 2)² + (y − 3)² = 25", "(x + 2)² + (y + 3)² = 5", "(x + 2)² + (y − 3)² = 5", "(x − 2)² + (y + 3)² = 25"], "correct": 3, "exp": "The form is (x − h)² + (y − k)² = r², with h = 2, k = −3 and r² = 25."},
    {"q": "A radius drawn to a point of tangency is:", "opts": ["Perpendicular to the tangent", "Equal to the tangent", "Half the tangent", "Parallel to the tangent"], "correct": 0, "exp": "The radius meets a tangent line at right angles at the point of contact."}
  ],
  "Polygons": [
    {"q": "Each interior angle of a regular hexagon measures:", "opts": ["108°", "120°", "135°", "144°"], "correct": 1, "exp": "The interior sum is (6 − 2) × 180 = 720°, and dividing by 6 gives 120°."},
    {"q": "The exterior angles of any polygon sum to:", "opts": ["It depends on n", "180°", "360°", "(n − 2) × 180°"], "correct": 2, "exp": "Regardless of the number of sides, exterior angles always total 360°."},
    {"q": "How do you find the area of an irregular shape on the SAT?", "opts": ["Estimate from the diagram", "Use the perimeter", "Use a special formula", "Split it into rectangles and triangles"], "correct": 3, "exp": "Decomposing into shapes whose formulas you have is the standard method."}
  ],
  "Coordinate Geometry": [
    {"q": "The distance between (1, 2) and (4, 6) is:", "opts": ["5", "7", "3", "4"], "correct": 0, "exp": "The differences are 3 and 4, giving √(9 + 16) = 5, a 3-4-5 triple."},
    {"q": "The midpoint of (2, 4) and (8, 10) is:", "opts": ["(3, 3)", "(5, 7)", "(6, 6)", "(10, 14)"], "correct": 1, "exp": "The midpoint averages each coordinate: ((2+8)/2, (4+10)/2) = (5, 7)."},
    {"q": "A line perpendicular to one with slope 2 has slope:", "opts": ["−2", "1/2", "−1/2", "2"], "correct": 2, "exp": "Perpendicular slopes are negative reciprocals, so the slope is −1/2."}
  ],
  "Right Triangle Trigonometry": [
    {"q": "In a right triangle, the opposite side is 3 and the hypotenuse is 5. What is tan θ?", "opts": ["5/3", "3/5", "4/5", "3/4"], "correct": 3, "exp": "The adjacent side is 4 by the 3-4-5 triple, so tan θ = opposite/adjacent = 3/4."},
    {"q": "Which identity does the SAT test for complementary angles?", "opts": ["sin θ = cos(90° − θ)", "cos θ = tan(90° − θ)", "tan θ = sin(90° − θ)", "sin θ = tan(90° − θ)"], "correct": 0, "exp": "The sine of an angle equals the cosine of its complement."},
    {"q": "cos θ is defined as:", "opts": ["opposite/hypotenuse", "adjacent/hypotenuse", "opposite/adjacent", "hypotenuse/adjacent"], "correct": 1, "exp": "CAH in SOH-CAH-TOA: cosine is adjacent over hypotenuse."}
  ],
  "Area and Volume": [
    {"q": "If every dimension of a cube is doubled, its volume becomes:", "opts": ["2 times larger", "4 times larger", "8 times larger", "6 times larger"], "correct": 2, "exp": "Volume scales with the cube of the length factor, so doubling gives 2³ = 8 times."},
    {"q": "Which of these is NOT provided on the Bluebook reference sheet?", "opts": ["Volume of a sphere", "Volume of a cylinder", "Area of a circle", "The slope formula"], "correct": 3, "exp": "Geometry area and volume formulas are provided; algebra formulas such as slope are not."},
    {"q": "A question gives a circle's diameter as 10. Its area is:", "opts": ["25π", "10π", "20π", "100π"], "correct": 0, "exp": "The radius is half the diameter, so r = 5 and the area is π(5²) = 25π."}
  ],
  "Time Management": [
    {"q": "About how long should each Math question take?", "opts": ["About 60 seconds", "About 95 seconds", "About two minutes", "As long as needed"], "correct": 1, "exp": "Twenty-two questions in thirty-five minutes works out at roughly ninety-five seconds each."},
    {"q": "What should you do when stuck on a question?", "opts": ["Restart the module", "Keep working until you solve it", "Flag it, move on, and return if time allows", "Leave it blank permanently"], "correct": 2, "exp": "Every question scores the same, so reaching easier later questions is worth more than finishing a hard one."},
    {"q": "Why is reaching the end of a module important?", "opts": ["The timer stops early", "It affects the adaptive routing", "The last questions are worth more", "Unseen questions score nothing while guesses might score"], "correct": 3, "exp": "There is no penalty for guessing, so an unanswered question is a guaranteed zero."}
  ],
  "Adaptive Testing Strategy": [
    {"q": "Why does module 1 matter more than module 2?", "opts": ["It routes you to the easier or harder module 2, setting your score ceiling", "It is worth double marks", "It is untimed", "It has more questions"], "correct": 0, "exp": "Module 1 performance determines which module 2 you receive, and only the harder route reaches the top of the range."},
    {"q": "If module 2 feels noticeably harder than module 1, this usually means:", "opts": ["You performed poorly in module 1", "You were routed to the harder module, which is a good sign", "There is a technical fault", "The section is nearly over"], "correct": 1, "exp": "A harder module 2 indicates strong module 1 performance and access to the upper score range."},
    {"q": "Should you rush module 1 to leave more time for module 2?", "opts": ["It makes no difference", "Yes, time carries over", "No, time does not carry over and module 1 accuracy sets the ceiling", "Yes, module 2 is worth more"], "correct": 2, "exp": "Modules are separately timed, so nothing is banked, and rushing module 1 lowers your ceiling."}
  ],
  "Guessing Techniques": [
    {"q": "What is the penalty for a wrong answer on the SAT?", "opts": ["The question is repeated", "A quarter mark", "A full mark", "There is none"], "correct": 3, "exp": "Nothing is deducted for incorrect answers, so every question should be answered."},
    {"q": "After eliminating two of four options, your chance of guessing correctly is:", "opts": ["50%", "75%", "25%", "33%"], "correct": 0, "exp": "With two options remaining, a guess is correct half the time."},
    {"q": "On a student-produced response question you cannot solve, you should:", "opts": ["Leave it blank", "Enter a plausible value", "Enter zero always", "Copy a previous answer"], "correct": 1, "exp": "There is no penalty, so a reasonable entry has some chance while a blank has none."}
  ],
  "Eliminating Wrong Answers": [
    {"q": "In a Math system question asking for y, why does the value of x usually appear as a choice?", "opts": ["To make the question longer", "By coincidence", "Because candidates who stop a step early will select it", "Because both are correct"], "correct": 2, "exp": "Distractors are built from predictable errors, including answering the wrong part of the question."},
    {"q": "Which Reading & Writing choice can usually be eliminated quickly?", "opts": ["The shortest choice", "One containing a number", "One that quotes the passage", "One using absolute words like 'always' or 'never'"], "correct": 3, "exp": "Academic passages make qualified claims, so absolute wording usually overstates what the text supports."},
    {"q": "If two answer choices express the same idea in different words:", "opts": ["Neither is usually correct", "Both are correct", "Choose the shorter one", "One of them is correct"], "correct": 0, "exp": "Only one answer can be right, so two equivalent choices are generally both distractors."}
  ],
  "Common Mistakes": [
    {"q": "A student solves a percent question but reports the new price when the increase was asked. This is:", "opts": ["A calculation error", "Answering the wrong question", "A units error", "A pacing error"], "correct": 1, "exp": "The method was right; the mark was lost by not checking what the question actually asked for."},
    {"q": "Which question-stem words are most often overlooked?", "opts": ["'value' and 'number'", "'the' and 'a'", "'not', 'except' and 'least'", "'find' and 'solve'"], "correct": 2, "exp": "Negative qualifiers reverse what is being asked and are easy to miss when reading quickly."},
    {"q": "What is the most efficient way to review practice errors?", "opts": ["By question number", "By time taken", "By topic", "By reason for the error"], "correct": 3, "exp": "Grouping by reason exposes the two or three habits responsible for most lost marks."}
  ],
  "Stress Management": [
    {"q": "What reduces test anxiety most effectively?", "opts": ["Full-length practice under realistic timed conditions", "Cramming the night before", "Arriving late to reduce waiting", "Relaxation exercises alone"], "correct": 0, "exp": "Familiarity with the real format and timing removes the surprise that drives most test anxiety."},
    {"q": "If module 1 of a section went badly, you should:", "opts": ["Give up on the section", "Treat module 2 as a fresh start", "Rush module 2 to finish early", "Request a restart"], "correct": 1, "exp": "Dwelling on a finished module only costs accuracy on the one you are actually sitting."},
    {"q": "What is the main way panic costs marks?", "opts": ["It affects the adaptive routing", "It slows the calculator", "It causes misreading of question stems", "It stops the timer"], "correct": 2, "exp": "Rushed reading produces mechanical errors on questions the candidate could otherwise answer."}
  ],
  "Test-Day Checklist": [
    {"q": "When should Bluebook exam setup be completed?", "opts": ["During the first module", "It is not required", "On the morning of the test", "Several days before the test"], "correct": 3, "exp": "Completing setup in advance means download or device problems surface while there is still time to fix them."},
    {"q": "How early should you aim to arrive at the test centre?", "opts": ["At least 30 minutes early", "Five minutes early", "After the doors open", "Exactly on time"], "correct": 0, "exp": "Check-in involves identity verification, and latecomers are not admitted once testing begins."},
    {"q": "Which item must match your registration exactly?", "opts": ["Your calculator model", "The name on your identity document", "Your device brand", "Your seat number"], "correct": 1, "exp": "Test centres verify that the identity document matches the registration before admitting you."}
  ],
  "SAT Study Planner": [
    {"q": "How should a study plan be constructed?", "opts": ["Without fixed dates", "Forwards from today", "Backwards from the test date", "By studying whichever topic feels hardest"], "correct": 2, "exp": "Working backwards from the test date reserves the right time for mocks and final review."},
    {"q": "Why should a plan include rest days?", "opts": ["The SAT requires them", "To reduce the total study hours", "Rest days improve memory directly", "A plan that is abandoned achieves nothing"], "correct": 3, "exp": "A sustainable plan is followed; an unsustainable one is dropped within a fortnight."},
    {"q": "How often should you re-diagnose and adjust the plan?", "opts": ["About every two weeks", "Once, at the start", "Only after the test", "Daily"], "correct": 0, "exp": "Fortnightly re-testing shows whether the allocation is working and where to shift effort."}
  ],
  "Formula Sheet": [
    {"q": "Which formula must you memorise for the Digital SAT?", "opts": ["Area of a circle", "The quadratic formula", "Volume of a cylinder", "Area of a triangle"], "correct": 1, "exp": "Geometry formulas are on the reference sheet; the quadratic formula is not."},
    {"q": "Percent change is calculated as:", "opts": ["new ÷ old × 100", "(new − old) ÷ new × 100", "(new − old) ÷ old × 100", "(old − new) ÷ new × 100"], "correct": 2, "exp": "Percent change is always measured against the original value."},
    {"q": "Which is the correct compound interest model?", "opts": ["A = Prt", "A = P + rt", "A = P(1 + rt)", "A = P(1 + r)ᵗ"], "correct": 3, "exp": "Compound interest multiplies by (1 + r) once per period, giving exponential growth."}
  ],
  "Grammar Cheat Sheet": [
    {"q": "Which check should come first on an underlined portion?", "opts": ["Whether there is a clause boundary issue", "Pronoun case", "Parallelism", "Word choice"], "correct": 0, "exp": "Clause boundaries settle every punctuation question, which is the largest group within conventions."},
    {"q": "How do you check subject-verb agreement reliably?", "opts": ["Read the sentence aloud", "Cross out phrases between the subject and verb", "Match the verb to the nearest noun", "Check the sentence length"], "correct": 1, "exp": "Intervening phrases are inserted precisely to make the nearest noun look like the subject."},
    {"q": "Which pair is tested as a word-choice item?", "opts": ["very / really", "who / whom", "affect / effect", "and / but"], "correct": 2, "exp": "Commonly confused word pairs such as affect and effect are standard word-choice questions."}
  ],
  "Vocabulary List (1,000+ Words)": [
    {"q": "What kind of vocabulary should you prioritise?", "opts": ["Technical scientific terms", "Archaic literary words", "Rare and obscure words", "High-utility academic words with clear charge"], "correct": 3, "exp": "The Digital SAT tests common academic vocabulary in context rather than obscure words."},
    {"q": "'The boundary was arbitrary.' The word 'arbitrary' carries:", "opts": ["A negative charge", "No charge", "A neutral technical meaning", "A positive charge"], "correct": 0, "exp": "'Arbitrary' means based on choice rather than reason, which is a criticism in this context."},
    {"q": "What is the most effective way to study a vocabulary list?", "opts": ["Read all of it once", "Learn twenty words a week inside sentences and revisit them", "Memorise definitions alphabetically", "Learn only the longest words"], "correct": 1, "exp": "Spaced repetition of words in context builds the usage knowledge that context questions test."}
  ],
  "Practice Worksheets": [
    {"q": "Why should you avoid checking answers during a practice set?", "opts": ["It is against the rules", "It takes too long", "It inflates the result and prevents honest diagnosis", "The answers may be wrong"], "correct": 2, "exp": "Checking mid-set measures what you can do with help rather than what you can do alone."},
    {"q": "What should you record for each wrong answer?", "opts": ["The time it took", "The page number", "The correct letter", "The reason the error occurred"], "correct": 3, "exp": "The reason identifies the habit to fix, which a correct letter alone does not."},
    {"q": "When should missed questions be attempted again?", "opts": ["About a week later", "Never", "On the day of the test", "Immediately"], "correct": 0, "exp": "Spacing the retry tests genuine recall rather than short-term memory of the explanation."}
  ],
  "Score Improvement Guide": [
    {"q": "If your sections score 480 and 690, where should effort go first?", "opts": ["The 690 section", "The 480 section", "Equally split", "Whichever you enjoy"], "correct": 1, "exp": "The total is a sum, and gains are far easier to achieve at the lower end of the range."},
    {"q": "Which area gives the fastest gains in Reading & Writing?", "opts": ["Paired passages", "Vocabulary lists", "Standard English Conventions", "Reading speed"], "correct": 2, "exp": "Conventions are rule-based with definite right answers, making them the most reliably improvable."},
    {"q": "How should you decide what to study within a section?", "opts": ["By chapter order", "By what appears first on the test", "By topic you find hardest", "By question type costing you most marks"], "correct": 3, "exp": "The error log identifies the types responsible for lost marks, which is where effort pays."}
  ],
  "College Admission Tips": [
    {"q": "Does 'test-optional' for admission always mean test-optional for scholarships?", "opts": ["No, some scholarships still use score bands", "Only for international students", "Only at public universities", "Yes, always"], "correct": 0, "exp": "Many institutions award merit scholarships using SAT bands even where admission itself is test-optional."},
    {"q": "How long are SAT scores generally valid?", "opts": ["Two years", "Five years", "Indefinitely", "One year"], "correct": 1, "exp": "SAT scores are generally accepted for about five years."},
    {"q": "What score should an applicant aim for at a given college?", "opts": ["Any score above 1000", "The maximum of 1600", "Within the college's published middle 50% range", "The national average"], "correct": 2, "exp": "The published middle 50% range shows what admitted students actually scored at that institution."}
  ],
  "Certificate Requirements": [
    {"q": "What is the minimum pass mark for the Final Assessment?", "opts": ["80%", "50%", "60%", "70%"], "correct": 3, "exp": "The Final Assessment requires 70% or higher, and retakes are unlimited."},
    {"q": "How many Full SAT Mock Tests must be completed?", "opts": ["At least two", "All four", "None", "One"], "correct": 0, "exp": "The certificate requires at least two of the four full-length mock tests."},
    {"q": "When does the certificate unlock?", "opts": ["After a manual request", "Automatically once the Final Assessment is passed", "Thirty days after completion", "After the official SAT is taken"], "correct": 1, "exp": "The player releases the certificate automatically once every requirement, including the Final Assessment, is met."}
  ]
  };
})();
