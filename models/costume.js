const mongoose = require('mongoose');

const costumeSchema = new mongoose.Schema({
    costume_type: String,
    size: String,
    cost: Number
});

const Costume = mongoose.model('Costume', costumeSchema); // Define the model here

async function recreateDB() {
    await Costume.deleteMany();
    const instance1 = new Costume({ costume_type: 'ghost', size: 'large', cost: 15.4 });
    await instance1.save();
    console.log('First object saved');
}

const reseed = true;
if (reseed) {
    recreateDB();
}

module.exports = Costume; // Export the model
