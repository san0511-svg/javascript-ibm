// Texto que el usuario debe copiar
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// Función para iniciar la prueba
function startTest() {
    // Mostrar el texto para escribir
    document.getElementById("inputText").value = testText;

    // Limpiar resultados anteriores
    document.getElementById("output").innerHTML = "";

    // Registrar la hora de inicio
    startTime = new Date().getTime();

    // Cambiar el botón de Finalizar
    let button = document.getElementById("btn");
    button.innerHTML = "Finalizar Prueba";
    button.onclick = endTest;
}

// Función para finalizar la prueba
function endTest() {
    // Registrar la hora final
    endTime = new Date().getTime();

    // Desactivar la escritura
    document.getElementById("userInput").readOnly = true;

    // Calcular el tiempo en segundos
    let timeElapsed = (endTime - startTime) / 1000;

    // Obtener el texto escrito por el usuario
    let userTypedText = document.getElementById("userInput").value;

    // Contar cuántas palabras escribió el usuario
    let typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    // Calcular palabras por minuto (WPM)
    let wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Mostrar los resultados
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Resultados de la Prueba de Escritura:</h2>
        <p>Palabras Escribidas: ${typedWords}</p>
        <p>Longitud del Texto Escrito: ${userTypedText.length} caracteres</p>
        <p>Tiempo Transcurrido: ${timeElapsed.toFixed(2)} segundos</p>
        <p>Palabras Por Minuto (WPM): ${wpm}</p>
    `;

    // Resetear el botón para una nueva prueba
    let button = document.getElementById("btn");
    button.innerHTML = "Iniciar Prueba";
    button.onclick = startTest;
}
