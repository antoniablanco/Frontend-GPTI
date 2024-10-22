// Crea el contexto de la sesión del usuario
import React, { createContext, useEffect, useState } from "react";
import { confirmToken } from "../api/auth";

export const SesionContext = createContext();

const SesionProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Intente obtener el token del almacenamiento local y confirmar si es válido
  // Si no es válido, elimine el token del almacenamiento local
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("Token almacenado:", storedToken);
      try {
        confirmToken(storedToken);
        login(storedToken);
        console.log("Token confirmado:", storedToken);
      } catch (error) {
        logout();
        console.error("Token no válido:", storedToken);
      }
    }
  }, []);

  return (
    <SesionContext.Provider
      value={{
        isAuthenticated,
        token,
        setIsAuthenticated,
        setToken,
        login,
        logout,
      }}
    >
      {children}
    </SesionContext.Provider>
  );
};

export default SesionProvider;
