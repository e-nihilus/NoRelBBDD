const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
        function(password)
        {
          return password.length >= 6;
        },
       'La contraseña debe ser mas larga'],
       select: false
      }
})


module.exports = mongoose.model("User", UserSchema, "user");