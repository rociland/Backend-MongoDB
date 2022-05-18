

const Historial = require('../models/historial')
const pacienteRepository = require('../data/paciente')


async function getHistorialDelPAciente( idPaciente ) { //Trae todos los datos de la tabla de historial
    const responseDB = await Historial.find( { idPaciente } )
    
    if( responseDB.length === 0 ){
        throw new Error('No se encontro registros en la tabla para el paciente indicado.')
    }

    return responseDB
}

async function actualizarHistorialClinico( body, id ) { //modificar
    const responseDB =  await Historial.findOneAndUpdate( { _id : id }, body )

    if( responseDB._id.toString() !== id ){
        throw new Error(`No se encontró el registro`)
    }
    
    return responseDB
}
    
async function agregarHistorial( body ) {

    const responseP = await pacienteRepository.getPacientePorID(body.idPaciente)

    if( !responseP ) {
        throw new Error("No se encontro al paciente")
    }

    const agregarHistoriaClinica = await Historial(body)
    await agregarHistoriaClinica.save();

    return { msg: `Se agrego nuevo registro para ${responseP.apellido}, ${responseP.nombre}` }
}

async function borrarHistorialclinico( id ) { 
    const responseDB = await Historial.findOneAndDelete( { _id : id } )

    if( !responseDB ){
        throw new Error(`No se encontró el registro`)
    }

    return { msg : "Se elimino con exito el registro", data: responseDB} 
}


module.exports = {
    getHistorialDelPAciente,
    agregarHistorial,
    actualizarHistorialClinico,
    borrarHistorialclinico
}