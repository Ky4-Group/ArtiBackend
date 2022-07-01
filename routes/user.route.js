const express = require('express')
const router  = express.Router()

const UserController = require('../controllers/UserController')

router.get('/index',UserController.index)
router.post('/show',UserController.show)
router.get('/',UserController.index)
router.post('/stores',UserController.stores)

module.exports=router