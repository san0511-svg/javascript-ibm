// Inicializar el contador
let count = 0;

// Función para mostrar el contador en pantalla
function displayCount() {
  document.getElementById('countDisplay').innerHTML = count;
}

// Función para verificar si se alcanza un hito
function checkCountValue() {
  if (count === 10) {
    alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
  } else if (count === 20) {
    alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
  }
}

// Función para incrementar el contador
function increaseCount() {
  count++;               // Incrementar en 1
  displayCount();        // Actualizar visualmente
  checkCountValue();     // Verificar hitos
}

// Función para la tarea práctica: reiniciar el contador
function resetCount() {
  count = 0;
  displayCount();
  alert("El conteo de seguidores ha sido restablecido.");
}
