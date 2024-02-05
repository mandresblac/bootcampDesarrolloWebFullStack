// EJERCICIO 1
/* Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos. */

function tiempo(dias, horas, minutos, segundos) {
  // Definimos las conversiones
  const milisegundosEnUnSegundo = 1000;
  const segundosEnUnMinuto = 60;
  const minutosEnUnaHora = 60;
  const horasEnUnDia = 24;

  // Convertir días a milisegundos
  const diasAMilisegundos =
    dias *
    horasEnUnDia *
    minutosEnUnaHora *
    segundosEnUnMinuto *
    milisegundosEnUnSegundo;

  // Convertir horas a milisegundos
  const horasAMilisegundos =
    horas * minutosEnUnaHora * segundosEnUnMinuto * milisegundosEnUnSegundo;

  // Convertir minutos a milisegundos
  const minutosAMilisegundos =
    minutos * segundosEnUnMinuto * milisegundosEnUnSegundo;

  // Convertir segundos a milisegundos
  const segundosAMilisegundos = segundos * milisegundosEnUnSegundo;

  // Calculamos el total de milisegundos
  const totalMilisegundos = `${dias} dias son ${diasAMilisegundos} milisegundos \n${horas} horas son ${horasAMilisegundos} milisegundos \n${minutos} minutos son ${minutosAMilisegundos} milisegundos \n${segundos} segundos son ${segundosAMilisegundos} milisegundos`;

  // Retornar total milisegundos
  return totalMilisegundos;
}

console.log(tiempo(2, 5, 30, 10));

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

/* Los números primos son números naturales mayores que 1 que solo tienen dos divisores positivos: 1 y ellos mismos. Es decir, un número primo es aquel que no puede ser dividido de manera exacta por ningún otro número excepto 1 y él mismo.

Ejemplos de números primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
*/

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false; // Verifica si el número es menor o igual a 1, ya que los números primos deben ser mayores a 1

  // Verificar divisibilidad del número desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      // Si el número es divisible por algún valor en el rango, no es primo
      return false;
    }
  }
  // Si no se encuentra ningún divisor, es primo
  return true;
}

// Función para sumar los números primos en un rango
function sumaPrimosEnRango(inferior, superior) {
  let suma = 0;
  for (let i = inferior; i <= superior; i++) {
    if (esPrimo(i)) {
      suma += i;
    }
  }
  return suma;
}

let rangoInferior = parseInt(prompt("Ingrese el límite inferior del rango:"));
let rangoSuperior = parseInt(prompt("Ingrese el límite superior del rango:"));

// Validar la entrada del usuario
if (
  isNaN(rangoInferior) ||
  isNaN(rangoSuperior) ||
  rangoInferior >= rangoSuperior
) {
  console.log(
    "Entrada inválida. Asegúrese de que los límites sean números y el límite inferior sea menor al límite superior."
  );
} else {
  // Calcular y mostrar la suma de los números primos en el rango
  let resultado = sumaPrimosEnRango(rangoInferior, rangoSuperior);
  console.log(
    `La suma de los números primos en el rango [${rangoInferior}, ${rangoSuperior}] es: ${resultado}`
  );
}
