const myPromise = new Promise((resolve, reject) => {

    resolve("This is promise handling");

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise completed");
    });