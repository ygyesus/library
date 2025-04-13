const books = [];

function Book(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
      
    readStatusString = this.read 
        ? "have read already"
        : "not read yet";

    this.info = function(){
        return `${this.title} by ${author}, ${pages} pages, ${readStatusString}`      
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    books.push(book);
    
}


title = "The Hobbit"
author = "J.R.R. Tolkien"
pages = "295 pages"
read = false

addBookToLibrary(title, author, pages, read);
console.log(books)

