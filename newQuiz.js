// File: src/newQuiz.js
export const newQuiz = {
    id: 4, // ID nối tiếp hoặc tự đặt miễn là không trùng với các đề cũ
    title: "None",
    description: "None",
    questions: Array.from({ length: 150 }, (_, i) => ({
        text: `The new software update will be installed _______ the end of the week. (Question ${i + 1})`,
        options: ["by", "until", "in", "on"],
        answer: 0
    }))
};