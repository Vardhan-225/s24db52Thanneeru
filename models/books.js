// const mongoose = require('mongoose');

// const booksSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     year: Number
// });

// const Book = mongoose.model('Book', booksSchema);

// async function recreateDB() {
//     await Book.deleteMany();
//     const booksData = [
//         { title: 'It starts with us', author: 'Collen Hoover', year: 2022 },
//         { title: 'Meditations', author: 'Marcus Aurelius', year: 1559 },
//         { title: 'History of the humankind', author: 'Yuval Noah', year: 2011 }
//     ];
//     for (let bookData of booksData) {
//         const book = new Book(bookData);
//         await book.save();
//     }
//     console.log('Database populated with books');
// }

// const reseed = true;
// if (reseed) {
//     recreateDB();
// }

// module.exports = Book;

const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    title: String,
    author: String,
    year: Number
});
module.exports = mongoose.model('books', booksSchema);