// while
/* while(condicion logica){
    todo el codigo que quiero repetir
    agregar algo que haga que mi condicion logica se deje de cumplir
}*/ 
document.write("<h1>Este es un bucle while</h1>")

let contador = 2;
while (contador <= 10) {
    document.write(`<p>Este es el renglon N${contador}</p>`);
    // contador++ // contador = contador + 1;
    contador = contador + 2;
}

// do while
/* do{
    todo el codigo a repetir
    agregar algo que haga que mi condicion se deje de cumplir
    }while(condicion logica)
*/
document.write("<h2>Este es un bucle do-while</h2>")
/*
let vueltas = 1;
do{
    document.write(`<p>Esta es la linea N${vueltas}</p>`);
    vueltas++;
}//while(vueltas < 11)
while(confirm('¿Queres volver a ver las lineas?'))
*/

let vueltas = 1;
let limite = parseInt(prompt("¿Cuantas veces repetimos la linea?"))
do{
    document.write(`<p>Esta es la linea N${vueltas}</p>`);
    vueltas++;
}while(vueltas < limite)


document.write("<h2>Este es un bucle for</h2>")

// for
// for(Inicializar variable; condicion logica; incremento de variable)
for(let contador = 10; contador > 0; contador--){
    document.write(`<p>Cuenta regresiva, ${contador}</p>`)
}