import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import { SesionContext } from "../../contexts/SesionContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para la confirmación de la contraseña
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const { login } = useContext(SesionContext); // Obtener el token del contexto

  const navigate = useNavigate(); // Crear el hook para redireccionar

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar el mensaje de error
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }
    try {
      // Llamar a la API para autenticar al usuario
      const data = await register(username, password);

      // Hacemos el login con el token que nos devolvió la API
      login(data.token);

      // Redirigir al usuario a la página principal
      navigate("/"); // Redireccionar a la página principale");
    } catch (error) {
      console.error("Error en el registro:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
      setErrorMessage(error.message || "Error en el registro.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Registro</h2>
      <form onSubmit={handleRegister} className="space-y-4">
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
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Registrar usuario
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
