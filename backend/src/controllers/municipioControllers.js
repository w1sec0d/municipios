const database = require("../../database.js");

// ---------------- OBTENER TODOS LOS MUNICIPIOS ----------------
const getMunicipios = async (req, res) => {
  database.query(
    "SELECT v.*, departamento.nombre AS departamento_nombre, persona.nombre AS gobernador FROM MUNICIPIO v JOIN DEPARTAMENTO departamento ON v.DEPARTAMENTO_id_departamento = departamento.id_departamento JOIN PERSONA persona ON v.PERSONA_id_persona = persona.id_persona",
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
//-----------------------------------------------------------------

//------------------- INSERTAR MUNICIPIO --------------------------
const insertMunicipio = async (req, res) => {
  const {
    id_municipio,
    nombre,
    area,
    presupuesto,
    gobernador,
    departamento_nombre,
  } = req.body;

  //Si las llaves foraneas no se envian, se asigna null.
  const personaId = gobernador ?? "NULL";
  console.log(departamento_nombre);
  const query = `SELECT id_departamento FROM DEPARTAMENTO WHERE nombre = ?`;
  database.query(query, [departamento_nombre], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    const iDdepartamento = rows[0].id_departamento ?? "NULL";

    database.query(
      `INSERT INTO MUNICIPIO (nombre, area, presupuesto, PERSONA_id_persona, DEPARTAMENTO_id_departamento) VALUES ( ?, ?, ?, ?, ?)`,
      [nombre, area, presupuesto, personaId, iDdepartamento],
      (err, result) => {
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
      }
    );
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
  const { nombre, area, presupuesto, gobernador, departamento_nombre } =
    req.body;

  let fieldsToUpdate = [];
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (area) fieldsToUpdate.push(`area = ${area}`);
  if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
  if (gobernador !== undefined) {
    fieldsToUpdate.push(
      `PERSONA_id_persona = ${gobernador === null ? "NULL" : gobernador}`
    );
  }
  if (departamento_nombre)
    fieldsToUpdate.push(
      `DEPARTAMENTO_id_departamento = (SELECT id_departamento FROM DEPARTAMENTO WHERE nombre = '${departamento_nombre}')`
    );

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
