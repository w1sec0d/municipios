const express = require("express");
const router = express.Router();
const {
  registerProject,
  viewProject,
  updateProject,
  deleteProject,
} = require("../controllers/proyectoControllers");

router.post("/proyectos", registerProject);
router.get("/proyectos", viewProject);
router.put("/proyectos/:id", updateProject);
router.delete("/proyectos/:id", deleteProject);

module.exports = router;
