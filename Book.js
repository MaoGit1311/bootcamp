//Se crea la clase/objeto
var Book = /** @class */ (function () {
    //Se inicializan los atributos del objeto
    function Book(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    //Se crea el método printBookDetails para imprimir los atributos del objeto o libro en cuestión
    Book.prototype.printBookDetails = function () {
        console.log("".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.publishedYear));
    };
    //Se crea el método isClassic para validar si la diferencia entre el año actual y el año de impresión es mayor a 50 para derterminar el libro como Clasic
    Book.prototype.isClassic = function () {
        var classicBook;
        classicBook = false;
        //Se crea variable de tipo fecha
        var date = new Date();
        var currentYear;
        //Se asigna el valor del año de la fecha actual a la variable currentYear
        currentYear = date.getFullYear();
        //Se valida si la diferencia entre el año actual (currentYear) y año de publicación (publishedYear) es mayor a 50 para marcarlo como cásico
        if (currentYear - this.publishedYear > 50) {
            classicBook = true;
            return classicBook;
        }
    };
    return Book;
}());
//Se declaran instancias del objeto o de la clase
var book1 = new Book("The Lord of the Rings", "John Ronald Reuel Tolkien", 1954);
var book2 = new Book("It", "Stephen King", 1986);
var book3 = new Book("The Shining", "Stephen King", 1977);
var book4 = new Book("Cañitas", "Carlos Trejo", 2005);
var book5 = new Book("De qué hablo cuando hablo de correr", "Haruki Murakami", 2013);
var book6 = new Book("Nacidos para correr", "Christopher McDougall", 2013);
var book7 = new Book("Para Leer Al Pato Donald", "A. Dorfman - A. Mattelart", 1973);
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
var booksArray = [book1, book2, book3, book4, book5, book6, book7];
//Se declara book como una constante de tipo booksArray, para utilizarlo dentro del for ya que no necesitamos el índica del arreglo para ninguna acción
for (var _i = 0, booksArray_1 = booksArray; _i < booksArray_1.length; _i++) {
    var book = booksArray_1[_i];
    book.printBookDetails();
    if (book.isClassic()) {
        console.log("The ".concat(book.title, " is considered as a classic"));
    }
}
