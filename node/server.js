// console.log(global);

// console.log(process);
// console.log(process.argv);

// console.log(1111);
// process.exit();


// console.log(__filename);
// console.log(__dirname);


// core module
// local module
// third-party module



// ES6 moudle
// import fs from "fs"



// common JS
const fs = require("fs")

// fs.writeFile("custom.txt", "random string", (err, data) => {
//     if (err) console.log({ err });
//     console.log({ data });
// });

// console.log(222);

// let status = fs.writelFieSync("custom2.txt", "adsfasdf");
// console.log({ status });

// console.log(333);

// fs.readFile("./custom.txt","utf-8",(err,data) => {
//     // console.log(data.toString());
//     console.log(data);
// })


// fs.readFile("../git.txt","utf-8",(err,data) => {
//     // console.log(data.toString());
//     console.log(data);
// })

// C:\Users\User\Desktop\Jestha\git.txt
// Buffer => uses data in binary form in bytes
//  1 byte =  8 bits (0,1)


// const path = require("path")

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.join("custom",__filename));
// console.log(path.parse(__filename));




/* 

HTTP VERBS/METHODS


GET
post  
PUT / PATCH    
DELETE

 */


// create read update delete
// C -  CREATE
// R    READ
// U    UPDATE
// D    DELETE


const auth = require("./auth.js")


console.log(12222222222);
// console.log(auth);
// // console.log({auth });

// // auth();

// auth.signup()
// auth.login();

//http module


const http = require("http")

const server = http.createServer((req, res) => {

    console.log("request accepted");

    res.write("request accepted")
    res.end();

})

server.listen(8000, () => {
    console.log("listening");
})


































