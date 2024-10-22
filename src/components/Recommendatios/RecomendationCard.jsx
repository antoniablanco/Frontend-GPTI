import { useEffect, useState } from "react";
import { getImages } from "../../utils/pexels";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const RecommendationCard = ({ recommendation }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual
  const [showButtons, setShowButtons] = useState(false); // Estado para mostrar los botones

  useEffect(() => {
    const fetchImages = async () => {
      const results = await getImages(recommendation.name); // Llama a la API
      setImages(results);
    };

    fetchImages();
  }, [recommendation.name]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Avanza al siguiente índice
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Regresa al índice anterior
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      {images.length > 0 && (
        <div
          className="relative w-full" // Contenedor relativo para la imagen
          onMouseEnter={() => setShowButtons(true)} // Muestra los botones al pasar el mouse
          onMouseLeave={() => setShowButtons(false)} // Oculta los botones al salir el mouse
        >
          <img
            src={images[currentIndex].src.medium} // Muestra la imagen actual
            alt={recommendation.name}
            className="w-full h-96 object-cover rounded-md"
          />
          {showButtons && ( // Muestra los botones solo si showButtons es true
            <div className="absolute inset-0 flex justify-between items-center h-full">
              <button
                onClick={handlePrevious}
                disabled={images.length <= 1} // Desactiva si solo hay una imagen
                className="h-full w-1/3 bg-transparent text-gray-800 rounded-md hover:bg-gradient-to-br to-transparent from-gray-50 flex items-center justify-center"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              <button
                onClick={handleNext}
                disabled={images.length <= 1} // Desactiva si solo hay una imagen
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
    </div>
  );
};

export default RecommendationCard;
