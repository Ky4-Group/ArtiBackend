const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const partenaireSchema = new Schema({
    nom: {
        type: String,
    },
    email: {
        type: String,
    },
    adresse: {
        type: String,
    },
    image: {
        type: String,
    },
}, );

const Partenaire = mongoose.model('Partenaire', partenaireSchema);

module.exports = Partenaire