const express = require("express");

const router = express.Router();

const utilisateurController = require("../controllers/utilisateur.controller");
const { Utilisateur } = require("../models/utilisateur.model");

router.get("/all",utilisateurController.index)
router.post("/add",utilisateurController.add)
router.put("/update/:id",utilisateurController.update)
router.delete("/delete/:id",utilisateurController.destroy)
router.post('/signup',utilisateurController.signup)
router.post('/signin',utilisateurController.signin)
router.post('/emailcheck',utilisateurController.emailcheck)



module.exports = router;