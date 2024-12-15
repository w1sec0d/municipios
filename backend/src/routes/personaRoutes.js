const express = require("express");
const router = express.Router();
const db = require("../../database.js");
const {getPersons, insertPerson, deletePerson, updatePerson} = require("../controllers/personaControllers.js");

//rutas para la tabla persona.

//Ver las personas
router.get('/person', getPersons);

//Insertar una persona
router.post('/insertPerson', insertPerson);

//Eliminar una persona
router.delete('/deletePerson/:id', deletePerson);

//Actualizar una persona
router.put('/updatePerson/:id', updatePerson);
//
module.exports = router;
