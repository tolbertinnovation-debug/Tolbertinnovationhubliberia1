#!/usr/bin/env python3
"""Generate 17 university detail HTML pages for TIH study abroad portal — new portal design."""
import os

BASE = os.path.dirname(os.path.abspath(__file__))

UNIS = [
  {
    "slug": "graphic-era-university", "abbr": "GEU", "name": "Graphic Era University",
    "city": "Dehradun", "state": "Uttarakhand", "country": "India", "flag": "🇮🇳",
    "tagline": "A Pioneer in Technical Education & Research",
    "badgeColor": "#3b82f6", "rating": 4.5, "students": "18,000+", "programsCount": "200+",
    "accreditation": "NAAC A+", "ranking": 45, "placementRate": "85%",
    "founded": 1993, "tuition": "$2,500–$4,500/yr", "intake": "July / January",
    "tags": ["Global University", "Industry Connect", "Research", "Scholarship Available"],
    "about": "Graphic Era University is a NAAC 'A+' graded institution located in the scenic Doon Valley of Dehradun. Established in 1993, it has grown into one of India's leading private universities, enrolling over 18,000 students from 40+ countries. The university is recognized by the UGC and is known for its strong industry connections, modern labs, and vibrant research culture across engineering, sciences, business, and agriculture.",
    "highlights": [("NAAC 'A+' Accredited","One of India's highest-rated private universities for academic quality"),("18,000+ Students","A truly international community from over 40 countries"),("Industry Partnerships","Tie-ups with TCS, Infosys, IBM, and 300+ recruiters"),("Lush 50-Acre Campus","Modern hostels, labs, sports facilities in the Himalayan foothills")],
    "programs": [("B.Tech / M.Tech","Computer Science, Electronics, Civil, Mechanical, Electrical"),("BBA / MBA","Business Administration, Finance, Marketing, HR"),("B.Sc / M.Sc","Physics, Chemistry, Mathematics, Biotechnology"),("B.Sc Agriculture","Modern agri-sciences with hands-on farm exposure"),("Ph.D Programs","Research doctorates across all schools")],
    "requirements": ["WASSCE / Senior Secondary Certificate (minimum grade C)","Passport valid for at least 18 months","English proficiency (IELTS 5.5+ or TOEFL 60+ recommended)","Statement of Purpose (500–800 words)","Two academic / character reference letters","Medical fitness certificate","Financial sponsorship documents"],
    "scholarships": [("Merit Scholarship","Up to 30% tuition waiver for CGPA 3.5+/4.0 after first semester"),("International Student Bursary","One-time $500 settling-in grant for first-year internationals"),("Sports Excellence Award","Up to 50% fee reduction for state/national-level athletes")],
    "campus": "The Graphic Era campus sits at the foot of the Shivalik range. Students enjoy 24/7 high-speed WiFi, air-conditioned dormitories, multiple canteens serving Indian and international cuisine, a 400-seat auditorium, swimming pool, cricket grounds, and a dedicated international student office that assists with visa extensions, cultural orientation, and city trips.",
    "videoId": "xdBHB0sF5KE",
  },
  {
    "slug": "pp-savani-university", "abbr": "PPSU", "name": "PP Savani University",
    "city": "Surat", "state": "Gujarat", "country": "India", "flag": "🇮🇳",
    "tagline": "Nurturing Leaders for a Global World",
    "badgeColor": "#8b5cf6", "rating": 4.3, "students": "8,000+", "programsCount": "120+",
    "accreditation": "UGC", "ranking": 82, "placementRate": "78%",
    "founded": 2015, "tuition": "$2,000–$3,500/yr", "intake": "July / January",
    "tags": ["Scholarship Available", "Industry Connect", "Affordable Fees"],
    "about": "PP Savani University, established by the reputed Shree P.P. Savani Group, is a fast-growing institution in Surat — India's diamond and textile capital. The university offers programs across engineering, sciences, business, and nursing. With modern infrastructure spanning 110 acres and a focus on practical learning, PPSU is an ideal destination for Liberian students seeking quality education at affordable costs.",
    "highlights": [("UGC Recognised","Fully government-approved degree programs accepted worldwide"),("Nursing Excellence","State-of-the-art simulation labs for healthcare students"),("Surat Location","India's fastest-growing city — a hub of business and industry"),("Affordable Fees","Among the most cost-effective universities for internationals")],
    "programs": [("B.Tech","Civil, Mechanical, Computer Science, Electrical Engineering"),("B.Sc Nursing","4-year professional nursing program with hospital placements"),("BBA / MBA","Business, Finance, Entrepreneurship, International Business"),("B.Sc Sciences","Chemistry, Physics, IT, Biotechnology"),("M.Tech / M.Sc","Postgraduate specialisations in all engineering streams")],
    "requirements": ["WASSCE or equivalent with minimum grade C in relevant subjects","Valid passport (18+ months)","English language documents (medium of instruction certificate acceptable)","Statement of Purpose","Two reference letters","Medical certificate and vaccination records","Bank statement / sponsor letter"],
    "scholarships": [("International Welcome Scholarship","15% tuition reduction for all new international students"),("Academic Excellence Award","Up to 25% waiver for first-class academic performance"),("Nursing Dedication Grant","Partial fee support for students pursuing nursing programs")],
    "campus": "PPSU's 110-acre campus in Surat features modern hostel blocks, dedicated labs for every discipline, a library with 50,000+ volumes, a sports complex with indoor and outdoor facilities, and an international student cell that organises cultural evenings, field trips across Gujarat, and assistance with student visa processes.",
    "videoId": "WBZb7mSkXPM",
  },
  {
    "slug": "gulzar-group-of-institutes", "abbr": "GGI", "name": "Gulzar Group of Institutes",
    "city": "Ludhiana", "state": "Punjab", "country": "India", "flag": "🇮🇳",
    "tagline": "Engineering Excellence in the Heart of Punjab",
    "badgeColor": "#f59e0b", "rating": 4.2, "students": "12,000+", "programsCount": "80+",
    "accreditation": "AICTE", "ranking": 95, "placementRate": "75%",
    "founded": 2002, "tuition": "$1,800–$3,200/yr", "intake": "August / January",
    "tags": ["Scholarship Available", "Industry Connect", "Technical Excellence"],
    "about": "Gulzar Group of Institutes is a premier technical institution in Ludhiana, Punjab — India's industrial heartland. Approved by AICTE and affiliated with reputable Punjab universities, GGI is known for producing job-ready engineers and management professionals. The institute maintains an excellent placement record with over 300 companies recruiting from campus each year.",
    "highlights": [("AICTE Approved","All technical programs meet national quality standards"),("300+ Recruiters","Strong industry network ensuring high placement rates"),("Punjab Location","Close to Chandigarh and Delhi — great connectivity and culture"),("Pharmacy Programs","Dedicated B.Pharm and M.Pharm with modern drug labs")],
    "programs": [("B.Tech / M.Tech","CSE, ECE, Civil, Mechanical, Electrical"),("B.Pharm / M.Pharm","Pharmaceutical sciences with hands-on lab training"),("BBA / MBA","Management with focus on supply chain and manufacturing"),("BCA / MCA","Computer applications and software development"),("Diploma Programs","2-3 year technical diplomas in engineering trades")],
    "requirements": ["WASSCE or equivalent (B.Tech: minimum C in Math & Science)","Passport valid for duration of study","English proficiency evidence","SOP explaining choice of program","Academic transcripts (attested)","Medical fitness certificate","Financial guarantee letter"],
    "scholarships": [("Merit-cum-Means Scholarship","Up to 20% tuition relief for high-scoring applicants"),("African Student Grant","Special $300 settling-in grant for African students"),("Industry Sponsored Awards","Partial scholarships funded by partner companies")],
    "campus": "Set across a well-maintained campus in Ludhiana city, GGI offers on-campus hostels, 24/7 internet, canteen, gym, sports courts, and a dedicated international student lounge. Ludhiana's vibrant culture and proximity to Amritsar's Golden Temple make it a memorable study destination.",
    "videoId": "k5DyVCxJWMg",
  },
  {
    "slug": "mats-university", "abbr": "MATS", "name": "MATS University",
    "city": "Raipur", "state": "Chhattisgarh", "country": "India", "flag": "🇮🇳",
    "tagline": "Shaping Professionals for a Changing World",
    "badgeColor": "#10b981", "rating": 4.1, "students": "10,000+", "programsCount": "100+",
    "accreditation": "UGC", "ranking": 110, "placementRate": "72%",
    "founded": 2006, "tuition": "$1,500–$3,000/yr", "intake": "July / January",
    "tags": ["Scholarship Available", "Lowest Tuition", "Law Programs"],
    "about": "MATS University, established in 2006 and recognised by UGC, is located in Raipur — the capital of Chhattisgarh and a rapidly developing economic hub. The university offers diverse programs spanning law, management, engineering, and agriculture. Its low tuition, modern facilities, and a dedicated international student support office make it a popular choice for African students.",
    "highlights": [("UGC Recognised","Degrees are government-approved and internationally accepted"),("Lowest Tuition","Most affordable fees among TIH partner universities"),("Law Programs","One of few partner unis offering LLB and LLM for Africans"),("Agriculture Sciences","Practical farm training in fertile Chhattisgarh terrain")],
    "programs": [("LLB / LLM","3-year and 5-year law programs; corporate and international law"),("BBA / MBA","Business and management with entrepreneurship focus"),("B.Tech","Civil, Mechanical, CSE — strong industry tie-ups"),("B.Sc Agriculture","Modern agronomy and crop science programs"),("Ph.D","Doctoral programs in law, management, and sciences")],
    "requirements": ["WASSCE / Higher Secondary (minimum pass grade)","Passport with at least 2 years validity","English language documents","SOP (400–600 words)","Reference letter (one acceptable)","Medical certificate","Bank statement showing sufficient funds"],
    "scholarships": [("MATS International Grant","10–20% fee reduction for first-year international students"),("Legal Studies Award","Partial scholarship for students enrolling in LLB/LLM"),("Agricultural Excellence Bursary","Reduced fees for B.Sc Agriculture students")],
    "campus": "MATS University's campus in Raipur features modern lecture halls, a well-stocked library, computer centres, sports grounds, and comfortable hostel accommodation. Raipur is a growing smart city with good food, connectivity, and a peaceful study environment.",
    "videoId": "P6DtDj_BSYE",
  },
  {
    "slug": "sr-university", "abbr": "SRU", "name": "SR University",
    "city": "Warangal", "state": "Telangana", "country": "India", "flag": "🇮🇳",
    "tagline": "Innovation-Driven Education in Telangana",
    "badgeColor": "#ef4444", "rating": 4.4, "students": "15,000+", "programsCount": "140+",
    "accreditation": "NAAC A", "ranking": 78, "placementRate": "80%",
    "founded": 2013, "tuition": "$2,200–$3,800/yr", "intake": "July / December",
    "tags": ["NAAC Accredited", "Research", "IT Hub", "Scholarship Available"],
    "about": "SR University is a UGC-recognised institution in Warangal, Telangana — a city famous for its historic temples and fast-growing IT sector. The university focuses on engineering, computer science, business, and sciences with a strong emphasis on research and innovation. Its modern infrastructure and industry partnerships make it a rising star in South Indian technical education.",
    "highlights": [("NAAC Accredited","Quality-assured programs across all disciplines"),("IT & Tech Hub","Located near Hyderabad's booming IT corridor"),("Research Culture","Active research centres in AI, IoT, and data science"),("Diverse Programs","From engineering to humanities — something for every student")],
    "programs": [("B.Tech / M.Tech","CSE, AI & ML, Data Science, ECE, Mechanical, Civil"),("BBA / MBA","Business with technology management specialisation"),("B.Sc","Physics, Chemistry, Mathematics, Computer Science"),("MCA","Master of Computer Applications — 2-year intensive"),("Ph.D Research","Engineering, sciences, and management research degrees")],
    "requirements": ["WASSCE / Senior Secondary Certificate (Math/Science for engineering)","Valid passport","English proficiency (IELTS 5.5 recommended for PG)","SOP","Academic transcripts","Medical certificate","Sponsorship or financial affidavit"],
    "scholarships": [("SR Merit Scholarship","Up to 30% tuition waiver for top-ranked applicants"),("Tech Innovation Award","Full lab fees waiver for students in AI/ML programs"),("International Student Discount","Flat 15% reduction on accommodation fees")],
    "campus": "SR University's campus covers 100 acres in the heart of Warangal. Facilities include advanced computing labs, an innovation centre, well-furnished hostels, cafeteria with multicultural menu options, sports centre, and a student welfare office that proactively assists international students.",
    "videoId": "LXb3EKWsInQ",
  },
  {
    "slug": "marwadi-university", "abbr": "MU", "name": "Marwadi University",
    "city": "Rajkot", "state": "Gujarat", "country": "India", "flag": "🇮🇳",
    "tagline": "Where Entrepreneurship Meets Excellence",
    "badgeColor": "#f97316", "rating": 4.5, "students": "15,000+", "programsCount": "180+",
    "accreditation": "NAAC A", "ranking": 67, "placementRate": "88%",
    "founded": 2015, "tuition": "$2,000–$3,500/yr", "intake": "July / January",
    "tags": ["NAAC Accredited", "Startup Incubator", "Research", "Scholarship Available"],
    "about": "Marwadi University is a fast-rising private university in Rajkot, Gujarat, recognised by UGC and NAAC. It places a strong emphasis on entrepreneurship, innovation, and industry-readiness. The university runs dedicated startup incubators and has produced several successful student entrepreneurs. With over 15,000 students and 400+ faculty, it offers a comprehensive academic experience in engineering, IT, and business.",
    "highlights": [("NAAC Accredited","Recognised for high-quality teaching and infrastructure"),("Startup Incubator","Funded incubation centre for student-led ventures"),("Rajkot Location","Gujarat's industrial city — great for engineering & business"),("Ph.D Programs","Active doctoral research in multiple disciplines")],
    "programs": [("B.Tech / M.Tech","CSE, IT, Electronics, Mechanical, Chemical Engineering"),("BBA / MBA","Entrepreneurship, Finance, Marketing — industry-integrated"),("B.Sc / M.Sc","Physics, Chemistry, IT, Data Science"),("B.Design","Industrial and communication design — creative programs"),("Ph.D","Research programs in engineering, sciences, and management")],
    "requirements": ["WASSCE or equivalent with C grade minimum","Passport (valid 18+ months)","English language certificate or medium of instruction letter","Statement of Purpose","Two references","Medical certificate","Proof of funds"],
    "scholarships": [("Marwadi Global Scholarship","Up to 25% tuition waiver for international achievers"),("Entrepreneurship Excellence Award","Full incubation and mentoring support grant"),("Early Bird Discount","10% fee reduction for applications before March 31")],
    "campus": "Marwadi University's 200-acre campus is one of Gujarat's most modern. It features a dedicated innovation hub, design studios, well-equipped engineering labs, modern hostels, a sports complex with Olympic-size swimming pool, and a culturally diverse food court. The international office organises regular cultural exchange events.",
    "videoId": "KHbRdlbTOCI",
  },
  {
    "slug": "desh-bhagat-university", "abbr": "DBU", "name": "Desh Bhagat University",
    "city": "Mandi Gobindgarh", "state": "Punjab", "country": "India", "flag": "🇮🇳",
    "tagline": "Quality Education Rooted in National Values",
    "badgeColor": "#06b6d4", "rating": 4.3, "students": "20,000+", "programsCount": "150+",
    "accreditation": "UGC", "ranking": 88, "placementRate": "82%",
    "founded": 2009, "tuition": "$1,800–$3,200/yr", "intake": "August / January",
    "tags": ["Nursing Specialisation", "African-Friendly", "Scholarship Available"],
    "about": "Desh Bhagat University, established in 2009 and UGC-recognised, is located in Mandi Gobindgarh — Punjab's historic 'Steel City.' The university is particularly well-known for its nursing, agriculture, and management programs. DBU's hands-on training approach, affordable fee structure, and welcoming community for international students from Africa have made it a trusted TIH partner.",
    "highlights": [("Nursing Specialisation","World-class BSc Nursing with hospital clinical rotations"),("Agriculture Hub","Practical farm programs in Punjab's fertile heartland"),("Affordable Costs","Competitive fees with good scholarship options"),("African-Friendly","Active African student association on campus")],
    "programs": [("B.Sc Nursing","4-year professional nursing; clinical training in empanelled hospitals"),("B.Tech / M.Tech","Engineering with focus on manufacturing and automation"),("BBA / MBA","Business and management with rural enterprise focus"),("B.Sc Agriculture","Agri-sciences, horticulture, soil science"),("Diploma Programs","Short-term technical and nursing assistant diplomas")],
    "requirements": ["WASSCE or equivalent (Biology & Chemistry required for Nursing)","Valid passport","English language medium certificate","SOP","Medical certificate (including nursing fitness test for Nursing applicants)","Reference letters","Bank statement"],
    "scholarships": [("DBU International Scholarship","15% tuition waiver for African students"),("Nursing Dedication Award","Additional hostel fee subsidy for nursing students"),("Academic Excellence Grant","25% reduction for students scoring 80%+ in Year 1")],
    "campus": "DBU's green campus in Mandi Gobindgarh provides comfortable hostels, simulation nursing labs, agricultural demonstration farms, sports grounds, and a library. The university's student services team assists with visa renewals and cultural orientation. Punjab's friendly locals and vibrant festivals make campus life memorable.",
    "videoId": "W8gBFTVrLVk",
  },
  {
    "slug": "lovely-professional-university", "abbr": "LPU", "name": "Lovely Professional University",
    "city": "Phagwara", "state": "Punjab", "country": "India", "flag": "🇮🇳",
    "tagline": "India's Largest Private University — Think Big, Achieve More",
    "badgeColor": "#f97316", "rating": 4.9, "students": "30,000+", "programsCount": "300+",
    "accreditation": "NAAC A++", "ranking": 28, "placementRate": "98%",
    "founded": 2005, "tuition": "$2,800–$5,000/yr", "intake": "January / July",
    "tags": ["Global University", "Industry Connect", "Research", "Scholarship Available"],
    "about": "Lovely Professional University (LPU) is India's largest single-campus university, spanning 600+ acres in Phagwara, Punjab. With over 30,000 students from 50+ countries and 300+ programs, LPU is a truly global institution. It is NAAC 'A++' accredited and consistently ranked among India's top 28 universities. LPU's emphasis on holistic development, cutting-edge research, and an unmatched startup ecosystem makes it ideal for ambitious Liberian students.",
    "highlights": [("India's Largest Campus","600+ acres; 30,000+ students from 50+ countries"),("NAAC 'A++' Accredited","India's highest-rated private university grade"),("300+ Programs","The widest choice of degrees under one roof"),("World-Class Placements","98% placement rate; 700+ recruiters on campus")],
    "programs": [("B.Tech / M.Tech","CSE, AI, Robotics, IoT, Mechanical, Civil — 20+ specialisations"),("BBA / MBA","Business, Fintech, Data Analytics, International Business"),("B.Design / M.Design","Fashion, UX, Product, Interior Design"),("Computing & IT","BCA, MCA, B.Sc CS, M.Sc Data Science"),("Ph.D Research","Fully funded research positions in 20+ departments")],
    "requirements": ["WASSCE / A-levels or equivalent (minimum 55% aggregate)","Passport valid 18+ months","IELTS 6.0 or TOEFL 70+ (recommended; exemption via interview)","SOP (600–1000 words)","Two academic references","Medical fitness certificate","Proof of financial support ($5,000/yr minimum)"],
    "scholarships": [("LPU Global Scholarship","Up to 50% tuition waiver for outstanding merit applicants"),("TIH Partner Discount","Exclusive 20% reduction for students applying via TIH"),("Sports & Arts Excellence","Full scholarship for national/international champions")],
    "campus": "LPU's 600-acre campus is essentially a self-sufficient city. It includes 40+ canteens, an 8-acre lake, Olympic sports facilities, 12 hostels with gym and WiFi, a mall, hospital, bank, and the award-winning LPU One App for digital campus management. International students receive a dedicated buddy, airport pick-up, and a 3-day orientation week.",
    "videoId": "FNMxYF1JYVg",
  },
  {
    "slug": "royal-global-university", "abbr": "RGU", "name": "Royal Global University",
    "city": "Guwahati", "state": "Assam", "country": "India", "flag": "🇮🇳",
    "tagline": "Gateway to North-East India's Academic Excellence",
    "badgeColor": "#8b5cf6", "rating": 4.2, "students": "12,000+", "programsCount": "100+",
    "accreditation": "UGC", "ranking": 92, "placementRate": "76%",
    "founded": 2010, "tuition": "$2,000–$3,500/yr", "intake": "July / January",
    "tags": ["Scholarship Available", "Nature Campus", "Research"],
    "about": "Royal Global University (RGU) is a UGC-recognised private university in Guwahati — the gateway to North-East India and the commercial capital of Assam. RGU offers programs in engineering, business, sciences, and humanities in a peaceful, nature-rich environment. The university's proximity to South-East Asia and its multicultural student body make it a distinctive study destination.",
    "highlights": [("North-East Gateway","Strategic location connecting India to Bangladesh, Myanmar"),("Nature Campus","Surrounded by Brahmaputra river plains and tea gardens"),("Humanities Strength","Strong arts, social sciences, and language programs"),("Ph.D Opportunities","Active research in biodiversity, environment, and social sciences")],
    "programs": [("B.Tech / M.Tech","CSE, Civil, Electrical, Electronics and Communication"),("BBA / MBA","Business with hospitality and tourism specialisations"),("B.Sc / M.Sc","Physics, Chemistry, Mathematics, Environmental Science"),("B.A / M.A","English Literature, Political Science, Economics, Psychology"),("Ph.D","Research in sciences, humanities, and management")],
    "requirements": ["WASSCE or equivalent (subject requirements vary by program)","Valid passport","English language certificate","Statement of Purpose","Reference letters","Medical certificate","Financial sponsorship documents"],
    "scholarships": [("RGU Merit Award","Up to 20% fee waiver for academically strong applicants"),("North-East Diversity Grant","Special bursary for students from underrepresented nations"),("Research Fellowship","Fully-funded positions for Ph.D candidates in select disciplines")],
    "campus": "RGU's peaceful campus in Guwahati features tree-lined avenues, modern hostels, well-equipped labs, a cultural centre showcasing North-East India's rich heritage, sports facilities, and an international student centre. Guwahati's vibrant food scene, river ghats, and proximity to Kaziranga National Park make student life exceptional.",
    "videoId": "JcU0vECdFXQ",
  },
  {
    "slug": "sharda-university", "abbr": "SU", "name": "Sharda University",
    "city": "Greater Noida", "state": "Uttar Pradesh", "country": "India", "flag": "🇮🇳",
    "tagline": "A Truly International University Near Delhi",
    "badgeColor": "#3b82f6", "rating": 4.7, "students": "25,000+", "programsCount": "250+",
    "accreditation": "NAAC A+", "ranking": 35, "placementRate": "92%",
    "founded": 2009, "tuition": "$3,500–$6,000/yr", "intake": "July / January",
    "tags": ["Global University", "Medical Programs", "Scholarship Available", "Near Delhi"],
    "about": "Sharda University, established in 2009 and NAAC accredited, is one of NCR's most cosmopolitan universities, hosting students from 85+ countries on its 63-acre campus in Greater Noida — just 35 km from New Delhi International Airport. The university offers world-class programs in medicine, engineering, law, and business. Its large African student community and dedicated international office make it a home away from home for Liberian students.",
    "highlights": [("85+ Countries","One of India's most internationally diverse campuses"),("Near Delhi","35 km from Indira Gandhi International Airport"),("Medical Programs","MBBS and allied health — globally recognised"),("Strong Law School","LLB, LLM with moot court and legal aid clinic")],
    "programs": [("MBBS / BDS","5.5-year medical degree; MCI/NMC recognised; hospital training"),("B.Tech / M.Tech","Engineering across 10+ specialisations"),("LLB / LLM","Integrated 5-year and standalone 3-year law programs"),("BBA / MBA","Business with global management perspective"),("Ph.D Research","Doctorates in medicine, engineering, law, and social sciences")],
    "requirements": ["WASSCE or equivalent (MBBS: Biology, Chemistry, Physics with A/B grades)","Passport valid 18+ months","IELTS 6.0 / TOEFL 70+ (required for MBBS and LLB)","Detailed SOP","Two strong reference letters","Medical fitness certificate (MBBS: additional medical screening)","Proof of funds ($8,000+ for medical programs)"],
    "scholarships": [("Sharda Global Excellence Scholarship","Up to 40% tuition waiver for top applicants"),("African Achievers Award","Exclusive $1,000 grant for African students in Year 1"),("Medical Sciences Bursary","Partial fee relief for MBBS students after Year 2")],
    "campus": "Sharda University's 63-acre campus in Greater Noida is a vibrant international community. Amenities include 10 hostels with AC rooms, a teaching hospital, simulation labs, multiple restaurants serving African and Indian food, a cricket ground, basketball courts, a mosque and meditation centre, and a 24/7 medical facility. Frequent Delhi day-trips are organised by the international cell.",
    "videoId": "q-5SQJv9eAg",
  },
  {
    "slug": "amity-university", "abbr": "AU", "name": "Amity University",
    "city": "Noida", "state": "Uttar Pradesh", "country": "India", "flag": "🇮🇳",
    "tagline": "India's Top-Ranked Private University",
    "badgeColor": "#ef4444", "rating": 4.8, "students": "35,000+", "programsCount": "400+",
    "accreditation": "NAAC A+", "ranking": 22, "placementRate": "95%",
    "founded": 2005, "tuition": "$4,000–$7,500/yr", "intake": "July / January",
    "tags": ["QS Ranked", "Global Network", "Research", "Scholarship Available"],
    "about": "Amity University, Noida is India's premier private research university and is ranked among the top 10 universities in India by QS. With campuses in 10 countries and over 150,000 alumni worldwide, Amity offers an unparalleled global academic network. Its programs in business, engineering, media, and sciences are delivered by world-class faculty and supported by Fortune 500 industry partnerships.",
    "highlights": [("QS Ranked","Consistently in India's top 10 — globally recognised brand"),("Global Network","Campuses in UK, UAE, China, Singapore, and more"),("Media & Communication","India's best journalism and film-making school"),("Fortune 500 Tie-ups","Placements at Google, Amazon, PwC, EY, and 900+ firms")],
    "programs": [("BBA / MBA","Business, Finance, Marketing, HR — with global exchange options"),("B.Tech / M.Tech","CSE, IT, Electronics, Aerospace, Mechanical"),("B.Sc Media","Journalism, Mass Communication, Film & TV Production"),("B.Sc / M.Sc","Biotechnology, Chemistry, Applied Sciences"),("Ph.D Research","Internationally co-supervised research programs")],
    "requirements": ["WASSCE or equivalent with minimum 60% aggregate (70% for BBA/MBA)","Passport valid 18+ months","IELTS 6.5 / TOEFL 80+ (required for most programs)","Detailed SOP (700–1000 words)","Two academic references on letterhead","Medical certificate","Proof of funds ($7,000+/yr)"],
    "scholarships": [("Amity Global Merit Scholarship","Up to 50% tuition waiver for outstanding students"),("TIH Exclusive Partnership Award","15% additional reduction for TIH-referred students"),("Research Excellence Fellowship","Full Ph.D funding for research-track applicants")],
    "campus": "Amity Noida's 200-acre campus is a landmark of modern higher education. It features a 2 million-volume digital library, innovation labs, media studios, a 2,000-seat auditorium, Olympic-standard sports facilities, 15 hostels, and a food court with global cuisines. Noida's proximity to Delhi (30 min metro) gives students access to the capital's cultural, professional, and recreational resources.",
    "videoId": "zqGwzF5JNQQ",
  },
  {
    "slug": "khalsa-university", "abbr": "KU", "name": "Khalsa University",
    "city": "Amritsar", "state": "Punjab", "country": "India", "flag": "🇮🇳",
    "tagline": "Values, Knowledge, and Service — Since 1892",
    "badgeColor": "#f59e0b", "rating": 4.3, "students": "10,000+", "programsCount": "90+",
    "accreditation": "UGC", "ranking": 89, "placementRate": "79%",
    "founded": 1892, "tuition": "$1,800–$3,000/yr", "intake": "July / January",
    "tags": ["Heritage University", "Scholarship Available", "Golden Temple City"],
    "about": "Khalsa University, rooted in the heritage of the Khalsa College founded in 1892, is one of Punjab's oldest and most respected institutions. Recognised by UGC and reestablished as a full university, it offers programs in engineering, business, agriculture, and sciences. Located in the spiritually and culturally rich city of Amritsar — home of the iconic Golden Temple — Khalsa University offers students an extraordinary life experience alongside quality education.",
    "highlights": [("130+ Year Heritage","One of India's oldest academic traditions — now a full university"),("Golden Temple City","Study in Amritsar — one of the world's most spiritual cities"),("Agriculture Strength","Strong agri-sciences in Punjab's legendary farming region"),("UGC Recognised","Degrees accepted by employers and further study institutions globally")],
    "programs": [("B.Tech / M.Tech","CSE, ECE, Civil, Mechanical Engineering"),("BBA / MBA","Business with Sikh heritage management values focus"),("B.Sc Agriculture","Modern agri-science with experimental farm facilities"),("B.Sc Sciences","Physics, Chemistry, Maths, Computer Science"),("M.Sc","Postgraduate sciences and environmental studies")],
    "requirements": ["WASSCE or equivalent","Valid passport","English language certificate","SOP","Reference letter","Medical certificate","Bank statement / sponsor letter"],
    "scholarships": [("Khalsa Heritage Scholarship","20% fee reduction for students of all faiths demonstrating service ethos"),("Academic Merit Award","Up to 25% tuition waiver for strong academic performers"),("Agricultural Talent Grant","Bursary for B.Sc Agriculture students from developing nations")],
    "campus": "Khalsa University's heritage campus in Amritsar is a beautiful blend of colonial architecture and modern facilities. Hostels, sports grounds, a heritage museum, agricultural farm, and a community service centre are available. Students regularly visit the Golden Temple, which provides a powerful and calming backdrop to academic life.",
    "videoId": "M7LBbnvAHuQ",
  },
  {
    "slug": "invertis-university", "abbr": "IU", "name": "Invertis University",
    "city": "Bareilly", "state": "Uttar Pradesh", "country": "India", "flag": "🇮🇳",
    "tagline": "Technology and Management for Tomorrow's Professionals",
    "badgeColor": "#10b981", "rating": 4.1, "students": "8,000+", "programsCount": "70+",
    "accreditation": "UGC", "ranking": 105, "placementRate": "74%",
    "founded": 2010, "tuition": "$1,600–$2,800/yr", "intake": "July / January",
    "tags": ["Scholarship Available", "Pharmacy Programs", "Affordable"],
    "about": "Invertis University, established in 2010 and UGC-recognised, is located in Bareilly — a vibrant city in Uttar Pradesh. The university is known for its practical, industry-linked programs in engineering, management, pharmacy, and IT. Affordable fees, a collaborative atmosphere, and strong placement support make Invertis a solid choice for Liberian students entering professional fields.",
    "highlights": [("UGC Recognised","All degrees meet Indian national quality standards"),("Pharmacy Programs","B.Pharm & M.Pharm with advanced pharmaceutical labs"),("IT Industry Links","Campus placement drives by 200+ tech and management firms"),("Affordable Bareilly","Lower cost of living compared to metro cities")],
    "programs": [("B.Tech / M.Tech","CSE, IT, Mechanical, Electronics, Civil"),("B.Pharm / M.Pharm","Pharmaceutical sciences with hospital pharmacology training"),("BBA / MBA","General management, HR, and supply chain programs"),("BCA / MCA","Computer applications and software engineering"),("Diploma Engineering","2-year lateral entry technical diplomas")],
    "requirements": ["WASSCE or equivalent (B.Tech: Math + Science; B.Pharm: Bio + Chem)","Valid passport","English language documents","SOP","Medical certificate","Sponsorship letter or bank statement"],
    "scholarships": [("Invertis Merit Scholarship","Up to 20% tuition waiver for high achievers"),("Pharmacy Excellence Award","Partial fee subsidy for B.Pharm/M.Pharm students"),("African Students' Bursary","$200 book grant for first-year African students")],
    "campus": "Invertis University's campus in Bareilly provides modern hostels, well-equipped engineering and pharmaceutical labs, a library, internet zones, canteen, and sports facilities. Bareilly is a historic city with affordable living costs, good food, and easy rail connections to Delhi (3 hours) and Lucknow.",
    "videoId": "dTyJhCjYV6A",
  },
  {
    "slug": "mvm-institute", "abbr": "MVM", "name": "MVM Institute",
    "city": "Bhopal", "state": "Madhya Pradesh", "country": "India", "flag": "🇮🇳",
    "tagline": "Practical Excellence in the Heart of India",
    "badgeColor": "#06b6d4", "rating": 4.0, "students": "5,000+", "programsCount": "50+",
    "accreditation": "AICTE", "ranking": 120, "placementRate": "70%",
    "founded": 1998, "tuition": "$1,400–$2,600/yr", "intake": "July / January",
    "tags": ["Scholarship Available", "Affordable", "Industry-Integrated"],
    "about": "MVM Institute is a reputed technical and management institution in Bhopal, the 'City of Lakes' in Madhya Pradesh. AICTE-approved and affiliated with leading Madhya Pradesh universities, MVM focuses on delivering practical, industry-integrated education in engineering, sciences, and management. It is known for its disciplined learning environment, experienced faculty, and strong alumni network.",
    "highlights": [("AICTE Approved","Quality-assured technical programs meeting national standards"),("Bhopal Location","India's 'City of Lakes' — affordable, peaceful, and well-connected"),("Industry-Integrated","Programs designed with industry advisory boards"),("Low Cost of Living","Among India's most affordable state capitals")],
    "programs": [("B.Tech","CSE, IT, Mechanical, Civil, Electronics Engineering"),("BBA / MBA","Business management with local and regional industry focus"),("B.Sc","Physics, Chemistry, Mathematics, Computer Science"),("M.Tech","Advanced engineering with research project component"),("Diploma Programs","Technical diplomas for hands-on trade skills")],
    "requirements": ["WASSCE or equivalent (minimum C in relevant subjects)","Valid passport","English language medium certificate","SOP","Medical certificate","Sponsor/bank statement"],
    "scholarships": [("MVM Merit Award","15% tuition reduction for academically strong students"),("International Student Grant","$150 settling-in allowance for first-year foreign students"),("Management Excellence Bursary","Partial scholarship for MBA students")],
    "campus": "MVM Institute's campus in Bhopal is compact and well-maintained. Students benefit from modern labs, a well-stocked library, hostels, a canteen, and sports grounds. Bhopal's lower cost of living means students can live comfortably on a modest budget. The nearby lakes, national parks, and Bhimbetka rock shelters offer great weekend escapes.",
    "videoId": "9xnK5w8HRk4",
  },
  {
    "slug": "soa-university", "abbr": "SOA", "name": "SOA University",
    "city": "Bhubaneswar", "state": "Odisha", "country": "India", "flag": "🇮🇳",
    "tagline": "Where Medicine Meets Innovation on the Bay of Bengal",
    "badgeColor": "#8b5cf6", "rating": 4.6, "students": "20,000+", "programsCount": "200+",
    "accreditation": "NAAC A+", "ranking": 40, "placementRate": "90%",
    "founded": 1996, "tuition": "$3,000–$5,500/yr", "intake": "June / January",
    "tags": ["Medical School", "Research", "Coastal Location", "Scholarship Available"],
    "about": "Siksha 'O' Anusandhan (SOA) University is a NAAC 'A+' graded deemed university in Bhubaneswar, Odisha. It is one of Eastern India's premier research institutions and is renowned for its medical, engineering, law, and sciences programs. SOA operates a 1,000-bed teaching hospital, multiple research centres, and has produced graduates employed across the globe. Its beautiful coastal location and strong international student community make it a distinctive study destination.",
    "highlights": [("NAAC 'A+' Accredited","Among India's top-rated deemed universities"),("1,000-Bed Hospital","Medical and nursing students receive extensive clinical training"),("Coastal Location","Bhubaneswar — gateway to Puri Beach and Konark Sun Temple"),("Research Powerhouse","100+ funded research projects across medicine and engineering")],
    "programs": [("MBBS / BDS / Nursing","Medical and allied health programs with hospital training"),("B.Tech / M.Tech","Engineering across 12 specialisations"),("LLB / LLM","Law programs with moot court and legal research centres"),("B.Sc / M.Sc","Sciences, Biotechnology, Environmental Science"),("Ph.D Research","Fully supported research doctorates in medicine, engineering, law")],
    "requirements": ["WASSCE or equivalent (MBBS: Biology, Chemistry, Physics required)","Passport valid 18+ months","IELTS 6.0 or TOEFL 70+ for medical programs","SOP","Two references","Medical screening certificate","Proof of funds ($6,000+ for medical programs)"],
    "scholarships": [("SOA Global Merit Scholarship","Up to 35% tuition waiver for outstanding applicants"),("Medical Achievers Award","Partial fee relief for MBBS students after Year 2"),("Research Fellowship","Funded Ph.D positions including stipend and research grant")],
    "campus": "SOA University's 400-acre campus in Bhubaneswar is a green, well-planned township. It includes a teaching hospital, engineering research labs, law library, hostels, international student centre, multiple sports grounds, a gym, cafeteria, and regular city trips to Puri beach, Konark, and the tribal craft markets of Odisha.",
    "videoId": "HsL_MK_i__w",
  },
  {
    "slug": "cyprus-west-university", "abbr": "CWU", "name": "Cyprus West University",
    "city": "Famagusta", "state": "North Cyprus", "country": "Cyprus", "flag": "🇨🇾",
    "tagline": "European Education on the Mediterranean Coast",
    "badgeColor": "#BF0A30", "rating": 4.3, "students": "8,000+", "programsCount": "60+",
    "accreditation": "YODAK", "ranking": 55, "placementRate": "84%",
    "founded": 2016, "tuition": "$4,000–$6,500/yr", "intake": "September / February",
    "tags": ["European Standard", "English Medium", "Mediterranean Life", "Scholarship Available"],
    "about": "Cyprus West University (CWU) is a dynamic private university in Famagusta, Northern Cyprus — an EU candidate state offering European-quality education with a Mediterranean lifestyle. CWU focuses on business, IT, hospitality, and law in an English-medium, internationally accredited environment. Its small class sizes, multicultural campus, and affordable European lifestyle make it an attractive destination for Liberian students seeking a European credential.",
    "highlights": [("European Standard","EU candidate state — degrees recognised across Europe and beyond"),("English Medium","All programs taught in English — no language barrier"),("Hospitality School","Specialised hotel and tourism management programs"),("Mediterranean Life","Beaches, sunshine, and safe living — outstanding quality of life")],
    "programs": [("BA / MA Business","International Business, Finance, Marketing, Entrepreneurship"),("BSc / MSc IT","Computer Science, Software Engineering, Cybersecurity"),("BA / MA Law","International law, commercial law, and human rights"),("BSc Hospitality","Hotel management, event planning, tourism and travel"),("MBA","Executive MBA with international business focus")],
    "requirements": ["WASSCE or equivalent (minimum C average)","Passport valid throughout study period","IELTS 5.5 / TOEFL 60+ (or English-medium school certificate)","SOP","Two reference letters","Medical certificate","Proof of funds"],
    "scholarships": [("CWU International Merit Scholarship","Up to 40% tuition reduction for strong applicants"),("African Student Support Grant","$500 settling-in grant for first-year African students"),("Early Application Award","10% tuition reduction for applications 3+ months before intake")],
    "campus": "CWU's modern campus sits minutes from Famagusta's historic old city and golden beaches. Students enjoy air-conditioned classrooms, a digital library, modern hostels, a student union, beach volleyball courts, and a vibrant nightlife scene. The campus is a mix of European, Middle Eastern, and African students, creating a uniquely multicultural experience.",
    "videoId": "qBFkUJT1a2M",
  },
  {
    "slug": "cyprus-international-university", "abbr": "CIU", "name": "Cyprus International University",
    "city": "Nicosia", "state": "North Cyprus", "country": "Cyprus", "flag": "🇨🇾",
    "tagline": "Where Global Ambitions Find a European Home",
    "badgeColor": "#BF0A30", "rating": 4.6, "students": "20,000+", "programsCount": "200+",
    "accreditation": "YODAK", "ranking": 38, "placementRate": "91%",
    "founded": 1997, "tuition": "$4,500–$7,000/yr", "intake": "September / February",
    "tags": ["100+ Countries", "Medical School", "Research", "Scholarship Available"],
    "about": "Cyprus International University (CIU) is one of the largest and most internationally recognised universities in Northern Cyprus, with over 20,000 students from 100+ countries. Located in Nicosia — the island's capital — CIU offers English-medium programs in business, engineering, medicine, and law with a strong emphasis on research and innovation. It holds multiple international accreditations and has a large, active African student community, making Liberian students feel immediately at home.",
    "highlights": [("100+ Countries","A truly global campus with 20,000+ students from every continent"),("International Accreditations","Recognised by YOK, YODAK, and multiple professional bodies"),("Medical School","Medicine, Dentistry, Pharmacy — internationally recognised programs"),("Large African Community","Active African students' association with regular cultural events")],
    "programs": [("MBBS / BDS / Pharmacy","Medical programs; international licensing exam preparation included"),("B.Eng / M.Eng","Civil, Mechanical, Computer Engineering, Electrical"),("BA / MA Law","International law with moot court, legal clinic, and internships"),("BBA / MBA","Business; specialisations in fintech, trade, and logistics"),("Ph.D Research","Fully supervised doctoral programs across all schools")],
    "requirements": ["WASSCE or equivalent (Medicine: A/B in Biology, Chemistry, Physics)","Passport valid throughout study period","IELTS 6.0 / TOEFL 70+ (required for medicine and law)","Detailed SOP","Two strong references","Medical fitness certificate","Proof of financial support"],
    "scholarships": [("CIU Global Merit Award","Up to 50% tuition waiver for outstanding applicants"),("Liberia & West Africa Scholarship","Dedicated TIH-partnership grant of up to $1,200/yr"),("Medical Excellence Grant","Partial tuition relief for MBBS students from Year 3")],
    "campus": "CIU's expansive campus in Nicosia features modern lecture theatres, a teaching hospital, dental clinic, innovation labs, digital library, 12 student residences, sports complex with Olympic pool, and a dedicated International Student Office. Nicosia's unique position as the world's last divided capital adds a fascinating historical dimension to student life. Regular island tours, beach trips, and cultural events are organised throughout the year.",
    "videoId": "mOHkca3Kf-U",
  },
]

# ─── SHARED NAV & BOTTOM NAV ─────────────────────────────────────────────────

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

BOTTOM_NAV = """\
  <nav class="bottom-nav" aria-label="Portal quick navigation">
    <div class="bottom-nav-inner">
      <a href="index.html" class="bottom-nav-brand">
        <span class="bottom-nav-icon">🎓</span>
        <span>Tolbert Innovation Hub <span class="bottom-nav-sub">· Study Abroad Portal</span></span>
      </a>
      <div class="bottom-nav-links">
        <a href="index.html">Home</a>
        <a href="study-abroad.html">Universities</a>
        <a href="study-abroad.html#application-form">Apply Now</a>
        <a href="study-abroad.html#counseling">Counseling</a>
        <a href="portal-login.html">Student Portal</a>
      </div>
      <a href="#apply-form" class="btn btn-primary bottom-nav-cta">Apply Now</a>
    </div>
  </nav>"""

FOOTER = """\
  <footer class="portal-footer" aria-label="Site footer">
    <div class="container">
      <div class="portal-footer-grid">
        <div>
          <p class="pf-brand-name">Tolbert Innovation Hub</p>
          <p class="pf-tagline">Empowering Africa's Future through Education, Technology, and Innovation. Never Stop Innovating.</p>
          <div class="pf-social">
            <a href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">🐦</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
          </div>
        </div>
        <div>
          <p class="pf-heading">Quick Links</p>
          <ul class="pf-links">
            <li><a href="study-abroad.html">University Directory</a></li>
            <li><a href="study-abroad.html#application-form">Apply Online</a></li>
            <li><a href="study-abroad.html#counseling">Book Counseling</a></li>
            <li><a href="portal-login.html">Student Portal</a></li>
            <li><a href="portal-login.html">Admin Dashboard</a></li>
          </ul>
        </div>
        <div>
          <p class="pf-heading">Partner Countries</p>
          <ul class="pf-links" style="margin-bottom:1.25rem;">
            <li><a href="study-abroad.html">🇮🇳 India (15 Universities)</a></li>
            <li><a href="study-abroad.html">🇨🇾 North Cyprus (2 Universities)</a></li>
            <li><span style="color:#475569;font-size:0.85rem;">More Coming Soon</span></li>
          </ul>
          <p class="pf-heading">Programs</p>
          <ul class="pf-links">
            <li><a href="study-abroad.html">Undergraduate</a></li>
            <li><a href="study-abroad.html">Postgraduate</a></li>
            <li><a href="study-abroad.html">MBA</a></li>
            <li><a href="study-abroad.html">PhD</a></li>
            <li><a href="study-abroad.html">Medical</a></li>
            <li><a href="study-abroad.html">Engineering</a></li>
          </ul>
        </div>
        <div>
          <p class="pf-heading">Contact Us</p>
          <div class="pf-contact-item"><span>📍</span><span>Monrovia, Liberia, West Africa</span></div>
          <div class="pf-contact-item"><span>📞</span><a href="tel:+231770000000">+231 770 000 000</a></div>
          <div class="pf-contact-item"><span>📧</span><a href="mailto:info@tolbertinnovationhub.com">info@tolbertinnovationhub.com</a></div>
          <div class="pf-hours"><strong>Office Hours</strong>Mon–Fri 8:00AM–6:00PM<br />Saturday 9:00AM–2:00PM</div>
        </div>
      </div>
      <div class="portal-footer-bottom">
        <p>© 2026 Tolbert Innovation Hub. All rights reserved. | <a href="contact.html">Privacy</a> | <a href="contact.html">Terms</a></p>
        <p>Empowering Africa's Future — Never Stop Innovating</p>
      </div>
    </div>
  </footer>"""

# ─── PAGE GENERATOR ─────────────────────────────────────────────────────────

def build_page(u):
    is_cyprus = u["country"] == "Cyprus"
    accent    = "#BF0A30" if is_cyprus else "#002868"
    location  = f"{u['city']}, {u['state']}, {u['country']}"

    # highlights
    hi_html = ""
    for (title, desc) in u["highlights"]:
        hi_html += f"""
              <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.85rem 0;border-bottom:1px solid #f1f5f9;">
                <span style="color:#059669;font-size:1.1rem;flex-shrink:0;margin-top:0.1rem;">✓</span>
                <div><p style="font-family:'Poppins',sans-serif;font-weight:600;font-size:0.93rem;color:#0f172a;margin:0 0 0.2rem;">{title}</p><p style="font-size:0.85rem;color:#6b7280;margin:0;">{desc}</p></div>
              </div>"""

    # programs
    prog_html = ""
    for (prog, detail) in u["programs"]:
        prog_html += f"""
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:1.25rem 1.5rem;">
            <p style="font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;color:{accent};margin:0 0 0.35rem;">{prog}</p>
            <p style="font-size:0.88rem;color:#6b7280;margin:0;">{detail}</p>
          </div>"""

    # requirements
    req_html = ""
    for r in u["requirements"]:
        req_html += f"""
            <li style="padding:0.6rem 0;border-bottom:1px solid #f1f5f9;font-size:0.92rem;color:#374151;display:flex;align-items:flex-start;gap:0.5rem;">
              <span style="color:#059669;flex-shrink:0;margin-top:0.1rem;">✓</span><span>{r}</span>
            </li>"""

    # scholarships
    sch_html = ""
    for (sname, sdesc) in u["scholarships"]:
        sch_html += f"""
          <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:1.25rem 1.5rem;border-top:4px solid {accent};">
            <p style="font-family:'Poppins',sans-serif;font-weight:700;font-size:0.95rem;color:{accent};margin:0 0 0.4rem;">🏆 {sname}</p>
            <p style="font-size:0.88rem;color:#4b5563;margin:0;">{sdesc}</p>
          </div>"""

    # tag pills
    tags_html = "".join(f'<span style="display:inline-block;background:#f1f5f9;color:#374151;font-size:0.78rem;font-weight:600;padding:0.3rem 0.75rem;border-radius:100px;border:1px solid #e2e8f0;">{t}</span>' for t in u["tags"])

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
    body {{ padding-bottom: 56px; }}
    .ud-header {{ background:#fff; border-bottom:1px solid #e2e8f0; padding:1.75rem 0; }}
    .ud-breadcrumb {{ font-size:0.85rem; color:#64748b; margin-bottom:1.25rem; }}
    .ud-breadcrumb a {{ color:#64748b; text-decoration:none; }}
    .ud-breadcrumb a:hover {{ color:{accent}; }}
    .ud-header-card {{ display:flex; flex-wrap:wrap; gap:1.5rem; align-items:flex-start; }}
    .ud-badge {{ width:64px; height:64px; border-radius:14px; background:{u['badgeColor']}; color:#fff; font-weight:800; font-size:0.95rem; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-family:'Poppins',sans-serif; }}
    .ud-header-info {{ flex:1; min-width:200px; }}
    .ud-header-info h1 {{ font-family:'Poppins',sans-serif; font-size:clamp(1.4rem,3vw,2rem); font-weight:800; color:#0f172a; margin:0 0 0.4rem; }}
    .ud-header-loc {{ font-size:0.88rem; color:#64748b; margin-bottom:0.6rem; }}
    .ud-header-actions {{ display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom:1rem; }}
    .ud-stats {{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; margin-top:1.5rem; }}
    @media (max-width:700px) {{ .ud-stats {{ grid-template-columns:repeat(2,1fr); }} }}
    .ud-stat-box {{ background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1rem; text-align:center; }}
    .ud-stat-val {{ font-family:'Poppins',sans-serif; font-size:1.4rem; font-weight:800; color:{accent}; display:block; }}
    .ud-stat-lbl {{ font-size:0.78rem; color:#64748b; margin-top:0.2rem; }}
    .ud-tags {{ display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.25rem; }}
    .ud-tabs {{ background:#fff; border-bottom:1px solid #e2e8f0; position:sticky; top:70px; z-index:90; }}
    .ud-tabs-inner {{ display:flex; overflow-x:auto; scrollbar-width:none; }}
    .ud-tabs-inner::-webkit-scrollbar {{ display:none; }}
    .ud-tab {{ padding:1rem 1.25rem; font-size:0.9rem; font-weight:600; color:#64748b; background:none; border:none; border-bottom:2.5px solid transparent; cursor:pointer; white-space:nowrap; font-family:'Inter',sans-serif; transition:color 0.18s,border-color 0.18s; }}
    .ud-tab:hover {{ color:{accent}; }}
    .ud-tab.active {{ color:{accent}; border-bottom-color:{accent}; }}
    .ud-content {{ padding:2.5rem 0 3rem; background:#f8fafc; }}
    .ud-layout {{ display:grid; grid-template-columns:1fr 340px; gap:2rem; align-items:start; }}
    @media (max-width:900px) {{ .ud-layout {{ grid-template-columns:1fr; }} }}
    .tab-panel {{ display:none; }}
    .tab-panel.active {{ display:block; }}
    .ud-section-title {{ font-family:'Poppins',sans-serif; font-weight:700; font-size:1.2rem; color:#0f172a; margin:0 0 1rem; }}
    .ud-about-card {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.75rem; margin-bottom:1.5rem; }}
    .ud-highlights-card {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.75rem; margin-bottom:1.5rem; }}
    .ud-video-card {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.75rem; }}
    .ud-video-wrap {{ position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:10px; background:#0f172a; margin-bottom:1rem; }}
    .ud-video-wrap iframe {{ position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:10px; }}
    .ud-video-caption {{ font-size:0.88rem; color:#6b7280; line-height:1.65; }}
    .ud-sidebar-card {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.5rem; margin-bottom:1.25rem; }}
    .ud-sidebar-title {{ font-family:'Poppins',sans-serif; font-weight:700; font-size:1rem; color:#0f172a; margin:0 0 1rem; }}
    .ud-quick-row {{ display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0; border-bottom:1px solid #f1f5f9; font-size:0.85rem; }}
    .ud-quick-row:last-child {{ border-bottom:none; }}
    .ud-quick-lbl {{ color:#64748b; font-weight:500; }}
    .ud-quick-val {{ color:#0f172a; font-weight:600; text-align:right; max-width:55%; }}
    .prog-grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1.25rem; }}
    .sch-grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1.25rem; }}
    .apply-section {{ background:#f0f4ff; padding:clamp(2.5rem,5vw,4rem) 0; }}
    .apply-inner {{ display:grid; grid-template-columns:1fr 1.4fr; gap:3rem; align-items:start; }}
    @media (max-width:860px) {{ .apply-inner {{ grid-template-columns:1fr; }} }}
    .form-card {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:clamp(1.75rem,4vw,2.5rem); box-shadow:0 1px 4px rgba(0,0,0,0.06); }}
    .form-card h3 {{ font-size:1.2rem; color:{accent}; margin-bottom:0.4rem; font-family:'Poppins',sans-serif; font-weight:700; }}
    .form-card-lead {{ font-size:0.92rem; color:#6b7280; margin-bottom:1.75rem; }}
    .form-row2 {{ display:grid; grid-template-columns:1fr 1fr; gap:1rem; }}
    @media (max-width:560px) {{ .form-row2 {{ grid-template-columns:1fr; }} }}
    .fg2 {{ display:flex; flex-direction:column; gap:0.4rem; margin-bottom:1.1rem; }}
    .fg2 label {{ font-size:0.85rem; font-weight:600; color:#374151; }}
    .fg2 .req {{ color:#BF0A30; }}
    .fg2 input,.fg2 select,.fg2 textarea {{ width:100%; padding:0.72rem 0.95rem; border:1.5px solid #e2e8f0; border-radius:8px; background:#f8fafc; color:#0f172a; font-family:'Inter',sans-serif; font-size:0.95rem; outline:none; transition:border-color 0.18s,box-shadow 0.18s; appearance:none; -webkit-appearance:none; }}
    .fg2 input:focus,.fg2 select:focus,.fg2 textarea:focus {{ border-color:{accent}; background:#fff; box-shadow:0 0 0 3px rgba(0,40,104,0.1); }}
    .fg2 textarea {{ resize:vertical; min-height:100px; }}
    .fg2 select {{ background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 0.9rem center; padding-right:2.5rem; cursor:pointer; }}
    .form-feedback {{ font-size:0.9rem; font-weight:600; margin-top:0.85rem; padding:0.7rem 1rem; border-radius:8px; background:#f1f5f9; display:none; }}
    .form-feedback:not(:empty) {{ display:block; }}
    .form-submit-row {{ display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.85rem; margin-top:1.5rem; }}
    .form-note {{ font-size:0.79rem; color:#6b7280; }}
    .elig-checker {{ background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.5rem; margin-bottom:1.25rem; }}
    .elig-input {{ width:100%; padding:0.65rem 0.9rem; border:1.5px solid #e2e8f0; border-radius:8px; background:#f8fafc; color:#0f172a; font-family:'Inter',sans-serif; font-size:0.9rem; outline:none; margin-bottom:0.75rem; transition:border-color 0.18s; appearance:none; -webkit-appearance:none; }}
    .elig-input:focus {{ border-color:{accent}; }}
    .elig-select {{ background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 0.9rem center; padding-right:2.5rem; cursor:pointer; }}
    .elig-label {{ font-size:0.82rem; font-weight:600; color:#374151; display:block; margin-bottom:0.35rem; }}
    /* BOTTOM NAV */
    .bottom-nav {{ position:fixed; bottom:0; left:0; right:0; background:#0f172a; z-index:200; box-shadow:0 -2px 10px rgba(0,0,0,0.2); padding:0 0 env(safe-area-inset-bottom); }}
    .bottom-nav-inner {{ max-width:1200px; margin:auto; padding:0 1.5rem; height:56px; display:flex; align-items:center; gap:1.5rem; }}
    .bottom-nav-brand {{ display:flex; align-items:center; gap:0.5rem; text-decoration:none; color:#fff; font-weight:700; font-size:0.88rem; flex-shrink:0; font-family:'Poppins',sans-serif; }}
    .bottom-nav-icon {{ font-size:1.1rem; }}
    .bottom-nav-sub {{ color:rgba(255,255,255,0.55); font-weight:400; }}
    .bottom-nav-links {{ display:flex; gap:1.25rem; flex:1; justify-content:center; }}
    .bottom-nav-links a {{ color:rgba(255,255,255,0.65); text-decoration:none; font-size:0.85rem; font-weight:500; transition:color 0.18s; font-family:'Inter',sans-serif; }}
    .bottom-nav-links a:hover,.bottom-nav-links a.active {{ color:#fff; }}
    .bottom-nav-cta {{ flex-shrink:0; }}
    /* PORTAL FOOTER */
    .portal-footer {{ background:#0f172a; color:#94a3b8; padding:3rem 0 1.5rem; }}
    .portal-footer-grid {{ display:grid; grid-template-columns:2fr 1.2fr 1.4fr 1.5fr; gap:2.5rem; margin-bottom:2.5rem; }}
    @media (max-width:900px) {{ .portal-footer-grid {{ grid-template-columns:1fr 1fr; }} }}
    @media (max-width:560px) {{ .portal-footer-grid {{ grid-template-columns:1fr; }} }}
    .pf-brand-name {{ font-family:'Poppins',sans-serif; font-weight:800; font-size:1.1rem; color:#fff; margin:0 0 0.5rem; }}
    .pf-tagline {{ font-size:0.85rem; line-height:1.65; color:#94a3b8; margin:0 0 1.25rem; }}
    .pf-social {{ display:flex; gap:0.6rem; }}
    .pf-social a {{ width:36px; height:36px; border-radius:8px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:1rem; text-decoration:none; transition:background 0.18s; }}
    .pf-social a:hover {{ background:rgba(255,255,255,0.15); }}
    .pf-heading {{ font-family:'Poppins',sans-serif; font-weight:700; font-size:0.88rem; color:#fff; margin:0 0 1rem; letter-spacing:0.04em; text-transform:uppercase; }}
    .pf-links {{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.55rem; }}
    .pf-links a {{ color:#94a3b8; text-decoration:none; font-size:0.87rem; transition:color 0.18s; }}
    .pf-links a:hover {{ color:#fff; }}
    .pf-contact-item {{ display:flex; align-items:flex-start; gap:0.55rem; font-size:0.87rem; color:#94a3b8; margin-bottom:0.6rem; }}
    .pf-contact-item a {{ color:#94a3b8; text-decoration:none; }}
    .pf-contact-item a:hover {{ color:#fff; }}
    .pf-hours {{ margin-top:1rem; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem 1rem; font-size:0.82rem; line-height:1.65; color:#94a3b8; }}
    .pf-hours strong {{ color:#e2e8f0; display:block; margin-bottom:0.3rem; }}
    .portal-footer-bottom {{ border-top:1px solid rgba(255,255,255,0.08); padding-top:1.25rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.75rem; }}
    .portal-footer-bottom p {{ margin:0; font-size:0.82rem; color:rgba(200,216,240,0.55); }}
    .portal-footer-bottom a {{ color:rgba(200,216,240,0.6); }}
    @media (max-width:680px) {{ .bottom-nav-brand span:not(.bottom-nav-icon) {{ display:none; }} .bottom-nav-cta {{ display:none; }} }}
  </style>
</head>
<body>
{NAV}

  <main id="main-content">

    <!-- HEADER CARD -->
    <section class="ud-header">
      <div class="container">
        <p class="ud-breadcrumb">
          <a href="index.html">Home</a> &rsaquo;
          <a href="study-abroad.html">Universities</a> &rsaquo;
          {u['name']}
        </p>
        <div class="ud-header-card">
          <div class="ud-badge">{u['abbr']}</div>
          <div class="ud-header-info">
            <div class="ud-header-actions">
              <a href="#apply-form" class="btn btn-primary">Apply Now</a>
              <a href="study-abroad.html" class="btn btn-outline" style="font-size:0.88rem;">← All Universities</a>
            </div>
            <h1>{u['name']}</h1>
            <p class="ud-header-loc">{u['flag']} {location} · Founded {u['founded']} · <span style="background:#dbeafe;color:#1d4ed8;padding:0.15rem 0.5rem;border-radius:4px;font-size:0.82rem;font-weight:600;">{u['accreditation']}</span></p>
            <div class="ud-stats">
              <div class="ud-stat-box"><span class="ud-stat-val">#{u['ranking']}</span><div class="ud-stat-lbl">Academic Ranking</div></div>
              <div class="ud-stat-box"><span class="ud-stat-val">{u['rating']}★</span><div class="ud-stat-lbl">Student Rating</div></div>
              <div class="ud-stat-box"><span class="ud-stat-val">{u['students']}</span><div class="ud-stat-lbl">Total Students</div></div>
              <div class="ud-stat-box"><span class="ud-stat-val">{u['placementRate']}</span><div class="ud-stat-lbl">Placement Rate</div></div>
            </div>
            <div class="ud-tags">{tags_html}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB BAR -->
    <div class="ud-tabs">
      <div class="container">
        <div class="ud-tabs-inner">
          <button class="ud-tab active" onclick="switchTab('overview',this)">Overview</button>
          <button class="ud-tab" onclick="switchTab('programs',this)">Programs</button>
          <button class="ud-tab" onclick="switchTab('tuition',this)">Tuition &amp; Fees</button>
          <button class="ud-tab" onclick="switchTab('scholarships',this)">Scholarships</button>
          <button class="ud-tab" onclick="switchTab('admission',this)">Admission</button>
          <button class="ud-tab" onclick="switchTab('campus',this)">Campus Life</button>
        </div>
      </div>
    </div>

    <!-- TAB CONTENT -->
    <div class="ud-content">
      <div class="container">
        <div class="ud-layout">

          <!-- LEFT: main panels -->
          <div>

            <!-- OVERVIEW -->
            <div class="tab-panel active" id="panel-overview">
              <div class="ud-about-card">
                <h2 class="ud-section-title">About {u['name']}</h2>
                <p style="font-size:0.96rem;color:#374151;line-height:1.8;">{u['about']}</p>
              </div>
              <div class="ud-highlights-card">
                <h2 class="ud-section-title">Key Highlights</h2>
                <div>{hi_html}
                </div>
              </div>
              <div class="ud-video-card">
                <h2 class="ud-section-title">🎬 Virtual Campus Tour</h2>
                <div class="ud-video-wrap">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/{u['videoId']}?rel=0&modestbranding=1&showinfo=0"
                    title="{u['name']} Virtual Campus Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"></iframe>
                </div>
                <p class="ud-video-caption">Take a virtual walk through {u['name']}'s campus and explore the world-class facilities, student life, and learning environment that awaits you.</p>
              </div>
            </div>

            <!-- PROGRAMS -->
            <div class="tab-panel" id="panel-programs">
              <h2 class="ud-section-title">Programs &amp; Degrees</h2>
              <p style="font-size:0.9rem;color:#6b7280;margin-bottom:1.25rem;">Explore the range of programs available for international students at {u['name']}.</p>
              <div class="prog-grid">{prog_html}
              </div>
            </div>

            <!-- TUITION -->
            <div class="tab-panel" id="panel-tuition">
              <div class="ud-about-card">
                <h2 class="ud-section-title">Tuition &amp; Fees</h2>
                <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1.5rem;">
                  <p style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.5rem;color:#059669;margin:0 0 0.3rem;">{u['tuition']}</p>
                  <p style="font-size:0.88rem;color:#374151;margin:0;">Annual tuition range for international students. Contact TIH for exact program fees.</p>
                </div>
                <div style="display:flex;flex-direction:column;gap:0.75rem;">
                  <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid #f1f5f9;font-size:0.9rem;"><span style="color:#64748b;">Intake Periods</span><strong style="color:#0f172a;">{u['intake']}</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid #f1f5f9;font-size:0.9rem;"><span style="color:#64748b;">Application Fee</span><strong style="color:#059669;">Free via TIH</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid #f1f5f9;font-size:0.9rem;"><span style="color:#64748b;">Scholarship Available</span><strong style="color:#059669;">Yes — up to 50% off</strong></div>
                  <div style="display:flex;justify-content:space-between;padding:0.75rem 0;font-size:0.9rem;"><span style="color:#64748b;">Currency</span><strong style="color:#0f172a;">USD / Indian Rupee</strong></div>
                </div>
              </div>
            </div>

            <!-- SCHOLARSHIPS -->
            <div class="tab-panel" id="panel-scholarships">
              <h2 class="ud-section-title">Scholarships &amp; Funding</h2>
              <p style="font-size:0.9rem;color:#6b7280;margin-bottom:1.25rem;">Available financial support for students enrolling at {u['name']} through TIH.</p>
              <div class="sch-grid">{sch_html}
                <div style="background:{accent};color:#fff;border-radius:10px;padding:1.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.75rem;">
                  <p style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;margin:0;">Need More Funding?</p>
                  <p style="font-size:0.85rem;opacity:0.85;margin:0;">Our counselors can guide you through additional scholarship opportunities including Chevening, Fulbright, and DAAD.</p>
                  <a href="fully-funded-scholarship.html" style="background:#fff;color:{accent};border-radius:6px;padding:0.5rem 1rem;font-size:0.85rem;font-weight:600;text-decoration:none;">View All Scholarships →</a>
                </div>
              </div>
            </div>

            <!-- ADMISSION -->
            <div class="tab-panel" id="panel-admission">
              <div class="ud-about-card">
                <h2 class="ud-section-title">Admission Requirements</h2>
                <p style="font-size:0.9rem;color:#6b7280;margin-bottom:1.25rem;">Meet these requirements to be eligible to apply through TIH.</p>
                <ul style="list-style:none;padding:0;margin:0;">{req_html}
                  <li style="padding:0.6rem 0;font-size:0.92rem;color:#374151;display:flex;align-items:flex-start;gap:0.5rem;">
                    <span style="color:#059669;flex-shrink:0;margin-top:0.1rem;">✓</span><span>TIH counseling session (free — booked after application)</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- CAMPUS LIFE -->
            <div class="tab-panel" id="panel-campus">
              <div class="ud-about-card">
                <h2 class="ud-section-title">Campus Life</h2>
                <p style="font-size:0.96rem;color:#374151;line-height:1.8;">{u['campus']}</p>
                <div style="margin-top:1.5rem;background:#fff3cd;border:1px solid #ffc107;border-radius:10px;padding:1rem 1.25rem;">
                  <p style="font-size:0.9rem;font-weight:600;color:#856404;margin:0 0 0.35rem;">🌍 TIH Student Support</p>
                  <p style="font-size:0.88rem;color:#856404;margin:0;">Tolbert Innovation Hub provides dedicated pre-departure orientation, airport pick-up coordination, visa guidance, and ongoing pastoral support throughout your studies.</p>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT: sidebar -->
          <div>

            <!-- Ready to Apply -->
            <div class="ud-sidebar-card">
              <h3 class="ud-sidebar-title">Ready to Apply?</h3>
              <p style="font-size:0.85rem;color:#6b7280;margin-bottom:1rem;">Join thousands of Liberian students who have started their international journey through TIH.</p>
              <a href="#apply-form" class="btn btn-primary" style="width:100%;display:block;text-align:center;margin-bottom:0.6rem;">Apply Now →</a>
              <a href="study-abroad.html#counseling" class="btn btn-outline" style="width:100%;display:block;text-align:center;font-size:0.88rem;">Book Free Counseling</a>
            </div>

            <!-- Eligibility Checker -->
            <div class="elig-checker">
              <h3 class="ud-sidebar-title">Eligibility Checker</h3>
              <label class="elig-label" for="sc-gpa">Your GPA / Grade</label>
              <input type="text" id="sc-gpa" class="elig-input" placeholder="e.g. 3.5 or B+" />
              <label class="elig-label" for="sc-waec">Best WAEC Grade</label>
              <select id="sc-waec" class="elig-input elig-select">
                <option value="">Select grade</option>
                <option>A1 (Distinction)</option>
                <option>B2 / B3 (Very Good)</option>
                <option>C4 / C5 / C6 (Credit)</option>
                <option>D7 / E8 (Pass)</option>
                <option>F9 (Fail)</option>
              </select>
              <button class="btn btn-primary" onclick="checkDetailEligibility()" style="width:100%;font-size:0.9rem;">Check Eligibility</button>
              <div id="detailEligResult" style="margin-top:0.85rem;padding:0.85rem;border-radius:8px;display:none;font-size:0.85rem;line-height:1.55;"></div>
            </div>

            <!-- Quick Info -->
            <div class="ud-sidebar-card">
              <h3 class="ud-sidebar-title">Quick Info</h3>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Students</span><span class="ud-quick-val">{u['students']}</span></div>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Accreditation</span><span class="ud-quick-val">{u['accreditation']}</span></div>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Tuition Range</span><span class="ud-quick-val">{u['tuition']}</span></div>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Rating</span><span class="ud-quick-val">⭐ {u['rating']}/5.0</span></div>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Intake</span><span class="ud-quick-val">{u['intake']}</span></div>
              <div class="ud-quick-row"><span class="ud-quick-lbl">Official Website</span><span class="ud-quick-val"><a href="#" style="color:#002868;">Visit Site →</a></span></div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- APPLY FORM -->
    <section class="apply-section" id="apply-form">
      <div class="container">
        <div class="apply-inner">
          <div>
            <p style="font-size:0.8rem;font-weight:700;letter-spacing:0.1em;color:{accent};text-transform:uppercase;margin-bottom:0.5rem;">Ready to Apply?</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:clamp(1.4rem,2.5vw,1.9rem);color:#0f172a;margin-bottom:0.75rem;">Start Your Application to {u['name']}</h2>
            <p style="font-size:0.95rem;color:#6b7280;margin-bottom:1.5rem;">Fill in this short form and our team will contact you within 2 business days to guide your full application.</p>
            <div style="display:flex;flex-direction:column;gap:0.6rem;">
              <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.9rem;color:#374151;"><span>🏛️</span><strong>{u['name']}</strong></div>
              <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.9rem;color:#374151;"><span>{u['flag']}</span><span>{location}</span></div>
              <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.9rem;color:#374151;"><span>📅</span><span>Next intake: <strong>{u['intake']}</strong></span></div>
              <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.9rem;color:#374151;"><span>💰</span><span>Tuition: <strong>{u['tuition']}</strong></span></div>
              <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.9rem;color:#374151;"><span>🏆</span><span>Scholarships: <strong style="color:#059669;">Available</strong></span></div>
            </div>
            <div style="margin-top:1.5rem;padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #e2e8f0;text-align:center;">
              <p style="font-size:0.88rem;font-weight:600;margin:0 0 0.5rem;">Questions? Talk to us directly</p>
              <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
                <a href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size:0.82rem;padding:0.5rem 1rem;">💬 WhatsApp</a>
                <a href="mailto:info@tolbertinnovationhub.org" class="btn btn-outline" style="font-size:0.82rem;padding:0.5rem 1rem;">📧 Email Us</a>
              </div>
            </div>
          </div>
          <form class="form-card"
                data-success-message="Thank you! Your application to {u['name']} has been received. Our team will contact you within 2 business days."
                novalidate>
            <h3>Application Form</h3>
            <p class="form-card-lead">Fields marked <span style="color:#BF0A30">*</span> are required.</p>
            <input type="hidden" name="University" value="{u['name']}" />
            <div class="form-row2">
              <div class="fg2"><label for="app-name">Full Name <span class="req">*</span></label><input type="text" id="app-name" name="fullName" placeholder="As on passport" required /></div>
              <div class="fg2"><label for="app-email">Email Address <span class="req">*</span></label><input type="email" id="app-email" name="email" placeholder="your@email.com" required /></div>
            </div>
            <div class="fg2"><label for="app-phone">Phone / WhatsApp <span class="req">*</span></label><input type="tel" id="app-phone" name="phone" placeholder="+231 XXX XXX XXX" required /></div>
            <div class="form-row2">
              <div class="fg2"><label for="app-edu">Current Education Level <span class="req">*</span></label><select id="app-edu" name="currentEducation" required><option value="">Select level</option><option>WASSCE / Senior High School</option><option>Diploma / Certificate</option><option>Bachelor's Degree</option><option>Master's Degree</option></select></div>
              <div class="fg2"><label for="app-deg">Preferred Degree Level <span class="req">*</span></label><select id="app-deg" name="degreeLevel" required><option value="">Select degree</option><option>Undergraduate (UG)</option><option>Postgraduate (PG)</option><option>MBA</option><option>Ph.D / Research</option></select></div>
            </div>
            <div class="fg2"><label for="app-prog">Preferred Program / Field of Study <span class="req">*</span></label><input type="text" id="app-prog" name="preferredProgram" placeholder="e.g. Computer Science, Nursing, Business" required /></div>
            <div class="fg2"><label for="app-note">Personal Note (optional)</label><textarea id="app-note" name="personalNote" rows="3" placeholder="Tell us a little about yourself and why you want to study at {u['name']}…"></textarea></div>
            <p class="form-feedback" aria-live="polite"></p>
            <div class="form-submit-row">
              <button type="submit" class="btn btn-primary" style="width:100%;padding:0.85rem;font-size:1rem;font-weight:700;">Submit Application →</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section style="padding:2rem 0;text-align:center;background:#f9fafb;">
      <div class="container">
        <p style="font-size:0.95rem;color:#6b7280;margin-bottom:1rem;">Explore other partner universities or browse scholarships</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="study-abroad.html" class="btn btn-outline">← All Universities</a>
          <a href="fully-funded-scholarship.html" class="btn btn-outline" style="color:#002868;border-color:#002868;">View Scholarships →</a>
        </div>
      </div>
    </section>

  </main>

{BOTTOM_NAV}

{FOOTER}

  <script src="main.js"></script>
  <script>
  function switchTab(name, btn) {{
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.ud-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + name).classList.add('active');
    btn.classList.add('active');
  }}
  function checkDetailEligibility() {{
    const gpa = document.getElementById('sc-gpa').value.trim();
    const waec = document.getElementById('sc-waec').value;
    const res = document.getElementById('detailEligResult');
    if (!gpa && !waec) {{ res.style.display='block'; res.style.background='#fffbeb'; res.style.border='1.5px solid #fde68a'; res.innerHTML='⚠️ Please enter your GPA or select your WAEC grade.'; return; }}
    const fail = waec === 'F9 (Fail)';
    const pass = waec && waec !== 'F9 (Fail)';
    if (fail) {{ res.style.display='block'; res.style.background='#fff1f2'; res.style.border='1.5px solid #fca5a5'; res.innerHTML='❌ <strong>Not Eligible.</strong> An F9 grade does not meet minimum requirements. Consider our free classroom program to improve your profile.'; return; }}
    res.style.display='block'; res.style.background='#f0fdf4'; res.style.border='1.5px solid #86efac';
    res.innerHTML='✅ <strong>Looks Good!</strong> Based on your input, you may be eligible to apply. Book a free counseling session to confirm and get started.';
  }}
  </script>
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
        print(f"  OK {filename}")
    print(f"\nDone — {len(created)} files created.")

if __name__ == "__main__":
    main()
