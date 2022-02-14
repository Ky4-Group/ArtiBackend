const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Panier = mongoose.model("Panier")

router.post('/AddPanier', (req, res) => {
    const { /*idpanier,*/ idArt} = req.body

    const Panier = new Panier({
        /*idpanier: idpanier,*/
        idArt: idArt
    })

    Panier.save().then(response => {res.json(Panier)})
})

router.get('/ShowPanier', (req, res) => {
    Panier.find({ idUser : req.headers.idUser })
        .exec(function(err, data) {
    if(err) res.status(500).send(err);
    else res.send(data);
  })
      //  console.log(req.headers)
});

router.get('/ShowArt', function(req, res, next) {// SHOW All  POSTS
    Panier.find().sort({_id:-1})
    .select({'__v':0})
    .populate("idArt",{'_id':0})
    .then(data  => {
        const dataa = data
        res.json(dataa);
    })
    .catch(error  =>{
        console.log(error);
        res.json({
            message: "an error occured when displaying"
        })
    })   
})

router.delete('/deletPanier', function (req, res) {
  var id = req.body._id;
  Panier.findOneAndRemove({ _id: id }, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();

  });
});


