import React from "react";
import RecommendationCard from "./RecomendationCard";

const RecommendationsDisplay = ({ recommendations }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{ width: "100%", height: "90vh", maxHeight: "90vh" }}
    >
      <h1
        className="text-3xl font-bold text-gray-800 mb-6 text-center"
        style={{ height: "5vh", maxHeight: "5vh" }}
      >
        ¡Aquí estan tus recomendaciones!
      </h1>

      <div className="overflow-y-auto">
        {!recommendations ? (
          <></>
        ) : (
          recommendations.map((recommendation, index) =>
            recommendation ? (
              <RecommendationCard recommendation={recommendation} key={index} />
            ) : (
              <></>
            )
          )
        )}
      </div>
    </div>
  );
};

export default RecommendationsDisplay;
