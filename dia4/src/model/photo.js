const {Schema, model} = require("mongoose");

const PhotoSchema = new Schema({
    usuario: String,
    url: String,
    titulo: String,
    descripcion: String
});

module.exports = model('Photo', PhotoSchema);