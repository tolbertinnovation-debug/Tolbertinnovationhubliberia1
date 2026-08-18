window.TIH_TOEFL_BANK = {
  examId: 'toefl',
  title: 'TOEFL iBT Practice Test',
  durationMin: 45,
  scoreType: 'toefl120',
  passMark: 70,
  intro: 'Choose a section to practise, or take the Full Test. Reading, Listening, and Academic Language are timed and auto-scored with an estimated 0–120 score. Writing and Speaking are self-check with model answers. Charts and tables appear exactly as on the real computer test.',
  sections: [
    {
      id: 'reading',
      name: 'Reading',
      durationMin: 18,
      questions: [
        {
          q: 'Passage with table:\n\n<div class="exam-passage"><p>The table below shows average monthly rainfall (mm) in three cities.</p><table class="exam-table"><thead><tr><th>City</th><th>Jan</th><th>Apr</th><th>Jul</th><th>Oct</th></tr></thead><tbody><tr><td>City A</td><td>80</td><td>45</td><td>20</td><td>55</td></tr><tr><td>City B</td><td>120</td><td>90</td><td>35</td><td>70</td></tr><tr><td>City C</td><td>30</td><td>25</td><td>15</td><td>40</td></tr></tbody></table><p>According to the table, which city has the highest rainfall in January?</p></div>',
          opts: ['City A', 'City B', 'City C', 'All equal'],
          correct: 1,
          exp: 'City B has 120 mm in January, the highest of the three.',
          html: true
        },
        {
          q: 'Using the rainfall table above, which statement is true?',
          opts: ['City C is wetter than City B in every month', 'July is the driest month for all three cities', 'City A has more rain in October than in January', 'City B has less rain in April than City A'],
          correct: 1,
          exp: 'July figures (20, 35, 15) are the lowest for each city.'
        },
        {
          q: 'Passage: "Bioluminescence, the production of light by living organisms, is common in the deep ocean, where sunlight cannot reach. Many species use it to attract prey, confuse predators, or communicate with mates." Why is bioluminescence common in the deep ocean?',
          opts: ['Because the water is warm', 'Because sunlight cannot reach there', 'Because there are no predators', 'Because the water is shallow'],
          correct: 1,
          exp: 'The passage links it to depths where sunlight cannot reach.'
        },
        {
          q: 'The word "confuse" in the bioluminescence passage is closest in meaning to:',
          opts: ['attract', 'bewilder', 'feed', 'illuminate'],
          correct: 1,
          exp: '"Confuse predators" means to bewilder or disorient them.'
        },
        {
          q: 'Chart question:\n\n<div class="exam-passage"><p>The bar chart shows the percentage of students who studied abroad from four regions in 2020.</p><div class="exam-chart"><svg viewBox="0 0 320 180" width="100%" style="max-width:320px;background:#fff;border:1px solid #C5D0E0;border-radius:6px"><text x="10" y="16" font-size="11" fill="#5A6A7E">% of students abroad (2020)</text><rect x="30" y="40" width="40" height="100" fill="#0B3D91"/><text x="38" y="35" font-size="10" fill="#1A2332">25%</text><text x="32" y="155" font-size="10" fill="#5A6A7E">Asia</text><rect x="100" y="70" width="40" height="70" fill="#0B3D91"/><text x="108" y="65" font-size="10" fill="#1A2332">18%</text><text x="95" y="155" font-size="10" fill="#5A6A7E">Europe</text><rect x="170" y="55" width="40" height="85" fill="#0B3D91"/><text x="178" y="50" font-size="10" fill="#1A2332">22%</text><text x="168" y="155" font-size="10" fill="#5A6A7E">Africa</text><rect x="240" y="90" width="40" height="50" fill="#0B3D91"/><text x="248" y="85" font-size="10" fill="#1A2332">12%</text><text x="230" y="155" font-size="10" fill="#5A6A7E">Americas</text><line x1="20" y1="140" x2="300" y2="140" stroke="#C5D0E0"/></svg></div><p>Which region had the highest percentage of students studying abroad?</p></div>',
          opts: ['Asia', 'Europe', 'Africa', 'Americas'],
          correct: 0,
          exp: 'Asia is shown at 25%, the highest bar.',
          html: true
        },
        {
          q: 'According to the bar chart, the percentage for Europe is closest to:',
          opts: ['12%', '18%', '22%', '25%'],
          correct: 1,
          exp: 'Europe is labelled 18%.'
        },
        {
          q: 'Passage: "Urban heat islands form when cities replace natural land cover with pavement and buildings that absorb and re-radiate heat. The result is higher nighttime temperatures in downtown areas than in surrounding rural zones." What is the primary cause of urban heat islands?',
          opts: ['Increased rainfall in cities', 'Replacement of natural land cover with heat-absorbing surfaces', 'More trees in rural areas', 'Higher population density alone'],
          correct: 1,
          exp: 'Cities replace natural cover with pavement and buildings that absorb heat.'
        },
        {
          q: 'Passage: "In the 19th century, the discovery of germ theory transformed medicine. Surgeons who adopted antiseptic techniques saw dramatic drops in post-operative infection rates." The author\'s main point is that:',
          opts: ['Surgery became unnecessary', 'Germ theory had little practical impact', 'Antiseptic practices based on germ theory reduced infections', 'Infection rates rose in the 19th century'],
          correct: 2,
          exp: 'Germ theory → antiseptic techniques → lower infection rates.'
        }
      ]
    },
    {
      id: 'listening',
      name: 'Listening (Transcript-Based)',
      durationMin: 15,
      questions: [
        {
          q: 'Lecture: "So, the key point about supply and demand is this: when supply falls but demand stays the same, prices tend to rise." According to the professor, what happens to prices when supply falls and demand is unchanged?',
          opts: ['They fall', 'They rise', 'They stay the same', 'They disappear'],
          correct: 1,
          exp: 'Prices "tend to rise" when supply falls and demand is unchanged.'
        },
        {
          q: 'Conversation: Student: "I\'m worried I\'ll miss the deadline." Advisor: "Don\'t worry, you can request a one-week extension by emailing your professor before Friday." What is the advisor\'s main purpose?',
          opts: ['To criticise the student', 'To reassure the student and give a solution', 'To cancel the assignment', 'To change the professor'],
          correct: 1,
          exp: 'The advisor reassures and offers a concrete solution.'
        },
        {
          q: 'Lecture: "Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen." Which is a PRODUCT of photosynthesis?',
          opts: ['Sunlight', 'Carbon dioxide', 'Oxygen', 'Water'],
          correct: 2,
          exp: 'Glucose and oxygen are products; the others are inputs.'
        },
        {
          q: 'Lecture: "Now, this is important for the exam, write this down." What does the professor imply?',
          opts: ['The point is unimportant', 'Students should note this because it may be tested', 'The lecture is over', 'Students may leave'],
          correct: 1,
          exp: 'Signposting flags a likely test point.'
        },
        {
          q: 'Conversation: Student: "Is the library open late during finals week?" Librarian: "Yes, we extend hours until midnight from Monday through Thursday." What does the librarian say about library hours?',
          opts: ['The library closes early during finals', 'Hours are extended until midnight Mon–Thu', 'The library is closed on weekends only', 'Hours do not change'],
          correct: 1,
          exp: 'Extended hours until midnight Monday through Thursday.'
        },
        {
          q: 'Lecture: "There are three main types of rock: igneous, sedimentary, and metamorphic. Igneous rocks form from cooled magma." Which type forms from cooled magma?',
          opts: ['Sedimentary', 'Metamorphic', 'Igneous', 'All three equally'],
          correct: 2,
          exp: 'Igneous rocks form from cooled magma.'
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
          exp: 'Correlation is not proof of causation.'
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
          exp: '"Numerous studies indicate" is precise and formal.'
        },
        {
          q: 'Complete: "The experiment failed; ______, the researchers gained valuable insights."',
          opts: ['therefore', 'nevertheless', 'because', 'for instance'],
          correct: 1,
          exp: '"Nevertheless" signals contrast.'
        },
        {
          q: 'Which sentence is grammatically correct?',
          opts: ['The data suggests that temperatures is rising.', 'The data suggest that temperatures are rising.', 'The data suggesting temperatures rising.', 'The data suggests temperatures rising.'],
          correct: 1,
          exp: 'Subject–verb agreement: temperatures are rising.'
        },
        {
          q: '"To summarise the lecture" is a good phrase to begin which task?',
          opts: ['Independent Speaking', 'Integrated Writing', 'Reading', 'Vocabulary'],
          correct: 1,
          exp: 'Integrated Writing summarises how the lecture relates to the reading.'
        },
        {
          q: 'Which is the most appropriate academic alternative to "I think"?',
          opts: ['In my opinion, it is clear that', 'It can be argued that', 'I feel like', 'Everyone agrees that'],
          correct: 1,
          exp: '"It can be argued that" is objective and academic.'
        },
        {
          q: 'Choose the correct collocation: "The study _____ a significant correlation between sleep and memory."',
          opts: ['found', 'did', 'made', 'said'],
          correct: 0,
          exp: 'Studies "find" or "report" correlations.'
        },
        {
          q: 'Which sentence uses the passive voice appropriately for academic style?',
          opts: ['We mixed the chemicals carefully.', 'The chemicals were mixed carefully.', 'Mixing the chemicals happened carefully.', 'Someone mixed the chemicals carefully.'],
          correct: 1,
          exp: 'Passive focuses on the process — preferred in scientific writing.'
        },
        {
          q: 'Complete: "______ the limited sample size, the results should be interpreted with caution."',
          opts: ['Despite', 'Because of', 'Although', 'While'],
          correct: 1,
          exp: '"Because of" correctly introduces the reason for caution.'
        }
      ]
    }
  ],
  writing: [
    {
      prompt: 'Academic Discussion Task (10 minutes, ~100+ words): Your professor posts: "Should governments invest more in public transport or in building new roads?" Two classmates have replied. Write your own contribution, taking a clear position and adding a specific reason.',
      checklist: ['State your position in the first sentence', 'Give one developed reason with a specific example', "Engage with or extend a classmate's idea", 'Use varied, accurate academic English', 'About 100+ well-organised words'],
      model: 'I believe governments should prioritise investment in public transport rather than building more roads. While Daniel makes a good point that new roads reduce congestion, the relief is usually temporary because more roads encourage more people to drive, a phenomenon known as induced demand. Investing in reliable buses and trains, by contrast, moves far more people using less space and produces fewer emissions. In my city, an expanded bus network cut both traffic and travel costs for low-income commuters. For these reasons, public transport delivers longer-lasting benefits for both the economy and the environment.'
    },
    {
      prompt: 'Integrated Writing Task (20 minutes): Read a short passage arguing that online learning is less effective than classroom instruction. Then listen to a lecture that challenges this view. Summarise the points made in the lecture and explain how they cast doubt on the points made in the reading.',
      checklist: ['Clearly state the relationship between the lecture and the reading', 'Summarise key lecture points that challenge the reading', "Do not give your own opinion — report the lecture's view", 'Use clear organisation and academic language', 'Aim for 150–225 words'],
      model: 'The reading claims that online learning is less effective than traditional classroom instruction because students lack face-to-face interaction, struggle with motivation, and receive delayed feedback. The lecture challenges each of these points. First, the lecturer notes that modern platforms include live video discussions and breakout rooms that closely mimic classroom interaction. Second, she argues that well-designed courses use progress trackers and peer accountability groups, which actually increase motivation for many learners. Finally, automated quizzes and rapid instructor messaging mean feedback can be faster online than in a large lecture hall. Overall, the lecture suggests that when online courses are carefully designed, the disadvantages listed in the reading can be overcome or even reversed.'
    }
  ],
  speaking: [
    {
      prompt: 'Independent Speaking Task (15 seconds to prepare, 45 seconds to speak): Some students prefer studying alone, while others prefer studying in groups. Which do you prefer and why?',
      tips: 'State your preference clearly, then give two reasons with a quick example. Aim to fill the full 45 seconds at a natural pace.',
      model: "Personally, I prefer studying in groups. First, when I don't understand something, a classmate can explain it in a way that's often easier to grasp than a textbook. For example, a friend once helped me understand statistics in ten minutes after I'd struggled alone for hours. Second, studying in a group keeps me motivated and accountable, because we set goals together and encourage each other. Although studying alone is quieter, I find the shared knowledge and motivation of a group far more valuable for my learning."
    },
    {
      prompt: 'Independent Speaking Task (15 sec prepare, 45 sec speak): Do you agree or disagree with the following statement? "It is better to live in a small town than in a large city." Use details and examples to support your opinion.',
      tips: 'Take a clear position. Give two reasons with brief examples. Speak at a steady pace and fill most of the 45 seconds.',
      model: 'I disagree with the statement; I prefer living in a large city. First, cities offer more job opportunities and career growth. In my experience, most specialised industries and internships are concentrated in urban centres, so living there makes it easier to advance professionally. Second, cities provide greater access to cultural activities, education, and healthcare. For instance, I can attend concerts, take evening classes, and reach a major hospital within minutes. While small towns are quieter and may feel safer, the variety and opportunity of city life outweigh those advantages for me.'
    },
    {
      prompt: "Integrated Speaking Task (practice version): A university announces it will replace printed textbooks with digital versions to cut costs and reduce paper use. A student responds that this will hurt students who prefer paper or have limited device access. Summarise the student's opinion and explain the reasons she gives.",
      tips: "Report the student's view accurately. Cover both reasons. Do not add your own opinion.",
      model: "The student opposes the university's plan to replace printed textbooks with digital versions. She has two main concerns. First, she says many students prefer reading on paper because it is easier on the eyes and helps them retain information better when they annotate by hand. Second, she points out that not all students have reliable access to laptops or tablets, especially those from lower-income backgrounds, so a digital-only policy could put them at a disadvantage. Overall, she believes the change may save money and paper but will create new problems for a significant number of students."
    }
  ]
};
