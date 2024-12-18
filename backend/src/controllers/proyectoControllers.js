const database = require("../../database.js");

// Función para formatear las fechas al formato YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const registerProject = async (req, res) => {
  const {
    id_proyecto,
    municipio_nombre,
    nombre,
    presupuesto,
    descripcion,
    fecha_inicio,
    fecha_fin,
    estado,
  } = req.body;

  console.log([
    municipio_nombre,
    nombre,
    presupuesto,
    descripcion,
    fecha_inicio,
    fecha_fin,
    estado,
  ]);

  if (
    !id_proyecto ||
    !nombre ||
    !presupuesto ||
    !descripcion ||
    !fecha_inicio ||
    !fecha_fin ||
    !estado
  ) {
    return res
      .status(400)
      .send("An error occurred while processing your request.");
  }

  if (descripcion.length > 255) {
    return res
      .status(400)
      .send("La descripción no puede exceder los 255 caracteres.");
  }

  const checkMunicipioQuery =
    "SELECT id_municipio FROM MUNICIPIO WHERE nombre = ?";
  database.query(checkMunicipioQuery, [municipio_nombre], (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .send("An error occurred while processing your request.");
    }
    if (results.length === 0) {
      return res.status(400).send("The specified municipality does not exist.");
    }

    const id_municipio = results[0].id_municipio;

    database.query(
      "INSERT INTO `PROYECTO`(`id_proyecto`,`MUNICIPIO_id_municipio`,`nombre`,`presupuesto`,`descripcion`, `fecha_inicio`,  `fecha_fin`, `estado`) VALUES (?,?,?,?,?,?,?,?)",
      [
        id_proyecto,
        id_municipio,
        nombre,
        presupuesto,
        descripcion,
        fecha_inicio,
        fecha_fin,
        estado,
      ],
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

const viewProject = async (req, res) => {
  database.query(
    "SELECT v.*, municipio.nombre AS municipio_nombre FROM PROYECTO v JOIN MUNICIPIO municipio ON v.MUNICIPIO_id_municipio = municipio.id_municipio",
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
      } else {
        // Transformar las fechas al formato YYYY-MM-DD
        const formattedResult = result.map((project) => ({
          ...project,
          fecha_inicio: formatDate(project.fecha_inicio),
          fecha_fin: formatDate(project.fecha_fin),
        }));
        res.send(formattedResult);
      }
    }
  );
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    id_proyecto,
    nombre,
    presupuesto,
    descripcion,
    fecha_inicio,
    fecha_fin,
    estado,
  } = req.body;

  let fieldsToUpdate = [];

  if (id_proyecto) fieldsToUpdate.push(`id_proyecto = '${id_proyecto}'`);
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
  if (descripcion) fieldsToUpdate.push(`descripcion = '${descripcion}'`);
  if (fecha_inicio) fieldsToUpdate.push(`fecha_inicio = '${fecha_inicio}'`);
  if (fecha_fin) fieldsToUpdate.push(`fecha_fin = '${fecha_fin}'`);
  if (estado) fieldsToUpdate.push(`estado = '${estado}'`);

  console.log(fieldsToUpdate);

  if (fieldsToUpdate.length === 0) {
    res.status(400).send("No fields to update.");
    return;
  }

  database.query(
    `UPDATE PROYECTO SET ${fieldsToUpdate.join(
      ", "
    )} WHERE id_proyecto = ${id}`,
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

const deleteProject = async (req, res) => {
  const { id } = req.params;
  database.query(
    "DELETE FROM PROYECTO WHERE id_proyecto = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("An error occurred while processing your request.");
      } else {
        res.send("project delete successfully.");
      }
    }
  );
};

const getCharge = async (req, res) => {
  const { id } = req.params;
  database.query(
    "SELECT * FROM vistaResponsableProyecto WHERE id_proyecto = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error ocurred while processing your request");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  registerProject,
  viewProject,
  updateProject,
  deleteProject,
  getCharge,
};
