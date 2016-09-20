var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Comment = mongoose.model('comments')

/* GET form. */
router.get('/', function(req, res) {
  Comment.find(function(err, comments){
    
    if(err) console.log(err)

    res.render('form', { title : 'Add Data', comments : comments })

  })
})

/* POST form. */
router.post('/', function(req, res) {

  Comment.remove({}, function(err, comment){
    if(err) console.log(err)
  })

  for (var i = 0; i <= 5000; i++) {

    var rand = Math.floor((Math.random()*100)+1)

    new Comment({title : rand}).save(function(err, comment) {
      if(err) console.log(err)
    })    
  }

  console.log('Done')
})

module.exports = router