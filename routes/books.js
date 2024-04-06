const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

// GET request for displaying all books
router.get('/', books.books_view_all_Page);

// POST request for creating a new book
router.post('/', books.books_create_post);

// DELETE request for deleting a book
router.delete('/:id', books.books_delete);

// PUT request for updating a book
router.put('/:id', books.books_update_put);

// GET request for displaying details of a specific book
router.get('/:id', books.books_detail);

module.exports = router;
