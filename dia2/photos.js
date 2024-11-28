const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    usuario: String,
    url: String,
    titulo: String,
    descripcion: String
});

module.exports = mongoose.model('Photo', PhotoSchema);