const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 1000);
});

// then()
promise.then(data => console.log(data));

// async/await
async function getData() {
    let data = await promise;
    console.log(data);
}

getData();