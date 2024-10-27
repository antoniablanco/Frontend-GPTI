import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import AzureMap from "../components/Recommendatios/AzureMap";
import RecommendationsDisplay from "../components/Recommendatios/RecomendationsDisplay";
import ExampleMap from "../components/Recommendatios/MapExample";
import { useLocation } from "react-router-dom";

const exampleAPI = [
  {
    name: "Ibiza, España",
    latitude: 38.98,
    longitude: 1.43,
    answers:
      "Ibiza es una isla en el mar Mediterráneo conocida por sus hermosas playas de arena blanca y su vibrante vida nocturna. Con un presupuesto de 1,000,000 de dólares, puedes disfrutar de lujosos resorts, yates privados y exclusivos clubes nocturnos. El clima en Ibiza es cálido y soleado durante todo el año, con temperaturas medias de 25 grados Celsius. Además, Ibiza es un destino popular para los amantes de la música electrónica, con muchos de los mejores DJs del mundo actuando en la isla.",
  },
];

const ExampleOld = async () => {
  const countries = ["Chile", "France", "Japan"];

  // Usamos Promise.all para esperar a todas las llamadas fetch
  const exampleRecommendations = await Promise.all(
    countries.map(async (country) => {
      try {
        // Llamada a la API para obtener los datos del país
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const countryData = await response.json();
        const countryInfo = countryData[0];

        console.log("Country info:", countryInfo);

        // Retorna el objeto con la información que necesitamos
        return countryInfo;
      } catch (error) {
        console.error("Error fetching country data:", error);
        return null; // Retornar null si hay un error
      }
    })
  );
};

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  const { state } = useLocation();

  useEffect(() => {
    console.log("State:", state);
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
        <AzureMap recommendations={recommendations} />
        <RecommendationsDisplay recommendations={recommendations} />
      </div>
      {/* <RecommendationsDisplay recommendations={recommendations} /> */}
    </>
  );
};

export default RecommendationsPage;
