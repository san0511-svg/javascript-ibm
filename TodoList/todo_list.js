// Acceso a los elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Lista donde se almacenan las tareas
let tasks = [];

// Función para agregar una tarea nueva
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ""; // Limpiar input
        displayTasks(); // Mostrar lista actualizada
    }
}

// Función para mostrar todas las tareas
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Alternar estado de completado (checkbox)
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Limpiar solo las tareas completadas
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Eventos
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Mostrar tareas iniciales (si las hubiera)
displayTasks();

// Accede al nuevo botón
const clearAllBtn = document.getElementById("clearAllBtn");

// Función para borrar todas las tareas
function clearAllTasks() {
    tasks = [];
    displayTasks();
}

// Añadir listener al botón
clearAllBtn.addEventListener("click", clearAllTasks);
