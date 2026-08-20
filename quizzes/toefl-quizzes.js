/* TIH — authored per-topic quiz questions for a single course.
   Split out of the 567 KB topic-quizzes.js, which the course player loaded
   in full even for the 20 courses that have no entry in it. The curriculum
   builder reads this at build time, so the loader fetches it first. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['toefl'] = {
 "Welcome to the Course": [
  {
   "q": "What is the main purpose of the TOEFL iBT exam that this course prepares you for?",
   "opts": [
    "To certify native-speaker fluency for citizenship",
    "To measure your ability to use and understand English at the university level",
    "To test your knowledge of British literature and history",
    "To grade your handwriting and spelling in English"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT measures academic English proficiency for use in an English-speaking university environment."
  },
  {
   "q": "Which four language skills does this complete TOEFL course train you in?",
   "opts": [
    "Reading, Grammar, Translation, and Dictation",
    "Grammar, Vocabulary, Spelling, and Punctuation",
    "Reading, Writing, Listening, and Speaking",
    "Listening, Singing, Debating, and Acting"
   ],
   "correct": 2,
   "exp": "The TOEFL iBT and this course cover the four integrated skills: Reading, Writing, Listening, and Speaking."
  },
  {
   "q": "According to the course orientation, what is the best way to get the most out of the lessons?",
   "opts": [
    "Skip the practice tests and only watch videos",
    "Study only the day before your test date",
    "Memorize the answer keys without reading the questions",
    "Follow the modules in order and complete the practice activities"
   ],
   "correct": 3,
   "exp": "Working through the modules in sequence and doing the practice activities builds skills systematically."
  }
 ],
 "How to Study Effectively": [
  {
   "q": "Which study habit is most likely to improve your TOEFL performance over time?",
   "opts": [
    "Studying consistently in shorter, regular sessions with active practice",
    "Only reading about strategies without ever practicing them",
    "Listening to English passively while doing other tasks",
    "Cramming all content in a single long session the night before"
   ],
   "correct": 0,
   "exp": "Spaced, regular practice with active engagement leads to better long-term retention than cramming."
  },
  {
   "q": "Why is it useful to review your mistakes after each practice test?",
   "opts": [
    "Because ETS adds bonus points for reviewing",
    "Because understanding why you erred helps you avoid repeating the error",
    "Because it lets you skip the harder sections entirely",
    "Because reviewing guarantees a perfect score next time"
   ],
   "correct": 1,
   "exp": "Analyzing errors reveals weak areas so you can target them and stop repeating the same mistakes."
  },
  {
   "q": "What is an effective way to build the academic vocabulary needed for TOEFL?",
   "opts": [
    "Avoiding all unfamiliar words until test day",
    "Memorizing a random dictionary from A to Z",
    "Reading and listening to authentic English and noting new words in context",
    "Translating every English word into your native language only"
   ],
   "correct": 2,
   "exp": "Encountering words in real academic context makes them easier to remember and use correctly."
  }
 ],
 "What is TOEFL?": [
  {
   "q": "What does the acronym TOEFL stand for?",
   "opts": [
    "Test Of Extended Foreign Languages",
    "Teaching Of English For Learners",
    "Trial Of Educational Fluency Levels",
    "Test Of English as a Foreign Language"
   ],
   "correct": 3,
   "exp": "TOEFL stands for Test Of English as a Foreign Language."
  },
  {
   "q": "Which organization creates and administers the TOEFL iBT test?",
   "opts": [
    "ETS (Educational Testing Service)",
    "Cambridge Assessment English",
    "The United Nations Language Board",
    "The British Council"
   ],
   "correct": 0,
   "exp": "The TOEFL iBT is developed and administered by ETS (Educational Testing Service)."
  },
  {
   "q": "Who most commonly needs to take the TOEFL iBT?",
   "opts": [
    "Only people seeking to become English teachers in the UK",
    "Non-native English speakers applying to English-medium universities",
    "Native English speakers renewing a passport",
    "Children learning to read in primary school"
   ],
   "correct": 1,
   "exp": "TOEFL is mainly taken by non-native speakers who need to prove English ability for university admission."
  }
 ],
 "TOEFL Test Structure": [
  {
   "q": "Which four sections make up the TOEFL iBT test?",
   "opts": [
    "Grammar, Vocabulary, Reading, and Essay",
    "Listening, Translation, Speaking, and Dictation",
    "Reading, Listening, Speaking, and Writing",
    "Reading, Math, Speaking, and Writing"
   ],
   "correct": 2,
   "exp": "The TOEFL iBT consists of four sections: Reading, Listening, Speaking, and Writing."
  },
  {
   "q": "In what order are the sections of the TOEFL iBT presented?",
   "opts": [
    "Speaking, Writing, Listening, Reading",
    "Writing, Reading, Speaking, Listening",
    "Listening, Reading, Writing, Speaking",
    "Reading, Listening, Speaking, Writing"
   ],
   "correct": 3,
   "exp": "The test always follows the order Reading, then Listening, then Speaking, then Writing."
  },
  {
   "q": "Which sections of the TOEFL iBT are described as integrated because they combine more than one skill?",
   "opts": [
    "Some Speaking and Writing tasks combine reading and listening with your response",
    "Only the Reading section combines skills",
    "None of the sections combine skills",
    "Only the Listening section combines skills"
   ],
   "correct": 0,
   "exp": "Integrated Speaking and Writing tasks require you to read and or listen and then respond."
  }
 ],
 "Scoring System": [
  {
   "q": "What is the total score range for the TOEFL iBT?",
   "opts": [
    "0 to 100",
    "0 to 120",
    "200 to 800",
    "1 to 9"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT total score ranges from 0 to 120."
  },
  {
   "q": "How many points is each of the four sections worth on the TOEFL iBT?",
   "opts": [
    "0 to 50 points per section",
    "0 to 25 points per section",
    "0 to 30 points per section",
    "0 to 120 points per section"
   ],
   "correct": 2,
   "exp": "Each of the four sections is scored from 0 to 30, which sum to the 0 to 120 total."
  },
  {
   "q": "How is the total TOEFL iBT score of 0 to 120 calculated?",
   "opts": [
    "By averaging the four section scores",
    "By taking only the highest section score",
    "By subtracting wrong answers from a base of 120",
    "By adding the four section scores of 0 to 30 each together"
   ],
   "correct": 3,
   "exp": "The total is the sum of the four section scores, each ranging from 0 to 30."
  }
 ],
 "Study Plan": [
  {
   "q": "What should a good TOEFL study plan be based on first?",
   "opts": [
    "A diagnostic assessment of your current strengths and weaknesses",
    "Only the sections you already find easy",
    "Whatever section comes last on the test",
    "The plan of a random classmate"
   ],
   "correct": 0,
   "exp": "Identifying your current level through a diagnostic lets you target weak areas efficiently."
  },
  {
   "q": "Why is setting a target score important when building your study plan?",
   "opts": [
    "Because ETS requires you to submit a target in advance",
    "Because it helps you allocate study time toward the score your program requires",
    "Because a higher target automatically lowers the test difficulty",
    "Because the target replaces the need to practice"
   ],
   "correct": 1,
   "exp": "Knowing the score your university requires lets you focus effort where it is most needed."
  },
  {
   "q": "Which approach makes a study plan realistic and sustainable?",
   "opts": [
    "Planning to master everything in a single day",
    "Studying twelve hours only on weekends and nothing else",
    "Scheduling regular, manageable study blocks with clear weekly goals",
    "Leaving all Speaking practice until the final hour"
   ],
   "correct": 2,
   "exp": "Consistent, manageable sessions with weekly goals keep progress steady and prevent burnout."
  }
 ],
 "Test Registration": [
  {
   "q": "How do most test takers register for the TOEFL iBT?",
   "opts": [
    "By mailing a handwritten letter to a university",
    "Through a social media message to ETS",
    "By showing up at a test center on any random day",
    "Through an ETS account on the official TOEFL website"
   ],
   "correct": 3,
   "exp": "You register by creating an ETS account and signing up online through the official TOEFL website."
  },
  {
   "q": "What is generally required to complete your TOEFL registration and secure a seat?",
   "opts": [
    "Payment of the test fee and choosing a date and location",
    "Proof of a previous TOEFL score",
    "A letter of recommendation from a teacher",
    "A minimum of two years of English classes"
   ],
   "correct": 0,
   "exp": "Registration is confirmed once you pick a date and center and pay the required test fee."
  },
  {
   "q": "What identification rule must test takers follow on TOEFL test day?",
   "opts": [
    "Bring any photo including a printed selfie",
    "Bring valid, acceptable ID that matches the name used at registration",
    "No identification is needed at the test center",
    "Bring only a student library card"
   ],
   "correct": 1,
   "exp": "You must present valid, official ID whose name matches your registration or you may be turned away."
  }
 ],
 "Time Management": [
  {
   "q": "Why is pacing yourself important during each TOEFL section?",
   "opts": [
    "Because unanswered questions still earn partial credit",
    "Because the timer stops when you look away",
    "Because running out of time leaves questions unanswered and lowers your score",
    "Because extra time is automatically added for slow readers"
   ],
   "correct": 2,
   "exp": "Each section is timed, so poor pacing can leave questions blank and cost you points."
  },
  {
   "q": "What is a smart time-management move if one Reading question is taking too long?",
   "opts": [
    "Stop the whole test and restart it",
    "Spend all remaining time on that single question",
    "Leave the entire passage unanswered",
    "Make your best choice, note it, and move on to keep pace"
   ],
   "correct": 3,
   "exp": "Answering and moving on protects your time so you can reach every question."
  },
  {
   "q": "How should you manage the limited preparation time in the Speaking section?",
   "opts": [
    "Use the short prep seconds to jot quick notes and organize your answer",
    "Use the full response time to stay silent and think",
    "Ignore the prep time and start speaking immediately with no plan",
    "Spend prep time rereading unrelated questions"
   ],
   "correct": 0,
   "exp": "The brief preparation seconds are best used to outline key points so your response stays organized."
  }
 ],
 "Guessing Strategies": [
  {
   "q": "Why should you always answer every TOEFL multiple-choice question even when unsure?",
   "opts": [
    "Because wrong answers subtract two points each",
    "Because there is no penalty for wrong answers, so a guess can only help",
    "Because blank answers score higher than wrong ones",
    "Because guessing is forbidden by ETS rules"
   ],
   "correct": 1,
   "exp": "TOEFL does not penalize wrong answers, so guessing gives a chance at points with nothing to lose."
  },
  {
   "q": "What is the smartest way to improve the odds when you must guess?",
   "opts": [
    "Always pick the longest option",
    "Always choose option A",
    "Eliminate options you know are wrong, then choose among the rest",
    "Pick the answer that repeats the most words from the question"
   ],
   "correct": 2,
   "exp": "Removing clearly wrong choices raises the probability that your remaining guess is correct."
  },
  {
   "q": "If time is running out at the end of a section, what should you do with remaining questions?",
   "opts": [
    "Leave them blank to avoid mistakes",
    "Report the shortage to the proctor for extra time",
    "Erase your earlier answers to save time",
    "Quickly fill in an answer for every remaining question"
   ],
   "correct": 3,
   "exp": "Since blanks score zero and there is no penalty, filling in every remaining answer maximizes your chances."
  }
 ],
 "Common Mistakes": [
  {
   "q": "Which is a common TOEFL Reading mistake test takers should avoid?",
   "opts": [
    "Choosing an answer just because it repeats words from the passage",
    "Reading the questions before answering them",
    "Referring back to the passage to check details",
    "Managing time across all the questions"
   ],
   "correct": 0,
   "exp": "Matching surface wording is a trap; correct answers often paraphrase rather than repeat the text."
  },
  {
   "q": "What common mistake hurts scores on the integrated Speaking and Writing tasks?",
   "opts": [
    "Including information from both the reading and the listening as required",
    "Giving only your personal opinion instead of summarizing the given sources",
    "Organizing your response with clear structure",
    "Taking notes while listening"
   ],
   "correct": 1,
   "exp": "Integrated tasks require you to report the sources, not just share your own unsupported opinion."
  },
  {
   "q": "Which common test-day error should students guard against in the Listening section?",
   "opts": [
    "Taking notes on main ideas while listening",
    "Waiting to hear the passage before answering",
    "Trying to write down every single word instead of key points",
    "Reading each question carefully"
   ],
   "correct": 2,
   "exp": "Attempting to transcribe everything causes you to miss the flow; noting main ideas works better."
  }
 ],
 "Exam-Day Tips": [
  {
   "q": "What should you do the night before your TOEFL exam for best performance?",
   "opts": [
    "Study intensely all night to cover new material",
    "Change your test center at the last minute",
    "Skip breakfast to save time in the morning",
    "Get a good night of sleep and prepare your ID and documents"
   ],
   "correct": 3,
   "exp": "Rest and having your documents ready leave you alert and calm rather than exhausted."
  },
  {
   "q": "Why is it recommended to arrive early at the test center on exam day?",
   "opts": [
    "To allow time for check-in and ID verification without stress",
    "To choose which section you take first",
    "To negotiate a higher target score",
    "To skip the identification process"
   ],
   "correct": 0,
   "exp": "Arriving early gives time for check-in and ID checks so you are not rushed or turned away."
  },
  {
   "q": "During the exam, what is a good habit for staying focused across all four sections?",
   "opts": [
    "Rush through every section as fast as possible",
    "Read each question carefully and use the scheduled break to reset",
    "Ignore the on-screen timer entirely",
    "Discuss answers quietly with a neighbor"
   ],
   "correct": 1,
   "exp": "Careful reading plus using the break to recharge helps maintain focus through the long test."
  }
 ],
 "Stress Management": [
  {
   "q": "Which technique can help calm test anxiety during the TOEFL exam?",
   "opts": [
    "Holding your breath until a question feels easy",
    "Thinking only about how hard the test is",
    "Slow, deep breathing to steady your nerves before continuing",
    "Rushing faster whenever you feel nervous"
   ],
   "correct": 2,
   "exp": "Slow, deep breathing lowers physical tension and helps you refocus on the task."
  },
  {
   "q": "How does thorough preparation help with test-day stress?",
   "opts": [
    "It removes the need to sleep before the test",
    "It guarantees you will never feel any nerves",
    "It lets you skip the hardest section",
    "Familiarity with the format and practice builds confidence and reduces anxiety"
   ],
   "correct": 3,
   "exp": "Knowing what to expect from practice makes the real test feel familiar and less stressful."
  },
  {
   "q": "What mindset helps most if you find one question very difficult during the test?",
   "opts": [
    "Stay calm, make your best choice, and move on to the next question",
    "Panic and reread it many times without moving on",
    "Freeze and stop answering other questions",
    "Assume the whole test is ruined and give up"
   ],
   "correct": 0,
   "exp": "Staying calm and moving on prevents one hard question from derailing your performance on the rest."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence \"She quickly finished her homework,\" what part of speech is the word quickly?",
   "opts": [
    "Adjective",
    "Adverb",
    "Verb",
    "Noun"
   ],
   "correct": 1,
   "exp": "\"Quickly\" modifies the verb \"finished,\" so it functions as an adverb."
  },
  {
   "q": "Which word in the sentence \"The tall man walked into the room\" is a noun?",
   "opts": [
    "tall",
    "walked",
    "man",
    "into"
   ],
   "correct": 2,
   "exp": "\"Man\" names a person, making it the noun in the sentence."
  },
  {
   "q": "In \"He is running because he is late,\" what part of speech is the word because?",
   "opts": [
    "Preposition",
    "Adjective",
    "Verb",
    "Conjunction"
   ],
   "correct": 3,
   "exp": "\"Because\" joins two clauses, so it is a conjunction."
  }
 ],
 "Nouns": [
  {
   "q": "Which of the following words is a collective noun?",
   "opts": [
    "team",
    "quickly",
    "run",
    "happiness"
   ],
   "correct": 0,
   "exp": "\"Team\" names a group of individuals, so it is a collective noun."
  },
  {
   "q": "What is the correct plural form of the noun child?",
   "opts": [
    "childs",
    "children",
    "childes",
    "childrens"
   ],
   "correct": 1,
   "exp": "\"Child\" has the irregular plural \"children.\""
  },
  {
   "q": "Which sentence uses an abstract noun correctly?",
   "opts": [
    "The table is made of wood.",
    "The dog ran across the yard.",
    "Her courage inspired everyone.",
    "He bought a new car."
   ],
   "correct": 2,
   "exp": "\"Courage\" names an idea or quality, so it is an abstract noun."
  }
 ],
 "Pronouns": [
  {
   "q": "Which pronoun correctly completes \"The gift was given to John and ___\"?",
   "opts": [
    "I",
    "myself",
    "mine",
    "me"
   ],
   "correct": 3,
   "exp": "As the object of the preposition \"to,\" the objective pronoun \"me\" is correct."
  },
  {
   "q": "Which sentence uses a reflexive pronoun correctly?",
   "opts": [
    "She hurt herself while cooking.",
    "She hurt her while cooking.",
    "She hurt she while cooking.",
    "Her hurt she while cooking."
   ],
   "correct": 0,
   "exp": "\"Herself\" is the correct reflexive pronoun referring back to \"she.\""
  },
  {
   "q": "In \"Everyone must bring ___ own lunch,\" which pronoun fits best in formal standard grammar?",
   "opts": [
    "their",
    "his or her",
    "them",
    "theirs"
   ],
   "correct": 1,
   "exp": "\"Everyone\" is singular, so \"his or her\" agrees in formal standard grammar."
  }
 ],
 "Verbs": [
  {
   "q": "Which word is the main verb in \"They have completed the project\"?",
   "opts": [
    "They",
    "have",
    "completed",
    "project"
   ],
   "correct": 2,
   "exp": "\"Completed\" is the main verb expressing the action, while \"have\" is the auxiliary."
  },
  {
   "q": "Which sentence contains a linking verb?",
   "opts": [
    "He kicked the ball.",
    "They built a house.",
    "We ran to school.",
    "She seems tired today."
   ],
   "correct": 3,
   "exp": "\"Seems\" links the subject \"She\" to the description \"tired,\" so it is a linking verb."
  },
  {
   "q": "Which word is the transitive verb in \"The chef prepared a delicious meal\"?",
   "opts": [
    "prepared",
    "delicious",
    "meal",
    "chef"
   ],
   "correct": 0,
   "exp": "\"Prepared\" takes the direct object \"meal,\" making it a transitive verb."
  }
 ],
 "Verb Tenses": [
  {
   "q": "Which sentence is written in the present perfect tense?",
   "opts": [
    "I ate breakfast this morning.",
    "I have eaten breakfast already.",
    "I eat breakfast every day.",
    "I will eat breakfast soon."
   ],
   "correct": 1,
   "exp": "\"Have eaten\" uses \"have\" plus the past participle, forming the present perfect."
  },
  {
   "q": "Which verb form correctly completes \"By next year, she ___ here for a decade\"?",
   "opts": [
    "works",
    "worked",
    "will have worked",
    "is working"
   ],
   "correct": 2,
   "exp": "The future perfect \"will have worked\" describes an action completed before a future point."
  },
  {
   "q": "Which sentence correctly uses the past continuous tense?",
   "opts": [
    "I read when the phone rang.",
    "I have read when the phone rang.",
    "I will read when the phone rang.",
    "I was reading when the phone rang."
   ],
   "correct": 3,
   "exp": "\"Was reading\" shows an ongoing past action interrupted by another, which is the past continuous."
  }
 ],
 "Subject-Verb Agreement": [
  {
   "q": "Which sentence has correct subject-verb agreement?",
   "opts": [
    "The list of items is on the desk.",
    "The list of items were on the desk.",
    "The list of items be on the desk.",
    "The list of items are on the desk."
   ],
   "correct": 0,
   "exp": "The subject \"list\" is singular, so the singular verb \"is\" agrees with it."
  },
  {
   "q": "Which verb correctly completes \"Neither the students nor the teacher ___ ready\"?",
   "opts": [
    "are",
    "is",
    "were",
    "have"
   ],
   "correct": 1,
   "exp": "With \"neither...nor,\" the verb agrees with the nearer subject \"teacher,\" so \"is\" is correct."
  },
  {
   "q": "Which sentence shows correct subject-verb agreement?",
   "opts": [
    "Each of the boys have a bike.",
    "Everybody enjoy the concert.",
    "Each of the boys has a bike.",
    "The childs plays outside."
   ],
   "correct": 2,
   "exp": "\"Each\" is singular and requires the singular verb \"has.\""
  }
 ],
 "Adjectives": [
  {
   "q": "Which sentence orders the adjectives correctly?",
   "opts": [
    "She bought a red big car.",
    "She bought a car big red.",
    "She bought red a big car.",
    "She bought a big red car."
   ],
   "correct": 3,
   "exp": "Size normally comes before color, so \"big red car\" follows correct adjective order."
  },
  {
   "q": "What is the correct comparative form of the adjective good?",
   "opts": [
    "better",
    "more good",
    "best",
    "gooder"
   ],
   "correct": 0,
   "exp": "\"Good\" has the irregular comparative form \"better.\""
  },
  {
   "q": "Which word is a demonstrative adjective in \"This book belongs to her\"?",
   "opts": [
    "book",
    "This",
    "belongs",
    "her"
   ],
   "correct": 1,
   "exp": "\"This\" points to a specific noun \"book,\" so it is a demonstrative adjective."
  }
 ],
 "Adverbs": [
  {
   "q": "Which sentence places the adverb of frequency correctly?",
   "opts": [
    "She goes always to the gym.",
    "Always she goes to the gym.",
    "She always goes to the gym.",
    "She goes to the gym always fast."
   ],
   "correct": 2,
   "exp": "Adverbs of frequency like \"always\" usually come before the main verb, as in \"always goes.\""
  },
  {
   "q": "Which word is the adverb in \"He spoke very softly to the child\"?",
   "opts": [
    "He",
    "spoke",
    "child",
    "softly"
   ],
   "correct": 3,
   "exp": "\"Softly\" describes how he spoke, so it is the adverb modifying the verb."
  },
  {
   "q": "Which sentence correctly uses an adverb rather than an adjective?",
   "opts": [
    "She sings beautifully.",
    "She sing beautifully.",
    "She beautiful sings.",
    "She sings beautiful."
   ],
   "correct": 0,
   "exp": "\"Beautifully\" is an adverb modifying the verb \"sings,\" which is grammatically correct."
  }
 ],
 "Prepositions": [
  {
   "q": "Which preposition correctly completes \"The meeting is scheduled ___ Monday\"?",
   "opts": [
    "in",
    "on",
    "at",
    "of"
   ],
   "correct": 1,
   "exp": "Days of the week take the preposition \"on,\" as in \"on Monday.\""
  },
  {
   "q": "Which preposition correctly completes \"She is good ___ mathematics\"?",
   "opts": [
    "in",
    "on",
    "at",
    "for"
   ],
   "correct": 2,
   "exp": "The idiomatic phrase \"good at\" is used with skills and subjects."
  },
  {
   "q": "Which sentence uses a preposition of place correctly?",
   "opts": [
    "The keys are in the table.",
    "He arrived to home late.",
    "She is married with him.",
    "The cat is on the box."
   ],
   "correct": 3,
   "exp": "\"On\" correctly shows the cat resting on the surface of the box."
  }
 ],
 "Conjunctions": [
  {
   "q": "Which of the following words is a coordinating conjunction?",
   "opts": [
    "but",
    "because",
    "unless",
    "although"
   ],
   "correct": 0,
   "exp": "\"But\" joins equal grammatical elements, making it a coordinating conjunction."
  },
  {
   "q": "Which correlative pair completes \"___ the movie ___ the book was interesting\"?",
   "opts": [
    "Either...nor",
    "Both...and",
    "Neither...or",
    "Not...but nor"
   ],
   "correct": 1,
   "exp": "\"Both...and\" is the correct correlative pair to link two positive items."
  },
  {
   "q": "Which sentence correctly uses a subordinating conjunction?",
   "opts": [
    "I stayed home, and it rained.",
    "I stayed home, but rained.",
    "I stayed home because it was raining.",
    "I stayed home, or it rained."
   ],
   "correct": 2,
   "exp": "\"Because\" introduces a dependent clause giving the reason, so it is a subordinating conjunction."
  }
 ],
 "Articles": [
  {
   "q": "Which article correctly completes \"She is ___ honest person\"?",
   "opts": [
    "a",
    "the",
    "no article",
    "an"
   ],
   "correct": 3,
   "exp": "\"Honest\" begins with a vowel sound because the \"h\" is silent, so \"an\" is correct."
  },
  {
   "q": "Which sentence uses the definite article correctly?",
   "opts": [
    "The sun rises in the east.",
    "Sun rises in east.",
    "A sun rises in the east.",
    "I saw a sun this morning."
   ],
   "correct": 0,
   "exp": "Unique objects like \"the sun\" take the definite article \"the.\""
  },
  {
   "q": "Which sentence uses articles correctly?",
   "opts": [
    "He plays a guitar the every evening.",
    "He plays the guitar every evening.",
    "He plays guitar the every evening.",
    "He plays an guitar every evening."
   ],
   "correct": 1,
   "exp": "Musical instruments take the definite article, so \"the guitar\" is correct."
  }
 ],
 "Active & Passive Voice": [
  {
   "q": "What is the passive form of \"The chef cooked the meal\"?",
   "opts": [
    "The meal cooked the chef.",
    "The chef was cooking the meal.",
    "The meal was cooked by the chef.",
    "The meal cooks by the chef."
   ],
   "correct": 2,
   "exp": "The passive uses \"was\" plus the past participle with \"by the chef\" as the agent."
  },
  {
   "q": "Which sentence is written in the active voice?",
   "opts": [
    "The letter was written by Sara.",
    "The window was broken.",
    "The song is being sung.",
    "Sara wrote the letter."
   ],
   "correct": 3,
   "exp": "In \"Sara wrote the letter,\" the subject performs the action, so it is active voice."
  },
  {
   "q": "What is the correct passive form of \"They will announce the results tomorrow\"?",
   "opts": [
    "The results will be announced tomorrow.",
    "The results will announcing tomorrow.",
    "The results are announce tomorrow.",
    "The results announce tomorrow."
   ],
   "correct": 0,
   "exp": "The future passive uses \"will be\" plus the past participle \"announced.\""
  }
 ],
 "Direct & Indirect Speech": [
  {
   "q": "What is the correct indirect form of \"She said, I am tired\"?",
   "opts": [
    "She said that she is tired.",
    "She said that she was tired.",
    "She said that I am tired.",
    "She says that she tired."
   ],
   "correct": 1,
   "exp": "In reported speech, present tense \"am\" shifts back to past tense \"was.\""
  },
  {
   "q": "What is the correct indirect form of \"He asked, Where do you live\"?",
   "opts": [
    "He asked where do you live.",
    "He asked where did I live.",
    "He asked where I lived.",
    "He asked where I live."
   ],
   "correct": 2,
   "exp": "Reported questions use statement word order and shift the tense: \"where I lived.\""
  },
  {
   "q": "What is the correct reported form of \"They said, We will help you\"?",
   "opts": [
    "They said they will help me.",
    "They said we would help you.",
    "They said they help me.",
    "They said they would help me."
   ],
   "correct": 3,
   "exp": "\"Will\" changes to \"would\" and \"we/you\" shift to \"they/me\" in reported speech."
  }
 ],
 "Conditional Sentences": [
  {
   "q": "Which verb form completes the second conditional \"If I ___ rich, I would travel the world\"?",
   "opts": [
    "were",
    "was",
    "will be",
    "am"
   ],
   "correct": 0,
   "exp": "The second conditional uses \"were\" for all subjects in the hypothetical if-clause."
  },
  {
   "q": "Which sentence is a correct first conditional?",
   "opts": [
    "If it rains, I stayed home.",
    "If it rains, I will stay home.",
    "If it will rain, I stay home.",
    "If it rained, I will stay home."
   ],
   "correct": 1,
   "exp": "The first conditional uses present tense in the if-clause and \"will\" in the main clause."
  },
  {
   "q": "Which sentence is a correct third conditional?",
   "opts": [
    "If she had studied, she would pass.",
    "If she studied, she would have passed.",
    "If she had studied, she would have passed.",
    "If she studies, she would have passed."
   ],
   "correct": 2,
   "exp": "The third conditional uses \"had studied\" and \"would have passed\" for unreal past situations."
  }
 ],
 "Relative Clauses": [
  {
   "q": "Which relative pronoun correctly completes \"The man ___ called you is my uncle\"?",
   "opts": [
    "which",
    "whom",
    "whose",
    "who"
   ],
   "correct": 3,
   "exp": "\"Who\" refers to a person acting as the subject of the relative clause."
  },
  {
   "q": "Which sentence uses a non-defining relative clause correctly?",
   "opts": [
    "My brother, who lives in Paris, is a doctor.",
    "My brother which lives in Paris is a doctor.",
    "My brother who lives in Paris, is a doctor.",
    "My brother who lives in Paris is a doctor."
   ],
   "correct": 0,
   "exp": "Non-defining clauses give extra information and are set off by commas."
  },
  {
   "q": "Which relative pronoun correctly completes \"This is the book ___ pages are torn\"?",
   "opts": [
    "who",
    "whose",
    "which",
    "that"
   ],
   "correct": 1,
   "exp": "\"Whose\" shows possession, correctly linking the book to its pages."
  }
 ],
 "Modals": [
  {
   "q": "Which modal best expresses strong obligation in \"You ___ wear a seatbelt while driving\"?",
   "opts": [
    "might",
    "could",
    "must",
    "may"
   ],
   "correct": 2,
   "exp": "\"Must\" expresses strong obligation or necessity."
  },
  {
   "q": "Which modal is best for asking polite permission in \"___ I open the window\"?",
   "opts": [
    "Should",
    "Must",
    "Would",
    "May"
   ],
   "correct": 3,
   "exp": "\"May\" is used to ask for polite permission."
  },
  {
   "q": "Which sentence uses a modal of deduction correctly?",
   "opts": [
    "He must be at home; his car is here.",
    "He musts be at home.",
    "He must being at home.",
    "He must to be at home."
   ],
   "correct": 0,
   "exp": "\"Must be\" expresses a logical deduction and is followed by the base verb."
  }
 ],
 "Gerunds & Infinitives": [
  {
   "q": "Which form correctly completes \"She enjoys ___ in the morning\"?",
   "opts": [
    "to run",
    "running",
    "run",
    "runs"
   ],
   "correct": 1,
   "exp": "The verb \"enjoy\" is followed by a gerund, so \"running\" is correct."
  },
  {
   "q": "Which sentence uses an infinitive correctly?",
   "opts": [
    "I want going home.",
    "I want go home.",
    "I want to go home.",
    "I want gone home."
   ],
   "correct": 2,
   "exp": "\"Want\" is followed by the infinitive \"to go.\""
  },
  {
   "q": "Which sentence uses a gerund correctly after the verb?",
   "opts": [
    "He decided leaving early.",
    "He avoided to speak in public.",
    "He avoided speak in public.",
    "He avoided speaking in public."
   ],
   "correct": 3,
   "exp": "\"Avoid\" is followed by a gerund, so \"speaking\" is correct."
  }
 ],
 "Punctuation": [
  {
   "q": "Which sentence is punctuated correctly?",
   "opts": [
    "It's a beautiful day, isn't it?",
    "Its a beautiful day isn't it.",
    "It's a beautiful day isnt it?",
    "Its a beautiful day, isnt it?"
   ],
   "correct": 0,
   "exp": "\"It's\" and \"isn't\" need apostrophes, and the tag question needs a comma and question mark."
  },
  {
   "q": "Where should the comma go in \"After the storm passed we went outside\"?",
   "opts": [
    "After, the storm passed we went outside.",
    "After the storm passed, we went outside.",
    "After the storm, passed we went outside.",
    "After the storm passed we, went outside."
   ],
   "correct": 1,
   "exp": "A comma follows an introductory clause, placed after \"passed.\""
  },
  {
   "q": "Which sentence uses the semicolon correctly?",
   "opts": [
    "I have; a test tomorrow I need to study.",
    "I have a test tomorrow; and I need to study.",
    "I have a test tomorrow; I need to study tonight.",
    "I have a test tomorrow I need; to study."
   ],
   "correct": 2,
   "exp": "A semicolon correctly joins two related independent clauses without a conjunction."
  }
 ],
 "Common Grammar Mistakes": [
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "Their going to the store.",
    "There going to the store.",
    "Theyre going to the store.",
    "They're going to the store."
   ],
   "correct": 3,
   "exp": "\"They're\" is the contraction of \"they are,\" which is correct here."
  },
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "You should have called me.",
    "You should have call me.",
    "You should has called me.",
    "You should of called me."
   ],
   "correct": 0,
   "exp": "\"Should have\" is correct; \"should of\" is a common error caused by mishearing."
  },
  {
   "q": "Which sentence uses fewer and less correctly?",
   "opts": [
    "There are less cars and fewer traffic today.",
    "There are fewer cars and less traffic today.",
    "There are less cars and less traffic today.",
    "There are fewer cars and fewer traffic today."
   ],
   "correct": 1,
   "exp": "\"Fewer\" is used with countable nouns like cars and \"less\" with uncountable nouns like traffic."
  }
 ],
 "Academic Vocabulary": [
  {
   "q": "Which word is most typical of formal academic writing rather than casual speech?",
   "opts": [
    "get",
    "a lot of",
    "demonstrate",
    "stuff"
   ],
   "correct": 2,
   "exp": "Demonstrate is a precise, formal verb preferred in academic prose, while the others are informal."
  },
  {
   "q": "In the sentence 'The data corroborate the theory,' what does 'corroborate' most nearly mean?",
   "opts": [
    "contradict",
    "ignore",
    "delay",
    "support"
   ],
   "correct": 3,
   "exp": "To corroborate is to confirm or support with evidence."
  },
  {
   "q": "Why is academic vocabulary such as 'significant' or 'analyze' important on the TOEFL?",
   "opts": [
    "It appears frequently across academic texts and lectures",
    "It replaces the need for grammar",
    "It is banned in the writing section",
    "It is only used in casual conversation"
   ],
   "correct": 0,
   "exp": "Academic word-list terms recur across university-level readings and lectures, so knowing them aids comprehension."
  }
 ],
 "Word Formation": [
  {
   "q": "Which noun is correctly formed from the verb 'decide'?",
   "opts": [
    "decidely",
    "decision",
    "decisive",
    "deciding"
   ],
   "correct": 1,
   "exp": "Adding the suffix -sion to 'decide' produces the noun 'decision'."
  },
  {
   "q": "To complete 'The scientist made an important ____,' which form of 'observe' fits?",
   "opts": [
    "observant",
    "observably",
    "observation",
    "observe"
   ],
   "correct": 2,
   "exp": "The noun 'observation' is needed after the article and adjective."
  },
  {
   "q": "What does word formation mainly involve?",
   "opts": [
    "Memorizing unrelated words",
    "Translating words into another language",
    "Spelling words backwards",
    "Building new words by adding affixes or changing form"
   ],
   "correct": 3,
   "exp": "Word formation creates related words through affixes and part-of-speech changes."
  }
 ],
 "Prefixes & Suffixes": [
  {
   "q": "What does the prefix 'un-' do to the meaning of a word like 'happy'?",
   "opts": [
    "Reverses or negates it",
    "Makes it a verb",
    "Makes it plural",
    "Intensifies it"
   ],
   "correct": 0,
   "exp": "The prefix 'un-' negates the meaning, so 'unhappy' means not happy."
  },
  {
   "q": "Which suffix changes the adjective 'quick' into an adverb?",
   "opts": [
    "-ness",
    "-ly",
    "-er",
    "-ful"
   ],
   "correct": 1,
   "exp": "Adding -ly to 'quick' forms the adverb 'quickly'."
  },
  {
   "q": "The prefix 're-' in 'rewrite' adds which meaning?",
   "opts": [
    "Before",
    "Not",
    "Again",
    "Under"
   ],
   "correct": 2,
   "exp": "The prefix 're-' means again, so 'rewrite' means write again."
  }
 ],
 "Synonyms": [
  {
   "q": "Which word is the closest synonym for 'enormous'?",
   "opts": [
    "tiny",
    "quiet",
    "rapid",
    "huge"
   ],
   "correct": 3,
   "exp": "'Enormous' and 'huge' both mean very large."
  },
  {
   "q": "A synonym is best defined as a word that has which relationship to another?",
   "opts": [
    "Same or nearly the same meaning",
    "Same spelling",
    "Unrelated meaning",
    "Opposite meaning"
   ],
   "correct": 0,
   "exp": "Synonyms share the same or a very similar meaning."
  },
  {
   "q": "Which of these is a synonym for 'begin'?",
   "opts": [
    "finish",
    "commence",
    "delay",
    "cancel"
   ],
   "correct": 1,
   "exp": "'Commence' is a synonym for 'begin', meaning to start."
  }
 ],
 "Antonyms": [
  {
   "q": "Which word is the antonym of 'ancient'?",
   "opts": [
    "old",
    "historic",
    "modern",
    "aged"
   ],
   "correct": 2,
   "exp": "'Modern' is the opposite of 'ancient'."
  },
  {
   "q": "An antonym of a word has which relationship to it?",
   "opts": [
    "Identical meaning",
    "Same sound",
    "Same origin",
    "Opposite meaning"
   ],
   "correct": 3,
   "exp": "Antonyms express opposite meanings."
  },
  {
   "q": "Which pair are antonyms?",
   "opts": [
    "increase and decrease",
    "fast and quick",
    "happy and glad",
    "big and large"
   ],
   "correct": 0,
   "exp": "'Increase' and 'decrease' are opposites, while the other pairs are synonyms."
  }
 ],
 "Collocations": [
  {
   "q": "Which word naturally collocates with 'make' in standard English?",
   "opts": [
    "make homework",
    "make a decision",
    "make sleep",
    "make rain"
   ],
   "correct": 1,
   "exp": "'Make a decision' is a fixed, natural collocation in English."
  },
  {
   "q": "What is a collocation?",
   "opts": [
    "A single long word",
    "A pair of opposites",
    "Words that habitually go together",
    "A grammar rule for tenses"
   ],
   "correct": 2,
   "exp": "A collocation is a combination of words that commonly occur together."
  },
  {
   "q": "Which verb correctly collocates with 'a photo'?",
   "opts": [
    "do",
    "get",
    "put",
    "take"
   ],
   "correct": 3,
   "exp": "English uses 'take a photo', not 'do' or 'make' a photo."
  }
 ],
 "Idioms": [
  {
   "q": "What does the idiom 'hit the books' mean?",
   "opts": [
    "To study hard",
    "To buy new books",
    "To throw something",
    "To damage books"
   ],
   "correct": 0,
   "exp": "'Hit the books' is an idiom meaning to study intensively."
  },
  {
   "q": "If something 'costs an arm and a leg', it is what?",
   "opts": [
    "Very cheap",
    "Very expensive",
    "Free of charge",
    "Broken"
   ],
   "correct": 1,
   "exp": "The idiom means something is very expensive."
  },
  {
   "q": "Why can idioms be tricky for learners?",
   "opts": [
    "They are always spelled wrong",
    "They only appear in writing",
    "Their meaning cannot be guessed from the individual words",
    "They have no meaning at all"
   ],
   "correct": 2,
   "exp": "Idioms are figurative, so their meaning differs from the literal words."
  }
 ],
 "Phrasal Verbs": [
  {
   "q": "What does the phrasal verb 'give up' mean?",
   "opts": [
    "Continue trying",
    "Give a gift",
    "Look upward",
    "Stop or quit"
   ],
   "correct": 3,
   "exp": "'Give up' means to stop doing or quit something."
  },
  {
   "q": "A phrasal verb is formed by combining a verb with what?",
   "opts": [
    "A particle such as a preposition or adverb",
    "A noun subject",
    "A question mark",
    "Another full verb"
   ],
   "correct": 0,
   "exp": "Phrasal verbs join a verb with a particle that changes its meaning."
  },
  {
   "q": "In 'She looks after her sister,' what does 'look after' mean?",
   "opts": [
    "Search for",
    "Take care of",
    "Look behind",
    "Ignore"
   ],
   "correct": 1,
   "exp": "'Look after' means to take care of someone."
  }
 ],
 "Context Clues": [
  {
   "q": "Using context clues means you determine a word's meaning by doing what?",
   "opts": [
    "Skipping the sentence entirely",
    "Counting the letters",
    "Using surrounding words and sentences",
    "Translating it word for word"
   ],
   "correct": 2,
   "exp": "Context clues rely on nearby words and ideas to infer meaning."
  },
  {
   "q": "In 'The nocturnal owl hunts only at night,' what clue reveals 'nocturnal' means active at night?",
   "opts": [
    "The word owl",
    "The word hunts",
    "The word the",
    "The phrase 'only at night'"
   ],
   "correct": 3,
   "exp": "'Only at night' defines nocturnal directly within the sentence."
  },
  {
   "q": "Which type of context clue gives the opposite meaning to help define a word?",
   "opts": [
    "Contrast clue",
    "Rhyme clue",
    "Spelling clue",
    "Repetition clue"
   ],
   "correct": 0,
   "exp": "A contrast clue signals meaning through an opposing idea, often after 'but' or 'unlike'."
  }
 ],
 "Vocabulary Review": [
  {
   "q": "What is the most effective way to retain new vocabulary long term?",
   "opts": [
    "Reading a word once",
    "Regular spaced review and use in context",
    "Memorizing only spellings",
    "Avoiding the words in writing"
   ],
   "correct": 1,
   "exp": "Spaced repetition and using words in context strengthen long-term memory."
  },
  {
   "q": "Which strategy best helps you learn a word's real usage?",
   "opts": [
    "Learning only its dictionary length",
    "Learning it without meaning",
    "Learning it with example sentences and collocations",
    "Ignoring its part of speech"
   ],
   "correct": 2,
   "exp": "Seeing a word in example sentences and collocations shows how it is actually used."
  },
  {
   "q": "On the TOEFL, a strong vocabulary most directly improves which skills?",
   "opts": [
    "Only handwriting",
    "Only typing speed",
    "Nothing measurable",
    "Reading and listening comprehension"
   ],
   "correct": 3,
   "exp": "A broad vocabulary helps you understand academic reading passages and lectures."
  }
 ],
 "English Sounds": [
  {
   "q": "The 'th' in 'think' represents which type of English sound?",
   "opts": [
    "A voiceless dental fricative",
    "A rolled r",
    "A silent letter",
    "A nasal sound"
   ],
   "correct": 0,
   "exp": "'Th' in 'think' is a voiceless dental fricative made with the tongue near the teeth."
  },
  {
   "q": "Which pair shows the difference between a voiced and a voiceless consonant?",
   "opts": [
    "m and n",
    "b and p",
    "a and e",
    "l and r"
   ],
   "correct": 1,
   "exp": "'B' is voiced and 'p' is voiceless, differing only in vocal-cord vibration."
  },
  {
   "q": "Why do many learners confuse the vowels in 'ship' and 'sheep'?",
   "opts": [
    "They are spelled identically",
    "They are both silent",
    "They are short versus long vowel sounds that must be distinguished",
    "They are consonants"
   ],
   "correct": 2,
   "exp": "'Ship' has a short vowel and 'sheep' a long one, a contrast learners must master."
  }
 ],
 "Stress": [
  {
   "q": "In the noun 'PREsent' (a gift), which syllable is stressed?",
   "opts": [
    "The second syllable",
    "Both equally",
    "Neither",
    "The first syllable"
   ],
   "correct": 3,
   "exp": "The noun 'present' stresses the first syllable, unlike the verb 'preSENT'."
  },
  {
   "q": "How does word stress typically differ between the noun and verb 'record'?",
   "opts": [
    "Noun stresses first syllable, verb stresses second",
    "Both stress the last syllable",
    "Verbs are never stressed",
    "Stress never changes"
   ],
   "correct": 0,
   "exp": "'REcord' (noun) stresses the first syllable while 're-CORD' (verb) stresses the second."
  },
  {
   "q": "What is sentence stress used for in spoken English?",
   "opts": [
    "To make every word equally loud",
    "To highlight the most important words",
    "To remove all vowels",
    "To end questions only"
   ],
   "correct": 1,
   "exp": "Sentence stress emphasizes key content words so listeners catch the main meaning."
  }
 ],
 "Intonation": [
  {
   "q": "A rising intonation at the end of a sentence typically signals what?",
   "opts": [
    "A completed statement",
    "A command",
    "A yes or no question",
    "Silence"
   ],
   "correct": 2,
   "exp": "Rising intonation commonly marks yes/no questions in English."
  },
  {
   "q": "What does falling intonation usually indicate?",
   "opts": [
    "Uncertainty",
    "A list that continues",
    "Surprise only",
    "A finished statement or wh-question"
   ],
   "correct": 3,
   "exp": "Falling intonation signals completeness, as in statements and wh-questions."
  },
  {
   "q": "Intonation refers to which feature of speech?",
   "opts": [
    "The rise and fall of pitch",
    "The number of syllables",
    "The speed of typing",
    "The spelling of words"
   ],
   "correct": 0,
   "exp": "Intonation is the pattern of pitch movement across an utterance."
  }
 ],
 "Connected Speech": [
  {
   "q": "In connected speech, the phrase 'want to' is often pronounced as what?",
   "opts": [
    "want too",
    "wanna",
    "won't",
    "wan"
   ],
   "correct": 1,
   "exp": "In relaxed connected speech 'want to' reduces to 'wanna'."
  },
  {
   "q": "What happens in the linking of 'an apple' in natural speech?",
   "opts": [
    "The words are separated by a pause",
    "The a is dropped",
    "The final n links to the vowel, sounding like a-napple",
    "The apple becomes silent"
   ],
   "correct": 2,
   "exp": "A final consonant links to a following vowel, so 'an apple' sounds joined."
  },
  {
   "q": "Connected speech mainly describes how sounds do what between words?",
   "opts": [
    "Stay completely separate",
    "Disappear entirely",
    "Become louder each time",
    "Link, reduce, or change"
   ],
   "correct": 3,
   "exp": "In connected speech neighboring sounds link, reduce, or blend together."
  }
 ],
 "Public Speaking Practice": [
  {
   "q": "During the TOEFL Speaking section, why is pacing important?",
   "opts": [
    "Speaking too fast or too slow reduces clarity",
    "Pausing is forbidden",
    "Pace has no effect on scores",
    "Faster is always better"
   ],
   "correct": 0,
   "exp": "A steady pace keeps speech clear and understandable to the listener."
  },
  {
   "q": "Which practice best improves fluency for public speaking?",
   "opts": [
    "Memorizing without understanding",
    "Regular timed speaking practice with feedback",
    "Never recording yourself",
    "Avoiding all preparation"
   ],
   "correct": 1,
   "exp": "Timed practice with feedback builds fluency and confidence."
  },
  {
   "q": "When organizing a spoken response, what helps listeners follow your ideas?",
   "opts": [
    "Speaking with no pauses at all",
    "Avoiding any main point",
    "Using clear transitions and structure",
    "Whispering the conclusion"
   ],
   "correct": 2,
   "exp": "Clear structure and transitions guide listeners through your points."
  }
 ],
 "Reading Strategies": [
  {
   "q": "Before reading the full passage in detail, what is the most effective first strategy on the TOEFL Reading section?",
   "opts": [
    "Memorize every unfamiliar word",
    "Answer the questions before reading anything",
    "Translate each paragraph into your first language",
    "Preview the passage by reading the title and first sentences to grasp the topic"
   ],
   "correct": 3,
   "exp": "Previewing the title and opening sentences builds a mental framework before detailed reading."
  },
  {
   "q": "Why is it recommended to read the question before locating the answer in the passage?",
   "opts": [
    "It focuses your search on the specific information the question requires",
    "It guarantees the answer is in the first paragraph",
    "It lets you skip the passage entirely",
    "It removes the need to read carefully"
   ],
   "correct": 0,
   "exp": "Knowing the question first directs your attention to the relevant part of the text."
  },
  {
   "q": "Which approach best manages time across a TOEFL Reading passage with its questions?",
   "opts": [
    "Spend all the time on the hardest question",
    "Answer questions in order, returning to marked hard ones if time allows",
    "Read the whole passage word by word twice before starting",
    "Guess on every question without reading"
   ],
   "correct": 1,
   "exp": "Answering in order and flagging hard items for review keeps pacing steady across the set."
  }
 ],
 "Skimming": [
  {
   "q": "What is the primary purpose of skimming a passage?",
   "opts": [
    "To memorize the passage word for word",
    "To find one specific number or name",
    "To quickly get the general idea and overall structure",
    "To check spelling errors"
   ],
   "correct": 2,
   "exp": "Skimming is reading quickly to grasp the main idea and organization, not details."
  },
  {
   "q": "When skimming, which parts of the text should you focus on most?",
   "opts": [
    "Every adjective and adverb",
    "Random middle sentences",
    "Only the footnotes",
    "Topic sentences and the first and last lines of paragraphs"
   ],
   "correct": 3,
   "exp": "Topic sentences and paragraph openings and closings carry the main ideas you skim for."
  },
  {
   "q": "Skimming differs from careful reading mainly because it is done at a speed that lets you:",
   "opts": [
    "Cover a lot of text rapidly to sense the gist",
    "Analyze the author's word choice deeply",
    "Understand every grammatical detail",
    "Recall exact statistics later"
   ],
   "correct": 0,
   "exp": "Skimming trades depth for speed, giving you the gist rather than full detail."
  }
 ],
 "Scanning": [
  {
   "q": "Scanning is the reading technique you use when you need to:",
   "opts": [
    "Understand the author's overall argument",
    "Locate specific information such as a date, name, or number",
    "Summarize the entire passage",
    "Evaluate the tone of the writing"
   ],
   "correct": 1,
   "exp": "Scanning is searching quickly for a particular piece of specific information."
  },
  {
   "q": "Which task is best accomplished by scanning rather than skimming?",
   "opts": [
    "Deciding the passage's main idea",
    "Judging the writer's attitude",
    "Finding the year an event occurred",
    "Understanding the general structure"
   ],
   "correct": 2,
   "exp": "Finding a precise fact like a year is exactly what scanning targets."
  },
  {
   "q": "When scanning for a keyword, what should your eyes do?",
   "opts": [
    "Read every word slowly from start to finish",
    "Focus only on punctuation marks",
    "Stop at the first paragraph and reread it",
    "Move quickly over the text looking only for the target word or its synonyms"
   ],
   "correct": 3,
   "exp": "Scanning means sweeping the text rapidly, seeking only the target word or its synonyms."
  }
 ],
 "Main Ideas": [
  {
   "q": "The main idea of a paragraph is best described as:",
   "opts": [
    "The central point the paragraph is making",
    "The single date mentioned in it",
    "A minor example given by the author",
    "The longest sentence present"
   ],
   "correct": 0,
   "exp": "The main idea is the central point around which the paragraph's details are organized."
  },
  {
   "q": "Where is the main idea of a paragraph most commonly located?",
   "opts": [
    "Only in the final footnote",
    "In the topic sentence, often at the beginning",
    "Scattered randomly with no pattern",
    "Never stated and always implied"
   ],
   "correct": 1,
   "exp": "The topic sentence, frequently the first sentence, usually states the main idea."
  },
  {
   "q": "A correct answer to a main-idea question typically:",
   "opts": [
    "Repeats one small supporting detail",
    "Introduces information not in the passage",
    "Covers the broad point of the whole passage without being too narrow or too broad",
    "Focuses on a single example only"
   ],
   "correct": 2,
   "exp": "The best main-idea answer captures the overall point at the right level of generality."
  }
 ],
 "Supporting Details": [
  {
   "q": "What is the function of supporting details in a passage?",
   "opts": [
    "To restate the title",
    "To replace the conclusion",
    "To confuse the reader",
    "To provide examples, facts, or reasons that back up the main idea"
   ],
   "correct": 3,
   "exp": "Supporting details give the evidence and examples that develop the main idea."
  },
  {
   "q": "A detail (factual information) question on the TOEFL asks you to:",
   "opts": [
    "Identify specific information explicitly stated in the passage",
    "Predict future events",
    "Guess the author's feelings",
    "Summarize the whole passage in one word"
   ],
   "correct": 0,
   "exp": "Detail questions test information that is directly and explicitly stated in the text."
  },
  {
   "q": "Which is the safest way to answer a supporting-detail question?",
   "opts": [
    "Rely on your outside knowledge",
    "Locate and reread the relevant sentence in the passage",
    "Choose the longest answer choice",
    "Pick the option with the most difficult vocabulary"
   ],
   "correct": 1,
   "exp": "Returning to the exact sentence in the passage confirms the stated detail."
  }
 ],
 "Vocabulary Questions": [
  {
   "q": "In a TOEFL vocabulary question, the highlighted word should be understood based on:",
   "opts": [
    "Its sound when spoken aloud",
    "Only its most common dictionary definition",
    "Its meaning in the surrounding context of the passage",
    "The number of letters it contains"
   ],
   "correct": 2,
   "exp": "Vocabulary items test the word's meaning as used in that specific context."
  },
  {
   "q": "A useful strategy when you do not know a highlighted vocabulary word is to:",
   "opts": [
    "Skip the passage entirely",
    "Always pick the first choice",
    "Choose the rarest-looking word",
    "Substitute each answer choice into the sentence to see which fits"
   ],
   "correct": 3,
   "exp": "Plugging each option back into the sentence reveals which preserves the meaning."
  },
  {
   "q": "Vocabulary questions usually ask which word or phrase is closest in meaning, so the correct answer is a:",
   "opts": [
    "Synonym that fits the context",
    "Direct antonym of the word",
    "Word that rhymes with it",
    "Completely unrelated technical term"
   ],
   "correct": 0,
   "exp": "The answer is a synonym that keeps the same meaning in context."
  }
 ],
 "Inference Questions": [
  {
   "q": "What does an inference question require you to do?",
   "opts": [
    "Repeat an exact sentence from the audio",
    "Draw a logical conclusion that is implied but not directly stated",
    "Define a vocabulary word",
    "Count the speakers"
   ],
   "correct": 1,
   "exp": "Inference questions ask for a conclusion supported by clues rather than an explicit statement."
  },
  {
   "q": "A correct inference answer must be what?",
   "opts": [
    "The opposite of what was said",
    "Based on your outside knowledge only",
    "Logically supported by evidence in the passage",
    "Directly quoted in the passage"
   ],
   "correct": 2,
   "exp": "A valid inference follows logically from what the speaker implied in the audio."
  },
  {
   "q": "Which is a common mistake on inference questions?",
   "opts": [
    "Reasoning from the passage content",
    "Using clues from the speaker's words",
    "Considering the speaker's implied meaning",
    "Choosing a conclusion that goes far beyond what the evidence supports"
   ],
   "correct": 3,
   "exp": "Over-reaching to a conclusion the audio does not support leads to wrong answers."
  }
 ],
 "Reference Questions": [
  {
   "q": "A reference question typically asks you to identify:",
   "opts": [
    "The noun that a highlighted pronoun refers to",
    "The author's nationality",
    "The main idea of the passage",
    "The publication date"
   ],
   "correct": 0,
   "exp": "Reference questions test which noun a pronoun such as it, they, or this points back to."
  },
  {
   "q": "To confirm a pronoun's referent, you should:",
   "opts": [
    "Count the syllables",
    "Replace the pronoun with your chosen noun and check it makes sense",
    "Look only at the last paragraph",
    "Pick any nearby proper name"
   ],
   "correct": 1,
   "exp": "Substituting the candidate noun for the pronoun verifies grammatical and logical fit."
  },
  {
   "q": "A pronoun and its referent must usually agree in:",
   "opts": [
    "Spelling",
    "Rhyme",
    "Number, and often be nearby in the text",
    "Font style"
   ],
   "correct": 2,
   "exp": "The referent must agree in number and typically appears close before the pronoun."
  }
 ],
 "Sentence Simplification": [
  {
   "q": "In a sentence simplification question, the correct choice must:",
   "opts": [
    "Add new information to the original",
    "Be longer and more complex than the original",
    "Contradict the original sentence",
    "Keep the essential meaning while leaving out or changing minor details"
   ],
   "correct": 3,
   "exp": "The right answer restates the essential meaning without adding or contradicting information."
  },
  {
   "q": "Why would an answer choice be wrong in a sentence simplification question even if it is grammatically correct?",
   "opts": [
    "Because it leaves out an essential idea or changes the meaning",
    "Because it uses simple words",
    "Because it is shorter",
    "Because it repeats the main clause"
   ],
   "correct": 0,
   "exp": "Choices that omit essential ideas or alter meaning are incorrect regardless of grammar."
  },
  {
   "q": "The best way to check a sentence simplification answer is to:",
   "opts": [
    "Count how many words it has",
    "Compare its core meaning against the original highlighted sentence",
    "See if it starts with the same word",
    "Choose the one with the hardest vocabulary"
   ],
   "correct": 1,
   "exp": "Matching the core meaning to the original sentence confirms the correct simplification."
  }
 ],
 "Summary Questions": [
  {
   "q": "In a prose summary question, you select the answer choices that:",
   "opts": [
    "Are false statements",
    "Mention minor details and examples",
    "Express the major ideas of the passage",
    "Contain the newest vocabulary"
   ],
   "correct": 2,
   "exp": "Summary questions require choosing the statements that capture the passage's major ideas."
  },
  {
   "q": "Which type of statement should NOT be chosen in a prose summary question?",
   "opts": [
    "A statement covering a central idea",
    "A broad idea supported throughout",
    "A statement reflecting the main point",
    "A minor detail or an idea not in the passage"
   ],
   "correct": 3,
   "exp": "Minor details and information not in the passage are the wrong choices to include."
  },
  {
   "q": "A prose summary task usually provides an introductory sentence and asks you to complete the summary by selecting:",
   "opts": [
    "The three choices that best represent the main ideas",
    "One correct sentence",
    "Every choice listed",
    "Only the false choices"
   ],
   "correct": 0,
   "exp": "You pick the three options that best express the passage's most important ideas."
  }
 ],
 "Reading Speed": [
  {
   "q": "Improving your reading speed for the TOEFL is important mainly because:",
   "opts": [
    "Faster reading always improves comprehension automatically",
    "The section is timed, so speed helps you finish all passages and questions",
    "Speed lets you skip the questions",
    "It reduces the number of passages"
   ],
   "correct": 1,
   "exp": "Because the section is timed, adequate speed ensures you complete every passage and question."
  },
  {
   "q": "Which habit slows reading speed and should be reduced?",
   "opts": [
    "Reading in meaningful phrases",
    "Previewing the title",
    "Subvocalizing or silently pronouncing every single word",
    "Recognizing topic sentences"
   ],
   "correct": 2,
   "exp": "Subvocalizing each word slows you down; reading in phrase groups is faster."
  },
  {
   "q": "A good balance for TOEFL reading is to:",
   "opts": [
    "Read as fast as possible ignoring meaning",
    "Never reread anything",
    "Read only the first paragraph",
    "Read slowly enough to understand while fast enough to finish on time"
   ],
   "correct": 3,
   "exp": "Effective reading balances comprehension with a pace that fits the time limit."
  }
 ],
 "Timed Reading Practice": [
  {
   "q": "The main benefit of practicing reading under timed conditions is that it:",
   "opts": [
    "Builds the pacing and stamina needed for the real test",
    "Guarantees a perfect score",
    "Removes the need to learn vocabulary",
    "Lets you avoid the questions"
   ],
   "correct": 0,
   "exp": "Timed practice develops the pacing and endurance the actual exam demands."
  },
  {
   "q": "Roughly how much time should you budget per TOEFL Reading passage and its questions?",
   "opts": [
    "About 2 minutes",
    "About 18 to 20 minutes",
    "About 60 minutes",
    "There is no time limit"
   ],
   "correct": 1,
   "exp": "Each passage set is generally allotted around 18 to 20 minutes."
  },
  {
   "q": "During timed practice, if one question is taking too long you should:",
   "opts": [
    "Stop the entire practice",
    "Restart the passage from the beginning",
    "Make your best guess, mark it, and move on to protect time",
    "Skip the rest of the passages"
   ],
   "correct": 2,
   "exp": "Guessing and flagging a slow question preserves time for the remaining items."
  }
 ],
 "TOEFL Speaking Overview": [
  {
   "q": "The TOEFL iBT Speaking section is scored on qualities that include:",
   "opts": [
    "Handwriting neatness",
    "Reading speed",
    "Number of pages written",
    "Delivery, language use, and topic development"
   ],
   "correct": 3,
   "exp": "Speaking responses are rated on delivery, language use, and topic development."
  },
  {
   "q": "How many tasks does the current TOEFL Speaking section contain?",
   "opts": [
    "Four tasks",
    "Ten tasks",
    "Two tasks",
    "Twenty tasks"
   ],
   "correct": 0,
   "exp": "The Speaking section has four tasks total, one independent and three integrated."
  },
  {
   "q": "In the Speaking section, your responses are:",
   "opts": [
    "Typed into a computer",
    "Recorded and later scored by raters and automated scoring",
    "Written by hand",
    "Judged only on grammar"
   ],
   "correct": 1,
   "exp": "Spoken answers are recorded and evaluated by human raters and automated scoring."
  }
 ],
 "Independent Speaking": [
  {
   "q": "In the independent speaking task, how much preparation and response time are given?",
   "opts": [
    "30 seconds to prepare and 60 seconds to speak",
    "No preparation and 30 seconds to speak",
    "15 seconds to prepare and 45 seconds to speak",
    "5 minutes to prepare and 5 minutes to speak"
   ],
   "correct": 2,
   "exp": "The independent task gives 15 seconds of prep and 45 seconds to respond."
  },
  {
   "q": "The independent speaking task asks you to:",
   "opts": [
    "Summarize a reading and a lecture",
    "Read a passage aloud",
    "Repeat a recorded conversation",
    "Give your own opinion or preference on a familiar topic"
   ],
   "correct": 3,
   "exp": "The independent task requires stating and supporting your own opinion or preference."
  },
  {
   "q": "A strong independent response should include:",
   "opts": [
    "A clear opinion supported by specific reasons and examples",
    "Only a one-word answer",
    "A summary of an unrelated lecture",
    "As many memorized words as possible with no structure"
   ],
   "correct": 0,
   "exp": "A high-scoring response states a clear position backed by specific reasons and examples."
  }
 ],
 "Integrated Speaking": [
  {
   "q": "Integrated speaking tasks require you to:",
   "opts": [
    "Only give a personal opinion",
    "Combine information from reading and or listening before you speak",
    "Read a passage silently and stop",
    "Write a full essay"
   ],
   "correct": 1,
   "exp": "Integrated tasks require synthesizing material you read and or hear into your spoken answer."
  },
  {
   "q": "In an integrated task that combines a reading passage and a lecture, your job is often to:",
   "opts": [
    "Ignore the lecture and give your opinion",
    "Memorize the reading word for word",
    "Explain how the lecture relates to or challenges the reading",
    "Translate the lecture"
   ],
   "correct": 2,
   "exp": "You must show how the lecture supports, illustrates, or contradicts the reading."
  },
  {
   "q": "Because integrated tasks are based on given sources, your response should mainly:",
   "opts": [
    "Argue against the test",
    "Focus on your unrelated personal stories",
    "Include your favorite hobbies",
    "Report the information from the sources accurately, not your personal views"
   ],
   "correct": 3,
   "exp": "Integrated responses report the source information accurately rather than personal opinion."
  }
 ],
 "Organizing Responses": [
  {
   "q": "Why is organizing your spoken response important on the TOEFL?",
   "opts": [
    "Clear organization helps the rater follow your ideas and improves topic development",
    "It has no effect on the score",
    "It lets you speak longer than allowed",
    "It replaces the need for good pronunciation"
   ],
   "correct": 0,
   "exp": "Clear structure helps raters follow your ideas and strengthens topic development."
  },
  {
   "q": "A well-organized independent response often follows the pattern:",
   "opts": [
    "Random ideas with no order",
    "Opinion, then reasons, then supporting examples",
    "Only a conclusion",
    "Examples with no stated opinion"
   ],
   "correct": 1,
   "exp": "Stating the opinion, then reasons, then examples gives a clear, logical structure."
  },
  {
   "q": "Transition words such as first, because, and for example help your response by:",
   "opts": [
    "Making it harder to understand",
    "Filling time without meaning",
    "Signaling the connections between your ideas",
    "Replacing content entirely"
   ],
   "correct": 2,
   "exp": "Transitions signal how ideas connect, making the response easier to follow."
  }
 ],
 "Speaking Templates": [
  {
   "q": "A speaking template is most useful because it:",
   "opts": [
    "Provides all the content so you do not think",
    "Lets you avoid answering the prompt",
    "Guarantees a perfect score by itself",
    "Gives a reliable structure so you can focus on content during the short prep time"
   ],
   "correct": 3,
   "exp": "A template supplies structure, freeing your limited prep time to focus on content."
  },
  {
   "q": "A risk of relying too heavily on memorized templates is that:",
   "opts": [
    "Your response may sound rehearsed and fail to address the specific prompt",
    "You will always score higher",
    "Templates make you speak too slowly",
    "Raters cannot hear templates"
   ],
   "correct": 0,
   "exp": "Overusing templates can sound canned and may not fit the actual question asked."
  },
  {
   "q": "The best use of a template is to:",
   "opts": [
    "Recite it word for word regardless of the topic",
    "Adapt its frame while filling it with content specific to the prompt",
    "Replace all original thinking",
    "Use it only in the reading section"
   ],
   "correct": 1,
   "exp": "Templates work best when adapted and filled with prompt-specific content."
  }
 ],
 "Pronunciation": [
  {
   "q": "In TOEFL speaking, pronunciation is scored as part of delivery mainly because it affects:",
   "opts": [
    "The number of ideas you present",
    "The grammar of your sentences",
    "How intelligible and clear your speech is to the listener",
    "Your reading comprehension"
   ],
   "correct": 2,
   "exp": "Clear pronunciation makes speech intelligible, which is central to the delivery score."
  },
  {
   "q": "Which aspect is part of good pronunciation and intonation?",
   "opts": [
    "Speaking in a flat monotone with no stress",
    "Whispering the whole response",
    "Pausing after every single word",
    "Using appropriate word stress, sentence stress, and rising or falling intonation"
   ],
   "correct": 3,
   "exp": "Natural word and sentence stress plus varied intonation mark good pronunciation."
  },
  {
   "q": "You do NOT need a perfect native accent to score well; what matters most is that your speech is:",
   "opts": [
    "Clear and understandable to the listener",
    "Identical to a specific regional accent",
    "As fast as possible",
    "Completely free of any pauses"
   ],
   "correct": 0,
   "exp": "Raters reward clear, understandable speech rather than a particular native accent."
  }
 ],
 "Fluency": [
  {
   "q": "Fluency in speaking refers mainly to:",
   "opts": [
    "Using the largest possible vocabulary",
    "Speaking smoothly at a natural pace without excessive pauses or hesitation",
    "Speaking as loudly as possible",
    "Using perfect grammar only"
   ],
   "correct": 1,
   "exp": "Fluency is smooth, natural-paced speech without frequent hesitation or breaks."
  },
  {
   "q": "Which habit hurts fluency the most?",
   "opts": [
    "Speaking in connected phrases",
    "Using clear transitions",
    "Frequent long pauses and repeated filler sounds like um and uh",
    "Maintaining a steady rhythm"
   ],
   "correct": 2,
   "exp": "Long pauses and repeated fillers break the smooth flow that fluency requires."
  },
  {
   "q": "A good way to improve fluency is to:",
   "opts": [
    "Memorize dictionary definitions",
    "Avoid all practice before the test",
    "Speak only in single words",
    "Practice speaking regularly and thinking in English to reduce hesitation"
   ],
   "correct": 3,
   "exp": "Regular speaking practice and thinking in English reduce hesitation and build fluency."
  }
 ],
 "Speaking Practice": [
  {
   "q": "The most effective way to prepare for the Speaking section is to:",
   "opts": [
    "Practice answering real prompts aloud within the actual time limits",
    "Only read about speaking without ever speaking",
    "Memorize whole answers to unrelated questions",
    "Study only grammar rules"
   ],
   "correct": 0,
   "exp": "Practicing real prompts aloud under timed conditions best prepares you for the section."
  },
  {
   "q": "Recording yourself during speaking practice is helpful because it lets you:",
   "opts": [
    "Avoid ever hearing your mistakes",
    "Review your delivery, pacing, and pronunciation to find areas to improve",
    "Skip the timing rules",
    "Score the test officially"
   ],
   "correct": 1,
   "exp": "Listening to recordings reveals delivery and pronunciation issues you can then fix."
  },
  {
   "q": "When practicing, keeping to the real prep and response times is important because it:",
   "opts": [
    "Makes practice easier than the test",
    "Removes the need to plan",
    "Trains you to organize and deliver a complete answer within the limits",
    "Lets you speak indefinitely"
   ],
   "correct": 2,
   "exp": "Practicing within the true time limits trains you to deliver complete answers on time."
  }
 ],
 "Listening Strategies": [
  {
   "q": "On the TOEFL iBT, how many times is each listening passage played?",
   "opts": [
    "As many times as you click replay",
    "Three times for lectures",
    "Twice automatically",
    "Once only"
   ],
   "correct": 3,
   "exp": "TOEFL listening audio is heard only once, so you must listen actively the first time."
  },
  {
   "q": "Why should you keep listening even after you think you have missed something?",
   "opts": [
    "Stopping to worry makes you miss the next points too",
    "Missed words are shown on screen",
    "The audio will repeat that part",
    "The narrator warns you before key ideas"
   ],
   "correct": 0,
   "exp": "Dwelling on a missed detail causes you to lose the information that follows, so keep listening forward."
  },
  {
   "q": "What is the most effective way to prepare your mind before the audio begins?",
   "opts": [
    "Memorize the answer choices word for word",
    "Predict the topic and speaker relationship from the direction line",
    "Translate the directions into your first language",
    "Read the transcript that appears beside the audio"
   ],
   "correct": 1,
   "exp": "Anticipating whether it is a lecture or conversation and the likely topic primes you to follow the content."
  }
 ],
 "Note-Taking": [
  {
   "q": "What should good TOEFL listening notes focus on capturing?",
   "opts": [
    "Every word the speaker says",
    "Only the speaker's first sentence",
    "The main ideas and how key details connect to them",
    "The exact grammar the speaker uses"
   ],
   "correct": 2,
   "exp": "Effective notes separate main ideas from supporting details rather than transcribing everything."
  },
  {
   "q": "Why are abbreviations and symbols recommended when taking notes?",
   "opts": [
    "They are required by the test rules",
    "They make your notes look academic",
    "They are graded for neatness",
    "They let you write faster so you can keep listening"
   ],
   "correct": 3,
   "exp": "Shorthand keeps your hand from falling behind the audio, which plays only once."
  },
  {
   "q": "Which note structure best shows the relationship between a main point and its examples?",
   "opts": [
    "Indented bullets with the main idea on the left and examples beneath it",
    "Random words scattered on the page",
    "A word-for-word transcript",
    "A single long paragraph"
   ],
   "correct": 0,
   "exp": "Indentation visually distinguishes main ideas from the details that support them."
  }
 ],
 "Campus Conversations": [
  {
   "q": "A typical TOEFL campus conversation usually involves which situation?",
   "opts": [
    "Two professors debating research",
    "A student solving a problem with a professor or university staff member",
    "A news broadcast about the campus",
    "A lecture on biology"
   ],
   "correct": 1,
   "exp": "Campus conversations are non-academic dialogues, often a student seeking help with a practical problem."
  },
  {
   "q": "When listening to a campus conversation, what is especially important to identify?",
   "opts": [
    "The exact building numbers mentioned",
    "The professor's academic publications",
    "The student's problem and the solution offered",
    "The precise time of day"
   ],
   "correct": 2,
   "exp": "The core of most conversations is the problem the student has and how it gets resolved."
  },
  {
   "q": "Which vocabulary type is most common in campus conversations compared with lectures?",
   "opts": [
    "Highly technical scientific terms",
    "Legal terminology",
    "Poetic and literary language",
    "Everyday practical and service-related language"
   ],
   "correct": 3,
   "exp": "Conversations use practical service language about registration, housing, deadlines, and similar campus matters."
  }
 ],
 "Academic Lectures": [
  {
   "q": "How do academic lectures differ from campus conversations on the TOEFL?",
   "opts": [
    "They present subject content, often with one main speaker explaining a topic",
    "They are always shorter",
    "They never include student voices",
    "They are always about literature"
   ],
   "correct": 0,
   "exp": "Lectures deliver academic content on a subject, unlike the practical dialogues of conversations."
  },
  {
   "q": "What signals in a lecture often mark an important point you should note?",
   "opts": [
    "Background noise",
    "Emphasis words like the key point is or most importantly",
    "The narrator's introduction only",
    "The length of pauses between words"
   ],
   "correct": 1,
   "exp": "Discourse markers of emphasis flag the ideas the questions are most likely to test."
  },
  {
   "q": "Why might a professor mention a specific example during a lecture?",
   "opts": [
    "To fill unused time",
    "To confuse the listener",
    "To illustrate or support a broader concept just introduced",
    "To read from a textbook"
   ],
   "correct": 2,
   "exp": "Examples in lectures typically serve to clarify or back up a larger idea."
  }
 ],
 "Main Idea Questions": [
  {
   "q": "What does a main idea question ask you to identify?",
   "opts": [
    "The speaker's tone of voice",
    "A single specific fact stated once",
    "The meaning of one difficult word",
    "The overall topic or purpose of the whole passage"
   ],
   "correct": 3,
   "exp": "Main idea questions target the central point of the entire lecture or conversation."
  },
  {
   "q": "Which answer choice is usually WRONG for a main idea question?",
   "opts": [
    "One that focuses on a minor detail mentioned briefly",
    "One that captures the overall purpose",
    "One that restates the central theme",
    "A statement summarizing the whole talk"
   ],
   "correct": 0,
   "exp": "A choice about a small detail is too narrow to be the main idea of the whole passage."
  },
  {
   "q": "Where in a lecture is the main idea most often introduced?",
   "opts": [
    "Only in the middle",
    "Near the beginning, and sometimes restated at the end",
    "Never stated, only implied",
    "In the answer choices"
   ],
   "correct": 1,
   "exp": "Speakers commonly state the main idea early and reinforce it in the conclusion."
  }
 ],
 "Detail Questions": [
  {
   "q": "What do detail questions test?",
   "opts": [
    "Your opinion of the topic",
    "The overall theme of the passage",
    "Specific facts or points the speaker stated",
    "Your memory of the passage title"
   ],
   "correct": 2,
   "exp": "Detail questions ask about particular pieces of information explicitly mentioned in the audio."
  },
  {
   "q": "Why are clear notes helpful for detail questions?",
   "opts": [
    "Because details never appear in questions",
    "Because details are always in the first sentence",
    "Because you can replay the audio if unsure",
    "Because the audio is only played once and details are easy to forget"
   ],
   "correct": 3,
   "exp": "Since the audio plays only once, notes preserve the specific facts you cannot re-hear."
  },
  {
   "q": "A detail-question answer that uses exact words from the audio but changes the meaning is called what?",
   "opts": [
    "A distractor designed to trap careless listeners",
    "The correct answer",
    "A main idea",
    "An inference"
   ],
   "correct": 0,
   "exp": "Such trap choices repeat familiar words but distort what was actually said."
  }
 ],
 "Purpose Questions": [
  {
   "q": "A purpose question typically asks what?",
   "opts": [
    "What a difficult word means",
    "Why the speaker says something or why the conversation takes place",
    "How long the passage lasted",
    "What grade the student received"
   ],
   "correct": 1,
   "exp": "Purpose questions probe the reason behind a statement or the goal of the talk."
  },
  {
   "q": "To answer why a professor mentions a particular example, you should consider what?",
   "opts": [
    "How many words the example took",
    "The exact spelling of the example",
    "The function of the example within the surrounding explanation",
    "Whether you personally like the example"
   ],
   "correct": 2,
   "exp": "Understanding how the example fits the larger point reveals the speaker's purpose."
  },
  {
   "q": "In a campus conversation, a common purpose for the student visiting is what?",
   "opts": [
    "To deliver a lecture",
    "To grade the professor",
    "To read announcements",
    "To request help or resolve a specific problem"
   ],
   "correct": 3,
   "exp": "Students usually approach staff to solve a problem, which is the conversation's purpose."
  }
 ],
 "Attitude Questions": [
  {
   "q": "What do attitude questions focus on?",
   "opts": [
    "The speaker's feelings, opinion, or degree of certainty",
    "The exact statistics given",
    "The length of the lecture",
    "The number of examples used"
   ],
   "correct": 0,
   "exp": "Attitude questions test how the speaker feels or how sure they are about something."
  },
  {
   "q": "Besides the words used, what best reveals a speaker's attitude?",
   "opts": [
    "The question numbers",
    "The tone of voice and stress in the audio",
    "The color of the screen",
    "The length of your notes"
   ],
   "correct": 1,
   "exp": "Tone, emphasis, and intonation often signal attitude beyond the literal words."
  },
  {
   "q": "If a speaker says an idea is interesting but then lists several problems with it, their attitude is best described as what?",
   "opts": [
    "Completely enthusiastic",
    "Totally indifferent",
    "Skeptical or having reservations",
    "Angry and hostile"
   ],
   "correct": 2,
   "exp": "Praising then raising problems signals doubt or reservations rather than full agreement."
  }
 ],
 "Writing Overview": [
  {
   "q": "How many writing tasks does the current TOEFL iBT include?",
   "opts": [
    "One task only",
    "Three narrative tasks",
    "Five separate essays",
    "Two tasks: an integrated task and an academic discussion task"
   ],
   "correct": 3,
   "exp": "The writing section contains an integrated task and an academic discussion writing task."
  },
  {
   "q": "What is graded most heavily across TOEFL writing tasks?",
   "opts": [
    "How clearly ideas are developed, organized, and expressed",
    "The color of formatting",
    "Handwriting neatness",
    "The number of rare words used"
   ],
   "correct": 0,
   "exp": "Scores reward clear development, organization, and effective language use over showy vocabulary."
  },
  {
   "q": "Why is planning time before writing recommended?",
   "opts": [
    "It replaces the need to write anything",
    "It helps organize ideas so the response is coherent and on-topic",
    "It lets you copy the prompt",
    "It is required to be exactly ten minutes"
   ],
   "correct": 1,
   "exp": "A brief plan produces a more organized, focused response within the time limit."
  }
 ],
 "Integrated Writing": [
  {
   "q": "What must the integrated writing response mainly do?",
   "opts": [
    "Summarize just the reading",
    "Give only your personal opinion",
    "Explain how the lecture relates to the reading passage",
    "Describe your daily routine"
   ],
   "correct": 2,
   "exp": "The task requires summarizing how the lecture supports or challenges the reading points."
  },
  {
   "q": "Whose ideas should the integrated response contain?",
   "opts": [
    "Only your own new opinions",
    "Only the reading's ideas",
    "Ideas invented for the essay",
    "The ideas from both the reading and the lecture, not your personal opinion"
   ],
   "correct": 3,
   "exp": "You report the source materials' points objectively rather than adding personal views."
  },
  {
   "q": "In most integrated tasks, how does the lecture relate to the reading?",
   "opts": [
    "It usually casts doubt on or contradicts the reading's points",
    "It changes the subject entirely",
    "It repeats the reading word for word",
    "It is unrelated to the reading"
   ],
   "correct": 0,
   "exp": "The lecture typically challenges or counters each point made in the reading."
  }
 ],
 "Academic Discussion Writing": [
  {
   "q": "In the academic discussion task, what are you asked to do?",
   "opts": [
    "Summarize a lecture only",
    "Contribute your own opinion to an online class discussion with support",
    "Translate a professor's post",
    "Correct grammar in a passage"
   ],
   "correct": 1,
   "exp": "You must state and support your own view in response to a professor's discussion question."
  },
  {
   "q": "How should you treat the classmates' posts shown in the prompt?",
   "opts": [
    "Copy them exactly as your answer",
    "Ignore the professor's question entirely",
    "Engage with them while adding your own clear position and reasons",
    "Grade them for accuracy"
   ],
   "correct": 2,
   "exp": "A strong response acknowledges the discussion and adds your own supported contribution."
  },
  {
   "q": "What makes an academic discussion response strong?",
   "opts": [
    "Avoiding any personal viewpoint",
    "The longest possible word count",
    "Listing every classmate's name",
    "A clear opinion backed by specific reasons or examples"
   ],
   "correct": 3,
   "exp": "A relevant, well-supported personal position is the core of a high-scoring discussion post."
  }
 ],
 "Essay Structure": [
  {
   "q": "A well-structured TOEFL essay generally follows which pattern?",
   "opts": [
    "Introduction, body paragraphs, and conclusion",
    "One long unbroken paragraph",
    "Only a conclusion",
    "A list of unconnected sentences"
   ],
   "correct": 0,
   "exp": "The standard structure is an introduction, developed body paragraphs, and a conclusion."
  },
  {
   "q": "What is the main function of a body paragraph?",
   "opts": [
    "To introduce the entire essay topic",
    "To develop one main point with supporting details",
    "To end the essay",
    "To list the title only"
   ],
   "correct": 1,
   "exp": "Each body paragraph focuses on a single point and develops it with support."
  },
  {
   "q": "Why does clear paragraph organization improve your score?",
   "opts": [
    "It uses more difficult words",
    "It makes the essay longer automatically",
    "It helps the reader follow your ideas logically",
    "It hides weak arguments"
   ],
   "correct": 2,
   "exp": "Logical organization lets the reader follow the argument, which raises the coherence score."
  }
 ],
 "Thesis Statements": [
  {
   "q": "What is the purpose of a thesis statement?",
   "opts": [
    "To summarize the reading passage",
    "To list every vocabulary word",
    "To ask the reader a question",
    "To state the essay's main claim or position clearly"
   ],
   "correct": 3,
   "exp": "The thesis expresses the central claim the rest of the essay will support."
  },
  {
   "q": "Where is the thesis statement usually placed?",
   "opts": [
    "In the introduction, often at the end of it",
    "In the middle of a body paragraph",
    "Only in the conclusion",
    "In the title line"
   ],
   "correct": 0,
   "exp": "The thesis typically appears in the introduction to set up the essay's direction."
  },
  {
   "q": "Which of these is the strongest thesis statement?",
   "opts": [
    "This essay is about technology",
    "Schools should limit smartphone use because it improves focus and reduces distraction",
    "There are many opinions about technology",
    "Technology exists in schools"
   ],
   "correct": 1,
   "exp": "A strong thesis takes a clear position and previews the supporting reasons."
  }
 ],
 "Supporting Ideas": [
  {
   "q": "What is the role of supporting ideas in an essay?",
   "opts": [
    "To introduce new unrelated topics",
    "To restate the thesis word for word",
    "To provide reasons, examples, and details that back up the thesis",
    "To fill space without meaning"
   ],
   "correct": 2,
   "exp": "Supporting ideas give the reasons and examples that make the thesis convincing."
  },
  {
   "q": "Which type of support is generally most convincing?",
   "opts": [
    "A vague general statement",
    "An unrelated fact",
    "A repeated phrase",
    "A specific example or concrete detail"
   ],
   "correct": 3,
   "exp": "Specific examples and concrete details strengthen an argument more than vague claims."
  },
  {
   "q": "A supporting idea should always do what?",
   "opts": [
    "Clearly relate to and reinforce the main point",
    "Introduce a brand-new topic",
    "Be left unexplained",
    "Contradict the thesis"
   ],
   "correct": 0,
   "exp": "Effective support must connect directly to and reinforce the paragraph's main point."
  }
 ],
 "Transitions": [
  {
   "q": "What is the main purpose of transition words in writing?",
   "opts": [
    "To increase the word count only",
    "To connect ideas and show relationships between them",
    "To replace the thesis",
    "To confuse the reader"
   ],
   "correct": 1,
   "exp": "Transitions link ideas and signal how one point relates to the next."
  },
  {
   "q": "Which transition best signals a contrast between two ideas?",
   "opts": [
    "For example",
    "In addition",
    "However",
    "Therefore"
   ],
   "correct": 2,
   "exp": "However introduces a contrasting idea, unlike additive or example transitions."
  },
  {
   "q": "Which transition would best introduce a result or conclusion?",
   "opts": [
    "In contrast",
    "On the other hand",
    "For instance",
    "As a result"
   ],
   "correct": 3,
   "exp": "As a result signals that what follows is a consequence of the previous point."
  }
 ],
 "Editing": [
  {
   "q": "Why is it important to leave a few minutes to edit your essay?",
   "opts": [
    "To catch grammar, spelling, and clarity errors before submitting",
    "To add more paragraphs",
    "To change your entire topic",
    "To copy the prompt again"
   ],
   "correct": 0,
   "exp": "A quick edit catches small errors that lower the language-use score."
  },
  {
   "q": "During editing, which is a good practice?",
   "opts": [
    "Ignoring subject-verb agreement",
    "Checking that each sentence is clear and grammatically correct",
    "Rewriting the whole essay from scratch",
    "Deleting all transitions"
   ],
   "correct": 1,
   "exp": "Reviewing sentences for clarity and correct grammar improves the final quality."
  },
  {
   "q": "What should you check to ensure your essay stays on task while editing?",
   "opts": [
    "That the font is large",
    "That there are many rare words",
    "That every paragraph relates to the thesis and prompt",
    "That the essay is the longest possible"
   ],
   "correct": 2,
   "exp": "Confirming each paragraph addresses the prompt keeps the response focused and relevant."
  }
 ],
 "Model Essays": [
  {
   "q": "What is the best way to learn from a model essay?",
   "opts": [
    "Memorize it and reuse it word for word on the test",
    "Only count its words",
    "Ignore its organization",
    "Analyze its structure, thesis, and use of support"
   ],
   "correct": 3,
   "exp": "Studying how a model builds its argument teaches transferable writing techniques."
  },
  {
   "q": "Why is memorizing a full model essay to reuse a poor strategy?",
   "opts": [
    "The prompt will differ, so a memorized essay will not fit the task",
    "Models are always wrong",
    "It takes too long to read",
    "Essays cannot be memorized"
   ],
   "correct": 0,
   "exp": "A memorized essay rarely matches the actual prompt and can lower your relevance score."
  },
  {
   "q": "A high-scoring model essay usually demonstrates what?",
   "opts": [
    "Random ideas with no order",
    "A clear thesis, organized paragraphs, and relevant support",
    "Only simple lists",
    "No thesis at all"
   ],
   "correct": 1,
   "exp": "Model essays showcase clear organization, a strong thesis, and well-developed support."
  }
 ]
};

})();
