/*Pedir al ususario sus datos para poder ingresar*/

const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese su Apellido");
const edad = parseInt(prompt("Ingrese la edad"));

/*Condiciones para poder ingresar*/

if (edad >= 18 && nombre == "Elvio" && apellido == "Rodriguez") {
  alert("Acceso permitido");
} else {
  alert("Acceso denegado");
}

