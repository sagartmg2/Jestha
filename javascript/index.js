// variable => vary  

// declaration VS Initialization
var myName; // declaration

// to comment enter (ctr + /)

/* 
    for multi line commnet enter (shift + alt + A)
*/

// let a = "john Doe"


var myName = "John Doe"; //  initialization
myName = "new John doe" // re-initializaiton
var myName = "final John " //  infinite number of re-declartion


// let was introduce in ES6 //  in 2015 
let myName2 = 12
myName2 = 1212
myName2 = 131313
// let myName2 = 1313 // variable defined with let keyword cannot be redeclared and only be re-initialized

const myName3 = null
// myName3 = "change"  // error => Assignment to constant variable. // variable defined with const  cannot be re-initialization 




// global variable  vs blockscoped variable vs functional scoped

// varaible defined with var keyword are global variable 
// varaible defined with let  keyword can be  global, blocked, functional variable 


var myName = "re-declared"
myName2 = "re-initialized"


// NAMING

var myName = "cameCase"
var my_name = "snake_case"


// // DATA TYPES
// INT // 12 / integer
// // 12.234 // FLOAT, double



// Object  // {key:"value",num:1}
// Advance JS
// Symobl
// BigInt

//  Primitive Vs NON Primitive Datatype
// PRIMITIVE
// Number
// - // INT // 12 / integer
//  - // // 12.234 // FLOAT, double
// String
// Boolean  // TRUE and false
// null
// undefined 

// NON-PRIMITIVE (special data types)  // made from primitive data types
    // - REFERENCE DATA types

//     - Object  (Collection)
//          - JAVASCRIPT Object
//          - Array


// let random;

// console.log({ random });
// console.log(myName);
// console.log(myName2);
// console.log(myName3);
// console.log(typeof (myName));


// let fruit1 = "applie";
// let fruit2 = "banana";
// let age = 25;

// let arr = [fruit1, fruit2, age, { a: 1 }]
// // index in array always starts with 0
// console.log({ arr });
// console.log(arr[0]);


// let obj = {
//     value: "key"
// }

// let value;
// let value2 = null;

// let obj2 = {
//     value,  // Keys are also referred to as attribute , property
//     "key2": value2,
//     arr,
// }

// console.log(obj);
// console.log(obj2);
// console.log(obj2.key2);


// ___________JUNE 9 _______dAY 2___________

// 

// OPERATORS 

// Arthematic //
// +	Addition  // let c = a+b // where let a= 1 , b = 2   => 3
// -	Subtraction / " => -1 
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division // let c = 10/ 3  => 3.333
// %	Modulus (Division Remainder)  // => instead of returning the value, it returns the reminder // 10%3 = 1(which is the remainder)
// ++	Increment
// --	Increment

// post-increment number++  // returns value before it was incremented
// pre-increment ++number // returns value after incrementing
// num1 = 100
// console.log(num1++, num1);  // 100,101
// console.log(++num1, num1);
// --	Decrement


// logical  // returns only one value i.e boolean // true or false
// AND  // returns true if both condition is true
// OR // retursn true if any of the condition is true
// NOT // reverse the boolen

// let status1 = true
// let status2 = true
// let status3 = false
// console.log("and", (status1 && status2) && status3);
// console.log("or", status3 || (status1 && status2));
// console.log("not", !status3);
// console.log("NAND", !((status1 && status2) && status3));

// comparision  // returns a boolen value,
//
// = // assignement
// ==  // equals to //  to check if variables contain the same data
// != // not equals to //  to check if variables contain the different data

// STrictly checks the data-type of the operands too
// === 
// !===

// ____________jUNE 10 DAY 3

// let num1 = 1
// let num2 = 1
// let num3 = 3
// let str = "100"
// let str = "1one"

// console.log(parseInt(str) + num1);
// console.log(parseInt(str) - num1);
// console.log( num1 * "asd");
// console.log(typeof(NaN));
// console.log(num1 + str);

// >  // greater than 
// <  // less than 
// >= // greter or equals to 
// <= // less or equals to 

// console.log(num2 > num1);
// console.log(num2 < num1);
// console.log(num2 <= num1);
// console.log(str >= num1);






// console.log(num1  == num2);
// console.log(num1  == str);
// console.log(num1  === str);

// console.log(num1  != num2);
// console.log(num1  != str);
// console.log(num1  !== str);

// CONDITIOINALS 



// if ({}) {
//     console.log("Is true");
// }else{
//     console.log("FALSE");
// }

// if ([]) {
//     console.log("Is true");
// }else{
//     console.log("FALSE");
// }



// if ("RANDOM") {
//     console.log("Is true  1");
// }else{
//     console.log("FALSE");
// }


// if ("") {
//     console.log("Is true");
// }else{
//     console.log("FALSE");
// }

// FALSY VALUES
//  - false
//  - null
//  - undefined
//  - 0
//  - ""
//  - NaN

// let num1 = 5;

// if (num1 == 0) {

// } else if (num1 == 1) {

// }
// else if (num1 < 10) {
//     console.log("less than 10");
// }
// else {
//     console.log("The end");
// }

// console.log("status", num1 < 10);
// console.log(100 == true);
// console.log(true == true);

// if(100){
//     console.log("yes is 100");
// }

// switch (num1) {
//     case 0:
//         console.log("is -0");
//         break;
//     case num1 < 10:
//         console.log("is less than 10");
//         break;
//     default:
//         console.log("the end");
//         break;
// }


// var num1 = 1; // global variable 
// let num2 = 2; // global variable
// const num3 = 100;

// // Blocked scope  -> strts with { and ends with }
// if (true) {
//     var num1 = 1111 // var makes the global variable
//     let num2 = 222 // let makes the blocked scope variable 
//     const num3 = "333"
// }

// console.log(num1, num2, num3);


// _________________Day 4 Function_____________

// DRY => DONOT REPEAT YOURSELF

// // [[1,2],[3,4],[4,5]]
// let num1 = 1
// let num2 = 2
// let num3 = num1 + num2

// let num4 = 4;
// let num5 = 5;

// // function (<parameter>,<parameter>)
// function calculateSum(value1, value2) {
//     return value1 + value2;
//     console.log("222");
// }

// // call/execute the function sum
// // calculateSum(num4, num5)

// // calculateSum(<attribute>,<attribute>)
// let summed = calculateSum(1, 2);
// console.log({ summed });


// ARROW FUNCTION
// const calculateDiff = (value1, value2) => value1 - value2 // single line arrow function
// const calculateDiff = (value1, value2) => {
//     let value3 =  value1 - value2; 
//     return value3 // single line arrow function
// }

// let diff = calculateDiff(10,5)
// console.log({diff});


// FUNCTIONAL SOCPE

var num1 = 1;
let num2 = 2
const num3 = 3;

if (true) {
    // block scoped, 
    var num1 = 111 // global scoped variable
    let num2 = 211 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 311 // blocked scope variable
}

function testScope() {
    // functional scoped, 
    var num1 = 1333333 // global scoped variable
    let num2 = 2333333 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 3333333 // blocked scope variable
}

let testScope2 = () => {
    // functional scoped, 
    var num1 = 1333333 // global scoped variable
    let num2 = 2333333 // blocked scope variable // cannot be accessed outside the scope
    const num3 = 3333333 // blocked scope variable
    console.log({ num1 });
    console.log({ num2 });
    console.log({ num3 });

}


// testScope();
testScope2();
console.log({ num1 });
console.log({ num2 });
console.log({ num3 });


// passing by value vs pass by reference
// loop

























































