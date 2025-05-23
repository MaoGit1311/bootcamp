var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Definimos el objeto original
var product = {
    id: 1,
    name: "Laptop",
    price: 1500,
    tags: ["electronics", "portable", "new"]
};
//Clonamos el objeto
var newProduct = __assign({}, product);
newProduct.archivedTags = __spreadArray([], newProduct.tags, true);
//Cambiamos las propiedades del nuevo objeto
newProduct.name = "Smartphone";
newProduct.price = 999;
newProduct.tags = ["electronics", "mobile", "discounted"];
//Se imprimen ambos objetos
console.log("Original product: ".concat(product));
console.log("Cloned and Modified Product: ".concat(newProduct));
//Mostrar los elementos de los objetos
var i = 0;
while (i < newProduct.tags.length) {
    console.log("Tag ".concat(i + 1, ": ").concat(newProduct.tags[i]));
    i++;
}
