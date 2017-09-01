var mongoose = require('mongoose');

var RegistroSchema = new mongoose.Schema({
  nombreRestaurante : String,
  pagina : String,
  tags: String,
  direccion: String,
  latitud: String,
  longitud: Number
});

module.exports = mongoose.model('Registro', RegistroSchema);
