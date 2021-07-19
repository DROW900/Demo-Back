const { Producto } = require('../services/productos.services');

module.exports = (app) => {
    app.get('/subcategorias/productos/:idSub', async(req, res) => {
        try {
            let data = await Producto.getProductosPorId(req.params.idSub);
            // console.log(data);
            res.send(data);
        } catch (err) {
            console.log('Error al obtener los productos por subcategorias');
            res.status(400).json(err.message)
        }


    })
}