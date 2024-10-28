export const getMedals = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/medal_table/my_medal_table`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener las medallas");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateMedal = async (token, medal, value) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/medal_table/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [medal]: value }),
      }
    );

    if (!response.ok) {
      throw new Error("Error al actualizar la medalla");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
