let name = document.getElementById("name");
let dpt = document.getElementById("dpt");
let salary = document.getElementById("salary");

let form = document.getElementById("employeeForm");
let data = document.getElementById("data");

let employees = [];

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let employee = {
        name: name.value,
        department: dpt.value,
        salary: salary.value
    };

    employees.push(employee);

    data.innerHTML = `
        <h2>Employee List</h2>

        <table border="1" cellpadding="10">
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </table>
    `;

    let table = data.querySelector("table");

    employees.forEach((employee) => {

        table.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            </tr>
        `;
    });

    name.value = "";
    dpt.value = "";
    salary.value = "";
});