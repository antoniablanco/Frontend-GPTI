export const sendAnonPreferences = async (
  travelType,
  budget,
  weather,
  others
) => {
  console.log({ travelType, budget, weather, others });
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/anon/preferences`,
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
    console.error("Error en la llamada a la API de login:", error);
    throw error;
  }
};
