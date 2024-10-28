import React, { useState, useEffect, useRef } from "react";
import { MinusCircleIcon } from "@heroicons/react/outline";
import * as atlas from "azure-maps-control";

const AzureMap = ({
  recommendations,
  selectedRecommendation,
  onSelectRecommendation,
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const popupsRef = useRef([]);

  useEffect(() => {
    const newMap = new atlas.Map(mapRef.current, {
      center:
        recommendations.length > 0
          ? [recommendations[0].longitude, recommendations[0].latitude]
          : [0, 0],
      zoom: 1,
      language: "es-ES",
      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: process.env.REACT_APP_AZURE_MAPS_KEY,
      },
      showDashboard: false,
      enableAccessibility: false,
      showLogo: false,
      showFeedbackLink: false,
      showTermsLink: false,
    });

    // Elimina el contenedor de controles
    newMap.events.add("ready", function () {
      const controlContainer = document.querySelector(
        ".atlas-control-container"
      );
      if (controlContainer) {
        controlContainer.remove();
      }
    });

    // Agregamos las recomendaciones al mapa
    recommendations.map((rec) => {
      console.log("Rec:", rec);
      const latitude = rec.latitude;
      const longitude = rec.longitude;
      const name = rec.name;
      const description = rec.answer;

      const marker = new atlas.HtmlMarker({
        position: [longitude, latitude],
        color: "#3fae2a",
        text: "R",
      });

      const popup = new atlas.Popup({
        pixelOffset: [0, -30],
      });

      newMap.events.add("click", marker, () => {
        // Muestra la información del marcador
        popup.setOptions({
          content: `
            <p style="
              padding:10px;
              max-width: 250px;
              max-height: 150px;
              overflow-y: auto;
              border-radius: 8px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              word-wrap: break-word; /* Ajusta las palabras largas */
              word-break: break-word; /* Rompe las palabras largas si es necesario */
              overflow-wrap: break-word; /* Rompe palabras largas */
              white-space: normal; /* Permite que el texto se ajuste como un párrafo */
              ">
              <b>${name}</b><br>
              ${description}
            </p>`,
          position: [longitude, latitude],
        });
        popup.setOptions({
          content: `
            <div style="
              padding:10px;
              max-width: 200px;
              max-height: 150px;
              overflow-y: auto;
              border-radius: 8px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              ">
              <b>${name}</b>
              <br>
              ${description}
            </div>`,
          position: [longitude, latitude],
        });

        // Centra el mapa en la ubicación del marcador
        newMap.setCamera({
          center: [longitude, latitude],
          zoom: 10,
        });

        // Abre el popup
        popup.open(newMap);

        // Selecciona la recomendación
        onSelectRecommendation(rec);
      });

      // Guardamos la referencia del popup
      popupsRef.current.push(popup);

      // Agregamos el marcador y el popup al mapa
      newMap.markers.add(marker);
      newMap.popups.add(popup);
    });

    setMap(newMap);

    return () => {
      if (newMap) {
        newMap.dispose();
      }
    };
  }, [recommendations]);

  useEffect(() => {
    if (selectedRecommendation && map) {
      map.setCamera({
        center: [
          selectedRecommendation.longitude,
          selectedRecommendation.latitude,
        ],
        zoom: 8,
      });
    }
  }, [selectedRecommendation, map]);

  const handleZoomOut = () => {
    if (popupsRef.current.length > 0) {
      popupsRef.current.forEach((popup) => {
        popup.close();
      });
    }
    if (map) {
      map.setCamera({
        zoom: 1,
      });
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "90vh" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
      <button
        onClick={handleZoomOut}
        className="absolute top-4 right-4 bg-white text-gray-600 px-2 pt-1 rounded hover:bg-gray-100"
      >
        <div className="inline-flex justify-center">
          <MinusCircleIcon className="h-6 w-6" />
          <span className="ml-2">Zoom Out</span>
        </div>
      </button>
    </div>
  );
};

export default AzureMap;
