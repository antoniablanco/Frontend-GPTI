import React from "react";

const RecommendationsDisplay = ({ recommendations }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100"
      style={{ width: "100%", height: "40vh", maxHeight: "40vh" }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        ¡Aquí estan tus recomendaciones!
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {!recommendations ? <></> :recommendations.map((recommendation, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={recommendation.flags}
              alt={recommendation.name}
              className="w-32 h-32 object-cover rounded-full"
            />
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {recommendation.name}
            </h2>
            <p className="text-gray-600 text-center mt-2">
              {recommendation.answers}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsDisplay;
