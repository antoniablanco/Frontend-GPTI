import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SesionContext } from "../../contexts/SesionContext"; // Asumiendo que tienes un contexto para manejar la sesión

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(SesionContext); // Supongo que tienes un contexto de sesión

  return (
    <nav className="bg-white p-4 shadow-md max-h-20 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            {/* Nombre del sitio */}
            <p className="text-gray-500 font-bold">DestinaAI</p>
            {/* Texto 'by' */}
            <p className="text-gray-300 font-bold text-sm">by</p>
            {/* Logo de Viajes Falabella */}
            <img
              src={`${process.env.PUBLIC_URL}/Viajes_Falabella.svg`}
              alt="Viajes Falabella logo"
              className="h-8 w-auto" // Ajusta el tamaño del logo si es necesario
            />
          </Link>
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden md:flex space-x-6 ml-8 mr-auto">
          {isAuthenticated ? (
            <>
              <Link
                to="/history"
                className="text-gray-500 font-bold px-3 py-2 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out"
              >
                Historial
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Botones de autenticación */}
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={logout}
                className="text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
