const Tratamiento = require('../models/tratamiento')

async function getAll() {  // TRAE TODOS LOS TRATAMIENTOS DE LA COLECCION
    const responseDB = await Tratamiento.find()

    if( Object.keys(responseDB).length === 0 ){
        throw new Error('No se encontro registros en la tabla de tratamiento.')
    }

    return responseDB
}

async function getTratamientoPorId( id ) { // DEVUELVE UN TRATAMIENTO FILTRADO POR ID
    const responseDB = await Tratamiento.findOne( { _id : id } ) 
    if( responseDB === null){
        throw new Error(`No se encontro tratamiento con el id ${id}.`)
    }

    return responseDB
}

async function getTratamientoPorNombre( descripcion ) {//  DEVUELVE UN TRATAMIENTO FILTRADO POR DESCRIPCION
    const responseDB = await Tratamiento.find( { descripcion: descripcion } ) //busca por el parametro
    
    if( responseDB.length === 0 ){
        throw new Error(`No se encontro tratamiento/s con el nombre ${descripcion}.`)
    }

    return responseDB
}


async function updateTratamiento( body, id) { //ACTUALIZA TRATAMIENTO POR ID
    const responseDB =  await Tratamiento.findOneAndUpdate( { _id : id } ,body ) 

    if( responseDB._id.toString() !== id ){
        throw new Error(`No se encontró el tratamiento indicado` )
    }

    return { msg: `Se actualizo el tratamiento` }
}
    
async function addTratamiento( body ) {  // DAR DE ALTA UN TRATAMIENTO
    const responseDB = await Tratamiento.find({ descripcion: body.descripcion }) // data.codigo == element.codigo) // busca coincidencia por codigo

    if( responseDB && responseDB.length != 0 ) {
        throw new Error(`Ya se encuentra registrado un tratamiento con el nombre ${body.descripcion}.`)
    }

    //BUSCA EL ID DEL ULTIMO REGISTRO DE LA TABLA
    let ultimoRegistro = await Tratamiento.find({},{_id:1}).sort({$natural:-1}).limit(1); 
    ultimoRegistro = ultimoRegistro.toString()

    let posicion = 0; //SI NO HAY REGISTROS SETEA LA POSICIÓN EN CERO 
    if((Object.keys(ultimoRegistro).length != 0)){
        posicion = parseInt(ultimoRegistro.replace(/[^0-9]/ig,""))
    }

    const nuevoTratamiento = new Tratamiento(body)
    nuevoTratamiento._id = posicion + 1;
    await nuevoTratamiento.save();

    return { msg: `Se dio de alta el tratamiento: ${body._id} - ${body.descripcion}` }

}

async function deleteTratamientoPorCodigo( id ) {  // ELIMINAR TRATAMIENTO POR ID
    const responseDB = await Tratamiento.findOneAndDelete( { _id : id } )

    if( !responseDB ){
        throw new Error(`No se encontró el tratamiento ` )
    }
    return { msg : "Se elimino con exito el tratamiento indicado", resultado: responseDB} 
}


module.exports = {
    getAll,
    getTratamientoPorId,
    getTratamientoPorNombre,
    updateTratamiento,
    addTratamiento,
    deleteTratamientoPorCodigo
}
