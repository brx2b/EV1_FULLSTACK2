// Al cargar la página, obtener los datos del producto del localStorage y mostrarlos
document.addEventListener('DOMContentLoaded', () => {
  const productoData = JSON.parse(localStorage.getItem('productoSeleccionado')); // Obtener datos del producto del localStorage

  if (productoData) { // Si hay datos del producto, mostrarlos en la página
    document.querySelector('.img-producto').src = productoData.imagen;
    document.querySelector('.img-producto').alt = productoData.nombre;
    document.querySelector('.info-producto h2').textContent = productoData.nombre;
    document.querySelector('.info-producto p:nth-of-type(1)').textContent = productoData.descripcion;
    document.querySelector('.info-producto p:nth-of-type(2)').textContent = `Precio: ${productoData.precio}`;
  }
    console.log("Usuario activo:", usuarioActivo.nickname)
    document.querySelector('.info-producto button').addEventListener('click', () => {
  if(usuarioActivo.nickname==undefined){
    console.log("No hay usuario activo")
      alert("Debe iniciar sesión para añadir productos al carrito")
  }else{
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push(productoData) // Agrega producto al array
      localStorage.setItem('carrito', JSON.stringify(carrito)) // Guarda el array actualizado en localStorage

    alert("Producto añadido al carrito");
    }
    
  });
  
});
