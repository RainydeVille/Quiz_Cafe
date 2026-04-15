import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Quiz Café ☕</h1>
      <h3>Choose a quiz:</h3>
      <Link to="/hogwartshousequiz">Howarts House Quiz</Link>
    </div>
  );
}
