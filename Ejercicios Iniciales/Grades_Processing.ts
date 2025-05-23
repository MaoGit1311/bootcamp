//Se declaran los ejemplos pero se deja sin comentar únicamente el que se va a utilizar:
//const grades: number [] = [100, 45, 89, 80]; //(Average should be 78.5)
//const grades: number [] = [10, 12, 8, -1, 1000, 10]; //(Average should be 100)
const grades: number [] = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] //(Average should be 60)

let total = 0;
let count = 0;
let index = 0;
let exceptional = false;

//Procesar calificaciones
while (index < grades.length) {
    let grade = grades [index];

    switch (grade) {
        case -1:
            console.log (`Note in position ${index} : This Student couldn’t present this test due to a valid reason`);
            index++;
            continue;
        case 1000:
            console.log ('‘Exceptional student! Average is 100!');
            exceptional = true;
            break;
        default:
            total += grade;
            count++;
            console.log (`Grade ${grade}`);
            index++;
            continue
    }

    break;
}

if (!exceptional) {
    const average = count > 0 ? total / count : 0;
    console.log (`Average score: ${average}`);
}