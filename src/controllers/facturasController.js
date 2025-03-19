export const obtenerFacturas = (req, res) => {
  res.json({ mensaje: "Lista de facturas" });
};

export const agregarFactura = (req, res) => {
  res.json({ mensaje: "Factura agregada" });
};

export const generarFactura = async (req, res) => {
  try {
    res.json({ message: "Ruta generarFactura funcionando correctamente." });
  } catch (error) {
    console.error("Error en generarFactura:", error);
    res.status(500).json({ error: "Error al generar la factura." });
  }
};
