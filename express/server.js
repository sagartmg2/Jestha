
const express = require('express')
const app = express()

const mongoose = require('mongoose');
// import { engine } from 'express-handlebars';
const { engine } = require('express-handlebars');


// mongoose.connect('mongodb://localhost:27017/<datbase_name>');
mongoose.connect('mongodb://localhost:27017/school')
    .then(res => {
        console.log("mongodb connencted")
    })
    .catch(err => {
        console.log(err)
    })



// var bodyParser = require('body-parser')


// app.use(express.static('public'))
app.use(express.static('storage'))

app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



// built - in middleware

// middewares => anything, that has access to our request and response and has capability to alter them.

// next () => calls the next valid middleware in line

// global  middleware
app.use((req, res, next) => {

    req.body = {
        id: 1,
        name: "John"
    };

    console.log("before middleware")
    return next();
    console.log("after middleware")
})

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


const auth_middleware = (req, res, next) => {

    let auth_status = false
    if (auth_status) {
        console.log("auth middleware ")
        next();
    } else {
        res.status(401)
        next({ err: "not authenticated" })
    }
}

// C
// R
// U
// D

const fs = require("fs");
const { type } = require('os');


// app.use(auth_middleware);

app.get('/handlebars', (req, res) => {

    // let users = User.find({})

    let users = fs.readFileSync("./users.json", "utf-8")

    // let users = fs.readFile("./server.js",() => {

    // })
    // 

    // console.log({ users });
    // console.log (  typeof( users) );

    res.render('home', {
        layout: "side",
        name: "John",
        users: JSON.parse(users),
    });

});

app.post("/", auth_middleware, (req, res) => {
    console.log("body1", req.body)
    // User.insertOne(req.body);
    res.send("POST")
})

app.get('/', function (req, res) {
    console.log("body", req.body)
    console.log(req.query);
    console.log('Hello World')
    return res.send('Hello World')
    res.send("again sending")
})


app.use("", function (req, res) {
    console.log("404");
    res.status(404).send({ msg: "404 page not found" })
})

app.use("", function (err, req, res, next) {

    console.log(req.body)
    res.send(err)
})

app.listen(8000, (err, data) => {
    console.log("listening")
})