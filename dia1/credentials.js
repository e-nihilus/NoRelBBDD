const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: {
        type: Number,
        validate: [
        function(phone)
        {
          return phone.length = 9;
        }],
       select: false
      },
    email: String
})

CredentialsSchema.pre('save', function(next) 
{
  console.log("Middleware de entrada");
  if (this.email && this.email.includes('@'))
  {      
    console.log("email valido")
    next();
  }
  else
    console.log("email no valido")
});

module.exports = mongoose.model("Credentials", CredentialsSchema, "credentials");