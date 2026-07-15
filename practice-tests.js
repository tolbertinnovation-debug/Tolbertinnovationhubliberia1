/* ============================================================
   TIH LEARNING HUB, PRACTICE TEST BANK
   ------------------------------------------------------------
   Timed, auto-scored practice tests for the premium exam-prep
   courses (IELTS, TOEFL iBT, SAT). Consumed by practice-test.html.

   Each exam has:
     title, durationMin, intro, scoreType, passMark (%),
     sections: [{ name, questions: [{q, opts[], correct, exp}] }]
     writing: [{ prompt, model, checklist[] }]
     speaking: [{ prompt, tips, model }]

   scoreType controls how the MCQ percentage is converted:
     'band'     -> IELTS 0–9 band estimate
     'toefl120' -> TOEFL 0–120 estimate (30 per section)
     'sat1600'  -> SAT 400–1600 estimate (800 per area)
   ============================================================ */
var PRACTICE_TESTS = {

  ielts: {
    examId: 'ielts',
    title: 'IELTS Practice Test',
    durationMin: 35,
    scoreType: 'band',
    passMark: 70,
    intro: 'A timed IELTS-style practice test covering Reading comprehension, Listening (transcript-based), and Grammar & Vocabulary. Answer every question, there is no penalty for guessing. At the end you will get an estimated band score and a full review with explanations. Writing and Speaking practice prompts with model answers follow the test.',
    sections: [
      { name: 'Reading', questions: [
        { q: 'Read the passage, then answer: "The Sahara, the world’s largest hot desert, was once a green savannah dotted with lakes and wildlife. About 5,000 years ago, slow changes in the Earth’s orbit reduced the region’s rainfall, gradually turning it into desert." According to the passage, what turned the Sahara into a desert?',
          opts: ['Overhunting of wildlife', 'A change in the Earth’s orbit that reduced rainfall', 'Farming by early humans', 'A large volcanic eruption'], correct: 1,
          exp: 'The passage directly states that changes in the Earth’s orbit reduced rainfall, turning the region into desert.' },
        { q: 'Based on the same passage, the statement "The Sahara has always been a desert" is:',
          opts: ['True', 'False', 'Not Given'], correct: 1,
          exp: 'False, the passage says it "was once a green savannah", which contradicts the statement.' },
        { q: 'Based on the same passage, the statement "The Sahara is the largest desert of any kind on Earth" is:',
          opts: ['True', 'False', 'Not Given'], correct: 2,
          exp: 'Not Given, the passage only says "largest hot desert". It does not say whether it is the largest desert overall (in fact Antarctica is larger), so there is not enough information.' },
        { q: 'In the passage, the word "dotted" most nearly means:',
          opts: ['covered completely', 'scattered with', 'emptied of', 'painted'], correct: 1,
          exp: '"Dotted with lakes" means lakes were scattered across the landscape.' },
        { q: 'Read: "Unlike bees, which live in large colonies, most of the world’s 20,000 bee species are solitary, with each female building and provisioning her own nest." Which statement is best supported?',
          opts: ['All bees live in colonies', 'Most bee species are solitary rather than colonial', 'There are only a few bee species', 'Male bees build the nests'], correct: 1,
          exp: 'The passage says most of the 20,000 species are solitary; only some (like honeybees) live in colonies.' }
      ]},
      { name: 'Listening (Transcript-Based)', questions: [
        { q: 'Transcript: "The library is open from nine in the morning until eight in the evening on weekdays, but it closes at five on Saturdays and is shut all day Sunday." When does the library close on Saturday?',
          opts: ['8:00 p.m.', '9:00 a.m.', '5:00 p.m.', 'It is closed on Saturday'], correct: 2,
          exp: 'The speaker says it "closes at five on Saturdays".' },
        { q: 'Transcript: "To register, first fill in the online form, then bring your ID to the front desk, sorry, actually you should email the form to us before you come in." What must you do with the form?',
          opts: ['Bring it to the front desk', 'Email it before coming in', 'Post it by mail', 'Nothing is needed'], correct: 1,
          exp: 'The speaker corrects the first instruction, the final instruction is to EMAIL the form before coming in. IELTS often uses this "correction" trap.' },
        { q: 'Transcript: "The workshop fee is fifteen dollars for students and thirty dollars for everyone else." How much does a non-student pay?',
          opts: ['$15', '$30', '$50', 'Free'], correct: 1,
          exp: '"Thirty dollars for everyone else" = the non-student fee.' },
        { q: 'Transcript: "You’ll need a notebook, a pen, and, most importantly, your student card." Which item does the speaker emphasise as most important?',
          opts: ['A notebook', 'A pen', 'The student card', 'A laptop'], correct: 2,
          exp: 'The phrase "most importantly" signals the emphasised item: the student card.' }
      ]},
      { name: 'Grammar & Vocabulary', questions: [
        { q: 'Choose the correct sentence:',
          opts: ['She have lived in Monrovia since 2019.', 'She has lived in Monrovia since 2019.', 'She living in Monrovia since 2019.', 'She lived in Monrovia since 2019.'], correct: 1,
          exp: 'Present perfect ("has lived") is used with "since" to describe an action continuing to now.' },
        { q: 'Complete: "If it ______ tomorrow, we will cancel the trip."',
          opts: ['will rain', 'rains', 'rained', 'is raining'], correct: 1,
          exp: 'First conditional: "if" + present simple ("rains"), then "will" in the main clause.' },
        { q: 'Which word best completes: "The results were ______; nobody had expected such a large improvement."',
          opts: ['predictable', 'remarkable', 'ordinary', 'disappointing'], correct: 1,
          exp: '"Remarkable" (surprising/impressive) fits "nobody had expected such a large improvement".' },
        { q: 'Choose the most formal option for an essay: "The government should ______ the problem of youth unemployment."',
          opts: ['deal with', 'tackle', 'sort out', 'handle a bit'], correct: 1,
          exp: '"Tackle" is a strong, formal collocation with "problem", ideal for Writing Task 2.' },
        { q: 'Identify the error: "Despite of the rain, the match continued."',
          opts: ['"Despite of" should be "Despite" or "In spite of"', 'No error', '"continued" should be "continue"', '"the match" should be "a match"'], correct: 0,
          exp: 'It is either "despite" or "in spite of", never "despite of".' },
        { q: 'Best linking word: "The plan is expensive. ______, it could save money in the long term."',
          opts: ['Therefore', 'However', 'Because', 'For example'], correct: 1,
          exp: '"However" signals the contrast between "expensive" and "save money".' }
      ]}
    ],
    writing: [
      { prompt: 'Writing Task 2 (40 minutes, 250+ words): Some people believe that university education should be free for everyone. Others think students should pay for their own studies. Discuss both views and give your own opinion.',
        checklist: ['Introduction paraphrases the topic and states your position', 'One body paragraph for each view, each with a reason and example', 'Clear linking words (however, furthermore, as a result)', 'A conclusion that restates your opinion', 'At least 250 words; no memorised sentences'],
        model: 'Education is one of the most powerful tools for national development, and there is ongoing debate about who should pay for it at university level. While some argue that higher education should be free for all, others believe students should bear the cost. This essay will examine both positions before giving my own view.\n\nThose who support free university education argue that it removes financial barriers and allows talented students from poor families to succeed. In countries such as Germany, tuition-free universities have widened access and strengthened the workforce. Supporters also claim that an educated population benefits the whole society through higher productivity and lower poverty.\n\nOn the other hand, those who believe students should pay point out that free education is expensive for governments and may lower quality if funding is limited. They argue that graduates earn more over their lifetime, so it is fair for them to contribute to the cost, often through loans repaid after they begin working.\n\nIn my opinion, a balanced system is best. Basic university education should be heavily subsidised so that no capable student is excluded by poverty, while wealthier families or high-earning graduates contribute a reasonable share. This protects both access and quality.\n\nIn conclusion, although both views have merit, I believe governments should fund most of the cost while allowing those who can afford it to contribute, ensuring education remains both accessible and sustainable.' }
    ],
    speaking: [
      { prompt: 'Speaking Part 2 (Cue Card): Describe a skill you would like to learn. You should say: what the skill is, why you want to learn it, how you would learn it, and how it would help you. You have 1 minute to prepare and should speak for 1–2 minutes.',
        tips: 'Make quick notes against each bullet. Extend each point with a reason, an example, and how you feel. Keep talking until the examiner stops you.',
        model: 'A skill I would really like to learn is graphic design. I’m interested in it because I run a small online shop, and at the moment I pay someone else to make my posters, which is expensive. I’d learn it through free online courses, for example, the TIH Learning Hub, and by practising with tools like Canva every day. I think it would help me a great deal: I could design my own adverts, respond quickly to trends, and even offer design services to other small businesses to earn extra income. Overall, it’s a practical skill that would give me more independence and open new opportunities.' }
    ]
  },

  toefl: {
    examId: 'toefl',
    title: 'TOEFL iBT Practice Test',
    durationMin: 30,
    scoreType: 'toefl120',
    passMark: 70,
    intro: 'A timed TOEFL iBT-style practice test covering Reading and Listening (transcript-based) comprehension and academic language use. You will receive an estimated 0–120 score and a full review. Integrated Writing and Speaking practice prompts with model responses follow the test.',
    sections: [
      { name: 'Reading', questions: [
        { q: 'Passage: "Bioluminescence, the production of light by living organisms, is common in the deep ocean, where sunlight cannot reach. Many species use it to attract prey, confuse predators, or communicate with mates." Why is bioluminescence common in the deep ocean, according to the passage?',
          opts: ['Because the water is warm', 'Because sunlight cannot reach there', 'Because there are no predators', 'Because the water is shallow'], correct: 1,
          exp: 'The passage links it to depths "where sunlight cannot reach".' },
        { q: 'The word "confuse" in the passage is closest in meaning to:',
          opts: ['attract', 'bewilder', 'feed', 'illuminate'], correct: 1,
          exp: '"Confuse predators" means to bewilder or disorient them.' },
        { q: 'Which purpose of bioluminescence is NOT mentioned in the passage?',
          opts: ['Attracting prey', 'Confusing predators', 'Communicating with mates', 'Producing heat for warmth'], correct: 3,
          exp: 'Negative-factual question: the passage lists prey, predators, and mates, but not warmth.' },
        { q: 'Passage: "Although coffee is often blamed for poor sleep, moderate consumption early in the day has little effect on most adults; the problem arises mainly when caffeine is taken late in the afternoon or evening." What can be inferred?',
          opts: ['Coffee never affects sleep', 'Timing of caffeine matters more than coffee itself for many adults', 'Everyone should stop drinking coffee', 'Coffee improves sleep'], correct: 1,
          exp: 'Inference: the passage contrasts early (little effect) with late (a problem), implying timing is key.' }
      ]},
      { name: 'Listening (Transcript-Based)', questions: [
        { q: 'Lecture excerpt: "So, the key point about supply and demand is this: when supply falls but demand stays the same, prices tend to rise." According to the professor, what happens to prices when supply falls and demand is unchanged?',
          opts: ['They fall', 'They rise', 'They stay the same', 'They disappear'], correct: 1,
          exp: 'The professor states prices "tend to rise" when supply falls and demand is unchanged.' },
        { q: 'Conversation: Student: "I’m worried I’ll miss the deadline." Advisor: "Don’t worry, you can request a one-week extension by emailing your professor before Friday." What is the advisor’s main purpose?',
          opts: ['To criticise the student', 'To reassure the student and give a solution', 'To cancel the assignment', 'To change the professor'], correct: 1,
          exp: 'Function question: the advisor reassures ("Don’t worry") and offers a concrete solution.' },
        { q: 'Lecture: "Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen." Which is a PRODUCT of photosynthesis?',
          opts: ['Sunlight', 'Carbon dioxide', 'Oxygen', 'Water'], correct: 2,
          exp: 'Sunlight, water and CO2 are inputs; glucose and oxygen are the products.' },
        { q: 'Lecture: "Now, this is important for the exam, write this down." What does the professor imply?',
          opts: ['The point is unimportant', 'Students should note this because it may be tested', 'The lecture is over', 'Students may leave'], correct: 1,
          exp: 'Signposting language ("important for the exam") flags a likely test point.' }
      ]},
      { name: 'Academic Language', questions: [
        { q: 'Choose the best academic paraphrase of "a lot of studies show":',
          opts: ['Loads of studies say', 'Numerous studies indicate', 'Studies kinda prove', 'Everyone knows'], correct: 1,
          exp: '"Numerous studies indicate" is precise and formal, suitable for academic writing.' },
        { q: 'Complete: "The experiment failed; ______, the researchers gained valuable insights.",',
          opts: ['therefore', 'nevertheless', 'because', 'for instance'], correct: 1,
          exp: '"Nevertheless" signals the contrast between failure and gaining insight.' },
        { q: 'Which sentence is grammatically correct?',
          opts: ['The data suggests that temperatures is rising.', 'The data suggest that temperatures are rising.', 'The data suggesting temperatures rising.', 'The data suggests temperatures rising.'], correct: 1,
          exp: 'Subject–verb agreement: "temperatures are rising"; "data suggest" is accepted in academic English.' },
        { q: '"To summarise the lecture" is a good phrase to begin which task?',
          opts: ['Independent Speaking', 'Integrated Writing', 'Reading', 'Vocabulary'], correct: 1,
          exp: 'Integrated Writing requires you to summarise how the lecture relates to the reading.' }
      ]}
    ],
    writing: [
      { prompt: 'Academic Discussion Task (10 minutes, ~100+ words): Your professor posts: "Should governments invest more in public transport or in building new roads?" Two classmates have replied. Write your own contribution, taking a clear position and adding a specific reason.',
        checklist: ['State your position in the first sentence', 'Give one developed reason with a specific example', 'Engage with or extend a classmate’s idea', 'Use varied, accurate academic English', 'About 100+ well-organised words'],
        model: 'I believe governments should prioritise investment in public transport rather than building more roads. While Daniel makes a good point that new roads reduce congestion, the relief is usually temporary because more roads encourage more people to drive, a phenomenon known as induced demand. Investing in reliable buses and trains, by contrast, moves far more people using less space and produces fewer emissions. In my city, an expanded bus network cut both traffic and travel costs for low-income commuters. For these reasons, public transport delivers longer-lasting benefits for both the economy and the environment.' }
    ],
    speaking: [
      { prompt: 'Independent Speaking Task (15 seconds to prepare, 45 seconds to speak): Some students prefer studying alone, while others prefer studying in groups. Which do you prefer and why?',
        tips: 'State your preference clearly, then give two reasons with a quick example. Aim to fill the full 45 seconds at a natural pace.',
        model: 'Personally, I prefer studying in groups. First, when I don’t understand something, a classmate can explain it in a way that’s often easier to grasp than a textbook. For example, a friend once helped me understand statistics in ten minutes after I’d struggled alone for hours. Second, studying in a group keeps me motivated and accountable, because we set goals together and encourage each other. Although studying alone is quieter, I find the shared knowledge and motivation of a group far more valuable for my learning.' }
    ]
  },

  sat: {
    examId: 'sat',
    title: 'Digital SAT Practice Test',
    durationMin: 35,
    scoreType: 'sat1600',
    passMark: 70,
    intro: 'A timed Digital SAT-style practice test with two areas, Reading & Writing and Math. You will receive an estimated 400–1600 score with a breakdown for each area, plus a full review. Remember: there is no penalty for wrong answers, so never leave a blank.',
    sections: [
      { name: 'Reading & Writing', questions: [
        { q: 'Which choice completes the text with the most logical and precise word? "Although the committee’s report was thorough, its recommendations were so ______ that officials struggled to turn them into concrete policy."',
          opts: ['detailed', 'vague', 'expensive', 'popular'], correct: 1,
          exp: '"Vague" contrasts with "thorough" and explains why officials struggled to make concrete policy.' },
        { q: 'Choose the option that best maintains sentence structure: "The scientist recorded the temperature every hour, ______ she analysed the pattern the next morning."',
          opts: ['and', 'but', 'because', 'so'], correct: 0,
          exp: 'Two related actions in sequence are joined logically by "and".' },
        { q: 'Which choice conforms to Standard English conventions? "The results of the survey ______ surprising."',
          opts: ['was', 'were', 'is', 'being'], correct: 1,
          exp: 'The subject "results" is plural, so the verb must be "were".' },
        { q: 'Select the best transition: "The medicine reduced symptoms in most patients. ______, a small group reported no improvement at all."',
          opts: ['Therefore', 'However', 'For example', 'Similarly'], correct: 1,
          exp: '"However" signals the contrast between "most patients" improving and "a small group" not.' },
        { q: 'Punctuation: Which is correct?',
          opts: ['She studied all night, she still felt unprepared.', 'She studied all night; she still felt unprepared.', 'She studied all night she still felt unprepared.', 'She studied all night: she still felt, unprepared.'], correct: 1,
          exp: 'Two independent clauses need a semicolon (or a period), a comma alone is a comma splice.' },
        { q: 'Command of evidence: A student claims a city’s recycling program succeeded. Which finding best supports the claim?',
          opts: ['The program was widely advertised', 'Recycling rates rose from 20% to 55% after the program began', 'The program had a large budget', 'Many people had heard of the program'], correct: 1,
          exp: 'Only the measurable rise in recycling rates directly supports the claim of success.' }
      ]},
      { name: 'Math', questions: [
        { q: 'If 3x + 7 = 22, what is the value of x?',
          opts: ['3', '5', '7', '15'], correct: 1,
          exp: '3x = 22 − 7 = 15, so x = 5.' },
        { q: 'A shirt originally costs $40 and is discounted by 25%. What is the sale price?',
          opts: ['$10', '$25', '$30', '$35'], correct: 2,
          exp: '25% of $40 = $10 discount, so the sale price is $40 − $10 = $30.' },
        { q: 'What is the slope of the line y = −4x + 9?',
          opts: ['9', '4', '−4', '−9'], correct: 2,
          exp: 'In y = mx + b, the slope m is the coefficient of x, which is −4.' },
        { q: 'If a car travels 240 km in 3 hours, what is its average speed?',
          opts: ['60 km/h', '80 km/h', '90 km/h', '120 km/h'], correct: 1,
          exp: 'Speed = distance ÷ time = 240 ÷ 3 = 80 km/h.' },
        { q: 'Solve for x: 2(x − 3) = 10.',
          opts: ['4', '6', '8', '11'], correct: 2,
          exp: 'Divide both sides by 2: x − 3 = 5, so x = 8.' },
        { q: 'The mean of 4, 8, and x is 7. What is x?',
          opts: ['7', '8', '9', '12'], correct: 2,
          exp: '(4 + 8 + x)/3 = 7 → 12 + x = 21 → x = 9.' },
        { q: 'A right triangle has legs of length 3 and 4. What is the length of the hypotenuse?',
          opts: ['5', '6', '7', '12'], correct: 0,
          exp: 'By the Pythagorean theorem: √(3² + 4²) = √25 = 5.' },
        { q: 'If 20% of a number is 30, what is the number?',
          opts: ['60', '100', '120', '150'], correct: 3,
          exp: '0.20 × n = 30 → n = 30 ÷ 0.20 = 150.' }
      ]}
    ],
    writing: [
      { prompt: 'Timed Practice (optional): The SAT no longer includes an essay for most test-takers, but strong writing habits still help. In 10 minutes, write a clear paragraph arguing whether high schools should require students to learn a second language. State a claim and support it with two reasons.',
        checklist: ['A clear claim in the first sentence', 'Two distinct supporting reasons', 'At least one specific example', 'Correct grammar and punctuation', 'A concise concluding sentence'],
        model: 'High schools should require every student to learn a second language. First, bilingual people gain a real advantage in the job market, since employers increasingly value the ability to communicate with international clients and partners. Second, studying another language builds cognitive skills such as memory and problem-solving, and it deepens students’ understanding of other cultures, making them more thoughtful citizens. For example, a student who learns French can access opportunities across West Africa and beyond. For these reasons, a second-language requirement prepares students for a connected world.' }
    ],
    speaking: []
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = PRACTICE_TESTS; }
