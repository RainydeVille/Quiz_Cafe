import { useState } from "react";
import { quizTree } from "../library/questions/songQuestions";

export default function SongOffering() {
  const [currentId, setCurrentId] = useState("start");
  const currentNode = quizTree[currentId];

  function handleAnswer(nextId) {
    setCurrentId(nextId);
  }

  if (currentNode.result) {
    return (
      <div>
        <h1>Your Vibe:</h1>
        <p>
          {currentNode.result.vibe} - {currentNode.result.subVibe}
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
