const fetch = require('node-fetch')

class Categoria {

    constructor() {}

    static async getCategorias() {

        const url = `https://api.mercadolibre.com/sites/MLM/categories`
        const resp = await fetch(url);
        const obj = await resp.json();
        // console.log(obj);
        return obj;

    }

}

module.exports = { Categoria }