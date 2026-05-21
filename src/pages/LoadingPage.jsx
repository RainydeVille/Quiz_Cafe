import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.scss";

export default function LoadingPage() {
  const loadingMessages = ["Brewing fresh quizzes...", "Polishing coffee mugs...", "Finding your favorite seat..."];

  const [message, setMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

      setMessage(randomMessage);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loadingPage">
      <div className="logoWrapper">
        <h1 className="logo">Welcome to Quiz Café</h1>
      </div>
      <div className="loadingWrapper">
        <img className="loadingBar" src="./progression-bar.gif" alt="loading..." />

        <p className="loadingText">{message}</p>
      </div>
    </div>
  );
}
