class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`${this.apellido} ${this.nombre}`);
    }

    addMascota(pet) {
        this.mascotas.push(pet);
    }

    countMascotas() {
        return console.log(this.mascotas.length);
    }

    addBook(name, author) {
        this.libros.push({nombre: name, autor: author});
    }

    getBooksNames() {
        return console.log(this.libros.map(names => names.nombre));
    }
}

const user = new User ('Leonardo', 'Pedranti', [{nombre: 'Harry Potter', autor: 'J. K. Rowling'}], ['Perro']);

console.log(user);

user.getFullName();
user.addMascota('Gato');
user.countMascotas();
user.addBook('El Señor de los Anillos', 'J. R. R. Tolkien');
user.getBooksNames();

console.log(user);