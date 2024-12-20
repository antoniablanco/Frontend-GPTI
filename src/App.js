import React from "react";
import SesionProvider from "./contexts/SesionContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PreferencePage from "./pages/PreferencePage";
import RecommendationsPage from "./pages/RecomendationsPage";
import HistoryPage from "./pages/HistoryPage";
import MedalsPage from "./pages/MedalsPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <SesionProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/preferences" element={<PreferencePage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/medals" element={<MedalsPage />} />
          </Routes>
        </SesionProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
