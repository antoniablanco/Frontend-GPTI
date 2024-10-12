// Crea el contexto de la sesión del usuario
import React, { createContext, useState } from 'react';

export const SesionContext = createContext();

const SesionProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <SesionContext.Provider value={{ token, setToken }}>
      {children}
    </SesionContext.Provider>
  );
}

export default SesionProvider;