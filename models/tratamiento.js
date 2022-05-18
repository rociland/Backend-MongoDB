const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const tratamientoSchema = new Schema({
   _id         : Number,
   descripcion : String,
   duracion    : Number,
   precio      : Number

});

// Crear el modelo
const Tratamiento = mongoose.model( 'Tratamiento', tratamientoSchema );

module.exports = Tratamiento;