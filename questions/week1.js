// Week 1: History of AI — MCQ Questions
// Based on COMP90087 2026 SM1 Lecture 1 transcript

registerQuestions("questions/week1.js", [
  {
    q: "Which of the following was the first programmable, general-purpose digital computer to actually be built?",
    options: [
      "The Analytical Engine",
      "ENIAC",
      "The Pascaline",
      "The CSIRO computer"
    ],
    answer: 1,
    explanation: "ENIAC (1945), built at the University of Pennsylvania, was the first programmable general-purpose digital computer. It could perform 5,000 additions per second. The Analytical Engine was never built; the CSIRO machine came later."
  },
  {
    q: "Ada Lovelace is significant in the history of computing primarily because she:",
    options: [
      "Built and operated the Analytical Engine",
      "Invented the Jacquard loom and its punch-card system",
      "Wrote the first algorithm and recognised the Analytical Engine as a general-purpose computing machine",
      "Proposed the imitation game as a test of machine intelligence"
    ],
    answer: 2,
    explanation: "Ada Lovelace wrote the first algorithm for the Analytical Engine and recognised it as capable of much more than number-crunching — including composing music. She is often considered the first programmer."
  },
  {
    q: "Alan Turing called his proposed test of machine intelligence the:",
    options: [
      "Dartmouth Protocol",
      "Cognitive Simulation Test",
      "A* Evaluation",
      "Imitation Game"
    ],
    answer: 3,
    explanation: "Turing's 1950 paper proposed the 'imitation game', later known as the Turing test. A human interrogator who cannot distinguish a machine from a human in text conversation would indicate the machine can 'think'."
  },
  {
    q: "The term 'AI winter' refers to which of the following?",
    options: [
      "A period when AI researchers shifted focus exclusively to robotics",
      "A period of drastically reduced funding, interest, and progress in AI research",
      "The season in which most major AI conferences are held",
      "A cold-war era ban on publishing AI research"
    ],
    answer: 1,
    explanation: "AI winters occurred when enthusiasm and promises for AI failed to match reality, leading funders (including DARPA) to withdraw support and global interest to collapse."
  },
  {
    q: "Moravec's paradox describes the finding that early AI systems:",
    options: [
      "Could perform simple motor tasks but failed at intellectual games like chess",
      "Could beat humans at chess but could not perform simple perceptual or navigation tasks that even animals do effortlessly",
      "Improved exponentially in line with Moore's Law",
      "Could solve abstract maths problems but not natural language tasks"
    ],
    answer: 1,
    explanation: "Moravec's paradox: computers could beat humans at chess (a cognitively demanding task) yet were unable to do what a child or a dog does naturally — navigate a room or find a way home."
  },
  {
    q: "Amara's Law states that we tend to:",
    options: [
      "Underestimate technology in the short run and overestimate it in the long run",
      "Overestimate technology in the short run and underestimate it in the long run",
      "Accurately predict technology's impact within a five-year window",
      "Overestimate technology consistently in both the short and long run"
    ],
    answer: 1,
    explanation: "Amara's Law: we overestimate the short-term effect of a technology and underestimate its long-term impact. The lecture applied this to repeated over-hyped AI claims that were then falsified."
  },
  {
    q: "The Dartmouth Conference of 1956 is historically significant because it:",
    options: [
      "Produced the first working autonomous robot",
      "Is widely regarded as the founding moment of modern artificial intelligence as a field",
      "Resulted directly in the first AI winter",
      "Introduced the Turing test to the scientific community"
    ],
    answer: 1,
    explanation: "The Dartmouth summer workshop (1956) brought together key computer scientists and mathematicians and formally launched AI as a field of study, beginning the 'Golden Age' of AI (1956–1974)."
  },
  {
    q: "According to the lecture, what was the key reason AI progress stalled during the first AI winter (1974–1980)?",
    options: [
      "A government ban on AI research following Cold War concerns",
      "The death or retirement of all key AI researchers",
      "Progress failed to match the hype — systems lacked scalability, common sense, and could not solve Moravec-type tasks",
      "Neural networks were proven mathematically impossible at the time"
    ],
    answer: 2,
    explanation: "The first AI winter resulted from over-promised and under-delivered results: systems couldn't scale (everything had to be hand-coded), lacked common sense, and Marvin Minsky's criticism of perceptrons added to the pessimism."
  },
  {
    q: "The 'Knowledge Era' of AI (approximately 1980–1987) was characterised by:",
    options: [
      "The dominance of deep learning and neural networks",
      "Expert systems using encoded knowledge bases and inference engines",
      "Large-scale internet data feeding machine learning models",
      "The development of the A* search algorithm"
    ],
    answer: 1,
    explanation: "The Knowledge Era produced expert systems like MYCIN (a medical diagnosis system). These encoded domain knowledge as rules and used an inference engine to answer queries — impressive but ultimately brittle and hard to maintain."
  },
  {
    q: "Which of the following correctly describes MYCIN?",
    options: [
      "A robot designed to navigate physical space using sensor data",
      "A medical expert system that encoded clinical knowledge and could outperform some doctors, but was ultimately not trusted in practice",
      "The first neural network trained on large-scale medical imaging data",
      "An AI system developed at the Dartmouth Conference to simulate human reasoning"
    ],
    answer: 1,
    explanation: "MYCIN encoded medical knowledge as rules and could diagnose conditions better than some doctors. However, it made errors doctors could not anticipate, and this lack of trustworthiness meant it was never deployed clinically."
  },
  {
    q: "What was the key participant diversity issue noted about the Dartmouth Conference?",
    options: [
      "It excluded computer scientists and focused only on mathematicians",
      "It was attended entirely by white men, reflecting the broader culture of the time",
      "It was dominated by industry representatives rather than academics",
      "It excluded contributions from researchers outside the United States"
    ],
    answer: 1,
    explanation: "The lecturer highlighted that all Dartmouth participants were white men — and likely middle-class — reflecting the societal culture of the time. The lecture then went on to show that diversity in AI matters for ethical outcomes."
  },
  {
    q: "Timnit Gebru is notable in AI history for which of the following?",
    options: [
      "Developing the first deep neural network architecture",
      "Founding ImageNet and advancing large-scale computer vision benchmarks",
      "Identifying racial bias in facial recognition systems and founding Black in AI, before losing her position at Google",
      "Proposing the Turing test as the standard for evaluating machine intelligence"
    ],
    answer: 2,
    explanation: "Timnit Gebru found that facial recognition systems performed poorly on dark-skinned individuals. She also published work on the energy costs of large language models. Google terminated her employment following this research."
  },
  {
    q: "Grace Hopper's key contribution to computing was:",
    options: [
      "Developing the first neural network model of the human brain",
      "Demonstrating that programmes can be written in higher-level languages and compiled into machine code",
      "Cracking the German Enigma code during World War II",
      "Founding the field of computer vision with ImageNet"
    ],
    answer: 1,
    explanation: "Grace Hopper showed that programmes do not need to be written directly in machine code — a higher-level language can be compiled down. Her idea was initially dismissed, partly due to the sexism of the era."
  },
  {
    q: "The Antikythera mechanism is considered historically significant because it:",
    options: [
      "Was the first programmable, general-purpose computing device",
      "Was discovered on a sunken Greek ship and is the earliest known calculating device, used to compute planetary positions",
      "Was the first machine to use punch cards for programming",
      "Inspired Charles Babbage to design the Analytical Engine"
    ],
    answer: 1,
    explanation: "Discovered in 1901 on a sunken Greek ship, the Antikythera mechanism (~87 BCE) could calculate positions of planets — making it the earliest known calculating device, though it was not programmable."
  },
  {
    q: "The CSIRO computer, housed at the University of Melbourne, was historically notable for being:",
    options: [
      "The first computer to pass the Turing test",
      "The first general-purpose computer ever built",
      "The first computer in Australia, approximately the 4th in the world, and the first computer to play music",
      "The first computer to use machine learning techniques"
    ],
    answer: 2,
    explanation: "The CSIRO computer was the first in Australia (about 4th in the world), was purchased by the maths department at Melbourne, and was the first computer ever to play music — audible on YouTube today."
  },
  {
    q: "Fei-Fei Li's contributions to AI include which of the following?",
    options: [
      "Proposing the divide-and-conquer model at the Dartmouth Conference",
      "Inventing back-propagation for neural network training",
      "Helping compile ImageNet, advancing computer vision, and founding AI for All",
      "Developing the MYCIN medical expert system"
    ],
    answer: 2,
    explanation: "Fei-Fei Li helped create ImageNet, a large image dataset that was pivotal for computer vision breakthroughs. She also founded AI for All, promoting diversity and inclusion in AI."
  },
  {
    q: "According to the lecture, which combination of factors drove the current AI revival?",
    options: [
      "Government mandates, reduced energy costs, and renewed interest from philosophers",
      "Increases in computational power (Moore's Law), massive internet data availability, and advances in machine learning / neural networks",
      "The success of MYCIN and other expert systems being re-deployed globally",
      "A single breakthrough paper at the Dartmouth Conference that was rediscovered in the 1990s"
    ],
    answer: 1,
    explanation: "The AI revival was enabled by Moore's Law (exponential growth in computing power), the internet providing massive training data, and machine learning techniques including neural networks that had previously been dismissed as hopeless."
  },
  {
    q: "The word 'philosophy' is composed of two Greek words meaning:",
    options: [
      "The study of nature",
      "The science of the mind",
      "The love of wisdom",
      "The pursuit of truth"
    ],
    answer: 2,
    explanation: "Philosophy comes from 'philo' (love) and 'sophia' (wisdom) — literally 'the love of wisdom'. Socrates embodied this in his relentless pursuit of understanding through dialogue and questioning."
  },
  {
    q: "In Raphael's painting 'The School of Athens', Plato points upward and Aristotle points downward. According to the lecture, this reflects that:",
    options: [
      "Plato was older and pointing to the sky, while Aristotle was younger and more humble",
      "Plato believed reality was transcendent (beyond the senses), while Aristotle was interested in studying the empirical world",
      "Plato favoured deductive reasoning and Aristotle favoured inductive reasoning",
      "Plato thought AI would succeed, while Aristotle thought it would fail"
    ],
    answer: 1,
    explanation: "Plato pointed upward because he believed true reality is transcendent — beyond what we can see or feel. Aristotle pointed downward because he was empirically focused on studying the natural world, animals, and human beings."
  },
  {
    q: "Socrates' famous claim that 'the unexamined life is not worthy of human beings' means that:",
    options: [
      "Only philosophers deserve to be considered fully human",
      "People should pursue wealth and success before turning to philosophical questions",
      "Humans ought to spend time reflecting on and discussing how they should live, rather than simply pursuing goals unreflectively",
      "Life is only meaningful if one studies at a university"
    ],
    answer: 2,
    explanation: "Socrates argued that the most important question is 'How ought I to live?' — not merely how to achieve goals, but critically examining the ends themselves. This is the foundation of philosophical ethics that the course builds on."
  },

  // ── ADVANCED QUESTIONS ──────────────────────────────────────────────────────

  {
    q: "A researcher argues that the Jacquard loom (1805) represents a more significant conceptual step toward modern computing than the Pascaline (1642). Which of the following best supports this argument?",
    options: [
      "The Jacquard loom could perform arithmetic operations, which the Pascaline could not",
      "The Jacquard loom used punch cards to encode different weaving instructions, introducing the concept of a stored, changeable programme",
      "The Jacquard loom was built by a mathematician, lending it greater scientific credibility",
      "The Jacquard loom was the first commercially successful automated machine"
    ],
    answer: 1,
    explanation: "The Pascaline could do arithmetic but was not programmable — it always did the same thing. The Jacquard loom used punch cards to specify different weaving patterns, which is conceptually closer to a programmable machine. This distinction is why Babbage and later von Neumann drew on it when thinking about general computation."
  },
  {
    q: "During the Golden Age of AI (1956–1974), a robot called Shakey was built that could navigate toward a goal while avoiding obstacles. Which of the following best explains why this achievement mattered for AI history, despite the robot moving excruciatingly slowly?",
    options: [
      "Shakey demonstrated that a robot could pass the Turing test in a physical environment",
      "Shakey proved that neural networks were superior to rule-based systems for perception tasks",
      "Shakey showed that AI reasoning could be applied to real-world spatial problems, and its development produced the A* search algorithm — a foundational pathfinding method still used today",
      "Shakey was the first machine to combine natural language understanding with physical movement"
    ],
    answer: 2,
    explanation: "Shakey's significance was two-fold: it proved AI could act in a physical environment (perceive → plan → move), and the engineering challenge of guiding it efficiently produced the A* search algorithm, which remains one of the most widely used algorithms in computer science."
  },
  {
    q: "Marvin Minsky was a founder of modern AI who contributed to both its rise and, paradoxically, a period of stagnation. How did he contribute to the latter?",
    options: [
      "He made wildly over-optimistic predictions about AI timelines, setting expectations no system could meet",
      "He designed the MYCIN expert system, whose high-profile failures discredited the field",
      "He published influential criticism of perceptrons (early neural networks), arguing they were too simple and brittle — helping to steer funding and attention away from neural network research",
      "He convinced DARPA that chess-playing programmes were the only valid measure of machine intelligence"
    ],
    answer: 2,
    explanation: "Minsky was a key Dartmouth participant yet his criticism of perceptrons as 'hopeless' was highly influential in diverting resources away from neural networks during the first AI winter. This is an example of how authority figures within a field can shape its trajectory — positively and negatively."
  },
  {
    q: "The 'qualification problem' was one cause of the second AI winter (1987–1993). Which scenario most precisely illustrates what this problem means?",
    options: [
      "A medical expert system required so much hand-coded knowledge that keeping it up to date became impractical as medicine advanced",
      "A medical expert system correctly applied rules in typical cases but could not account for exceptions — for instance, a rule 'prescribe drug X for condition Y' failed when an unusual patient condition made that prescription dangerous, something a human clinician would naturally recognise",
      "A chess-playing programme could not scale to larger board sizes because exponentially more computation was required",
      "An AI navigation system worked in the lab but failed outdoors because it had only been trained on indoor sensor data"
    ],
    answer: 1,
    explanation: "The qualification problem is about the impossibility of specifying all the exceptions and preconditions that must hold for a rule to apply safely. Expert systems encoded rules but couldn't anticipate the edge cases a human expert intuitively handles — making them unreliable in practice, especially in high-stakes domains like medicine."
  },
  {
    q: "Geoffrey Hinton is called the 'godfather of AI'. Which specific event from the lecture most directly triggered the current wave of mainstream interest in deep learning?",
    options: [
      "His co-authorship of the 1956 Dartmouth proposal that launched AI as a field",
      "His winning a major computer vision competition in 2012 using a deep neural network, demonstrating a dramatic leap over all prior methods",
      "His 2017 publication of the Transformer architecture, which later enabled ChatGPT",
      "His development of the backpropagation algorithm in the 1940s alongside Alan Turing"
    ],
    answer: 1,
    explanation: "Hinton's deep learning system won the ImageNet computer vision competition in 2012 by a margin so large it shocked the field and rapidly redirected research investment toward neural networks — effectively ending the era in which they were dismissed as impractical."
  },
  {
    q: "When AlphaGo defeated world Go champion Lee Sedol, his emotional response was described as significant in the lecture. In the context of AI history, why does the lecturer highlight this reaction rather than simply reporting the win?",
    options: [
      "Because it showed that AI had finally passed the Turing test under real-world competitive conditions",
      "Because Lee Sedol was the first human to defeat an AI system in a prior match, making the reversal historically meaningful",
      "Because his response — questioning the point of human expertise if a machine can surpass it — illustrates the broader existential and ethical questions raised when AI masters domains thought to require deep human intuition",
      "Because Go had previously been declared 'unsolvable' by AI researchers at the Dartmouth Conference"
    ],
    answer: 2,
    explanation: "The lecturer used Lee Sedol's emotional reaction to make AI's impact human and visceral. The question 'if a computer can do this, what's the point?' connects to central course themes: what is human intelligence, what work should AI do, and what are the implications for human dignity and purpose."
  },
  {
    q: "AlphaFold's inventors received a Nobel Prize in Chemistry for predicting how proteins fold. How does this milestone relate to Amara's Law, as discussed in the lecture?",
    options: [
      "It shows that we overestimated AI's long-term scientific impact — a Nobel Prize was far more than AI researchers ever claimed",
      "It demonstrates the short-term overestimation of AI, since protein folding was expected to be solved by the 1990s",
      "It illustrates the long-term underestimation side of Amara's Law: early AI researchers could not have foreseen that machine learning would eventually accelerate fundamental scientific discovery at Nobel Prize level",
      "It shows that Amara's Law does not apply to AI, since this breakthrough happened faster than anyone predicted"
    ],
    answer: 2,
    explanation: "Amara's Law says we underestimate long-term technological impact. AlphaFold predicting hundreds of millions of protein structures — enabling breakthroughs in medicine and biology — is precisely the kind of long-run consequence that would have been unimaginable to the researchers at Dartmouth in 1956."
  },
  {
    q: "Place the following AI milestones in the correct chronological order:\n(1) AlphaGo defeats world Go champion Lee Sedol\n(2) Transformer architecture introduced\n(3) ChatGPT publicly released\n(4) Geoffrey Hinton wins computer vision competition with deep learning",
    options: [
      "4 → 1 → 2 → 3",
      "1 → 4 → 2 → 3",
      "2 → 4 → 1 → 3",
      "4 → 2 → 1 → 3"
    ],
    answer: 0,
    explanation: "Hinton's ImageNet win: 2012 (4) → AlphaGo beats Lee Sedol: 2016 (1) → Transformer paper: 2017 (2) → ChatGPT release: November 2022 (3). Understanding this sequence helps see how each breakthrough built on the last."
  },
  {
    q: "The lecturer describes Alan Turing's personal life as 'a very sad life in a way' before detailing his technical achievements. In a course on AI ethics, what is the most likely pedagogical reason for including this account?",
    options: [
      "To suggest that personal suffering made Turing a more creative and productive scientist",
      "To argue that the British government's actions were justified under the laws of the time",
      "To show that the same society that persecuted Turing for his identity also benefited enormously from his contributions — illustrating concretely that exclusion based on identity is not merely unfair but harmful to everyone, including the field of AI itself",
      "To demonstrate that government oversight of AI scientists has historically been excessive"
    ],
    answer: 2,
    explanation: "Turing was chemically castrated and driven to his death for being gay — yet he cracked Enigma, proposed the Turing machine, and laid conceptual foundations for AI. The lecturer uses his story to make the diversity-and-inclusion argument visceral: exclusion doesn't just harm individuals, it deprives society and the field of irreplaceable talent."
  },
  {
    q: "Virginia Eubanks' book Automating Inequality documents a 'disparate impact' produced by AI systems. Which of the following scenarios most precisely captures what 'disparate impact' means in this context?",
    options: [
      "A facial recognition system achieves high overall accuracy but is deliberately programmed to exclude certain ethnic groups",
      "An AI system for allocating welfare payments and flagging child abuse investigations imposes far heavier negative outcomes on poor people than on wealthier people in otherwise comparable situations — not through explicit targeting but through the variables and proxies it uses",
      "An autonomous hiring tool rejects candidates from all universities equally, but elite graduates complain louder, creating a perception of unfairness",
      "A self-driving car performs worse in low-income neighbourhoods because road infrastructure there is in poorer condition"
    ],
    answer: 1,
    explanation: "Disparate impact means a system that appears neutral in design produces outcomes that fall disproportionately on a particular group. Eubanks found that AI tools used in welfare and child services systematically disadvantaged poor people — not through explicit bias in the code but through the proxies chosen and the populations on which the systems were tested and deployed."
  },
  {
    q: "The Dartmouth Conference proposed tackling AI via a 'divide-and-conquer' strategy — breaking human cognition into sub-problems (perception, learning, reasoning, planning) to be solved separately. Which of the following best identifies the implicit assumption in this approach, and why it proved problematic?",
    options: [
      "It assumed that sub-problems could be solved in parallel, but 1950s computers could only run one process at a time",
      "It assumed that solving each cognitive sub-problem independently would naturally combine into general intelligence — but integration proved far harder than the parts, and sub-systems that worked in isolation often failed when combined or confronted with real-world complexity",
      "It assumed that perception was the easiest sub-problem, but Moravec's paradox showed it was actually the hardest",
      "It assumed that reasoning could be fully encoded in mathematical logic, but philosophers at the time objected that logic is not equivalent to intelligence"
    ],
    answer: 1,
    explanation: "The divide-and-conquer model underestimated emergent complexity: solving perception, reasoning, and planning in isolation did not automatically yield a system that could integrate them fluidly. Real intelligence involves constant interplay between these functions — something modular, hand-coded systems struggled to replicate."
  },
  {
    q: "The lecturer states that diversity in AI teams has been 'scientifically shown' to improve outcomes. Which mechanism does the lecture specifically propose to explain this effect?",
    options: [
      "Diverse teams have higher average IQ and produce more creative algorithms",
      "People from different backgrounds are more motivated and resilient under pressure",
      "People from different backgrounds are less likely to automatically defer to one another's views — they raise more questions, surface hidden assumptions, and are better at anticipating harms before a system is deployed",
      "Diverse teams attract more government grant funding, giving them greater computational resources"
    ],
    answer: 2,
    explanation: "The lecturer's argument is epistemic, not just moral: homogeneous teams tend toward groupthink, assuming everyone shares the same context and needs. Diverse teams naturally generate more friction and questioning — which is precisely what is needed to catch biases, edge cases, and ethical problems before AI systems go live."
  }
]);
