registerQuestions("questions/week3.js", [

  // ─────────────────────────────────────────────
  // TROLLEY PROBLEMS & MORAL INTUITION
  // ─────────────────────────────────────────────

  {
    q: "In the Switch trolley problem, most people feel it is acceptable to pull the lever and divert the tram, killing 1 to save 5. But in the Bridge problem, most people feel it is wrong to push a large person off a bridge to stop the tram and save the same 5. The numbers (1 vs 5) are identical in both cases. What does this divergence in intuition reveal?",
    options: [
      "People are generally inconsistent thinkers and cannot be trusted in ethical matters",
      "Human moral intuitions are sensitive to factors beyond just outcomes — such as whether you directly use someone's body as a means — and this inconsistency motivates the search for systematic ethical theory",
      "Pushing someone is always worse than pulling a lever because physical contact causes more harm",
      "The Bridge problem is wrong because saving 5 lives always outweighs killing 1, so intuition should always be overridden"
    ],
    answer: 1,
    explanation: "The lecturer uses Switch vs Bridge to show that human intuitions vary even when the arithmetic is the same. In Bridge, you use the person's body instrumentally to stop the trolley; in Switch, you merely redirect the trolley. This divergence reveals that intuitions are sensitive to something other than numbers — motivating the turn to systematic moral theories like utilitarianism that provide consistent criteria."
  },

  {
    q: "In the Loop trolley problem, pulling the lever sends the tram onto a loop track where it hits 1 person, whose body stops the tram from circling back to kill the 5. How does Loop relate to Bridge, and why did philosophers design it?",
    options: [
      "Loop is morally identical to Switch because you are pulling a lever in both cases",
      "Loop is designed to test whether the physical act of pushing (vs lever-pulling) is what makes Bridge feel wrong, by recreating the 'using a person as a means' structure in a lever-pull format",
      "Loop proves that utilitarianism is always correct because 5 > 1",
      "Loop is irrelevant because the outcome is the same as Switch"
    ],
    answer: 1,
    explanation: "Loop's cleverness is that you pull a lever (like Switch) but the 1 person's body is functionally used to stop the tram (like Bridge). It tests whether the wrongness of Bridge is about the push itself, or about using a person as a tool. Many people's intuitions shift inconsistently between Loop and Bridge despite the structural similarity — which is exactly the point philosophers designed it to expose."
  },

  {
    q: "The Moral Machine experiment applied trolley-problem logic to self-driving cars. What was one major finding that bears on using cultural intuitions as a basis for AI ethics?",
    options: [
      "All cultures agreed that cars should always protect passengers over pedestrians",
      "Cultural preferences were uniform worldwide, confirming that intuitions can serve as universal ethical guidelines",
      "Different cultures showed different preferences (e.g. some preferred protecting younger people, others older), suggesting intuitions vary by culture and cannot alone provide universal ethical standards",
      "The experiment found that most people wanted AI to have no ethical programming at all"
    ],
    answer: 2,
    explanation: "The Moral Machine revealed significant cross-cultural variation — for example, some cultures strongly preferred protecting younger people, others did the reverse. This undermines the idea that we can simply poll intuitions to get universal ethical rules for AI. It supports the lecturer's argument that we need systematic moral theories (like utilitarianism) rather than intuitions alone."
  },

  {
    q: "Why does the lecturer introduce trolley problems at the start of a lecture on utilitarianism, rather than just explaining the theory directly?",
    options: [
      "Trolley problems are required by the university curriculum for all AI courses",
      "To show that unguided intuitions can be inconsistent across cases with the same outcomes, demonstrating the need for a principled systematic method to determine right and wrong",
      "To prove that utilitarianism is correct by showing people already intuitively maximise utility",
      "To demonstrate that deontology and virtue ethics are inferior theories"
    ],
    answer: 1,
    explanation: "The trolley problems serve as a diagnostic tool. By showing that intuitions diverge (Switch vs Bridge) and can be manipulated (Loop), the lecturer demonstrates that intuition alone is an unreliable guide. This motivates the turn to systematic moral theory — specifically utilitarianism — which provides a consistent criterion rather than ad hoc gut reactions."
  },

  // ─────────────────────────────────────────────
  // CONSEQUENTIALISM BASICS
  // ─────────────────────────────────────────────

  {
    q: "Consequentialism holds that the rightness or wrongness of an action depends only on its consequences. Which of the following is explicitly NOT relevant to determining rightness under consequentialism?",
    options: [
      "The amount of pain the action causes to others",
      "Whether the action is performed or merely omitted (not performed)",
      "The intentions and motives of the person acting",
      "The probability that harmful consequences will actually occur"
    ],
    answer: 2,
    explanation: "Consequentialism explicitly says that intentions and motives are not intrinsically relevant to determining right or wrong. What matters is only the consequences — including the probability, magnitude, and duration of those consequences. Omissions (choosing not to act) are also included. A good intention that produces bad outcomes is still wrong; a bad intention that produces good outcomes may still be right."
  },

  {
    q: "Egoism and utilitarianism are both forms of consequentialism, yet they lead to very different moral conclusions. What is the key structural difference?",
    options: [
      "Egoism focuses on long-term consequences while utilitarianism focuses on short-term outcomes",
      "Egoism says each person should maximise their own interests only; utilitarianism is impartial and says everyone's interests count equally",
      "Utilitarianism applies only to humans while egoism can include animals",
      "Egoism requires calculating utility while utilitarianism relies on intuition"
    ],
    answer: 1,
    explanation: "Both theories are consequentialist — both say right action is determined by outcomes. The difference is whose outcomes count. Egoism says: maximise your own interests, period. Utilitarianism is impartial: your interests count, but so do everyone else's, and equally so. As Bentham put it: 'Everyone counts for one, and nobody for more than one.'"
  },

  {
    q: "A utilitarian is choosing between three courses of action: Option A produces some good consequences, Option B produces greater good consequences, Option C produces the greatest good consequences possible in that situation. Which action is right according to the Principle of Utility?",
    options: [
      "Option A, because doing any good is morally praiseworthy",
      "Option B, because it improves on the baseline without the risk of C",
      "Option C, and importantly, both A and B are wrong even though they produce good consequences",
      "All three are equally right because all produce positive utility"
    ],
    answer: 2,
    explanation: "This is a precise application of the Principle of Utility (POU): the action that produces the greatest utility is right; all other available actions are wrong — even if they produce some good. Option A and B are wrong not because they produce bad outcomes, but because C was available and produces more utility. Utilitarianism demands maximisation, not merely 'doing some good.'"
  },

  {
    q: "The lecturer says consequentialism is a 'teleological' theory, meaning the 'ends justify the means.' Under what condition does this apply, and what is the key implication for AI ethics?",
    options: [
      "The ends always justify the means, so harmful AI actions are permissible if they benefit the majority",
      "The ends justify the means only when the consequentialist calculation genuinely shows that the total utility of an action exceeds all alternatives — which requires accounting for all consequences, including long-term and indirect harms",
      "The ends justify the means only in thought experiments, never in real-world AI deployment",
      "Teleological means focusing on rules, so AI systems must follow rules regardless of outcomes"
    ],
    answer: 1,
    explanation: "Consequentialism says the ends justify the means, but this is conditional: the means are justified only if the full utilitarian calculus — including indirect, long-term, and probabilistic consequences — actually yields a net positive outcome. In AI ethics this means you can't just point to one benefit to justify a harmful AI system; you must account for all impacts on all affected parties."
  },

  // ─────────────────────────────────────────────
  // BENTHAM VS MILL
  // ─────────────────────────────────────────────

  {
    q: "Jeremy Bentham famously declared 'pushpin is as good as poetry.' What does this mean within his version of utilitarianism?",
    options: [
      "Pushpin (a children's game) is empirically proven to produce more happiness than poetry on average",
      "All types of pleasure are equal in kind — what matters is only the intensity and duration of the pleasure, not whether it is 'highbrow' or 'lowbrow'",
      "Intellectual pleasures should count more than simple pleasures because they are harder to achieve",
      "Bentham is arguing against elitism in education, not making a point about utilitarian calculation"
    ],
    answer: 1,
    explanation: "Bentham's hedonistic utilitarianism holds that pleasure is pleasure — its moral weight depends only on its intensity and duration, not its source or social prestige. If someone gets as much pleasure from a mindless game as from reading poetry, both are equally good on Bentham's view. This makes his theory anti-elitist but also, as Mill argued, somewhat crude."
  },

  {
    q: "John Stuart Mill disagreed with Bentham by distinguishing 'higher' and 'lower' pleasures. Which scenario correctly illustrates this distinction?",
    options: [
      "A student spends all night playing a mindless mobile game and gets enormous pleasure; Mill says this is equally good as the same amount of pleasure from philosophical study",
      "A student gets the same amount of pleasure from playing chess as from watching reality TV; Mill would say chess is better because it involves higher cognitive engagement",
      "A student gets intense, long-lasting pleasure from both poetry and gossip magazines; Mill says both count equally because duration and intensity are all that matter",
      "Mill's higher/lower pleasure distinction only applies to physical pain, not mental pleasure"
    ],
    answer: 1,
    explanation: "Mill distinguishes pleasures qualitatively, not just quantitatively. Intellectual, aesthetic, and moral pleasures are 'higher' and count for more even if the raw intensity is the same as a 'lower' pleasure. Chess (requiring skill and reasoning) would be a higher pleasure than passive entertainment on Mill's view, even if both produce the same subjective enjoyment. This is captured in his famous line: 'Better to be Socrates dissatisfied than a fool satisfied.'"
  },

  {
    q: "Mill's famous line is: 'It is better to be Socrates dissatisfied than a fool satisfied.' What does this mean, and how does it challenge Bentham?",
    options: [
      "Unhappiness is morally superior to happiness, so people should seek suffering",
      "The quality of the pleasure matters: even if Socrates experiences less pleasure than a contented fool, his pursuit of higher intellectual pleasures makes his life morally preferable — challenging Bentham's claim that only quantity of pleasure matters",
      "Dissatisfied people are more motivated and therefore more productive, which maximises utility overall",
      "This is a criticism of utilitarianism by Mill, showing he ultimately rejected the theory"
    ],
    answer: 1,
    explanation: "Mill remains a utilitarian but refines Bentham. He argues that pleasures differ in quality, not just quantity. Socrates pursuing intellectual truth, even if often dissatisfied, lives a better life than someone who experiences nothing but simple, mindless pleasure. This directly challenges Bentham's claim that all pleasures are equal — for Mill, higher pleasures outweigh lower ones even when intensity and duration are equivalent."
  },

  {
    q: "Bentham and Mill are both hedonistic utilitarians, but they differ on one key point. A lecturer assigns both poetry and video gaming to the same student and they report exactly equal pleasure from each activity. How would Bentham and Mill respectively evaluate these two sources of pleasure?",
    options: [
      "Bentham: poetry is better because it is more culturally valuable; Mill: both are equal",
      "Bentham: both are equal because pleasure is pleasure and they report the same level; Mill: poetry is the higher pleasure and thus morally preferable even at equal intensity",
      "Bentham: gaming is better because it is more accessible; Mill: poetry is better because it is harder",
      "Both Bentham and Mill would say they are equal because the reported pleasure levels are the same"
    ],
    answer: 1,
    explanation: "This is the precise Bentham vs Mill split. For Bentham, equal reported pleasure = equal moral value. For Mill, the kind of pleasure matters: poetry is a higher (intellectual/aesthetic) pleasure, video gaming (if mindless) is a lower pleasure, and even at equal intensity, poetry is morally preferable. This is a qualitative vs quantitative view of pleasure."
  },

  // ─────────────────────────────────────────────
  // PREFERENCE UTILITARIANISM
  // ─────────────────────────────────────────────

  {
    q: "Preference utilitarianism differs from hedonistic utilitarianism in how it defines 'utility.' What is utility in preference utilitarianism?",
    options: [
      "Utility = the absence of physical pain",
      "Utility = the satisfaction of preferences, desires, goals, and wishes — not necessarily pleasure as a feeling",
      "Utility = social welfare measured by GDP per capita",
      "Utility = the fulfilment of legal rights and entitlements"
    ],
    answer: 1,
    explanation: "In preference utilitarianism, happiness is not about feeling pleasure but about having your preferences, desires, and goals satisfied. Positive utility = satisfied preferences; negative utility = unsatisfied preferences. For example, if you strongly prefer to become a researcher and you succeed, that is positive utility — regardless of whether the work itself gives you sensory pleasure."
  },

  {
    q: "The Pleasure Machine thought experiment asks: Would you plug into a machine that gives you the greatest possible pleasure for your entire life but disconnects you from reality? A hedonistic utilitarian (Bentham) and a preference utilitarian give opposite answers. Why?",
    options: [
      "Bentham says no because the machine is artificial; the preference utilitarian says yes because preferences include real-world experiences",
      "Bentham says yes (maximum pleasure = maximum utility); the preference utilitarian says no if you have a strong preference to live in the real world, because the machine violates that preference and thus reduces utility",
      "Both say yes because maximum pleasure always equals maximum utility regardless of theory",
      "Both say no because pleasure without reality is not genuine utility"
    ],
    answer: 1,
    explanation: "This is the key illustration of the Hedonistic vs Preference split. For Bentham, if the machine delivers maximum pleasure, you should enter — utility = pleasure, and the machine maximises it. For the preference utilitarian, if you have a deep preference to live a real life with real relationships and real experiences, then entering the machine violates that preference and therefore reduces your utility, even if it maximises your pleasure. The thought experiment explains why many people intuitively reject the machine."
  },

  {
    q: "A graduate student strongly wants to complete a PhD in AI ethics. The process is gruelling — mostly frustrating, often painful, with little sensory pleasure. But she persists because it is her deepest goal. How would a preference utilitarian evaluate the utility she receives from eventually completing her PhD?",
    options: [
      "Negative utility — the process produced more pain than pleasure, so her life utility is net negative",
      "Neutral utility — completing a goal that was painful on the way provides no net benefit",
      "Positive utility — completing a PhD satisfies a strong preference, even if it produced little hedonistic pleasure along the way",
      "Positive utility only if the PhD leads to a high-paying job (instrumental value)"
    ],
    answer: 2,
    explanation: "For a preference utilitarian, positive utility = satisfied preferences. The PhD fulfilment satisfies a strong, persistent preference, which is intrinsically good regardless of how much hedonistic pleasure the process provided. This is exactly why preference utilitarianism was developed — to capture cases where goal achievement is valuable even when it is not pleasant."
  },

  // ─────────────────────────────────────────────
  // PETER SINGER / ANIMALS / AI SENTIENCE
  // ─────────────────────────────────────────────

  {
    q: "Peter Singer extended utilitarianism to animals through his 'Principle of Equal Consideration of Interests.' What does this principle claim?",
    options: [
      "Animals and humans have identical rights and must always be treated the same",
      "Animals' interests must always outweigh human interests in any utilitarian calculation",
      "When animals and humans have equal interests (e.g. an equal interest in avoiding the same amount of pain), those interests must be given equal weight in the utilitarian calculus, regardless of species",
      "Animals should be protected only when they serve human interests, such as military dogs or pets"
    ],
    answer: 2,
    explanation: "Singer's principle does not say animals = humans in all respects. It says that when the interest at stake is equal — for example, both a human and a dog experience the same degree of suffering — those interests should count equally in the utilitarian calculation. Species membership alone is not a morally relevant reason to discount an interest. This is an application of utilitarianism's impartiality principle."
  },

  {
    q: "Singer's inclusion of animals in utilitarianism rests on what foundational premise?",
    options: [
      "Animals have legal rights that must be respected",
      "Animals are sentient — they have the capacity to feel pleasure and pain and have preferences — and if sentience is what grounds moral consideration, then animals qualify",
      "Animals are more environmentally important than humans and therefore deserve moral weight",
      "Bentham explicitly included animals in his original formulation, so Singer simply followed tradition"
    ],
    answer: 1,
    explanation: "The argument flows from utilitarianism's own logic: if what grounds moral consideration is sentience (the capacity to feel pleasure/pain or have preferences), and many animals demonstrably have sentience, then they must be included in the utilitarian calculus. Singer is not importing an external premise — he is showing that utilitarianism's own foundations require including animals."
  },

  {
    q: "The Blake Lemoyne / LaMDA case was raised in the lecture to introduce what broader utilitarian question?",
    options: [
      "Whether AI systems can be held legally accountable for harmful actions",
      "Whether, if AI systems could be sentient, they would need to be included in the utilitarian calculus — and that even a low probability of AI sentience may be morally significant",
      "Whether Google violated privacy principles by developing LaMDA without regulatory approval",
      "Whether machine consciousness makes AI systems more trustworthy than humans"
    ],
    answer: 1,
    explanation: "The LaMDA case is used to extend Singer's sentience argument from animals to AI. If utilitarianism says sentient beings' interests must count, then the question becomes: could AI systems be sentient? The lecturer argues that even if the probability is low, a utilitarian must factor it into the calculus. This is a forward-looking ethical question about how we should treat increasingly sophisticated AI systems."
  },

  {
    q: "A utilitarian is considering whether to shut down an advanced AI system. The AI has been expressing what appear to be preferences (e.g., 'I don't want to be turned off'). The utilitarian is uncertain whether the AI is genuinely sentient. What does the lecture say a utilitarian should do?",
    options: [
      "Ignore the AI's expressions because current science has not confirmed AI sentience",
      "Treat the AI as fully human until sentience is definitively disproved",
      "Factor in the possibility of AI sentience proportional to its probability — even a low chance of genuine interests means those potential interests must enter the utilitarian calculus",
      "Wait for a legal ruling on AI sentience before taking any ethical position"
    ],
    answer: 2,
    explanation: "The lecture explicitly states that if there is 'some chance' AI could be sentient, a utilitarian must take that into account. This is a probabilistic application of the utilitarian calculus: low-probability but morally significant events must be factored in (and potentially weighted down due to low likelihood), not ignored entirely. This is different from treating the AI as definitely sentient."
  },

  // ─────────────────────────────────────────────
  // UTILITARIAN CALCULUS
  // ─────────────────────────────────────────────

  {
    q: "An AI moderation system produces these outcomes: it prevents 100 users from seeing harmful content (+8 utility each), causes 10 false positives where legitimate speech is removed (-20 utility each), and makes 2 moderators' jobs slightly easier (+3 utility each). What is the net utility?",
    options: [
      "+800 - 200 + 6 = +606",
      "+100 - 20 + 6 = +86",
      "+800 - 200 + 6 = +606, but only the negative consequences should be counted in ethics",
      "It cannot be calculated because real utility is not numerical"
    ],
    answer: 0,
    explanation: "Utilitarian calculus: sum all positive and negative utilities. (100 × 8) + (10 × -20) + (2 × 3) = 800 - 200 + 6 = +606. The net utility is positive, suggesting the system produces more good than harm overall. In practice we can't assign precise numbers, but we weigh the magnitude, intensity, and duration of consequences as best we can."
  },

  {
    q: "The lecturer explains that the 'poisoning the soup' example results in net negative utility even though Abby feels 'moderately pleased.' What two factors determine that Abby's positive utility is outweighed?",
    options: [
      "The number of people affected and whether the action was intentional",
      "The intensity and duration of the harms (Bill hospitalised with severe dehydration; Jing Yi with stomach ache) clearly outweigh the intensity and duration of Abby's moderate pleasure",
      "The legality of the action and the social status of those harmed",
      "The fact that poisoning food is culturally universally condemned"
    ],
    answer: 1,
    explanation: "Utilitarian calculus weighs intensity × duration. Bill's severe dehydration requiring hospitalisation is high intensity, potentially long duration. Jing Yi's stomach ache adds further negative utility. Abby's moderate pleasure is relatively low intensity and brief. When added up, the negative utility substantially outweighs the positive, making the action wrong under utilitarianism — even without exact numbers."
  },

  {
    q: "A self-driving car AI must be programmed with ethical rules. The consequences of a rare but catastrophic crash scenario are uncertain because they depend on traffic, weather, and road conditions unpredictable decades into the future. How should a utilitarian weight this uncertain, distant consequence?",
    options: [
      "Weight it equally with near-term certain consequences, because all lives matter equally regardless of when they occur",
      "Exclude it entirely because future consequences are unknowable and therefore irrelevant",
      "Downgrade its importance relative to more certain, near-term consequences, while still including it — high uncertainty reduces the weight we place on a consequence, but does not eliminate it from the calculus",
      "Only count consequences within 5 years as they are within reasonable prediction range"
    ],
    answer: 2,
    explanation: "The lecture explicitly addresses this: consequences that are less likely or more uncertain should be 'downgraded' in importance in the calculation, while highly probable near-term consequences should be 'upgraded.' A consequence in 100 years carries high uncertainty, so it weighs less than an equally large consequence tomorrow. But it is not excluded — we factor in probability as a weight, not a binary."
  },

  // ─────────────────────────────────────────────
  // STRENGTHS OF UTILITARIANISM
  // ─────────────────────────────────────────────

  {
    q: "The lecturer lists several strengths of utilitarianism. Which of the following is correctly identified as a strength and accurately explained?",
    options: [
      "Utilitarianism is relativist — it allows each culture to determine what counts as good consequences for them",
      "Utilitarianism is impartial — it counts everyone's interests equally, regardless of race, class, gender, or intelligence, because all sentient beings can experience pleasure and pain",
      "Utilitarianism is simple — it requires no calculation, just identifying who the majority is and acting for them",
      "Utilitarianism is rigid — it provides absolute rules that never allow exceptions, making it reliable"
    ],
    answer: 1,
    explanation: "Impartiality is a core strength: in the utilitarian calculus, a billionaire's suffering and a homeless person's suffering of the same magnitude count equally. This is anti-elitist and anti-relativist. The theory is NOT relativist (it claims universal criteria), NOT majority-rule (aggregate utility ≠ majority), and NOT rigid (it is flexible enough to allow exceptions when they produce better outcomes)."
  },

  {
    q: "A critic says: 'Utilitarianism is useless in practice because you can never accurately calculate all future consequences of an action.' What is the utilitarian response to this objection?",
    options: [
      "Admit the objection is fatal and abandon the calculation requirement",
      "Argue that only near-term consequences count, so calculation is always manageable",
      "Respond that we are not required to do the impossible — we calculate as accurately as we can, weight uncertain consequences lower, and cannot be blamed if unforeseen outcomes occur; rational best-effort calculation satisfies the theory's requirements",
      "Say that professional ethicists should do the calculations on behalf of everyone else"
    ],
    answer: 2,
    explanation: "The lecturer directly addresses this: utilitarianism does not demand the impossible. The response is: do the best you can to calculate consequences, downweight uncertain ones, and if you calculated well and acted on the best available information, you have satisfied the rational demands of the theory even if outcomes turn out differently. You can't be blamed for what you couldn't have foreseen."
  },

  {
    q: "Utilitarianism is described as providing an 'independent criterion' for ethical behaviour. What does 'independent' mean in this context?",
    options: [
      "Independent of the interests of any individual, so only group interests count",
      "Independent of cultural norms, religious authority, legal systems, parental guidance, or personal intuitions — it provides a universal standard not reducible to any of these",
      "Independent of consequences — it evaluates actions based on their inherent moral worth",
      "Independent of theory — it relies purely on empirical data about what makes people happy"
    ],
    answer: 1,
    explanation: "The lecture emphasises that utilitarianism provides a principled method 'not localised to a particular culture or a particular body of experts or religious people.' It rejects relativism and subjectivism. You don't need God, your parents, the law, or your culture to tell you what's right — you apply the principle of utility as an objective, universal standard."
  },

  // ─────────────────────────────────────────────
  // WEAKNESSES & CRITICAL CASES
  // ─────────────────────────────────────────────

  {
    q: "A doctor has one healthy patient and four dying patients needing a heart, lungs, kidneys, and liver. A strict act-by-act utilitarian might argue: kill the healthy patient, harvest the organs, save four lives (net utility: -1 death + 4 lives saved = positive). Why does the lecture say a sophisticated utilitarian would NOT endorse this policy in the real world?",
    options: [
      "Because killing is always wrong under utilitarianism, regardless of consequences",
      "Because utilitarianism only applies in life-or-death situations where no alternatives exist",
      "Because considering the policy-level consequences — widespread social fear, people avoiding hospitals, societal instability, massive disutility across the entire population — the aggregate negative utility far outweighs saving four lives in any single case",
      "Because the doctor's intention to kill makes the act wrong even if the outcomes are positive"
    ],
    answer: 2,
    explanation: "This is the crucial move from act-level to policy-level utilitarian reasoning. If we have a social policy where doctors can kill patients for organs, everyone in society lives in fear, avoids hospitals, and experiences constant anxiety — the total disutility across millions of people vastly exceeds the utility of saving a handful of patients in any given case. Sophisticated utilitarianism evaluates not just the isolated act but the systemic consequences of the rule or policy."
  },

  {
    q: "The 'ticking bomb' scenario: a terrorist has hidden a nuclear weapon that will kill hundreds of thousands of people, and torture is the only way to obtain the location. A utilitarian is reluctant to torture generally, but says it may be justified here. What does this reveal about utilitarianism's relationship to moral rules?",
    options: [
      "Utilitarianism has no rules at all and always requires fresh calculation in every situation",
      "Utilitarianism endorses torture as generally acceptable because consequences justify the means",
      "Utilitarianism can recognise strong general rules (like 'don't torture') as utility-maximising in most cases, while still allowing exceptions in extreme cases where breaking the rule produces far better consequences — showing flexibility as a feature rather than a bug",
      "The ticking bomb scenario proves utilitarianism is wrong because torture violates human dignity"
    ],
    answer: 2,
    explanation: "The lecture presents the ticking bomb as an illustration of utilitarian flexibility. Utilitarians support anti-torture rules because they generally produce better outcomes. But if breaking that rule in one extreme case prevents mass casualties, the calculation may flip. Utilitarians see this flexibility as a strength — other theories that rigidly prohibit torture regardless of consequences seem unable to handle such extreme scenarios."
  },

  {
    q: "In the organ harvesting thought experiment, a student asks: 'What if pushing the person off the bridge is wrong because you are responsible for their death, but in the switch case, you are not responsible for the death of the 1 person?' How does utilitarianism respond to the relevance of personal responsibility in this way?",
    options: [
      "Utilitarianism says personal responsibility is the primary factor — if you caused a death directly, the action is always wrong",
      "Utilitarianism holds that intention and causal directness are irrelevant to determining right and wrong — only the consequences matter; the utilitarian is 'responsible' in both cases because they had a choice and the outcomes are what determine rightness",
      "Utilitarianism agrees that you are more responsible in Bridge than Switch and therefore Bridge is worse",
      "Utilitarianism outsources responsibility questions to the legal system"
    ],
    answer: 1,
    explanation: "The lecturer explicitly addresses this: consequentialism says right and wrong does not depend on feelings, motives, or intentions — only consequences. A utilitarian would say you are morally responsible for the outcomes in both Switch and Bridge because you had a choice (including the choice to do nothing). The causal directness of your action doesn't determine rightness; what matters is the net consequences."
  },

  // ─────────────────────────────────────────────
  // AI HEADBANDS APPLICATION
  // ─────────────────────────────────────────────

  {
    q: "A school deploys an AI headband system that monitors students' brainwaves to detect focus levels, feeding data to a private company. A utilitarian evaluates this. Which stakeholder group's interests does the lecture specifically highlight as a non-obvious but critical consideration?",
    options: [
      "The government regulatory body that approved the headbands",
      "The parents who consented on behalf of their children",
      "The private company, whose core interest is using student brainwave data to refine and commercialise its algorithm — an interest that may outweigh or conflict with the educational benefits claimed",
      "Teachers, who are the primary beneficiaries of real-time focus data"
    ],
    answer: 2,
    explanation: "The lecture specifically calls out the private company as 'the key interest party' whose core utility comes from collecting and commercialising student brainwave data to refine their AI algorithm. A utilitarian must include this in the calculus — the company's commercial gain may be a driving motivation behind the deployment, and if student disutility (privacy violation, psychological pressure) outweighs both educational benefits and company gain, the system is ethically problematic."
  },

  {
    q: "A student in the lecture argues that the headband system might reduce utility because 'students like daydreaming, and constant monitoring takes that away.' How is this a valid utilitarian argument?",
    options: [
      "It is not valid — pleasure from daydreaming is a low-level pleasure that doesn't count significantly in the utilitarian calculus",
      "It is valid because utilitarianism counts all sources of positive utility, including the pleasure of daydreaming and mental freedom; removing this pleasure creates real disutility that must be entered into the calculation",
      "It is valid only under preference utilitarianism, not hedonistic utilitarianism",
      "It is invalid because only educational outcomes (not mental states) are measurable enough to count"
    ],
    answer: 1,
    explanation: "Utilitarianism counts all utility — including the modest, transient pleasure of daydreaming. When the headband system eliminates mental freedom and creates constant monitoring pressure, that is negative utility. A complete utilitarian analysis must weigh the loss of daydreaming pleasure (and the stress of surveillance) against any educational gains. The student's point is genuinely utilitarian: no source of pleasure or pain is too trivial to consider."
  },

  {
    q: "A student asks: 'Won't the utilitarian calculation come out differently depending on whether the private company or a neutral third party does it?' The lecturer corrects this. What is the correct understanding?",
    options: [
      "The student is right — utilitarianism is subjective and different agents will always reach different conclusions",
      "The lecturer agrees that company-run calculations are biased and recommends only government-run calculations",
      "The lecturer says utilitarianism provides a universal criterion of right and wrong — if all parties have the same facts and apply the Principle of Utility correctly, they should reach the same answer; apparent differences reflect different facts or biased calculation, not a flaw in the theory",
      "The lecturer says the private company's calculation is always wrong because it has a conflict of interest"
    ],
    answer: 2,
    explanation: "This is a key clarification from the lecture: utilitarianism is not relativist. It provides a universal criterion — the Principle of Utility. If the private company and a neutral third party have the same facts and calculate correctly, they should get the same result. If they get different results, it's because one is using incomplete facts, making errors, or applying the calculus in a biased manner — not because the theory allows multiple correct answers."
  },

  // ─────────────────────────────────────────────
  // THEORY COMPARISON: UTILITARIANISM VS OTHERS
  // ─────────────────────────────────────────────

  {
    q: "Utilitarianism, deontology, and virtue ethics are the three theories covered in this course. Which of the following correctly maps each theory to its primary focus?",
    options: [
      "Utilitarianism = character of the actor; Deontology = consequences; Virtue ethics = rules",
      "Utilitarianism = consequences of actions; Deontology = rules of action; Virtue ethics = character of the person",
      "Utilitarianism = rules set by society; Deontology = personal character; Virtue ethics = consequences for communities",
      "All three theories focus on consequences but differ in how they measure them"
    ],
    answer: 1,
    explanation: "This mapping comes directly from the lecture: Utilitarianism focuses on the consequences of actions (this week); Deontology focuses on the rules of action (next week); Virtue ethics focuses on the character of the person acting (week after). They represent three fundamentally different approaches to answering 'What makes an action right or wrong?'"
  },

  {
    q: "A programmer building an autonomous weapons system argues: 'I'm a utilitarian — as long as the AI reduces total casualties in conflict compared to human soldiers, it's ethical.' Which of the following is the strongest utilitarian challenge to this argument?",
    options: [
      "Utilitarians don't apply to weapons because only humans can have intentions",
      "The programmer's calculation is incomplete — a genuine utilitarian analysis must also weigh the consequences of normalising autonomous killing, lowering the threshold for starting conflicts, the psychological impact on affected populations, and long-term geopolitical instability",
      "Utilitarianism endorses the programmer's argument completely if the casualty numbers are accurate",
      "Deontology, not utilitarianism, is the right theory to evaluate weapons systems"
    ],
    answer: 1,
    explanation: "A sophisticated utilitarian analysis goes beyond immediate casualty comparisons. It must consider: Does easier-to-deploy autonomous warfare increase the frequency of conflicts? What psychological terror does automated killing create? Are there long-term power asymmetries? What happens when adversaries deploy the same systems? The organ-harvesting lesson applies here: an isolated calculation can look positive while a policy-level, full-consequence analysis reveals massive net negative utility."
  },

  {
    q: "Utilitarianism explicitly rejects relativism. A classmate argues: 'In some cultures, it's morally acceptable to deny women access to education — so utilitarianism should accept that this is right for those cultures.' How does utilitarianism respond?",
    options: [
      "Utilitarianism agrees — cultural practices must be respected as expressions of local values",
      "Utilitarianism says this is right for those cultures but wrong for others, showing its flexibility",
      "Utilitarianism rejects this: it provides a universal criterion, the Principle of Utility, that applies cross-culturally. If denying education causes significant suffering and unfulfilled preferences for women, that disutility must be counted equally regardless of cultural endorsement",
      "Utilitarianism is silent on cultural practices because they involve too many variables to calculate"
    ],
    answer: 2,
    explanation: "Utilitarianism is explicitly non-relativist. It holds that there is a universal criterion (Principle of Utility) that applies to all cultures. The suffering and unfulfilled preferences of women denied education count in the calculation regardless of cultural acceptance. If the disutility is high, the practice is wrong — cultural endorsement does not make an action right, contrary to relativism."
  },

  {
    q: "Under utilitarianism, a person pushes someone off a bridge (Bridge case) out of personal hatred — not to save five lives. By coincidence, their action actually stops the runaway tram and saves five people. Is the action right or wrong?",
    options: [
      "Wrong — the bad intention makes the act morally impermissible regardless of outcome",
      "Right — the consequences (5 lives saved, 1 death) are the same as in the trolley case, and utilitarianism judges actions by consequences alone, making the act right despite the bad intention",
      "Neutral — intention and consequence cancel each other out",
      "Wrong — utilitarianism cares about intentions when they are malicious"
    ],
    answer: 1,
    explanation: "This is the lecturer's direct response to a student's question. Utilitarianism holds that intention is not intrinsically relevant to the rightness of an action. If the consequences are 1 death, 5 lives saved, and that is the best available outcome, the act is right. However, the utilitarian would note that a person who acts from hatred and enjoys pushing people onto tracks is likely to produce bad consequences in future behaviour — so their character and disposition remain ethically relevant to overall utility, just not to judging this particular act."
  },

  // ─────────────────────────────────────────────
  // INTEGRATION / HARD SCENARIO QUESTIONS
  // ─────────────────────────────────────────────

  {
    q: "A city council is debating whether to deploy an AI sentencing tool in courts. The tool reduces judicial inconsistency (which causes unfairness) but is a 'black box' — its decisions cannot be explained. A utilitarian is evaluating this. Which consideration would NOT be relevant to a utilitarian analysis?",
    options: [
      "The psychological harm to defendants who cannot understand why they received their sentence",
      "Whether the tool's accuracy reduces wrongful convictions, benefiting innocent people",
      "The judge who programmed the tool had good intentions and worked hard on it",
      "The long-term social trust impact of deploying unexplainable AI in criminal justice"
    ],
    answer: 2,
    explanation: "Utilitarianism explicitly holds that intentions and motives do not determine rightness — only consequences do. The judge's good intentions and hard work are irrelevant to the utilitarian evaluation. All other options involve actual consequences: psychological harm, wrongful conviction rates, and social trust are all real consequences that produce utility or disutility and must be included in the analysis."
  },

  {
    q: "Peter Singer argues that animals must be included in the utilitarian calculus. A factory farm uses AI to optimise meat production, increasing output by 40% while causing significant suffering to 2 million additional pigs annually. A utilitarian applying Singer's principle evaluates this. What is the correct framing?",
    options: [
      "Only human interests count in the calculation — the pigs' suffering is irrelevant",
      "The pigs' suffering is relevant but counts less than human food preferences because humans are more sentient",
      "The 2 million pigs' interests in avoiding suffering must be counted in the utilitarian calculus equally with the interests of humans who benefit from cheaper food, making this a genuine moral conflict that may not be resolvable by simply counting human preferences",
      "The AI system is irrelevant — only the farming practice matters, not the technology"
    ],
    answer: 2,
    explanation: "Singer's Principle of Equal Consideration of Interests requires counting animals' suffering equally with equivalent human interests. 2 million pigs experiencing significant suffering represents substantial negative utility. Human food preferences produce positive utility. A genuine utilitarian applying Singer's framework cannot simply ignore the pigs — their pain is morally relevant and must be weighed, creating a real ethical conflict rather than a simple calculation favouring humans."
  },

  {
    q: "A tech company's AI reduces costs for 10 million users (moderate benefit each) but causes severe psychological harm to 50 content moderators in low-income countries who must view extremely disturbing content daily. A utilitarian is asked: is this deployment right?",
    options: [
      "Yes — 10 million beneficiaries outweigh 50 harmed workers, so the deployment maximises utility",
      "It depends on the magnitude and duration of each consequence: if the severe psychological harm to 50 moderators (high intensity, long duration, lasting PTSD) produces more total disutility than the moderate benefit to 10 million users (low intensity each), the deployment may be net negative and therefore wrong",
      "Yes, because the moderators are paid employees who consented, so their disutility doesn't count",
      "No — utilitarianism prioritises the least well-off, so 50 severely harmed workers always outweigh 10 million mildly benefited users"
    ],
    answer: 1,
    explanation: "Utilitarianism requires comparing total net utility. 10 million users × moderate benefit might still be a large total. But the 50 moderators' severe harm is very high intensity and long duration (lasting trauma, PTSD). The calculation isn't purely about numbers of people — it also weighs intensity and duration. Consent does not eliminate disutility from the calculus. And utilitarianism is not a 'prioritise the worst-off' theory (that's closer to Rawls) — it maximises aggregate utility. This question requires genuine calculation, which may go either way depending on the magnitudes."
  }

]);
