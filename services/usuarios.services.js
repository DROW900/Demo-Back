//requerir los modulos
const db = require('../db/db')

const imprimeUsuarios = function () {
    try {
        console.log(db.Usuarios)
        return db.Usuarios
    }catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const falla = function () {
    try {
        db.funcionFalla()
    }catch (err) {
        console.log('Falla dsde el usuarios.services')
        throw new Error (err.message)
    }
}

const altaUsuarios = function (data) {
    
    let {nombre , apellido, email} = data //{}
    try {
        db.Usuarios = new db.Persona(nombre,apellido,email)
        return db.Usuarios
    }catch (error) {
        console.log(error)
        throw new Error({"message": "MATRIX.... System halted"}) 
    }
}

module.exports = {imprimeUsuarios, falla, altaUsuarios}