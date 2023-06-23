
function saludar() {
    var mensaje = "Hola soy: Gerardo";
    document.getElementById("mensaje").textContent = mensaje;
  }
  
  function mostrarTexto() {
    var texto = document.getElementById("texto").value;
    document.getElementById("mensaje").innerText = texto;
}