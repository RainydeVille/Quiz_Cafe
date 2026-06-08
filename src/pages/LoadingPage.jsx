import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../utils/shuffle";
import "./LoadingPage.scss";

export default function LoadingPage() {
  //for buttons
  const buttonImages = {
    locked: "./locked.png",
    idle: "./idle.png",
    hover: "./hovered.png",
    pressed: "./pressed.png",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [buttonState, setButtonState] = useState("locked");
  //for messages
  const loadingMessages = ["Brewing fresh quizzes...", "Polishing coffee mugs...", "Finding your favorite seat..."];
  const shuffledMessages = shuffle(loadingMessages);
  const [messageIndex, setMessageIndex] = useState(0);
  //navigation and gif handling
  const navigate = useNavigate();
  const [gifSrc, setGifSrc] = useState("");

  //Timed button change from locked to idle
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setButtonState("idle");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % shuffledMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffledMessages]);

  //gif handling
  useEffect(() => {
    setGifSrc(`./progression-bar.gif?t=${Date.now()}`);
  }, []);

  return (
    <div className="loadingPage">
      <div className="logoWrapper">
        <h1 className="logo">Welcome to Quiz Café</h1>
      </div>
      <div className="loadingWrapper">
        <img className="loadingBar" src={gifSrc} alt="loading..." />

        <p className="loadingText">{isLoading ? shuffledMessages[messageIndex] : ""}</p>
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
          onClick={() => !isLoading && navigate("/home")}
        />
      </div>
    </div>
  );
}
