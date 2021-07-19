const { Categoria } = require('../services/categorias.services');

/*
const { Categoria } = require('../assets/dist/js/Categoria');
const { Producto } = require('../assets/dist/js/Producto');

//Exportar nuestras rutas para que trabajen en el servidor.
//const path = require('path')

*/

module.exports = (app) => {
    app.get('/categorias', async(req, res) => {
        try {
            let data = await Categoria.getCategorias();
            res.send(data);

        } catch (err) {
            console.log('Error al obtener las categorias');
            res.status(400).json(err.message)
        }
        //console.log(data);

    })

}