import React, { useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";

const AzureMap = ({ recommendations }) => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    const map = new atlas.Map(mapRef.current, {
      center: [-100, 40],
      zoom: 3,
      language: "en-US",
      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: process.env.REACT_APP_AZURE_MAPS_KEY, // Clave API de Azure Maps
      },
      showDashboard: false,
      enableAccessibility: false,
      // Evitar que se muestre el logo y otros controles por defecto
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
        controlContainer.remove(); // Removes the entire control container
      }
    });

    return () => map.dispose(); // Limpia el mapa al desmontar el componente
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "50vh" }}>
      {/* Mapa cargado */}
    </div>
  );
};

export default AzureMap;
