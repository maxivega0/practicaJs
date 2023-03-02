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

const dia = prompt("Seleccione un día: 1-Lunes, 2-Miercoles, 3-Viernes");

switch (dia) {
    case "Lunes":
    case "lunes":
    case "1":
        document.write(`<h2>Menú del Lunes</h2>
    <ul>
        <li>Plato principal: Milanesa con Pure</li>
        <li>Bebida: Coca-Cola</li>
        <li>Postre: Flan con dulce de leche</li>
    </ul>`);
        break;
    case "Miercoles":
    case "miercoles":
    case "2":
        document.write(`<h2>Menú del Miercoles</h2>
    <ul>
        <li>Plato principal: Hamburguesa con papas fritas</li>
        <li>Bebida: Sprite</li>
        <li>Postre: Helado</li>
    </ul>`);
        break;
    case "Viernes":
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
