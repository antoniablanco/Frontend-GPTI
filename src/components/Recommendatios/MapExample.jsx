import React, { useState, useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";
import "azure-maps-control/dist/atlas.min.css";

const ExampleMap = ({ recommendations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    const loadMap = () => {
      map = new atlas.Map(mapRef.current, {
        authOptions: {
          authType: "subscriptionKey",
          subscriptionKey: process.env.REACT_APP_AZURE_MAPS_KEY,
        },
        center:
          recommendations.length > 0
            ? [
                recommendations[0].capitalInfo.latlng[1],
                recommendations[0].capitalInfo.latlng[0],
              ]
            : [0, 0],
        zoom: 1,
        view: "Auto",
      });
      console.log("Map loaded");
      map.events.add("ready", () => {
        recommendations.forEach((rec) => {
          const [lat, lng] = rec.capitalInfo.latlng;
          const name = rec.name.common;
          const capital = rec.capital[0];
          const marker = new atlas.HtmlMarker({
            position: [lng, lat],
            color: "DodgerBlue",
            text: "R",
          });

          const popup = new atlas.Popup({
            pixelOffset: [0, -30],
          });

          map.events.add("click", marker, () => {
            popup.setOptions({
              position: [lng, lat],
              content: `<div style="padding:10px;"><b>${name}</b><br>${capital}</div>`,
            });

            popup.open(map);
          });

          map.markers.add(marker);
          map.popups.add(popup);
        });
      });
    };

    if (!mapRef.current) {
      console.error("Map container not found");
      return;
    }

    console.log("Loading map...");
    loadMap();
    console.log("Map:", map);

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

export default ExampleMap;
