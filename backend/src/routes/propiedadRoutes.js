const express = require("express");
const router = express.Router();
const {
  getPropiedad,
  insertPropiedad,
  deletePropiedad,
  updatePropiedad,
} = require("../controllers/propiedadControllers.js");

//rutas para la tabla propiedad.

//Ver propiedad
router.get("/propiedades", getPropiedad);
//Insertar propiedad
router.post("/propiedades", insertPropiedad);
//Eliminar propiedad
router.delete("/propiedades/:id1/:id2", deletePropiedad);
//Actualizar propiedad
router.put("/propiedades/:id1/:id2", updatePropiedad);

module.exports = router;
