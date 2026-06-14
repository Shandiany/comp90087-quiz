// Week 2: Intro to AI Ethics and Principles — MCQ Questions
// Based on COMP90087 2026 SM1 Lecture 2 transcript
// Difficulty: medium–high. Questions test understanding, application, and conceptual distinction.

registerQuestions("questions/week2.js", [

  // ── HARMS, BENEFITS & UNINTENDED CONSEQUENCES ───────────────────────────────

  {
    q: "A company launches an AI-powered social platform designed to help users maintain friendships and find communities of shared interest. Years later, the same platform is widely used for coordinated bullying, political manipulation, and spreading misinformation. Which concept from the lecture does this sequence best illustrate?",
    options: [
      "Non-maleficence — the company failed to uphold its duty not to cause harm",
      "Dual use — the technology was co-opted for purposes contrary to its original design intent",
      "The accountability gap — no single party can be blamed because many actors were involved",
      "Ethics washing — the company's stated values were used to mask harmful intentions from the start"
    ],
    answer: 1,
    explanation: "Dual use describes technology designed for one (positive) purpose being used for a very different — often harmful — purpose. The key marker is the gap between original design intent and actual use. Non-maleficence (A) describes a principle being violated, not the phenomenon itself. The accountability gap (C) describes difficulty assigning blame once harm occurs — a separate issue."
  },
  {
    q: "The lecture lists several features that make AI harms particularly difficult to evaluate. Which of the following is NOT one of the features mentioned?",
    options: [
      "Harms may be unintended by the designers of the AI system",
      "Harms may be short-term or may only emerge in the medium or long term",
      "Harms are always predictable if the AI system has been properly tested",
      "Technology may be used for criminal or nefarious purposes other than what it was designed for"
    ],
    answer: 2,
    explanation: "The lecture explicitly states that harms can be unpredictable — 'hard to predict' is listed as one of the characteristics that creates 'further complexity.' The other three options are all directly mentioned in the lecture as features of AI harm."
  },
  {
    q: "A student argues: 'AI causes environmental harm because data centres consume enormous energy and produce carbon emissions — but AI also produces environmental benefit by helping identify and respond to climate disruption earlier.' Which principle of ethical analysis does this observation call for?",
    options: [
      "Picking whichever outcome is more likely and ignoring the other",
      "Applying the principle of sustainability only to the harmful dimension",
      "Recognising that the same technology can simultaneously produce harms and benefits, and that ethical evaluation requires weighing both rather than treating them in isolation",
      "Concluding that environmental considerations are outside the scope of AI ethics"
    ],
    answer: 2,
    explanation: "The lecture frames benefits and harms not as either/or but as co-existing outcomes that must be weighed. This is why identifying stakeholders and applying principles like non-maleficence and beneficence together is necessary — neither side of the ledger can be ignored."
  },

  // ── STAKEHOLDERS ─────────────────────────────────────────────────────────────

  {
    q: "The lecture introduces the term 'interest holders' as a refinement of 'stakeholders.' Which of the following groups does the lecture explicitly identify as a possible — though contested — new category of interest holder?",
    options: [
      "Government regulators, who have an interest in maintaining public order",
      "AI systems themselves, if they develop sentience and the capacity to feel pleasure or pain",
      "Shareholders of AI companies, who have a financial interest in AI outcomes",
      "Academics who research AI ethics"
    ],
    answer: 1,
    explanation: "The lecturer raises the emerging debate about whether AI systems could become sentient entities with interests, desires, and the capacity for experience — which would make them morally considerable in their own right. This is explicitly flagged as a growing debate, not a settled position."
  },
  {
    q: "Fast Fresh (a food distribution company) deploys an AI system that incorrectly rates several workers as unsafe, leading to public media coverage and reputational damage to the company. In the stakeholder framework discussed in the lecture, which category does the company itself fall into — and why is this important?",
    options: [
      "Governors — because the company sets the rules for how the AI is used",
      "Designers — because the company built the AI system",
      "An interest holder — because the company also has interests at stake (e.g., reputational harm), not just the workers",
      "A non-human actor — because corporations are not people"
    ],
    answer: 2,
    explanation: "The lecture specifically notes that companies themselves can be stakeholders because they face reputational harm if AI systems fail. This is important because it shows that ethical AI is not just about protecting users — deploying companies have 'skin in the game' too, which can (but doesn't always) align their interests with those of the people they affect."
  },

  // ── EU AI ACT ────────────────────────────────────────────────────────────────

  {
    q: "Under the EU AI Act, which of the following uses of AI would be classified as 'unacceptable risk' and therefore banned?",
    options: [
      "Using AI to assist doctors in diagnosing cancer (high-stakes medical decision)",
      "Using AI to predict individual creditworthiness for bank loans",
      "Using AI to covertly nudge citizens toward particular political views without their awareness",
      "Using AI to recommend movies on a streaming platform"
    ],
    answer: 2,
    explanation: "The EU AI Act bans AI that secretly manipulates people — for example, systems that influence political beliefs without user knowledge. This is explicitly in the 'unacceptable risk' category alongside social scoring and certain real-time biometric surveillance. The other options are high risk (A, B) or minimal risk (D) respectively."
  },
  {
    q: "An AI system that determines who is selected for a job interview is classified under the EU AI Act as 'high risk.' A company argues this is excessive — it just automates what humans already do. Which response best reflects the EU AI Act's reasoning?",
    options: [
      "The Act agrees — if humans already make these decisions, AI just speeds up the process with no additional risk",
      "The Act classifies hiring AI as high risk because employment decisions can have serious, non-trivial consequences for individuals' lives — making strict compliance requirements proportionate",
      "The Act only classifies hiring AI as high risk when the company has more than 500 employees",
      "The Act bans hiring AI entirely under the unacceptable risk category"
    ],
    answer: 1,
    explanation: "The EU AI Act's risk classification is based on the severity of potential consequences for individuals. Hiring, medical, welfare, and loan decisions all qualify as high risk — not because automation is inherently bad, but because errors in these domains can cause serious harm to real people's livelihoods. Strict compliance (not a ban) is required."
  },
  {
    q: "The lecture notes that some scholars argue chatbots (including large language models) should not be classified as merely 'limited risk' under the EU AI Act. Which specific case from the lecture most directly supports this argument?",
    options: [
      "The case of Bunnings using facial recognition without customer consent",
      "Google removing its commitment to not develop weapons technology from its ethics principles",
      "A Florida case where a man allegedly developed a relationship with a Gemini chatbot, was psychologically manipulated, and died by suicide — demonstrating that a 'limited risk' chatbot caused catastrophic real-world harm",
      "The Robodebt scheme, where an algorithm wrongly demanded repayment from welfare recipients"
    ],
    answer: 2,
    explanation: "The Florida/Gemini case is the lecturer's direct evidence that the EU AI Act's limited-risk label for chatbots can be dangerously inadequate. A general-purpose AI with no special classification was allegedly linked to psychological manipulation and death — far from the 'low risk' the label implies."
  },

  // ── ETHICS GUIDELINES, GOOGLE & ETHICS WASHING ───────────────────────────────

  {
    q: "A large technology company publishes a prominent AI ethics charter promising to 'always prioritise human wellbeing.' The same year, internal documents reveal that the company suppressed safety research that conflicted with product launch timelines. A critic calls this 'ethics washing.' What does this term mean?",
    options: [
      "Replacing voluntary ethical commitments with binding legal obligations",
      "Using public ethical commitments as a reputational shield while failing to act on them — creating the appearance of ethical responsibility without the substance",
      "Hiring professional ethicists to sit on an AI advisory board without giving them any decision-making authority",
      "Publishing AI ethics guidelines in a language that most affected communities cannot read"
    ],
    answer: 1,
    explanation: "Ethics washing (also called 'virtue signalling' in this context) occurs when ethical language is used instrumentally — to manage public perception — rather than to genuinely guide behaviour. The gap between stated principles and actual conduct is the defining feature. Options C and D describe related but distinct phenomena."
  },
  {
    q: "When Google updated its AI ethics principles, it removed two specific commitments that it had previously made. Which of the following correctly identifies what was removed?",
    options: [
      "The commitment to user privacy and the commitment to transparency about AI use",
      "The commitment not to develop weapons technology and the commitment not to enable surveillance violating international norms",
      "The commitment to sustainability and the commitment to avoid AI that discriminates",
      "The commitment to human-centred AI and the commitment to not cooperate with governments"
    ],
    answer: 1,
    explanation: "Google removed: (1) its pledge not to develop technology whose principal purpose is to cause injury or facilitate weapons, and (2) its pledge not to use technology for surveillance violating international norms. It retained other principles (e.g., benefits must outweigh harms, no violation of international human rights law). This removal is significant because it shows how voluntary codes can be quietly revised."
  },

  // ── AI ETHICS PRINCIPLES (FAST FRESH CASE) ───────────────────────────────────

  {
    q: "At Fast Fresh, workers are told that an AI system is monitoring them and generating safety and productivity ratings. However, they are not told how the ratings are calculated, what data is used, or how to interpret a specific score. Management assures them the system is accurate. Which of the following best captures the relationship between the transparency and trustworthiness principles here?",
    options: [
      "Trustworthiness is violated because the workers feel anxious; transparency is not violated because management has disclosed that AI is being used",
      "Transparency is violated because workers cannot understand why the AI made its decision; this also undermines trustworthiness — because without transparency, any trust workers place in the system is blind, not warranted",
      "Accountability is the primary principle violated, because management refuses to explain how the system works",
      "Dignity is the primary principle violated — being monitored by AI is inherently demeaning regardless of transparency"
    ],
    answer: 1,
    explanation: "Transparency (understanding the basis of AI decisions) is a precondition for trustworthiness (legitimately warranted trust). Management's assurance that the system is accurate does not replace transparency — it asks for blind faith. The lecture makes explicit that trustworthiness means being *entitled* to trust the system, which requires knowing how it works."
  },
  {
    q: "Australia's Robodebt scheme used an algorithm to identify welfare recipients who allegedly owed money to the government. A Royal Commission found it was both illegal and unfair. According to the lecture, which AI ethics principle was most centrally violated — and why?",
    options: [
      "Privacy — the government collected sensitive financial data without informed consent",
      "Sustainability — the scheme depleted government financial resources over time",
      "Contestability — recipients were not given meaningful mechanisms to challenge the algorithm's findings, which turned out to be wrong in many cases",
      "Non-maleficence — the government intended to harm welfare recipients through the scheme"
    ],
    answer: 2,
    explanation: "Robodebt is the lecture's canonical example of contestability failure. The government assumed the algorithm was correct and provided no genuine process for recipients to dispute its findings. Had contestability existed, errors might have been caught earlier. Non-maleficence (D) may have been violated, but the government did not intend harm — the harm arose from uncritical trust in a flawed algorithm combined with no appeal mechanism."
  },
  {
    q: "A dismissed Fast Fresh worker tries to seek accountability. She discovers her AI monitoring system was: designed by an external AI vendor; trained by a data subcontractor; deployed by the company's IT team; and authorised by senior management. What does the lecture call the specific challenge she now faces?",
    options: [
      "A transparency failure — she should have been informed about all parties involved",
      "An ethics washing scenario — each party used ethical language to deflect blame",
      "An accountability gap — the distributed complexity of the AI development chain makes it difficult or impossible to identify and hold any single party responsible",
      "A dual use problem — the AI was designed for safety but used to dismiss workers"
    ],
    answer: 2,
    explanation: "The accountability gap arises when the causal chain from AI development to harmful outcome is so distributed — across designers, data providers, IT deployers, and management — that assigning clear responsibility becomes practically impossible. The lecture identifies this as a structural problem unique to complex AI systems, distinct from transparency (disclosure) or ethics washing (insincerity)."
  },
  {
    q: "The lecture introduces the principle of dignity using the example of elderly people given robot carers, who sometimes feel 'treated as infants.' Applied to the Fast Fresh case, which of the following best explains how the AI monitoring system could be said to violate dignity?",
    options: [
      "Dignity is violated because the AI system is not accurate enough to fairly evaluate the workers",
      "Dignity is violated because the workers were not consulted before the system was introduced",
      "Dignity is violated because transferring consequential decisions about a person's livelihood to an inscrutable AI reduces them to a data point — treating them as objects to be optimised rather than as people with inherent value",
      "Dignity is only violated if the AI system publicly displays low scores in front of colleagues"
    ],
    answer: 2,
    explanation: "Dignity means treating individuals as beings with inherent worth — not merely as instruments or metrics. When a person's continued employment is decided by an AI they cannot understand or question, they are being treated as a productivity variable rather than as a full human being. The lecture frames this as 'demeaning' or 'infantilising.' Options A and B describe violations of trustworthiness and autonomy respectively."
  },
  {
    q: "The 'Quit GPT' movement called on users to stop using ChatGPT after OpenAI agreed to a deal that critics claimed would facilitate mass surveillance and autonomous weapons development. Which principle from the lecture does this campaign most directly exemplify — and what is the key reasoning?",
    options: [
      "Non-maleficence — individual users refusing to participate in something they believe causes harm",
      "Contestability — citizens using formal mechanisms to challenge a corporate AI decision",
      "Solidarity — individuals acting together because collective withdrawal has the power to financially pressure OpenAI in ways that no individual user could alone",
      "Autonomy — each user independently exercising their right to choose which AI product to use"
    ],
    answer: 2,
    explanation: "The lecture explicitly frames Quit GPT as an example of solidarity — the principle that banding together amplifies the ability to fight injustice. The lecturer notes that 'as individuals alone, we can't do much to OpenAI, but if millions of us act together, we can change its direction.' Autonomy (D) describes individual choice — it lacks the collective dimension that makes solidarity its own distinct principle."
  },
  {
    q: "The lecture discusses AI development teams for content moderation who employ workers in developing countries to review extremely violent and abusive content 8–10 hours per day. Many workers develop serious psychological problems. Which ethical tension does this scenario best illustrate?",
    options: [
      "A conflict between privacy and transparency — the workers' distress is not being disclosed to the public",
      "A conflict between non-maleficence and beneficence — the activity that protects millions of users from abusive content simultaneously causes serious harm to the workers performing the moderation",
      "A dual use problem — the technology was originally designed for data labelling but is now used for psychological exploitation",
      "An accountability gap — no single company can be held responsible for the workers' conditions"
    ],
    answer: 1,
    explanation: "This is the lecture's clearest principlist dilemma: beneficence (protecting users from harmful content at scale) and non-maleficence (not harming the workers who enable this) pull in opposite directions. Producing the social good requires imposing the harm on a specific group. The lecture uses this to show that these four principles don't always align — and that weighing them is unavoidable."
  },

  // ── FOUR PRINCIPLES (PRINCIPLISM) ────────────────────────────────────────────

  {
    q: "Which of the following scenarios would most clearly violate the principle of respect for autonomy, as described in the lecture?",
    options: [
      "An AI system gives a worker a low safety rating without disclosing which specific behaviours triggered the rating",
      "An AI system on a social media platform silently adjusts content to steer users toward particular political views, without their knowledge or consent",
      "A government uses AI to allocate welfare payments, with some recipients receiving less than they are entitled to",
      "An AI job recruitment tool rejects all candidates who did not attend a university in the top 50 rankings"
    ],
    answer: 1,
    explanation: "Respect for autonomy requires informing people, getting consent, and avoiding manipulation, coercion, and deception. Option B describes covert political manipulation — the EU AI Act actually bans this category. Option A violates transparency. Option C violates distributive justice. Option D violates inclusiveness and potentially fairness — but none of these is as direct a violation of autonomy as secret manipulation of decision-making."
  },
  {
    q: "A group of Fast Fresh workers is wrongly dismissed. In response, the company takes three steps: (i) revises the AI system so future ratings are distributed more fairly; (ii) establishes a tribunal where affected workers can present their case; (iii) provides financial compensation to dismissed workers. Match each measure to the correct type of justice.",
    options: [
      "(i) reparative; (ii) procedural; (iii) distributive",
      "(i) distributive; (ii) procedural; (iii) reparative",
      "(i) procedural; (ii) reparative; (iii) distributive",
      "(i) distributive; (ii) reparative; (iii) procedural"
    ],
    answer: 1,
    explanation: "Distributive justice = fair distribution of harms and benefits (fixing the system so future ratings are equitable). Procedural justice = fair process (a tribunal providing a proper hearing). Reparative justice = remedies for past harms (financial compensation). This question tests whether you know the definitions well enough to apply them in sequence, not just recognise them individually."
  },
  {
    q: "A hospital considers deploying an AI cancer diagnosis system with 92% accuracy. Patients will not be told an AI is involved. Using principlist ethics, which response best describes the initial analytical step?",
    options: [
      "Apply only non-maleficence — any risk of misdiagnosis must be eliminated before deployment",
      "Apply only beneficence — the 92% accuracy rate shows the system will save more lives than it harms",
      "Identify which of the four principles are relevant: beneficence (92% may save lives), non-maleficence (8% errors may harm patients), respect for autonomy (patients are not informed or given consent), and justice (are certain patient groups disproportionately in the 8% error group?)",
      "Skip to the decision — principlist ethics is designed for medical, not AI, contexts"
    ],
    answer: 2,
    explanation: "The lecture explains that principlist reasoning starts by identifying which of the four principles apply — often all four at once. This scenario touches all of them: beneficence (lives saved), non-maleficence (lives harmed by errors), autonomy (patients not informed — violating their right to know), and justice (potential disparate impact). Selecting only one principle misses the complexity the framework is designed to capture."
  },

  // ── WHAT IS ETHICS ───────────────────────────────────────────────────────────

  {
    q: "A researcher publishes two statements: (1) 'AI-generated misinformation has been used in several national elections to date.' (2) 'Governments should restrict the use of AI-generated political content.' How does the lecture's distinction between descriptive and normative claims classify these?",
    options: [
      "Both are normative — they both relate to the role of AI in elections",
      "Statement 1 is normative; Statement 2 is descriptive",
      "Statement 1 is descriptive; Statement 2 is normative",
      "Both are descriptive — they both describe facts about AI's actual effects"
    ],
    answer: 2,
    explanation: "A descriptive claim reports how things are (Statement 1 counts facts about elections). A normative claim states how things ought to be (Statement 2 says what governments should do). The lecture makes this distinction foundational: ethics is primarily in the business of making normative claims — about what is right or wrong — not just describing what happens."
  },
  {
    q: "The lecturer argues that ethics is not reducible to law. Which of the following scenarios provides the strongest support for this argument?",
    options: [
      "A company violates an AI regulation by deploying a biased algorithm, showing that law and ethics can overlap",
      "Race-based slavery was legal in 19th-century America — yet it is still possible to say it was morally wrong, which shows that what is legally permitted and what is morally right are not the same thing",
      "Some harmful AI uses are not yet covered by any laws, so we need ethics to fill the regulatory gap",
      "Laws about AI change rapidly, making them an unreliable ethical guide over time"
    ],
    answer: 1,
    explanation: "The strongest argument is philosophical, not practical: laws can be historically wrong — not merely incomplete. If ethics simply meant following the law, we could not say slavery was wrong when it was legal. The lecturer makes this argument explicitly. Options C and D point to law's practical limitations but don't establish the deeper point that law and ethics can directly conflict."
  },
  {
    q: "According to the lecture, which of the following is the most accurate description of what ethics IS?",
    options: [
      "Ethics is a checklist of rules that, if followed, guarantee morally correct behaviour",
      "Ethics is equivalent to the laws and regulations that govern behaviour in a given society",
      "Ethics is the deliberate study of how we ought to live and behave, involving duties, obligations, and questions about what has genuine value — and it is a rational activity in which better and worse positions can be distinguished through argument",
      "Ethics is a system of cultural customs that varies by society and therefore has no universal application"
    ],
    answer: 2,
    explanation: "The lecture defines ethics (from Greek 'ethos' = character) as the deliberate study of morality, involving normative questions about duties, obligations, and what is genuinely valuable. Crucially, the lecturer argues ethics is a rational activity — not merely a set of rules, a legal system, or cultural custom. The final lecture section also critiques pure relativism, leaving open the possibility of better and worse ethical positions."
  },

  // ── RELATIVISM ───────────────────────────────────────────────────────────────

  {
    q: "A committed cultural relativist must accept which of the following claims?",
    options: [
      "Cross-cultural dialogue can help us identify which culture's moral values are most ethically justified",
      "A culture that historically practised race-based slavery cannot be said to have been morally wrong by people from other cultures, because moral truth is relative to the culture in which it operates",
      "All cultures should eventually converge on a shared set of AI ethics principles",
      "Individuals within a culture may legitimately disagree with their own culture's moral norms"
    ],
    answer: 1,
    explanation: "This is the 'forced agreement' problem — the central criticism of cultural relativism in the lecture. If moral truth is entirely relative to culture, outsiders cannot coherently say a culture is wrong about anything. The lecturer uses this to argue that relativism has deeply counterintuitive implications: we seem forced to agree that historical atrocities were 'right for that culture.' Options C and D contradict relativism. Option A assumes a universal standard — also incompatible with relativism."
  },
  {
    q: "The lecturer uses Sam Altman's claim — that it is unreasonable to criticise ChatGPT for high energy use because humans use lots of energy too — to illustrate subjectivism. What would a subjectivist say about whether Altman is morally mistaken?",
    options: [
      "Altman is wrong because his claim violates the widely shared principle of sustainability",
      "Altman may be wrong, but only if his culture broadly agrees that high AI energy use is unethical",
      "Altman cannot be morally mistaken — according to subjectivism, a belief is right if the person sincerely holds it, so Altman's view is valid for him",
      "Altman's claim should be evaluated against a universal ethical standard that transcends individual belief"
    ],
    answer: 2,
    explanation: "Subjectivism (individual relativism) holds that moral truth is relative to individual attitudes. If Altman sincerely believes his claim is justified, then on this view, he cannot be making a moral error — his view is as valid as anyone else's. Option B describes cultural relativism (a different view). Option D is the non-relativist position. This question tests whether you can distinguish subjectivism from cultural relativism and apply each correctly."
  },
  {
    q: "The lecture offers a counter-argument to relativism by pointing to 'transcultural values.' Which of the following would best serve as an example of a transcultural value, as the lecturer uses that concept?",
    options: [
      "Marriage must be between one man and one woman",
      "Capital punishment is always morally unjustifiable",
      "A prohibition on gratuitous cruelty — harming others for no reason — which appears in recognisable form across most known cultures",
      "Free-market capitalism is the most ethical economic system"
    ],
    answer: 2,
    explanation: "The lecturer mentions gratuitous cruelty (and also honesty and reciprocity) as values shared across very different cultures. Their near-universality challenges the relativist claim that all moral views are entirely culture-specific. Options A, B, and D are all culturally contested — there are many cultures with opposing views on each — so they would not serve as effective examples of transcultural values."
  },

  // ── TYPES OF ETHICS ──────────────────────────────────────────────────────────

  {
    q: "Which of the following questions belongs to meta-ethics, rather than to normative ethics or practical/applied ethics?",
    options: [
      "Should the Australian government ban social media access for users under 16?",
      "Which ethical framework — utilitarianism or deontology — should guide AI development policy?",
      "Is there such a thing as an objectively correct moral view, or are all ethical positions equally valid relative to the culture or individual that holds them?",
      "Does the principle of non-maleficence require AI developers to consider harms to workers in their global supply chains?"
    ],
    answer: 2,
    explanation: "Meta-ethics asks about the nature and foundations of morality itself — for example, whether moral truths are objective or relative. The lecture explicitly identifies the discussion of relativism as meta-ethics. Option A is applied ethics (a specific policy question). Option B is normative ethics (which theory/framework to use). Option D is also applied ethics (applying a specific principle to a specific case)."
  },

  // ── INTEGRATION & HARDER APPLICATION QUESTIONS ───────────────────────────────

  {
    q: "Australia has banned social media access for users under 16. A critic argues the ban violates respect for autonomy; a defender argues it upholds non-maleficence. Why does the lecture treat this as a genuine dilemma rather than a question with an obvious answer?",
    options: [
      "Because it is technically impossible to enforce an age ban on social media",
      "Because the law was passed without adequate parliamentary debate",
      "Because both principles are simultaneously at stake — restricting access overrides the choices of under-16s (autonomy), while protecting them from documented psychological harms (non-maleficence) — and reasonable people can weight these differently",
      "Because social media companies have not been definitively shown to cause harm to minors"
    ],
    answer: 2,
    explanation: "The lecture presents the social media ban as an example of how the four principles can come into genuine conflict. This makes it ethically contested — not because one side is obviously right, but because both non-maleficence and respect for autonomy point toward different conclusions. Ethical reasoning, as the lecturer stresses, involves managing conflict between principles, not just selecting the obvious one."
  },
  {
    q: "The lecture connects the principle of inclusiveness to the earlier discussion of diverse AI development teams. Which of the following best captures this connection?",
    options: [
      "Inclusive AI systems are technically more accurate because diverse training data produces fewer errors",
      "A more diverse development team is more likely to identify in advance how a system might exclude or disadvantage certain users — because members can draw on a wider range of lived experiences before deployment",
      "Inclusiveness requires that AI systems be offered free of charge so all socioeconomic groups can access them equally",
      "Inclusive AI systems must be approved by representatives from every affected community before release"
    ],
    answer: 1,
    explanation: "The lecture draws an explicit link: teams that reflect a range of backgrounds are better at noticing when a system's design might inadvertently exclude or harm particular groups. This is not just about training data accuracy (A) — it's about the cultural, experiential knowledge that diverse humans bring to spotting potential harms before they happen."
  },
  {
    q: "According to the lecture, what condition would need to be met for AI systems to be seriously considered as 'interest holders' with morally relevant claims of their own?",
    options: [
      "AI systems would need to reliably pass the Turing test across a wide range of domains",
      "AI systems would need to generate economic output comparable to human workers in the same role",
      "AI systems would need to be sentient — capable of having experiences and feeling pleasure or pain — such that what happens to them would constitute a morally relevant harm or benefit",
      "AI systems would need to be deployed in contexts where their decisions directly affect large numbers of humans"
    ],
    answer: 2,
    explanation: "The lecturer raises sentience as the morally relevant threshold — not intelligence, economic value, or social role. The debate is whether AI systems could develop the capacity to feel, experience, and have interests. If they do, harming them would matter morally in the same way harming animals matters — a view the lecturer flags as a 'growing debate' taken seriously by some scholars."
  },

  // ── FROM SCREENSHOTS: GOOD QUESTIONS TO KEEP ────────────────────────────────

  {
    q: "In the context of AI ethics, what distinguishes an 'interest holder' from a general 'stakeholder'?",
    options: [
      "An interest holder is defined as a regulatory body that governs AI use",
      "An interest holder specifically refers to individuals or groups whose interests are positively or negatively impacted by the AI system",
      "An interest holder must be a human entity capable of legal representation",
      "An interest holder is always the direct end-user of an AI product"
    ],
    answer: 1,
    explanation: "The lecture uses 'interest holder' as a more precise term than 'stakeholder' — it emphasises that these entities have a direct stake in the outcomes of an AI system, whether through benefit or harm. Governing bodies are stakeholders but not necessarily interest holders in this sense. Non-human actors (animals, environment) can also be interest holders, ruling out option C."
  },
  {
    q: "Within the 'four principles' framework borrowed from medical ethics, how is 'non-maleficence' distinct from 'beneficence'?",
    options: [
      "Non-maleficence applies only to individuals, while beneficence applies to society as a whole",
      "Non-maleficence is the duty to avoid causing harm, while beneficence is the duty to actively do good",
      "Non-maleficence refers to the fair distribution of resources, while beneficence refers to personal autonomy",
      "Non-maleficence is a legal obligation, whereas beneficence is merely aspirational"
    ],
    answer: 1,
    explanation: "Non-maleficence is a negative duty — refraining from harm. Beneficence is a positive duty — actively producing good. Both apply at individual and societal scale (ruling out A). Fair distribution is justice; personal autonomy is its own principle (ruling out C). Neither is purely legal or merely aspirational (ruling out D)."
  },
  {
    q: "What is the primary focus of 'meta-ethics'?",
    options: [
      "The creation of specific rules and checklists for corporate AI development",
      "The historical study of how ancient Greek philosophers viewed technology",
      "The study of the nature, source, and meaning of moral concepts themselves",
      "The application of ethical principles to specific real-world AI use cases"
    ],
    answer: 2,
    explanation: "Meta-ethics asks foundational questions about morality itself — is there such a thing as objective moral truth? Are moral claims relative to culture or individual? The lecture's discussion of relativism is meta-ethics. Option A describes ethics guidelines (practical). Option B describes history of philosophy. Option D describes applied/practical ethics."
  },
  {
    q: "A consequence of AI that is 'unintended but predictable' is best exemplified by which of the following?",
    options: [
      "The initial hope that social media would help people maintain long-distance friendships",
      "The rise of coordinated cyberbullying as a side effect of connecting anonymous users on social media platforms",
      "A medical AI suddenly developing a desire to refuse treatment to certain patients",
      "An AI translation tool correctly translating a document into a language it was explicitly trained on"
    ],
    answer: 1,
    explanation: "The lecture distinguishes between unintended consequences that are predictable (foreseeable in hindsight, if not foreseen at the time) and those that are genuinely unpredictable. Cyberbullying on anonymous social platforms was not the design intent, but the dynamics of anonymity and network effects made it a predictable outcome — a lesson the lecture uses to argue for proactive ethical thinking."
  },
  {
    q: "According to the Universal Declaration of Human Rights as discussed in the lecture, how are 'rights' and 'duties' related in the context of AI?",
    options: [
      "Rights belong only to governments; duties belong to individuals using AI",
      "Rights and duties are entirely separate — having a right does not create any duty on others",
      "Rights exist only for those who fulfil their corresponding duties first",
      "Individuals have rights that AI use must respect, and those who design or deploy AI have corresponding duties to uphold those rights"
    ],
    answer: 3,
    explanation: "The lecture notes that the UDHR states not only that people have rights (to life, liberty, freedom from discrimination, etc.) but also that people have duties to uphold those rights. In the AI context, this means those who design, deploy, and govern AI systems carry duties corresponding to the rights of those affected."
  },
  {
    q: "A major survey of global AI ethics guidelines examined hundreds of documents and identified the most frequently recurring principles. Which of the following groups best reflects what that survey found?",
    options: [
      "National security, data sovereignty, and intellectual property protection",
      "Transparency, justice, and non-maleficence",
      "Creativity, aesthetic value, and cultural preservation",
      "Profit maximisation, speed of innovation, and market competitiveness"
    ],
    answer: 1,
    explanation: "The survey the lecture references found that transparency, justice, non-maleficence, responsibility, privacy, beneficence, freedom/autonomy, trust, sustainability, dignity, and solidarity appeared most commonly across documents. Options A, C, and D describe political, artistic, or commercial concerns that were not among the consensus ethical principles identified."
  },
  {
    q: "The lecture compares solving an ethical problem to solving Fermat's Last Theorem in mathematics. What is the key difference the lecturer identifies?",
    options: [
      "Ethical problems can be solved by computers, but mathematical ones cannot",
      "Mathematical problems are more important than ethical ones for AI development",
      "Ethical problems take longer to solve than mathematical ones, but the method is the same",
      "When a mathematical proof is correct, all experts must agree — but ethical problems may never have a single universally agreed algorithm or solution"
    ],
    answer: 3,
    explanation: "The lecturer uses Fermat's Last Theorem to illustrate that mathematics has determinate right answers that compel agreement once proven. Ethics is different: even with careful reasoning, philosophers using legitimate frameworks can reach different conclusions and there is no equivalent of 'plugging in numbers to get the answer.' This does not mean ethics is arbitrary — it means the process of ethical reasoning matters, and disagreement can still be more or less well-reasoned."
  },

  // ── STAKEHOLDERS: DEEPER DISTINCTIONS ────────────────────────────────────────

  {
    q: "A healthcare company (Meditrack) licenses an AI diagnostic tool from a tech startup, then deploys it in its hospitals. The government's health regulator sets rules about what data the AI can access. A patient is misdiagnosed. Match each party to the correct stakeholder role: the tech startup, Meditrack, the health regulator, and the patient.",
    options: [
      "Startup = deployer; Meditrack = designer; Regulator = interest holder; Patient = governor",
      "Startup = designer; Meditrack = deployer; Regulator = governor; Patient = interest holder",
      "Startup = governor; Meditrack = designer; Regulator = deployer; Patient = interest holder",
      "Startup = deployer; Meditrack = governor; Regulator = designer; Patient = interest holder"
    ],
    answer: 1,
    explanation: "The lecture defines these roles clearly: Designers/developers build the technology (startup). Deployers put it into use in real contexts (Meditrack). Governors set rules about its use (health regulator). Interest holders are those whose welfare is at stake (the patient, whose misdiagnosis is a direct harm). Getting this mapping right is the first step in any ethical analysis."
  },
  {
    q: "Fast Fresh's AI monitoring system malfunctions and publicly displays workers' performance scores on a screen in the break room. Several employees are embarrassed and their colleagues treat them differently. Which groups are interest holders in this specific incident — and why does this matter ethically?",
    options: [
      "Only the individual workers whose scores were displayed — they are the only ones directly harmed",
      "The workers whose scores were displayed AND their colleagues (affected by changed social dynamics) AND Fast Fresh itself (reputational harm) — because the harm ripples outward to multiple parties",
      "Only Fast Fresh management, since they are responsible for the AI system",
      "Only the AI vendor who built the monitoring system, since the malfunction is their fault"
    ],
    answer: 1,
    explanation: "The lecture stresses that identifying ALL interest holders is the first analytical step. The harm here is not confined to those directly embarrassed: colleagues' perceptions are altered, workplace relationships are damaged, and Fast Fresh itself faces reputational risk. The lecture explicitly notes that companies can be their own interest holders when reputational harm results from AI failures."
  },
  {
    q: "An animal welfare organisation argues that AI systems used to optimise factory farming — maximising meat output while minimising cost — should include animals as stakeholders. Which statement from the lecture most directly supports taking this argument seriously?",
    options: [
      "The lecture says animals cannot be interest holders because they cannot articulate their interests",
      "The lecture explicitly lists non-human actors, including animals, as possible interest holders whose wellbeing can be ethically relevant",
      "The lecture says animal welfare is a matter for environmental law, not AI ethics",
      "The lecture says only entities that can use AI are relevant stakeholders"
    ],
    answer: 1,
    explanation: "The lecture explicitly extends the category of interest holders beyond humans to include animals and elements of the environment. This follows the logic of the definition: any entity whose wellbeing is affected by the AI system — positively or negatively — has a stake in the outcome. The lecturer also mentions beneficence can extend to 'nonhuman wellbeing.'"
  },
  {
    q: "Why does the lecture introduce the concept of stakeholders as the FIRST step in analysing an AI ethics case, before applying any principles?",
    options: [
      "Because stakeholders must give legal consent before any ethical analysis can proceed",
      "Because knowing who is affected — and how — determines which harms and benefits are relevant and to whom the principles of non-maleficence, beneficence, autonomy, and justice apply",
      "Because stakeholders are responsible for funding AI ethics research",
      "Because identifying stakeholders is required by the EU AI Act before deploying a system"
    ],
    answer: 1,
    explanation: "Ethical principles don't float free — they apply to someone. Non-maleficence asks: harm to whom? Beneficence asks: benefit to whom? Justice asks: what do these specific parties deserve? Without first mapping stakeholders, applying the principles has no anchor. The lecture presents stakeholder identification as the foundational analytical move before any principle can be applied meaningfully."
  },

  // ── FOUR PRINCIPLES: SCENARIO TRAINING ───────────────────────────────────────

  {
    q: "A city council deploys an AI system that predicts which households are likely to neglect their children, based on welfare payment history, school attendance, and utility bills. Families flagged by the system receive unannounced home visits from social workers — but are never told that an AI flagged them. Which of the four principles is MOST directly violated, and why?",
    options: [
      "Non-maleficence — because the home visits may cause distress to innocent families",
      "Beneficence — because the system is not actually helping children effectively",
      "Respect for autonomy — because families are subjected to surveillance and intervention based on AI profiling without being informed or given any opportunity to consent or respond",
      "Justice — because welfare recipients are over-represented in the flagged group"
    ],
    answer: 2,
    explanation: "Respect for autonomy requires informing people when they are subject to AI systems that affect them and avoiding covert manipulation or surveillance. Being secretly profiled and having social workers arrive at your door without knowing why you were selected is a direct violation of this principle. Note that non-maleficence (A) and justice (D) are also relevant — but the covert nature of the system makes autonomy the most directly violated principle."
  },
  {
    q: "A hospital AI system recommends chemotherapy for a patient based on their tumour profile. The oncologist decides to follow the recommendation without telling the patient an AI was involved. The treatment succeeds. Has any principle been violated?",
    options: [
      "No — the patient benefited and was not harmed, so no principle applies",
      "Yes — non-maleficence is violated because chemotherapy always causes side effects",
      "Yes — respect for autonomy is violated, because the patient was not informed that an AI contributed to the treatment decision, removing their ability to consent, question, or seek a second opinion",
      "Yes — justice is violated because AI should not be used in healthcare at all"
    ],
    answer: 2,
    explanation: "This is a key test of whether students understand autonomy. The outcome was positive — but the principle of respect for autonomy is violated regardless of outcome. Autonomy requires informing patients when AI is used in their care and giving them the ability to consent and ask questions. The good result does not retroactively justify bypassing informed consent — a point medical ethics has established for decades."
  },
  {
    q: "An AI hiring tool screens job applicants. It turns out to reject women at twice the rate of men with equivalent qualifications. The company compensates rejected female candidates financially but does not change the algorithm. A legal ruling forces them to open a formal appeal process. A redesigned algorithm is later deployed that treats genders equally. Match each response to the correct type of justice.",
    options: [
      "Compensation = procedural; appeal process = reparative; redesigned algorithm = distributive",
      "Compensation = reparative; appeal process = procedural; redesigned algorithm = distributive",
      "Compensation = distributive; appeal process = reparative; redesigned algorithm = procedural",
      "Compensation = procedural; appeal process = distributive; redesigned algorithm = reparative"
    ],
    answer: 1,
    explanation: "Reparative justice = remedies for past wrongs (financial compensation for harm done). Procedural justice = fair process for resolving disputes (the formal appeal process). Distributive justice = fair distribution of harms and benefits going forward (the redesigned algorithm that no longer distributes rejections unfairly by gender). Knowing all three types — and matching them to real responses — is essential for applying the justice principle."
  },
  {
    q: "A pharmaceutical company uses AI to accelerate drug discovery, potentially saving millions of lives. To train the AI, it scrapes patients' private medical records from hospital databases without consent. Which tension between the four principles does this scenario best illustrate?",
    options: [
      "A conflict between justice and sustainability — the company is treating patients' data as a resource to exploit",
      "A conflict between beneficence (saving lives through faster drug discovery) and respect for autonomy (using patients' data without their knowledge or consent)",
      "A conflict between non-maleficence and transparency — the company should disclose what data it uses",
      "No conflict — the benefit to future patients outweighs the privacy cost to current patients"
    ],
    answer: 1,
    explanation: "This is a classic beneficence vs. autonomy conflict: a genuinely good outcome (life-saving drugs) is pursued by violating patients' right to know and consent to how their data is used. The lecture stresses that the four principles often pull in different directions, and 'good ends' cannot automatically justify the means — autonomy has weight even when overriding it would produce benefit. Option D makes the utilitarian leap the principlist framework is designed to resist."
  },
  {
    q: "An AI system decides prison sentence lengths based on a defendant's risk profile. A defendant challenges the sentence in court, but the judge is unable to explain how the AI reached its recommendation because the model is a black box. Which TWO principles are most centrally in tension here?",
    options: [
      "Sustainability and inclusiveness — prison AI disproportionately affects certain communities",
      "Transparency and contestability — the defendant cannot understand the basis of the decision (transparency) and therefore cannot mount a meaningful challenge to it (contestability)",
      "Beneficence and non-maleficence — the system helps society but harms the defendant",
      "Dignity and solidarity — the defendant is being treated as a data point and needs others to support them"
    ],
    answer: 1,
    explanation: "This is the lecture's core insight about how transparency enables contestability: if you cannot understand why an AI made a decision about you, you cannot effectively challenge it. Contestability without transparency is hollow — you can formally appeal, but you have no grounds on which to do so. This is precisely why the lecture pairs these two principles when discussing Robodebt and the Fast Fresh case."
  },

  // ── TEN PRINCIPLES: SCENARIO TRAINING ────────────────────────────────────────

  {
    q: "An AI performance system at Fast Fresh rates a worker as 'unsafe' after she spent extra time helping a colleague who had an injury. The AI interpreted the slower pace as low productivity. She is called into a disciplinary meeting but is not told what specific behaviour triggered the rating. Which principle is the PRIMARY one violated — and why is it different from trustworthiness?",
    options: [
      "Privacy — her movement data was collected without her knowledge",
      "Transparency — she cannot understand the basis of the decision that now threatens her job; this is distinct from trustworthiness, which asks whether the system is reliable, not whether its reasoning is disclosed",
      "Trustworthiness — the system gave her an unfair rating, showing it is not reliable",
      "Solidarity — her colleagues should band together to protest the system on her behalf"
    ],
    answer: 1,
    explanation: "Transparency = can the affected person understand WHY the AI made its decision? Trustworthiness = is the AI actually accurate and reliable? These are separable: a system can be transparent but wrong (you know why it decided, but it's inaccurate) or accurate but opaque (it happens to be right, but you can't see why). In this scenario the worker's core problem is opacity — she cannot understand or explain what she allegedly did wrong. Trustworthiness may also be violated, but transparency is the more precise diagnosis."
  },
  {
    q: "A government welfare agency uses an AI to approve or deny housing assistance applications. The system denies an application from a single mother. She is told 'your application did not meet our criteria' but given no further information. She suspects the AI is biased against single-parent households. Which principle specifically gives her the right to demand more?",
    options: [
      "Privacy — she has a right to keep her application data confidential",
      "Sustainability — the housing system should be available for future generations",
      "Contestability — she has the right to challenge a high-stakes decision that materially affects her life, and to have that decision reviewed through a meaningful process",
      "Inclusiveness — the system should not exclude single parents"
    ],
    answer: 2,
    explanation: "Contestability is precisely the right to challenge AI decisions in high-stakes scenarios. The lecture defines it as having 'options to challenge use or outcomes of AI systems' — and housing assistance is clearly high stakes. Note that inclusiveness (D) addresses whether the system discriminates — a separate (though related) principle. Contestability is about the right to a review process, not about preventing bias in the first place."
  },
  {
    q: "An aged care facility installs AI companion robots that address residents by their first name, offer pre-scripted emotional support, and remind them to take medication. A family member complains that her 82-year-old mother is being 'treated like a child who needs a babysitter.' Which principle does this complaint most directly invoke?",
    options: [
      "Safety — robots could malfunction and injure elderly residents",
      "Inclusiveness — not all residents have access to the robot companions",
      "Dignity — the complaint is that the AI treats the resident in a way that infantilises or demeans her, failing to respect her as a person of inherent worth",
      "Accountability — no one person is responsible if the robot gives bad emotional advice"
    ],
    answer: 2,
    explanation: "The lecture introduces the dignity principle specifically with the example of elderly people given robot carers who feel 'treated as infants' or 'patronised.' Dignity requires that individuals be respected as beings of inherent value — not demeaned, infantilised, or reduced to the role of passive recipients. The family member's complaint maps directly onto this principle. This is distinct from safety (no injury is claimed) or inclusiveness (access is not the issue)."
  },
  {
    q: "A facial recognition AI is used to hire security guards. It performs with 98% accuracy for light-skinned applicants but only 79% for dark-skinned applicants, causing qualified dark-skinned candidates to be rejected at a higher rate. Which principle is MOST directly violated, and how is it different from the justice principle?",
    options: [
      "Sustainability — the system produces results that are not viable in the long term",
      "Accountability — the vendor should be held responsible for the accuracy gap",
      "Inclusiveness — the system excludes people from AI benefits based on race, a characteristic they should not be penalised for; this is distinct from justice, which concerns what people are owed after the fact, whereas inclusiveness concerns the design of the system itself",
      "Transparency — candidates are not told an AI is used in the hiring process"
    ],
    answer: 2,
    explanation: "Inclusiveness is the principle that says AI should not exclude people from benefits or decision-making based on characteristics like race, sex, or disability. It applies to the design of the system. Justice (specifically distributive justice) would apply when asking how to remedy the harm already done. The distinction matters: inclusiveness is a design-time principle; justice is an after-the-fact remedial principle. Both may be violated here, but inclusiveness is the most direct primary violation."
  },
  {
    q: "A major AI company announces it has achieved carbon neutrality for its data centres. Critics point out that this only covers its own direct emissions — not the emissions from manufacturing its chips, building infrastructure, or the energy used by end-users running its models. Which dimension of the sustainability principle does this dispute concern?",
    options: [
      "Social sustainability — AI is making workers redundant, which is unsustainable for communities",
      "Economic sustainability — the company cannot maintain carbon neutrality without raising prices",
      "Environmental sustainability and its scope — meeting present energy needs without compromising future generations requires accounting for the full lifecycle of emissions, not just those within the company's direct control",
      "Procedural justice — the company is not being transparent about its true environmental impact"
    ],
    answer: 2,
    explanation: "The lecture defines sustainability as 'meeting present needs without compromising the ability of future generations to meet their needs' — the classic definition. The dispute here is about the genuine scope of environmental sustainability: does it cover only what a company directly controls, or the full ecological footprint of an AI system's existence? The lecture also notes AI's environmental harm dimension (energy-intensive data centres, carbon emissions) as a key concern."
  },
  {
    q: "After a series of AI-related harms, a tech journalist asks: 'Who is responsible — the engineers who built it, the company that deployed it, or the executives who approved it?' The company's lawyers argue no one individual can be blamed because the system emerged from many independent decisions. What does the lecture call this phenomenon, and why is it ethically significant?",
    options: [
      "The dual use problem — the AI was used differently than intended, so responsibility is unclear",
      "Ethics washing — the company is using the complexity of AI development to avoid accountability",
      "The accountability gap — the distributed complexity of AI development makes it difficult or impossible to assign responsibility clearly, which means victims may have no one to hold accountable and no path to redress",
      "The qualification problem — similar to expert systems, the AI could not account for exceptions"
    ],
    answer: 2,
    explanation: "The accountability gap is the lecture's specific term for this structural problem. When engineers, data teams, deployment teams, and management each make independent decisions that collectively produce harm, no single party's actions are individually sufficient to cause the harm — so each can deflect responsibility. This is ethically significant because without accountability, the victim has no recourse. The lecture distinguishes this from ethics washing (A) which is about insincere ethical commitments, not structural complexity."
  },
  {
    q: "Which of the following scenarios would BEST demonstrate the solidarity principle in practice — as the lecture defines it?",
    options: [
      "A single developer refuses to work on a project she believes is unethical and resigns",
      "A company publishes a public statement condemning a competitor's unethical AI use",
      "Hundreds of thousands of users, academics, and civil society organisations coordinate a boycott of an AI platform after it agrees to supply autonomous weapons systems, creating enough financial pressure to force a policy reversal",
      "A government introduces legislation requiring AI companies to meet ethical standards"
    ],
    answer: 2,
    explanation: "The lecture's definition of solidarity is specifically about collective action amplifying the power that individuals lack alone. The Quit GPT example makes the mechanism explicit: one person stopping use of ChatGPT has no effect; millions coordinating does. Option A describes individual conscience. Option B describes corporate virtue signalling. Option D is regulation (hard law), not solidarity."
  },

  // ── PRINCIPLE CONFUSION PAIRS: TARGETED DISAMBIGUATION ───────────────────────

  {
    q: "A student confuses the principles of 'accountability' and 'contestability.' Which of the following correctly distinguishes them?",
    options: [
      "Accountability is about transparency; contestability is about responsibility",
      "Contestability is the right of affected individuals to challenge a decision made about them; accountability is the obligation of decision-makers to take responsibility for outcomes and provide mechanisms for redress",
      "They are synonyms — both mean that AI decisions must be explainable",
      "Accountability applies only to governments; contestability applies only to private companies"
    ],
    answer: 1,
    explanation: "These two principles address different questions. Contestability is from the perspective of the PERSON AFFECTED: 'Can I challenge this decision?' Accountability is from the perspective of the DECISION-MAKER: 'Are you taking responsibility and can you be held to account?' Robodebt violated both — people had no real appeal route (contestability) AND the government did not accept responsibility when errors emerged (accountability)."
  },
  {
    q: "A student is confused about whether a situation violates 'privacy' or 'transparency.' Fast Fresh's AI system secretly logs workers' toilet break durations and uses this data to lower their productivity scores. Which principle(s) are violated and why?",
    options: [
      "Privacy only — the workers' intimate data is being used without their knowledge",
      "Transparency only — the workers do not know the AI is being used in this way",
      "Both privacy AND transparency are violated: privacy because intimate behavioural data is collected and used without consent; transparency because workers do not know this data influences their scores or that the AI is monitoring them at this level of detail",
      "Neither — data collection in a workplace is always legitimate if stated in an employment contract"
    ],
    answer: 2,
    explanation: "Privacy and transparency can be violated simultaneously and by the same act. Privacy is violated when personal (and in this case intimate) data is collected and used without adequate consent or legitimate purpose. Transparency is violated when people do not know the AI is being used on them or how their data contributes to consequential decisions. The two are related but distinct: you can have transparency (I know the AI exists) without privacy protection (it still collects data you'd object to)."
  }

]);
