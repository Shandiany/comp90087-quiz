// 示例题库 - 你可以参照这个格式创建新的题库文件
// 每个文件最后调用 registerQuestions("文件路径", 题目数组)

registerQuestions("questions/demo.js", [
  {
    q: "HTML 的全称是什么？",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0,
    explanation: "HTML 全称为 HyperText Markup Language（超文本标记语言）。"
  },
  {
    q: "CSS 中，哪个属性用来改变文字颜色？",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    answer: 2,
    explanation: "在 CSS 中使用 color 属性来设置文字颜色。"
  }
]);
