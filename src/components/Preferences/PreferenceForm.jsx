import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SesionContext } from "../../contexts/SesionContext";
import { sendAnonPreferences } from "../../api/preferences";

const PreferenceForm = () => {
  const [travelType, setTravelType] = useState("");
  const [budget, setBudget] = useState("");
  const [destination, setDestination] = useState("");
  const [weather, setWeather] = useState("");
  const [others, setOthers] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const navigate = useNavigate(); // Crear el hook para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // Llamar a la API para autenticar al usuario
      const data = await sendAnonPreferences(
        travelType,
        budget,
        destination,
        weather,
        others
      );
      console.log("Respuesta de la API:", data);

      // Hacemos el login en el contexto
      

      // Redirigir al usuario a la página principal
      navigate("/"); // Redireccionar a la página principal
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
      setErrorMessage(error.message || "Error en el inicio de sesión.");
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
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Tienes un prespuesto?
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              placeholder="Ej: $100.000, estoy corto de lucas, etc."
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              ¿Tienes un destino en mente?
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              placeholder="Ej: Chile, Asia, EEUU, etc."
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
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
            />
          </div>
          {errorMessage && ( // Renderizar el mensaje de error si existe
            <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-falabella rounded-md hover:bg-falabella-dark focus:outline-none focus:ring focus:ring-indigo-200"
          >
            ¡Buscar Viajes!
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreferenceForm;
