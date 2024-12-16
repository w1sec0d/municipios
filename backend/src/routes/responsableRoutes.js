const express = require('express');
const router = express.Router();
const {getResponsable,insertResponsable,deleteResponsable,updateResponsable} = require('../controllers/responsableControllers');

//rutas para la tabla responsable.

//Ver responsable
router.get('/responsable', getResponsable);
//Insertar responsable
router.post('/insertResponsable', insertResponsable);
//Eliminar responsable
router.delete('/deleteResponsable/:id1/:id2', deleteResponsable);
//Actualizar responsable
router.put('/updateResponsable/:id1/:id2', updateResponsable);

module.exports = router;