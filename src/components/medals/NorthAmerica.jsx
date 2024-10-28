import { useState } from "react";
import NorthAmericaSVG from "./NorthAmericaSVG";

const NorthAmerica = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("NorthAmerica");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <NorthAmericaSVG
          fillInner={visited ? "#3FAE2A" : "#A1A1AA"}
          fillOuter="white"
        />
      </div>
    </div>
  );
};

export default NorthAmerica;