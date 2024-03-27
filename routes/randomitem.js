var express = require('express');
var router = express.Router();

// Define the route for the /randomitem endpoint
router.get('/', function(req, res, next) {
  res.render('randomitem', { title: 'A random item' });
});

module.exports = router;
