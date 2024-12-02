let mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/codenotch') 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 