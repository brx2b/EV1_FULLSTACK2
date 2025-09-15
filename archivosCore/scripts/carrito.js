document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('lista-carrito');
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  listaCarrito.innerHTML = ''; // Limpia contenido previo

  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  carrito.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('item-carrito');
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100px">
      <h3>${producto.nombre}</h3>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <hr>
    `;
    listaCarrito.appendChild(div);
  });
});
function EliminarCarrito() {
  localStorage.removeItem('carrito');
  location.reload();
}