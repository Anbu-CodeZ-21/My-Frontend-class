async function getComments() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/comments");

        let comments = await response.json();

        let table = document.getElementById("commentData");

        comments.forEach(comment => {

            table.innerHTML += `
                <tr>
                    <td>${comment.id}</td>
                   
                    <td>${comment.name}</td>
                    <td>${comment.email}</td>
                    
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }
}

getComments();