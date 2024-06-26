class Book1 {
    private title: string;
    private author: string;
    quantity: number;
  
    constructor(title: string, author: string, quantity: number) {
      this.title = title;
      this.author = author;
      this.quantity = 1;
    }
  
    get title1() {
      return this.title;
    }
  
    getQuantity() {
      return this.quantity;
    }
  }
  
  class Library1 {
    private books: Book1[] = [];
  
    constructor(books: Book1[]) {
      this.books = books;
    }
  
    printBooks() {
      for (let book of this.books) {
        console.log(book);
      }
      console.log("-------------------------------");
    }
  
    addBook(title: string, author: string) {
      let existingBook = this.books.find((book) => book.title1 === title);
      if (existingBook) {
        existingBook.quantity++;
      } else {
        this.books.push(new Book1(title, author, 1));
      }
    }
  }
  
  let book123 = new Book1("Sherlock Home", "Conan Doyle", 1);
  let book245 = new Book1("asdadas", "aasdassada", 1);
  let lib1 = new Library1([book123, book245]);
  
  lib1.printBooks();
  lib1.addBook("Sherlock Home2", "asdadas2");
  lib1.addBook("Sherlock Home2", "asdadas2");
  lib1.printBooks();