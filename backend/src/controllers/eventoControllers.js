const database = require("../../database.js");

// Función para formatear las fechas al formato YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

//------------------- OBTENER TODOS LOS EVENTOS --------------------------
const getEvento = async (req, res) => {

    database.query('SELECT v.*, municipio.nombre AS municipio_nombre FROM EVENTO v JOIN MUNICIPIO municipio ON v.MUNICIPIO_id_municipio = municipio.id_municipio', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }else{
            // Transformar las fechas al formato YYYY-MM-DD
            const formattedResult = rows.map((event) => ({
                ...event,
                fecha_inicio: formatDate(event.fecha_inicio),
                fecha_fin: formatDate(event.fecha_fin),
            }));
            res.send(formattedResult);
        }
    });
};
//-----------------------------------------------------------------

// ------------------- INSERTAR UN EVENTO -------------------------
const insertEvento = async (req, res) => {

    const {nombre, presupuesto, descripcion, fecha_inicio, fecha_fin, municipio_nombre} = req.body

    if (!municipio_nombre || !nombre || !presupuesto || !descripcion || !fecha_inicio || !fecha_fin) { 
        return res.status(400).send('An error occurred while processing your request.'); }

    if (descripcion.length > 255) { 
        return res.status(400).send('La descripción no puede exceder los 255 caracteres.'); }

    const checkMunicipioQuery = 'SELECT id_municipio FROM MUNICIPIO WHERE nombre = ?';
    database.query(checkMunicipioQuery, [municipio_nombre], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while processing your request.');
        }
        if (results.length === 0) {
            return res.status(400).send('The specified municipality does not exist.');
        }

        const id_municipio = results[0].id_municipio;

        database.query('INSERT INTO EVENTO (MUNICIPIO_id_municipio, nombre, presupuesto, descripcion, fecha_inicio, fecha_fin) VALUES (?,?,?,?,?,?)',
            [id_municipio, nombre, presupuesto, descripcion, fecha_inicio, fecha_fin], (err, result) => {
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
        });

};

//-----------------------------------------------------------------

// ------------------- ELIMINAR UN EVENTO -------------------------
const deleteEvento = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM EVENTO WHERE id_evento = ${id}`;

  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Evento deleted successfully.");
  });
};

//-----------------------------------------------------------------

// ------------------- MODIFICAR ATRIBUTOS DE EVENTO --------------------
const updateEvento = async (req, res) => {
  
  const { id } = req.params;
  const {
    id_evento,
    nombre,
    presupuesto,
    descripcion,
    fecha_inicio,
    fecha_fin,
    MUNICIPIO_id_municipio,
  } = req.body;

  // Se crea un arreglo con los campos a modificar.
  let fieldsToUpdate = [];
  if (id_evento) fieldsToUpdate.push(`id_evento = '${id_evento}'`);
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
  if (descripcion) fieldsToUpdate.push(`descripcion = '${descripcion}'`);
  if (fecha_inicio) fieldsToUpdate.push(`fecha_inicio = '${fecha_inicio}'`);
  if (fecha_fin) fieldsToUpdate.push(`fecha_fin = '${fecha_fin}'`);
  if (MUNICIPIO_id_municipio)
    fieldsToUpdate.push(`MUNICIPIO_id_municipio = ${MUNICIPIO_id_municipio}`);

  const query = `UPDATE EVENTO SET ${fieldsToUpdate.join(
    ", "
  )} WHERE id_evento = ${id}`;
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

module.exports = {
  getEvento,
  insertEvento,
  deleteEvento,
  updateEvento,
};
