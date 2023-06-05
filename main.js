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
// function suma (a, b) {
//     return a + b;
// }

// // Funciones flecha con retorno implicito
// const resta = (a, b) => a-b;

// console.log(suma(5, 5));
// console.log(resta(10, 3));

// function suma (a, b) {
//     return a + b;
// }
// console.log(suma(5, 15));

// function suma (a, b) {
//     return a - b;
// }
// console.log(suma(20,10));

// const usuario1 = {
//     nombre : "Juan carlos",
//     edad :  33,
//     nacionalidad : "peruana"
// }

// console.log(usuario1.nacionalidad);

// const usuario3 = {
//     name : "jc",
//     year : 33,
//     nation : "peruvian",
//         hobbies : {
//             hobbie1 : "futbol",
//             hobbie2 : "leer",
//             hobbie3 : "escribir"
//         }
// }

// console.log(usuario3.hobbies.hobbie2);

// Contructor

// function Producto(titulo, color, precio) {
//     this.titulo = titulo;
//     this.color = color;
//     this.precio = precio;
// }

// const product1 = new Producto("silla", "rojo", 50);
// const product2 = new Producto("cama", "blanca" , 1500);

// console.log(product2);

/******************************* */

// Clases

class Producto {
    constructor(titulo, precio, color) {
        this.titulo = titulo;
        this.precio = precio;
        this.color = color;
    }
}

const producto1 = new Producto("sillon", 40, "azul");
console.log(producto1);



