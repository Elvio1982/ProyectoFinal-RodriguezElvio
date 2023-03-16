const shopContent = document.getElementById("shopContent");
const vercarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadcarrito = document.getElementById("cantidadcarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) ||[];

//Asincronia
const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    data.forEach((product) => {
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
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if (repeat) {
      carrito.map ((prod) => {
        if (prod.id === product.id){
          prod.cantidad++;
        }
      });
    }else {
    carrito.push ({
        id: product.id,
        Img: product.Img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    
      console.log(carrito);
      console.log(carrito.length);
      carritocounter();
      guardalocal();
    }
    
    });
    });


    
};

getProducts();

//Agrego localStorage
  const guardalocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};




