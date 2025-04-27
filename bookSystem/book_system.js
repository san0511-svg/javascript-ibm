// Array para almacenar los libros
let books = [];

// Función para agregar un nuevo libro
function addBook() {
    // Recolectar los datos de los campos del formulario
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Validar que todos los campos estén llenos correctamente
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Crear un objeto libro
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Agregar el libro al array
        books.push(book);

        // Mostrar todos los libros actualizados
        showBooks();

        // Limpiar los campos del formulario
        clearInputs();
    } else {
        // Mostrar alerta si falta algún dato
        alert('Por favor, complete todos los campos correctamente.');
    }
}

// Función para mostrar los libros en la página
function showBooks() {
    // Usar map() para recorrer todos los libros y generar HTML
    const booksDiv = books.map((book, index) => `
        <div style="border: 1px solid #ccc; margin-bottom: 10px; padding: 10px;">
            <h3>Número de Libro: ${index + 1}</h3>
            <p><strong>Nombre:</strong> ${book.name}</p>
            <p><strong>Autor:</strong> ${book.authorName}</p>
            <p><strong>Descripción:</strong> ${book.bookDescription}</p>
            <p><strong>Páginas:</strong> ${book.pagesNumber}</p>
            <button onclick="editBook(${index})">Editar</button>
            <button onclick="deleteBook(${index})">Eliminar</button>
        </div>
    `);

    // Mostrar el contenido generado dentro del div con id "books"
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Función para llenar los campos con los datos del libro seleccionado (para editar)
function editBook(index) {
    const book = books[index];

    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Eliminar el libro antiguo del array para que se reemplace al guardar
    books.splice(index, 1);

    // Volver a mostrar los libros
    showBooks();
}

// Función para eliminar un libro de la lista
function deleteBook(index) {
    // Quitar el libro del array en la posición correspondiente
    books.splice(index, 1);

    // Volver a mostrar los libros actualizados
    showBooks();
}

// Función para limpiar los campos del formulario
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
