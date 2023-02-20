import { BadRequestError } from "./errors/customError.js";

class Cart {
  #id;
  #email;
  #fyh;
  #productos;
  #direccion;

  constructor(cartDto) {
    this.id = cartDto.id;
    this.email = cartDto.email;
    this.fyh = cartDto.fyh;
    this.productos = cartDto.productos;
    this.direccion = cartDto.direccion
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    // if (!value) throw new Error('"id" es un campo requerido');
    this.#id = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    // if (!value) throw new BadRequestError(`Email es un campo requerido`);
    this.#email = value;
  }

  get fyh() {
    return this.#fyh;
  }

  set fyh(value) {
    // if (!value) throw new BadRequestError('Fecha y hora es un campo requerido');
    this.#fyh = value;
  }

  get productos() {
    return this.#productos;
  }

  set productos(value) {
    this.#productos = value;
  }

  get direccion() {
    return this.#direccion;
  }

  set direccion(value) {
    // if (!value) throw new BadRequestError('Direccion de entrega es un campo requerido');
    this.#direccion = value;
  }
}

export default Cart;
