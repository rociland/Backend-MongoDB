const Login = require('../models/login') 

async function findByCredentials(usuario, contrasenia){
    const responseDB = await Login.findOne({ usuario, contrasenia });
    
    if(!responseDB){
        throw new Error(`Usuario y/o contraseña invalida`);
    }

    return {msg: "Login exitoso" , data: responseDB};
}

module.exports = { findByCredentials }