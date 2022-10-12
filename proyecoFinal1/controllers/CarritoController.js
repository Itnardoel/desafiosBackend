const Contenedor = require("../escribirCarritos");

const carritos = [
    // {
    //     id: 1,
    //     timestamp: Date.now(),
    //     productos: [
    //         {
    //             id: 1,
    //             timestamp: Date.now(),
    //             nombre: "Escuadra",
    //             descripcion: '',
    //             codigo: '',
    //             foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    //             precio: 123.45,
    //             stock: '',
    //         }
    //     ]
    // }
];

// Obtengo los productos de mi archivo
let savedCarts = Contenedor.getAll();
    savedCarts
        .then (data => {
            data.forEach(cart => {
                carritos.push(cart);
            });
        })
        .catch (error => console.log(error))

let siguienteID = 2;

class CarritoController {
    static async crearCarrito (req) {
        let { body : data } = req;
        data = { id: siguienteID, timestamp: Date.now(), ...data };
        carritos.push(data);
        Contenedor.save(data); // actualizo el archivo
        siguienteID ++;
        return data.id;
    }
    
    static async borrarCarrito (id) {
        const carritoFind = carritos.find(carrito => carrito.id == id);
        console.log(carritoFind);
        if (carritoFind) {
            carritos.splice(id - 1, 1);
            Contenedor.deleteById(id); // actualizo el archivo
            return carritos;
        }
        return;
    }

    static async obtenerProductosCarrito (id) {
        const carritoFind = carritos.find(carrito => carrito.id == id);
        if (carritoFind) {
            return carritoFind.productos;
        }
        return;
    }

    static async agregarProducto (req, id) {
        const carritoFind = carritos.find(carrito => carrito.id == id);
        if (carritoFind) {
            let { body : data } = req;
            data = { timestamp: Date.now(), ...data };
            carritos[id - 1].productos.push(data);
            Contenedor.saveProduct(); // actualizo el archivo
            return data;
        }
        return;
    }

    static async borrarProducto (id, id_prod) {
        const carritoFind = carritos.find(carrito => carrito.id == id);
        if (carritoFind) {
            const productoFind = carritoFind.productos.find(producto => producto.id == id_prod);
            if (productoFind) {
                const indexProducto = carritoFind.productos.findIndex(producto => producto.id == id_prod);
                carritos[id - 1].productos.splice(indexProducto, 1);
                Contenedor.deleteProduct(); // actualizo el archivo
                return carritos;
            }
            return 1; // no se encontro el producto
        }
        return 0; // no se encontro el carrito
    }
}

module.exports = CarritoController;