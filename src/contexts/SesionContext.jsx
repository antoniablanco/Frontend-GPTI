// Crea el contexto de la sesión del usuario
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { confirmToken } from "../api/auth";
import { getMedals } from "../api/medals";

export const SesionContext = createContext();

const SesionProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [medals, setMedals] = useState({
    north_america: false,
    south_america: false,
    europe: false,
    africa: false,
    asia: false,
    oceania: false,
    antartica: false,
  });
  const [hasMedals, setHasMedals] = useState(false);

  const navigate = useNavigate();

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  // Intente obtener el token del almacenamiento local y confirmar si es válido
  // Si no es válido, elimine el token del almacenamiento local
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    const checkToken = async () => {
      if (storedToken) {
        try {
          await confirmToken(storedToken);
          login(storedToken);
        } catch (error) {
          logout();
        }
      }
    };

    checkToken();
  }, []);

  // Obtener las medallas del usuario
  useEffect(() => {
    const fetchMedals = async () => {
      try {
        const data = await getMedals(token);
        setMedals(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedals();
  }, [token]);

  useEffect(() => {
    const allMedals = [
      "north_america",
      "south_america",
      "europe",
      "africa",
      "asia",
      "oceania",
      "antartica",
    ];
    setHasMedals(allMedals.some((medal) => medals[medal]));
  }, [medals]);

  return (
    <SesionContext.Provider
      value={{
        isAuthenticated,
        token,
        medals,
        hasMedals,
        setIsAuthenticated,
        setToken,
        setMedals,
        setHasMedals,
        login,
        logout,
      }}
    >
      {children}
    </SesionContext.Provider>
  );
};

export default SesionProvider;
