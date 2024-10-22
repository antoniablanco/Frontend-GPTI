import axios from "axios";

const PEXELS_API_KEY = process.env.REACT_APP_PEXELS_API_KEY; // Reemplaza esto con tu clave

export const getImages = async (query) => {
  try {
    const response = await axios.get(`https://api.pexels.com/v1/search`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query: query,
        per_page: 3, // Puedes ajustar la cantidad de imágenes a devolver
      },
    });
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching images from Pexels:", error);
    return [];
  }
};
