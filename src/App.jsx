import { useState } from "react";
import emblem from "./assets/hogwartsemblem.png";

const questions = [
  {
    id: 1,
    legend: "Pick words to live by:",
    answers: [
      { text: "You fuck with my friends, you fuck with me.", house: "hufflepuff" },
      { text: "Hold my beer, I have some shady stuff to do.", house: "slytherin" },
      { text: "Sleep is for the weak. I can figure this out.", house: "ravenclaw" },
      { text: "Do it for the plot *wink*.", house: "gryffindor" },
    ],
  },
  {
    id: 2,
    legend: "There's a situation at Hogwarts. In what position are you?",
    answers: [
      { text: "You are staying out of the situation.", house: "ravenclaw" },
      { text: "You are emotional help of those affected by the situation.", house: "hufflepuff" },
      { text: "You are dealing with the situation.", house: "gryffindor" },
      { text: "You are the reason the situation happened.", house: "slytherin" },
    ],
  },
  {
    id: 3,
    legend: "Why did you end up in the hospital wing?",
    answers: [
      {
        text: "I was in a competition with my mate to see which one can walk the wall higher using spell that sticks your feet to the surface.",
        house: "gryffindor",
      },
      { text: "I tried to hex Peeves. No, I am not telling you why.", house: "slytherin" },
      { text: "I was reading my book. I swear that staircase change came out of nowhere.", house: "ravenclaw" },
      { text: "I tried to pet Mrs. Norris.", house: "hufflepuff" },
    ],
  },
  {
    id: 4,
    legend: "What challenge are you participating in?",
    answers: [
      { text: "Grab a leaf from a Whomping Willow.", house: "gryffindor" },
      { text: "Get a certain book from a certain place. I need to quote what's written on page 86 line 14 word for word.", house: "ravenclaw" },
      { text: "Slip a kind note without notice. We have point system of difficulty for every house.", house: "hufflepuff" },
      { text: "Drink every time Draco says POTTAH.", house: "slytherin" },
    ],
  },
  {
    id: 5,
    legend: "You are waiting for exam results. Your reaction:",
    answers: [
      { text: "We are hosting a meet up in our common room about the exam's questions.", house: "ravenclaw" },
      { text: "Not to brag but I won the best cheating tactics award today.", house: "slytherin" },
      { text: "I mean... it is what it is.", house: "gryffindor" },
      { text: "I did the best I could do. We are having tea and cookies in the common room btw.", house: "hufflepuff" },
    ],
  },
  {
    id: 6,
    legend: "There's this person you really like. How do you act around them?",
    answers: [
      { text: "Um... lean on the wall with one shoulder and try to look cool?", house: "gryffindor" },
      { text: "I hug them longer than I should ^_^", house: "hufflepuff" },
      { text: "Every time they ask for help I help...", house: "ravenclaw" },
      { text: "Defend them behind their back from everything.", house: "slytherin" },
    ],
  },
  {
    id: 7,
    legend: "Pick one:",
    answers: [
      { text: "Sometimes you're a stubborn piece of shit.", house: "gryffindor" },
      { text: "You're a snob who secretly likes romantic comedies.", house: "slytherin" },
      { text: "You're a nerd. A. Humongous. Nerd.", house: "ravenclaw" },
      { text: "You can breed a devil in a suitcase and call it Bob.", house: "hufflepuff" },
    ],
  },
  {
    id: 8,
    legend: "French have given us many good things:",
    answers: [
      { text: "Croissants and café au lait.", house: "ravenclaw" },
      { text: "French toast.", house: "gryffindor" },
      { text: "French fries.", house: "hufflepuff" },
      { text: "The guillotine.", house: "slytherin" },
    ],
  },
  {
    id: 9,
    legend: "Someone falls from the stairs:",
    answers: [
      { text: "*laugh* idiot.", house: "slytherin" },
      { text: "ooouuuch. I felt that.", house: "gryffindor" },
      { text: "Oh no! Are you alright?!", house: "hufflepuff" },
      { text: "Was in my Paracosm and didn't even hear it.", house: "ravenclaw" },
    ],
  },
  {
    id: 10,
    legend: "Pick a style:",
    answers: [
      { text: "Cottagecore.", house: "hufflepuff" },
      { text: "Grunge.", house: "gryffindor" },
      { text: "Dark Academia.", house: "slytherin" },
      { text: "Light Academia.", house: "ravenclaw" },
    ],
  },
];

//Fisher–Yates shuffle algorithm
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function App() {
  const [shuffledQuestions] = useState(() => shuffle(questions));

  const handleSubmit = (e) => {
    e.preventDefault();
    // score tracker
    const scores = {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0,
    };

    const formData = new FormData(e.target);

    let totalAnswers = 0;

    // loop through questions
    for (let i = 1; i <= 10; i++) {
      const answer = formData.get(`q${i}`);
      if (answer) {
        scores[answer]++;
        totalAnswers++;
      }
    }

    // no answers selected
    if (totalAnswers === 0) {
      alert("The Hat has spoken... You belong to NOWHERE — answer at least one question to be sorted! 🪄");
      return;
    }

    // determine top house
    let topHouse = null;
    let maxScore = -1;

    for (const house in scores) {
      if (scores[house] > maxScore) {
        maxScore = scores[house];
        topHouse = house;
      }
    }

    const pretty = topHouse.charAt(0).toUpperCase() + topHouse.slice(1);

    alert(`The Hat has spoken... You belong to ${pretty.toUpperCase()}! 🪄`);
  };

  return (
    <form id="sortingHatQuiz" onSubmit={handleSubmit}>
      <h1>Hogwarts House Sorting Quiz</h1>
      <img id="emblem" src={emblem} alt="Hogwarts emblem" />

      {shuffledQuestions.map((q, qIndex) => (
        <fieldset key={q.id}>
          <legend>{q.legend}</legend>

          {q.answers.map((a, aIndex) => (
            <label key={aIndex}>
              <input type="radio" name={`q${qIndex + 1}`} value={a.house} />
              {a.text}
              <br />
            </label>
          ))}
        </fieldset>
      ))}

      <br />

      <button type="submit">Sort me!</button>
    </form>
  );
}
