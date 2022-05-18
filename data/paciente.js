const Paciente = require('../models/paciente')


async function getAll() { //TODOS LOS DATOS DE LA TABLA 'PACIENTES'
    const responseDB = await Paciente.find()
    
    if(Object.keys(responseDB).length === 0){
        throw new Error('No se encontro registros en la tabla de pacientes.')
    }

    return responseDB
}

async function getPacientePorID( id ) { //FILTRA PACIENTE BUSCADO POR ID (Primary Key)
    const responseDB = await Paciente.findOne( { _id : id } )

    if( responseDB == null){
        throw new Error(`No se encontro un paciente con ID ${id} en el registro`)
    }

    return responseDB
}

async function getPacientePorDocu( documento ) { //TRAE PACIENTE BUSCADO POR DOCUMENTO
    const responseDB = await Paciente.find( { documento } )

    if( responseDB.length === 0){
        throw new Error(`No se encontro un paciente con Documento ${documento} en el registro`)
    }

    return responseDB
}

async function getPacientePorApellido( apellido ) { //TRAE UN PACIENTE BUSCADO POR SU APELLIDO
    const responseDB = await Paciente.find( { apellido } ) 

    if( responseDB.length === 0){
        throw new Error(`No se encontro un paciente con apellido ${apellido} en el registro`)
    }

    return responseDB
}

async function getPacientePorNyAyD( nombre, apellido, documento ) { //TRAE A UN PACIENTE BUSCADO POR NOMBRE, APELLIDO Y DOCU
    const responseDB = await Paciente.find( { nombre, apellido, documento } ) 
    console.log(documento)
    if( responseDB.length === 0){
        throw new Error( `No se encontro a paciente ${apellido}, ${nombre} con documento ${documento} en nuestro registro`)
    }

    return responseDB
}

async function updatePaciente( body, id ) { //MODIFICAR PACIENTE POR ID
    const responseDB =  await Paciente.findOneAndUpdate( { _id : id }, body ) 
   
    if( responseDB == null){
        throw new Error(`No se encontró al paciente`)
    }
    
    return responseDB
}
    
async function addPaciente( body ) { //ALTA DE UN PACIENTE
    let responseDB = await Paciente.find({ documento: body.documento }) // 1ro BUSCA SI YA EXISTE
   
    if( responseDB && responseDB.length != 0 ) {
        throw new Error("El paciente ya se encuentra registrado")
    }

    //BUSCA EL ID DEL ULTIMO REGISTRO DE LA TABLA
    let ultimoRegistro = await Paciente.find({},{_id:1}).sort({$natural:-1}).limit(1); 
    ultimoRegistro = ultimoRegistro.toString()

    let posicion = 0; //SI NO HAY REGISTROS SETEA LA POSICIÓN EN CERO 
    if((Object.keys(ultimoRegistro).length != 0)){
        posicion = parseInt(ultimoRegistro.replace(/[^0-9]/ig,""))
    }
   
    //GUARDO EL NUEVO PACIENTE CON LOS DATOS OBTENIDOS DEL BODY Y ASIGNO EL ID SIGUIENTE
    const nuevoPaciente = await Paciente(body)
    nuevoPaciente._id =  posicion + 1
    await nuevoPaciente.save();

    return { msg: `Se dio de alta al paciente ${body.apellido}, ${body.nombre}` }
}

async function deletePacientePorDocu( docu ) { //DAR DE BAJA UN PACIENTE POR DOCUMENTO
    const responseDB = await Paciente.findOneAndDelete( { documento: docu } )

    if( responseDB == null ){
        throw new Error(`No se encontró al paciente`)
    }

    return { msg : "Se elimino con exito al paciente indicado", data: responseDB} 
}


module.exports = {
    getAll,
    getPacientePorID,
    getPacientePorDocu,
    getPacientePorApellido,
    getPacientePorNyAyD,
    updatePaciente,
    addPaciente,
    deletePacientePorDocu
}