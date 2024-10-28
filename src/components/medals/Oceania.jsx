import { useState } from "react";
import OceaniaSVG from "./OceaniaSVG";

const Oceania = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Oceania");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <OceaniaSVG
          fillInner={visited ? "#3FAE2A" : "#A1A1AA"}
          fillOuter="white"
        />
      </div>
    </div>
  );
};

export default Oceania;