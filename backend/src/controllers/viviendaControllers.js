const database = require("../../database.js");

const registerHouse = async (req, res) => {
  const { MUNICIPIO_id_municipio, direccion, capacidad, niveles } = req.body;

  if (!direccion || !capacidad || !niveles || !MUNICIPIO_id_municipio) {
    return res
      .status(400)
      .send("An error occurred while processing your request.");
  }

  database.query(
    "INSERT INTO VIVIENDA (MUNICIPIO_id_municipio,direccion,capacidad,niveles) VALUES (?,?,?,?)",
    [MUNICIPIO_id_municipio, direccion, capacidad, niveles],
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
};

const viewHouses = async (req, res) => {
  database.query("SELECT * FROM VIVIENDA", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
    } else {
      res.send(result);
    }
  });
};

const updateHouse = async (req, res) => {
  const { id_vivienda, id_municipio, direccion, capacidad, niveles } = req.body;

  let fieldsToUpdate = [];
  if (id_vivienda) fieldsToUpdate.push(`id_vivienda = '${id_vivienda}'`);
  if (direccion) fieldsToUpdate.push(`direccion = '${direccion}'`);
  if (capacidad) fieldsToUpdate.push(`capacidad = '${capacidad}'`);
  if (niveles) fieldsToUpdate.push(`niveles = '${niveles}'`);

  if (fieldsToUpdate.length === 0) {
    res.status(400).send("No fields to update.");
    return;
  }

  database.query(
    `UPDATE VIVIENDA SET ${fieldsToUpdate.join(
      ", "
    )} WHERE id_vivienda = ${id_vivienda}`,
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
      return res.status(200).send("Entity updated successfully.");
    }
  );
};

const deleteHouse = async (req, res) => {
  const { id } = req.params;
  database.query(
    "DELETE FROM VIVIENDA WHERE id_vivienda = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
      } else {
        res.send("house delete successfully.");
      }
    }
  );
};

const getResidents = async (req, res) => {
  const { id } = req.params;
  database.query(
    "SELECT * FROM vistaResidenciaPersona WHERE id_vivienda = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error ocurred while processing your request.");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  registerHouse,
  viewHouses,
  updateHouse,
  deleteHouse,
  getResidents,
};
