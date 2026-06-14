# COMP90087 MCQ Quiz

An interactive MCQ quiz for COMP90087 — The Ethics of Artificial Intelligence.

## Live Demo

> Enable GitHub Pages (Settings → Pages → Deploy from `main` branch `/root`) to get a live link.

## Features

- Multiple question banks (per week)
- Wrong answer tracking (saved in browser)
- Previous / Next navigation
- Review mode — practice only wrong answers
- Export wrong answers as Markdown for AI review
- Sidebar to switch between weeks

## Adding New Questions

1. Create a new file in `questions/`, e.g. `questions/week4.js`
2. Use this format:

```js
registerQuestions("questions/week4.js", [
  {
    q: "Question text here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,           // 0 = A, 1 = B, 2 = C, 3 = D
    explanation: ""      // optional
  },
]);
```

3. Register it in `quiz.html` inside the `QUESTION_BANKS` array:

```js
const QUESTION_BANKS = [
  ...
  { name: "Week 4: Your Topic", file: "questions/week4.js" },
];
```

## Question Banks

| File | Topic |
|------|-------|
| `questions/week1.js` | History of AI |
| `questions/week2.js` | AI Ethics & Principles |
| `questions/week3.js` | Trolley Problems & Moral Theory |
