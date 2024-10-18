import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import AzureMap from "../components/Recommendatios/AzureMap";
import RecommendationsDisplay from "../components/Recommendatios/RecomendationsDisplay";
import ExampleMap from "../components/Recommendatios/MapExample";

const RecommendationsPage = () => {
  const [example, setExample] = useState([]);

  useEffect(() => {
    // Creamos una función async dentro de useEffect
    const fetchRecommendations = async () => {
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

      // Filtrar cualquier recomendación que haya sido null por error
      setExample(exampleRecommendations.filter((rec) => rec !== null));
    };

    fetchRecommendations();
  }, []);

  return (
    <>
      <Navbar />
      {/* <ExampleMap recommendations={example} /> */}
      <AzureMap recommendations={example} />
      <RecommendationsDisplay recommendations={example} />
    </>
  );
};

export default RecommendationsPage;
