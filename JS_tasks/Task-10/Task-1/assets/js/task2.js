const add = (a, b) => {
    return a + b;
};

const square = (n) => {
    return n * n;
};
console.log("Explicit Return values");

console.log(add(10, 20));
console.log(square(5));

const addnum = (a, b) => a + b;

const squares = n => n * n;

console.log("Implicit Return values");

console.log(addnum(10, 20));
console.log(squares(5));