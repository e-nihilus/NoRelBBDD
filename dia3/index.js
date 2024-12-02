let mongoose = require("mongoose");
let Mark = require("./mark");

mongoose.connect('mongodb://127.0.0.1:27017/codenotch') 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let data = {
    date: "2024-02-05",
    mark: 3,
    student_first_name: "Pepe",
    student_last_name: "Ramirez",
    group_name: "A",
    subject_name: "Musica",
    teachers: [
        {teacher_first_name: "Ana"},
        {teacher_last_name: "Gomez"}
    ],
}


// //---------------Añadir Nota--------------
// async function newMark(mark) {
//     try {
//       const marks = await Mark.create(mark);
//       console.log("Nota subida");
//       mongoose.disconnect();
//     } catch (err) {
//       console.log(err);
//     }
// }
// newMark(data)


//----calcualar nota media de asignatura------

// Mark
// .aggregate([{$match:{subject_name: "Musica"}}, 
//             {$group:{ _id: null, averageMark:{ $avg: "$mark"}}},
//             {$project: {_id: 0, averageMark: 1}}])
// .then((result) =>
// {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//-------calc total alumns-----------
// Mark
// .aggregate([{$group:{ _id: null, totalAlumns:{$sum:1}}},
//             {$project: {_id: 0, totalAlumns: 1}}])
// .then((result) =>
// {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//--------nom y apellidos de todos alumns---------
// Mark
// .aggregate([{$project: {_id: 0, student_first_name: 1, student_last_name: 1}}])
// .then((result) =>
// {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//--------nom y apellidos de todos profesores---------
// Mark
// .aggregate([{$unwind:"$teachers"},
//             {$project: {_id: 0, "teachers.teacher_first_name": 1, "teachers.teacher_last_name": 1}}])
// .then((result) =>
// {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//-------total alumns por grupo order by inverse---------
// Mark
// .aggregate([{$group:{ _id: "$group_name", totalAlumns:{ $sum: 1}}},
//             {$sort:{_id: -1}}])
// .then((result) =>
// {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//--------top 5 asig media >5-----------
//---Top 5 asignaturas con nota media mayor a 5---
// Mark
// .aggregate([{$group:{ 
//                 _id:"$subject_name", 
//                 averageMark:{$avg: "$mark"}}}, 
//             {$match:{ averageMark:{$gt: 5}}}, 
//             {$limit: 5}, 
//             { $project:{_id: 0, subject_name: "$_id", averageMark: 1}}])
// .then((result) => {
//     console.log(result)
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

//----------calc num prof por asig---------
// Mark
// .aggregate([{$group:{_id:"$subject_name", numProf:{$sum:1}}}])
// .then((result) => {
//     console.log(result)
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

//--------nom ape alum nota >8 o fecha año pasado---------
Mark
.aggregate([{$match:{$or:[{ mark: { $gt: 8 } }, {date:{}}]}},
            {$project:{_id: 0, student_first_name: 1, student_last_name: 1, mark: 1, date: 1}}])
.then((result) => {
    console.log(result)
    mongoose.disconnect();
})
.catch((error) => {
    console.log(error);
    mongoose.disconnect();
});

// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.

// • Obtén la media de las notas que se han dado en el último año por asignatura.

// • Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// • Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// sea uno que elijáis.