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

function mayorQue(x) {
  return (num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayoQueVeinte = mayorQue(20);
console.log(mayorQueDiez(8));

