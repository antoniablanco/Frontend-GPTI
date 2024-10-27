import { useState } from "react";
import AntarcticaSVG from "./AntarcticaSVG";

const Antarctica = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Antártida");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <AntarcticaSVG
          fillInner={visited ? "#3FAE2A" : "#A1A1AA"}
          fillOuter="white"
        />
      </div>
    </div>
  );
};

export default Antarctica;
