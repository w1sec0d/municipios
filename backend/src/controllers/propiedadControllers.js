const database = require("../../database.js");

// ---------------- PROPIEDADES ----------
const getPropiedad = async (req, res) => {
  database.query("SELECT * FROM PERSONA_has_VIVIENDA", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send(rows);
  });
};

// ---------------- INSERTAR PROPIEDAD -------------------------
const insertPropiedad = async (req, res) => {
  const { PERSONA_id_persona, VIVIENDA_id_vivienda } = req.body;

  //llamado para insertar un propiedad.
  const query = `INSERT INTO PERSONA_has_VIVIENDA
    (PERSONA_id_persona, VIVIENDA_id_vivienda)
    VALUES (${PERSONA_id_persona}, ${VIVIENDA_id_vivienda})`;

  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Propiedad created successfully.");
  });
};
//-----------------------------------------------------------------

//------------------------ELIMINAR PROPIEDAD---------------------
const deletePropiedad = async (req, res) => {
  const { id1, id2 } = req.params;
  const query = `DELETE FROM PERSONA_has_VIVIENDA WHERE PERSONA_id_persona = ${id1} AND VIVIENDA_id_vivienda = ${id2}`;
  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Propiedad deleted successfully.");
  });
};
//-----------------------------------------------------------------
//-------------------- ACTUALIZAR UN PROPIEDAD ---------------------
const updatePropiedad = async (req, res) => {
  const { id1, id2 } = req.params;
  const { PERSONA_id_persona, VIVIENDA_id_vivienda } = req.body;

  let fieldsToUpdate = [];
  if (PERSONA_id_persona)
    fieldsToUpdate.push(`PERSONA_id_persona = ${PERSONA_id_persona}`);
  if (VIVIENDA_id_vivienda)
    fieldsToUpdate.push(`VIVIENDA_id_vivienda = ${VIVIENDA_id_vivienda}`);

  const query = `UPDATE PERSONA_has_VIVIENDA SET ${fieldsToUpdate.join(
    ", "
  )} WHERE PERSONA_id_persona = ${id1} AND VIVIENDA_id_vivienda = ${id2}`;

  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Propiedad updated successfully.");
  });
};
//-----------------------------------------------------------------

module.exports = {
  getPropiedad,
  insertPropiedad,
  deletePropiedad,
  updatePropiedad,
};
