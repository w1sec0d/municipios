const express = require("express");
const router = express.Router();
const {
  registerDepartment,
  viewDepartment,
  updateDepartment,
  deleteDepartment,
  getMunicipiosDepartamento
} = require("../controllers/departamentoControllers");

router.post("/departamentos", registerDepartment);
router.get("/departamentos", viewDepartment);
router.put("/departamentos/:id", updateDepartment);
router.delete("/departamentos/:id", deleteDepartment);
router.get("/departamentos/municipios/:id", getMunicipiosDepartamento);

module.exports = router;
