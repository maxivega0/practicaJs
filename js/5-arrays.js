//* Crear un array vacio
let frutas = [];

//* Crear un array con datos
let peliculas = ['los vengadores: endgame', 2019, 'Ant-man', 'Black Adam', true];

//* Cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(peliculas);

//* Mostrar el arreglo peliculas como una lista
document.write(`<h2>Lista de peliculas</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);