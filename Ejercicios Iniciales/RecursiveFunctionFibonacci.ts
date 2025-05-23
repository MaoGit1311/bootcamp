import * as promptSync from 'prompt-sync';
const prompt = promptSync();

const userNumber : number = parseInt(prompt("Provide your desired number to convert:"));

const result = fibonacciCalc(userNumber);
console.log(`The value for the Fibonacci number is: ${result}`);

function fibonacciCalc (toCalc: number): number {
    if (toCalc <= 1) {
        return toCalc;
    }
    else if (toCalc > 10) {
        console.log (`The number to convert must be igual or lower than 10`);
        return 0;
    }
    else {
        return fibonacciCalc(toCalc - 1) + fibonacciCalc(toCalc - 2);
    }

}

