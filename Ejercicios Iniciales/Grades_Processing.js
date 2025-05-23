//Se declaran los ejemplos pero se deja sin comentar únicamente el que se va a utilizar:
//const grades: number [] = [100, 45, 89, 80]; //(Average should be 78.5)
//const grades: number [] = [10, 12, 8, -1, 1000, 10]; //(Average should be 100)
var grades = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]; //(Average should be 60)
var total = 0;
var count = 0;
var index = 0;
var exceptional = false;
//Procesar calificaciones
while (index < grades.length) {
    var grade = grades[index];
    switch (grade) {
        case -1:
            console.log("Note in position ".concat(index, " : This Student couldn\u2019t present this test due to a valid reason"));
            index++;
            continue;
        case 1000:
            console.log('‘Exceptional student! Average is 100!');
            exceptional = true;
            break;
        default:
            total += grade;
            count++;
            console.log("Grade ".concat(grade));
            index++;
            continue;
    }
    break;
}
if (!exceptional) {
    var average = count > 0 ? total / count : 0;
    console.log("Average score: ".concat(average));
}
