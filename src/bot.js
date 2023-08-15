document.addEventListener("DOMContentLoaded", function() {
  var saludarButton = document.getElementById("saludarButton");
  saludarButton.addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var genero = document.getElementById("genero").value;
    var edad = parseInt(document.getElementById("edad").value);
    var saludoElement = document.getElementById("saludo");

    var saludo = "¡";

    var horaActual = new Date().getHours();
    if (horaActual >= 5 && horaActual < 12) {
      saludo += "Buenos días, ";
    } else if (horaActual >= 12 && horaActual < 18) {
      saludo += "Buenas tardes, ";
    } else {
      saludo += "Buenas noches, ";
    }

    if (edad > 30) {
      if (genero === "masculino") {
        saludo += "Señor ";
      } else if (genero === "femenino") {
        saludo += "Señora ";
      }
    }

    saludo += nombre + "!";
    saludoElement.textContent = saludo;
  });
});
