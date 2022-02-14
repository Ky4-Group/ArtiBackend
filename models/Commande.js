const { request } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const commandeschema = new mongoose.Schema(
    {
      /*  idcommande: {
            type: Number,
            request: true
        },*/
        idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
        idPanier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Panier'}
    })
mongoose.model("Commande", commandeschema)