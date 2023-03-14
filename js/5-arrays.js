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
peliculas.splice(5)

document.write(`<h2>Eliminamos todos los elementos desde la posicion 5 del array peliculas.</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);