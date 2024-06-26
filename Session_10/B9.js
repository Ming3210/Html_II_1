"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor(books) {
        this.books = [];
        this.books = books;
    }
    printBooks() {
        for (let book of this.books) {
            console.log(book);
        }
        console.log("-------------------------------");
    }
    addBook(title, author) {
        this.books.push(new Book(title, author));
    }
}
let book1 = new Book("Sherlock Home", "Conan Doyle");
let book2 = new Book("asdadas", "aasdassada");
let lib = new Library([book1, book2]);
lib.printBooks();
lib.addBook("Sherlock Home2", "asdadas2");
lib.printBooks();
