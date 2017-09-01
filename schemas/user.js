var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  nombre : String,
  correo : String
});

module.exports = mongoose.model('User', UserSchema);
