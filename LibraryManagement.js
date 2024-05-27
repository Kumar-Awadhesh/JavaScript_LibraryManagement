let Library=[]
//function to add books in the library.
function addBooks(title, author, isbn){
    Library.push({title, author, isbn, bookAvailable: true});
}

//function to display available books.
function displayBokks(){
    console.log("Available Books:");
    for(let book of Library){
        if(book.bookAvailable){
            console.log(book.title, "by", book.author,"ISBN:",book.isbn);
        }
    }
}

//functon to borrow a Book.
function borrowBook(isbn){
    for(let book of Library){
        if(book.isbn===isbn && book.bookAvailable){
            book.bookAvailable=false;
            console.log(book.title, "by", book.author,"ISBN:",book.isbn, "Book with ISBN:",isbn, "has been borrowed");
            return
        }
    }
    console.log(book.title, "by", book.author,"ISBN:",book.isbn, "Book with ISBN:", isbn, "is not Available");
}

//function to return the books to Library.
function returnBooks(isbn){
    for(let book of Library){
        if(book.isbn===isbn && !book.bookAvailable){
            book.bookAvailable=true;
            console.log(book.title, "by", book.author,"ISBN:",book.isbn, "Book with ISBN:", isbn, "has been returned");
            return
        }
    }
    console.log(book.title, "by", book.author,"ISBN:",book.isbn, "Book with ISBN:", isbn, "is Available")
}

//adding some books to the Library.
addBooks("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565")
addBooks("To Kill a Mockingbird", "Harper Lee", "9780061120084")

//display available books.
displayBokks();
console.log("")

//borrow a book from Library.
borrowBook("9780743273565")
console.log("")

//display available books.
displayBokks();
console.log("")

//return the book to the Library.
returnBooks("9780743273565")
console.log("")

//display available books.
displayBokks();