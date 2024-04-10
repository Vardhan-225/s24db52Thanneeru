const Book = require('../models/books');

// Display a list of all books
exports.books_list = async function(req, res) {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Display detail page for a specific book
exports.books_detail = async function(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ error: `Book with id ${req.params.id} not found` });
        }
        res.send(book);
    } catch (error) {
        res.status(500).send({ error: `Error retrieving book: ${error.message}` });
    }
};

// Handle book creation on POST
exports.books_create_post = async function(req, res) {
    const { title, author, year } = req.body;
    try {
        const newBook = new Book({ title, author, year });
        const savedBook = await newBook.save();
        res.send(savedBook);
    } catch(err) {
        res.status(500).send({ error: err.message });
    }
};

// Handle book deletion on DELETE
exports.books_delete = async function(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).send({ error: `Book with id ${req.params.id} not found` });
        }
        res.send(deletedBook);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Handle book update on PUT
exports.books_update_put = async function(req, res) {
    const { title, author, year } = req.body;
    try {
        let updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true });
        if (!updatedBook) {
            return res.status(404).send({ error: `Book with id ${req.params.id} not found` });
        }
        res.send(updatedBook);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Render view to display all books
exports.books_view_all_Page = async function(req, res) {
    try {
        const books = await Book.find();
        res.render('books', { title: 'Books', results: books });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
