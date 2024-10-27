import { useState } from "react";

const Asia = () => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    console.log("Asia");
    setVisited(!visited);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="p-4 bg-white rounded-2xl"> {/* Agrega el padding y el color aquí */}
        <img
          src={`${process.env.PUBLIC_URL}/continents/Asia.svg`}
          alt="Asia"
          className={`h-40 ${visited ? "bg-falabella" : "bg-gray-400"}`} 
        />
      </div>
    </div>
  );
};

export default Asia;