
// // CALLBACK
// //  =>  a function passed as variable, which is meant to be executed after its preceeding
// //  task is completed

// console.log(1);

// function calc() {
//     console.log("i am a callback")
// }

// // setTimeout(calc, -2340);

// // setTimeout(() => {
// //     console.log("callback 2")
// // }, 2000);

// console.log(2);
// console.log(3);



// // Promise
// // - pending
// // - resolve
// // - reject


// let prm1 = new Promise((resolve, reject) => {
//     // check for conditionas
//     if (false) {
//         // 200  - 209 //
//         resolve({ id: 1, name: "John" })
//     }
//     // status code
//     // 300
//     // 400
//     // 500
//     reject({ message: "Server Error", error:"err.mes" })
// })

// prm1
//     .then(res => {
//         console.log({ res })
//     })
//     .catch(err => {
//         console.log({ err })
//     })


// try{
//     // suppose this is a complex feature
//     let a = "c" + "d";
//     console.log({a})
// }
// catch(err){
//     console.log({err});
//     // console.log(err.message);
// }

// console.log("response is .....")



// _____ event queue, event loop,  CALLstatck queue, job queue


// stack = > last in frist out
// queue => first in first out


console.log(1);
// macrotask
setTimeout(() => {
    console.log("inside timeout");
}, 0);

setTimeout(() => {
    console.log("inside timeout - 2");
}, 100);

// microtask
pr1 = new Promise((resolve, reject) => {
    resolve("true from promise -1")
})

pr2 = new Promise((resolve, reject) => {
    resolve("true from promise")
    setTimeout(() => {
    }, 100);
})

pr1.then(res => {
    console.log({ res });
}).catch(err => {
    console.log({ err });
})

pr2.then(res => {
    console.log({ res });
}).catch(err => {
    console.log({ err });
})

console.log(3);


subject = "javascript";

console.log("dear sir, subject:" + " " + subject)


// template literal 
// => starts with back tick

console.log(`dear sir, subject: ${subject}`);


// ==> output print subject in new line


// alt + shift + a
/*
 comment 
comment 
comment 
 */




// TODO:: download git https://git-scm.com/downloads
// and create github account











































