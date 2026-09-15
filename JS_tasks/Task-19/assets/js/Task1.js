async function getUsers() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        let table = document.getElementById("userData");

        users.forEach(user => {

            table.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }
}

getUsers();