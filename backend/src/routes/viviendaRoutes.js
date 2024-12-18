const express = require("express");
const router = express.Router();
const {
  registerHouse,
  viewHouses,
  updateHouse,
  deleteHouse,
  getResidents,
} = require("../controllers/viviendaControllers");

router.post("/viviendas", registerHouse);
router.get("/viviendas", viewHouses);
router.put("/viviendas/:id", updateHouse);
router.delete("/viviendas/:id", deleteHouse);
router.get("/viviendas/residentes/:id", getResidents)

module.exports = router;
