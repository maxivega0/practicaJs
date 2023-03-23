//* POO un objeto es una abstraccion de algo que existe en la vida real
//* Crear un objeto, notacion literal

let cancion = {
    //* Propiedades = key:value
    titulo: 'Muchachos',
    artista: 'La mosca',
    duracion: '2:32',
    anio: 2021,
    album: 'Mundial 2022',
    genero: 'Murga',
    id: 3462,

    //* Metodos
    reproducir: function(){
        //* Como nombrar un atributo dentro del objeto(buena practica)
        console.log(this)
        document.write(`<p>La cancion ${this.titulo} se está reproduciendo...</p>`)
    },
    //! No puedo usar 'this' en arrow function
    pausa: () => {
        console.log(this.titulo)
        document.write(`<p>La cancion está pausa.</p>`)
    }
}

//* Mostrar objeto
console.log(cancion);
document.write(`<p>Cancion: ${cancion.titulo} </p>`);
document.write(`<p>Genero: ${cancion.genero} </p>`);
document.write(`<p>Duracion: ${cancion['duracion']} </p>`);

//* Modificar una propiedad
document.write(`<p>Artista: ${cancion.artista} </p>`);
cancion.artista = 'La Mosca Tse-Tse';
document.write(`<p>Artista: ${cancion.artista} </p>`);

//*  Agregar una propiedad
cancion.premios = 'Disco de Oro';
document.write(`<p>Premios: ${cancion.premios} </p>`);

//* Borrar una propiedad
delete cancion.premios
console.log(cancion)
document.write(`<p>Premios: ${cancion.premios} </p>`);

//* Ejecutar un metodo cancion.reproducir(parametros si los hay)
cancion.reproducir();
cancion.pausa();
console.log(this)
