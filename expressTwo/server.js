const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Author = require('./model/author');
const User = require('./model/user');

const bcrypt = require("bcrypt")
var cookieParser = require('cookie-parser')

app.use(cookieParser("secret key"))

var session = require('express-session')

var jwt = require('jsonwebtoken');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// mongoose.connect('mongodb://localhost:27017/<datbase_name>');
mongoose.connect('mongodb://localhost:27017/school')
    .then(res => {
        console.log("mongodb connencted")
    })
    .catch(err => {
        console.log(err)
    })

app.use(express.json())

app.get("/api/users", async (req, res) => {
    try {

        let user = await User.find().select("password")
        res.send({ data: user })
    }
    catch (err) {
        next(err)
    }
})


app.post("/api/signup", async (req, res, next) => {


    console.log(req.body)

    // TODO: create a new user in db;
    const hashed = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    try {

        let user = await User.create({
            email: req.body.email,
            password: hashed
        })
        res.send({ data: user })
    }
    catch (err) {
        next(err)
    }

})

app.get("/home", (req, res) => {
    res.send("home")
})

app.get("/api/cookie", (req, res) => {
    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.body);

    // res.setHeader("set-cookie","value=success;value2=success2")
    // res.setHeader("set-cookie","value3=success3")

    // res.cookie("key","value",{
    //     path:"/api/cookie"
    // })

    //  res.cookie("global key","value",{
    //         path:"/"
    //     })
    res.cookie("signed key", "value", {
        path: "/",
        httpOnly: true,
        signed: true
    })

    console.log(req.cookies)
    console.log(req.signedCookies)

    res.cookie("global http only key", "value", {
        path: "/",
        httpOnly: true,
    })

    res.send({ "hello": false })
})

app.post("/api/resource", (req, res) => {
    if (!req.session.user) {
        return res.send("unauthenticated")
    }
    console.log("session_user", req.session.user)

    // TODO: authenticated the user

    res.send("resource")
})


app.post("/api/login", async (req, res) => {
    // Load hash from your password DB.
    // req.session.user = req.body.email;

    // console.log("session_user",req.session.user)

    // res.send("logged in")

    // return;

    const { email, password, ...rest } = req.body

    const user = await User.findOne({ email }).select("password");

    if (!user) {
        // res.send({user})
    }
    // console.log({user})

    let status = await bcrypt.compare(password, (user?.password || ""));

    if (!user || !status) {
        res.send({ msg: "Invalid Credentias" })
    }

    // req.session.user = user;
    console.log({user})

    let user_info = await User.findOne({ email });
    res.send({
        access_token: jwt.sign(user.toObject(), 'shhhhh')
    })


    // TOKEN : send jwt token
    // npm jsonwebtoken
    // Authentication and authoriztion

    // => http protocol 
    // => stateless  // server doesnot store the request data 
    // cookie-session => stateful 
    // REST api, jsonweb-token -> stateless


})



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
            books: ["62bec84c25e9e8b982fb2c19"]
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
