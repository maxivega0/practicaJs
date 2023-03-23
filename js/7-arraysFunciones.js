let productos = [
  "Hidratante facial",
  "Tonico exfoliante",
  "Protector solar factor 50",
  "Protector solar toque seco factor 50",
  "Protector solar con color factor 50",
  "Gel de limpieza facial",
  "Tonico hidratante",
  "Sérum hidratante",
  "Exfoliante de azúcar cherry",
  "Pads de hidrogel para contorno de ojos",
  "Mascarilla facial",
  "Sérum facial con PHA",
  "Agua micellar",
  "Mascara de hidratación y reparación",
  "Protector solar en barra",
  "Crema contorno de ojos",
  "Bálsamo labial",
];

//* Mostrar lista de productos

const mostrarProductos = (titulo = "No hay un titulo disponible", arreglo) => {
  document.write(`<h2>${titulo}</h2>`);
  document.write(`<ul>`);
  // for (let i = 0; i < peliculas.length; i++) {
  //   document.write(`<li>${peliculas[i]}</li>`);
  //
  //* ForEach, for in, for of (estos dos ultimos los dejamos para despues)
  //* forEach, que quiero que haga esa funcion por cada elemento del array(hacer un document.write)
  //! el primer parametro del forEach, representa cada elemento del array (producto)
  //! arreglo.forEach(producto => {document.write(`<li>${producto}</li>`);})

  //* Renderizar por cada elemento del array
  //* Cuando quiero modificar cada elemento del array
  //!Bucle que generara li, hasta el ultimo elemento del array y cierra con ul
  //TODO Map metodo inmutable, esto que estoy haciendo no modifica igual al arreglo del producto, crea una copia del array y luego lo modifica
  arreglo.map((producto) => document.write(`<li>${producto}</li>`));
  document.write(`</ul>`);
};
mostrarProductos("Lista de productos", productos);

//* Filtrar los protectores solares
//* Filter es inmutable
let listaProtectoresSolares = productos.filter(producto => producto.includes('Protector'));
  console.log(listaProtectoresSolares);
mostrarProductos('Protectores solares', listaProtectoresSolares);

//* Buscar un serum (Find)

let serum = productos.find(producto => producto.includes('Sérum'));
let otroProducto = productos.find(producto => producto.includes('Shampoo'));
document.write(`<p>Producto buscado: ${serum}</p>`);
document.write(`<p>Producto buscado: ${(otroProducto === undefined) ? 'No encontramos el producto solicitado' : otroProducto}</p>`);