
const {vehiculos,parqueos}  = require('./datos');

function findParqueoForId(id){
    return new Promise((resolve, reject)=>{
        const parqueo = parqueos.find((parqueo)=> parqueo.id===id );
        if (!parqueo)
        {
            const error= new Error();
            error.message="El Parqueadero no fue encontrado";
            reject(error);
        }
        resolve(parqueo);
    })
} 

function findVehiculoForId(id){
    return new Promise((resolve, reject)=>{
        const vehiculo =  vehiculos.find((vehiculo)=>{
            return vehiculos.id===id;
        });
        if (!vehiculo)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el vehiculo";
            reject(error);
        }
        resolve(vehiculo);
    })
}
findParqueoForId(2)
.then((parqueo)=>{ 
    console.log(parqueo);
    return findVehiculoForId(parqueo.idvehiculo);
})
.then((vehiculo)=>{
    console.log(vehiculo)
})
.catch((error)=>{
    console.log(error.message)
}) 