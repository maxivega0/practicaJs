// //* ES5 // PROTOTIPOS
// function Videojuego(nombre, precio) {
//     //* propiedad
//     this.nombre = nombre;
//     this.precio = precio;
// }

// //* Instanciar un objeto
// let juego = new Videojuego('Super Mario', 3500);
// let juego2 = new Videojuego('Terraria', 129);

// console.log(juego);
// console.log(juego2);

// //* ES6 // PROTOTIPOS
// //* buena practica: primera letra en mayuscula
//* tipado debil, no importa que no aclare el tipo de varible
class Videojuego{
    //* metodo constructor // el consturctor solo hace las propiedades
    //* crear propiedad privada
    #nombre; 

    constructor(nombre, genero, precio, desarrollador){
        this.#nombre = nombre;
        this._genero = genero;
        this._precio = precio;
        this._desarrollador = desarrollador;
        this._valoracion = 0; // propiedad por defecto
    }
    //* setters y getters propiedades computas
    //* get lee y retorna un valor
    get genero(){
        return this._genero
    }
    //* set modifican un valor
    set genero(nuevoGenero){
        if(nuevoGenero.length > 0){
            this._genero = nuevoGenero
        }
    }
    get nombre(){
        return this.#nombre
    }
    //* set modifican un valor
    set nobre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    //* metodos
    mostrarInformacion(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre} </li>
        <li>Precio: ${this._precio} </li>
        <li>Genero: ${this._genero} </li>
        <li>Desarrollador: ${this._desarrollador} </li>
        </ul>`)
    }
}

class JuegoSupervivencia extends Videojuego{
    #protagonista;
    #antagonista;
    constructor(nombre, genero, precio, desarrollador, protagonista, antagonista, ){
        //* invocar al constructor de videojuego
        super(nombre, genero, precio, desarrollador);
        this.#protagonista = protagonista;
        this.#antagonista = antagonista;
    }
    get protagonista(){
        return this.#protagonista
    }
    //* set modifican un valor
    set protagonista(nuevoProtagonista){
        if(nuevoProtagonista.length > 0){
            this.#protagonista = nuevoProtagonista
        }
    }
    get antagonista(){
        return this.#antagonista
    }
    //* set modifican un valor
    set antagonista(nuevoAntagonista){
        if(nuevoAntagonista.length > 0){
            this.#antagonista = nuevoAntagonista
        }
    }
    //* POLIMORFISMO
    mostrarInformacion(){
        super.mostrarInformacion()
        document.write(`<p>Protagonista: ${this.protagonista}<br> Antagonista ${this.antagonista} </p>`)
    }
}

const stardewValley = new Videojuego('Stardew Valley', 'Simulador de granja', 150, 'Apend' )
console.log(stardewValley)
document.write(`<p>El juego ${stardewValley.nombre} tiene valoracion ${stardewValley._valoracion} </p>`)
document.write(`<p>El juego ${stardewValley.nombre} tiene el genero ${stardewValley._genero} </p>`)

//* modificar el gnero
stardewValley.genero = 'la mejor granjita';
document.write(`<p>El juego ${stardewValley.nombre} tiene el genero ${stardewValley._genero} </p>`)

stardewValley.mostrarInformacion();

const residentEvil2 = new JuegoSupervivencia('Resident Evil 2', 'Supervivencia, Terror', 1000, 'Capcom', 'Leon', 'Birkin');
console.log(residentEvil2)

residentEvil2.mostrarInformacion();