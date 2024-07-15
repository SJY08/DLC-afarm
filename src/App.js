import React from "react";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PlantChoice from "./pages/PlantChoice";
import ManagePlant from "./pages/ManagePlant";
import DiaryPage from "./pages/DiaryPage";
import WriteDiaryPage from "./pages/WriteDiaryPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/choice" element={<PlantChoice />} />
        <Route path="/manage" element={<ManagePlant />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/write" element={<WriteDiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
