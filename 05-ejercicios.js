// EJERCICIO 1
/* Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos. */

// EJERCICIO 2
/* 
Crea una función que reciba dos array, un booleano y retorne un array.

  - Si el booleano es verdadero buscará y retornará los elementos comunes
    de los dos array.


 - Si el booleano es falso buscará y retornará los elementos no comunes
  de los dos array.
*/

// Solucion ejercicio 2

// Opcion 1 - if else
function compararArrays(array1, array2, bool) {
  if (bool) {
    // Método filter retorna un nuevo array con aquellos elementos que cumplan una  determinada condicion y Metodo includes determina si el array contiene un determinado elemento y retorna un booleano
    const repetidos = array1.filter((elemento) => array2.includes(elemento));
    return repetidos;
  } else {
    const noRepetidosArray1 = array1.filter(
      (elemento) => !array2.includes(elemento)
    ); //Selecciona los elementos de array1 que no están en el array2
    console.log(noRepetidosArray1);
    const noRepetidosArray2 = array2.filter(
      (elemento) => !array1.includes(elemento)
    ); // Selecciona los elementos de array2 que no están en array1.
    console.log(noRepetidosArray2);

    // concat() Combina ambos resultados para obtener los elementos no repetidos.
    return noRepetidosArray1.concat(noRepetidosArray2);
  }
}

const array1 = [2, 8, 9, 5, 7];
const array2 = [5, 1, 4, 8, 3];

console.log(compararArrays(array1, array2, false));

// Opcion 2 - operador ternario
/* function compararArrays(array1, array2, bool) {
  return bool
    ? (repetidos = array1.filter((elemento) => array2.includes(elemento)))
    : (noRepetidos = array1
        .filter((elemento) => !array2.includes(elemento))
        .concat(array2.filter((elemento) => !ar1.includes(elemento))));
}

const ar1 = [2, 8, 9, 5, 7];
const ar2 = [5, 1, 4, 8, 3];

console.log(compararArrays(ar1, ar2, false)); */

// EJERCICIO 3
/* Desarrolla un programa que sume todos los números primos en un rango dado. El usuario debe ingresar el rango, y el programa debe mostrar la suma de los números primos dentro de ese rango. */
