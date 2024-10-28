import { useState, useEffect, useContext } from "react";
import { SesionContext } from "../../contexts/SesionContext";
import { getMedals, updateMedal } from "../../api/medals";

import NorthAmericaSVG from "./SVGs/NorthAmericaSVG";
import SouthAmericaSVG from "./SVGs/SouthAmericaSVG";
import EuropeSVG from "./SVGs/EuropeSVG";
import AfricaSVG from "./SVGs/AfricaSVG";
import AsiaSVG from "./SVGs/AsiaSVG";
import OceaniaSVG from "./SVGs/OceaniaSVG";
import AntarcticaSVG from "./SVGs/AntarcticaSVG";

const MedalHolder = () => {
  const { medals, setMedals } = useContext(SesionContext);

  const { token } = useContext(SesionContext);

  const handleChange = async (medal) => {
    try {
      const data = await updateMedal(token, medal, !medals[medal]);
      setMedals(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-8 space-x-4 space-y-4">
      {
        // Muestra la medalla de norteamerica solo si north_america es llave de medals
        medals.north_america !== undefined && (
          <div
            onClick={() => handleChange("north_america")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <NorthAmericaSVG
              fillInner={medals.north_america ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de sudamerica solo si south_america es llave de medals
        medals.south_america !== undefined && (
          <div
            onClick={() => handleChange("south_america")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <SouthAmericaSVG
              fillInner={medals.south_america ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de europa solo si europe es llave de medals
        medals.europe !== undefined && (
          <div
            onClick={() => handleChange("europe")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <EuropeSVG
              fillInner={medals.europe ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de africa solo si africa es llave de medals
        medals.africa !== undefined && (
          <div
            onClick={() => handleChange("africa")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <AfricaSVG
              fillInner={medals.africa ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de asia solo si asia es llave de medals
        medals.asia !== undefined && (
          <div
            onClick={() => handleChange("asia")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <AsiaSVG
              fillInner={medals.asia ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de oceania solo si oceania es llave de medals
        medals.oceania !== undefined && (
          <div
            onClick={() => handleChange("oceania")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <OceaniaSVG
              fillInner={medals.oceania ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
      {
        // Muestra la medalla de antartida solo si antarctica es llave de medals
        medals.antartica !== undefined && (
          <div
            onClick={() => handleChange("antartica")}
            className="cursor-pointer p-4 bg-white rounded-2xl"
          >
            <AntarcticaSVG
              fillInner={medals.antartica ? "#3FAE2A" : "A1A1AA"}
              fillOuter="white"
            />
          </div>
        )
      }
    </div>
  );
};

export default MedalHolder;
