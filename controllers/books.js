const Book = require('../models/books');

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
exports.books_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Handle book delete on DELETE
exports.books_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};

// Handle book update on PUT
exports.books_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};
