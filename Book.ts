//Se crea la clase/objeto
class Book {
    //Se declaran los atributos del objeto
    title: string;
    author: string;
    publishedYear: number;

    //Se inicializan los atributos del objeto
    constructor (title: string, author: string, publishedYear: number){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    //Se crea el método printBookDetails para imprimir los atributos del objeto o libro en cuestión
    printBookDetails(){
        console.log(`${this.title} by ${this.author}, published in ${this.publishedYear}`)
    }

    //Se crea el método isClassic para validar si la diferencia entre el año actual y el año de impresión es mayor a 50 para derterminar el libro como Clasic
    isClassic(){
        let classicBook : boolean; 
        classicBook = false;

        //Se crea variable de tipo fecha
        let date = new Date();
        let currentYear : number;
        //Se asigna el valor del año de la fecha actual a la variable currentYear
        currentYear = date.getFullYear();      

        //Se valida si la diferencia entre el año actual (currentYear) y año de publicación (publishedYear) es mayor a 50 para marcarlo como cásico
        if (currentYear - this.publishedYear > 50){
            classicBook = true;
            return classicBook;
        }  
    }

}

//Se declaran instancias del objeto o de la clase
const book1 = new Book ("The Lord of the Rings", "John Ronald Reuel Tolkien", 1954);
const book2 = new Book ("It", "Stephen King", 1986);
const book3 = new Book ("The Shining", "Stephen King", 1977);
const book4 = new Book ("Cañitas", "Carlos Trejo", 2005);
const book5 = new Book ("De qué hablo cuando hablo de correr", "Haruki Murakami", 2013);
const book6 = new Book ("Nacidos para correr", "Christopher McDougall", 2013);
const book7 = new Book ("Para Leer Al Pato Donald", "A. Dorfman - A. Mattelart", 1973);

/*
book1.printBookDetails();
book2.printBookDetails();
book3.printBookDetails();
book4.printBookDetails();
book5.printBookDetails();
book6.printBookDetails();
book7.printBookDetails();

if (book1.isClassic())
    console.log(`The ${book1.title} is considered as a classic`);

if (book2.isClassic())
    console.log(`The ${book2.title} is considered as a classic`);

if (book3.isClassic())
    console.log(`The ${book3.title} is considered as a classic`);

if (book4.isClassic())
    console.log(`The ${book4.title} is considered as a classic`);

if (book5.isClassic())
    console.log(`The ${book5.title} is considered as a classic`);

if (book6.isClassic())
    console.log(`The ${book6.title} is considered as a classic`);

if (book7.isClassic())
    console.log(`The ${book7.title} is considered as a classic`);
*/

//Se declara el arreglo de objetos libro
const booksArray = [book1, book2, book3, book4, book5, book6, book7];

//Se declara book como una constante de tipo booksArray, para utilizarlo dentro del for ya que no necesitamos el índica del arreglo para ninguna acción
for (const book of booksArray) {
    book.printBookDetails();
    if (book.isClassic()) {
        console.log(`The ${book.title} is considered as a classic`);
    }
}