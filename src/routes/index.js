const express = require('express')

const router = express.Router()

var AppController = require('../controllers/application.controller')
router.get('/info', AppController.getInfo)
router.get('/dependencies', AppController.getDependencies)

module.exports = router