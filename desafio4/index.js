const express = require('express');
const path = require('path');
const app = express();

const productos = require('./routers/productos');

const PORT = process.env.NODE_PORT;
const ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', productos);

//middleware de manejo de errores
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http esta escuchando en el puerto ${server.address().port}`);
    console.log(`http://localhost:${server.address().port}`);
    console.log(`Environment:${ENV}`);
})

server.on("error", error => console.log(`Error en servidor ${error}`));