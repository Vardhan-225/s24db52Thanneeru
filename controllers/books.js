const Book = require('../models/books');

// Display all books view
exports.books_view_all_Page = async function(req, res) {
    try {
        const books = await Book.find();
        res.render('books', { title: 'Book Search Results', results: books });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// List all books
exports.books_list = async function(req, res) {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Display detail page for a specific book
exports.books_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Handle book create on POST
exports.books_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Book(req.body);
    try {
        let result = await document.save();
        res.send(result);
    } catch(err) {
        res.status(500).send({ error: err.message });
    }
};

// Handle book delete on DELETE
exports.books_delete = async function(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.send(deletedBook);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Handle book update on PUT
exports.books_update_put = async function(req, res) {
    res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};
