var mongoose = require('mongoose');

var RegistroSchema = new mongoose.Schema({
  correo : {type: String, required: true},
  numero : String,
  nombre: String
});

module.exports = mongoose.model('Registro', RegistroSchema);
