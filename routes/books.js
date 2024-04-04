const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// GET request for displaying all books
router.get('/', booksController.books_list);

// POST request for creating a new book
router.post('/', booksController.books_create_post);

// DELETE request for deleting a book
router.delete('/:id', booksController.books_delete);

// PUT request for updating a book
router.put('/:id', booksController.books_update_put);

// GET request for displaying details of a specific book
router.get('/:id', booksController.books_detail);

module.exports = router;
