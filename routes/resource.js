const express = require('express');
const router = express.Router();
const api_controller = require('../controllers/api');
const booksRouter = require('./books');

// API ROUTE
router.get('/', api_controller.api);

// BOOKS ROUTES
router.use('/books', booksRouter);

module.exports = router;
