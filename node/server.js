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


const EventEmitter = require("events")

const event = new EventEmitter();

event.on("custom", () => {
    console.log("inside custom listener ");
})

event.emit("custom")



const http = require("http")

const { URL } = require("url");

let tods = [];

const server = http.createServer((req, res) => {

    console.log(req.url)

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    // console.log(req.headers.host + req.url)

    // let url_obj = new URL(req.headers.host + req.url)
    // console.log(url_obj)
    // id = url_obj.searchParams.get("id")
    // console.log({ id });


    // return;

    if (req.url == "/users" && req.method == "GET") {
        res.write(JSON.stringify({ msg: "welcome to users page" }))
        return res.end();
    } else if (req.url == "/users" && req.method == "POST") {

        req.on('data', chunk => {
            console.log(`Data chunk available: ${chunk}`);
            // res.write(JSON.stringify(chunk));
            res.write(chunk);
            return res.end();

        });

        // res.write(JSON.stringify({ msg: "welcome to POST users page" }))
    }
    else if (req.url == "/contact") {
        res.write(JSON.stringify({ msg: "welcome to contact page" }))
        return res.end();
    } else if (req.url == "/custom-html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write("req acpt")
        const html = fs.readFileSync("./index.html")
        console.log(req.url);
        res.end(html);
    } else if (req.url == "/custom.js") {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write("req acpt")
        const html = fs.readFileSync("./custom.js")
        console.log(req.url);
        res.end(html);
    }  else {
        res.write(JSON.stringify({ msg: "404 page not found" }))
        return res.end();
    }

    // res.write(JSON.stringify({ msg: "request accepted" }))
    // res.end();

})

server.listen(8000, () => {
    console.log("listening");
})


































