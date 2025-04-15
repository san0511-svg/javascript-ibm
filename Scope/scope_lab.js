// ----------------------------------------
// Ámbito global
// ----------------------------------------

var globalVar = "Soy una variable global";
let globalLet = "También soy global, pero con ámbito de let";
const globalConst = "Soy una constante global";

console.log("Ámbito global:");
console.log(globalVar);     // ✅
console.log(globalLet);     // ✅
console.log(globalConst);   // ✅


// ----------------------------------------
// Ámbito de bloque
// ----------------------------------------

{
    var blockVar = "Soy un var con ámbito de bloque";
    let blockLet = "Soy un let con ámbito de bloque";
    const blockConst = "Soy un const con ámbito de bloque";
}

console.log("Ámbito de bloque:");
console.log(blockVar);     // ✅
console.log(blockLet);     // ❌ ReferenceError
console.log(blockConst);   // ❌ ReferenceError


// ----------------------------------------
// Ámbito de función
// ----------------------------------------

function mostrar() {
    var functionVar = "Soy var en función";
    let functionLet = "Soy let en función";
    const functionConst = "Soy const en función";

    console.log("Dentro de la función:");
    console.log(functionVar);     // ✅
    console.log(functionLet);     // ✅
    console.log(functionConst);   // ✅
}

mostrar();

console.log("Fuera de la función:");
console.log(functionVar);     // ❌ ReferenceError
console.log(functionLet);     // ❌ ReferenceError
console.log(functionConst);   // ❌ ReferenceError
