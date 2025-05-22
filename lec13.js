// Fetch API
const URL = "https://catfact.ninja/fact";
let para = document.querySelector(".fact");
let btn = document.querySelector(".btn");

// const fetchData = async () => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data.fact);
//     para.innerText = data.fact;
// }

function fetchData(){
    fetch(URL,"").then(response => {
        return  response.json();
    }).then(data => {
        console.log(data);
        para.innerText = data.fact;
        
    })
}
btn.addEventListener("click", fetchData);

fetchData();