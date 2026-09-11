let loginStatus = localStorage.getItem("loggedIn");

if (loginStatus !== "true") {

    window.location.href = "login.html";

}

let userData = localStorage.getItem("user");

let user = JSON.parse(userData);

let data = document.getElementById("data");

data.innerHTML = `
    <h3>User Details</h3>
    <p><b>password:</b> ${user.password}</p>
    <p><b>Email:</b> ${user.email}</p>
`;

let logout = document.getElementById("logout");

logout.addEventListener("click", ()=> {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

});