//Conectarse a su propia base de datos con MongoDB Atla
const mongoose= require('mongoose');
const cadenaConexion= "mongodb+srv://bryam018:RbVP1A4RBo42WXhQ@cluster0.0ggvdtd.mongodb.net/practica";

(async ()=>{

    try {
        const stateConnection= await mongoose.connect(cadenaConexion);
    //Definir tres modelos aplicando Mongoose a partir de sus entidades asignadas.
        const Vehiculo = mongoose.model("vehiculo",{ descripcion: 'String', placa: 'String', color: 'String' });
        const EspaciosDeParqueo = mongoose.model("espacio",{ descripcion: 'String' });
    //relaciones foráneas existentes
        const Parqueo = mongoose.model("parqueo",{ 
            vehiculoId: { type: mongoose.Types.ObjectId, ref:"Vehiculos" },
            espacioDeParqueoId: { type: mongoose.Types.ObjectId, ref:"EspaciosDeParqueo" },
            fechaHoraEntrada: 'Date', fechaHoraSalida: 'null' });
        //Crear el CRUD de las entidades maestras para constatar la conexión.
        const vehiculo1 =  new Vehiculo({ descripcion: 'Toyota Corolla', placa: 'ABC123', color: 'Rojo' });
        const saveVehiculo = await  vehiculo1.save();
        const espacio1 =  new EspaciosDeParqueo({ descripcion: 'Estacionamiento #1'});
        const saveEspacio = await  espacio1.save();
            
        const parqueo1=  new Parqueo(
            {
            vehiculoId: saveVehiculo,
            espacioDeParqueoId: saveEspacio,
            fechaHoraEntrada: new Date(), fechaHoraSalida: 'null'
            });
        const saveParqueo= await parqueo1.save();
        
    } catch (error) {
        console.log(error);
    }
})()