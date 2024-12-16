const express = require("express");
const router = express.Router();
const {getEvento,insertEvento,deleteEvento,updateEvento} = require("../controllers/eventoControllers.js");


//rutas para la tabla evento.

//Ver los eventos
router.get('/evento', getEvento);
//Insertar un evento
router.post('/insertEvento', insertEvento);
//Eliminar un evento
router.delete('/deleteEvento/:id', deleteEvento);
//Actualizar un evento
router.put('/updateEvento/:id', updateEvento);
module.exports = router;