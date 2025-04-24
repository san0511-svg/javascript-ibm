// Paso 1: Inicializar arrays de menú
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $35', 'Pasta - $18.50', 'Burger - $14.99', 'Salmon - $28'];
const dessertMenu = ['Cake - $9.50', 'Ice Cream - $6.75', 'Pudding - $7.25', 'Fruit Salad - $8'];

// Paso 2: Mostrar Menú de Desayuno usando map()
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById('breakfastTotalItems').innerHTML = `<strong>Total de artículos: ${breakfastMenu.length}</strong>`;

// Paso 3: Mostrar Menú de Plato Principal usando forEach()
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
document.getElementById('maincourseTotalItems').innerHTML = `<strong>Total de artículos: ${mainCourseMenu.length}</strong>`;

// Paso 4: Mostrar Menú de Postres usando bucle for
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
document.getElementById('dessertTotalItems').innerHTML = `<strong>Total de artículos: ${dessertMenu.length}</strong>`;
