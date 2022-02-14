const express = require("express");

const router = express.Router();

const artController = require("../controllers/art.controller");

router.get("/all",artController.index)
router.post("/add",artController.add)
router.put("/update/:id",artController.update)
router.delete("/delete/:id",artController.destroy)




module.exports = router;