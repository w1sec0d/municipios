const database = require("../../database.js");

//Registrar un departamento
const registerDepartment = async (req, res) => {
  const { id_departamento, nombre, area, poblacion } = req.body;

  database.query(
    "INSERT INTO `DEPARTAMENTO`(`id_departamento`,`nombre`,`area`,`poblacion`) VALUES (?,?,?,?)",
    [id_departamento, nombre, area, poblacion],
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

//Ver los departamentos
const viewDepartment = async (req, res) => {
  database.query("SELECT * FROM DEPARTAMENTO", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
    } else {
      res.send(result);
    }
  });
};

//Actualizar un departamento
const updateDepartment = async (req, res) => {
  const { id } = req.params;
  const { id_departamento, nombre, area, poblacion } = req.body;

  let fieldsToUpdate = [];
  if (id_departamento)
    fieldsToUpdate.push(`id_departamento = '${id_departamento}'`);
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (area) fieldsToUpdate.push(`area = '${area}'`);
  if (poblacion) fieldsToUpdate.push(`poblacion = '${poblacion}'`);

  if (fieldsToUpdate.length === 0) {
    res.status(400).send("No fields to update.");
    return;
  }

  database.query(
    `UPDATE DEPARTAMENTO SET ${fieldsToUpdate.join(
      ", "
    )} WHERE id_departamento = ${id}`,
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

//Eliminar un departamento
const deleteDepartment = async (req, res) => {
  const { id } = req.params;
  database.query(
    "DELETE FROM DEPARTAMENTO WHERE id_departamento = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
      } else {
        res.send("departament delete successfully.");
      }
    }
  );
};

//Ver municipios de un departamento
const getMunicipiosDepartamento = async (req, res) => {
  const { id } = req.params;
  database.query(
    "SELECT * FROM vistaMunicipioDepartamento WHERE id_departamento = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  registerDepartment,
  viewDepartment,
  updateDepartment,
  deleteDepartment,
  getMunicipiosDepartamento,
};
