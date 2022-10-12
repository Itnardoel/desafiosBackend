const { Server } = require('socket.io');
const moment = require("moment");
const Contenedor = require("./escribirArchivo");

let io;
const contenedor = new Contenedor;

let messages = [];
let products = [];

// Muestra el historial del chat guardado en el archivo messages.txt
savedText = contenedor.getAll();
savedText
.then (data => {
    messages = data;
    messages.forEach(message => {
        contenedor.save(message);
    });
})
.catch (error => console.log(error))

function initSocket(httpServer) {
    io = new Server(httpServer);
    setEvents(io);
}

function setEvents(io) {
    io.on('connection', (socketClient) => {
        console.log('Se conecto un nuevo cliente con el id', socketClient.id);
        
        socketClient.emit('history-messages', messages);
        
        socketClient.emit('history-products', products);

        socketClient.on('new-message', (data) => {
            data.date = moment().format("DD/MM/YYYY HH:mm:ss");
            contenedor.save(data);
            messages.push(data);
            io.emit('notification', data);
        })

        socketClient.on('new-product', (data) => {
            products.push(data);
            io.emit('table-update', data);
        })

        socketClient.on('disconnection', () => {
        console.log('Se desconecto el cliente con el id', socketClient.id);
        })
    })
}

// function emit(event, data) {
//     io.emit(event, data); //table-update, productos
// }

module.exports = {
    initSocket,
    // emit,
}