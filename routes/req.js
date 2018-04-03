var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()

router.get('/', (req, res, next) => res.send('Root query'))

mongoose.connect('mongodb://localhost/spny')
var Csapat = mongoose.model( 'Csapat', {} )
router.get( '/csapatok', (req, res, next) =>
  Csapat
      .find( )
      .then( found => res.send( found ) )
)

module.exports = router
