const database = require('../../database.js');

// Número de persona en un municipio
const numberPersonMunicipality = async(req, res) => {
    database.query(
        "SELECT * FROM vista_habitantes_municipio",
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send("An error ocurred while processing your request.");
            }else{
                res.send(result);
            }
        }
    )
}

// Número de proyectos en un municipio
const numberProjectsMunicipality = async(req, res) => {
    database.query(
        "SELECT * FROM vista_proyectos_municipio",
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send("An error ocurred while processing your request.");
            }else{
                res.send(result);
            }
        }
    )
}

//Número de eventos de un municipio

const numberEventsMunicipality = async(req, res) => {
    database.query(
        "SELECT * FROM vista_eventos_municipio",
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send("An error ocurred while processing your request.");
            }else{
                res.send(result);
            }
        }
    )
}

//Número de viendas municipio

const numberHomesMunicipality = async(req, res) => {
    database.query(
        "SELECT * FROM vista_eventos_municipio",
        (err,result) => {
            if(err){
                console.error(err);
                res.status(500).send("An error ocurred while processing your request.");
            }else{
                res.send(result);
            }
        }
    )
}

module.exports = {
    numberPersonMunicipality,
    numberEventsMunicipality,
    numberHomesMunicipality,
    numberProjectsMunicipality
}