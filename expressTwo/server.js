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

app.get("/api/authors", async (req, res, next) => {

    let authors = await Author.find();

    res.send({ data: authors })

})

// app.post("/api/signup")

app.post("/api/authors", async (req, res, next) => {
    
    // db.authors.insert
    // author = await Author.create({})
    // // console.log(author) => <Promisie<Pending></Pending>
    // console.log(author)



    // Author.create({
    //     name: "john changed",
    //     email: "testing@testing.com",
    //     dob: Date()
    // }, (err, data) => {
    //     if (err) return next(err)
    //         // connect authorsBook  

    //         // Book.create({},() => {
    //             // callback
    //         })
    //     res.send({ data })
    // })
    // Callback Hell
    // db.authors.insert


    // try {
    //     let a = b + c;
    // } catch (err) {
    //     console.log(err)
    // }


    // User.find({email:req.email})

    try {

        let author = await Author.create({
            name: "john changed finalllllll",
            email: "testing@testing.com",
            dob: "1212",
            books:["62bec84c25e9e8b982fb2c19"]
            // full_name:"John Doe"
        })
        // book.create({authr})
        console.log("author", author)
        res.send({ data: author })
    } catch (err) {
        res.statusCode = 400
        next(err)
    }

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

app.use("", function (req, res, next) {
    console.log("404");
    res.status(404).send({ msg: "404 page not found" })
})

app.use("", function (err, req, res, next) {
    // res.send(err)
    res.send({
        data: "Server Error",
        error: err,
        msg: err.message
    })
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
