const createCounter = ()  => {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

console.log("Task-2");


counter();
counter();
counter();

