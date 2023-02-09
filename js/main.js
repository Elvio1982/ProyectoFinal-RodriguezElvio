/*Pedir al ususario sus datos para poder ingresar*/

const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese su Apellido");
const edad = parseInt(prompt("Ingrese la edad"));

/*Condiciones para poder ingresar*/

if (edad >= 18) {
  alert("Acceso permitido");
} else {
  alert("Acceso denegado");
}
console.log (nombre, apellido, edad)

//Productos y precios

const productos = [
{nombre: "harina", precio: 10},
{ nombre: "polenta", precio: 5 },
{ nombre: "cerveza", precio: 130 },
{ nombre: "gaseosa", precio: 140 },
{ nombre: "leche", precio: 20 }, 
];


let carrito = []
let seleccion = prompt("Hola desea comprar algun producto si o no?")

//inicio de Bucle 
while(seleccion != "si" &&  seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola quiere comprar algo si o no?")
}
//Muestra de los productos en un alert cuando el usuario ingresa si
if(seleccion == "si"){
    alert ("A continuacion nuestra Lista de productos")
    let todoslosProductos = productos.map(
      (producto) => producto.nombre + " " + producto.precio + "$");
      alert(todoslosProductos.join (" - "))}
      
//Alert cuando el usuario ingresa no
      else if (seleccion == "no") {
  alert("gracias por visitar, hasta pronto!!")
}

while (seleccion != "no"){
  let producto = prompt ("agrega un producto a tu carrito")
  let precio = 0

//Operador logico OR 
if(producto == "harina" || producto == "polenta" || producto == "cerveza" || producto == "gaseosa" || producto == "leche"){
  switch (producto) {
    case "harina":
      precio = 10;
      break;
    case "polenta":
      precio = 5;
      break;
    case "cerveza":
      precio = 130;
      break;
    case "gaseosa":
      precio = 140;
      break;
    case "leche":
      precio = 20;
      break;
    default: 
      break;
     }
    let unidades = parseInt (prompt ("cuantas unidades quiere llevar"))
    
//Carrito de compras 
carrito.push({producto, unidades, precio})
  console.log (carrito)
    } else {
      alert("no tenemos ese producto")
  }

  seleccion = prompt("desea seguir comprando?")

  while(seleccion === "no"){
    alert ("gracias por su compra, Hasta pronto!!")
    carrito.forEach ((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}
//Precio final a pagar
const total = carrito.reduce ((callbackfn, el) => callbackfn + el.precio * el.unidades, 0 )
console.log (`El total a pagar por su compra es: ${total}`)





