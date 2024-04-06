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
    let document = new Book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"title":"The Alchemist", "author":"Paulo Coelho", "year":1988}
    document.title = req.body.title;
    document.author = req.body.author;
    document.year = req.body.year;
    try {
        let result = await document.save();
        res.send(result);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle book delete on DELETE
exports.books_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};

// Handle book update on PUT
exports.books_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};
