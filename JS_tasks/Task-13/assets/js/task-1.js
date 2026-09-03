const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
  const heading = document.getElementById("headline");

  heading.textContent = "Heading Changed!";
  heading.style.color="green"

});


button.addEventListener("click", function () {

  const paraa = document.querySelectorAll(".para");
  paraa.textContent = "change the text";

  paraa.forEach(function (para) {
    para.textContent = "This is changed paragraph";
  });

});