import React, { useState, useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";

const AzureMap = ({ recommendations }) => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const map = new atlas.Map(mapRef.current, {
      center: [0, 0],
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
      const latitude = rec.latitude;
      const longitude = rec.longitude;
      const name = rec.name;
      const description = rec.answers;

      const marker = new atlas.HtmlMarker({
        position: [longitude, latitude],
        color: "#3fae2a",
        text: "R",
      });

      const popup = new atlas.Popup({
        pixelOffset: [0, -30],
      });

      map.events.add("click", marker, () => {
        popup.setOptions({
          content: `<div style="padding:10px;"><b>${name}</b><br>${description}</div>`,
          position: [longitude, latitude],
        });
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
    <div ref={mapRef} style={{ width: "100%", height: "50vh" }}>
      {/* Mapa cargado */}
    </div>
  );
};

export default AzureMap;
