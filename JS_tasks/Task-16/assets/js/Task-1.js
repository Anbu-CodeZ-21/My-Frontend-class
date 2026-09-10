let students = [];

let form = document.querySelector("form");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let cityInput = document.getElementById("city");
let data = document.getElementById("data");

form.addEventListener("submit",  (event)=> {
    event.preventDefault();

    let student = {
        name: nameInput.value,
        age: ageInput.value,
        city: cityInput.value
    };

    students.push(student);

    data.innerHTML = "";

    students.forEach((student)=>{
        let div = document.createElement("div");

        div.innerHTML = `
            <h3>Student Details</h3>
            <p><b>Name:</b> ${student.name}</p>
            <p><b>Age:</b> ${student.age}</p>
            <p><b>City:</b> ${student.city}</p>
            <hr>
        `;

        data.appendChild(div);
    });

   
});