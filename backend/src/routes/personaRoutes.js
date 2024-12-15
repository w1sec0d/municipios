const express = require("express");
const router = express.Router();
const db = require("../../database.js");
const {getPersona, insertPersona, deletePersona, updatePersona} = require("../controllers/personaControllers.js");

//rutas para la tabla persona.

//Ver las personas
router.get('/persona', getPersona);

//Insertar una persona
router.post('/insertPersona', insertPersona);

//Eliminar una persona
router.delete('/deletePersona/:id', deletePersona);

//Actualizar una persona
router.put('/updatePersona/:id', updatePersona);
//
module.exports = router;
