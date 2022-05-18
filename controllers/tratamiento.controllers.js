const tratamientoService = require('../services/tratamiento.service')
const er = `Necesita estar logeado para poder realizar la accion requerida`;

const getAll =  async ( req, res ) => {  // TRAE TODOS LOS TRATAMIENTOS
    try {
        
        const result = await tratamientoService.getAll();
        res.status(200).send(result);    
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTratamientoPorId = async ( req, res ) => {  // DEVUELVE TRATAMIENTO FILTRANDO POR ID
    try {
        
        const result = await tratamientoService.getTratamientoPorId(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTratamientoPorNombre = async ( req, res ) => {  // DEVUELVE TRATAMIENTO POR DESCRIPCION
    try {
        const result = await tratamientoService.getTratamientoPorNombre(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const updateTratamiento = async ( req, res ) => { // ACTUALIZA TRATAMIENTO POR ID
    try {
        const result = await tratamientoService.updateTratamiento( req.body, req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const addTratamiento = async ( req, res ) => { // DAR DE ALTA TRATAMIENTO
    const body = req.body
    try {
        const result = await tratamientoService.addTratamiento(body)
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const deleteTratamientoPorCodigo = async ( req, res ) => { // ELIMINA TRATAMIENTO POR ID
    try {
        const result = await tratamientoService.deleteTratamientoPorCodigo(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAll,
    getTratamientoPorId,
    getTratamientoPorNombre,
    updateTratamiento,
    addTratamiento,
    deleteTratamientoPorCodigo
}