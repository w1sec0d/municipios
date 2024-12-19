const database = require("../../database.js");

// ---------------- OBTENER TODOS LOS MUNICIPIOS ----------------
const getMunicipios = async (req, res) => {
  database.query("SELECT * FROM MUNICIPIO", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send(rows);
  });
};
//-----------------------------------------------------------------

//------------------- INSERTAR MUNICIPIO --------------------------
const insertMunicipio = async (req, res) => {
  const {
    nombre,
    area,
    presupuesto,
    PERSONA_id_persona,
    DEPARTAMENTO_id_departamento,
  } = req.body;

  //Si las llaves foraneas no se envian, se asigna null.
  const personaId = PERSONA_id_persona ? PERSONA_id_persona : null;

  const query = `INSERT INTO MUNICIPIO (nombre, area, presupuesto, 
    PERSONA_id_persona, DEPARTAMENTO_id_departamento)
    VALUES ('${nombre}', ${area}, ${presupuesto}, 
    ${personaId}, ${DEPARTAMENTO_id_departamento})`;

  database.query(query, (err, rows) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res
          .status(409)
          .send("Duplicate entry: An Entity with this ID already exists.");
      } else {
        console.error(err);
        return res
          .status(500)
          .send("An error occurred while processing your request.");
      }
    }
    return res.status(200).send("Entity created successfully.");
  });
};
//-----------------------------------------------------------------

//------------------- ELIMINAR MUNICIPIO --------------------------

const deleteMunicipio = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM MUNICIPIO WHERE id_municipio = ${id}`;
  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Municipio deleted successfully.");
  });
};
//-----------------------------------------------------------------

//-------------------- MODIFICAR ATRIBUTOS DE MUNICIPIO --------------------
const updateMunicipio = async (req, res) => {
  const { id } = req.params;
  const { id_municipio, nombre, area, presupuesto, PERSONA_id_persona } =
    req.body;

  let fieldsToUpdate = [];
  if (id_municipio) fieldsToUpdate.push(`id_municipio = '${id_municipio}'`);
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (area) fieldsToUpdate.push(`area = ${area}`);
  if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
  if (PERSONA_id_persona !== undefined) {
    fieldsToUpdate.push(
      `PERSONA_id_persona = ${
        PERSONA_id_persona === null ? "NULL" : PERSONA_id_persona
      }`
    );
  }

  const query = `UPDATE MUNICIPIO SET ${fieldsToUpdate.join(
    ", "
  )} WHERE id_municipio = ${id}`;
  database.query(query, (err, rows) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res
          .status(409)
          .send("Duplicate entry: An Entity with this ID already exists.");
      } else {
        console.error(err);
        return res
          .status(500)
          .send("An error occurred while processing your request.");
      }
    }
    return res.status(200).send("Entity updated successfully.");
  });
};

//----------------VER EVENTOS POR MUNICIPIO----------------------------
const getEventosMunicipio = async (req, res) => {
  const { id } = req.params;
  database.query(
    "SELECT * FROM vistaEventosMunicipio WHERE id_municipio = ?",
    [id],
    (err, rows) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
        return;
      }
      res.send(rows);
    }
  );
};

module.exports = {
  getMunicipios,
  insertMunicipio,
  deleteMunicipio,
  updateMunicipio,
  getEventosMunicipio,
};
