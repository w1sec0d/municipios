const express = require("express");
const router = express.Router();
const {
  registerHouse,
  viewHouses,
  updateHouse,
  deleteHouse,
} = require("../controllers/viviendaControllers");

router.post("/viviendas", registerHouse);
router.get("/viviendas", viewHouses);
router.put("/viviendas/:id", updateHouse);
router.delete("/viviendas/:id", deleteHouse);

module.exports = router;
