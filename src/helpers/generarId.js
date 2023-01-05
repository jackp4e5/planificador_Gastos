export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  const id = random + date;

  return id;
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};
