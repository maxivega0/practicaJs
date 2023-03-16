//* Crear un array vacio
let frutas = [];

//* Crear un array con datos
let peliculas = ['Los Vengadores: EndGame', 2019, 'Ant-Man', 'Black Adam', true];

//* Cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(`<p> ${peliculas}</p>`);

//* Mostrar el arreglo peliculas como una lista
document.write(`<h2>Lista de peliculas</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* agregar un elemento al principio del arreglo(al principio del arreglo)
peliculas.unshift('Harry Potter', 'Mario Bros');

document.write(`<h2>Agregamos un elemento al principio del arreglo de peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Agregar un elemento en el medio del arreglo}
//* .splice(posicion donde agrego item, elementos a borrar, elementos a agregar)
peliculas.splice(3,0,'La ballena');

document.write(`<h2>Agregamos un elemento en el medio del arreglo de peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Agregar un elemento al final del arreglo
peliculas.push('Iron-Man')

document.write(`<h2>Agregamos un elemento al final del arreglo de peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Modificar un elemento del arreglo
peliculas[7] = 'Thor';

document.write(`<h2>Modificamos un elemento del arreglo de peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Eliminamos el ultimo elemento del array
peliculas.pop();

document.write(`<h2>Eliminamos el ultimo elemento del arreglo de peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Borrar varios elementos
//* Desde la quinta posicion, borra los siguentes 2 elementos
peliculas.splice(5,2)

document.write(`<h2>Eliminamos elementos de la posicion 5 y 6 del array peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Borrar un elemento al principio del array
peliculas.shift();

document.write(`<h2>Eliminamos el primer elemento del array peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* Operaciones especiales para arrays
//* Ordenar el array (en string va perfecto)
peliculas.sort();

document.write(`<h2>Ordenamos el array peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//* saber si existe o no un elemento dentro del array

document.write(`<p>¿Existe la peli Thor? ${peliculas.includes('Thor')}</p>`);
document.write(`<p>¿Existe la peli thor love and thunder? ${peliculas.includes('thor')}</p>`);

//* Operador ternario
//* (condicion logica) ? true : false  // reemplzado de estructura ifelse.
//* Si agregamos "Null" luego de ':', podemos usar la estructura ternaria para solo if  
let existePeli = (peliculas.includes('Thor')) ? 'Si encontré la pelicula.' : 'No encontramos la pelicula buscada.';

document.write(`<p>¿Existe la peli Thor? ${existePeli}</p>`);
document.write(`<p>¿Existe la peli thor love and thunder? ${(peliculas.includes('thor')) ? 'Si encontré la pelicula.' : 'No encontramos la pelicula buscada.'}</p>`);