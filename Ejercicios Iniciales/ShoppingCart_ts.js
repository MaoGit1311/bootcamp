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
var cost1 = 29.99;
var cost2 = 49.99;
var cost3 = 19.99;
var taxesRate = 0.07;
//Calculated values
//The cost of the shopping cart with no taxes.
var shoppingCartNoTaxes = cost1 + cost2 + cost3;
console.log('\n\nShopping Cart Cost without Taxes: $' + shoppingCartNoTaxes);
console.log("Shopping Cart Cost without Taxes: $".concat(shoppingCartNoTaxes));
//The cost of the taxes alone
var shoppingCartTaxesOnly = shoppingCartNoTaxes * taxesRate;
console.log('\n\nTotal Taxes: $' + shoppingCartTaxesOnly);
console.log("Total Taxes: $".concat(shoppingCartTaxesOnly));
//The total cost of the shopping cart
var shoppingCartTotal = shoppingCartNoTaxes + shoppingCartTaxesOnly;
console.log('\n\nShopping Cart Cost including Taxes: $' + shoppingCartTotal);
console.log("Shopping Cart Cost including Taxes: $".concat(shoppingCartTotal));
//Para correr el script primero es necesario en consola correr: tsc ShoppingCart_ts y posteriormente node ShoppingCart_ts
