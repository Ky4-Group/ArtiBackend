const mongoose = require("mongoose");
const utilisateurSchema = mongoose.Schema(
    {
        nom:{type:String,},
        prenom:{type:String,},
        email:{type:String,},
        password:{type:String,},
        numero:{type:String,},
        bio:{type:String,},
        datenaissance:{type:String,},
        adresse:{type:String,},
        role:{type:String,},
        image:{type:String,}

    }
);

const Utilisateur = mongoose.model("utilisateur", utilisateurSchema);

module.exports = { Utilisateur }