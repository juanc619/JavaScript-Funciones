// Funciones declaradas
// function saludar(nombre) {
//     console.log ("Hola " + nombre);
// }
// saludar("Juan carlos");


// Funciones anonimas

// const saludar = function(nombre) {
//     console.log ("Hola " + nombre);
// }
// saludar("Juan carlos");


// Funciones flecha

// const saludar = (nombre) => {
//     console.log ("Hola " + nombre);
// }
// saludar("Jc");

// Un solo parametro y una sola sentencia : se puedes obviar los parentesis y las llaves

// const saludar = nombre => console.log("Hola " + nombre);

//Funciones declaradas con retorno
function suma (a, b) {
    return a + b;
}

// Funciones flecha con retorno implicito
const resta = (a, b) => a-b;

console.log(suma(5, 5));
console.log(resta(10, 3));