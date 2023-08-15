document.addEventListener("DOMContentLoaded", function() {
  var saludarButton = document.getElementById("saludarButton");
  saludarButton.addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var genero = document.getElementById("genero").value;
    var edad = parseInt(document.getElementById("edad").value);
    var idioma = document.getElementById("idioma").value;
    var saludoElement = document.getElementById("saludo");

    var saludo = "";

    if (idioma === "espanol") {
      if (edad > 30) {
        if (genero === "masculino") {
          saludo = "¡Hola, Señor " + nombre + "!";
        } else if (genero === "femenino") {
          saludo = "¡Hola, Señora " + nombre + "!";
        }
      } else {
        saludo = "¡Hola, " + nombre + "!";
      }
    } else if (idioma === "ingles") {
      if (edad > 30) {
        if (genero === "masculino") {
          saludo = "Hello, Mr. " + nombre + "!";
        } else if (genero === "femenino") {
          saludo = "Hello, Mrs. " + nombre + "!";
        }
      } else {
        saludo = "Hello, " + nombre + "!";
      }
    }

    saludoElement.textContent = saludo;
  });
});
