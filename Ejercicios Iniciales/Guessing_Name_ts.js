"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
//const prompt2 = require("prompt-sync")();
//Obtiene un número aleatorio entre 0 y 99
var aleatoryNumber = Math.round(Math.random() * 100);
//Declaración de número de oportunidades del usuario
var attempts = 3;
//Declaración de contador de oportunidades actual del ususario
var attemptsCounter = 1;
//Declaración del valor proporcionado por el usuario
console.log("N\u00FAmero Aleatorio: ".concat(aleatoryNumber));
var userNumber;
while (attemptsCounter <= attempts) {
    userNumber = parseInt(prompt("Provide your desired number:"));
    console.log("N\u00FAmero del usuario: ".concat(userNumber));
    if (aleatoryNumber === userNumber) {
        console.log("\u2018Congratulations! You found the secret!\u2019.");
        break;
    }
    else if (attemptsCounter < attempts)
        if (userNumber < aleatoryNumber) {
            console.log("The aleatory number is higher than yours");
        }
        else {
            console.log("The aleatory number is lower than yours");
        }
    attemptsCounter++;
    console.log("Contador de intentos ".concat(attemptsCounter));
}
if (attemptsCounter > attempts)
    console.log("That\u2019s sad, the secret number was ".concat(aleatoryNumber, ", ").concat(aleatoryNumber, " should be the secret number"));
