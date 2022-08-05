const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();
app.use(express.json()); // read the body content of our request 
require('dotenv').config() // to .env files
app.use(cors()) // handle cross origin resource sharing 
// app.use(cors({options for specific domain and ports})) // handle cross origin resource sharing 
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

const users_route = require('./route/user')
const products_route = require('./route/product');
const orders_route = require('./route/order');

/* connnection to our database */
mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(res => {
        console.log("mongodb connected")
    })




app.use("/api/users", users_route)
app.use("/api/products", products_route)
app.use("/api/orders", orders_route)


/* handle errors */
app.use("", (req, res) => {
    return res.status(404).send({
        message: "the requested resource doesnot exist."
    })
})

app.use((err, req, res, next) => {
    // console.log(err.errors);
    // console.log(err.message);
    // console.log("________");
    // console.log(err);
    if (err.name === "ValidationError") {
        let errors = {};
        // make error format same as express-validator
        Object.keys(err.errors).forEach((key) => {
            console.log({ key });
            errors[key] = err.errors[key].message;
        });

        return res.status(400).send({
            message: err.name,
            errors
        });
    }

    let status_code = res.status_code || 500;
    return res.status(status_code).send({
        message: err.message,
        errors: err,
        stack: err.stack,
    })
})



/* start the server */
app.listen(process.env.PORT, (data, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server started");

    }
})



