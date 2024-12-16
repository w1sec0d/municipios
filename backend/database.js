//Coneccion a la base de datos

const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  connectionLimit: 10, // Número máximo de conexiones en el pool
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
  connection.release(); // Liberar la conexión de vuelta al pool
});

module.exports = db;
