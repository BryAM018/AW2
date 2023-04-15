// Arreglo de Vehiculos
const vehiculos = [
  { id: 1, descripcion: 'Toyota Corolla', placa: 'ABC123', color: 'Rojo' },
  { id: 2, descripcion: 'Honda Civic', placa: 'DEF456', color: 'Azul' },
  { id: 3, descripcion: 'Ford Mustang', placa: 'GHI789', color: 'Negro' },
  { id: 4, descripcion: 'Chevrolet Camaro', placa: 'JKL012', color: 'Amarillo' },
  { id: 5, descripcion: 'Nissan Sentra', placa: 'MNO345', color: 'Gris' }
]

// Arreglo de Espacios De Parqueo
const espaciosDeParqueo = [
  { id: 1, descripcion: 'Estacionamiento #1' },
  { id: 2, descripcion: 'Estacionamiento #2' },
  { id: 3, descripcion: 'Estacionamiento #3' },
  { id: 4, descripcion: 'Estacionamiento #4' },
  { id: 5, descripcion: 'Estacionamiento #5' }
]

// Arreglo de Parqueos
const parqueos = [
  { id: 1, vehiculoId: 2,  espacioDeParqueoId: 1, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 2, vehiculoId: 1,  espacioDeParqueoId: 2, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 3, vehiculoId: 3,  espacioDeParqueoId: 3, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 4, vehiculoId: 4,  espacioDeParqueoId: 4, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 5, vehiculoId: 5,  espacioDeParqueoId: 5, fechaHoraEntrada: new Date(), fechaHoraSalida: null }
]
//FoeEach
// Función para mostrar los vehículos
function mostrarVehiculos(vehiculos) {
  let cont = [];
  vehiculos.forEach(vehiculo => {
    cont.push(`Vehículos:ID: ${vehiculo.id}, Descripción: ${vehiculo.descripcion}, Placa: ${vehiculo.placa}, Color: ${vehiculo.color}`);
  }
  );
  return cont 
}
//For
// Función para mostrar los espacios de parqueo
function mostrarEspaciosDeParqueo(espaciosDeParqueo) {
  let cont = [];
  for (let i = 0; i < espaciosDeParqueo.length; i++) {
    cont.push(`Espacios de parqueo:ID: ${espaciosDeParqueo[i].id}, Descripción: ${espaciosDeParqueo[i].descripcion}`);
  }
  return cont 
}
//While
// Función para mostrar los parqueos
function mostrarParqueos(parqueos) {
  i = 0;
  let cont = [];
  while (i < parqueos.length) { 
   cont.push(`Parqueos:ID: ${parqueos[i].id}, ID Vehículo: ${parqueos[i].vehiculoId}, ID Espacio de Parqueo: ${parqueos[i].espacioDeParqueoId}, Fecha y hora de entrada: ${parqueos[i].fechaHoraEntrada}, Fecha y hora de salida: ${parqueos[i].fechaHoraSalida}`) ;
    i++;
  }
  return cont 
}

/* const muestra1= mostrarParqueos(parqueos)
console.log(muestra1)

const muestra2= mostrarEspaciosDeParqueo(espaciosDeParqueo)
console.log(muestra2)

const muestra3= mostrarVehiculos(vehiculos)
console.log(muestra3) */

module.exports = {
  mostrarVehiculos:vehiculos,
  mostrarEspaciosDeParqueo:espaciosDeParqueo,
  mostrarParqueos:parqueos
}