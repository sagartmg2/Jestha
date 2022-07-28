const express = require("express")
const app = express();

require('dotenv').config()

const users_route = require('./route/user')
const products_route = require('./route/product')

app.use("/api/users",users_route)
app.use("/api/products",products_route)


app.listen(process.env.PORT, (data, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server started");

    }
})



// app.post("/api/sigup",() => {},)()=>{

// })


// app.post(route,controler)

// users - buyer/seller

// products 

// orders






