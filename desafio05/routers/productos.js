const { Router } = require('express');
const ProductosController = require('../controllers/ProductosController');

const router = Router();

router.get('/', async (req, res) => {
    // devuelve un array con todos los productos en el servidor
    const productos = await ProductosController.obtenerTodos();
    // res.status(200).json(productos);
    res.render('productos', { productos, isEmpty: productos.length });
})

router.get('/:id', async (req, res) => {
    // devuelve un producto según su id
    const producto = await ProductosController.obtenerPorId(req.params.id);
    if (producto) {
        res.status(200).json(producto);
    } else {
        res.status(404).json({ error : 'producto no encontrado' })
    }
})

router.post('/', async (req, res) => {
    // recibe y agrega un producto, y lo devuelve con su id asignado
    const productos = await ProductosController.agregar(req);
    // res.status(201).json(productos);
    res.redirect('/productos');
})

router.put('/:id', async (req, res) => {
    // recibe y actualiza un producto según su id
    const producto = await ProductosController.actualizar(req.params.id);
    if (producto) { 
        producto.title = req.body.title;
        producto.price = req.body.price;
        producto.thumbnail = req.body.thumbnail;
        res.status(204).end();
    } else (
        res.status(404).json({ error : 'producto no encontrado' })
    )
})

router.delete('/:id', async (req, res) => {
    // elimina un producto según su id
    const producto = await ProductosController.borrar(req.params.id);
    if (producto) {
        res.status(204).end();
    } else (
        res.status(404).json({ error : 'producto no encontrado' })
    )
})

module.exports = router;