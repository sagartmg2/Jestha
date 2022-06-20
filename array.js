// // let arr = [1, 2, "string", { a: 1, b: 2, c: [0, 1, 2] }, undefined, null]
// let arr1 = [1, 2]
// // console.log([...arr1, 3]);
// arr1.push(3);
// arr1.unshift(0)
// arr1.unshift(-1)

// arr1.pop()
// arr1.shift()

// arr1.splice() // removes value from middle selectevly
// arr1.slice() // returns new array from our range or array.


// arr2 = arr1.filter(element => {
//     if (element == 2) {
//         return true
//     }
// })

// console.log(arr1);
// // console.log(arr2);

// //TODO:
// arr = [0, 1, 2]
// // output =>  [0,2,4]

// // let a = 1;
// // let b = 2;
// // output => b = 1, a = 2



// arr3 = arr1.map((el, index) => {
//     return el * 2
// })

// // function hello(){

// // }
// const hello = (el) => { console.log({ el }) }

// console.log({ arr1 });
// // arr1.forEach(hello)

// let temp = [];

// arr1.forEach((el) => {
//     console.log({ el })
//     if (el == 2) {
//         temp.push(el)
//     }
// })

// console.log({ temp });


// let response = [{ id: 1, name: "john" }, { id: 2, name: "Doe" }]

// console.log(arr3);

// console.log(arr3.find(el => el == 2))
// console.log(response.find(el => el.id < 5))


// let arr = [1, 2, 3, 4]
// console.log( arr.indexOf(3))
// console.log(arr.findIndex(el => el < 5))
// console.log(arr.includes(4))







// array1 = [0, 2, 4]
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     array2[i] = array1[i] ** 2
// }
// console.log(array2);

//initation variable
//  a = 4
//  b = 2

//using destructuring assignment
// object destructuring.

// REST syntax

// [a, b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a, b);
// console.log(rest);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// let { c, d, ...custom } = obj
// console.log(c, d, custom);


// // AUTO semicolon concept
// let a = 1
// let b = 2;
// [a, b] = [b, a]

// console.log(a, b);
// // let [c, d] = [100, 200]
// // console.log(c, d);



setTimeout(() => {
    console.log(rand)
}, 1000);

let rand = "random";



