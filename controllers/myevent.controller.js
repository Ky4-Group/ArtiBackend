const { response } = require("express");
const { where } = require("../models/myevent.model");
const Myevent = require("../models/myevent.model");
var mongoose = require("mongoose");

//mrigl
const index = (req, res, next) => {
  Myevent.find()
    .then((myevent) => {
      res.json({ myevent });
    })
    .catch((error) => {
      res.json({ error });
    });
};

//mrigl
const show = (req, res, next) => {
  req = Myevent.findOne({ active: true })
    .then((reponse) => {
      res.json({
        reponse,
      }),
        console.log("azerty", reponse);
    })
    .catch((error) => {
      res.json({
        message: "an error Occured",
      });
    });
};

//mrigl
const stores = (req, res, next) => {
  let myevent = new Myevent({
    userId: req.body.userId,
    titre: req.body.titre,
    date: req.body.date,
    adresse: req.body.adresse,
    description: req.body.description,
    uri: req.body.uri,
    active: req.body.active,
    image: req.body.image,
    prix: req.body.prix,
  });

  myevent
    .save()
    .then((response) => {
      res.json({
        message: "myevent Added Sucessfull!",
      });
    })
    .catch((error) => {
      res.statusCode = 400;
      res.json({
        message: "an error Occured here!",
      });
    });
};

//mrigll
const update = (req, res, next) => {
  let id = req.params.id;
  let boolValue = req.body.active.toLowerCase() == "true" ? true : false; //returns true

  let updateData = {
    titre: req.body.titre,
    date: req.body.date,
    adresse: req.body.adresse,
    description: req.body.description,
    uri: req.body.uri,
    active: boolValue,
    image: req.body.image,
    prix: req.body.prix,
  };
  console.log("marwen", id);
  console.log("taher", req.body.active);
  console.log("123456", boolValue);
  Myevent.findOne({ active: true })
    .then((reponse) => {
      if (reponse) {
        if (boolValue == true) {
          res.statusCode = 400;
          res.json({
            message: "fama we7ed true",
          });
        } else {
          Myevent.findByIdAndUpdate(id, { $set: updateData })
            .then(() => {
              console.log(id);
              res.json({
                message: "Myevent updated successfully!",
              });
            })
            .catch((error) => {
              res.statusCode = 500;
              res.json({
                message: "an error Occured!",
              });
            });
        }
      } else {
        Myevent.findByIdAndUpdate(id, { $set: updateData })
          .then(() => {
            console.log(id);
            res.json({
              message: "Myevent updated successfully!",
            });
          })
          .catch((error) => {
            res.statusCode = 500;
            res.json({
              message: "an error Occured!",
            });
          });
      }
    })
    .catch((error) => {
      res.statusCode = 500;
      res.json({
        message: "an error Occured",
      });
    });
};

//mrigll
const destory = (req, res, next) => {
  let _id = req.params.id;
  console.log(_id);
  Myevent.findByIdAndDelete(_id)
    .then(() => {
      res.json({
        message: "Delete sucess!",
      });
    })
    .catch((error) => {
      res.statusCode = 400;

      console.log(error);
      res.json({
        error,
      });
    });
};

////////////////////////////////////////////////

const getmyevent = (req, res, next) => {
  if (mongoose.Types.ObjectId.isValid(req.body.userId)) {
    Myevent.find({ userId: req.body.userId })
      .then((myevent) => {
        res.json({ myevent });
      })
      .catch((error) => {
        res.json({ error });
      });
  } else {
    res.json({
      message: "userId is not valid",
    });
  }
};

module.exports = {
  index,
  show,
  stores,
  update,
  destory,
  getmyevent,
};