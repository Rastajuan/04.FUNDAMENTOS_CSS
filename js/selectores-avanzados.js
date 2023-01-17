window.onload = function () {
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
};
