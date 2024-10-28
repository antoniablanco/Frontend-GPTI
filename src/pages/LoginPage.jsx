import React, { useEffect } from "react";
import LoginForm from "../components/Login/LoginForm";
import GuestButton from "../components/Login/GuestButton";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Iniciar sesión";
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <LoginForm />
            <p className="text-center text-sm text-gray-500">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Regístrate aquí
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

export default LoginPage;
