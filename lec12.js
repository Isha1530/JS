// console.log("one");
// console.log("two");

// setTimeout(function() {
//     console.log("three");
// }, 4000);

// console.log("four");
// console.log("five");

// Callbacks

// function sum(a,b){
//     console.log(a+b);
// }

// function calculate(a, b, callback){
//     callback(a, b);
// }

// // calculate(5, 10, sum);

// // another way
// calculate(5,10,(a,b)=>console.log(a+b));

// const hello = () => {
//     console.log("Hello World");
// }

// setTimeout(hello, 3000);

// callback hell
// function getdata(id,nextid){
//     setTimeout(function(){
//         console.log(`Data for id ${id} fetched`);
//         if(nextid){
//             nextid();
//     }
//     }, 2000);
// } 

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             console.log("wiating for data 4...");
//             getdata(4);
//         }           
//         )
//     })
// });

// Promises 
// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise 1 initiated");
//     // resolve("1");
//     // reject("error in Promise 1");
// });

// function getdata(id,nextid){
//     return new Promise((resolve, reject) =>{
//         setTimeout(function(){
//         console.log(`Data for id ${id} fetched`);
//         resolve("sucess")
//         if(nextid){
//             nextid();
//         }
//         }, 1000);
//     });
// } 
// let p1 =  getdata(1,()=>getdata(2))

// const getprom = (() => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise 1 initiated");
//         // resolve("1");
//         reject("error in Promise 1");
//     });
// });

// let prom = getprom();
// prom.then((res) =>
//     console.log("Promise 1 resolved",res)
// ).catch((err) =>
//     console.log("Promise 1 rejected", err)
// );

// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async1 function completed");
//             resolve("sucess");
//         }, 1000);
//     });
// }
// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async2 function completed");
//             resolve("sucess");
//         }, 1000);
//     });
// }
// promies chain
// async1().then((res) =>{
//     console.log("Promise 1 resolved", res);
//     async2().then((res) =>
//         console.log("Promise 2 resolved", res)
//     )
// }    
// )

// function getdata(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log(`Data for id ${id} fetched`);
//             resolve("sucess")

//         }, 1000);
//     });
// }

// getdata(1).then((res) =>{
//     console.log(res)
//     getdata(2).then((res) =>{
//         console.log(res)
// });
// });

// getdata(1).then((res) => {
//     return getdata(2);
// }).then((res) => {
//     return getdata(3);
// }).then((res) =>
//     console.log(res)
// )

// async-await

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data fetched");
//             resolve("sucess")
//         }, 1000);
//     });
// }
// async function hello() {
//     await getData();
//     await getData();
// }

// hello();

function getdata(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Data for id ${id} fetched`);
            resolve("sucess")

        }, 1000);
    });
}

// async function hello() {
//     await getdata(1);
//     await getdata(2);
//     console.log("done");
// }
// hello();

(async () => {
    await getdata(1);
    await getdata(2);
    console.log("done");
})();