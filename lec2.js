// Comment
// this is single line comment
/* this is multi line comment
    used for more line comment */ 


// operators in js
// Airthmatic Option
// +, -, *, /, %, **, ++, --
// let a = 10;
// let b = 20;
// console.log(a + b); // 30
// console.log(a - b); // -10
// console.log(a * b); // 200
// console.log(a / b); // 0.5
// console.log(a % b); // 10
// console.log(a ** b); // 100000000000000000000
// console.log(a++); // 10
// console.log(a); // 11
// console.log(++a); // 12
// console.log(a--); // 12
// console.log(a); // 11
// console.log(--a); // 10
// console.log(a); // 10

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=
// let a = 10;
// console.log(a); // 10
// console.log(a += 5); // 15
// console.log(a -= 5); // 10
// console.log(a *= 5); // 50
// console.log(a /= 5); // 10
// console.log(a %= 5); // 0
// console.log(a **= 5); // 0

// comparison operators
// ==, ===, !=, !==, >, <, >=, <=
// let a = 10;
// let b = 20;
// console.log(a == b); // false
// console.log(a === b); // false
// console.log(a != b); // true
// console.log(a !== b); // true
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true

// a = 10;
// b = "10";
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(a != b); // false
// console.log(a !== b); // true
// console.log(a > b); // false
// console.log(a < b); // false
// console.log(a >= b); // true
// console.log(a <= b); // true

// a= 10;
// b= 10;
// console.log(a == b); // true
// console.log(a === b); // true
// console.log(a != b); // false
// console.log(a !== b); // false
// console.log(a > b); // false
// console.log(a < b); // false
// console.log(a >= b); // true
// console.log(a <= b); // true


// Logical Operators
// &&, ||, !
// let a = true;
// let b = false;
// console.log(a && b); // false
// console.log(a || b); // true
// console.log(!a); // false
// console.log(!b); // true

// &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// ||
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// !
// !true = false
// !false = true

// ternary operator
// let a = 10;
// let b = 20;
// let max = (a > b) ? a : b;
// console.log(max); // 20

// conditional statements
// if, else if, else

// let age = 20;
// if (age >= 6 && age <= 18) {
//     console.log("You are eligible to vote and drive");
//     console.log("You are adult");
// }
// else if (age <= 5 && age >= 0) {
//     console.log("You are not eligible to vote and drive");
//     console.log("You are child");
// }
// else {
//     console.log("You are not eligible to vote and drive");
//     console.log("You are elder");
//     console.log("You are not eligible to vote or drive");
// }

// switch case
// let day = 6;

// switch(day)
// {
//     case 1:
//         console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//         console.log("Wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//     break;
//     case 5:
//         console.log("Friday");
//     break;
//     case 6:
//         console.log("Saturday");
//     break
//     case 7:
//         console.log("Sunday");
//     break;
//     default:
//         console.log("Invalid day");
          
// }

// practice set
// let num = prompt("Enter the number: ");

// if (num % 5 == 0) {
//     console.log("Divisible by 5");
// }
// else {
//     console.log("Not divisible by 5");
// }

let score = prompt("Enter the score: ");

if(score >= 80 && score <=100)
    console.log("grade = A");
else if(score >= 70 && score < 80)
    console.log("grade = B");
else if(score >= 60 && score < 70)
    console.log("grade = C");
else if(score >= 50 && score < 60)
    console.log("grade = D");
else if(score >= 0 && score < 50)
    console.log("grade = F");
else
    console.log("Invalid score");