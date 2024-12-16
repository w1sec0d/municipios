const express = require("express");
const router = express.Router();
const db = require("../../database.js");
const {
  getPersona,
  insertPersona,
  deletePersona,
  updatePersona,
} = require("../controllers/personaControllers.js");

//rutas para la tabla persona.

//Ver las personas
router.get("/personas", getPersona);

//Insertar una persona
router.post("/personas", insertPersona);

//Eliminar una persona
router.delete("/personas/:id", deletePersona);

//Actualizar una persona
router.put("/personas/:id", updatePersona);

module.exports = router;
