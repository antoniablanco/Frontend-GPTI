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

const Format = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl">
        <SouthAmericaSVG
          fillInner={visited ? "#3FAE2A" : "#A1A1AA"}
          fillOuter="white"
        />
      </div>
    </div>
  );
};

const MedalHolder = () => {
  const [medals, setMedals] = useState({
    north_america: false,
    south_america: false,
    europe: false,
    africa: false,
    asia: false,
    oceania: false,
    antartica: false,
  });

  const { token } = useContext(SesionContext);

  useEffect(() => {
    const fetchMedals = async () => {
      try {
        const data = await getMedals(token);
        setMedals(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedals();
  }, [token]);

  const handleChange = async (medal) => {
    console.log("Clicked", medal);
    try {
      const data = await updateMedal(token, medal, !medals[medal]);
      setMedals(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {
        // Muestra la medalla de norteamerica solo si north_america es llave de medals
        medals.north_america !== undefined && (
          <div
            onClick={() => handleChange("north_america")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <NorthAmericaSVG
                fillInner={medals.north_america ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de sudamerica solo si south_america es llave de medals
        medals.south_america !== undefined && (
          <div
            onClick={() => handleChange("south_america")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <SouthAmericaSVG
                fillInner={medals.south_america ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de europa solo si europe es llave de medals
        medals.europe !== undefined && (
          <div
            onClick={() => handleChange("europe")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <EuropeSVG
                fillInner={medals.europe ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de africa solo si africa es llave de medals
        medals.africa !== undefined && (
          <div
            onClick={() => handleChange("africa")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <AfricaSVG
                fillInner={medals.africa ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de asia solo si asia es llave de medals
        medals.asia !== undefined && (
          <div onClick={() => handleChange("asia")} className="cursor-pointer">
            <div className="p-4 bg-white rounded-2xl">
              <AsiaSVG
                fillInner={medals.asia ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de oceania solo si oceania es llave de medals
        medals.oceania !== undefined && (
          <div
            onClick={() => handleChange("oceania")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <OceaniaSVG
                fillInner={medals.oceania ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
      {
        // Muestra la medalla de antartida solo si antarctica es llave de medals
        medals.antartica !== undefined && (
          <div
            onClick={() => handleChange("antartica")}
            className="cursor-pointer"
          >
            <div className="p-4 bg-white rounded-2xl">
              <AntarcticaSVG
                fillInner={medals.antartica ? "#3FAE2A" : "A1A1AA"}
                fillOuter="white"
              />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default MedalHolder;
