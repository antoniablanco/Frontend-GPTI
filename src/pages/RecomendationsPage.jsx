import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import AzureMap from "../components/Recommendatios/AzureMap";
import RecommendationsDisplay from "../components/Recommendatios/RecomendationsDisplay";
import ExampleMap from "../components/Recommendatios/MapExample";
import { useLocation } from "react-router-dom";

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null); // Estado de selección

  const { state } = useLocation();

  useEffect(() => {
    if (Array.isArray(state)) {
      setRecommendations(state);
    } else if (typeof state === "object") {
      setRecommendations([state]);
    }
  }, [state]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        <AzureMap
          recommendations={recommendations}
          selectedRecommendation={selectedRecommendation}
          onSelectRecommendation={setSelectedRecommendation} // Propiedad para manejar selección
        />
        <RecommendationsDisplay
          recommendations={recommendations}
          selectedRecommendation={selectedRecommendation}
          onSelectRecommendation={setSelectedRecommendation} // Función para selección desde el display
        />
      </div>
    </>
  );
};

export default RecommendationsPage;
