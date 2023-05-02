//Conectarse a su propia base de datos con MongoDB Atla
const mongoose= require('mongoose');
const connectionURL= "mongodb+srv://bryam018:RbVP1A4RBo42WXhQ@cluster0.0ggvdtd.mongodb.net/practica";

(async ()=>{

    try {
        const stateConnection= await mongoose.connect(connectionURL);
    //Definir tres modelos aplicando Mongoose a partir de sus entidades asignadas.
        const Vehiculo = mongoose.model("vehiculo",{ descripcion: 'String', placa: 'String', color: 'String' });
        const EspaciosDeParqueo = mongoose.model("espacio",{ descripcion: 'String' });
    //relaciones foráneas existentes
        const Parqueo = mongoose.model("parqueo",{ 
            vehiculoId: { type: mongoose.Types.ObjectId, ref:"vehiculos" },
            espacioDeParqueoId: { type: mongoose.Types.ObjectId, ref:"espacio" },
            fechaHoraEntrada: 'Date', fechaHoraSalida: 'null' });
        //Crear el CRUD de las entidades maestras para constatar la conexión.
        const vehiculo1 =  new Vehiculo({ descripcion: 'Toyota Corolla', placa: 'ABC123', color: 'Rojo' });
        const saveVehiculo = await  vehiculo1.save();
        const espacio1 =  new EspaciosDeParqueo({ descripcion: 'Estacionamiento #1'});
        const saveEspacio = await  espacio1.save();
    //Crear el CRUD de la entidad transaccional asociando las instancias        
        const parqueo1=  new Parqueo(
            {
            vehiculoId: saveVehiculo._id,
            espacioDeParqueoId: saveEspacio._id,
            fechaHoraEntrada: new Date(), fechaHoraSalida: 'null'
            });
        const saveParqueo= await parqueo1.save();
    //Listar por consola los datos registrados en las 3 colecciones 
    const result1 =  await Parqueo.find().populate("vehiculoId").populate("espacioDeParqueoId") ;
    const result2 =  await EspaciosDeParqueo.find();
    const result3 =  await Vehiculo.find();
    
    // console.log(result[0].permissions)
        
    for (let i = 0; i < result1.length; i++) {
        console.log(result1[i]);
      }

      let i = 0;
      while (i < result2.length) { 
        console.log(result2[i]);
        i++;
      }

      result3.forEach(vehiculo => {
        console.log(vehiculo);
      });
      
    } catch (error) {
        console.log(error);
    }
})()