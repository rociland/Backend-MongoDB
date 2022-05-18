const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const loginSchema = new Schema({
   usuario     : String,
   contrasenia : String

});

// Crear el modelo
const Login = mongoose.model( 'Logins', loginSchema );

module.exports = Login;