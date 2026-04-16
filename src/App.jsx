import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HogwartsHouseQuiz from "./pages/HogwartsHouseQuiz";
import SongOffering from "./pages/SongOffering";

export default function App() {
  return (
    <BrowserRouter basename="/Quiz_Cafe">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hogwartshousequiz" element={<HogwartsHouseQuiz />} />
        <Route path="/songofferingquiz" element={<SongOffering />} />
      </Routes>
    </BrowserRouter>
  );
}
