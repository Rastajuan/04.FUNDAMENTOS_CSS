window.onload = function () {

  //Hijos directos
  var hijosDirectos = document.querySelectorAll(".hijosDirectos li");
  var button = document.querySelector("#btnHijosDirectos");

  button.addEventListener("click", function () {
    for (var i = 0; i < hijosDirectos.length; i++) {
      if (hijosDirectos[i].style.backgroundColor === "red") {
        hijosDirectos[i].style.backgroundColor = "black";
        hijosDirectos[i].style.color = "white";
      } else {
        hijosDirectos[i].style.backgroundColor = "red";
      }
    }
  });

  //Hijos descendientes
  var hijosIndirectos = document.querySelectorAll(".hijosDescendientes b");
  var button = document.querySelector("#btnHijosDescendientes");

  button.addEventListener("click", function () {
    for (var i = 0; i < hijosIndirectos.length; i++) {
      if (hijosIndirectos[i].style.color === "blue") {
        hijosIndirectos[i].style.color = "red";
      } else {
        hijosIndirectos[i].style.color = "blue";
      }
    }
  });


};
