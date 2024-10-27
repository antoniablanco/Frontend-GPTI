// Función para formatear la fecha
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return `${date.toLocaleDateString(
    "es-ES",
    options
  )}, ${date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
