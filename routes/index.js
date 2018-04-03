var express = require('express')
var router = express.Router()

router.get( '/', (req, res, next) => res.render('index',{ iv: 123 }) )

module.exports = router
