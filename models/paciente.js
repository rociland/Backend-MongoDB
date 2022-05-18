const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const pacienteSchema = new Schema({
   _id               : Number,
   documento         : String, 
   tipo_documento    : String,
   nombre            : String,
   apellido          : String,
   calle             : String,
   numero            : Number,
   codigo_postal     : Number,
   id_barrio         : Number,
   telefono          : Number,
   correo            : String, 
   fecha_nacimiento  : String,
   id_loginpaciente  : Number,
   id_antecedente    : Number
   
});

// Crear el modelo
const Paciente = mongoose.model( 'Paciente', pacienteSchema );

module.exports = Paciente;