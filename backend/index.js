const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");
const personaRoutes = require("./src/routes/personaRoutes.js");
const municipioRoutes = require("./src/routes/municipioRoutes.js");
const eventoRoutes = require("./src/routes/eventoRoutes.js");
const propiedadRoutes = require("./src/routes/propiedadRoutes.js");
const responsableRoutes = require("./src/routes/responsableRoutes.js");


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/", personaRoutes);
app.use("/", municipioRoutes);
app.use("/", eventoRoutes);
app.use("/", propiedadRoutes);
app.use("/", responsableRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





