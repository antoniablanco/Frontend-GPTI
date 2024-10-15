import React from "react";
import Navbar from "../components/shared/Navbar";

const RecommendationsPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          ¡Aquí estan tus recomendaciones!
        </h1>
      </div>
    </>
  );
};

export default RecommendationsPage;