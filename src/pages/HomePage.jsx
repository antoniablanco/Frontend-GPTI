import React from "react";
import Navbar from "../components/shared/Navbar";
import PreferenceForm from "../components/Preferences/PreferenceForm";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <PreferenceForm />
      </div>
    </div>
  );
};

export default HomePage;
