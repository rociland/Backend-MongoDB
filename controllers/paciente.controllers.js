const pacienteService = require('../services/paciente.service')
const er = `Necesita estar logeado para poder realizar la accion requerida`;

const getAll =  async ( req, res ) => {  //OBTENER TODOS LOS PACIENTES
    try {
        const result = await pacienteService.getAll();
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorID = async ( req, res ) => {  //OBTENER PACIENTE POR ID (PRIMARY KEY)
    try {
        const result = await pacienteService.getPacientePorID(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorDocu = async ( req, res ) => {  //OBTENER PACIENTE POR DOCUMENTO 
    try {
        const result = await pacienteService.getPacientePorDocu(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorApellido = async ( req, res ) => {  //OBTENER UN PACIENTE POR APELLIDO
    try {
        const result = await pacienteService.getPacientePorApellido(req.params);
        res.status(200).send(result);
    
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorNyAyD = async ( req, res ) => {  //OBTENER UN PACIENTE POR APELLIDO, NOMBRE Y DOCU
    try {
        const result = await pacienteService.getPacientePorNyAyD(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const updatePaciente = async ( req, res ) => { // ACTUALIZAR PACIENTE POR ID (PRIMARY KEY)
    try {
        const result = await pacienteService.updatePaciente(req.body, req.params);
        res.status(200).send(result);
    
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const addPaciente = async ( req, res ) => { //DAR DE ALTA PACIENTE
    try {
       
        const result = await pacienteService.addPaciente(req.body)
        res.status(200).send(result);
        
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const deletePacientePorDocu = async ( req, res ) => { //ELIMINAR PACIENTE POR DOCUMENTO
    try {
        
        const result = await pacienteService.deletePacientePorDocu(req.params);
        res.status(200).send(result);
        
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAll,
    getPacientePorID,
    getPacientePorDocu,
    getPacientePorApellido,
    getPacientePorNyAyD,
    updatePaciente,
    addPaciente,
    deletePacientePorDocu
}