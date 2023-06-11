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

productos.forEach((producto) => {
  console.log(producto.nombre);
  console.log(producto.precio);
});

