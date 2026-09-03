const button = document.getElementById("changeBtn");
    const heading = document.getElementById("heading");

    button.addEventListener("click", function () {


      heading.textContent = "Heading Changed!";


      heading.style.color = "orange";

      heading.classList.add("newStyle");

    });