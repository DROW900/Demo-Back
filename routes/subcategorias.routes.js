const { SubCategorias } = require('../services/subcategorias.services');


module.exports = (app) => {
    app.get('/subcategorias/:id', async(req, res) => {
        try {
            let data = await SubCategorias.getSubCategorias(req.params.id);
            //console.log(data);
            res.send(data);
        } catch (err) {
            console.log('error al obtener las subcategorias');
            res.status(400).json(err.message)
        }
    })
}