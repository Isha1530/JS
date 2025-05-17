// functions

// function myfun()
// {
//     console.log("Isha Prajapati");
// }
// function myfun(msg) {
//     console.log(msg);
// }

// myfun();
// myfun("Hello World");
// myfun("university");

// function sum(x,y)
// {
//     let s = x + y;
//     return s;
// }

// let r = sum(4,5);
// console.log(r);

// arrow functions
// const sum = (a,b) => {
//     let r = a+b;
//     return r;
// }
// let r = sum(4,5);
// console.log(r);

// const mul = (a,b) => {
//     let r = a*b;
//     return r;
// }
// let re = mul(4,5);
// console.log(re);

// const hellop = ()=>{
//     console.log("Hello World");
// }

// hellop();

// practice set
// function finfvowels(str) {
//     let c= 0 ;
//     for(let i = 0 ;i<str.length ; i++)
//     { 
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
//             c++;
//     }
//     return c;
// }
// let str = "Hello World";
// let r = finfvowels(str);
// console.log(r);

// forEach loop

// let arr = [1,2,3,4,5];
// arr.forEach((value) =>{
//     console.log(value);
// });

// practice set

// let arr = [1,2,3,4,5];

// arr.forEach((value) => {
//     console.log(value ** 2);
// });

// map function
// let arr = [1,2,3,4,5];

// let newArr = arr.map((value) => {
//     return value ** 2;
// });

// console.log(newArr);
// console.log(arr);

// filter function
// let arr = [1,2,3,4,5];

// let newArr = arr.filter((value) => {
//     return value % 2 === 0;
// });

// console.log(newArr);

// reduce function

// let arr = [1,2,3,4,5];

// let sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

// practice set

// let marks = [98, 56 ,12 ,45,96 ,90]

// let std = marks.filter((value)=>{
//     return value >= 90;
// });

// console.log(std);

let num = prompt("Enter a number");

let arr =[];

for(let i = 0 ; i<num ;i++)
{
    arr.push(i+1);
}

console.log(arr);

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log("Sum: ", sum);

let fac = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

console.log("Sum: ", fac);