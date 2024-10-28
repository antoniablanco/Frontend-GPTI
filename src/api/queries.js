export const getRecommendations = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/query`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error en las recomendaciones: ${response.detail}`);
    }

    const data = await response.json();
    return data; // Devolver la respuesta de la API (token, usuario, etc.)
  } catch (error) {
    console.error("Error en la llamada a la API de Historial de recomendaciones:", error);
    throw error;
  }
};
