//Inventario inicial
var inventory = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 50 },
    { id: 3, name: "Monitor", price: 200 }
];
//Agregar un nuevo producto al inventario (usando push)
var newItem = { id: 4, name: "Webcam", price: 80 };
inventory.push(newItem);
//Eliminar el item por id
var idToRemove = 2;
for (var i_1 = 0; i_1 < inventory.length; i_1++) {
    if (inventory[i_1].id === idToRemove) {
        inventory.splice(i_1, 1);
        console.log("Producto con ID ".concat(idToRemove, " eliminado"));
        break;
    }
}
//Buscar un item por ID y modificar su precio
var idToUpdate = 3;
var found = false;
var i = 0;
while (i < inventory.length) {
    if (inventory[i].id === idToUpdate) {
        inventory[i].price = 180;
        console.log("Precio del producto con ID ".concat(idToUpdate, " actualizado."));
        found = true;
        break;
    }
    i++;
}
if (!found) {
    console.log("Producto con ID ".concat(idToUpdate, " no encontrado"));
}
//Ordenar el inventario por precio (menor a mayor)
inventory.sort(function (a, b) { return a.price - b.price; });
console.log("\n Inventario ordenado por precio:");
//Iterar con forEach y mostrar propiedades
inventory.forEach(function (item, index) {
    console.log("Producto ".concat(index + 1, ":"));
    var keys = Object.keys(item);
    var j = 0;
    do {
        var key = keys[j];
        console.log("La clave ".concat(key, " tiene el valor ").concat(item[key]));
        j++;
    } while (j < keys.length);
});
