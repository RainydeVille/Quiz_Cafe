import { useMemo } from "react";

const questions = [
  {
    id: 1,
    legend: "How do you feel?",
    answers: [
      { text: "Nostalgic", song: "SS" },
      { text: "Sad", song: "LP" },
      { text: "Slightly lifted from reality", song: "SG" },
    ],
  },
  {
    id: 2,
    legend: "Pick a vibe:",
    answers: [
      { text: "Going on an adventure with friends when little.", song: "SS" },
      { text: "Looking out the window. It's raining.", song: "LP" },
      { text: "Laying on the forest floor. Watching clouds pass by.", song: "SG" },
    ],
  },
  {
    id: 3,
    legend: "Where would you like to be right now?",
    answers: [
      { text: "Playing games with my childhood friends", song: "SS" },
      { text: "Nowhere", song: "LP" },
      { text: "Frolicking", song: "SG" },
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

function shuffleAnswers(questions) {
  return questions.map((q) => ({
    ...q,
    answers: shuffle(q.asnwers),
  }));
}

export default function SongOffering() {
  const shuffledAnswers = useMemo(() => shuffleAnswers(questions), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //score tracker
    const scores = {
      SS: 0,
      LP: 0,
      SG: 0,
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
  };

  // no answers selected
  if (totalAnswers === 0) {
    alert("Answer at least one question");
    return;
  }

  // determine song
  let topSong = null;
  let maxScore = -1;

  for (const song in scores) {
    if (scores[song] > maxScore) {
      maxScore = scores[song];
      topSong = song;
    }
  }

  const pretty = topSong.charAt(0).toUpperCase() + topSong.slice(1);

  return (
    <form id="SongOfferingQuiz" onSubmit={handleSubmit}>
      <h1>Song Offering Quiz</h1>

      {shuffledQuestions.map((q, qIndex) => (
        <fieldset key={q.id}>
          <legend>{q.legend}</legend>

          {q.answers.map((a, aIndex) => (
            <label key={aIndex}>
              <input type="radio" name={`q${qIndex + 1}`} value={a.song} />
              {a.text}
              <br />
            </label>
          ))}
        </fieldset>
      ))}

      <br />

      <button type="submit">Gimme a song</button>
    </form>
  );
}
