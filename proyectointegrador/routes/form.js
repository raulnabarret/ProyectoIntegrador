var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Dato = mongoose.model('datos')

/* GET form. */
router.get('/', function(req, res) {
  Dato.find(function(err, datos){
    
    if(err) console.log(err)

    res.render('form', { title : 'Add Data', datos : datos })

  })
})

/* POST form. */
router.post('/', function(req, res) {

  Dato.remove({}, function(err, dato){
    if(err) console.log(err)
  })

  for (var i = 0; i <= 5000; i++) {

    var rand = Math.floor((Math.random()*100)+1)

    new Dato({title : rand}).save(function(err, dato) {
      if(err) console.log(err)
    })    
  }

  console.log('Done')
})

module.exports = router