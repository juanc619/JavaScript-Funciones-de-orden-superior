/* Funciones de orden superior */


/* ABSTRACCION */

function sumarRango (min,max) {
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i
  }

  return total;
}

console.log(sumarRango(1, 10));
console.log(sumarRango(3, 7));

let sumaEntreTresYSiete = sumarRango(3, 7);
console.log(sumaEntreTresYSiete);