let form = document.querySelector("form");

form.addEventListener("submit", (event)=> {

    event.preventDefault();

   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedData = localStorage.getItem("user");

    if (savedData === null) {
        alert("Please register first");
        return;
    }

   
    let user = JSON.parse(savedData);


    if (email === user.email && password === user.password) {

       
        localStorage.setItem("loggedIn", "true");

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

});