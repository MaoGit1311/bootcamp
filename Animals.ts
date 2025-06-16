abstract class Animal {

    protected name: string;
    private age: number;

    constructor (age: number) {
        this.age = age;
    }

    abstract makeSound();

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    constructor (name: string, age: number) {
        super(age);
        this.name = name;
    }

    makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    constructor (name: string, age: number) {
        super(age);
        this.name = name;
    }

    makeSound(): string {
        return "Meow!";
    }
}

class AnimalTest {

    public perro: Dog;
    public gato: Cat;

    constructor (name: string, age: number) {
        this.perro = new Dog (name, age);
        this.gato = new Cat (name, age);
    }

    getName() {
        console.log (`The dog's name is: ${this.perro.getName()}`)
        console.log (`The cat's name is: ${this.gato.getName()}`)
    }

    makeSound() {
        console.log (`The dog's sound is: ${this.perro.makeSound()}`)
        console.log (`The cat's sound is: ${this.gato.makeSound()}`)
    }

}

const myTest = new AnimalTest ('bugricio', 25);
myTest.getName();

/*
EJERCICIO 4
Attempt to access the age property directly (this should fail, use try and catch to print an error message) and instead, use the getAge() method to print the age of each animal.
*/
try {
    
} catch (error) {
    console.log (`The dog's sound is: ${myTest.perro.getAge()}`)
    console.log (`The cat's sound is: ${myTest.gato.getAge()}`)
}


