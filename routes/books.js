var express = require('express');
const books_controlers = require('../controllers/books');
var router = express.Router();

// GET all books
router.get('/', books_controlers.books_list);

// GET request to display detail page for a specific book
router.get('/:id', books_controlers.books_detail);

// POST request to create a new book
router.post('/', books_controlers.books_create_post);

// DELETE request to delete a book
router.delete('/:id', books_controlers.books_delete);

// PUT request to update a book
router.put('/:id', books_controlers.books_update_put);

module.exports = router;
