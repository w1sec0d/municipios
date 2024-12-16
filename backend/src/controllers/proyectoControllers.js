const database = require("../../database.js");

const registerProject = async(req, res) => {

    const {id_municipio, nombre, presupesto, descripcion, fecha_inicio, fecha_fin, estado} = req.body;

    if (!id_municipio || !nombre || !presupesto || !descripcion || !fecha_inicio || !fecha_fin || !estado) { 
        return res.status(400).send('An error occurred while processing your request.'); }

    if (descripcion.length > 255) { 
        return res.status(400).send('La descripción no puede exceder los 255 caracteres.'); }

    database.query('INSERT INTO `PROYECTO`(`MUNICIPIO_id_municipio`,`nombre`,`presupesto`,`descripcion`, `fecha_inicio`,  `fecha_fin`, `estado`) VALUES (?,?,?,?,?,?,?)',
        [id_municipio, nombre, presupesto, descripcion, fecha_inicio, fecha_fin, estado], (err, result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send('successfully.');
            }
        }
    )

}

const viewProject = async(req, res) => {

    database.query('SELECT * FROM PROYECTO',
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send(result);
            }
        });

}

const updateProject = async(req, res) => {

    const {id_proyecto,id_municipio, nombre, presupesto, descripcion, fecha_inicio, fecha_fin, estado} = req.body;

    let fieldsToUpdate = [];
    
    if(nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
    if(presupesto) fieldsToUpdate.push(`presupesto = '${presupesto}'`);
    if(descripcion) fieldsToUpdate.push(`descripcion = '${descripcion}'`);
    if(fecha_inicio) fieldsToUpdate.push(`fecha_inicio = '${fecha_inicio}'`);
    if(fecha_fin) fieldsToUpdate.push(`fecha_fin = '${fecha_fin}'`);
    if(estado) fieldsToUpdate.push(`estado = '${estado}'`);

    if(fieldsToUpdate.length === 0){
        res.status(400).send('No fields to update.');
        return;
    }

    database.query(`UPDATE PROYECTO SET ${fieldsToUpdate.join(', ')} WHERE id_proyecto = ${id_proyecto}`,
    (err, result) => {
        if(err){
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
        }else{
            res.send('project updated successfully.');
        }
    });

}

const deleteProject = async(req, res) => {

    const { id } = req.params;
    database.query('DELETE FROM PROYECTO WHERE id_proyecto = ?',[id],
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send('project delete successfully.');
            }
        }
    )

}

module.exports = {

    registerProject,
    viewProject,
    updateProject,
    deleteProject
};