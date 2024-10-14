// auth.js
export const login = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la autenticación: ${response.message}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
};

// auth.js
export const register = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la autenticación: ${response.message}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
};

export const confirmToken = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la autenticación: ${response.message}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
}

