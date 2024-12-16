const express = require("express");
const router = express.Router();
const { registerProject, viewProject, updateProject, deleteProject } = require("../controllers/projectControllers");

router.post("/registerProject", registerProject);
router.get("/viewProject", viewProject);
router.put("/updateProject", updateProject);
router.delete("/deleteProject/:id", deleteProject);

module.exports = router;
