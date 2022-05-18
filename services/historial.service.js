const historialRepository = require('../data/historial')
const { esHistorialValido } = require('../validaciones/historial.validaciones')


module.exports = {  

    getHistorialDelPAciente : ( params ) => {
        return historialRepository.getHistorialDelPAciente( params.id )
    },
   
    actualizarHistorialClinico : ( body, params ) => {

        if(!esHistorialValido(body))
            throw new Error("El historial ingresado no es valido")

        return historialRepository.actualizarHistorialClinico(body, params.id)
    },

    agregarHistorial : ( body ) => {

        if(!esHistorialValido(body))
            throw new Error("El historial ingresado no es valido")

        return historialRepository.agregarHistorial(body)
    },

    borrarHistorialclinico : ( params ) => {

        if( !params.id ){
             throw new Error('Error al consultar el id del registro');
       }
        return historialRepository.borrarHistorialclinico(params.id)
    }
    
};
