const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Commande = mongoose.model("Commande")

router.post('/AddCommande', (req, res) => {
    const {/* idcommande,*/ idUser,idPanier} = req.body

    const Commande = new Commande({
        /*idcommande: idcommande,*/
        idUser: idUser,
        idPanier:idPanier
    })

    Commande.save().then(response => {res.json(Commande)})
})

router.get('/ShowCommande', (req, res) => {
    Besion.find({ idUser : req.headers.idUser })
        .exec(function(err, data) {
    if(err) res.status(500).send(err);
    else res.send(data);
  })
      //  console.log(req.headers)
});

router.delete('/deletCommande', function (req, res) {
  var id = req.body._id;
  Commande.findOneAndRemove({ _id: id }, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();

  });
});