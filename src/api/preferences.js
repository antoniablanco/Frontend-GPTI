export const sendAnonPreferences = async (
  travelType,
  budget,
  weather,
  others,
) => {
  console.log({ travelType, budget, weather, others });
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/destinations_anonymous`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          travelType,
          budget,
          weather,
          others,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error en las preferencias: ${response.message}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de Preferencias Anónimas:", error);
    throw error;
  }
};

export const sendLoggedPreferences = async (
  travelType,
  budget,
  weather,
  others,
  token
) => {
  try {
    console.log({ travelType, budget, weather, others, token });
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/openai/destinations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          travelType,
          budget,
          weather,
          others,
        }),
      }
    );
    const data = await response.json();
    console.log("Respuesta a Logeado:", data);
    if (!response.ok) {
      throw new Error(`Error en las preferencias: ${response.message}`);
    }

    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de Preferencias Logeado:", error);
    throw error;
  }
}
