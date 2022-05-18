//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const esHistorialValido = ( body ) => { 
    const schema = joi.object({
        idPaciente   : joi.string().required(),
        observacion  : joi.string().required(),
        fecha        : joi.string().required(),
        tratamiento  : joi.string().required(),
    });

    const result = schema.validate(body);
    
    if(result.error){
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esHistorialValido
}