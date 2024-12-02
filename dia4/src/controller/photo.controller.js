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
        } else {
            let respuesta = { error: false, codigo: 200, mesaje: "No se encuentra la foto" };
      response.send(respuesta);
        }
    } catch (err) {
        console.log(err);
    }
}

async function delPhoto(request, response){
    const {usuario, titulo} = request.body;
    try {
        const result = await PhotoModel.deleteOne({ usuario: usuario, titulo: titulo });
        if (result.deletedCount > 0) {
            let respuesta = { error: false, codigo: 200, mesaje: "Foto eliminada correctamente" };
      response.send(respuesta);
        } else {
            let respuesta = { error: false, codigo: 200, mesaje: "No se encuentra la foto" };
      response.send(respuesta);
        }
    } catch (err) {
        console.log(err);
    }
}

async function delAll(request, response){
    const {usuario} = request.body;
    try {
        const result = await PhotoModel.deleteMany({ usuario: usuario });
        let respuesta = { error: false, codigo: 200, mesaje: "Todas las fotos han sido eliminadas" };
      response.send(respuesta);
    } catch (err) {
        console.log(err);
    }
}



module.exports = {getByUser, newPhoto, modPhoto, delPhoto, delAll};
