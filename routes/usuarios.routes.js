//Importamos los modulos que vamos a utilizar
const usuariosServices = require('../services/usuarios.services')
const midd = require('../midd/midd')
const cors = require('cors')

//Declaramos nuestras rutas
module.exports = (app) => {
    app.get('/', (req, res) => {
        let respuesta = {
            "estatus": "OK",
            "message": "Hola Mundo desde API"
        }
        res.json(respuesta)
    })

    app.get('/usuarios/', (req, res) => {
        try {
            let resultado = usuariosServices.imprimeUsuarios()
            res.status(200).json(resultado)
        } catch (err) {
            console.log('Error desde el get del app')
            console.log(err)
            res.status(400).json(err.message)
        }
    })

    app.get('/matrix', (req, res) => {
        try {
            usuariosServices.falla()
        } catch (err) {
            console.log('error desde el get')
            console.log(err)
            res.status(400).json('Ocurrio un error inesperado, pongase en contacto con el administrador de su sistema')
        }
    })

    app.post('/usuarios', midd.constrolApikey, function(req, res) {
        try {
            let data = req.body
            let resultado = usuariosServices.altaUsuarios(data)
            res.status(200).json({ "message": "Alta de usuario correcto" })
        } catch (error) {
            let errorUsuario = {
                codigo: 400,
                messsage: 'Ocurrió un error inesperado, corrobore que los datos sean correctos e intente nuevamente'
            }
            console.log(error);
            res.status(400).json(errorUsuario)
        }
    })

}