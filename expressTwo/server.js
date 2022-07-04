const express = require('express')
const app = express()

const mongoose = require('mongoose');
const Author = require('./model/author');


// mongoose.connect('mongodb://localhost:27017/<datbase_name>');
mongoose.connect('mongodb://localhost:27017/school')
    .then(res => {
        console.log("mongodb connencted")
    })
    .catch(err => {
        console.log(err)
    })

app.use(express.json())



app.post("/api/authors", async (req, res, next) => {


    // Author.create({
    //     name: "john changed",
    //     email: "testing@testing.com",
    //     dob: Date()
    // }, (err, data) => {
    //     if (err) return next(err)
    //     res.send({ data })
    // })

    // db.authors.insert
    let author = await Author.create({
        name: "john changed finalllllll",
        email: "testing@testing.com",
        dob: Date(),
        fullname:"John Doe"
    })

    console.log(author)

    res.send({ data: author })


})

// app.use("", (req, res, next) => {
//     console.log("111")
//     next()
//     console.log("33333")
// })


// app.use("", (req, res, next) => {
//     console.log("2222")
//     return res.send({ data: "hellos" })
//     return next()
// })

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


// axios

// axios.get("url")
// .then()
// .catch()

// 200
// 401
// 403
// 500
