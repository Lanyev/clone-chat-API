const express = require("express");

const responseHandlers = require("./utils/handleResponses");

// Crea una aplicación de Express
const app = express();

// Define una ruta raíz para la aplicación
app.get("/", (req, res) => {
  // Envía una respuesta HTTP con un código de estado 200, un mensaje y un objeto de datos
  responseHandlers.success({
    res,
    status: 200,
    message: "Servidor inicializado correctamente",
    data: {
      users: "http://localhost:9000/api/v1/users",
      conversations: "http://localhost:9000/api/v1/conversations",
    },
  });
});

// Define una ruta para manejar todas las solicitudes a URL que no coincidan con ninguna de las otras rutas
app.use("*", (req, res) => {
  // Envía una respuesta HTTP con un código de estado 404 y un mensaje
  responseHandlers.error({
    res,
    status: 404,
    message: "URL no encontrada, por favor intente con http://localhost:9000/",
  });
});

// Inicia el servidor en el puerto 9000
app.listen(9000, () => {
  // Muestra un mensaje en la consola cuando el servidor esté listo
  console.log("Server started at port 9000");
});
