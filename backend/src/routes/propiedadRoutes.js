const express = require("express");
const router = express.Router();
const {getPropiedad, insertPropiedad, deletePropiedad, updatePropiedad} = require("../controllers/propiedadControllers.js");

//rutas para la tabla propiedad.

//Ver propiedad
router.get('/propiedad', getPropiedad);
//Insertar propiedad
router.post('/insertPropiedad', insertPropiedad);
//Eliminar propiedad
router.delete('/deletePropiedad/:id1/:id2', deletePropiedad);
//Actualizar propiedad
router.put('/updatePropiedad/:id1/:id2', updatePropiedad);

module.exports = router;