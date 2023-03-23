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
        document.write(`<p>La cancion se está reproduciendo...</p>`)
    },
    pausa:() => {
        document.write(`<p>La cancion se está pausa.</p>`)
    }
}

//* Mostrar objeto
console.log(cancion);
document.write(`<p>Cancion: ${cancion.titulo} </p>`);
document.write(`<p>Genero: ${cancion.genero} </p>`);
document.write(`<p>Duracion: ${cancion['duracion']} </p>`);