const prompt = require('prompt-sync')();

// Función para solicitar un número válido
function solicitarNumero(mensaje) {
    while (true) {
        let input = prompt(mensaje);
        let numero = parseFloat(input);
        if (!isNaN(numero)) {
            return numero;
        } else {
            console.log("Entrada no válida. Por favor, ingresa un número.");
        }
    }
}

// Solicitar los números al usuario
let num1 = solicitarNumero("Ingresa el primer número: ");
let num2 = solicitarNumero("Ingresa el segundo número: ");
let num3 = solicitarNumero("Ingresa el tercer número: ");

// Comprobación si todos los números son iguales
if (num1 === num2 && num1 === num3) {
    console.log("Los tres números son iguales: " + num1);
} else {
    // Crear un array con los tres números
    let numeros = [num1, num2, num3];

    // Ordenar el array de mayor a menor
    numeros.sort(function(a, b) {
        return b - a; // Ordena de mayor a menor
    });

    // Imprimir los números ordenados de mayor a menor y separados por comas
    console.log(numeros.join(','));
}