import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { SesionContext } from "../../contexts/SesionContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const { setToken } = useContext(SesionContext); // Obtener el token del contexto

  const navigate = useNavigate(); // Crear el hook para redireccionar

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar el mensaje de error
    try {
      // Llamar a la API para autenticar al usuario
      const data = await login(username, password);
      console.log("Respuesta de la API:", data);

      // Almacenar el token en el almacenamiento local
      localStorage.setItem("token", data.token);
      // Almacenar el token en el contexto de la sesión
      setToken(data.token);
      // Redirigir al usuario a la página principal
      navigate("/"); // Redireccionar a la página principal
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
      setErrorMessage(error.message || "Error en el inicio de sesión.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Inicio de Sesión</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        {errorMessage && ( // Renderizar el mensaje de error si existe
          <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-falabella rounded-md hover:bg-falabella-dark focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
