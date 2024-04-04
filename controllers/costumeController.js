const Costume = require('../models/costume');

// Display list of all Costumes
exports.costume_list = async function(req, res) {
    try {
        const costumes = await Costume.find();
        res.send(costumes);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Display detail page for a specific Costume
exports.costume_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Handle Costume create on POST
exports.costume_create_post = function(req, res) {
    // Create a new costume instance and save it to the database
    const costume = new Costume({
        costume_type: req.body.costume_type,
        size: req.body.size,
        cost: req.body.cost
    });

    // Save the costume
    costume.save(function(err) {
        if (err) {
            return next(err);
        }
        // Costume saved successfully
        res.send('Costume created successfully');
    });
};

// Handle Costume delete on DELETE
exports.costume_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

// Handle Costume update on PUT
exports.costume_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
