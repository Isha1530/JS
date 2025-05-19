// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// btn1.addEventListener("click", () => {
//     alert("Button 1 clicked");
// });
// btn1.addEventListener("click", () => {
//     alert("Button 2 clicked");
// });

// let fn =  () => {
//     alert("Button 3 clicked");
// };
// btn1.addEventListener("click", fn);
// btn1.addEventListener("click", () => {
//     alert("Button 4 clicked");
// });

// btn2.ondblclick = (evt) => {
//     alert("Button 2 double-clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);

// }

// // event delegation
// btn1.removeEventListener("click", fn);

// practice set

let btn = document.getElementById("btn");
let cMode = "light";
let bd = document.querySelector("body");
btn.addEventListener("click", () => {
    if(cMode === "light") {
        cMode = "dark";
        bd.classList.add("dark");
        bd.classList.remove("light");
    } else {
        cMode = "light";
        bd.classList.add("light");
        bd.classList.remove("dark");
        
    }
    console.log(cMode);
});