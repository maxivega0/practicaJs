// Estructuras condicionales if

/* if (condicion){
...
}
else{
...
}
*/

// Solicitar la edad del usuario e indicar por pantalla si puede votar o no
// Tengo que pedirle edad al usuario
// puede votar a partir de los 16 años
// 16 y 17 es opcional
// A partir de 71 no es obligatorio
// prompt palabra reservada para pedir un dato
// parseint('40')

// let edad = prompt('Ingrese su edad')
let edad = parseInt(prompt("Ingrese su edad"));

// edad = parseInt(edad)
console.log(typeof edad);
console.log(edad);

if ((edad >= 16 && edad < 18) || edad >= 71) {
  document.write("Es optativo ir a votar");
} else if (edad >= 18 && edad <= 71) {
  document.write("Es obligatorio ir a votar");
} else {
  document.write("Usted no puede ir a votar");
}
