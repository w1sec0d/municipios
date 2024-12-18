const database = require('../../database.js')

// Función para formatear las fechas al formato YYYY-MM-DD
const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

//------------------- OBTENER TODOS LOS EVENTOS --------------------------
const getEvento = async (req, res) => {
    database.query('SELECT * FROM EVENTO', (err, rows) => {
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
    const {nombre, presupuesto, descripcion, fecha_inicio, fecha_fin, MUNICIPIO_id_municipio} = req.body

    const query =
        `INSERT INTO EVENTO (nombre, presupuesto, descripcion, fecha_inicio, fecha_fin, MUNICIPIO_id_municipio)
        VALUES ('${nombre}', ${presupuesto}, '${descripcion}',
         '${fecha_inicio}', '${fecha_fin}', ${MUNICIPIO_id_municipio})`;

    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Evento inserted successfully.');
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
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Evento deleted successfully.');
    }
    );
}

//-----------------------------------------------------------------

// ------------------- MODIFICAR ATRIBUTOS DE EVENTO --------------------
const updateEvento = async (req, res) => {
    const { id } = req.params;
    const { nombre, presupuesto, descripcion, fecha_inicio, fecha_fin, MUNICIPIO_id_municipio } = req.body

    // Se crea un arreglo con los campos a modificar.
    let fieldsToUpdate = [];
    if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
    if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
    if (descripcion) fieldsToUpdate.push(`descripcion = '${descripcion}'`);
    if (fecha_inicio) fieldsToUpdate.push(`fecha_inicio = '${fecha_inicio}'`);
    if (fecha_fin) fieldsToUpdate.push(`fecha_fin = '${fecha_fin}'`);
    if (MUNICIPIO_id_municipio) fieldsToUpdate.push(`MUNICIPIO_id_municipio = ${MUNICIPIO_id_municipio}`);

    const query = `UPDATE EVENTO SET ${fieldsToUpdate.join(', ')} WHERE id_evento = ${id}`;
    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Evento updated successfully.');
    });
}

module.exports = {
    getEvento,
    insertEvento,
    deleteEvento,
    updateEvento
}
