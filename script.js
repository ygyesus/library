
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book-btn")
const bookTitle = dialog.querySelector(".book-title")
const bookAuthor = dialog.querySelector(".book-author")
const bookPages = dialog.querySelector(".book-pages")
const closeBtn = dialog.querySelector(".close")

const yesRead = dialog.querySelector(".yes")
const noRead = dialog.querySelector(".no")

// const bookReadStatus_ = document.querySelector("")

newBookBtn.addEventListener("click", ()=>{
    dialog.showModal();

})

const form = document.querySelector("form");
form.addEventListener("submit", ()=>{

    const title = bookTitle.value
    const author = bookAuthor.value
    const pages = bookPages.value
    const read = yesRead.checked ? true : false
    addBookToLibrary(title, author, pages, read)
    displayBooks()
})

closeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.close();
})





const books = [];
const bookContainer = document.querySelector(".book-container")
const readStatusString = read => read
    ? "have read already ✅"
    : "not read yet ❌";

function Book(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
      

    this.info = function(){
        return `${this.title} by ${author}, ${pages} pages, ${readStatusString(this.read)}`      
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    books.push(book);
    
}

function createDummyBooks(){
    title = "The Hobbit"
    author = "J.R.R. Tolkien"
    pages = "295"
    read = false
    
    addBookToLibrary(title, author, pages, read);


    title = "1984";
    author = "George Orwell";
    pages = "328";
    read = true;
    
    addBookToLibrary(title, author, pages, read);
    
    title = "To Kill a Mockingbird";
    author = "Harper Lee";
    pages = "281";
    read = false;
    
    addBookToLibrary(title, author, pages, read);
    
    title = "The Great Gatsby";
    author = "F. Scott Fitzgerald";
    pages = "180";
    read = true;
    
    addBookToLibrary(title, author, pages, read);
    
    title = "Pride and Prejudice";
    author = "Jane Austen";
    pages = "279";
    read = false;
    
    addBookToLibrary(title, author, pages, read);
    
    title = "Moby Dick";
    author = "Herman Melville";
    pages = "585";
    read = true;
    
    addBookToLibrary(title, author, pages, read);
    
    title = "War and Peace";
    author = "Leo Tolstoy";
    pages = "1225";
    read = false;
    
    addBookToLibrary(title, author, pages, read);
}


function createCard(book){
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookFigure = document.createElement("div");
    bookFigure.classList.add("book-figure");
    bookCard.appendChild(bookFigure);

    
    // bookFigure.textContent = book.title;
    
    const title = document.createElement("p");
    title.textContent = `${book.title}`;
    title.classList.add("title");


    const id = document.createElement("p");
    id.textContent = `ID: ${book.id}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement("p");
    read.textContent = `${readStatusString(book.read)}`;

    bookContainer.appendChild((bookCard))  ;
    console.log(book);  

    bookFigure.appendChild(title);
    // bookFigure.appendChild(id);
    bookFigure.appendChild(author);
    bookFigure.appendChild(pages);
    bookFigure.appendChild(read);
}


function displayBooks(){
    for (const book of books){
        createCard(book);
    }
}

createDummyBooks();
displayBooks();


