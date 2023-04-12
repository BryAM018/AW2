//const { mostrarVehiculos , mostrarEspaciosDeParqueo, mostrarParqueos }  = require('./practica1');
//Vinculo con el otro archivo
const functions= require('./practica1')

//Mostrar por consola
const muestra1= functions.mostrarParqueos
console.log(muestra1)

const muestra2= functions.espaciosDeParqueo

console.log(muestra2)

const muestra3= functions.mostrarVehiculos
console.log(muestra3)
