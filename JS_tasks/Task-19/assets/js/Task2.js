async function getPosts() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        let posts = await response.json();

        let table = document.getElementById("postData");

        posts.forEach(post => {

            table.innerHTML += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.userId}</td>
                    <td>${post.title}</td>
                    
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }
}

getPosts();