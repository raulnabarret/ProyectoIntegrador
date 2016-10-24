//Require

var express = require('express')
var mongodb = require('mongodb')
var handlebars = require('express-handlebars')


// Server

var app = express()

app.listen("3300", function(){
  console.log('Server up: localhost:3300')
})

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get("/", function(req, res){
  res.render("index")
})

app.get("/temperatura", function(req, res){
  res.render("temperatura")
})

app.get("/humedad", function(req, res){
  res.render("humedad")
})

app.get("/movimiento", function(req, res){
  res.render("movimiento")
})

app.get("/formulario", function(req, res){
  res.render("formulario")
})

app.post("/formulario", function(req, res){

})

app.get("/api", function(req, res){
  res.render("api")
})

app.get("/api/temperatura", function(req, res) {
    getTemp(res)
})

app.get("/api/humedad", function(req, res) {
    getHum(res)
})

app.get("/api/movimiento", function(req, res) {
    getMov(res)
})

//Defining middleware to serve static files
app.use('/public', express.static('public'))


// Database

//MongoDB connection URL - mongodb://host:port/dbName
var dbHost = "mongodb://admin:secret@ds033116.mlab.com:33116/proyectointegrador"

//DB Object
var dbObject

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient

//Connecting to the Mongodb instance.
//Make sure your mongodb daemon mongod is running on port 27017 on localhost
MongoClient.connect(dbHost, function(err, db) {
    if (err) throw err
    dbObject = db
})


// Logic

function getTemp(responseObj) {
    //use the find() API and pass an empty query object to retrieve all records
    dbObject.collection("temperatura").find({}).toArray(function(err, docs) {
        // Handling error
        if (err) throw err

        var datoArray = []

        for (index in docs) {

            var doc = docs[index]

            var id = doc['_id']
            var label = doc['label']
            var value = doc['value']

            datoArray.push({ "id": id, "label": label, "value": value })

        }

        var response = {
            "data": datoArray,
        }

        responseObj.json(response)

    })
}

function getHum(responseObj) {
    //use the find() API and pass an empty query object to retrieve all records
    dbObject.collection("humedad").find({}).toArray(function(err, docs) {
        // Handling error
        if (err) throw err

        var datoArray = []

        for (index in docs) {

            var doc = docs[index]

            var id = doc['_id']
            var label = doc['label']
            var value = doc['value']

            datoArray.push({ "id": id, "label": label, "value": value })

        }

        var response = {
            "data": datoArray,
        }

        responseObj.json(response)

    })
}

function getMov(responseObj) {
    //use the find() API and pass an empty query object to retrieve all records
    dbObject.collection("movimiento").find({}).toArray(function(err, docs) {
        // Handling error
        if (err) throw err

        var datoArray = []

        for (index in docs) {

            var doc = docs[index]

            var id = doc['_id']
            var label = doc['label']
            var value = doc['value']

            datoArray.push({ "id": id, "label": label, "value": value })

        }

        var response = {
            "data": datoArray,
        }

        responseObj.json(response)

    })
}