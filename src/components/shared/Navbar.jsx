import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SesionContext } from "../../contexts/SesionContext";
import {
  LoginIcon,
  UserAddIcon,
  LogoutIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import Medallion from "./Medallion";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(SesionContext);

  return (
    <nav className="bg-white p-4 shadow-md max-h-20 sticky">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sección izquierda */}
        <div className="flex items-center space-x-4 text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <p className="text-gray-500 font-bold">DestinaAI</p>
            <p className="text-gray-300 font-bold text-sm">by</p>
            <img
              src={`${process.env.PUBLIC_URL}/Viajes_Falabella.svg`}
              alt="Viajes Falabella logo"
              className="h-8 w-auto"
            />
          </Link>
          {isAuthenticated && (
            <Link
              to="/history"
              className="inline-flex items-center space-x-1 text-gray-500 text-lg font-bold px-3 py-2 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out"
            >
              <ClockIcon className="h-6 w-6" />
              <span className="hidden md:inline">Historial</span>
            </Link>
          )}
        </div>

        {/* Sección central */}
        <div className="mx-auto flex items-center justify-center">
          {/* Aquí puedes agregar cualquier componente que quieras centrar */}
          <Medallion />
        </div>

        {/* Sección derecha */}
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={logout}
                className="inline-flex items-center space-x-1 text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                <LogoutIcon className="h-6 w-6" />
                <span className="hidden md:inline">Cerrar sesión</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-flex items-center space-x-1 text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                <LoginIcon className="h-6 w-6" />
                <span className="hidden md:inline">Iniciar sesión</span>
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center space-x-1 text-white px-4 py-2 rounded-md bg-falabella hover:bg-falabella-dark"
              >
                <UserAddIcon className="h-6 w-6" />
                <span className="hidden md:inline">Registrarse</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
