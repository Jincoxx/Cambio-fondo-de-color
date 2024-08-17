document.addEventListener("DOMContentLoaded", function () {
  const selectColor = document.getElementById("selectColor");
  const body = document.body;

  // Array con colores
  //const colores = ["Azul", "Rojo", "Naranja", "Violeta", "Marrón", "Verde"];
  const colores = [
    { nombre: "Azul", valor: "blue" },
    { nombre: "Rojo", valor: "red" },
    { nombre: "Naranja", valor: "orange" },
    { nombre: "Violeta", valor: "violet" },
    { nombre: "Marrón", valor: "brown" },
    { nombre: "Verde", valor: "green" },
  ];

  // Generar opciones en el select usando forEach
  colores.forEach((color) => {
    const option = document.createElement("option");
    option.value = color.valor; // Valor en inglés para el background
    option.textContent = color.nombre; // Texto visible en la opción
    selectColor.appendChild(option);
  });

  // Función para cambiar el color de fondo
  function cambiarColor() {
    const color = selectColor.value;
    body.style.backgroundColor = color;
  }

  // Escuchar el evento de cambio en el select
  selectColor.addEventListener("change", cambiarColor);

  // Establecer el color inicial según la primera opción
  cambiarColor();
});
