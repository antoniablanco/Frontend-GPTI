import SesionProvider from "./contexts/SesionContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PreferencePage from './pages/PreferencePage';
import RecommendationsPage from "./pages/RecomendationsPage";

function App() {
  return (
    <SesionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/preferences" element={<PreferencePage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
        </Routes>
      </Router>
    </SesionProvider>
  );
}

export default App;
