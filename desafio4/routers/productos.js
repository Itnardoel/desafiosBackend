const express = require('express');
const { Router } = express;

const router = Router();

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

router.get('/productos', (req, res) => {
    // devuelve un array con todos los productos en el servidor
    res.status(200).json(productos);
})

router.get('/productos/:id', (req, res) => {
    // devuelve un producto según su id
    const idProducto = req.params.id;
    const objetoFind = productos.find(objeto => objeto.id == idProducto);
    if (objetoFind) {
        res.status(200).json(objetoFind);
    } else (
        res.status(404).json({ error : 'producto no encontrado' })
    )
})

router.post('/productos', (req, res) => {
    // recibe y agrega un producto, y lo devuelve con su id asignado
    let { body : data } = req;
    data = { id: siguienteID, ...data };
    productos.push(data)
    siguienteID ++;
    res.status(201).json(data);
})

router.put('/productos/:id', (req, res) => {
    // recibe y actualiza un producto según su id
    const idProducto = req.params.id;
    const objetoFind = productos.find(objeto => objeto.id == idProducto);
    if (objetoFind) { 
        objetoFind.price = req.body.price;
        res.status(204).end();
    } else (
        res.status(404).json({ error : 'producto no encontrado' })
    )
})

router.delete('/productos/:id', (req, res) => {
    // elimina un producto según su id
    const idProducto = req.params.id;
    const objetoFind = productos.find(objeto => objeto.id == idProducto);
    if (objetoFind) {
        productos.splice(idProducto - 1, 1);
        res.status(204).end();
    } else (
        res.status(404).json({ error : 'producto no encontrado' })
    )
})

module.exports = router;