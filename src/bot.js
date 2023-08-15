document.addEventListener("DOMContentLoaded", function() {
  var saludarButton = document.getElementById("saludarButton");
  saludarButton.addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var genero = document.getElementById("genero").value;
    var saludoElement = document.getElementById("saludo");
    
    if (genero === "masculino") {
      saludoElement.textContent = "¡Hola, Señor " + nombre + "!";
    } else if (genero === "femenino") {
      saludoElement.textContent = "¡Hola, Señora " + nombre + "!";
    } else {
      saludoElement.textContent = "¡Hola genero fluido, " + nombre + "!";
    }
  });
});
