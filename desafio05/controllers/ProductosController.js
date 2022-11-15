const productos = [
    {
        id: 1,
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    },
    {
        id: 2,
        title: "Calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    },
    {
        id: 3,
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    },
]

let siguienteID = 4;

class ProductosController {
    static async obtenerTodos () {
        return productos;
    }

    static async obtenerPorId (id) {
        const objetoFind = productos.find(objeto => objeto.id == id);
        return objetoFind;
    }

    static async agregar (req) {
        let { body : data } = req;
        data = { id: siguienteID, ...data };
        productos.push(data)
        siguienteID ++;
        return productos;
    }

    static async actualizar (id) {
        const objetoFind = productos.find(objeto => objeto.id == id);
        return objetoFind;
    }

    static async borrar (id) {
        const objetoFind = productos.find(objeto => objeto.id == id);
        if (objetoFind) {
            productos.splice(id - 1, 1);
            return productos;
        }
        return;
    }
}

module.exports = ProductosController;