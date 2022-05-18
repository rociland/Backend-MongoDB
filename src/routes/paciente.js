const express = require('express');

const router = express.Router();

const resource = 'pacientes'

const route = `/${resource}`

var pacienteController = require('../../controllers/paciente.controllers')

// CONSULTAR
router.get( route, pacienteController.getAll ) 

router.get( `${route}/buscar/id/:id`, pacienteController.getPacientePorID)

router.get( `${route}/buscar/:documento`, pacienteController.getPacientePorDocu )

router.get( `${route}/buscar/apellido/:apellido`, pacienteController.getPacientePorApellido )

router.get( `${route}/buscar/:apellido/:nombre/:documento`, pacienteController.getPacientePorNyAyD )


//CREAR
router.post( `${route}/crear`, pacienteController.addPaciente )

// ACTUALIZAR
router.put( `${route}/modificar/:id`, pacienteController.updatePaciente ) //modifica un paciente

//BORRAR
router.delete( `${route}/borrar/:docu`, pacienteController.deletePacientePorDocu )


module.exports = router;