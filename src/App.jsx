import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizManager from "./pages/QuizManager/QuizManager.jsx"
import LandingPage from "./pages/LandingPage/LandingPage.jsx"
import ResultPage from "./pages/ResultPage/ResultPage.jsx"

function App() {
  const [responses, setResponses] = useState({
    age: "",
    education: "",
    location: "",
    career_field: "",
    career_ambition: "",
    openness: "",
    extraversion: "",
    agreeableness: "",
    conscientiousness: "",
    chronotype: "",
    spontaneity: "",
    love_language: "",
    emotional_expressiveness: ""
  });


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizmanager" element={<QuizManager responses={responses} setResponses={setResponses} />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
