import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SesionContext } from "../../contexts/SesionContext";

const GuestButton = () => {

  const { logout } = useContext(SesionContext); // Obtener las funciones para actualizar el contexto
  const navigate = useNavigate(); // Crear el hook para redireccionar

  const handleGuest = () => {
    // Handle guest login logic here
    console.log("Guest login");
    logout(); // Cerrar sesión
    navigate("/"); // Redireccionar a la página principal
  };

  return (
    <button
      onClick={handleGuest}
      className="w-full px-4 py-2 font-bold text-white bg-falabella rounded-md hover:bg-falabella-dark focus:outline-none focus:ring focus:ring-indigo-200"
    >
      Acceder como invitado
    </button>
  );
};

export default GuestButton;