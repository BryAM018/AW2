const {vehiculos,parqueos}  = require('./datos');

function findParqueosForId(id, callback  ){
    const parqueo = parqueos.find((parqueo)=> parqueo.id===id );
    if (!parqueo)
    {
        const error= new Error();
        error.message="Parqueadero no encontrado";
        return callback(error);
    }
    return callback(null, parqueo );
}
function findVehiculosForId(id, callback){
    const vehiculo =  vehiculos.find((vehiculo)=>{
        return vehiculo.id===id;
    });
    if (!vehiculo)
    {
        const error =  new Error();
        error.message= "Automovil no encontrado";
        return callback(error)
    }
    return callback(null, vehiculo)
}


findParqueosForId(3, (err,parqueo)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(parqueos)
    findVehiculosForId( parqueo. vehiculoId, ( err, vehiculo )=>{
        if (err)
        {
            return console.log(err.message);
        }
        parqueo.vehiculo= vehiculo; 
        delete parqueos.vehiculoId;
        console.log(parqueo);

    } )
})