//object destructuring

const book = {
    title : "China Haraayeko Manchhe",
    author : "Haribamsha Acharya",
    price : 500.00,
    isbn : 234567,
    isInteresting : true
}

//General way to find Book's title and Author

let bookTitle = book.title;
let authorName = book.author;

console.log(bookTitle);
console.log(authorName);


// Destructuring
const {title, author} = book;

console.log(title);
console.log(author);