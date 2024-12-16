const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");


const departamentosRoutes = require("./src/routes/departamentoRoutes.js");
const hoRoutes = require("./src/routes/viviendaRoutes.js");
const projectRoutes = require("./src/routes/proyectoRoutes.js");

const personaRoutes = require("./src/routes/personaRoutes.js");
const municipioRoutes = require("./src/routes/municipioRoutes.js");
const eventoRoutes = require("./src/routes/eventoRoutes.js");
const propiedadRoutes = require("./src/routes/propiedadRoutes.js");
const responsableRoutes = require("./src/routes/responsableRoutes.js");



const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());


app.use("/", departamentosRoutes);
app.use("/", hoRoutes);
app.use("/", projectRoutes);

app.use("/", personaRoutes);
app.use("/", municipioRoutes);
app.use("/", eventoRoutes);
app.use("/", propiedadRoutes);
app.use("/", responsableRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





