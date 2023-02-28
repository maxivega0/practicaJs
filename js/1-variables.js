// comentarios de una linea
/* 
Comentario largo
de multiples lineas
*/

//ECMA: Organismo internacional que estandariza un lenguaje

/* Variable: un lugar que almacena un dato
espacio de memoria, que se reserva para almacenar un dato
*/

// Declarar una variable (var - let - const)

// Mala practica (palabras reservadas, empezar la variable con numero
// espaciado entre palabras y empezar con mayuscula, se usa lowerCamellCase)

let nombreUsuario = "Gerardo Mansilla";

const year = 2023;

// Mostrar variable por consola

console.log("Hola Mundo");
console.log(nombreUsuario);
console.log(nombreUsuario + " es alumno del año " + year);
console.log(`${nombreUsuario} es alumno del año ${year}`);

// Mostrar un mensaje en el doc. html

document.write(`${nombreUsuario} es alumno del año ${year}`);
document.write("<h1>Hola Mundo</h1>");
document.write('<h1 class="titulo">Hola Mundo</h1>');
// Mostrar mensaje en una eventana emergente

alert("Este es mi primer alert");

// Modificar el contenido de una variable
nombreUsuario = "Mauricio Soria";
document.write(`${nombreUsuario} es alumno del año ${year}`);
document.write(" <br>esto es otro texto aparte");

