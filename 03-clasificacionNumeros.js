/*
Escribe una función que reciba una lista de números enteros y clasifique cada número en una de las siguientes categorías:
Positivo: Números mayores que cero.
Negativo: Números menores que cero.
Cero: Números iguales a cero.
La función debe devolver un objeto con tres propiedades: positivos, negativos y ceros, que contienen listas de números correspondientes a cada categoría. 
*/

function clasificaNumeros(numeros) {
  const tipoNumero = {
    positivos: [],
    negativos: [],
    cero: [],
  };

  numeros.forEach((element) => {
    if (element > 0) tipoNumero.positivos.push(element);
    else if (element < 0) tipoNumero.negativos.push(element);
    else tipoNumero.cero.push(element);
  });

  return tipoNumero;
}

// Array de números enteros
let numerosEnteros = [-3, -2, -1, 0, 1, 2, 3];

// Llamanos a la funcion numero
console.log(clasificaNumeros(numerosEnteros));
