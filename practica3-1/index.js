const mongoose= require('mongoose');
const cadenaConexion= "mongodb+srv://bryam018:RbVP1A4RBo42WXhQ@cluster0.0ggvdtd.mongodb.net/practica";

(async ()=>{

    try {
        const stateConnection= await mongoose.connect(cadenaConexion);
        const Vehiculos = mongoose.model("vehiculo",{ descripcion: 'String', placa: 'String', color: 'String' })
        const EspaciosDeParqueo = mongoose.model("espacio",{ descripcion: 'String' })
        const Parqueos = mongoose.model("parqueo",{ 
            vehiculoId: { type: mongoose.Types.ObjectId, ref:"Vehiculos" },
            espacioDeParqueoId: { type: mongoose.Types.ObjectId, ref:"EspaciosDeParqueo" }
            ,descripcion: 'String', fechaHoraEntrada: 'Date', fechaHoraSalida: 'null' })
        

        
    } catch (error) {
        console.log(error);
    }
})()