console.log("Iniciando servidor..."); // Agregado para depuración

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Convertir __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Cargando rutas y configuraciones..."); // Agregado para depuración

// Importar rutas
import clientesRoutes from "./routes/clientesRoutes.js";
import facturasRoutes from "./routes/facturasRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";

// Configurar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use("/public", express.static(path.join(__dirname, "public")));

// Rutas
app.use("/clientes", clientesRoutes);
app.use("/facturas", facturasRoutes);
console.log("✅ Rutas de facturas, clientes y usuarios cargadas correctamente.");

app.use("/usuarios", usuariosRoutes);

const PORT = process.env.PORT || 5000;

console.log("Iniciando servidor en el puerto", PORT); // Agregado para depuración

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
