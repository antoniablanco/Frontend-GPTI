import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const navigate = useNavigate(); // Crear el hook para redireccionar

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar el mensaje de error
    try {
      // Llamar a la API para autenticar al usuario
      const data = await login(username, password);
      console.log("Respuesta de la API:", data);

      // Aquí puedes manejar lo que haces con la respuesta de la API (por ejemplo, almacenar el token)
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
      setErrorMessage(error.message || 'Error en el inicio de sesión.'); 
    }
  };

  const handleGuest = () => {
    // Handle guest login logic here
    console.log("Guest login");
    navigate("/"); // Redireccionar a la página principal
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
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
        <hr />
        <button
          onClick={handleGuest}
          className="w-full px-4 py-2 font-bold text-white bg-falabella rounded-md hover:bg-falabella-dark focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Acceder como invitado
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
