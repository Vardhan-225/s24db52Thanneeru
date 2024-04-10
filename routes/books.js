var express = require('express');
const books_controlers = require('../controllers/books');
var router = express.Router();

// GET all books and render view
router.get('/', books_controlers.books_view_all_Page);

// PUT request to update a book
router.put('/:id', books_controlers.books_update_put);

module.exports = router;
