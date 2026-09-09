let productName = document.getElementById("productName");
let price = document.getElementById("price");
let category = document.getElementById("category");

let form = document.getElementById("productForm");
let data = document.getElementById("data");

let products = [];

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let product = {
        name: productName.value,
        price: price.value,
        category: category.value
    };

    products.push(product);

    data.innerHTML = "";

    products.forEach((product) => {

        data.innerHTML += `
            <div>
                <h2>Product Details</h2>
                <p>Product Name: ${product.name}</p>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
                <hr>
            </div>
        `;

    });

    productName.value = "";
    price.value = "";
    category.value = "";
});