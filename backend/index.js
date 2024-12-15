const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");
const personRoutes = require("./src/routes/personRoutes.js");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/", personRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





