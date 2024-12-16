const express = require("express");
const router = express.Router();
const { registerHouse, viewHouses, updateHouse, deleteHouse } = require("../controllers/viviendaControllers");

router.post('/registerHouse',registerHouse);
router.get('/viewHouses', viewHouses);
router.put('/updateHouse', updateHouse);
router.delete('/deleteDepartment/:id',deleteHouse)

module.exports = router;