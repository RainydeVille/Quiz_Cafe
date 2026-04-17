import { useMemo } from "react";
import { questions } from "../library/questions/songQuestions";
import { shuffleAnswers } from "../utils/shuffle-answers";

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
    for (let i = 1; i <= questions.length; i++) {
      const answer = formData.get(`q${i}`);
      if (answer) {
        scores[answer]++;
        totalAnswers++;
      }
    }

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

    alert(`Your song is... ${pretty.toUpperCase()}! 🪄`);
  };

  return (
    <form id="SongOfferingQuiz" onSubmit={handleSubmit}>
      <h1>Song Offering Quiz</h1>

      {shuffledAnswers.map((q, qIndex) => (
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
