import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import PreferenceForm from "../components/Preferences/PreferenceForm";

const PreferencePage = () => {
  useEffect(() => {
    document.title = "Preferencias";
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center bg-gray-100"
        style={{ height: "90vh" }}
      >
        <PreferenceForm />
      </div>
    </div>
  );
};

export default PreferencePage;
