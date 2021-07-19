const fetch = require('node-fetch')
class SubCategorias {

    constructor() {

    }

    static async getSubCategorias(idPadre) {

        const url = `https://api.mercadolibre.com/categories/${idPadre}`
        const resp = await fetch(url);
        const obj = await resp.json();
        // console.log(obj);
        return obj;

    }

}
module.exports = { SubCategorias }
    //SubCategorias.getTendenciasPorSubcategoria('MLA430598');