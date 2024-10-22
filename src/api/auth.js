// auth.js
export const loginAPI = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error en la autenticación: ${data.detail}`);
    }

    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
};

// auth.js
export const register = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error en el registro:", data);
      throw new Error(`Error en la autenticación: ${data.detail}`);
    }

    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
};

export const confirmToken = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error en la autenticación: ${data.detail}`);
    }

    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
}

