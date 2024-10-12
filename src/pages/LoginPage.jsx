import React from "react";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
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
