//importamos los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const midd = require('./midd/midd')
const categoriasRoutes = require('./routes/categorias.routes')
const subCategoriasRoutes = require('./routes/subcategorias.routes')
const productosRoutes = require('./routes/productos.routes')



//middlewares globales
app.use(express.json())
app.use(cors())
/* app.use(midd.limiter); */



//levantamos nuestro servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})

//middleware para captura de errores
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next()
})

//Inicializo mis rutas
//usuariosRoutes(app)
categoriasRoutes(app)
subCategoriasRoutes(app)
productosRoutes(app)