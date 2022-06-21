// PASS by value vs pass by reference

// let a = 1
// // let a = "string"
// let a = null
// // let a = undefined
// let b = a


// console.log(a, b);


// let obj = { a: 1, b: 2 }
// // obj.a = "string"
// // console.log(obj.a);
// let obj2 = obj;
// obj2.a = "changed"

// console.log(obj, ",", obj2);



// let arr = [1, 2, 3]
// let arr2 = arr;

// console.log(arr2[0]);
// arr2[3] = "changed"
// console.log(arr, ", ", arr2);



// let arr = [1, 2, 3]

// check(arr)

// function check(arr) {
//     // spread syntax
//      // rest syntax
//     let arr2 = [0, -0]
//     arr2[3] = "changed"  // [0,-0, emtpy, changed]  
//     arr2 = [...arr2, ...arr]
//     console.log({ arr2 });
// }

// console.log(arr);

// let obj = { a: 1, b: 2 }
// let obj2 = { ...obj };
// obj2.c = 3

// console.log({ obj }, { obj2 });



// TERNARY Operator
// if (true) {
//     if (false) {
//         console.log("is true");
//     }
//     else {
//         console.log("not this time");
//     }
// }
// else {
//     console.log("is false");
// }

// console.log(true ? (false ? "yes" : "not this time") : "no");
// console.log(true ? "yes" : "no");



// console.log(1);
// console.log(10);

// use for loop when we know the exact number of iteration
// while using loop, we must terminate it at some point

// for(let i = 0;<condition> ; i++){
// for (let i = 0; i <= 10; ++i) {
//     console.log(i);
//     if (i == 5) break;
// }

// while(<condition>){
// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// let i = 100
// do {
//     console.log(i);
//     i++
// } while (i < 10)


let arr = [5, 4, 3, 2, 1]

for (let i = 0; i < arr.length; i++) {
    console.log("index", i, "has value", arr[i]);
}

arr.forEach((element, index) => {
    console.log("______index", index, "has value", element);
})


















