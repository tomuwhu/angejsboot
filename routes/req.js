var express  = require('express')
var mongoose = require('mongoose')
var router   = express.Router()

router.get('/', (req, res, next) => res.send('Root query'))

module.exports = router
