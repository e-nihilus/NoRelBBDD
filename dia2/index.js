let mongoose = require("mongoose");
let Student = require("./student");


mongoose.connect('mongodb://127.0.0.1:27017/codenotch', { useNewUrlParser: true, useUnifiedTopology: true } ) 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 


let student = new Student({  
    firstName: "Fernando",
    lastName: "Garcia",
    marks: [
      {
        date: new Date("2024-05-18"),
        mark: 6,
        subject: {
          title: "Ingles",
          teachers: [
            { firstName: "Juan", lastName: "Sanchez", groups: ["A", "B"] },
            { firstName: "Ana", lastName: "Gutirerrez", groups: ["C"] },
          ],
        },
      },
      {
        date: new Date("2024-01-15"),
        mark: 5,
        subject: {
          title: "Matematicas",
          teachers: [
            { firstName: "Juan", lastName: "Sanchez", groups: ["A", "B"] },
            { firstName: "Ana", lastName: "Gutirerrez", groups: ["C"] },
          ],
        },
      },
      {
        date: new Date("2024-02-05"),
        mark: 4,
        subject: {
          title: "Lengua",
          teachers: [
            { firstName: "Alberto", lastName: "Sanchez", groups: ["A", "C"] },
            { firstName: "Julia", lastName: "Fuentes", groups: ["A"] },  
          ],
        },
      },
    ],
});


// student.save()
// .then(resp => {
//     console.log("Documento guardado correctamente")
//     console.log(resp)
// })
// .catch(error => {
//     console.log("Error: " + error)
// })

// //----------Notas--------
Student.findOne({firstName: "Fernando"})
    .then (function(items)
{
    console.log(items.marks)
    mongoose.disconnect();
})
.catch(function(err)
{
    console.log(err)
})

// //---------asignaturas----------
Student.findOne({firstName: "Irene"})
.then (function(items){
    items.marks.forEach((mark) => {
        console.log(mark.subject);
    });
    mongoose.disconnect();
})
.catch(function(err)
{
    console.log(err)
})

// //------------profesores-----------
Student.findOne({firstName: "Andres"})
.then (function(items){
    items.marks.forEach((mark) => {
        console.log(mark.subject.teachers);
    });
    mongoose.disconnect();
})
.catch(function(err)
{
    console.log(err)
})
