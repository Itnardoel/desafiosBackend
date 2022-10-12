class Contenedor {

    static carts = [];

    static async save(cart) {
        // recibe un objeto, lo guarda en el archivo
        try {
            Contenedor.carts.push(cart);
            await escribirArchivo('./db/carritos.json', JSON.stringify(Contenedor.carts, null, 2));

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }
    
    static async saveProduct() {
        try {
            await escribirArchivo('./db/carritos.json', JSON.stringify(Contenedor.carts, null, 2));

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async getAll() {
        // devuelve un array con los objetos presentes en el archivo
        try {
            const contenidoJson = await leerArchivo('./db/carritos.json');
            contenidoJson.forEach(producto => Contenedor.carts.push(producto));
            return contenidoJson;
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async deleteById(id) {
        try {
            Contenedor.carts.splice(id - 1, 1);
            await escribirArchivo('./db/carritos.json', JSON.stringify(Contenedor.carts, null, 2));
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async deleteProduct() {
        try {
            await escribirArchivo('./db/carritos.json', JSON.stringify(Contenedor.carts, null, 2));
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }
}

const fs = require('fs')

const escribirArchivo = async (ruta, contenido) => {
    try {
        await fs.promises.writeFile(ruta, contenido, 'utf-8');
    } catch (error) {
        console.log('Ocurrio un error durante la escritura:', error);
        throw new Error(error.message);
    }
}

const leerArchivo = async (ruta) => {
    try {
      const contenidoString = await fs.promises.readFile(ruta, 'utf-8')
      const contenidoJson = JSON.parse(contenidoString);
      return contenidoJson;
    } catch (error) {
      console.log('Ocurrio un error durante la lectura:', error);
      throw new Error(error.message);
    }
}

module.exports = Contenedor