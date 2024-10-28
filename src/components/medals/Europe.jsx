import { useState } from "react";
import EuropeSVG from "./EuropeSVG";

const Europe = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Europe");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <EuropeSVG
          fillInner={visited ? "#3FAE2A" : "#A1A1AA"}
          fillOuter="white"
        />
      </div>
    </div>
  );
};

export default Europe;