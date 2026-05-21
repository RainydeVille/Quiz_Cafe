import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.scss";

export default function LoadingPage() {
  const navigate = useNavigate();

  return (
    <div className="loading-page">
      <div className="logoWrapper">
        <h1 className="logo">Welcome to Quiz Café</h1>
      </div>
      <div className="loadingWrapper">
        <img className="loadingBar" src="./progression-bar.gif" alt="loading..." />

        <p className="loading-text">Preparing your table...</p>
      </div>
    </div>
  );
}
