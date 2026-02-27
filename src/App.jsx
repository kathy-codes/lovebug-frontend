import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizManager from "./pages/QuizManager/QuizManager.jsx"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/quizmanager" replace />} />
        <Route path="/quizmanager" element={<QuizManager />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
