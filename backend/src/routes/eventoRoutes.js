const express = require("express");
const router = express.Router();
const {
  getEvento,
  insertEvento,
  deleteEvento,
  updateEvento,
} = require("../controllers/eventoControllers.js");

//rutas para la tabla evento.

//Ver los eventos
router.get("/eventos", getEvento);
//Insertar un evento
router.post("/eventos", insertEvento);
//Eliminar un evento
router.delete("/eventos/:id", deleteEvento);
//Actualizar un evento
router.put("/eventos/:id", updateEvento);
module.exports = router;
