// // Loops
// // Loops are used to execute a block of code repeatedly until a specified condition is met.
// // There are several types of loops in JavaScript:
// practice set

for(let i = 0 ; i<=100 ; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}

// practice set 2
let gameNumber = 50;
let userNum = prompt("Enter a number");

while(userNum != gameNumber)
{
    userNum = prompt("Enter a number");
}

console.log("You guessed the number!");

//strings
let str = "Hello, World!";
console.log(str.length); // Length of the string
console.log(str.charAt(0)); // First character
console.log(str.indexOf("o")); // Index of first occurrence of 'o'
console.log(str.lastIndexOf("o")); // Index of last occurrence of 'o'
console.log(str.slice(0, 5)); // Slice from index 0 to 5
console.log(str.replace("World", "JavaScript")); // Replace 'World' with 'JavaScript'
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.split(", ")); // Split string into an array
console.log(str.trim()); // Remove whitespace from both sides
console.log(str.includes("Hello")); // Check if string includes 'Hello'
console.log(str.startsWith("Hello")); // Check if string starts with 'Hello'
console.log(str.endsWith("!")); // Check if string ends with '!'
console.log(str.repeat(3)); // Repeat string 3 times
console.log(str.concat(" How are you?")); // Concatenate another string
console.log(str.substring(0, 5)); // Substring from index 0 to 5
console.log(str.substr(0, 5)); // Substring from index 0 with length 5
console.log(str.search("World")); // Search for 'World' and return index



// template literals
let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

// practice set 
let fullName = prompt("Enter your full name");

// let username = "@" + fullName + fullName.length;
let username = `@${fullName}${fullName.length}`;
console.log(username); // Output: @JohnDoe