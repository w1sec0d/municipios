const express = require("express");
const router = express.Router();
const {
  getMunicipios,
  insertMunicipio,
  deleteMunicipio,
  updateMunicipio,
} = require("../controllers/municipioControllers.js");

//rutas para la tabla municipio.

//Ver los municipios
router.get("/municipios", getMunicipios);
//Insertar un municipio
router.post("/municipios", insertMunicipio);
//Eliminar un municipio
router.delete("/municipios/:id", deleteMunicipio);
//Actualizar un municipio
router.put("/municipios/:id", updateMunicipio);

module.exports = router;
