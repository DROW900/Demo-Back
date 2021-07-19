const fetch = require('node-fetch')
class Producto {
    constructor() {}

    static async getProductosPorId(idSubCategoria) {
        let url = `https://api.mercadolibre.com/sites/MLM/search?category=${idSubCategoria}`;

        const resp = await fetch(url);
        const data = await resp.json();

        return data;
    }
}

module.exports = { Producto }