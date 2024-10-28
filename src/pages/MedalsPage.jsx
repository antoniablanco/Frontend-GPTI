import { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import MedalHolder from "../components/medals/MedalsHolder";

const MedalsPage = () => {
  useEffect(() => {
    document.title = "Tus medallas";
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center bg-gray-100 overflow-y-auto"
        style={{ height: "90vh" }}
      >
        <h1 className="text-5xl font-bold">¡Tus Medallas!</h1>
        <MedalHolder />
      </div>
    </>
  );
};

export default MedalsPage;
