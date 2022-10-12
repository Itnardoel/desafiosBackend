class Contenedor {

    static productos = [];

    static async save(producto) {
        // recibe un objeto, lo guarda en el archivo
        try {
            Contenedor.productos.push(producto);
            await escribirArchivo('./db/productos.json', JSON.stringify(Contenedor.productos, null, 2));

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async getAll() {
        // devuelve un array con los objetos presentes en el archivo
        try {
            const contenidoJson = await leerArchivo('./db/productos.json');
            contenidoJson.forEach(producto => Contenedor.productos.push(producto));
            return contenidoJson;
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async deleteById(id) {
        try {
            Contenedor.productos.splice(id - 1, 1);
            await escribirArchivo('./db/productos.json', JSON.stringify(Contenedor.productos, null, 2));
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    static async updateById(id, updatedProduct) {
        try {
            Contenedor.productos[id - 1] = updatedProduct;
            await escribirArchivo('./db/productos.json', JSON.stringify(Contenedor.productos, null, 2));
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