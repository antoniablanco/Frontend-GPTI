export const sendAnonPreferences = async (
  travelType,
  budget,
  weather,
  duration,
  others
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/destinations_anonymous`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          travel_type: travelType,
          budget,
          weather,
          duration,
          others,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error en las preferencias: ${response.detail}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error(
      "Error en la llamada a la API de Preferencias Anónimas:",
      error
    );
    throw error;
  }
};

export const sendLoggedPreferences = async (
  travelType,
  budget,
  weather,
  duration,
  others,
  token
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/openai/destinations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          travel_type: travelType,
          budget,
          weather,
          duration,
          others,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Error en las preferencias: ${response.detail}`);
    }

    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error(
      "Error en la llamada a la API de Preferencias Logeado:",
      error
    );
    throw error;
  }
};
