import React from "react";
import Navbar from "../components/shared/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-500">DestinaAI</h1>
      </div>
    </div>
  );
};

export default HomePage;
