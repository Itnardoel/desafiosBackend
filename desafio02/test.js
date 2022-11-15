const Contenedor = require("./main.js");

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

contenedor.getById(3);
contenedor.getById(5);
contenedor.getAll();


setTimeout (function(){
    contenedor.deleteById(2);
},1000);

setTimeout (function(){
    contenedor.deleteAll();
},2000);