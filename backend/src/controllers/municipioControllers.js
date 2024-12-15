const database = require("../../database.js");


// ---------------- OBTENER TODOS LOS MUNICIPIOS ----------------
const getMunicipios = async (req, res) => {
    database.query('SELECT * FROM MUNICIPIO', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send(rows);
    });
};
//-----------------------------------------------------------------

//------------------- INSERTAR MUNICIPIO --------------------------
const insertMunicipio = async (req, res) => {
    const { nombre, area, presupuesto, PERSONA_id_persona, DEPARTAMENTO_id_departamento} = req.body

    //Si las llaves foraneas no se envian, se asigna null.
    const departamentoId= DEPARTAMENTO_id_departamento ? DEPARTAMENTO_id_departamento : null;
    const personaId= PERSONA_id_persona ? PERSONA_id_persona : null;

    const query = 
    `INSERT INTO MUNICIPIO (nombre, area, presupuesto, 
    PERSONA_id_persona, DEPARTAMENTO_id_departamento)
    VALUES ('${nombre}', ${area}, ${presupuesto}, 
    ${personaId}, ${departamentoId})`;    

    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Municipio inserted successfully.');
    });
}
//-----------------------------------------------------------------

//------------------- ELIMINAR MUNICIPIO --------------------------

const deleteMunicipio = async (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM MUNICIPIO WHERE id_municipio = ${id}`;
    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Municipio deleted successfully.');
    });
}
//-----------------------------------------------------------------

//-------------------- MODIFICAR ATRIBUTOS DE MUNICIPIO --------------------
const updateMunicipio = async (req, res) => {
    const { id } = req.params;
    const { nombre, area, presupuesto, PERSONA_id_persona, DEPARTAMENTO_id_departamento} = req.body

    let fieldsToUpdate = [];
    if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
    if (area) fieldsToUpdate.push(`area = ${area}`);
    if (presupuesto) fieldsToUpdate.push(`presupuesto = ${presupuesto}`);
    if (PERSONA_id_persona) fieldsToUpdate.push(`PERSONA_id_persona = ${PERSONA_id_persona}`);
    if (DEPARTAMENTO_id_departamento) fieldsToUpdate.push(`DEPARTAMENTO_id_departamento = ${DEPARTAMENTO_id_departamento}`);

    const query = `UPDATE MUNICIPIO SET ${fieldsToUpdate.join(', ')} WHERE id_municipio = ${id}`;
    database.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send('Municipio updated successfully.');
    });
}

module.exports = {
    getMunicipios,
    insertMunicipio,
    deleteMunicipio,
    updateMunicipio
}