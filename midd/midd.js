//Importamos los Modulos necesarios.
const rateLimit = require("express-rate-limit");

const corsOption = {
    origin : function (origin, callback) {
        if (process.env.listaBlanca.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('No autorizado por Cors'))
        }

    }
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
    message: 'Usted exedió el limite de accesos a la API'
  });

const constrolApikey = function (req,res,next) {
    console.log(req.body.apikey)
    if (process.env.APIKEY === req.body.apikey) {
        return next()
    }else {
        let error = {
            "message" : "MATRIX.... System Halted",
            "error" : "Debe enviar la ApiKey"
        }

        return res.status(400).json(error)
    }
}

  module.exports = {corsOption, limiter, constrolApikey}