const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");
const personRoutes = require("./src/routes/personRoutes.js");
const departamentosRoutes = require("./src/routes/departamentosRoutes.js");
const hoRoutes = require("./src/routes/houseRoutes.js");
const projectRoutes = require("./src/routes/projectRoutes.js");


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/", personRoutes);
app.use("/", departamentosRoutes);
app.use("/", hoRoutes);
app.use("/", projectRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





