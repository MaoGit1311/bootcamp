import * as promptSync from 'prompt-sync';
const prompt = promptSync();

//Obtiene un número aleatorio entre 0 y 99
let aleatoryNumber: number = Math.round(Math.random() * 100);

//Declaración de número de oportunidades del usuario
const attempts: number = 3;

//Declaración de contador de oportunidades actual del ususario
let attemptsCounter: number = 1;

//Declaración del valor proporcionado por el usuario

console.log(`Número Aleatorio: ${aleatoryNumber}`);

let userNumber : number;

while (attemptsCounter <= attempts){
    userNumber = parseInt(prompt("Provide your desired number:"));
    console.log(`Número del usuario: ${userNumber}`);
    if (aleatoryNumber === userNumber){
        console.log(`‘Congratulations! You found the secret!’.`);
        break;
    }
    else if (attemptsCounter < attempts)
        if (userNumber < aleatoryNumber){
            console.log(`The aleatory number is higher than yours`);
        }
        else {
            console.log(`The aleatory number is lower than yours`);
        }
    attemptsCounter++;
}

if (attemptsCounter > attempts)
    console.log(`That’s sad, the secret number was ${aleatoryNumber}, ${aleatoryNumber} should be the secret number`);
