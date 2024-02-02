class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  miInformacion() {
    return `Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad`;
  }
}

const persona1 = new Persona("Juan", "Gomez", 28);
const persona2 = new Persona("Pedro", "Torres", 22);

console.log(persona1);
console.log(persona1.miInformacion());
console.log(persona2);
