const express = require('express');
const Contenedor = require("./main.js");

const app = express();

const PORT = 8080;
const contenedor = new Contenedor;

const object1 = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}

const object2 = {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
}

const object3 = {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
}

contenedor.save(object1);
contenedor.save(object2);
contenedor.save(object3);

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/productos', (req, res) => {
    // devuelve un array con todos los productos en el servidor
    const products = contenedor.getAll();
    products
        .then (data => res.json(data))
        .catch (error => console.log(error))
})

app.get('/productoRandom', (req, res) => {
    // devuelve un producto elegido al azar entre todos los productos disponibles
    (async () => {
        const products = await contenedor.getAll();
        const randomId = Math.floor(Math.random() * products.length + 1);
        const randomProduct = await contenedor.getById(randomId);
        res.json(randomProduct);
    })()
})