import React from "react";
import Navbar from "../components/shared/Navbar";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/preferences"); // Redirecciona a la página de recomendaciones
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          ¡Explora el mundo a tu manera con DestinaAI!
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Descubre tu próximo destino ideal con recomendaciones personalizadas
          basadas en tu estilo de viaje.
        </p>
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-falabella text-white font-bold text-xl rounded-md hover:bg-falabella-dark transition duration-300"
        >
          ¡Comienza tu aventura ahora!
        </button>
      </div>
    </>
  );
};

export default HomePage;
