const { request } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const panierschema = new mongoose.Schema(
    {
      /*  idpanier: {
            type: Number,
            request: true
        },*/
        
        idArt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Art'}
    })
mongoose.model("Panier", panierschema)