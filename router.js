var express = require('express')
var router = express.Router()

menu = [
  { url: '/'    , felirat: 'Kezdőlap'      },
  { url: 'ures' , felirat: 'Üres menüpont' }
]

menu.forEach( (v,k) => {
  if (v.url=='/') v.ejs_file='index'
  else v.ejs_file=v.url
  router.get( "/"+v.url, (req, res) => {
         res.render( v.ejs_file, { menu: menu, index:k } )
  } )
} )

module.exports = router
