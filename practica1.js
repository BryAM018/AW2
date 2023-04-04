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
  { id: 1, vehiculoId: vehiculos[0].id,  espacioDeParqueoId: 1, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 2, vehiculoId: vehiculos[1].id,  espacioDeParqueoId: 2, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 3, vehiculoId: vehiculos[2].id,  espacioDeParqueoId: 3, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 4, vehiculoId: vehiculos[3].id,  espacioDeParqueoId: 4, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 5, vehiculoId: vehiculos[4].id,  espacioDeParqueoId: 5, fechaHoraEntrada: new Date(), fechaHoraSalida: null }
]

//FoeEach
// Recorrer el arreglo de vehículos y mostrar los elementos
console.log("Vehículos:");
vehiculos.forEach(vehiculo => {
  console.log(`ID: ${vehiculo.id}, Descripción: ${vehiculo.descripcion}, Placa: ${vehiculo.placa}, Color: ${vehiculo.color}`);
});
//For
// Mostrar los espacios de parqueo
console.log("Espacios de parqueo:");
for (let i = 0; i < espaciosDeParqueo.length; i++) {
  console.log(`ID: ${espaciosDeParqueo[i].id}, Descripción: ${espaciosDeParqueo[i].descripcion}`);
}
//While
// Mostrar los parqueos
console.log("Parqueos:");
i = 0;
while (i < parqueos.length) {
  console.log(`ID: ${parqueos[i].id}, ID Vehículo: ${parqueos[i].vehiculoId}, ID Espacio de Parqueo: ${parqueos[i].espacioDeParqueoId}, Fecha y hora de entrada: ${parqueos[i].fechaHoraEntrada}, Fecha y hora de salida: ${parqueos[i].fechaHoraSalida}`);
  i++;
}