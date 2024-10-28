import Navbar from "../components/shared/Navbar";
import Antarctica from "../components/medals/Antarctica";
import Asia from "../components/medals/Asia";
import Africa from "../components/medals/Africa";
import Europe from "../components/medals/Europe";

const MedalsPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center bg-gray-100 overflow-y-auto"
        style={{ height: "90vh" }}
      >
        <h1 className="text-5xl font-bold">
            ¡Tus Medallas!
        </h1>
        <Antarctica />
        <Asia />
        <Africa />
        <Europe />
      </div>
    </>
  );
};

export default MedalsPage;
