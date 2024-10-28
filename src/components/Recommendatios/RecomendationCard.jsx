import { useEffect, useState } from "react";
import { getImages } from "../../utils/pexels";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Rating from "./RatingStars";

const RecommendationCard = ({ recommendation, onSelect }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const results = await getImages(recommendation.name);
      setImages(results);
    };

    fetchImages();
  }, [recommendation.name]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative">
      {images.length > 0 && (
        <div
          className="relative w-full"
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
        >
          <img
            src={images[currentIndex].src.medium}
            alt={recommendation.name}
            className="w-full h-96 object-cover rounded-md"
          />
          {showButtons && (
            <div className="absolute inset-0 flex justify-between items-center h-full">
              <button
                onClick={handlePrevious}
                disabled={images.length <= 1}
                className="h-full w-1/3 bg-transparent text-gray-800 rounded-md hover:bg-gradient-to-br to-transparent from-gray-50 flex items-center justify-center"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              <button
                onClick={handleNext}
                disabled={images.length <= 1}
                className="h-full w-1/3 bg-transparent text-gray-800 rounded-md hover:bg-gradient-to-br from-transparent to-gray-50 flex items-center justify-center"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
          )}
        </div>
      )}
      <h2 className="text-xl font-bold text-gray-800 mt-4">
        {recommendation.name}
      </h2>
      <p className="text-gray-600 text-center mt-2">{recommendation.answer}</p>

      {/* Botón específico para seleccionar la recomendación */}
      <div className="flex justify-center w-full mt-4">
        {/* Botón específico para seleccionar la recomendación */}
        <button
          onClick={onSelect}
          className="inline-flex items-center justify-center px-4 py-2 bg-falabella text-white rounded hover:bg-falabella-dark"
        >
          <LocationMarkerIcon className="h-6 w-6" />
          <span className="ml-2">¡Ir al lugar!</span>
        </button>
      </div>

      {/* Calificación en la esquina inferior derecha */}
      <div className="absolute bottom-4 right-4">
        <Rating initialRating={recommendation.rating} />
      </div>
    </div>
  );
};

export default RecommendationCard;
