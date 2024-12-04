let PhotoModel = require("./../model/photo");

async function getByUser(request, response) {
    const {user} = request.query;
    try {
        const photo = await PhotoModel.find({ usuario: user });
        let respuesta = { error: false, codigo: 200, mesaje: "Usuario encontrado", photo };
      response.send(respuesta);
    } catch (err) {
        console.log(err);
    }
}


async function newPhoto(request, response) {
    const foto = request.body;
    try {
        const photo = await PhotoModel.create(foto);
        let respuesta = { error: false, codigo: 200, mesaje: "Foto agregada correctamente", photo };
      response.send(respuesta);
    } catch (err) {
        console.log(err);
    }
}

async function modPhoto(request, response){
    const {titulo, descripcion} = request.body;
    try {
        const result = await PhotoModel.updateOne({titulo: titulo}, {descripcion: descripcion});
        if (result.matchedCount > 0) {
            let respuesta = { error: false, codigo: 200, mesaje: "Foto modificada correctamente" };
      response.send(respuesta);
        } 
        else {
            let respuesta = { error: false, codigo: 200, mesaje: "No se encuentra la foto" };
      response.send(respuesta);
        }
    } catch (err) {
        console.log(err);
    }
}

async function delPhoto(request, response) {
    const { usuario, titulo } = request.body;

    try {
        let result;
        let respuesta;

        if (usuario && titulo) {
            result = await PhotoModel.deleteOne({ usuario: usuario, titulo: titulo });
            if (result.deletedCount > 0) {
                respuesta = { error: false, codigo: 200, mensaje: "Foto eliminada correctamente" };
            } 
            else {
                respuesta = { error: false, codigo: 200, mensaje: "No se encuentra la foto" };
            }
        } 
        else if (usuario) {
            result = await PhotoModel.deleteMany({ usuario: usuario });
            respuesta = { error: false, codigo: 200, mensaje: "Todas las fotos del usuario han sido eliminadas" };
        } 
        else {
            respuesta = { error: true, codigo: 200, mensaje: "Se requiere al menos un usuario para eliminar fotos" };
        }

        response.send(respuesta);
    } catch (err) {
        console.log(err);
    }
}



module.exports = {getByUser, newPhoto, modPhoto, delPhoto};
