let card = document.getElementById("card");
let btn = document.getElementById("btn");

btn.addEventListener("click",()=> {
    card.classList.toggle("dark");
});