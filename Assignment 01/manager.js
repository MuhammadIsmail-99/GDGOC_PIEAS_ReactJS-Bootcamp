import Books from './books.js';

const highRatedBooks = () =>{
    Books.filter(book => book.rating > 4.5).forEach(book => console.log(book.title))
}

const bookDetails = () =>{
    Books.forEach(({title, author, rating, genre})=>{
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    })
}

const bookAuthors = () =>{
    const authors = Books.map(book =>book.author)
    console.log(authors);
}
const fictionBooks = () =>{
    Books.filter(book => book.genre.toLowerCase() === "fiction").forEach(book=> console.log(book.title))
}

console.log("Books with rating higher than 4.5:");
highRatedBooks();
console.log("\nDetails of all books:");
bookDetails()
console.log("\nBooks in the 'fiction' genre:");
fictionBooks()
console.log("\nArray of book authors:");
bookAuthors()
