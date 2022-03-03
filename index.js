
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const mongoose= require('mongoose')

const { Utilisateur } = require("./models/utilisateur.model");




const PORT = 9090;
mongoose.connect("mongodb://localhost:27017/arti",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Database connected");
    })
    .catch((ex)=>{
        console.log(ex);
        console.log("Unable to connect to database");
    })

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("cors")());
app.use(express.static("uploads"))
app.use('/uploads', express.static(__dirname +'/uploads'));


////////////////////Rroutes
app.use("/api/utilisateurs", require("./routes/utilisateur.route"));
app.use("/api/arts", require("./routes/art.route"));

app.use('/api/partenaires', require("./routes/partenaire.route"))
app.use('/api/evenement', require("./routes/evenement.route"))
app.use('/api/Badge', require("./routes/badge.route"))
app.use('/api/Notification', require("./routes/notification.route"))
app.use('/api/Commande', require("./routes/commande.route"))
app.use('/api/Panier', require("./routes/panier.route"))

//const utilisateursController = require("./controllers/utilisateur.controller");

app.listen(PORT, ()=>{
    console.log("Server is running on port ", 9090);
})










//////////////////////Image















