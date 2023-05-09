const express= require('express')
const cors = require('cors')

const app = express();
const PUERTO = 2500;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

let parqueos = [ ]

app.get('/',(req,res)=>{
    res.status(200).json(parqueos)
})
// get individual -> Consulta individual
app.get('/:id',(req,res)=>{

    const {id} = req.params;
    const parqueosSelect = parqueos.filter(p=> p.id === id)
    if (parqueosSelect.length>0)
    {
        return res.status(200).send(parqueosSelect[0])
    }
    res.status(404).send({
        message:'La parqueo con ese código no existe'
    })
})

// post    -> Insertar
app.post('/',(req, res )=>{
    // const body =  req.body
    const { body } =  req;
    parqueos.push(body)
    res.status(200).send({
        message:'Dato insertado correctamente',
        response: body
    })
})

// put or patch   -> Actualizar
app.put('/', (req,res)=>{
    const { id, vehiculo, espacioDeParqueo, fechaHoraEntrada,fechaHoraSalida } =  req.body
    const parqueo =  parqueos.filter(p=> p.id===id)[0] || {}
    parqueo.vehiculo= vehiculo;
    parqueo.espacioDeParqueo= espacioDeParqueo;
    parqueo.fechaHoraEntrada= fechaHoraEntrada;
    parqueo.fechaHoraSalida= fechaHoraSalida;
    res.status(200).send({
        message:'Parqueo modificado con éxito',
        response: parqueo
    })
})

// delete   -> Eliminar
app.delete('/:id',(req, res)=>{
    const { id  } = req.params;
    parqueos =  parqueos.filter(p=> p.id !== id)
    res.status(200).send({
        message:`Fruta con ID ${id} fue eliminada`
    })
})


app.listen(PUERTO, ()=>{
    console.log(`Server running http://localhost:${PUERTO}`);
})