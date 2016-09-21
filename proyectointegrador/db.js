var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Dato = new Schema({
	id 	 : Number,
    tipo : String,
    dato : Number,
    fecha: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('datos', Dato)

mongoose.connect('mongodb://localhost/comment')