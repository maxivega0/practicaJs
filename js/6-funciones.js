//* aqui creo un par de variables

//* Funciones declarativas
function saludar() {
    // Codigo a ejecutar
    document.write("Hola Mundo.<br>")
}

function saludoPersonaje(nombre, apellido, alias) {
    let otroNombre = nombreCompleto(nombre, apellido);
    document.write(`<p>Hola mi nombre es ${nombreCompleto(nombre, apellido)}, me conocen como ${alias}</p>`)
}

//! function nombreCompleto(nombre, apellido) {
//!     const nuevoNombre = nombre+', ' +apellido;
//!     return nuevoNombre;
//! }

//* Funciones anonimas o expresivas
//* Se declaran al principio del codigo
const nombreCompleto  = function (nombre, apellido) {
    const nuevoNombre = nombre+' ' +apellido;
    return nuevoNombre;
}



//* para que funcione tengo que llamar o invocar a la funcion
saludar();
console.log('prueba');
saludar();

saludoPersonaje('Peter', 'Parker', 'SpiderMan');

let nombre = 'Clark';
let apellido = 'Kent';
let heroe = 'Superman';

saludoPersonaje(nombre, apellido, heroe);

nombre = 'Tony';
apellido = 'Stark';
heroe = 'Iron-Man';

saludoPersonaje(nombre,apellido,heroe);

let otroNombre = nombreCompleto(nombre, apellido)
console.log(otroNombre)
