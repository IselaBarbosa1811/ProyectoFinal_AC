const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VeterinariosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'nombre required']
    },
    apellidos: { type: String },
    correo: { type: String },
    direccion: { type: String },
    celular: { type: Number }
});

module.exports = mongoose.model('veterinarios', VeterinariosSchema);