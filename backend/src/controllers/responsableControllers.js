const database = require('../../database.js');

// ----------------TRAER TODOS LOS RESPONSABLES ----------
const getResponsable = async (req, res) => {
    database.query('SELECT * FROM RESPONSABLE', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send(rows);
    });
};
//-----------------------------------------------------------------

// ---------------- INSERTAR UN RESPONSABLE -------------------------
const insertResponsable = async (req, res) => {
    const {PROYECTO_id_proyecto, PERSONA_id_persona} = req.body;
   
    //llamado para insertar un responsable.
    const query = 
    `INSERT INTO RESPONSABLE 
    (PROYECTO_id_proyecto, PERSONA_id_persona) 
    VALUES ('${PROYECTO_id_proyecto}', '${PERSONA_id_persona}')`;

    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Person inserted successfully.');
    });
};
//-----------------------------------------------------------------

//------------------------ELIMINAR UN RESPONSABLE---------------------
const deleteResponsable = async (req, res) => {
    const { id1, id2 } = req.params;
    const query = `DELETE FROM RESPONSABLE WHERE PROYECTO_id_proyecto = ${id1} AND PERSONA_id_persona = ${id2}`;
    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Person deleted successfully.');
    });
}
//-----------------------------------------------------------------

//-------------------- ACTUALIZAR UN RESPONSABLE ---------------------
const updateResponsable = async (req, res) => {
    const { id1, id2 } = req.params;
    const {PROYECTO_id_proyecto, PERSONA_id_persona} = req.body;

    //Se actualizan los campos que se envian en el body.
    let fieldsToUpdate = [];
    if (PROYECTO_id_proyecto) fieldsToUpdate.push(`PROYECTO_id_proyecto = ${PROYECTO_id_proyecto}`);
    if (PERSONA_id_persona) fieldsToUpdate.push(`PERSONA_id_persona = ${PERSONA_id_persona}`);

    const query = `UPDATE RESPONSABLE SET ${fieldsToUpdate.join(', ')} WHERE PROYECTO_id_proyecto = ${id1} AND PERSONA_id_persona = ${id2}`;

    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Person updated successfully.');
    });
}
//-----------------------------------------------------------------

module.exports = {
    getResponsable,
    insertResponsable,
    deleteResponsable,
    updateResponsable
};
