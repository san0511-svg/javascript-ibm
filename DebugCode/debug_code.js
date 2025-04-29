function performOperation() {
    // Obtener entradas
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value; // NUEVO: operación seleccionada

    // Validar números
    if (!isNaN(num1) && !isNaN(num2)) {
        // Llamar a la función de cálculo
        let result = calculate(num1, num2, operation);
        displayResult(result);
    } else {
        displayResult('Por favor, ingresa números válidos');
    }
}

function calculate(a, b, operation) {
    // Instrucción de depuración
    debugger;

    // Determinar operación
    switch (operation) {
        case 'multiply':
            return a * b;
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            if (b === 0) {
                return 'Error: División entre cero';
            }
            return a / b;
        default:
            return 'Operación no válida';
    }
}

function displayResult(result) {
    // Mostrar resultado o error
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El resultado es: ${result}`;
}
