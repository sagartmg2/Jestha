
const express = require('express')
const app = express()
// var bodyParser = require('body-parser')


// middewares => anything, that has access to our request and response and has capability to alter them.

// next () => calls the next valid middleware in line

// global  middleware
app.use((req, res, next) => {
    console.log("middleware")
    next()  
})

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.json()) 
// built - in middleware


app.post("/", (req, res) => {
    console.log(req.body)
    res.send("POST")
})

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8000)