
let Usuarios = {};


class Persona {
    constructor (nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}

const funcionFalla = function () {
    console.log('falla desde la db')
    throw new Error ('Morfeo debiste tomar la pastilla AZUL!!!! JAJAJAJAJAJA')
}

module.exports = {Usuarios, Persona, funcionFalla}