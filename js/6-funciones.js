//* aqui creo un par de variables

//* Funciones declarativas
function saludar() {
    // Codigo a ejecutar
    document.write("Hola Mundo.<br>")
}

function saludoPersonaje(nombre, apellido, alias) {
    document.write(`<p>Hola mi nombre es ${nombre} ${apellido}, me conocen como ${alias}</p>`)
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
heroe = 'Ironman';

saludoPersonaje(nombre,apellido,heroe);

//* Funciones anonimas o expresivas
