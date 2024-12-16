const express = require("express");
const router = express.Router();
const {
  getResponsable,
  insertResponsable,
  deleteResponsable,
  updateResponsable,
} = require("../controllers/responsableControllers");

//rutas para la tabla responsable.

//Ver responsable
router.get("/responsables", getResponsable);
//Insertar responsable
router.post("/responsables", insertResponsable);
//Eliminar responsable
router.delete("/responsables/:id1/:id2", deleteResponsable);
//Actualizar responsable
router.put("/responsables/:id1/:id2", updateResponsable);

module.exports = router;
