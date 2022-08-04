const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


const UsuariosSchema = new Schema({
  nombre:String,
  correo: {
    type: String,
    unique: true,
    required: [true, "El correo es necesario"],
  },
  contrasena: {
    type: String,
    required: [true, "Le contraseña es obligatoria"]
  }
});




module.exports = mongoose.model('usuarios', UsuariosSchema);