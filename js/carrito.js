const pintarcarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  
const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
  modalContainer.append(modalHeader);

const modalbutton = document.createElement("h2");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button";
  modalbutton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
  modalHeader.append(modalbutton);
carrito.forEach((product) => {
  let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
      <img src= "${product.Img}">
      <h3>${product.nombre}</h3>
      <p>${product.precio} $</p>
      <span class="restar"> ➖ </span>
      <p>cantidad: ${product.cantidad}</p>
      <span class="sumar"> ➕ </span>
      <p>Total: ${product.cantidad * product.precio}</p>
      <span class="delete-product"> ❌ </span>
`;

modalContainer.append(carritoContent);

// restar productos
  let restar = carritoContent.querySelector(".restar");
      restar.addEventListener("click", () => {
  if(product.cantidad !== 0) {
      product.cantidad--;
}
guardalocal();
pintarcarrito();

});

// sumar productos
  let sumar = carritoContent.querySelector(".sumar");
      sumar.addEventListener("click", () => {
      product.cantidad++;
guardalocal();
pintarcarrito();
});

  let eliminar = carritoContent.querySelector(".delete-product");
      eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
});
});
  
const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `Total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
};

vercarrito.addEventListener("click", pintarcarrito);
  const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);
  carrito = carrito.filter((carritoId) => {
  return carritoId !== foundId;
});
carritocounter();
guardalocal();
pintarcarrito();
};
  
const carritocounter = ()  => {
  cantidadcarrito.style.display = "block";
  const carritolength = carrito.length;
  
localStorage.setItem("carritolength", JSON.stringify(carritolength))
  cantidadcarrito.innerText = JSON.parse(localStorage.getItem("carritolength"));
};

carritocounter()

/* End carrito*/
