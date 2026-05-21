import { useState } from "react";
import { quizTree } from "../library/questions/songQuestions";
import { getSong } from "../utils/songquizutil";

export default function SongOffering() {
  const [currentId, setCurrentId] = useState("start");
  const currentNode = quizTree[currentId];

  function handleAnswer(nextId) {
    setCurrentId(nextId);
  }

  if (currentNode.result) {
    const { vibe, subVibe } = currentNode.result;

    const song = getSong(vibe, subVibe);

    return (
      <div>
        <h1>Your vibe:</h1>
        <p>
          {vibe} - {subVibe}
        </p>

        <h2>Song for you:</h2>
        <p>
          {song.artist} - {song.title}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>The Song You Need</h1>

      <h2>{currentNode.question}</h2>

      {currentNode.answers?.map((a, i) => (
        <button key={i} onClick={() => handleAnswer(a.next)}>
          {a.text}
        </button>
      ))}
    </div>
  );
}
