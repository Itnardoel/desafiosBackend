class Contenedor {

    static messages = [];

    async save(message) {
        // recibe un objeto, lo guarda en el archivo
        try {

            Contenedor.messages.push(message);
            await escribirArchivo('./messages.txt', JSON.stringify(Contenedor.messages, null, 2));

        } catch (error) {
            console.log('Ocurrio un error durante la operación:', error);
            throw new Error(error.message);
        }
    }

    async getAll() {
        // devuelve un array con los objetos presentes en el archivo
        try {
            const contenidoJson = await leerArchivo('./messages.txt');
            return contenidoJson;
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