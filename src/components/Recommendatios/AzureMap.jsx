import React, { useState, useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";

const AzureMap = ({ recommendations }) => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const map = new atlas.Map(mapRef.current, {
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
    map.events.add("ready", function () {
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

      map.events.add("click", marker, () => {
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
        map.setCamera({
          center: [longitude, latitude],
          zoom: 10,
        });

        // Abre el popup
        popup.open(map);
      });

      map.markers.add(marker);
      map.popups.add(popup);
    });

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [recommendations]);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "90vh" }}>
      {/* Mapa cargado */}
    </div>
  );
};

export default AzureMap;
