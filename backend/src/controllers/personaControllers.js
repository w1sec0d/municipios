const database = require("../../database.js");

// ----------------TRAER TODAS LAS PERSONAS CON ATRIBUTOS----------
const getPersona = async (req, res) => {
  database.query("SELECT * FROM PERSONA", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send(rows);
  });
};
//-----------------------------------------------------------------

// ---------------- INSERTAR UNA PERSONA -------------------------
const insertPersona = async (req, res) => {
  const {
    id_persona,
    nombre,
    telefono,
    edad,
    sexo,
    VIVIENDA_id_vivienda,
    PERSONA_id_persona,
  } = req.body;

  //Si las llaves foraneas no se envian, se asigna null al igual que el sexo.
  const viviendaID = VIVIENDA_id_vivienda ? VIVIENDA_id_vivienda : null;
  const personaID = PERSONA_id_persona ? PERSONA_id_persona : null;
  const sx = sexo ? sexo : null;

  //llamado para insertar una persona.
  const query = `INSERT INTO PERSONA 
    (id_persona, nombre, telefono, edad, sexo, VIVIENDA_id_vivienda, PERSONA_id_persona) 
    VALUES ('${id_persona}','${nombre}', '${telefono}', ${edad}, 
    '${sx}', ${viviendaID}, ${personaID})`;

  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.status(200).send("Person inserted successfully.");
  });
};
//-----------------------------------------------------------------

//------------------------ELIMINAR UNA PERSONA---------------------
const deletePersona = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM PERSONA WHERE id_persona = ${id}`;
  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
    }
    res.status(200).json({ message: "Person deleted successfully." });
  });
};
//-----------------------------------------------------------------

// Actualizar una persona.
const updatePersona = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    telefono,
    edad,
    sexo,
    VIVIENDA_id_vivienda,
    PERSONA_id_persona,
  } = req.body;

  // Validar que al menos un campo sea enviado. y agregarlos a un array para luego actualizarlos.
  let fieldsToUpdate = [];
  if (nombre) fieldsToUpdate.push(`nombre = '${nombre}'`);
  if (telefono) fieldsToUpdate.push(`telefono = '${telefono}'`);
  if (edad) fieldsToUpdate.push(`edad = ${edad}`);
  if (sexo !== undefined) {
    fieldsToUpdate.push(`sexo = ${sexo === null ? "NULL" : `'${sexo}'`}`);
  }
  if (VIVIENDA_id_vivienda !== undefined) {
    fieldsToUpdate.push(
      `VIVIENDA_id_vivienda = ${
        VIVIENDA_id_vivienda === null ? "NULL" : VIVIENDA_id_vivienda
      }`
    );
  }
  if (PERSONA_id_persona !== undefined) {
    fieldsToUpdate.push(
      `PERSONA_id_persona = ${
        PERSONA_id_persona === null ? "NULL" : PERSONA_id_persona
      }`
    );
  }

  if (fieldsToUpdate.length === 0) {
    res.status(400).send("No fields to update.");
    return;
  }
  
  const query = `UPDATE PERSONA SET ${fieldsToUpdate.join(
    ", "
  )} WHERE id_persona = ${id}`;

  database.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing your request.");
      return;
    }
    res.send("Person updated successfully.");
  });
};
//-----------------------------------------------------------------

//VER PERSONAS QUE DEPENDEN DE LA PERSONA

const getDependientes = async (req, res) => {
    const { id } = req.params;
    database.query('SELECT * FROM vistaPersonaCabezaFamilia WHERE id_cabeza_familia = ?', [id], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send(rows);
    });
}

const getPropiedades = async (req, res) => {
    const { id } = req.params;
    
    database.query('SELECT * FROM vistaPropiedad WHERE id_persona = ?', [id], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while processing your request.');
            return;
        }
        res.send(rows);
    });
}

module.exports = {
    getPersona,
    insertPersona,
    deletePersona,
    updatePersona,
    getDependientes,
    getPropiedades
};
