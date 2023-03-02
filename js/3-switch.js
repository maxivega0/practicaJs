/*
switch(option){
    case 1:
        todas las lineas de codigo que tengo que hacer si se cumple que es la opcion 1
        break;
    case 2:
        todas las lineas de codigo que tengo que hacer si se cumple que es la opcion 2
        break;
    default:
        Todas las lineas del caso por defecto
};
!*/

//TODO Solicitar al usuario un dia de la semana, y nosotros le vamos a sugerir un menú para cada día:
//TODO Plato principal, bebida y postre

let dia = prompt("Seleccione un día: 1-Lunes, 2-Miercoles, 3-Viernes");
console.log(dia);
console.log(dia.toLowerCase()); //!Transforma las variabels en minusculas
console.log(dia.toUpperCase()); //!Transforma las variabels en mayusculas
//* Modificar el contenido de dia a minusculas
dia = dia.toLowerCase();
switch (dia) {
    case "lunes":
    case "1":
        document.write(`<h2>Menú del Lunes</h2>
    <ul>
        <li>Plato principal: Milanesa con Pure</li>
        <li>Bebida: Coca-Cola</li>
        <li>Postre: Flan con dulce de leche</li>
    </ul>`);
        break;
    case "miercoles":
    case "2":
        document.write(`<h2>Menú del Miercoles</h2>
    <ul>
        <li>Plato principal: Hamburguesa con papas fritas</li>
        <li>Bebida: Sprite</li>
        <li>Postre: Helado</li>
    </ul>`);
        break;
    case "viernes":
    case "3":
        document.write(`<h2>Menú del Viernes</h2>
    <ul>
        <li>Plato principal: Pizza</li>
        <li>Bebida: Cerveza</li>
        <li>Postre: Panqueques con helado</li>
    </ul>`);
        break;
    default:
        document.write("Ingreso una opción invalida")
        break;
}
