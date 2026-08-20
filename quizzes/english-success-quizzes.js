/* TIH — authored per-topic quiz questions for a single course.
   Split out of the 567 KB topic-quizzes.js, which the course player loaded
   in full even for the 20 courses that have no entry in it. The curriculum
   builder reads this at build time, so the loader fetches it first. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['english-success'] = {
 "Welcome to the Course": [
  {
   "q": "What is the main purpose of a course welcome or orientation section?",
   "opts": [
    "To test your grammar before you begin",
    "To introduce the course and help you know what to expect",
    "To assign your final grade",
    "To replace the main lessons"
   ],
   "correct": 1,
   "exp": "A welcome section orients learners by introducing the course and setting expectations."
  },
  {
   "q": "Why is it helpful to read the welcome message before starting the lessons?",
   "opts": [
    "It removes the need to study vocabulary",
    "It is the only graded part of the course",
    "It gives you a preview of structure, goals, and how to succeed",
    "It guarantees fluency immediately"
   ],
   "correct": 2,
   "exp": "The welcome message previews the structure and goals so learners can approach lessons with direction."
  },
  {
   "q": "A good attitude to bring to the start of a new language course is best described as which of the following?",
   "opts": [
    "Expecting no effort will be required",
    "Assuming you already know everything",
    "Waiting until the last day to begin",
    "Being open, motivated, and ready to practice regularly"
   ],
   "correct": 3,
   "exp": "Openness, motivation, and regular practice set learners up for success from the start."
  }
 ],
 "Course Objectives": [
  {
   "q": "What does a course objective mainly describe?",
   "opts": [
    "What you should be able to do by the end of the course",
    "The teacher's personal opinions",
    "The price of the course",
    "The names of other students"
   ],
   "correct": 0,
   "exp": "Objectives state the skills or outcomes a learner should achieve by the end."
  },
  {
   "q": "Which of these is written as a clear, measurable learning objective?",
   "opts": [
    "Learn some English things",
    "Write a formal email using appropriate tone and structure",
    "Be good at English one day",
    "Try to understand words"
   ],
   "correct": 1,
   "exp": "A measurable objective names a specific, observable skill such as writing a formal email correctly."
  },
  {
   "q": "Why should learners review the course objectives at the start?",
   "opts": [
    "To memorize them for a spelling test",
    "To skip all the lessons",
    "To know the target skills and track their own progress",
    "Because objectives are unrelated to the lessons"
   ],
   "correct": 2,
   "exp": "Knowing the objectives lets learners focus their effort and measure their progress against clear targets."
  }
 ],
 "Assessing Your English Level": [
  {
   "q": "What is the main reason to assess your English level before studying?",
   "opts": [
    "To compare yourself with famous authors",
    "To choose a new native language",
    "To avoid ever practicing again",
    "To identify your strengths and weaknesses so you can focus your study"
   ],
   "correct": 3,
   "exp": "A level assessment reveals strengths and gaps so learners can target the right areas."
  },
  {
   "q": "Which framework is commonly used to describe English proficiency levels from A1 to C2?",
   "opts": [
    "The CEFR (Common European Framework of Reference)",
    "The periodic table",
    "The Dewey Decimal System",
    "The metric system"
   ],
   "correct": 0,
   "exp": "The CEFR describes language proficiency on a scale from A1 (beginner) to C2 (mastery)."
  },
  {
   "q": "A learner who can handle everyday topics but struggles with abstract academic texts is most likely at which stage?",
   "opts": [
    "Complete beginner with no vocabulary",
    "An intermediate level still developing advanced skills",
    "Native-level mastery of all registers",
    "Unable to speak at all"
   ],
   "correct": 1,
   "exp": "Managing everyday topics but not abstract academic texts is typical of an intermediate learner still building advanced skills."
  }
 ],
 "Learning Strategies": [
  {
   "q": "What is a learning strategy?",
   "opts": [
    "A rule that forbids using a dictionary",
    "A guarantee of instant fluency",
    "A deliberate method or technique a learner uses to study more effectively",
    "A type of final exam"
   ],
   "correct": 2,
   "exp": "A learning strategy is an intentional technique that makes studying more effective."
  },
  {
   "q": "Which of the following is an example of an effective vocabulary learning strategy?",
   "opts": [
    "Reading a word once and never reviewing it",
    "Translating everything without context",
    "Avoiding all new words",
    "Using spaced repetition and putting new words into your own sentences"
   ],
   "correct": 3,
   "exp": "Spaced repetition and active use in sentences strengthen memory and retention of new words."
  },
  {
   "q": "Why is self-monitoring considered a useful learning strategy?",
   "opts": [
    "It lets you check your progress and adjust your methods",
    "It replaces the need to study",
    "It only works for native speakers",
    "It makes learning slower"
   ],
   "correct": 0,
   "exp": "Self-monitoring helps learners notice what is working and adjust their approach accordingly."
  }
 ],
 "Academic vs. Professional English": [
  {
   "q": "Which statement best captures a key difference between academic and professional English?",
   "opts": [
    "They are exactly the same in every situation",
    "Academic English favors formal analysis and citations, while professional English focuses on clear workplace communication",
    "Professional English uses only slang",
    "Academic English is only spoken, never written"
   ],
   "correct": 1,
   "exp": "Academic English emphasizes formal analysis and sources, while professional English prioritizes clear, practical workplace communication."
  },
  {
   "q": "In which context would you most likely use academic English?",
   "opts": [
    "Ordering food at a market",
    "Sending a quick text to a friend",
    "Writing a research essay with cited evidence",
    "Writing a shopping list"
   ],
   "correct": 2,
   "exp": "A cited research essay is a classic use of academic English."
  },
  {
   "q": "Which phrase sounds most appropriate in a professional workplace email?",
   "opts": [
    "Hey, gimme that report ASAP or else",
    "yo where the file at",
    "The aforementioned data hereby demonstrates statistical significance",
    "Kindly send me the report by end of day, thank you"
   ],
   "correct": 3,
   "exp": "A polite, clear request fits professional English, avoiding both slang and overly academic phrasing."
  }
 ],
 "Setting Language Goals": [
  {
   "q": "What makes a language goal a SMART goal?",
   "opts": [
    "It is Specific, Measurable, Achievable, Relevant, and Time-bound",
    "It is vague and open-ended",
    "It has no deadline",
    "It cannot be measured"
   ],
   "correct": 0,
   "exp": "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
  },
  {
   "q": "Which of these is the best-formed language goal?",
   "opts": [
    "Get better at English",
    "Learn 20 new academic words each week for two months",
    "Know all English words",
    "Speak perfectly forever"
   ],
   "correct": 1,
   "exp": "Learning a set number of words in a set time is specific, measurable, and time-bound."
  },
  {
   "q": "Why is it useful to break a large language goal into smaller ones?",
   "opts": [
    "To avoid ever finishing",
    "To make the goal impossible",
    "To make progress trackable and keep motivation high",
    "Because small goals do not matter"
   ],
   "correct": 2,
   "exp": "Smaller milestones make progress visible and help sustain motivation toward a big goal."
  }
 ],
 "Study Plan": [
  {
   "q": "What is the main purpose of a study plan?",
   "opts": [
    "To replace the course objectives",
    "To decorate your notebook",
    "To avoid studying entirely",
    "To organize when and what you will study so you stay consistent"
   ],
   "correct": 3,
   "exp": "A study plan schedules what and when to study, supporting consistent progress."
  },
  {
   "q": "Which feature makes a study plan realistic and sustainable?",
   "opts": [
    "Setting regular, manageable sessions that fit your routine",
    "Scheduling ten hours every single day with no breaks",
    "Studying only once a year",
    "Having no set times at all"
   ],
   "correct": 0,
   "exp": "Regular, manageable sessions that fit real life are more sustainable than extreme schedules."
  },
  {
   "q": "Why should a study plan include review time, not just new material?",
   "opts": [
    "Review wastes time",
    "Reviewing reinforces earlier learning and improves retention",
    "New material should never be studied",
    "Review is only for exams"
   ],
   "correct": 1,
   "exp": "Built-in review reinforces prior learning and strengthens long-term retention."
  }
 ],
 "Everyday Vocabulary": [
  {
   "q": "What best describes everyday vocabulary?",
   "opts": [
    "Rare technical terms used only in laboratories",
    "Ancient words no longer spoken",
    "Common words used in daily conversation and routine situations",
    "Words found only in legal contracts"
   ],
   "correct": 2,
   "exp": "Everyday vocabulary consists of common words used in ordinary daily communication."
  },
  {
   "q": "Which set of words belongs to everyday vocabulary?",
   "opts": [
    "jurisprudence, plaintiff, tort",
    "photosynthesis, hypothesis, methodology",
    "amortization, liquidity, dividend",
    "kitchen, breakfast, bus, weather"
   ],
   "correct": 3,
   "exp": "Kitchen, breakfast, bus, and weather are common words used in daily life."
  },
  {
   "q": "Why is a strong base of everyday vocabulary important for learners?",
   "opts": [
    "It supports basic communication and forms a foundation for advanced vocabulary",
    "It is only needed for exams",
    "It replaces the need for grammar",
    "It is useless outside the classroom"
   ],
   "correct": 0,
   "exp": "Everyday vocabulary enables basic communication and provides a foundation for more advanced words."
  }
 ],
 "Academic Vocabulary": [
  {
   "q": "What best describes academic vocabulary?",
   "opts": [
    "Slang used among friends",
    "Formal words frequently used in essays, research, and scholarly writing",
    "Words used only when shopping",
    "Emojis and abbreviations"
   ],
   "correct": 1,
   "exp": "Academic vocabulary is the formal language common to essays, research, and scholarly texts."
  },
  {
   "q": "Which word is most typical of academic vocabulary?",
   "opts": [
    "stuff",
    "gonna",
    "analyze",
    "yeah"
   ],
   "correct": 2,
   "exp": "Analyze is a formal verb frequently used in academic writing."
  },
  {
   "q": "In an academic essay, which sentence uses academic vocabulary appropriately?",
   "opts": [
    "The results kinda show a big thing happened",
    "The numbers got way bigger, no cap",
    "Stuff went up a lot in the study",
    "The findings indicate a significant correlation between the variables"
   ],
   "correct": 3,
   "exp": "The phrasing indicate a significant correlation uses precise, formal academic vocabulary."
  }
 ],
 "Professional Vocabulary": [
  {
   "q": "What is professional vocabulary?",
   "opts": [
    "Words specific to workplaces and careers used in professional communication",
    "Words only children use",
    "Words that are always slang",
    "Words banned from the office"
   ],
   "correct": 0,
   "exp": "Professional vocabulary is the workplace and career-related language used in professional settings."
  },
  {
   "q": "Which sentence uses professional vocabulary suited to a workplace?",
   "opts": [
    "We gotta wrap this thing up quick",
    "Please schedule a meeting to review the quarterly deliverables",
    "The whole thing is a total mess, lol",
    "I dunno, just do whatever"
   ],
   "correct": 1,
   "exp": "Schedule a meeting to review the quarterly deliverables uses clear, appropriate professional vocabulary."
  },
  {
   "q": "Which word would most likely appear in professional workplace communication?",
   "opts": [
    "cartoon",
    "playground",
    "deadline",
    "recess"
   ],
   "correct": 2,
   "exp": "Deadline is a common professional term for a required completion time."
  }
 ],
 "Business English Terms": [
  {
   "q": "In business English, what does revenue refer to?",
   "opts": [
    "The lunch break schedule",
    "The number of employees",
    "The color of the logo",
    "The total income a business earns from its activities"
   ],
   "correct": 3,
   "exp": "Revenue is the total income a business generates from its sales or services."
  },
  {
   "q": "What does the business term stakeholder mean?",
   "opts": [
    "Any person or group with an interest in a business or project",
    "A person who cooks stakes",
    "A wooden pole in the ground",
    "A type of printer"
   ],
   "correct": 0,
   "exp": "A stakeholder is anyone with an interest in or affected by a business or project."
  },
  {
   "q": "In a business context, what does the abbreviation ROI stand for?",
   "opts": [
    "Rate of Interest only",
    "Return on Investment",
    "Result of Inquiry",
    "Region of Interest"
   ],
   "correct": 1,
   "exp": "ROI stands for Return on Investment, a measure of the gain relative to cost."
  }
 ],
 "Word Formation": [
  {
   "q": "What does word formation refer to in English?",
   "opts": [
    "Reading words aloud",
    "Arranging words alphabetically",
    "The ways new words are created, such as by adding affixes or combining words",
    "Deleting words from a text"
   ],
   "correct": 2,
   "exp": "Word formation covers the processes of creating words, including affixation and compounding."
  },
  {
   "q": "Which noun is correctly formed from the verb decide?",
   "opts": [
    "decideness",
    "decidation",
    "decidement",
    "decision"
   ],
   "correct": 3,
   "exp": "The correct noun formed from decide is decision."
  },
  {
   "q": "The word notebook is an example of which word-formation process?",
   "opts": [
    "Compounding two words into one",
    "Adding a prefix",
    "Shortening a word",
    "Changing only the spelling"
   ],
   "correct": 0,
   "exp": "Notebook is a compound, formed by joining note and book."
  }
 ],
 "Prefixes & Suffixes": [
  {
   "q": "What is the function of a prefix?",
   "opts": [
    "It is added to the end of a word",
    "It is added to the beginning of a word to change its meaning",
    "It replaces the whole word",
    "It only changes pronunciation"
   ],
   "correct": 1,
   "exp": "A prefix attaches to the beginning of a word and alters its meaning."
  },
  {
   "q": "What does the prefix un- most often mean in words like unhappy or unfair?",
   "opts": [
    "Again",
    "Before",
    "Not or the opposite of",
    "Very"
   ],
   "correct": 2,
   "exp": "The prefix un- means not or the opposite, so unhappy means not happy."
  },
  {
   "q": "Which suffix turns the adjective happy into a noun?",
   "opts": [
    "-ing, giving happying",
    "-ly, giving happily",
    "-ful, giving happyful",
    "-ness, giving happiness"
   ],
   "correct": 3,
   "exp": "The suffix -ness turns happy into the noun happiness."
  }
 ],
 "Synonyms & Antonyms": [
  {
   "q": "What is a synonym?",
   "opts": [
    "A word with the same or nearly the same meaning as another",
    "A word with the opposite meaning",
    "A word that sounds funny",
    "A word with no meaning"
   ],
   "correct": 0,
   "exp": "A synonym is a word with the same or a very similar meaning to another word."
  },
  {
   "q": "Which pair of words are antonyms?",
   "opts": [
    "big and large",
    "hot and cold",
    "happy and glad",
    "fast and quick"
   ],
   "correct": 1,
   "exp": "Hot and cold have opposite meanings, making them antonyms."
  },
  {
   "q": "Which word is the best synonym for difficult?",
   "opts": [
    "easy",
    "simple",
    "hard",
    "light"
   ],
   "correct": 2,
   "exp": "Hard means the same as difficult, so it is the correct synonym."
  }
 ],
 "Collocations": [
  {
   "q": "What is a collocation?",
   "opts": [
    "A word spelled backwards",
    "A punctuation mark",
    "A grammar mistake",
    "A pair or group of words that naturally and frequently occur together"
   ],
   "correct": 3,
   "exp": "A collocation is a combination of words that native speakers naturally use together."
  },
  {
   "q": "Which is the natural collocation in English?",
   "opts": [
    "make a decision",
    "do a decision",
    "have a decision",
    "build a decision"
   ],
   "correct": 0,
   "exp": "English speakers say make a decision, which is the standard collocation."
  },
  {
   "q": "Which phrase is the correct collocation for coffee?",
   "opts": [
    "fast coffee",
    "strong coffee",
    "loud coffee",
    "tall decision"
   ],
   "correct": 1,
   "exp": "Strong coffee is the natural collocation English speakers use."
  }
 ],
 "Idioms": [
  {
   "q": "What is an idiom?",
   "opts": [
    "A spelling rule",
    "A single long word",
    "A phrase whose meaning cannot be understood from the literal words",
    "A type of punctuation"
   ],
   "correct": 2,
   "exp": "An idiom carries a figurative meaning that differs from the literal words."
  },
  {
   "q": "What does the idiom break the ice mean?",
   "opts": [
    "To smash something frozen",
    "To end a friendship",
    "To make someone angry",
    "To start a conversation and reduce social tension"
   ],
   "correct": 3,
   "exp": "Break the ice means to initiate conversation and ease initial awkwardness."
  },
  {
   "q": "If someone says a test was a piece of cake, what do they mean?",
   "opts": [
    "It was very easy",
    "It was about baking",
    "It was extremely difficult",
    "It was cancelled"
   ],
   "correct": 0,
   "exp": "A piece of cake is an idiom meaning something very easy."
  }
 ],
 "Phrasal Verbs": [
  {
   "q": "What is a phrasal verb?",
   "opts": [
    "A verb written in capital letters",
    "A verb combined with a particle (preposition or adverb) that creates a new meaning",
    "A noun acting as a verb",
    "A verb with no subject"
   ],
   "correct": 1,
   "exp": "A phrasal verb combines a verb with a particle to form a meaning different from the verb alone."
  },
  {
   "q": "What does the phrasal verb give up mean?",
   "opts": [
    "To lift something high",
    "To hand a gift",
    "To stop trying or quit",
    "To look upward"
   ],
   "correct": 2,
   "exp": "Give up means to stop trying or to quit."
  },
  {
   "q": "Which sentence uses a phrasal verb correctly?",
   "opts": [
    "Please turn the meeting yesterday",
    "She fast the road quickly",
    "They happy the report soon",
    "Can you look after my dog while I am away?"
   ],
   "correct": 3,
   "exp": "Look after means to take care of, used correctly in that sentence."
  }
 ],
 "Context Clues": [
  {
   "q": "What are context clues?",
   "opts": [
    "Hints in the surrounding text that help you guess an unknown word's meaning",
    "Footnotes at the back of a book",
    "The title of a chapter only",
    "A dictionary definition printed in the margin"
   ],
   "correct": 0,
   "exp": "Context clues are hints in nearby words and sentences that reveal an unfamiliar word's meaning."
  },
  {
   "q": "In the sentence, The arid desert had no water for miles, the surrounding words suggest that arid means what?",
   "opts": [
    "cold",
    "dry",
    "crowded",
    "green"
   ],
   "correct": 1,
   "exp": "The mention of a desert with no water signals that arid means dry."
  },
  {
   "q": "Why are context clues a useful reading skill?",
   "opts": [
    "They only work for words you already know",
    "They make reading slower",
    "They let you understand new words without stopping to look up each one",
    "They replace the need to read"
   ],
   "correct": 2,
   "exp": "Context clues let readers infer meanings and keep reading without constant dictionary use."
  }
 ],
 "Vocabulary Building Strategies": [
  {
   "q": "Which of these is an effective vocabulary building strategy?",
   "opts": [
    "Only reading the same page repeatedly",
    "Avoiding all new texts",
    "Never reviewing words you meet",
    "Reading widely and recording new words in a personal vocabulary log"
   ],
   "correct": 3,
   "exp": "Reading widely and keeping a vocabulary log exposes learners to new words and aids retention."
  },
  {
   "q": "Why does using a new word in your own sentences help you learn it?",
   "opts": [
    "It active recall and real use deepen memory and understanding",
    "It has no effect on memory",
    "It only helps with spelling",
    "It makes the word harder to remember"
   ],
   "correct": 0,
   "exp": "Actively using a word in your own sentences strengthens memory and understanding."
  },
  {
   "q": "How does spaced repetition help build vocabulary?",
   "opts": [
    "By studying a word only once",
    "By reviewing words at increasing intervals to move them into long-term memory",
    "By ignoring difficult words",
    "By learning words in random order without review"
   ],
   "correct": 1,
   "exp": "Spaced repetition reviews words at growing intervals, moving them into long-term memory."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence 'She quickly finished her work', which word is an adverb?",
   "opts": [
    "finished",
    "She",
    "quickly",
    "work"
   ],
   "correct": 2,
   "exp": "'Quickly' modifies the verb 'finished', so it is an adverb."
  },
  {
   "q": "Which part of speech connects words, phrases, or clauses, such as 'and', 'but', and 'because'?",
   "opts": [
    "Preposition",
    "Pronoun",
    "Interjection",
    "Conjunction"
   ],
   "correct": 3,
   "exp": "Conjunctions join words, phrases, or clauses together."
  },
  {
   "q": "In 'Wow, that presentation was impressive!', what part of speech is 'Wow'?",
   "opts": [
    "Interjection",
    "Adjective",
    "Adverb",
    "Noun"
   ],
   "correct": 0,
   "exp": "'Wow' expresses sudden emotion, making it an interjection."
  }
 ],
 "Sentence Structure": [
  {
   "q": "Which of the following is a complete sentence?",
   "opts": [
    "Running down the hall.",
    "The manager approved the budget.",
    "After the long meeting.",
    "Because the report was late."
   ],
   "correct": 1,
   "exp": "'The manager approved the budget' has a subject and a complete verb, forming a full sentence."
  },
  {
   "q": "What type of sentence is 'I studied hard, so I passed the exam'?",
   "opts": [
    "Complex",
    "Simple",
    "Compound",
    "Fragment"
   ],
   "correct": 2,
   "exp": "Two independent clauses joined by 'so' form a compound sentence."
  },
  {
   "q": "Which sentence is complex, containing one independent and one dependent clause?",
   "opts": [
    "She sang and he danced.",
    "Open the door, please.",
    "The dog barked loudly.",
    "Although it rained, we went out."
   ],
   "correct": 3,
   "exp": "'Although it rained' is a dependent clause attached to the independent clause 'we went out'."
  }
 ],
 "Nouns": [
  {
   "q": "Which word is an abstract noun?",
   "opts": [
    "Honesty",
    "River",
    "Table",
    "Teacher"
   ],
   "correct": 0,
   "exp": "'Honesty' names an idea or quality that cannot be perceived by the senses."
  },
  {
   "q": "What is the correct plural form of 'child'?",
   "opts": [
    "Childs",
    "Children",
    "Childrens",
    "Childes"
   ],
   "correct": 1,
   "exp": "'Child' has the irregular plural 'children'."
  },
  {
   "q": "Which of the following is a collective noun?",
   "opts": [
    "Happy",
    "Book",
    "Team",
    "Quickly"
   ],
   "correct": 2,
   "exp": "'Team' refers to a group of people considered as a single unit."
  }
 ],
 "Pronouns": [
  {
   "q": "Which sentence uses the correct pronoun?",
   "opts": [
    "Me and him went to the store.",
    "I and him went to the store.",
    "Him and me went to the store.",
    "He and I went to the store."
   ],
   "correct": 3,
   "exp": "As subjects, the correct pronouns are 'He and I'."
  },
  {
   "q": "In 'The students submitted their assignments', what does 'their' refer to?",
   "opts": [
    "The students",
    "The assignments",
    "The teacher",
    "The class"
   ],
   "correct": 0,
   "exp": "The possessive pronoun 'their' refers back to 'the students'."
  },
  {
   "q": "Which is a reflexive pronoun in 'She taught herself to code'?",
   "opts": [
    "She",
    "herself",
    "code",
    "taught"
   ],
   "correct": 1,
   "exp": "'Herself' reflects the action back onto the subject, making it reflexive."
  }
 ],
 "Verbs": [
  {
   "q": "Which word is an action verb in 'The engineer designed a new bridge'?",
   "opts": [
    "new",
    "engineer",
    "designed",
    "bridge"
   ],
   "correct": 2,
   "exp": "'Designed' expresses the action performed by the subject."
  },
  {
   "q": "Which sentence contains a linking verb?",
   "opts": [
    "She runs every morning.",
    "He kicked the ball.",
    "They built a house.",
    "The soup smells delicious."
   ],
   "correct": 3,
   "exp": "'Smells' links the subject 'soup' to the description 'delicious', making it a linking verb."
  },
  {
   "q": "In 'They have finished the project', which word is the helping verb?",
   "opts": [
    "have",
    "finished",
    "They",
    "project"
   ],
   "correct": 0,
   "exp": "'Have' assists the main verb 'finished', so it is the helping (auxiliary) verb."
  }
 ],
 "Verb Tenses": [
  {
   "q": "Which sentence is in the present perfect tense?",
   "opts": [
    "I write reports daily.",
    "I have written the report.",
    "I will write the report.",
    "I was writing the report."
   ],
   "correct": 1,
   "exp": "'Have written' uses 'have' plus a past participle, forming the present perfect."
  },
  {
   "q": "Which verb form correctly completes 'While I ___ dinner, the phone rang'?",
   "opts": [
    "cooked",
    "cook",
    "was cooking",
    "have cooked"
   ],
   "correct": 2,
   "exp": "'Was cooking' describes an ongoing past action, the past continuous tense."
  },
  {
   "q": "Which sentence correctly uses the future perfect tense?",
   "opts": [
    "They complete the plan now.",
    "They are completing the plan.",
    "They completed the plan.",
    "By 2030, they will have completed the plan."
   ],
   "correct": 3,
   "exp": "'Will have completed' expresses an action finished before a future point, the future perfect."
  }
 ],
 "Subject-Verb Agreement": [
  {
   "q": "Which sentence has correct subject-verb agreement?",
   "opts": [
    "The list of items is long.",
    "The list of items were long.",
    "The list of items are long.",
    "The list of items be long."
   ],
   "correct": 0,
   "exp": "The subject 'list' is singular, so it takes the singular verb 'is'."
  },
  {
   "q": "Which verb correctly completes 'Neither the teacher nor the students ___ ready'?",
   "opts": [
    "is",
    "are",
    "has",
    "was"
   ],
   "correct": 1,
   "exp": "With 'neither...nor', the verb agrees with the nearer subject 'students', so 'are' is correct."
  },
  {
   "q": "Which verb correctly completes 'Each of the employees ___ a badge'?",
   "opts": [
    "were",
    "have",
    "has",
    "are"
   ],
   "correct": 2,
   "exp": "'Each' is singular and takes the singular verb 'has'."
  }
 ],
 "Adjectives": [
  {
   "q": "Which word is an adjective in 'The tall building collapsed'?",
   "opts": [
    "The",
    "collapsed",
    "building",
    "tall"
   ],
   "correct": 3,
   "exp": "'Tall' describes the noun 'building', making it an adjective."
  },
  {
   "q": "Which word correctly completes the comparative 'This test is ___ than the last one'?",
   "opts": [
    "more difficult",
    "most difficult",
    "difficult",
    "difficultest"
   ],
   "correct": 0,
   "exp": "Longer adjectives form the comparative with 'more', giving 'more difficult'."
  },
  {
   "q": "Which sentence orders its adjectives correctly?",
   "opts": [
    "A red big car",
    "A big red car",
    "Big a red car",
    "A car red big"
   ],
   "correct": 1,
   "exp": "Size comes before color in English adjective order, so 'big red car' is correct."
  }
 ],
 "Adverbs": [
  {
   "q": "Which word is an adverb in 'He spoke very softly'?",
   "opts": [
    "spoke",
    "He",
    "softly",
    "very"
   ],
   "correct": 2,
   "exp": "'Softly' modifies the verb 'spoke', making it an adverb."
  },
  {
   "q": "Which sentence uses an adverb of frequency correctly?",
   "opts": [
    "She always is late.",
    "She late always is.",
    "Always she late is.",
    "She is always late."
   ],
   "correct": 3,
   "exp": "Adverbs of frequency come after the verb 'be', so 'is always late' is correct."
  },
  {
   "q": "In 'The team performed well', what does 'well' describe?",
   "opts": [
    "How they performed",
    "The number of players",
    "The team",
    "When they played"
   ],
   "correct": 0,
   "exp": "'Well' is an adverb describing how the team performed."
  }
 ],
 "Articles": [
  {
   "q": "Which article correctly completes 'She is ___ honest person'?",
   "opts": [
    "a",
    "an",
    "no article",
    "the"
   ],
   "correct": 1,
   "exp": "'Honest' begins with a vowel sound, so 'an' is used."
  },
  {
   "q": "Which sentence uses articles correctly?",
   "opts": [
    "I saw the elephant at a zoo.",
    "I saw a elephant at the zoo.",
    "I saw an elephant at the zoo.",
    "I saw elephant at zoo."
   ],
   "correct": 2,
   "exp": "'An' precedes the vowel sound in 'elephant', and 'the' identifies the specific zoo."
  },
  {
   "q": "When do we typically use the definite article 'the'?",
   "opts": [
    "Before any singular noun",
    "Never with people",
    "Only with plural nouns",
    "When referring to a specific, known thing"
   ],
   "correct": 3,
   "exp": "'The' is used when the noun refers to something specific and identifiable."
  }
 ],
 "Prepositions": [
  {
   "q": "Which preposition correctly completes 'The meeting is ___ Monday'?",
   "opts": [
    "on",
    "at",
    "in",
    "by"
   ],
   "correct": 0,
   "exp": "We use 'on' with days of the week."
  },
  {
   "q": "Which sentence uses the preposition of time correctly?",
   "opts": [
    "The class starts in 9 a.m.",
    "The class starts at 9 a.m.",
    "The class starts by 9 a.m.",
    "The class starts on 9 a.m."
   ],
   "correct": 1,
   "exp": "We use 'at' with specific clock times."
  },
  {
   "q": "Which preposition best completes 'The keys are ___ the drawer'?",
   "opts": [
    "at",
    "on",
    "in",
    "over"
   ],
   "correct": 2,
   "exp": "'In' indicates something enclosed inside the drawer."
  }
 ],
 "Conjunctions": [
  {
   "q": "Which word is a coordinating conjunction?",
   "opts": [
    "because",
    "while",
    "although",
    "but"
   ],
   "correct": 3,
   "exp": "'But' is a coordinating conjunction that joins equal elements."
  },
  {
   "q": "Which subordinating conjunction correctly completes '___ it was raining, we stayed home'?",
   "opts": [
    "Because",
    "But",
    "And",
    "Or"
   ],
   "correct": 0,
   "exp": "'Because' introduces a reason in a dependent clause."
  },
  {
   "q": "Which sentence uses a correlative conjunction pair correctly?",
   "opts": [
    "Either you go nor stay.",
    "Either you go or stay.",
    "Neither he and she came.",
    "Both you or I can attend."
   ],
   "correct": 1,
   "exp": "'Either...or' is the correct correlative conjunction pair."
  }
 ],
 "Modals": [
  {
   "q": "Which modal expresses strong obligation?",
   "opts": [
    "could",
    "might",
    "must",
    "may"
   ],
   "correct": 2,
   "exp": "'Must' expresses strong obligation or necessity."
  },
  {
   "q": "Which modal correctly completes 'You ___ smoke here; it is prohibited'?",
   "opts": [
    "should",
    "would",
    "could",
    "must not"
   ],
   "correct": 3,
   "exp": "'Must not' expresses prohibition."
  },
  {
   "q": "Which sentence uses a modal to express polite permission?",
   "opts": [
    "May I leave early today?",
    "I leaving early today.",
    "I leave early today.",
    "Leave early I today?"
   ],
   "correct": 0,
   "exp": "'May I' is a polite way to ask for permission."
  }
 ],
 "Active & Passive Voice": [
  {
   "q": "Which sentence is written in the passive voice?",
   "opts": [
    "The chef cooked the meal.",
    "The meal was cooked by the chef.",
    "The chef cooks daily.",
    "The chef is cooking."
   ],
   "correct": 1,
   "exp": "The subject 'meal' receives the action, and 'was cooked' shows passive voice."
  },
  {
   "q": "Which is the correct passive form of 'The company launched a new product'?",
   "opts": [
    "The company was launched a product.",
    "A new product launched the company.",
    "A new product was launched by the company.",
    "A new product launches the company."
   ],
   "correct": 2,
   "exp": "The object becomes the subject and the verb becomes 'was launched by the company'."
  },
  {
   "q": "Which is the correct active-voice version of 'The letter was written by Sara'?",
   "opts": [
    "The letter wrote Sara.",
    "The letter is written Sara.",
    "Sara was written the letter.",
    "Sara wrote the letter."
   ],
   "correct": 3,
   "exp": "In the active voice, the doer 'Sara' becomes the subject: 'Sara wrote the letter'."
  }
 ],
 "Direct & Indirect Speech": [
  {
   "q": "Which is the correct indirect speech for She said, 'I am tired'?",
   "opts": [
    "She said that she was tired.",
    "She says she tired.",
    "She said that she is tired.",
    "She said I am tired."
   ],
   "correct": 0,
   "exp": "In reported speech, present tense shifts to past, giving 'she was tired'."
  },
  {
   "q": "Which is the correct direct speech form?",
   "opts": [
    "He said that he was busy.",
    "He said, 'I am busy.'",
    "He said busy he was.",
    "He said he is busy."
   ],
   "correct": 1,
   "exp": "Direct speech quotes the exact words within quotation marks."
  },
  {
   "q": "Which correctly reports the question He asked, 'Where do you live'?",
   "opts": [
    "He asked where I live?",
    "He asked where do you live.",
    "He asked where I lived.",
    "He asked where did I live."
   ],
   "correct": 2,
   "exp": "Reported questions use statement word order and shift tense, giving 'where I lived'."
  }
 ],
 "Conditionals": [
  {
   "q": "Which verb form correctly completes the first conditional 'If it rains, we ___ the trip'?",
   "opts": [
    "cancel",
    "would cancel",
    "cancelled",
    "will cancel"
   ],
   "correct": 3,
   "exp": "The first conditional uses 'will' plus the base verb in the result clause."
  },
  {
   "q": "Which sentence is a correct second conditional?",
   "opts": [
    "If I had money, I would travel.",
    "If I have money, I would travel.",
    "If I had money, I will travel.",
    "If I have money, I travelled."
   ],
   "correct": 0,
   "exp": "The second conditional uses past simple in the 'if' clause and 'would' in the result."
  },
  {
   "q": "Which verb form completes the third conditional 'If she had studied, she ___ the exam'?",
   "opts": [
    "would pass",
    "would have passed",
    "passed",
    "will pass"
   ],
   "correct": 1,
   "exp": "The third conditional uses 'would have' plus a past participle for unreal past results."
  }
 ],
 "Relative Clauses": [
  {
   "q": "Which relative pronoun correctly completes 'The woman ___ called you is my aunt'?",
   "opts": [
    "whose",
    "which",
    "who",
    "where"
   ],
   "correct": 2,
   "exp": "'Who' refers to people acting as the subject of the clause."
  },
  {
   "q": "Which sentence uses a relative clause correctly?",
   "opts": [
    "The book who I read was long.",
    "The book whose I read was long.",
    "The book where I read was long.",
    "The book which I read was long."
   ],
   "correct": 3,
   "exp": "'Which' refers to things such as 'the book'."
  },
  {
   "q": "Which relative pronoun shows possession in 'The man ___ car was stolen called the police'?",
   "opts": [
    "whose",
    "which",
    "who",
    "whom"
   ],
   "correct": 0,
   "exp": "'Whose' indicates possession, referring to the man's car."
  }
 ],
 "Punctuation": [
  {
   "q": "Which sentence is punctuated correctly?",
   "opts": [
    "We bought apples oranges and pears.",
    "We bought apples, oranges, and pears.",
    "We bought, apples oranges pears.",
    "We bought apples, oranges and, pears."
   ],
   "correct": 1,
   "exp": "Commas correctly separate items in a list."
  },
  {
   "q": "Which is the correct singular possessive form for a tail belonging to one dog?",
   "opts": [
    "dogs' tail",
    "dogs tail",
    "dog's tail",
    "dog s' tail"
   ],
   "correct": 2,
   "exp": "A singular possessive adds an apostrophe before the 's': 'dog's'."
  },
  {
   "q": "Which sentence correctly uses a semicolon?",
   "opts": [
    "I was tired; so I slept.",
    "I was; tired I slept.",
    "I was tired, I went to sleep;",
    "I was tired; I went to sleep."
   ],
   "correct": 3,
   "exp": "A semicolon joins two closely related independent clauses without a conjunction."
  }
 ],
 "Common Grammar Errors": [
  {
   "q": "Which sentence uses 'their', 'there', and 'they're' correctly?",
   "opts": [
    "They're going to their house over there.",
    "There going to their house over they're.",
    "Their going to they're house over there.",
    "Their going to there house over they're."
   ],
   "correct": 0,
   "exp": "'They're' means they are, 'their' shows possession, and 'there' indicates place."
  },
  {
   "q": "Which word correctly completes 'The decision will ___ everyone'?",
   "opts": [
    "effect",
    "affect",
    "effected",
    "affects"
   ],
   "correct": 1,
   "exp": "'Affect' is the verb meaning to influence, while 'effect' is usually a noun."
  },
  {
   "q": "Which sentence correctly uses 'its' or 'it's'?",
   "opts": [
    "The dog wagged it's tail.",
    "Its raining outside today.",
    "It's a beautiful day for its walk.",
    "Its' a nice day."
   ],
   "correct": 2,
   "exp": "'It's' means it is, and 'its' is the possessive form, both used correctly here."
  }
 ],
 "Reading Strategies": [
  {
   "q": "Why should a reader adjust their reading strategy based on their purpose?",
   "opts": [
    "Because reading strategies are decided by the author, not the reader",
    "Because all texts should be read at the same slow pace",
    "Because strategies only matter for fiction",
    "Because different goals, like finding a fact versus deep study, require different approaches"
   ],
   "correct": 3,
   "exp": "Effective readers match their strategy to their purpose, such as scanning for a fact or reading closely to study."
  },
  {
   "q": "What does previewing a text before reading it in full accomplish?",
   "opts": [
    "It activates prior knowledge and sets expectations about content",
    "It replaces the need to read the text at all",
    "It guarantees you will memorize every detail",
    "It is only useful for very short texts"
   ],
   "correct": 0,
   "exp": "Previewing headings and structure activates background knowledge and helps readers anticipate the content."
  },
  {
   "q": "Which practice best reflects an active reading strategy?",
   "opts": [
    "Reading every word aloud at a constant speed",
    "Asking questions and making predictions while reading",
    "Avoiding note-taking to save time",
    "Reading the conclusion first and stopping there"
   ],
   "correct": 1,
   "exp": "Active reading involves engaging with the text by questioning, predicting, and monitoring comprehension."
  }
 ],
 "Skimming": [
  {
   "q": "What is the main purpose of skimming a text?",
   "opts": [
    "To locate one specific number or name",
    "To memorize every supporting detail",
    "To get a quick general overview of the main idea",
    "To translate each sentence carefully"
   ],
   "correct": 2,
   "exp": "Skimming is reading quickly to grasp the overall gist or main idea of a text."
  },
  {
   "q": "Which parts of a text are most useful to focus on when skimming?",
   "opts": [
    "The page numbers and margins",
    "Every footnote and citation",
    "Only the middle sentences of each paragraph",
    "Titles, headings, and first sentences of paragraphs"
   ],
   "correct": 3,
   "exp": "Titles, headings, and topic sentences quickly reveal the general content when skimming."
  },
  {
   "q": "In which situation is skimming the most appropriate strategy?",
   "opts": [
    "Deciding whether an article is relevant before reading it fully",
    "Finding a specific date in a schedule",
    "Studying for a detailed final exam",
    "Proofreading a document for spelling errors"
   ],
   "correct": 0,
   "exp": "Skimming helps a reader quickly judge whether a text is relevant enough to read in depth."
  }
 ],
 "Scanning": [
  {
   "q": "What is scanning primarily used for?",
   "opts": [
    "Understanding the author's overall argument",
    "Locating specific information such as a name, date, or number",
    "Enjoying the style of the writing",
    "Summarizing the whole passage"
   ],
   "correct": 1,
   "exp": "Scanning is reading to find specific pieces of information quickly without reading everything."
  },
  {
   "q": "Which task is a clear example of scanning?",
   "opts": [
    "Reading a novel from start to finish",
    "Getting the general theme of an essay",
    "Looking up a phone number in a directory",
    "Analyzing a poem's meaning"
   ],
   "correct": 2,
   "exp": "Finding a phone number involves searching for one specific item, which is scanning."
  },
  {
   "q": "How does scanning differ from skimming?",
   "opts": [
    "They are two names for the exact same process",
    "Scanning is slower and more thorough than skimming",
    "Scanning ignores keywords, while skimming focuses on them",
    "Scanning targets specific details, while skimming gets a general overview"
   ],
   "correct": 3,
   "exp": "Scanning hunts for specific information, whereas skimming aims for the overall gist."
  }
 ],
 "Identifying Main Ideas": [
  {
   "q": "What is the main idea of a paragraph?",
   "opts": [
    "The central point the author wants to convey",
    "The first word of the paragraph",
    "A minor example used for illustration",
    "The longest sentence in the paragraph"
   ],
   "correct": 0,
   "exp": "The main idea is the central point or overall message the author communicates."
  },
  {
   "q": "Where is the main idea of a paragraph most often stated?",
   "opts": [
    "Always in the final footnote",
    "Frequently in a topic sentence, often at the beginning",
    "Only in the title of the book",
    "Never directly stated in academic writing"
   ],
   "correct": 1,
   "exp": "The main idea is commonly expressed in a topic sentence, often near the start of a paragraph."
  },
  {
   "q": "Which question best helps a reader identify the main idea?",
   "opts": [
    "What single word appears most often?",
    "How many sentences are there?",
    "What is this passage mostly about?",
    "Which sentence is the shortest?"
   ],
   "correct": 2,
   "exp": "Asking what the passage is mostly about points directly to its main idea."
  }
 ],
 "Supporting Details": [
  {
   "q": "What is the role of supporting details in a paragraph?",
   "opts": [
    "To replace the main idea entirely",
    "To state the central point of the text",
    "To introduce an unrelated topic",
    "To explain, prove, or illustrate the main idea"
   ],
   "correct": 3,
   "exp": "Supporting details develop the main idea by providing evidence, examples, and explanation."
  },
  {
   "q": "Which of the following is most likely a supporting detail rather than a main idea?",
   "opts": [
    "A 2020 study found participants who walked daily lowered their blood pressure",
    "Exercise improves overall health",
    "The essay argues for a healthier lifestyle",
    "Health is important for everyone"
   ],
   "correct": 0,
   "exp": "A specific study with data is a detail that supports the broader claim about health."
  },
  {
   "q": "Which signal words often introduce supporting details?",
   "opts": [
    "In conclusion, therefore, thus",
    "For example, such as, in addition",
    "However, on the other hand, nevertheless",
    "First and foremost, above all"
   ],
   "correct": 1,
   "exp": "Phrases like for example and such as commonly introduce details that back up the main idea."
  }
 ],
 "Making Inferences": [
  {
   "q": "What does it mean to make an inference while reading?",
   "opts": [
    "To copy the text word for word",
    "To ignore any information the author leaves out",
    "To draw a logical conclusion from clues not directly stated",
    "To read only the explicitly stated facts"
   ],
   "correct": 2,
   "exp": "An inference is a reasoned conclusion based on textual clues plus prior knowledge, not a direct statement."
  },
  {
   "q": "If a passage says a character shivered, pulled her coat tight, and saw her breath, what can you infer?",
   "opts": [
    "It is nighttime",
    "The character is at the beach in summer",
    "The character is angry",
    "The weather is cold"
   ],
   "correct": 3,
   "exp": "The clues about shivering and visible breath logically imply that the weather is cold."
  },
  {
   "q": "What makes an inference valid rather than a wild guess?",
   "opts": [
    "It is based on textual evidence and reasonable logic",
    "It contradicts the details in the text",
    "It relies only on imagination with no clues",
    "It repeats exactly what the author already stated"
   ],
   "correct": 0,
   "exp": "A valid inference is supported by evidence in the text combined with sound reasoning."
  }
 ],
 "Vocabulary in Context": [
  {
   "q": "What does using context clues to determine a word's meaning involve?",
   "opts": [
    "Guessing randomly without reading nearby text",
    "Using surrounding words and sentences to infer the meaning",
    "Skipping the unfamiliar word entirely",
    "Only checking a dictionary and ignoring the sentence"
   ],
   "correct": 1,
   "exp": "Context clues rely on the surrounding words and sentences to reveal an unknown word's meaning."
  },
  {
   "q": "In the sentence, The arid desert had no water for miles, what does arid most likely mean?",
   "opts": [
    "Very wet",
    "Crowded",
    "Extremely dry",
    "Cold"
   ],
   "correct": 2,
   "exp": "The mention of a desert with no water signals that arid means extremely dry."
  },
  {
   "q": "Which type of context clue defines a word directly within the sentence?",
   "opts": [
    "A punctuation-only clue with no words",
    "A page-number clue",
    "A font-size clue",
    "A definition or restatement clue"
   ],
   "correct": 3,
   "exp": "A definition or restatement clue explains the unfamiliar word right in the sentence."
  }
 ],
 "Reading Academic Articles": [
  {
   "q": "What is the purpose of the abstract in an academic article?",
   "opts": [
    "To provide a concise summary of the article's aims, methods, and findings",
    "To list the author's personal opinions only",
    "To advertise the journal to new readers",
    "To replace the reference list"
   ],
   "correct": 0,
   "exp": "An abstract summarizes the study's purpose, methods, and main findings so readers can judge relevance."
  },
  {
   "q": "Which section of a research article typically explains how the study was conducted?",
   "opts": [
    "The introduction",
    "The methods section",
    "The abstract",
    "The acknowledgments"
   ],
   "correct": 1,
   "exp": "The methods section describes the procedures and design used to conduct the study."
  },
  {
   "q": "Why is it useful to read the discussion or conclusion of an academic article carefully?",
   "opts": [
    "It only lists the references",
    "It contains only raw data tables",
    "It interprets the results and explains their significance",
    "It repeats the title several times"
   ],
   "correct": 2,
   "exp": "The discussion interprets findings and explains what they mean and why they matter."
  }
 ],
 "Reading Business Documents": [
  {
   "q": "What is the main purpose of the subject line in a business email?",
   "opts": [
    "To provide a legal disclaimer",
    "To hide the topic from the reader",
    "To list all recipients",
    "To briefly state the email's purpose so the reader knows what to expect"
   ],
   "correct": 3,
   "exp": "A clear subject line concisely tells the reader what the email is about."
  },
  {
   "q": "When reading a business report, where would you most likely find a quick overview for busy managers?",
   "opts": [
    "In the executive summary",
    "In the appendix footnotes",
    "In the page headers",
    "In the reference list"
   ],
   "correct": 0,
   "exp": "The executive summary gives decision-makers a brief overview of the report's key points."
  },
  {
   "q": "Why are bullet points and headings common in business documents?",
   "opts": [
    "To make the document longer",
    "To help readers quickly locate and scan key information",
    "To hide the main message",
    "To follow poetry conventions"
   ],
   "correct": 1,
   "exp": "Headings and bullet points make information easy to scan and locate quickly."
  }
 ],
 "Active Listening": [
  {
   "q": "What best describes active listening?",
   "opts": [
    "Hearing sounds while thinking about something else",
    "Interrupting to share your own story",
    "Fully concentrating on, understanding, and responding to the speaker",
    "Waiting silently only to plan your reply"
   ],
   "correct": 2,
   "exp": "Active listening means fully focusing on the speaker to understand and respond appropriately."
  },
  {
   "q": "Which behavior demonstrates active listening?",
   "opts": [
    "Changing the subject immediately",
    "Checking your phone while the speaker talks",
    "Finishing the speaker's sentences for them",
    "Paraphrasing what the speaker said to confirm understanding"
   ],
   "correct": 3,
   "exp": "Paraphrasing to confirm understanding is a core active listening technique."
  },
  {
   "q": "Why is giving nonverbal feedback, like nodding, important in active listening?",
   "opts": [
    "It signals attention and encourages the speaker to continue",
    "It proves you disagree with the speaker",
    "It replaces the need to understand the words",
    "It ends the conversation politely"
   ],
   "correct": 0,
   "exp": "Nonverbal cues like nodding show engagement and encourage the speaker to keep going."
  }
 ],
 "Listening for Main Ideas": [
  {
   "q": "When listening for the main idea, what should you focus on?",
   "opts": [
    "Every single word equally",
    "The overall point the speaker is trying to make",
    "Only the first word of each sentence",
    "The background noise"
   ],
   "correct": 1,
   "exp": "Listening for the main idea means grasping the speaker's overall central point."
  },
  {
   "q": "Which spoken signal often introduces a main idea in a talk?",
   "opts": [
    "For example",
    "By the way",
    "The key point is",
    "As a small side note"
   ],
   "correct": 2,
   "exp": "Phrases like the key point is directly signal a speaker's main idea."
  },
  {
   "q": "How can you identify the main idea when you miss some words in a talk?",
   "opts": [
    "Assume there is no main idea",
    "Stop listening entirely",
    "Focus only on unfamiliar vocabulary",
    "Use context and repeated ideas to grasp the overall message"
   ],
   "correct": 3,
   "exp": "Using context and noticing repeated or emphasized ideas helps capture the main point despite gaps."
  }
 ],
 "Listening for Details": [
  {
   "q": "What does listening for details require you to do?",
   "opts": [
    "Catch specific information such as names, dates, and figures",
    "Ignore specific facts and numbers",
    "Only summarize the general topic",
    "Listen to the tone but not the words"
   ],
   "correct": 0,
   "exp": "Listening for details means catching specific information like names, dates, and numbers."
  },
  {
   "q": "In which situation is listening for details most important?",
   "opts": [
    "Deciding the general mood of a song",
    "Writing down flight times and gate numbers from an announcement",
    "Guessing the topic of a conversation",
    "Enjoying background music"
   ],
   "correct": 1,
   "exp": "Recording exact flight times and gate numbers depends on catching precise details."
  },
  {
   "q": "Which strategy helps you catch details while listening?",
   "opts": [
    "Focusing only on the speaker's clothing",
    "Thinking about your response instead of listening",
    "Listening for keywords and specific facts as they are spoken",
    "Assuming details are unimportant"
   ],
   "correct": 2,
   "exp": "Focusing on keywords and specific facts as they occur helps capture important details."
  }
 ],
 "Note-Taking Skills": [
  {
   "q": "Why is it more effective to write notes in your own words rather than copying word for word?",
   "opts": [
    "It is required by grammar rules",
    "It takes longer and is harder",
    "It removes all key ideas",
    "It promotes understanding and helps you process the information"
   ],
   "correct": 3,
   "exp": "Paraphrasing in your own words deepens understanding and helps you engage with the material."
  },
  {
   "q": "Which is a common feature of effective note-taking?",
   "opts": [
    "Using abbreviations, symbols, and short phrases",
    "Recording every word the speaker says",
    "Writing only complete formal sentences",
    "Avoiding any structure or headings"
   ],
   "correct": 0,
   "exp": "Effective notes use abbreviations, symbols, and short phrases to capture ideas quickly."
  },
  {
   "q": "What is a key benefit of the Cornell note-taking method?",
   "opts": [
    "It requires no review afterward",
    "It divides the page into sections for notes, cues, and a summary",
    "It forbids the use of keywords",
    "It only works for math problems"
   ],
   "correct": 1,
   "exp": "The Cornell method organizes the page into notes, cue, and summary areas to aid review."
  }
 ],
 "Listening to Lectures": [
  {
   "q": "What do lecturers often do to signal that important information is coming?",
   "opts": [
    "Lower their voice to a whisper and stop",
    "Change the topic without warning",
    "Use phrases such as this is important or remember that",
    "Read silently to themselves"
   ],
   "correct": 2,
   "exp": "Signposting phrases like this is important alert listeners to key points in a lecture."
  },
  {
   "q": "How can recognizing lecture structure help a listener?",
   "opts": [
    "It replaces the need to listen",
    "It makes note-taking impossible",
    "It only matters after the lecture ends",
    "It helps predict and follow the flow of ideas"
   ],
   "correct": 3,
   "exp": "Understanding the structure helps a listener anticipate and follow the organization of ideas."
  },
  {
   "q": "What should you do when you miss a point during a lecture?",
   "opts": [
    "Leave a gap in your notes and keep listening, then clarify later",
    "Stop taking notes for the rest of the class",
    "Interrupt loudly every time",
    "Erase all previous notes"
   ],
   "correct": 0,
   "exp": "Leaving a gap and continuing to listen lets you keep up and fill in the point afterward."
  }
 ],
 "Listening to Business Meetings": [
  {
   "q": "In a business meeting, what does the term action item usually refer to?",
   "opts": [
    "A snack served during the break",
    "A specific task assigned to someone to complete",
    "The meeting room number",
    "A vote to end the meeting"
   ],
   "correct": 1,
   "exp": "An action item is a concrete task assigned to a person during a meeting."
  },
  {
   "q": "Why is it useful to listen carefully for who is assigned each task in a meeting?",
   "opts": [
    "To criticize the speaker",
    "To ignore the agenda",
    "To know who is responsible for follow-up actions",
    "To leave the meeting early"
   ],
   "correct": 2,
   "exp": "Tracking task assignments clarifies responsibility for follow-up after the meeting."
  },
  {
   "q": "What is the purpose of an agenda in a business meeting?",
   "opts": [
    "To decide who pays for lunch",
    "To record personal opinions only",
    "To replace the minutes",
    "To list the topics and structure the discussion"
   ],
   "correct": 3,
   "exp": "An agenda outlines the topics and gives structure to the meeting discussion."
  }
 ],
 "Understanding Different English Accents": [
  {
   "q": "Why can the same English word sound different across accents?",
   "opts": [
    "Because pronunciation, stress, and intonation vary between regions",
    "Because the spelling changes with each accent",
    "Because the meaning is different in each country",
    "Because grammar rules change completely"
   ],
   "correct": 0,
   "exp": "Accents differ mainly in pronunciation, stress, and intonation rather than spelling or meaning."
  },
  {
   "q": "What is an effective way to improve understanding of unfamiliar English accents?",
   "opts": [
    "Avoid listening to them entirely",
    "Expose yourself regularly to varied speakers through media and conversation",
    "Only read text and never listen",
    "Insist everyone speak one accent"
   ],
   "correct": 1,
   "exp": "Regular exposure to diverse speakers trains the ear to understand different accents."
  },
  {
   "q": "When you struggle to understand someone's accent, what is a helpful strategy?",
   "opts": [
    "Immediately stop the conversation",
    "Correct the speaker's pronunciation",
    "Focus on the overall meaning and use context clues",
    "Assume they are speaking a different language"
   ],
   "correct": 2,
   "exp": "Focusing on overall meaning and context helps comprehension when an accent is unfamiliar."
  }
 ],
 "Pronunciation": [
  {
   "q": "Which pair of words are minimal pairs that a learner might confuse because they differ by a single sound?",
   "opts": [
    "happy and joyful",
    "table and chair",
    "quickly and slowly",
    "ship and sheep"
   ],
   "correct": 3,
   "exp": "Ship and sheep differ only in the vowel sound, making them a classic minimal pair for practice."
  },
  {
   "q": "What does word stress mean when pronouncing a multi-syllable word like PHOtograph?",
   "opts": [
    "Making one syllable louder, longer, and clearer than the others",
    "Saying every syllable at the same volume",
    "Pausing before each syllable",
    "Whispering the final syllable"
   ],
   "correct": 0,
   "exp": "Word stress means giving one syllable more emphasis in loudness, length, and clarity than the rest."
  },
  {
   "q": "Why can the letter combination -ough be difficult for learners of English pronunciation?",
   "opts": [
    "It is always silent",
    "It can be pronounced several different ways in different words",
    "It is only used in formal writing",
    "It is never found at the end of a word"
   ],
   "correct": 1,
   "exp": "The spelling -ough maps to several different sounds, as in through, tough, and though, so spelling does not predict pronunciation."
  }
 ],
 "Intonation": [
  {
   "q": "In standard English, what intonation pattern is most common for a yes or no question such as Are you ready?",
   "opts": [
    "Flat, level tone throughout",
    "Falling tone at the end",
    "Rising tone at the end",
    "No change in pitch at all"
   ],
   "correct": 2,
   "exp": "Yes or no questions typically use rising intonation at the end to signal that a response is expected."
  },
  {
   "q": "What does a speaker usually communicate by using a falling intonation at the end of a statement?",
   "opts": [
    "That they are surprised",
    "That they are unsure and want confirmation",
    "That they are asking a question",
    "That the statement is finished and certain"
   ],
   "correct": 3,
   "exp": "A falling tone at the end signals completeness and certainty, marking the statement as finished."
  },
  {
   "q": "How can intonation change the meaning of the same words, such as You did that?",
   "opts": [
    "Rising intonation can turn a statement into a surprised question",
    "It cannot change meaning, only volume",
    "It only affects the speed of speech",
    "It only matters in written English"
   ],
   "correct": 0,
   "exp": "The same words spoken with rising intonation become a question or express surprise rather than a plain statement."
  }
 ],
 "Fluency Development": [
  {
   "q": "In speaking, what does fluency mainly refer to?",
   "opts": [
    "Using the most advanced vocabulary possible",
    "Speaking smoothly and continuously at a natural pace",
    "Never making any grammatical mistakes",
    "Speaking as fast as possible"
   ],
   "correct": 1,
   "exp": "Fluency is the ability to speak smoothly and continuously at a natural, comfortable pace."
  },
  {
   "q": "Which strategy best helps a speaker keep talking when they cannot remember an exact word?",
   "opts": [
    "Stopping completely until the word comes to mind",
    "Switching entirely to the first language",
    "Using a filler phrase or describing the idea in other words",
    "Repeating the previous sentence word for word"
   ],
   "correct": 2,
   "exp": "Paraphrasing or using a filler lets the speaker maintain flow instead of breaking down when a word is missing."
  },
  {
   "q": "Why is regular speaking practice important for developing fluency?",
   "opts": [
    "It guarantees a perfect native accent",
    "It removes the need to learn grammar",
    "It makes vocabulary unnecessary",
    "It builds automaticity so words come more quickly and naturally"
   ],
   "correct": 3,
   "exp": "Frequent practice builds automaticity, letting the speaker produce language faster and with less hesitation."
  }
 ],
 "Everyday Conversations": [
  {
   "q": "Which response is the most natural and polite reply to the greeting How are you?",
   "opts": [
    "I am fine, thanks. And you?",
    "That is not your concern.",
    "Why do you ask me that?",
    "I do not want to say."
   ],
   "correct": 0,
   "exp": "Answering briefly and returning the question is the standard, polite convention in casual greetings."
  },
  {
   "q": "What is the main purpose of small talk in everyday conversation?",
   "opts": [
    "To exchange detailed technical information",
    "To build friendly rapport and ease social interaction",
    "To end a conversation quickly",
    "To test the other person's knowledge"
   ],
   "correct": 1,
   "exp": "Small talk builds rapport and creates a comfortable social connection rather than transferring detailed information."
  },
  {
   "q": "Which phrase is the most appropriate polite way to interrupt someone in a friendly conversation?",
   "opts": [
    "Stop talking for a second.",
    "You are wrong about that.",
    "Sorry to interrupt, but may I add something?",
    "Be quiet and listen to me."
   ],
   "correct": 2,
   "exp": "Apologizing and asking permission is the courteous way to interrupt without appearing rude."
  }
 ],
 "Academic Discussions": [
  {
   "q": "Which phrase is most appropriate for politely disagreeing during an academic discussion?",
   "opts": [
    "That is completely wrong.",
    "Nobody agrees with you.",
    "You clearly did not read the material.",
    "I see your point, but I would argue that..."
   ],
   "correct": 3,
   "exp": "Acknowledging the other view before offering a counterargument keeps the disagreement respectful and academic."
  },
  {
   "q": "In an academic seminar, why is it important to support your opinions with evidence?",
   "opts": [
    "Because evidence makes arguments more credible and persuasive",
    "Because it makes the discussion shorter",
    "Because the loudest speaker wins",
    "Because personal opinions are not allowed"
   ],
   "correct": 0,
   "exp": "Backing claims with evidence strengthens their credibility, which is central to academic discussion."
  },
  {
   "q": "What is an effective way to show active listening in an academic discussion?",
   "opts": [
    "Interrupting to change the topic",
    "Building on a previous speaker's point before adding your own",
    "Checking your phone while others speak",
    "Repeating your point until others agree"
   ],
   "correct": 1,
   "exp": "Referencing and extending a previous speaker's idea demonstrates that you listened and engages the group."
  }
 ],
 "Public Speaking": [
  {
   "q": "What is the most effective way to begin a public speech to capture the audience's attention?",
   "opts": [
    "Apologizing for being nervous",
    "Reading every word slowly from a script",
    "Opening with a hook such as a question, story, or striking fact",
    "Listing all the things you will not cover"
   ],
   "correct": 2,
   "exp": "A strong hook like a question, story, or surprising fact immediately engages the audience."
  },
  {
   "q": "Why is eye contact important when delivering a public speech?",
   "opts": [
    "It lets you avoid looking at your notes",
    "It helps you speak faster",
    "It signals that the speech is nearly over",
    "It builds connection and trust with the audience"
   ],
   "correct": 3,
   "exp": "Eye contact establishes a personal connection and helps the audience trust and stay engaged with the speaker."
  },
  {
   "q": "Which practice best helps a speaker manage nervousness before a public speech?",
   "opts": [
    "Rehearsing thoroughly and taking slow, deep breaths",
    "Memorizing the speech only minutes before",
    "Avoiding all preparation to stay spontaneous",
    "Speaking as quickly as possible to finish sooner"
   ],
   "correct": 0,
   "exp": "Thorough rehearsal combined with controlled breathing reduces anxiety and builds confidence."
  }
 ],
 "Business Meetings": [
  {
   "q": "What is the main purpose of an agenda in a business meeting?",
   "opts": [
    "To record who attended the meeting",
    "To outline the topics and keep the meeting focused",
    "To assign blame for past mistakes",
    "To replace the need for any discussion"
   ],
   "correct": 1,
   "exp": "An agenda lists the topics to be covered and keeps the meeting organized and on track."
  },
  {
   "q": "Which phrase is most appropriate for professionally proposing an idea in a business meeting?",
   "opts": [
    "We have to do it my way.",
    "That idea will never work.",
    "I suggest we consider adopting this approach.",
    "Just do whatever you want."
   ],
   "correct": 2,
   "exp": "Suggesting rather than demanding presents the idea professionally and invites discussion."
  },
  {
   "q": "What are the action items typically recorded at the end of a business meeting?",
   "opts": [
    "A summary of everyone's personal opinions",
    "Complaints raised during the meeting",
    "The seating arrangement of participants",
    "Specific tasks assigned to people with deadlines"
   ],
   "correct": 3,
   "exp": "Action items are the concrete tasks assigned to individuals, usually with deadlines, so follow-up is clear."
  }
 ],
 "Telephone Communication": [
  {
   "q": "Which is the most professional way to answer a business phone call?",
   "opts": [
    "Good morning, this is Sarah from Sales. How may I help you?",
    "Yeah, who is this?",
    "What do you want?",
    "Hold on, I am busy."
   ],
   "correct": 0,
   "exp": "Greeting the caller, identifying yourself, and offering help is the courteous professional standard."
  },
  {
   "q": "Why is it especially important to speak clearly and confirm details on the telephone?",
   "opts": [
    "Because calls are always recorded",
    "Because the listener cannot see your gestures or lips",
    "Because phone lines only allow short calls",
    "Because tone of voice does not matter on the phone"
   ],
   "correct": 1,
   "exp": "Without visual cues the listener relies entirely on your voice, so clarity and confirming details prevent misunderstanding."
  },
  {
   "q": "What should you do when you need to put a caller on hold?",
   "opts": [
    "Hang up and call them back later",
    "Say nothing and mute the line immediately",
    "Ask permission, explain briefly, and thank them for waiting",
    "Transfer them without any warning"
   ],
   "correct": 2,
   "exp": "Asking permission and explaining the reason shows respect and keeps the caller informed."
  }
 ],
 "Presentation Skills": [
  {
   "q": "How should visual aids such as slides best support a presentation?",
   "opts": [
    "By containing the full text of everything you will say",
    "By replacing the need for the speaker entirely",
    "By using as many animations as possible",
    "By highlighting key points with clear, uncluttered visuals"
   ],
   "correct": 3,
   "exp": "Effective slides reinforce key points with clear, simple visuals rather than duplicating the entire spoken script."
  },
  {
   "q": "What is the best way to structure the body of an effective presentation?",
   "opts": [
    "Clearly organized main points that flow logically",
    "A random collection of interesting facts",
    "One long unbroken paragraph of information",
    "Only questions with no answers"
   ],
   "correct": 0,
   "exp": "A logical sequence of clearly organized main points helps the audience follow and remember the content."
  },
  {
   "q": "Why is it valuable to summarize your key points at the end of a presentation?",
   "opts": [
    "To fill extra time",
    "To reinforce the main message and help the audience remember it",
    "To introduce brand-new information",
    "To confuse the audience deliberately"
   ],
   "correct": 1,
   "exp": "A closing summary reinforces the core message and improves the audience's retention of it."
  }
 ],
 "Sentence Writing": [
  {
   "q": "Which of the following is a complete sentence?",
   "opts": [
    "Running quickly down the street.",
    "Because the weather was cold.",
    "The students completed their assignments on time.",
    "After the long and difficult meeting."
   ],
   "correct": 2,
   "exp": "It contains a subject and a verb and expresses a complete thought, unlike the sentence fragments."
  },
  {
   "q": "What error appears in this sentence: I finished my work, I went home?",
   "opts": [
    "An incorrect verb tense",
    "A missing subject",
    "A spelling mistake",
    "A comma splice joining two independent clauses"
   ],
   "correct": 3,
   "exp": "Two independent clauses joined only by a comma form a comma splice, which needs a conjunction or semicolon."
  },
  {
   "q": "Which sentence correctly uses a compound structure with a coordinating conjunction?",
   "opts": [
    "She studied hard, and she passed the exam.",
    "She studied hard she passed the exam.",
    "She studied hard, she passed the exam.",
    "She studied hard although passed the exam."
   ],
   "correct": 0,
   "exp": "Two independent clauses joined by a comma and the coordinating conjunction and form a correct compound sentence."
  }
 ],
 "Paragraph Writing": [
  {
   "q": "What is the main function of a topic sentence in a paragraph?",
   "opts": [
    "To provide a detailed example",
    "To state the main idea the paragraph will develop",
    "To conclude the entire essay",
    "To cite an outside source"
   ],
   "correct": 1,
   "exp": "The topic sentence introduces the central idea that the rest of the paragraph supports and develops."
  },
  {
   "q": "Which quality describes a well-written, unified paragraph?",
   "opts": [
    "It contains exactly ten sentences",
    "It covers as many different topics as possible",
    "Every sentence relates to and supports one central idea",
    "It avoids using any examples"
   ],
   "correct": 2,
   "exp": "Unity means all sentences focus on and support a single main idea, keeping the paragraph coherent."
  },
  {
   "q": "What role do transition words like however and therefore play in a paragraph?",
   "opts": [
    "They increase the word count",
    "They replace the topic sentence",
    "They signal the end of the essay",
    "They show the logical connections between ideas"
   ],
   "correct": 3,
   "exp": "Transition words clarify how ideas relate to one another, improving the paragraph's flow and coherence."
  }
 ],
 "Essay Writing": [
  {
   "q": "What is the primary purpose of a thesis statement in an essay?",
   "opts": [
    "To present the essay's main argument or central claim",
    "To list every source used",
    "To summarize each body paragraph in detail",
    "To provide a personal anecdote"
   ],
   "correct": 0,
   "exp": "The thesis statement expresses the essay's central argument, guiding the whole piece."
  },
  {
   "q": "Which part of an essay typically restates the main argument and leaves the reader with a final thought?",
   "opts": [
    "The introduction",
    "The conclusion",
    "The first body paragraph",
    "The thesis statement"
   ],
   "correct": 1,
   "exp": "The conclusion restates the argument and provides a final thought, giving the essay a sense of closure."
  },
  {
   "q": "What is the recommended basic structure of a standard academic essay?",
   "opts": [
    "A list of bullet points",
    "Only a single long paragraph",
    "Introduction, body paragraphs, and conclusion",
    "Conclusion first, then introduction"
   ],
   "correct": 2,
   "exp": "A standard essay follows an introduction, several supporting body paragraphs, and a conclusion."
  }
 ],
 "Academic Writing Style": [
  {
   "q": "Which sentence best reflects a formal academic writing style?",
   "opts": [
    "The results were kinda surprising, to be honest.",
    "This stuff basically proves our point.",
    "We were super shocked by what we found!",
    "The findings indicate a significant correlation between the variables."
   ],
   "correct": 3,
   "exp": "It uses precise, objective, and formal language appropriate for academic writing, avoiding slang and casual tone."
  },
  {
   "q": "Why is academic writing usually expected to avoid contractions and slang?",
   "opts": [
    "To maintain a formal, objective, and professional tone",
    "Because they take up too much space",
    "Because readers cannot understand them",
    "Because they are grammatically incorrect in all writing"
   ],
   "correct": 0,
   "exp": "Avoiding contractions and slang keeps the tone formal and objective, as academic conventions require."
  },
  {
   "q": "In academic writing, why are claims typically supported with citations?",
   "opts": [
    "To make the paper longer",
    "To give credit to sources and strengthen credibility",
    "To decorate the reference list",
    "To avoid writing original sentences"
   ],
   "correct": 1,
   "exp": "Citations credit the original sources and lend authority and credibility to the writer's claims."
  }
 ],
 "Writing Clearly and Concisely": [
  {
   "q": "Which revision makes the sentence more concise without losing meaning?",
   "opts": [
    "Due to the fact that it was raining, we stayed inside.",
    "In light of the fact that rain was occurring, we remained indoors.",
    "Because it was raining, we stayed inside.",
    "Owing to the circumstance of rain, we did not go outside."
   ],
   "correct": 2,
   "exp": "Replacing the wordy phrase due to the fact that with because keeps the meaning while removing clutter."
  },
  {
   "q": "Why is the active voice often preferred over the passive voice for clear writing?",
   "opts": [
    "It is grammatically required in all sentences",
    "It always makes sentences longer",
    "It hides who performs the action",
    "It usually makes sentences more direct and easier to follow"
   ],
   "correct": 3,
   "exp": "The active voice states clearly who does what, making sentences more direct and readable."
  },
  {
   "q": "Which practice best supports concise writing?",
   "opts": [
    "Cutting unnecessary words and redundant phrases",
    "Repeating the main idea in several ways",
    "Adding as many adjectives as possible",
    "Using long, complex sentences everywhere"
   ],
   "correct": 0,
   "exp": "Removing redundant words and filler tightens the writing and makes the meaning clearer."
  }
 ],
 "Editing and Proofreading": [
  {
   "q": "What is the main difference between editing and proofreading?",
   "opts": [
    "They are exactly the same task",
    "Editing improves content and structure, while proofreading catches surface errors like spelling",
    "Editing only fixes commas, while proofreading rewrites ideas",
    "Proofreading happens before any writing begins"
   ],
   "correct": 1,
   "exp": "Editing focuses on content, clarity, and structure, whereas proofreading targets final surface errors like spelling and punctuation."
  },
  {
   "q": "Why is it helpful to read your writing aloud during proofreading?",
   "opts": [
    "It makes the writing longer",
    "It replaces the need to check spelling",
    "It helps you catch awkward phrasing and missing words",
    "It is only useful for poetry"
   ],
   "correct": 2,
   "exp": "Reading aloud makes awkward sentences and omitted words easier to notice than silent reading."
  },
  {
   "q": "Which of the following is a proofreading task rather than an editing task?",
   "opts": [
    "Reorganizing paragraphs for better flow",
    "Strengthening a weak argument",
    "Cutting an entire off-topic section",
    "Correcting a misspelled word and a missing comma"
   ],
   "correct": 3,
   "exp": "Fixing spelling and punctuation are surface corrections, which is the core work of proofreading."
  }
 ],
 "Research Essays": [
  {
   "q": "What is the primary purpose of a thesis statement in a research essay?",
   "opts": [
    "To state the essay's central argument or claim",
    "To list every source consulted during research",
    "To summarize the conclusion in advance",
    "To provide background facts about the topic"
   ],
   "correct": 0,
   "exp": "A thesis statement expresses the essay's main argument that the rest of the paper supports."
  },
  {
   "q": "Which section of a research essay presents evidence and analysis to support the argument?",
   "opts": [
    "The title page",
    "The body paragraphs",
    "The introduction hook",
    "The reference list"
   ],
   "correct": 1,
   "exp": "Body paragraphs develop and support the thesis with evidence and analysis."
  },
  {
   "q": "Why should a research essay use credible, peer-reviewed sources?",
   "opts": [
    "To make the essay longer",
    "To avoid writing an introduction",
    "To strengthen the argument with reliable evidence",
    "To replace the need for a thesis"
   ],
   "correct": 2,
   "exp": "Credible sources give the argument reliable, verifiable support that readers can trust."
  }
 ],
 "Reports": [
  {
   "q": "Which feature most distinguishes a report from an essay?",
   "opts": [
    "It never uses evidence",
    "It avoids any conclusions",
    "It must be written in the first person",
    "It uses clearly labeled sections and headings"
   ],
   "correct": 3,
   "exp": "Reports are organized into distinct labeled sections and headings for easy navigation."
  },
  {
   "q": "In a formal report, what is the main purpose of the executive summary?",
   "opts": [
    "To give a brief overview of key findings and recommendations",
    "To list all references used",
    "To thank the people involved",
    "To define technical terms"
   ],
   "correct": 0,
   "exp": "The executive summary briefly conveys the report's key findings and recommendations for busy readers."
  },
  {
   "q": "Where in a report would specific advice for action typically appear?",
   "opts": [
    "The title page",
    "The recommendations section",
    "The appendix of raw data",
    "The table of contents"
   ],
   "correct": 1,
   "exp": "The recommendations section states the actions suggested based on the findings."
  }
 ],
 "Literature Reviews": [
  {
   "q": "What is the main goal of a literature review?",
   "opts": [
    "To report original experimental results",
    "To advertise a product",
    "To survey and synthesize existing research on a topic",
    "To list personal opinions only"
   ],
   "correct": 2,
   "exp": "A literature review surveys and synthesizes what has already been published on a topic."
  },
  {
   "q": "A strong literature review does more than summarize sources by also doing what?",
   "opts": [
    "Copying abstracts word for word",
    "Ignoring conflicting findings",
    "Listing sources alphabetically without comment",
    "Identifying gaps, patterns, and relationships between studies"
   ],
   "correct": 3,
   "exp": "A good review synthesizes sources, showing patterns, gaps, and how studies relate."
  },
  {
   "q": "Why is it important to organize a literature review thematically rather than source by source?",
   "opts": [
    "It shows connections between ideas rather than isolated summaries",
    "It hides weak sources",
    "It makes the review shorter",
    "It removes the need for citations"
   ],
   "correct": 0,
   "exp": "Thematic organization reveals connections and debates across sources instead of disconnected summaries."
  }
 ],
 "Summaries": [
  {
   "q": "What is the key characteristic of an effective summary?",
   "opts": [
    "It adds the writer's new opinions",
    "It restates only the main ideas in condensed form",
    "It quotes the original extensively",
    "It is longer than the original text"
   ],
   "correct": 1,
   "exp": "A summary condenses the source to its main ideas without adding new content."
  },
  {
   "q": "When writing a summary, how should you treat minor details and examples?",
   "opts": [
    "Include every one of them",
    "Expand on them at length",
    "Generally omit them and focus on main points",
    "Replace them with your opinions"
   ],
   "correct": 2,
   "exp": "Summaries focus on main points and leave out minor details and examples."
  },
  {
   "q": "Which practice keeps a summary faithful to the original source?",
   "opts": [
    "Changing the author's meaning to fit your view",
    "Copying whole sentences verbatim",
    "Adding facts not in the source",
    "Accurately representing the author's ideas in your own words"
   ],
   "correct": 3,
   "exp": "A faithful summary conveys the author's actual meaning in your own words."
  }
 ],
 "Paraphrasing": [
  {
   "q": "What does paraphrasing require you to do?",
   "opts": [
    "Restate the source's idea in your own words and structure",
    "Copy the passage and add quotation marks",
    "Shorten the text to a single line",
    "Translate the text into another language"
   ],
   "correct": 0,
   "exp": "Paraphrasing means expressing the source's idea in your own words and sentence structure."
  },
  {
   "q": "Even when you paraphrase correctly, what must you still do?",
   "opts": [
    "Use quotation marks around the whole passage",
    "Cite the original source",
    "Change the meaning of the idea",
    "Avoid mentioning the author"
   ],
   "correct": 1,
   "exp": "A paraphrase still uses someone else's idea, so it must be cited."
  },
  {
   "q": "Which is an example of poor paraphrasing that risks plagiarism?",
   "opts": [
    "Fully rewording and restructuring the idea",
    "Explaining the concept from memory in new words",
    "Swapping a few words while keeping the original sentence structure",
    "Combining ideas from several sources in your own phrasing"
   ],
   "correct": 2,
   "exp": "Changing only a few words while keeping the original structure is too close to the source."
  }
 ],
 "Referencing & Citations": [
  {
   "q": "What is the main purpose of citing sources in academic writing?",
   "opts": [
    "To make the paper look longer",
    "To fill space in the bibliography",
    "To avoid writing a conclusion",
    "To credit original authors and let readers locate sources"
   ],
   "correct": 3,
   "exp": "Citations credit the original authors and allow readers to trace the sources."
  },
  {
   "q": "Which of these is a widely used citation style in academic writing?",
   "opts": [
    "APA",
    "HTML",
    "JPEG",
    "PDF"
   ],
   "correct": 0,
   "exp": "APA is a recognized academic citation style, unlike file or markup formats."
  },
  {
   "q": "What is the difference between an in-text citation and a reference list entry?",
   "opts": [
    "They are identical in every way",
    "In-text citations are brief pointers; reference entries give full source details",
    "Reference entries are shorter than in-text citations",
    "In-text citations appear only on the title page"
   ],
   "correct": 1,
   "exp": "In-text citations are brief markers, while the reference list gives complete source details."
  }
 ],
 "Avoiding Plagiarism": [
  {
   "q": "Which action best helps you avoid plagiarism?",
   "opts": [
    "Using only one source for the whole paper",
    "Removing all quotations from your work",
    "Citing every source of ideas, words, and data you use",
    "Writing without any references"
   ],
   "correct": 2,
   "exp": "Properly citing all borrowed ideas, words, and data prevents plagiarism."
  },
  {
   "q": "When you use an author's exact words, what must you do?",
   "opts": [
    "Change one word so it counts as yours",
    "Leave them uncited if they are short",
    "Paraphrase them without any citation",
    "Put them in quotation marks and cite the source"
   ],
   "correct": 3,
   "exp": "Exact wording requires quotation marks and a citation to avoid plagiarism."
  },
  {
   "q": "Why is self-plagiarism a concern in academic work?",
   "opts": [
    "Reusing your own previous work without disclosure can be dishonest",
    "It never counts as plagiarism",
    "It only applies to images",
    "It is encouraged to save time"
   ],
   "correct": 0,
   "exp": "Submitting your own prior work as new without disclosure is a form of academic dishonesty."
  }
 ],
 "Business Emails": [
  {
   "q": "What makes a subject line effective in a business email?",
   "opts": [
    "It is left blank to save time",
    "It is clear, specific, and reflects the email's purpose",
    "It uses all capital letters",
    "It repeats the entire message"
   ],
   "correct": 1,
   "exp": "A clear, specific subject line tells the reader the email's purpose at a glance."
  },
  {
   "q": "Which tone is most appropriate for a professional business email to a client?",
   "opts": [
    "Casual slang and emojis",
    "Aggressive and demanding",
    "Polite, clear, and professional",
    "Vague and overly informal"
   ],
   "correct": 2,
   "exp": "Business emails should maintain a polite, clear, and professional tone."
  },
  {
   "q": "What is the best practice for closing a formal business email?",
   "opts": [
    "End abruptly with no sign-off",
    "Include only a smiley face",
    "Sign off with a nickname only",
    "Use a professional closing and your name"
   ],
   "correct": 3,
   "exp": "A professional closing followed by your name gives the email a courteous, complete ending."
  }
 ],
 "Letters": [
  {
   "q": "Which element is typically found in a formal business letter but not a casual note?",
   "opts": [
    "A sender's and recipient's address block",
    "A doodle in the margin",
    "Text-message abbreviations",
    "A random subject with no greeting"
   ],
   "correct": 0,
   "exp": "Formal letters include structured address blocks for sender and recipient."
  },
  {
   "q": "When you do not know the recipient's name, which salutation is most appropriate in a formal letter?",
   "opts": [
    "Hey there",
    "Dear Sir or Madam",
    "To whoever",
    "Yo"
   ],
   "correct": 1,
   "exp": "'Dear Sir or Madam' is the conventional formal salutation when the name is unknown."
  },
  {
   "q": "Which complimentary close matches a formal letter that begins with 'Dear Mr. Smith'?",
   "opts": [
    "Later",
    "Cheers mate",
    "Yours sincerely",
    "See ya"
   ],
   "correct": 2,
   "exp": "'Yours sincerely' is the correct formal close when the recipient's name is used."
  }
 ],
 "Memorandums": [
  {
   "q": "Who is the typical audience for a memorandum (memo)?",
   "opts": [
    "External customers of a company",
    "Government tax offices only",
    "The general public",
    "People within the same organization"
   ],
   "correct": 3,
   "exp": "Memos are internal documents circulated to people within the same organization."
  },
  {
   "q": "Which set of headings is standard at the top of a memo?",
   "opts": [
    "To, From, Date, Subject",
    "Dear, Sincerely, Address",
    "Bibliography, Index, Glossary",
    "Abstract, Method, Results"
   ],
   "correct": 0,
   "exp": "Memos begin with the standard To, From, Date, and Subject header lines."
  },
  {
   "q": "What is the main purpose of a memo?",
   "opts": [
    "To apply for an external job",
    "To communicate information or decisions internally",
    "To publish research findings",
    "To advertise to new customers"
   ],
   "correct": 1,
   "exp": "A memo communicates internal information, decisions, or instructions concisely."
  }
 ],
 "Meeting Minutes": [
  {
   "q": "What are meeting minutes?",
   "opts": [
    "A timed agenda for future meetings only",
    "A list of attendees' phone numbers",
    "An official written record of what was discussed and decided",
    "A transcript of every word spoken"
   ],
   "correct": 2,
   "exp": "Minutes are the official record of the discussions, decisions, and actions of a meeting."
  },
  {
   "q": "Which item is essential to record in meeting minutes?",
   "opts": [
    "The weather during the meeting",
    "Personal opinions about coworkers",
    "The color of the meeting room",
    "Action items and who is responsible for them"
   ],
   "correct": 3,
   "exp": "Recording action items and responsible persons ensures follow-up after the meeting."
  },
  {
   "q": "Which style is most appropriate for writing meeting minutes?",
   "opts": [
    "Concise, factual, and objective",
    "Emotional and opinionated",
    "Long and full of personal stories",
    "Written as poetry"
   ],
   "correct": 0,
   "exp": "Minutes should be concise, factual, and objective to serve as a reliable record."
  }
 ],
 "Proposals": [
  {
   "q": "What is the primary aim of a proposal?",
   "opts": [
    "To record past meeting decisions",
    "To persuade a reader to approve an idea, project, or solution",
    "To summarize a completed report",
    "To list personal grievances"
   ],
   "correct": 1,
   "exp": "A proposal seeks to persuade the reader to accept a proposed plan or solution."
  },
  {
   "q": "Which element strengthens a business proposal?",
   "opts": [
    "Vague costs and no timeline",
    "Only decorative images",
    "A clear problem statement, solution, and expected benefits",
    "No mention of the reader's needs"
   ],
   "correct": 2,
   "exp": "A strong proposal clearly defines the problem, the solution, and its benefits."
  },
  {
   "q": "Why should a proposal address the reader's needs and objections?",
   "opts": [
    "To make it longer",
    "To hide the budget",
    "To avoid stating any solution",
    "To increase the chance the proposal is accepted"
   ],
   "correct": 3,
   "exp": "Addressing the reader's needs and concerns makes the proposal more persuasive and likely to be approved."
  }
 ],
 "Resume (CV) Writing": [
  {
   "q": "What is the main purpose of a resume (CV)?",
   "opts": [
    "To summarize your qualifications and experience for a job",
    "To tell your life story in full",
    "To list your hobbies only",
    "To replace a cover letter"
   ],
   "correct": 0,
   "exp": "A resume concisely summarizes your relevant qualifications and experience for employers."
  },
  {
   "q": "Which practice makes a resume more effective?",
   "opts": [
    "Writing in long, unbroken paragraphs",
    "Using strong action verbs and measurable achievements",
    "Including irrelevant personal details",
    "Leaving out any dates"
   ],
   "correct": 1,
   "exp": "Action verbs and quantifiable achievements make accomplishments clear and impressive."
  },
  {
   "q": "Why should you tailor your resume to each job application?",
   "opts": [
    "To make it identical for every job",
    "To increase its length",
    "To highlight the skills and experience most relevant to that role",
    "To hide your work history"
   ],
   "correct": 2,
   "exp": "Tailoring emphasizes the qualifications most relevant to the specific job."
  }
 ],
 "Cover Letters": [
  {
   "q": "What is the main function of a cover letter?",
   "opts": [
    "To replace the job application form",
    "To repeat the resume word for word",
    "To list references only",
    "To introduce yourself and explain why you fit the role"
   ],
   "correct": 3,
   "exp": "A cover letter introduces the applicant and explains their fit for the specific role."
  },
  {
   "q": "How should a cover letter relate to the resume?",
   "opts": [
    "It should complement the resume by highlighting key strengths",
    "It should duplicate the resume exactly",
    "It should contradict the resume",
    "It should be identical in format"
   ],
   "correct": 0,
   "exp": "A cover letter complements the resume by expanding on key strengths, not repeating everything."
  },
  {
   "q": "Which is the best way to open a strong cover letter?",
   "opts": [
    "With a generic 'To whom it may concern' and no purpose",
    "By naming the position and showing genuine interest and fit",
    "By listing your salary demands first",
    "By apologizing for applying"
   ],
   "correct": 1,
   "exp": "Naming the position and showing genuine interest immediately engages the employer."
  }
 ],
 "LinkedIn Profile Writing": [
  {
   "q": "What is the purpose of the LinkedIn headline?",
   "opts": [
    "To list your home address",
    "To share your phone number",
    "To summarize your professional identity in a brief phrase",
    "To repeat your entire resume"
   ],
   "correct": 2,
   "exp": "The headline briefly conveys your professional identity and value to viewers."
  },
  {
   "q": "Which practice improves a LinkedIn 'About' (summary) section?",
   "opts": [
    "Using only random hashtags",
    "Leaving it completely blank",
    "Copying legal disclaimers",
    "Writing in an engaging first-person voice about your strengths and goals"
   ],
   "correct": 3,
   "exp": "A first-person summary of strengths and goals engages readers and shows your professional story."
  },
  {
   "q": "Why is a professional profile photo recommended on LinkedIn?",
   "opts": [
    "It builds trust and makes your profile more approachable",
    "It replaces the need for experience",
    "It hides your identity",
    "It is required to send messages"
   ],
   "correct": 0,
   "exp": "A professional photo builds trust and makes the profile more credible and approachable."
  }
 ],
 "Creating Presentation Slides": [
  {
   "q": "What is the best practice for the amount of text on a single presentation slide?",
   "opts": [
    "Fill the slide with full paragraphs so nothing is forgotten",
    "Use a few short bullet points or key phrases",
    "Write the entire speech word for word",
    "Include as many statistics as will fit"
   ],
   "correct": 1,
   "exp": "Slides should support the speaker with concise key points, not replace the spoken words with dense text."
  },
  {
   "q": "Why is consistency in fonts and colors important across your slides?",
   "opts": [
    "It makes the file size smaller",
    "It lets you avoid using images",
    "It creates a professional, unified look that is easy to follow",
    "It guarantees the audience will agree with you"
   ],
   "correct": 2,
   "exp": "Consistent design keeps the presentation looking professional and helps the audience focus on the content rather than distracting changes."
  },
  {
   "q": "Which choice would most improve the readability of a slide for a large room?",
   "opts": [
    "A decorative script font in pale grey",
    "Tiny text so more fits per slide",
    "Red text on a dark blue background",
    "A large, high-contrast font"
   ],
   "correct": 3,
   "exp": "Large, high-contrast text can be read easily even by people sitting far from the screen."
  }
 ],
 "Speaking with Confidence": [
  {
   "q": "Which technique best helps a speaker manage nervousness before presenting?",
   "opts": [
    "Preparing well and taking slow, deep breaths",
    "Avoiding all eye contact with the audience",
    "Apologizing repeatedly for being nervous",
    "Speaking as fast as possible to finish quickly"
   ],
   "correct": 0,
   "exp": "Thorough preparation and controlled breathing calm the body and build confidence before speaking."
  },
  {
   "q": "How does a confident speaker typically use their voice?",
   "opts": [
    "They mumble so mistakes go unnoticed",
    "They speak clearly at a steady, measured pace",
    "They keep a flat monotone throughout",
    "They rush through every sentence"
   ],
   "correct": 1,
   "exp": "Clear speech at a steady pace projects confidence and helps the audience understand the message."
  },
  {
   "q": "What is a healthy way to think about mistakes made during a presentation?",
   "opts": [
    "Stop the presentation entirely and start over",
    "Draw loud attention to every slip",
    "Stay composed, correct it briefly, and continue",
    "Blame the audience for the distraction"
   ],
   "correct": 2,
   "exp": "Recovering calmly from small mistakes keeps the audience focused and preserves the speaker's credibility."
  }
 ],
 "Body Language": [
  {
   "q": "What does maintaining eye contact with the audience communicate?",
   "opts": [
    "Boredom and impatience",
    "That the speaker is unprepared",
    "A wish to end quickly",
    "Confidence and connection with listeners"
   ],
   "correct": 3,
   "exp": "Eye contact signals confidence and helps build a genuine connection with the audience."
  },
  {
   "q": "Which posture best conveys confidence during a presentation?",
   "opts": [
    "Standing upright with shoulders relaxed",
    "Crossing arms tightly across the chest",
    "Staring down at your shoes",
    "Slouching against the wall"
   ],
   "correct": 0,
   "exp": "An upright, open posture communicates confidence and openness to the audience."
  },
  {
   "q": "How should hand gestures be used effectively while speaking?",
   "opts": [
    "Keep hands hidden in pockets the whole time",
    "Use natural gestures to emphasize key points",
    "Wave constantly and randomly",
    "Grip the podium and never move"
   ],
   "correct": 1,
   "exp": "Purposeful, natural gestures reinforce important points without distracting the audience."
  }
 ],
 "Audience Engagement": [
  {
   "q": "Which strategy is most effective for keeping an audience engaged?",
   "opts": [
    "Reading directly from your notes without pausing",
    "Turning off the lights and speaking quietly",
    "Asking questions and inviting participation",
    "Using only technical jargon"
   ],
   "correct": 2,
   "exp": "Questions and participation invite the audience to think and stay actively involved."
  },
  {
   "q": "Why is telling a relevant story or example useful during a presentation?",
   "opts": [
    "It fills time when you have nothing to say",
    "It proves you memorized the material",
    "It replaces the need for a main point",
    "It makes ideas relatable and memorable"
   ],
   "correct": 3,
   "exp": "Stories and examples make abstract ideas concrete, relatable, and easier to remember."
  },
  {
   "q": "What should a presenter do when the audience appears confused or distracted?",
   "opts": [
    "Pause, check understanding, and rephrase the point",
    "Speak louder without changing anything",
    "End the presentation immediately",
    "Ignore them and keep reading the slides"
   ],
   "correct": 0,
   "exp": "Pausing to check understanding and rephrasing helps re-engage a confused audience."
  }
 ],
 "Handling Questions": [
  {
   "q": "What is the best response when you do not know the answer to an audience question?",
   "opts": [
    "Make up an answer to sound confident",
    "Admit it honestly and offer to follow up later",
    "Ignore the question completely",
    "Tell the person the question is not important"
   ],
   "correct": 1,
   "exp": "Honestly admitting you do not know and promising to follow up protects your credibility."
  },
  {
   "q": "Why is it helpful to repeat or paraphrase a question before answering it?",
   "opts": [
    "To waste time and delay answering",
    "To avoid actually answering",
    "To make sure everyone heard it and you understood it",
    "To confuse the person asking"
   ],
   "correct": 2,
   "exp": "Repeating the question ensures the whole audience hears it and confirms you understood correctly."
  },
  {
   "q": "How should a presenter handle a hostile or challenging question?",
   "opts": [
    "Argue back aggressively",
    "Refuse to respond at all",
    "Insult the questioner in return",
    "Stay calm, respectful, and address the concern"
   ],
   "correct": 3,
   "exp": "Remaining calm and respectful defuses tension and keeps the presenter professional."
  }
 ],
 "Presentation Practice": [
  {
   "q": "Why is rehearsing a presentation out loud beneficial?",
   "opts": [
    "It helps with timing, flow, and reducing nerves",
    "It removes the need for slides",
    "It lets you memorize every word exactly",
    "It guarantees no one will ask questions"
   ],
   "correct": 0,
   "exp": "Practicing aloud improves timing and delivery flow while lowering anxiety on the actual day."
  },
  {
   "q": "What is a useful way to get feedback while practicing a presentation?",
   "opts": [
    "Present only in complete secrecy",
    "Record yourself or ask a friend to listen",
    "Skip practice and rely on luck",
    "Read silently in your head once"
   ],
   "correct": 1,
   "exp": "Recording yourself or getting a listener's feedback reveals areas to improve before the real event."
  },
  {
   "q": "How does timing your practice runs help your final presentation?",
   "opts": [
    "It makes the slides load faster",
    "It removes the need to prepare content",
    "It ensures you finish within the allotted time",
    "It guarantees applause"
   ],
   "correct": 2,
   "exp": "Timing rehearsals helps you stay within limits and avoid rushing or running over."
  }
 ],
 "Office Communication": [
  {
   "q": "When sending a professional email, what makes the subject line effective?",
   "opts": [
    "Leaving it blank to save time",
    "Writing it in all capital letters",
    "Using only emojis",
    "Making it clear and specific about the message"
   ],
   "correct": 3,
   "exp": "A clear, specific subject line tells the recipient what the email is about and helps them prioritize it."
  },
  {
   "q": "Which channel is usually most appropriate for a quick, informal question to a nearby colleague?",
   "opts": [
    "A brief instant message or quick chat",
    "A company-wide email",
    "A scheduled formal meeting",
    "A formal printed memo"
   ],
   "correct": 0,
   "exp": "A quick chat or instant message suits simple, informal questions without overloading formal channels."
  },
  {
   "q": "Why is it important to proofread a work message before sending it?",
   "opts": [
    "To make the message longer",
    "To catch errors and ensure a professional impression",
    "To hide the main point",
    "To avoid using the subject line"
   ],
   "correct": 1,
   "exp": "Proofreading catches mistakes and keeps your communication clear and professional."
  }
 ],
 "Professional Etiquette": [
  {
   "q": "What is proper etiquette when you arrive late to a scheduled meeting?",
   "opts": [
    "Loudly explain your excuse to everyone",
    "Interrupt the speaker to be updated",
    "Enter quietly, apologize briefly, and catch up later",
    "Skip the meeting entirely without notice"
   ],
   "correct": 2,
   "exp": "Entering quietly and apologizing briefly minimizes disruption and respects others' time."
  },
  {
   "q": "Which behavior best reflects professional etiquette during a video call?",
   "opts": [
    "Eating a full meal on camera",
    "Talking over others frequently",
    "Leaving without saying anything",
    "Muting when not speaking to reduce background noise"
   ],
   "correct": 3,
   "exp": "Muting when not speaking reduces distractions and shows consideration for other participants."
  },
  {
   "q": "How should you address a senior colleague you are meeting for the first time in a formal setting?",
   "opts": [
    "Politely and respectfully, using their proper title or name",
    "By shouting across the room",
    "Without any greeting at all",
    "By a nickname you invent"
   ],
   "correct": 0,
   "exp": "Using a respectful, proper form of address makes a good first impression in professional settings."
  }
 ],
 "Team Collaboration": [
  {
   "q": "What is a key ingredient of successful team collaboration?",
   "opts": [
    "Each member working in complete isolation",
    "Open communication and sharing information",
    "Keeping ideas secret from teammates",
    "Competing to make others look bad"
   ],
   "correct": 1,
   "exp": "Open communication and information sharing let a team coordinate and achieve shared goals."
  },
  {
   "q": "When a teammate is struggling with their part of a project, what is the most collaborative response?",
   "opts": [
    "Report them and take over silently",
    "Ignore it since it is not your task",
    "Offer support or share the workload",
    "Complain to the whole team about them"
   ],
   "correct": 2,
   "exp": "Offering help and sharing the workload strengthens the team and keeps the project on track."
  },
  {
   "q": "Why is it important to clarify each member's role in a team project?",
   "opts": [
    "To make sure only one person does everything",
    "To create competition between members",
    "To slow the project down",
    "To avoid duplication and confusion about responsibilities"
   ],
   "correct": 3,
   "exp": "Clear roles prevent overlap and confusion so everyone knows what they are responsible for."
  }
 ],
 "Giving & Receiving Feedback": [
  {
   "q": "Which approach makes constructive feedback most effective?",
   "opts": [
    "Being specific about behavior and offering suggestions",
    "Giving vague praise only",
    "Sharing it publicly to embarrass them",
    "Focusing on the person's character flaws"
   ],
   "correct": 0,
   "exp": "Specific feedback about behavior with suggestions helps the person understand exactly what to improve."
  },
  {
   "q": "What is the best way to receive critical feedback about your work?",
   "opts": [
    "Argue against every point immediately",
    "Listen openly and consider how to improve",
    "Take it as a personal attack and shut down",
    "Ignore it completely"
   ],
   "correct": 1,
   "exp": "Listening openly and reflecting on the feedback turns criticism into an opportunity to grow."
  },
  {
   "q": "Why should positive feedback also be given, not just corrections?",
   "opts": [
    "It has no real value",
    "It replaces the need for any improvement",
    "It reinforces good behavior and boosts motivation",
    "It hides problems permanently"
   ],
   "correct": 2,
   "exp": "Recognizing what someone does well reinforces good work and keeps them motivated."
  }
 ],
 "Negotiation Skills": [
  {
   "q": "What is the goal of a good win-win negotiation?",
   "opts": [
    "One side takes everything and the other loses",
    "The negotiation ends without any agreement",
    "The louder person always prevails",
    "Both parties reach an outcome they can accept"
   ],
   "correct": 3,
   "exp": "A win-win negotiation seeks a mutually acceptable outcome that benefits both parties."
  },
  {
   "q": "Why is listening carefully to the other party important during a negotiation?",
   "opts": [
    "It helps you understand their needs and find common ground",
    "It shows you are weak",
    "It lets them control everything",
    "It wastes valuable time"
   ],
   "correct": 0,
   "exp": "Understanding the other side's needs helps you find solutions that work for both parties."
  },
  {
   "q": "What is a smart way to prepare before entering a negotiation?",
   "opts": [
    "Decide to accept nothing at all",
    "Know your goals and what you are willing to compromise on",
    "Refuse to plan and improvise everything",
    "Assume the other side has no needs"
   ],
   "correct": 1,
   "exp": "Knowing your goals and acceptable compromises lets you negotiate clearly and flexibly."
  }
 ],
 "Conflict Resolution": [
  {
   "q": "What is the most professional first step when a conflict arises with a coworker?",
   "opts": [
    "Spread the story to other coworkers",
    "Ignore it and let resentment build",
    "Calmly discuss the issue directly with the person",
    "Send an angry message immediately"
   ],
   "correct": 2,
   "exp": "Addressing the issue calmly and directly is the most professional way to begin resolving conflict."
  },
  {
   "q": "Why is focusing on the problem rather than the person helpful in resolving conflict?",
   "opts": [
    "It makes the argument more personal",
    "It guarantees you win the argument",
    "It avoids solving anything",
    "It keeps the discussion respectful and solution-focused"
   ],
   "correct": 3,
   "exp": "Focusing on the problem keeps the conversation respectful and centered on finding a solution."
  },
  {
   "q": "What role can compromise play in resolving a workplace conflict?",
   "opts": [
    "It allows both sides to reach an acceptable middle ground",
    "It makes the conflict worse",
    "It is a sign of failure",
    "It means one side must always give up everything"
   ],
   "correct": 0,
   "exp": "Compromise lets both parties adjust their positions to reach a workable, acceptable solution."
  }
 ],
 "Leadership Communication": [
  {
   "q": "What is a key trait of effective leadership communication?",
   "opts": [
    "Giving vague instructions to keep the team guessing",
    "Communicating a clear vision and expectations transparently",
    "Speaking only through written memos, never in person",
    "Withholding information to maintain control"
   ],
   "correct": 1,
   "exp": "Effective leaders communicate a clear vision and expectations transparently so their team understands direction and priorities."
  },
  {
   "q": "How does active listening support strong leadership communication?",
   "opts": [
    "It lets the leader plan a rebuttal while others talk",
    "It signals that the leader does not value speed",
    "It helps the leader understand concerns and build trust",
    "It replaces the need to ever give feedback"
   ],
   "correct": 2,
   "exp": "Active listening helps leaders genuinely understand team members' concerns, which builds trust and informs better decisions."
  },
  {
   "q": "When delivering difficult feedback, which leadership approach is most constructive?",
   "opts": [
    "Criticizing the person publicly to set an example",
    "Blaming the whole team for one person's mistake",
    "Avoiding the issue and hoping it improves",
    "Being specific, respectful, and focused on behavior and solutions"
   ],
   "correct": 3,
   "exp": "Constructive feedback is specific and respectful, focusing on behavior and solutions rather than personal attacks."
  }
 ],
 "Workplace Scenarios": [
  {
   "q": "A colleague takes credit for your idea in a meeting. What is the most professional response?",
   "opts": [
    "Calmly and politely clarify your contribution",
    "Say nothing and resent them silently",
    "Quit the project immediately",
    "Shout at them in front of everyone"
   ],
   "correct": 0,
   "exp": "Calmly clarifying your contribution asserts your work without creating unnecessary conflict."
  },
  {
   "q": "You realize you cannot meet a project deadline. What should you do?",
   "opts": [
    "Hide it and hope no one notices",
    "Inform your manager early and propose a solution",
    "Blame a coworker for the delay",
    "Submit incomplete work without warning"
   ],
   "correct": 1,
   "exp": "Communicating early and proposing a solution is the responsible, professional way to handle a missed deadline."
  },
  {
   "q": "A customer sends an angry email about a problem. What is the best professional approach?",
   "opts": [
    "Reply with equal anger",
    "Delete the email and ignore it",
    "Respond calmly, acknowledge the issue, and offer help",
    "Forward it around the office for laughs"
   ],
   "correct": 2,
   "exp": "Responding calmly and acknowledging the issue helps resolve the problem and maintain professionalism."
  }
 ],
 "Academic Research": [
  {
   "q": "What is the main purpose of a research question in academic research?",
   "opts": [
    "To repeat what the title already says",
    "To fill space in the introduction",
    "To make the paper look longer",
    "To focus the investigation and guide what evidence is collected"
   ],
   "correct": 3,
   "exp": "A clear research question sets the scope and directs the whole inquiry toward relevant evidence."
  },
  {
   "q": "Why should a researcher record where each piece of information came from?",
   "opts": [
    "To give proper credit and let others verify the sources",
    "To make the bibliography colorful",
    "To hide who wrote the ideas",
    "To avoid having to read the sources"
   ],
   "correct": 0,
   "exp": "Recording sources allows correct citation and lets readers check the evidence for themselves."
  },
  {
   "q": "Which step usually comes first in a sound research process?",
   "opts": [
    "Writing the conclusion",
    "Defining the topic and question",
    "Printing the final copy",
    "Choosing the font"
   ],
   "correct": 1,
   "exp": "Defining the topic and question comes first because it shapes every later step of the research."
  }
 ],
 "Evaluating Sources": [
  {
   "q": "Which feature makes a source more likely to be reliable?",
   "opts": [
    "It has a flashy homepage",
    "It appears first in a search",
    "A named, qualified author and cited evidence",
    "It uses many capital letters"
   ],
   "correct": 2,
   "exp": "Identified expert authors who cite evidence signal accountability and credibility."
  },
  {
   "q": "You find a website with no author, no date, and strong emotional language. What is the best action?",
   "opts": [
    "Trust it because it feels convincing",
    "Share it immediately as fact",
    "Copy it directly into your paper",
    "Treat it cautiously and look for supporting reliable sources"
   ],
   "correct": 3,
   "exp": "Missing author and date plus emotional wording are warning signs, so verify against trustworthy sources."
  },
  {
   "q": "What does checking a source for bias mean?",
   "opts": [
    "Seeing whether it leans toward one side or interest",
    "Counting how many pages it has",
    "Measuring the file size",
    "Checking the background color"
   ],
   "correct": 0,
   "exp": "Bias refers to a slant favoring a particular viewpoint, which can distort the information."
  }
 ],
 "Fact vs. Opinion": [
  {
   "q": "Which statement is a fact rather than an opinion?",
   "opts": [
    "Summer is the best season of the year",
    "Liberia is located in West Africa",
    "Everyone should study science",
    "This book is boring to read"
   ],
   "correct": 1,
   "exp": "Liberia's location can be verified with evidence, so it is a fact, not a personal judgment."
  },
  {
   "q": "What is the clearest sign that a statement is an opinion?",
   "opts": [
    "It can be checked in a reference book",
    "It gives a measurable number",
    "It expresses a personal judgment or preference",
    "It reports a historical date"
   ],
   "correct": 2,
   "exp": "Opinions express personal beliefs or preferences that cannot be proven true or false."
  },
  {
   "q": "Why is telling fact from opinion important in research?",
   "opts": [
    "It makes writing longer",
    "It removes the need for sources",
    "It changes the page numbers",
    "It helps you judge which claims need evidence"
   ],
   "correct": 3,
   "exp": "Separating facts from opinions shows which statements must be backed by evidence."
  }
 ],
 "Critical Reading": [
  {
   "q": "What does a critical reader do while reading a text?",
   "opts": [
    "Questions the author's evidence and reasoning",
    "Accepts every claim without thinking",
    "Only looks at the pictures",
    "Reads as fast as possible without pausing"
   ],
   "correct": 0,
   "exp": "Critical reading means actively questioning the claims, evidence, and logic of a text."
  },
  {
   "q": "Identifying an author's purpose helps a reader to do what?",
   "opts": [
    "Ignore the main idea",
    "Understand why the text was written and spot persuasion",
    "Skip the conclusion",
    "Memorize every word"
   ],
   "correct": 1,
   "exp": "Knowing the purpose reveals the author's intent and any attempt to persuade the reader."
  },
  {
   "q": "Which question best reflects critical reading of an article?",
   "opts": [
    "How long is the article?",
    "What color is the heading?",
    "What evidence supports this claim, and is it convincing?",
    "Who published it last year?"
   ],
   "correct": 2,
   "exp": "Weighing whether the evidence truly supports a claim is at the heart of critical reading."
  }
 ],
 "Critical Writing": [
  {
   "q": "What sets critical writing apart from simply describing a topic?",
   "opts": [
    "It lists facts with no judgment",
    "It only summarizes other people's work",
    "It avoids using any sources",
    "It analyzes evidence and argues a reasoned position"
   ],
   "correct": 3,
   "exp": "Critical writing evaluates evidence and builds a supported argument rather than just describing."
  },
  {
   "q": "In critical writing, why include counterarguments?",
   "opts": [
    "To show you considered other views and strengthen your case",
    "To confuse the reader",
    "To make the essay shorter",
    "To avoid stating any position"
   ],
   "correct": 0,
   "exp": "Addressing opposing views shows balanced thinking and makes your own argument more convincing."
  },
  {
   "q": "What is the best way to support a claim in critical writing?",
   "opts": [
    "Repeat the claim in different words",
    "Provide relevant evidence and clear reasoning",
    "State it more loudly with capital letters",
    "Assume readers already agree"
   ],
   "correct": 1,
   "exp": "Claims become persuasive when backed by relevant evidence and logical reasoning."
  }
 ],
 "Problem Solving": [
  {
   "q": "What is usually the first step in solving a problem effectively?",
   "opts": [
    "Guessing an answer at random",
    "Announcing the solution before thinking",
    "Clearly defining what the problem actually is",
    "Blaming someone else"
   ],
   "correct": 2,
   "exp": "You cannot solve a problem well until you clearly understand and define it."
  },
  {
   "q": "Why is it useful to brainstorm several possible solutions?",
   "opts": [
    "It wastes time on purpose",
    "It guarantees the first idea is used",
    "It avoids making any decision",
    "It lets you compare options and choose the best one"
   ],
   "correct": 3,
   "exp": "Generating multiple options lets you weigh trade-offs and select the strongest solution."
  },
  {
   "q": "After trying a solution, what should a good problem solver do?",
   "opts": [
    "Evaluate the results and adjust if needed",
    "Never think about it again",
    "Assume it worked without checking",
    "Hide any mistakes"
   ],
   "correct": 0,
   "exp": "Reviewing outcomes shows whether the solution worked and what to improve next time."
  }
 ],
 "Analytical Thinking": [
  {
   "q": "What does analytical thinking mainly involve?",
   "opts": [
    "Accepting ideas without question",
    "Breaking information into parts to understand relationships",
    "Memorizing facts word for word",
    "Avoiding difficult questions"
   ],
   "correct": 1,
   "exp": "Analytical thinking breaks a whole into parts to examine how they connect and why."
  },
  {
   "q": "Which activity best shows analytical thinking?",
   "opts": [
    "Copying a chart without reading it",
    "Choosing based only on feelings",
    "Comparing data to find a pattern or cause",
    "Repeating what a friend said"
   ],
   "correct": 2,
   "exp": "Spotting patterns and causes in data is a core act of analytical thinking."
  },
  {
   "q": "Why does analytical thinking require evidence?",
   "opts": [
    "Evidence makes conclusions look longer",
    "It replaces the need to think",
    "It hides weak reasoning",
    "Conclusions should be based on facts, not guesses"
   ],
   "correct": 3,
   "exp": "Analytical conclusions must rest on evidence rather than assumptions or guesses."
  }
 ],
 "Online Research": [
  {
   "q": "Which search strategy helps you find more relevant results online?",
   "opts": [
    "Using specific keywords and quotation marks for exact phrases",
    "Clicking only advertisements",
    "Always choosing the last result",
    "Typing one very general word"
   ],
   "correct": 0,
   "exp": "Specific keywords and quoted phrases narrow results to what you actually need."
  },
  {
   "q": "Why should you check the web address (domain) of an online source?",
   "opts": [
    "The domain never matters",
    "It can hint at the source type, such as .edu or .gov",
    "Longer domains are always false",
    "It tells you the file size"
   ],
   "correct": 1,
   "exp": "Domains like .edu or .gov can signal educational or official origins worth considering."
  },
  {
   "q": "You find the same claim on several independent, trustworthy sites. This is an example of what good research habit?",
   "opts": [
    "Copying without reading",
    "Ignoring all evidence",
    "Cross-checking information across sources",
    "Trusting a single random blog"
   ],
   "correct": 2,
   "exp": "Confirming a claim across independent reliable sources is called cross-checking or verification."
  }
 ],
 "Microsoft Word": [
  {
   "q": "Which Microsoft Word feature automatically creates a table of contents from your headings?",
   "opts": [
    "Adding page borders",
    "Typing each page number by hand",
    "Changing the font color",
    "Using built-in heading styles with the References tab"
   ],
   "correct": 3,
   "exp": "Applying heading styles lets Word build and update a table of contents automatically."
  },
  {
   "q": "What is the best reason to use the spell-check and review tools in Word?",
   "opts": [
    "To catch typing and spelling errors before sharing",
    "To make the document print slower",
    "To delete your work",
    "To change the language of the buttons"
   ],
   "correct": 0,
   "exp": "Spell-check and review tools help you find and fix errors before others read the document."
  },
  {
   "q": "Which action lets you keep an original file while saving a new version?",
   "opts": [
    "Delete the file",
    "Use Save As with a new name",
    "Print the document",
    "Close without saving"
   ],
   "correct": 1,
   "exp": "Save As stores a separate copy under a new name, preserving the original file."
  }
 ],
 "Google Docs": [
  {
   "q": "What is a major advantage of Google Docs for group work?",
   "opts": [
    "Only one person can ever open it",
    "It cannot be shared",
    "Several people can edit the same document at the same time",
    "It works only when printed"
   ],
   "correct": 2,
   "exp": "Google Docs allows real-time collaboration so multiple people can edit together online."
  },
  {
   "q": "How does Google Docs help protect your work from being lost?",
   "opts": [
    "It deletes files after an hour",
    "It never keeps any copy",
    "It emails the file to strangers",
    "It saves changes automatically to the cloud"
   ],
   "correct": 3,
   "exp": "Google Docs auto-saves to the cloud, reducing the risk of losing your work."
  },
  {
   "q": "Which sharing setting lets someone read but not change your document?",
   "opts": [
    "Viewer",
    "Editor",
    "Owner",
    "Deleter"
   ],
   "correct": 0,
   "exp": "The Viewer permission allows reading only, without letting the person edit the file."
  }
 ],
 "Grammarly": [
  {
   "q": "What is the most responsible way to use Grammarly on your writing?",
   "opts": [
    "Accept every suggestion without reading it",
    "Review each suggestion and decide if it fits your meaning",
    "Let it write the whole essay for you",
    "Ignore all feedback entirely"
   ],
   "correct": 1,
   "exp": "Grammarly is a helper; you should review suggestions so the final wording stays yours and correct."
  },
  {
   "q": "Grammarly is mainly designed to help with what?",
   "opts": [
    "Solving math equations",
    "Drawing pictures",
    "Grammar, spelling, and clarity of your text",
    "Recording videos"
   ],
   "correct": 2,
   "exp": "Grammarly focuses on checking grammar, spelling, punctuation, and clarity in writing."
  },
  {
   "q": "Why should you still proofread even after using Grammarly?",
   "opts": [
    "Proofreading changes your grade automatically",
    "Grammarly deletes correct words",
    "It is required to reprint the page",
    "Tools can miss context or suggest wrong fixes"
   ],
   "correct": 3,
   "exp": "Automated checkers do not always understand context, so human proofreading remains important."
  }
 ],
 "ChatGPT for Learning": [
  {
   "q": "What is a responsible way to use ChatGPT while studying?",
   "opts": [
    "Ask it to explain a concept, then check and write in your own words",
    "Submit its answer as your own homework",
    "Use it to cheat on a test",
    "Believe everything it says without checking"
   ],
   "correct": 0,
   "exp": "Using ChatGPT to explain ideas and then verifying and rewriting them supports real learning, not cheating."
  },
  {
   "q": "Why should you verify facts that ChatGPT gives you?",
   "opts": [
    "It is always wrong",
    "It can sometimes produce incorrect or made-up information",
    "Checking is against the rules",
    "It never gives facts at all"
   ],
   "correct": 1,
   "exp": "AI models can generate confident but mistaken information, so facts should be confirmed with reliable sources."
  },
  {
   "q": "Which use of ChatGPT best supports honest learning?",
   "opts": [
    "Copying an essay word for word to submit",
    "Having it take your quiz for you",
    "Getting practice questions to test your own understanding",
    "Pretending its writing is yours"
   ],
   "correct": 2,
   "exp": "Generating practice questions helps you learn and self-check, which is honest and effective study."
  }
 ],
 "AI Writing Tools": [
  {
   "q": "How should AI writing tools be used honestly in schoolwork?",
   "opts": [
    "To replace all your own thinking and writing",
    "To avoid learning the topic",
    "To submit AI text as your own without disclosure",
    "As support for brainstorming or editing while you do the real work"
   ],
   "correct": 3,
   "exp": "AI tools should assist your own effort, such as brainstorming or editing, not replace your learning."
  },
  {
   "q": "What is a real limitation of AI writing tools you should keep in mind?",
   "opts": [
    "They may produce inaccurate or biased content",
    "They always know your exact assignment",
    "They can never make mistakes",
    "They understand your teacher's mind"
   ],
   "correct": 0,
   "exp": "AI tools can generate inaccurate or biased text, so their output needs careful checking."
  },
  {
   "q": "Why is it important to review and edit anything an AI tool writes for you?",
   "opts": [
    "Because editing is never allowed",
    "To ensure it is accurate, original, and truly your own understanding",
    "To make it longer only",
    "So you can avoid reading it"
   ],
   "correct": 1,
   "exp": "Reviewing and editing keeps the work accurate and ensures it reflects your genuine understanding."
  }
 ],
 "Responsible AI Use": [
  {
   "q": "Which behavior shows responsible use of AI for schoolwork?",
   "opts": [
    "Hiding AI use to get undeserved credit",
    "Trusting AI output without any checking",
    "Being open about when and how you used AI",
    "Using AI to complete a test dishonestly"
   ],
   "correct": 2,
   "exp": "Responsible AI use includes honesty about how the tool was used and verifying its output."
  },
  {
   "q": "Why should you protect personal information when using AI tools?",
   "opts": [
    "AI needs your passwords to work",
    "Sharing private data improves grades",
    "Privacy does not matter online",
    "Personal data can be misused or exposed"
   ],
   "correct": 3,
   "exp": "Sharing sensitive personal information can lead to misuse, so it should be protected."
  },
  {
   "q": "What is the best response when an AI gives an answer you are unsure about?",
   "opts": [
    "Check it against reliable sources before using it",
    "Share it as certain fact",
    "Ignore the topic completely",
    "Accept it without question"
   ],
   "correct": 0,
   "exp": "Verifying uncertain AI answers with trustworthy sources is a key part of responsible use."
  }
 ],
 "Digital Collaboration": [
  {
   "q": "What is a key benefit of digital collaboration tools for a team?",
   "opts": [
    "They stop people from communicating",
    "They let members work together from different locations in real time",
    "They allow only one person to contribute",
    "They remove the need for any planning"
   ],
   "correct": 1,
   "exp": "Digital collaboration tools connect team members across locations so they can work together live."
  },
  {
   "q": "Which habit makes online group collaboration more effective?",
   "opts": [
    "Ignoring teammates' messages",
    "Editing others' work without telling them",
    "Communicating clearly and respecting shared deadlines",
    "Keeping all files to yourself"
   ],
   "correct": 2,
   "exp": "Clear communication and respecting deadlines keep a digital team organized and productive."
  },
  {
   "q": "Why is it important to use version history in collaborative documents?",
   "opts": [
    "To delete the whole document",
    "To make the file impossible to open",
    "To hide who made edits",
    "To track changes and restore earlier work if needed"
   ],
   "correct": 3,
   "exp": "Version history records edits and lets the team recover earlier versions when necessary."
  }
 ],
 "Job Search Skills": [
  {
   "q": "Which approach is most likely to uncover unadvertised job openings in the hidden job market?",
   "opts": [
    "Networking with contacts and asking for informational interviews",
    "Waiting for recruiters to find your resume",
    "Submitting the same application to hundreds of companies",
    "Applying only to postings on large job boards"
   ],
   "correct": 0,
   "exp": "Many jobs are never publicly posted, so networking and informational interviews reveal openings before they are advertised."
  },
  {
   "q": "Why is it important to tailor each application to the specific job you are applying for?",
   "opts": [
    "It makes the application longer and more impressive",
    "It shows the employer how your skills match their specific needs",
    "It lets you reuse one generic version to save time",
    "It guarantees you will be hired for the role"
   ],
   "correct": 1,
   "exp": "A tailored application directly connects your qualifications to the employer's stated requirements, making you a stronger candidate."
  },
  {
   "q": "What is the best first step when beginning an organized job search?",
   "opts": [
    "Accept the first offer you receive regardless of fit",
    "Apply randomly to every listing you can find",
    "Clarify your goals and identify the roles and industries you want",
    "Delete your professional profiles to start fresh"
   ],
   "correct": 2,
   "exp": "Defining clear goals and target roles focuses your effort so you apply to positions that actually fit your skills and interests."
  }
 ],
 "Resume Writing": [
  {
   "q": "Which of these is the most effective way to describe a work accomplishment on a resume?",
   "opts": [
    "Responsible for handling customer issues",
    "Managed customer service tasks daily",
    "Did various duties related to customers",
    "Resolved customer complaints, raising satisfaction scores by 20 percent"
   ],
   "correct": 3,
   "exp": "Strong resume bullets use action verbs and quantified results to show measurable impact rather than vague duties."
  },
  {
   "q": "Why should a resume generally be kept concise, often one to two pages?",
   "opts": [
    "Recruiters skim quickly and value clear, relevant information",
    "Longer resumes are illegal in most workplaces",
    "Shorter resumes prove you have no experience",
    "Employers charge a fee for each extra page"
   ],
   "correct": 0,
   "exp": "Recruiters spend only seconds on an initial scan, so a concise resume highlights your most relevant qualifications efficiently."
  },
  {
   "q": "What is the purpose of using keywords from the job description in your resume?",
   "opts": [
    "To fill space so the resume looks fuller",
    "To help pass applicant tracking systems and match employer needs",
    "To make the resume harder to read",
    "To confuse competing applicants"
   ],
   "correct": 1,
   "exp": "Applicant tracking systems and hiring managers look for role-specific keywords, so including them improves your chances of being noticed."
  }
 ],
 "Interview Preparation": [
  {
   "q": "What does the STAR method help you do when answering interview questions?",
   "opts": [
    "Memorize a script to recite word for word",
    "Avoid answering behavioral questions entirely",
    "Structure answers with Situation, Task, Action, and Result",
    "Rate the interviewer's performance"
   ],
   "correct": 2,
   "exp": "STAR gives a clear framework to describe a Situation, Task, Action, and Result, making behavioral answers focused and complete."
  },
  {
   "q": "Why is researching the company before an interview important?",
   "opts": [
    "It lets you criticize the company's weaknesses",
    "It replaces the need to prepare answers",
    "It is only useful for senior executive roles",
    "It shows genuine interest and helps you tailor your responses"
   ],
   "correct": 3,
   "exp": "Researching the company demonstrates real interest and lets you connect your skills to the organization's goals and values."
  },
  {
   "q": "When an interviewer asks if you have any questions, what is the best response?",
   "opts": [
    "Ask thoughtful questions about the role and team",
    "Ask only about salary and vacation days",
    "Say no so the interview ends quickly",
    "Repeat questions the interviewer already answered"
   ],
   "correct": 0,
   "exp": "Thoughtful questions about the role and team show engagement and help you evaluate whether the job is right for you."
  }
 ],
 "Workplace English": [
  {
   "q": "Which sentence is most appropriate for a professional email to a manager?",
   "opts": [
    "Hey, gimme that report ASAP or else",
    "Could you please send me the report by Friday?",
    "Send report now thx",
    "Why havent you finished the report yet"
   ],
   "correct": 1,
   "exp": "A polite, clear request with please and a specific deadline fits the professional tone expected in workplace communication."
  },
  {
   "q": "What does it mean to use professional register in workplace communication?",
   "opts": [
    "Using slang and abbreviations to seem friendly",
    "Speaking as loudly as possible",
    "Adjusting your language to be respectful and appropriately formal",
    "Only using technical jargon others cannot understand"
   ],
   "correct": 2,
   "exp": "Professional register means choosing respectful, appropriately formal language suited to the workplace audience and situation."
  },
  {
   "q": "In a meeting, which phrase best shows you want to add to someone's point politely?",
   "opts": [
    "That is completely wrong",
    "You never understand anything",
    "Stop talking, it is my turn",
    "Building on what you said, I would add that"
   ],
   "correct": 3,
   "exp": "The phrase building on what you said acknowledges the other person before contributing, which keeps the exchange collaborative and respectful."
  }
 ],
 "Networking": [
  {
   "q": "What is the main goal of professional networking?",
   "opts": [
    "To build genuine, mutually beneficial relationships over time",
    "To ask everyone you meet for a job immediately",
    "To promote yourself without listening to others",
    "To collect as many business cards as possible"
   ],
   "correct": 0,
   "exp": "Effective networking focuses on building real, mutually beneficial relationships rather than transactional exchanges."
  },
  {
   "q": "What is an elevator pitch used for in networking?",
   "opts": [
    "A long detailed report of your entire career history",
    "A brief, memorable introduction of who you are and what you do",
    "A speech given only inside elevators",
    "A written contract with a new employer"
   ],
   "correct": 1,
   "exp": "An elevator pitch is a short, compelling self-introduction that concisely communicates who you are and what you offer."
  },
  {
   "q": "After meeting a useful contact at an event, what is a strong follow-up action?",
   "opts": [
    "Never contact them again to avoid seeming needy",
    "Immediately ask them to lend you money",
    "Send a personalized message referencing your conversation",
    "Add them to a mass marketing list without consent"
   ],
   "correct": 2,
   "exp": "A personalized follow-up that references your conversation keeps the connection warm and shows genuine interest."
  }
 ],
 "Personal Branding": [
  {
   "q": "What does personal branding refer to in a professional context?",
   "opts": [
    "The logo a company designs for its products",
    "A legal trademark you must register",
    "The clothing brands you wear to work",
    "The reputation and image you project to others professionally"
   ],
   "correct": 3,
   "exp": "Personal branding is the consistent professional reputation and image you convey through your skills, values, and communication."
  },
  {
   "q": "Why is consistency important across your professional profiles and interactions?",
   "opts": [
    "It makes people trust and recognize your professional identity",
    "It allows you to hide your real skills",
    "It is required by law in every country",
    "It prevents anyone from contacting you"
   ],
   "correct": 0,
   "exp": "Consistent messaging across platforms builds a recognizable and trustworthy professional identity that others can rely on."
  },
  {
   "q": "Which action best strengthens your personal brand online?",
   "opts": [
    "Posting complaints about former employers",
    "Sharing insightful content related to your field of expertise",
    "Leaving your profiles empty and unfinished",
    "Copying someone else's profile word for word"
   ],
   "correct": 1,
   "exp": "Sharing valuable, field-relevant content demonstrates your expertise and reinforces the professional image you want to project."
  }
 ],
 "Career Planning": [
  {
   "q": "What is the purpose of setting SMART goals in career planning?",
   "opts": [
    "To make goals vague so they are easy to reach",
    "To avoid making any commitments",
    "To create specific, measurable, achievable, relevant, time-bound goals",
    "To copy other people's career paths exactly"
   ],
   "correct": 2,
   "exp": "SMART goals are specific, measurable, achievable, relevant, and time-bound, which makes career progress clear and trackable."
  },
  {
   "q": "Why is it useful to identify your long-term career vision before short-term steps?",
   "opts": [
    "It removes the need to develop any skills",
    "Short-term steps should never be planned",
    "A vision guarantees automatic promotions",
    "Long-term vision guides which short-term actions to prioritize"
   ],
   "correct": 3,
   "exp": "A clear long-term vision provides direction so your short-term decisions and skill-building move you toward your ultimate goals."
  },
  {
   "q": "What does a skills gap analysis help a professional determine?",
   "opts": [
    "The difference between current skills and those needed for a goal",
    "Which coworkers to avoid",
    "How much vacation time to request",
    "The exact salary of every colleague"
   ],
   "correct": 0,
   "exp": "A skills gap analysis reveals which abilities you still need to develop to qualify for your target role."
  }
 ],
 "Emotional Intelligence": [
  {
   "q": "Which of the following best defines emotional intelligence?",
   "opts": [
    "The ability to score highly on academic tests",
    "The ability to recognize and manage your own and others' emotions",
    "The ability to work faster than everyone else",
    "The ability to memorize large amounts of data"
   ],
   "correct": 1,
   "exp": "Emotional intelligence is the capacity to recognize, understand, and manage emotions in yourself and in others."
  },
  {
   "q": "A colleague reacts angrily during a stressful project. Which emotionally intelligent response is best?",
   "opts": [
    "Shout back to show you will not be intimidated",
    "Ignore them completely and refuse to speak",
    "Stay calm, acknowledge their feelings, and address the issue",
    "Report them immediately without discussion"
   ],
   "correct": 2,
   "exp": "Staying calm and acknowledging emotions demonstrates self-regulation and empathy, two core parts of emotional intelligence."
  },
  {
   "q": "What does self-awareness, a component of emotional intelligence, involve?",
   "opts": [
    "Being unaware of how your mood affects others",
    "Hiding all emotions from everyone at all times",
    "Focusing only on other people's feelings",
    "Recognizing your own emotions and how they influence your behavior"
   ],
   "correct": 3,
   "exp": "Self-awareness means recognizing your own emotions and understanding how they affect your thoughts and actions."
  }
 ],
 "Time Management": [
  {
   "q": "How does the Eisenhower Matrix help you manage time?",
   "opts": [
    "By sorting tasks by urgency and importance",
    "By requiring you to do every task at once",
    "By eliminating the need to plan ahead",
    "By ranking tasks only by how fun they are"
   ],
   "correct": 0,
   "exp": "The Eisenhower Matrix categorizes tasks by urgency and importance so you can prioritize what truly matters."
  },
  {
   "q": "Why is prioritizing tasks more effective than simply working longer hours?",
   "opts": [
    "Longer hours always produce better results",
    "Focusing on high-value tasks produces more meaningful progress",
    "Prioritizing means you never finish anything",
    "Working hours have no effect on productivity"
   ],
   "correct": 1,
   "exp": "Prioritizing directs your limited time toward high-value work, achieving more meaningful results than merely adding hours."
  },
  {
   "q": "What is a benefit of breaking a large project into smaller tasks?",
   "opts": [
    "It makes the project impossible to finish",
    "It hides the project from your manager",
    "It reduces overwhelm and creates manageable, trackable steps",
    "It guarantees the project needs no deadlines"
   ],
   "correct": 2,
   "exp": "Breaking a big project into smaller tasks reduces overwhelm and makes progress easier to plan, track, and complete."
  }
 ],
 "Teamwork": [
  {
   "q": "What is a key characteristic of an effective team?",
   "opts": [
    "Members compete secretly against each other",
    "One person makes every decision without input",
    "Members avoid helping one another",
    "Members communicate openly and share a common goal"
   ],
   "correct": 3,
   "exp": "Effective teams rely on open communication and a shared goal that aligns everyone's efforts."
  },
  {
   "q": "When a disagreement arises within a team, what is the most productive response?",
   "opts": [
    "Discuss different viewpoints respectfully to reach a solution",
    "Ignore it and hope it disappears",
    "Force everyone to agree with the loudest member",
    "Split the team permanently into rival groups"
   ],
   "correct": 0,
   "exp": "Respectfully discussing different viewpoints turns conflict into better solutions and strengthens the team."
  },
  {
   "q": "Why is understanding each member's role important in teamwork?",
   "opts": [
    "It lets one person avoid all responsibility",
    "It prevents duplicated effort and clarifies accountability",
    "It makes collaboration unnecessary",
    "It ensures no one ever communicates"
   ],
   "correct": 1,
   "exp": "Clear roles prevent overlapping work and make each member accountable, helping the team function smoothly."
  }
 ],
 "Decision Making": [
  {
   "q": "What is a benefit of weighing pros and cons before making a decision?",
   "opts": [
    "It removes all risk from every choice",
    "It guarantees the decision will please everyone",
    "It helps you evaluate options more objectively",
    "It lets you avoid ever deciding"
   ],
   "correct": 2,
   "exp": "Listing pros and cons helps you assess options objectively and understand the likely consequences of each choice."
  },
  {
   "q": "Why is gathering relevant information important before making an important decision?",
   "opts": [
    "It is only useful for trivial decisions",
    "It slows you down so you never decide",
    "It replaces the need to consider consequences",
    "It reduces uncertainty and supports a well-informed choice"
   ],
   "correct": 3,
   "exp": "Gathering relevant information reduces uncertainty and gives you a stronger basis for a sound, well-informed decision."
  },
  {
   "q": "What does it mean to consider the long-term consequences of a decision?",
   "opts": [
    "Thinking about how the choice will affect the future",
    "Focusing only on immediate rewards",
    "Ignoring any outcomes beyond today",
    "Letting others decide for you"
   ],
   "correct": 0,
   "exp": "Considering long-term consequences means evaluating how a decision will affect future outcomes, not just immediate results."
  }
 ],
 "Professional Ethics": [
  {
   "q": "What does acting with integrity in the workplace mean?",
   "opts": [
    "Only following rules when a manager is present",
    "Doing what is right even when no one is watching",
    "Prioritizing personal gain over honesty",
    "Bending rules whenever it is convenient"
   ],
   "correct": 1,
   "exp": "Integrity means consistently doing what is right and honest, regardless of whether anyone is watching."
  },
  {
   "q": "A coworker asks you to share confidential client data with an outside friend. What is the ethical response?",
   "opts": [
    "Share it since a coworker requested it",
    "Share only part of the data to compromise",
    "Decline and protect the client's confidential information",
    "Sell the data to the highest bidder"
   ],
   "correct": 2,
   "exp": "Protecting confidential information is an ethical duty, so you should decline to share it regardless of who asks."
  },
  {
   "q": "Why is it important to disclose a conflict of interest at work?",
   "opts": [
    "To gain a personal advantage over colleagues",
    "To avoid ever having to make decisions",
    "Because conflicts of interest are always illegal to have",
    "To maintain transparency and trust in decision making"
   ],
   "correct": 3,
   "exp": "Disclosing a conflict of interest maintains transparency and trust, allowing decisions to be made fairly and openly."
  }
 ],
 "Workplace Productivity": [
  {
   "q": "Which habit is most likely to improve workplace productivity?",
   "opts": [
    "Minimizing distractions and focusing on one task at a time",
    "Multitasking on many complex tasks simultaneously",
    "Checking email and messages every few minutes",
    "Leaving all tasks until the last possible moment"
   ],
   "correct": 0,
   "exp": "Minimizing distractions and focusing on one task at a time improves concentration and the quality of your work."
  },
  {
   "q": "How can setting clear daily priorities boost productivity?",
   "opts": [
    "It ensures you never complete anything",
    "It directs your energy toward the most important work first",
    "It removes the need to plan your day",
    "It makes every task equally urgent"
   ],
   "correct": 1,
   "exp": "Setting clear priorities ensures you tackle the most important work first, making better use of your time and energy."
  },
  {
   "q": "Why can taking regular short breaks actually increase overall productivity?",
   "opts": [
    "Breaks always waste valuable working time",
    "Breaks are only for people who work slowly",
    "Breaks help restore focus and prevent burnout",
    "Breaks reduce the quality of every task"
   ],
   "correct": 2,
   "exp": "Short, regular breaks restore focus and prevent burnout, helping you sustain higher productivity throughout the day."
  }
 ],
 "British English vs. American English": [
  {
   "q": "Which spelling is standard in British English?",
   "opts": [
    "Collor",
    "Color",
    "Culor",
    "Colour"
   ],
   "correct": 3,
   "exp": "British English keeps the 'u' in words like colour, whereas American English writes color."
  },
  {
   "q": "An American says 'apartment'; what word would a British speaker most likely use?",
   "opts": [
    "Flat",
    "Loft",
    "Cabin",
    "Suite"
   ],
   "correct": 0,
   "exp": "In British English a rented living unit is called a flat, while Americans say apartment."
  },
  {
   "q": "Which verb form is the more common British spelling?",
   "opts": [
    "Organize",
    "Analyse",
    "Realize",
    "Recognize"
   ],
   "correct": 1,
   "exp": "British English favours the '-yse' ending in analyse, whereas American English uses analyze."
  }
 ],
 "Common International Expressions": [
  {
   "q": "In an email, what does the abbreviation 'ASAP' mean?",
   "opts": [
    "Always send a photo",
    "After some advance planning",
    "As soon as possible",
    "At someone's approval point"
   ],
   "correct": 2,
   "exp": "ASAP is a widely used abbreviation meaning 'as soon as possible'."
  },
  {
   "q": "If a colleague says a task is 'a piece of cake', what do they mean?",
   "opts": [
    "It is delicious",
    "It is expensive",
    "It is unfinished",
    "It is very easy"
   ],
   "correct": 3,
   "exp": "'A piece of cake' is a common idiom meaning something is very easy to do."
  },
  {
   "q": "What is the most appropriate response to 'How do you do?' at a first meeting?",
   "opts": [
    "How do you do?",
    "By taxi, thank you",
    "It is on the table",
    "I am doing my homework"
   ],
   "correct": 0,
   "exp": "'How do you do?' is a formal greeting traditionally answered by repeating the same phrase."
  }
 ],
 "Cross-Cultural Communication": [
  {
   "q": "Why should you avoid idioms and slang when speaking with someone from another culture?",
   "opts": [
    "They are grammatically incorrect",
    "They may not translate and cause confusion",
    "They are always rude",
    "They take too long to say"
   ],
   "correct": 1,
   "exp": "Idioms and slang are culture-specific and can be misunderstood by non-native or foreign listeners."
  },
  {
   "q": "In cross-cultural communication, what does 'high-context' culture rely on most?",
   "opts": [
    "Written contracts only",
    "Explicit, direct words",
    "Shared background and nonverbal cues",
    "Loud speaking volume"
   ],
   "correct": 2,
   "exp": "High-context cultures convey meaning through shared context, relationships, and nonverbal cues rather than explicit words."
  },
  {
   "q": "What is the best way to confirm understanding across cultures?",
   "opts": [
    "Repeat the same words louder",
    "Speak faster",
    "Assume they understood",
    "Politely paraphrase and check back"
   ],
   "correct": 3,
   "exp": "Paraphrasing and asking for confirmation ensures the message was understood despite cultural or language differences."
  }
 ],
 "English for Travel": [
  {
   "q": "At an airport, what does the 'boarding pass' allow you to do?",
   "opts": [
    "Board the aircraft",
    "Exchange currency",
    "Rent a car",
    "Claim lost luggage"
   ],
   "correct": 0,
   "exp": "A boarding pass is the document that permits a passenger to board the plane."
  },
  {
   "q": "Which phrase would you use to politely ask for directions in a foreign city?",
   "opts": [
    "Give me the map now",
    "Excuse me, how do I get to the station?",
    "You must tell me the way",
    "Where is it, hurry"
   ],
   "correct": 1,
   "exp": "'Excuse me, how do I get to...' is a polite and standard way to ask for directions."
  },
  {
   "q": "At a hotel, what does it mean to 'check out'?",
   "opts": [
    "Order room service",
    "Look at the view",
    "Leave and settle the bill",
    "Book another night"
   ],
   "correct": 2,
   "exp": "To check out means to formally leave the hotel and pay your remaining bill."
  }
 ],
 "English for International Business": [
  {
   "q": "In a business email, which opening is most appropriately formal to an unknown recipient?",
   "opts": [
    "What's up",
    "Hey there!",
    "Yo team",
    "Dear Sir or Madam,"
   ],
   "correct": 3,
   "exp": "'Dear Sir or Madam' is a formal salutation used when the recipient's name is unknown."
  },
  {
   "q": "What does it mean to 'reach a consensus' in a business meeting?",
   "opts": [
    "To arrive at general agreement",
    "To vote against a plan",
    "To end the meeting early",
    "To postpone a decision"
   ],
   "correct": 0,
   "exp": "Reaching a consensus means the group arrives at a general agreement everyone can accept."
  },
  {
   "q": "In international trade, what does the term 'invoice' refer to?",
   "opts": [
    "A shipping container",
    "A bill listing goods and amounts due",
    "A meeting agenda",
    "A marketing plan"
   ],
   "correct": 1,
   "exp": "An invoice is a document that itemizes products or services and states the amount owed."
  }
 ],
 "Global Workplace Communication": [
  {
   "q": "When scheduling a meeting across countries, why is it important to state the time zone?",
   "opts": [
    "To sound professional",
    "To make the email longer",
    "To avoid confusion about the actual meeting time",
    "It is legally required"
   ],
   "correct": 2,
   "exp": "Naming the time zone prevents colleagues in different regions from mistaking the meeting time."
  },
  {
   "q": "Which practice best supports clear communication on a global team?",
   "opts": [
    "Using local slang freely",
    "Using only voice calls",
    "Avoiding written summaries",
    "Writing concise, plain-language messages"
   ],
   "correct": 3,
   "exp": "Concise, plain-language writing reduces misunderstanding among people with varied English levels."
  },
  {
   "q": "What is 'asynchronous communication' in a global workplace?",
   "opts": [
    "Messages that do not require an immediate real-time reply",
    "Everyone speaking at once",
    "A type of video call",
    "Communication in one language only"
   ],
   "correct": 0,
   "exp": "Asynchronous communication lets people respond at different times, useful across time zones."
  }
 ],
 "Intercultural Awareness": [
  {
   "q": "What does intercultural awareness primarily involve?",
   "opts": [
    "Judging other customs as wrong",
    "Recognizing and respecting cultural differences",
    "Speaking only your own language",
    "Ignoring other cultures"
   ],
   "correct": 1,
   "exp": "Intercultural awareness means understanding and respecting differences among cultures."
  },
  {
   "q": "A gesture that is friendly in one country may be offensive in another. What lesson does this teach?",
   "opts": [
    "You should never use gestures",
    "Gestures have universal meaning",
    "Nonverbal signals can vary by culture",
    "Gestures are always rude"
   ],
   "correct": 2,
   "exp": "The same gesture can carry different meanings across cultures, so nonverbal cues are culture-dependent."
  },
  {
   "q": "What is a 'stereotype' in intercultural terms?",
   "opts": [
    "An accurate description of a group",
    "A translation tool",
    "A type of formal greeting",
    "An oversimplified fixed idea about a group"
   ],
   "correct": 3,
   "exp": "A stereotype is an oversimplified, generalized belief about a group that often ignores individual differences."
  }
 ],
 "TOEFL Introduction": [
  {
   "q": "The TOEFL iBT primarily measures a test-taker's ability in which language?",
   "opts": [
    "English",
    "Spanish",
    "French",
    "German"
   ],
   "correct": 0,
   "exp": "TOEFL (Test of English as a Foreign Language) measures English proficiency for non-native speakers."
  },
  {
   "q": "Which four sections make up the TOEFL iBT?",
   "opts": [
    "Grammar, Vocabulary, Reading, Math",
    "Reading, Listening, Speaking, Writing",
    "Speaking, Math, Science, Writing",
    "Listening, Drawing, Reading, Logic"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT contains four sections: Reading, Listening, Speaking, and Writing."
  },
  {
   "q": "What is the maximum total score on the TOEFL iBT?",
   "opts": [
    "100",
    "150",
    "120",
    "200"
   ],
   "correct": 2,
   "exp": "Each of the four TOEFL sections is scored out of 30, for a maximum total of 120."
  }
 ],
 "IELTS Introduction": [
  {
   "q": "What does the abbreviation IELTS stand for?",
   "opts": [
    "Internal English Learning Test Series",
    "International Exam for Language Translation Studies",
    "Institute for English Language Teaching Standards",
    "International English Language Testing System"
   ],
   "correct": 3,
   "exp": "IELTS stands for the International English Language Testing System."
  },
  {
   "q": "IELTS results are reported on a band scale ranging from 1 to what number?",
   "opts": [
    "9",
    "12",
    "7",
    "100"
   ],
   "correct": 0,
   "exp": "IELTS uses a nine-band scoring scale, from band 1 (non-user) to band 9 (expert)."
  },
  {
   "q": "Which two versions of the IELTS test are available to candidates?",
   "opts": [
    "National and International",
    "Academic and General Training",
    "Written and Oral",
    "Beginner and Advanced"
   ],
   "correct": 1,
   "exp": "IELTS offers an Academic version and a General Training version for different purposes."
  }
 ],
 "SAT Reading & Writing Overview": [
  {
   "q": "On the digital SAT, the Reading and Writing section is delivered as what?",
   "opts": [
    "An oral interview",
    "Three separate essays",
    "A single combined section",
    "A listening exercise"
   ],
   "correct": 2,
   "exp": "The digital SAT combines Reading and Writing into one section with short passages and questions."
  },
  {
   "q": "Which skill is most directly tested by SAT Reading & Writing questions about a passage's main idea?",
   "opts": [
    "Mental arithmetic",
    "Spoken fluency",
    "Handwriting speed",
    "Reading comprehension"
   ],
   "correct": 3,
   "exp": "Identifying a passage's main idea tests reading comprehension, a core SAT Reading & Writing skill."
  },
  {
   "q": "A SAT Reading & Writing question asks you to choose the option that best corrects a sentence. What is it testing?",
   "opts": [
    "Standard English grammar and usage",
    "Vocabulary translation",
    "Geometry",
    "Listening skills"
   ],
   "correct": 0,
   "exp": "Sentence-correction items assess command of standard English grammar, punctuation, and usage."
  }
 ],
 "Academic Vocabulary Review": [
  {
   "q": "Which word most nearly means 'to examine in detail'?",
   "opts": [
    "Ignore",
    "Analyze",
    "Conceal",
    "Simplify"
   ],
   "correct": 1,
   "exp": "To analyze means to examine something carefully in detail, part by part."
  },
  {
   "q": "In academic writing, what does the word 'hypothesis' mean?",
   "opts": [
    "A final conclusion",
    "A proven fact",
    "A proposed explanation to be tested",
    "A type of citation"
   ],
   "correct": 2,
   "exp": "A hypothesis is a proposed, testable explanation that research aims to support or reject."
  },
  {
   "q": "Which word is the best synonym for 'significant' in an academic context?",
   "opts": [
    "Tiny",
    "Random",
    "Colorful",
    "Important"
   ],
   "correct": 3,
   "exp": "In academic usage, significant means important or notable, as in a significant finding."
  }
 ],
 "Grammar Review": [
  {
   "q": "Which sentence uses the correct subject-verb agreement?",
   "opts": [
    "The team plays well together.",
    "She walk to school.",
    "The students is ready.",
    "They was late."
   ],
   "correct": 0,
   "exp": "'The team plays' correctly matches a singular collective subject with the singular verb form."
  },
  {
   "q": "Which sentence is written in the past perfect tense?",
   "opts": [
    "I eat lunch now.",
    "She had finished before he arrived.",
    "They will travel tomorrow.",
    "We are studying."
   ],
   "correct": 1,
   "exp": "'Had finished' is the past perfect, showing an action completed before another past event."
  },
  {
   "q": "Which word in the sentence is an adverb: 'She quickly solved the difficult problem'?",
   "opts": [
    "Problem",
    "Solved",
    "Quickly",
    "Difficult"
   ],
   "correct": 2,
   "exp": "'Quickly' modifies the verb 'solved', telling how the action was done, so it is an adverb."
  }
 ],
 "Practice Tests": [
  {
   "q": "What is the main purpose of taking a full-length practice test before a real exam?",
   "opts": [
    "To memorize the answers",
    "To lower the passing score",
    "To skip studying",
    "To build stamina and identify weak areas"
   ],
   "correct": 3,
   "exp": "Practice tests help build endurance and reveal which topics need more review before the real exam."
  },
  {
   "q": "Why is it useful to time yourself during a practice test?",
   "opts": [
    "To simulate real exam pacing",
    "To increase the difficulty",
    "To avoid reading questions",
    "To finish as slowly as possible"
   ],
   "correct": 0,
   "exp": "Timing practice tests mirrors real conditions so you learn to manage the exam's time limits."
  },
  {
   "q": "After completing a practice test, what is the most valuable next step?",
   "opts": [
    "Throw the test away",
    "Review mistakes and understand why",
    "Take another test immediately",
    "Only count your score"
   ],
   "correct": 1,
   "exp": "Reviewing errors and understanding the reasons behind them turns practice into real improvement."
  }
 ],
 "Test-Taking Strategies": [
  {
   "q": "On a timed multiple-choice test, what is a smart strategy for a very difficult question?",
   "opts": [
    "Leave the whole test",
    "Guess randomly on everything",
    "Skip it and return later",
    "Refuse to answer any question"
   ],
   "correct": 2,
   "exp": "Skipping a hard question and returning later saves time for questions you can answer quickly."
  },
  {
   "q": "How can the 'process of elimination' help on a multiple-choice question?",
   "opts": [
    "It stops the timer",
    "It adds more choices",
    "It changes the correct answer",
    "It removes clearly wrong options to improve your odds"
   ],
   "correct": 3,
   "exp": "Eliminating obviously wrong choices increases the probability of choosing the correct remaining answer."
  },
  {
   "q": "Why is it important to read the question carefully before answering?",
   "opts": [
    "To catch key words like 'not' or 'except'",
    "To use more time",
    "To impress the teacher",
    "To avoid reading the options"
   ],
   "correct": 0,
   "exp": "Careful reading catches qualifying words such as 'not' or 'except' that change the correct answer."
  }
 ]
};

})();
