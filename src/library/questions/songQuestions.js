export const quizTree = {
  start: {
    id: "start",
    question: "Pick a vibe:",
    answers: [
      { text: "Etherial", next: "etherial_q" },
      { text: "Rainy", next: "rainy_q" },
    ],
  },

  etherial_q: {
    id: "etherial_q",
    question: "Pick a subvibe:",
    answers: [
      { text: "Foresty", next: "result_foresty" },
      { text: "Sunny", next: "result_sunny" },
    ],
  },

  rainy_q: {
    id: "rainy_q",
    question: "Pick a subvibe:",
    answers: [
      { text: "Soft", next: "result_soft" },
      { text: "Misty", next: "result_misty" },
    ],
  },

  result_foresty: {
    id: "result_foresty",
    result: {
      vibe: "ethereal",
      subVibe: "foresty",
    },
  },

  result_sunny: {
    id: "result_sunny",
    result: {
      vibe: "ethereal",
      subVibe: "sunny",
    },
  },

  result_soft: {
    id: "result_soft",
    result: {
      vibe: "rainy",
      subVibe: "soft",
    },
  },

  result_misty: {
    id: "result_misty",
    result: {
      vibe: "rainy",
      subVibe: "misty",
    },
  },
};
