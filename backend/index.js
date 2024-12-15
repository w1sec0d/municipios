const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./database.js");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Solicitud a la raiz
app.get('/', (req, res) => { 
  res.send('test message') //res and requ mean response and request respectively.
})

//Prueba de conexion, solicita la tabla PERSONA
app.get('/persona', (req, res) => {
  db.query('SELECT * FROM `PERSONA`', (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send('An error occurred while processing your request.');
          return;
      }
      res.send(rows);
  });
})