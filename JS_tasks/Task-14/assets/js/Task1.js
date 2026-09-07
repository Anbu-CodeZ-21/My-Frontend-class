const title =document.getElementById("title")
const btn =document.getElementById("btn")

let isvisible = true;

btn.addEventListener("click",()=>{
    isvisible = !isvisible

    if(isvisible){
        title.style.display = "block";
        btn.textContent ="hide";
    }else{
        title.style.display = "none";
        btn.textContent ="show";
    }
});