import SesionProvider from "./contexts/SesionContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <SesionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </Router>
    </SesionProvider>
  );
}

export default App;
