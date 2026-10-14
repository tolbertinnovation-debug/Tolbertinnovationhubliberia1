"""Author and render TIH's Liberian-law foundation course. Run from the repo root.

Independent preparation, not an accredited law degree or a law-school partnership.
Teaching scenarios, questions and explanations are original TIH study material.
Foreign videos illustrate concepts only; linked Liberian primary law controls.
"""
import json
import re
import runpy
from html import escape as e
from pathlib import Path

ID = 'liberian-law'
TITLE = 'Complete Liberian Law Programme'
REVIEW_DATE = '2026-10-14'
SOURCES = {
 'constitution': ('1986 Constitution — Judiciary of Liberia', 'https://judiciary.gov.lr/constitution-of-liberia-2/'),
 'courts': ('Judicial laws — Judiciary of Liberia', 'https://judiciary.gov.lr/judiciary-law/'),
 'rules': ('Court rules — Judiciary of Liberia', 'https://judiciary.gov.lr/court-rules/'),
 'civil': ('Civil Procedure Law, Title 1 — Liberia Land Authority repository', 'https://www.lla.gov.lr/index.php/downloadable-resources/policies-laws-regulations-repository?download=41:civil-procedure-law'),
 'land': ('Land Rights Act 2018 — Liberia Land Authority', 'https://lla.gov.lr/index.php/downloadable-resources/policies-laws-regulations-repository?download=79:land-rights-act&start=40'),
 'family': ('Domestic Relations Law, Title 9 — Liberia Land Authority repository', 'https://lla.gov.lr/index.php/downloadable-resources/policies-laws-regulations-repository?download=59:domestic-relations-law&start=20'),
 'labour': ('Decent Work Act 2015 — Civil Service Agency', 'https://csa.gov.lr/wp-content/uploads/2024/11/Decent-Work-Act-2015.pdf'),
 'penal': ('Penal Law, Title 26 — primary statute reproduction (check amendments)', 'https://assets.tobaccocontrollaws.org/uploads/legislation/Liberia/Liberia-Penal-Law-native.pdf'),
 'criminal-procedure': ('Criminal Procedure Law, Title 2 — primary code reproduction hosted by ILO (check amendments)', 'https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/42875/LBR42875.pdf'),
 'ethics': ('Code of Moral and Professional Ethics — Judiciary of Liberia', 'https://judiciary.gov.lr/code-of-moral-and-professional-ethic/'),
 'business': ('Liberian corporate and maritime legislation — Registry library', 'https://www.liscr.com/onlinelibrary/'),
 'security': ('Collateral Registry — Central Bank of Liberia', 'https://www.registry.cbl.org.lr/'),
 'tax': ('Tax laws and amendments — Liberia Revenue Authority', 'https://revenue.lra.gov.lr/tax-laws-and-amendments/'),
 'environment': ('Environmental Protection and Management Law — EPA Liberia', 'https://epa.gov.lr/epa-documents/the-environmental-protection-and-management-law-of-liberia/'),
 'ip': ('Intellectual property — WIPO', 'https://www.wipo.int/en/web/about-ip'),
 'rights': ('Universal Declaration of Human Rights — UN Human Rights regional office', 'https://europe.ohchr.org/universal-declaration-human-rights'),
 'research': ('Legal research: secondary resources — Library of Congress', 'https://guides.loc.gov/law-secondary-resources'),
 'irac': ('Legal problem solving with IRAC — Monash University', 'https://www.monash.edu/student-academic-success/excel-at-writing/annotated-assessment-samples/law/law-legal-problem-solving-irac'),
 'school': ('Published subject list — Liberia School of Law (reference only)', 'https://liberiaschooloflaw.com/areas-of-study/'),
 'treaties': ('United Nations Treaty Collection', 'https://treaties.un.org/'),
 'estates': ('Decedents Estates Law, Title 8 — Liberia Land Authority', 'https://lla.gov.lr/index.php/downloadable-resources/policies-laws-regulations-repository?download=45:decedents-estates-law'),
 'commercial': ('Liberian Commercial Code 2010, Title 7 — Ministry of Commerce and Industry (check amendments)', 'https://www.moci.gov.lr/sites/default/files/documents/Commercial%20Code%20-%20Title%207%20-%20Liberian%20Code%20of%20Laws%20Revised.pdf'),
 'insurance': ('Liberia Insurance Act 2013 — Central Bank of Liberia (check current regulations)', 'https://www.cbl.org.lr/sites/default/files/documents/INSURANCE_ACT.pdf'),
 'procurement': ('Current procurement legal documents, including 2026 instruments — PPCC Liberia', 'https://www.ppcc.gov.lr/publications/document-type/legal-documents'),
 'regional-rights': ('Communication guidance — African Commission on Human and Peoples’ Rights', 'https://achpr.au.int/en/guidelines-submitting-complaints'),
 'liberian-ip': ('Liberia Intellectual Property Act 2016 — WIPO Lex (check amendments)', 'https://www.wipo.int/wipolex/en/legislation/details/16994'),
}

MODULES = [
 'The Liberian Legal System', 'Legal Research and Writing', 'Constitutional Law',
 'Civil Procedure', 'Contracts', 'Torts', 'Criminal Law', 'Criminal Procedure',
 'Evidence', 'Property and Land', 'Family Law and Estates', 'Labour Law',
 'Corporations, Agency and Partnership', 'Commercial Payments and Security',
 'Administrative Law, Legislation and Tax', 'Human Rights and International Law',
 'Maritime and Insurance Law', 'Environmental and Intellectual Property Law',
 'Legal Ethics and Trial Advocacy', 'Jurisprudence and Dispute Resolution',
 'Foundation Portfolio and Examination'
]
MODULES += ['Applied ' + title for title in MODULES[:20]] + ['Professional Portfolio and Programme Graduation']
LESSONS = []

def q(s):
    parts = s.split('|')
    assert len(parts) == 6, s
    return dict(q=parts[0], opts=parts[1:5], correct=0, exp=parts[5])

def lesson(title, source, reading, definition, teaching, example, distinction, assignment, questions, video=None):
    LESSONS.append(dict(title=title, source=source, reading=reading, definition=definition,
        teaching=teaching, example=example, distinction=distinction, assignment=assignment,
        questions=[q(s) for s in questions], video=video))

lesson('Sources of Liberian Law and the Rule of Law', 'constitution', 'Read Articles 2 and 3. Identify the supremacy clause and the three branches of government.',
 'A source of law is an authority from which a legal rule derives. In Liberia, begin with the Constitution, then identify applicable legislation, lawful regulations, and relevant Supreme Court decisions. Rule of law means that public power must have a lawful basis and be subject to legal controls.',
 'A rule is not valid merely because a powerful person announces it. Ask who made it, under what power, when it took effect, and whether a higher rule limits it. A constitution is different from a policy statement. A regulation is different from an Act passed by the Legislature. A judgment explains how a court resolved a dispute; its controlling reasoning matters more than a newspaper headline. Keep the text and the interpretation separate in your notes.',
 'Fictional case: a county office announces that residents may never question its decisions. A weak answer says officials can do whatever they want. A strong answer first identifies the decision, obtains the written rule, and tests its authority against constitutional protections and applicable statutes. The absence of a legal source is a problem to investigate, not proof that every decision is automatically void. State which document is missing before concluding.',
 [('Constitution', 'Superior framework for public power and rights'), ('Policy', 'Administrative guidance; cannot simply override superior law')],
 'Prepare a source hierarchy chart and a 400-word analysis of the fictional county directive. Cite Articles 2 and 3 and list the facts still needed.', [
 'Which source is the starting point when a Liberian statute conflicts with the Constitution?|The Constitution|A social media poll|A private policy|The oldest newspaper|Article 2 establishes constitutional supremacy.',
 'A ministry issues a regulation. What should a researcher check first?|Its enabling legal authority|Its logo colour|Its popularity|The number of copies|Delegated rules need a lawful source of power.',
 'Why is a news report insufficient as the rule for an exam answer?|It may summarise rather than establish the law|It is always false|It replaces a statute|It is a court order|Trace the report to the primary legal text.',
 'A county directive is challenged. Which missing item most directly helps test its legality?|The directive and the claimed enabling provision|The official favourite sport|A slogan|A rumour|The actual text and legal power allow a concrete comparison.'
 ], 'y-rAjwNhp_8')

lesson('Common Law, Statutory Law and Customary Justice', 'courts', 'Identify courts and jurisdiction in the Judiciary Law. Compare these with Article 2 of the Constitution.',
 'Common law reasoning uses judicial decisions and legal principles developed through cases. Statutory law comes from legislation. Customary law concerns recognised community practices. These sources can interact, but a custom is not automatically enforceable simply because it is longstanding.',
 'Liberian study requires attention to formal institutions and customary settings. Separate the question of what a community does from whether the practice is legally recognised. Identify the people, subject matter and competent institution. A foreign common-law case can illustrate reasoning but is not automatically a binding Liberian precedent. A civil-law legal system is also different from a civil lawsuit: one describes a tradition of law, the other a type of dispute.',
 'Fictional case: a family says a land issue must be decided only by a village elder; another party has a court claim. Map each forum and identify the legal basis of its authority. Then check the land category, the parties, statutory safeguards and any constitutional conflict. Do not assume that customary proceedings remove access to formal justice or that all customary practices are invalid.',
 [('Civil law system', 'A legal tradition with extensive codification'), ('Civil claim', 'A non-criminal dispute seeking a remedy')],
 'Write a two-column comparison of statutory and customary processes for a fictional land dispute, identifying the authority you would need before choosing a forum.', [
 'What makes a foreign judgment useful but not automatically controlling in Liberia?|Its jurisdiction and authority must be assessed|Its English language makes it binding|Its age makes it legislation|Every internet case binds every court|Jurisdiction determines the status of authority.',
 'Which statement correctly distinguishes civil law from a civil claim?|One can describe a legal system; the other a dispute|Both always mean criminal prosecution|Both mean customary ceremony|Neither concerns law|A legal tradition and a type of proceeding are different concepts.',
 'How should a longstanding customary practice be analysed?|Check recognition, scope and higher-law limits|Assume it overrides all statutes|Treat it as automatically unlawful|Ignore affected persons|History alone does not settle enforceability.',
 'Two forums claim authority over a fictional land dispute. What is the central legal question?|Which forum has lawful jurisdiction over these facts|Which building is larger|Which party is louder|Which forum has more posters|Competent jurisdiction is a legal issue, not a popularity contest.'
 ], '9_M4bNOxsYs')

lesson('Finding, Checking and Citing Legal Authorities', 'research', 'Use the Library of Congress guide to distinguish primary and secondary sources; locate a Liberian primary authority through the Judiciary.',
 'Primary authority contains the law itself, such as a statute or judgment. Secondary material explains or comments on that law. Legal research is an iterative process: define the issue, find sources, check their status, and record how they answer the question.',
 'Start a research log with jurisdiction, issue, search terms, source, pinpoint reference and date checked. Use a textbook to develop vocabulary, then retrieve the cited primary material. For cases, check later treatment; for statutes, check commencement, amendments and repeal. An AI answer is a research lead, never evidence that a quoted case exists. Open each authority before citing it. Save enough citation information for another learner to find the same page or provision.',
 'Fictional case: an online article says a notice must be given within seven days but does not name the law. Search by the legal issue and relevant statute rather than copying the number. Record whether the article concerns Liberia and whether the text is current. If the law cannot be verified, write that the deadline is unconfirmed. Inventing a section number makes an answer less reliable than honestly identifying a research gap.',
 [('Primary authority', 'Law-producing or law-declaring text'), ('Secondary source', 'Explanation used to locate and understand primary law')],
 'Create a research log for a fictional unpaid-invoice claim with five entries. Include one statute, one judgment, and a clear note on any unverified amendment.', [
 'Which item is primary authority?|The text of a court judgment|A student blog|A revision mnemonic|A news comment|The court text provides the decision itself.',
 'An AI supplies a case citation you cannot find. What should you do?|Verify or omit it and disclose the gap|Invent the missing paragraph|Treat fluency as proof|Attribute it to any court|A plausible citation can still be fabricated.',
 'Why record a pinpoint citation?|It identifies the exact relevant provision or passage|It replaces legal analysis|It guarantees victory|It makes all sources binding|A reader must be able to check the precise support.',
 'A statute PDF is ten years old. Which check is essential before applying it?|Look for amendments and commencement information|Assume age proves repeal|Use only the filename|Change the date yourself|An older reproduction may not include later changes.'
 ], 'dAPOL6IneKk')

lesson('Case Briefing and IRAC Legal Analysis', 'irac', 'Read the IRAC guide, then practise on a published Liberian judgment located through the Judiciary.',
 'A case brief records material facts, procedural history, issue, holding and reasoning. IRAC means Issue, Rule, Application and Conclusion. A brief explains a decision; IRAC helps organise your own analysis of a problem.',
 'Select facts that affect the legal test. State the issue as a question, not the whole story. Give a rule with authority, then connect each legal element to evidence and competing arguments. Application is usually the longest part. Identify uncertainty rather than hiding it. Distinguish the holding from incidental comments. In a problem question, a careful conditional conclusion is better than claiming certainty when key facts are absent.',
 'Fictional case: a seller promises delivery Friday; the buyer pays; delivery never occurs. Issue: did the failure breach an enforceable obligation? Rule: establish the applicable contract terms and rule for performance. Application: payment and messages may show agreement, but an extension or excuse must be investigated. Conclusion: a breach claim may exist if formation, the due date and unexcused nonperformance are established. This is reasoning; merely writing “buyer wins” is not.',
 [('Holding', 'The court decision on the issue before it'), ('Application', 'Explanation connecting the rule to the material facts')],
 'Write a one-page case brief and a 600-word IRAC response to the delivery scenario. Include the strongest counterargument and two missing facts.', [
 'Which part of IRAC connects evidence to each legal element?|Application|Title page|Citation list alone|Conclusion alone|Application explains why the facts satisfy or fail the rule.',
 'What belongs in the material-facts section of a brief?|Facts relevant to the legal issue|Every detail regardless of relevance|Only the winning party opinions|Only the judge biography|Materiality depends on the rule being applied.',
 'How should an uncertain outcome be stated?|Conditionally, explaining the missing facts|As guaranteed success|Without any reasoning|By inventing evidence|A conclusion should reflect the available record.',
 'A judgment mentions an unrelated policy issue. Why distinguish it from the holding?|Its authority may differ from the reasoning necessary to decide the case|Every sentence is a statute|Incidental comments erase the result|It becomes a criminal charge|Necessary reasoning and incidental discussion need separate treatment.'
 ], 'O7G-y6vepos')

lesson('Constitutional Supremacy and Separation of Powers', 'constitution', 'Read Articles 2, 3 and 65–66; identify judicial power and final appellate jurisdiction.',
 'Separation of powers allocates governmental functions among institutions. Constitutional supremacy requires those institutions to operate within the Constitution. Judicial review examines consistency with constitutional requirements; it is different from voting on whether a policy is popular.',
 'When analysing an institutional dispute, name the actor and function first. Then locate the provision granting power and any provision limiting it. Consider whether the alleged act is legislative, executive or judicial. Do not import a foreign constitution clause into Liberia. A court structure diagram should show who decides cases and how review works, without inventing appellate routes or jurisdictional thresholds.',
 'Fictional case: a government department announces that it may reverse any court judgment by letter. The problem is institutional authority, not whether the department agrees with the outcome. Compare its claimed power with Articles 65 and 66 and the relevant procedural rules. Ask whether a lawful appeal or other remedy exists. A strong answer identifies the constitutional tension and the proper source for review rather than encouraging disobedience to an order.',
 [('Judicial review', 'Legal assessment of an act against superior legal requirements'), ('Appeal', 'Review through the procedure and court authorised by law')],
 'Draw a Liberian institutions chart with constitutional article references and write 500 words on the fictional departmental reversal.', [
 'Which source should define the powers of Liberia government branches?|The Liberian Constitution|A foreign election poster|A company handbook|An anonymous message|The local constitutional text supplies the institutional framework.',
 'What is the focus of judicial review?|Legality under applicable superior law|Whether a judge likes a minister|How many people agree online|A private marketing campaign|Review concerns lawful authority and limits.',
 'Why distinguish an appeal from political disagreement with a judgment?|Review must follow an authorised legal route|Disagreement automatically cancels judgments|Only newspapers can review courts|No legal review exists anywhere|Institutional disagreement does not create review powers.',
 'An executive letter claims to overturn a court decision. What must be identified?|The legal power claimed and constitutional limits|The envelope price|The sender handwriting|The number of recipients|The institutional allocation of authority is the issue.'
 ], 'cc2gCpR6EE0')

lesson('Fundamental Rights and Due Process in Liberia', 'constitution', 'Read Articles 11, 20 and 21 and record the rights, procedures and qualifications in the text.',
 'A fundamental right protects an interest recognised by the Constitution. Due process concerns legally required fairness in decisions affecting protected interests. A rights analysis identifies the holder, state action, protected interest, restriction and available legal response.',
 'Read the full article rather than a slogan about freedom. Identify whether the text protects persons, citizens or another specified group. Notice exceptions and linked procedures. Analyse equality using the treatment being compared and the justification offered. A right to a fair hearing does not predetermine the hearing result. Constitutional protections should guide procedure even when an allegation is unpopular.',
 'Fictional case: a public institution removes a student from its programme after an accusation without explaining the case or offering a response. Identify the decision and the student interest, obtain the governing rules, and assess the constitutional and procedural protections. Separate whether misconduct occurred from whether the process was fair. A remedy for procedural failure may involve a lawful reconsideration rather than automatic permanent reinstatement.',
 [('Due process', 'Required legal fairness in the decision-making process'), ('Merits', 'The substantive question whether a claim is justified')],
 'Prepare a rights-analysis table for the fictional student removal. Quote no more than a short phrase; paraphrase and cite the relevant article.', [
 'Does a fair hearing guarantee that the claimant wins?|No, it concerns fair process|Yes, in every case|Only if the claimant is famous|It eliminates factual disputes|Fair procedure and substantive entitlement are separate questions.',
 'Before saying a right was violated, what should be identified?|The protected interest and challenged action|Only a political slogan|Only the claimant age|Only foreign case names|A legal claim needs an applicable right and facts.',
 'Why read the whole constitutional article?|Qualifications and procedures can change its application|Every article says the same thing|Headlines replace the text|Exceptions are never relevant|Partial reading can distort scope.',
 'A student was removed without a response opportunity. Which distinction matters?|Procedural fairness versus proof of misconduct|Tuition colour versus uniform colour|Civil law versus architecture|Popularity versus publicity|A flawed procedure does not itself resolve the underlying allegation.'
 ], 'uSyiNn0V31w')

lesson('Civil Jurisdiction, Venue and Service of Process', 'civil', 'Read Chapters 3 and 4 and check the applicable Judiciary Law and current court rules.',
 'Jurisdiction is a court legal authority over a matter or person. Venue concerns the authorised location for proceedings. Service of process gives notice by the legally required method. These requirements are related but are not interchangeable.',
 'Before drafting a claim, identify the court competence, the parties and how notice must be given. A meritorious claim can encounter procedural barriers. Make a separate checklist for subject matter, parties, venue and service. Foreign federal jurisdiction rules in a video illustrate distinctions only; do not transplant dollar thresholds or filing routes into Liberia. For real proceedings, use the applicable statute, current rules and professional advice.',
 'Fictional case: a Paynesville supplier files an invoice claim and sends the defendant only an informal text. The defendant lives in another county. Investigate court competence and venue, then the authorised service method. The text may show actual awareness but does not by itself prove legally sufficient service. Keep proof of each procedural step in a dated record.',
 [('Jurisdiction', 'Legal competence of a court'), ('Venue', 'Legally proper place for the proceeding')],
 'Build a four-part filing checklist for the invoice scenario. Cite the chapter you would consult for each question; do not invent filing deadlines.', [
 'Which concept concerns court authority over the type of claim?|Subject-matter jurisdiction|Venue alone|The claimant preference|Court decoration|Competence over the matter differs from location.',
 'What does venue principally concern?|The legally proper place for proceedings|The truth of testimony|The damages amount alone|The lawyer nationality|Venue addresses geographical placement under law.',
 'Why retain proof of service?|Notice must be shown through the authorised process|It proves every allegation|It replaces a judgment|It is a tax receipt|Service is an independent procedural requirement.',
 'An informal message reaches a defendant. What remains to be checked?|Whether the legally required service method was satisfied|Whether the defendant liked the message|Whether the phone is new|Whether the claimant has followers|Actual knowledge and valid service are not always identical.'
 ], 'iAgaqEfcJmA')

lesson('Pleadings, Disclosure, Judgment and Civil Appeals', 'civil', 'Read Chapters 9, 13 and 51 together with the current rules for the relevant court.',
 'Pleadings state claims and responses. Disclosure concerns obtaining relevant information through lawful procedure. A judgment decides an issue or case. An appeal asks an authorised reviewing court to examine alleged errors under the applicable process.',
 'A complaint should organise parties, material facts, legal grounds and relief. An answer separates admissions, denials and defences. Disclosure is not permission to take private records without authority. After judgment, identify the reviewable issue, relevant record and procedural route. Deadlines and required steps must be researched directly; a foreign video or general course note is not a safe filing calendar.',
 'Fictional case: the supplier alleges nonpayment; the customer has a receipt but no delivery record. In a mock answer, admit the agreement if true, dispute nonpayment with the receipt, and identify whether delivery is contested. Plan requests for the invoice, payment ledger and delivery acknowledgement. On appeal, identify an actual alleged legal error instead of repeating that the result feels unfair.',
 [('Pleading', 'Formal statement of a claim or response'), ('Evidence', 'Material offered to establish disputed facts')],
 'Draft an educational complaint outline, answer outline and disclosure list for the supplier dispute. Mark all documents “fictional classroom exercise”.', [
 'What is the principal job of an answer?|Respond to allegations and state applicable defences|Automatically erase the complaint|Replace witness testimony|Publish private records|An answer joins and clarifies the disputed issues.',
 'Why separate pleading from evidence?|An allegation is not itself proof|Every allegation proves itself|Receipts are pleadings only|Evidence is never relevant|A party must support contested facts with admissible material.',
 'A mock appeal says only “the decision is unfair”. What is missing?|An identified error tied to the record and law|A brighter cover page|The judge home address|A social media petition|Appellate analysis needs a legally relevant ground.',
 'What is the appropriate approach to disclosure requests?|Use authorised procedures for relevant information|Secretly access an opponent account|Request every private file without limits|Alter the opponent records|Disclosure is governed by process and lawful scope.'
 ], 'G4VJwJ295pg')

lesson('Contract Formation and Enforceability', 'civil', 'Study the breach-of-contract pleading form in Appendix I; find Liberian judgments on formation through the Judiciary.',
 'A contract is an agreement that the applicable law will enforce. Formation analysis distinguishes an offer, acceptance, the exchange or consideration where required, capacity, legality and any formal requirements. A conversation about a possible deal is not necessarily a completed agreement.',
 'Read words and conduct objectively in context. Identify the parties, goods or services, price, timing and acceptance method. Consider whether a message is an invitation to negotiate rather than an offer. A changed term can require further agreement. Do not assume every oral agreement is unenforceable or that a signature cures illegality. Check the local law applicable to the particular transaction.',
 'Fictional case: a Monrovia printer quotes $200 for 500 booklets; the buyer replies “I accept at $150”. The changed price raises a counteroffer issue, not clear acceptance of the original terms. A later message agreeing $150 may establish agreement. Assemble the whole exchange and payment evidence. Distinguish proof of negotiation from proof of final assent.',
 [('Offer', 'Proposal sufficiently definite to invite acceptance'), ('Negotiation', 'Discussion that may not yet create binding obligations')],
 'Produce a formation timeline from six fictional messages and write an IRAC answer on the changed-price reply.', [
 'A buyer accepts only at a different price. What issue arises?|Whether this is a counteroffer rather than acceptance|Automatic acceptance of every term|Automatic criminal guilt|No need for evidence|A changed essential term can prevent matching assent.',
 'Why identify capacity in formation analysis?|Some parties may lack legally sufficient ability to contract|Capacity means the contract page size|All adults must refuse agreements|It replaces agreement|Enforceability can depend on legal capacity.',
 'Does a signature alone make an unlawful bargain enforceable?|No, legality must still be checked|Yes, always|Only if written in blue|Only if printed twice|Formal execution does not remove legal prohibitions.',
 'Which record best helps analyse the printer agreement?|The complete message and payment sequence|Only a selected favourable line|Only the buyer slogan|An unrelated contract|Formation depends on the whole relevant exchange.'
 ], 'wrJL6M-ws1w')

lesson('Contract Breach, Defences and Remedies', 'civil', 'Locate contract-remedy cases and compare the civil-law forms for damages and specific performance.',
 'A breach is failure to perform an enforceable contractual obligation without a legally sufficient excuse. Remedies respond to established liability; damages, restitution, rescission and specific performance serve different purposes and depend on applicable law.',
 'Analyse formation before breach. State the obligation, performance date and actual conduct, then examine any variation, payment, prevention or recognised excuse. Link loss to the breach and explain evidence. Mitigation asks what reasonable steps could limit loss, not whether the injured party must accept any substitute. Avoid treating every disappointing transaction as fraud or promising a particular remedy without local authority.',
 'Fictional case: a tailor agrees to supply uniforms for $300; late delivery makes a documented $40 replacement expense necessary. Distinguish recovery of money paid from compensation for additional loss. A claim for $10,000 based only on anger lacks a reasoned evidential basis. If the buyer accepted a new deadline, analyse that change before calling the delivery late.',
 [('Damages', 'Money awarded for legally recoverable loss'), ('Specific performance', 'A court-directed performance remedy where legally available')],
 'Prepare a loss schedule with supporting evidence and two possible remedies for the uniform scenario. Explain one defence and its effect.', [
 'What should be established before alleging a contractual breach?|An enforceable obligation and its terms|Only disappointment|Only a verbal accusation|Only a large loss estimate|There must first be an obligation capable of breach.',
 'Which remedy aims at carrying out an obligation rather than only paying money?|Specific performance|An invoice reminder|A newspaper notice|A private apology|Specific performance concerns ordered performance where available.',
 'Why document replacement expenses?|To connect claimed loss to the breach|To guarantee any amount requested|To prove every defence fails|To avoid checking terms|Remedy analysis depends on causation and evidence.',
 'The parties agreed to extend delivery. What must an answer assess?|The variation and the revised obligation|Only the original date|The buyer preference for colour|A foreign tax rule|A valid change can alter what counts as breach.'
 ], '0KSh3c9auaw')

lesson('Negligence: Duty, Breach, Causation and Loss', 'civil', 'Study the negligence pleading form in Appendix I and locate a Liberian negligence judgment.',
 'Negligence is a civil wrong involving failure to meet an applicable standard of reasonable care. Analyse duty, breach, causation and legally recoverable damage separately. An accident alone does not establish every element.',
 'Duty asks whether the defendant owed the relevant obligation. Breach compares conduct with the standard in the circumstances, without judging solely through hindsight. Factual causation asks whether the breach caused the loss; legal causation concerns the limits of responsibility. List evidence for each element. Defences and the treatment of claimant fault depend on applicable Liberian law; do not import a foreign percentage rule.',
 'Fictional case: a shop leaves a leaking container beside its entrance; a customer slips and incurs a verified clinic expense. Identify who controlled the entrance, whether the danger was known or reasonably discoverable, and whether the spill caused the fall. A witness who saw the customer trip elsewhere changes causation. A good answer tests competing explanations before proposing compensation.',
 [('Breach of duty', 'Failure to meet the applicable care standard'), ('Causation', 'The legally relevant connection between conduct and loss')],
 'Create an element-by-element evidence table for the shop accident and a 600-word balanced analysis including claimant fault.', [
 'Which statement best describes an accident in negligence analysis?|It requires an element-by-element investigation|It automatically proves liability|It proves intention|It eliminates causation|An accident is a fact, not a complete legal test.',
 'A spill existed but did not cause the fall. Which element is especially problematic?|Causation|The shop name|The claimant citizenship alone|The paper size|A breach must connect to the claimed loss.',
 'What does the reasonable-care comparison assess?|Conduct in the relevant circumstances|Only the final injury severity|Only how wealthy the defendant is|Only popularity|The standard concerns what reasonable care required at the time.',
 'Why must claimant fault be researched locally?|Its legal consequences vary by applicable law|It always cancels every claim everywhere|It is irrelevant in every system|A video controls all jurisdictions|Defence rules cannot safely be assumed from foreign examples.'
 ], 'VKimRq1t5ow')

lesson('Intentional Torts and Civil Defences', 'civil', 'Consult Appendix I forms on assault, battery, false imprisonment, fraud and trespass; research relevant local decisions.',
 'An intentional tort concerns deliberate conduct meeting the elements of a civil wrong. Civil liability and criminal liability are separate inquiries even when they arise from the same event. Consent and lawful justification are possible issues, with limits set by applicable law.',
 'Identify the particular wrong rather than calling every harmful act negligence. For contact, restraint or property interference, ask what was done, with what intention, and with what lawful authority. Consent has a scope: agreeing to one act does not automatically authorise another. A defence must be supported by facts and a legal rule. Remedies require a separate assessment of harm and available relief.',
 'Fictional case: a shop guard locks a visitor inside after a payment argument. Investigate restraint, duration, consent and authority, and distinguish a civil claim from any criminal allegation. A store policy alone does not prove authority to detain. Do not physically test detention powers for an assignment; work only with fictional facts and lawful research.',
 [('Tort', 'Civil wrong for which law may provide a remedy'), ('Defence', 'Legally relevant answer to an otherwise established claim')],
 'Write a mock case note on the guard scenario, analysing the alleged wrong, one defence, evidence needed and possible remedy.', [
 'Can one event raise both civil and criminal issues?|Yes, the legal tests and remedies must be separated|No event can ever do so|Civil claims always replace prosecution|Criminal charges automatically award damages|The same facts can engage distinct legal processes.',
 'A visitor agrees to a bag check. What must be assessed before relying on consent to detention?|The scope of the actual consent|Only the guard job title|Only the shop policy font|The visitor favourite colour|Consent to one act does not necessarily cover another.',
 'What is wrong with treating a store policy as sufficient detention authority?|A private policy does not by itself supply lawful power|Policies are always criminal laws|Every policy is a court judgment|No law applies in shops|Authority must come from applicable law and facts.',
 'Which approach properly tests a justification defence?|Identify its legal conditions and supporting facts|Assert good intentions alone|Assume uniforms create unlimited powers|Ignore harm|A defence is an analysis, not simply a label.'
 ], 'ydEgreKaePI')

lesson('Criminal Offences, Conduct and Mental Elements', 'penal', 'Read the general principles in Title 26 and a selected offence provision; check subsequent amendments.',
 'A criminal offence is conduct prohibited by penal law with legally specified elements and consequences. Actus reus describes required conduct, circumstances or results; mens rea describes the required mental state where the offence requires one.',
 'Begin with the offence text, not a moral judgement. Break it into elements and identify what evidence addresses each. Intention, knowledge, recklessness and negligence are different ideas. Do not assume every offence has the same mental requirement. Omission liability needs an applicable duty. A person accusation, arrest or social media confession must still be analysed through the governing evidential and procedural rules.',
 'Fictional case: a worker carries away a bag believing it is their own. An analysis of a theft allegation must examine ownership, taking, knowledge or intent as required by the actual offence. A genuine mistake can matter, but saying “mistake” is not proof. The answer should identify what the worker saw, what the bag contained and how the claim could be tested.',
 [('Actus reus', 'External elements of an offence'), ('Mens rea', 'Required mental element, where specified by law')],
 'Select one offence in the Penal Law and prepare an elements table with fictional evidence for and against each element.', [
 'Why start criminal analysis with the offence provision?|It specifies the elements to be proved|It guarantees the accused is guilty|It replaces all evidence|It eliminates defence rights|Criminal liability depends on the applicable legal definition.',
 'Which term describes a required mental element?|Mens rea|Venue|Probate|Consideration|Mental state is distinct from external conduct.',
 'An accused took the wrong bag honestly. What issue needs analysis?|Whether the required mental element is established|Whether a bag has a handle|Whether all mistakes prove guilt|Whether civil filing fees were paid|Mistake may affect the mental requirement under the offence.',
 'When analysing an omission, what must be identified?|A legally relevant duty and the offence requirements|Only a moral expectation|Only the person income|Only the weather|Failure to act is not automatically a criminal offence.'
 ], 'DowjAl6WAiU')

lesson('Criminal Defences, Participation and Sentencing', 'penal', 'Read general responsibility and justification provisions and the penalty for the selected offence; verify amendments.',
 'A criminal defence can negate an element or provide a legally recognised justification or excuse. Participation concerns liability for involvement in another person conduct. Sentencing follows conviction and applies legally available penalties and relevant factors.',
 'Do not confuse innocence with mitigation: mitigation addresses consequences after liability, while a defence may prevent liability. Analyse the precise role of each person in a group. Presence alone and active assistance are different facts, but the governing participation rule must be checked. For a justification, identify its conditions and limits. Never assume that revenge or a private instruction creates lawful authority.',
 'Fictional case: three people are nearby during damage to a stall; one breaks the lock, one allegedly encourages it, and one only watches. Separate their conduct and evidence rather than treating the group as a single defendant. If one claims protection from an immediate threat, analyse necessity and the applicable justification conditions. Punishment cannot be invented to match public anger.',
 [('Defence', 'Argument affecting whether liability is established'), ('Mitigation', 'Factors relevant to a lawful penalty after conviction')],
 'Prepare three separate liability analyses for the stall scenario and a sentencing-research checklist without recommending an unverified penalty.', [
 'Which distinction separates a defence from mitigation?|Liability versus factors affecting penalty|Page numbering versus font|Civil court versus printing|Only the accused wealth|Defences and mitigation answer different legal questions.',
 'Why analyse each group member separately?|Their conduct and mental involvement may differ|Everyone nearby is automatically guilty|Groups cannot be investigated|Witnesses become defendants automatically|Individual responsibility requires individual evidence.',
 'What limits a proposed criminal sentence?|The applicable law and lawful sentencing process|Only public anger|Only a private agreement|Only a newspaper poll|Legal punishment must have a legal foundation.',
 'A person claims justification after damaging a stall. What is necessary?|Facts satisfying the applicable justification conditions|The word justification alone|A supportive slogan|A rumour about the victim|A defence requires supported legal analysis.'
 ], 'Sgs6idCKTkE')

lesson('Arrest, Detention, Bail and Access to Counsel', 'constitution', 'Read Article 21 alongside the current Criminal Procedure Law and relevant court rules.',
 'Arrest brings a person under legal restraint. Detention is continuing custody. Bail concerns conditional release under applicable law; it is not a judgment of innocence or guilt. Constitutional protections and criminal procedure must be read together.',
 'For a detention timeline, record the basis, arrest time, information given, access to counsel, court appearance and orders. Identify the competent authority and the applicable safeguards. Article 21 contains important protections, but read its full qualifications before stating an absolute rule. Never substitute a foreign bail amount or timetable for Liberian law. Use authorised counsel and court processes for actual cases.',
 'Fictional case: a learner hears that a relative was arrested but has only a forwarded voice note. Separate confirmed information from rumour and prepare neutral questions about the legal basis, location, counsel and court order. Do not publish accusations or obstruct officers. A classroom memo should state what the record establishes and what cannot yet be determined.',
 [('Bail', 'Conditional release under a lawful process'), ('Conviction', 'Determination of criminal guilt through the required process')],
 'Create a fictional detention timeline and a safeguards checklist citing Article 21. Explain why a bail decision does not decide the accusation.', [
 'Does release on bail determine innocence?|No, release and guilt are separate decisions|Yes in every case|Only for rich defendants|It cancels the offence provision|Bail addresses custody, not a final guilt determination.',
 'Which record helps analyse detention safeguards?|A verified chronology and legal basis|Only an anonymous voice note|Only a family rumour|Only the officer nickname|Time and authority are central to procedural analysis.',
 'Why read constitutional detention qualifications carefully?|The legal protection may contain specific conditions|A headline is more binding|All qualifications are optional|Foreign rules automatically apply|The full provision controls its scope.',
 'A forwarded message alleges an arrest. What should the memo distinguish?|Verified facts from unconfirmed claims|Only accents|Only phone models|Only message length|Careful legal work records uncertainty.'
 ], 'pFUJ2ehSwjA')

lesson('Criminal Trials, Proof and Fair-Hearing Safeguards', 'constitution', 'Read Article 21 and the relevant trial provisions of the Criminal Procedure Law; compare with the current court rules.',
 'A criminal trial is a legally regulated process for determining a charge. The presumption of innocence and prosecution burden require proof through the applicable process. A charge is an allegation, not a conviction.',
 'Map accusation, plea, evidence, defence response, adjudication and any lawful review. Examine each element of the charge against the evidence. A defendant silence must be analysed under the constitutional protection, not treated as a confession. Assess witness reliability without assuming that confident delivery proves truth. A fair hearing requires both institutional safeguards and meaningful opportunity to respond.',
 'Fictional case: an online crowd declares a trader guilty because the police arrested them. Explain the missing legal steps and the difference between suspicion and proof. If two witnesses disagree, identify what each could observe, the source of knowledge and corroborating records. A model answer should analyse evidence and the burden rather than count supportive comments.',
 [('Charge', 'Formal accusation to be determined'), ('Presumption of innocence', 'Protection against treating accusation alone as established guilt')],
 'Write a fictional trial-stage diagram and a 500-word explanation correcting the crowd claim, with constitutional references.', [
 'What does an arrest by itself establish about guilt?|It does not replace a lawful determination of the charge|It proves every element|It is the final verdict|It eliminates defence rights|Restraint and adjudication are distinct.',
 'How should conflicting witnesses be assessed?|Examine knowledge, reliability and corroboration|Choose the louder witness|Count social media followers|Ignore all testimony|Reliability depends on evidence, not performance alone.',
 'Which distinction is central to criminal proof?|Suspicion versus proof of the required elements|Formal shoes versus sandals|County size versus population|Ink colour versus paper|A suspicion may justify inquiry without establishing guilt.',
 'What should a trial analysis identify for every offence element?|The evidence and relevant burden of proof|Only the police slogan|Only the courtroom location|Only the sentence requested|Element-based proof prevents unsupported conclusions.'
 ], 'rTmoCpEsGe0')

lesson('Relevance, Burdens and Standards of Proof', 'civil', 'Read Chapter 25 on evidence and consult Liberian decisions on proof in the relevant type of proceeding.',
 'Relevance concerns whether evidence bears on a legally material fact. Admissibility asks whether the applicable rules permit it. Weight concerns persuasive value. The burden identifies who must prove what; the standard identifies the required degree of proof.',
 'Begin with the disputed legal element and explain why an item matters. A relevant item can still face an exclusion rule. An admissible item can carry little weight. Standards vary by proceeding and issue; do not apply a criminal standard mechanically to every civil question. Distinguish the burden of producing evidence from the ultimate burden of persuasion when the governing law does so.',
 'Fictional case: a claimant proves the defendant owns an expensive car but alleges an unpaid invoice. Wealth may have no direct connection to whether this invoice was paid. A bank transfer record linked to the invoice is more informative. Explain the link, then test authenticity and whether another payment could account for the record. Do not treat volume of documents as proof quality.',
 [('Admissibility', 'Whether evidence may legally be received'), ('Weight', 'How persuasive the admitted material is')],
 'Classify ten fictional items by relevance, admissibility issues and likely weight for the invoice dispute.', [
 'Can relevant evidence still be inadmissible?|Yes, another applicable rule may exclude it|No, relevance guarantees admission|Only if it is short|Only if it is printed|Relevance is one part of admissibility.',
 'What does evidential weight concern?|Persuasive value|Document kilograms|The filing fee|The witness nationality alone|Weight describes strength in proving a point.',
 'A defendant expensive car is offered to prove nonpayment. What must be explained?|Its connection to a material disputed fact|Its colour alone|Its brand popularity|The claimant favourite model|Evidence needs a logical connection to the issue.',
 'Why identify the proceeding before choosing a proof standard?|Different proceedings can apply different standards|All cases require identical proof|Only criminal law uses evidence|Proof standards are personal preferences|The governing legal framework sets the standard.'
 ], 'Zq-4oAWy4XE')

lesson('Hearsay, Documents, Digital Evidence and Authentication', 'civil', 'Read the applicable evidence provisions and find local decisions on documentary proof; compare rather than import foreign hearsay rules.',
 'Hearsay analysis asks whether an out-of-court statement is being used to prove what it asserts under the governing evidence rules. Authentication concerns showing an item is what its proponent claims. A screenshot content and its provenance are separate issues.',
 'State the purpose for which a statement is offered. The same words can raise different issues if offered as notice instead of truth. Then check the local rule and any exception. For documents, preserve originals, source, dates and lawful access. For digital material, record the account, export method and continuity. A printout does not automatically prove who created or sent it.',
 'Fictional case: “My neighbour said the vendor received payment” is offered to prove payment. Identify the original speaker and truth-purpose issue, then seek first-hand or documentary support. A cropped transfer screenshot also needs account and transaction verification. Do not edit images to make them appear clearer evidence; keep the original and distinguish any annotated classroom copy.',
 [('Authentication', 'Showing an item is what it is claimed to be'), ('Provenance', 'The recorded origin and history of material')],
 'Prepare an evidence-preservation log and a hearsay-purpose analysis using fictional messages; include two reliability limitations.', [
 'Why identify the purpose of an out-of-court statement?|The evidential use affects the hearsay analysis|All statements are automatically excluded|Purpose never matters|It determines the witness salary|Truth and other purposes may be treated differently under the rule.',
 'Does a printed screenshot prove its author automatically?|No, authentication remains necessary|Yes, every time|Only in colour|Only on expensive paper|Format does not establish provenance.',
 'Which practice best preserves digital evidence?|Retain the original and record lawful source and handling|Overwrite the file with edits|Delete all context|Change the timestamp|Integrity and traceability help verification.',
 'A neighbour repeats a vendor payment claim. What is the key first step?|Identify the original source and purpose for offering it|Assume repetition is independent proof|Ignore how the neighbour knows|Treat a rumour as a judgment|Source and use determine the evidential questions.'
 ], 'xf2Gdkgw-N0')

lesson('Land Categories and Customary Land Rights in Liberia', 'land', 'Read the Land Rights Act definitions and provisions on categories and customary land; check implementation measures with the LLA.',
 'The Land Rights Act distinguishes private, customary, government and public land. Land classification helps identify ownership, management and transaction requirements. Customary land should not simply be treated as ownerless land because no individual deed is produced.',
 'Identify the parcel and claimed category before discussing transfer. Separate ownership from occupation and management authority. Community land analysis needs evidence of the community, boundaries, recognised rights and lawful decision process. Do not assume a chief signature alone settles every community consent issue. Record women and other affected members as participants in the analysis, not as invisible background.',
 'Fictional case: an investor is offered a rural parcel by one person who claims authority for the whole community. Request the land classification, boundary evidence and legal basis for representation. Compare the proposed process with the Act. A promise of jobs is not itself proof of valid consent or title. A balanced memo identifies both development interests and unresolved rights.',
 [('Customary land', 'Land rights recognised through the statutory customary-land framework'), ('Public land', 'A distinct statutory category; not a synonym for all rural land')],
 'Create a fictional parcel-classification and community-stakeholder table. Cite the exact provisions found in the Act for each entry.', [
 'Which classification belongs to the Land Rights Act framework?|Customary land|Social-media land|Unlimited land|Foreign-video land|The Act recognises customary land as a distinct category.',
 'Does absence of an individual deed prove community land is ownerless?|No, customary rights require analysis|Yes in every situation|Only in rural counties|Only when an investor asks|Documentation and rights must be assessed under the Act.',
 'Why check authority before accepting one signature for a community?|Representation and consent must have a lawful basis|A signature always binds every resident|Only the pen brand matters|Communities cannot have rights|A transaction needs competent authority and required participation.',
 'What should precede evaluating a rural land sale?|Identify the parcel category and rights holders|Only agree the price|Only promise jobs|Only print an advertisement|Classification frames the legal requirements.'
 ], 'UJjop_TJXoc')

lesson('Deeds, Leases, Boundaries and Property Due Diligence', 'land', 'Read transfer provisions in the Land Rights Act and examine applicable real-property procedures and current LLA guidance.',
 'Due diligence is structured investigation before a transaction. A deed records a transfer claim; a lease grants specified use or possession for a term. Boundaries identify the parcel, while title analysis asks whether the seller can lawfully convey the claimed interest.',
 'Check seller identity and authority, the chain of title, parcel description, occupation, encumbrances and competing claims. A survey does not by itself resolve every ownership issue. Registration, execution and tax questions need the current legal process. A lease should identify premises, term, rent, permitted use, repairs and lawful termination arrangements. Explain uncertainty before anyone relies on the transaction.',
 'Fictional case: two sellers present documents for the same Paynesville lot. Compare grantor, dates, description and transaction history rather than choosing the newer photocopy automatically. Inspect only through lawful arrangements and use competent professionals for real title work. In a fictional lease exercise, distinguish the landlord ownership claim from the tenant right to occupy for a fixed term.',
 [('Deed', 'Instrument documenting a claimed conveyance'), ('Lease', 'Grant of specified possession or use for a term')],
 'Prepare a fictional title-risk register and a one-page lease term sheet with five unresolved due-diligence questions.', [
 'What does a survey principally help establish?|The parcel location and boundaries|Automatic unchallengeable title|All tax exemptions|The seller identity by itself|Boundary evidence and ownership authority are distinct.',
 'Which item belongs in title due diligence?|The seller authority and chain of title|Only the purchase price|Only the seller confidence|Only a photograph of a fence|A seller must be able to convey the relevant interest.',
 'What distinguishes a lease from full ownership transfer?|A lease grants a defined use or possession interest for a term|A lease never has obligations|A lease is always a criminal charge|A lease proves every title claim|The interest conveyed depends on the instrument and law.',
 'Two deeds describe the same lot. What is the sound response?|Investigate both title histories and competing claims|Choose the shinier paper|Ignore the older document|Pay both sellers immediately|Competing title requires verification before reliance.'
 ], None)

lesson('Marriage, Family Obligations and Child Protection', 'family', 'Read the Domestic Relations Law sections relevant to marriage and support; also consult the Children’s Law and current amendments through the Ministry of Justice.',
 'Family law regulates legal relationships and obligations involving spouses, children and other family members. Marriage status, support, custody and protection are separate questions. A family disagreement does not remove a child independent interests.',
 'Identify the form of relationship, legal recognition, parties and issue. Do not assume one marriage rule applies to every statutory or customary setting. In child matters, examine applicable protection and welfare requirements, evidence of care, and competent authority. Avoid unsupported age or inheritance rules from old summaries. Distinguish family support from ownership of all household assets. Use confidential fictional facts in assignments.',
 'Fictional case: separated parents dispute school expenses and where their child should live. List the child needs, caregiving arrangements, relevant records and legal questions without declaring one parent entitled merely by gender. If violence is alleged, safety and appropriate professional referral come before a classroom negotiation plan. The learning exercise is legal analysis, not an instruction to handle a real child case alone.',
 [('Support', 'Legally relevant provision for a dependent needs'), ('Custody', 'Authority and arrangements concerning a child care under applicable law')],
 'Prepare a fictional family-law issue map and a neutral information checklist, including child welfare and confidentiality.', [
 'Why separate child support from custody?|They concern different obligations and arrangements|Support automatically decides every custody issue|Children have no separate interests|Custody is only a property sale|Related family questions still require distinct analysis.',
 'Which approach to family-law research is sound?|Identify the recognised relationship and applicable law|Assume all marriage systems are identical|Use only a foreign video|Ignore later amendments|Relationship type and governing law matter.',
 'What belongs first in an exercise involving alleged family violence?|Safety and appropriate professional referral|Forced reconciliation|Publication of private names|A competition about blame|Safety concerns should not be reduced to classroom bargaining.',
 'What is weak in assigning custody solely by parent gender?|It skips applicable criteria and evidence|It contains too many citations|It is always required everywhere|It solves every welfare issue|A supported decision requires the governing law and facts.'
 ], 'SmSn06A8suA')

lesson('Decedents’ Estates, Probate and Trust Fundamentals', 'rules', 'Consult the current Monthly and Probate Court rules and locate the applicable Decedents Estates Law; distinguish statutory and customary issues.',
 'An estate comprises rights and obligations left by a deceased person. Probate and estate administration concern lawful authority to manage succession. A will directs distribution subject to legal requirements; a trust involves holding or administering assets for specified purposes or beneficiaries.',
 'Identify assets, debts, claimed beneficiaries, documents and the proper court. Distinguish a proposed personal representative from someone lawfully authorised. A will must satisfy applicable validity requirements and may not dispose of rights the deceased never owned. Intestacy means no effective will governs the relevant property; it does not mean any relative may seize it. Do not import foreign tax exemptions or automatic trust advantages.',
 'Fictional case: a family member withdraws estate money because they found an unsigned note. Investigate authority, the note status, debts and relevant succession law. Prepare an inventory and preserve records. A fair classroom answer distinguishes the family relationship from a legal appointment and explains why distributions should not be assumed before the estate obligations are identified.',
 [('Probate', 'Court-related process concerning wills and estate administration'), ('Intestacy', 'Succession where an effective will does not govern the property')],
 'Build a fictional estate inventory, debt list and authority checklist; compare a will and trust without claiming automatic tax or probate outcomes.', [
 'What does intestacy describe?|Succession without an effective governing will|Automatic government ownership of all property|A criminal sentence|A land survey|Its effect depends on applicable succession law.',
 'Why identify estate debts before distribution?|Obligations affect what can lawfully be distributed|Debts disappear automatically at death|Only beneficiaries can create debts|An inventory is unnecessary|Estate administration concerns obligations as well as assets.',
 'Does family relationship alone prove authority to administer an estate?|No, lawful authority must be established|Yes in every case|Only if the relative is eldest|Only if the family agrees informally|Appointment and applicable legal procedures require verification.',
 'An unsigned note is offered as a will. What must be checked?|The applicable validity requirements and circumstances|Only the paper age|Only the writer wealth|Only the family enthusiasm|A label does not establish legal validity.'
 ], 'SeuD0GbG9aY')

lesson('Decent Work: Employment Terms and Workplace Rights', 'labour', 'Read the Decent Work Act introductory provisions and relevant employment-contract and protection sections; verify its application to the worker.',
 'Employment law regulates the relationship between worker and employer under its applicable scope. A contract records agreed terms, while legislation can establish protections that cannot simply be removed by a private agreement.',
 'Begin by determining the Act applicability rather than assuming every public or private arrangement is identical. Distinguish an employee from an independent contractor by the actual relationship and applicable test, not the label alone. Keep records of work, remuneration, hours, leave, safety and instructions. Research current wage rules directly; this course does not prescribe a static rate that could become outdated.',
 'Fictional case: a business labels all staff “volunteers” but sets full working hours and pays regular amounts. Investigate the relationship before accepting the label. Record supervision, duties and payment terms, then compare the statutory definitions and protections. A worker signature on a form is evidence, but not conclusive proof that every statutory protection can be waived.',
 [('Employment terms', 'Agreed and legally required conditions of work'), ('Contractor label', 'Description that must be tested against the actual relationship')],
 'Prepare a fictional employment term sheet and a statute-applicability memo; identify wage and leave provisions to verify, without inventing rates.', [
 'Why examine the real work relationship rather than only its label?|Legal classification may depend on substance|Every label is conclusive|Only the company name matters|Payment never matters|The governing test concerns actual circumstances.',
 'Can a private employment agreement automatically remove every statutory protection?|No, applicable mandatory protections must be checked|Yes always|Only if signed twice|Only if written abroad|Contract terms are subject to applicable law.',
 'Where should a current minimum wage rule be checked?|Current official law and guidance|An undated foreign video|A guessed amount|A social-media comment|Wage requirements can change and need authoritative verification.',
 'A business calls full-time supervised staff volunteers. What is the next step?|Investigate duties, control, payment and the statutory definition|Accept the label without inquiry|Assume all volunteering is illegal|Ignore the records|Classification requires factual and legal analysis.'
 ], 'bWkQSDmbwHk')

lesson('Termination, Workplace Disputes and Labour Remedies', 'labour', 'Read relevant termination and dispute-resolution sections of the Decent Work Act and current National Labour Court rules.',
 'Termination ends an employment relationship, but the legal basis, notice, procedure and consequences require separate analysis. A workplace complaint may follow a specialised process rather than an ordinary civil route.',
 'Distinguish misconduct, capability, redundancy, resignation and expiry of a defined term. Identify evidence and the applicable procedure before evaluating fairness. An allegation is different from a substantiated ground. Keep a chronology of notices, responses, payments and referrals. A proposed remedy should follow the local law and competent forum; do not promise automatic reinstatement or fixed compensation from a foreign example.',
 'Fictional case: a worker is dismissed after being absent, but had submitted medical documentation. Examine the reason, records, employer response and statutory procedure. If the alleged absence is disputed, a timeline and attendance register matter more than assumptions. In a learning memo, list remedy options to research and state what evidence could change your conclusion.',
 [('Termination ground', 'The reason asserted for ending employment'), ('Procedure', 'The lawful steps for reaching and challenging the decision')],
 'Prepare a fictional dismissal chronology, evidence list and forum-research note addressing both substantive grounds and procedure.', [
 'Why analyse both dismissal grounds and process?|A reason and lawful decision procedure are distinct|A stated reason makes procedure irrelevant|Procedure alone proves every allegation|All dismissals are identical|Legal fairness may depend on both dimensions.',
 'A worker has a medical record contradicting an absence allegation. What should be done?|Compare it with the timeline and governing rules|Destroy the record|Ignore it because an allegation exists|Assume guaranteed compensation|Relevant contrary evidence must be assessed.',
 'What must be checked before choosing a labour-dispute forum?|The applicable specialised statutory process|Only the nearest building|Only the worker preference|Only a foreign court name|Competence and procedural route come from law.',
 'Why avoid promising automatic reinstatement?|Available remedies depend on law and established facts|Remedies never exist|Only employers may ask questions|A video can order a job restored|A course cannot guarantee the outcome of a real dispute.'
 ], 'CkGxqpqNFTg')

lesson('Corporations, Separate Personality and Governance', 'business', 'Locate the Associations Law and amendments in the Registry library; distinguish domestic business registration and applicable local compliance requirements.',
 'A corporation recognised by law can have a legal identity separate from its members. Limited liability and separate personality are related but distinct. Governance allocates powers and responsibilities among owners, directors and officers.',
 'Identify the entity type, incorporation documents and governing statute. Directors must act within their powers and applicable duties; a shareholder vote does not automatically cure every defect. Keep business and personal assets and decisions appropriately recorded. Legal personality does not guarantee immunity for fraud or personal wrongdoing. For a Liberian enterprise, verify the registration and reporting regime applicable to its actual operations.',
 'Fictional case: a shop company signs a supply contract, but the founder is asked to pay personally. Examine the named contracting party, any personal guarantee and relevant exceptions before assuming the founder is liable. Conversely, a company account is not permission for an officer to take money for personal use. Separate ownership, control, representation and responsibility.',
 [('Separate personality', 'Entity identity distinct from members'), ('Governance', 'Rules allocating decision powers and duties')],
 'Draft a fictional company governance chart and compare company debt with a founder personal guarantee.', [
 'What does separate corporate personality mean?|The recognised entity has its own legal identity|Every owner is immune from all wrongdoing|The company cannot enter contracts|Directors have no duties|Entity identity and personal immunity are different concepts.',
 'Why check the contracting party name?|It helps identify whose obligation was created|Names never matter|Every founder signs personally|Only the logo determines liability|The agreement and authority inform responsibility.',
 'What can change an owner exposure on a company debt?|A valid personal guarantee or applicable exception|Only the company colour|Only the office rent|Only the owner friendship|Liability needs specific legal and factual grounds.',
 'A director uses company money personally. What question arises?|Authority and compliance with applicable duties|Whether separate personality permits any use|Whether every shareholder is criminally guilty|Whether the letterhead is attractive|Governance powers are limited by duties and proper purpose.'
 ], 'Y4QaaRUEs8Q')

lesson('Agency Authority, Partnerships and Fiduciary Duties', 'business', 'Locate the applicable Associations Law provisions and Liberian cases on agency; compare foreign examples with local authority.',
 'Agency involves one person acting on behalf of another with legally relevant authority. Actual authority comes from the principal authorisation; apparent authority concerns representations attributable to the principal under the applicable test. A partnership is a distinct business relationship requiring its own analysis.',
 'Identify principal, agent, third party, representation and scope. A person claiming to be authorised is not always enough; examine what the principal communicated or permitted. Internal restrictions and third-party knowledge may affect liability. Partnership obligations depend on the legal form and agreement. Fiduciary duties concern acting appropriately for another interest, including conflicts and improper benefit where law imposes those duties.',
 'Fictional case: a procurement officer orders equipment above an internal limit. The supplier has received prior authorised orders from that officer. Compare actual authority, outward representations and what the supplier knew. Do not assume an internal memo automatically defeats a third-party claim. State which facts support each side and which local rule must be located.',
 [('Actual authority', 'Authority arising from the principal authorisation'), ('Apparent authority', 'Authority assessed through relevant outward representations and reliance')],
 'Write an agency authority memo for the equipment purchase and a short partnership term sheet addressing decisions, contributions and disputes.', [
 'What is central to actual authority?|The principal authorisation|The agent confidence alone|A supplier wish|A social media title|Actual authority derives from the principal-agent relationship.',
 'Whose representations are especially important to apparent authority?|Those attributable to the principal under the legal test|Only an agent unsupported boast|Only a stranger rumour|Only a buyer preference|Apparent authority requires legally relevant manifestations.',
 'Why check a supplier knowledge of an internal limit?|It may affect the authority and reliance analysis|Knowledge never matters|It makes every purchase void|It replaces the contract|The facts may change whether the principal is bound.',
 'A partner takes a secret benefit from firm business. What must be investigated?|Applicable fiduciary duties and the transaction facts|Only the benefit currency|Only partner age|Only office size|Business relationships can impose duties beyond personal preference.'
 ], 'jDIFoPb0hTY')

lesson('Negotiable Instruments and Commercial Payment Risk', 'security', 'Locate the Commercial Code provisions on payment instruments; use the Central Bank as a starting point for the current framework.',
 'A negotiable instrument is a payment document meeting statutory requirements for transfer and enforcement. A promise to pay, an order to pay, an ordinary invoice and an electronic transfer are not necessarily the same legal instrument.',
 'Identify maker, drawer, drawee, payee and holder where relevant. Analyse form, amount, payment terms, transfer and signature using the applicable Commercial Code. A document label does not establish negotiability. Dishonour, forged signatures and third-party claims require specific legal treatment. A foreign Uniform Commercial Code video explains concepts but does not automatically state Liberia rules.',
 'Fictional case: a trader writes “I will pay if my goods sell” and calls it a negotiable note. The condition creates a statutory-form question. Compare the actual requirements rather than assuming the title controls. For a cheque, separate issuance, presentment, payment and any dishonour. Preserve records and do not promise that possession always defeats earlier claims.',
 [('Promise to pay', 'Undertaking by its maker'), ('Order to pay', 'Direction to another person or institution to pay')],
 'Annotate three fictional payment documents and identify the statutory questions affecting transfer and enforcement.', [
 'Does calling a document negotiable make it legally negotiable?|No, statutory requirements must be satisfied|Yes automatically|Only if printed in capital letters|Only if signed twice|The law assesses its substance and form.',
 'What distinguishes a payment promise from an order?|One undertakes payment; the other directs payment|Both always transfer land|Neither names parties|Only an order can be written|Their roles and liabilities may differ.',
 'Why examine a condition attached to payment?|It may affect negotiability under the applicable law|Conditions never matter|It always proves fraud|It automatically clears debt|The statutory requirements need close comparison.',
 'Why is a foreign UCC lecture not enough for a Liberia answer?|The applicable Liberian Commercial Code must be checked|All UCC rules bind all countries|Videos are statutes|Every payment system is identical|Comparative teaching does not replace local authority.'
 ], '1TZplBlkJQg')

lesson('Secured Transactions, Collateral and Priority', 'security', 'Read the Central Bank Collateral Registry explanation of Chapter 5 of the Commercial Code and locate the governing text.',
 'A secured transaction gives a creditor a legally recognised interest in collateral to support an obligation. Creation of the interest, effectiveness against others, priority and enforcement are different questions. A registry entry is not proof that every underlying agreement is valid.',
 'Identify debtor, secured creditor, obligation and described asset. Check the agreement and legally required steps. Search for prior interests and analyse priority under the statute rather than assuming possession or registration always wins. Distinguish movable collateral from land-security regimes. Default does not authorise threats or unlimited self-help; enforcement must follow the applicable law.',
 'Fictional case: two lenders each claim a shop generator as collateral. Build a chronology of agreements, asset descriptions and registration. The first payment received is not automatically the priority rule. Examine whether each security interest arose and the applicable effectiveness and priority provisions. A careful conclusion states assumptions and unresolved registry information.',
 [('Collateral', 'Asset supporting a secured obligation'), ('Priority', 'Ranking of competing legally recognised claims')],
 'Prepare a fictional two-creditor priority table and lawful-enforcement research checklist. Do not use real debtor records.', [
 'What is collateral?|An asset supporting an obligation|A court nickname|A witness statement|A company slogan|Security concerns an asset and the supported obligation.',
 'Why distinguish creation from priority?|An interest can exist while its rank against others needs separate analysis|Creation always decides every priority issue|Priority means the debt is cancelled|Registration replaces all contracts|The legal questions are related but distinct.',
 'What helps analyse two claims over a generator?|Agreement and registration chronology plus the statutory rules|Only creditor wealth|Only generator colour|Only debtor promises|Priority depends on the applicable rule and relevant events.',
 'Does default permit any repossession method?|No, enforcement must comply with applicable law|Yes, force is always allowed|Only if advertised online|Only if the debt is large|A security right is subject to lawful enforcement limits.'
 ], 'ohmBgsqWC6o')

lesson('Administrative Powers and Review of Public Decisions', 'constitution', 'Identify the relevant constitutional protections, agency enabling Act and available review procedure in the current court rules.',
 'Administrative law concerns how public bodies exercise legal powers. Review asks whether a decision was authorised and reached through the applicable legal process. A merits appeal, where provided, can have a different scope from legality review.',
 'Start with the enabling law, decision-maker, facts, procedure and reasons. Ask whether the body considered the legally relevant matters and respected required participation. A discretionary power is not an unlimited power. Identify the remedy and competent forum separately. Use foreign judicial-review tests comparatively; a Liberia answer needs local authority rather than a transplanted foreign statute.',
 'Fictional case: an agency refuses a licence because of an unpublished requirement unrelated to its governing law. Obtain the application, decision and rule before analysing power and procedure. A court challenge should identify a legal defect, not merely dissatisfaction. If a statutory review route exists, research its conditions and timing before choosing another route.',
 [('Discretion', 'Choice within legally authorised limits'), ('Review', 'Examination through an authorised legal mechanism')],
 'Draft a fictional licence-decision review memo covering power, process, reasons, forum and missing facts.', [
 'What should be located first when analysing an agency power?|The enabling legal provision|The agency slogan|A foreign politician statement|A staff personal preference|Public authority must have a lawful foundation.',
 'Does discretion mean unlimited authority?|No, it operates within legal limits|Yes always|Only during busy periods|Only when a licence is expensive|Choice remains constrained by law.',
 'Why distinguish merits review from legality review?|They may examine different questions and remedies|Both always retry every fact|Neither needs authority|Only one has paperwork|The available review scope depends on the legal route.',
 'An unpublished licensing condition is imposed. What should be examined?|Its authority, relevance and procedural basis|Only the applicant dress|Only the office opening hours|Only public popularity|The challenge needs a specific legal defect.'
 ], 'YTKOHB8A0KQ')

lesson('Legislation, Interpretation and Tax-Law Research', 'tax', 'Use the LRA current laws-and-amendments page and read an amendment together with the provision it changes.',
 'Legislation is law made through the authorised legislative process. Interpretation determines meaning in context. Tax analysis identifies the taxable event, person, base, rate, period and governing amendment; rates must be researched for the relevant date.',
 'Read definitions, scope, exceptions and cross-references before applying a single sentence. Distinguish a bill from an enacted law and commencement from publication date. An amendment may alter part of a scheme without replacing all of it. For tax, verify the relevant period and current official guidance. Never quote a memorised rate for a real liability without checking whether it remains applicable.',
 'Fictional case: a business relies on an old training slide for a tax calculation after the law has changed. Compare the transaction date and commencement provisions, then reconstruct the applicable rule. A drafting exercise should specify who must do what, when, and with what exceptions. Ambiguous definitions create disputes even when the policy goal is clear.',
 [('Bill', 'Proposed legislation awaiting the required process'), ('Commencement', 'When a legal provision starts to operate')],
 'Prepare a mock amendment-reading table and a 300-word plain-language clause regulating a fictional permit; include definitions and commencement.', [
 'Why distinguish a bill from an enacted Act?|A proposal is not automatically operative law|Every proposal is already binding|Bills can never become law|Only the title matters|Legal effect depends on the authorised process.',
 'What should be checked before applying a tax rate?|The relevant date and current governing provisions|Only an old training slide|Only a competitor guess|Only a foreign tax website|Time and amendments determine the applicable rule.',
 'Why read statutory definitions first?|They can give terms a specific legal meaning|Definitions are always optional|They replace every exception|They are never used in law|Context and defined terms shape interpretation.',
 'An amendment changes one subsection. What is the proper reading method?|Read it together with the remaining scheme and commencement|Discard the whole statute|Apply it to every past event automatically|Read only the press headline|A partial amendment must be integrated into its context.'
 ], '0tP9lociqFk')

lesson('Human Rights Instruments and Domestic Remedies', 'rights', 'Read the UDHR and identify corresponding protections in Liberia Constitution; distinguish declarations from binding treaty obligations.',
 'Human rights are protections associated with human dignity. An international declaration, treaty, constitutional provision and court remedy have different legal functions. A persuasive moral claim still needs the applicable legal framework when presented as a legal claim.',
 'Identify the protected right, duty bearer, alleged interference and remedy. A treaty status question requires ratification and entry-into-force checks; domestic enforceability requires separate local analysis. Do not assume every international body can hear every complaint. For documentation, use accurate facts and protect identifying information. Community advocacy is stronger when the requested action names a responsible actor and a realistic legal basis.',
 'Fictional case: a public service excludes people with a disability. Compare the relevant constitutional protection, applicable legislation and international instruments. Separate the evidence of exclusion from legal interpretation. A classroom recommendation can request accessible procedures and lawful review while recording what must still be researched. Avoid promising that an international complaint automatically reverses a local decision.',
 [('Declaration', 'Formal statement of principles, distinct from a treaty'), ('Remedy', 'Legally available response to an established wrong')],
 'Draft a fictional rights memorandum with a domestic-law section, an international-reference section and a remedy-research table.', [
 'Why distinguish a declaration from a treaty?|Their legal forms and effects differ|Every declaration requires ratification|Treaties are never binding|Both are court verdicts|The instrument type affects the legal analysis.',
 'What should a rights memorandum identify?|Right, duty bearer, facts and remedy|Only emotional language|Only a photograph|Only an organisation name|A claim needs a legal and factual structure.',
 'Does every international body accept every individual complaint?|No, competence and admissibility must be checked|Yes automatically|Only if a post goes viral|Only if written in capitals|Complaint mechanisms have specific conditions.',
 'A service excludes disabled applicants. What strengthens an advocacy recommendation?|A supported legal basis and a specific responsible actor|An invented statistic|A guaranteed outcome|Publishing personal records|Evidence and a concrete lawful request make the recommendation usable.'
 ], 'JpY9s1Agbsw')

lesson('Treaties, International Law and Cross-Border Disputes', 'treaties', 'Use the UN Treaty Collection to check one treaty status for Liberia. Read the instrument itself and distinguish international obligations from domestic application.',
 'Public international law regulates relations among states and other recognised international actors. A treaty is an international agreement governed by international law. Private international law addresses cross-border issues such as jurisdiction, applicable law and recognition of judgments.',
 'Ask three separate questions in a cross-border contract: which court may hear the matter, which law governs, and whether a resulting judgment can be recognised elsewhere. A choice-of-law clause is not necessarily a choice of court. For treaties, check party status, reservations and dates rather than assuming signature alone settles every obligation. Analyse local implementation separately; do not announce a universal rule about all treaties in Liberia.',
 'Fictional case: a Liberian exporter and a Ghanaian buyer use a contract selecting one country law but naming no forum. Separate governing law from court jurisdiction, then examine enforcement if assets are elsewhere. For a treaty assignment, record the actual Liberia status entry, relevant article and verification date. Do not substitute another country reservation for Liberia position.',
 [('Governing law', 'Law used to decide the substantive issue'), ('Jurisdiction clause', 'Provision addressing the forum for disputes')],
 'Create a treaty-status research sheet and a fictional cross-border contract issues memo covering forum, applicable law and enforcement.', [
 'Is a choice-of-law clause necessarily a choice of court?|No, they answer different questions|Yes in every agreement|Only if typed|Only for exports|Applicable law and adjudicative forum are distinct.',
 'What must be checked before claiming Liberia is bound by a treaty?|Its status, dates and relevant reservations|Only the treaty title|Only another country signature|Only an online slogan|Party status and instrument conditions determine obligations.',
 'Which question concerns use of a foreign judgment in another country?|Recognition and enforcement|Only contract formation|Only citizenship|Only an office licence|A judgment may require a separate enforcement analysis.',
 'A treaty is internationally binding. What further domestic question may remain?|How it applies within the local legal framework|Whether a textbook is colourful|Whether treaties have page numbers|Whether all domestic rules disappear|International obligation and domestic operation require separate analysis.'
 ], 'wD2lctCw0H0')

lesson('Liberian Maritime Law and Shipping Transactions', 'business', 'Find the Maritime Law and relevant current notices in the Liberian Registry library; identify the version and any applicable convention.',
 'Maritime law regulates shipping-related relationships and obligations. Flag-state authority, port-state authority, ship ownership and contractual responsibility are different concepts. Liberia-specific analysis begins with its Maritime Law and applicable international instruments.',
 'Identify vessel, flag, location, parties and transaction. Distinguish shipowner, operator, carrier and cargo owner. A bill of lading, charterparty and insurance policy do not serve identical functions. Determine which law and forum govern the dispute and what convention provisions may apply. A United States video statement that a rule is federal describes that jurisdiction, not Liberia.',
 'Fictional case: cargo destined for Monrovia is damaged aboard a foreign-operated Liberian-flag vessel. Gather transport documents, the damage record, notice information and insurance details. Do not assume the flag alone answers every liability question. Prepare separate issues for carriage duties, governing law, forum and insurance recovery, with deadlines identified for professional verification.',
 [('Flag state', 'State of vessel registration with relevant regulatory responsibilities'), ('Carrier', 'Party undertaking carriage under the applicable arrangement')],
 'Prepare a fictional cargo-dispute document checklist and a one-page map distinguishing flag, contract, forum and insurance issues.', [
 'Does a vessel flag automatically decide every cargo-liability issue?|No, contracts and other applicable law must be analysed|Yes in every case|Only if the cargo is valuable|Only if the vessel is new|Shipping disputes can involve multiple legal connections.',
 'Why distinguish carrier from shipowner?|The roles and contractual duties may differ|They are always identical|Neither can have obligations|Only names matter|Responsibility follows the relevant role and law.',
 'What is wrong with applying a US federal maritime statement directly as Liberia law?|It skips the applicable Liberian and international framework|Every US rule binds Liberia|Maritime law has no jurisdiction|A video is a treaty|Comparative material needs jurisdictional limits.',
 'Which record is central to a fictional cargo claim?|The carriage documents and damage evidence|Only the ship photograph|Only the port weather slogan|Only a passenger opinion|Contract and loss records ground the analysis.'
 ], 'N7CvEt51fz4')

lesson('Insurance Contracts, Coverage and Claims', 'business', 'Identify the applicable Liberian insurance regulatory requirements and the policy wording; research current regulator guidance before any real claim.',
 'Insurance transfers specified risks under a contract. Coverage depends on the insured event, policy period, conditions, exclusions and applicable law. A loss and an insured loss are not always the same thing.',
 'Read the schedule, definitions, insuring clause, exclusions and claims conditions together. Identify policyholder, insured interest, insurer and beneficiary where relevant. Separate coverage from valuation of an accepted claim. Indemnity concerns compensation within the contract and law; subrogation can concern an insurer rights after payment. Do not assume every policy has identical disclosure or notification rules.',
 'Fictional case: a shop flood occurs after a policy expires, while the owner assumes all previous insurance continues. Compare the dates, any renewal evidence and the coverage trigger. If an exclusion is invoked, read its actual wording and legal validity rather than accepting a verbal summary. A mock claim should accurately describe the event and attach genuine fictional records, without exaggeration.',
 [('Coverage', 'Risks and circumstances insured under the policy and law'), ('Exclusion', 'Provision limiting specified risks or circumstances')],
 'Create a fictional insurance coverage matrix and claims letter. State the policy period, event, disputed term and missing evidence.', [
 'Does every business loss fall within an insurance policy?|No, coverage depends on terms and applicable law|Yes automatically|Only if reported online|Only if the owner is insured once|Insurance covers specified risks and periods.',
 'Which documents should be read with an insuring clause?|Definitions, schedule, exclusions and conditions|Only advertising copy|Only the insurer logo|Only a bank receipt|Policy provisions operate together.',
 'Why separate coverage from valuation?|Whether a risk is insured differs from how much is payable|Valuation proves every exclusion invalid|Both always mean the premium|Neither needs evidence|The two questions use related but distinct analysis.',
 'A flood occurs after stated expiry. Which fact may change the analysis?|Evidence of a valid renewal or relevant coverage term|Only the shop wall colour|Only the owner disappointment|An unrelated receipt|Timing and effective coverage must be established.'
 ], 'ZktoK4w8zAk')

lesson('Environmental Protection, Permits and Community Participation', 'environment', 'Read the EPA Environmental Protection and Management Law, especially the framework for assessment and permitting; check current regulations.',
 'Environmental law regulates activities affecting environmental resources and public welfare. An environmental impact assessment examines expected effects and alternatives within the applicable process. A permit is a legal authorisation with scope and conditions, not a general exemption from responsibility.',
 'Identify the proposed activity, site, affected people, risks and competent authority. Separate a landowner permission from environmental approval. Read participation, assessment and compliance provisions together. Evidence can include lawful observations, maps and official records; do not enter dangerous or restricted sites for an assignment. Analyse prevention and remedies without presuming a particular project must be approved or refused.',
 'Fictional case: a workshop proposes discharging waste near a stream used by residents. A private lease does not answer the environmental-permit question. Identify the potential impacts, legal authority, information needed and participation process. A useful compliance memo assigns actions and records rather than saying only “protect nature”. Include the possibility that missing baseline data prevents a final conclusion.',
 [('Impact assessment', 'Structured examination of proposed environmental effects'), ('Permit condition', 'Legally relevant limit attached to authorisation')],
 'Write a fictional workshop environmental-risk register with authority, evidence gaps, consultation steps and compliance actions.', [
 'Does a lease automatically supply environmental permission?|No, environmental requirements need separate analysis|Yes everywhere|Only if rent is prepaid|Only if the site is rural|Property permission and regulatory approval differ.',
 'What is a central purpose of environmental impact assessment?|Examine likely effects and alternatives under law|Guarantee approval|Replace every licence|Prove all risks are imaginary|Assessment informs lawful decisions rather than predetermining them.',
 'Which fieldwork is appropriate for this course?|Safe fictional or publicly available information|Unauthorised entry into a hazardous site|Collecting chemicals without training|Confronting alleged polluters alone|Learning tasks should not create physical or legal hazards.',
 'A permit has discharge conditions. What must a compliance memo do?|Identify conditions, monitoring and responsible actions|Treat approval as unlimited|Ignore the conditions|Replace them with a slogan|Authorisation has legally relevant boundaries.'
 ], 'UQL-9wi5OdQ')

lesson('Intellectual Property, Copyright and Brand Protection', 'ip', 'Use WIPO to distinguish types of IP, then locate the applicable Liberian IP law and registration guidance before local application.',
 'Intellectual property concerns legally recognised interests in creations and identifiers. Copyright, trademarks and patents protect different subject matter. Owning a physical copy is different from holding rights to reproduce or commercially exploit protected material.',
 'Identify the work or sign, author or rights holder, proposed use and applicable territorial law. A trademark distinguishes commercial origin; copyright concerns protected expression rather than every idea; patents concern qualifying inventions under the relevant system. Permission, licence and statutory exceptions require separate analysis. Attribution is not automatically a licence. Avoid assuming that content found online is free for commercial reuse.',
 'Fictional case: a startup copies a photographer image and a competitor logo for its website. Separate copyright and trademark issues, ownership and the proposed use. Contacting a rights holder for permission differs from merely adding a credit line. A classroom audit should record asset source, licence scope, restrictions and evidence instead of claiming “no copyright intended” resolves the issue.',
 [('Copyright', 'Rights concerning qualifying creative expression'), ('Trademark', 'Sign functioning to distinguish commercial source')],
 'Prepare a fictional website IP audit covering five assets, permission evidence, territorial questions and replacement options.', [
 'Does crediting a creator automatically permit commercial reuse?|No, permission or an applicable exception is still needed|Yes for every image|Only if the credit is large|Only if the site is new|Attribution and authorisation are distinct.',
 'Which right principally concerns a sign identifying commercial source?|Trademark|Probate|Bail|Venue|Trademarks concern source-identifying signs.',
 'Why distinguish a physical copy from copyright?|Possession does not automatically transfer exploitation rights|Buying a book transfers every right|Copies can never be owned|Copyright is always physical land|Different interests can exist in the same item.',
 'What belongs in an IP asset audit?|Source, rights holder, licence and permitted use|Only the file colour|Only the upload speed|Only the designer opinion|Permission must match the intended use.'
 ], 'eEB5MYcj-Ns')

lesson('Professional Ethics, Confidentiality and Conflicts', 'ethics', 'Read the Judiciary Code of Moral and Professional Ethics and current professional rules; identify the rule before asserting an exception.',
 'Legal ethics concerns duties governing professional conduct. Confidentiality limits disclosure of protected information; evidential privilege concerns legal protection against compelled disclosure under its applicable conditions. A conflict of interest can impair independent professional judgment.',
 'Identify who the client is, the role undertaken and the relevant duties. Keep information secure and share only through lawful authority or valid permission. Consent does not automatically cure every conflict. A learner must not present this course certificate as a licence or take on reserved legal work without authorisation. For real issues, consult a properly authorised Liberian legal professional and the current rules.',
 'Fictional case: a student helping a lawyer learns facts about a family dispute and is asked to post a success story online. Remove identifying information only after considering whether people could still be recognised, and obtain proper approval before any publication. If the office is approached by the opposing party, flag the potential conflict before receiving more confidential information. Do not promise that every conversation is privileged.',
 [('Confidentiality', 'Professional restriction on disclosure of protected information'), ('Privilege', 'Legal protection against disclosure when its conditions apply')],
 'Draft a fictional conflict-screening checklist and a secure information-handling plan. Explain the boundary between study and authorised practice.', [
 'Are professional confidentiality and evidential privilege identical?|No, their scope and legal operation can differ|Yes in every situation|Neither concerns information|Both are court fees|The governing rules must be analysed separately.',
 'What should happen when a potential opposing client contacts an office?|Screen the conflict before receiving unnecessary confidential details|Collect everything first|Publish the request|Guarantee representation|Early screening reduces avoidable conflicts.',
 'What does a TIH course certificate establish?|Completion of this TIH educational course|Admission to the Liberian Bar|A law degree|A court appointment|It is not professional authorisation.',
 'Why can removing names be insufficient for confidentiality?|Context can still identify the person|Anonymisation always guarantees safety|Only names can identify people|Publication is always required|Indirect identification and consent must be considered.'
 ], '131V56x8LOM')

lesson('Trial Advocacy, Moot Court and Opinion Writing', 'rules', 'Read current trial and Supreme Court rules. Use a published Liberian judgment for structure, not as a source of invented facts.',
 'Advocacy presents a supported legal position to a decision-maker. Moot court simulates legal argument for learning. An opinion explains the issues, applicable law, reasoning and result; it is different from a partisan submission.',
 'Build an issue list, record references, authorities and requested relief. In oral argument, answer the question asked before returning to the planned structure. Admit a factual or legal gap rather than inventing an authority. For witness exercises, distinguish open questions from leading assertions and follow applicable rules. A written opinion should address the strongest argument on each side and explain why one analysis prevails.',
 'Fictional case: counsel argues a land dispute and the bench asks where the seller authority appears in the record. A strong response supplies the exact fictional document reference or acknowledges that it is absent. Reading a prepared speech without answering weakens the argument. In the opinion exercise, state whether the missing authority prevents a final result and identify the lawful next step to research.',
 [('Submission', 'A party supported argument and requested outcome'), ('Opinion', 'Reasoned explanation by the decision-maker')],
 'Prepare a five-minute moot submission and a 900-word fictional reasoned opinion. Include adverse authority and record references.', [
 'What should an advocate do when the bench asks a direct question?|Answer it accurately before returning to the structure|Ignore it and read faster|Invent a paragraph number|Ask social media to vote|Responsive, candid argument supports credibility.',
 'How does a judicial opinion differ from a party submission?|It gives the decision-maker reasoned resolution|It must advocate only for one client|It replaces all evidence|It is always oral|An opinion explains the adjudicative outcome.',
 'What is proper when a needed authority cannot be verified?|Acknowledge the gap and avoid inventing it|Create a convincing case name|Quote a nonexistent paragraph|Claim a secret source|Candour is essential to legal work.',
 'Why include adverse arguments in a moot preparation file?|To test and answer the strongest competing position|To admit automatic defeat|To hide the governing rule|To avoid research|Balanced preparation improves legal reasoning.'
 ], 'lDkU8HUWenA')

lesson('Jurisprudence: Legal Positivism and Natural Law', 'school', 'Use the published subject list as a study map, then compare theories against a fictional rule and the Liberian constitutional framework.',
 'Jurisprudence studies the nature, authority and interpretation of law. Legal positivist approaches commonly distinguish legal validity from moral merit. Natural-law approaches give moral reasoning a foundational role in understanding law. These broad traditions contain disagreements and should not be reduced to slogans.',
 'Distinguish describing what counts as law from evaluating whether it is just. A person may criticise a law morally while acknowledging its institutional status. Conversely, moral conviction alone does not identify a valid procedure or remedy. In an essay, define the theory, explain its reasoning, present a counterargument and connect it to a specific problem. Do not attribute an official school endorsement to this independent TIH course.',
 'Fictional case: a rule validly adopted on its face treats one community unfairly. Compare institutional-validity questions, constitutional limits and moral criticism. A weak essay says “all law is good” or “any unfair rule may be ignored”. A stronger essay explains how theories differ, checks superior-law limits and separates lawful reform or challenge from personal disagreement.',
 [('Legal validity', 'Whether a norm qualifies as law under the relevant criteria'), ('Moral merit', 'Whether a norm is ethically justified')],
 'Write a 900-word comparative jurisprudence essay on the fictional unfair rule, presenting and criticising both approaches.', [
 'What distinction is central to many positivist accounts?|Legal validity versus moral merit|Paper versus ink|Only courts versus offices|Civil claims versus shipping|A norm status and ethical evaluation can be distinguished.',
 'What is characteristic of natural-law approaches?|A foundational role for moral reasoning in understanding law|Complete rejection of ethical questions|The claim that every rule is a contract|A system of land surveying|The tradition examines law in relation to moral principles.',
 'What improves a jurisprudence essay?|Defined concepts, reasons, counterarguments and application|Only slogans|Only unsupported names|Only a guaranteed conclusion|An essay should explain and evaluate competing reasoning.',
 'Does this course reference to law-school subjects imply school accreditation?|No, it is an independent study aid|Yes automatically|Only if the module is long|Only if a student passes|Subject correspondence is not institutional approval.'
 ], 'RaHHGv4VIno')

lesson('Negotiation, Mediation and Arbitration', 'civil', 'Read Chapter 64 on arbitration and identify any applicable agreement and current procedural rules; distinguish mediation as a separate process.',
 'Negotiation is direct effort to reach agreement. Mediation uses a neutral facilitator to support voluntary agreement. Arbitration involves a tribunal determination under the applicable agreement and law. They are alternatives with different roles, limits and legal effects.',
 'Identify authority to settle, interests, evidence, alternatives and constraints. A mediator does not automatically impose a binding award. An arbitration clause needs analysis of scope, validity and applicable procedure. Confidentiality cannot be assumed without checking the rules or agreement. Settlement must not conceal coercion or unlawfully override protections. Family violence and serious power imbalances may require a different approach and professional safeguards.',
 'Fictional case: a customer and supplier disagree about defective chairs. Prepare interests, evidence, possible remedies and alternatives before discussing settlement. A mediator helps them explore terms; an arbitrator may decide if lawfully empowered. Write any proposed agreement clearly, including performance and unresolved points. Do not assume signing any document removes all rights or guarantees enforcement.',
 [('Mediation', 'Facilitated effort toward voluntary agreement'), ('Arbitration', 'Adjudication through an authorised private tribunal process')],
 'Conduct a fictional supplier negotiation and write a settlement term sheet plus a comparison of mediation and arbitration.', [
 'Who ordinarily facilitates rather than imposes the parties agreement?|A mediator|An authorised arbitrator deciding an award|A judge giving judgment|A party acting alone|Mediation centres on voluntary agreement.',
 'What should be checked before relying on an arbitration clause?|Its scope, validity and applicable procedure|Only its font|Only the room size|Only the contract length|An arbitration process requires legal authority and relevant coverage.',
 'Why prepare alternatives before negotiation?|They help evaluate proposed settlement terms|They guarantee a settlement|They replace all evidence|They require disclosure of secrets|A party needs to compare an offer with realistic options.',
 'A settlement is proposed under threats. What issue arises?|Voluntariness, legality and appropriate safeguards|Only spelling|Automatic enforceability everywhere|A need to hide the threats|Agreement requires more than a signature obtained through coercion.'
 ], 'QSSkrK0AcWg')

# Correct, distinct clip sourced from the deed-specific search, not a jurisdiction clip.
LESSONS[19]['video'] = 'Btw56iFdZwk'
for index in (14, 15):
    LESSONS[index]['extraSources'] = ['criminal-procedure']

# Ten unseen midterm items and thirty unseen final items. No practice or module reuse.
EXAM = [q(s) for s in [
 'An official cites a policy against a constitutional challenge. What must a student compare?|The policy authority and the superior constitutional rule|Only public support|Only the official rank|Only the policy age|A lower instrument must be assessed within the constitutional framework.',
 'A judgment is cited from memory without checking its text. What is the main research defect?|The authority and proposition remain unverified|The quotation is too short|The case must be irrelevant|All remembered cases are repealed|Legal propositions need verifiable support.',
 'A submission imports a foreign constitution clause. What is required for a Liberia analysis?|Locate and apply the relevant Liberian provision|Assume identical numbering|Call the foreign clause a local statute|Ignore jurisdiction|Comparative examples do not establish local constitutional law.',
 'A claimant proves loss but files in a potentially incompetent court. What issue remains?|The court lawful jurisdiction|Whether loss erases procedure|Whether the court likes the claimant|Only document length|Merits and forum competence are independent questions.',
 'A seller disputes the delivery date in a contract claim. What evidence is especially useful?|The agreed terms and any later variation|An unrelated invoice|The seller nickname|A political statement|The alleged obligation must be established before breach.',
 'A tort answer proves careless conduct but no resulting harm. What is missing from a negligence claim?|Analysis of causation and recoverable damage|A brighter title|The defendant approval|A witness salary|A complete negligence analysis needs the connection and damage elements.',
 'A prosecutor describes conduct without identifying the offence mental requirement. What is incomplete?|The elements analysis|Only the spelling|Only the court map|Only the filing colour|The offence definition determines which mental elements must be proved.',
 'An accused is detained but not convicted. Which statement is appropriate?|The charge remains to be lawfully determined|Detention is a final verdict|Every defence has failed|No hearing is needed|Custody status must not be confused with guilt.',
 'A relevant email has an unknown sender. What issue should be addressed next?|Authentication and provenance|Its font family only|Its popularity|The sender favourite food|Relevance does not establish the source or integrity of evidence.',
 'A buyer relies only on a boundary fence as title proof. What remains necessary?|Investigation of ownership and authority to transfer|No further inquiry|Only painting the fence|Only asking the price|Physical boundaries do not by themselves prove title.',
 'A parent treats a child case solely as a contest over adult pride. What should the analysis include?|Applicable child-welfare protections and relevant facts|Only the louder parent demand|Only social media approval|Only the parents property values|A child interests cannot be reduced to adult rivalry.',
 'An estate includes disputed land and unpaid obligations. What is a sound first product?|An inventory, authority check and issues list|Immediate distribution without records|A public auction by any relative|Deletion of creditor notices|Administration needs a reliable asset, debt and authority picture.',
 'An employer relies on a contractor label despite close supervision. What must be tested?|The actual relationship against the applicable legal definition|Only the heading|Only the office uniform|Only the business size|Substance can matter more than the chosen description.',
 'A dismissal memo lists misconduct but omits the worker response. What needs further examination?|Evidence and the applicable decision procedure|Only the paper margins|Only the employer reputation|Only the worker friendships|A fair analysis tests both allegations and procedural requirements.',
 'A founder signs both for a company and as guarantor. What should be separated?|Company obligation and personal guarantee exposure|Only the two signatures colour|Only the company logo|Only office location|Different legal capacities can create different obligations.',
 'A supplier relies on a procurement officer authority. What factual inquiry is important?|Principal representations, scope and supplier knowledge|Only the officer confidence|Only supplier profit|Only invoice spelling|Authority analysis needs both legal source and relevant manifestations.',
 'A document orders a bank to pay a named person. Which analysis is needed?|The instrument roles and governing statutory requirements|Only its envelope|Only its advertisement|Only the holder age|Payment-document liability depends on form, roles and law.',
 'A lender finds a registry notice but no agreement. What must be checked?|Whether a valid underlying security interest arose|Assume registration proves every issue|Assume the debt disappeared|Ignore collateral description|Registry status and underlying validity are separate.',
 'An agency says no reasons are needed because its power is discretionary. What is the proper inquiry?|The enabling law and applicable procedural duties|Accept unlimited power|Apply any foreign statute automatically|Ignore affected interests|Discretion remains subject to the relevant legal framework.',
 'A tax amendment starts next year. What must be established before applying it now?|The relevant period and commencement rule|Only its announcement popularity|Only the business wishes|Only the headline date|Legal effect depends on temporal scope.',
 'A rights report contains allegations presented as established findings. What correction is needed?|Separate verified facts, allegations and legal analysis|Add invented evidence|Remove all source references|Increase the font only|Credibility requires clear status for each claim.',
 'A treaty-status table lists another country reservations as Liberia reservations. What is wrong?|It confuses separate party-specific positions|All reservations are identical|Reservations never exist|Any country entry binds every state|Treaty status must be checked for the relevant party.',
 'A cross-border contract chooses a law but is silent about court. What is unresolved?|The competent forum and enforcement route|Whether the law clause names every court|Whether any dispute can exist|Only the document price|Governing law does not necessarily determine jurisdiction.',
 'A cargo claim concerns a registered vessel and an independent carrier. What should be examined?|The separate regulatory and contractual connections|Only the flag|Only the owner nationality|Only the port photograph|Maritime responsibility may involve several roles and legal links.',
 'An insured event is alleged but the insurer disputes an exclusion. What should be obtained?|The full policy wording and relevant facts|Only a sales slogan|Only last year premium|Only the claimant opinion|Coverage must be analysed from terms and applicable law.',
 'A factory has land permission but no assessment record. Which question remains?|Environmental assessment and permitting compliance|Whether land permission replaces all approvals|Only its office furniture|Only its manager preference|Different legal authorisations serve different purposes.',
 'A website uses a photograph marked free online. What evidence is needed?|The licence scope and authority for the intended use|Only the word free|Only the download speed|Only a credit line|A licence must actually permit the proposed use.',
 'A law student offers paid court representation based on this course alone. What is the problem?|Course completion does not grant professional authorisation|The student needs a larger certificate|The fee is too small|The course icon is different|Reserved professional work requires the applicable qualification and authority.',
 'An advocate discovers a cited paragraph does not support the argument. What is proper?|Correct the submission and explain the actual authority|Hide the passage|Invent a new quotation|Repeat the claim louder|Candour requires accurate use of sources.',
 'An essay says a lawful rule must always be morally good. What distinction is missing?|Validity and moral evaluation|Only translation|Only page length|Only institutional names|Jurisprudence examines how legal status and justice relate.',
 'A mediator tells parties the agreement is mandatory because mediation began. What needs correction?|Mediation ordinarily facilitates voluntary agreement|Every mediator is a judge|An award already exists|No consent issue can arise|Facilitation differs from adjudication.',
 'A legal research log records a statute but no version or date check. What risk follows?|An amended or inapplicable rule may be used|The log is automatically complete|Every old text is invalid|Citations become unnecessary|Status checks help establish current applicability.',
 'An IRAC answer quotes rules and jumps to an outcome. What must be developed?|Element-by-element application and counterargument|Only a title page|Only more quotations|Only a longer conclusion|Reasoning requires connecting rules with facts.',
 'A claim includes a large damages figure with no supporting record. What is needed?|A reasoned loss schedule and evidence|A more dramatic accusation|A guaranteed award|An unrelated foreign statistic|Remedies require an evidential and legal foundation.',
 'A person is near a crime scene but no participation is shown. What must be avoided?|Treating mere presence as automatic proof of every element|Examining their role|Checking the offence|Looking for reliable evidence|Individual liability requires supported analysis.',
 'A digital file was altered before being saved as evidence. What should be disclosed?|The alteration and the availability of the original|Nothing because edits never matter|Only the file icon|Only the device brand|Integrity and provenance affect reliable evaluation.',
 'An investor negotiates with one community representative. What remains to verify?|The representative lawful authority and required participation|Only the investment slogan|Only the vehicle used|Only a handshake photograph|Community transactions need legally sufficient authority and process.',
 'A legal memorandum uses only foreign videos for local court deadlines. What should replace that method?|Current Liberian statutes, rules and verified professional guidance|Longer foreign videos|A guess based on another country|An unverified phone message|Real procedural requirements must come from the governing jurisdiction.',
 'A confidential case is described without names but identifies a unique incident. What risk remains?|Indirect identification of the people involved|No confidentiality risk can remain|Only a spelling problem|Only a formatting problem|Context can reveal identity despite removal of names.',
 'A learner finishes all TIH lessons and passes the final. What credential is appropriate?|TIH Certificate of Completion in this course|A Juris Doctor degree|Automatic admission to the Liberian Bar|A Liberia School of Law transcript|This is independent preparatory education, not a professional degree.'
]]

PROJECTS = [
 ('Liberian Case Brief and Research Portfolio', 'Use one published Supreme Court opinion located through the Judiciary. Produce a case brief and a research log. Do not invent a case citation.',
  ['A one-page case brief with the issue, procedural history, holding and reasons', 'A five-entry primary-source research log with pinpoint references and status checks', 'A 600-word IRAC analysis of a changed fictional fact and one counterargument']),
 ('Contracts and Land Due-Diligence Portfolio', 'A fictional cooperative wishes to lease a rural workspace and buy equipment. Land authority and delivery terms are disputed.',
  ['A land-category and authority checklist with unresolved title questions', 'A lease term sheet and equipment-contract formation timeline', 'A 700-word remedies memo distinguishing assumptions from verified rules']),
 ('Rights, Employment and Evidence Memorandum', 'A fictional worker is dismissed following an accusation based on a cropped message. There is a disputed medical record.',
  ['An employment chronology and Decent Work Act applicability analysis', 'An evidence table addressing relevance, authenticity and missing context', 'A 900-word balanced memorandum identifying rights, procedures and remedies to research']),
 ('Moot Court Capstone and Reasoned Opinion', 'Represent each side in a fictional dispute about a supplier contract, corporate authority and defective performance. Then act as the classroom decision-maker.',
  ['A 1,200-word memorial with issues, primary authorities, record references and requested relief', 'Two five-minute oral submissions responding to three challenging bench questions each', 'A 900-word reasoned opinion and self-assessment against the rubric'])
]

def ul(items):
    return '<ul>' + ''.join('<li>' + e(x) + '</li>' for x in items) + '</ul>'

def table(headers, rows):
    return '<div class="law-table-wrap"><table><thead><tr>' + ''.join('<th scope="col">' + e(x) + '</th>' for x in headers) + '</tr></thead><tbody>' + ''.join('<tr>' + ''.join('<td>' + e(x) + '</td>' for x in row) + '</tr>' for row in rows) + '</tbody></table></div>'

def render_note(index, l):
    num = l.get('module', index // 2 + 1)
    source_label, source_url = SOURCES[l['source']]
    questions = l['questions'][:3]
    html = '<article class="law-note"><div class="law-banner">TIH • ' + e(TITLE) + ' • Module ' + str(num) + '</div>'
    html += '<h3>LESSON NOTE: ' + e(l['title'].upper()) + '</h3>'
    html += table(['Subject', 'Topic', 'Level', 'Lesson duration'], [[MODULES[num-1], l['title'], l.get('level','Foundation legal studies'), '60–120 minutes including reading and exercises; longer seminars may need additional time']])
    html += '<h4>Learning objectives</h4><p>By the end of this lesson you should be able to:</p>' + ul([
        'Explain ' + l['title'].lower() + ' using the distinctions below.',
        'Apply the lesson concepts to the fictional scenario and test a competing explanation.',
        'Locate the assigned legal material and state the limits of the available authority.'
    ])
    html += '<h4>1. Introduction</h4><p>' + e(l['definition']) + '</p>'
    html += '<h4>2. Meaning and important distinctions</h4>' + table(['Concept', 'Meaning'], l['distinction'])
    html += '<h4>3. Teaching explanation</h4>' + ''.join('<p>' + e(p) + '</p>' for p in l['teaching'].split('\n\n'))
    html += '<h4>4. Worked Liberian classroom example</h4><p>' + e(l['example']) + '</p>'
    html += '<h4>5. Primary reading and legal research</h4><p>' + e(l['reading']) + '</p><p><a href="' + e(source_url, quote=True) + '" target="_blank" rel="noopener noreferrer">' + e(source_label) + '</a></p>'
    for key in l.get('extraSources', []):
        label, url = SOURCES[key]
        html += '<p><a href="' + e(url, quote=True) + '" target="_blank" rel="noopener noreferrer">' + e(label) + '</a></p>'
    html += '<aside class="law-callout"><strong>Jurisdiction check:</strong> The accompanying video may use a foreign legal system. Use it for concepts; test any local proposition against the assigned Liberian sources. Check amendments and current court rules before relying on a deadline, rate, penalty or procedure. Source review: 14 October 2026.</aside>'
    advice = l.get('examAdvice', 'Frame the issue narrowly. Identify a verified applicable rule, explain how each material fact supports or challenges it, and give a conditional conclusion where necessary. In this scenario, address both ' + l['distinction'][0][0].lower() + ' and ' + l['distinction'][1][0].lower() + '. A definition without application does not answer the problem.')
    html += '<h4>6. Answering an examination question</h4><p>' + e(advice) + '</p>'
    html += '<h4>Summary</h4>' + ul([l['definition'], 'Separate ' + l['distinction'][0][0].lower() + ' from ' + l['distinction'][1][0].lower() + '.', 'Use the actual legal text and make uncertainty visible.'])
    html += '<h4>Key Terms</h4>' + table(['Term', 'Meaning'], l['distinction'])
    html += '<section class="law-glossary" aria-label="Key Words and Meanings"><h4>Key Words &amp; Meanings</h4><p>Tap a term to open its meaning.</p>'
    for word, meaning in l['distinction']:
        html += '<details><summary>' + e(word) + '</summary><p>' + e(meaning) + '</p></details>'
    html += '</section><h4>Review Questions</h4><h5>Multiple choice</h5>'
    for item in questions:
        html += '<p><strong>' + e(item['q']) + '</strong></p><ol type="A">' + ''.join('<li>' + e(o) + '</li>' for o in item['opts']) + '</ol><details><summary>Reveal answer and explanation</summary><p><strong>Answer: ' + chr(65+item['correct']) + '.</strong> ' + e(item['exp']) + '</p></details>'
    html += '<h5>Short answer</h5>' + ul(['Explain the distinction between ' + l['distinction'][0][0] + ' and ' + l['distinction'][1][0] + '.', 'What missing fact in the worked example could change your conclusion, and why?'])
    activities = l.get('activities', ['In pairs, argue both sides of the worked example. Identify one claim that requires more evidence.', 'Open the assigned reading, record a pinpoint reference, and explain how it supports or limits the example analysis.'])
    html += '<h4>Class Activity</h4><ol>' + ''.join('<li>' + e(a) + '</li>' for a in activities) + '</ol>'
    html += '<h4>Assignment</h4><p>' + e(l['assignment']) + '</p><p><strong>Self-review:</strong> Check accuracy, authority, application, counterargument and clarity. Keep your work in your portfolio; project completion is self-recorded unless a TIH tutor separately reviews it.</p>'
    html += '<p class="law-footnote">Independent TIH education. Not legal advice, a law degree, bar admission or an accredited law-school qualification. Use fictional facts and never disclose confidential client information.</p></article>'
    return html

def project_note(title, scenario, deliverables, module=21):
    return '<article class="law-note"><div class="law-banner">Module ' + str(module) + ' • Practical portfolio</div><h3>' + e(title) + '</h3><h4>Scenario</h4><p>' + e(scenario) + '</p><h4>Deliverables</h4>' + ul(deliverables) + '<h4>Assessment rubric</h4>' + table(['Criterion', 'Weight', 'Evidence of strong work'], [
        ['Legal accuracy and authority', '30%', 'Correct jurisdiction, verified text and pinpoint references'],
        ['Application and counterargument', '30%', 'Elements linked to facts with competing arguments considered'],
        ['Research and evidence', '20%', 'Transparent status checks, reliable records and stated gaps'],
        ['Ethics and communication', '20%', 'Confidentiality, candid limits and clear organisation']]) + '<h4>Completion checklist</h4>' + ul(['Use only fictional or public, appropriately handled material.', 'Identify assumptions and verify every cited authority.', 'Address both parties strongest positions.', 'Self-assess against the rubric and record your reflection in Notes.']) + '<p>Portfolio work is self-recorded in the existing player. Automated quizzes assess knowledge; no claim of automatic tutor marking is made. Use Print → Save as PDF for an offline copy.</p></article>'

def js_set(name, data):
    return 'window.' + name + ' = window.' + name + ' || {};\nwindow.' + name + '[' + json.dumps(ID) + '] = ' + json.dumps(data, ensure_ascii=False) + ';\n'

def build():
    assert len(LESSONS) == 40 and len(EXAM) == 40
    assert all(len(l['questions']) == 4 and l['video'] for l in LESSONS)
    assert len({l['video'] for l in LESSONS}) == 40
    expansion = runpy.run_path('tools/liberian-law-expansion.py')
    extra = expansion['EXTRA_LESSONS']
    extra_projects = expansion['EXTRA_PROJECTS']
    exam_rows = runpy.run_path('tools/liberian-law-exams.py')['EXAM_ROWS']
    assert len(extra) == 40 and len(extra_projects) == 4 and len(exam_rows) == 100
    def balanced(items, offset=0):
        out=[]
        for n, text in enumerate(items):
            item=q(text); shift=(offset+n)%4
            if shift: item['opts']=item['opts'][-shift:]+item['opts'][:-shift]
            item['correct']=shift; out.append(item)
        return out
    for i, l in enumerate(extra):
        l['questions']=balanced(l['questions'],i)
    new_exams={}
    for paper in ('midterm','final'):
        rows=[r for r in exam_rows if r['paper']==paper]
        new_exams[paper]=balanced([r['text'] for r in rows])
        for item,row in zip(new_exams[paper],rows):item['sourceModule']=row['module']
    assert len(new_exams['midterm'])==40 and len(new_exams['final'])==60
    assert len({l['video'] for l in LESSONS+extra})==80
    course = dict(id=ID, title=TITLE, shortDesc='A complete 160-hour TIH programme: 80 taught lessons across 20 law subjects, 124 quizzes and examinations with 460 distinct questions, primary Liberian readings, and eight practical portfolio projects. Learn foundations, applied analysis, drafting and advocacy for independent Liberian law-school study.',
        category='Law & Governance', icon='⚖️', gradient='linear-gradient(135deg,#002868,#0e7490)', instructor='Tolbert Innovation Hub',
        instructorTitle='Independent educational programme', rating=0, reviewCount=0, students='', duration='160h estimated',
        level='Foundation → Applied legal studies', price='$10', origPrice='$10', isFree=False, badge='new',
        certificateRevision=2, legacyTitle='Liberian Law: Law School Preparation', legacyCertificateFacts=['106 Lessons','80h estimated'],
        certificateFacts=['80 Taught Lessons','8 Portfolio Projects','160h estimated'],
        certId='TIH-2026-LAW-0001', cardImage='liberian-law-card.svg',
        learn=['Navigate Liberian legal sources, courts and constitutional protections', 'Research primary authorities and write case briefs, memoranda and reasoned opinions', 'Analyse contracts, torts, criminal law, procedure and evidence at foundation and applied levels', 'Study land transactions, family, estates, labour, corporate and commercial issues', 'Apply administrative, procurement, tax, human-rights, international, maritime, environmental and IP concepts', 'Build an eight-project legal portfolio and practise trial and appellate advocacy'],
        requirements=['No prior legal training required; careful English reading and writing are helpful', 'A browser and internet for primary readings and videos', 'A notebook or digital portfolio; fictional or public facts only'],
        about=['A complete independent TIH programme covering 20 law subjects in foundation and applied stages, with 42 modules and 212 sequential learning steps. It uses primary Liberian readings, detailed teaching notes, fictional local scenarios, formative practice, unseen examinations and eight portfolio projects.',
               'The published Liberia School of Law subject list is a reference for coverage only. TIH is not claiming a partnership, endorsement, official syllabus equivalence, academic credit, law degree or bar eligibility. Confirm admission and degree requirements directly with the institution.',
               'Plan about 160 hours: 80 hours of lessons and readings, 24 hours of quizzes and revision, and 56 hours of portfolio work. Longer seminars or additional research may take more time. Complete both stages, all eight projects and the 60-question programme final under the existing 70% pass rule. Portfolio completion is self-recorded; the credential is a TIH Certificate of Completion.',
               'Previous learners retain their original foundation steps and scores. The former 30-question final is now the foundation examination; completion of that stage does not automatically complete the expanded programme. The applied midterm contains 40 unseen questions and the programme final covers all 20 law subjects.'],
        reviews=[], faqs=[dict(q='Is this a Liberian law degree or permission to practise?', a='No. It is independent TIH preparation and continuing learning, with a Certificate of Completion only. It does not replace an accredited law degree, admission procedures or professional authorisation.'),
                         dict(q='Is TIH affiliated with Liberia School of Law or Louis Arthur Grimes School of Law?', a='No affiliation or endorsement is claimed. The subject coverage supports independent study; the published LSL subject list is linked as a reference.'),
                         dict(q='Are all video rules Liberian law?', a='No. Some videos teach comparative concepts. Each note identifies the local reading and explains that current Liberian law controls local questions.'),
                         dict(q='How are projects assessed?', a='Use the project rubric and retain work in your portfolio. The existing player records your completion; quizzes are marked automatically. Tutor review is not promised unless separately arranged with TIH.')],
        modules=[], quizzes={})
    notes, practice, reserved, pins = {}, {}, {}, {}
    for m in range(20):
        entries=[]
        for j in range(2):
            i=m*2+j; l=LESSONS[i]; key='M' + str(m+1) + ':' + l['title']; qid='law-m%d-topic%d' % (m+1,j+1)
            notes[key]=render_note(i,l)
            practice[key]=l['questions'][:3]; reserved[key]=[l['questions'][3]]; pins[key]=l['video']
            entries += [dict(t='%d.%d %s' % (m+1,j+1,l['title']), d='Video + full notes + primary reading', v=l['video']),
                        dict(t='Practice: '+l['title'], d='3 questions', isQuiz=True, quizId=qid)]
            course['quizzes'][qid]=dict(title='Practice: '+l['title'],moduleNum=m+1, questions=l['questions'][:3])
        qid='law-m%d-assessment' % (m+1)
        course['quizzes'][qid]=dict(title=MODULES[m]+' Assessment',moduleNum=m+1, questions=[LESSONS[m*2]['questions'][3],LESSONS[m*2+1]['questions'][3]])
        entries.append(dict(t='Module Assessment: '+MODULES[m],d='2 unseen questions',isQuiz=True,quizId=qid))
        if m==9:
            course['quizzes']['law-midterm']=dict(title='Midterm Examination',moduleNum=10,questions=EXAM[:10])
            entries.append(dict(t='Midterm Examination',d='10 unseen questions',isQuiz=True,quizId='law-midterm'))
        course['modules'].append(dict(title='Module %d: %s' % (m+1,MODULES[m]),icon='⚖️',meta=str(len(entries))+' learning steps',lessons=entries))
    last=[]
    for title, scenario, deliverables in PROJECTS:
        last.append(dict(t=title,d='Portfolio project',isProject=True))
        notes['M21:'+title]=project_note(title,scenario,deliverables)
    course['quizzes']['law-final']=dict(title='Foundation Examination',moduleNum=21,questions=EXAM[10:])
    last.append(dict(t='Foundation Examination',d='30 unseen questions • 70% to pass',isQuiz=True,quizId='law-final'))
    course['modules'].append(dict(title='Module 21: '+MODULES[20],icon='🏆',meta='4 projects + final examination',lessons=last))
    for num in range(22,42):
        entries=[]
        topics=[l for l in extra if l['module']==num]
        assert len(topics)==2
        for j,l in enumerate(topics):
            key='M%d:%s'%(num,l['title']);qid='law-applied-m%d-topic%d'%(num,j+1)
            notes[key]=render_note(0,l)
            practice[key]=l['questions'][:3];reserved[key]=[l['questions'][3]];pins[key]=l['video']
            entries += [dict(t='%d.%d %s'%(num,j+1,l['title']),d='Video + full notes + applied assignment',v=l['video']),dict(t='Practice: '+l['title'],d='3 questions',isQuiz=True,quizId=qid)]
            course['quizzes'][qid]=dict(title='Practice: '+l['title'],moduleNum=num,questions=l['questions'][:3])
        qid='law-applied-m%d-assessment'%num
        course['quizzes'][qid]=dict(title=MODULES[num-1]+' Assessment',moduleNum=num,questions=[l['questions'][3] for l in topics])
        entries.append(dict(t='Module Assessment: '+MODULES[num-1],d='2 unseen questions',isQuiz=True,quizId=qid))
        if num==31:
            course['quizzes']['law-applied-midterm']=dict(title='Applied Midterm Examination',moduleNum=31,questions=new_exams['midterm'])
            entries.append(dict(t='Applied Midterm Examination',d='40 unseen questions',isQuiz=True,quizId='law-applied-midterm'))
        course['modules'].append(dict(title='Module %d: %s'%(num,MODULES[num-1]),icon='⚖️',meta=str(len(entries))+' applied learning steps',lessons=entries))
    last=[]
    for title,scenario,deliverables in extra_projects:
        last.append(dict(t=title,d='Professional portfolio project',isProject=True))
        notes['M42:'+title]=project_note(title,scenario,deliverables,42)
    course['quizzes']['law-programme-final']=dict(title='Complete Programme Final Examination',moduleNum=42,isFinal=True,questions=new_exams['final'])
    last.append(dict(t='Complete Programme Final Examination',d='60 unseen questions • 70% to pass',isQuiz=True,isFinal=True,quizId='law-programme-final'))
    course['modules'].append(dict(title='Module 42: '+MODULES[41],icon='🏆',meta='4 professional projects + comprehensive final',lessons=last))
    for quiz_id, quiz in course['quizzes'].items():
        quiz['id'] = quiz_id  # The shared player records best scores by this stable id.
    questions=[item for quiz in course['quizzes'].values() for item in quiz['questions']]
    assert len(questions)==460 and len({item['q'].lower() for item in questions})==460
    style='''.law-note{font-size:1rem;line-height:1.8;max-width:100%;overflow-wrap:anywhere}.law-note h3{color:#002868;font-size:1.4rem;line-height:1.4}.law-note h4{color:#002868;margin:1.8rem 0 .6rem}.law-banner{background:linear-gradient(120deg,#002868,#087a9e);color:white;border-radius:12px;padding:1rem;font-weight:700}.law-table-wrap{overflow-x:auto;margin:1rem 0}.law-note table{width:100%;border-collapse:collapse;min-width:280px}.law-note th,.law-note td{padding:.75rem;border:1px solid #cbd5e1;text-align:left;vertical-align:top}.law-note th{background:#eff6ff}.law-note details{border:1px solid #bfdbfe;border-radius:10px;padding:.8rem;margin:.7rem 0;background:#f8fbff}.law-note summary{cursor:pointer;font-weight:700;color:#002868;min-height:28px}.law-note a{color:#075985;text-decoration:underline}.law-callout{border-left:4px solid #e31e24;background:#fff7ed;padding:1rem;margin:1.5rem 0}.law-footnote{font-size:.85rem;color:#475569}@media(max-width:480px){.law-note h3{font-size:1.15rem}.law-note td,.law-note th{padding:.5rem}}@media print{.law-note details>*{display:block}.law-note{font-size:11pt}.law-callout{break-inside:avoid}}'''
    Path('liberian-law-notes.js').write_text('/* Authored teaching notes. Generated by tools/build-liberian-law.py. */\n(function(){\n'+js_set('TIH_LESSON_NOTES',notes)+'if(typeof document!=="undefined"&&!document.getElementById("law-note-style")){var s=document.createElement("style");s.id="law-note-style";s.textContent='+json.dumps(style)+';document.head.appendChild(s);}\n})();\n')
    Path('liberian-law-topic-quizzes.js').write_text('/* 240 practice and 80 reserved module items. No assessment reuse. */\n'+js_set('TIH_TOPIC_QUIZZES',practice)+js_set('TIH_RESERVED_QUIZZES',reserved))
    Path('liberian-law-video-map.js').write_text('/* Distinct clips from retrieved search results; comparative, not local authority. */\n'+js_set('TIH_TOPIC_VIDEOS',pins))
    Path('liberian-law-curriculum.js').write_text('/* Generated by tools/build-liberian-law.py. Self-contained for catalogues and lazy player. */\n(function(){if(typeof COURSES_DB==="undefined")return;COURSES_DB['+json.dumps(ID)+']='+json.dumps(course,ensure_ascii=False)+';})();\n')
    source_path = Path('content/liberian-law-sources.json')
    previous = json.loads(source_path.read_text()) if source_path.exists() else {}
    verified = {v['url']: v for v in previous.get('videos', [])}
    videos = []
    for i, l in enumerate(LESSONS+extra):
        url = 'https://www.youtube.com/watch?v=' + l['video']
        item = dict(module=l.get('module',i//2+1), topic=l['title'], url=url, role='Comparative concept illustration; consult the note for local authority.')
        for key in ('title', 'channel', 'metadataChecked', 'searchQuery', 'searchUrl'):
            if key in verified.get(url, {}):
                item[key] = verified[url][key]
        videos.append(item)
    source_path.write_text(json.dumps(dict(reviewed=REVIEW_DATE, scope='Complete independent TIH course; subject correspondence is not accreditation or affiliation.', sources=SOURCES, videos=videos, linkChecks=previous.get('linkChecks',{})), ensure_ascii=False, indent=2)+'\n')
    # Keep the public/admin catalogue and the small dashboard catalogue in sync.
    summary={k:v for k,v in course.items() if k not in ('quizzes',)}
    path=Path('courses-db.js'); text=path.read_text()
    line='COURSES_DB[\''+ID+'\'] = '+json.dumps(summary,ensure_ascii=False)+';'
    text=re.sub(r"^COURSES_DB\['liberian-law'\] = .*;\n?", '', text, flags=re.M)
    path.write_text(text.rstrip()+'\n'+line+'\n')
    path=Path('courses-lite.js'); text=path.read_text()
    match=re.search(r'var LITE = (\{.*?\});', text)
    lite=json.loads(match.group(1))
    lite[ID]={k:v for k,v in course.items() if k in ('title','shortDesc','category','icon','gradient','instructor','rating','reviewCount','students','duration','level','price','origPrice','isFree','badge','cardImage','certId')}
    lite[ID].update(_t=212,_v=80)
    path.write_text(text[:match.start(1)]+json.dumps(lite,ensure_ascii=False,separators=(',',':'))+text[match.end(1):])
    runpy.run_path('tools/build-liberian-law-page.py')['render'](course,SOURCES,PROJECTS+extra_projects)
    return course

if __name__ == '__main__':
    c=build()
    print('Built',TITLE,':',len(c['modules']),'modules,',sum(len(m['lessons']) for m in c['modules']),'steps,',len(c['quizzes']),'quizzes, 460 unique questions.')
