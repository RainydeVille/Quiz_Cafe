import { shuffle } from "./shuffle";

export function shuffleAnswers(questions) {
  return questions.map((q) => ({
    ...q,
    answers: shuffle(q.answers),
  }));
}
