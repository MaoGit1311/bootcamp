/*
Create a TypeScript program that calculates some costs of a shopping cart with the following scenario:
The shopping cart has 3 items that cost $29.99, $49.99, and $19.99.
There is a tax rate of 7%.
The program should print
The cost of the shopping cart with no taxes.
The cost of the taxes alone.
The total cost of the shopping cart.
Send the source code of the program and an evidence of the execution to your instructor!
Don’t hesitate to ask the instructors of the bootcamp if you need any help!
*/

//No calculated variables
let cost1: number = 29.99;
let cost2: number = 49.99;
let cost3: number = 19.99;
let taxesRate: number =0.07;

//Calculated values
//The cost of the shopping cart with no taxes.
let shoppingCartNoTaxes: number = cost1 + cost2 + cost3;
console.log('\n\nShopping Cart Cost without Taxes: $'+ shoppingCartNoTaxes);
console.log(`Shopping Cart Cost without Taxes: $${shoppingCartNoTaxes}`);
//The cost of the taxes alone
let shoppingCartTaxesOnly: number =shoppingCartNoTaxes * taxesRate;
console.log('\n\nTotal Taxes: $'+ shoppingCartTaxesOnly);
console.log(`Total Taxes: $${shoppingCartTaxesOnly}`);
//The total cost of the shopping cart
let shoppingCartTotal: number =shoppingCartNoTaxes + shoppingCartTaxesOnly;
console.log('\n\nShopping Cart Cost including Taxes: $'+ shoppingCartTotal);
console.log(`Shopping Cart Cost including Taxes: $${shoppingCartTotal}`);

//Para correr el script primero es necesario en consola correr: tsc ShoppingCart_ts y posteriormente node ShoppingCart_ts