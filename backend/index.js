const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");
const personaRoutes = require("./src/routes/personaRoutes.js");
const municipioRoutes = require("./src/routes/municipioRoutes.js");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/", personaRoutes);
app.use("/", municipioRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





