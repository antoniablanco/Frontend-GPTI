import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SesionContext } from "../../contexts/SesionContext";
import {
  sendAnonPreferences,
  sendLoggedPreferences,
} from "../../api/preferences";
import LoadingSpinner from "../shared/Loading";

const PreferenceForm = () => {
  const [travelType, setTravelType] = useState("");
  const [budget, setBudget] = useState("");
  const [weather, setWeather] = useState("");
  const [others, setOthers] = useState("");
  const [duration, setDuration] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error
  const [loading, setLoading] = useState(false); // Estado para el spinner de carga

  const navigate = useNavigate(); // Crear el hook para redireccionar

  const { isAuthenticated, token } = useContext(SesionContext); // Obtener el estado de autenticación

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    try {
      // Llamar a la API para autenticar al usuario
      let data;
      setLoading(true); // Mostrar el spinner de carga
      if (!isAuthenticated) {
        data = await sendAnonPreferences(travelType, budget, weather, duration, others);
      } else {
        data = await sendLoggedPreferences(
          travelType,
          budget,
          weather,
          duration,
          others,
          token
        );
      }
      setLoading(false); // Ocultar el spinner de carga

      // Redirigir al usuario a la página principal
      navigate("/recommendations", { state: data.coordinates }); // Redireccionar a la página de recomendaciones
    } catch (error) {
      console.error("Error en el envío de preferencias:", error.message);
      // Manejar el error, mostrar un mensaje al usuario, etc.
      setErrorMessage(error.message);
      setLoading(false); // Ocultar el spinner de carga
    }
  };

  return (
    <div className="flex items-center h-screen justify-center w-1/3">
      <div className="w-full p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Preferencias de tu viaje
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Qué tipo de viaje te gustaría?
            </label>
            <input
              type="text"
              id="travelType"
              value={travelType}
              placeholder="Aventura, Cultural, Relajación, etc."
              onChange={(e) => setTravelType(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Tienes un prespuesto? (USD)
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              placeholder="Ej: $100.000"
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Tienes un clima deseado?
            </label>
            <input
              type="text"
              id="weather"
              value={weather}
              placeholder="Ej: Soleado, Con nieve, etc."
              onChange={(e) => setWeather(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Cuánto tiempo tienes disponible? (Días)
            </label>
            <input
              type="number"
              id="duration"
              value={duration}
              placeholder="Ej: 7 días"
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Tienes otras preferencias que te gustaría dejar?
            </label>
            <textarea
              type=""
              id="others"
              value={others}
              placeholder="Deja aquí otras preferencias que te gustaría agregar."
              onChange={(e) => setOthers(e.target.value)}
              className="w-full h-40 p-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              disabled={loading}
            />
          </div>
          {errorMessage && ( // Renderizar el mensaje de error si existe
            <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
          )}
          {loading ? (
            <div className="flex justify-center">
              <LoadingSpinner color="#2563EB" />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-falabella rounded-md hover:bg-falabella-dark focus:outline-none focus:ring focus:ring-indigo-200"
            >
              ¡Buscar Viajes!
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PreferenceForm;
