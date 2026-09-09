/* TIH Human Rights and International Humanitarian Law course — one distinct
   educational YouTube video per topic (no two topics share a video). Course id:
   human-rights-ihl. Every ID below was sourced from a real web search for that
   specific topic and checked against the search-result title for topical fit;
   none were written from memory. Quizzes, exams, the practical projects and the
   text-only graduation resources intentionally carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['human-rights-ihl'] || !COURSES_DB['human-rights-ihl'].modules) return;
  var MAP = {
    /* Module 1: Foundations of Human Rights */
    "Welcome to the Course": "M_HsXzPpYCg",
    "What Are Human Rights?": "WJsUfck01Js",
    "Philosophical Foundations of Rights": "QbHGf1qPjgk",
    "Characteristics of Human Rights": "c26_H2RTaYI",
    "Generations of Human Rights": "waivtbnBbr4",
    "Rights, Duties and Responsibilities": "tFYa0HpiVqs",
    "Course Roadmap": "vSP-_GmwL1U",
    /* Module 2: History and Sources of Human Rights Law */
    "The Origins of Human Rights": "Iz5inP1nf3Q",
    "The Universal Declaration of Human Rights": "h-bYMQRT9ik",
    "Sources of International Law": "AWeYst3fjB0",
    "Treaties and How They Work": "r05_1hiuSKc",
    "Customary International Law and Jus Cogens": "NcrnJLO5AAs",
    "Reservations, Derogations and Limitations": "9CO-JovrJtc",
    "Ratification and Domestication": "N_6GjlfDhBc",
    /* Module 3: The International Bill of Human Rights */
    "Introduction to the International Bill of Rights": "lbOwds2IrGY",
    "The ICCPR: Civil and Political Rights": "zvlfVkFdZ7Q",
    "The ICESCR: Economic, Social and Cultural Rights": "JE0d-WvkhPk",
    "Progressive Realisation and Minimum Core Obligations": "biGat95wM2U",
    "Equality and Non-Discrimination": "H3krAM2rMQo",
    "The Right to Life": "N36gQDcSeWw",
    "Freedom from Torture and Ill-Treatment": "m2vMUkz9ZXs",
    /* Module 4: Thematic Human Rights Treaties */
    "Eliminating Racial Discrimination (ICERD)": "4twmFAFVrNM",
    "Women's Rights (CEDAW)": "s4lmsxqXpkc",
    "The Rights of the Child (CRC)": "zWNUhOh46Xg",
    "The Convention Against Torture (CAT)": "hRuvBj-yWqs",
    "The Rights of Persons with Disabilities (CRPD)": "oPhMXGb5kWg",
    "Refugees, Asylum and Non-Refoulement": "iH9PXIotFbU",
    "Enforced Disappearance and Migrant Workers": "nT5LOFIJ2Qs",
    "The Rights of Indigenous Peoples": "-_N5jgW0U9M",
    /* Module 5: Regional Human Rights Systems */
    "Introduction to Regional Systems": "eKuDoYeAiso",
    "The African Charter on Human and Peoples' Rights": "UUeZ7BT-tLY",
    "The African Commission and African Court": "xcTjtZHyIU8",
    "The European Human Rights System": "IFbO7zyoTNI",
    "The Inter-American Human Rights System": "NpN2R3hp-E0",
    "Systems in Asia and the Arab World": "0jsqD8OL_J8",
    "Comparing the Regional Systems": "qbuK2lhD714",
    /* Module 6: United Nations Human Rights Machinery */
    "Overview of the UN Human Rights System": "Z0ONJ5r6amI",
    "The Human Rights Council": "jGp_MDGArsM",
    "The Universal Periodic Review": "ct7aIBF2YUA",
    "Treaty Bodies and State Reporting": "h2KV59JW318",
    "Special Procedures and Rapporteurs": "d7gD4mTRt8M",
    "The Office of the High Commissioner": "foR6jW-dtxw",
    "Individual Complaints Mechanisms": "uz8VhvC-tg4",
    /* Module 7: Introduction to International Humanitarian Law */
    "What Is International Humanitarian Law?": "JBbALlq5EhY",
    "The History and Development of IHL": "Rr8pRVduqWQ",
    "The Geneva Conventions of 1949": "wF5Z1RHxKTs",
    "The Additional Protocols": "3G2P3DzIXNc",
    "Classifying Armed Conflicts": "N6JR_NvjPjQ",
    "IHL and Human Rights Law Compared": "qly7O1tBJjA",
    "The Role of the ICRC": "oIwB-Y6FUjY",
    /* Module 8: The Core Principles of IHL */
    "The Principle of Distinction": "HRq6Z_rIDmc",
    "The Principle of Proportionality": "YQZAY2tGGcU",
    "Military Necessity": "U_aXHv66X-8",
    "Precautions in Attack": "sKpl0IQoF2s",
    "Humanity and the Martens Clause": "x14Sy_QDbTQ",
    "Prohibition of Unnecessary Suffering": "0sCJo-DEs6g",
    "Applying the Principles Together": "ESwfxu_1Ko0",
    /* Module 9: Protected Persons and Objects */
    "Civilians and Civilian Objects": "hGL1-uOvLm4",
    "The Wounded, Sick and Shipwrecked": "MRK3afqYysQ",
    "Prisoners of War": "OdwniXuatPo",
    "Medical Personnel and Facilities": "4mstH16lpyo",
    "Detention in Armed Conflict": "oQVV1kdy48E",
    "Humanitarian Relief and Access": "wdKtZcq-jg4",
    "Cultural Property and the Environment": "mqdgj1aPHqs",
    "Journalists and Humanitarian Workers": "ciW09u2w3sw",
    /* Module 10: Means and Methods of Warfare */
    "Restrictions on Weapons": "nuNO6HLi15c",
    "Chemical and Biological Weapons": "aWrXeSIaPA0",
    "Landmines and Cluster Munitions": "8VFJamUztOk",
    "Perfidy, Ruses and Starvation": "TwGsoVdFqSI",
    "Explosive Weapons in Populated Areas": "x25Hv2zB1cY",
    "New Technologies and Cyber Operations": "8GwBTFRFlzA",
    "Enforcing the Law of Weapons": "gYu-lNhlE50",
    /* Module 11: Accountability and International Criminal Law */
    "War Crimes": "f0RydVCnco4",
    "Genocide": "JDOemjwn8fU",
    "Crimes Against Humanity": "KlsPzqg4axU",
    "The International Criminal Court": "KufUcE2Jn2A",
    "Ad Hoc Tribunals and Hybrid Courts": "Zt1QjDjG4Xk",
    "Universal Jurisdiction": "ov_ot9UoHEM",
    "Command Responsibility": "miE3QprXeUQ",
    /* Module 12: Human Rights in Practice */
    "Monitoring and Documentation": "ysk9uUSgYoc",
    "Interviewing Victims and Witnesses Safely": "0AX9KN_1Nac",
    "Report Writing and Advocacy": "ccQ5YISvt1Y",
    "Transitional Justice": "ziYOEdGvJj0",
    "Protecting Human Rights Defenders": "F4c2inX4iFk",
    "Business and Human Rights": "MkR7aCgOkUc",
    "Human Rights in Liberia and West Africa": "Hx-FjX_Hft4"
  };
  window.TIH_TOPIC_VIDEOS = window.TIH_TOPIC_VIDEOS || {};
  window.TIH_TOPIC_VIDEOS['human-rights-ihl'] = MAP;
})();
