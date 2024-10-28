import React, { useEffect } from "react";
import RegisterForm from "../components/Login/RegisterForm";
import GuestButton from "../components/Login/GuestButton";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Registro";
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <RegisterForm />
            <p className="text-center text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Inicia sesión aquí
              </Link>
            </p>
            <hr />
            <GuestButton />
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col items-center justify-center">
        <h1 className="text-gray-500 font-bold text-6xl">DestinaAI</h1>
        <h3 className="text-gray-300 font-bold text-2xl mt-4">by</h3>
        <img
          src={`${process.env.PUBLIC_URL}/Viajes_Falabella.svg`}
          alt="Viajes Falabella logo"
          className="w-full mt-4"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
