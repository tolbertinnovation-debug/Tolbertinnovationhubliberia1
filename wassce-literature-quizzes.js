/* TIH WASSCE Literature in English -- authored per-topic quiz questions.

   Before this file the course carried 77 quizzes built from a shared bank of
   36 questions: every practice quiz inside a module held the same three
   questions, and one question appeared in twenty different quizzes.

   Each of the 72 content lessons now has its own four questions. The first
   three form that lesson's practice quiz; the fourth is held back for the
   module assessments, so a learner meets it first in the assessment rather
   than having already answered it. The mock and final papers draw on the
   reserved questions and then on a separate examination pool, with cursors
   that only move forward -- no two assessments in the course share an item.

   Keys are module-qualified ("M5:Setting") because five titles occur in more
   than one module and a plain title key would collapse them. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var C = COURSES_DB['wassce-literature'];
  if (!C || !C.modules || !C.quizzes) return;

  var BANK = {
    "M1:Course Orientation": [
      {
        "q": "WASSCE Literature in English is examined in how many papers?",
        "opts": [
          "One paper only",
          "Three papers: objective, prose/drama and poetry/African & non-African drama",
          "Two oral papers",
          "Four written papers"
        ],
        "correct": 1,
        "exp": "WAEC sets Paper 1 (objective), Paper 2 (drama and poetry) and Paper 3 (prose and unseen), so preparation must cover all three."
      },
      {
        "q": "Why must you read the prescribed texts themselves rather than only summaries?",
        "opts": [
          "Summaries are illegal",
          "Questions demand close detail and quotation the summary omits",
          "Texts are shorter",
          "WAEC forbids summaries"
        ],
        "correct": 1,
        "exp": "Marks come from specific incidents, characters and quotations that no summary carries."
      },
      {
        "q": "What does this course cover in addition to the set texts?",
        "opts": [
          "Only African drama",
          "Literary appreciation, poetry, drama, prose and examination technique",
          "Grammar only",
          "Oral English"
        ],
        "correct": 1,
        "exp": "The ten modules move from literary appreciation through the genres to essay and examination skills."
      },
      {
        "q": "Which habit best supports a Literature candidate over a full session?",
        "opts": [
          "Reading each text once the week before the exam",
          "Reading each text more than once and keeping a quotation notebook",
          "Memorising the whole text",
          "Watching film versions only"
        ],
        "correct": 1,
        "exp": "Repeated reading plus a personal quotation bank is what makes detailed essay answers possible."
      }
    ],
    "M1:Exam Structure & Marking Scheme": [
      {
        "q": "Paper 1 in WASSCE Literature consists of:",
        "opts": [
          "Essay questions",
          "Objective (multiple-choice) questions on general literary knowledge and unseen passages",
          "Oral questions",
          "A practical"
        ],
        "correct": 1,
        "exp": "Paper 1 is the objective paper testing literary terms and comprehension of unseen extracts."
      },
      {
        "q": "In the essay papers, marks are awarded mainly for:",
        "opts": [
          "Length of the answer",
          "Relevant argument supported by detail from the text",
          "Neat handwriting alone",
          "Number of quotations"
        ],
        "correct": 1,
        "exp": "Examiners reward a focused argument backed by accurate textual evidence."
      },
      {
        "q": "What happens if you answer on a text that is not on the current syllabus?",
        "opts": [
          "You gain bonus marks",
          "The answer earns no marks",
          "It is marked as an unseen passage",
          "Half marks are given"
        ],
        "correct": 1,
        "exp": "Only the prescribed texts for your year are marked, so always check the current WAEC list."
      },
      {
        "q": "How many questions must normally be attempted in each essay section?",
        "opts": [
          "All questions in the paper",
          "The number stated in the rubric, usually one per section",
          "Any two from the whole paper",
          "As many as time allows"
        ],
        "correct": 1,
        "exp": "The rubric states exactly how many to answer; extra answers are not marked and waste time."
      }
    ],
    "M1:What is Literature?": [
      {
        "q": "Literature is best defined as:",
        "opts": [
          "Any written document",
          "Imaginative writing that uses language artistically to explore human experience",
          "A record of historical facts",
          "A collection of grammar rules"
        ],
        "correct": 1,
        "exp": "Literature is imaginative and artistic; its purpose is to explore experience, not merely to record fact."
      },
      {
        "q": "Which is NOT a usual function of literature?",
        "opts": [
          "To entertain",
          "To instruct and preserve culture",
          "To criticise society",
          "To provide legally binding evidence"
        ],
        "correct": 3,
        "exp": "Literature entertains, teaches, preserves culture and criticises society; it is not a legal record."
      },
      {
        "q": "Which feature distinguishes literary language from ordinary language?",
        "opts": [
          "It is always longer",
          "It uses imagery, figurative expression and deliberate structure",
          "It avoids emotion",
          "It is always written in verse"
        ],
        "correct": 1,
        "exp": "Literary language is shaped for effect through imagery, figures of speech and form."
      },
      {
        "q": "A text that faithfully records events without imaginative shaping is best described as:",
        "opts": [
          "A novel",
          "A non-literary or factual text",
          "An epic",
          "A tragedy"
        ],
        "correct": 1,
        "exp": "Without imaginative shaping the writing is factual reporting rather than literature."
      }
    ],
    "M1:Genres of Literature": [
      {
        "q": "The three main genres of literature are:",
        "opts": [
          "Prose, drama and poetry",
          "Novel, epic and satire",
          "Fiction, biography and essay",
          "Comedy, tragedy and farce"
        ],
        "correct": 0,
        "exp": "Literature is classified into prose, drama and poetry; every other form sits within one of these."
      },
      {
        "q": "A work written to be performed on stage belongs to which genre?",
        "opts": [
          "Prose",
          "Poetry",
          "Drama",
          "Biography"
        ],
        "correct": 2,
        "exp": "Drama is written for performance, using dialogue and stage directions."
      },
      {
        "q": "Which of these is a sub-genre of prose?",
        "opts": [
          "Sonnet",
          "Novella",
          "Ode",
          "Soliloquy"
        ],
        "correct": 1,
        "exp": "The novella is a prose form; sonnet and ode are poetic, and soliloquy is dramatic."
      },
      {
        "q": "Which pairing of genre and defining feature is correct?",
        "opts": [
          "Poetry — dialogue and stage directions",
          "Drama — verse lines and stanzas",
          "Prose — continuous sentences and paragraphs",
          "Prose — rhyme scheme"
        ],
        "correct": 2,
        "exp": "Prose runs in ordinary sentences and paragraphs, unlike verse lines or stage dialogue."
      }
    ],
    "M1:Study Strategies": [
      {
        "q": "The most effective way to remember quotations is to:",
        "opts": [
          "Copy the whole text",
          "Select a few short, versatile quotations per character and theme and revise them regularly",
          "Read the text aloud once",
          "Rely on memory during the exam"
        ],
        "correct": 1,
        "exp": "A small bank of flexible quotations, revised often, is far more useful than bulk copying."
      },
      {
        "q": "Why is it useful to make a character chart for each prescribed text?",
        "opts": [
          "It replaces reading the text",
          "It shows relationships, roles and development at a glance for essay planning",
          "It is required by WAEC",
          "It shortens the text"
        ],
        "correct": 1,
        "exp": "A chart makes relationships and character development quick to recall when planning an answer."
      },
      {
        "q": "Practising with past questions mainly helps you to:",
        "opts": [
          "Predict the exact questions",
          "Learn the phrasing examiners use and how to shape an answer to it",
          "Avoid reading the texts",
          "Memorise model answers"
        ],
        "correct": 1,
        "exp": "Past questions train you to recognise what is being asked and to respond to that demand."
      },
      {
        "q": "Which revision method is strongest for Literature?",
        "opts": [
          "Re-reading notes passively",
          "Writing timed practice essays and comparing them with the marking criteria",
          "Listening to music while reading",
          "Highlighting every page"
        ],
        "correct": 1,
        "exp": "Timed writing plus checking against the criteria develops the exact skill the exam tests."
      }
    ],
    "M2:Theme": [
      {
        "q": "A theme in literature is:",
        "opts": [
          "The sequence of events",
          "The central idea or message explored in the work",
          "The place where the story happens",
          "The narrator's identity"
        ],
        "correct": 1,
        "exp": "Theme is the underlying idea a work explores, distinct from its plot or setting."
      },
      {
        "q": "Which of these is stated as a theme rather than a topic?",
        "opts": [
          "Corruption",
          "War",
          "Unchecked ambition destroys the ambitious",
          "Love"
        ],
        "correct": 2,
        "exp": "A theme is a full statement about life; a single word like 'love' is only a topic."
      },
      {
        "q": "How does a writer most often convey theme?",
        "opts": [
          "By stating it in the first line",
          "Through characters' choices, conflicts and their consequences",
          "Through the title only",
          "By listing morals at the end"
        ],
        "correct": 1,
        "exp": "Theme emerges from what characters do and what follows from it."
      },
      {
        "q": "A work may contain:",
        "opts": [
          "Only one theme",
          "A major theme and several minor themes",
          "No theme at all",
          "Themes only in poetry"
        ],
        "correct": 1,
        "exp": "Most works carry a dominant theme alongside subordinate ones."
      }
    ],
    "M2:Plot": [
      {
        "q": "Plot is best described as:",
        "opts": [
          "A list of characters",
          "The arranged sequence of events, linked by cause and effect",
          "The moral of the story",
          "The setting of the story"
        ],
        "correct": 1,
        "exp": "Plot is not merely what happens but how events are arranged and causally connected."
      },
      {
        "q": "The five conventional stages of plot are exposition, rising action, climax,",
        "opts": [
          "prologue and epilogue",
          "falling action and resolution",
          "conflict and theme",
          "setting and mood"
        ],
        "correct": 1,
        "exp": "After the climax come the falling action and the resolution or denouement."
      },
      {
        "q": "The climax of a plot is:",
        "opts": [
          "The opening situation",
          "The turning point of greatest tension",
          "The final paragraph",
          "The introduction of the setting"
        ],
        "correct": 1,
        "exp": "The climax is the point of highest tension where the conflict turns."
      },
      {
        "q": "A sub-plot in a novel or play usually:",
        "opts": [
          "Replaces the main plot",
          "Runs beside the main plot and comments on or complicates it",
          "Confuses the reader deliberately",
          "Appears only in poetry"
        ],
        "correct": 1,
        "exp": "A sub-plot parallels the main action, often deepening its themes."
      }
    ],
    "M2:Setting": [
      {
        "q": "Setting refers to:",
        "opts": [
          "The time and place in which the action occurs",
          "The narrator's viewpoint",
          "The central conflict",
          "The rhyme scheme"
        ],
        "correct": 0,
        "exp": "Setting is the time and place, together with the social conditions, of the action."
      },
      {
        "q": "Besides time and place, setting also includes:",
        "opts": [
          "The author's biography",
          "The social, cultural and historical conditions of the action",
          "The number of chapters",
          "The publisher"
        ],
        "correct": 1,
        "exp": "Social and historical circumstances form part of setting and shape what characters can do."
      },
      {
        "q": "How can setting function in a work?",
        "opts": [
          "Only as decoration",
          "It can create atmosphere, shape character and even act as an antagonist",
          "It never affects plot",
          "It replaces theme"
        ],
        "correct": 1,
        "exp": "Setting builds atmosphere and can constrain or oppose characters directly."
      },
      {
        "q": "A novel set in a village during the arrival of colonial administration uses setting mainly to:",
        "opts": [
          "Fill space",
          "Ground the conflict between tradition and change in a specific time and place",
          "Confuse the reader",
          "Provide rhyme"
        ],
        "correct": 1,
        "exp": "Such a setting supplies the very tension the work explores."
      }
    ],
    "M2:Characterization": [
      {
        "q": "Characterization is:",
        "opts": [
          "The list of characters at the front of a play",
          "The method by which a writer creates and reveals character",
          "The naming of characters",
          "The moral of a story"
        ],
        "correct": 1,
        "exp": "Characterization is the technique of revealing what a character is like."
      },
      {
        "q": "Direct characterization occurs when:",
        "opts": [
          "The reader infers traits from action",
          "The writer or narrator states a character's qualities plainly",
          "Another character speaks",
          "The character is silent"
        ],
        "correct": 1,
        "exp": "Direct characterization tells the reader outright; indirect characterization shows through behaviour."
      },
      {
        "q": "A round character is one who:",
        "opts": [
          "Appears briefly",
          "Is complex and develops through the work",
          "Never speaks",
          "Is always the hero"
        ],
        "correct": 1,
        "exp": "Round characters are many-sided and change; flat characters remain fixed."
      },
      {
        "q": "A foil in a literary work is a character who:",
        "opts": [
          "Fails in everything",
          "Contrasts with another and so highlights that character's qualities",
          "Narrates the story",
          "Provides comic relief only"
        ],
        "correct": 1,
        "exp": "A foil exists to throw another character's traits into relief by contrast."
      }
    ],
    "M2:Point of View": [
      {
        "q": "Point of view refers to:",
        "opts": [
          "The author's political opinion",
          "The perspective from which a story is told",
          "The moral of the story",
          "The setting"
        ],
        "correct": 1,
        "exp": "Point of view is the vantage point from which the narrative reaches the reader."
      },
      {
        "q": "A story told using 'I' throughout uses:",
        "opts": [
          "Third person limited",
          "First person",
          "Second person",
          "Omniscient narration"
        ],
        "correct": 1,
        "exp": "First-person narration is delivered by a character inside the story using 'I'."
      },
      {
        "q": "An omniscient narrator is one who:",
        "opts": [
          "Knows only one character's thoughts",
          "Knows the thoughts and actions of all characters",
          "Is a character in the story",
          "Speaks directly to the reader as 'you'"
        ],
        "correct": 1,
        "exp": "The omniscient narrator has unrestricted access to every character's mind."
      },
      {
        "q": "Why might a writer choose an unreliable first-person narrator?",
        "opts": [
          "To simplify the plot",
          "To make the reader question the account and read more actively",
          "Because it is easier to write",
          "To avoid describing setting"
        ],
        "correct": 1,
        "exp": "An unreliable narrator forces the reader to judge the truth for themselves."
      }
    ],
    "M2:Mood & Tone": [
      {
        "q": "Tone in literature is:",
        "opts": [
          "The feeling the reader experiences",
          "The writer's attitude towards the subject or audience",
          "The volume of the dialogue",
          "The setting of the work"
        ],
        "correct": 1,
        "exp": "Tone is the writer's attitude; mood is the atmosphere the reader feels."
      },
      {
        "q": "Mood is:",
        "opts": [
          "The atmosphere a work creates in the reader",
          "The writer's opinion",
          "The narrator's name",
          "The rhyme scheme"
        ],
        "correct": 0,
        "exp": "Mood is the emotional atmosphere produced by setting, imagery and diction."
      },
      {
        "q": "Which element most directly creates mood?",
        "opts": [
          "Page numbering",
          "Diction, imagery and description of setting",
          "Chapter length",
          "The publisher's name"
        ],
        "correct": 1,
        "exp": "Word choice, imagery and setting description together build atmosphere."
      },
      {
        "q": "A writer describing a funeral with light, mocking language creates a tone that is:",
        "opts": [
          "Solemn",
          "Ironic or satirical",
          "Neutral",
          "Romantic"
        ],
        "correct": 1,
        "exp": "A mismatch between subject and attitude signals irony or satire."
      }
    ],
    "M2:Symbolism": [
      {
        "q": "A symbol in literature is:",
        "opts": [
          "A punctuation mark",
          "An object, person or action that stands for a larger idea",
          "A type of rhyme",
          "A stage direction"
        ],
        "correct": 1,
        "exp": "A symbol carries meaning beyond its literal self."
      },
      {
        "q": "In many works, a road or journey commonly symbolises:",
        "opts": [
          "Poverty",
          "Life and the choices it presents",
          "Silence",
          "Weather"
        ],
        "correct": 1,
        "exp": "The journey is a conventional symbol for the course of a life and its decisions.'"
      },
      {
        "q": "How does symbolism differ from a simple description?",
        "opts": [
          "It is longer",
          "It invites the reader to read a further meaning into the object",
          "It uses no adjectives",
          "It appears only in poetry"
        ],
        "correct": 1,
        "exp": "A symbol asks the reader to see a wider significance in the thing described."
      },
      {
        "q": "A symbol whose meaning is created within a single work rather than by tradition is called:",
        "opts": [
          "A conventional symbol",
          "A private or contextual symbol",
          "An allegory",
          "A metaphor"
        ],
        "correct": 1,
        "exp": "Private symbols take their meaning from the work itself, not from shared tradition."
      }
    ],
    "M2:Imagery": [
      {
        "q": "Imagery is:",
        "opts": [
          "Pictures printed in the book",
          "Language that appeals to the senses",
          "A rhyme scheme",
          "A list of characters"
        ],
        "correct": 1,
        "exp": "Imagery is sensory language, appealing to sight, sound, touch, taste or smell."
      },
      {
        "q": "'The rusty gate shrieked as it swung' appeals mainly to:",
        "opts": [
          "Taste",
          "Hearing",
          "Smell",
          "Touch"
        ],
        "correct": 1,
        "exp": "'Shrieked' is auditory imagery."
      },
      {
        "q": "Imagery contributes to a work chiefly by:",
        "opts": [
          "Increasing its length",
          "Making the experience vivid and shaping mood",
          "Providing rhyme",
          "Naming characters"
        ],
        "correct": 1,
        "exp": "Sensory detail makes scenes concrete and helps build atmosphere."
      },
      {
        "q": "Tactile imagery appeals to the sense of:",
        "opts": [
          "Sight",
          "Touch",
          "Hearing",
          "Smell"
        ],
        "correct": 1,
        "exp": "Tactile imagery evokes physical sensation and texture."
      }
    ],
    "M2:Irony": [
      {
        "q": "Verbal irony occurs when a speaker:",
        "opts": [
          "Repeats a phrase",
          "Says the opposite of what is meant",
          "Speaks in verse",
          "Addresses the audience"
        ],
        "correct": 1,
        "exp": "In verbal irony the stated meaning contradicts the intended meaning."
      },
      {
        "q": "Dramatic irony occurs when:",
        "opts": [
          "The audience knows something a character does not",
          "Two characters argue",
          "A play ends unhappily",
          "A character speaks alone"
        ],
        "correct": 0,
        "exp": "Dramatic irony rests on the gap between the audience's knowledge and the character's."
      },
      {
        "q": "Situational irony is present when:",
        "opts": [
          "A character uses sarcasm",
          "The outcome is the opposite of what was expected",
          "The setting changes",
          "The narrator is unreliable"
        ],
        "correct": 1,
        "exp": "Situational irony reverses expectation, as when a fire station burns down."
      },
      {
        "q": "Irony is used by writers mainly to:",
        "opts": [
          "Confuse readers",
          "Create humour, criticism or tension by exposing a gap between appearance and reality",
          "Lengthen the plot",
          "Replace dialogue"
        ],
        "correct": 1,
        "exp": "The gap irony opens up is a powerful tool for humour and criticism."
      }
    ],
    "M2:Figures of Speech": [
      {
        "q": "'Her voice is music' is an example of:",
        "opts": [
          "Simile",
          "Metaphor",
          "Personification",
          "Hyperbole"
        ],
        "correct": 1,
        "exp": "A metaphor asserts identity directly, without 'like' or 'as'."
      },
      {
        "q": "'As brave as a lion' is:",
        "opts": [
          "A metaphor",
          "A simile",
          "An oxymoron",
          "A pun"
        ],
        "correct": 1,
        "exp": "A simile makes the comparison explicit with 'like' or 'as'."
      },
      {
        "q": "'The wind whispered through the grass' uses:",
        "opts": [
          "Personification",
          "Hyperbole",
          "Metonymy",
          "Euphemism"
        ],
        "correct": 0,
        "exp": "Giving human action to a non-human thing is personification."
      },
      {
        "q": "'I have told you a million times' is:",
        "opts": [
          "Litotes",
          "Hyperbole",
          "Paradox",
          "Alliteration"
        ],
        "correct": 1,
        "exp": "Deliberate exaggeration for effect is hyperbole."
      }
    ],
    "M3:Introduction to Poetry": [
      {
        "q": "Poetry differs from prose chiefly in its:",
        "opts": [
          "Use of characters",
          "Compressed language, line structure and heightened use of sound",
          "Length",
          "Use of dialogue"
        ],
        "correct": 1,
        "exp": "Poetry compresses meaning and organises it in lines, exploiting rhythm and sound."
      },
      {
        "q": "A stanza in a poem corresponds most closely to which prose unit?",
        "opts": [
          "Sentence",
          "Paragraph",
          "Chapter",
          "Page"
        ],
        "correct": 1,
        "exp": "A stanza groups lines as a paragraph groups sentences."
      },
      {
        "q": "The persona in a poem is:",
        "opts": [
          "Always the poet",
          "The speaking voice created within the poem",
          "The reader",
          "The publisher"
        ],
        "correct": 1,
        "exp": "The persona is the voice of the poem and must not be assumed to be the poet."
      },
      {
        "q": "When reading a poem for the first time you should:",
        "opts": [
          "Stop at the end of each line",
          "Read for sense, following punctuation rather than line ends",
          "Read only the last stanza",
          "Look up every word first"
        ],
        "correct": 1,
        "exp": "Meaning runs through punctuation; stopping at every line break distorts sense."
      }
    ],
    "M3:Types of Poetry": [
      {
        "q": "A sonnet has how many lines?",
        "opts": [
          "Ten",
          "Twelve",
          "Fourteen",
          "Sixteen"
        ],
        "correct": 2,
        "exp": "A sonnet is a fourteen-line poem, usually in iambic pentameter."
      },
      {
        "q": "An elegy is a poem written to:",
        "opts": [
          "Celebrate a wedding",
          "Mourn the dead or express sorrow",
          "Praise a nation",
          "Tell a comic story"
        ],
        "correct": 1,
        "exp": "The elegy is a lament, most often for someone who has died."
      },
      {
        "q": "An epic is best described as:",
        "opts": [
          "A short personal poem",
          "A long narrative poem about heroic deeds",
          "A fourteen-line poem",
          "A poem without rhyme"
        ],
        "correct": 1,
        "exp": "Epics are long narratives centred on heroic action and often supernatural elements."
      },
      {
        "q": "Which is a lyric poem?",
        "opts": [
          "An ode",
          "An epic",
          "A ballad narrative",
          "A verse drama"
        ],
        "correct": 0,
        "exp": "The ode is lyric: short and expressive of personal feeling rather than narrative."
      }
    ],
    "M3:Poetic Devices": [
      {
        "q": "Enjambment occurs when:",
        "opts": [
          "A line ends with a full stop",
          "The sense runs on from one line into the next without pause",
          "Two words rhyme",
          "A stanza is repeated"
        ],
        "correct": 1,
        "exp": "Enjambment carries the sense across the line break without terminal punctuation."
      },
      {
        "q": "A refrain in a poem is:",
        "opts": [
          "A line or group of lines repeated at intervals",
          "The opening line",
          "The rhyme scheme",
          "The poem's title"
        ],
        "correct": 0,
        "exp": "The refrain recurs, often at the end of each stanza, reinforcing mood or theme."
      },
      {
        "q": "Apostrophe as a poetic device means:",
        "opts": [
          "A punctuation mark",
          "Addressing an absent person or abstract idea directly",
          "Repeating a consonant",
          "Ending a line abruptly"
        ],
        "correct": 1,
        "exp": "In poetry, apostrophe is direct address to someone absent or to an abstraction."
      },
      {
        "q": "A caesura is:",
        "opts": [
          "A pause within a line of verse",
          "The final syllable",
          "A type of stanza",
          "A rhyming couplet"
        ],
        "correct": 0,
        "exp": "The caesura is a deliberate pause inside the line, often marked by punctuation."
      }
    ],
    "M3:Rhythm & Rhyme": [
      {
        "q": "The rhyme scheme abab cdcd is typical of:",
        "opts": [
          "A rhyming couplet",
          "Alternate rhyme in quatrains",
          "Free verse",
          "Blank verse"
        ],
        "correct": 1,
        "exp": "Alternate rhyme in four-line stanzas produces the abab cdcd pattern."
      },
      {
        "q": "Blank verse is:",
        "opts": [
          "Verse with no words",
          "Unrhymed iambic pentameter",
          "Verse with no rhythm",
          "Prose printed in lines"
        ],
        "correct": 1,
        "exp": "Blank verse keeps the metre but drops rhyme; Shakespeare uses it extensively."
      },
      {
        "q": "Metre in poetry refers to:",
        "opts": [
          "The length of the poem",
          "The regular pattern of stressed and unstressed syllables",
          "The number of stanzas",
          "The rhyme scheme"
        ],
        "correct": 1,
        "exp": "Metre is the measured pattern of stress in a line."
      },
      {
        "q": "Free verse is poetry that:",
        "opts": [
          "Has no regular metre or rhyme scheme",
          "Cannot use imagery",
          "Must be short",
          "Always rhymes internally"
        ],
        "correct": 0,
        "exp": "Free verse abandons fixed metre and rhyme while remaining shaped as poetry."
      }
    ],
    "M3:Sound Devices": [
      {
        "q": "Alliteration is the repetition of:",
        "opts": [
          "Whole words",
          "Initial consonant sounds in nearby words",
          "Vowel sounds only",
          "Entire lines"
        ],
        "correct": 1,
        "exp": "Alliteration repeats the opening consonant sound, as in 'wild and windy'."
      },
      {
        "q": "Assonance is the repetition of:",
        "opts": [
          "Consonant clusters",
          "Vowel sounds within nearby words",
          "Rhyming line endings",
          "Whole stanzas"
        ],
        "correct": 1,
        "exp": "Assonance repeats vowel sounds inside words rather than at line endings."
      },
      {
        "q": "Onomatopoeia refers to words that:",
        "opts": [
          "Rhyme internally",
          "Imitate the sound they describe",
          "Are archaic",
          "Have double meanings"
        ],
        "correct": 1,
        "exp": "Words such as 'buzz' and 'clang' imitate the sounds they name."
      },
      {
        "q": "Consonance differs from alliteration because it:",
        "opts": [
          "Repeats consonant sounds anywhere in the word, not only at the beginning",
          "Uses vowels",
          "Applies only to prose",
          "Requires rhyme"
        ],
        "correct": 0,
        "exp": "Consonance repeats consonant sounds in any position within the words."
      }
    ],
    "M3:Theme Analysis": [
      {
        "q": "To identify the theme of a poem you should first ask:",
        "opts": [
          "Who published it",
          "What idea about life the poem is exploring through its images and situation",
          "How many lines it has",
          "Whether it rhymes"
        ],
        "correct": 1,
        "exp": "Theme is found by asking what the poem says about experience, not by counting features."
      },
      {
        "q": "A theme statement for a poem should be written as:",
        "opts": [
          "A single word",
          "A complete statement about life or human experience",
          "A question",
          "A list of devices"
        ],
        "correct": 1,
        "exp": "A theme is a claim about experience, so it must be a full statement."
      },
      {
        "q": "Evidence for a theme in a poem is best drawn from:",
        "opts": [
          "The poet's biography",
          "Recurring images, key lines and the poem's turning point",
          "The publication date",
          "The number of stanzas"
        ],
        "correct": 1,
        "exp": "Patterns of imagery and the poem's turn are where theme becomes visible."
      },
      {
        "q": "When a poem's title and its closing lines point in different directions, the reader should:",
        "opts": [
          "Ignore the title",
          "Treat the tension as part of the poem's meaning",
          "Assume a misprint",
          "Read only the first stanza"
        ],
        "correct": 1,
        "exp": "Such tension is usually deliberate and often carries the poem's central idea."
      }
    ],
    "M3:Poem Interpretation": [
      {
        "q": "The first step in interpreting an unseen poem is to:",
        "opts": [
          "Count the syllables",
          "Read it through for overall sense and identify the situation and speaker",
          "Name every device",
          "Guess the poet"
        ],
        "correct": 1,
        "exp": "Establish who is speaking and about what before analysing technique."
      },
      {
        "q": "Naming devices without explaining their effect earns:",
        "opts": [
          "Full marks",
          "Few marks, because analysis requires showing what the device achieves",
          "Bonus marks",
          "No penalty"
        ],
        "correct": 1,
        "exp": "Examiners reward the effect of a device, not its mere identification."
      },
      {
        "q": "A 'turn' or volta in a poem is:",
        "opts": [
          "The final rhyme",
          "A shift in argument, mood or direction",
          "The title",
          "The metre"
        ],
        "correct": 1,
        "exp": "The volta marks where the poem changes direction, often signalling its meaning."
      },
      {
        "q": "When a word in a poem carries more than one possible meaning, you should:",
        "opts": [
          "Choose one and ignore the rest",
          "Discuss the ambiguity if both meanings serve the poem",
          "Report an error",
          "Skip the line"
        ],
        "correct": 1,
        "exp": "Deliberate ambiguity is a resource of poetry and worth discussing."
      }
    ],
    "M3:WAEC Poetry Practice": [
      {
        "q": "In WAEC poetry questions, quotations should be:",
        "opts": [
          "Long and numerous",
          "Short, accurate and immediately explained",
          "Written from memory without checking",
          "Avoided entirely"
        ],
        "correct": 1,
        "exp": "Brief accurate quotation followed by comment is what earns marks."
      },
      {
        "q": "A question asking you to 'comment on the poet's use of imagery' requires you to:",
        "opts": [
          "List every image",
          "Select key images and explain the effect each creates",
          "Summarise the poem",
          "Describe the poet's life"
        ],
        "correct": 1,
        "exp": "Selection plus explanation of effect is the required skill."
      },
      {
        "q": "If a poetry question names a specific stanza, you should:",
        "opts": [
          "Write about the whole poem",
          "Focus on that stanza, referring to the rest only where it clarifies",
          "Ignore the instruction",
          "Answer on a different poem"
        ],
        "correct": 1,
        "exp": "Answering outside the stated scope loses marks for relevance."
      },
      {
        "q": "Retelling the content of a poem in your own words without analysis is called:",
        "opts": [
          "Interpretation",
          "Paraphrase, which earns limited marks on its own",
          "Criticism",
          "Evaluation"
        ],
        "correct": 1,
        "exp": "Paraphrase shows comprehension but not the analysis the question demands."
      }
    ],
    "M4:Introduction to Drama": [
      {
        "q": "Drama is distinguished from prose and poetry because it is:",
        "opts": [
          "Always tragic",
          "Written to be performed before an audience",
          "Always in verse",
          "Never divided into parts"
        ],
        "correct": 1,
        "exp": "Drama is composed for performance, which shapes every other feature of the form."
      },
      {
        "q": "The written text of a play is called:",
        "opts": [
          "A stanza",
          "A script",
          "A canto",
          "A chapter"
        ],
        "correct": 1,
        "exp": "The script contains dialogue and stage directions for performance."
      },
      {
        "q": "A play is normally divided into:",
        "opts": [
          "Chapters and paragraphs",
          "Acts and scenes",
          "Stanzas and lines",
          "Volumes"
        ],
        "correct": 1,
        "exp": "Acts are the major divisions; scenes subdivide them."
      },
      {
        "q": "Stage directions in a play serve to:",
        "opts": [
          "Provide rhyme",
          "Indicate movement, setting, gesture and delivery",
          "Summarise the plot",
          "Name the audience"
        ],
        "correct": 1,
        "exp": "Stage directions tell actors and readers how the action is to be realised."
      }
    ],
    "M4:Elements of Drama": [
      {
        "q": "Which is NOT normally listed among the elements of drama?",
        "opts": [
          "Plot",
          "Character",
          "Rhyme scheme",
          "Dialogue"
        ],
        "correct": 2,
        "exp": "Rhyme scheme belongs to poetry; drama's elements are plot, character, dialogue, setting, theme and spectacle."
      },
      {
        "q": "Dialogue in drama carries the burden of:",
        "opts": [
          "Describing the printing",
          "Revealing character, advancing plot and conveying theme",
          "Providing footnotes",
          "Naming the acts"
        ],
        "correct": 1,
        "exp": "With no narrator, dialogue must do the work of revelation and advancement."
      },
      {
        "q": "Spectacle in drama refers to:",
        "opts": [
          "The audience",
          "The visual elements of performance such as costume, set and movement",
          "The moral",
          "The playwright's preface"
        ],
        "correct": 1,
        "exp": "Spectacle covers everything the audience sees on stage."
      },
      {
        "q": "Conflict is essential to drama because:",
        "opts": [
          "It fills time",
          "Opposition between forces generates the action the audience watches",
          "It provides rhyme",
          "It shortens the play"
        ],
        "correct": 1,
        "exp": "Without opposing forces there is no dramatic action."
      }
    ],
    "M4:Tragedy": [
      {
        "q": "A tragedy typically ends with:",
        "opts": [
          "A marriage",
          "The downfall or death of the protagonist",
          "A festival",
          "A restored fortune"
        ],
        "correct": 1,
        "exp": "Tragedy ends in the protagonist's ruin, often death."
      },
      {
        "q": "The tragic flaw of a hero is known as:",
        "opts": [
          "Catharsis",
          "Hamartia",
          "Hubris only",
          "Anagnorisis"
        ],
        "correct": 1,
        "exp": "Hamartia is the error or flaw that brings about the hero's downfall."
      },
      {
        "q": "Catharsis refers to:",
        "opts": [
          "The hero's death",
          "The purging of pity and fear the audience experiences",
          "The play's setting",
          "The chorus's song"
        ],
        "correct": 1,
        "exp": "Aristotle described tragedy as producing catharsis in the audience."
      },
      {
        "q": "Hubris in a tragic hero means:",
        "opts": [
          "Cowardice",
          "Excessive pride that provokes disaster",
          "Poverty",
          "Loyalty"
        ],
        "correct": 1,
        "exp": "Hubris is overweening pride, a common form of the tragic flaw."
      }
    ],
    "M4:Comedy": [
      {
        "q": "Comedy characteristically ends with:",
        "opts": [
          "Death of the hero",
          "A happy resolution, often reconciliation or marriage",
          "Exile",
          "A funeral"
        ],
        "correct": 1,
        "exp": "Comic structure moves from disorder to restored harmony."
      },
      {
        "q": "Satire is a form of comedy that:",
        "opts": [
          "Avoids criticism",
          "Ridicules folly or vice in order to correct it",
          "Uses only puns",
          "Ends tragically"
        ],
        "correct": 1,
        "exp": "Satire uses laughter as a corrective instrument."
      },
      {
        "q": "Farce depends chiefly on:",
        "opts": [
          "Subtle character study",
          "Improbable situations, mistaken identity and physical humour",
          "Tragic irony",
          "Blank verse"
        ],
        "correct": 1,
        "exp": "Farce works through exaggerated situation rather than depth of character."
      },
      {
        "q": "Comic relief in a serious play functions to:",
        "opts": [
          "Confuse the plot",
          "Ease tension briefly and by contrast intensify what follows",
          "Replace the climax",
          "Introduce rhyme"
        ],
        "correct": 1,
        "exp": "The brief release makes the returning tension sharper."
      }
    ],
    "M4:Dramatic Techniques": [
      {
        "q": "A soliloquy is:",
        "opts": [
          "A conversation between two characters",
          "A speech in which a character alone on stage voices inner thoughts",
          "A stage direction",
          "A song"
        ],
        "correct": 1,
        "exp": "The soliloquy gives the audience direct access to a character's mind."
      },
      {
        "q": "An aside is:",
        "opts": [
          "A long speech to the audience",
          "A brief remark heard by the audience but not by other characters on stage",
          "The end of an act",
          "A stage property"
        ],
        "correct": 1,
        "exp": "The aside is a short comment the other characters are conventionally unable to hear."
      },
      {
        "q": "Foreshadowing in drama:",
        "opts": [
          "Reveals the ending immediately",
          "Plants hints of what is to come, building expectation",
          "Repeats earlier scenes",
          "Names the characters"
        ],
        "correct": 1,
        "exp": "Foreshadowing prepares the audience for later developments."
      },
      {
        "q": "Flashback is used in drama to:",
        "opts": [
          "End a scene",
          "Present an earlier event out of chronological order to explain the present",
          "Replace dialogue",
          "Change the setting permanently"
        ],
        "correct": 1,
        "exp": "Flashback supplies necessary earlier information at the moment it matters."
      }
    ],
    "M4:Character Analysis": [
      {
        "q": "In analysing a dramatic character, the strongest evidence comes from:",
        "opts": [
          "The character's own words, actions and what other characters say",
          "The list of characters",
          "The play's title",
          "The number of lines"
        ],
        "correct": 0,
        "exp": "Speech, action and the testimony of others are the three sources of dramatic characterisation."
      },
      {
        "q": "The antagonist in a play is:",
        "opts": [
          "Always evil",
          "The character or force opposing the protagonist",
          "The narrator",
          "The comic character"
        ],
        "correct": 1,
        "exp": "An antagonist opposes; moral wickedness is not required."
      },
      {
        "q": "A character who remains unchanged throughout a play is described as:",
        "opts": [
          "Dynamic",
          "Static",
          "Round",
          "Tragic"
        ],
        "correct": 1,
        "exp": "Static characters do not develop; dynamic characters change."
      },
      {
        "q": "When a character's words and actions contradict each other, the dramatist is usually:",
        "opts": [
          "Making an error",
          "Revealing hypocrisy or inner conflict",
          "Ending the play",
          "Providing rhyme"
        ],
        "correct": 1,
        "exp": "Such contradictions are a deliberate means of exposing character."
      }
    ],
    "M4:Theme Analysis": [
      {
        "q": "In a play, theme is most reliably traced through:",
        "opts": [
          "The costume list",
          "Recurring conflicts and the consequences of characters' choices",
          "The number of acts",
          "The title alone"
        ],
        "correct": 1,
        "exp": "What conflicts recur, and what they cost, reveals what the play is about."
      },
      {
        "q": "A theme in drama is best supported in an essay by:",
        "opts": [
          "Retelling the plot",
          "Short quotations from key speeches with explanation",
          "Describing the stage",
          "Listing every character"
        ],
        "correct": 1,
        "exp": "Quotation plus explanation demonstrates the theme rather than asserting it."
      },
      {
        "q": "When two characters embody opposing values, the dramatist is usually:",
        "opts": [
          "Padding the cast",
          "Dramatising a thematic conflict",
          "Avoiding a theme",
          "Providing comic relief"
        ],
        "correct": 1,
        "exp": "Opposed characters are a standard means of staging an idea."
      },
      {
        "q": "A play may explore several themes, but the dominant theme is the one that:",
        "opts": [
          "Appears in the first scene",
          "Shapes the main conflict and its resolution",
          "Has the longest speech",
          "The title names"
        ],
        "correct": 1,
        "exp": "The dominant theme is the one the central action turns on."
      }
    ],
    "M4:WAEC Drama Practice": [
      {
        "q": "A question asking you to 'discuss the role of' a character requires you to:",
        "opts": [
          "Narrate everything that character does",
          "Explain that character's function in plot and theme with evidence",
          "Describe the actor",
          "List their speeches"
        ],
        "correct": 1,
        "exp": "'Role' means function within the work, not a summary of events."
      },
      {
        "q": "In a drama essay, referring to acts and scenes:",
        "opts": [
          "Is discouraged",
          "Shows accurate knowledge and locates your evidence",
          "Wastes marks",
          "Is only for poetry"
        ],
        "correct": 1,
        "exp": "Precise reference demonstrates real familiarity with the text."
      },
      {
        "q": "Answering a drama question by retelling the story earns limited marks because:",
        "opts": [
          "Narration is banned",
          "The question demands analysis of how and why, not what",
          "It is too short",
          "Quotations are missing"
        ],
        "correct": 1,
        "exp": "Examiners reward analysis; narration alone shows only that the text was read."
      },
      {
        "q": "Before writing a drama essay you should spend a few minutes:",
        "opts": [
          "Copying the question",
          "Planning the main points and the evidence for each",
          "Recalling the author's biography",
          "Counting the marks"
        ],
        "correct": 1,
        "exp": "A short plan keeps the essay relevant and ordered."
      }
    ],
    "M5:Introduction to Prose": [
      {
        "q": "Prose is written in:",
        "opts": [
          "Metrical lines",
          "Ordinary sentences and paragraphs",
          "Stanzas",
          "Dialogue only"
        ],
        "correct": 1,
        "exp": "Prose follows the ordinary flow of speech in sentences and paragraphs."
      },
      {
        "q": "Prose fiction is distinguished from prose non-fiction because it is:",
        "opts": [
          "Longer",
          "Imaginative and invented rather than factual",
          "Always in first person",
          "Divided into acts"
        ],
        "correct": 1,
        "exp": "Fiction is invented; non-fiction reports actual events."
      },
      {
        "q": "The narrator of a prose work is:",
        "opts": [
          "Always the author",
          "The voice that tells the story",
          "The main character always",
          "The publisher"
        ],
        "correct": 1,
        "exp": "The narrator is a created voice and must not be confused with the author."
      },
      {
        "q": "A chapter in a novel functions as:",
        "opts": [
          "A stanza",
          "A structural division that shapes pace and emphasis",
          "A stage direction",
          "A rhyme unit"
        ],
        "correct": 1,
        "exp": "Chapter breaks control pacing and where the reader pauses."
      }
    ],
    "M5:Types of Prose": [
      {
        "q": "A novella is:",
        "opts": [
          "A very short poem",
          "A prose narrative longer than a short story but shorter than a novel",
          "A play in one act",
          "A biography"
        ],
        "correct": 1,
        "exp": "The novella sits between the short story and the novel in length and scope."
      },
      {
        "q": "An autobiography is:",
        "opts": [
          "A life written by another person",
          "An account of the writer's own life",
          "A fictional diary",
          "A collection of essays"
        ],
        "correct": 1,
        "exp": "Autobiography is self-written; biography is written by another."
      },
      {
        "q": "Which is a form of prose non-fiction?",
        "opts": [
          "The essay",
          "The sonnet",
          "The tragedy",
          "The ballad"
        ],
        "correct": 0,
        "exp": "The essay is prose non-fiction; the others are poetic or dramatic forms."
      },
      {
        "q": "A short story usually differs from a novel by concentrating on:",
        "opts": [
          "Many subplots",
          "A single incident, effect or moment of change",
          "A large cast",
          "Several generations"
        ],
        "correct": 1,
        "exp": "Compression to a single effect is the defining discipline of the short story."
      }
    ],
    "M5:Plot Development": [
      {
        "q": "Exposition in a prose narrative provides:",
        "opts": [
          "The climax",
          "Background on characters, setting and situation",
          "The final resolution",
          "The moral"
        ],
        "correct": 1,
        "exp": "Exposition establishes what the reader needs before the conflict develops."
      },
      {
        "q": "Rising action is the part of the plot in which:",
        "opts": [
          "Conflict intensifies through complications",
          "The story ends",
          "Characters are named",
          "The setting is described"
        ],
        "correct": 0,
        "exp": "Complications accumulate and tension builds towards the climax."
      },
      {
        "q": "The denouement of a narrative is:",
        "opts": [
          "Its opening",
          "The unravelling in which loose ends are resolved",
          "The central conflict",
          "The narrator's name"
        ],
        "correct": 1,
        "exp": "Denouement is the final untying after the climax."
      },
      {
        "q": "A flashback in prose fiction:",
        "opts": [
          "Ends the novel",
          "Interrupts chronology to present an earlier event",
          "Introduces rhyme",
          "Changes the narrator"
        ],
        "correct": 1,
        "exp": "Flashback supplies earlier material out of sequence for effect."
      }
    ],
    "M5:Character Analysis": [
      {
        "q": "The protagonist of a novel is:",
        "opts": [
          "Always morally good",
          "The central character whose fortunes the narrative follows",
          "The narrator",
          "The oldest character"
        ],
        "correct": 1,
        "exp": "The protagonist is central to the action, whatever their moral standing."
      },
      {
        "q": "A character's development is best shown by:",
        "opts": [
          "The number of pages they appear on",
          "Change in their attitudes, decisions or understanding across the work",
          "Their name",
          "Their occupation"
        ],
        "correct": 1,
        "exp": "Development means demonstrable change over the course of the narrative."
      },
      {
        "q": "Indirect characterization in prose works through:",
        "opts": [
          "The narrator stating traits",
          "Speech, thought, action and the reactions of others",
          "The chapter titles",
          "The book's cover"
        ],
        "correct": 1,
        "exp": "Indirect characterization shows rather than tells."
      },
      {
        "q": "A stock character is one who:",
        "opts": [
          "Is highly individual",
          "Conforms to a familiar recognisable type",
          "Never speaks",
          "Narrates the story"
        ],
        "correct": 1,
        "exp": "Stock characters are conventional types the reader recognises immediately."
      }
    ],
    "M5:Theme Analysis": [
      {
        "q": "In a novel, a theme is usually developed through:",
        "opts": [
          "A single sentence",
          "Repeated situations, character arcs and the resolution",
          "The dedication",
          "The number of chapters"
        ],
        "correct": 1,
        "exp": "Theme accumulates across the work rather than being announced."
      },
      {
        "q": "To argue a theme in a prose essay you should:",
        "opts": [
          "Summarise every chapter",
          "State the theme, then support it with specific incidents and quotations",
          "Describe the author",
          "List the characters"
        ],
        "correct": 1,
        "exp": "A stated claim supported by textual evidence is the required structure."
      },
      {
        "q": "When a novel's ending overturns what the earlier chapters implied, this usually:",
        "opts": [
          "Is a printing error",
          "Is central to the theme and should be discussed",
          "Should be ignored",
          "Means the theme is absent"
        ],
        "correct": 1,
        "exp": "A reversal at the close is normally the work's strongest thematic statement."
      },
      {
        "q": "Minor characters in a novel often function to:",
        "opts": [
          "Fill pages",
          "Illustrate aspects of the theme the protagonist cannot",
          "Confuse the reader",
          "Replace the narrator"
        ],
        "correct": 1,
        "exp": "Secondary figures widen the thematic range of the work."
      }
    ],
    "M5:Setting": [
      {
        "q": "In prose fiction, setting can act as:",
        "opts": [
          "Only background",
          "Background, atmosphere, symbol and even a source of conflict",
          "A rhyme scheme",
          "A stage direction"
        ],
        "correct": 1,
        "exp": "Setting does far more than locate the action; it can generate the conflict."
      },
      {
        "q": "A shift of setting in a novel usually signals:",
        "opts": [
          "A printing error",
          "A change in the character's circumstances or in the direction of the plot",
          "The end of the book",
          "A change of narrator only"
        ],
        "correct": 1,
        "exp": "Movement in place commonly marks movement in the narrative."
      },
      {
        "q": "The social setting of a novel includes:",
        "opts": [
          "Only the weather",
          "Class, custom, belief and the institutions that shape characters' choices",
          "The publisher",
          "The chapter count"
        ],
        "correct": 1,
        "exp": "Social conditions form the pressures characters must negotiate."
      },
      {
        "q": "Describing a decaying house to reflect a family's decline is an example of setting used as:",
        "opts": [
          "Symbol",
          "Dialogue",
          "Metre",
          "Exposition only"
        ],
        "correct": 0,
        "exp": "When place stands for a wider condition, setting is functioning symbolically."
      }
    ],
    "M5:Narrative Techniques": [
      {
        "q": "Stream of consciousness is a technique that presents:",
        "opts": [
          "Dialogue only",
          "The continuous flow of a character's thoughts and impressions",
          "Stage directions",
          "Rhymed verse"
        ],
        "correct": 1,
        "exp": "The technique renders thought as it occurs, unsorted by conventional order."
      },
      {
        "q": "A frame narrative is:",
        "opts": [
          "A story told inside another story",
          "A poem within a play",
          "A list of characters",
          "A stage set"
        ],
        "correct": 0,
        "exp": "The outer story frames an inner one, as in a tale told by a character."
      },
      {
        "q": "Foreshadowing in prose:",
        "opts": [
          "Reveals the ending outright",
          "Hints at later developments and builds expectation",
          "Repeats a chapter",
          "Changes the narrator"
        ],
        "correct": 1,
        "exp": "Hints prepare the reader without disclosing the outcome."
      },
      {
        "q": "Shifting between narrators in a novel allows the writer to:",
        "opts": [
          "Save space",
          "Present the same events from different, sometimes conflicting, viewpoints",
          "Avoid describing setting",
          "Remove the theme"
        ],
        "correct": 1,
        "exp": "Multiple narrators expose the partiality of any single account."
      }
    ],
    "M5:WAEC Prose Practice": [
      {
        "q": "A prose question asking you to 'examine the relationship between' two characters requires:",
        "opts": [
          "Two separate character sketches",
          "Analysis of how the two interact and what that reveals",
          "A plot summary",
          "A list of quotations"
        ],
        "correct": 1,
        "exp": "The relationship itself, and its significance, is the subject of the answer."
      },
      {
        "q": "Accurate use of character names and incidents in a prose essay:",
        "opts": [
          "Is optional",
          "Is essential evidence of genuine knowledge of the text",
          "Wastes time",
          "Only matters in poetry"
        ],
        "correct": 1,
        "exp": "Errors of fact undermine an otherwise sound argument."
      },
      {
        "q": "If a prose question limits you to a particular part of the novel, you should:",
        "opts": [
          "Write on the whole novel",
          "Confine your evidence to that part, referring elsewhere only briefly",
          "Ignore the limit",
          "Answer a different question"
        ],
        "correct": 1,
        "exp": "Staying within the stated scope is part of answering the question."
      },
      {
        "q": "The best way to open a prose essay is with:",
        "opts": [
          "A definition of the novel",
          "A direct response to the question that states your line of argument",
          "The author's biography",
          "A long quotation"
        ],
        "correct": 1,
        "exp": "An opening that answers the question sets a relevant direction at once."
      }
    ],
    "M6:Introduction to African Literature": [
      {
        "q": "African literature written in English became prominent in the twentieth century largely as:",
        "opts": [
          "A rejection of all storytelling",
          "A response to colonial rule and a means of asserting African experience",
          "A branch of British poetry",
          "A purely oral tradition"
        ],
        "correct": 1,
        "exp": "Much modern African writing responds to colonialism and reclaims African perspectives."
      },
      {
        "q": "African oral literature includes:",
        "opts": [
          "Only written novels",
          "Folktales, proverbs, riddles, myths, praise songs and epics",
          "Only poetry",
          "Only drama"
        ],
        "correct": 1,
        "exp": "Oral literature covers a wide range of performed and spoken forms."
      },
      {
        "q": "A griot in West African tradition is:",
        "opts": [
          "A colonial officer",
          "A custodian of history who preserves it through storytelling, praise poetry and song",
          "A type of drum",
          "A printed anthology"
        ],
        "correct": 1,
        "exp": "Griots are professional keepers and performers of communal memory."
      },
      {
        "q": "A recurring purpose of African oral narrative is to:",
        "opts": [
          "Entertain only",
          "Teach social values and preserve communal memory as well as entertain",
          "Record law",
          "Replace religion"
        ],
        "correct": 1,
        "exp": "Instruction and cultural preservation sit alongside entertainment."
      }
    ],
    "M6:African Writers": [
      {
        "q": "Chinua Achebe is best known as the author of:",
        "opts": [
          "Things Fall Apart",
          "The Lion and the Jewel",
          "Weep Not, Child",
          "Half of a Yellow Sun"
        ],
        "correct": 0,
        "exp": "Achebe's Things Fall Apart (1958) is the foundational modern African novel in English."
      },
      {
        "q": "Wole Soyinka received the Nobel Prize in Literature in:",
        "opts": [
          "1958",
          "1975",
          "1986",
          "1998"
        ],
        "correct": 2,
        "exp": "Soyinka became the first African Nobel laureate in Literature in 1986."
      },
      {
        "q": "Ngugi wa Thiong'o is a novelist and dramatist from:",
        "opts": [
          "Ghana",
          "Kenya",
          "Senegal",
          "South Africa"
        ],
        "correct": 1,
        "exp": "Ngugi is Kenya's leading novelist, known for Weep Not, Child among other works."
      },
      {
        "q": "Chimamanda Ngozi Adichie's writing is chiefly concerned with:",
        "opts": [
          "Medieval romance",
          "Identity, gender and the legacy of conflict in contemporary Nigeria",
          "Marine biology",
          "Classical Greek myth"
        ],
        "correct": 1,
        "exp": "Adichie's fiction examines identity, feminism and post-independence Nigerian history."
      }
    ],
    "M6:African Themes": [
      {
        "q": "Which is a recurring theme in modern African literature?",
        "opts": [
          "The clash between tradition and modernity",
          "Arctic exploration",
          "Medieval chivalry",
          "Industrial England"
        ],
        "correct": 0,
        "exp": "The pressure of change on inherited ways of life is a central African theme."
      },
      {
        "q": "The theme of alienation in African writing often concerns:",
        "opts": [
          "Space travel",
          "Characters estranged from their own community by education or migration",
          "Weather patterns",
          "Legal disputes"
        ],
        "correct": 1,
        "exp": "Western education and migration frequently separate characters from their origins."
      },
      {
        "q": "Post-independence disillusionment as a theme refers to:",
        "opts": [
          "Joy at independence",
          "Disappointment as new leaders reproduce the injustices of colonial rule",
          "Colonial conquest",
          "Pre-colonial harmony"
        ],
        "correct": 1,
        "exp": "Many writers turned to the failures of independent governments."
      },
      {
        "q": "The theme of communal identity in African literature emphasises:",
        "opts": [
          "The individual above all",
          "The person understood in relation to family, clan and community",
          "Isolation as an ideal",
          "Rejection of kinship"
        ],
        "correct": 1,
        "exp": "African narrative frequently locates identity within the community."
      }
    ],
    "M6:Culture & Tradition": [
      {
        "q": "Proverbs in African literature are used chiefly to:",
        "opts": [
          "Fill space",
          "Convey communal wisdom compactly and mark a speaker's standing",
          "Provide rhyme",
          "Confuse outsiders"
        ],
        "correct": 1,
        "exp": "Achebe called proverbs the palm-oil with which words are eaten."
      },
      {
        "q": "When a novelist includes indigenous words untranslated, the effect is to:",
        "opts": [
          "Exclude the reader deliberately",
          "Assert the authority of the culture depicted and root the work in it",
          "Reduce accuracy",
          "Shorten the text"
        ],
        "correct": 1,
        "exp": "Retaining the language asserts cultural presence on its own terms."
      },
      {
        "q": "Rituals and festivals in African novels often function to:",
        "opts": [
          "Delay the plot",
          "Reveal communal values and the order the plot will disturb",
          "Provide comic relief only",
          "Replace dialogue"
        ],
        "correct": 1,
        "exp": "Ritual displays the order whose disruption drives the narrative."
      },
      {
        "q": "The conflict between individual ambition and communal obligation is common in African literature because:",
        "opts": [
          "Writers dislike ambition",
          "It dramatises the pressure that social change places on inherited duty",
          "It is easy to write",
          "It avoids politics"
        ],
        "correct": 1,
        "exp": "That tension is precisely where tradition and modernity meet in a person's life."
      }
    ],
    "M6:Colonial & Post-Colonial Literature": [
      {
        "q": "Post-colonial literature is chiefly concerned with:",
        "opts": [
          "The experience and aftermath of colonial rule",
          "Medieval Europe",
          "Scientific discovery",
          "Classical mythology"
        ],
        "correct": 0,
        "exp": "It examines colonisation, resistance and what follows independence."
      },
      {
        "q": "A common post-colonial strategy is 'writing back', which means:",
        "opts": [
          "Copying colonial texts",
          "Answering colonial representations with an African account of the same history",
          "Refusing to write in English",
          "Writing letters"
        ],
        "correct": 1,
        "exp": "Writers contest colonial narratives by retelling events from within."
      },
      {
        "q": "The language debate in African literature concerns:",
        "opts": [
          "Whether to write in a European language or an African one",
          "Spelling reform",
          "Punctuation",
          "Print versus handwriting"
        ],
        "correct": 0,
        "exp": "Ngugi's turn to Gikuyu made this the sharpest question in the field."
      },
      {
        "q": "Colonial literature about Africa was often criticised by African writers for:",
        "opts": [
          "Excessive length",
          "Portraying Africans without interiority or history",
          "Using too much dialogue",
          "Being written in verse"
        ],
        "correct": 1,
        "exp": "Achebe's central objection was the denial of African complexity and history."
      }
    ],
    "M6:Contemporary African Literature": [
      {
        "q": "Contemporary African writing frequently addresses:",
        "opts": [
          "Only pre-colonial life",
          "Migration, urban life, gender and globalisation",
          "Only rural farming",
          "Colonial administration alone"
        ],
        "correct": 1,
        "exp": "Recent writing has moved towards city life, migration and gender."
      },
      {
        "q": "The term 'Afropolitan' refers to:",
        "opts": [
          "An African city",
          "African writers and characters whose lives span Africa and the wider world",
          "A poetic metre",
          "A colonial policy"
        ],
        "correct": 1,
        "exp": "It names a transnational African experience and the writing that reflects it."
      },
      {
        "q": "Women writers have changed African literature principally by:",
        "opts": [
          "Shortening novels",
          "Placing women's experience and perspective at the centre of the narrative",
          "Avoiding politics",
          "Writing only poetry"
        ],
        "correct": 1,
        "exp": "Writers such as Emecheta, Aidoo and Adichie recentred the narrative on women."
      },
      {
        "q": "Compared with the first generation, contemporary African novels are more likely to:",
        "opts": [
          "Be set entirely in villages",
          "Move between African and foreign settings",
          "Avoid English",
          "Use only oral forms"
        ],
        "correct": 1,
        "exp": "Transnational settings are characteristic of recent African fiction."
      }
    ],
    "M6:Text Analysis": [
      {
        "q": "When analysing an African prescribed text, cultural references should be:",
        "opts": [
          "Skipped",
          "Explained where they carry the meaning of the passage",
          "Translated word for word",
          "Replaced with English equivalents"
        ],
        "correct": 1,
        "exp": "Cultural detail often carries the point and needs explaining, not omitting."
      },
      {
        "q": "Analysing a proverb in an African novel requires you to state:",
        "opts": [
          "Its literal wording only",
          "Its meaning and what its use reveals about the speaker or situation",
          "The page number",
          "Its origin"
        ],
        "correct": 1,
        "exp": "The function of the proverb in that moment is what earns marks."
      },
      {
        "q": "An effective analysis of an African text connects:",
        "opts": [
          "Plot events to the historical and cultural situation the work depicts",
          "The author's age to the plot",
          "The cover design to the theme",
          "The publisher to the setting"
        ],
        "correct": 0,
        "exp": "Linking action to its historical and cultural context is the core skill."
      },
      {
        "q": "Judging an African text solely by the standards of European literature is:",
        "opts": [
          "Recommended by WAEC",
          "A weakness, because the work's own tradition and purpose must be considered",
          "Required in Paper 2",
          "Impossible"
        ],
        "correct": 1,
        "exp": "A work should be read in relation to the tradition it belongs to."
      }
    ],
    "M6:Practice Questions": [
      {
        "q": "A question on an African text asking about 'the role of tradition' expects you to:",
        "opts": [
          "Define tradition generally",
          "Show how traditional practice shapes the action and characters in that text",
          "Describe African history",
          "Compare two continents"
        ],
        "correct": 1,
        "exp": "The answer must be grounded in the specific text named."
      },
      {
        "q": "In answering on an African drama, references to performance and ritual should be:",
        "opts": [
          "Avoided",
          "Used where they illuminate meaning and staging",
          "Listed without comment",
          "Confined to the conclusion"
        ],
        "correct": 1,
        "exp": "Performance detail is part of how meaning is made in African drama."
      },
      {
        "q": "Writing generally about 'African culture' instead of the set text will:",
        "opts": [
          "Earn full marks",
          "Lose marks for lack of textual relevance",
          "Be treated as an unseen passage",
          "Gain bonus marks"
        ],
        "correct": 1,
        "exp": "Every claim must be anchored in the prescribed text."
      },
      {
        "q": "A strong conclusion to an African literature essay should:",
        "opts": [
          "Introduce a new text",
          "Draw the argument together and answer the question directly",
          "Summarise the plot",
          "List the devices used"
        ],
        "correct": 1,
        "exp": "The conclusion must return to the question and settle it."
      }
    ],
    "M7:Introduction to World Literature": [
      {
        "q": "World literature in the WASSCE syllabus refers to:",
        "opts": [
          "Only English novels",
          "Prescribed texts from outside Africa, studied alongside African texts",
          "Only American poetry",
          "Translations only"
        ],
        "correct": 1,
        "exp": "The non-African section sets texts from the wider world beside the African ones."
      },
      {
        "q": "Studying non-African texts alongside African ones allows a candidate to:",
        "opts": [
          "Avoid the African papers",
          "Compare how different traditions treat shared human concerns",
          "Skip literary terms",
          "Answer in any language"
        ],
        "correct": 1,
        "exp": "Comparison across traditions is a stated purpose of the syllabus."
      },
      {
        "q": "Which is a canonical work of non-African literature commonly studied at this level?",
        "opts": [
          "Things Fall Apart",
          "Romeo and Juliet",
          "The Lion and the Jewel",
          "Weep Not, Child"
        ],
        "correct": 1,
        "exp": "Shakespeare's plays are standard non-African set texts."
      },
      {
        "q": "When writing about a translated work you should remember that:",
        "opts": [
          "Translation removes all meaning",
          "Some features of the original language are inevitably changed",
          "Translations are not examinable",
          "The plot changes"
        ],
        "correct": 1,
        "exp": "Sound effects and idiom cannot always survive translation intact."
      }
    ],
    "M7:Shakespeare & Classical Literature": [
      {
        "q": "Shakespeare wrote most of his plays in:",
        "opts": [
          "Rhyming couplets throughout",
          "Blank verse, with prose for some characters and scenes",
          "Free verse",
          "Prose only"
        ],
        "correct": 1,
        "exp": "Blank verse dominates, with prose reserved for particular characters and situations."
      },
      {
        "q": "In Shakespearean drama, prose is often given to:",
        "opts": [
          "Kings only",
          "Lower-status characters or comic and everyday scenes",
          "The chorus",
          "No one"
        ],
        "correct": 1,
        "exp": "The verse/prose distinction marks status and register."
      },
      {
        "q": "A Shakespearean sonnet is arranged as:",
        "opts": [
          "Three quatrains and a couplet",
          "Two tercets",
          "Four tercets",
          "Seven couplets"
        ],
        "correct": 0,
        "exp": "The English sonnet runs abab cdcd efef gg."
      },
      {
        "q": "The chorus in classical Greek drama serves to:",
        "opts": [
          "Perform the fight scenes",
          "Comment on the action and voice communal response",
          "Write the play",
          "Sell tickets"
        ],
        "correct": 1,
        "exp": "The chorus mediates between the action and the audience."
      }
    ],
    "M7:Modern Literature": [
      {
        "q": "Literary modernism is characterised by:",
        "opts": [
          "Strict adherence to classical form",
          "Experiment with form, fragmentation and interior consciousness",
          "Avoidance of all imagery",
          "Exclusive use of rhyme"
        ],
        "correct": 1,
        "exp": "Modernists broke with inherited forms and turned inward."
      },
      {
        "q": "A common modernist narrative technique is:",
        "opts": [
          "The omniscient moral narrator",
          "Stream of consciousness",
          "Rhyming couplets",
          "The chorus"
        ],
        "correct": 1,
        "exp": "Stream of consciousness renders thought directly and is characteristically modernist."
      },
      {
        "q": "Post-modern writing is often marked by:",
        "opts": [
          "Certainty and closure",
          "Irony, self-reference and scepticism about single truths",
          "Strict realism",
          "Avoidance of humour"
        ],
        "correct": 1,
        "exp": "Post-modernism questions grand narratives and draws attention to its own artifice."
      },
      {
        "q": "Modern literature frequently reflects the impact of:",
        "opts": [
          "Medieval feudalism",
          "World war, industrialisation and the loss of inherited certainties",
          "Classical mythology only",
          "Agricultural reform"
        ],
        "correct": 1,
        "exp": "The upheavals of the twentieth century shaped modernist concerns."
      }
    ],
    "M7:Comparative Literature": [
      {
        "q": "Comparative literature involves:",
        "opts": [
          "Reading only one text closely",
          "Examining two or more texts side by side to illuminate both",
          "Ranking texts by length",
          "Translating works"
        ],
        "correct": 1,
        "exp": "Comparison sets works against each other to reveal what each is doing."
      },
      {
        "q": "A comparative essay should be organised:",
        "opts": [
          "As two separate summaries",
          "Around points of comparison, treating both texts under each point",
          "By publication date",
          "By author biography"
        ],
        "correct": 1,
        "exp": "Point-by-point organisation produces genuine comparison rather than two essays."
      },
      {
        "q": "When comparing an African and a non-African text, differences should be explained by:",
        "opts": [
          "The authors' ages",
          "Their differing cultural, historical and literary contexts",
          "Book length",
          "Publisher"
        ],
        "correct": 1,
        "exp": "Context accounts for the differences a comparison uncovers."
      },
      {
        "q": "A comparison that finds only similarities is usually:",
        "opts": [
          "Ideal",
          "Incomplete, because significant differences are also evidence",
          "Impossible",
          "Required"
        ],
        "correct": 1,
        "exp": "Differences are as revealing as similarities in a comparative argument."
      }
    ],
    "M7:International Literary Themes": [
      {
        "q": "Themes described as universal are those that:",
        "opts": [
          "Appear in every book ever written",
          "Recur across cultures because they arise from shared human experience",
          "Are found only in English texts",
          "Concern only love"
        ],
        "correct": 1,
        "exp": "Love, death, power and justice recur because the experiences are shared."
      },
      {
        "q": "The theme of the abuse of power appears in world literature because:",
        "opts": [
          "Writers copy each other",
          "Authority and its misuse are a feature of every society",
          "It is easy to write",
          "Examiners require it"
        ],
        "correct": 1,
        "exp": "The theme recurs because the condition it describes is general."
      },
      {
        "q": "A universal theme is best discussed by:",
        "opts": [
          "Generalising about humanity",
          "Showing precisely how each text handles it, with evidence",
          "Naming the theme only",
          "Comparing page counts"
        ],
        "correct": 1,
        "exp": "The specific treatment, not the label, is what earns marks."
      },
      {
        "q": "Two texts treating the same theme differently demonstrate that:",
        "opts": [
          "One is wrong",
          "Culture and context shape how a shared concern is expressed",
          "The theme is absent",
          "They cannot be compared"
        ],
        "correct": 1,
        "exp": "Divergent treatment of a shared theme is exactly what comparison reveals."
      }
    ],
    "M7:Text Analysis": [
      {
        "q": "Close analysis of a non-African text should attend to:",
        "opts": [
          "The author's nationality only",
          "Language, structure, character and how they produce meaning",
          "The number of pages",
          "The cover"
        ],
        "correct": 1,
        "exp": "Analysis works on the text's own resources and their effects."
      },
      {
        "q": "When analysing verse drama, the shift from verse to prose is worth noting because:",
        "opts": [
          "It is a printing convention",
          "It usually signals a change of status, mood or register",
          "It shortens the scene",
          "It has no meaning"
        ],
        "correct": 1,
        "exp": "The shift is deliberate and carries meaning."
      },
      {
        "q": "Historical context helps analysis of a non-African text by:",
        "opts": [
          "Replacing textual evidence",
          "Explaining assumptions and references a modern reader might miss",
          "Providing the plot",
          "Naming the characters"
        ],
        "correct": 1,
        "exp": "Context supplements, but does not replace, close reading."
      },
      {
        "q": "Quoting a line of verse in an essay requires you to:",
        "opts": [
          "Reproduce it accurately and mark line breaks appropriately",
          "Paraphrase it",
          "Quote the whole stanza",
          "Avoid quotation marks"
        ],
        "correct": 0,
        "exp": "Accuracy and correct presentation of verse quotation are expected."
      }
    ],
    "M7:Practice Questions": [
      {
        "q": "A question asking 'to what extent' invites you to:",
        "opts": [
          "Agree completely",
          "Weigh the claim, giving evidence for and against before reaching a judgement",
          "Disagree completely",
          "Summarise the text"
        ],
        "correct": 1,
        "exp": "'To what extent' signals an evaluative answer with a balanced argument."
      },
      {
        "q": "A question beginning 'Discuss the significance of' requires you to explain:",
        "opts": [
          "What happens",
          "Why the element matters to plot, character or theme",
          "Who wrote it",
          "When it was published"
        ],
        "correct": 1,
        "exp": "Significance means importance within the work, not a description of it."
      },
      {
        "q": "If a question offers a critical statement to consider, you should:",
        "opts": [
          "Ignore it",
          "Engage with it directly, agreeing or disagreeing with evidence",
          "Copy it as your conclusion",
          "Rewrite the question"
        ],
        "correct": 1,
        "exp": "The statement sets the terms of the answer and must be addressed."
      },
      {
        "q": "Answering a non-African question with African examples will:",
        "opts": [
          "Earn extra marks",
          "Be marked irrelevant",
          "Be treated as comparison",
          "Be ignored"
        ],
        "correct": 1,
        "exp": "Evidence must come from the text the question names."
      }
    ],
    "M7:Literary Comparisons": [
      {
        "q": "A useful basis for comparing two plays is:",
        "opts": [
          "Their length",
          "Their treatment of a shared element such as ambition, authority or family",
          "Their publishers",
          "Their covers"
        ],
        "correct": 1,
        "exp": "A shared element gives the comparison a clear axis."
      },
      {
        "q": "Linking words such as 'similarly', 'by contrast' and 'whereas' are important in comparative writing because they:",
        "opts": [
          "Increase length",
          "Make the relationship between the texts explicit",
          "Replace evidence",
          "Introduce quotations"
        ],
        "correct": 1,
        "exp": "They signal the comparison the examiner is looking for."
      },
      {
        "q": "A comparison of two protagonists should conclude by:",
        "opts": [
          "Naming a winner",
          "Stating what the comparison reveals about the works or their themes",
          "Summarising both plots",
          "Listing quotations"
        ],
        "correct": 1,
        "exp": "The conclusion must state the insight the comparison produced."
      },
      {
        "q": "Comparing works from different periods requires attention to:",
        "opts": [
          "Nothing in particular",
          "The conventions and expectations of each period",
          "Only the plots",
          "Only the endings"
        ],
        "correct": 1,
        "exp": "Period conventions shape what each work could and did attempt."
      }
    ],
    "M8:Literary Essay Writing": [
      {
        "q": "A literary essay should open with:",
        "opts": [
          "A definition of literature",
          "A clear response to the question that indicates your line of argument",
          "A plot summary",
          "A long quotation"
        ],
        "correct": 1,
        "exp": "The opening should engage the question directly."
      },
      {
        "q": "The standard structure of a body paragraph is:",
        "opts": [
          "Quotation, quotation, quotation",
          "Point, evidence, explanation, and a link back to the question",
          "Summary then opinion",
          "Question then answer"
        ],
        "correct": 1,
        "exp": "Point-evidence-explanation-link keeps each paragraph relevant and analytical."
      },
      {
        "q": "The conclusion of a literary essay should:",
        "opts": [
          "Introduce new evidence",
          "Draw the argument together and answer the question",
          "Summarise the plot",
          "Quote the opening"
        ],
        "correct": 1,
        "exp": "A conclusion resolves the argument; it does not add material."
      },
      {
        "q": "Writing in the present tense about events in a text is:",
        "opts": [
          "Wrong",
          "The accepted convention in literary essays",
          "Only for poetry",
          "Only for drama"
        ],
        "correct": 1,
        "exp": "The literary present is the standard convention."
      }
    ],
    "M8:Answering WAEC Questions": [
      {
        "q": "The command word in a question tells you:",
        "opts": [
          "The mark allocation",
          "What kind of thinking and answer is required",
          "The text to use",
          "The word limit"
        ],
        "correct": 1,
        "exp": "'Discuss', 'examine', 'comment' and 'to what extent' each demand a different treatment."
      },
      {
        "q": "Before writing, underlining the key terms of the question helps you to:",
        "opts": [
          "Fill time",
          "Keep the answer focused on exactly what was asked",
          "Increase length",
          "Avoid quotation"
        ],
        "correct": 1,
        "exp": "Identifying the demand prevents the commonest failure, irrelevance."
      },
      {
        "q": "Answering more questions than the rubric allows means:",
        "opts": [
          "Extra marks",
          "Wasted time, since only the required number is marked",
          "Automatic failure",
          "Marks are averaged"
        ],
        "correct": 1,
        "exp": "Only the stated number of answers is credited."
      },
      {
        "q": "If a question has two parts, you should:",
        "opts": [
          "Answer the easier part only",
          "Give both parts proportionate attention",
          "Combine them into one paragraph",
          "Answer part (a) twice"
        ],
        "correct": 1,
        "exp": "Marks are divided between the parts, so both must be answered."
      }
    ],
    "M8:Quoting Effectively": [
      {
        "q": "An effective quotation in a literary essay is:",
        "opts": [
          "As long as possible",
          "Short, accurate and immediately explained",
          "Written from memory without checking",
          "Placed only in the conclusion"
        ],
        "correct": 1,
        "exp": "Brevity plus explanation is what makes a quotation do work."
      },
      {
        "q": "A quotation that is dropped into an essay without introduction is called:",
        "opts": [
          "An embedded quotation",
          "A floating quotation, which weakens the argument",
          "A citation",
          "An epigraph"
        ],
        "correct": 1,
        "exp": "Quotations must be led into and then discussed."
      },
      {
        "q": "When quoting, the words must be:",
        "opts": [
          "Paraphrased",
          "Reproduced exactly as in the text",
          "Modernised",
          "Shortened without indication"
        ],
        "correct": 1,
        "exp": "Accuracy is essential; omissions are marked with ellipsis."
      },
      {
        "q": "After giving a quotation you should:",
        "opts": [
          "Move to the next point immediately",
          "Explain how it supports the point you are making",
          "Repeat it",
          "Give another quotation"
        ],
        "correct": 1,
        "exp": "Unexplained evidence earns little; the analysis carries the marks."
      }
    ],
    "M8:Time Management": [
      {
        "q": "The first thing to do on receiving the paper is to:",
        "opts": [
          "Start writing immediately",
          "Read the rubric and the questions and decide which to answer",
          "Answer the last question",
          "Copy the questions"
        ],
        "correct": 1,
        "exp": "A few minutes reading prevents answering the wrong number or the wrong questions."
      },
      {
        "q": "Time should be allocated to each essay:",
        "opts": [
          "Equally, in proportion to the marks available",
          "Entirely to the first question",
          "According to which text you like",
          "At random"
        ],
        "correct": 0,
        "exp": "Time follows marks; over-running on one answer costs marks on another."
      },
      {
        "q": "Spending five minutes planning an essay is:",
        "opts": [
          "Wasted time",
          "Time recovered through a clearer, more relevant answer",
          "Forbidden",
          "Only useful in poetry"
        ],
        "correct": 1,
        "exp": "A plan keeps the answer ordered and on the question."
      },
      {
        "q": "Leaving a few minutes at the end allows you to:",
        "opts": [
          "Start another question",
          "Check for factual errors and complete unfinished sentences",
          "Rewrite the essay",
          "Copy out the question"
        ],
        "correct": 1,
        "exp": "A short check recovers avoidable losses."
      }
    ],
    "M8:Common Mistakes": [
      {
        "q": "The commonest weakness in WASSCE Literature essays is:",
        "opts": [
          "Too many quotations",
          "Retelling the story instead of answering the question",
          "Handwriting",
          "Short paragraphs"
        ],
        "correct": 1,
        "exp": "Narration without analysis is the single most frequent failing."
      },
      {
        "q": "Writing everything you know about a text rather than what the question asks results in:",
        "opts": [
          "Higher marks for effort",
          "Lost marks for irrelevance",
          "A bonus",
          "No effect"
        ],
        "correct": 1,
        "exp": "Relevance is a marked criterion."
      },
      {
        "q": "Confusing the author with the narrator or persona is an error because:",
        "opts": [
          "They are always the same",
          "The narrating voice is a construction within the work",
          "Authors are anonymous",
          "It affects spelling"
        ],
        "correct": 1,
        "exp": "The narrator or persona is created by the author, not identical with them."
      },
      {
        "q": "Inventing incidents or quotations that are not in the text:",
        "opts": [
          "Is acceptable if plausible",
          "Loses marks and undermines the whole answer",
          "Is encouraged",
          "Counts as creativity"
        ],
        "correct": 1,
        "exp": "Factual inaccuracy destroys the credibility of the argument."
      }
    ],
    "M8:Examination Techniques": [
      {
        "q": "When you know little about one question, the best strategy is to:",
        "opts": [
          "Leave it blank",
          "Choose a different question you can support with evidence",
          "Write a general essay",
          "Copy the question"
        ],
        "correct": 1,
        "exp": "Choosing well within the rubric is part of examination technique."
      },
      {
        "q": "Clear paragraphing in a literary essay:",
        "opts": [
          "Is decorative",
          "Helps the examiner follow the argument and locate each point",
          "Wastes space",
          "Is only for prose"
        ],
        "correct": 1,
        "exp": "Structure that is easy to follow is rewarded."
      },
      {
        "q": "If you run out of time, the best action is to:",
        "opts": [
          "Stop mid-sentence",
          "Complete the answer in clear note form so the argument is visible",
          "Leave it blank",
          "Rewrite the opening"
        ],
        "correct": 1,
        "exp": "Notes can gain some credit; an unfinished sentence gains none."
      },
      {
        "q": "Numbering answers to match the question numbers:",
        "opts": [
          "Is optional",
          "Ensures your answers are matched to the right questions",
          "Loses marks",
          "Is only for objective papers"
        ],
        "correct": 1,
        "exp": "Mismatched numbering can cost an answer its marks entirely."
      }
    ],
    "M8:Objective Questions Practice": [
      {
        "q": "In the objective paper, when you are unsure of an answer you should:",
        "opts": [
          "Leave it blank",
          "Eliminate clearly wrong options and choose the best remaining one",
          "Always pick option A",
          "Pick the longest option"
        ],
        "correct": 1,
        "exp": "Elimination improves the odds substantially over guessing blind."
      },
      {
        "q": "Objective questions on unseen passages test mainly:",
        "opts": [
          "Memory of set texts",
          "Comprehension and recognition of literary devices in the passage",
          "Handwriting",
          "Spelling"
        ],
        "correct": 1,
        "exp": "The unseen section tests reading skill, not recall."
      },
      {
        "q": "When an objective question asks for the 'best' answer, it means:",
        "opts": [
          "Several options may be partly true, but one is most accurate",
          "All options are wrong",
          "Any option is acceptable",
          "The first option"
        ],
        "correct": 0,
        "exp": "Distractors are often partly true; the fullest and most accurate option wins."
      },
      {
        "q": "Time per objective question should be:",
        "opts": [
          "Unlimited",
          "Short and even, with difficult items marked and revisited",
          "Spent on the first ten only",
          "Ignored"
        ],
        "correct": 1,
        "exp": "Even pacing with a return pass covers the whole paper."
      }
    ],
    "M8:Theory Questions Practice": [
      {
        "q": "Theory questions in Literature require:",
        "opts": [
          "One-word answers",
          "Extended essay answers supported by textual evidence",
          "Multiple choice",
          "Diagrams"
        ],
        "correct": 1,
        "exp": "The theory papers are essay papers demanding sustained argument."
      },
      {
        "q": "A theory answer on a character should be organised:",
        "opts": [
          "Chronologically through the plot",
          "Around aspects of the character relevant to the question",
          "By chapter",
          "Alphabetically"
        ],
        "correct": 1,
        "exp": "Organising by the question's demand avoids narration."
      },
      {
        "q": "Evidence in a theory answer should come from:",
        "opts": [
          "Film adaptations",
          "The prescribed text itself",
          "Study guides",
          "Classroom discussion"
        ],
        "correct": 1,
        "exp": "Only the text itself is authoritative evidence."
      },
      {
        "q": "A theory answer that makes a claim without evidence is:",
        "opts": [
          "Sufficient",
          "Assertion, which earns few marks",
          "Preferred",
          "Required"
        ],
        "correct": 1,
        "exp": "Unsupported assertion cannot be credited as analysis."
      }
    ],
    "M9:Prescribed Text Revision": [
      {
        "q": "Revision of a prescribed text should begin with:",
        "opts": [
          "Memorising the whole book",
          "Reviewing plot, characters, themes and key quotations systematically",
          "Reading the last chapter",
          "Watching a film version"
        ],
        "correct": 1,
        "exp": "Systematic coverage of the four areas is what essay questions draw on."
      },
      {
        "q": "A revision summary for each prescribed text should include:",
        "opts": [
          "Only the plot",
          "Plot outline, character notes, themes, key quotations and context",
          "The author's biography only",
          "The publisher"
        ],
        "correct": 1,
        "exp": "These are the elements questions are set on."
      },
      {
        "q": "Checking the current WAEC list of prescribed texts matters because:",
        "opts": [
          "The list never changes",
          "Texts are rotated and answering on an old text earns no marks",
          "It is a formality",
          "It affects the objective paper only"
        ],
        "correct": 1,
        "exp": "Set texts change between examination years."
      },
      {
        "q": "Discussing a text with classmates is useful mainly because:",
        "opts": [
          "It replaces reading",
          "Explaining and defending an interpretation exposes gaps in your own understanding",
          "It is faster",
          "It provides quotations"
        ],
        "correct": 1,
        "exp": "Articulating an argument tests whether you actually hold it."
      }
    ],
    "M9:Poetry Revision": [
      {
        "q": "When revising a prescribed poem, you should be able to state:",
        "opts": [
          "Its exact word count",
          "Its subject, speaker, structure, devices and theme",
          "The poet's address",
          "The printing date"
        ],
        "correct": 1,
        "exp": "These five together support any question that can be set."
      },
      {
        "q": "Learning the opening and closing lines of a set poem is useful because:",
        "opts": [
          "They are the easiest",
          "They frequently carry the poem's argument and make apt quotations",
          "They are shortest",
          "Examiners ask for them"
        ],
        "correct": 1,
        "exp": "Openings establish and closings resolve; both quote well."
      },
      {
        "q": "Revision of poetic devices should focus on:",
        "opts": [
          "Definitions alone",
          "Examples from the set poems and the effect each creates",
          "Spelling",
          "The number of devices"
        ],
        "correct": 1,
        "exp": "Effect within the specific poem is what is examined."
      },
      {
        "q": "Comparing two set poems during revision helps because:",
        "opts": [
          "It halves the work",
          "Comparison sharpens what is distinctive about each",
          "It is required",
          "It reduces quotation"
        ],
        "correct": 1,
        "exp": "Contrast makes each poem's particular qualities visible."
      }
    ],
    "M9:Drama Revision": [
      {
        "q": "Revising a play should include tracking:",
        "opts": [
          "The number of words per act",
          "How the conflict develops act by act and how each character changes",
          "The cast size only",
          "The theatre it was performed in"
        ],
        "correct": 1,
        "exp": "Development of conflict and character is the material of drama questions."
      },
      {
        "q": "Knowing which act and scene a key speech occurs in is useful because:",
        "opts": [
          "It is decorative",
          "Precise reference strengthens the evidence in an essay",
          "It is required in Paper 1",
          "It shortens the answer"
        ],
        "correct": 1,
        "exp": "Accurate location signals genuine familiarity."
      },
      {
        "q": "When revising a tragedy, you should be able to identify:",
        "opts": [
          "The number of scenes",
          "The hero's flaw, the turning point and the consequences",
          "The costume design",
          "The audience size"
        ],
        "correct": 1,
        "exp": "These are the structural facts tragedy questions test."
      },
      {
        "q": "Revising minor characters in a play is worthwhile because:",
        "opts": [
          "They have the most lines",
          "Questions are often set on their function in plot and theme",
          "They are easier",
          "They appear in the title"
        ],
        "correct": 1,
        "exp": "Function of minor figures is a standard question."
      }
    ],
    "M9:Prose Revision": [
      {
        "q": "Revising a novel should include:",
        "opts": [
          "Memorising chapter numbers",
          "Plot movement, character development, setting, narrative method and themes",
          "Only the ending",
          "The author's other works"
        ],
        "correct": 1,
        "exp": "These five areas cover the range of prose questions."
      },
      {
        "q": "A chapter-by-chapter summary is most useful for:",
        "opts": [
          "Quoting in the exam",
          "Locating incidents quickly when planning an answer",
          "Replacing the text",
          "Learning vocabulary"
        ],
        "correct": 1,
        "exp": "It is a navigation aid, not a substitute for the text."
      },
      {
        "q": "When revising narrative method, you should note:",
        "opts": [
          "The font used",
          "Who narrates, from what position, and with what limitations",
          "The page count",
          "The cover art"
        ],
        "correct": 1,
        "exp": "Narrative method is frequently examined in prose questions."
      },
      {
        "q": "Revising themes in a novel is most effective when you:",
        "opts": [
          "List theme words",
          "Attach specific incidents and quotations to each theme",
          "Read the blurb",
          "Count the chapters"
        ],
        "correct": 1,
        "exp": "Themes are only usable in an essay when anchored to evidence."
      }
    ],
    "M9:Literary Terms Review": [
      {
        "q": "A soliloquy differs from a monologue because it is:",
        "opts": [
          "Longer",
          "Spoken by a character alone, revealing private thought",
          "Spoken in verse",
          "Addressed to the audience directly"
        ],
        "correct": 1,
        "exp": "A monologue may be addressed to others; a soliloquy is private."
      },
      {
        "q": "An allegory is a narrative in which:",
        "opts": [
          "Nothing is symbolic",
          "Characters and events consistently represent abstract ideas",
          "There is no plot",
          "Only animals appear"
        ],
        "correct": 1,
        "exp": "Allegory sustains a second level of meaning throughout."
      },
      {
        "q": "A paradox is a statement that:",
        "opts": [
          "Is simply false",
          "Appears self-contradictory yet expresses a truth",
          "Uses rhyme",
          "Compares two things"
        ],
        "correct": 1,
        "exp": "The apparent contradiction resolves into an insight."
      },
      {
        "q": "Satire and parody differ in that parody specifically:",
        "opts": [
          "Attacks a person",
          "Imitates the style of a work or author for comic or critical effect",
          "Uses no humour",
          "Appears only in poetry"
        ],
        "correct": 1,
        "exp": "Parody targets a style; satire targets folly or vice."
      }
    ],
    "M9:Past WAEC Questions": [
      {
        "q": "The main value of working through past WAEC questions is that they:",
        "opts": [
          "Repeat exactly each year",
          "Show the phrasing, scope and depth expected of answers",
          "Contain the answers",
          "Replace the texts"
        ],
        "correct": 1,
        "exp": "Past papers teach you what the examiner is asking for."
      },
      {
        "q": "After writing a past-question answer you should:",
        "opts": [
          "File it away",
          "Compare it with the marking criteria and note what was missing",
          "Rewrite it from memory",
          "Discard it"
        ],
        "correct": 1,
        "exp": "The comparison is where the learning happens."
      },
      {
        "q": "Past questions should be attempted:",
        "opts": [
          "With the book open and no time limit",
          "Under timed, closed-book conditions once the text is known",
          "Only in groups",
          "Only in the final week"
        ],
        "correct": 1,
        "exp": "Exam conditions build the pace and recall the exam requires."
      },
      {
        "q": "Noticing that similar questions recur across years should lead you to:",
        "opts": [
          "Memorise model answers",
          "Prepare flexible material on the main characters and themes",
          "Ignore the texts",
          "Predict the exact question"
        ],
        "correct": 1,
        "exp": "Flexible preparation adapts; memorised answers rarely fit the question set."
      }
    ],
    "M9:Performance Review": [
      {
        "q": "Reviewing a mock examination is most useful when you:",
        "opts": [
          "Note only the total mark",
          "Identify the specific reasons marks were lost and act on each",
          "Repeat the same paper",
          "Compare with a friend's mark"
        ],
        "correct": 1,
        "exp": "Diagnosis of specific weaknesses is what improves the next attempt."
      },
      {
        "q": "If marks were lost for irrelevance, the remedy is to:",
        "opts": [
          "Write longer answers",
          "Practise planning answers directly against the question's command word",
          "Learn more quotations",
          "Write faster"
        ],
        "correct": 1,
        "exp": "Irrelevance is a planning problem, not a knowledge problem."
      },
      {
        "q": "If marks were lost for lack of textual support, you should:",
        "opts": [
          "Write more opinions",
          "Build and revise a bank of short, accurate quotations",
          "Avoid quotation",
          "Summarise the plot"
        ],
        "correct": 1,
        "exp": "A quotation bank directly addresses missing evidence."
      },
      {
        "q": "A performance review should end with:",
        "opts": [
          "A mark",
          "Two or three specific actions before the next attempt",
          "A new text",
          "A summary of the paper"
        ],
        "correct": 1,
        "exp": "Review is only useful if it produces concrete next steps."
      }
    ],
    "M10:Complete Literature Revision": [
      {
        "q": "Final revision should prioritise:",
        "opts": [
          "Reading new texts",
          "Consolidating the prescribed texts, key quotations and essay technique",
          "Learning the syllabus by heart",
          "Watching adaptations"
        ],
        "correct": 1,
        "exp": "Consolidation of what is examinable beats new material at this stage."
      },
      {
        "q": "In the last weeks before the examination, timed essay practice should be:",
        "opts": [
          "Abandoned",
          "Increased, because it rehearses the exact task",
          "Replaced by reading",
          "Done once only"
        ],
        "correct": 1,
        "exp": "Rehearsing the task under time is the most transferable practice."
      },
      {
        "q": "A final revision plan should cover:",
        "opts": [
          "One genre only",
          "All prescribed texts across poetry, drama and prose",
          "Only the favourite text",
          "Only the objective paper"
        ],
        "correct": 1,
        "exp": "Every paper is compulsory, so all genres must be revised."
      },
      {
        "q": "Revising literary terms in the final week is worthwhile because:",
        "opts": [
          "They appear only in Paper 1",
          "They are tested in the objective paper and needed for analysis in the essays",
          "They are decorative",
          "They replace quotation"
        ],
        "correct": 1,
        "exp": "Terms are examined directly and are the language of good analysis."
      }
    ],
    "M10:Certificate Requirements": [
      {
        "q": "To complete this course you must:",
        "opts": [
          "Attend only",
          "Complete the module lessons, pass the quizzes and pass the final assessment",
          "Pay a fee only",
          "Read one text"
        ],
        "correct": 1,
        "exp": "The certificate is awarded on completed and assessed work."
      },
      {
        "q": "The Full Mock Examination in Module 10 is intended to:",
        "opts": [
          "Replace the WASSCE",
          "Rehearse the whole paper under examination conditions",
          "Test typing",
          "Award the certificate automatically"
        ],
        "correct": 1,
        "exp": "It is a rehearsal that reveals what still needs work."
      },
      {
        "q": "This course should be used alongside:",
        "opts": [
          "Nothing else",
          "The official WAEC syllabus, your teacher's guidance and the prescribed texts",
          "Film adaptations only",
          "Social media groups"
        ],
        "correct": 1,
        "exp": "The course supports, and does not replace, the syllabus and the texts."
      },
      {
        "q": "The most reliable predictor of success in WASSCE Literature is:",
        "opts": [
          "The number of study guides owned",
          "Thorough knowledge of the prescribed texts plus practised essay technique",
          "Handwriting speed",
          "Length of answers"
        ],
        "correct": 1,
        "exp": "Knowledge of the texts and the skill to deploy it are what the papers reward."
      }
    ]
  };

  var EXAM = [
    {
      "q": "Which genre is written primarily to be performed?",
      "opts": [
        "Prose",
        "Drama",
        "Lyric poetry",
        "Biography"
      ],
      "correct": 1,
      "exp": "Drama is composed for performance before an audience."
    },
    {
      "q": "'The classroom was a furnace' is an example of:",
      "opts": [
        "Simile",
        "Metaphor",
        "Litotes",
        "Onomatopoeia"
      ],
      "correct": 1,
      "exp": "The comparison is made directly without 'like' or 'as'."
    },
    {
      "q": "A fourteen-line poem in iambic pentameter is a:",
      "opts": [
        "Ballad",
        "Sonnet",
        "Ode",
        "Elegy"
      ],
      "correct": 1,
      "exp": "The sonnet is defined by its fourteen lines and characteristic metre."
    },
    {
      "q": "The point of highest tension in a plot is the:",
      "opts": [
        "Exposition",
        "Climax",
        "Denouement",
        "Prologue"
      ],
      "correct": 1,
      "exp": "The climax is the turning point of greatest tension."
    },
    {
      "q": "A speech delivered by a character alone on stage is a:",
      "opts": [
        "Dialogue",
        "Soliloquy",
        "Chorus",
        "Prologue"
      ],
      "correct": 1,
      "exp": "The soliloquy voices private thought to the audience."
    },
    {
      "q": "Repetition of initial consonant sounds is called:",
      "opts": [
        "Assonance",
        "Alliteration",
        "Consonance",
        "Rhyme"
      ],
      "correct": 1,
      "exp": "Alliteration repeats the opening consonant sound of nearby words."
    },
    {
      "q": "When the audience knows what a character does not, the effect is:",
      "opts": [
        "Verbal irony",
        "Dramatic irony",
        "Situational irony",
        "Satire"
      ],
      "correct": 1,
      "exp": "Dramatic irony depends on the audience's superior knowledge."
    },
    {
      "q": "The perspective from which a story is told is its:",
      "opts": [
        "Theme",
        "Point of view",
        "Setting",
        "Mood"
      ],
      "correct": 1,
      "exp": "Point of view is the narrative vantage point."
    },
    {
      "q": "A character who contrasts with another to highlight that character's qualities is a:",
      "opts": [
        "Protagonist",
        "Foil",
        "Narrator",
        "Chorus"
      ],
      "correct": 1,
      "exp": "A foil exists to throw another character into relief."
    },
    {
      "q": "Unrhymed iambic pentameter is known as:",
      "opts": [
        "Free verse",
        "Blank verse",
        "Prose",
        "Doggerel"
      ],
      "correct": 1,
      "exp": "Blank verse keeps the metre but drops the rhyme."
    },
    {
      "q": "The atmosphere a work creates in the reader is its:",
      "opts": [
        "Tone",
        "Mood",
        "Theme",
        "Plot"
      ],
      "correct": 1,
      "exp": "Mood is what the reader feels; tone is the writer's attitude."
    },
    {
      "q": "Chinua Achebe's Things Fall Apart was first published in:",
      "opts": [
        "1938",
        "1958",
        "1968",
        "1978"
      ],
      "correct": 1,
      "exp": "Things Fall Apart appeared in 1958."
    },
    {
      "q": "An excessively proud tragic hero displays:",
      "opts": [
        "Catharsis",
        "Hubris",
        "Anagnorisis",
        "Peripeteia"
      ],
      "correct": 1,
      "exp": "Hubris is the overweening pride that provokes disaster."
    },
    {
      "q": "Language appealing to the senses is called:",
      "opts": [
        "Imagery",
        "Metre",
        "Diction",
        "Syntax"
      ],
      "correct": 0,
      "exp": "Imagery is sensory language."
    },
    {
      "q": "A poem lamenting the dead is an:",
      "opts": [
        "Ode",
        "Elegy",
        "Epic",
        "Idyll"
      ],
      "correct": 1,
      "exp": "The elegy is a poem of mourning."
    },
    {
      "q": "The running-on of sense from one line of verse to the next is:",
      "opts": [
        "Caesura",
        "Enjambment",
        "Refrain",
        "Volta"
      ],
      "correct": 1,
      "exp": "Enjambment carries sense across the line break."
    },
    {
      "q": "A narrative in which characters consistently represent abstract ideas is an:",
      "opts": [
        "Allegory",
        "Anecdote",
        "Epic",
        "Elegy"
      ],
      "correct": 0,
      "exp": "Allegory sustains a second, abstract level of meaning."
    },
    {
      "q": "Wole Soyinka won the Nobel Prize in Literature in:",
      "opts": [
        "1976",
        "1986",
        "1991",
        "2003"
      ],
      "correct": 1,
      "exp": "Soyinka became the first African laureate in Literature in 1986."
    },
    {
      "q": "A brief remark heard by the audience but not by other characters is an:",
      "opts": [
        "Aside",
        "Epilogue",
        "Interlude",
        "Epigraph"
      ],
      "correct": 0,
      "exp": "The aside is conventionally unheard by the other characters."
    },
    {
      "q": "'He is not unkind' is an example of:",
      "opts": [
        "Hyperbole",
        "Litotes",
        "Pun",
        "Metonymy"
      ],
      "correct": 1,
      "exp": "Litotes understates by denying the opposite."
    },
    {
      "q": "The turn or shift of argument in a poem is called the:",
      "opts": [
        "Volta",
        "Caesura",
        "Stanza",
        "Coda"
      ],
      "correct": 0,
      "exp": "The volta marks the poem's change of direction."
    },
    {
      "q": "A long narrative poem about heroic deeds is an:",
      "opts": [
        "Ode",
        "Epic",
        "Elegy",
        "Eclogue"
      ],
      "correct": 1,
      "exp": "Epics narrate heroic action on a grand scale."
    },
    {
      "q": "Giving human qualities to non-human things is:",
      "opts": [
        "Personification",
        "Apostrophe",
        "Synecdoche",
        "Allusion"
      ],
      "correct": 0,
      "exp": "Personification attributes human traits to the non-human."
    },
    {
      "q": "The resolution that follows the climax is the:",
      "opts": [
        "Exposition",
        "Denouement",
        "Rising action",
        "Prologue"
      ],
      "correct": 1,
      "exp": "The denouement unties the complications of the plot."
    },
    {
      "q": "A character who does not change through the work is described as:",
      "opts": [
        "Dynamic",
        "Static",
        "Round",
        "Foil"
      ],
      "correct": 1,
      "exp": "Static characters remain essentially unchanged."
    },
    {
      "q": "Repetition of vowel sounds within nearby words is:",
      "opts": [
        "Alliteration",
        "Assonance",
        "Onomatopoeia",
        "Rhyme"
      ],
      "correct": 1,
      "exp": "Assonance repeats internal vowel sounds."
    },
    {
      "q": "A statement that seems contradictory yet expresses a truth is a:",
      "opts": [
        "Paradox",
        "Simile",
        "Pun",
        "Refrain"
      ],
      "correct": 0,
      "exp": "The paradox resolves into insight on reflection."
    },
    {
      "q": "Ngugi wa Thiong'o's decision to write in Gikuyu was a stand on:",
      "opts": [
        "Rhyme",
        "The language question in African literature",
        "Printing costs",
        "Genre"
      ],
      "correct": 1,
      "exp": "His turn to Gikuyu made language itself a political question."
    },
    {
      "q": "A story told within another story is a:",
      "opts": [
        "Frame narrative",
        "Subplot",
        "Flashback",
        "Prologue"
      ],
      "correct": 0,
      "exp": "The outer narrative frames the inner one."
    },
    {
      "q": "A prose narrative between the short story and the novel in length is a:",
      "opts": [
        "Novella",
        "Sketch",
        "Fable",
        "Memoir"
      ],
      "correct": 0,
      "exp": "The novella occupies the middle ground in length and scope."
    },
    {
      "q": "Deliberate exaggeration for effect is:",
      "opts": [
        "Hyperbole",
        "Litotes",
        "Irony",
        "Metonymy"
      ],
      "correct": 0,
      "exp": "Hyperbole overstates for emphasis."
    },
    {
      "q": "In tragedy, the error or flaw that brings about downfall is:",
      "opts": [
        "Catharsis",
        "Hamartia",
        "Mimesis",
        "Peripeteia"
      ],
      "correct": 1,
      "exp": "Hamartia is the tragic flaw or fatal error."
    },
    {
      "q": "A pause within a line of verse is a:",
      "opts": [
        "Caesura",
        "Stanza break",
        "Refrain",
        "Couplet"
      ],
      "correct": 0,
      "exp": "The caesura is an internal pause in the line."
    },
    {
      "q": "Two consecutive rhyming lines of the same length form a:",
      "opts": [
        "Quatrain",
        "Couplet",
        "Tercet",
        "Sestet"
      ],
      "correct": 1,
      "exp": "A couplet is a rhymed pair of lines."
    },
    {
      "q": "The chief purpose of satire is to:",
      "opts": [
        "Entertain only",
        "Ridicule folly or vice in order to correct it",
        "Mourn the dead",
        "Praise a hero"
      ],
      "correct": 1,
      "exp": "Satire is corrective ridicule."
    }
  ];

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^Practice:\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function clone(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  /* Reserved question (index 3) of every topic, in course order: what the
     module assessments draw on. A learner meets these for the first time in
     the assessment, not in the practice quiz that precedes it. */
  var examCursor = 0;
  var globalReserve = [], globalCursor = { i: 0 };

  /* A question issued to one assessment is never issued to another, so the
     module reserve and the course-wide reserve cannot hand out the same item. */
  var issued = {};
  function take(list, cursorHolder, n) {
    var out = [];
    while (out.length < n && cursorHolder.i < list.length) {
      var q = list[cursorHolder.i++];
      if (issued[q.q]) continue;
      issued[q.q] = true;
      out.push(clone(q));
    }
    return out;
  }

  /* Every topic's reserved question, course-wide, so a module with more
     assessment slots than topics can still be filled without repeating. */
  C.modules.forEach(function (mod, mi) {
    var n = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (mi + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz) return;
      var k = 'M' + n + ':' + cleanTitle(lesson.t);
      if (BANK[k] && BANK[k][3]) globalReserve.push(BANK[k][3]);
    });
  });

  var applied = 0, missing = [];
  C.modules.forEach(function (mod, mi) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (mi + 1);
    var lastKey = null;
    var modReserve = { list: [], i: 0 };

    // First pass: collect this module's reserved questions in lesson order.
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz) return;
      var k = 'M' + num + ':' + cleanTitle(lesson.t);
      if (BANK[k] && BANK[k][3]) modReserve.list.push(BANK[k][3]);
    });

    (mod.lessons || []).forEach(function (lesson) {
      if (!lesson.isQuiz) { lastKey = 'M' + num + ':' + cleanTitle(lesson.t); return; }
      var quiz = C.quizzes[lesson.quizId];
      if (!quiz) return;
      var isPractice = /Practice:/i.test(lesson.t);
      if (isPractice) {
        var key = 'M' + num + ':' + cleanTitle(lesson.t);
        var set = BANK[key] || (lastKey ? BANK[lastKey] : null);
        if (!set) { missing.push(key); return; }
        quiz.questions = set.slice(0, 3).map(clone);
        applied += 1;
        return;
      }
      // Module assessment / mock / final: reserved questions first, then the
      // course-wide examination pool. Both cursors only move forward, so no
      // two assessments in the course share a question.
      var want = (quiz.questions || []).length || 8;
      var qs = take(modReserve.list, modReserve, want);
      if (qs.length < want) qs = qs.concat(take(globalReserve, globalCursor, want - qs.length));
      var pool = { i: examCursor };
      if (qs.length < want) qs = qs.concat(take(EXAM, pool, want - qs.length));
      examCursor = pool.i;
      if (qs.length) { quiz.questions = qs; applied += 1; }
    });
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[wassce-literature quizzes] rebuilt ' + applied + ' quizzes'
      + (missing.length ? ' (no bank entry: ' + missing.join(', ') + ')' : ''));
  }
})();
