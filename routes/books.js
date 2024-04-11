var express = require('express');
const books_controlers = require('../controllers/books');
var router = express.Router();

// GET all books and render view
router.get('/', books_controlers.books_view_all_Page);

router.get('/detail', books_controlers.books_view_one_Page); 

module.exports = router;
