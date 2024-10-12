import SesionProvider from "./contexts/SesionContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <SesionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirigir a /login */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} /> {/* Si necesitas una ruta específica para Home */}
        </Routes>
      </Router>
    </SesionProvider>
  );
}

export default App;
