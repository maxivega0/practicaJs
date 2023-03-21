//* Crear un array vacio
let frutas = [];

//* Crear un array con datos
let peliculas = [
  "Los Vengadores: EndGame",
  2019,
  "Ant-Man",
  "Black Adam",
  true,
];

//* creacion de funciones
//! Al agregar el igual, titulo tendra un valor por defecto si no le llega el dato
const mostrarPeliculas = (titulo = 'No hay un titulo disponible') => {
  document.write(`<h2>${titulo}</h2>`);
  document.write(`<ul>`);
  for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
  }
  document.write(`</ul>`);
};

//* Cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(`<p> ${peliculas}</p>`);

//* Mostrar el arreglo peliculas como una lista
mostrarPeliculas(); //!Funcion para mostrar peliculas

//* agregar un elemento al principio del arreglo(al principio del arreglo)
peliculas.unshift("Harry Potter", "Mario Bros");

mostrarPeliculas('Agregamos un elemento al principio del arreglo de peliculas.');

//* Agregar un elemento en el medio del arreglo}
//* .splice(posicion donde agrego item, elementos a borrar, elementos a agregar)
peliculas.splice(3, 0, "La ballena");

mostrarPeliculas('Agregamos un elemento en el medio del arreglo de peliculas.');

//* Agregar un elemento al final del arreglo
peliculas.push("Iron-Man");

mostrarPeliculas('Agregamos un elemento al final del arreglo de peliculas.');

//* Modificar un elemento del arreglo
peliculas[7] = "Thor";

mostrarPeliculas('Modificamos un elemento del arreglo de peliculas.');

//* Eliminamos el ultimo elemento del array
peliculas.pop();

mostrarPeliculas('Eliminamos el ultimo elemento del arreglo de peliculas.');

//* Borrar varios elementos
//* Desde la quinta posicion, borra los siguentes 2 elementos
peliculas.splice(5, 2);

mostrarPeliculas('Eliminamos elementos de la posicion 5 y 6 del array peliculas.');

//* Borrar un elemento al principio del array
peliculas.shift();

mostrarPeliculas('Eliminamos el primer elemento del array peliculas.');

//* Operaciones especiales para arrays
//* Ordenar el array (en string va perfecto)
peliculas.sort();

mostrarPeliculas('Ordenamos el array peliculas.');

//* saber si existe o no un elemento dentro del array
document.write(`<h2>Ejercicios con array</h2>`);

document.write(`<p>¿Existe la peli Thor? ${peliculas.includes("Thor")}</p>`);
document.write(
  `<p>¿Existe la peli thor love and thunder? ${peliculas.includes("thor")}</p>`
);

//* Operador ternario
//* (condicion logica) ? true : false  // reemplzado de estructura ifelse.
//* Si agregamos "Null" luego de ':', podemos usar la estructura ternaria para solo if
let existePeli = peliculas.includes("Thor")
  ? "Si encontré la pelicula."
  : "No encontramos la pelicula buscada.";

document.write(`<p>¿Existe la peli Thor? ${existePeli}</p>`);
document.write(
  `<p>¿Existe la peli thor love and thunder? ${
    peliculas.includes("thor")
      ? "Si encontré la pelicula."
      : "No encontramos la pelicula buscada."
  }</p>`
);
