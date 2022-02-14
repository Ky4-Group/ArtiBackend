const express = require('express')
const router  = express.Router()

const PartenaireController = require('../controllers/partenaire.controller')

router.get('/index',PartenaireController.index)
router.post('/show',PartenaireController.show)
router.get('/',PartenaireController.index)
router.post('/stores',PartenaireController.stores)
router.post('/update',PartenaireController.update)
router.post('/delete',PartenaireController.destory)

module.exports=router