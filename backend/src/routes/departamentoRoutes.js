const express = require("express");
const router = express.Router();
const {
  registerDepartment,
  viewDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departamentoControllers");

router.post("/departamentos", registerDepartment);
router.get("/departamentos", viewDepartment);
router.put("/departamentos/:id", updateDepartment);
router.delete("/departamentos/:id", deleteDepartment);

module.exports = router;
