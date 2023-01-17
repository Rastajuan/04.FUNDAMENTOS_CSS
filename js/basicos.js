window.onload = function () {
  // Cambia estilo de párrafos por etiqueta HTML
  document.getElementById("porNombre").addEventListener("click", function () {
    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (p) {
      if (p.style.color === "red") {
        p.style.color = "black";
      } else {
        p.style.color = "red";
      }
    });
  });

  // Cambia estilo de párrafos por identidad. Se considera una mala práctica
  let color = "red";
  document
    .getElementById("porIdentidad")
    .addEventListener("click", function () {
      if (color === "red") {
        color = "black";
        document.getElementById("identidad").style.color = color;
      } else {
        color = "red";
        document.getElementById("identidad").style.color = color;
      }
    });

  // Cambia estilo de párrafos por clase
  document.getElementById("porClase").addEventListener("click", function () {
    let elementos = document.getElementsByClassName("clase1");
    for (let i = 0; i < elementos.length; i++) {
      if (color === "red") {
        color = "black";
        elementos[i].style.color = color;
      } else {
        color = "red";
        elementos[i].style.color = color;
      }
    }
  });

  // Cambia estilo de párrafos por atributo
  let width = "150px";
  let height = "150px";

  document.getElementById("porAtributo").addEventListener("click", function () {
    let elementos = document.querySelectorAll("img[src='assets/dibu.jpg']");
    for (let i = 0; i < elementos.length; i++) {
      if (width === "150px") {
        width = "200px";
        height = "200px";
        elementos[i].style.width = width;
        elementos[i].style.height = height;
      } else {
        width = "150px";
        height = "150px";
        elementos[i].style.width = width;
        elementos[i].style.height = height;
      }
    }
  });
};
