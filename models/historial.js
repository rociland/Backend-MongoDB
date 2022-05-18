const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const historialSchema = new Schema({
   idPaciente  : String,
   observacion : String,
   fecha       : String,
   tratamiento : String,
});

// Crear el modelo
const Login = mongoose.model( 'Historial', historialSchema );

module.exports = Login;