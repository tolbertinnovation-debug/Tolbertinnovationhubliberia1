window.TIH_TOEFL_BANK = {
  examId: 'toefl',
  title: 'TOEFL iBT Practice Test',
  durationMin: 45,
  scoreType: 'toefl120',
  passMark: 70,
  intro: 'Choose a section to practise, or take the Full Test. Reading, Listening, and Academic Language are timed and auto-scored with an estimated 0–120 score. Writing and Speaking are self-check with model answers.',
  sections: [
    {
      id: 'reading',
      name: 'Reading',
      durationMin: 18,
      questions: [
        {
          q: 'Passage: "Bioluminescence, the production of light by living organisms, is common in the deep ocean, where sunlight cannot reach. Many species use it to attract prey, confuse predators, or communicate with mates." Why is bioluminescence common in the deep ocean, according to the passage?',
          opts: ['Because the water is warm', 'Because sunlight cannot reach there', 'Because there are no predators', 'Because the water is shallow'],
          correct: 1,
          exp: 'The passage links it to depths "where sunlight cannot reach".'
        },
        {
          q: 'The word "confuse" in the passage is closest in meaning to:',
          opts: ['attract', 'bewilder', 'feed', 'illuminate'],
          correct: 1,
          exp: '"Confuse predators" means to bewilder or disorient them.'
        },
        {
          q: 'Which purpose of bioluminescence is NOT mentioned in the passage?',
          opts: ['Attracting prey', 'Confusing predators', 'Communicating with mates', 'Producing heat for warmth'],
          correct: 3,
          exp: 'Negative-factual: the passage lists prey, predators, and mates, but not warmth.'
        },
        {
          q: 'Passage: "Although coffee is often blamed for poor sleep, moderate consumption early in the day has little effect on most adults; the problem arises mainly when caffeine is taken late in the afternoon or evening." What can be inferred?',
          opts: ['Coffee never affects sleep', 'Timing of caffeine matters more than coffee itself for many adults', 'Everyone should stop drinking coffee', 'Coffee improves sleep'],
          correct: 1,
          exp: 'Inference: early intake has little effect; late intake is the problem — timing is key.'
        },
        {
          q: 'Passage: "Urban heat islands form when cities replace natural land cover with pavement and buildings that absorb and re-radiate heat. The result is higher nighttime temperatures in downtown areas than in surrounding rural zones." What is the primary cause of urban heat islands?',
          opts: ['Increased rainfall in cities', 'Replacement of natural land cover with heat-absorbing surfaces', 'More trees in rural areas', 'Higher population density alone'],
          correct: 1,
          exp: 'The passage states cities replace natural cover with pavement and buildings that absorb heat.'
        },
        {
          q: 'According to the urban heat island passage, when are city temperatures most noticeably higher relative to rural areas?',
          opts: ['During the day', 'At night', 'Only in winter', 'Only during rain'],
          correct: 1,
          exp: 'The passage explicitly mentions higher nighttime temperatures in downtown areas.'
        },
        {
          q: 'Passage: "In the 19th century, the discovery of germ theory transformed medicine. Surgeons who adopted antiseptic techniques saw dramatic drops in post-operative infection rates." The author\'s main point is that:',
          opts: ['Surgery became unnecessary', 'Germ theory had little practical impact', 'Antiseptic practices based on germ theory reduced infections', 'Infection rates rose in the 19th century'],
          correct: 2,
          exp: 'The passage links germ theory → antiseptic techniques → lower infection rates.'
        },
        {
          q: 'The phrase "dramatic drops" is closest in meaning to:',
          opts: ['slight increases', 'sudden large decreases', 'gradual rises', 'no change'],
          correct: 1,
          exp: '"Dramatic drops" means sudden, large decreases.'
        }
      ]
    },
    {
      id: 'listening',
      name: 'Listening (Transcript-Based)',
      durationMin: 15,
      questions: [
        {
          q: 'Lecture excerpt: "So, the key point about supply and demand is this: when supply falls but demand stays the same, prices tend to rise." According to the professor, what happens to prices when supply falls and demand is unchanged?',
          opts: ['They fall', 'They rise', 'They stay the same', 'They disappear'],
          correct: 1,
          exp: 'The professor states prices "tend to rise" when supply falls and demand is unchanged.'
        },
        {
          q: 'Conversation: Student: "I\'m worried I\'ll miss the deadline." Advisor: "Don\'t worry, you can request a one-week extension by emailing your professor before Friday." What is the advisor\'s main purpose?',
          opts: ['To criticise the student', 'To reassure the student and give a solution', 'To cancel the assignment', 'To change the professor'],
          correct: 1,
          exp: 'Function: the advisor reassures ("Don\'t worry") and offers a concrete solution.'
        },
        {
          q: 'Lecture: "Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen." Which is a PRODUCT of photosynthesis?',
          opts: ['Sunlight', 'Carbon dioxide', 'Oxygen', 'Water'],
          correct: 2,
          exp: 'Sunlight, water and CO2 are inputs; glucose and oxygen are products.'
        },
        {
          q: 'Lecture: "Now, this is important for the exam, write this down." What does the professor imply?',
          opts: ['The point is unimportant', 'Students should note this because it may be tested', 'The lecture is over', 'Students may leave'],
          correct: 1,
          exp: 'Signposting ("important for the exam") flags a likely test point.'
        },
        {
          q: 'Conversation: Student: "Is the library open late during finals week?" Librarian: "Yes, we extend hours until midnight from Monday through Thursday." What does the librarian say about library hours?',
          opts: ['The library closes early during finals', 'Hours are extended until midnight Mon–Thu', 'The library is closed on weekends only', 'Hours do not change'],
          correct: 1,
          exp: 'The librarian states extended hours until midnight Monday through Thursday.'
        },
        {
          q: 'Lecture: "There are three main types of rock: igneous, sedimentary, and metamorphic. Igneous rocks form from cooled magma." Which type forms from cooled magma?',
          opts: ['Sedimentary', 'Metamorphic', 'Igneous', 'All three equally'],
          correct: 2,
          exp: 'The lecture states igneous rocks form from cooled magma.'
        },
        {
          q: 'Conversation: Professor: "Your draft is solid, but you need stronger transitions between paragraphs." Student: "Could you show me an example?" What does the student want?',
          opts: ['A better grade immediately', 'An example of stronger transitions', 'To rewrite the whole paper', 'To drop the course'],
          correct: 1,
          exp: 'The student asks for an example of stronger transitions.'
        },
        {
          q: 'Lecture: "Be careful not to confuse correlation with causation. Just because two variables move together does not mean one causes the other." What is the professor warning against?',
          opts: ['Using statistics at all', 'Assuming that correlation proves causation', 'Ignoring all data', 'Only studying one variable'],
          correct: 1,
          exp: 'The professor warns against treating correlation as proof of causation.'
        }
      ]
    },
    {
      id: 'academic',
      name: 'Academic Language',
      durationMin: 12,
      questions: [
        {
          q: 'Choose the best academic paraphrase of "a lot of studies show":',
          opts: ['Loads of studies say', 'Numerous studies indicate', 'Studies kinda prove', 'Everyone knows'],
          correct: 1,
          exp: '"Numerous studies indicate" is precise and formal for academic writing.'
        },
        {
          q: 'Complete: "The experiment failed; ______, the researchers gained valuable insights."',
          opts: ['therefore', 'nevertheless', 'because', 'for instance'],
          correct: 1,
          exp: '"Nevertheless" signals the contrast between failure and gaining insight.'
        },
        {
          q: 'Which sentence is grammatically correct?',
          opts: ['The data suggests that temperatures is rising.', 'The data suggest that temperatures are rising.', 'The data suggesting temperatures rising.', 'The data suggests temperatures rising.'],
          correct: 1,
          exp: 'Subject–verb agreement: "temperatures are rising"; "data suggest" is accepted in academic English.'
        },
        {
          q: '"To summarise the lecture" is a good phrase to begin which task?',
          opts: ['Independent Speaking', 'Integrated Writing', 'Reading', 'Vocabulary'],
          correct: 1,
          exp: 'Integrated Writing requires summarising how the lecture relates to the reading.'
        },
        {
          q: 'Which is the most appropriate academic alternative to "I think"?',
          opts: ['In my opinion, it is clear that', 'It can be argued that', 'I feel like', 'Everyone agrees that'],
          correct: 1,
          exp: '"It can be argued that" is objective and academic; "I feel like" is too informal.'
        },
        {
          q: 'Choose the correct collocation: "The study _____ a significant correlation between sleep and memory."',
          opts: ['found', 'did', 'made', 'said'],
          correct: 0,
          exp: 'Academic collocation: studies "find" or "report" correlations.'
        },
        {
          q: 'Which sentence uses the passive voice appropriately for academic style?',
          opts: ['We mixed the chemicals carefully.', 'The chemicals were mixed carefully.', 'Mixing the chemicals happened carefully.', 'Someone mixed the chemicals carefully.'],
          correct: 1,
          exp: 'Passive focuses on the process/result rather than the agent — preferred in scientific writing.'
        },
        {
          q: 'Complete: "______ the limited sample size, the results should be interpreted with caution."',
          opts: ['Despite', 'Because of', 'Although', 'While'],
          correct: 1,
          exp: '"Because of the limited sample size" correctly introduces the reason for caution.'
        }
      ]
    }
  ],
  writing: [
    {
      prompt: 'Academic Discussion Task (10 minutes, ~100+ words): Your professor posts: "Should governments invest more in public transport or in building new roads?" Two classmates have replied. Write your own contribution, taking a clear position and adding a specific reason.',
      checklist: [
        'State your position in the first sentence',
        'Give one developed reason with a specific example',
        'Engage with or extend a classmate\'s idea',
        'Use varied, accurate academic English',
        'About 100+ well-organised words'
      ],
      model: 'I believe governments should prioritise investment in public transport rather than building more roads. While Daniel makes a good point that new roads reduce congestion, the relief is usually temporary because more roads encourage more people to drive, a phenomenon known as induced demand. Investing in reliable buses and trains, by contrast, moves far more people using less space and produces fewer emissions. In my city, an expanded bus network cut both traffic and travel costs for low-income commuters. For these reasons, public transport delivers longer-lasting benefits for both the economy and the environment.'
    },
    {
      prompt: 'Integrated Writing Task (20 minutes): Read a short passage arguing that online learning is less effective than classroom instruction. Then listen to a lecture that challenges this view. Summarise the points made in the lecture and explain how they cast doubt on the points made in the reading. (In this practice version, write as if you heard a lecture that argued online learning can match or exceed classroom results when designed well.)',
      checklist: [
        'Clearly state the relationship between the lecture and the reading',
        'Summarise key lecture points that challenge the reading',
        'Do not give your own opinion — report the lecture\'s view',
        'Use clear organisation and academic language',
        'Aim for 150–225 words'
      ],
      model: 'The reading claims that online learning is less effective than traditional classroom instruction because students lack face-to-face interaction, struggle with motivation, and receive delayed feedback. The lecture challenges each of these points. First, the lecturer notes that modern platforms include live video discussions and breakout rooms that closely mimic classroom interaction. Second, she argues that well-designed courses use progress trackers and peer accountability groups, which actually increase motivation for many learners. Finally, automated quizzes and rapid instructor messaging mean feedback can be faster online than in a large lecture hall. Overall, the lecture suggests that when online courses are carefully designed, the disadvantages listed in the reading can be overcome or even reversed.'
    }
  ],
  speaking: [
    {
      prompt: 'Independent Speaking Task (15 seconds to prepare, 45 seconds to speak): Some students prefer studying alone, while others prefer studying in groups. Which do you prefer and why?',
      tips: 'State your preference clearly, then give two reasons with a quick example. Aim to fill the full 45 seconds at a natural pace.',
      model: 'Personally, I prefer studying in groups. First, when I don\'t understand something, a classmate can explain it in a way that\'s often easier to grasp than a textbook. For example, a friend once helped me understand statistics in ten minutes after I\'d struggled alone for hours. Second, studying in a group keeps me motivated and accountable, because we set goals together and encourage each other. Although studying alone is quieter, I find the shared knowledge and motivation of a group far more valuable for my learning.'
    },
    {
      prompt: 'Independent Speaking Task (15 sec prepare, 45 sec speak): Do you agree or disagree with the following statement? "It is better to live in a small town than in a large city." Use details and examples to support your opinion.',
      tips: 'Take a clear position. Give two reasons with brief examples. Speak at a steady pace and fill most of the 45 seconds.',
      model: 'I disagree with the statement; I prefer living in a large city. First, cities offer more job opportunities and career growth. In my experience, most specialised industries and internships are concentrated in urban centres, so living there makes it easier to advance professionally. Second, cities provide greater access to cultural activities, education, and healthcare. For instance, I can attend concerts, take evening classes, and reach a major hospital within minutes. While small towns are quieter and may feel safer, the variety and opportunity of city life outweigh those advantages for me.'
    },
    {
      prompt: 'Integrated Speaking Task (practice version): A university announces it will replace printed textbooks with digital versions to cut costs and reduce paper use. A student responds that this will hurt students who prefer paper or have limited device access. Summarise the student\'s opinion and explain the reasons she gives. (Speak for ~60 seconds after 30 seconds of preparation.)',
      tips: 'Report the student\'s view accurately. Cover both reasons. Do not add your own opinion.',
      model: 'The student opposes the university\'s plan to replace printed textbooks with digital versions. She has two main concerns. First, she says many students prefer reading on paper because it is easier on the eyes and helps them retain information better when they annotate by hand. Second, she points out that not all students have reliable access to laptops or tablets, especially those from lower-income backgrounds, so a digital-only policy could put them at a disadvantage. Overall, she believes the change may save money and paper but will create new problems for a significant number of students.'
    }
  ]
};
