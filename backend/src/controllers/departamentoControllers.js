const database = require("../../database.js");

//Registrar un departamento
const registerDepartment = async(req,res) => {

    const {nombre, area, poblacion} = req.body;

    database.query('INSERT INTO `DEPARTAMENTO`(`nombre`,`area`,`poblacion`) VALUES (?,?,?)',
        [nombre,area,poblacion], (err, result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send('successfully.');
            }
        }
    )
};

//Ver los departamentos
const viewDepartment = async (req,res) => {

    database.query('SELECT * FROM DEPARTAMENTO',
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send(result);
            }
        });
};

//Actualizar un departamento
const updateDepartment = async(req, res) => {


    const {id, nombre, area, poblacion} = req.body;

    let fieldsToUpdate = [];
    if(nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
    if(area) fieldsToUpdate.push(`area = '${area}'`);
    if(poblacion) fieldsToUpdate.push(`poblacion = '${poblacion}'`);

    if(fieldsToUpdate.length === 0){
        res.status(400).send('No fields to update.');
        return;
    }

    database.query(`UPDATE DEPARTAMENTO SET ${fieldsToUpdate.join(', ')} WHERE id_departamento = ${id}`,
(err, result) => {
    if(err){
        console.error(err);
        res.status(500).send('An error occurred while processing your request.');
    }else{
        res.send('departament updated successfully.');
    }
});
};


//Eliminar un departamento
const deleteDepartment = async(req, res) => {

    const { id } = req.params;
    database.query('DELETE FROM DEPARTAMENTO WHERE id_departamento = ?',[id],
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send('departament delete successfully.');
            }
        }
    )
};

//Ver municipios de un departamento
const getMunicipiosDepartamento = async(req, res) => {
    const { id } = req.params;
    database.query('SELECT * FROM vistaMunicipioDepartamento WHERE id_departamento = ?', [id],
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send('An error occurred while processing your request.');
            }else{
                res.send(result);
            }
        }
    )
}

module.exports = {
    registerDepartment,
    viewDepartment,
    updateDepartment,
    deleteDepartment,
    getMunicipiosDepartamento
};



