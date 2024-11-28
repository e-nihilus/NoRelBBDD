let mongoose = require("mongoose");
let Photo = require("./photos");


mongoose.connect('mongodb://127.0.0.1:27017/codenotch', { useNewUrlParser: true, useUnifiedTopology: true } ) 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 


let photo = new Photo({
    usuario: "Juan",
    url: "https://www.google.com",
    titulo: "Gato trepando",
    descripcion: "Esta es una foto de un gato trepando"
})

//---------------Añadir foto--------------
async function newPhoto(foto) {
    try {
      const photo = await Photo.create(foto);
      console.log("Foto subida correctamente:");
      mongoose.disconnect();
    } catch (err) {
      console.log(err);
    }
}
newPhoto(photo)

//------------------obtener foto------------------
async function getByUser(user) {
    try {
      const photos = await Photo.find({usuario: user});
        console.log(photos);
        mongoose.disconnect();
    } 
    catch (err) {
      console.log(err);
    }
}
getByUser("Juan")

//------------modificar foto-------------------
async function modPhoto(title, descrip){
    try {
        const photo = await Photo.updateOne({titulo: title}, {descripcion: descrip});
        console.log(photo);
        mongoose.disconnect();
    }
    catch (err) {
        console.log(err);
    }
}
modPhoto("Gato comiendo", "Esta es una foto de un gato trepando un arbol")

//----------------eliminar foto-------------------
async function delPhoto(user, title){
    try {
        const photo = await Photo.deleteOne({usuario: user, titulo: title})
        console.log("Foto " + title + "eliminada")
        mongoose.disconnect();
    }
    catch (err) {
        console.log(err);
    }
}
delPhoto("Juan", "Gato comiendo")

//-----------------eliminar todas las fotos-----------------
async function delAll(user){
    try {
        const photo = await Photo.deleteMany({usuario: user})
        console.log("Fotos de " + user + " eliminadas")
        mongoose.disconnect();
    }
    catch (err) {
        console.log(err);
    }
}
delAll("Juan")  