function groceryTracker() {
    // Obtener los valores desde el HTML
    let item1 = parseFloat(document.getElementById('grocery1').value) || 0;
    let item2 = parseFloat(document.getElementById('grocery2').value) || 0;
    let item3 = parseFloat(document.getElementById('grocery3').value) || 0;

    // Calcular el total
    let total = item1 + item2 + item3;

    // Mostrar el resultado
    document.getElementById('groceryResult').innerText = `El gasto total es: $${total.toFixed(2)}`;
}
