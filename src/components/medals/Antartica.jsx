import { useState } from "react";

const Antarctica = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Antártida");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <img
          src={`${process.env.PUBLIC_URL}/continents/Antarctica.svg`}
          alt="Antártida"
          className={`h-40 ${visited ? "bg-falabella" : "bg-gray-400"}`} 
        />
      </div>
    </div>
  );
};

export default Antarctica;
