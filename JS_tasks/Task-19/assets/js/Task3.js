async function getProducts() {

    try {

        let response = await fetch("https://dummyjson.com/products");

        let result = await response.json();

        let table = document.getElementById("productData");

        result.products.forEach(product => {

            table.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                   
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }
}

getProducts();