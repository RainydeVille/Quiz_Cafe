import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.scss";

export default function LoadingPage() {
  //for messages
  const loadingMessages = ["Brewing fresh quizzes...", "Polishing coffee mugs...", "Finding your favorite seat..."];
  const [message, setMessage] = useState(loadingMessages[0]);
  //for buttons
  const buttonImages = {
    locked: "./locked.png",
    idle: "./idle.png",
    hover: "./hovered.png",
    pressed: "./pressed.png",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [buttonState, setButtonState] = useState("locked");

  //messages
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

      setMessage(randomMessage);
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoading]);

  //Timed button change from locked to idle
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setButtonState("idle");
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //unhover
  const handleMouseLeave = () => {
    if (!isLoading) {
      setButtonState("idle");
    }
  };

  return (
    <div className="loadingPage">
      <div className="logoWrapper">
        <h1 className="logo">Welcome to Quiz Café</h1>
      </div>
      <div className="loadingWrapper">
        <img className="loadingBar" src="./progression-bar.gif" alt="loading..." />

        <p className="loadingText">{message}</p>
      </div>
      <div className="startWrapper">
        <img
          className="startBtn"
          src={buttonImages[buttonState]}
          alt="Go to Quiz Cafe"
          onMouseEnter={() => !isLoading && setButtonState("hover")}
          onMouseLeave={() => !isLoading && setButtonState("idle")}
          onMouseDown={() => !isLoading && setButtonState("pressed")}
          onMouseUp={() => !isLoading && setButtonState("hover")}
        />
      </div>
    </div>
  );
}
