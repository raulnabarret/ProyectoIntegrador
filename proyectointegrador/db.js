var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Dato = new Schema({
    title : String,
})

mongoose.model('datos', Dato)

mongoose.connect('mongodb://localhost/comment')