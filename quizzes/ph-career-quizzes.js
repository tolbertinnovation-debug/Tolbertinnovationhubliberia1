/* TIH — authored per-topic quiz questions for a single course.
   Split out of the 567 KB topic-quizzes.js, which the course player loaded
   in full even for the 20 courses that have no entry in it. The curriculum
   builder reads this at build time, so the loader fetches it first. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['ph-career'] = {
 "Welcome to the Course": [
  {
   "q": "What is the primary goal of this career-focused course for public health graduates?",
   "opts": [
    "To help graduates plan and launch successful public health careers",
    "To grant a medical license",
    "To replace a Master of Public Health degree",
    "To certify graduates as epidemiologists"
   ],
   "correct": 0,
   "exp": "The course is designed to help public health graduates plan and launch successful careers rather than confer any license or degree."
  },
  {
   "q": "Which credential is most commonly associated with entry into many US public health careers?",
   "opts": [
    "MBA",
    "MPH (Master of Public Health)",
    "JD (law degree)",
    "CPA (accounting)"
   ],
   "correct": 1,
   "exp": "The MPH is the most widely recognized graduate credential for entering many public health career paths in the United States."
  },
  {
   "q": "A recent graduate wants to maximize the value of this course. What is the best approach?",
   "opts": [
    "Skip the self-assessment sections",
    "Memorize every slide word for word",
    "Actively complete exercises and apply them to a personal career plan",
    "Wait until after graduation to start"
   ],
   "correct": 2,
   "exp": "Actively completing exercises and applying them to a personal career plan produces the most useful outcomes from the course."
  }
 ],
 "The Public Health Job Market": [
  {
   "q": "Which US federal agency is the leading employer and reference point for public health practice and epidemiology?",
   "opts": [
    "The Department of Defense",
    "The Department of Transportation",
    "The Federal Reserve",
    "The Centers for Disease Control and Prevention (CDC)"
   ],
   "correct": 3,
   "exp": "The CDC, part of HHS, is the leading US federal public health agency and a major employer of epidemiologists and public health professionals."
  },
  {
   "q": "According to typical US labor data, which sector employs the largest share of governmental public health workers?",
   "opts": [
    "State and local health departments",
    "Private pharmaceutical marketing",
    "Federal courts",
    "Retail pharmacies"
   ],
   "correct": 0,
   "exp": "State, county, and local health departments collectively employ the largest share of the governmental public health workforce in the US."
  },
  {
   "q": "A graduate is comparing US salary expectations. Which is the most realistic median starting range for an entry-level epidemiologist with an MPH?",
   "opts": [
    "About 15,000 to 25,000 USD per year",
    "About 55,000 to 75,000 USD per year",
    "About 200,000 to 250,000 USD per year",
    "About 500,000 USD per year"
   ],
   "correct": 1,
   "exp": "Entry-level epidemiologists in the US with an MPH commonly earn roughly 55,000 to 75,000 USD depending on location and sector."
  }
 ],
 "Career Pathways in Public Health": [
  {
   "q": "A graduate interested in outbreak investigation and applied field epidemiology would most likely pursue which pathway?",
   "opts": [
    "Hospital billing administration",
    "Corporate tax accounting",
    "The CDC Epidemic Intelligence Service (EIS)",
    "Pharmaceutical sales representation"
   ],
   "correct": 2,
   "exp": "The CDC Epidemic Intelligence Service is the classic applied field epidemiology pathway focused on outbreak investigation."
  },
  {
   "q": "Which pathway best fits a graduate who wants to conduct grant-funded biomedical and population research?",
   "opts": [
    "A courier delivery position",
    "A frontline retail job",
    "A short-order kitchen role",
    "An academic or NIH-funded research career"
   ],
   "correct": 3,
   "exp": "Academic and NIH-funded research careers center on conducting grant-supported biomedical and population health studies."
  },
  {
   "q": "A graduate wants to shape laws and regulations affecting population health. Which pathway aligns best?",
   "opts": [
    "Health policy and government affairs",
    "Warehouse logistics",
    "Automotive repair",
    "Graphic design for retail"
   ],
   "correct": 0,
   "exp": "Health policy and government affairs roles focus on shaping laws, regulations, and programs that affect population health."
  }
 ],
 "Key Public Health Job Roles": [
  {
   "q": "What is the core responsibility of an epidemiologist at a state health department?",
   "opts": [
    "Managing hospital cafeteria menus",
    "Investigating patterns, causes, and control of disease in populations",
    "Auditing corporate financial statements",
    "Designing consumer advertising campaigns"
   ],
   "correct": 1,
   "exp": "Epidemiologists study the distribution, causes, and control of disease and health conditions in defined populations."
  },
  {
   "q": "A biostatistician at an NIH-funded study is primarily responsible for what?",
   "opts": [
    "Writing press releases only",
    "Scheduling building maintenance",
    "Designing study analysis plans and interpreting data",
    "Managing the facility parking lot"
   ],
   "correct": 2,
   "exp": "Biostatisticians design analysis plans, select statistical methods, and interpret data for research studies."
  },
  {
   "q": "Which role focuses primarily on designing and delivering community programs that change health behaviors?",
   "opts": [
    "Building code inspector",
    "Chief financial officer",
    "Network security engineer",
    "Health educator or health promotion specialist"
   ],
   "correct": 3,
   "exp": "Health educators and promotion specialists design and deliver programs intended to change health behaviors in communities."
  }
 ],
 "Assessing Your Skills and Strengths": [
  {
   "q": "Which tool is most useful for a graduate systematically evaluating personal strengths and gaps before a job search?",
   "opts": [
    "A SWOT analysis of strengths, weaknesses, opportunities, and threats",
    "A random guess",
    "A coin flip",
    "Ignoring feedback from mentors"
   ],
   "correct": 0,
   "exp": "A SWOT analysis provides a structured way to assess personal strengths, weaknesses, opportunities, and threats for career planning."
  },
  {
   "q": "A graduate lists R, SAS, and data cleaning as competencies. These are best categorized as what type of skills?",
   "opts": [
    "Interpersonal soft skills",
    "Technical or hard skills",
    "Physical fitness skills",
    "Irrelevant hobbies"
   ],
   "correct": 1,
   "exp": "Statistical software proficiency and data management are technical (hard) skills valued in analytic public health roles."
  },
  {
   "q": "Why is soliciting feedback from mentors or supervisors important in a self-assessment?",
   "opts": [
    "It replaces the need for any training",
    "It guarantees an immediate promotion",
    "It provides an external perspective that can reveal blind spots",
    "It is only useful for senior executives"
   ],
   "correct": 2,
   "exp": "External feedback surfaces blind spots and validates strengths that self-assessment alone may miss."
  }
 ],
 "Setting SMART Career Goals": [
  {
   "q": "In the SMART framework, what does the M represent?",
   "opts": [
    "Motivational",
    "Maximal",
    "Mandatory",
    "Measurable"
   ],
   "correct": 3,
   "exp": "In SMART goals, M stands for Measurable, meaning progress can be quantified or objectively tracked."
  },
  {
   "q": "Which of the following is the best example of a SMART career goal for a new graduate?",
   "opts": [
    "Secure an entry-level epidemiologist position at a county health department within 6 months",
    "Become successful in public health",
    "Get a good job someday",
    "Learn everything about health"
   ],
   "correct": 0,
   "exp": "The county health department goal is specific, measurable, achievable, relevant, and time-bound, satisfying all SMART criteria."
  },
  {
   "q": "A graduate sets a goal to publish three peer-reviewed papers in one month with no research experience. Which SMART criterion is most violated?",
   "opts": [
    "Specific",
    "Achievable (realistic)",
    "Relevant",
    "Time-bound"
   ],
   "correct": 1,
   "exp": "Publishing three peer-reviewed papers in a month without experience is not achievable, violating the realistic criterion."
  }
 ],
 "Building Your Career Plan": [
  {
   "q": "What is the primary purpose of a written career plan?",
   "opts": [
    "To guarantee a specific salary",
    "To avoid ever changing direction",
    "To map goals, milestones, and actions toward a career vision",
    "To replace a resume"
   ],
   "correct": 2,
   "exp": "A career plan maps a vision into concrete goals, milestones, and action steps to guide professional development."
  },
  {
   "q": "A graduate targeting a CDC fellowship should include which element in the career plan?",
   "opts": [
    "A refusal to network",
    "A list of unrelated hobbies only",
    "No timeline at all",
    "A gap analysis of skills needed versus skills held"
   ],
   "correct": 3,
   "exp": "A gap analysis identifies the skills and experiences needed for a target role like a CDC fellowship so they can be addressed."
  },
  {
   "q": "Why should a career plan be reviewed and updated periodically?",
   "opts": [
    "Because interests, opportunities, and the job market evolve over time",
    "Because plans should never change",
    "Because it is legally required",
    "Because employers mandate annual rewrites"
   ],
   "correct": 0,
   "exp": "Regular reviews keep the plan aligned with changing interests, new opportunities, and shifts in the job market."
  }
 ],
 "Epidemiology Essentials": [
  {
   "q": "Epidemiology is best defined as the study of what?",
   "opts": [
    "Individual patient surgery techniques",
    "The distribution and determinants of health and disease in populations",
    "Molecular structure of drugs",
    "Hospital accounting practices"
   ],
   "correct": 1,
   "exp": "Epidemiology studies the distribution and determinants of health-related states and events in defined populations."
  },
  {
   "q": "A CDC EIS officer investigating a foodborne outbreak calculates the proportion of exposed people who became ill. This measure is the what?",
   "opts": [
    "Net present value",
    "Case fatality doubling time",
    "Attack rate",
    "Standard deviation of income"
   ],
   "correct": 2,
   "exp": "The attack rate is the proportion of an exposed population that develops the illness during an outbreak."
  },
  {
   "q": "Which study design follows groups over time to compare disease incidence between exposed and unexposed people?",
   "opts": [
    "Cross-sectional survey",
    "Ecological correlation only",
    "Case report",
    "Cohort study"
   ],
   "correct": 3,
   "exp": "A cohort study follows exposed and unexposed groups over time to compare the incidence of outcomes."
  }
 ],
 "Biostatistics and Data Literacy": [
  {
   "q": "A biostatistician reports a p-value of 0.03 for a treatment effect. At an alpha of 0.05, what does this indicate?",
   "opts": [
    "The result is statistically significant at the 0.05 level",
    "The result proves causation definitively",
    "The sample size was too small",
    "The result is not significant"
   ],
   "correct": 0,
   "exp": "A p-value of 0.03 is below the 0.05 threshold, so the result is statistically significant at that alpha level."
  },
  {
   "q": "Which measure of central tendency is most affected by extreme outliers in a dataset?",
   "opts": [
    "Median",
    "Mean",
    "Mode",
    "Interquartile range"
   ],
   "correct": 1,
   "exp": "The mean is pulled toward extreme values, making it the measure most sensitive to outliers."
  },
  {
   "q": "A 95 percent confidence interval for a relative risk that includes 1.0 suggests what?",
   "opts": [
    "A strong protective effect",
    "A definite harmful effect",
    "No statistically significant association at the 0.05 level",
    "A data entry error occurred"
   ],
   "correct": 2,
   "exp": "When a relative risk confidence interval includes 1.0, the association is not statistically significant at the corresponding level."
  }
 ],
 "Disease Surveillance": [
  {
   "q": "What is the primary purpose of public health disease surveillance?",
   "opts": [
    "To bill patients for services",
    "To rank hospitals for profit",
    "To market pharmaceuticals",
    "To systematically collect, analyze, and use health data for action"
   ],
   "correct": 3,
   "exp": "Surveillance is the ongoing systematic collection, analysis, and interpretation of health data to guide public health action."
  },
  {
   "q": "In the US, which system do providers and labs use to report nationally notifiable conditions to the CDC through states?",
   "opts": [
    "The National Notifiable Diseases Surveillance System (NNDSS)",
    "The Federal Reserve reporting system",
    "The Nielsen ratings",
    "The IRS e-file portal"
   ],
   "correct": 0,
   "exp": "The NNDSS is the CDC-coordinated system through which states report nationally notifiable conditions."
  },
  {
   "q": "A county health department monitors emergency department chief complaints in near real time to detect outbreaks early. This is an example of what?",
   "opts": [
    "Retrospective mortality auditing",
    "Syndromic surveillance",
    "Financial forecasting",
    "Passive annual census counting"
   ],
   "correct": 1,
   "exp": "Syndromic surveillance uses near-real-time indicators like ED chief complaints to detect outbreaks before diagnoses are confirmed."
  }
 ],
 "Health Promotion and Education": [
  {
   "q": "Which behavior change theory describes stages such as precontemplation, contemplation, preparation, action, and maintenance?",
   "opts": [
    "The germ theory of disease",
    "Newton's laws of motion",
    "The Transtheoretical (Stages of Change) Model",
    "Supply and demand theory"
   ],
   "correct": 2,
   "exp": "The Transtheoretical Model describes behavior change as movement through the stages of change."
  },
  {
   "q": "A health educator at a state tobacco program uses the Health Belief Model. Which construct addresses a person's belief about how serious a condition is?",
   "opts": [
    "Regression coefficient",
    "Cash flow",
    "Herd immunity threshold",
    "Perceived severity"
   ],
   "correct": 3,
   "exp": "Perceived severity in the Health Belief Model reflects an individual's belief about the seriousness of a health condition."
  },
  {
   "q": "Which strategy best reflects a health promotion approach rather than only clinical treatment?",
   "opts": [
    "A community campaign encouraging physical activity and healthy eating",
    "Prescribing medication after illness only",
    "Performing emergency surgery",
    "Billing insurance companies"
   ],
   "correct": 0,
   "exp": "Health promotion emphasizes prevention and community strategies, such as campaigns encouraging healthy behaviors, over treatment alone."
  }
 ],
 "Health Systems and Policy": [
  {
   "q": "Which US program primarily provides health coverage for people aged 65 and older?",
   "opts": [
    "Medicaid",
    "Medicare",
    "The SNAP program",
    "The Peace Corps"
   ],
   "correct": 1,
   "exp": "Medicare is the federal program that provides health insurance primarily to people aged 65 and older."
  },
  {
   "q": "The 2010 US law that expanded insurance coverage and included prevention provisions is commonly known as what?",
   "opts": [
    "The Sherman Antitrust Act",
    "The Clean Air Act",
    "The Affordable Care Act (ACA)",
    "The Homestead Act"
   ],
   "correct": 2,
   "exp": "The Affordable Care Act of 2010 expanded insurance coverage and included several public health and prevention provisions."
  },
  {
   "q": "In the UK, which organization delivers publicly funded health care to residents?",
   "opts": [
    "The FDA",
    "The Federal Reserve",
    "The World Trade Organization",
    "The National Health Service (NHS)"
   ],
   "correct": 3,
   "exp": "The National Health Service provides publicly funded health care across the United Kingdom."
  }
 ],
 "Environmental and Occupational Health": [
  {
   "q": "Which US federal agency sets and enforces standards to protect workers from job-related hazards?",
   "opts": [
    "The Occupational Safety and Health Administration (OSHA)",
    "The Federal Communications Commission",
    "The National Park Service",
    "The Securities and Exchange Commission"
   ],
   "correct": 0,
   "exp": "OSHA sets and enforces workplace safety and health standards to protect US workers."
  },
  {
   "q": "A childhood lead exposure investigation in an older US city most often points to which primary source?",
   "opts": [
    "Modern LED light bulbs",
    "Lead-based paint in older housing",
    "Bottled spring water",
    "Solar panels"
   ],
   "correct": 1,
   "exp": "Deteriorating lead-based paint in older housing remains a leading source of childhood lead exposure in the US."
  },
  {
   "q": "Which US agency is chiefly responsible for regulating air and water quality to protect public health?",
   "opts": [
    "The Department of Education",
    "NASA",
    "The Environmental Protection Agency (EPA)",
    "The Postal Service"
   ],
   "correct": 2,
   "exp": "The EPA regulates air and water quality and other environmental exposures to protect public health in the US."
  }
 ],
 "Global Health and One Health": [
  {
   "q": "The One Health approach emphasizes the connection among which domains?",
   "opts": [
    "Only human hospital care",
    "Banking, retail, and manufacturing",
    "Sports, music, and film",
    "Human, animal, and environmental health"
   ],
   "correct": 3,
   "exp": "One Health recognizes the interconnection of human, animal, and environmental health in addressing shared threats."
  },
  {
   "q": "Which agency serves as the United Nations directing authority on international health?",
   "opts": [
    "The World Health Organization (WHO)",
    "The International Monetary Fund",
    "The World Bank Group",
    "UNESCO"
   ],
   "correct": 0,
   "exp": "The World Health Organization is the UN agency that directs and coordinates international health work."
  },
  {
   "q": "A disease that can spread between animals and humans, a key One Health concern, is called what?",
   "opts": [
    "A chronic non-communicable disease",
    "A zoonotic disease",
    "A genetic disorder",
    "An occupational injury"
   ],
   "correct": 1,
   "exp": "Zoonotic diseases spread between animals and humans and are a central focus of the One Health approach."
  }
 ],
 "Writing a Public Health CV": [
  {
   "q": "You are applying to a private-sector epidemiologist role at a US biotech company in Boston. Which document format is generally most appropriate?",
   "opts": [
    "A federal-style resume with hours worked per position",
    "A multi-page academic CV listing every conference poster",
    "A concise one-to-two page resume tailored to the job",
    "A narrative personal essay with no headings"
   ],
   "correct": 2,
   "exp": "For most US private-sector jobs, a concise one-to-two page tailored resume is the standard expectation, unlike the longer academic CV."
  },
  {
   "q": "When applying through USAJOBS for a CDC federal position, how does the expected resume differ from a typical private-sector resume?",
   "opts": [
    "It must be under one page with no dates",
    "It must be written entirely in the third person",
    "It should omit all quantifiable achievements",
    "It should include detailed information like hours per week, salary, and supervisor contacts"
   ],
   "correct": 3,
   "exp": "Federal resumes on USAJOBS are typically longer and require details such as hours per week, salary, and supervisor information to meet HR screening rules."
  },
  {
   "q": "Which bullet point best demonstrates impact on a public health resume?",
   "opts": [
    "Analyzed surveillance data for 12 counties, reducing reporting lag from 10 to 3 days",
    "Worked on various immunization projects",
    "Responsible for data entry tasks",
    "Attended weekly team meetings"
   ],
   "correct": 0,
   "exp": "Strong resume bullets pair an action verb with a quantified, specific outcome rather than vague duty statements."
  }
 ],
 "Writing a Cover Letter": [
  {
   "q": "What is the primary purpose of a cover letter accompanying an application for a county epidemiologist position?",
   "opts": [
    "To repeat the resume word for word",
    "To connect your specific skills and motivation to that role and employer",
    "To provide salary demands only",
    "To list personal hobbies unrelated to the job"
   ],
   "correct": 1,
   "exp": "A cover letter should tailor and connect your qualifications and motivation to the specific role, not simply duplicate the resume."
  },
  {
   "q": "You are writing a cover letter for a posting at the Los Angeles County Department of Public Health. What is the best way to address it?",
   "opts": [
    "Hey team",
    "To Whom It May Concern with no research",
    "Dear Hiring Manager or the named hiring contact if listed in the posting",
    "Dear Sir, assuming the reader is male"
   ],
   "correct": 2,
   "exp": "Addressing the named contact when available, or a professional Dear Hiring Manager, shows attention and avoids outdated or presumptive greetings."
  },
  {
   "q": "A strong opening paragraph in a public health cover letter should typically do what?",
   "opts": [
    "Apologize for lacking experience",
    "List every course you took in graduate school",
    "Describe your entire work history chronologically",
    "State the position you are applying for and a compelling reason you are a strong fit"
   ],
   "correct": 3,
   "exp": "An effective opening names the role and immediately signals your fit or enthusiasm to hook the reader."
  }
 ],
 "Personal Statements and Motivation Letters": [
  {
   "q": "For an MPH program application in the US or a UK NHS scheme, what is the main goal of a personal statement?",
   "opts": [
    "To convey your motivation, relevant experiences, and goals in a coherent narrative",
    "To list references only",
    "To restate your transcript grades",
    "To provide a bulleted skills matrix"
   ],
   "correct": 0,
   "exp": "A personal statement is a narrative that communicates your motivation, formative experiences, and future goals rather than data already in your application."
  },
  {
   "q": "Which approach makes a personal statement most memorable and credible?",
   "opts": [
    "Using generic phrases like passionate about helping people",
    "Opening with a specific experience that shaped your commitment to public health",
    "Listing awards without context",
    "Copying a template found online verbatim"
   ],
   "correct": 1,
   "exp": "A specific, authentic anecdote is more persuasive and distinctive than generic claims of passion."
  },
  {
   "q": "When tailoring a motivation letter for a WHO internship, you should primarily emphasize what?",
   "opts": [
    "How the role will simply advance your salary",
    "Your unrelated personal preferences",
    "Alignment between your goals and the organization's mission and the specific role",
    "A demand for a permanent position"
   ],
   "correct": 2,
   "exp": "Motivation letters are strongest when they show clear alignment between your aspirations and the organization's mission and the specific opportunity."
  }
 ],
 "Building a Professional Portfolio": [
  {
   "q": "What is the main benefit of a public health professional portfolio when applying for a data-focused role?",
   "opts": [
    "It replaces the need for any resume",
    "It is only useful for graphic designers",
    "It guarantees a job offer",
    "It provides concrete evidence of your skills through samples like dashboards, reports, or briefs"
   ],
   "correct": 3,
   "exp": "A portfolio offers tangible proof of your abilities through work samples, complementing the claims made in a resume."
  },
  {
   "q": "Before including a data analysis project from a past internship in your public portfolio, what must you do?",
   "opts": [
    "Ensure no confidential or personally identifiable information is disclosed",
    "Remove all mention of methods used",
    "Post the raw identifiable patient data",
    "Add fake results to look impressive"
   ],
   "correct": 0,
   "exp": "Protecting confidentiality and removing personally identifiable information is essential before sharing any work sample publicly."
  },
  {
   "q": "Which platform is commonly used to host a free public health portfolio or code samples?",
   "opts": [
    "A private diary app",
    "A personal website, GitHub, or RPubs",
    "A gaming console profile",
    "A supermarket loyalty account"
   ],
   "correct": 1,
   "exp": "Personal websites, GitHub, and RPubs are standard, accessible venues for sharing professional portfolios and code."
  }
 ],
 "Creating a Strong LinkedIn Profile": [
  {
   "q": "What should the LinkedIn headline of a public health graduate ideally communicate?",
   "opts": [
    "A random inspirational quote with no context",
    "Only the word Unemployed",
    "A clear value proposition such as your role, specialty, or aspirations",
    "Your home address"
   ],
   "correct": 2,
   "exp": "The headline is prime real estate and should signal your professional identity and value, not a generic label."
  },
  {
   "q": "To improve discoverability by recruiters at organizations like CDC or Kaiser Permanente, you should do what on LinkedIn?",
   "opts": [
    "Leave the About and Experience sections blank",
    "Disable your profile entirely",
    "Use only images with no text",
    "Include relevant keywords such as epidemiology, biostatistics, or program evaluation"
   ],
   "correct": 3,
   "exp": "Recruiters search by keywords, so incorporating relevant public health terms increases the chance your profile appears in results."
  },
  {
   "q": "Which practice most strengthens the credibility of a LinkedIn profile?",
   "opts": [
    "Requesting skill endorsements and recommendations from colleagues and supervisors",
    "Removing your profile photo",
    "Connecting only with celebrities",
    "Listing false certifications"
   ],
   "correct": 0,
   "exp": "Endorsements and written recommendations from real colleagues add social proof and credibility to your stated skills."
  }
 ],
 "References and Recommendation Letters": [
  {
   "q": "What is the professional best practice before listing someone as a reference for a state health department job?",
   "opts": [
    "Never contact them and hope they respond well",
    "Ask their permission and confirm they can speak positively about your work",
    "Only use family members",
    "List them without their knowledge to save time"
   ],
   "correct": 1,
   "exp": "You should always ask permission and confirm a reference can speak favorably before providing their contact to an employer."
  },
  {
   "q": "Who typically makes the strongest reference for an early-career public health role?",
   "opts": [
    "A celebrity you admire",
    "A childhood friend with no professional link",
    "A former supervisor or professor familiar with your relevant work",
    "A random LinkedIn connection"
   ],
   "correct": 2,
   "exp": "References who directly observed your relevant professional or academic performance can speak most credibly to your abilities."
  },
  {
   "q": "When requesting a recommendation letter for a fellowship, how can you help your recommender write a strong letter?",
   "opts": [
    "Give them no information and a same-day deadline",
    "Write it yourself and forge their signature",
    "Ask them to exaggerate your accomplishments",
    "Provide your resume, the role details, and points you hope they can highlight"
   ],
   "correct": 3,
   "exp": "Supplying context such as your resume, the opportunity, and relevant achievements helps recommenders write a specific, compelling letter."
  }
 ],
 "Where to Find Public Health Jobs": [
  {
   "q": "Which platform is the primary source for US federal public health positions at agencies like CDC and NIH?",
   "opts": [
    "USAJOBS",
    "A personal blog",
    "A local newspaper classifieds only",
    "A grocery bulletin board"
   ],
   "correct": 0,
   "exp": "USAJOBS is the official portal for nearly all US federal government job openings, including public health agencies."
  },
  {
   "q": "A new MPH graduate seeking local governmental public health roles in the US should check which specialized resource?",
   "opts": [
    "A gaming forum",
    "The NACCHO job board and APHA Career Mart",
    "A weather service site",
    "A food delivery app"
   ],
   "correct": 1,
   "exp": "NACCHO and APHA Career Mart specifically aggregate public health positions, including many at local and state agencies."
  },
  {
   "q": "Which platform is widely used to find international development and global health job postings?",
   "opts": [
    "A retail coupon site",
    "A local pizza shop website",
    "Devex",
    "A music streaming app"
   ],
   "correct": 2,
   "exp": "Devex is a leading platform for global development and international public health career opportunities."
  }
 ],
 "Working with NGOs and INGOs": [
  {
   "q": "What distinguishes an INGO from a domestic NGO?",
   "opts": [
    "INGOs are always government agencies",
    "There is no difference at all",
    "NGOs never receive donor funding",
    "INGOs operate across multiple countries while NGOs may be nationally focused"
   ],
   "correct": 3,
   "exp": "An international NGO operates across multiple countries, whereas many NGOs are focused within a single nation."
  },
  {
   "q": "Which of the following is an example of a large public health INGO a US graduate might apply to?",
   "opts": [
    "Doctors Without Borders (MSF) or PATH",
    "A local coffee chain",
    "The US Postal Service",
    "A regional bank"
   ],
   "correct": 0,
   "exp": "Organizations such as MSF and PATH are well-known international NGOs engaged in global public health work."
  },
  {
   "q": "When tailoring an application for an NGO monitoring and evaluation role, you should emphasize what?",
   "opts": [
    "Hobbies unrelated to the mission",
    "Relevant M and E, data, and program experience aligned to the organization's mission",
    "Your dislike of teamwork",
    "Only your salary expectations"
   ],
   "correct": 1,
   "exp": "NGO applications are strongest when they highlight relevant technical experience and alignment with the organization's mission."
  }
 ],
 "Ministry of Health and Government Roles": [
  {
   "q": "In the United States, which agency leads national disease surveillance and prevention, comparable to a national ministry of health function?",
   "opts": [
    "The Department of Transportation",
    "The Federal Reserve",
    "The Centers for Disease Control and Prevention (CDC) under HHS",
    "The Environmental Protection Agency only"
   ],
   "correct": 2,
   "exp": "The CDC, part of the Department of Health and Human Services, leads US disease surveillance, prevention, and response."
  },
  {
   "q": "Which is the UK equivalent agency responsible for health protection and public health functions?",
   "opts": [
    "The Bank of England",
    "The BBC",
    "Transport for London",
    "The UK Health Security Agency (UKHSA)"
   ],
   "correct": 3,
   "exp": "UKHSA is the UK agency responsible for health protection and much of the public health response, alongside the NHS."
  },
  {
   "q": "A graduate seeking a local governmental public health role in the US would most likely apply to which type of employer?",
   "opts": [
    "A state or county health department",
    "A software startup unrelated to health",
    "A private airline",
    "A national retail chain"
   ],
   "correct": 0,
   "exp": "State and county health departments are the primary local governmental employers of public health professionals in the US."
  }
 ],
 "WHO, UN and International Agencies": [
  {
   "q": "The World Health Organization (WHO) is a specialized agency of which larger body?",
   "opts": [
    "The European Central Bank",
    "The United Nations",
    "The World Trade Organization",
    "NATO"
   ],
   "correct": 1,
   "exp": "WHO is the specialized health agency of the United Nations system."
  },
  {
   "q": "Which portal would a candidate use to find official WHO and UN vacancies?",
   "opts": [
    "A personal social feed",
    "A local classifieds paper",
    "The WHO careers site and the UN Careers portal",
    "A gaming marketplace"
   ],
   "correct": 2,
   "exp": "Official WHO careers and UN Careers portals list verified vacancies for these international agencies."
  },
  {
   "q": "UN and WHO professional postings often require which of the following?",
   "opts": [
    "Only a high school diploma with no experience",
    "A membership in a sports club",
    "No qualifications at all",
    "Relevant advanced education, work experience, and often language and international competencies"
   ],
   "correct": 3,
   "exp": "Professional roles at WHO and the UN typically require advanced qualifications, relevant experience, and sometimes language skills."
  }
 ],
 "Fellowships, Internships and Volunteering": [
  {
   "q": "Which prestigious US fellowship trains applied epidemiologists through CDC?",
   "opts": [
    "The Epidemic Intelligence Service (EIS)",
    "A local book club fellowship",
    "A frequent flyer program",
    "A retail management trainee scheme"
   ],
   "correct": 0,
   "exp": "The CDC Epidemic Intelligence Service is a renowned two-year applied epidemiology fellowship in the US."
  },
  {
   "q": "What is a key career benefit of completing a public health internship or volunteer placement?",
   "opts": [
    "Guaranteed lifetime employment",
    "Gaining practical experience, skills, and professional connections",
    "Immediate executive-level pay",
    "Avoiding any real work"
   ],
   "correct": 1,
   "exp": "Internships and volunteering build hands-on experience, skills, and networks that strengthen future job applications."
  },
  {
   "q": "A graduate interested in a paid global health fellowship might explore which type of program?",
   "opts": [
    "A supermarket points scheme",
    "A car rental loyalty tier",
    "The Global Health Corps or a university-based fellowship",
    "A streaming service trial"
   ],
   "correct": 2,
   "exp": "Programs such as Global Health Corps and university fellowships offer structured, often paid entry points into global health careers."
  }
 ],
 "Networking for Public Health Professionals": [
  {
   "q": "What is the most effective mindset for professional networking as a public health graduate?",
   "opts": [
    "Only reaching out when you urgently need a favor",
    "Avoiding all professional events",
    "Collecting contacts you never engage with",
    "Building genuine, mutually beneficial relationships over time"
   ],
   "correct": 3,
   "exp": "Effective networking centers on cultivating authentic, reciprocal relationships rather than transactional last-minute requests."
  },
  {
   "q": "Attending which type of event would best expand a US public health graduate's professional network?",
   "opts": [
    "The APHA Annual Meeting or a state public health association conference",
    "An unrelated hobby meetup only",
    "A private family dinner",
    "A closed event with no public health professionals"
   ],
   "correct": 0,
   "exp": "Professional conferences like the APHA Annual Meeting connect you directly with public health peers and potential employers."
  },
  {
   "q": "What is a good practice after an informational interview with a public health professional?",
   "opts": [
    "Never follow up",
    "Send a thank-you note and stay in respectful periodic contact",
    "Share their private details publicly",
    "Immediately demand a job offer"
   ],
   "correct": 1,
   "exp": "A timely thank-you and respectful ongoing contact sustains the relationship and leaves a positive impression."
  }
 ],
 "Using Job Boards and Alerts": [
  {
   "q": "What is the main advantage of setting up job alerts on platforms like Indeed or LinkedIn?",
   "opts": [
    "They guarantee interviews",
    "They automatically apply to jobs for you",
    "They notify you promptly of new postings matching your criteria",
    "They delete unrelated jobs from the internet"
   ],
   "correct": 2,
   "exp": "Job alerts save time by proactively notifying you of new relevant postings so you can apply early."
  },
  {
   "q": "To get the most relevant results from a public health job board, you should do what?",
   "opts": [
    "Use no keywords and browse randomly",
    "Search once and never adjust your terms",
    "Only search for the highest salaries regardless of fit",
    "Use targeted keywords, location filters, and relevant categories"
   ],
   "correct": 3,
   "exp": "Refining searches with specific keywords, locations, and filters surfaces the most relevant and applicable roles."
  },
  {
   "q": "Which combination of resources would best cover a US graduate's public health job search?",
   "opts": [
    "USAJOBS, APHA Career Mart, NACCHO, and LinkedIn or Indeed",
    "A single expired posting from years ago",
    "Only one obscure personal blog",
    "Word of mouth with no online search"
   ],
   "correct": 0,
   "exp": "Combining federal, association, and general boards like USAJOBS, APHA Career Mart, NACCHO, and LinkedIn maximizes coverage of relevant openings."
  }
 ],
 "Preparing for a Public Health Interview": [
  {
   "q": "You have a phone screen for an epidemiologist role at a state health department. Which preparation step best demonstrates genuine interest in the organization?",
   "opts": [
    "Memorizing the full text of the job posting word for word",
    "Reviewing the department's recent disease surveillance reports and strategic plan",
    "Preparing to ask what the salary ceiling is in the first five minutes",
    "Reading only the department's homepage the night before"
   ],
   "correct": 1,
   "exp": "Studying an organization's recent reports and strategic priorities lets you connect your skills to its actual work and signals sincere interest."
  },
  {
   "q": "When researching a prospective employer like the CDC before an interview, which source gives the most reliable picture of current programmatic priorities?",
   "opts": [
    "Anonymous comments on a job-review website",
    "A competitor's marketing brochure",
    "The agency's official published reports, MMWR articles, and press releases",
    "A ten-year-old textbook chapter"
   ],
   "correct": 2,
   "exp": "Official reports and current publications reflect an agency's real, up-to-date priorities more accurately than secondhand or dated sources."
  },
  {
   "q": "What is the primary purpose of preparing thoughtful questions to ask your interviewers?",
   "opts": [
    "To fill silence so the interview ends faster",
    "To avoid having to answer their questions",
    "To prove you know more than the hiring manager",
    "To show engagement, assess fit, and clarify the role and team"
   ],
   "correct": 3,
   "exp": "Well-crafted questions demonstrate engagement and help you evaluate whether the role and team are a good mutual fit."
  }
 ],
 "Common Interview Questions and Answers": [
  {
   "q": "An interviewer at an NIH-funded research center asks, \"Tell me about yourself.\" What is the strongest approach?",
   "opts": [
    "Give a concise present-past-future summary tailored to the public health role",
    "Recite your entire life history from childhood onward",
    "List every job you have ever held with exact dates",
    "Explain in detail why you left your last position"
   ],
   "correct": 0,
   "exp": "A focused present-past-future narrative relevant to the position keeps the answer concise and on point."
  },
  {
   "q": "When asked \"What is your greatest weakness?\" in a county health department interview, which response is most effective?",
   "opts": [
    "\"I have no real weaknesses.\"",
    "Naming a genuine area and describing concrete steps you take to improve it",
    "\"I am a perfectionist,\" with no further detail",
    "Listing a weakness that is central to the job's core duties"
   ],
   "correct": 1,
   "exp": "Naming a real but non-disqualifying weakness plus your improvement steps shows honesty and self-awareness."
  },
  {
   "q": "How should you best answer \"Why do you want to work here?\" for a US hospital's community health program?",
   "opts": [
    "\"I need a job and you are hiring.\"",
    "\"Your office is close to my apartment.\"",
    "Connect the organization's mission and programs to your skills and goals",
    "\"The benefits package looked good online.\""
   ],
   "correct": 2,
   "exp": "Linking the employer's specific mission and programs to your own skills and goals shows real motivation and fit."
  }
 ],
 "Behavioral (STAR) Interviews": [
  {
   "q": "In the STAR method used in behavioral interviews, what do the four letters stand for?",
   "opts": [
    "Story, Theme, Argument, Resolution",
    "Strategy, Timeline, Analysis, Report",
    "Setup, Target, Approach, Review",
    "Situation, Task, Action, Result"
   ],
   "correct": 3,
   "exp": "STAR stands for Situation, Task, Action, and Result, structuring answers around a concrete example."
  },
  {
   "q": "A candidate answering a STAR question for a CDC program analyst role spends most of the time on the Situation and never states the outcome. What is the main problem?",
   "opts": [
    "The Result is missing, so impact cannot be judged",
    "Too much detail about their own actions",
    "They used the first person too often",
    "The Task was described too briefly"
   ],
   "correct": 0,
   "exp": "Without the Result, the interviewer cannot gauge the impact or effectiveness of the candidate's actions."
  },
  {
   "q": "Which prompt is a classic behavioral interview question best answered with STAR?",
   "opts": [
    "\"What is the incubation period of measles?\"",
    "\"Tell me about a time you handled conflict on a project team.\"",
    "\"What software do you know?\"",
    "\"Are you available to start in two weeks?\""
   ],
   "correct": 1,
   "exp": "Behavioral questions ask for a specific past example, which the STAR structure is designed to organize."
  }
 ],
 "Technical and Case Interviews": [
  {
   "q": "In a case interview for an epidemiologist position, you are asked to investigate a sudden rise in reported salmonella cases in a US county. What is the best first step?",
   "opts": [
    "Immediately recommend closing all restaurants in the county",
    "Guess the source based on the most common cause nationally",
    "Clarify the question, define the case, and outline a structured approach",
    "State that more data is impossible to obtain"
   ],
   "correct": 2,
   "exp": "Clarifying scope and laying out a structured, hypothesis-driven approach shows sound analytic thinking before jumping to conclusions."
  },
  {
   "q": "During a technical interview, you are unsure of the exact formula for a rate. What is the most professional response?",
   "opts": [
    "Confidently state a wrong formula as if it were correct",
    "Claim the question is unfair and irrelevant",
    "Refuse to answer and change the subject",
    "Explain your reasoning, note your uncertainty, and work toward the answer"
   ],
   "correct": 3,
   "exp": "Showing your reasoning transparently while acknowledging uncertainty demonstrates integrity and problem-solving ability."
  },
  {
   "q": "A technical interviewer asks you to interpret an odds ratio of 2.5 from a case-control study. Which interpretation is correct?",
   "opts": [
    "The odds of exposure are 2.5 times higher among cases than controls",
    "The exposure is 2.5 times more common overall",
    "There is a 2.5 percent chance of disease",
    "The study proves the exposure causes the disease"
   ],
   "correct": 0,
   "exp": "An odds ratio of 2.5 means the odds of the exposure are 2.5 times higher in cases than in controls, indicating an association, not proof of causation."
  }
 ],
 "Virtual and Panel Interviews": [
  {
   "q": "You have a Zoom panel interview with four staff from an NIH research institute. What is the best practice for eye contact?",
   "opts": [
    "Stare only at your own video thumbnail",
    "Look toward the camera when speaking rather than at the screen",
    "Close your eyes to concentrate on the questions",
    "Look out the window to appear thoughtful"
   ],
   "correct": 1,
   "exp": "Looking into the camera when you speak simulates eye contact with the panel on the other end."
  },
  {
   "q": "During a panel interview, several interviewers take turns asking questions. What is the recommended way to respond?",
   "opts": [
    "Answer only the panel chair and ignore the others",
    "Ask the panel to submit all questions in writing first",
    "Address the person who asked, then briefly include the whole panel",
    "Direct every answer to the most senior-looking person"
   ],
   "correct": 2,
   "exp": "Acknowledging the questioner while engaging the full panel shows respect and inclusiveness toward all members."
  },
  {
   "q": "What is a smart technical precaution before a virtual interview for a remote data analyst role?",
   "opts": [
    "Rely on public Wi-Fi at a busy cafe",
    "Use a decorative animated background to stand out",
    "Skip any test and troubleshoot live if problems arise",
    "Test your camera, microphone, internet, and the platform in advance"
   ],
   "correct": 3,
   "exp": "Testing your equipment and connection beforehand prevents avoidable technical failures during the interview."
  }
 ],
 "Salary Negotiation": [
  {
   "q": "You receive an offer for a state epidemiologist role. Before naming a number, what should you research?",
   "opts": [
    "Market salary ranges via BLS data and sites like Glassdoor for the role and region",
    "Only what your friend earns in an unrelated industry",
    "The interviewer's personal salary",
    "Nothing; accept the first figure offered"
   ],
   "correct": 0,
   "exp": "Grounding your target in market data such as BLS figures and regional benchmarks gives your negotiation credibility."
  },
  {
   "q": "A county health department offers you 68,000 USD, but comparable roles pay 74,000 to 82,000 USD. What is a strong negotiation move?",
   "opts": [
    "Accept 68,000 USD immediately to seem agreeable",
    "Counter with a specific figure in the market range, justified by your experience",
    "Reject the offer without any counterproposal",
    "Demand 120,000 USD with no supporting rationale"
   ],
   "correct": 1,
   "exp": "A specific, market-justified counteroffer supported by your qualifications is the most effective negotiation approach."
  },
  {
   "q": "Beyond base salary, which of these is a legitimate element to negotiate in a US public health job offer?",
   "opts": [
    "The number of colleagues you will supervise involuntarily",
    "The organization's overall annual budget",
    "Remote work flexibility, professional development funds, or start date",
    "Which building the CEO works in"
   ],
   "correct": 2,
   "exp": "Benefits such as remote flexibility, training funds, and start date are commonly negotiable components of a total compensation package."
  }
 ],
 "Following Up After an Interview": [
  {
   "q": "You finish an interview at an academic public health center on Tuesday. When is it best to send a thank-you email?",
   "opts": [
    "Never; follow-ups seem desperate",
    "Exactly three weeks later",
    "Only after they contact you first",
    "Within about 24 hours of the interview"
   ],
   "correct": 3,
   "exp": "A prompt thank-you email within roughly 24 hours reinforces your interest while you are fresh in the interviewers' minds."
  },
  {
   "q": "What should a strong post-interview thank-you note include?",
   "opts": [
    "A specific reference to something discussed and reaffirmed interest",
    "A demand for an immediate hiring decision",
    "A copy of your full resume pasted again in the body",
    "Complaints about a question you found difficult"
   ],
   "correct": 0,
   "exp": "Referencing a specific discussion point personalizes the note and reaffirms your genuine interest in the role."
  },
  {
   "q": "Two weeks pass with no decision after the employer said they would decide in one week. What is the appropriate action?",
   "opts": [
    "Call the hiring manager repeatedly until they answer",
    "Send a polite follow-up email inquiring about the timeline",
    "Show up in person at their office unannounced",
    "Post publicly that the employer is unprofessional"
   ],
   "correct": 1,
   "exp": "A single polite follow-up after the stated timeline has passed is professional and appropriate."
  }
 ],
 "Monitoring and Evaluation (M&E)": [
  {
   "q": "In an M&E framework for a CDC-funded program, what is the key difference between an output and an outcome?",
   "opts": [
    "Outputs are long-term; outcomes are immediate deliverables",
    "They are interchangeable terms",
    "Outputs are direct products of activities; outcomes are the changes that result",
    "Outputs measure funding; outcomes measure staff count"
   ],
   "correct": 2,
   "exp": "Outputs are the immediate products of activities, while outcomes are the resulting changes in knowledge, behavior, or health status."
  },
  {
   "q": "A logic model for a state immunization program lists inputs, activities, outputs, outcomes, and impact. Where do vaccines, staff, and funding belong?",
   "opts": [
    "Outputs",
    "Outcomes",
    "Impact",
    "Inputs"
   ],
   "correct": 3,
   "exp": "Resources such as vaccines, staff, and funding are inputs that feed the program's activities."
  },
  {
   "q": "Which characteristic makes an M&E indicator SMART?",
   "opts": [
    "It is Specific, Measurable, Achievable, Relevant, and Time-bound",
    "It is vague enough to always look successful",
    "It changes definition every reporting period",
    "It can only be measured after the program ends"
   ],
   "correct": 0,
   "exp": "SMART indicators are Specific, Measurable, Achievable, Relevant, and Time-bound, enabling clear and consistent tracking."
  }
 ],
 "Project and Program Management": [
  {
   "q": "A program manager at a US nonprofit uses a Gantt chart. What does it primarily display?",
   "opts": [
    "The organization's financial audit results",
    "Tasks, durations, and their scheduling over a timeline",
    "The office seating arrangement",
    "Staff performance reviews"
   ],
   "correct": 1,
   "exp": "A Gantt chart visualizes project tasks, their durations, and how they are scheduled across a timeline."
  },
  {
   "q": "In managing a grant-funded health project, what does the term \"scope creep\" refer to?",
   "opts": [
    "Reducing the budget mid-project",
    "Hiring additional staff on schedule",
    "Uncontrolled expansion of project deliverables beyond the original plan",
    "Completing tasks ahead of deadline"
   ],
   "correct": 2,
   "exp": "Scope creep is the uncontrolled growth of a project's deliverables beyond what was originally agreed, threatening timelines and budgets."
  },
  {
   "q": "Which document typically defines a project's objectives, stakeholders, timeline, and authority at the outset?",
   "opts": [
    "The final evaluation report",
    "The exit interview form",
    "The staff payroll ledger",
    "The project charter"
   ],
   "correct": 3,
   "exp": "A project charter formally authorizes the project and defines its objectives, stakeholders, scope, and timeline at the start."
  }
 ],
 "Grant and Proposal Writing": [
  {
   "q": "You are writing an NIH R01 proposal. Which section presents the study's aims and the gap it addresses?",
   "opts": [
    "The Specific Aims page",
    "The budget justification",
    "The biosketch",
    "The facilities and resources statement"
   ],
   "correct": 0,
   "exp": "The Specific Aims page concisely states the research goals and the knowledge gap the project will address."
  },
  {
   "q": "In a CDC-funded grant proposal, what is the purpose of the needs statement?",
   "opts": [
    "To list the organization's past awards",
    "To justify the problem with data showing why the project is necessary",
    "To describe the applicant's office furniture",
    "To thank the reviewers in advance"
   ],
   "correct": 1,
   "exp": "The needs statement uses evidence and data to establish that a genuine problem exists and warrants funding."
  },
  {
   "q": "A reviewer notes your proposal's budget does not match its activities. What is the underlying principle being violated?",
   "opts": [
    "Budgets should always request the maximum allowed",
    "Budgets are irrelevant to scoring",
    "The budget must be justified by and aligned with the proposed activities",
    "Larger budgets are always scored higher"
   ],
   "correct": 2,
   "exp": "A credible budget must align directly with the proposed activities, and each cost should be justified by the work plan."
  }
 ],
 "Report Writing": [
  {
   "q": "In a technical public health report for a state health department, what belongs in the executive summary?",
   "opts": [
    "Every raw data table in full",
    "A detailed literature review with no conclusions",
    "Only the references and appendices",
    "A brief overview of key findings and recommendations"
   ],
   "correct": 3,
   "exp": "An executive summary gives readers a concise overview of the report's main findings and recommendations."
  },
  {
   "q": "You are presenting surveillance data to non-technical county commissioners. Which practice improves clarity?",
   "opts": [
    "Use plain language, clear visuals, and define technical terms",
    "Fill the report with unexplained statistical jargon",
    "Omit all charts to save space",
    "Write in dense paragraphs with no headings"
   ],
   "correct": 0,
   "exp": "Plain language, clear visuals, and defined terms make a report accessible to non-technical decision-makers."
  },
  {
   "q": "Where in a standard research report should the methods used to collect and analyze data be described?",
   "opts": [
    "In the acknowledgments",
    "In the methodology section",
    "In the reference list",
    "In the title"
   ],
   "correct": 1,
   "exp": "The methodology section documents how data were collected and analyzed, allowing readers to assess and reproduce the work."
  }
 ],
 "Data Collection Tools (KoBoToolbox & ODK)": [
  {
   "q": "A team at a university deploys a KoBoToolbox survey on tablets for a household health study. What is a major advantage over paper forms?",
   "opts": [
    "It eliminates the need for any survey design",
    "It guarantees a 100 percent response rate",
    "Built-in skip logic and validation reduce data entry errors",
    "It removes the need for informed consent"
   ],
   "correct": 2,
   "exp": "Digital tools like KoBoToolbox enforce skip logic and validation rules, reducing entry errors and improving data quality."
  },
  {
   "q": "In ODK and KoBoToolbox, what does a \"required\" field constraint do?",
   "opts": [
    "Automatically fills the answer for the enumerator",
    "Translates the question into another language",
    "Deletes the response after submission",
    "Prevents form submission until the question is answered"
   ],
   "correct": 3,
   "exp": "A required constraint blocks form submission until the field is completed, helping ensure no critical data is skipped."
  },
  {
   "q": "Both KoBoToolbox and ODK support offline data collection. Why is this feature valuable?",
   "opts": [
    "Enumerators can collect data without connectivity and sync later",
    "It makes the tablet battery last forever",
    "It encrypts all data using satellite links",
    "It removes the need for a server entirely"
   ],
   "correct": 0,
   "exp": "Offline capability lets field teams collect data where there is no connectivity and upload it once a connection is available."
  }
 ],
 "Data Analysis with Excel and SPSS": [
  {
   "q": "In Excel, which function would you use to count how many survey respondents are older than 65?",
   "opts": [
    "SUM",
    "COUNTIF",
    "CONCATENATE",
    "VLOOKUP"
   ],
   "correct": 1,
   "exp": "COUNTIF counts cells that meet a specified condition, such as ages greater than 65."
  },
  {
   "q": "In SPSS, you want to compare mean systolic blood pressure between two independent groups. Which test is appropriate?",
   "opts": [
    "Pearson correlation only",
    "Chi-square test of independence",
    "Independent-samples t-test",
    "One-sample proportion test"
   ],
   "correct": 2,
   "exp": "An independent-samples t-test compares the means of a continuous variable between two separate groups."
  },
  {
   "q": "Before analysis in SPSS, you find a variable coded 1, 2, and 99 where 99 means \"no response.\" What should you do?",
   "opts": [
    "Leave 99 in so averages stay high",
    "Delete every row containing any 2",
    "Recode all 99s to 1 to simplify",
    "Define 99 as a missing value so it is excluded from analysis"
   ],
   "correct": 3,
   "exp": "Defining 99 as a missing value ensures placeholder codes do not distort statistical calculations."
  }
 ],
 "Community Engagement and Mobilization": [
  {
   "q": "A US county health department launches a diabetes prevention initiative. Why engage community members early in planning?",
   "opts": [
    "To ensure the program reflects local needs and builds ownership",
    "To avoid having to hire any staff",
    "To transfer all liability to residents",
    "To reduce the need for evaluation"
   ],
   "correct": 0,
   "exp": "Early community engagement helps ensure the program fits local needs and fosters ownership that supports sustainability."
  },
  {
   "q": "Which approach best reflects genuine community participation rather than token involvement?",
   "opts": [
    "Informing residents of decisions already finalized",
    "Involving community members in decision-making throughout the project",
    "Inviting residents only to a final celebration event",
    "Collecting signatures without explaining the program"
   ],
   "correct": 1,
   "exp": "Authentic participation means involving community members in decisions across the project rather than merely informing them afterward."
  },
  {
   "q": "In a US city, a health program wants to reach a diverse neighborhood. Which stakeholder engagement strategy is most inclusive?",
   "opts": [
    "Hold all meetings in one language during work hours only",
    "Rely solely on a single social media post",
    "Partner with local organizations and offer accessible meeting times and languages",
    "Consult only the most vocal residents"
   ],
   "correct": 2,
   "exp": "Partnering with local organizations and providing accessible times and languages reaches a broader, more representative group."
  }
 ],
 "Building Data Dashboards": [
  {
   "q": "A county health department builds a Tableau dashboard to track weekly flu cases. What is the main benefit of a dashboard over a static report?",
   "opts": [
    "It permanently locks the data so it cannot change",
    "It automatically writes the annual report narrative",
    "It removes the need to collect accurate data",
    "It presents up-to-date, interactive visuals for faster decision-making"
   ],
   "correct": 3,
   "exp": "Dashboards deliver current, interactive visualizations that help stakeholders monitor trends and make timely decisions."
  },
  {
   "q": "When designing a Power BI dashboard for public health managers, which practice improves usability?",
   "opts": [
    "Highlight key indicators clearly and avoid clutter",
    "Use a different color scheme for every single chart",
    "Hide the date range so it cannot be changed",
    "Cram every available metric onto one crowded screen"
   ],
   "correct": 0,
   "exp": "Focusing on key indicators and reducing clutter makes a dashboard easier to read and act on."
  },
  {
   "q": "A dashboard shows a county's vaccination rate as a single number, 78 percent. Adding what would best give it context?",
   "opts": [
    "A larger font for the number",
    "A comparison to the target goal or trend over time",
    "A decorative background image",
    "A longer title"
   ],
   "correct": 1,
   "exp": "Comparing a metric to a target or showing its trend over time gives viewers the context needed to interpret it."
  }
 ],
 "Scientific and Technical Writing": [
  {
   "q": "In the IMRaD structure used by most peer-reviewed public health journals, which section states what the study found without interpreting why?",
   "opts": [
    "Introduction",
    "Methods",
    "Results",
    "Discussion"
   ],
   "correct": 2,
   "exp": "The Results section reports findings factually, while interpretation and meaning are reserved for the Discussion."
  },
  {
   "q": "You are drafting a manuscript for the American Journal of Public Health and want to reduce wordiness. Which revision best applies plain-language principles?",
   "opts": [
    "Add more Latin abbreviations to sound authoritative",
    "Replace short words with longer technical synonyms",
    "Remove all headings to make the text flow",
    "Change 'utilize' to 'use' and prefer active voice"
   ],
   "correct": 3,
   "exp": "Plain-language editing favors shorter words like 'use' over 'utilize' and active voice for clarity."
  },
  {
   "q": "When citing sources in a CDC report using a numbered reference style, what does the style primarily govern?",
   "opts": [
    "The format and ordering of in-text citations and the reference list",
    "The color scheme of the figures",
    "The statistical tests you must use",
    "The journal impact factor required"
   ],
   "correct": 0,
   "exp": "A citation style such as the numbered Vancouver style standardizes how references appear in-text and in the reference list."
  }
 ],
 "Presenting Data and Findings": [
  {
   "q": "You want to show how childhood vaccination coverage changed across US states from 2015 to 2024. Which visualization is most appropriate?",
   "opts": [
    "A pie chart for each state",
    "A line chart or small-multiples trend over time",
    "A single large data table of every value",
    "A word cloud of state names"
   ],
   "correct": 1,
   "exp": "Line charts or small multiples are best for showing change in a measure over time."
  },
  {
   "q": "According to good data-visualization practice, why should a bar chart's y-axis typically start at zero?",
   "opts": [
    "To make the chart taller",
    "Because software cannot start elsewhere",
    "To avoid exaggerating differences between bar lengths",
    "To hide the smallest category"
   ],
   "correct": 2,
   "exp": "Truncating the y-axis on a bar chart visually exaggerates differences and can mislead the audience."
  },
  {
   "q": "When presenting findings to a non-technical audience at a local health department briefing, the best practice is to:",
   "opts": [
    "Lead with p-values and confidence intervals",
    "Read the methods section aloud in full",
    "Show every regression coefficient",
    "State the key takeaway first, then support it with simple visuals"
   ],
   "correct": 3,
   "exp": "Non-technical audiences are served best by a clear headline message supported by simple, focused visuals."
  }
 ],
 "Writing Policy Briefs": [
  {
   "q": "A policy brief prepared for a state legislature differs from a research article mainly because it:",
   "opts": [
    "Is concise, action-oriented, and written for decision-makers",
    "Contains no evidence at all",
    "Is longer and more technical",
    "Must be peer reviewed before release"
   ],
   "correct": 0,
   "exp": "Policy briefs are short, targeted documents that translate evidence into clear recommendations for decision-makers."
  },
  {
   "q": "Which element is essential in an effective policy brief for a US public health issue?",
   "opts": [
    "A detailed literature review with 100 citations",
    "A clear statement of recommended actions",
    "The author's full CV",
    "Raw survey datasets in an appendix"
   ],
   "correct": 1,
   "exp": "A strong policy brief centers on actionable, clearly stated recommendations for the intended audience."
  },
  {
   "q": "You are writing a one-page brief urging a city council to fund a smoking-cessation program. The executive summary should:",
   "opts": [
    "Bury the recommendation on the last page",
    "List only the methods used",
    "Open with the problem and the recommended action up front",
    "Avoid mentioning cost entirely"
   ],
   "correct": 2,
   "exp": "Decision-makers read the top first, so the problem and recommendation belong up front in the summary."
  }
 ],
 "Public Speaking and Presentations": [
  {
   "q": "You have 10 minutes to present research at the APHA Annual Meeting. A common guideline for slide density is to:",
   "opts": [
    "Fill each slide with dense paragraphs",
    "Use at least 40 slides to look thorough",
    "Read every word on the slide verbatim",
    "Use concise slides with one main idea each and minimal text"
   ],
   "correct": 3,
   "exp": "Effective slides carry one main idea with minimal text so the audience listens rather than reads."
  },
  {
   "q": "Which technique most helps manage nervousness before a keynote presentation?",
   "opts": [
    "Practicing aloud and preparing a strong opening",
    "Skipping any rehearsal to stay spontaneous",
    "Memorizing the talk word-for-word to recite fast",
    "Avoiding eye contact with the audience"
   ],
   "correct": 0,
   "exp": "Rehearsing aloud and mastering the opening builds confidence and reduces anxiety."
  },
  {
   "q": "When fielding a hostile question after a talk, the recommended approach is to:",
   "opts": [
    "Argue aggressively to win",
    "Stay calm, acknowledge the point, and respond respectfully",
    "Ignore the questioner completely",
    "End the session immediately"
   ],
   "correct": 1,
   "exp": "Staying composed and responding respectfully preserves credibility and keeps the discussion productive."
  }
 ],
 "Facilitating Meetings and Trainings": [
  {
   "q": "What is the primary purpose of distributing an agenda before a public health team meeting?",
   "opts": [
    "To satisfy a legal requirement",
    "To replace taking any notes",
    "To set expectations and keep the meeting focused and on time",
    "To ensure only the leader speaks"
   ],
   "correct": 2,
   "exp": "An agenda communicates goals in advance and helps keep discussion focused and on schedule."
  },
  {
   "q": "When facilitating a training for community health workers, active-learning methods are preferred because they:",
   "opts": [
    "Take less preparation than lectures",
    "Guarantee everyone scores 100 percent",
    "Eliminate the need for any content",
    "Improve engagement and retention through practice and interaction"
   ],
   "correct": 3,
   "exp": "Active-learning approaches engage participants and improve how well they retain and apply material."
  },
  {
   "q": "A skilled facilitator handling a dominating participant should:",
   "opts": [
    "Gently redirect and invite quieter members to contribute",
    "Let that person speak the entire time",
    "Cancel the meeting",
    "Publicly criticize the participant"
   ],
   "correct": 0,
   "exp": "Good facilitation balances participation by tactfully redirecting and drawing out quieter voices."
  }
 ],
 "Working with the Media and the Public": [
  {
   "q": "During a disease-outbreak press interview, a key risk-communication principle from CDC guidance is to:",
   "opts": [
    "Speculate freely about worst-case scenarios",
    "Be honest, acknowledge uncertainty, and share what is being done",
    "Refuse to answer any questions",
    "Blame the affected community"
   ],
   "correct": 1,
   "exp": "Effective crisis communication is honest, acknowledges uncertainty, and explains the actions underway."
  },
  {
   "q": "What is a 'message map' as used in public health media training?",
   "opts": [
    "A road map to the newsroom",
    "A social media follower chart",
    "A concise set of key messages and supporting facts prepared in advance",
    "A list of reporters to avoid"
   ],
   "correct": 2,
   "exp": "A message map organizes key messages and supporting facts so spokespeople stay clear and consistent."
  },
  {
   "q": "When a journalist asks about a topic outside your expertise, the best response is to:",
   "opts": [
    "Guess to appear knowledgeable",
    "Demand the question in writing only",
    "Give a long off-topic answer",
    "Acknowledge the limit and offer to connect them with the right expert"
   ],
   "correct": 3,
   "exp": "Staying within your expertise and referring to the right source protects accuracy and credibility."
  }
 ],
 "Continuing Education and Certifications": [
  {
   "q": "The Certified in Public Health (CPH) credential is administered by which US organization?",
   "opts": [
    "The National Board of Public Health Examiners (NBPHE)",
    "The American Medical Association",
    "The World Health Organization",
    "The Federal Reserve"
   ],
   "correct": 0,
   "exp": "The NBPHE develops and administers the CPH credential for public health professionals."
  },
  {
   "q": "Why do many professional credentials, such as the CPH, require continuing education credits to maintain certification?",
   "opts": [
    "To generate revenue only",
    "To ensure practitioners keep their knowledge and skills current",
    "To make renewal impossible",
    "Because the initial exam was invalid"
   ],
   "correct": 1,
   "exp": "Continuing education requirements ensure certified professionals stay current with evolving evidence and practice."
  },
  {
   "q": "An early-career epidemiologist at a state health department wants applied field-epidemiology training. Which US program is the best-known fit?",
   "opts": [
    "A real-estate licensing course",
    "A defensive-driving course",
    "The CDC Epidemic Intelligence Service (EIS)",
    "A CPR-only certification"
   ],
   "correct": 2,
   "exp": "The CDC Epidemic Intelligence Service is the flagship US applied field-epidemiology training program."
  }
 ],
 "Applying for an MPH or PhD Abroad": [
  {
   "q": "Which document lets a US MPH admissions committee judge your motivation, fit, and career goals in your own words?",
   "opts": [
    "The application fee receipt",
    "A passport photo",
    "Your high school transcript only",
    "The statement of purpose or personal statement"
   ],
   "correct": 3,
   "exp": "The statement of purpose is where applicants explain their goals, fit, and motivation to the committee."
  },
  {
   "q": "Which schools are among the top-ranked US graduate programs in public health that an applicant might target?",
   "opts": [
    "Johns Hopkins, Harvard Chan, and Emory",
    "Any program that skips a review",
    "Programs with no accreditation",
    "Only unaccredited online mills"
   ],
   "correct": 0,
   "exp": "Johns Hopkins, Harvard Chan, and Emory are among the leading accredited US schools of public health."
  },
  {
   "q": "A well-funded PhD in public health in the US, UK, Canada, or Australia commonly offers which form of support?",
   "opts": [
    "No funding under any circumstances",
    "Assistantships, fellowships, or stipends that cover tuition and living costs",
    "Only loans with no other aid",
    "Payment required from the student's employer only"
   ],
   "correct": 1,
   "exp": "Funded doctoral programs typically provide assistantships, fellowships, or stipends covering tuition and living costs."
  }
 ],
 "Leadership and Management Skills": [
  {
   "q": "Which statement best distinguishes leadership from management in a public health agency?",
   "opts": [
    "They are identical in every way",
    "Management sets vision; leadership does paperwork",
    "Leadership sets vision and inspires; management organizes resources and execution",
    "Neither involves working with people"
   ],
   "correct": 2,
   "exp": "Leadership focuses on vision and influence, while management focuses on planning, organizing, and executing."
  },
  {
   "q": "A program manager at a local health department delegates a task effectively when they:",
   "opts": [
    "Assign work without any context or authority",
    "Keep the goal secret from the team",
    "Do all the work themselves anyway",
    "Match the task to skills and grant the authority to complete it"
   ],
   "correct": 3,
   "exp": "Effective delegation pairs the right person with the task and gives them the authority and clarity to succeed."
  },
  {
   "q": "Which approach reflects emotionally intelligent leadership during a stressful outbreak response?",
   "opts": [
    "Recognizing team members' stress and supporting them while staying focused",
    "Ignoring team stress to focus only on tasks",
    "Blaming staff publicly for delays",
    "Withholding all information from the team"
   ],
   "correct": 0,
   "exp": "Emotionally intelligent leaders acknowledge and support their team's wellbeing while maintaining focus on goals."
  }
 ],
 "Professional Ethics and Integrity": [
  {
   "q": "In US public health research, an Institutional Review Board (IRB) primarily exists to:",
   "opts": [
    "Increase publication counts",
    "Protect the rights and welfare of human research participants",
    "Approve the study budget only",
    "Choose which journal to submit to"
   ],
   "correct": 1,
   "exp": "IRBs review research to protect the rights, safety, and welfare of human participants."
  },
  {
   "q": "Presenting another author's text or ideas as your own in a manuscript is an example of:",
   "opts": [
    "Peer review",
    "Proper citation",
    "Plagiarism, a serious research-integrity violation",
    "Open-access publishing"
   ],
   "correct": 2,
   "exp": "Using others' words or ideas without attribution is plagiarism, a serious breach of research integrity."
  },
  {
   "q": "A researcher who owns stock in a company whose drug they are studying should:",
   "opts": [
    "Hide the connection to avoid delays",
    "Give the stock to a co-author",
    "Destroy the data",
    "Disclose the conflict of interest to the journal and their institution"
   ],
   "correct": 3,
   "exp": "Financial conflicts of interest must be disclosed so readers and institutions can judge potential bias."
  }
 ],
 "Mentorship: Finding and Being a Mentor": [
  {
   "q": "What is a core characteristic of an effective mentoring relationship?",
   "opts": [
    "Mutual trust with guidance tailored to the mentee's goals",
    "No communication between meetings",
    "The mentor makes every decision for the mentee",
    "The mentee never asks questions"
   ],
   "correct": 0,
   "exp": "Effective mentoring rests on trust and guidance shaped around the mentee's own goals and growth."
  },
  {
   "q": "An MPH student seeking a mentor at a US university should generally:",
   "opts": [
    "Wait to be assigned one and take no initiative",
    "Identify faculty whose work aligns with their interests and reach out professionally",
    "Choose based only on who is most famous",
    "Avoid faculty entirely"
   ],
   "correct": 1,
   "exp": "Proactively approaching faculty whose interests align with yours is the most effective way to find a mentor."
  },
  {
   "q": "When you become a mentor to a junior colleague, a key responsibility is to:",
   "opts": [
    "Take credit for their work",
    "Limit their growth to protect your position",
    "Provide honest, constructive feedback and open opportunities",
    "Only meet once a year with no follow-up"
   ],
   "correct": 2,
   "exp": "Good mentors give honest feedback and actively help create opportunities for their mentees to grow."
  }
 ],
 "Work-Life Balance and Avoiding Burnout": [
  {
   "q": "Which set of symptoms best characterizes professional burnout?",
   "opts": [
    "Increased energy and enthusiasm",
    "Improved concentration and sleep",
    "Higher job satisfaction",
    "Emotional exhaustion, cynicism, and reduced sense of accomplishment"
   ],
   "correct": 3,
   "exp": "Burnout is defined by emotional exhaustion, cynicism or detachment, and a reduced sense of accomplishment."
  },
  {
   "q": "An evidence-based strategy for preventing burnout among public health workers is to:",
   "opts": [
    "Set boundaries, take recovery time, and build social support",
    "Work longer hours without breaks",
    "Skip all vacation days",
    "Avoid asking for help"
   ],
   "correct": 0,
   "exp": "Setting boundaries, allowing recovery, and drawing on social support are effective ways to reduce burnout risk."
  },
  {
   "q": "A supervisor who notices a team member showing signs of burnout should first:",
   "opts": [
    "Assign them more work to distract them",
    "Check in privately and discuss workload and support options",
    "Ignore it and hope it resolves",
    "Publicly announce the problem to the team"
   ],
   "correct": 1,
   "exp": "A supportive private conversation about workload and available resources is the appropriate first response."
  }
 ],
 "Building a Lasting Professional Network": [
  {
   "q": "Attending the APHA Annual Meeting is valuable for networking mainly because it:",
   "opts": [
    "Guarantees a job offer on the spot",
    "Replaces the need for any qualifications",
    "Connects you with peers, mentors, and potential collaborators in your field",
    "Is only useful for socializing, not careers"
   ],
   "correct": 2,
   "exp": "Professional conferences like APHA build connections with peers, mentors, and potential collaborators."
  },
  {
   "q": "Which practice best sustains a professional network over time?",
   "opts": [
    "Contacting people only when you need a favor",
    "Connecting online but never engaging",
    "Collecting business cards and never following up",
    "Staying in touch, offering help, and maintaining genuine relationships"
   ],
   "correct": 3,
   "exp": "Lasting networks are sustained by genuine, reciprocal relationships rather than one-sided requests."
  },
  {
   "q": "For a public health professional, what makes a platform like LinkedIn useful for networking?",
   "opts": [
    "It lets you maintain professional connections and share relevant work",
    "It automatically finds you a job",
    "It replaces in-person relationships entirely",
    "It is only for job hunting when unemployed"
   ],
   "correct": 0,
   "exp": "LinkedIn helps professionals maintain connections and share work, complementing in-person networking."
  }
 ]
};

})();
