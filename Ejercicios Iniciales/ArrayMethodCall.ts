function capitalizeArray (list: string[]): string[] {
    return list.map(item => item.charAt(0).toUpperCase() + item.slice(1)); // aca se puede usar una funcion flecha (delta sin brackets), se deberia usar la concatenacion con `
}

console.log(capitalizeArray (["mauricio", "ulises", "pancho", "pepe",""]));

/*
Create an array method call that takes an array of numbers and only returns the ones that are between 50 and 75.
Hint 1: Use a filter method.
Hint 2:You can use a condition similar to the ones we learned in the if-else if-else session.

*/

function valueFiltering (numbers: number[], min: number, max: number){ // se podrian establecer los limites
    return numbers.filter(number => number >= min  && number <= max);
}

console.log(valueFiltering([0, 1,30,50,64,75,76, 100], 60, 75)); // siempre va un espacio despues de las comas