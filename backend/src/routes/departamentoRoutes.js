const express = require("express");
const router = express.Router();
const { registerDepartment, viewDepartment, updateDepartment, deleteDepartment } = require("../controllers/departamentoControllers");

router.post('/registerDepartment',registerDepartment);
router.get('/viewDepartment',viewDepartment);
router.put('/updateDepartment',updateDepartment);
router.delete('/deleteDepartment/:id',deleteDepartment);

module.exports = router;