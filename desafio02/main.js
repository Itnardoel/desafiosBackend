class Contenedor {

    static idCounter = 0;
    static products = [];

    async save(object) {
        // recibe un objeto, lo guarda en el archivo, devuelve el id asignado
        try {

            Contenedor.idCounter ++;
            object = {...object, id: Contenedor.idCounter};
            Contenedor.products.push(object);
            console.log('El id del nuevo objeto es:', Contenedor.idCounter);
            await escribirArchivo('./productos.txt', JSON.stringify(Contenedor.products, null, 2));

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    async getById(number) {
        // recibe un id y devuelve el objeto con ese id, o null si no esta

        try {
            const contenidoJson = await leerArchivo('./productos.txt');
            const objetoFind = contenidoJson.find(objeto => objeto.id == number);
            if (objetoFind == null) {
                return console.log(`No se encontro el objeto con el id ${number}`);
            } else {
                return console.log(`Se encontro el objeto con el id ${number}:`,contenidoJson.find(objeto => objeto.id == number));
            }

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    async getAll() {
        // devuelve un array con los objetos presentes en el archivo
        try {
            const contenidoJson = await leerArchivo('./productos.txt');
            return console.log(contenidoJson);
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    async deleteById(number) {
        // elimina del archivo el objeto con el id buscado
        try {
            const contenidoJson = await leerArchivo('./productos.txt');
            const arrayFiltered = contenidoJson.filter(objeto => objeto.id != number);
            await escribirArchivo('./productos.txt', JSON.stringify(arrayFiltered, null, 2));
            console.log(`Se borro el objeto con el id ${number}`);
        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    async deleteAll() {
        // elimina todos los objetos presentes en el archivo
        try {
            const contenidoJson = await leerArchivo('./productos.txt');
            contenidoJson.splice(0, contenidoJson.length);
            await escribirArchivo('./productos.txt', JSON.stringify(contenidoJson, null, 2));
            console.log('Se borraron todos los objetos');
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