// Arreglo de Vehiculos
const vehiculos = [
    { id: 1, descripcion: 'Toyota Corolla', placa: 'ABC123', color: 'Rojo' },
    { id: 2, descripcion: 'Honda Civic', placa: 'DEF456', color: 'Azul' },
    { id: 3, descripcion: 'Ford Mustang', placa: 'GHI789', color: 'Negro' },
    { id: 4, descripcion: 'Chevrolet Camaro', placa: 'JKL012', color: 'Amarillo' },
    { id: 5, descripcion: 'Nissan Sentra', placa: 'MNO345', color: 'Gris' }
  ]
  
  // Arreglo de Parqueos
  const parqueos = [
    { id: 1, vehiculoId: 2,  espacioDeParqueo:'Estacionamiento #1' , fechaHoraEntrada: new Date(), fechaHoraSalida: null },
    { id: 2, vehiculoId: 1,  espacioDeParqueo:'Estacionamiento #2' , fechaHoraEntrada: new Date(), fechaHoraSalida: null },
    { id: 3, vehiculoId: 3,  espacioDeParqueo:'Estacionamiento #3' , fechaHoraEntrada: new Date(), fechaHoraSalida: null },
    { id: 4, vehiculoId: 4,  espacioDeParqueo:'Estacionamiento #4' , fechaHoraEntrada: new Date(), fechaHoraSalida: null },
    { id: 5, vehiculoId: 5,  espacioDeParqueo:'Estacionamiento #5' , fechaHoraEntrada: new Date(), fechaHoraSalida: null }
  ]

  //3.Con una función busque y muestre uno de todos los elementos del arreglo de objetos transaccional 
  //y los datos de su entidad relacionada.
  const transaccion = parqueos.find((p) => p.id === 3);
  const vehiculo = vehiculos.find((v) => v.id === transaccion.vehiculoId);
  console.log(transaccion);
  console.log(vehiculo);


  
  module.exports = {
    vehiculos,
    parqueos
  }