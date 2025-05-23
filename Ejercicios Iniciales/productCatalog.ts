//Definimos el objeto original
const product = {
    id: 1,
    name: "Laptop",
    price: 1500,
    tags: ["electronics", "portable", "new"]
};

//Clonamos el objeto
const newProduct = {...product} as {
    id: number;
    name: string; 
    price: number;
    tags: string[];
    archivedTags?: string[];
};
newProduct.archivedTags = [...newProduct.tags];

//Cambiamos las propiedades del nuevo objeto
newProduct.name = "Smartphone";
newProduct.price = 999;
newProduct.tags = ["electronics", "mobile", "discounted"];

//Se imprimen ambos objetos
console.log(`Original product: ${product}`);
console.log(`Cloned and Modified Product: ${newProduct}`);

//Mostrar los elementos de los objetos
let i = 0;
while (i < newProduct.tags.length){
    console.log (`Tag ${i + 1}: ${newProduct.tags[i]}`);
    i++;
}