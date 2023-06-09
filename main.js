/* Funciones de orden superior */


/* ABSTRACCION */

// function sumarRango(min, max) {
//   let total = 0;

//   for (let i = min; i <= max; i++) {
//     total += i;
//   }

//   return total;
// }

// console.log(sumarRango(1, 5));

/* Retorno de funciones */

// const mayorQueDiez = num =>  num > 10;

// function mayorQue(x) {
//   return (num) => num > x;
// }

// const mayorQueDiez = mayorQue(10);
// const mayoQueVeinte = mayorQue(20);
// console.log(mayorQueDiez(8));

/* Metodos de busqueda */

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["perro", "gato", "cisne", "tortuga"];
const productos = [
  {nombre : "mesa", precio : 35},
  {nombre : "silla de plastico", precio : 50},,
  {nombre : "silla de madera", precio : 80},
  {nombre : "ventana", precio : 50},
  {nombre : "puerta", precio : 90},
];




// forEach() => recorrer el array y ejecutar lo que le digamos con cada elemento

// numeros.forEach((numero) => {
//   console.log(numero);
// }); 

// productos.forEach((producto) => {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// });


/* find()  => recorrer el array y retornar el primer elemento que cumpla con una condicion*/ 

// const perro = animales.find((animal) => animal === "perro");

// console.log(perro);

// let productoElegido = prompt("Ingrese el producto que quiere comprar");

// console.log(productos.find((producto) => producto.nombre === productoElegido));

/* filter () => Recorrer el array y retornar uno nuevo con todos los elementos que cumplan con una condicion */

// const perro = animales.filter((animal) => animal === "gato");
// console.log("gato");

// const sillas  = productos.filter((producto) => producto.nombre.includes("silla"));
// console.log(sillas);

/* some () => recorrer el array y responder true o false segun si encuentra o no un elemento que cumpla con una condicion */

// const cisne = animales.some((animal) => animal === "cisne");
// console.log(cisne);

// const caballo = animales.some((animal) => animal === "caballo");
// console.log(caballo);

/* map () => Recorrer el array retornar uno nuevo con los elementos transformados del array original */

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const preciosActualizados = productos.map(( producto) => {
//   return {
//     nombre : producto.nombre,
//     precio : producto.precio * 1.5
//   }
// });

// console.log(productos);
// console.log(preciosActualizados);

// reduce() => recorrer el array y retornarnos un unico valor tras hacer una operacion sobre los elementos

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(totalCarrito);

// sort() => reordenar el array segun el criterio que le indiquemos


// numeros.sort((a, b) => a - b);
// console.log(numeros);

// numeros.sort((a, b) => a + b);
// console.log(numeros);


// MATH

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// // min() => retornar el numero minimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));

// // max() => retorna el numero maximo de un listado
// console.log (Math.max(50, 12, 37, 17, 25, 6));

// // ceil () => retorna el numero que le indiquemos redondeado hacia arriba
// console.log (Math.ceil(numeroDecimal1));
// console.log (Math.ceil(numeroDecimal2));

// // floor () => retorna el numero que le indiquemos redondeado hacia abajo
// console.log (Math.floor(1.25));
// console.log (Math.floor(1.75));

// // round () => retorna el numero que le indiquemos redondeado mas cercano
// console.log (Math.round(1.25));
// console.log (Math.round(1.75));

// random () => retorna un numero aleatorio entre 0 inclusive y 1 inclusive
// console.log(Math.random());
// console.log(Math.round(Math.random()));

// console.log(Math.round(Math.random() * 50 ) );
// console.log(Math.round(Math.random() * 50 + 20 ) );

// console.log (Math.floor(Math.random() * 3 + 1 ));

function generarNumero (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numeroRandom = generarNumero(100, 200)
console.log(numeroRandom);