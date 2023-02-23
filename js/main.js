const shopContent = document.getElementById("shopContent");
const vercarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src= "${product.Img}">
  <h2>${product.nombre}</h2>
  <p class="price">${product.precio} $</p>
  `;
shopContent.append(content);

let comprar = document.createElement("button");
comprar.innerText = "Comprar";
comprar.className = "Comprar";

content.append(comprar);

comprar.addEventListener("click", () => {
  carrito.push ({
    id: product.id,
    Img: product.Img,
    nombre: product.nombre,
    precio: product.precio,
  });
  console.log(carrito);
});
});

