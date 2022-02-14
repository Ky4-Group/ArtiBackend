const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const evenementSchema = new Schema({
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
}, { timestamps: true});

const Evenement = mongoose.model('Evenement', evenementSchema);

module.exports = Evenement