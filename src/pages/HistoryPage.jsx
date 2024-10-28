import { useState, useEffect, useContext } from "react";
import Navbar from "../components/shared/Navbar";
import RecsTable from "../components/History/RecsTable";
import { getRecommendations } from "../api/queries";
import { SesionContext } from "../contexts/SesionContext";

const HistoryPage = () => {
  const { isAuthenticated, token } = useContext(SesionContext);

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    document.title = "Historial de recomendaciones";
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    getRecommendations(token)
      .then((data) => {
        console.log(data);
        // Actualizar el estado de las recomendaciones
        setRecommendations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center bg-gray-100"
        style={{ height: "90vh", maxHeight: "90vh" }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 p-6">
          Historial de recomendaciones
        </h1>
        <div className="w-4/5 overflow-y-auto" style={{ maxHeight: "50vh" }}>
          <RecsTable recommendations={recommendations} />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
