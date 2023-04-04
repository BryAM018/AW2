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
  { id: 1, vehiculoId: vehiculos[0].id,  espacioDeParqueoId: espaciosDeParqueo[0].id, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 2, vehiculoId: vehiculos[1].id,  espacioDeParqueoId: espaciosDeParqueo[1].id, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 3, vehiculoId: vehiculos[2].id,  espacioDeParqueoId: espaciosDeParqueo[2].id, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 4, vehiculoId: vehiculos[3].id,  espacioDeParqueoId: espaciosDeParqueo[3].id, fechaHoraEntrada: new Date(), fechaHoraSalida: null },
  { id: 5, vehiculoId: vehiculos[4].id,  espacioDeParqueoId: espaciosDeParqueo[4].id, fechaHoraEntrada: new Date(), fechaHoraSalida: null }
]

//FoeEach
// Recorrer el arreglo de vehículos y mostrar los elementos
console.log("Vehículos:");
vehiculos.forEach(vehiculo => {
  console.log(`ID: ${vehiculo.id}, Descripción: ${vehiculo.descripcion}, Placa: ${vehiculo.placa}, Color: ${vehiculo.color}`);
});

// Recorrer el arreglo de espacios de parqueo y mostrar los elementos
console.log("Espacios de parqueo:");
espaciosDeParqueo.forEach(espacio => {
  console.log(`ID: ${espacio.id}, Descripción: ${espacio.descripcion}`);
});

// Recorrer el arreglo de parqueos y mostrar los elementos
console.log("Parqueos:");
parqueos.forEach(parqueo => {
  console.log(`ID: ${parqueo.id}, ID Vehículo: ${parqueo.vehiculoId}, ID Espacio de Parqueo: ${parqueo.espacioDeParqueoId}, Fecha y hora de entrada: ${parqueo.fechaHoraEntrada}, Fecha y hora de salida: ${parqueo.fechaHoraSalida}`);
});

//For
// Mostrar los vehículos
console.log("Vehículos:");
for (let i = 0; i < vehiculos.length; i++) {
  console.log(`ID: ${vehiculos[i].id}, Descripción: ${vehiculos[i].descripcion}, Placa: ${vehiculos[i].placa}, Color: ${vehiculos[i].color}`);
}

// Mostrar los espacios de parqueo
console.log("Espacios de parqueo:");
for (let i = 0; i < espaciosDeParqueo.length; i++) {
  console.log(`ID: ${espaciosDeParqueo[i].id}, Descripción: ${espaciosDeParqueo[i].descripcion}`);
}

// Mostrar los parqueos
console.log("Parqueos:");
for (let i = 0; i < parqueos.length; i++) {
  console.log(`ID: ${parqueos[i].id}, ID Vehículo: ${parqueos[i].vehiculoId}, ID Espacio de Parqueo: ${parqueos[i].espacioDeParqueoId}, Fecha y hora de entrada: ${parqueos[i].fechaHoraEntrada}, Fecha y hora de salida: ${parqueos[i].fechaHoraSalida}`);
}


//While
// Mostrar los vehículos
console.log("Vehículos:");
let i = 0;
while (i < vehiculos.length) {
  console.log(`ID: ${vehiculos[i].id}, Descripción: ${vehiculos[i].descripcion}, Placa: ${vehiculos[i].placa}, Color: ${vehiculos[i].color}`);
  i++;
}

// Mostrar los espacios de parqueo
console.log("Espacios de parqueo:");
i = 0;
while (i < espaciosDeParqueo.length) {
  console.log(`ID: ${espaciosDeParqueo[i].id}, Descripción: ${espaciosDeParqueo[i].descripcion}`);
  i++;
}

// Mostrar los parqueos
console.log("Parqueos:");
i = 0;
while (i < parqueos.length) {
  console.log(`ID: ${parqueos[i].id}, ID Vehículo: ${parqueos[i].vehiculoId}, ID Espacio de Parqueo: ${parqueos[i].espacioDeParqueoId}, Fecha y hora de entrada: ${parqueos[i].fechaHoraEntrada}, Fecha y hora de salida: ${parqueos[i].fechaHoraSalida}`);
  i++;
}


