import { useEffect, useRef } from "react";
import RecommendationCard from "./RecomendationCard";

const RecommendationsDisplay = ({
  recommendations,
  onChangeRecommendations,
  selectedRecommendation,
  onSelectRecommendation,
}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (selectedRecommendation && scrollRef.current) {
      const index = recommendations.findIndex(
        (rec) => rec === selectedRecommendation
      );
      const cardElement = scrollRef.current.children[index];
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedRecommendation, recommendations]);

  const changeRecommendation = (rec, value) => {
    const newRecommendations = recommendations.map((r) => {
      if (r === rec) {
        return { ...r, stars: value };
      }
      return r;
    }
    );
    onChangeRecommendations(newRecommendations);
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{ width: "100%", height: "90vh", maxHeight: "90vh" }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ¡Aquí están tus recomendaciones!
      </h1>
      <div className="overflow-y-auto space-y-4" ref={scrollRef}>
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            recommendation={rec}
            onSelect={() => onSelectRecommendation(rec)}
            onChangeRecommendation={(value) => changeRecommendation(rec, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsDisplay;
