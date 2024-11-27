const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    surname: {
        type: String,
        required: true
      },
    dateOfBirth: Date,
    comments: String,
    rol: String
})

ProfileSchema.pre('save', function (next) {
    const validRoles = ['admin', 'user'];
    
    if (validRoles.includes(this.rol)) {
      console.log("Rol válido");
      next(); 
    } 
    else {
        console.log("Rol no valido");
    }
  });
  

module.exports = mongoose.model("Profile", ProfileSchema, "profile");