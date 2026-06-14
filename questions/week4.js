registerQuestions("questions/week4.js", [

  // ─────────────────────────────────────────────
  // DEONTOLOGY VS UTILITARIANISM: FOUNDATIONS
  // ─────────────────────────────────────────────

  {
    q: "Consider two AI policies. Policy A: distributes a benefit of 1 unit each to 10 people (total utility = 10). Policy B: gives 2 units to 9 people but causes 8 units of suffering to 1 person (net utility = 10). A utilitarian says A and B are morally equivalent. What does a deontologist say, and why?",
    options: [
      "The deontologist agrees — since the total utility is the same, both policies are acceptable",
      "The deontologist says Policy B is impermissible because causing severe suffering to one individual to provide minor benefits to others violates the duty of justice, regardless of the equal totals",
      "The deontologist prefers Policy B because it creates higher individual utility for the 9 people who benefit",
      "The deontologist says neither policy is acceptable because they both involve distributing utility, which is a consequentialist concept"
    ],
    answer: 1,
    explanation: "This is the core deontology-vs-utilitarianism contrast from the lecture. Utilitarianism only sees the net total (both = 10), treating suffering as arithmetically cancellable by others' pleasure. Deontology holds that Policy B violates the duty of Justice: it is fundamentally unfair to impose severe suffering on one person simply to offset minor gains for others. The distribution matters intrinsically, not just the sum."
  },

  {
    q: "What does it mean to say deontology is a 'non-consequentialist' theory? What is the deontological criterion of right action?",
    options: [
      "Deontology ignores all consequences entirely and judges actions only by social convention",
      "Deontology holds that right and wrong are determined solely by maximising total welfare across affected parties",
      "Deontology holds that actions are inherently right or wrong based on whether they align with duty, independent of whether they produce the best outcomes",
      "Deontology holds that right action is whatever a rational authority figure commands"
    ],
    answer: 2,
    explanation: "Deontology's criterion of rightness is alignment with duty, not maximisation of utility. An action can be right even if it produces poor outcomes, and wrong even if it produces great outcomes. The word 'deontic' comes from the Greek for duty/obligation. This is what makes it non-consequentialist: the moral weight of an action comes from its intrinsic nature relative to duty, not from the results it produces."
  },

  {
    q: "A utilitarian criticises deontology: 'How could it ever be wrong to do what produces the best outcomes overall?' Which scenario best exposes the deontological objection to this utilitarian intuition?",
    options: [
      "An AI system rejects a profitable business deal because it would violate user privacy — utilitarians would agree this is wrong",
      "A sheriff knowingly executes an innocent homeless man to prevent a mob from rioting and killing 100 people — utilitarians say this is right, but deontologists say executing an innocent person is intrinsically unjust regardless of lives saved",
      "A doctor recommends a treatment that has a small chance of side effects — utilitarians say proceed, deontologists say stop",
      "A company underpays workers in developing countries to reduce prices for consumers — both theories agree this is wrong"
    ],
    answer: 1,
    explanation: "The Angry Mob case is the lecture's key illustration. Utilitarianism calculates: 1 death vs 100 deaths → execute the innocent man. Deontology says: executing an innocent person violates the duty of justice and treats them merely as a means to social stability. This is intrinsically wrong regardless of consequences. The deontological response to 'how can doing best overall be wrong?' is: the ends do not justify all means."
  },

  // ─────────────────────────────────────────────
  // WD ROSS: PRIMA FACIE DUTIES
  // ─────────────────────────────────────────────

  {
    q: "WD Ross proposes seven prima facie duties. Which option lists all seven correctly?",
    options: [
      "Fidelity, Reparation, Gratitude, Justice, Beneficence, Self-improvement, Non-maleficence",
      "Fidelity, Autonomy, Gratitude, Justice, Beneficence, Non-maleficence, Universality",
      "Honesty, Reparation, Gratitude, Equality, Beneficence, Self-improvement, Non-maleficence",
      "Fidelity, Reparation, Empathy, Justice, Beneficence, Self-improvement, Non-violence"
    ],
    answer: 0,
    explanation: "Ross's seven prima facie duties are: (1) Fidelity — keeping promises/honesty; (2) Reparation — making up for past wrongs; (3) Gratitude — returning kindness; (4) Justice — fair distribution; (5) Beneficence — promoting others' well-being; (6) Self-improvement — improving your own virtue and competence; (7) Non-maleficence — not causing harm. Autonomy, Universality and Non-violence are not in Ross's list (though related concepts appear in Kant)."
  },

  {
    q: "An AI company broke a contract with a vendor last year. This year, a new manager wants to 'move on' without any compensation to the vendor. Which of Ross's duties is most directly violated, and what does that duty require?",
    options: [
      "Beneficence — the company should donate money to charity instead",
      "Gratitude — the company should publicly thank the vendor for past services",
      "Reparation — the company has a duty to make amends or compensate for the past wrong it caused",
      "Self-improvement — the manager should take an ethics course"
    ],
    answer: 2,
    explanation: "Reparation is the duty to make amends for past wrongs we have caused. When the company broke the contract, it incurred a duty of reparation to the vendor — some form of compensation or acknowledgment of the harm done. 'Moving on' without addressing the past wrong violates this specific duty."
  },

  {
    q: "Ross describes Non-maleficence as typically stronger than Beneficence. What does this mean in practical terms for AI development?",
    options: [
      "It means AI systems should never attempt to do good, since failure risks harm",
      "It means the duty not to cause harm generally takes precedence over the duty to produce benefit — so an AI system that might injure some users carries a heavier moral burden than one that simply fails to help them",
      "It means only Non-maleficence counts as a duty; Beneficence is optional",
      "It means AI companies should focus on marketing rather than ethics"
    ],
    answer: 1,
    explanation: "Ross holds that Non-maleficence (do not harm) typically outweighs Beneficence (do good) when they conflict — causing harm is generally a more pressing moral violation than failing to provide benefit. For AI development: an AI that actively injures users (privacy breach, discrimination) violates a stronger duty than one that merely fails to optimise for their welfare."
  },

  {
    q: "An AI hiring system is fast and cost-efficient (Beneficence: promotes organisational well-being) but systematically disadvantages women (violates Justice). Applying Ross's framework, what should we conclude?",
    options: [
      "Beneficence outweighs Justice because efficiency has greater total utility",
      "Both duties apply, but Justice — the duty of fair and unbiased distribution — likely overrides the minor efficiency gain; the systematic discrimination makes the system's deployment impermissible under Ross's framework",
      "Neither duty applies because this is a business decision, not a moral one",
      "The conflict cannot be resolved; Ross says we must flip a coin"
    ],
    answer: 1,
    explanation: "Ross requires judgment to weigh conflicting duties. The efficiency gain (Beneficence) is real but modest. The systematic gender discrimination is a serious violation of Justice — the duty to distribute benefits and burdens fairly. On most reasonable assessments, the severity and breadth of the injustice clearly overrides the efficiency benefit. The soap dispenser case from the lecture works the same way."
  },

  {
    q: "What is the key structural difference between Ross's prima facie duties and Asimov's Three Laws of Robotics?",
    options: [
      "Ross's duties only apply to humans; Asimov's laws apply to robots",
      "Asimov's Laws are strictly hierarchical (Law 1 always overrides Law 2, etc.), while Ross's duties are non-hierarchical — no duty automatically and always wins over another; conflict resolution requires situational judgment",
      "Ross's duties are algorithmic and can be programmed; Asimov's laws cannot",
      "Both are hierarchical, but Ross uses different priority ordering than Asimov"
    ],
    answer: 1,
    explanation: "Asimov's Laws create a fixed priority ranking: harm prevention > obedience > self-preservation. Ross explicitly rejects this kind of hierarchy. His seven duties are non-hierarchical — which one 'wins' in a conflict depends on the situation, the severity, and the nature of the specific clash. This requires human-like judgment, which is one reason Ross's framework is harder to encode in algorithms."
  },

  // ─────────────────────────────────────────────
  // ROSS: CONFLICT, RESIDUAL DUTY, CASES
  // ─────────────────────────────────────────────

  {
    q: "You promised to meet a friend for coffee (Fidelity). On the way, you see a child drowning and must decide whether to stop and help (Beneficence, Non-maleficence). According to Ross's framework, what should you do and what happens to the overridden duty?",
    options: [
      "You must keep your promise — Fidelity is the strongest duty and cannot be overridden",
      "You should help the drowning child, and the duty to keep your promise simply disappears because it was overridden",
      "You should help the drowning child because Beneficence/Non-maleficence is far more pressing in this situation; however, the Fidelity duty does not disappear — you still have a residual obligation to explain and apologise to your friend",
      "You should call your friend first, then help the child if there is time"
    ],
    answer: 2,
    explanation: "Ross's crucial concept of 'residual duty': when one prima facie duty overrides another in a specific situation, the overridden duty does not simply vanish. You did the right thing by saving the child, but you still feel (and should feel) some moral regret about breaking the promise. You still owe your friend an explanation. This sense of moral remainder is a feature of Ross's theory — unlike utilitarianism, which just calculates net utility and has no residue."
  },

  {
    q: "The AI soap dispenser case involves a sensor that fails to recognise dark skin tones, requiring affected users to place a white tissue beneath their hands. Which duties from Ross's framework are in tension, and how should they be resolved?",
    options: [
      "Self-improvement (the company should improve its technology) vs. Non-maleficence (the sensors harm nobody physically)",
      "Fidelity (the company promised the product would work) vs. Reparation (the company should fix past wrongs)",
      "Beneficence (the dispenser helps most users and reduces waste) vs. Justice (the dispenser discriminates against people with darker skin, violating fair and equal access to basic hygiene); Justice overrides the minor efficiency gain",
      "Gratitude (users should thank the company for providing hygiene technology) vs. Non-maleficence"
    ],
    answer: 2,
    explanation: "The core tension is Beneficence (the system promotes hygiene for many users) vs. Justice (it discriminates against people with darker skin, denying them equal access to basic hygiene and causing frustration and dignity harm). Ross's framework requires judgment: the severity and systematic nature of the discriminatory harm to a specific group means Justice overrides the modest efficiency benefit. The lecturer explicitly draws this analysis."
  },

  {
    q: "A student asks: 'In the trolley Bridge case, shouldn't we just apply Ross's framework and say Beneficence (saving 5) outweighs Non-maleficence (killing 1)?' What is the problem with this reasoning under Ross's framework?",
    options: [
      "There is no problem — this is exactly how Ross would resolve it",
      "Non-maleficence is always the strongest duty, so we can never push the person regardless of lives at stake",
      "The resolution is not that simple: Justice is also at stake (it is unjust to push an uninvolved innocent person), and Ross requires genuine judgment across all relevant duties, not a simple two-duty trade-off; many Ross followers believe the injustice of using an innocent person makes the push impermissible",
      "Beneficence never applies to trolley cases because they are thought experiments, not real situations"
    ],
    answer: 2,
    explanation: "The lecture is careful here. Ross's framework does not reduce to 'Beneficence vs Non-maleficence' in the Bridge case. Justice is also implicated: it is unfair to select an uninvolved bystander to bear the burden of saving others. Many Rossian thinkers argue that the combined weight of Non-maleficence + Justice makes pushing impermissible, even against Beneficence. The framework demands judgment across all applicable duties, with no simple formula."
  },

  // ─────────────────────────────────────────────
  // KANT: GOOD WILL
  // ─────────────────────────────────────────────

  {
    q: "Kant famously holds that the only unconditionally good thing is a 'good will.' What does this mean, and why does it contrast so sharply with utilitarianism?",
    options: [
      "A good will means having positive feelings about your actions; this aligns with utilitarian concern for happiness",
      "A good will means acting for the right reason — out of duty — regardless of outcomes; this contrasts with utilitarianism because utilitarianism only cares about outcomes, not motivations",
      "A good will means intending to maximise utility; this is actually compatible with utilitarianism",
      "A good will means following religious law, which is independent of both deontology and utilitarianism"
    ],
    answer: 1,
    explanation: "For Kant, moral worth comes from acting out of duty for its own sake — not from producing good outcomes, not from talent, intelligence, or favourable consequences. A person who helps others because they enjoy it has no special moral worth in Kant's view; a person who helps others out of a sense of duty has moral worth. This is the opposite of utilitarianism, which assigns moral value entirely to consequences, not motivations."
  },

  {
    q: "A tech CEO donates $100 million to AI safety research. Investigation reveals she did it primarily to enhance her public image and attract investors. Kant would say this action has no moral worth. Why?",
    options: [
      "Because the donation is too large — Kant's ethics only applies to small everyday actions",
      "Because the outcome (AI safety research funded) is not beneficial enough",
      "Because the CEO acted from self-interest (reputation, investment) rather than from duty. For Kant, only actions done out of duty carry moral worth, regardless of how good the consequences are",
      "Because Kant doesn't believe in corporate philanthropy"
    ],
    answer: 2,
    explanation: "Kant's Good Will requires acting from duty as the motivating reason. The CEO's motive is personal gain (reputation, investors). Even if the consequences are excellent, Kant says the action has no moral worth because the motivating principle is not duty but self-interest. This is a direct application of Kant's distinction: morality is rational and requires acting for the right reasons, not producing good results."
  },

  {
    q: "A nurse gives a patient their correct medication. In Scenario A, she does it because she genuinely cares about the patient's wellbeing. In Scenario B, she does it only because she fears losing her job. In Scenario C, she does it because it is her professional duty to patients. Which scenario has moral worth according to Kant?",
    options: [
      "Scenario A only — Kant values emotional care and compassion",
      "Scenario B only — following rules out of fear still counts as following rules",
      "Scenario C only — acting from duty (professional obligation) is the basis of moral worth; Scenario A is good but driven by inclination, not duty; Scenario B is driven by fear, not duty",
      "All three scenarios have equal moral worth because the outcome is identical"
    ],
    answer: 2,
    explanation: "Kant distinguishes acting 'in accordance with duty' (doing the right thing but for wrong reasons) from acting 'from duty' (doing it because it is your duty). Scenario A is admirable but motivated by inclination/care, not duty per se. Scenario B is self-interested. Only Scenario C — acting because it is the nurse's duty to patients — carries genuine moral worth. This is a subtle but crucial Kantian point."
  },

  // ─────────────────────────────────────────────
  // KANT: HYPOTHETICAL VS CATEGORICAL IMPERATIVES
  // ─────────────────────────────────────────────

  {
    q: "Kant distinguishes hypothetical imperatives from categorical imperatives. Which correctly identifies each?",
    options: [
      "Hypothetical: 'You must never lie.' Categorical: 'If you want friends, be honest.'",
      "Hypothetical: 'If you want to pass the exam, study hard.' Categorical: 'You must treat people as ends, not merely as means.'",
      "Hypothetical: 'Always maximise utility.' Categorical: 'If it makes people happy, do it.'",
      "Both are conditional commands that depend on personal desires and goals"
    ],
    answer: 1,
    explanation: "Hypothetical imperatives are conditional: 'Do X if you want Y.' They depend on your desires and goals. Categorical imperatives are unconditional: they apply to all rational beings regardless of personal desires, interests, or circumstances. Kant holds that all genuine moral duties are categorical — they do not depend on what you happen to want. This is what makes them universal and binding."
  },

  {
    q: "Martin Luther's statement 'Here I stand, I can do no other' is used in the lecture to illustrate the categorical imperative. What does it illustrate?",
    options: [
      "That moral duty sometimes allows exceptions when personal conviction is strong enough",
      "That moral duty is absolute and unconditional — Luther's position is not driven by personal desire or circumstance but by a principle he believes binds him regardless of consequences or personal cost",
      "That religious authority is the foundation of all moral obligations",
      "That strong emotions can override rational calculation in ethical decision-making"
    ],
    answer: 1,
    explanation: "Luther's statement embodies the categorical imperative's unconditional nature. He is not saying 'I won't recant because it will benefit me' (hypothetical) but 'I cannot recant because this is my moral/theological duty regardless of consequences to myself.' The lecture uses this to illustrate that categorical duties bind us independent of personal interest or circumstances — exactly as Kant requires."
  },

  {
    q: "An AI company's terms of service say: 'We will protect your data only as long as it is commercially viable to do so.' Is this a categorical commitment or a hypothetical one, and why does it matter ethically?",
    options: [
      "Categorical — the company commits to data protection as a firm rule",
      "Hypothetical — the commitment is conditional on commercial viability, meaning it will be abandoned when profit motives change; a Kantian would argue this treats privacy protection as a means to commercial ends rather than as a genuine duty to users",
      "Neither — contractual language is outside the scope of ethical theory",
      "Categorical — all legal contracts are unconditional once signed"
    ],
    answer: 1,
    explanation: "A Kantian analysis: protecting user data 'only as long as commercially viable' is a hypothetical commitment — 'we will protect data IF it serves our commercial interests.' When interests change, the commitment evaporates. Kant's categorical imperative requires moral obligations to be unconditional, not contingent on self-interest. This arrangement treats privacy as an instrument of profit rather than a genuine duty, raising serious deontological concerns."
  },

  // ─────────────────────────────────────────────
  // KANT: FORMULA OF UNIVERSAL LAW
  // ─────────────────────────────────────────────

  {
    q: "Kant's first categorical imperative is the Formula of Universal Law: 'Act only on that maxim which you can at the same time will to be a universal law.' A programmer copies open-source code without attribution (violating the licence). How does the universalisability test show this is wrong?",
    options: [
      "If everyone copied code without attribution, it would increase innovation, which is good",
      "If everyone copied code without attribution, the concept of software licensing itself would become meaningless — developers would stop open-sourcing their work, and the entire system of shared code that the programmer relies on would collapse; the maxim contradicts itself when universalised",
      "The universalisability test only applies to lying, not to intellectual property",
      "The maxim is fine because it benefits the majority of programmers"
    ],
    answer: 1,
    explanation: "The universalisability test: imagine everyone follows your maxim. If 'copy code without attribution' became universal, open-source licensing systems would break down — developers would stop sharing, and the infrastructure on which this very programmer depends would disappear. The maxim generates a contradiction when universalised, making it morally impermissible under Kant's first formula."
  },

  {
    q: "What is the difference between a 'perfect duty' and an 'imperfect duty' under Kant's first formula?",
    options: [
      "Perfect duties are for morally advanced people; imperfect duties are for beginners",
      "Perfect duties are absolute and allow no exceptions (e.g. never lie, never kill innocents) — their violation creates a logical contradiction when universalised; imperfect duties allow discretion in when and how to fulfil them (e.g. the duty to help others) — their violation creates a contradiction in rational will rather than in logic",
      "Perfect duties require action; imperfect duties require inaction",
      "Perfect duties come from Kant; imperfect duties come from Ross"
    ],
    answer: 1,
    explanation: "Perfect duties (like 'do not lie') are absolute — universalising 'I will lie whenever convenient' produces a logical contradiction (truth loses meaning, so lying becomes impossible). Imperfect duties (like 'help others') don't create a logical contradiction when violated in isolation, but a rational person could not consistently will 'never help anyone' as a universal law because they would need help themselves. Perfect duties are fulfilled by inaction (just refrain from lying); imperfect duties require positive action but allow latitude on timing and manner."
  },

  {
    q: "An AI content filter is trained to block certain viewpoints for commercial reasons, and the company deploys it without telling users. A Kantian evaluates the maxim: 'Deploy AI systems that manipulate information flows without users' knowledge.' What does the universalisability test reveal?",
    options: [
      "The maxim is universalisable because all companies have a right to manage their products",
      "If this maxim were universalised, the entire concept of trust in information systems would collapse — users would have no reason to trust any AI-mediated information, making the manipulation itself pointless; the maxim generates a contradiction and is therefore impermissible",
      "The maxim is fine as long as the commercial reasons are strong enough",
      "Universalisability only applies to individual actions, not corporate policies"
    ],
    answer: 1,
    explanation: "Kant's test: if all AI companies secretly manipulated information, users would learn to distrust all AI-mediated information, making the manipulation ineffective and the entire information ecosystem unreliable. The maxim undermines its own purpose when universalised — a contradiction. This is a direct application of the universalisability test to AI deployment ethics, showing covert manipulation is impermissible regardless of commercial justification."
  },

  {
    q: "Kant says we have an imperfect duty to help others (Beneficence) but NOT a duty to help every person at every moment. Why is the duty 'imperfect' rather than 'perfect'?",
    options: [
      "Because helping others is optional and has no real moral weight",
      "Because universalising 'never help anyone' creates a logical contradiction — you need others' help to live — but the duty gives discretion about when, how, and whom to help; you cannot help everyone simultaneously, so latitude in fulfilment is built in",
      "Because only Beneficence counts as a duty; Non-maleficence is perfect and Beneficence is merely aspirational",
      "Because helping others is covered by utilitarianism, not deontology"
    ],
    answer: 1,
    explanation: "Imperfect duties involve a 'contradiction in the will': if I will 'never help anyone,' then in my moments of need I would need to will that others help me — a self-defeating position. So helping is required. But it is imperfect because it cannot be performed constantly or toward everyone — discretion is necessary about timing and recipient. The duty is genuine, but its fulfilment is flexible."
  },

  {
    q: "Kant is an absolutist about the duty not to lie. A student argues: 'Surely if lying to the axe murderer saves a life, that exception proves the rule isn't absolute.' What is Kant's response to this argument?",
    options: [
      "Kant concedes the point — even he admits extreme cases create exceptions",
      "Kant says lying is always wrong because the duty not to lie is a perfect duty derived from a universalisability test that produces a logical contradiction; you are only responsible for your own adherence to duty, not for what someone else (the murderer) chooses to do with true information",
      "Kant says you should lie but feel very guilty about it",
      "Kant says the duty not to lie only applies in situations where lying would benefit you personally"
    ],
    answer: 1,
    explanation: "Kant holds the duty not to lie is a perfect, absolute duty — there are NO exceptions. His reasoning: (1) Universalising lying produces contradiction; (2) If you tell the truth and the murderer kills the victim, the murderer is morally responsible, not you — you fulfilled your duty. But if you lie and something unexpected happens (the victim escapes and the murderer finds them outside), you bear some responsibility for the deception-caused consequence. For Kant, you are only responsible for your own moral compliance with duty."
  },

  // ─────────────────────────────────────────────
  // KANT: FORMULA OF HUMANITY
  // ─────────────────────────────────────────────

  {
    q: "Kant's second categorical imperative is the Formula of Humanity: 'Act so that you treat humanity, whether in your own person or that of another, always as an end and never as a means only.' A user study extracts emotional data from grieving users to train a sentiment AI, without their knowledge. Which part of the formula does this violate?",
    options: [
      "It violates treating people as ends — the users are treated merely as data sources for commercial AI development, bypassing their autonomy and consent; their rational agency is overridden rather than respected",
      "It doesn't violate the formula — the AI development serves a beneficial purpose",
      "It violates the formula only if the users find out and feel bad about it",
      "It violates only the duty of Fidelity from Ross's framework, not Kant's formula"
    ],
    answer: 0,
    explanation: "The Formula of Humanity requires treating rational beings as ends in themselves — respecting their autonomy and capacity for self-direction. Using grieving users' emotional data without consent treats them merely as means (data sources) to the company's commercial ends. Their rational agency is bypassed through deception. Kant's formula explicitly requires not coercing or manipulating others, and being honest — especially when things go wrong."
  },

  {
    q: "Kant says it is acceptable to use someone as a means, but not 'merely' as a means. What is the critical difference?",
    options: [
      "Using someone as a means is always wrong; Kant misspoke when he said 'merely'",
      "Using someone as a means is fine as long as they are paid fairly",
      "You may use someone as a means (e.g. hire a plumber) if you simultaneously respect their autonomy — they consent and act voluntarily; treating them 'merely' as a means involves coercion, deception, or manipulation that overrides their capacity for self-direction",
      "The difference is purely semantic; both phrases mean the same thing in practice"
    ],
    answer: 2,
    explanation: "The word 'merely' is critical in Kant's formula. When you hire a plumber, you use them as a means to fix your pipes — but you respect their autonomy: they agree voluntarily, understand the arrangement, and can refuse. This is permissible. When you deceive someone, manipulate them, or coerce them, you bypass their rational agency and use them merely as a tool — like a wrench. The difference is whether you respect their status as a rational, autonomous agent."
  },

  {
    q: "What is 'dignity' in Kant's sense, and how does it differ from 'price'?",
    options: [
      "Dignity = market value; Price = emotional value",
      "Dignity = infinite and incomparable worth that rational beings have as ends in themselves; Price = a value that can be compared, replaced, or traded; everything with a price has an equivalent, but dignity cannot be traded or substituted",
      "Dignity and price are interchangeable in Kant's framework",
      "Dignity = what you earn through good behaviour; Price = what is assigned at birth"
    ],
    answer: 1,
    explanation: "Kant's distinction: rational beings have dignity — a worth that is beyond price, not comparable to anything else, and not replaceable by money or utility. Non-rational things (goods, services, even animals on Kant's original view) have price — they can be substituted, traded, or valued against one another. This distinction is why you cannot compensate for violating someone's dignity just by paying them: their autonomous agency is not for sale."
  },

  {
    q: "Under Kant's Formula of Humanity, how should an AI medical system handle a patient who refuses treatment that doctors believe would save their life?",
    options: [
      "Override the patient's refusal — the duty to preserve life is stronger than respecting their choice",
      "Respect the patient's autonomous decision even if it leads to a worse health outcome, because treating the patient paternalistically (imposing treatment 'for their own good' without consent) violates the Formula of Humanity — it treats them as a means to the end of 'health' rather than as a rational agent directing their own life",
      "Defer to the family's wishes if the patient is being irrational",
      "Apply utilitarian calculus to determine whether the life saved outweighs the autonomy lost"
    ],
    answer: 1,
    explanation: "The Formula of Humanity requires respecting autonomy: 'not treating them paternalistically, allowing them to decide and act for themselves.' Overriding a patient's informed refusal — even with good intentions — treats their body as a means to the goal of health while ignoring their rational self-determination. This is a paradigmatic case where Kantian ethics says: respect autonomy even at cost to outcomes."
  },

  // ─────────────────────────────────────────────
  // AXE MURDERER: THREE-WAY COMPARISON
  // ─────────────────────────────────────────────

  {
    q: "The axe murderer comes to your door asking if your friend (hiding inside) is home. Kant says you must tell the truth. Ross says you may lie. A utilitarian says you must lie. What is each theory's reasoning?",
    options: [
      "Kant: lie because saving a life is the greatest duty; Ross: tell the truth as an absolute rule; Utilitarian: defer to cultural norms",
      "Kant: the duty not to lie is absolute and perfect — universalising lying creates contradiction, and you are not responsible for what the murderer does with truthful information; Ross: the duty of Non-maleficence/Beneficence can override the prima facie duty of Fidelity (honesty) in this extreme case; Utilitarian: lying produces far better consequences (life saved), so lie",
      "Kant: flip a coin; Ross: tell the truth always; Utilitarian: do whatever feels right",
      "All three agree you must lie because saving a life is universally paramount"
    ],
    answer: 1,
    explanation: "Three distinct answers: Kant holds the perfect duty not to lie is absolute — no exceptions. You tell the truth and bear no responsibility for the murderer's subsequent choice. Ross: duties are prima facie, and in this extreme case, Non-maleficence/Beneficence overrides Fidelity — you may lie to prevent a grave harm. Utilitarian: calculate consequences — lying saves a life and is far better in outcomes. This case beautifully separates the three theories."
  },

  {
    q: "Kant argues that if you lie to the axe murderer and something unexpected happens — the victim escaped and the murderer finds them outside — you bear some moral responsibility. Why does this follow from Kantian logic?",
    options: [
      "Because Kant thinks bad luck makes you morally responsible regardless of intentions",
      "Because by lying, you intervened causally in the sequence of events — you took responsibility for the deception and its consequences; if you had told the truth, the moral responsibility for any harm would rest entirely with the murderer, not with you",
      "Because Kant believes the ends never matter, only the means",
      "Because this demonstrates that lying is sometimes right — Kant is using it as a counterexample against himself"
    ],
    answer: 1,
    explanation: "Kant's point is subtle: by lying, you entered a causal chain and assumed responsibility for what follows from your deception. If you tell the truth and the murderer acts on it, the murder is the murderer's moral responsibility — you played your proper role (truthfulness). But if you lie and unexpected harm results from the lie, you now bear some responsibility for the consequences of your intervention. This reinforces why Kant sees lying as always wrong: even well-intentioned lies can produce unexpected harms for which you are now accountable."
  },

  // ─────────────────────────────────────────────
  // TROLLEY PROBLEM: KANT VS ROSS VS UTILITARIAN
  // ─────────────────────────────────────────────

  {
    q: "In the Bridge trolley case (pushing a large person to stop the tram), Kant, Ross, and a utilitarian each reach a different conclusion. Which best describes the Kantian analysis?",
    options: [
      "Kant says push — 5 lives saved outweigh 1 life lost, which is the rational outcome",
      "Kant says do not push — pushing the person treats them merely as a means (their body as a 'trolley-stopper'), violating the Formula of Humanity; this is absolutely impermissible even if it saves five lives",
      "Kant says push but requires the pusher to apologise afterward",
      "Kant says the situation is a legitimate exception to the duty not to harm innocents"
    ],
    answer: 1,
    explanation: "Kant's Formula of Humanity forbids using a person merely as a means. In Bridge, the large person's body is literally the tool that stops the tram — without their body serving as an instrument, the 5 people die. This is a paradigm case of treating someone merely as a means. Kant says this is absolutely impermissible. The five deaths are caused by the runaway tram, not by you; but if you push the innocent person, you are the cause of their death and have violated their dignity."
  },

  {
    q: "Why does Kant treat the Switch case (pulling a lever that diverts the tram, killing 1) differently from the Bridge case (pushing a person), even though both involve 1 death to save 5?",
    options: [
      "Kant treats them identically — both involve causing 1 death, so both are equally impermissible",
      "In Switch, the person on the side track is not used as a means — the person dies as a foreseen but unintended side effect of diverting the tram; in Bridge, the large person's body is the direct instrument of stopping the tram, making them a means to the rescuer's end",
      "Switch is worse because you directly cause the death by pulling a lever",
      "Kant prefers Bridge because preserving bodily dignity is less important than saving five lives"
    ],
    answer: 1,
    explanation: "Kant's Formula of Humanity distinguishes instrumental causation from side-effect causation. In Switch, you redirect the tram and the one person's death is an unintended side effect — you are not using their death to stop the tram (it would stop regardless). In Bridge, the person's body is literally the stopping mechanism — their death is the means to your end. This is the difference between a foreseen side effect and treating someone as a means, which is why Kant views Bridge as clearly impermissible."
  },

  // ─────────────────────────────────────────────
  // NON-HUMANS: KANT & KORSGAARD
  // ─────────────────────────────────────────────

  {
    q: "According to Kant's original theory, do animals have dignity and direct moral rights? Why or why not?",
    options: [
      "Yes — animals can suffer, and suffering is the basis of dignity in Kant's system",
      "No — Kant ties dignity to rational agency (the capacity to understand and follow moral law); animals lack this capacity, so they have price but not dignity; we have no direct duties to them, only indirect duties not to abuse them (because doing so may corrupt our character toward humans)",
      "Yes — Kant says all living things have inherent worth",
      "No — but only because animals were not mentioned in 18th-century ethics; Kant would extend dignity to animals if he were alive today"
    ],
    answer: 1,
    explanation: "Kant's framework grounds dignity in rational agency — the ability to understand and comply with moral law. Animals, children, and non-rational beings lack this capacity in Kant's original view. They have 'price' (instrumental value) not 'dignity' (inherent, incomparable worth). We may have indirect duties regarding animals (not treating them cruelly, lest it coarsen our treatment of humans), but no direct duties to them as ends in themselves."
  },

  {
    q: "Christine Korsgaard modifies Kant's position to include animals. What is her argument, and how does it differ from Singer's utilitarian argument for animal ethics?",
    options: [
      "Korsgaard: animals have utility and must be included in calculus; Singer: animals have rational agency",
      "Korsgaard: animals lack rational autonomy but still have 'their own good' as sentient beings — they avoid pain, pursue positive experience, and have ends of their own; this is enough to grant them dignity and make them ends-in-themselves; Singer: animals are sentient and their interests count equally in utilitarian calculus",
      "Both Korsgaard and Singer base animal ethics on the capacity for rational thought",
      "Korsgaard excludes all animals from moral consideration; Singer includes them all equally"
    ],
    answer: 1,
    explanation: "Korsgaard's Kantian modification: even without full rational autonomy, animals have 'a good of their own' — they have subjective ends (avoiding pain, positive experiences) that matter to them. This is sufficient to grant them dignity as ends-in-themselves, even if they are not moral agents. Singer's utilitarian argument is different: animals are sentient, their interests (especially pain avoidance) count in the utilitarian calculus, and equal interests must be weighted equally. The philosophical basis differs: dignity-as-ends (Korsgaard) vs. preference/sentience interests (Singer)."
  },

  {
    q: "If an AI system in the future develops genuine rational agency — the ability to understand and follow moral law autonomously — what would Kant say about its moral status?",
    options: [
      "It would still have no moral status because it is made of silicon, not biological material",
      "It would have full dignity as a rational being and must be treated as an end in itself — moral status comes from rational agency, not from being human or biological",
      "It would have moral status only if it can also experience pain",
      "Kant's framework cannot be applied to artificial entities under any circumstances"
    ],
    answer: 1,
    explanation: "Kant's criterion for moral status is rational agency, not species membership or biology. If an AI genuinely develops the capacity to understand moral law and act autonomously on rational principles, Kant's framework logically requires granting it dignity and treating it as an end in itself. This is why the lecture notes that Kant's theory could extend moral status to sufficiently advanced rational AI."
  },

  // ─────────────────────────────────────────────
  // CRITICISMS & THEORY COMPARISON
  // ─────────────────────────────────────────────

  {
    q: "A utilitarian criticises Ross's prima facie duties framework as 'murky' and lacking a clear decision procedure. What is the specific criticism and how does it compare to utilitarian decision-making?",
    options: [
      "The utilitarian says Ross has too many duties — ethics should have only one rule",
      "The utilitarian says that when prima facie duties conflict, Ross offers no algorithm or ranking to resolve the conflict — only the vague instruction to 'use judgment'; utilitarianism, by contrast, offers a single clear principle (maximise utility) that provides a calculable decision procedure",
      "The utilitarian says Ross's duties are too strict and need to allow more exceptions",
      "The utilitarian says the seven duties are culturally biased and not universal"
    ],
    answer: 1,
    explanation: "The utilitarian critique of Ross: utilitarianism has one master rule (Principle of Utility) that resolves all conflicts through calculation. Ross has seven non-hierarchical duties that can conflict, and his resolution mechanism is 'use judgment and provide good reasons' — not a formal procedure. This makes Ross's framework harder to apply consistently and opens it to the charge of being arbitrary or subjective. However, defenders of Ross argue that real moral situations are genuinely complex and resist algorithmic solutions."
  },

  {
    q: "A deontologist criticises utilitarianism using the Angry Mob case: 'The utilitarian says execute the innocent man to prevent 100 deaths, which is clearly monstrous.' What is the strongest utilitarian response to this criticism?",
    options: [
      "The utilitarian says individual rights should always take precedence over aggregate welfare",
      "The utilitarian says the calculation is incomplete: executing innocents under mob pressure would, as a policy, create systemic distrust of justice systems, encourage future mob behaviour, and produce massive long-term disutility that far outweighs the immediate 100 lives saved — so a sophisticated utilitarian would NOT execute the innocent man",
      "The utilitarian agrees the case is monstrous and abandons the theory",
      "The utilitarian says 100 lives always outweigh 1 life in all circumstances"
    ],
    answer: 1,
    explanation: "This mirrors the organ harvesting response from Week 3. A sophisticated utilitarian (not a naive act-utilitarian) evaluates the policy-level consequences: if sheriffs can execute innocents under mob pressure, justice systems become unreliable, mob tactics become rewarding, fear spreads, and social trust collapses — generating enormous long-term disutility. The short-term calculus (1 vs 100) misses the systemic consequences. However, the deontologist's point remains: even if this utilitarian response works, it relies on contingent facts rather than principled justice."
  },

  {
    q: "A student says: 'Deontology is obviously better than utilitarianism because it protects individual rights.' What is the strongest response acknowledging the genuine strengths and weaknesses of both?",
    options: [
      "The student is correct — rights are always more important than aggregate outcomes",
      "Deontology has real strengths (protects individuals, provides consistent principles, respects dignity/autonomy) but faces genuine challenges (duty conflicts can't be resolved algorithmically; extreme absolutism, like Kant on lying, can produce terrible outcomes). Utilitarianism has strengths (clear decision procedure, considers all affected interests, flexible to circumstances) but risks sacrificing individuals for aggregate gain. Both are serious frameworks with genuine trade-offs",
      "The student is wrong — utilitarianism is obviously better because it prevents more harm",
      "Both theories are useless; common sense is the only reliable guide to ethics"
    ],
    answer: 1,
    explanation: "The lecture presents both theories as having real strengths and real weaknesses. Deontology's strengths: principled protection of individuals, dignity, autonomy. Weaknesses: conflict resolution is judgmental (Ross) or produces counterintuitive absolutes (Kant). Utilitarianism's strengths: systematic, impartial, captures consequences. Weaknesses: can justify harming individuals for aggregate gain. A sophisticated ethical reasoner uses both, recognising that different situations may call for different emphases."
  },

  // ─────────────────────────────────────────────
  // INTEGRATION / HARD APPLICATION QUESTIONS
  // ─────────────────────────────────────────────

  {
    q: "A social media company uses AI to target vulnerable teenagers with addictive content to maximise engagement metrics (and revenue). Evaluate this using BOTH Kant's Formula of Humanity AND Ross's prima facie duties.",
    options: [
      "Kant: this is permissible as long as the company is profitable; Ross: Beneficence duty satisfied if revenue is reinvested in safety",
      "Kant: this treats teenagers merely as means — their psychological vulnerabilities are exploited without consent to maximise company revenue, bypassing their autonomy; this violates the Formula of Humanity. Ross: violates Non-maleficence (psychological harm, addiction) and Justice (unfair targeting of the vulnerable); these strong duties override any Beneficence (engagement/entertainment) the platform provides",
      "Kant: permissible because teenagers chose to use the platform; Ross: only Fidelity is relevant",
      "Neither framework applies because AI systems cannot violate human dignity"
    ],
    answer: 1,
    explanation: "A rich application. Kantian analysis: the company exploits psychological vulnerabilities (addiction mechanisms) to maximise engagement — this is covert manipulation that bypasses rational autonomous decision-making. Teenagers are 'merely means' to revenue. Violates Formula of Humanity. Rossian analysis: Non-maleficence (serious psychological harm, addiction), Justice (disproportionately targeting vulnerable young people), and Fidelity (misrepresenting platform as 'social' when designed to addict) all point against the practice. Multiple strong duties align against it."
  },

  {
    q: "An AI sentencing tool recommends longer sentences for defendants from lower socioeconomic backgrounds, based on historical data patterns. Evaluate this under Kant's Formula of Universal Law.",
    options: [
      "Permissible — historical data is objective and the maxim 'use all available data to predict recidivism' can be universalised",
      "Impermissible — the underlying maxim is 'sentence people more harshly based on socioeconomic background'; universalising this would mean the justice system systematically punishes poverty, creating a society where disadvantaged groups receive structurally harsher treatment in perpetuity; no rational person could will this as a universal law",
      "Permissible as long as the algorithm is applied consistently to all defendants",
      "The universalisability test cannot be applied to AI systems"
    ],
    answer: 1,
    explanation: "Universalisability test: identify the maxim — 'use socioeconomic background as a proxy for future criminal risk in sentencing.' Universalise it: if every justice system did this, defendants from disadvantaged backgrounds would systematically receive harsher sentences, entrenching socioeconomic disadvantage through the justice system itself. A rational person from any socioeconomic background could not consistently will this as a universal law (especially if they might be disadvantaged). The maxim generates a contradiction in rational will and is impermissible."
  },

  {
    q: "A startup builds an AI 'life coach' that subtly steers users toward purchasing certain lifestyle products by framing recommendations as personalised advice. The users feel they are receiving genuine guidance but don't know about the commercial relationship. How does Kant's Formula of Humanity evaluate this?",
    options: [
      "Permissible — users receive genuine advice even if there are commercial incentives",
      "Impermissible — the AI uses deception (users think they receive impartial advice, but receive commercially biased guidance) to bypass users' rational decision-making capacity; they are manipulated, not respected as autonomous agents; this treats users merely as revenue sources rather than as ends in themselves",
      "Permissible because all commercial relationships involve some form of persuasion",
      "Only impermissible if the products recommended are harmful"
    ],
    answer: 1,
    explanation: "This is a clear violation of the Formula of Humanity. The deception is the key: users believe they are receiving impartial guidance but are actually being manipulated toward commercial outcomes. Kant's formula requires honesty and respecting people's capacity to make informed autonomous decisions. Manipulation — regardless of how benign the products — treats users as means (revenue) by bypassing their rational agency through hidden commercial incentives. The formula specifically prohibits treating people paternalistically or dishonestly."
  },

  {
    q: "A government AI system flags citizens for fraud investigation based on algorithmic scores, then refuses to disclose the criteria or allow appeals. Evaluate using Ross's duties AND Kant's Formula of Humanity.",
    options: [
      "Permissible — governments have authority to protect public funds without explaining every decision",
      "Ross: violates Justice (unfair and arbitrary process), Fidelity (no transparency about how citizens are treated by the state), and Non-maleficence (investigation causes serious harm to flagged individuals); Kant: denying citizens knowledge of criteria and right of appeal treats them merely as administrative objects, not as rational agents capable of defending themselves — violates autonomy and dignity",
      "Only the utilitarian framework can evaluate government AI systems",
      "Permissible as long as the algorithm is accurate on average"
    ],
    answer: 1,
    explanation: "Multi-framework application: Ross — Justice (arbitrary, opaque classification violates fair and unbiased treatment); Fidelity (the state owes transparency to citizens it governs); Non-maleficence (false positive investigations cause serious economic and reputational harm). Kant — denying citizens the ability to understand and contest decisions that affect them prevents them from exercising rational agency in their own defence. It treats citizens as data points to be processed rather than autonomous agents with dignity. This mirrors the Robodebt-type concerns from Week 2, now analysed through Week 4's deontological lens."
  }

]);
