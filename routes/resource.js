var express = require('express');
var router = express.Router();

// Require controller modules
// Require controller modules
var api_controller = require('../controllers/api');
var costumeController = require('../controllers/costumeController');


// API ROUTE
router.get('/', api_controller.api);

// COSTUME ROUTES
router.post('/costumes', costumeController.costume_create_post); // <-- Make sure this line is correct
router.delete('/costumes/:id', costumeController.costume_delete);
router.put('/costumes/:id', costumeController.costume_update_put);
router.get('/costumes/:id', costumeController.costume_detail);
router.get('/costumes', costumeController.costume_list);

module.exports = router;
