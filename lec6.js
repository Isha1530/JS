// alert("Hello, World!");

// console.log(window);

// get elements by id

// let heading = document.getElementById("heading");
// console.log(heading);

// get elements by class return collection of elements
// let items = document.getElementsByClassName("heading");
// console.log(items);
// console.dir(items);

// get elements by tag name return collection of elements
// let para = document.getElementsByTagName("p");

// get elements by query selector return first element that matches the selector
// let para = document.querySelector("p");
// console.dir(para);

// let allpara = document.querySelectorAll("p");
// console.dir(allpara);

// let heading = document.querySelector(".heading");
// console.dir(heading);

// let allheading= document.querySelectorAll(".heading");
// console.dir(allheading);

// let p = document.querySelector("#paragraph");
// console.dir(p);

// let tg = document.querySelector(".heading");
// console.log(tg.tagName);

// let it = document.querySelector("p");
// console.log(it.innerText);

// let div = document.querySelector("div");
// console.dir(div);



/*let heading = document.querySelector("h1");
console.dir(heading);

// tagName
console.log(heading.tagName);

// innerText
console.log(heading.innerText);

// innerHTML
console.log(heading.innerHTML);

// textContent
console.log(heading.textContent); */


// practice set

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText = h2.innerText + " How are you?";

// console.log(h2.innerText);

let div = document.querySelectorAll(".box");
console.log(div);
// div[0].innerText = "This is box 1";

// div[1].innerText = "This is box 2";

// div[2].innerText = "This is box 3";

for (let i = 0; i < div.length ; i++) {
    div[i].innerText = `This is box ${i + 1}`;
    console.log(div[i].innerText);
}