const myPromise = new Promise((resolve, reject) => {
    resolve("async function");
});

const myFunction = async () => {

    const result = await myPromise;

    console.log(result);
};

myFunction();

