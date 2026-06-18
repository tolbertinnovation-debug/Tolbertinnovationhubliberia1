#!/usr/bin/env python3
"""Generate 17 university detail HTML pages for TIH study abroad portal."""
import os, textwrap

BASE = os.path.dirname(os.path.abspath(__file__))

UNIS = [
  {
    "slug": "graphic-era-university",
    "abbr": "GEU",
    "name": "Graphic Era University",
    "city": "Dehradun", "state": "Uttarakhand", "country": "India",
    "flag": "🇮🇳",
    "tagline": "A Pioneer in Technical Education & Research",
    "about": "Graphic Era University is a NAAC 'A+' graded institution located in the scenic Doon Valley of Dehradun. Established in 1993, it has grown into one of India's leading private universities, enrolling over 20,000 students from 40+ countries. The university is recognized by the UGC and is known for its strong industry connections, modern labs, and vibrant research culture across engineering, sciences, business, and agriculture.",
    "highlights": [
      ("NAAC 'A+' Accredited", "One of India's highest-rated private universities for academic quality"),
      ("20,000+ Students", "A truly international community from over 40 countries"),
      ("Industry Partnerships", "Tie-ups with TCS, Infosys, IBM, and 300+ recruiters"),
      ("Lush 50-Acre Campus", "Modern hostels, labs, sports facilities in the Himalayan foothills"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "Computer Science, Electronics, Civil, Mechanical, Electrical"),
      ("BBA / MBA", "Business Administration, Finance, Marketing, HR"),
      ("B.Sc / M.Sc", "Physics, Chemistry, Mathematics, Biotechnology"),
      ("B.Sc Agriculture", "Modern agri-sciences with hands-on farm exposure"),
      ("Ph.D Programs", "Research doctorates across all schools"),
    ],
    "tuition": "$2,500–$4,500/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE / Senior Secondary Certificate (minimum grade C)",
      "Passport valid for at least 18 months",
      "English proficiency (IELTS 5.5+ or TOEFL 60+ recommended but not mandatory)",
      "Statement of Purpose (500–800 words)",
      "Two academic / character reference letters",
      "Medical fitness certificate",
      "Financial sponsorship documents",
    ],
    "scholarships": [
      ("Merit Scholarship", "Up to 30% tuition waiver for CGPA 3.5+/4.0 after first semester"),
      ("International Student Bursary", "One-time $500 settling-in grant for first-year internationals"),
      ("Sports Excellence Award", "Up to 50% fee reduction for state/national-level athletes"),
    ],
    "campus": "The Graphic Era campus sits at the foot of the Shivalik range. Students enjoy 24/7 high-speed WiFi, air-conditioned dormitories, multiple canteens serving Indian and international cuisine, a 400-seat auditorium, swimming pool, cricket grounds, and a dedicated international student office that assists with visa extensions, cultural orientation, and city trips.",
  },
  {
    "slug": "pp-savani-university",
    "abbr": "PPSU",
    "name": "PP Savani University",
    "city": "Surat", "state": "Gujarat", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Nurturing Leaders for a Global World",
    "about": "PP Savani University, established by the reputed Shree P.P. Savani Group, is a fast-growing institution in Surat — India's diamond and textile capital. The university offers programs across engineering, sciences, business, and nursing. With modern infrastructure spanning 110 acres and a focus on practical learning, PPSU is an ideal destination for Liberian students seeking quality education at affordable costs.",
    "highlights": [
      ("UGC Recognised", "Fully government-approved degree programs accepted worldwide"),
      ("Nursing Excellence", "State-of-the-art simulation labs for healthcare students"),
      ("Surat Location", "India's fastest-growing city — a hub of business and industry"),
      ("Affordable Fees", "Among the most cost-effective universities for internationals"),
    ],
    "programs": [
      ("B.Tech", "Civil, Mechanical, Computer Science, Electrical Engineering"),
      ("B.Sc Nursing", "4-year professional nursing program with hospital placements"),
      ("BBA / MBA", "Business, Finance, Entrepreneurship, International Business"),
      ("B.Sc Sciences", "Chemistry, Physics, IT, Biotechnology"),
      ("M.Tech / M.Sc", "Postgraduate specialisations in all engineering streams"),
    ],
    "tuition": "$2,000–$3,500/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent with minimum grade C in relevant subjects",
      "Valid passport (18+ months)",
      "English language documents (medium of instruction certificate acceptable)",
      "Statement of Purpose",
      "Two reference letters",
      "Medical certificate and vaccination records",
      "Bank statement / sponsor letter",
    ],
    "scholarships": [
      ("International Welcome Scholarship", "15% tuition reduction for all new international students"),
      ("Academic Excellence Award", "Up to 25% waiver for first-class academic performance"),
      ("Nursing Dedication Grant", "Partial fee support for students pursuing nursing programs"),
    ],
    "campus": "PPSU's 110-acre campus in Surat features modern hostel blocks, dedicated labs for every discipline, a library with 50,000+ volumes, a sports complex with indoor and outdoor facilities, and an international student cell that organises cultural evenings, field trips across Gujarat, and assistance with student visa processes.",
  },
  {
    "slug": "gulzar-group-of-institutes",
    "abbr": "GGI",
    "name": "Gulzar Group of Institutes",
    "city": "Ludhiana", "state": "Punjab", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Engineering Excellence in the Heart of Punjab",
    "about": "Gulzar Group of Institutes is a premier technical institution in Ludhiana, Punjab — India's industrial heartland. Approved by AICTE and affiliated with reputable Punjab universities, GGI is known for producing job-ready engineers and management professionals. The institute maintains an excellent placement record with over 300 companies recruiting from campus each year.",
    "highlights": [
      ("AICTE Approved", "All technical programs meet national quality standards"),
      ("300+ Recruiters", "Strong industry network ensuring high placement rates"),
      ("Punjab Location", "Close to Chandigarh and Delhi — great connectivity and culture"),
      ("Pharmacy Programs", "Dedicated B.Pharm and M.Pharm with modern drug labs"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, ECE, Civil, Mechanical, Electrical"),
      ("B.Pharm / M.Pharm", "Pharmaceutical sciences with hands-on lab training"),
      ("BBA / MBA", "Management with focus on supply chain and manufacturing"),
      ("BCA / MCA", "Computer applications and software development"),
      ("Diploma Programs", "2-3 year technical diplomas in engineering trades"),
    ],
    "tuition": "$1,800–$3,200/yr",
    "intake": "August / January",
    "requirements": [
      "WASSCE or equivalent (B.Tech: minimum C in Math & Science)",
      "Passport valid for duration of study",
      "English proficiency evidence",
      "SOP explaining choice of program",
      "Academic transcripts (attested)",
      "Medical fitness certificate",
      "Financial guarantee letter",
    ],
    "scholarships": [
      ("Merit-cum-Means Scholarship", "Up to 20% tuition relief for high-scoring applicants"),
      ("African Student Grant", "Special $300 settling-in grant for African students"),
      ("Industry Sponsored Awards", "Partial scholarships funded by partner companies"),
    ],
    "campus": "Set across a well-maintained campus in Ludhiana city, GGI offers on-campus hostels, 24/7 internet, canteen, gym, sports courts, and a dedicated international student lounge. Ludhiana's vibrant culture and proximity to Amritsar's Golden Temple make it a memorable study destination.",
  },
  {
    "slug": "mats-university",
    "abbr": "MATS",
    "name": "MATS University",
    "city": "Raipur", "state": "Chhattisgarh", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Shaping Professionals for a Changing World",
    "about": "MATS University, established in 2006 and recognised by UGC, is located in Raipur — the capital of Chhattisgarh and a rapidly developing economic hub. The university offers diverse programs spanning law, management, engineering, and agriculture. Its low tuition, modern facilities, and a dedicated international student support office make it a popular choice for African students.",
    "highlights": [
      ("UGC Recognised", "Degrees are government-approved and internationally accepted"),
      ("Lowest Tuition", "Most affordable fees among TIH partner universities"),
      ("Law Programs", "One of few partner unis offering LLB and LLM for Africans"),
      ("Agriculture Sciences", "Practical farm training in fertile Chhattisgarh terrain"),
    ],
    "programs": [
      ("LLB / LLM", "3-year and 5-year law programs; corporate and international law"),
      ("BBA / MBA", "Business and management with entrepreneurship focus"),
      ("B.Tech", "Civil, Mechanical, CSE — strong industry tie-ups"),
      ("B.Sc Agriculture", "Modern agronomy and crop science programs"),
      ("Ph.D", "Doctoral programs in law, management, and sciences"),
    ],
    "tuition": "$1,500–$3,000/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE / Higher Secondary (minimum pass grade)",
      "Passport with at least 2 years validity",
      "English language documents",
      "SOP (400–600 words)",
      "Reference letter (one acceptable)",
      "Medical certificate",
      "Bank statement showing sufficient funds",
    ],
    "scholarships": [
      ("MATS International Grant", "10–20% fee reduction for first-year international students"),
      ("Legal Studies Award", "Partial scholarship for students enrolling in LLB/LLM"),
      ("Agricultural Excellence Bursary", "Reduced fees for B.Sc Agriculture students"),
    ],
    "campus": "MATS University's campus in Raipur features modern lecture halls, a well-stocked library, computer centres, sports grounds, and comfortable hostel accommodation. Raipur is a growing smart city with good food, connectivity, and a peaceful study environment.",
  },
  {
    "slug": "sr-university",
    "abbr": "SRU",
    "name": "SR University",
    "city": "Warangal", "state": "Telangana", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Innovation-Driven Education in Telangana",
    "about": "SR University is a UGC-recognised institution in Warangal, Telangana — a city famous for its historic temples and fast-growing IT sector. The university focuses on engineering, computer science, business, and sciences with a strong emphasis on research and innovation. Its modern infrastructure and industry partnerships make it a rising star in South Indian technical education.",
    "highlights": [
      ("NAAC Accredited", "Quality-assured programs across all disciplines"),
      ("IT & Tech Hub", "Located near Hyderabad's booming IT corridor"),
      ("Research Culture", "Active research centres in AI, IoT, and data science"),
      ("Diverse Programs", "From engineering to humanities — something for every student"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, AI & ML, Data Science, ECE, Mechanical, Civil"),
      ("BBA / MBA", "Business with technology management specialisation"),
      ("B.Sc", "Physics, Chemistry, Mathematics, Computer Science"),
      ("MCA", "Master of Computer Applications — 2-year intensive"),
      ("Ph.D Research", "Engineering, sciences, and management research degrees"),
    ],
    "tuition": "$2,200–$3,800/yr",
    "intake": "July / December",
    "requirements": [
      "WASSCE / Senior Secondary Certificate (Math/Science for engineering)",
      "Valid passport",
      "English proficiency (IELTS 5.5 recommended for PG)",
      "SOP",
      "Academic transcripts",
      "Medical certificate",
      "Sponsorship or financial affidavit",
    ],
    "scholarships": [
      ("SR Merit Scholarship", "Up to 30% tuition waiver for top-ranked applicants"),
      ("Tech Innovation Award", "Full lab fees waiver for students in AI/ML programs"),
      ("International Student Discount", "Flat 15% reduction on accommodation fees"),
    ],
    "campus": "SR University's campus covers 100 acres in the heart of Warangal. Facilities include advanced computing labs, an innovation centre, well-furnished hostels, cafeteria with multicultural menu options, sports centre, and a student welfare office that proactively assists international students.",
  },
  {
    "slug": "marwadi-university",
    "abbr": "MU",
    "name": "Marwadi University",
    "city": "Rajkot", "state": "Gujarat", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Where Entrepreneurship Meets Excellence",
    "about": "Marwadi University is a fast-rising private university in Rajkot, Gujarat, recognised by UGC and NAAC. It places a strong emphasis on entrepreneurship, innovation, and industry-readiness. The university runs dedicated startup incubators and has produced several successful student entrepreneurs. With over 15,000 students and 400+ faculty, it offers a comprehensive academic experience in engineering, IT, and business.",
    "highlights": [
      ("NAAC Accredited", "Recognised for high-quality teaching and infrastructure"),
      ("Startup Incubator", "Funded incubation centre for student-led ventures"),
      ("Rajkot Location", "Gujarat's industrial city — great for engineering & business"),
      ("Ph.D Programs", "Active doctoral research in multiple disciplines"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, IT, Electronics, Mechanical, Chemical Engineering"),
      ("BBA / MBA", "Entrepreneurship, Finance, Marketing — industry-integrated"),
      ("B.Sc / M.Sc", "Physics, Chemistry, IT, Data Science"),
      ("B.Design", "Industrial and communication design — creative programs"),
      ("Ph.D", "Research programs in engineering, sciences, and management"),
    ],
    "tuition": "$2,000–$3,500/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent with C grade minimum",
      "Passport (valid 18+ months)",
      "English language certificate or medium of instruction letter",
      "Statement of Purpose",
      "Two references",
      "Medical certificate",
      "Proof of funds",
    ],
    "scholarships": [
      ("Marwadi Global Scholarship", "Up to 25% tuition waiver for international achievers"),
      ("Entrepreneurship Excellence Award", "Full incubation and mentoring support grant"),
      ("Early Bird Discount", "10% fee reduction for applications before March 31"),
    ],
    "campus": "Marwadi University's 200-acre campus is one of Gujarat's most modern. It features a dedicated innovation hub, design studios, well-equipped engineering labs, modern hostels, a sports complex with Olympic-size swimming pool, and a culturally diverse food court. The international office organises regular cultural exchange events.",
  },
  {
    "slug": "desh-bhagat-university",
    "abbr": "DBU",
    "name": "Desh Bhagat University",
    "city": "Mandi Gobindgarh", "state": "Punjab", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Quality Education Rooted in National Values",
    "about": "Desh Bhagat University, established in 2009 and UGC-recognised, is located in Mandi Gobindgarh — Punjab's historic 'Steel City.' The university is particularly well-known for its nursing, agriculture, and management programs. DBU's hands-on training approach, affordable fee structure, and welcoming community for international students from Africa have made it a trusted TIH partner.",
    "highlights": [
      ("Nursing Specialisation", "World-class BSc Nursing with hospital clinical rotations"),
      ("Agriculture Hub", "Practical farm programs in Punjab's fertile heartland"),
      ("Affordable Costs", "Competitive fees with good scholarship options"),
      ("African-Friendly", "Active African student association on campus"),
    ],
    "programs": [
      ("B.Sc Nursing", "4-year professional nursing; clinical training in empanelled hospitals"),
      ("B.Tech / M.Tech", "Engineering with focus on manufacturing and automation"),
      ("BBA / MBA", "Business and management with rural enterprise focus"),
      ("B.Sc Agriculture", "Agri-sciences, horticulture, soil science"),
      ("Diploma Programs", "Short-term technical and nursing assistant diplomas"),
    ],
    "tuition": "$1,800–$3,200/yr",
    "intake": "August / January",
    "requirements": [
      "WASSCE or equivalent (Biology & Chemistry required for Nursing)",
      "Valid passport",
      "English language medium certificate",
      "SOP",
      "Medical certificate (including nursing fitness test for Nursing applicants)",
      "Reference letters",
      "Bank statement",
    ],
    "scholarships": [
      ("DBU International Scholarship", "15% tuition waiver for African students"),
      ("Nursing Dedication Award", "Additional hostel fee subsidy for nursing students"),
      ("Academic Excellence Grant", "25% reduction for students scoring 80%+ in Year 1"),
    ],
    "campus": "DBU's green campus in Mandi Gobindgarh provides comfortable hostels, simulation nursing labs, agricultural demonstration farms, sports grounds, and a library. The university's student services team assists with visa renewals and cultural orientation. Punjab's friendly locals and vibrant festivals make campus life memorable.",
  },
  {
    "slug": "lovely-professional-university",
    "abbr": "LPU",
    "name": "Lovely Professional University",
    "city": "Phagwara", "state": "Punjab", "country": "India",
    "flag": "🇮🇳",
    "tagline": "India's Largest Private University — Think Big, Achieve More",
    "about": "Lovely Professional University (LPU) is India's largest single-campus university, spanning 600+ acres in Phagwara, Punjab. With over 30,000 students from 50+ countries and 300+ programs, LPU is a truly global institution. It is NAAC 'A+' accredited and consistently ranked among India's top 50 universities. LPU's emphasis on holistic development, cutting-edge research, and an unmatched startup ecosystem makes it ideal for ambitious Liberian students.",
    "highlights": [
      ("India's Largest Campus", "600+ acres; 30,000+ students from 50+ countries"),
      ("NAAC 'A+' Accredited", "Among India's highest-rated private universities"),
      ("300+ Programs", "The widest choice of degrees under one roof"),
      ("World-Class Placements", "₹1 Cr+ salary packages for top graduates; 700+ recruiters"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, AI, Robotics, IoT, Mechanical, Civil — 20+ specialisations"),
      ("BBA / MBA", "Business, Fintech, Data Analytics, International Business"),
      ("B.Design / M.Design", "Fashion, UX, Product, Interior Design"),
      ("Computing & IT", "BCA, MCA, B.Sc CS, M.Sc Data Science"),
      ("Ph.D Research", "Fully funded research positions in 20+ departments"),
    ],
    "tuition": "$2,800–$5,000/yr",
    "intake": "January / July",
    "requirements": [
      "WASSCE / A-levels or equivalent (minimum 55% aggregate)",
      "Passport valid 18+ months",
      "IELTS 6.0 or TOEFL 70+ (recommended; exemption via interview)",
      "SOP (600–1000 words)",
      "Two academic references",
      "Medical fitness certificate",
      "Proof of financial support ($5,000/yr minimum)",
    ],
    "scholarships": [
      ("LPU Global Scholarship", "Up to 50% tuition waiver for outstanding merit applicants"),
      ("TIH Partner Discount", "Exclusive 20% reduction for students applying via TIH"),
      ("Sports & Arts Excellence", "Full scholarship for national/international champions"),
    ],
    "campus": "LPU's 600-acre campus is essentially a self-sufficient city. It includes 40+ canteens, an 8-acre lake, Olympic sports facilities, 12 hostels with gym and WiFi, a mall, hospital, bank, and the award-winning LPU One App for digital campus management. International students receive a dedicated buddy, airport pick-up, and a 3-day orientation week.",
  },
  {
    "slug": "royal-global-university",
    "abbr": "RGU",
    "name": "Royal Global University",
    "city": "Guwahati", "state": "Assam", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Gateway to North-East India's Academic Excellence",
    "about": "Royal Global University (RGU) is a UGC-recognised private university in Guwahati — the gateway to North-East India and the commercial capital of Assam. RGU offers programs in engineering, business, sciences, and humanities in a peaceful, nature-rich environment. The university's proximity to South-East Asia and its multicultural student body make it a distinctive study destination.",
    "highlights": [
      ("North-East Gateway", "Strategic location connecting India to Bangladesh, Myanmar"),
      ("Nature Campus", "Surrounded by Brahmaputra river plains and tea gardens"),
      ("Humanities Strength", "Strong arts, social sciences, and language programs"),
      ("Ph.D Opportunities", "Active research in biodiversity, environment, and social sciences"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, Civil, Electrical, Electronics and Communication"),
      ("BBA / MBA", "Business with hospitality and tourism specialisations"),
      ("B.Sc / M.Sc", "Physics, Chemistry, Mathematics, Environmental Science"),
      ("B.A / M.A", "English Literature, Political Science, Economics, Psychology"),
      ("Ph.D", "Research in sciences, humanities, and management"),
    ],
    "tuition": "$2,000–$3,500/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent (subject requirements vary by program)",
      "Valid passport",
      "English language certificate",
      "Statement of Purpose",
      "Reference letters",
      "Medical certificate",
      "Financial sponsorship documents",
    ],
    "scholarships": [
      ("RGU Merit Award", "Up to 20% fee waiver for academically strong applicants"),
      ("North-East Diversity Grant", "Special bursary for students from underrepresented nations"),
      ("Research Fellowship", "Fully-funded positions for Ph.D candidates in select disciplines"),
    ],
    "campus": "RGU's peaceful campus in Guwahati features tree-lined avenues, modern hostels, well-equipped labs, a cultural centre showcasing North-East India's rich heritage, sports facilities, and an international student centre. Guwahati's vibrant food scene, river ghats, and proximity to Kaziranga National Park make student life exceptional.",
  },
  {
    "slug": "sharda-university",
    "abbr": "SU",
    "name": "Sharda University",
    "city": "Greater Noida", "state": "Uttar Pradesh", "country": "India",
    "flag": "🇮🇳",
    "tagline": "A Truly International University Near Delhi",
    "about": "Sharda University, established in 2009 and NAAC accredited, is one of NCR's most cosmopolitan universities, hosting students from 85+ countries on its 63-acre campus in Greater Noida — just 35 km from New Delhi International Airport. The university offers world-class programs in medicine, engineering, law, and business. Its large African student community and dedicated international office make it a home away from home for Liberian students.",
    "highlights": [
      ("85+ Countries", "One of India's most internationally diverse campuses"),
      ("Near Delhi", "35 km from Indira Gandhi International Airport"),
      ("Medical Programs", "MBBS and allied health — globally recognised"),
      ("Strong Law School", "LLB, LLM with moot court and legal aid clinic"),
    ],
    "programs": [
      ("MBBS / BDS", "5.5-year medical degree; MCI/NMC recognised; hospital training"),
      ("B.Tech / M.Tech", "Engineering across 10+ specialisations"),
      ("LLB / LLM", "Integrated 5-year and standalone 3-year law programs"),
      ("BBA / MBA", "Business with global management perspective"),
      ("Ph.D Research", "Doctorates in medicine, engineering, law, and social sciences"),
    ],
    "tuition": "$3,500–$6,000/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent (MBBS: Biology, Chemistry, Physics with A/B grades)",
      "Passport valid 18+ months",
      "IELTS 6.0 / TOEFL 70+ (required for MBBS and LLB)",
      "Detailed SOP",
      "Two strong reference letters",
      "Medical fitness certificate (MBBS: additional medical screening)",
      "Proof of funds ($8,000+ for medical programs)",
    ],
    "scholarships": [
      ("Sharda Global Excellence Scholarship", "Up to 40% tuition waiver for top applicants"),
      ("African Achievers Award", "Exclusive $1,000 grant for African students in Year 1"),
      ("Medical Sciences Bursary", "Partial fee relief for MBBS students after Year 2"),
    ],
    "campus": "Sharda University's 63-acre campus in Greater Noida is a vibrant international community. Amenities include 10 hostels with AC rooms, a teaching hospital, simulation labs, multiple restaurants serving African and Indian food, a cricket ground, basketball courts, a mosque and meditation centre, and a 24/7 medical facility. Frequent Delhi day-trips are organised by the international cell.",
  },
  {
    "slug": "amity-university",
    "abbr": "AU",
    "name": "Amity University",
    "city": "Noida", "state": "Uttar Pradesh", "country": "India",
    "flag": "🇮🇳",
    "tagline": "India's Top-Ranked Private University",
    "about": "Amity University, Noida is India's premier private research university and is ranked among the top 10 universities in India by QS. With campuses in 10 countries and over 150,000 alumni worldwide, Amity offers an unparalleled global academic network. Its programs in business, engineering, media, and sciences are delivered by world-class faculty and supported by Fortune 500 industry partnerships.",
    "highlights": [
      ("QS Ranked", "Consistently in India's top 10 — globally recognised brand"),
      ("Global Network", "Campuses in UK, UAE, China, Singapore, and more"),
      ("Media & Communication", "India's best journalism and film-making school"),
      ("Fortune 500 Tie-ups", "Placements at Google, Amazon, PwC, EY, and 900+ firms"),
    ],
    "programs": [
      ("BBA / MBA", "Business, Finance, Marketing, HR — with global exchange options"),
      ("B.Tech / M.Tech", "CSE, IT, Electronics, Aerospace, Mechanical"),
      ("B.Sc Media", "Journalism, Mass Communication, Film & TV Production"),
      ("B.Sc / M.Sc", "Biotechnology, Chemistry, Applied Sciences"),
      ("Ph.D Research", "Internationally co-supervised research programs"),
    ],
    "tuition": "$4,000–$7,500/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent with minimum 60% aggregate (70% for BBA/MBA)",
      "Passport valid 18+ months",
      "IELTS 6.5 / TOEFL 80+ (required for most programs)",
      "Detailed SOP (700–1000 words)",
      "Two academic references on letterhead",
      "Medical certificate",
      "Proof of funds ($7,000+/yr)",
    ],
    "scholarships": [
      ("Amity Global Merit Scholarship", "Up to 50% tuition waiver for outstanding students"),
      ("TIH Exclusive Partnership Award", "15% additional reduction for TIH-referred students"),
      ("Research Excellence Fellowship", "Full Ph.D funding for research-track applicants"),
    ],
    "campus": "Amity Noida's 200-acre campus is a landmark of modern higher education. It features a 2 million-volume digital library, innovation labs, media studios, a 2,000-seat auditorium, Olympic-standard sports facilities, 15 hostels, and a food court with global cuisines. Noida's proximity to Delhi (30 min metro) gives students access to the capital's cultural, professional, and recreational resources.",
  },
  {
    "slug": "khalsa-university",
    "abbr": "KU",
    "name": "Khalsa University",
    "city": "Amritsar", "state": "Punjab", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Values, Knowledge, and Service — Since 1892",
    "about": "Khalsa University, rooted in the heritage of the Khalsa College founded in 1892, is one of Punjab's oldest and most respected institutions. Recognised by UGC and reestablished as a full university, it offers programs in engineering, business, agriculture, and sciences. Located in the spiritually and culturally rich city of Amritsar — home of the iconic Golden Temple — Khalsa University offers students an extraordinary life experience alongside quality education.",
    "highlights": [
      ("130+ Year Heritage", "One of India's oldest academic traditions — now a full university"),
      ("Golden Temple City", "Study in Amritsar — one of the world's most spiritual cities"),
      ("Agriculture Strength", "Strong agri-sciences in Punjab's legendary farming region"),
      ("UGC Recognised", "Degrees accepted by employers and further study institutions globally"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, ECE, Civil, Mechanical Engineering"),
      ("BBA / MBA", "Business with Sikh heritage management values focus"),
      ("B.Sc Agriculture", "Modern agri-science with experimental farm facilities"),
      ("B.Sc Sciences", "Physics, Chemistry, Maths, Computer Science"),
      ("M.Sc", "Postgraduate sciences and environmental studies"),
    ],
    "tuition": "$1,800–$3,000/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent",
      "Valid passport",
      "English language certificate",
      "SOP",
      "Reference letter",
      "Medical certificate",
      "Bank statement / sponsor letter",
    ],
    "scholarships": [
      ("Khalsa Heritage Scholarship", "20% fee reduction for students of all faiths demonstrating service ethos"),
      ("Academic Merit Award", "Up to 25% tuition waiver for strong academic performers"),
      ("Agricultural Talent Grant", "Bursary for B.Sc Agriculture students from developing nations"),
    ],
    "campus": "Khalsa University's heritage campus in Amritsar is a beautiful blend of colonial architecture and modern facilities. Hostels, sports grounds, a heritage museum, agricultural farm, and a community service centre are available. Students regularly visit the Golden Temple, which provides a powerful and calming backdrop to academic life.",
  },
  {
    "slug": "invertis-university",
    "abbr": "IU",
    "name": "Invertis University",
    "city": "Bareilly", "state": "Uttar Pradesh", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Technology and Management for Tomorrow's Professionals",
    "about": "Invertis University, established in 2010 and UGC-recognised, is located in Bareilly — a vibrant city in Uttar Pradesh. The university is known for its practical, industry-linked programs in engineering, management, pharmacy, and IT. Affordable fees, a collaborative atmosphere, and strong placement support make Invertis a solid choice for Liberian students entering professional fields.",
    "highlights": [
      ("UGC Recognised", "All degrees meet Indian national quality standards"),
      ("Pharmacy Programs", "B.Pharm & M.Pharm with advanced pharmaceutical labs"),
      ("IT Industry Links", "Campus placement drives by 200+ tech and management firms"),
      ("Affordable Bareilly", "Lower cost of living compared to metro cities"),
    ],
    "programs": [
      ("B.Tech / M.Tech", "CSE, IT, Mechanical, Electronics, Civil"),
      ("B.Pharm / M.Pharm", "Pharmaceutical sciences with hospital pharmacology training"),
      ("BBA / MBA", "General management, HR, and supply chain programs"),
      ("BCA / MCA", "Computer applications and software engineering"),
      ("Diploma Engineering", "2-year lateral entry technical diplomas"),
    ],
    "tuition": "$1,600–$2,800/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent (B.Tech: Math + Science; B.Pharm: Bio + Chem)",
      "Valid passport",
      "English language documents",
      "SOP",
      "Medical certificate",
      "Sponsorship letter or bank statement",
    ],
    "scholarships": [
      ("Invertis Merit Scholarship", "Up to 20% tuition waiver for high achievers"),
      ("Pharmacy Excellence Award", "Partial fee subsidy for B.Pharm/M.Pharm students"),
      ("African Students' Bursary", "$200 book grant for first-year African students"),
    ],
    "campus": "Invertis University's campus in Bareilly provides modern hostels, well-equipped engineering and pharmaceutical labs, a library, internet zones, canteen, and sports facilities. Bareilly is a historic city with affordable living costs, good food, and easy rail connections to Delhi (3 hours) and Lucknow.",
  },
  {
    "slug": "mvm-institute",
    "abbr": "MVM",
    "name": "MVM Institute",
    "city": "Bhopal", "state": "Madhya Pradesh", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Practical Excellence in the Heart of India",
    "about": "MVM Institute is a reputed technical and management institution in Bhopal, the 'City of Lakes' in Madhya Pradesh. AICTE-approved and affiliated with leading Madhya Pradesh universities, MVM focuses on delivering practical, industry-integrated education in engineering, sciences, and management. It is known for its disciplined learning environment, experienced faculty, and strong alumni network.",
    "highlights": [
      ("AICTE Approved", "Quality-assured technical programs meeting national standards"),
      ("Bhopal Location", "India's 'City of Lakes' — affordable, peaceful, and well-connected"),
      ("Industry-Integrated", "Programs designed with industry advisory boards"),
      ("Low Cost of Living", "Among India's most affordable state capitals"),
    ],
    "programs": [
      ("B.Tech", "CSE, IT, Mechanical, Civil, Electronics Engineering"),
      ("BBA / MBA", "Business management with local and regional industry focus"),
      ("B.Sc", "Physics, Chemistry, Mathematics, Computer Science"),
      ("M.Tech", "Advanced engineering with research project component"),
      ("Diploma Programs", "Technical diplomas for hands-on trade skills"),
    ],
    "tuition": "$1,400–$2,600/yr",
    "intake": "July / January",
    "requirements": [
      "WASSCE or equivalent (minimum C in relevant subjects)",
      "Valid passport",
      "English language medium certificate",
      "SOP",
      "Medical certificate",
      "Sponsor/bank statement",
    ],
    "scholarships": [
      ("MVM Merit Award", "15% tuition reduction for academically strong students"),
      ("International Student Grant", "$150 settling-in allowance for first-year foreign students"),
      ("Management Excellence Bursary", "Partial scholarship for MBA students"),
    ],
    "campus": "MVM Institute's campus in Bhopal is compact and well-maintained. Students benefit from modern labs, a well-stocked library, hostels, a canteen, and sports grounds. Bhopal's lower cost of living means students can live comfortably on a modest budget. The nearby lakes, national parks, and Bhimbetka rock shelters offer great weekend escapes.",
  },
  {
    "slug": "soa-university",
    "abbr": "SOA",
    "name": "SOA University",
    "city": "Bhubaneswar", "state": "Odisha", "country": "India",
    "flag": "🇮🇳",
    "tagline": "Where Medicine Meets Innovation on the Bay of Bengal",
    "about": "Siksha 'O' Anusandhan (SOA) University is a NAAC 'A+' graded deemed university in Bhubaneswar, Odisha. It is one of Eastern India's premier research institutions and is renowned for its medical, engineering, law, and sciences programs. SOA operates a 1,000-bed teaching hospital, multiple research centres, and has produced graduates employed across the globe. Its beautiful coastal location and strong international student community make it a distinctive study destination.",
    "highlights": [
      ("NAAC 'A+' Accredited", "Among India's top-rated deemed universities"),
      ("1,000-Bed Hospital", "Medical and nursing students receive extensive clinical training"),
      ("Coastal Location", "Bhubaneswar — gateway to Puri Beach and Konark Sun Temple"),
      ("Research Powerhouse", "100+ funded research projects across medicine and engineering"),
    ],
    "programs": [
      ("MBBS / BDS / Nursing", "Medical and allied health programs with hospital training"),
      ("B.Tech / M.Tech", "Engineering across 12 specialisations"),
      ("LLB / LLM", "Law programs with moot court and legal research centres"),
      ("B.Sc / M.Sc", "Sciences, Biotechnology, Environmental Science"),
      ("Ph.D Research", "Fully supported research doctorates in medicine, engineering, law"),
    ],
    "tuition": "$3,000–$5,500/yr",
    "intake": "June / January",
    "requirements": [
      "WASSCE or equivalent (MBBS: Biology, Chemistry, Physics required)",
      "Passport valid 18+ months",
      "IELTS 6.0 or TOEFL 70+ for medical programs",
      "SOP",
      "Two references",
      "Medical screening certificate",
      "Proof of funds ($6,000+ for medical programs)",
    ],
    "scholarships": [
      ("SOA Global Merit Scholarship", "Up to 35% tuition waiver for outstanding applicants"),
      ("Medical Achievers Award", "Partial fee relief for MBBS students after Year 2"),
      ("Research Fellowship", "Funded Ph.D positions including stipend and research grant"),
    ],
    "campus": "SOA University's 400-acre campus in Bhubaneswar is a green, well-planned township. It includes a teaching hospital, engineering research labs, law library, hostels, international student centre, multiple sports grounds, a gym, cafeteria, and regular city trips to Puri beach, Konark, and the tribal craft markets of Odisha.",
  },
  {
    "slug": "cyprus-west-university",
    "abbr": "CWU",
    "name": "Cyprus West University",
    "city": "Famagusta", "state": "Northern Cyprus", "country": "Cyprus",
    "flag": "🇨🇾",
    "tagline": "European Education on the Mediterranean Coast",
    "about": "Cyprus West University (CWU) is a dynamic private university in Famagusta, Northern Cyprus — an EU candidate state offering European-quality education with a Mediterranean lifestyle. CWU focuses on business, IT, hospitality, and law in an English-medium, internationally accredited environment. Its small class sizes, multicultural campus, and affordable European lifestyle make it an attractive destination for Liberian students seeking a European credential.",
    "highlights": [
      ("European Standard", "EU candidate state — degrees recognised across Europe and beyond"),
      ("English Medium", "All programs taught in English — no language barrier"),
      ("Hospitality School", "Specialised hotel and tourism management programs"),
      ("Mediterranean Life", "Beaches, sunshine, and safe living — outstanding quality of life"),
    ],
    "programs": [
      ("BA / MA Business", "International Business, Finance, Marketing, Entrepreneurship"),
      ("BSc / MSc IT", "Computer Science, Software Engineering, Cybersecurity"),
      ("BA / MA Law", "International law, commercial law, and human rights"),
      ("BSc Hospitality", "Hotel management, event planning, tourism and travel"),
      ("MBA", "Executive MBA with international business focus"),
    ],
    "tuition": "$4,000–$6,500/yr",
    "intake": "September / February",
    "requirements": [
      "WASSCE or equivalent (minimum C average)",
      "Passport valid throughout study period",
      "IELTS 5.5 / TOEFL 60+ (or English-medium school certificate)",
      "SOP",
      "Two reference letters",
      "Medical certificate",
      "Proof of funds",
    ],
    "scholarships": [
      ("CWU International Merit Scholarship", "Up to 40% tuition reduction for strong applicants"),
      ("African Student Support Grant", "$500 settling-in grant for first-year African students"),
      ("Early Application Award", "10% tuition reduction for applications 3+ months before intake"),
    ],
    "campus": "CWU's modern campus sits minutes from Famagusta's historic old city and golden beaches. Students enjoy air-conditioned classrooms, a digital library, modern hostels, a student union, beach volleyball courts, and a vibrant nightlife scene. The campus is a mix of European, Middle Eastern, and African students, creating a uniquely multicultural experience.",
  },
  {
    "slug": "cyprus-international-university",
    "abbr": "CIU",
    "name": "Cyprus International University",
    "city": "Nicosia", "state": "Northern Cyprus", "country": "Cyprus",
    "flag": "🇨🇾",
    "tagline": "Where Global Ambitions Find a European Home",
    "about": "Cyprus International University (CIU) is one of the largest and most internationally recognised universities in Northern Cyprus, with over 20,000 students from 100+ countries. Located in Nicosia — the island's capital — CIU offers English-medium programs in business, engineering, medicine, and law with a strong emphasis on research and innovation. It holds multiple international accreditations and has a large, active African student community, making Liberian students feel immediately at home.",
    "highlights": [
      ("100+ Countries", "A truly global campus with 20,000+ students from every continent"),
      ("International Accreditations", "Recognised by YÖK, YÖDAK, and multiple professional bodies"),
      ("Medical School", "Medicine, Dentistry, Pharmacy — internationally recognised programs"),
      ("Large African Community", "Active African students' association with regular cultural events"),
    ],
    "programs": [
      ("MBBS / BDS / Pharmacy", "Medical programs; international licensing exam preparation included"),
      ("B.Eng / M.Eng", "Civil, Mechanical, Computer Engineering, Electrical"),
      ("BA / MA Law", "International law with moot court, legal clinic, and internships"),
      ("BBA / MBA", "Business; specialisations in fintech, trade, and logistics"),
      ("Ph.D Research", "Fully supervised doctoral programs across all schools"),
    ],
    "tuition": "$4,500–$7,000/yr",
    "intake": "September / February",
    "requirements": [
      "WASSCE or equivalent (Medicine: A/B in Biology, Chemistry, Physics)",
      "Passport valid throughout study period",
      "IELTS 6.0 / TOEFL 70+ (required for medicine and law)",
      "Detailed SOP",
      "Two strong references",
      "Medical fitness certificate",
      "Proof of financial support",
    ],
    "scholarships": [
      ("CIU Global Merit Award", "Up to 50% tuition waiver for outstanding applicants"),
      ("Liberia & West Africa Scholarship", "Dedicated TIH-partnership grant of up to $1,200/yr"),
      ("Medical Excellence Grant", "Partial tuition relief for MBBS students from Year 3"),
    ],
    "campus": "CIU's expansive campus in Nicosia features modern lecture theatres, a teaching hospital, dental clinic, innovation labs, digital library, 12 student residences, sports complex with Olympic pool, and a dedicated International Student Office. Nicosia's unique position as the world's last divided capital adds a fascinating historical dimension to student life. Regular island tours, beach trips, and cultural events are organised throughout the year.",
  },
]

# ─── NAV & FOOTER (shared across all pages) ────────────────────────────────

NAV = """\
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <div id="announcement-bar" style="background:#BF0A30;color:#fff;text-align:center;padding:0.6rem 1rem;font-size:0.88rem;font-weight:600;position:relative;z-index:1100;">
    🎓 <strong>2026 Scholarship Applications Now Open</strong> — Deadline July 15, 2026.
    <a href="study-abroad.html#application-form" style="color:#fff;text-decoration:underline;margin-left:0.5rem;">Apply Now →</a>
    <button onclick="this.parentElement.style.display='none'" aria-label="Close announcement" style="position:absolute;right:0.9rem;top:50%;transform:translateY(-50%);background:none;border:none;color:#fff;font-size:1.1rem;cursor:pointer;padding:0.2rem 0.4rem;line-height:1;">✕</button>
  </div>

  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="index.html">Tolbert Innovation Hub</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a class="active" aria-current="page" href="study-abroad.html">Study Abroad</a>
        <a href="fully-funded-scholarship.html">Fully Funded</a>
        <a href="healthcare.html">Healthcare</a>
        <a href="software.html">Software</a>
        <a href="classroom.html">Classroom</a>
        <a href="news.html">News</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="study-abroad.html#application-form" class="nav-cta">Apply Now</a>
      </nav>
    </div>
  </header>"""

FOOTER = """\
  <footer class="site-footer" aria-label="Site footer">
    <div class="container">
      <div class="footer-grid-main">
        <div class="footer-brand">
          <a class="brand" href="index.html"><span class="brand-text">Tolbert Innovation Hub</span></a>
          <p class="footer-tagline">Empowering Africa's Future through Education, Technology, and Innovation. Never Stop Innovating.</p>
          <div class="footer-social">
            <a href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="WhatsApp">💬</a>
            <a href="mailto:info@tolbertinnovationhub.org" class="social-link" aria-label="Email">📧</a>
            <a href="tel:+231880559227" class="social-link" aria-label="Phone">📞</a>
          </div>
        </div>
        <div>
          <p class="footer-heading">Programs</p>
          <ul class="footer-links">
            <li><a href="study-abroad.html">Study Abroad</a></li>
            <li><a href="fully-funded-scholarship.html">Fully Funded Scholarship</a></li>
            <li><a href="healthcare.html">Healthcare Exposure</a></li>
            <li><a href="software.html">Software Innovation</a></li>
            <li><a href="classroom.html">Free Classroom</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading">Classroom</p>
          <ul class="footer-links">
            <li><a href="classroom-ielts.html">IELTS Preparation</a></li>
            <li><a href="classroom-toefl.html">TOEFL Preparation</a></li>
            <li><a href="classroom-resource-center.html">Resource Center</a></li>
            <li><a href="classroom-practice-tests.html">Practice Tests</a></li>
            <li><a href="news.html">News &amp; Updates</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-heading">Contact Us</p>
          <div class="footer-contact-item"><span class="footer-contact-icon">📧</span><a href="mailto:info@tolbertinnovationhub.org">info@tolbertinnovationhub.org</a></div>
          <div class="footer-contact-item"><span class="footer-contact-icon">📞</span><a href="tel:+231880559227">+231 880 559 227</a></div>
          <div class="footer-contact-item"><span class="footer-contact-icon">🌐</span><span>Liberia, West Africa</span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon">💬</span><a href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
          <div style="margin-top:1.25rem;"><a href="contact.html" class="btn btn-outline btn-sm" style="font-size:0.82rem;">Get In Touch →</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p class="copyright-note">© 2026 Tolbert Innovation Hub. All rights reserved. | <a href="contact.html" style="color:rgba(200,216,240,0.7);">Privacy</a> | <a href="contact.html" style="color:rgba(200,216,240,0.7);">Terms</a></p>
          <p style="font-size:0.82rem;color:rgba(200,216,240,0.55);margin:0;">Empowering Africa's Future — Never Stop Innovating 🚀</p>
        </div>
      </div>
    </div>
  </footer>"""

# ─── PAGE GENERATOR ─────────────────────────────────────────────────────────

def hero_gradient(u):
    if u["country"] == "Cyprus":
        return "linear-gradient(135deg, #6b0010 0%, #BF0A30 55%, #9c1a2e 100%)"
    return "linear-gradient(135deg, #001440 0%, #002868 55%, #1a3d8a 100%)"

def build_page(u):
    is_cypress = u["country"] == "Cyprus"
    accent     = "#BF0A30" if is_cypress else "#002868"
    hero_grad  = hero_gradient(u)
    location   = f"{u['city']}, {u['state']}, {u['country']}"

    # highlights
    hi_html = ""
    for (title, desc) in u["highlights"]:
        hi_html += f"""
          <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;border-left:4px solid {accent};">
            <p style="font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;color:{accent};margin:0 0 0.4rem;">{title}</p>
            <p style="font-size:0.9rem;color:#4b5563;margin:0;">{desc}</p>
          </div>"""

    # programs
    prog_html = ""
    for (prog, detail) in u["programs"]:
        prog_html += f"""
          <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;">
            <p style="font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;color:{accent};margin:0 0 0.35rem;">{prog}</p>
            <p style="font-size:0.88rem;color:#6b7280;margin:0;">{detail}</p>
          </div>"""

    # requirements
    req_html = ""
    for r in u["requirements"]:
        req_html += f"""
            <li style="padding:0.6rem 0;border-bottom:1px solid #f3f4f6;font-size:0.92rem;color:#374151;">
              <span style="color:#059669;margin-right:0.5rem;font-size:1rem;">✓</span>{r}
            </li>"""

    # scholarships
    sch_html = ""
    for (sname, sdesc) in u["scholarships"]:
        sch_html += f"""
          <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;border-top:4px solid {accent};">
            <p style="font-family:'Poppins',sans-serif;font-weight:700;font-size:0.95rem;color:{accent};margin:0 0 0.4rem;">🏆 {sname}</p>
            <p style="font-size:0.88rem;color:#4b5563;margin:0;">{sdesc}</p>
          </div>"""

    deg_levels = "UG · PG" if not is_cypress else "UG · PG · MBA"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{u['name']} — Study in {u['country']} | Tolbert Innovation Hub</title>
  <meta name="description" content="Apply to {u['name']} in {u['city']}, {u['country']} through Tolbert Innovation Hub. Explore programs, scholarships, and admission requirements for Liberian students." />
  <meta property="og:title" content="{u['name']} | Tolbert Innovation Hub Study Abroad" />
  <meta property="og:description" content="Discover {u['name']} — {u['tagline']}. Apply via TIH for exclusive scholarships and guidance." />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <style>
    .uni-detail-hero {{
      background: {hero_grad};
      padding: clamp(4rem,8vw,7rem) 0 clamp(3rem,6vw,5.5rem);
      color: #fff;
      position: relative;
      overflow: hidden;
    }}
    .uni-detail-hero::before {{
      content: '';
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }}
    .uni-hero-inner {{ position: relative; z-index: 1; }}
    .uni-breadcrumb {{ font-size: 0.85rem; opacity: 0.75; margin-bottom: 1rem; }}
    .uni-breadcrumb a {{ color: #fff; text-decoration: none; }}
    .uni-breadcrumb a:hover {{ text-decoration: underline; }}
    .uni-abbr-hero {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 72px; height: 72px;
      background: rgba(255,255,255,0.15);
      border: 2px solid rgba(255,255,255,0.3);
      border-radius: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      color: #fff;
      margin-bottom: 1.25rem;
    }}
    .uni-hero-meta {{
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }}
    .uni-meta-chip {{
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 20px;
      padding: 0.35rem 0.9rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: #fff;
    }}
    .uni-section {{
      padding: clamp(2.5rem,5vw,4.5rem) 0;
    }}
    .uni-section-alt {{
      background: #f9fafb;
      padding: clamp(2.5rem,5vw,4.5rem) 0;
    }}
    .uni-section-title {{
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: clamp(1.4rem,2.5vw,1.8rem);
      color: #111827;
      margin-bottom: 0.5rem;
    }}
    .uni-section-lead {{
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 2rem;
    }}
    .two-col-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }}
    @media (max-width: 768px) {{
      .two-col-grid {{ grid-template-columns: 1fr; }}
    }}
    .prog-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px,1fr));
      gap: 1.25rem;
    }}
    .sch-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
      gap: 1.25rem;
    }}
    .apply-section {{
      background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%);
      padding: clamp(3rem,6vw,5rem) 0;
    }}
    .apply-inner {{
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 3rem;
      align-items: start;
    }}
    @media (max-width: 860px) {{
      .apply-inner {{ grid-template-columns: 1fr; }}
    }}
    .apply-info-title {{
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: clamp(1.4rem,2.5vw,1.9rem);
      color: #111827;
      margin-bottom: 0.75rem;
    }}
    .apply-meta-row {{
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.9rem;
      color: #374151;
      margin-bottom: 0.6rem;
    }}
    .apply-cta-strip {{
      margin-top: 1.75rem;
      padding: 1.25rem;
      background: #fff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      text-align: center;
    }}
  </style>
</head>
<body>
{NAV}

  <main id="main-content">

    <!-- HERO -->
    <section class="uni-detail-hero">
      <div class="container uni-hero-inner">
        <p class="uni-breadcrumb">
          <a href="index.html">Home</a> &rsaquo;
          <a href="study-abroad.html">Study Abroad</a> &rsaquo;
          {u['name']}
        </p>
        <div class="uni-abbr-hero">{u['abbr']}</div>
        <h1 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(1.75rem,4vw,2.8rem);line-height:1.2;margin-bottom:0.6rem;">{u['name']}</h1>
        <p style="font-size:clamp(1rem,1.8vw,1.2rem);opacity:0.88;margin:0;">{u['tagline']}</p>
        <div class="uni-hero-meta">
          <span class="uni-meta-chip">{u['flag']} {location}</span>
          <span class="uni-meta-chip">📅 Intake: {u['intake']}</span>
          <span class="uni-meta-chip">💰 {u['tuition']}</span>
          <span class="uni-meta-chip">🎓 {deg_levels}</span>
          <span class="uni-meta-chip">✅ Scholarships Available</span>
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="uni-section">
      <div class="container">
        <div class="two-col-grid">
          <div>
            <h2 class="uni-section-title">About {u['name']}</h2>
            <p style="font-size:0.97rem;color:#374151;line-height:1.8;">{u['about']}</p>
            <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
              <a href="#apply-form" class="btn btn-primary">Apply Now →</a>
              <a href="study-abroad.html" class="btn btn-outline">← All Universities</a>
            </div>
          </div>
          <div>
            <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.15rem;color:#111827;margin-bottom:1.25rem;">Why Choose {u['abbr']}?</h3>
            <div style="display:flex;flex-direction:column;gap:0.85rem;">{hi_html}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS -->
    <section class="uni-section-alt">
      <div class="container">
        <h2 class="uni-section-title">Programs &amp; Degrees</h2>
        <p class="uni-section-lead">Explore the range of programs available for international students at {u['name']}.</p>
        <div class="prog-grid">{prog_html}
        </div>
      </div>
    </section>

    <!-- REQUIREMENTS -->
    <section class="uni-section">
      <div class="container">
        <div class="two-col-grid">
          <div>
            <h2 class="uni-section-title">Admission Requirements</h2>
            <p class="uni-section-lead">Meet these requirements to be eligible to apply through TIH.</p>
            <ul style="list-style:none;padding:0;margin:0;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">{req_html}
              <li style="padding:0.6rem 0;font-size:0.92rem;color:#374151;">
                <span style="color:#059669;margin-right:0.5rem;font-size:1rem;">✓</span>TIH counseling session (free — booked after application)
              </li>
            </ul>
          </div>
          <div>
            <h2 class="uni-section-title">Campus Life</h2>
            <p class="uni-section-lead">Student life at {u['name']}.</p>
            <p style="font-size:0.95rem;color:#374151;line-height:1.8;">{u['campus']}</p>
            <div style="margin-top:1.5rem;background:#fff3cd;border:1px solid #ffc107;border-radius:10px;padding:1rem 1.25rem;">
              <p style="font-size:0.9rem;font-weight:600;color:#856404;margin:0 0 0.35rem;">🌍 TIH Student Support</p>
              <p style="font-size:0.88rem;color:#856404;margin:0;">Tolbert Innovation Hub provides dedicated pre-departure orientation, airport pick-up coordination, visa guidance, and ongoing pastoral support throughout your studies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SCHOLARSHIPS -->
    <section class="uni-section-alt">
      <div class="container">
        <h2 class="uni-section-title">Scholarships &amp; Funding</h2>
        <p class="uni-section-lead">Available financial support for students enrolling at {u['name']} through TIH.</p>
        <div class="sch-grid">{sch_html}
          <div style="background:#002868;color:#fff;border-radius:10px;padding:1.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.75rem;">
            <p style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;margin:0;">Need More Funding?</p>
            <p style="font-size:0.85rem;opacity:0.85;margin:0;">Our counselors can guide you through additional scholarship opportunities including Chevening, Fulbright, and DAAD.</p>
            <a href="fully-funded-scholarship.html" style="background:#fff;color:#002868;border-radius:6px;padding:0.5rem 1rem;font-size:0.85rem;font-weight:600;text-decoration:none;">View All Scholarships →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- APPLY FORM -->
    <section class="apply-section" id="apply-form">
      <div class="container">
        <div class="apply-inner">

          <!-- Left: info -->
          <div>
            <p style="font-size:0.8rem;font-weight:700;letter-spacing:0.1em;color:{accent};text-transform:uppercase;margin-bottom:0.5rem;">Ready to Apply?</p>
            <h2 class="apply-info-title">Start Your Application to {u['name']}</h2>
            <p style="font-size:0.95rem;color:#6b7280;margin-bottom:1.5rem;">Fill in this short form and our team will contact you within 2 business days to guide your full application.</p>

            <div class="apply-meta-row"><span>🏛️</span><strong>{u['name']}</strong></div>
            <div class="apply-meta-row"><span>{u['flag']}</span><span>{location}</span></div>
            <div class="apply-meta-row"><span>📅</span><span>Next intake: <strong>{u['intake']}</strong></span></div>
            <div class="apply-meta-row"><span>💰</span><span>Tuition: <strong>{u['tuition']}</strong></span></div>
            <div class="apply-meta-row"><span>🏆</span><span>Scholarships: <strong style="color:#059669;">Available</strong></span></div>

            <div class="apply-cta-strip">
              <p style="font-size:0.88rem;font-weight:600;margin:0 0 0.5rem;">Questions? Talk to us directly</p>
              <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
                <a href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size:0.82rem;padding:0.5rem 1rem;">💬 WhatsApp</a>
                <a href="mailto:info@tolbertinnovationhub.org" class="btn btn-outline" style="font-size:0.82rem;padding:0.5rem 1rem;">📧 Email Us</a>
              </div>
            </div>
          </div>

          <!-- Right: form -->
          <form class="form-card"
                data-success-message="Thank you! Your application to {u['name']} has been received. Our team will contact you within 2 business days."
                novalidate>
            <h3>Application Form</h3>
            <p class="form-card-lead">Fields marked <span style="color:var(--brand-red)">*</span> are required.</p>
            <input type="hidden" name="University" value="{u['name']}" />

            <div class="form-row2">
              <div class="fg2">
                <label for="app-name">Full Name <span class="req">*</span></label>
                <input type="text" id="app-name" name="fullName" placeholder="As on passport" required />
              </div>
              <div class="fg2">
                <label for="app-email">Email Address <span class="req">*</span></label>
                <input type="email" id="app-email" name="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div class="fg2" style="margin-bottom:1.1rem;">
              <label for="app-phone">Phone / WhatsApp <span class="req">*</span></label>
              <input type="tel" id="app-phone" name="phone" placeholder="+231 XXX XXX XXX" required />
            </div>

            <div class="form-row2">
              <div class="fg2">
                <label for="app-edu">Current Education Level <span class="req">*</span></label>
                <select id="app-edu" name="currentEducation" required>
                  <option value="">Select level</option>
                  <option>WASSCE / Senior High School</option>
                  <option>Diploma / Certificate</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                </select>
              </div>
              <div class="fg2">
                <label for="app-deg">Preferred Degree Level <span class="req">*</span></label>
                <select id="app-deg" name="degreeLevel" required>
                  <option value="">Select degree</option>
                  <option>Undergraduate (UG)</option>
                  <option>Postgraduate (PG)</option>
                  <option>MBA</option>
                  <option>Ph.D / Research</option>
                </select>
              </div>
            </div>

            <div class="fg2" style="margin-bottom:1.1rem;">
              <label for="app-prog">Preferred Program / Field of Study <span class="req">*</span></label>
              <input type="text" id="app-prog" name="preferredProgram" placeholder="e.g. Computer Science, Nursing, Business" required />
            </div>

            <div class="fg2" style="margin-bottom:1.1rem;">
              <label for="app-note">Personal Note (optional)</label>
              <textarea id="app-note" name="personalNote" rows="3" placeholder="Tell us a little about yourself and why you want to study at {u['name']}…" style="width:100%;padding:0.7rem 0.9rem;border:1.5px solid #d1d5db;border-radius:8px;font-size:0.92rem;font-family:'Inter',sans-serif;resize:vertical;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%;padding:0.85rem;font-size:1rem;font-weight:700;">
              Submit Application →
            </button>
          </form>

        </div>
      </div>
    </section>

    <!-- BACK CTA -->
    <section style="padding:2rem 0;text-align:center;background:#f9fafb;">
      <div class="container">
        <p style="font-size:0.95rem;color:#6b7280;margin-bottom:1rem;">Explore other partner universities or browse scholarships</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="study-abroad.html" class="btn btn-outline">← All Universities</a>
          <a href="fully-funded-scholarship.html" class="btn btn-outline-blue">View Scholarships →</a>
        </div>
      </div>
    </section>

  </main>

{FOOTER}

  <script src="main.js"></script>
  <script src="chatbot.js"></script>
</body>
</html>"""


# ─── WRITE FILES ─────────────────────────────────────────────────────────────

def main():
    created = []
    for u in UNIS:
        filename = f"university-{u['slug']}.html"
        path = os.path.join(BASE, filename)
        html = build_page(u)
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        created.append(filename)
        print(f"  ✓ {filename}")

    print(f"\nDone — {len(created)} files created.")

if __name__ == "__main__":
    main()
