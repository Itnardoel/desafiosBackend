const Contenedor = require("../escribirProductos");

const productos = [
    // {
    //     id: 1,
    //     timestamp: Date.now(),
    //     nombre: "Escuadra",
    //     descripcion: '',
    //     codigo: '',
    //     foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    //     precio: 123.45,
    //     stock: '',
    // },
    // {
    //     id: 2,
    //     timestamp: Date.now(),
    //     nombre: "Calculadora",
    //     descripcion: '',
    //     codigo: '',
    //     foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    //     precio: 234.56,
    //     stock: '',
    // },
    // {
    //     id: 3,
    //     timestamp: Date.now(),
    //     nombre: "Globo Terráqueo",
    //     descripcion: '',
    //     codigo: '',
    //     foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    //     precio: 345.67,
    //     stock: '',
    // },
];

// Obtengo los productos de mi archivo
let savedProducts = Contenedor.getAll();
    savedProducts
        .then (data => {
            data.forEach(producto => {
                productos.push(producto);
            });
        })
        .catch (error => console.log(error))

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
        data = { id: siguienteID, timestamp: Date.now(), ...data };
        productos.push(data);
        Contenedor.save(data);  // actualizo el archivo
        siguienteID ++;
        return productos;
    }

    static async actualizar (id, req) {
        const objetoFind = productos.find(objeto => objeto.id == id);
        const index = productos.findIndex(objeto => objeto.id == id);
        if (objetoFind) {
            objetoFind.nombre = req.body.nombre;
            objetoFind.descripcion = req.body.descripcion;
            objetoFind.codigo = req.body.codigo;
            objetoFind.foto = req.body.foto;
            objetoFind.precio = req.body.precio;
            objetoFind.stock = req.body.stock;
            Contenedor.updateById(index, objetoFind); // actualizo el archivo
            return objetoFind;
        }
        return objetoFind;
    }

    static async borrar (id) {
        const objetoFind = productos.find(objeto => objeto.id == id);
        const index = productos.findIndex(objeto => objeto.id == id);
        if (objetoFind) {
            productos.splice(index, 1);
            Contenedor.deleteById(index);  // actualizo el archivo
            return productos;
        }
        return;
    }
}

module.exports = ProductosController;