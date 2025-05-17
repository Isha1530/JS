// ES6 - ECMAScript 2015

// Print statments
// console.log("Isha Prajapati");
// console.log("I'm a B.tech student");

// JS is dynamically typed
// it is case sensitive
// we not use reserve keywords as variable names
// Variables
// fname = "Isha ";
// lname = "Prajapati";
// age = 20;
// console.log(fname + lname + " is " + age + " years old.");
// //
// x = null
// y = undefined;
// console.log(x);
// console.log(y);
// // Double,float
// z = 10.10;
// console.log(z);
// // Boolean
// isStudent = true;
// console.log(isStudent);

// $isha = "Isha";
// _isha = "Isha"; 
// console.log($isha);
// console.log(_isha);

// types of cases
// camelCase - fullName mostly used
// PascalCase - FullName
// snake_case - full_name
// kebab-case - full-name

// key words
// var - old way of declaring variables var can be redeclared and updated global scope

// let - block scope let can be updated but not redeclared
// let age = 20; 
// age = 21; // can be changed
// console.log(age);


// // const - block scope, cannot be changed
// const pi = 3.14;
// // pi = 3.14159; // cannot be changed
// console.log(pi);


//Data types
// 1. Primitive data types
// 2. Non-primitive data types


// Primitive data types
// // 1. String
// let name = "isha";
// console.log(name);
// console.log(typeof name); // string
// // 2. Number
// let age = 20;
// console.log(age);
// console.log(typeof age); // number
// // 3. Boolean
// let isStudent = true;
// console.log(isStudent);
// console.log(typeof isStudent); // boolean
// // 4. Null
// let x = null;
// console.log(x);
// console.log(typeof x); // object
// // 5. Undefined
// let y;
// console.log(y);
// console.log(typeof y); // undefined
// // 6. Symbol
// let sym = Symbol("Isha");
// console.log(sym);
// console.log(typeof sym); // symbol
// // 7. BigInt
// let bigInt = BigInt(1234567890123456789012345678901234567890);
// console.log(bigInt);
// console.log(typeof bigInt); // bigint



// Non-primitive data types
// // 1. Object
// let person = {
//     name: "Isha",
//     age: 20,
//     isStudent: true,
//     hobbies: ["reading", "writing", "coding"],
//     address: {
//         city: "Ahmedabad",
//         state: "Gujarat"
//     }
// };
// console.log(person);
// console.log(person.name); // Isha
// console.log(person["age"]); // 20
// console.log(typeof person); // object

// // 2. Array
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// console.log(typeof fruits); // object

// // 3. Function
// function greet() {
//     console.log("Hello, Isha!");
// }
// greet();

// // 4. Date
// let date = new Date();
// console.log(date);
// console.log(typeof date); // object

// practice set
const product = {
    name: "Iphone",
    price: 1000,
    isAvailable: true,
    features: ["camera", "battery", "display"],
    specifications: {
        ram: "8GB",
        storage: "128GB"
    }
};
console.log(product);

const profile = {
    name: "Isha",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "writing", "coding"],
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
};