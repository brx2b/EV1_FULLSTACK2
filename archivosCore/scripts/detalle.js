// detalle.js
document.addEventListener('DOMContentLoaded', () => {
  const productoData = JSON.parse(localStorage.getItem('productoSeleccionado'));

  if (productoData) {
    document.querySelector('.img-producto').src = productoData.imagen;
    document.querySelector('.img-producto').alt = productoData.nombre;
    document.querySelector('.info-producto h2').textContent = productoData.nombre;
    document.querySelector('.info-producto p:nth-of-type(1)').textContent = productoData.descripcion;
    document.querySelector('.info-producto p:nth-of-type(2)').textContent = `Precio: ${productoData.precio}`;
  }

  // BOTÓN AÑADIR AL CARRITO
  document.querySelector('.info-producto button').addEventListener('click', () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push(productoData); // Agrega producto al array
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert("Producto añadido al carrito");
  });
});
