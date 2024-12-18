const express = require("express");
const router = express.Router();
const {
  registerProject,
  viewProject,
  updateProject,
  deleteProject,
  getCharge
} = require("../controllers/proyectoControllers");

router.post("/proyectos", registerProject);
router.get("/proyectos", viewProject);
router.put("/proyectos/:id", updateProject);
router.delete("/proyectos/:id", deleteProject);
router.get("/proyectos/encargados/:id", getCharge)

module.exports = router;
