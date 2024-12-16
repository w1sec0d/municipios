const express = require("express");
const router = express.Router();
const {getMunicipios, insertMunicipio, deleteMunicipio,updateMunicipio} = require("../controllers/municipioControllers.js");

//rutas para la tabla municipio.

//Ver los municipios
router.get('/municipio', getMunicipios);
//Insertar un municipio
router.post('/insertMunicipio', insertMunicipio);
//Eliminar un municipio
router.delete('/deleteMunicipio/:id', deleteMunicipio);
//Actualizar un municipio
router.put('/updateMunicipio/:id', updateMunicipio);

module.exports = router;

