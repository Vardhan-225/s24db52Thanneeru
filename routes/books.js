var express = require('express');
const books_controlers = require('../controllers/books');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

// GET all books and render view
router.get('/', books_controlers.books_view_all_Page);

router.get('/detail', books_controlers.books_view_one_Page); 

router.get('/create', books_controlers.books_create_Page);

/* GET create update page */
router.get('/update', secured, books_controlers.books_update_Page);

/* GET delete costume page */ 
router.get('/delete', books_controlers.books_delete_Page); 

module.exports = router;
