let mongoose = require("mongoose");
let User = require("./user");
let Profile = require("./profile");
let Credentials = require("./credentials");

mongoose.connect('mongodb://127.0.0.1:27017/codenotch', { useNewUrlParser: true, useUnifiedTopology: true } ) 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

// let user = new User({
//     login: "javier",
//     password: "87654321",
// });

// user.save()
// .then(resp => {
//     console.log("Documento guardado correctamente")
//     console.log(resp)
// })
// .catch(error => {
//     console.log("Error: " + error)
// })

// let profile = new Profile({
//     name: "german",
//     surname: "Lopez",
//     dateOfBirth: "1990-01-01",
//     comments: null,
//     rol: "admin"
// })

// profile.save()
// .then(resp => {
//     console.log("Documento guardado correctamente")
//     console.log(resp)
// })
// .catch(error => {
//     console.log("Error: " + error)
// })

let credentials = new Credentials({
    address: "Calle mi casa 2",
    phone: 123456789,
    email: "lopez@gmail.com"
})

credentials.save()
.then(resp => {
    console.log("Documento guardado correctamente")
    console.log(resp)
})
.catch(error => {
    console.log("Error: " + error)
})
