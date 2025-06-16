var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow!";
    };
    return Cat;
}(Animal));
var AnimalTest = /** @class */ (function () {
    function AnimalTest(name, age) {
        this.perro = new Dog(name, age);
        this.gato = new Cat(name, age);
    }
    AnimalTest.prototype.getName = function () {
        console.log("The dog's name is: ".concat(this.perro.getName()));
        console.log("The cat's name is: ".concat(this.gato.getName()));
    };
    AnimalTest.prototype.makeSound = function () {
        console.log("The dog's sound is: ".concat(this.perro.makeSound()));
        console.log("The cat's sound is: ".concat(this.gato.makeSound()));
    };
    return AnimalTest;
}());
var myTest = new AnimalTest('bugricio', 25);
myTest.getName();
/*
EJERCICIO 4
Attempt to access the age property directly (this should fail, use try and catch to print an error message) and instead, use the getAge() method to print the age of each animal.
*/
/*try {
    
} catch (error) {
    myTest.perro.getAge();
    myTest.gato.getAge();
}
*/
console.log("The dog's sound is: ".concat(myTest.perro.getAge()));
console.log("The cat's sound is: ".concat(myTest.gato.getAge()));
