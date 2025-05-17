// Array

/*// 1. Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

numbers[0] = 10;
console.log(numbers[0]);
console.log(numbers); // Length of the array

// 2. Create an array of strings
let fruits = ["apple", "banana", "cherry"];

for (let f in fruits) {
    console.log(f);
}
// 3. Create an array of mixed data types
let mixedArray = [1, "apple", true, null];
// 4. Create an array of objects
let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];
// 5. Create an array of arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i in matrix) {
    console.log(matrix[i]);
    for (let j in matrix[i]) {
        console.log(matrix[i][j]);
    }
}
// 6. Create an array of booleans
let boolArray = [true, false, true, false];*/

// practice set 
// let marks = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i of marks) {
//     sum += i;
// }
// let av = sum / marks.length;
// console.log(sum);
// console.log(av);

// let price = [10, 20, 30, 40, 50];

// for (let i = 0; i < price.length; i++) {
//     let offer = price[i] * 0.1;
//     price[i] = price[i] - offer;
// }
// console.log(price);

//method of array
// let fruits = ["apple", "banana", "cherry"];

// // 1. push() - adds an element to the end of the array
// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// // 2. pop() - removes the last element from the array
// fruits.pop();
// console.log(fruits); // ["apple", "banana", "cherry"]

// // 3. toString() - converts the array to a string
// let fruitsString = fruits.toString();
// console.log(fruitsString); // "apple,banana,cherry"

// // 4. concat() - combines two or more arrays
// let vegetables = ["carrot", "broccoli"];
// let food = fruits.concat(vegetables);
// console.log(food); // ["apple", "banana", "cherry", "carrot", "broccoli"]

// // 5. unshift() - adds an element to the beginning of the array
// fruits.unshift("kiwi");
// console.log(fruits); // ["kiwi", "apple", "banana", "cherry"]

// // 6. shift() - removes the first element from the array
// fruits.shift();
// console.log(fruits); // ["apple", "banana", "cherry"]

// // 7. slice() - returns a shallow copy of a portion of an array
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // ["banana", "cherry"]

// // 8. splice() - changes the contents of an array by removing or replacing existing elements
// let removedFruits = fruits.splice(1, 1, "grape");
// console.log(removedFruits); // ["banana"]
// console.log(fruits); // ["apple", "grape", "cherry"]
// fruits.splice(1, 0, "banana");
// console.log(fruits); // ["apple", "banana", "grape", "cherry"]
// fruits.splice(2);
// console.log(fruits); // ["apple", "banana"]


// practice set

let companies = ["TCS", "Wipro", "Infosys", "Cognizant", "Accenture"];
companies.shift();
console.log(companies); // ["Wipro", "Infosys", "Cognizant", "Accenture"]
companies.splice(2,1,"IBM");
console.log(companies); // ["Wipro", "Infosys", "IBM", "Accenture"]
companies.push("HCL");
console.log(companies); // ["Wipro", "Infosys", "IBM", "Accenture", "HCL"]