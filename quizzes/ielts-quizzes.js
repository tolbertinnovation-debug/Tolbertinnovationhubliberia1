/* TIH — authored per-topic quiz questions for a single course.
   Split out of the 567 KB topic-quizzes.js, which the course player loaded
   in full even for the 20 courses that have no entry in it. The curriculum
   builder reads this at build time, so the loader fetches it first. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['ielts'] = {
 "English Alphabet & Pronunciation": [
  {
   "q": "How many letters are in the English alphabet?",
   "opts": [
    "24",
    "25",
    "26",
    "28"
   ],
   "correct": 2,
   "exp": "The English alphabet has 26 letters, from A to Z."
  },
  {
   "q": "Which group of letters are the vowels in English?",
   "opts": [
    "L, M, N, O, P",
    "B, C, D, F, G",
    "A, B, C, D, E",
    "A, E, I, O, U"
   ],
   "correct": 3,
   "exp": "A, E, I, O, U are the five vowels; all other letters are consonants."
  },
  {
   "q": "Which word contains a silent letter?",
   "opts": [
    "knife",
    "cat",
    "dog",
    "run"
   ],
   "correct": 0,
   "exp": "In knife the letter k is silent, so it is pronounced nife."
  }
 ],
 "Basic Grammar": [
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "She go to school every day.",
    "She goes to school every day.",
    "She going to school every day.",
    "She gone to school every day."
   ],
   "correct": 1,
   "exp": "With the subject she in present simple, the verb takes -s, so goes is correct."
  },
  {
   "q": "Which is the correct plural of the word child?",
   "opts": [
    "childs",
    "childes",
    "children",
    "childrens"
   ],
   "correct": 2,
   "exp": "Child has an irregular plural, children, not formed by adding -s."
  },
  {
   "q": "Choose the correct article: I saw ___ elephant at the zoo.",
   "opts": [
    "a",
    "no article",
    "the",
    "an"
   ],
   "correct": 3,
   "exp": "Elephant begins with a vowel sound, so it takes an."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence The dog runs fast, which word is a verb?",
   "opts": [
    "runs",
    "dog",
    "fast",
    "the"
   ],
   "correct": 0,
   "exp": "Runs is the action word, which makes it the verb."
  },
  {
   "q": "Which word in this list is a noun?",
   "opts": [
    "quickly",
    "happiness",
    "beautiful",
    "and"
   ],
   "correct": 1,
   "exp": "Happiness names a thing or idea, so it is a noun."
  },
  {
   "q": "What part of speech is the word slowly in She walked slowly?",
   "opts": [
    "adjective",
    "noun",
    "adverb",
    "preposition"
   ],
   "correct": 2,
   "exp": "Slowly describes how the verb walked happens, so it is an adverb."
  }
 ],
 "Common Vocabulary": [
  {
   "q": "What is the opposite (antonym) of the word big?",
   "opts": [
    "large",
    "tall",
    "huge",
    "small"
   ],
   "correct": 3,
   "exp": "Small is the opposite of big; large and huge are synonyms of big."
  },
  {
   "q": "Which word means the same as happy?",
   "opts": [
    "glad",
    "angry",
    "sad",
    "tired"
   ],
   "correct": 0,
   "exp": "Glad is a synonym of happy."
  },
  {
   "q": "Which of these words is a type of fruit?",
   "opts": [
    "carrot",
    "banana",
    "potato",
    "onion"
   ],
   "correct": 1,
   "exp": "A banana is a fruit; the others are vegetables."
  }
 ],
 "Sentence Structure": [
  {
   "q": "What is the basic word order of a simple English sentence?",
   "opts": [
    "Verb, Subject, Object",
    "Object, Verb, Subject",
    "Subject, Verb, Object",
    "Subject, Object, Verb"
   ],
   "correct": 2,
   "exp": "English follows Subject, Verb, Object order, as in She eats rice."
  },
  {
   "q": "Which of these is a complete sentence?",
   "opts": [
    "Running in the park.",
    "The tall boy.",
    "Because it rained.",
    "Birds fly."
   ],
   "correct": 3,
   "exp": "Birds fly has both a subject and a verb, making it a complete sentence."
  },
  {
   "q": "In the sentence Mary reads books, which word is the object?",
   "opts": [
    "books",
    "reads",
    "Mary",
    "none"
   ],
   "correct": 0,
   "exp": "Books receives the action of the verb reads, so it is the object."
  }
 ],
 "Daily Conversations": [
  {
   "q": "What is a polite response when someone says Thank you?",
   "opts": [
    "Goodbye",
    "You are welcome",
    "How are you",
    "See you"
   ],
   "correct": 1,
   "exp": "You are welcome is the standard polite reply to Thank you."
  },
  {
   "q": "If a shopkeeper asks How much is this?, what are they asking about?",
   "opts": [
    "the size",
    "the color",
    "the price",
    "the time"
   ],
   "correct": 2,
   "exp": "How much is this? asks about the price of an item."
  },
  {
   "q": "Which reply best answers the question Would you like some water?",
   "opts": [
    "It is Monday.",
    "The store is open.",
    "My name is Sam.",
    "Yes, please."
   ],
   "correct": 3,
   "exp": "Yes, please is a natural, polite reply accepting the offer."
  }
 ],
 "Greetings & Introductions": [
  {
   "q": "Which greeting is most suitable early in the morning?",
   "opts": [
    "Good morning",
    "Good afternoon",
    "Good night",
    "Goodbye"
   ],
   "correct": 0,
   "exp": "Good morning is used to greet someone before noon."
  },
  {
   "q": "How do you politely respond to Nice to meet you?",
   "opts": [
    "No, thank you.",
    "Nice to meet you too.",
    "I am fine, go away.",
    "It is raining."
   ],
   "correct": 1,
   "exp": "Nice to meet you too returns the polite greeting."
  },
  {
   "q": "Which sentence correctly introduces yourself?",
   "opts": [
    "This is my friend Ama.",
    "She is a teacher.",
    "My name is John.",
    "They live in Monrovia."
   ],
   "correct": 2,
   "exp": "My name is John introduces yourself by giving your own name."
  }
 ],
 "Numbers, Dates & Time": [
  {
   "q": "How do you write the number fifteen in digits?",
   "opts": [
    "50",
    "500",
    "5",
    "15"
   ],
   "correct": 3,
   "exp": "Fifteen is written as 15."
  },
  {
   "q": "What time is it when the clock shows half past three?",
   "opts": [
    "3:30",
    "3:15",
    "3:45",
    "2:30"
   ],
   "correct": 0,
   "exp": "Half past three means thirty minutes after three, which is 3:30."
  },
  {
   "q": "Which of these is a correct way to say a date?",
   "opts": [
    "The twelve of August",
    "The twelfth of August",
    "August twelve day",
    "The month August twelve"
   ],
   "correct": 1,
   "exp": "Dates use ordinal numbers, so the twelfth of August is correct."
  }
 ],
 "Family & Friends": [
  {
   "q": "What do you call your mother's brother?",
   "opts": [
    "cousin",
    "nephew",
    "uncle",
    "grandfather"
   ],
   "correct": 2,
   "exp": "Your mother's brother is your uncle."
  },
  {
   "q": "Who is your sibling?",
   "opts": [
    "your friend",
    "your teacher",
    "your neighbour",
    "your brother or sister"
   ],
   "correct": 3,
   "exp": "A sibling is a brother or sister."
  },
  {
   "q": "What word describes the child of your aunt or uncle?",
   "opts": [
    "cousin",
    "grandchild",
    "niece",
    "in-law"
   ],
   "correct": 0,
   "exp": "The child of your aunt or uncle is your cousin."
  }
 ],
 "Describing People": [
  {
   "q": "Which word describes a person's height?",
   "opts": [
    "kind",
    "tall",
    "friendly",
    "clever"
   ],
   "correct": 1,
   "exp": "Tall describes physical height; the others describe personality."
  },
  {
   "q": "Which adjective describes someone's personality rather than appearance?",
   "opts": [
    "slim",
    "short",
    "generous",
    "bald"
   ],
   "correct": 2,
   "exp": "Generous describes a personality trait, while the others describe appearance."
  },
  {
   "q": "Complete the sentence: She has long, curly ___.",
   "opts": [
    "eyes",
    "shoes",
    "hands",
    "hair"
   ],
   "correct": 3,
   "exp": "Long and curly are words used to describe hair."
  }
 ],
 "Listening for Names and Numbers": [
  {
   "q": "When someone spells a name aloud in a listening test, what should you write?",
   "opts": [
    "each letter in order",
    "only the first letter",
    "just a summary",
    "the meaning of the name"
   ],
   "correct": 0,
   "exp": "You must note each letter in order to record the spelled name correctly."
  },
  {
   "q": "You hear the phone number double five, three, one. How is it written?",
   "opts": [
    "531",
    "5531",
    "553 1",
    "55 31"
   ],
   "correct": 1,
   "exp": "Double five means two fives, so it is 5531."
  },
  {
   "q": "Why is it important to listen for small differences like fifteen and fifty?",
   "opts": [
    "they mean the same",
    "they are both spellings of names",
    "they sound similar but are different numbers",
    "they are never used"
   ],
   "correct": 2,
   "exp": "Fifteen and fifty sound alike but are very different numbers, so careful listening matters."
  }
 ],
 "Listening for Directions": [
  {
   "q": "If you are told to turn left at the traffic lights, which way do you go?",
   "opts": [
    "to the right",
    "backwards",
    "straight ahead",
    "to the left"
   ],
   "correct": 3,
   "exp": "Turn left means you go to your left side."
  },
  {
   "q": "What does the instruction go straight on mean?",
   "opts": [
    "continue forward without turning",
    "stop walking",
    "turn around",
    "turn right"
   ],
   "correct": 0,
   "exp": "Go straight on means keep moving forward in the same direction."
  },
  {
   "q": "If the bank is opposite the school, where is it?",
   "opts": [
    "next to the school",
    "on the other side facing the school",
    "behind the school",
    "inside the school"
   ],
   "correct": 1,
   "exp": "Opposite means directly across, facing the school from the other side."
  }
 ],
 "Everyday Conversations": [
  {
   "q": "In a listening test, what does a speaker usually mean by Could you repeat that?",
   "opts": [
    "they want you to leave",
    "they agree fully",
    "they did not hear and want it said again",
    "they are ending the talk"
   ],
   "correct": 2,
   "exp": "Could you repeat that? asks the other person to say something again."
  },
  {
   "q": "A speaker says the meeting is put off until Friday. What happened to the meeting?",
   "opts": [
    "it was cancelled forever",
    "it is happening now",
    "it started early",
    "it was moved to a later time"
   ],
   "correct": 3,
   "exp": "Put off is a phrasal verb meaning to postpone, so it moved to a later time."
  },
  {
   "q": "If someone says I am afraid I cannot make it, what do they mean?",
   "opts": [
    "they cannot attend",
    "they are scared",
    "they are lost",
    "they will arrive early"
   ],
   "correct": 0,
   "exp": "I cannot make it politely means the person is unable to attend."
  }
 ],
 "Understanding Simple Instructions": [
  {
   "q": "The instruction says Fill in the form using capital letters. How should you write?",
   "opts": [
    "in small letters",
    "in uppercase letters",
    "in cursive only",
    "in numbers"
   ],
   "correct": 1,
   "exp": "Capital letters means uppercase letters such as A, B, C."
  },
  {
   "q": "If told Do not write more than three words, what is an acceptable answer?",
   "opts": [
    "a five word phrase",
    "a full sentence",
    "a two word phrase",
    "a paragraph"
   ],
   "correct": 2,
   "exp": "A two word phrase obeys the limit of no more than three words."
  },
  {
   "q": "The instruction says Choose two answers. How many should you select?",
   "opts": [
    "one",
    "all of them",
    "three",
    "two"
   ],
   "correct": 3,
   "exp": "Choose two answers means you must select exactly two."
  }
 ],
 "Note Completion Practice": [
  {
   "q": "In note completion, why should you predict the type of word before listening?",
   "opts": [
    "to know if you need a noun, number, or date",
    "to guess the whole answer",
    "to finish faster without listening",
    "to change the question"
   ],
   "correct": 0,
   "exp": "Predicting the word type helps you catch the right kind of answer when you hear it."
  },
  {
   "q": "If a note gap reads Cost: $___ , what kind of answer do you expect?",
   "opts": [
    "a name",
    "a number or amount",
    "a colour",
    "a place"
   ],
   "correct": 1,
   "exp": "The dollar sign signals that a number or amount belongs in the gap."
  },
  {
   "q": "What should you do if you miss one answer during note completion?",
   "opts": [
    "stop the whole test",
    "write anything random and panic",
    "keep listening for the next answers",
    "go back and replay it"
   ],
   "correct": 2,
   "exp": "You cannot replay the audio, so keep going and focus on the following answers."
  }
 ],
 "Form Completion Practice": [
  {
   "q": "On a form, what usually goes in the field labelled Surname?",
   "opts": [
    "your address",
    "your first name",
    "your age",
    "your family or last name"
   ],
   "correct": 3,
   "exp": "Surname means your family name or last name."
  },
  {
   "q": "A form asks for Date of Birth. What information is needed?",
   "opts": [
    "the day you were born",
    "today's date",
    "your appointment date",
    "the year you started school"
   ],
   "correct": 0,
   "exp": "Date of Birth is the day, month, and year you were born."
  },
  {
   "q": "If a form field says Postcode, what should you write there?",
   "opts": [
    "a phone number",
    "a mailing or area code for the address",
    "your full name",
    "an email"
   ],
   "correct": 1,
   "exp": "A postcode is the code used to identify a postal area or address."
  }
 ],
 "Skimming and Scanning": [
  {
   "q": "What is the main purpose of skimming a text?",
   "opts": [
    "to find one specific number",
    "to memorise every word",
    "to get the general idea quickly",
    "to check spelling"
   ],
   "correct": 2,
   "exp": "Skimming means reading quickly to understand the overall or general idea."
  },
  {
   "q": "When would you use scanning?",
   "opts": [
    "to translate the text",
    "to enjoy a story slowly",
    "to understand the writer's mood",
    "to find a specific name or date fast"
   ],
   "correct": 3,
   "exp": "Scanning is used to locate specific information such as a name, number, or date."
  },
  {
   "q": "Which reading skill helps you answer How many people attended? most efficiently?",
   "opts": [
    "scanning",
    "skimming",
    "reading every word",
    "reading the title only"
   ],
   "correct": 0,
   "exp": "Scanning quickly locates the specific number needed to answer the question."
  }
 ],
 "Finding Main Ideas": [
  {
   "q": "Where is the main idea of a paragraph often found?",
   "opts": [
    "hidden in the middle only",
    "in the first or topic sentence",
    "never stated",
    "only in the last word"
   ],
   "correct": 1,
   "exp": "The main idea is frequently expressed in the topic sentence, often the first sentence."
  },
  {
   "q": "What is the main idea of a paragraph?",
   "opts": [
    "a small supporting detail",
    "an example given",
    "the most important point it makes",
    "the longest sentence"
   ],
   "correct": 2,
   "exp": "The main idea is the central and most important point of the paragraph."
  },
  {
   "q": "Which of these is a supporting detail rather than a main idea?",
   "opts": [
    "Exercise improves health.",
    "Health matters to everyone.",
    "Staying healthy is important.",
    "For example, walking strengthens the heart."
   ],
   "correct": 3,
   "exp": "The example about walking supports and explains the broader main idea."
  }
 ],
 "Reading Advertisements": [
  {
   "q": "What is the main purpose of an advertisement?",
   "opts": [
    "to persuade you to buy or use something",
    "to teach grammar",
    "to tell a long story",
    "to report the news"
   ],
   "correct": 0,
   "exp": "Advertisements are written to persuade people to buy a product or use a service."
  },
  {
   "q": "In a job advert, what does the word required usually indicate?",
   "opts": [
    "something optional",
    "something you must have",
    "something forbidden",
    "something free"
   ],
   "correct": 1,
   "exp": "Required means the qualification or item is necessary and must be provided."
  },
  {
   "q": "If an advert says Sale ends Sunday, what information is this giving?",
   "opts": [
    "the price",
    "the shop's name",
    "the deadline for the offer",
    "the product colour"
   ],
   "correct": 2,
   "exp": "Sale ends Sunday tells you the last day, or deadline, of the offer."
  }
 ],
 "Reading Emails and Messages": [
  {
   "q": "What does the Subject line of an email tell you?",
   "opts": [
    "the password",
    "the sender's home address",
    "the time you must reply",
    "the topic of the email"
   ],
   "correct": 3,
   "exp": "The subject line briefly states what the email is about."
  },
  {
   "q": "If an email ends with Please reply by Friday, what is being requested?",
   "opts": [
    "a response before Friday",
    "to delete the message",
    "to forward it to everyone",
    "to ignore it"
   ],
   "correct": 0,
   "exp": "Please reply by Friday asks the reader to respond before that day."
  },
  {
   "q": "In a message, what does the greeting Dear Mr. Johnson suggest about its tone?",
   "opts": [
    "it is very casual",
    "it is formal and polite",
    "it is angry",
    "it is a joke"
   ],
   "correct": 1,
   "exp": "Dear followed by a title and surname signals a formal, polite tone."
  }
 ],
 "Reading Short Articles": [
  {
   "q": "What is usually the best way to start reading a short article for meaning?",
   "opts": [
    "count the paragraphs",
    "read only the last word",
    "read the title and first paragraph",
    "look at nothing"
   ],
   "correct": 2,
   "exp": "The title and first paragraph often reveal the article's topic and main point."
  },
  {
   "q": "If an article asks a question in its title, what is the writer likely to do in the text?",
   "opts": [
    "ignore the question",
    "list only names",
    "change the language",
    "answer or discuss that question"
   ],
   "correct": 3,
   "exp": "A question title signals that the article will explore or answer that question."
  },
  {
   "q": "What does the conclusion of a short article usually do?",
   "opts": [
    "sum up the main point",
    "introduce a brand new topic",
    "list the writer's address",
    "start the story"
   ],
   "correct": 0,
   "exp": "The conclusion usually summarises or restates the main point of the article."
  }
 ],
 "Vocabulary Building": [
  {
   "q": "What is a synonym?",
   "opts": [
    "a word with the opposite meaning",
    "a word with a similar meaning",
    "a spelling mistake",
    "a punctuation mark"
   ],
   "correct": 1,
   "exp": "A synonym is a word that has a similar meaning to another word."
  },
  {
   "q": "Using context, what does the underlined word mean in The arid desert had almost no water?",
   "opts": [
    "very wet",
    "very cold",
    "very dry",
    "very crowded"
   ],
   "correct": 2,
   "exp": "The clue almost no water shows that arid means very dry."
  },
  {
   "q": "What does the prefix un- usually add to a word, as in unhappy?",
   "opts": [
    "makes it plural",
    "makes it a question",
    "makes it past tense",
    "makes it a negative or opposite"
   ],
   "correct": 3,
   "exp": "The prefix un- reverses the meaning, so unhappy means not happy."
  }
 ],
 "Sentence Writing": [
  {
   "q": "Which of the following is a complete, correctly written sentence?",
   "opts": [
    "The students finished their exam on time.",
    "Running to the market every morning.",
    "Because the weather was hot.",
    "When we arrived at the school."
   ],
   "correct": 0,
   "exp": "It has a subject (The students) and a complete verb phrase (finished), so it stands alone as a full sentence."
  },
  {
   "q": "What is the minimum a group of words needs to be a complete sentence in English?",
   "opts": [
    "At least ten words",
    "A subject and a complete verb",
    "A comma and a conjunction",
    "An adjective and an adverb"
   ],
   "correct": 1,
   "exp": "Every complete sentence must contain a subject and a finite verb that together express a full idea."
  },
  {
   "q": "Which sentence correctly joins two complete ideas without an error?",
   "opts": [
    "I studied hard, I passed the test.",
    "I studied hard passed the test.",
    "I studied hard, and I passed the test.",
    "I studied, hard so passed test."
   ],
   "correct": 2,
   "exp": "A comma plus the coordinating conjunction 'and' correctly links two independent clauses."
  }
 ],
 "Paragraph Writing": [
  {
   "q": "What is the main job of a topic sentence in a paragraph?",
   "opts": [
    "To give a final example",
    "To list references and sources",
    "To ask the reader a question",
    "To state the main idea of the paragraph"
   ],
   "correct": 3,
   "exp": "The topic sentence introduces and controls the central idea that the rest of the paragraph develops."
  },
  {
   "q": "A well-structured paragraph should focus on how many main ideas?",
   "opts": [
    "One main idea",
    "Three main ideas",
    "As many as possible",
    "No main idea at all"
   ],
   "correct": 0,
   "exp": "Good paragraph unity means each paragraph develops a single controlling idea."
  },
  {
   "q": "Which word best signals that you are adding a supporting point in a paragraph?",
   "opts": [
    "However",
    "Furthermore",
    "Instead",
    "Nevertheless"
   ],
   "correct": 1,
   "exp": "'Furthermore' adds and reinforces an idea, while the others signal contrast."
  }
 ],
 "Describing Places": [
  {
   "q": "Which sentence best describes a place using vivid detail?",
   "opts": [
    "The market is a place.",
    "I went to the market.",
    "The market was busy, with colourful stalls and the smell of fresh fish.",
    "The market is good."
   ],
   "correct": 2,
   "exp": "It uses specific sensory details (colourful stalls, smell of fresh fish) to paint a clear picture."
  },
  {
   "q": "Which group of words are prepositions useful for describing where things are located?",
   "opts": [
    "happy, sad, tired",
    "quickly, slowly, well",
    "run, walk, sit",
    "beside, opposite, near"
   ],
   "correct": 3,
   "exp": "'Beside', 'opposite' and 'near' are prepositions of place that show location."
  },
  {
   "q": "When describing a place in IELTS Speaking, what should you also include besides its appearance?",
   "opts": [
    "How you feel about it and why it is special",
    "Nothing more than one adjective",
    "Only its exact map coordinates",
    "A list of unrelated places"
   ],
   "correct": 0,
   "exp": "Adding your feelings and reasons extends your answer and shows a fuller range of language."
  }
 ],
 "Writing Informal Emails": [
  {
   "q": "Which greeting is most appropriate for an informal email to a friend?",
   "opts": [
    "Dear Sir or Madam,",
    "Hi Musu,",
    "To Whom It May Concern,",
    "Respected Manager,"
   ],
   "correct": 1,
   "exp": "'Hi Musu,' is a friendly, casual opening suited to writing to a friend."
  },
  {
   "q": "Which closing best fits an informal email?",
   "opts": [
    "Yours faithfully,",
    "I remain your obedient servant,",
    "See you soon,",
    "Yours sincerely,"
   ],
   "correct": 2,
   "exp": "'See you soon,' is a relaxed, friendly sign-off appropriate for informal messages."
  },
  {
   "q": "Which sentence uses the informal, contracted style typical of a friendly email?",
   "opts": [
    "I am writing to inform you of my arrival.",
    "I would be most grateful for your response.",
    "Please find attached the requested document.",
    "I can't wait to see you next week!"
   ],
   "correct": 3,
   "exp": "The contraction 'can't' and the excited tone match the casual style of informal emails."
  }
 ],
 "Common Grammar Errors": [
  {
   "q": "Which sentence uses subject-verb agreement correctly?",
   "opts": [
    "My brother lives in Monrovia.",
    "The children plays outside.",
    "He walk to work.",
    "She go to school every day."
   ],
   "correct": 0,
   "exp": "The singular subject 'My brother' correctly takes the singular verb form 'lives'."
  },
  {
   "q": "Which sentence uses the article correctly?",
   "opts": [
    "I saw a elephant at the zoo.",
    "I saw an elephant at the zoo.",
    "I saw an dog in the yard.",
    "I saw a apple on the table."
   ],
   "correct": 1,
   "exp": "'An' is used before words beginning with a vowel sound, such as 'elephant'."
  },
  {
   "q": "Which sentence uses the correct past tense?",
   "opts": [
    "Yesterday I buyed new shoes.",
    "Yesterday I buy new shoes.",
    "Yesterday I bought new shoes.",
    "Yesterday I have buy new shoes."
   ],
   "correct": 2,
   "exp": "'Bought' is the correct irregular past tense of 'buy'."
  }
 ],
 "Self-Introduction": [
  {
   "q": "In IELTS Speaking Part 1, which is the best way to introduce yourself when asked your name?",
   "opts": [
    "My name is Sarah, but you can call me Sarah.",
    "Names.",
    "Why do you want to know my name?",
    "My full name is Sarah Kollie, and people usually call me Sarah."
   ],
   "correct": 3,
   "exp": "It gives the full name and a natural extra detail, showing fluency and confidence."
  },
  {
   "q": "Which question is the examiner LEAST likely to ask during a Part 1 self-introduction?",
   "opts": [
    "Can you explain quantum physics in detail?",
    "Do you work or study?",
    "Where are you from?",
    "What do you do in your free time?"
   ],
   "correct": 0,
   "exp": "Part 1 covers familiar personal topics, not complex academic explanations."
  },
  {
   "q": "Why should you avoid one-word answers when introducing yourself?",
   "opts": [
    "Because the examiner cannot hear you",
    "Because they show little range of language and fluency",
    "Because it is against the rules to speak",
    "Because you must always speak for five minutes"
   ],
   "correct": 1,
   "exp": "Extending answers demonstrates vocabulary, grammar and fluency, which the examiner assesses."
  }
 ],
 "Talking About Family": [
  {
   "q": "Which sentence correctly describes a family member using present tense?",
   "opts": [
    "My mother work as a nurse.",
    "My mother working as a nurse.",
    "My mother works as a nurse.",
    "My mother worked as a nurse now."
   ],
   "correct": 2,
   "exp": "The singular subject 'My mother' takes 'works' in the present simple tense."
  },
  {
   "q": "If asked 'Are you close to your family?', which is the strongest IELTS answer?",
   "opts": [
    "Yes.",
    "No.",
    "I don't know.",
    "Yes, very close. We eat dinner together every evening and share our news."
   ],
   "correct": 3,
   "exp": "It answers directly and adds a specific reason, extending the response naturally."
  },
  {
   "q": "Which word correctly completes: 'My father's brother is my ___.'?",
   "opts": [
    "uncle",
    "nephew",
    "cousin",
    "grandfather"
   ],
   "correct": 0,
   "exp": "Your father's brother is your uncle."
  }
 ],
 "Talking About Hobbies": [
  {
   "q": "Which sentence correctly uses a gerund to talk about a hobby?",
   "opts": [
    "I enjoy to swim on weekends.",
    "I enjoy swimming on weekends.",
    "I enjoy swim on weekends.",
    "I enjoy swum on weekends."
   ],
   "correct": 1,
   "exp": "The verb 'enjoy' is followed by the gerund form 'swimming'."
  },
  {
   "q": "If asked why you like a hobby, which answer best extends your response?",
   "opts": [
    "Because.",
    "It is a hobby.",
    "I like reading because it relaxes me and helps me learn new things.",
    "No reason."
   ],
   "correct": 2,
   "exp": "It gives clear reasons, which develops the answer and displays better language range."
  },
  {
   "q": "Which phrase best expresses how long you have done a hobby?",
   "opts": [
    "I will play football since ten.",
    "I am playing football ten years ago.",
    "I play football yesterday for years.",
    "I have played football since I was ten."
   ],
   "correct": 3,
   "exp": "The present perfect with 'since' correctly shows an action continuing from a point in the past until now."
  }
 ],
 "Talking About School": [
  {
   "q": "Which is the most natural way to answer a question about your favourite school subject?",
   "opts": [
    "My favourite subject was biology because I loved learning about living things.",
    "School.",
    "Yes, I went to school.",
    "Subjects are many."
   ],
   "correct": 0,
   "exp": "It answers directly and gives a reason, which extends the response effectively."
  },
  {
   "q": "Which sentence correctly uses the past tense to describe school life?",
   "opts": [
    "I go to primary school in Gbarnga.",
    "I went to primary school in Gbarnga.",
    "I goes to primary school in Gbarnga.",
    "I gone to primary school in Gbarnga."
   ],
   "correct": 1,
   "exp": "'Went' is the correct simple past tense of 'go' for describing past school life."
  },
  {
   "q": "Which word best describes a teacher who explains things clearly and patiently?",
   "opts": [
    "boring",
    "careless",
    "supportive",
    "strict"
   ],
   "correct": 2,
   "exp": "'Supportive' positively describes a helpful, patient teacher."
  }
 ],
 "Talking About Work": [
  {
   "q": "Which is the best full answer to the question 'What do you do?' in IELTS Speaking?",
   "opts": [
    "Work.",
    "Yes, I work.",
    "Job.",
    "I am a teacher, and I teach English at a secondary school in Monrovia."
   ],
   "correct": 3,
   "exp": "It states the job and adds detail about where and what you do, extending the answer."
  },
  {
   "q": "Which sentence correctly describes your daily work routine?",
   "opts": [
    "I usually start work at eight o'clock.",
    "I usually starting work at eight o'clock.",
    "I usually starts work at eight o'clock.",
    "I usually started work at eight o'clock every day now."
   ],
   "correct": 0,
   "exp": "The present simple 'start' with 'I' correctly describes a regular routine."
  },
  {
   "q": "Which phrase best describes something you like about your job?",
   "opts": [
    "The most boring part is helping people.",
    "What I enjoy most is helping people every day.",
    "Helping people is my worst part.",
    "I hate helping people the most."
   ],
   "correct": 1,
   "exp": "'What I enjoy most is...' clearly and positively highlights a good aspect of the job."
  }
 ],
 "Basic Fluency Practice": [
  {
   "q": "In IELTS Speaking, what does 'fluency' mainly refer to?",
   "opts": [
    "Speaking with a perfect British accent",
    "Using only very long words",
    "Speaking smoothly at a natural pace without too many pauses",
    "Speaking as fast as possible"
   ],
   "correct": 2,
   "exp": "Fluency is about speaking smoothly and continuously at a natural pace, not about accent or speed."
  },
  {
   "q": "Which is a useful filler phrase to keep speaking naturally while you think?",
   "opts": [
    "Silence for ten seconds.",
    "I don't know, stop.",
    "No comment.",
    "Well, let me think about that for a moment."
   ],
   "correct": 3,
   "exp": "A natural filler phrase buys thinking time while keeping your speech flowing."
  },
  {
   "q": "Which habit most improves fluency for a Liberian IELTS learner?",
   "opts": [
    "Speaking English regularly and practising every day",
    "Only reading silently",
    "Memorising long answers word for word",
    "Never making any mistakes"
   ],
   "correct": 0,
   "exp": "Regular spoken practice builds the automatic ease that fluency requires."
  }
 ],
 "Multiple Choice Questions": [
  {
   "q": "In IELTS Listening multiple choice, what should you do before the audio starts?",
   "opts": [
    "Close your eyes and relax",
    "Read the question and underline key words",
    "Write your name repeatedly",
    "Answer all questions from memory"
   ],
   "correct": 1,
   "exp": "Reading and underlining key words helps you predict and catch the answer as you listen."
  },
  {
   "q": "Why are the wrong options in a listening multiple choice question often mentioned in the audio?",
   "opts": [
    "To help you choose them",
    "By mistake in the recording",
    "To distract you, as they are deliberate distractors",
    "Because they are always correct"
   ],
   "correct": 2,
   "exp": "Distractors are intentionally spoken to test whether you catch the precise correct answer."
  },
  {
   "q": "If you are unsure of the answer in the listening MCQ, what is the best strategy?",
   "opts": [
    "Leave it blank forever",
    "Write all four options",
    "Stop the whole test",
    "Make your best guess and move on"
   ],
   "correct": 3,
   "exp": "There is no penalty for wrong answers, so guessing and moving on avoids missing later questions."
  }
 ],
 "Map Labelling": [
  {
   "q": "In an IELTS map-labelling task, which language is most important to understand?",
   "opts": [
    "Directions and prepositions of place, like 'opposite' and 'next to'",
    "Advanced legal vocabulary",
    "Names of famous people",
    "Complex mathematical formulas"
   ],
   "correct": 0,
   "exp": "Map tasks rely on following directions and location words such as 'opposite' and 'next to'."
  },
  {
   "q": "Before the audio begins in a map task, what should you do first?",
   "opts": [
    "Memorise the whole map",
    "Find the starting point, such as the entrance or 'You are here' marker",
    "Colour in the map",
    "Ignore the labels"
   ],
   "correct": 1,
   "exp": "Locating the starting point lets you follow the speaker's directions accurately."
  },
  {
   "q": "If the speaker says 'turn left and it is the second building on your right', what skill is being tested?",
   "opts": [
    "Spelling of long words",
    "Adding numbers together",
    "Following spoken directions on a map",
    "Reading a graph"
   ],
   "correct": 2,
   "exp": "The task tests your ability to track directions and orientation as you listen."
  }
 ],
 "Table Completion": [
  {
   "q": "In IELTS Listening table completion, why should you read the column and row headings first?",
   "opts": [
    "To decorate the table",
    "Because they are the answers",
    "To count the total boxes",
    "To predict what type of information each gap needs"
   ],
   "correct": 3,
   "exp": "Headings tell you whether a gap needs a name, number, date or other detail, so you listen for the right thing."
  },
  {
   "q": "If a table gap is under a heading called 'Price', what should you listen for?",
   "opts": [
    "A cost or amount of money",
    "A person's name",
    "A colour",
    "A day of the week"
   ],
   "correct": 0,
   "exp": "The 'Price' heading signals that the missing information is a cost or amount of money."
  },
  {
   "q": "What must you always check about the number of words allowed in table completion?",
   "opts": [
    "The examiner's name",
    "The word limit stated in the instructions",
    "The colour of the paper",
    "The date of the test"
   ],
   "correct": 1,
   "exp": "Answers that exceed the stated word limit are marked wrong, so you must follow it exactly."
  }
 ],
 "Sentence Completion": [
  {
   "q": "In IELTS Listening sentence completion, what should your answer do?",
   "opts": [
    "Change the meaning of the sentence",
    "Always be a full paragraph",
    "Fit grammatically and make sense in the sentence",
    "Ignore the words around the gap"
   ],
   "correct": 2,
   "exp": "The word you write must fit the grammar and meaning of the surrounding sentence."
  },
  {
   "q": "If the instruction says 'Write NO MORE THAN TWO WORDS', which answer is acceptable?",
   "opts": [
    "a very large modern building",
    "the modern building over there",
    "building that is modern and large",
    "modern building"
   ],
   "correct": 3,
   "exp": "'Modern building' is two words and respects the stated limit."
  },
  {
   "q": "Why is it important to predict the type of word needed before listening?",
   "opts": [
    "It helps you recognise the answer, such as a noun or number, when you hear it",
    "It is against the rules",
    "It changes the recording",
    "It wastes time"
   ],
   "correct": 0,
   "exp": "Predicting the word type primes you to catch the correct answer as the audio plays."
  }
 ],
 "Summary Completion": [
  {
   "q": "In IELTS Listening summary completion, what is the summary usually based on?",
   "opts": [
    "A random unrelated topic",
    "The main ideas of the recording in shortened form",
    "The examiner's opinion",
    "A completely different test"
   ],
   "correct": 1,
   "exp": "The summary restates the recording's key points, and you fill gaps with words you hear."
  },
  {
   "q": "What is a key challenge of summary completion compared with a simple gap fill?",
   "opts": [
    "There are no gaps to fill",
    "You must draw a picture",
    "The summary often paraphrases the audio, so exact words may differ",
    "You cannot listen to the audio"
   ],
   "correct": 2,
   "exp": "Because the summary paraphrases, you must listen for meaning, not just matching words."
  },
  {
   "q": "When completing a summary, your answers must be taken from where?",
   "opts": [
    "Your imagination",
    "Any dictionary",
    "The other test sections",
    "The words you hear in the recording"
   ],
   "correct": 3,
   "exp": "Summary completion answers must come from words actually spoken in the recording."
  }
 ],
 "Academic Listening": [
  {
   "q": "IELTS Academic Listening Section 4 typically features what kind of recording?",
   "opts": [
    "A university lecture or academic monologue",
    "A casual chat between two friends",
    "A song on the radio",
    "A shopping advertisement"
   ],
   "correct": 0,
   "exp": "Section 4 is usually a single-speaker academic lecture on a study-related topic."
  },
  {
   "q": "What listening skill is especially important for academic lectures?",
   "opts": [
    "Ignoring signposting language",
    "Recognising signposting words that show the structure of the talk",
    "Only listening to the first sentence",
    "Counting the speaker's pauses"
   ],
   "correct": 1,
   "exp": "Signposting words like 'firstly' and 'in conclusion' guide you through the lecture's structure."
  },
  {
   "q": "Why is note-taking practice valuable for academic listening?",
   "opts": [
    "It removes the need to listen",
    "It lets you replay the audio",
    "It helps you follow and record key points as you listen once",
    "It gives you extra time on the test"
   ],
   "correct": 2,
   "exp": "The audio plays only once, so quick note-taking captures key points before they pass."
  }
 ],
 "Matching Headings": [
  {
   "q": "In an IELTS Matching Headings task, what should each heading you choose reflect?",
   "opts": [
    "A single supporting detail in the paragraph",
    "The first sentence of the paragraph copied exactly",
    "A statistic mentioned in the paragraph",
    "The main idea or overall point of the paragraph"
   ],
   "correct": 3,
   "exp": "Headings summarise the central idea of a whole paragraph, not one detail or figure."
  },
  {
   "q": "Why does a Matching Headings list usually contain more headings than paragraphs?",
   "opts": [
    "Because extra headings act as distractors that are not used",
    "Because some paragraphs need two headings",
    "To reward guessing",
    "Because the order is always reversed"
   ],
   "correct": 0,
   "exp": "There are extra headings that will not be used, so you must reject the distractors."
  },
  {
   "q": "What is the best strategy for tackling a Matching Headings question?",
   "opts": [
    "Match headings to random paragraphs quickly",
    "Read the headings first, then skim each paragraph for its main idea",
    "Only read the first line of the passage",
    "Choose headings that share the most words with the paragraph"
   ],
   "correct": 1,
   "exp": "Reading headings first then identifying each paragraph's main idea avoids being tricked by shared vocabulary."
  }
 ],
 "True/False/Not Given": [
  {
   "q": "In a True/False/Not Given task, when should you answer 'Not Given'?",
   "opts": [
    "When the statement contradicts the text",
    "When the statement matches the text exactly",
    "When the text neither confirms nor contradicts the statement",
    "When the statement is your own opinion"
   ],
   "correct": 2,
   "exp": "'Not Given' means the passage provides no information to confirm or contradict the statement."
  },
  {
   "q": "You should mark a statement 'False' when it does what to the information in the passage?",
   "opts": [
    "Repeats it using synonyms",
    "Leaves it unmentioned",
    "Adds extra detail not in the text",
    "Directly contradicts it"
   ],
   "correct": 3,
   "exp": "'False' applies when the statement clearly contradicts what the passage states."
  },
  {
   "q": "These questions ask you to judge statements against what?",
   "opts": [
    "The factual information stated in the passage",
    "The writer's opinions and claims",
    "Your general knowledge of the topic",
    "Other students' answers"
   ],
   "correct": 0,
   "exp": "True/False/Not Given tests factual information given in the text, not the writer's views or your knowledge."
  }
 ],
 "Yes/No/Not Given": [
  {
   "q": "How does Yes/No/Not Given differ from True/False/Not Given?",
   "opts": [
    "It uses numbers instead of letters",
    "It tests the writer's opinions or claims rather than facts",
    "It has five possible answers",
    "It only appears in listening tests"
   ],
   "correct": 1,
   "exp": "Yes/No/Not Given focuses on the writer's views and claims, whereas True/False/Not Given tests facts."
  },
  {
   "q": "You should answer 'Yes' when the statement does what?",
   "opts": [
    "Contradicts the writer's opinion",
    "Is not discussed by the writer",
    "Agrees with the writer's opinion or claim",
    "Is grammatically correct"
   ],
   "correct": 2,
   "exp": "'Yes' means the statement agrees with the opinion or claim the writer expresses."
  },
  {
   "q": "What does 'Not Given' mean in a Yes/No/Not Given task?",
   "opts": [
    "The writer strongly disagrees",
    "The statement is only partly true",
    "The statement is false",
    "The writer expresses no view on that point"
   ],
   "correct": 3,
   "exp": "'Not Given' means the writer states no opinion on that particular point."
  }
 ],
 "Matching Information": [
  {
   "q": "In a Matching Information task, what are you asked to do?",
   "opts": [
    "Find which paragraph contains a specific piece of information",
    "Put paragraphs in chronological order",
    "Choose a heading for the whole passage",
    "Correct grammar mistakes in the text"
   ],
   "correct": 0,
   "exp": "You locate which paragraph holds a stated detail such as an example, reason or comparison."
  },
  {
   "q": "Why can Matching Information questions be time-consuming?",
   "opts": [
    "You must translate each paragraph",
    "The information may appear in any paragraph, and paragraphs can be used more than once",
    "The answers are always in order",
    "There is only one paragraph to read"
   ],
   "correct": 1,
   "exp": "The details are not in passage order and a paragraph may be the answer to more than one question."
  },
  {
   "q": "Which skill is most useful for Matching Information questions?",
   "opts": [
    "Guessing based on the title",
    "Memorising the whole passage",
    "Scanning for specific details like examples or reasons",
    "Reading only the conclusion"
   ],
   "correct": 2,
   "exp": "Scanning helps you quickly locate the specific type of information described in each question."
  }
 ],
 "Diagram Labelling": [
  {
   "q": "When labelling a diagram in IELTS Reading, where do your answers come from?",
   "opts": [
    "Your own knowledge of the object",
    "A separate vocabulary list",
    "The diagram's caption only",
    "Words taken from the passage"
   ],
   "correct": 3,
   "exp": "Diagram labels must be words found in the reading passage, usually within a word limit."
  },
  {
   "q": "What must you check carefully before writing a diagram label?",
   "opts": [
    "The word limit stated in the instructions",
    "The colour of the diagram",
    "The author's name",
    "The number of paragraphs"
   ],
   "correct": 0,
   "exp": "Instructions set a word limit, so exceeding it makes the answer incorrect."
  },
  {
   "q": "Which reading skill helps you match labels to parts of a diagram?",
   "opts": [
    "Reading the passage backwards",
    "Locating the paragraph that describes that part of the process or object",
    "Counting the words in each paragraph",
    "Ignoring the passage and using logic"
   ],
   "correct": 1,
   "exp": "You find where the passage describes that component, then take the correct word from it."
  }
 ],
 "Reading Academic Texts": [
  {
   "q": "What does skimming an academic text help you do?",
   "opts": [
    "Memorise every word",
    "Find one specific number",
    "Get the general idea and structure quickly",
    "Correct the writer's argument"
   ],
   "correct": 2,
   "exp": "Skimming gives you the overall gist and organisation before you read for detail."
  },
  {
   "q": "In IELTS, what is scanning used for?",
   "opts": [
    "Understanding the main argument",
    "Summarising the conclusion",
    "Judging the writer's tone",
    "Locating specific details such as names, dates or figures"
   ],
   "correct": 3,
   "exp": "Scanning means searching quickly for particular pieces of information like dates or names."
  },
  {
   "q": "Why is it unwise to spend too long on one difficult question in the Reading test?",
   "opts": [
    "All questions carry equal marks, so you may miss easier ones",
    "The test has no time limit",
    "Difficult questions are worth more points",
    "You lose marks for skipping"
   ],
   "correct": 0,
   "exp": "Every question is worth one mark, so managing time lets you secure the easier answers."
  }
 ],
 "Introduction to Task 1": [
  {
   "q": "In Academic Writing Task 1, what should your introduction do?",
   "opts": [
    "Give your personal opinion on the topic",
    "Paraphrase what the chart or graph shows",
    "Predict future trends",
    "List every number in the data"
   ],
   "correct": 1,
   "exp": "A Task 1 introduction paraphrases the question by restating what the visual presents."
  },
  {
   "q": "What is the minimum word count for Writing Task 1?",
   "opts": [
    "100 words",
    "200 words",
    "150 words",
    "250 words"
   ],
   "correct": 2,
   "exp": "Task 1 requires at least 150 words; writing fewer loses marks."
  },
  {
   "q": "Which element should NOT appear in an Academic Task 1 response?",
   "opts": [
    "An overview of main trends",
    "Key supporting figures",
    "An accurate paraphrase of the task",
    "Your personal opinion or recommendations"
   ],
   "correct": 3,
   "exp": "Task 1 is a factual report, so personal opinions and recommendations do not belong."
  }
 ],
 "Charts and Graphs": [
  {
   "q": "What is the purpose of an overview sentence in a Task 1 answer about a chart?",
   "opts": [
    "To summarise the most noticeable trends or features",
    "To give the exact source of the data",
    "To offer a solution to a problem",
    "To describe every single data point"
   ],
   "correct": 0,
   "exp": "The overview highlights the main, most striking features without listing all details."
  },
  {
   "q": "When a chart shows change over time, which tense is most appropriate for past dates?",
   "opts": [
    "Present simple",
    "Past simple",
    "Present continuous",
    "Future perfect"
   ],
   "correct": 1,
   "exp": "Past dates require the past simple to describe completed changes."
  },
  {
   "q": "How should you select which figures to include from a detailed chart?",
   "opts": [
    "Include every number shown",
    "Only include the smallest values",
    "Choose the most significant or representative figures",
    "Avoid numbers altogether"
   ],
   "correct": 2,
   "exp": "You select key, representative figures to support your description rather than listing them all."
  }
 ],
 "Tables": [
  {
   "q": "When describing a table in Task 1, what makes a good overview?",
   "opts": [
    "Reading out each cell in order",
    "Describing the table's colours",
    "Explaining why the data was collected",
    "Identifying the highest and lowest values or clearest patterns"
   ],
   "correct": 3,
   "exp": "A strong overview points out extremes and overall patterns rather than every cell."
  },
  {
   "q": "Tables often contain a lot of numbers. What should you do to score well?",
   "opts": [
    "Group and compare related figures instead of listing them all",
    "Copy every figure into your answer",
    "Ignore the numbers and describe categories only",
    "Convert all numbers to percentages you invent"
   ],
   "correct": 0,
   "exp": "Grouping and comparing selected figures shows analysis, which listing every number does not."
  },
  {
   "q": "Which language is useful for comparing values in a table?",
   "opts": [
    "Only past continuous verbs",
    "Comparatives and superlatives such as higher, the highest",
    "Conditional sentences with 'if'",
    "Direct speech quotations"
   ],
   "correct": 1,
   "exp": "Comparatives and superlatives let you compare and rank the values clearly."
  }
 ],
 "Pie Charts": [
  {
   "q": "Pie charts are best described using which type of language?",
   "opts": [
    "Precise growth rates per year",
    "Distances in kilometres",
    "Proportions and percentages such as a quarter or 25 percent",
    "Temperatures in degrees"
   ],
   "correct": 2,
   "exp": "Pie charts show parts of a whole, so proportions and percentages are the natural language."
  },
  {
   "q": "Which phrase correctly describes a segment making up 50 percent of a pie chart?",
   "opts": [
    "A small fraction",
    "Roughly one tenth",
    "A slight majority above 90 percent",
    "Half of the total"
   ],
   "correct": 3,
   "exp": "Fifty percent equals half of the total amount shown."
  },
  {
   "q": "When two pie charts show the same categories at different dates, what should you do?",
   "opts": [
    "Compare how the proportions changed between the two dates",
    "Describe only the first chart",
    "Add up all the percentages",
    "Ignore the smaller segments"
   ],
   "correct": 0,
   "exp": "With two dated pie charts you compare the shifts in proportion over time."
  }
 ],
 "Line Graphs": [
  {
   "q": "Line graphs are especially good for showing what?",
   "opts": [
    "Parts of a whole",
    "Trends and changes over time",
    "The exact location of places",
    "Steps in a process"
   ],
   "correct": 1,
   "exp": "Line graphs illustrate how values rise, fall or fluctuate over a period."
  },
  {
   "q": "Which phrase best describes a line that goes up quickly?",
   "opts": [
    "A gradual decline",
    "Remained stable",
    "A sharp increase",
    "A slight dip"
   ],
   "correct": 2,
   "exp": "A quick upward movement is described as a sharp or rapid increase."
  },
  {
   "q": "How would you describe a line that stays at the same level over time?",
   "opts": [
    "It plummeted",
    "It fluctuated wildly",
    "It soared",
    "It remained stable or leveled off"
   ],
   "correct": 3,
   "exp": "A flat, unchanging line means the value remained stable or leveled off."
  }
 ],
 "Bar Charts": [
  {
   "q": "Bar charts are most useful for doing what?",
   "opts": [
    "Comparing quantities across different categories",
    "Displaying stages of a natural cycle",
    "Showing a continuous trend every second",
    "Giving directions on a map"
   ],
   "correct": 0,
   "exp": "Bar charts compare amounts between separate categories or groups."
  },
  {
   "q": "If a bar is the tallest on the chart, how should you describe its value?",
   "opts": [
    "The lowest figure",
    "The highest figure",
    "An average figure",
    "A negative figure"
   ],
   "correct": 1,
   "exp": "The tallest bar represents the highest or greatest value shown."
  },
  {
   "q": "What is a good approach when a bar chart has many categories?",
   "opts": [
    "Describe each bar one by one with no grouping",
    "Only mention the middle bar",
    "Group similar bars and highlight notable comparisons",
    "Convert the bars into a pie chart"
   ],
   "correct": 2,
   "exp": "Grouping bars and highlighting key comparisons produces a clearer, higher-scoring report."
  }
 ],
 "Process Diagrams": [
  {
   "q": "Which language feature is commonly used to describe a process diagram in Task 1?",
   "opts": [
    "Personal opinions and 'I think'",
    "Comparatives such as bigger than",
    "Percentages of a whole",
    "The passive voice and sequencing words like first, then, finally"
   ],
   "correct": 3,
   "exp": "Processes are usually described with the passive voice and sequence markers to show stages."
  },
  {
   "q": "What should the overview of a process diagram mention?",
   "opts": [
    "The total number of stages and whether it is a cycle or linear",
    "Your opinion of the process",
    "The exact percentages involved",
    "The colours used in the diagram"
   ],
   "correct": 0,
   "exp": "A process overview notes how many stages there are and whether it is linear or cyclical."
  },
  {
   "q": "For a process with no dates, which tense is usually appropriate?",
   "opts": [
    "Past perfect",
    "Present simple",
    "Future continuous",
    "Past continuous"
   ],
   "correct": 1,
   "exp": "Timeless processes are normally described in the present simple, often passive."
  }
 ],
 "Maps": [
  {
   "q": "When comparing two maps of the same place at different times, what do you describe?",
   "opts": [
    "Your opinion on the planning decisions",
    "The percentage of each land use",
    "The changes and developments between the two periods",
    "A step-by-step manufacturing process"
   ],
   "correct": 2,
   "exp": "Map tasks require you to describe how the place changed or developed over time."
  },
  {
   "q": "Which language is most useful for describing locations on a map?",
   "opts": [
    "Sequencers like firstly and finally only",
    "Comparatives like faster than",
    "Percentages and fractions",
    "Prepositions of place such as to the north of, next to, opposite"
   ],
   "correct": 3,
   "exp": "Prepositions of place and direction help describe where features are located."
  },
  {
   "q": "If a forest on the earlier map becomes houses on the later map, how do you describe this?",
   "opts": [
    "The forest was replaced by or converted into housing",
    "The forest increased sharply",
    "The forest remained unchanged",
    "The forest fluctuated"
   ],
   "correct": 0,
   "exp": "When one feature becomes another, you say it was replaced by or converted into the new feature."
  }
 ],
 "Comparing Data": [
  {
   "q": "Which structure correctly compares two values that are very close?",
   "opts": [
    "Far higher than",
    "Slightly higher than",
    "Twice as high as",
    "Nowhere near"
   ],
   "correct": 1,
   "exp": "'Slightly higher than' expresses a small difference between two close values."
  },
  {
   "q": "To say two figures are exactly equal, which phrase is best?",
   "opts": [
    "A fraction of",
    "Far more than",
    "The same as",
    "Considerably less than"
   ],
   "correct": 2,
   "exp": "'The same as' shows that two values are equal."
  },
  {
   "q": "Which word signals a contrast between two data points?",
   "opts": [
    "Similarly",
    "Because",
    "Therefore",
    "Whereas"
   ],
   "correct": 3,
   "exp": "'Whereas' introduces a contrast, highlighting a difference between two figures."
  }
 ],
 "Task 1 Vocabulary": [
  {
   "q": "Which word is a synonym for a large increase in Task 1 writing?",
   "opts": [
    "Surge",
    "Dip",
    "Plunge",
    "Plateau"
   ],
   "correct": 0,
   "exp": "'Surge' means a strong, large increase, while the others describe falls or flatness."
  },
  {
   "q": "Which pair correctly matches a verb of decrease with its noun form?",
   "opts": [
    "To rise / a rise",
    "To decline / a decline",
    "To grow / a growth",
    "To climb / a climb"
   ],
   "correct": 1,
   "exp": "'Decline' is a decrease as both verb and noun; the others describe increases."
  },
  {
   "q": "Which adverb best describes a very small change in data?",
   "opts": [
    "Substantially",
    "Dramatically",
    "Marginally",
    "Steeply"
   ],
   "correct": 2,
   "exp": "'Marginally' means by a very small amount, unlike the others which show large change."
  }
 ],
 "Essay Structure": [
  {
   "q": "In a standard IELTS Task 2 essay, what is the main purpose of the introduction?",
   "opts": [
    "To list every idea you will mention in detail",
    "To write the conclusion early",
    "To give your personal life story",
    "To paraphrase the question and state your overall response"
   ],
   "correct": 3,
   "exp": "A good introduction rephrases the task and previews your position or approach."
  },
  {
   "q": "How many body paragraphs are typically recommended for a Task 2 essay?",
   "opts": [
    "Two well-developed paragraphs",
    "Six short paragraphs",
    "One long paragraph",
    "No body paragraphs at all"
   ],
   "correct": 0,
   "exp": "Two focused body paragraphs give enough space to develop and support each main idea."
  },
  {
   "q": "What should each body paragraph ideally contain?",
   "opts": [
    "Only a list of unconnected facts",
    "A topic sentence, explanation, and a supporting example",
    "Several unrelated topics mixed together",
    "Just a quotation from a famous person"
   ],
   "correct": 1,
   "exp": "A clear topic sentence with explanation and an example makes each paragraph coherent and complete."
  }
 ],
 "Opinion Essays": [
  {
   "q": "In an opinion (agree/disagree) essay, what must you make clear from the start?",
   "opts": [
    "That you have no opinion",
    "Only the opposing view",
    "Your own clear position on the statement",
    "A summary of every possible view without choosing"
   ],
   "correct": 2,
   "exp": "Opinion essays require you to state and maintain one clear position throughout."
  },
  {
   "q": "Which phrase best introduces your personal stance in an opinion essay?",
   "opts": [
    "Some people might possibly think somewhere that",
    "Everyone always agrees on this issue",
    "It is impossible to say anything at all",
    "In my view, the benefits clearly outweigh the drawbacks"
   ],
   "correct": 3,
   "exp": "A phrase like In my view directly signals your clear personal position."
  },
  {
   "q": "What is a common mistake that weakens an opinion essay?",
   "opts": [
    "Switching your position and sounding unsure",
    "Staying on topic throughout",
    "Giving reasons that support your view",
    "Using a clear thesis statement"
   ],
   "correct": 0,
   "exp": "Changing your position mid-essay confuses the reader and lowers the task response score."
  }
 ],
 "Discussion Essays": [
  {
   "q": "What does a discussion (discuss both views) essay require you to do?",
   "opts": [
    "Discuss only the view you agree with",
    "Present both sides and usually give your own opinion",
    "Avoid giving any opinion ever",
    "Only describe a personal experience"
   ],
   "correct": 1,
   "exp": "Discussion essays ask you to examine both viewpoints and typically state your own view."
  },
  {
   "q": "How should the two opposing views usually be organised?",
   "opts": [
    "Both views crammed into one sentence",
    "Randomly mixed with no structure",
    "One view per body paragraph",
    "Only in the conclusion"
   ],
   "correct": 2,
   "exp": "Dedicating one body paragraph to each view keeps the discussion clear and balanced."
  },
  {
   "q": "Which linking phrase best introduces the second, contrasting view?",
   "opts": [
    "For example",
    "As a result",
    "In conclusion",
    "On the other hand"
   ],
   "correct": 3,
   "exp": "On the other hand signals a shift to the opposing viewpoint in a discussion essay."
  }
 ],
 "Problem-Solution Essays": [
  {
   "q": "What two main elements must a problem-solution essay address?",
   "opts": [
    "The causes or problems and their solutions",
    "Only advantages and disadvantages",
    "A story and a poem",
    "Two opposing opinions only"
   ],
   "correct": 0,
   "exp": "This essay type requires identifying the problem(s) and proposing realistic solution(s)."
  },
  {
   "q": "Which of these is the best way to present a solution?",
   "opts": [
    "Only name it with no explanation",
    "State it and explain how it would help",
    "List ten solutions in one line",
    "Ignore whether it is realistic"
   ],
   "correct": 1,
   "exp": "A strong solution is explained and shown to address the stated problem effectively."
  },
  {
   "q": "Which verb tense or form is most useful when proposing solutions?",
   "opts": [
    "Past simple for finished events",
    "Only the present perfect",
    "Modal verbs like should and could",
    "No verbs at all"
   ],
   "correct": 2,
   "exp": "Modals such as should and could express suggestions and recommended actions clearly."
  }
 ],
 "Advantages & Disadvantages Essays": [
  {
   "q": "In an advantages and disadvantages essay, what must you cover?",
   "opts": [
    "Only the advantages",
    "Only the disadvantages",
    "A single unrelated opinion",
    "Both the benefits and the drawbacks"
   ],
   "correct": 3,
   "exp": "This essay type requires a balanced treatment of both positive and negative points."
  },
  {
   "q": "If the prompt asks whether advantages outweigh disadvantages, what must you also do?",
   "opts": [
    "Give a clear judgement on which side is stronger",
    "Refuse to decide",
    "Only describe advantages",
    "Copy the question word for word"
   ],
   "correct": 0,
   "exp": "An outweigh question requires you to weigh the sides and state a clear conclusion."
  },
  {
   "q": "Which sentence best signals a disadvantage?",
   "opts": [
    "One major benefit is that costs fall",
    "However, a significant drawback is the loss of jobs",
    "Therefore, everyone is happier",
    "For instance, it saves time"
   ],
   "correct": 1,
   "exp": "However and drawback clearly introduce a negative point in the essay."
  }
 ],
 "Two-Part Questions": [
  {
   "q": "What is the key feature of a two-part (direct) question essay?",
   "opts": [
    "It asks one simple yes or no question",
    "It only requires a description",
    "It contains two separate questions you must both answer",
    "It has no questions to answer"
   ],
   "correct": 2,
   "exp": "Two-part questions pose two distinct questions, and both must be answered fully."
  },
  {
   "q": "How should the body of a two-part question essay usually be organised?",
   "opts": [
    "Answer only the first question",
    "Ignore the questions and give your hobbies",
    "Answer both questions in the conclusion only",
    "One body paragraph for each question"
   ],
   "correct": 3,
   "exp": "Devoting one paragraph to each question ensures both are addressed clearly."
  },
  {
   "q": "What happens to your score if you answer only one of the two questions?",
   "opts": [
    "Your task response score drops for an incomplete answer",
    "Nothing changes",
    "You automatically get top marks",
    "The essay becomes an opinion essay"
   ],
   "correct": 0,
   "exp": "Failing to answer both parts leaves the task incomplete and lowers task achievement."
  }
 ],
 "Linking Words": [
  {
   "q": "Which linking word correctly shows contrast between two ideas?",
   "opts": [
    "Therefore",
    "However",
    "Because",
    "Furthermore"
   ],
   "correct": 1,
   "exp": "However introduces a contrasting idea, unlike the cause or addition words."
  },
  {
   "q": "Which linker best shows a result or consequence?",
   "opts": [
    "Although",
    "For example",
    "As a result",
    "In contrast"
   ],
   "correct": 2,
   "exp": "As a result signals that what follows is a consequence of the previous statement."
  },
  {
   "q": "Which word is used to add a similar supporting point?",
   "opts": [
    "Nevertheless",
    "Despite",
    "Whereas",
    "Furthermore"
   ],
   "correct": 3,
   "exp": "Furthermore adds another point in the same direction as the previous idea."
  }
 ],
 "Cohesion & Coherence": [
  {
   "q": "What does coherence in writing mainly refer to?",
   "opts": [
    "Ideas being logically organised and easy to follow",
    "Using very long sentences",
    "Writing as fast as possible",
    "Using many rare words"
   ],
   "correct": 0,
   "exp": "Coherence is about clear, logical organisation so the reader can follow your ideas."
  },
  {
   "q": "Which technique helps create cohesion between sentences?",
   "opts": [
    "Starting every sentence the same way",
    "Referencing with pronouns like it and this",
    "Removing all linking words",
    "Changing the topic each sentence"
   ],
   "correct": 1,
   "exp": "Reference words such as it and this link sentences and avoid repetition, aiding cohesion."
  },
  {
   "q": "Why is overusing linking words a problem for cohesion?",
   "opts": [
    "It makes writing sound natural",
    "It always raises your score",
    "It can seem mechanical and forced",
    "It shortens the essay"
   ],
   "correct": 2,
   "exp": "Too many connectors sound artificial; cohesion should feel natural, not forced."
  }
 ],
 "Speaking Part 1": [
  {
   "q": "What kinds of topics does IELTS Speaking Part 1 usually cover?",
   "opts": [
    "Abstract global politics in depth",
    "A formal academic debate",
    "A two-minute uninterrupted talk",
    "Familiar personal topics like home, work, and hobbies"
   ],
   "correct": 3,
   "exp": "Part 1 asks short questions about familiar everyday topics such as home and hobbies."
  },
  {
   "q": "How long does Speaking Part 1 typically last?",
   "opts": [
    "About 4 to 5 minutes",
    "Exactly 30 seconds",
    "About 20 minutes",
    "No fixed time at all"
   ],
   "correct": 0,
   "exp": "Part 1 lasts roughly four to five minutes with short question-and-answer exchanges."
  },
  {
   "q": "What is the best way to answer a Part 1 question?",
   "opts": [
    "Give a one-word answer only",
    "Give a short answer with a reason or brief detail",
    "Speak for two minutes without stopping",
    "Ask the examiner a question back"
   ],
   "correct": 1,
   "exp": "Extending a short answer with a reason or example shows better language range."
  }
 ],
 "Speaking Part 2 Cue Cards": [
  {
   "q": "How long should you speak in the Speaking Part 2 cue card task?",
   "opts": [
    "Around 10 minutes",
    "Exactly 10 seconds",
    "About 1 to 2 minutes",
    "As long as you like"
   ],
   "correct": 2,
   "exp": "In Part 2 you speak for one to two minutes on the cue card topic."
  },
  {
   "q": "How much preparation time do you get before speaking in Part 2?",
   "opts": [
    "No time at all",
    "Five minutes",
    "Fifteen minutes",
    "One minute to make notes"
   ],
   "correct": 3,
   "exp": "Candidates get one minute to prepare and can make notes before speaking."
  },
  {
   "q": "What is the best use of the bullet points on the cue card?",
   "opts": [
    "Use them to structure and develop your talk",
    "Ignore them completely",
    "Read them aloud word for word only",
    "Answer only the first one"
   ],
   "correct": 0,
   "exp": "The bullet prompts help you organise and expand your two-minute response."
  }
 ],
 "Speaking Part 3 Discussions": [
  {
   "q": "How do Part 3 questions differ from Part 1 questions?",
   "opts": [
    "They are simpler and more personal",
    "They are more abstract and require deeper opinions",
    "They require only yes or no",
    "They involve no speaking"
   ],
   "correct": 1,
   "exp": "Part 3 explores abstract ideas linked to the Part 2 topic and needs developed answers."
  },
  {
   "q": "Which skill is especially important in Part 3?",
   "opts": [
    "Memorising a scripted speech",
    "Giving one-word answers",
    "Justifying opinions and discussing ideas in depth",
    "Avoiding any examples"
   ],
   "correct": 2,
   "exp": "Part 3 rewards explaining, justifying, and analysing ideas rather than short replies."
  },
  {
   "q": "If you do not understand a Part 3 question, what should you do?",
   "opts": [
    "Stay silent",
    "Answer a Part 1 question instead",
    "Change to a different topic",
    "Politely ask the examiner to rephrase it"
   ],
   "correct": 3,
   "exp": "Asking for clarification is acceptable and better than answering the wrong question."
  }
 ],
 "Expanding Answers": [
  {
   "q": "What is the best strategy to expand a short speaking answer?",
   "opts": [
    "Add reasons, examples, or details",
    "Repeat the same sentence twice",
    "Speak more quietly",
    "Stop after one word"
   ],
   "correct": 0,
   "exp": "Adding reasons and examples develops your answer and shows language range."
  },
  {
   "q": "Which technique naturally extends an answer about a preference?",
   "opts": [
    "Saying only yes",
    "Explaining why and giving an example",
    "Changing the subject",
    "Listing unrelated facts"
   ],
   "correct": 1,
   "exp": "Explaining the reason and adding an example turns a short reply into a full answer."
  },
  {
   "q": "Why is expanding answers important for your speaking score?",
   "opts": [
    "It fills silence with noise only",
    "It confuses the examiner",
    "It demonstrates fluency, vocabulary, and grammar range",
    "It shortens the test"
   ],
   "correct": 2,
   "exp": "Developed answers give the examiner more language to assess across all criteria."
  }
 ],
 "Pronunciation Skills": [
  {
   "q": "What does word stress refer to in English pronunciation?",
   "opts": [
    "Saying every syllable equally loud",
    "Whispering all words",
    "Speaking as fast as possible",
    "Emphasising a particular syllable in a word"
   ],
   "correct": 3,
   "exp": "Word stress means giving greater emphasis to one syllable, which affects clarity."
  },
  {
   "q": "Why is intonation important when speaking English?",
   "opts": [
    "The rise and fall of the voice conveys meaning and attitude",
    "It has no effect on meaning",
    "It only matters in writing",
    "It makes speech slower only"
   ],
   "correct": 0,
   "exp": "Intonation, the voice rising and falling, helps express meaning, questions, and emotion."
  },
  {
   "q": "Which is a good goal for pronunciation in IELTS Speaking?",
   "opts": [
    "Sounding exactly like a native, or you fail",
    "Being clear and easy to understand",
    "Hiding your accent completely",
    "Speaking with no rhythm"
   ],
   "correct": 1,
   "exp": "IELTS rewards clear, intelligible pronunciation rather than a perfect native accent."
  }
 ],
 "Fluency Development": [
  {
   "q": "What does fluency mean in the IELTS Speaking test?",
   "opts": [
    "Speaking without any pauses ever",
    "Using only very long words",
    "Speaking smoothly at a natural pace with few hesitations",
    "Talking as loudly as possible"
   ],
   "correct": 2,
   "exp": "Fluency is speaking at a natural pace with logical flow and minimal hesitation."
  },
  {
   "q": "Which habit harms fluency the most?",
   "opts": [
    "Using linking phrases to connect ideas",
    "Giving relevant examples",
    "Speaking in complete sentences",
    "Frequently stopping to search for perfect words"
   ],
   "correct": 3,
   "exp": "Constant long pauses to find words break the natural flow and reduce fluency."
  },
  {
   "q": "Which phrase can help you keep speaking while you think?",
   "opts": [
    "That is a good question, let me think",
    "Ending the conversation abruptly",
    "Complete silence",
    "Repeating the examiner exactly"
   ],
   "correct": 0,
   "exp": "Natural filler phrases buy thinking time and maintain flow without awkward silence."
  }
 ],
 "Vocabulary for Speaking": [
  {
   "q": "What kind of vocabulary raises your lexical resource score in speaking?",
   "opts": [
    "Only very basic everyday words",
    "A range including topic-specific words and natural collocations",
    "Random rare words used incorrectly",
    "Repeating one adjective many times"
   ],
   "correct": 1,
   "exp": "A varied range with accurate collocations and topic words boosts lexical resource."
  },
  {
   "q": "What is a collocation?",
   "opts": [
    "A spelling rule",
    "A type of grammar tense",
    "Words that naturally go together, like heavy rain",
    "A punctuation mark"
   ],
   "correct": 2,
   "exp": "Collocations are natural word pairings such as heavy rain or make a decision."
  },
  {
   "q": "Which is better for showing vocabulary range when describing something good?",
   "opts": [
    "Saying good every time",
    "Using only the word nice",
    "Avoiding adjectives entirely",
    "Using varied words like excellent, beneficial, or impressive"
   ],
   "correct": 3,
   "exp": "Varying your word choice instead of repeating good demonstrates a wider vocabulary."
  }
 ],
 "Understanding Accents": [
  {
   "q": "In the IELTS Listening test, which strategy best helps you cope with an unfamiliar accent such as Australian or Scottish?",
   "opts": [
    "Concentrate on stressed content words and overall meaning rather than every phoneme",
    "Focus only on the exact vowel sounds you expect from your own accent",
    "Ask the invigilator to slow the recording down",
    "Ignore the speaker and rely on reading the questions"
   ],
   "correct": 0,
   "exp": "Tracking stressed content words and meaning lets you follow speakers despite accent variation, since key information falls on stressed syllables."
  },
  {
   "q": "A speaker with a non-rhotic British accent says a word where the final 'r' is not pronounced; how does this typically affect your listening?",
   "opts": [
    "It changes the spelling you must write in the answer",
    "Words like 'car' or 'here' may sound as if they end in a vowel, so you rely on context",
    "It means the answer is always plural",
    "It signals the speaker has made an error"
   ],
   "correct": 1,
   "exp": "In non-rhotic accents the final 'r' is dropped in speech, so recognising the word from context prevents mishearing it."
  },
  {
   "q": "Why does IELTS deliberately include a range of native-speaker accents in the Listening recordings?",
   "opts": [
    "Because only British examiners are available",
    "To make the test harder for no reason",
    "To reflect the real international English learners will encounter and test genuine comprehension",
    "To test the candidate's own pronunciation"
   ],
   "correct": 2,
   "exp": "IELTS uses varied accents to assess whether candidates can understand English as it is genuinely spoken across different regions."
  }
 ],
 "Predicting Answers": [
  {
   "q": "Before a Listening section begins, what is the most effective use of the time given to read the questions?",
   "opts": [
    "Memorising the instructions word for word",
    "Translating each question into your first language",
    "Writing random guesses in every blank",
    "Predicting the type of word or information each gap needs, such as a number, name or noun"
   ],
   "correct": 3,
   "exp": "Anticipating the grammatical type and content of each answer primes you to catch it when the audio reaches that point."
  },
  {
   "q": "A gap in a form reads: 'Deposit required: $______'. What should you predict the answer will be?",
   "opts": [
    "A number or amount of money",
    "A date of the week",
    "A person's name",
    "An adjective describing quality"
   ],
   "correct": 0,
   "exp": "The dollar sign and the word 'deposit' signal that a numerical monetary amount is required in the gap."
  },
  {
   "q": "How does predicting the answer help even when your prediction turns out to be wrong?",
   "opts": [
    "It guarantees the correct answer regardless of the audio",
    "It keeps you actively engaged and focused on the relevant part of the recording",
    "It lets you skip listening to that section",
    "It replaces the need to check grammar"
   ],
   "correct": 1,
   "exp": "The act of predicting keeps your attention targeted, so you notice the answer even if it differs from your guess."
  }
 ],
 "Identifying Opinions": [
  {
   "q": "Which phrase most clearly signals that a speaker is expressing a personal opinion rather than a fact?",
   "opts": [
    "Research has shown that...",
    "The data indicate that...",
    "If you ask me, I'd say that...",
    "It was built in 1990"
   ],
   "correct": 2,
   "exp": "'If you ask me' explicitly frames the following statement as the speaker's subjective viewpoint."
  },
  {
   "q": "Two speakers discuss a project; one says 'I suppose it could work, but...'. What attitude does this convey?",
   "opts": [
    "Full and enthusiastic agreement",
    "Indifference to the topic",
    "Complete rejection of the idea",
    "Hesitant or partial agreement with reservations"
   ],
   "correct": 3,
   "exp": "'I suppose... but' expresses tentative acceptance qualified by doubt, signalling reservation rather than firm agreement."
  },
  {
   "q": "In a discussion, how can tone of voice help you identify a speaker's opinion when the words seem neutral?",
   "opts": [
    "Falling intonation and stress can reveal sarcasm, doubt or enthusiasm behind the words",
    "Tone is irrelevant in IELTS Listening",
    "Tone only tells you the speaker's gender",
    "Tone always means the answer is negative"
   ],
   "correct": 0,
   "exp": "Intonation and stress carry attitudinal meaning, so they can reveal an opinion that the literal words do not state."
  }
 ],
 "Following Lectures": [
  {
   "q": "During a monologue lecture in Section 4, what verbal cue usually signals that the speaker is moving to a new main point?",
   "opts": [
    "A long pause with no words",
    "Discourse markers such as 'Moving on to...' or 'Another key aspect is...'",
    "Repeating the previous sentence",
    "Lowering the volume of speech"
   ],
   "correct": 1,
   "exp": "Signposting discourse markers explicitly announce transitions, helping you track the structure of the lecture."
  },
  {
   "q": "Section 4 gives no mid-section pause; what is the best way to keep pace with the lecture?",
   "opts": [
    "Stop writing and just listen passively",
    "Wait until the end and recall everything from memory",
    "Read ahead, follow the signposting language, and note answers as they occur",
    "Focus only on the first and last sentences"
   ],
   "correct": 2,
   "exp": "Because there is no pause, continuously reading ahead and following signposts keeps you aligned with the audio in real time."
  },
  {
   "q": "A lecturer says 'This brings us to the crux of the matter'. What does this indicate?",
   "opts": [
    "The lecture is ending immediately",
    "An unrelated tangent is beginning",
    "The speaker is repeating an earlier example",
    "The most important or central point is about to be made"
   ],
   "correct": 3,
   "exp": "'The crux of the matter' flags the central, most important point, so the following information is likely to be tested."
  }
 ],
 "High-Band Listening Strategies": [
  {
   "q": "To reach Band 7+ in Listening, how should you handle distractors where a speaker corrects an earlier number or fact?",
   "opts": [
    "Listen to the whole utterance and record the corrected, final piece of information",
    "Always write the first number you hear",
    "Write both numbers in the gap",
    "Skip the question entirely"
   ],
   "correct": 0,
   "exp": "Speakers often self-correct, so the valid answer is the final revised information, not the first figure mentioned."
  },
  {
   "q": "Which habit most undermines a high-band score during the Listening test?",
   "opts": [
    "Transferring answers carefully at the end",
    "Dwelling on a missed answer so you lose the next questions",
    "Checking spelling of written answers",
    "Using the reading time to predict"
   ],
   "correct": 1,
   "exp": "Fixating on one lost answer causes you to miss subsequent ones, so moving on quickly protects your overall score."
  },
  {
   "q": "For matching and multiple-choice tasks, why is paraphrase recognition crucial at Band 7+?",
   "opts": [
    "Because the audio never uses the exact words from the question",
    "Because paraphrases are only used in the Reading test",
    "Because the recording usually restates ideas using synonyms rather than repeating the question wording",
    "Because the answers are always the words printed on the page"
   ],
   "correct": 2,
   "exp": "The correct option is typically signalled by a synonym or rephrasing, so hearing paraphrases rather than exact words is essential."
  }
 ],
 "Advanced Listening Review": [
  {
   "q": "After practice tests, what review technique most improves advanced listening accuracy?",
   "opts": [
    "Only checking your final band score",
    "Memorising the answer key",
    "Discarding the transcript entirely",
    "Analysing why each wrong answer was missed and relistening to that exact segment"
   ],
   "correct": 3,
   "exp": "Diagnosing the cause of each error and relistening builds the specific skills that were failing, unlike simply noting the score."
  },
  {
   "q": "When reviewing, you find you consistently misspell answers you heard correctly. What is the priority fix?",
   "opts": [
    "Practise accurate spelling and singular/plural endings, since these lose marks despite correct hearing",
    "Listen to more recordings only",
    "Ignore it because meaning is enough",
    "Change to a different accent"
   ],
   "correct": 0,
   "exp": "Correct comprehension is wasted if spelling or grammatical endings are wrong, so targeted spelling practice recovers those marks."
  },
  {
   "q": "Why is it valuable to review the transcript alongside the audio after a listening test?",
   "opts": [
    "To memorise the passage for the real exam",
    "To see how words you missed were pronounced and how ideas were paraphrased",
    "To count the total number of words",
    "To find grammar mistakes made by the speakers"
   ],
   "correct": 1,
   "exp": "Comparing transcript and audio reveals the pronunciation and paraphrasing that caused errors, informing future listening."
  }
 ],
 "Critical Reading": [
  {
   "q": "Critical reading in IELTS mainly requires you to do what beyond understanding the literal text?",
   "opts": [
    "Memorise every sentence",
    "Count the paragraphs",
    "Evaluate the writer's purpose, assumptions and the strength of their evidence",
    "Translate the passage accurately"
   ],
   "correct": 2,
   "exp": "Critical reading means assessing purpose, assumptions and evidence rather than only decoding the surface meaning."
  },
  {
   "q": "A passage states a claim and then adds 'though this remains contested'. A critical reader concludes that the writer is doing what?",
   "opts": [
    "Fully endorsing the claim as proven fact",
    "Quoting someone else's opinion word for word",
    "Rejecting the claim outright",
    "Acknowledging that the claim is disputed and not settled"
   ],
   "correct": 3,
   "exp": "The phrase 'remains contested' signals the writer views the claim as debatable rather than established."
  },
  {
   "q": "Which question best reflects critical reading when evaluating a source cited in a passage?",
   "opts": [
    "Is the evidence sufficient and relevant to support the writer's conclusion?",
    "How many words are in the sentence?",
    "What colour is associated with the topic?",
    "How is the word spelled?"
   ],
   "correct": 0,
   "exp": "Judging whether evidence adequately supports the conclusion is a core act of critical evaluation."
  }
 ],
 "Speed Reading Techniques": [
  {
   "q": "What is the key difference between skimming and scanning in IELTS Reading?",
   "opts": [
    "Skimming finds specific details; scanning gets the general idea",
    "Skimming gets the general idea; scanning locates specific information such as names or dates",
    "They are identical techniques",
    "Both require reading every word slowly"
   ],
   "correct": 1,
   "exp": "Skimming captures the gist quickly, while scanning hunts for particular details like figures or keywords."
  },
  {
   "q": "Why should advanced readers avoid subvocalising (silently pronouncing every word) during timed reading?",
   "opts": [
    "It improves comprehension of every word",
    "It is required by the IELTS rules",
    "It slows reading speed to speaking pace, wasting limited exam time",
    "It helps locate answers faster"
   ],
   "correct": 2,
   "exp": "Subvocalising caps your speed at talking pace, which is far too slow for the time pressure of the Reading test."
  },
  {
   "q": "When you first receive a Reading passage, what is the most efficient initial step?",
   "opts": [
    "Read every word from start to finish before looking at questions",
    "Answer questions in random order without reading",
    "Translate the title",
    "Skim headings, first sentences and structure to build a mental map before answering"
   ],
   "correct": 3,
   "exp": "A quick skim of structure and topic sentences creates a map that makes locating answers much faster."
  }
 ],
 "Inference Questions": [
  {
   "q": "An inference question in IELTS Reading asks you to identify what?",
   "opts": [
    "A conclusion that is strongly implied but not directly stated",
    "Information stated word for word in the text",
    "The number of paragraphs",
    "The writer's nationality"
   ],
   "correct": 0,
   "exp": "Inference questions test conclusions logically implied by the text rather than statements written explicitly."
  },
  {
   "q": "Which is the safest approach to choosing an answer for an inference question?",
   "opts": [
    "Pick the option that goes furthest beyond the text for a bold claim",
    "Choose the option that follows logically from evidence in the text without over-reaching",
    "Select the option using the most words from the passage",
    "Choose the most surprising option"
   ],
   "correct": 1,
   "exp": "A valid inference is tightly supported by textual evidence, so the best answer follows logically without exaggerating."
  },
  {
   "q": "A passage says a policy 'was quietly withdrawn after months of public criticism'. What can you reasonably infer?",
   "opts": [
    "The policy was highly successful",
    "The policy is still fully in force",
    "The government wished to avoid drawing attention to reversing an unpopular policy",
    "The criticism came only from other governments"
   ],
   "correct": 2,
   "exp": "'Quietly withdrawn after criticism' implies deliberate low-profile reversal of an unpopular measure, which is a supported inference."
  }
 ],
 "Writer’s Opinion Questions": [
  {
   "q": "In a Yes/No/Not Given task about the writer's views, when should you select 'Not Given'?",
   "opts": [
    "When the statement contradicts the writer",
    "Whenever the statement is long",
    "When the statement matches the writer exactly",
    "When the writer expresses no opinion on that specific claim in the passage"
   ],
   "correct": 3,
   "exp": "'Not Given' applies when the passage offers no information confirming or contradicting the writer's view on that point."
  },
  {
   "q": "How do you distinguish the writer's own opinion from an opinion the writer merely reports?",
   "opts": [
    "Look for reporting verbs and attribution such as 'critics argue', which signal others' views not the writer's",
    "They are always the same thing",
    "Assume every opinion is the writer's",
    "Only the first opinion in the passage is the writer's"
   ],
   "correct": 0,
   "exp": "Attribution phrases like 'critics argue' mark someone else's view, which must not be mistaken for the writer's own stance."
  },
  {
   "q": "A statement claims the writer 'strongly supports' an idea, but the text only says the idea 'may have some merit'. What is the answer?",
   "opts": [
    "Yes, the statement agrees with the writer",
    "No, the statement overstates the writer's cautious position",
    "Not Given",
    "True without qualification"
   ],
   "correct": 1,
   "exp": "'May have some merit' is tentative, so claiming the writer 'strongly supports' it contradicts the actual view, giving 'No'."
  }
 ],
 "Complex Academic Passages": [
  {
   "q": "When a dense academic passage uses heavy nominalisation (nouns formed from verbs), what helps comprehension?",
   "opts": [
    "Skipping the sentence entirely",
    "Reading only the first word of each line",
    "Mentally converting the nouns back into their verb forms to see the underlying action",
    "Counting the syllables"
   ],
   "correct": 2,
   "exp": "Turning nominalisations back into verbs unpacks who does what, clarifying dense academic sentences."
  },
  {
   "q": "In a long, complex sentence with several subordinate clauses, how do you find the core meaning?",
   "opts": [
    "Read only the subordinate clauses",
    "Ignore all punctuation",
    "Assume the last clause is the main idea",
    "Identify the main subject and main verb of the independent clause first"
   ],
   "correct": 3,
   "exp": "Locating the main subject and verb of the independent clause reveals the sentence's core message before the modifiers."
  },
  {
   "q": "Cohesive devices such as 'nevertheless' and 'consequently' in academic texts primarily help you to do what?",
   "opts": [
    "Track the logical relationships between ideas, such as contrast or cause",
    "Increase your reading speed automatically",
    "Identify the writer's age",
    "Find spelling errors"
   ],
   "correct": 0,
   "exp": "Linking words signal logical relations like contrast or cause, guiding you through the argument's structure."
  }
 ],
 "Reading Time Management": [
  {
   "q": "With 60 minutes for three passages and no extra transfer time, roughly how should you allocate your time?",
   "opts": [
    "45 minutes on passage 1 and rush the rest",
    "About 20 minutes per passage, adjusting for difficulty",
    "Two minutes total then guess",
    "Read all passages first, then all questions at the very end"
   ],
   "correct": 1,
   "exp": "Allocating roughly 20 minutes per passage keeps you on pace to finish all three within the hour."
  },
  {
   "q": "You are stuck on one difficult question with time running out. What is the best action?",
   "opts": [
    "Spend as long as needed until you solve it",
    "Leave it and all following questions blank",
    "Make your best guess, mark it, and move on to secure other answers",
    "Restart the passage from the beginning"
   ],
   "correct": 2,
   "exp": "Guessing and moving on protects easier marks, since there is no penalty for wrong answers in IELTS."
  },
  {
   "q": "Why is it risky to leave transferring answers to the very last minute in the Reading test?",
   "opts": [
    "Because there is a separate transfer time as in Listening",
    "Because pencils are not allowed",
    "Because the answer sheet is optional",
    "Because there is no extra transfer time, so you must write answers on the sheet as you go or reserve time"
   ],
   "correct": 3,
   "exp": "Unlike Listening, Reading gives no extra transfer time, so failing to record answers within the hour loses marks."
  }
 ],
 "Band 7+ Essay Structure": [
  {
   "q": "What is the recommended paragraph structure for a Band 7+ Task 2 opinion essay?",
   "opts": [
    "Introduction, two or three developed body paragraphs, and a conclusion",
    "One long paragraph covering everything",
    "Only an introduction and conclusion",
    "A list of bullet points"
   ],
   "correct": 0,
   "exp": "A clear introduction, well-developed body paragraphs and a conclusion give the logical organisation examiners reward."
  },
  {
   "q": "In a body paragraph, what does a strong topic sentence do?",
   "opts": [
    "Introduces an unrelated new idea at the end",
    "States the paragraph's main point clearly at the start so the argument is easy to follow",
    "Repeats the essay question word for word",
    "Provides the final conclusion"
   ],
   "correct": 1,
   "exp": "A topic sentence stating the main idea up front gives the paragraph clear focus and coherence."
  },
  {
   "q": "For a high band, how should the introduction to a Task 2 essay end?",
   "opts": [
    "With an unrelated question",
    "With a personal anecdote about your family",
    "With a clear thesis statement that outlines your position or the essay's direction",
    "With a copied sentence from the prompt"
   ],
   "correct": 2,
   "exp": "A clear thesis at the end of the introduction signals your position and structures the whole essay."
  }
 ],
 "Advanced Vocabulary": [
  {
   "q": "Which sentence shows the most precise, high-band use of vocabulary?",
   "opts": [
    "The problem is very very big and bad",
    "It is a big big issue for people",
    "The thing got worse and stuff",
    "The issue has escalated into a significant public health crisis"
   ],
   "correct": 3,
   "exp": "'Escalated into a significant public health crisis' uses precise collocation and register expected at Band 7+."
  },
  {
   "q": "Why can overusing memorised 'high-level' words actually lower a Writing score?",
   "opts": [
    "Words used inaccurately or with wrong collocation reduce the lexical resource mark",
    "Examiners dislike long words on principle",
    "It always improves the score",
    "Long words are banned in IELTS"
   ],
   "correct": 0,
   "exp": "Lexical resource rewards accurate, natural word choice, so misused advanced words damage rather than help the score."
  },
  {
   "q": "Which is the best example of a natural collocation for Band 7+ writing?",
   "opts": [
    "make a research",
    "conduct research",
    "do a research",
    "perform a research"
   ],
   "correct": 1,
   "exp": "'Conduct research' is the standard, natural collocation, whereas the others are common learner errors."
  }
 ],
 "Academic Writing Style": [
  {
   "q": "Which feature is characteristic of an appropriate academic writing style in Task 2?",
   "opts": [
    "Contractions like 'don't' and 'can't'",
    "Emojis and exclamation marks",
    "A formal, impersonal tone avoiding slang and contractions",
    "Very casual chatty language"
   ],
   "correct": 2,
   "exp": "Academic style favours a formal, impersonal tone and avoids contractions, slang and informal punctuation."
  },
  {
   "q": "Which sentence is written in the most appropriate academic register?",
   "opts": [
    "Loads of people reckon the plan's a total mess",
    "The plan? Not great, honestly",
    "The plan is rubbish and everyone knows it",
    "Many people believe the plan is fundamentally flawed"
   ],
   "correct": 3,
   "exp": "'Many people believe the plan is fundamentally flawed' is formal and objective, matching academic register."
  },
  {
   "q": "To maintain objectivity in academic writing, how should you usually present a debatable claim?",
   "opts": [
    "With cautious, hedged language such as 'this suggests' or 'it may indicate'",
    "As an absolute fact with no hedging",
    "With exclamation marks for emphasis",
    "As a rhetorical shout"
   ],
   "correct": 0,
   "exp": "Hedging with phrases like 'this suggests' conveys appropriate academic caution about debatable claims."
  }
 ],
 "Complex Sentences": [
  {
   "q": "Which sentence contains a subordinate (dependent) clause?",
   "opts": [
    "The results were clear and convincing.",
    "Although the results were clear, the committee remained cautious.",
    "The committee met and voted.",
    "Researchers gathered data and published it."
   ],
   "correct": 1,
   "exp": "'Although the results were clear' is a dependent clause that cannot stand alone, making the sentence complex."
  },
  {
   "q": "What punctuation is normally needed when a subordinate clause begins the sentence?",
   "opts": [
    "No punctuation at all",
    "A semicolon before it",
    "A comma after the subordinate clause and before the main clause",
    "A full stop in the middle"
   ],
   "correct": 2,
   "exp": "A fronted subordinate clause is separated from the main clause by a comma, as in 'Because it rained, we stayed.'"
  },
  {
   "q": "Which word functions as a relative pronoun introducing a subordinate clause?",
   "opts": [
    "and",
    "or",
    "but",
    "which"
   ],
   "correct": 3,
   "exp": "'Which' introduces a relative clause, e.g. 'the report, which was late, was accurate', whereas 'and/but/or' are coordinating conjunctions."
  }
 ],
 "Data Analysis for Task 1": [
  {
   "q": "In a Task 1 report describing a graph, what should the overview paragraph contain?",
   "opts": [
    "The most significant general trends or key features without specific figures",
    "Every single data point in detail",
    "Your personal opinion on the data",
    "A conclusion recommending action"
   ],
   "correct": 0,
   "exp": "The overview summarises the main trends and standout features, which is essential for a high Task Achievement score."
  },
  {
   "q": "Which phrase best describes a sharp increase in a line graph?",
   "opts": [
    "remained stable",
    "surged dramatically",
    "rose gradually",
    "declined slightly"
   ],
   "correct": 1,
   "exp": "'Surged dramatically' accurately conveys a sharp, steep increase in the data."
  },
  {
   "q": "When comparing data across years, which grammar structure is most appropriate for a completed change in the past?",
   "opts": [
    "Present continuous, e.g. 'is rising'",
    "Future tense, e.g. 'will rise'",
    "Past simple, e.g. 'rose from 20 to 40 percent'",
    "Present perfect continuous for everything"
   ],
   "correct": 2,
   "exp": "Data describing a finished period uses the past simple, such as 'rose from 20 to 40 percent'."
  }
 ],
 "High-Band Sample Essays": [
  {
   "q": "When studying a Band 9 sample essay, what is the most useful thing to analyse?",
   "opts": [
    "The handwriting style",
    "The colour of the ink",
    "The exact number of words on each line",
    "How ideas are developed, linked and supported with relevant examples"
   ],
   "correct": 3,
   "exp": "Examining idea development, cohesion and support teaches the transferable skills that produce a high band."
  },
  {
   "q": "A model essay fully addresses every part of the task prompt. Which marking criterion does this most directly satisfy?",
   "opts": [
    "Task Response (Task Achievement)",
    "Pronunciation",
    "Handwriting neatness",
    "Spelling only"
   ],
   "correct": 0,
   "exp": "Fully answering all parts of the prompt is the core of the Task Response criterion."
  },
  {
   "q": "Why is copying whole sentences from a memorised sample essay a poor strategy?",
   "opts": [
    "It always guarantees Band 9",
    "Examiners penalise memorised, off-topic content that does not answer the specific question",
    "It is required by IELTS",
    "It improves your coherence score automatically"
   ],
   "correct": 1,
   "exp": "Memorised chunks rarely fit the exact task and are penalised, so understanding techniques matters more than copying."
  }
 ],
 "Common Writing Mistakes": [
  {
   "q": "Which is a common error that lowers the Grammatical Range and Accuracy score?",
   "opts": [
    "Using a variety of correct sentence structures",
    "Accurate use of commas",
    "Frequent subject-verb agreement errors such as 'the results shows'",
    "Correct spelling of common words"
   ],
   "correct": 2,
   "exp": "'The results shows' is a subject-verb agreement error, and repeated such mistakes lower the grammar score."
  },
  {
   "q": "Writing far below the minimum word count in Task 2 primarily causes what?",
   "opts": [
    "A higher band for being concise",
    "An automatic Band 9",
    "No effect on the score",
    "A penalty because the task cannot be fully developed"
   ],
   "correct": 3,
   "exp": "Underlength essays are penalised because they cannot develop ideas fully, harming Task Response."
  },
  {
   "q": "Which habit most damages the Coherence and Cohesion score?",
   "opts": [
    "Overusing or misusing linking words like 'moreover' in almost every sentence",
    "Using clear topic sentences",
    "Organising ideas into paragraphs",
    "Referencing ideas with pronouns correctly"
   ],
   "correct": 0,
   "exp": "Mechanically overusing linkers makes writing feel artificial and disjointed, harming cohesion rather than helping it."
  }
 ],
 "Task Achievement Strategies": [
  {
   "q": "To maximise Task Achievement in Task 2, what must your essay do first and foremost?",
   "opts": [
    "Use the longest words possible",
    "Directly and fully answer every part of the question asked",
    "Contain exactly five paragraphs",
    "Include a personal story"
   ],
   "correct": 1,
   "exp": "Task Achievement depends on addressing all parts of the prompt directly and completely."
  },
  {
   "q": "A Task 2 prompt asks you to discuss both views and give your opinion. What must a high-band response include?",
   "opts": [
    "Only your own opinion",
    "Only one of the two views",
    "A balanced discussion of both views plus a clearly stated personal opinion",
    "Neither view, just background facts"
   ],
   "correct": 2,
   "exp": "The instruction requires both views to be discussed and your own opinion stated, or the task is incomplete."
  },
  {
   "q": "In Task 1, why must you avoid inventing reasons or opinions about why data changed?",
   "opts": [
    "Because speculation is rewarded",
    "Because opinions raise the vocabulary score",
    "Because you must always give recommendations",
    "Because Task 1 requires objective reporting of the data, not personal explanation"
   ],
   "correct": 3,
   "exp": "Task 1 is an objective report of the visual data, so adding invented causes or opinions harms Task Achievement."
  }
 ],
 "Speaking Like a Native": [
  {
   "q": "Which feature most helps English sound natural rather than robotic in the Speaking test?",
   "opts": [
    "Using connected speech and word linking",
    "Speaking as slowly as possible",
    "Pausing after every single word",
    "Memorising long scripted answers"
   ],
   "correct": 0,
   "exp": "Connected speech, where words link smoothly together, is a key marker of natural, fluent English."
  },
  {
   "q": "What does a 'filler' like 'well, actually' do for a near-native speaker?",
   "opts": [
    "It lowers the band score automatically",
    "It buys natural thinking time without awkward silence",
    "It must never be used in IELTS",
    "It replaces the need to answer the question"
   ],
   "correct": 1,
   "exp": "Natural fillers give you thinking time and keep speech flowing, sounding more native than dead silence."
  },
  {
   "q": "Which habit best builds a native-like rhythm in English?",
   "opts": [
    "Reading grammar rules aloud",
    "Stressing every word equally",
    "Shadowing native audio and copying its stress patterns",
    "Translating word-for-word from your first language"
   ],
   "correct": 2,
   "exp": "Shadowing native audio trains you to reproduce natural stress and rhythm rather than flat, even speech."
  }
 ],
 "Advanced Topic Discussions": [
  {
   "q": "In Part 3, how should you handle an abstract, unfamiliar discussion topic?",
   "opts": [
    "Say you do not know and stop",
    "Give a one-word answer only",
    "Change the subject to something easier",
    "Reason aloud, giving examples and considering different sides"
   ],
   "correct": 3,
   "exp": "Part 3 rewards developed reasoning, examples and balanced viewpoints rather than short or evasive answers."
  },
  {
   "q": "Which phrase best introduces a contrasting viewpoint in a discussion?",
   "opts": [
    "On the other hand, some would argue that...",
    "I like it very much because good",
    "Yes, that is true, full stop",
    "I have no opinion about this"
   ],
   "correct": 0,
   "exp": "'On the other hand' signals a contrasting view and shows the range expected in advanced discussion."
  },
  {
   "q": "What does an examiner look for when a Part 3 question asks you to speculate about the future?",
   "opts": [
    "A memorised paragraph",
    "Use of tentative language such as 'might', 'could' or 'is likely to'",
    "Definite facts only",
    "A refusal to guess"
   ],
   "correct": 1,
   "exp": "Speculation calls for tentative, hypothetical language like 'might' and 'is likely to' to sound precise and natural."
  }
 ],
 "Abstract Ideas": [
  {
   "q": "How can you make an abstract idea like 'freedom' clearer when speaking?",
   "opts": [
    "Repeat the word many times",
    "Define it using a dictionary quote",
    "Give a concrete example or situation to illustrate it",
    "Avoid the topic entirely"
   ],
   "correct": 2,
   "exp": "A concrete example anchors an abstract concept and shows you can develop ideas clearly."
  },
  {
   "q": "Which sentence best expresses an abstract idea with precision?",
   "opts": [
    "Happiness is a thing that is good",
    "I think happiness maybe yes",
    "Happiness happy people",
    "Happiness often depends less on wealth than on strong relationships"
   ],
   "correct": 3,
   "exp": "This option states an abstract claim clearly and adds a comparative idea, showing controlled expression."
  },
  {
   "q": "When discussing an abstract concept, why is comparing two ideas useful?",
   "opts": [
    "It shows depth by weighing relationships between ideas",
    "It fills time without meaning",
    "It is required to reach Band 5",
    "It avoids giving any opinion"
   ],
   "correct": 0,
   "exp": "Comparing ideas demonstrates the analytical depth examiners reward in higher bands."
  }
 ],
 "Debate and Argument Skills": [
  {
   "q": "What is the strongest way to support an argument in Part 3?",
   "opts": [
    "Repeat your opinion louder",
    "Back the claim with a reason and an example",
    "State it once with no support",
    "Say everyone agrees with you"
   ],
   "correct": 1,
   "exp": "A claim supported by a clear reason and example is far more persuasive than mere repetition."
  },
  {
   "q": "Which phrase best concedes a point before rebutting it?",
   "opts": [
    "That is completely wrong",
    "I refuse to answer that",
    "While that may be true, the bigger issue is...",
    "You are correct, so I stop"
   ],
   "correct": 2,
   "exp": "Conceding then rebutting ('While that may be true...') shows sophisticated, balanced argument skills."
  },
  {
   "q": "Why should you avoid saying only 'I agree' in a debate-style question?",
   "opts": [
    "It is grammatically wrong",
    "It uses too many words",
    "Agreement is forbidden in IELTS",
    "It gives no reasoning and limits your band score"
   ],
   "correct": 3,
   "exp": "Bare agreement shows no development; examiners want reasons and extended responses."
  }
 ],
 "Idioms and Collocations": [
  {
   "q": "Which is a correct English collocation?",
   "opts": [
    "Make a decision",
    "Do a decision",
    "Have a decision",
    "Take a decision quickly done"
   ],
   "correct": 0,
   "exp": "'Make a decision' is the standard collocation; 'do' and 'have' a decision are incorrect."
  },
  {
   "q": "What does the idiom 'to be over the moon' mean?",
   "opts": [
    "To be very tired",
    "To be extremely happy",
    "To be confused",
    "To be in space"
   ],
   "correct": 1,
   "exp": "'Over the moon' is an idiom meaning extremely happy or delighted."
  },
  {
   "q": "Why should idioms be used carefully in the Speaking test?",
   "opts": [
    "They are banned by IELTS",
    "They always raise your score",
    "Used wrongly or too often they sound forced and unnatural",
    "They only work in Writing"
   ],
   "correct": 2,
   "exp": "Idioms help only when used accurately and naturally; forced overuse sounds unnatural to examiners."
  }
 ],
 "Pronunciation for Band 8+": [
  {
   "q": "Which pronunciation feature most affects meaning and is key at Band 8+?",
   "opts": [
    "Speaking in a monotone",
    "Speaking extremely fast",
    "Adding an accent from a film",
    "Correct word and sentence stress"
   ],
   "correct": 3,
   "exp": "Accurate word and sentence stress carries meaning and is essential for a high pronunciation band."
  },
  {
   "q": "What is intonation and why does it matter for Band 8+?",
   "opts": [
    "The rise and fall of the voice that signals meaning and attitude",
    "The speed of speech only",
    "The volume of your voice",
    "The number of words per minute"
   ],
   "correct": 0,
   "exp": "Intonation, the rise and fall of the voice, conveys meaning and attitude, a Band 8+ requirement."
  },
  {
   "q": "For a high pronunciation score, how understandable must you be?",
   "opts": [
    "Understandable only to your teacher",
    "Effortlessly understood throughout with only occasional lapses",
    "Perfectly accent-free like a newsreader",
    "Understandable in your first language"
   ],
   "correct": 1,
   "exp": "Band 8 requires being easy to understand throughout, with only occasional lapses, not a specific accent."
  }
 ],
 "Speaking Confidence Building": [
  {
   "q": "If you do not understand a Speaking question, what should you do?",
   "opts": [
    "Stay silent until time runs out",
    "Answer a different question you prefer",
    "Politely ask the examiner to repeat or rephrase it",
    "Guess and speak about anything"
   ],
   "correct": 2,
   "exp": "Politely asking for repetition is allowed and shows composure rather than losing marks."
  },
  {
   "q": "Which practice best reduces nervousness before the Speaking test?",
   "opts": [
    "Avoiding speaking until test day",
    "Learning only difficult vocabulary",
    "Memorising full answers word for word",
    "Regular timed practice with a partner or recording"
   ],
   "correct": 3,
   "exp": "Frequent realistic practice builds fluency and calm; memorised scripts sound unnatural under pressure."
  },
  {
   "q": "If you make a small grammar slip while speaking, what is best?",
   "opts": [
    "Self-correct briefly and keep going naturally",
    "Stop and apologise repeatedly",
    "Start the whole answer again",
    "Switch to your first language"
   ],
   "correct": 0,
   "exp": "A quick self-correction and continued flow shows control; dwelling on errors harms fluency."
  }
 ],
 "IELTS Exam Strategies": [
  {
   "q": "In Listening, why should you read the questions before the audio plays?",
   "opts": [
    "To skip the audio entirely",
    "To predict answers and know what to listen for",
    "Because the audio repeats twice",
    "To write answers before listening"
   ],
   "correct": 1,
   "exp": "Previewing questions lets you predict content and target key information as you listen."
  },
  {
   "q": "In Reading, what is 'skimming' used for?",
   "opts": [
    "Reading every word slowly",
    "Finding one specific number",
    "Getting the general idea or gist of a passage quickly",
    "Memorising the whole text"
   ],
   "correct": 2,
   "exp": "Skimming gives the overall gist quickly, helping you locate where answers are before reading closely."
  },
  {
   "q": "What should you do with a hard Reading question you cannot answer quickly?",
   "opts": [
    "Leave it blank forever",
    "Spend all remaining time on it",
    "Give up on the whole section",
    "Guess or mark it, move on, and return later"
   ],
   "correct": 3,
   "exp": "There is no penalty for guessing, so move on and return, ensuring you attempt every question."
  }
 ],
 "Time Management": [
  {
   "q": "In Writing, how should you split the 60 minutes between Task 1 and Task 2?",
   "opts": [
    "About 20 minutes on Task 1 and 40 on Task 2",
    "30 minutes each",
    "40 on Task 1 and 20 on Task 2",
    "All 60 on Task 1"
   ],
   "correct": 0,
   "exp": "Task 2 is worth more marks, so spend about 20 minutes on Task 1 and 40 on Task 2."
  },
  {
   "q": "Roughly how long is the Academic Reading test and how many questions?",
   "opts": [
    "30 minutes, 20 questions",
    "60 minutes, 40 questions",
    "90 minutes, 40 questions",
    "45 minutes, 30 questions"
   ],
   "correct": 1,
   "exp": "Academic Reading gives 60 minutes for 40 questions, so pace at about 20 minutes per passage."
  },
  {
   "q": "Why should you not spend too long on a single Listening answer?",
   "opts": [
    "Each answer is worth ten marks",
    "There is extra time to relisten",
    "The recording keeps moving and you may miss later answers",
    "The examiner pauses for you"
   ],
   "correct": 2,
   "exp": "The audio plays once and continues, so lingering on one answer risks missing the next ones."
  }
 ],
 "Mock Tests": [
  {
   "q": "What is the main purpose of taking full mock tests before IELTS?",
   "opts": [
    "To memorise the real exam answers",
    "To guarantee a Band 9",
    "To avoid studying grammar",
    "To build stamina and practise timing under real conditions"
   ],
   "correct": 3,
   "exp": "Mock tests build exam stamina and let you rehearse timing under realistic conditions."
  },
  {
   "q": "For a mock test to be useful, how should it be taken?",
   "opts": [
    "Under strict timed, exam-like conditions",
    "With no time limit and open notes",
    "Only the sections you enjoy",
    "With a friend giving the answers"
   ],
   "correct": 0,
   "exp": "Realistic timed conditions make the practice diagnostic and prepare you for real pressure."
  },
  {
   "q": "After finishing a mock test, what is the most valuable next step?",
   "opts": [
    "Throw it away and start another",
    "Review mistakes and understand why they happened",
    "Only check the total score",
    "Repeat the exact same test immediately"
   ],
   "correct": 1,
   "exp": "Reviewing why errors occurred turns a mock test into real learning and improvement."
  }
 ],
 "Error Analysis": [
  {
   "q": "What is the best first step in analysing your practice errors?",
   "opts": [
    "Ignore them and move on",
    "Blame the difficulty of the test",
    "Group them by type, such as grammar or spelling",
    "Only count how many were wrong"
   ],
   "correct": 2,
   "exp": "Grouping errors by type reveals patterns so you can target your weakest areas."
  },
  {
   "q": "If you repeatedly lose marks for verb tenses, what should you do?",
   "opts": [
    "Avoid using verbs",
    "Only write short sentences",
    "Accept it as impossible to fix",
    "Focus targeted practice on that specific grammar point"
   ],
   "correct": 3,
   "exp": "Targeted practice on the recurring weakness is the efficient way to raise your score."
  },
  {
   "q": "Why keep an error log during IELTS preparation?",
   "opts": [
    "To track recurring weaknesses and measure progress",
    "To increase the number of mistakes",
    "Because the examiner checks it",
    "To fill up your notebook"
   ],
   "correct": 0,
   "exp": "An error log exposes recurring weaknesses and shows measurable progress over time."
  }
 ],
 "Band Score Improvement": [
  {
   "q": "Which concrete tactic most helps raise a Writing band for lexical resource?",
   "opts": [
    "Repeating the same simple words",
    "Using a range of accurate, topic-specific vocabulary",
    "Writing much longer essays",
    "Using only very rare words wrongly"
   ],
   "correct": 1,
   "exp": "A range of accurate, appropriate vocabulary directly boosts the lexical resource criterion."
  },
  {
   "q": "To move from Band 6 to 7 in Speaking, what should you improve?",
   "opts": [
    "Speaking only in short answers",
    "Memorising more idioms only",
    "Fluency and using a wider range of structures accurately",
    "Slowing down to almost silence"
   ],
   "correct": 2,
   "exp": "Band 7 needs greater fluency and a wider range of accurate grammar, not just memorised phrases."
  },
  {
   "q": "Which is a realistic way to gain marks in Reading?",
   "opts": [
    "Translating every word first",
    "Reading each passage three times",
    "Answering only easy questions",
    "Improving skimming and scanning speed"
   ],
   "correct": 3,
   "exp": "Faster, accurate skimming and scanning lets you answer more questions in the limited time."
  }
 ],
 "Exam Day Preparation & Computer-Based IELTS": [
  {
   "q": "What identity document is normally required to enter the IELTS test?",
   "opts": [
    "The valid passport or ID used at registration",
    "A school report card",
    "A recent electricity bill",
    "A photocopy of any ID"
   ],
   "correct": 0,
   "exp": "You must bring the same valid passport or national ID you registered with to be admitted."
  },
  {
   "q": "A key advantage of computer-based IELTS over paper is that you can?",
   "opts": [
    "See the answers in advance",
    "Easily edit, cut and paste text in Writing",
    "Take unlimited time",
    "Skip the Speaking test"
   ],
   "correct": 1,
   "exp": "On computer you can edit and rearrange your writing easily and see a live word count."
  },
  {
   "q": "In computer-based IELTS, how is the Speaking test usually conducted?",
   "opts": [
    "By typing your answers",
    "By a fully automated robot only",
    "Face to face or via video with a real examiner",
    "It is cancelled"
   ],
   "correct": 2,
   "exp": "Speaking remains a live conversation with a real examiner, in person or by video call."
  }
 ],
 "Academic vs General IELTS": [
  {
   "q": "How do the Writing tasks differ between Academic and General Training?",
   "opts": [
    "They are identical",
    "Academic only has one task",
    "General has no Writing test",
    "Academic Task 1 describes a graph or chart; General Task 1 is a letter"
   ],
   "correct": 3,
   "exp": "Academic Task 1 describes visual data, while General Training Task 1 asks you to write a letter."
  },
  {
   "q": "Which module has the same test for both Academic and General candidates?",
   "opts": [
    "Listening and Speaking",
    "Writing",
    "Reading",
    "None of them"
   ],
   "correct": 0,
   "exp": "Listening and Speaking are identical for both versions; only Reading and Writing differ."
  },
  {
   "q": "Which version is typically required for university study abroad?",
   "opts": [
    "General Training",
    "Academic",
    "Either one equally",
    "Neither is accepted"
   ],
   "correct": 1,
   "exp": "Universities usually require the Academic module, while General Training suits migration and work."
  }
 ]
};

})();
