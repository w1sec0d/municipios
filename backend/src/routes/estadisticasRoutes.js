const express = require("express");
const router = express.Router();
const { 
    numberEventsMunicipality,
    numberHomesMunicipality,
    numberPersonMunicipality,
    numberProjectsMunicipality
 } = require("../controllers/estadisticasControllers");

router.get("/numberEventsMunicipality",numberEventsMunicipality);
router.get("/numberHomesMunicipality",numberHomesMunicipality);
router.get("/numberPersonMunicipality", numberPersonMunicipality);
router.get("/numberProjectsMunicipality",numberProjectsMunicipality);

module.exports = router;