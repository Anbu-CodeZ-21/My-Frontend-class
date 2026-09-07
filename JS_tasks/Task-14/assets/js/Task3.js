let card = document.getElementById("card")
let btn = document.getElementById("btn")

let isvisible = true;

btn.addEventListener("click",()=>{
    isvisible = !isvisible

    if(isvisible){
        card.style.display = "block";
        btn.textContent ="hide";
    }else{
        card.style.display ="none";
        btn.textContent ="show";
    }
});