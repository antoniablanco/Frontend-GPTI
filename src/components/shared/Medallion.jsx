import { getMedals } from "../../api/medals";
import { useContext, useEffect, useState } from "react";
import { SesionContext } from "../../contexts/SesionContext";
import { useNavigate } from "react-router-dom";

import AfricaSVG from "../medals/SVGs/AfricaSVG";
import AntarcticaSVG from "../medals/SVGs/AntarcticaSVG";
import AsiaSVG from "../medals/SVGs/AsiaSVG";
import EuropeSVG from "../medals/SVGs/EuropeSVG";
import NorthAmericaSVG from "../medals/SVGs/NorthAmericaSVG";
import OceaniaSVG from "../medals/SVGs/OceaniaSVG";
import SouthAmericaSVG from "../medals/SVGs/SouthAmericaSVG";

const Medallion = () => {
  const { medals, hasMedals } = useContext(SesionContext);

  const navigate = useNavigate();

  if (!hasMedals) {
    return (
      <span
        className="text-gray-500 text-lg font-bold px-3 py-2 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer"
        onClick={() => navigate("/medals")}
      >
        ¡No tienes medallas!
      </span>
    );
  }

  return (
    <div
      className="inline-flex justify-center items-center space-x-2 cursor-pointer"
      onClick={() => navigate("/medals")}
    >
      {medals.north_america ? (
        <div className="w-8 h-8">
          <NorthAmericaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.south_america ? (
        <div className="w-8 h-8">
          <SouthAmericaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.europe ? (
        <div className="w-8 h-8">
          <EuropeSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.africa ? (
        <div className="w-8 h-8">
          <AfricaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.asia ? (
        <div className="w-8 h-8">
          <AsiaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.oceania ? (
        <div className="w-8 h-8">
          <OceaniaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
      {medals.antartica ? (
        <div className="w-8 h-8">
          <AntarcticaSVG fillInner="#3FAE2A" fillOuter="white" />
        </div>
      ) : null}
    </div>
  );
};

export default Medallion;
