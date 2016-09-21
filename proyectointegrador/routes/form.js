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


  // Vaciar la Base de Datos
  Dato.remove({}, function(err, dato){
    if(err) console.log(err)
  })

  // Crear e insertar 5,000 datos: id, tipo, random, _id, fecha
  for (var i = 0; i <= 5000; i++) {

    // Crear número random de 0 a 100
    var rand = Math.floor((Math.random()*100)+1)

    // Crear nuevo registro en la base de datos y asignarle valores
    new Dato({
      id : i,
      tipo : 'Temperatura',
      dato : rand
    }).save(function(err, dato) {
      if(err) console.log(err)
        
      console.log(dato)
    })
  }

})

module.exports = router