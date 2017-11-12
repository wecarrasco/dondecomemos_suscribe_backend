var mongoose = require('mongoose');

var RegistroSchema = new mongoose.Schema({
  correo : String,
  comentario : String
});

module.exports = mongoose.model('Registro', RegistroSchema);
