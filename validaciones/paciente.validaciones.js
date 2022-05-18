//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const minDNI = 8
const maxDNI = 10

const esPacienteValido = ( body ) => { 
    const schema = joi.object({
        _id               : joi.number().integer(),
        documento         : joi.string().alphanum().min(minDNI).max(maxDNI),
        tipo_documento    : joi.string(),
        nombre            : joi.string(),
        apellido          : joi.string(),
        calle             : joi.string(),
        numero            : joi.number().integer(),
        codigo_postal     : joi.number().integer(),
        id_barrio         : joi.number().integer(),
        telefono          : joi.number().integer(),
        correo            : joi.string(), 
        fecha_nacimiento  : joi.string(),
        id_loginpaciente  : joi.number().integer(),
        id_antecedente    : joi.number().integer()
    });

    const result = schema.validate(body);
    
    if(result.error){
        console.log(result.error.details[0].message)
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esPacienteValido
}