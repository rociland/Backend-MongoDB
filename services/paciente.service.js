const pacienteRepository = require('../data/paciente')
const pacienteValido = require('../validaciones/paciente.validaciones')


module.exports = {  

    getAll : () => {
        return pacienteRepository.getAll()
    },
   
    getPacientePorID : ( param ) => {

        if( !param.id ){
            throw new Error('Se requiere el ingreso del ID para realizar la consulta del paciente.');
        }
 
        return pacienteRepository.getPacientePorID(param.id)
    },

    getPacientePorDocu : ( param ) => {

        if( !param.documento ){
            throw new Error('Se requiere el ingreso del documento para realizar la consulta del paciente.');
        }
 
        return pacienteRepository.getPacientePorDocu(param.documento)
    },
    
    getPacientePorApellido : ( param ) => {

        if( !param.apellido ){
            throw new Error('Se requiere el ingreso del apellido para realizar la consulta del paciente.');
        }

        return pacienteRepository.getPacientePorApellido(param.apellido)
    },

    getPacientePorNyAyD : ( param ) => {

         if( !param.apellido && ! param.nombre && !param.documento ){
            throw new Error('Se requiere el ingreso del apellido, nombre y documento para realizar la consulta del paciente.');
        }

        return pacienteRepository.getPacientePorNyAyD(param.nombre, param.apellido, param.documento)
    },
    
    updatePaciente : ( body, params ) => {
        console.log(params.id)

        if(!params.id)
            throw new Error("Error al consultar el id del paciente")

        if(!pacienteValido.esPacienteValido(body))
            throw new Error("El paciente a modificar no es valido")

        return pacienteRepository.updatePaciente(body, params.id)
    },

    addPaciente : ( body ) => {
        if(!pacienteValido.esPacienteValido(body))
            throw new Error("El paciente ingresado no es valido")
        return pacienteRepository.addPaciente(body)
    },

    deletePacientePorDocu : ( param ) => {
        if( !param.docu ){
             throw new Error('Se debe ingresar un documento para poder eliminar el paciente');
       }
        return pacienteRepository.deletePacientePorDocu(param.docu)
    }
    
};
