//Inventario inicial
let inventory =[
    {id: 1, name: "Mouse", price: 25},
    {id: 2, name: "Keyboard", price: 50},
    {id: 3, name: "Monitor", price: 200}
];

//Agregar un nuevo producto al inventario (usando push)
const newItem = {id: 4, name: "Webcam", price: 80};
inventory.push(newItem);

//Eliminar el item por id
const idToRemove = 2;
for (let i = 0; i < inventory.length; i++){
    if (inventory[i].id === idToRemove) {
        inventory.splice(i, 1);
        console.log(`Producto con ID ${idToRemove} eliminado`);
        break;
    }
}

//Buscar un item por ID y modificar su precio
const idToUpdate = 3;
let found = false;
let i = 0;
while (i < inventory.length){
    if (inventory[i].id === idToUpdate) {
        inventory[i].price = 180;
        console.log (`Precio del producto con ID ${idToUpdate} actualizado.`);
        found = true;
        break;
    }
    i++;
}
if (!found) {
    console.log (`Producto con ID ${idToUpdate} no encontrado`);
}
//Ordenar el inventario por precio (menor a mayor)
inventory.sort ((a, b) => a.price - b.price);
console.log ("\n Inventario ordenado por precio:");

//Iterar con forEach y mostrar propiedades
inventory.forEach((item, index) => {
    console.log (`Producto ${index + 1}:`);

    let keys = Object.keys (item);
    let j = 0;

    do {
        let key = keys[j];
        console.log (`La clave ${key} tiene el valor ${(item as any)[key]}`);
        j++;
    } while (j < keys.length);
});