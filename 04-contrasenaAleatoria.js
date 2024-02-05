/*
Implementa una función que genera contraseñas aleatorias basadas en ciertos criterios. La función debe aceptar parámetros como la longitud de la contraseña y los tipos de caracteres permitidos 

(mayúsculas, minúsculas, números y caracteres especiales).
 */

function generadorContrasena(
  longitud,
  incluirMayusculas,
  incluirMinusculas,
  incluirNumeros,
  incluirEspeciales
) {
  // caracteres permitidos
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()-_+=<>?";

  // Combinar los conjuntos de caracteres según los criterios
  let caracteresPermitidos = "";
  if (incluirMayusculas) caracteresPermitidos += mayusculas;
  if (incluirMinusculas) caracteresPermitidos += minusculas;
  if (incluirNumeros) caracteresPermitidos += numeros;
  if (incluirEspeciales) caracteresPermitidos += especiales;

  // Contraseña aleatoria
  let contrasena = "";

  // Iteramos sobre variable caracteresPermitidos
  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio =
      caracteresPermitidos[
        Math.floor(Math.random() * caracteresPermitidos.length)
      ];
    contrasena += caracterAleatorio;
  }

  return contrasena;
}

// uso
console.log(generadorContrasena(5, true, true, true, true));
