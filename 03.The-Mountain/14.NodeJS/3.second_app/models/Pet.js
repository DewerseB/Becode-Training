let mongoose = require('mongoose');
let PetSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    species: String,
    primaryColor: String
});
module.exports = mongoose.model('PetSchema', PetSchema);