"use strict";
function printBook1() {
    console.log(book);
}
function printBook2() {
    console.log("Book");
    console.log("tilte : ", book.title);
    console.log("author : ", book.author);
    console.log("price : ", book.price + "đ");
    console.log("----------------------------------");
}
function updateBook(title, author, price) {
    book.title = title;
    book.author = author;
    book.price = price;
}
let book = {
    title: "Sherlock Home",
    author: "Conan Doyle",
    price: 100
};
let library = [];
library.push(book);
printBook1();
printBook2();
updateBook("Tiếng Việt Lớp 1", "Bộ Giáo Dục", 10000);
printBook2();
