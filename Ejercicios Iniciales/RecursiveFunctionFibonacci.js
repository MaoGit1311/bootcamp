"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var userNumber = parseInt(prompt("Provide your desired number to convert:"));
var result = fibonacciCalc(userNumber);
console.log("The value for the Fibonacci number is: ".concat(result));
function fibonacciCalc(toCalc) {
    if (toCalc <= 1) {
        return toCalc;
    }
    else if (toCalc > 10) {
        console.log("The number to convert must be igual or lower than 10");
        return 0;
    }
    else {
        return fibonacciCalc(toCalc - 1) + fibonacciCalc(toCalc - 2);
    }
}
